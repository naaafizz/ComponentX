#!/usr/bin/env node
/*
 * bin/componentx.mjs — ComponentX CLI
 * ---------------------------------------------------------------------
 * Install, update, and manage ComponentX — the frontend component & UI
 * theme skill for coding agents. Zero runtime dependencies (stdlib only).
 *
 * Commands:
 *   install     install ComponentX into ~/.componentx (or --dir)
 *   update      sync new / changed / removed files from the GitHub manifest
 *   status      show how far the local install drifted from GitHub
 *   list        list every component family and design theme
 *   link        wire ComponentX into coding-agent skill folders
 *   unlink      remove those agent links
 *   doctor      validate the install and agent integration
 *   uninstall   remove ~/.componentx entirely
 *   --version / --help
 */

import * as fs from "node:fs";
import * as fsp from "node:fs/promises";
import path from "node:path";
import os from "node:os";
import crypto from "node:crypto";
import { get as httpGet } from "node:http";
import { get as httpsGet } from "node:https";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const DEFAULT_REPO = "naaafizz/ComponentX";
const DEFAULT_BRANCH = "main";
const DEFAULT_DIR_NAME = ".componentx";
const VERSION = "1.0.0";
const MAX_REDIRECTS = 6;
const CONCURRENCY = 8;

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(SCRIPT_DIR, "..");
const BUNDLED_PKG = readOptionalJson(path.join(REPO_ROOT, "componentx.json"));

/* ------------------------------------------------------------------ helpers */

function homeDir() {
  return process.env.HOME || os.homedir();
}

function readOptionalJson(file) {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch {
    return null;
  }
}

function readJson(file) {
  const data = readOptionalJson(file);
  if (data === null) throw new Error(`cannot read ${file}`);
  return data;
}

function writeJson(file, obj) {
  ensureDir(path.dirname(file));
  fs.writeFileSync(file, JSON.stringify(obj, null, 2) + "\n", "utf8");
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function say(msg) {
  console.log(msg);
}

function warn(msg) {
  console.error(`  ! ${msg}`);
}

function ok(msg) {
  console.log(`  ✔ ${msg}`);
}

function isoNow() {
  return new Date().toISOString().replace(/\.\d+Z$/, "Z");
}

function localize(rel) {
  return path.join(...rel.split("/"));
}

/* Where a manifest file lands inside the install dir. Older manifests had no
 * `install` field and stored install-relative paths in `path` — handle both. */
function installDest(file) {
  return path.join(...(file.install ?? file.path).split("/"));
}

function sha256Bytes(buf) {
  return crypto.createHash("sha256").update(buf).digest().toString("hex");
}

function sha256File(file) {
  return sha256Bytes(fs.readFileSync(file));
}

function copyTree(src, dst, ignore = []) {
  ensureDir(dst);
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    if (ignore.includes(entry.name)) continue;
    const from = path.join(src, entry.name);
    const to = path.join(dst, entry.name);
    if (entry.isDirectory()) {
      copyTree(from, to, ignore);
    } else {
      ensureDir(path.dirname(to));
      fs.copyFileSync(from, to);
    }
  }
}

/* -------------------------------------------------------------- HTTP helpers */

function httpFetch(url, redirects = 0) {
  return new Promise((resolve, reject) => {
    const getter = url.startsWith("https:") ? httpsGet : httpGet;
    const request = getter(
      url,
      { headers: { "User-Agent": "componentx-cli/1.0", accept: "application/octet-stream, text/plain" } },
      (res) => {
        const code = res.statusCode;
        if (code >= 300 && code < 400 && res.headers.location && redirects < MAX_REDIRECTS) {
          try {
            res.drain();
          } catch {
            /* best effort */
          }
          resolve(httpFetch(new URL(res.headers.location, url).toString(), redirects + 1));
          return;
        }
        if (code !== 200) {
          try {
            res.drain();
          } catch {
            /* best effort */
          }
          reject(new Error(`HTTP ${code} — ${url}`));
          return;
        }
        const chunks = [];
        res.on("data", (chunk) => chunks.push(chunk));
        res.on("end", () => resolve(Buffer.concat(chunks)));
        res.on("error", reject);
      }
    );
    request.on("error", reject);
    request.end();
  });
}

async function httpText(url) {
  return (await httpFetch(url)).toString("utf8");
}

async function httpDownload(url, file) {
  const bytes = await httpFetch(url);
  ensureDir(path.dirname(file));
  const tmp = `${file}.part-${process.pid}`;
  fs.writeFileSync(tmp, bytes);
  fs.renameSync(tmp, file);
}

function rawBase() {
  return (process.env.COMPONENTX_RAW_BASE || "https://raw.githubusercontent.com").replace(/\/+$/, "");
}

function rawUrl(repo, branch, rel) {
  const encoded = rel.split("/").map((seg) => encodeURIComponent(seg)).join("/");
  return `${rawBase()}/${repo}/${branch}/${encoded}`;
}

function remoteManifestUrl(repo, branch) {
  return rawUrl(repo, branch, "MANIFEST.json");
}

/* ------------------------------------------------------------------- config */

function configFile(dir) {
  return path.join(dir, "config.json");
}

function readConfig(dir) {
  return readOptionalJson(configFile(dir));
}

function writeConfig(dir, cfg, manifest) {
  cfg.version = manifest.version;
  cfg.updatedAt = isoNow();
  writeJson(configFile(dir), cfg);
}

/* ---------------------------------------------------------- download worker */

async function pool(jobs, worker) {
  const queue = [...jobs];
  let cursor = 0;
  async function runOne() {
    while (cursor < queue.length) {
      const job = queue[cursor];
      cursor += 1;
      await worker(job);
    }
  }
  await Promise.all(
    Array.from({ length: Math.max(1, Math.min(CONCURRENCY, jobs.length)) }, runOne)
  );
}

async function downloadManifestFiles(manifest, dir, repo, branch) {
  const special = {};
  const jobs = [];
  for (const file of manifest.files) {
    const dest = path.join(dir, installDest(file));
    if (file.path === "bin/componentx.mjs") {
      special.next = path.join(dir, ".update", "componentx.next.mjs");
      jobs.push({ file, dest: special.next, pending: true });
    } else {
      jobs.push({ file, dest, pending: false });
    }
  }
  await pool(jobs, async ({ file, dest, pending }) => {
    const url = rawUrl(repo, branch, file.path);
    if (!pending && fs.existsSync(dest) && sha256File(dest) === file.sha256) return;
    await httpDownload(url, dest);
  });
  return special;
}

/* ----------------------------------------------------------------- sync diff */

function diffManifests(local, remote) {
  const remoteMap = new Map(remote.files.map((f) => [f.path, f]));
  const localMap = new Map((local?.files ?? []).map((f) => [f.path, f]));
  const toFetch = [];
  const toRemove = [];
  for (const file of remote.files) {
    const has = localMap.get(file.path);
    if (!has || has.sha256 !== file.sha256) toFetch.push(file);
  }
  for (const file of localMap.values()) {
    if (!remoteMap.has(file.path)) toRemove.push(file);
  }
  return { toFetch, toRemove, remoteMap };
}

function verifyLocalFiles(dir, manifest) {
  let okCount = 0,
    bad = 0;
  for (const file of manifest.files) {
    const abs = path.join(dir, installDest(file));
    if (fs.existsSync(abs) && sha256File(abs) === file.sha256) okCount += 1;
    else bad += 1;
  }
  return { okCount, bad };
}

/* ------------------------------------------------------------------- shims */

function installShims(dir) {
  const binDir = path.join(dir, "bin");
  ensureDir(binDir);
  fs.writeFileSync(
    path.join(binDir, "componentx.cmd"),
    "@echo off\r\nset \"CX_HOME=%~dp0..\"\r\nnode \"%CX_HOME%\\bin\\componentx.mjs\" %*\r\n",
    "utf8"
  );
  fs.writeFileSync(
    path.join(binDir, "componentx"),
    "#!/bin/sh\nCX_HOME=\"$(CDPATH= cd -- \"$(dirname -- \"$0\")/..\" && pwd)\"\nexec node \"$CX_HOME/bin/componentx.mjs\" \"$@\"\n",
    "utf8"
  );
  if (process.platform !== "win32") {
    try {
      execFileSync("/bin/chmod", ["+x", path.join(binDir, "componentx")]);
    } catch {
      /* not fatal */
    }
  }
}

/* ----------------------------------------------------------- lazy self-update */

function selfUpdate(dir) {
  const pending = path.join(dir, ".update", "componentx.next.mjs");
  if (!fs.existsSync(pending)) return;
  const dest = path.join(dir, "bin", "componentx.mjs");
  try {
    fs.renameSync(pending, dest);
    say("  ✔ CLI refreshed to the latest version");
  } catch {
    warn("CLI refresh is staged — it will apply on the next command.");
  }
  try {
    fs.rmSync(path.join(dir, ".update"), { recursive: true, force: true });
  } catch {
    /* best effort */
  }
}

function isInstalledDir(dir) {
  return fs.existsSync(path.join(dir, "componentx.json")) && fs.existsSync(path.join(dir, "MANIFEST.json"));
}

/* ---------------------------------------------------------------- flag parser */

function parseFlags(rawArgs) {
  const flags = {};
  for (let i = 0; i < rawArgs.length; i += 1) {
    const arg = rawArgs[i];
    if (!arg.startsWith("--")) continue;
    const eq = arg.indexOf("=");
    const key = (eq >= 0 ? arg.slice(2, eq) : arg.slice(2)).replace(/-/g, "_");
    flags[key] = eq >= 0 ? arg.slice(eq + 1) : rawArgs[i + 1]?.startsWith("--") ? true : rawArgs[++i] ?? true;
  }
  return flags;
}

function resolveDir(flags) {
  return path.resolve(
    (flags.dir ?? (process.env.COMPONENTX_DIR || path.join(homeDir(), DEFAULT_DIR_NAME))).toString()
  );
}

function requireInstall(dir) {
  if (!isInstalledDir(dir)) {
    warn(`${dir} is not a ComponentX install. Run \`componentx install\` first.`);
    process.exit(1);
  }
}

function fmtBytes(n) {
  return n >= 1024 * 1024 ? `${(n / 1024 / 1024).toFixed(1)} MB` : n >= 1024 ? `${(n / 1024).toFixed(0)} kB` : `${n} B`;
}

/* -------------------------------------------------------------------- install */

async function cmdInstall(args) {
  const flags = parseFlags(args);
  const dir = resolveDir(flags);
  const repo = (flags.repo ?? process.env.COMPONENTX_REPO ?? ((BUNDLED_PKG?.repository) || DEFAULT_REPO))
    .replace("https://github.com/", "");
  const branch = (flags.branch ?? process.env.COMPONENTX_BRANCH ?? DEFAULT_BRANCH).replace(/^refs\/heads\//, "");
  const source = flags.source;

  if (fs.existsSync(dir) && fs.readdirSync(dir).length > 0 && !flags.force) {
    warn(`${dir} already exists. Re-run with --force to overwrite, or use \`componentx update\`.`);
    process.exit(1);
  }

  say("");
  say(`  ⚡ ComponentX ${VERSION} — installing`);
  say(`  ─────────────────────────────────────────────`);
  say(`  target   ${dir}`);
  say(`  source   ${source ? `local folder ${path.resolve(source)}` : `${repo} @ ${branch}`}`);
  say("");

  ensureDir(dir);
  let manifest;
  if (source) {
    const from = path.resolve(source);
    if (!fs.existsSync(path.join(from, "componentx.json"))) {
      warn(`--source is not a ComponentX checkout: ${from}`);
      process.exit(1);
    }
    manifest = readJson(path.join(from, "MANIFEST.json"));
    // copy only the install scope (skill content + CLI) — never the whole repo
    for (const file of manifest.files) {
      const src = path.join(from, ...file.path.split("/"));
      const dest = path.join(dir, installDest(file));
      ensureDir(path.dirname(dest));
      fs.copyFileSync(src, dest);
    }
  } else {
    say(`  resolving manifest ${repo}@${branch} …`);
    manifest = JSON.parse(await httpText(remoteManifestUrl(repo, branch)));
    say(`  downloading ${manifest.counts.components} components + ${manifest.counts.themes} themes …`);
    try {
      await downloadManifestFiles(manifest, dir, repo, branch);
      // bin/componentx.mjs is staged to .update/ so a running CLI is never
      // overwritten mid-flight — but a fresh install needs it in place too.
      const staged = path.join(dir, ".update", "componentx.next.mjs");
      if (fs.existsSync(staged)) {
        fs.copyFileSync(staged, path.join(dir, "bin", "componentx.mjs"));
        fs.rmSync(path.join(dir, ".update"), { recursive: true, force: true });
      }
    } catch (err) {
      await fsp.rm(dir, { recursive: true, force: true }).catch(() => {});
      throw err;
    }
  }

  writeJson(path.join(dir, "MANIFEST.json"), manifest);
  const cfg = {
    name: manifest.name,
    schema: manifest.schema,
    version: manifest.version,
    repository: repo,
    branch,
    source: source ? "local" : "github",
    installedAt: isoNow(),
  };
  writeConfig(dir, cfg, manifest);
  installShims(dir);

  const links = await cmdLink(dir, args, true);

  say("  ─────────────────────────────────────────────");
  ok(`installed ComponentX v${manifest.version}`);
  say(`  ${manifest.counts.components} components · ${manifest.counts.families} families · ${manifest.counts.themes} themes · ${manifest.counts.files} files`);
  say(`  agent links: ${links.map((l) => `${l.name}=${l.status}`).join(" · ")}`);
  say("");
  say("  next steps");
  if (process.platform === "win32") {
    say(`    setx PATH \"${path.join(dir, "bin")};%PATH%\"  &&  restart your terminal`);
  } else {
    say(`    export PATH=\"$HOME/.componentx/bin:$PATH\"   # add to ~/.zshrc or ~/.bashrc`);
  }
  say("    componentx update   → keep the library fresh");
  say("    componentx list     → browse the library");
  say("    componentx doctor   → verify the setup");
  say("");
}

/* ---------------------------------------------------------------------- update */

async function cmdUpdate(args) {
  const flags = parseFlags(args);
  const dir = resolveDir(flags);
  if (!fs.existsSync(dir)) {
    warn(`${dir} does not exist — run \`componentx install\` first.`);
    process.exit(1);
  }
  selfUpdate(dir);
  const cfg = readConfig(dir) ?? {};
  if (!cfg.repository) {
    warn("this install has no remote repository — reinstall from GitHub with `componentx install --force`.");
    process.exit(1);
  }
  const repo = cfg.repository;
  const branch = cfg.branch || DEFAULT_BRANCH;

  say(`  ⚡ ComponentX update — ${repo} @ ${branch}`);
  let remote;
  try {
    remote = JSON.parse(await httpText(remoteManifestUrl(repo, branch)));
  } catch (err) {
    warn(`cannot reach ${remoteManifestUrl(repo, branch)} — ${err.message}`);
    process.exit(1);
  }
  const local = readOptionalJson(path.join(dir, "MANIFEST.json"));
  const { toFetch, toRemove } = diffManifests(local, remote);

  if (toFetch.length === 0 && toRemove.length === 0) {
    ok(`already up to date — v${remote.version}`);
    return;
  }
  const bytes = toFetch.reduce((n, f) => n + (f.size ?? 0), 0);
  say(`  ${toFetch.length} changed/new · ${toRemove.length} removed · ${fmtBytes(bytes)}`);

  // Remove obsolete files BEFORE downloading: an older install may keep a file
  // (e.g. a root-level README.md) at the same install path a new file maps to.
  for (const file of toRemove) {
    const abs = path.join(dir, installDest(file));
    try {
      if (fs.existsSync(abs)) fs.rmSync(abs, { force: true });
    } catch {
      /* keep going */
    }
  }
  await downloadManifestFiles(remote, dir, repo, branch);

  if (fs.existsSync(path.join(dir, "components"))) {
    for (const family of fs.readdirSync(path.join(dir, "components"))) {
      try {
        fs.rmdirSync(path.join(dir, "components", family)); // no-op unless empty
      } catch {
        /* not empty — fine */
      }
    }
  }

  writeJson(path.join(dir, "MANIFEST.json"), remote);
  writeConfig(dir, cfg, remote);
  ok(`updated to ComponentX v${remote.version}`);
  say(`  restart your coding agent to pick up new skills.`);
}

/* ---------------------------------------------------------------------- status */

async function cmdStatus(args) {
  const flags = parseFlags(args);
  const dir = resolveDir(flags);
  requireInstall(dir);
  selfUpdate(dir);
  const cfg = readConfig(dir) ?? {};
  if (!cfg.repository) {
    warn("install has no remote repository — reinstall from GitHub with `componentx install --force`.");
    process.exit(1);
  }
  const local = readJson(path.join(dir, "MANIFEST.json"));
  try {
    const remote = JSON.parse(await httpText(remoteManifestUrl(cfg.repository, cfg.branch || DEFAULT_BRANCH)));
    const { toFetch, toRemove } = diffManifests(local, remote);
    const bytes = toFetch.reduce((n, f) => n + (f.size ?? 0), 0);
    say(`  ComponentX · installed v${cfg.version ?? local.version} → remote v${remote.version}`);
    say(`  ${toFetch.length} changed/new · ${toRemove.length} removed · ${fmtBytes(bytes)} to download`);
    if (toFetch.length === 0 && toRemove.length === 0) ok("up to date");
    if (flags.deep) {
      const { okCount, bad } = verifyLocalFiles(dir, local);
      say(`  integrity: ${okCount}/${local.counts.files} files verified · ${bad} mismatched`);
    }
  } catch (err) {
    warn(`cannot reach the remote manifest — ${err.message}`);
    process.exit(1);
  }
}

/* ------------------------------------------------------------------------ list */

async function cmdList(args) {
  const flags = parseFlags(args);
  const dir = resolveDir(flags);
  requireInstall(dir);
  const manifest = readJson(path.join(dir, "MANIFEST.json"));
  say("");
  say(`  ⚡ ComponentX ${manifest.name} v${manifest.version}`);
  say(`  ${manifest.counts.components} components · ${manifest.counts.families} families · ${manifest.counts.themes} themes`);
  say("");
  for (const [family, count] of Object.entries(manifest.families)) {
    say(`  components/${family.padEnd(14)} ${String(count).padStart(3)}`);
  }
  say("");
  say("  Designs/  (UI themes)");
  if (fs.existsSync(path.join(dir, "Designs"))) {
    const themes = fs
      .readdirSync(path.join(dir, "Designs"))
      .filter((n) => n.toLowerCase().endsWith(".md"))
      .sort();
    for (const t of themes) say(`    ${t.replace(/\.md$/i, "")}`);
  }
  say("");
}
/* ------------------------------------------------------------------------ link */

function agentMap(dir) {
  const pkg = readOptionalJson(path.join(dir, "componentx.json")) ?? BUNDLED_PKG ?? {};
  return (pkg.agents && typeof pkg.agents === "object") ? pkg.agents : {};
}

async function cmdLink(dir, args, silent) {
  const flags = parseFlags(args ?? []);
  const links = [];
  for (const [name, rel] of Object.entries(agentMap(dir))) {
    const abs = path.join(homeDir(), ...rel.split("/"));
    if (fs.existsSync(abs)) {
      links.push({ name, abs, status: "already linked" });
      continue;
    }
    ensureDir(path.dirname(abs));
    let linked = false;
    if (process.platform === "win32") {
      const cmd = process.env.COMSPEC || "C:\\Windows\\System32\\cmd.exe";
      try {
        execFileSync(cmd, ["/c", "mklink", "/J", abs, dir], { encoding: "utf8" });
        links.push({ name, abs, status: "linked (junction)" });
        linked = true;
      } catch {
        /* fall through to copy */
      }
    } else {
      try {
        execFileSync("/bin/ln", ["-s", dir, abs]);
        links.push({ name, abs, status: "linked (symlink)" });
        linked = true;
      } catch {
        /* fall through to copy */
      }
    }
    if (!linked) {
      try {
        copyTree(dir, abs, ["config.json", ".update"]);
        links.push({ name, abs, status: "linked (copy)" });
      } catch (err) {
        links.push({ name, abs, status: `failed — ${err.message}` });
      }
    }
  }
  if (!silent) {
    say("  agent skill links");
    for (const l of links) say(`    ${l.name.padEnd(10)} ${l.status}  → ${l.abs}`);
  }
  return links;
}

/* ---------------------------------------------------------------------- unlink */

async function cmdUnlink(args) {
  const flags = parseFlags(args);
  const dir = resolveDir(flags);
  for (const [name, rel] of Object.entries(agentMap(dir))) {
    const abs = path.join(homeDir(), ...rel.split("/"));
    if (!fs.existsSync(abs)) continue;
    try {
      if (process.platform === "win32") {
        // plain rmdir removes a junction without following it
        const cmd = process.env.COMSPEC || "C:\\Windows\\System32\\cmd.exe";
        execFileSync(cmd, ["/c", "rmdir", abs], { encoding: "utf8" });
      } else {
        fs.rmSync(abs, { force: true });
        if (fs.existsSync(abs)) fs.rmSync(abs, { recursive: true, force: true });
      }
      ok(`unlinked ${name} (${abs})`);
    } catch {
      try {
        fs.rmSync(abs, { recursive: true, force: true });
        ok(`unlinked ${name} (${abs})`);
      } catch (err) {
        warn(`could not remove ${abs} — ${err.message}`);
      }
    }
  }
  say("");
}

/* ---------------------------------------------------------------------- doctor */

async function cmdDoctor(args) {
  const flags = parseFlags(args);
  const dir = resolveDir(flags);
  const [major, minor] = process.version.slice(1).split(".");
  say("  ⚡ ComponentX doctor");
  say(`  node           v${major}.${minor}${process.platform === "win32" ? " (Windows)" : ""}`);
  say(`  install dir    ${dir}  ${fs.existsSync(dir) ? "✓" : "✗ missing — run `componentx install`"}`);
  if (!fs.existsSync(dir)) process.exit(1);
  const cfg = readConfig(dir) ?? {};
  const manifest = readOptionalJson(path.join(dir, "MANIFEST.json"));
  if (!manifest) {
    warn("MANIFEST.json missing — run `componentx update` or reinstall.");
    process.exit(1);
  }
  say(`  version        v${cfg.version ?? "?"}  · repository ${cfg.repository ?? "(local)"}@${cfg.branch ?? "-"}`);
  if (flags.deep) {
    const { okCount, bad } = verifyLocalFiles(dir, manifest);
    say(`  integrity      ${okCount}/${manifest.counts.files} verified · ${bad} mismatched`);
  } else {
    say(`  integrity      skip (use --deep to verify ${manifest.counts.files} file hashes)`);
  }
  const shim = process.platform === "win32"
    ? path.join(dir, "bin", "componentx.cmd")
    : path.join(dir, "bin", "componentx");
  say(`  CLI shim       ${fs.existsSync(shim) ? "✓ " + shim : "✗ missing"}`);
  const pathHit = (process.env.PATH ?? "")
    .split(path.delimiter)
    .some((p) => p.trim().toLowerCase() === path.join(dir, "bin").toLowerCase());
  say(`  on PATH        ${pathHit ? "✓" : "✗ add " + path.join(dir, "bin") + " to your PATH"}`);
  for (const [name, rel] of Object.entries(agentMap(dir))) {
    const abs = path.join(homeDir(), ...rel.split("/"));
    say(`  agent ${name.padEnd(9)}  ${fs.existsSync(abs) ? "✓ " + abs : "✗ not linked — run `componentx link`"}`);
  }
  say("");
}
/* -------------------------------------------------------------------- uninstall */

async function cmdUninstall(args) {
  const flags = parseFlags(args);
  const dir = resolveDir(flags);
  if (!fs.existsSync(dir)) {
    warn(`${dir} does not exist — nothing to uninstall.`);
    process.exit(1);
  }
  await cmdUnlink({ ...flags, dir });
  try {
    fs.rmSync(dir, { recursive: true, force: true });
    ok(`removed ${dir}`);
  } catch (err) {
    warn(`could not fully remove ${dir} — ${err.message}`);
    process.exit(1);
  }
}

/* ------------------------------------------------------------------- help/meta */

function help() {
  say(`
  ⚡ ComponentX — frontend components & UI themes for coding agents

  usage:  componentx <command> [options]

  install    install into ~/.componentx   [--dir path] [--repo owner/repo]
                                      [--branch main] [--source <folder>] [--force]
  update     sync new / changed / removed files from GitHub (manifest-driven)
  status     show local vs remote drift            [--deep]
  list       browse every component family and theme
  link       wire ~/.componentx into agent skill folders (claude, cursor, codex, windsurf)
  unlink     remove those agent links
  doctor     validate the install and agent integration  [--deep]
  uninstall  remove ~/.componentx entirely

  env:     COMPONENTX_DIR · COMPONENTX_REPO · COMPONENTX_BRANCH
  docs:    https://github.com/${DEFAULT_REPO}
`);
}

function version() {
  say(`${BUNDLED_PKG?.name ?? "ComponentX"} ${BUNDLED_PKG?.version ?? VERSION} — ${BUNDLED_PKG?.repository ?? DEFAULT_REPO}`);
}

/* ----------------------------------------------------------------------- main */

const [command, ...restArgs] = process.argv.slice(2);

async function main() {
  try {
    switch (command) {
      case undefined:
      case "--help":
      case "-h":
      case "help":
        return help();
      case "--version":
      case "-v":
      case "version":
        return version();
      case "install":
        return await cmdInstall(restArgs);
      case "update":
        return await cmdUpdate(restArgs);
      case "status":
        return await cmdStatus(restArgs);
      case "list":
      case "ls":
        return await cmdList(restArgs);
      case "link":
        return await cmdLink(resolveDir(parseFlags(restArgs)), restArgs, false);
      case "unlink":
        return await cmdUnlink(restArgs);
      case "doctor":
        return await cmdDoctor(restArgs);
      case "uninstall":
        return await cmdUninstall(restArgs);
      default:
        warn(`unknown command \`${command}\`. Run \`componentx --help\`.`);
        process.exit(1);
    }
  } catch (err) {
    warn(err.message ?? String(err));
    process.exit(1);
  }
}

await main();