---
name: "Join (Group Items)"
library: "ComponentX"
id: "join-group-items"
type: "button"
quality: "standard"
tags: ["button", "component", "input", "menu"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Join (Group Items)

> **Type:** `button` · **Quality:** `standard` · **ID:** `join-group-items`
> **Path:** `components/button/join-group-items.md`

**Join (Group Items)** is a premium, production-ready component from the **ComponentX** library — engineered for button interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `button`, `input`, `menu` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Join (Group Items)** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
<div class="join">
  <button class="btn btn-soft btn-primary join-item">Button</button>
  <button class="btn btn-soft btn-primary join-item">Button</button>
  <button class="btn btn-soft btn-primary join-item">Button</button>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="join">
  <button class="btn btn-soft btn-primary btn-square join-item" aria-label="join"><span class="icon-[componentx--star]"></span></button>
  <button class="btn btn-soft btn-primary btn-square join-item" aria-label="join"><span class="icon-[componentx--star]"></span></button>
  <button class="btn btn-soft btn-primary btn-square join-item" aria-label="join"><span class="icon-[componentx--star]"></span></button>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="join join-vertical drop-shadow-sm">
  <button class="btn btn-soft btn-primary join-item">Button</button>
  <button class="btn btn-soft btn-primary join-item">Button</button>
  <button class="btn btn-soft btn-primary join-item">Button</button>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="join max-sm:join-vertical">
  <button class="btn btn-soft btn-primary join-item">Button</button>
  <button class="btn btn-soft btn-primary join-item">Button</button>
  <button class="btn btn-soft btn-primary join-item">Button</button>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="join max-w-sm">
  <input class="input join-item" placeholder="Search" />
  <select class="select join-item" aria-label="select">
    <option disabled selected>Filter</option>
    <option>Sci-fi</option>
    <option>Drama</option>
    <option>Action</option>
  </select>
  <button class="btn btn-soft btn-primary join-item">Search</button>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="join">
  <input class="input join-item rounded-s-full" placeholder="Email" />
  <button class="btn btn-soft btn-primary join-item rounded-e-full">Subscribe</button>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="join">
  <input class="input join-item shrink" placeholder="Email" />
  <div class="dropdown relative inline-flex max-sm:[--placement:bottom-end]">
    <button id="dropdown-input" type="button" class="dropdown-toggle btn btn-soft btn-primary join-item" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
      <span class="hidden sm:block">Dropdown</span>
      <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
    </button>
    <ul class="dropdown-menu dropdown-open:opacity-100 hidden" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-input">
      <li><a class="dropdown-item" href="#">Subscribe</a></li>
      <li><a class="dropdown-item" href="#">Verify</a></li>
    </ul>
  </div>
</div>
```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
