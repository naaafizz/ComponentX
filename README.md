<div align="center">

# ⚡ ComponentX

**The premium component & UI-theme skill for coding agents — installed with one command.**

*417 components · 14 semantic families · 23 design themes · auto-updating*

</div>

## 🚀 Install

**Windows (PowerShell):**

```powershell
irm https://raw.githubusercontent.com/naaafizz/ComponentX/main/install.ps1 | iex
```

**macOS / Linux (shell):**

```bash
curl -fsSL https://raw.githubusercontent.com/naaafizz/ComponentX/main/install.sh | sh
```

**Requirements:** [Node.js](https://nodejs.org) 18+ — that's it. No dependencies, no build step.

### What install does

1. Downloads the full library + CLI into **`~/.componentx`** (every file sha256-verified against a signed manifest).
2. Wires itself into your coding agents as a skill — **Claude Code, Cursor, Codex CLI, and Windsurf** are linked automatically (junction on Windows, symlink elsewhere).
3. Prints a one-line PATH setup so the `componentx` command works everywhere:

```powershell
# Windows — then restart your terminal
setx PATH "C:\Users\<you>\.componentx\bin;%PATH%"
```

```bash
# macOS / Linux — add to ~/.zshrc or ~/.bashrc
export PATH="$HOME/.componentx/bin:$PATH"
```

> Offline or behind a firewall? Install from a local checkout instead:
> `node bin/componentx.mjs install --source /path/to/ComponentX`

## 🔄 Keep it fresh

New components and themes ship constantly. One command syncs everything — new, changed, and removed files, hash-verified:

```bash
componentx update
```

Update is smart: it diffs your install against the GitHub manifest and downloads **only what changed** (usually a few kB, not the whole library). Restart your coding agent afterwards to pick up new skills.

## 🧰 CLI reference

| Command | What it does |
| :------ | :----------- |
| `componentx install` | Install the library into `~/.componentx` + link your agents |
| `componentx update` | Sync new / changed / removed files from GitHub |
| `componentx status` | Show how far your install drifted from GitHub |
| `componentx list` | Browse every component family and design theme |
| `componentx link` | Re-wire the skill into agent config folders |
| `componentx unlink` | Remove those agent links |
| `componentx doctor` | Validate the install, PATH, and agent integration |
| `componentx uninstall` | Remove `~/.componentx` entirely |

Every command accepts `--dir <path>` for a custom install location.

## 🧠 How your agent uses it

Once installed, the skill is available to every linked coding agent. The agent never scans the library — it classifies your request, opens one semantic folder, reads 1–3 files, and implements:

```text
"add a pricing card"   →  components/card/   →  1–3 candidates  →  working UI
```

The full discovery workflow lives in the **[Agent Skill](SKILL.md)**, and every entry is indexed in the **[Catalog](CATALOG.md)**.

## 🗂 What's inside

In this repository, everything the agent needs lives in **`skill/`**:

```text
skill/
├── components/     417 components in 14 semantic folders
│   ├── 3d/         3D, WebGL, and shader effects
│   ├── form/       inputs, fields, and complete forms
│   ├── button/     buttons, badges, and action triggers
│   └── …           animation · card · navigation · overlay · …
├── Designs/        23 complete design themes (premium visual languages)
├── SKILL.md        the agent skill — discovery workflow
├── CATALOG.md      every component, one deep link per file
└── README.md       the skill's own documentation
```

Installing flattens `skill/` into your machine — only the skill content, the CLI, and its metadata ever touch your disk (no installers, no build tools, no repo docs):

```text
~/.componentx/
├── components/     the 14 semantic folders
├── Designs/        the 23 themes
├── SKILL.md · CATALOG.md · README.md
├── componentx.json · MANIFEST.json
└── bin/            the componentx CLI (zero dependencies)
```

## 🛠 Maintainers: publishing updates

Adding components is a three-step loop:

```bash
# 1. drop new .md files into skill/components/<family>/ (or skill/Designs/)
# 2. rebuild the catalog + manifest
node _tools/build.mjs
# 3. commit and push — users get it on their next `componentx update`
git add -A && git commit -m "add <component>" && git push
```

`_tools/build.mjs --check` guards CI: it exits non-zero if the catalog or manifest is stale.

## 📄 Docs

- [**Agent Skill**](SKILL.md) — how agents discover and use components
- [**Catalog**](CATALOG.md) — the full index of every component and theme
- [**Changelog**](CHANGELOG.md) — what's new in each version

---

**ComponentX** · semantic, token-efficient components · MIT licensed · Built to ship ✨