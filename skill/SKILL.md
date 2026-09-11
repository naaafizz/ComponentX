<div align="center">

# ⚡ ComponentX · Agent Skill

**A searchable library of 417 ready-to-adapt UI components and 23 design themes for coding agents.**

</div>

## 1. What this is

This folder is a **component library written for agents, in Markdown**. Every file is self-contained: metadata, a short overview, and the **complete working source code**. You never need the internet, a package manager, or anything outside this folder to deliver a working UI.

```text
components/   417 components in 14 semantic folders  (button, form, card, …)
Designs/       23 design themes — complete premium visual languages
CATALOG.md     every file, one deep link each — the index
```

**A component file contains, in order:**

| Section | What to do with it |
| :------ | :----------------- |
| frontmatter (`name`, `quality`, `library`) | Route and filter — never read the body yet |
| overview + highlights | Confirm this is the right candidate |
| agent contract | States what the component expects (props, dependencies, styling system) |
| full source implementation | The code to port into the host project |

## 2. When to use this skill

Use it whenever the user asks for, or the task requires, **any UI building block or visual style**:

- "add a login form / pricing table / navbar / modal / toast"
- "make a hero section with an animated gradient background"
- "add a 3D card hover effect"
- "make it look like Linear / Apple / Vercel" → **Designs/ theme, see §6**

Do **not** use it for: logic-only tasks, API work, state management without UI, or when the user provides their own complete design.

## 3. The workflow — always the same shape

> **Classify → Enter one folder → Search → Shortlist 1–3 → Read → Adapt**

1. **Classify** the request into one type (§4). Uncertain? Pick the most specific match.
2. **Enter** only `components/<type>/`. Never browse siblings "just in case".
3. **Search** filenames in that folder (and tags in the [catalog](CATALOG.md) if filenames aren't enough). Frontmatter tells you quality without opening the file.
4. **Shortlist 1–3** candidates. Prefer the lowest quality tier that satisfies the request (§5).
5. **Read** only those files — overview to confirm fit, then the source.
6. **Adapt** (§7): port the code into the host project's framework, styling, and file structure.

**Worked example** — user: *"add a pricing section with three tiers and a highlighted plan"*

```text
classify → card? data-display? → "pricing" → components/card/
search   → filenames matching pricing…  → pricing-card.md (standard)
read     → contract: no deps, pure JSX + Tailwind ✓
adapt    → copy source, rename exports to match host conventions, wire into page
```

Two reads total. No catalog dump, no exploration.

## 4. Type routing

| Folder | Contains | Trigger words |
| :----- | :------- | :------------ |
| `3d/` | WebGL, Three.js, shaders, 3D cards | 3D, WebGL, rotate, tilt, shader |
| `animation/` | motion, hover, scroll, reveal effects | animate, transition, parallax, reveal |
| `background/` | gradients, beams, particles, backdrops | background, glow, aurora, particles, hero |
| `button/` | buttons, badges, action triggers | button, CTA, badge, chip, tag |
| `card/` | cards and content containers | card, tile, pricing, profile, bento |
| `data-display/` | tables, calendars, charts, progress | table, chart, calendar, stats, progress |
| `feedback/` | alerts, toasts, validation states | alert, toast, notification, error, success |
| `form/` | inputs, fields, complete forms | input, form, login, signup, search, select, upload |
| `layout/` | grids, spacing, page structure | grid, layout, container, columns, spacing |
| `loader/` | spinners, skeletons, loading states | loading, spinner, skeleton, placeholder |
| `media/` | carousels, galleries, players | carousel, slider, gallery, video, image |
| `navigation/` | navbars, menus, sidebars, tabs | navbar, menu, sidebar, tabs, breadcrumb, pagination |
| `overlay/` | modals, dialogs, popovers, tooltips | modal, dialog, drawer, popover, tooltip, dropdown |
| `text/` | typography, text effects, editors | text, heading, editor, typewriter, gradient text |

If a request spans types (e.g. a login **page**: form + background + card), implement each part separately — open a second folder only after finishing the first. If no folder fits, choose the closest and search its filenames; do not scan multiple folders up front.

## 5. Quality routing

Quality lives in frontmatter, never in folder names:

| Tier | Pick when |
| :--- | :-------- |
| `lightweight` | Simple need, minimal code, zero risk — **default choice** |
| `standard` | Production feature that needs polish |
| `advanced` | Richer interaction or composition is required |
| `showcase` | User asks for wow: animated, 3D, premium, "stunning" |

**Rule: choose the lowest tier that satisfies the request.** Only escalate to `showcase` when the user explicitly asks for a premium effect — it usually brings dependencies (three.js, framer-motion).


## 6. Design themes — when the user wants a *look*

When the request is about **style, mood, or brand** ("make it look like Linear", "dark and minimal, Apple-ish"), open **one** file in `Designs/`:

1. Match the brand/mood to a theme name — the [catalog](CATALOG.md) lists all 23 with mode and focus.
2. Read only that file. It defines the full token set: colors, typography, spacing, radius, shadows, and usage guidance.
3. **Port the tokens**, not the markup: map them into the host project's design system (CSS variables, Tailwind config, theme provider — whatever the host uses).
4. If the user names a brand that has no theme file, pick the closest theme and say you approximated it.

Themes and components compose: a theme restyles what a component provides.

## 7. Adaptation rules — respect the host project

The component source is a starting point, not a drop-in. Before writing anything into the host project:

- **Detect the stack** (framework, language, styling system) and convert: a JSX + Tailwind sample in a Vue + plain-CSS project becomes Vue + CSS. Preserve behavior, not syntax.
- **Preserve** the host's file structure, naming, import style, and existing design tokens. New components go where similar components live.
- **Check imports** in the agent contract before adding any dependency; if a component needs `three.js` or `framer-motion`, confirm the host actually has it (or ask) instead of silently installing.
- **Never** modify host config, global styles, or dependencies unless the task requires it — and say so when it does.

## 8. Token discipline — hard rules

**Never:**

- recursively read every file, or read a whole folder "to see what's there"
- paste CATALOG.md into context
- open more than 3 candidate files for one request
- open a second type folder while the first is still unread
- rewrite a component from scratch when a file already implements it

**Always:** one folder → few filenames → 1–3 files → implement. If after 3 candidates nothing fits, build the closest match yourself instead of widening the search.

## 9. File conventions

- Filenames are normalized; numeric suffixes (`-2`, `-3`) only mark name collisions, not versions.
- Every file carries `library: "ComponentX"` frontmatter and the same skeleton (§1).
- [CATALOG.md](CATALOG.md) is the single index — use it to map a need to exact filenames across all folders at once.

---

[**Catalog**](CATALOG.md) · [**Skill README**](README.md) · Powered by **ComponentX**
