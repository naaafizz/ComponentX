<div align="center">

# ⚡ ComponentX

**A premium, semantic, token-efficient component library for coding agents.**

*417 hand-curated components · 14 semantic families · 23 design themes · 4 quality tiers*

</div>

ComponentX is a next-generation component library built for **coding agents** — and for the humans who steer them. Every component ships as a self-contained Markdown file that an IDE or agent can route to in milliseconds: no giant catalogs to scan, no irrelevant walls of code to filter.

## ✨ Highlights

- **Type-first organization** — components live in semantic folders (`button/`, `card/`, `form/`, …), never in version-numbered buckets.
- **417 components & counting** — from lightweight utilities to full 3D showcase builds.
- **23 design themes** — complete premium visual languages in [Designs/](Designs/) to port into any brand.
- **Quality as metadata** — every file declares a tier in its frontmatter: `lightweight`, `standard`, `advanced`, or `showcase`.
- **Implementation-first docs** — the complete source is preserved inside every file, ready to read, port, and adapt.
- **Token-efficient by design** — the [Agent Skill](SKILL.md) and the [Catalog](CATALOG.md) keep context small: *classify → search → shortlist → read → implement*.

## 🗂 Structure

```text
components/
├── 3d/            25 components → 3D, WebGL, and shader effects
├── animation/     32 components → motion, hover, and scroll effects
├── background/    24 components → gradients, beams, particles, and backdrops
├── button/        76 components → buttons, badges, and action triggers
├── card/          16 components → cards and content containers
├── data-display/  17 components → tables, calendars, charts, and progress
├── feedback/       4 components → alerts, toasts, and validation states
├── form/         135 components → inputs, fields, and complete forms
├── layout/         7 components → grids, spacing, and page structure
├── loader/         7 components → spinners, skeletons, and loading states
├── media/         13 components → carousels, galleries, and media players
├── navigation/    35 components → navbars, menus, sidebars, and tabs
├── overlay/       10 components → modals, dialogs, popovers, and tooltips
└── text/          16 components → typography, text effects, and editors

Designs/           23 themes → premium UI style references (Linear, Dub, …)
```

## 🎨 Quality tiers

| Tier | Meaning |
| :--- | :------ |
| `lightweight` | Minimal footprint, zero-friction drop-in |
| `standard` | Balanced, production-ready default |
| `advanced` | Richer composition and interaction |
| `showcase` | High-impact, animated, 3D, or dependency-heavy |

## 🧭 Agent workflow

**type → filename search → 1–3 candidates → read → implement**

1. Infer the component type from the request.
2. Open only `components/<type>/`.
3. Search filenames and tags (the [catalog](CATALOG.md) lists every file).
4. Shortlist 1–3 candidates.
5. Read only those files.
6. Inspect dependencies and imports, then adapt.

## 🛠 Quick start

The [catalog](CATALOG.md) is the front door: every entry deep-links to a complete component file. Each file ships an **agent contract**, an **overview** and **highlights**, the **full source implementation**, and guidance — so both agents and humans can move from request to working UI in one hop.

### Example — a button

```text
components/button/button.md   → the classic Button (lightweight)
components/button/*.md        → the full button family to shortlist from
```

## 🛡 Project safety

ComponentX respects the host project. Preserve its framework, styling conventions, dependencies, and file structure unless the task explicitly asks to change them. Components document their own dependencies — check imports before you wire anything in.

## 📄 Files

- [**Catalog**](CATALOG.md) — every component, one link per file
- [**Agent Skill**](SKILL.md) — the discovery workflow for coding agents
- [**README**](README.md) — you are here

---

**ComponentX** · semantic, token-efficient components · Built to ship ✨
