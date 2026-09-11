import * as fs from "node:fs";
import crypto from "node:crypto";
import os from "node:os";

const tmp = process.env.TEMP;
const local = `${tmp}\\componentx-test-install`;
const repo = process.argv[1];

function sha(file) {
  const h = crypto.createHash("sha256").update(fs.readFileSync(file));
  return h.digest().toString("hex");
}

const lm = JSON.parse(fs.readFileSync(`${local}\\MANIFEST.json`, "utf8"));
const rm = JSON.parse(fs.readFileSync(`${repo}\\MANIFEST.json`, "utf8"));
const lCat = lm.files.find((f) => f.path === "CATALOG.md");
const rCat = rm.files.find((f) => f.path === "CATALOG.md");
const out = [];
out.push(`local  manifest CATALOG sha ${lCat ? lCat.sha256 : "?"}`);
out.push(`remote manifest CATALOG sha ${rCat ? rCat.sha256 : "?"}`);
out.push(`local  CATALOG.md file sha   ${sha(`${local}\\CATALOG.md`)}`);
out.push(`remote CATALOG.md file sha   ${sha(`${repo}\\CATALOG.md`)}`);
out.push(`local manifest version ${lm.version} files ${lm.counts.files}`);
out.push(`remote manifest version ${rm.version} files ${rm.counts.files}`);
process.stdout.write(out.join("\n") + "\n");