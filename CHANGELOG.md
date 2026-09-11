# Changelog

All notable changes to ComponentX are documented here.
The project adheres to [Semantic Versioning](https://semver.org).

## [1.0.0] — 2026-09-12

### Added
- **417 components** across 14 semantic families (`3d`, `animation`, `background`,
  `button`, `card`, `data-display`, `feedback`, `form`, `layout`, `loader`,
  `media`, `navigation`, `overlay`, `text`), each with `library` / `quality`
  frontmatter and four quality tiers.
- **23 design themes** in `Designs/` — complete visual languages for premium UI.
- **CLI (`componentx`)** — zero-dependency Node.js:
  `install` · `update` · `status` · `list` · `link` · `unlink` · `doctor` · `uninstall`.
- Manifest-driven updates: every file sha256-verified against `MANIFEST.json`;
  new, changed, and removed files sync in one `componentx update` run.
- Agent integration: automatic skill links for Claude Code, Cursor, Codex CLI,
  and Windsurf (junction on Windows, symlink elsewhere).
- One-line installers: `install.sh` (curl | sh) and `install.ps1` (irm | iex).

[1.0.0]: https://github.com/naaafizz/ComponentX/releases/tag/v1.0.0
