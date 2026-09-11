---
name: "Filter"
library: "ComponentX"
id: "filter"
type: "form"
quality: "standard"
tags: ["component", "form", "input"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Filter

> **Type:** `form` · **Quality:** `standard` · **ID:** `filter`
> **Path:** `components/form/filter.md`

**Filter** is a premium, production-ready component from the **ComponentX** library — engineered for form interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `form`, `input` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Filter** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<form class="filter">
  <input class="btn btn-square" type="reset" value="×"/>
  <input class="btn" type="radio" name="drink" aria-label="Tea"/>
  <input class="btn" type="radio" name="drink" aria-label="Coffee"/>
  <input class="btn" type="radio" name="drink" aria-label="Smoothie"/>
</form>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="filter">
  <input class="btn filter-reset" type="radio" name="destination" aria-label="All"/>
  <input class="btn" type="radio" name="destination" aria-label="Jungle"/>
  <input class="btn" type="radio" name="destination" aria-label="Beach"/>
  <input class="btn" type="radio" name="destination" aria-label="Mountain"/>
</div>
```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
