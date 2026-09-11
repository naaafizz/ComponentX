<div align="center">

# ⚡ ComponentX · Agent Skill

**Token-efficient component discovery for coding agents.**

</div>

## Core rule

**Type first. Search second. Read last.**

Never load the entire component library just to find one component.

## Workflow

1. **Classify** — infer the requested component type.
2. **Open** — enter only `components/<type>/`.
3. **Search** — filter filenames and Markdown metadata.
4. **Shortlist** — pick 1–3 candidates.
5. **Read** — open only those candidate files.
6. **Inspect** — check dependencies and imports before implementation.
7. **Adapt** — integrate the selected component into the existing project.

## Type routing

Semantic folders: `3d` · `animation` · `background` · `button` · `card` · `data-display` · `feedback` · `form` · `layout` · `loader` · `media` · `navigation` · `overlay` · `text`

If a request spans types, start with the most specific type and open a second folder only when necessary.

## Quality routing

Quality is metadata, never a directory:

| Tier | When to pick |
| :--- | :----------- |
| `lightweight` | Simplest implementation |
| `standard` | Balanced production option |
| `advanced` | Richer composition / interaction |
| `showcase` | Highly visual, animated, 3D, or dependency-heavy |

Choose the **lowest** quality tier that satisfies the request unless the user explicitly asks for a premium/showcase effect.

## Token discipline

**Do not:**

- recursively read every Markdown file
- dump the catalog into context
- inspect unrelated type folders
- compare many implementations before narrowing

**Do:** `classify → search → shortlist → read → implement`

## File conventions

- Filenames are normalized; source-library branding suffixes are removed.
- Numeric suffixes (`-2`, `-3`) exist only for normalized-name collisions.
- Every file carries `library: "ComponentX"` frontmatter.
- Every file follows the same premium skeleton: frontmatter → overview → highlights → agent contract → full source implementation.

## Project safety

Preserve the host project's framework, styling conventions, dependencies, and file structure unless the user explicitly asks to change them.

---

[**Catalog**](CATALOG.md) · [**README**](README.md) · Powered by **ComponentX**