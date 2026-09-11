---
name: "Indicator"
library: "ComponentX"
id: "indicator"
type: "button"
quality: "standard"
tags: ["button", "card", "component", "input", "loading", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Indicator

> **Type:** `button` · **Quality:** `standard` · **ID:** `indicator`
> **Path:** `components/button/indicator.md`

**Indicator** is a premium, production-ready component from the **ComponentX** library — engineered for button interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `button`, `card`, `input` workflows.
- **Pattern coverage** — includes `loading`, `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Indicator** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
<div class="indicator">
  <span class="indicator-item bg-primary size-3 rounded-full"></span>
  <div class="bg-primary/10 border-primary grid place-items-center rounded-md border p-3">
    <span class="icon-[componentx--bell] text-primary size-5"></span>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="indicator">
  <span class="indicator-item status status-primary status-lg"></span>
  <div class="bg-primary/10 border-primary grid place-items-center rounded-md border p-3">
    <span class="icon-[componentx--bell] text-primary size-5"></span>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="indicator">
  <span class="indicator-item badge badge-primary">+999</span>
  <div class="bg-primary/10 border-primary grid place-items-center rounded-md border p-3">
    <span class="icon-[componentx--bell] text-primary size-5"></span>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="indicator">
  <span class="indicator-item badge badge-primary rounded-full">+999</span>
  <div class="bg-primary/10 border-primary grid place-items-center rounded-md border p-3">
    <span class="icon-[componentx--bell] text-primary size-5"></span>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="avatar indicator me-8">
  <span class="indicator-item badge badge-primary">typing…</span>
  <div class="size-16 rounded-md">
    <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-8.png" alt="avatar" />
  </div>
</div>

<div class="avatar indicator">
  <span class="indicator-item bg-primary size-3 rounded-full"></span>
  <div class="size-16 rounded-md">
    <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-8.png" alt="avatar" />
  </div>
</div>

<div class="avatar indicator">
  <span class="indicator-item status status-primary status-lg"></span>
  <div class="size-16 rounded-md">
    <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-8.png" alt="avatar" />
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="indicator">
  <span class="indicator-item badge badge-primary">Required</span>
  <input type="text" placeholder="Your email address" class="input" />
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="indicator mt-4">
  <div class="indicator-item indicator-top">
    <button class="btn btn-error btn-circle btn-sm" aria-label="Close Button Indicator">
      <span class="icon-[componentx--x] size-5"></span>
    </button>
  </div>
  <div class="card">
    <div class="card-body">
      <h2 class="card-title">Card Title</h2>
      <p>Rerum reiciendis beatae tenetur excepturi</p>
    </div>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="indicator">
  <div class="indicator-item inline-grid *:[grid-area:1/1]">
    <div class="status status-error animate-ping"></div>
    <div class="status status-error"></div>
  </div>
  <button class="btn btn-secondary btn-outline btn-square" aria-label="Button Indicator"><span class="icon-[componentx--shopping-bag] size-5"></span></button>
</div>

<div class="indicator">
  <span class="indicator-item badge badge-error rounded-full">
    +99
    <span class="bg-error absolute size-full animate-ping rounded-full opacity-75"></span>
  </span>
  <button class="btn btn-secondary btn-outline">Notifications</button>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="bg-primary/10 flex size-32 items-center justify-center rounded-md border border-base-content/20">
  <div class="indicator">
    <span class="badge badge-primary animate-pulse rounded-full">loading...</span>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="indicator">
  <span class="indicator-item indicator-top indicator-start bg-primary size-3 rounded-full"></span>
  <span class="indicator-item indicator-top indicator-center bg-primary size-3 rounded-full"></span>
  <span class="indicator-item indicator-top indicator-end bg-primary size-3 rounded-full"></span>
  <span class="indicator-item indicator-middle indicator-start bg-primary size-3 rounded-full"></span>
  <span class="indicator-item indicator-middle indicator-center bg-primary size-3 rounded-full"></span>
  <span class="indicator-item indicator-middle indicator-end bg-primary size-3 rounded-full"></span>
  <span class="indicator-item indicator-bottom indicator-start bg-primary size-3 rounded-full"></span>
  <span class="indicator-item indicator-bottom indicator-center bg-primary size-3 rounded-full"></span>
  <span class="indicator-item indicator-bottom indicator-end bg-primary size-3 rounded-full"></span>
  <div class="bg-primary/10 border border-primary grid h-32 w-60 place-items-center rounded-md"></div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="indicator my-3 ms-14">
  <span class="indicator-item indicator-top indicator-start badge badge-primary max-sm:px-1">
    <span class="max-sm:hidden">top+start</span> <span class="sm:hidden">T-Start</span>
  </span>
  <span class="indicator-item indicator-top indicator-center badge badge-primary max-sm:px-1">
    <span class="max-sm:hidden">top+center</span> <span class="sm:hidden">T-center</span>
  </span>
  <span class="indicator-item indicator-top indicator-end badge badge-primary max-sm:px-1">
    <span class="max-sm:hidden">top+end</span> <span class="sm:hidden">T-end</span>
  </span>
  <span class="indicator-item indicator-middle indicator-start badge badge-primary max-sm:px-1">
    <span class="max-sm:hidden">middle+start</span> <span class="sm:hidden">M-start</span>
  </span>
  <span class="indicator-item indicator-middle indicator-center badge badge-primary max-sm:px-1">
    <span class="max-sm:hidden">middle+center</span> <span class="sm:hidden">M-center</span>
  </span>
  <span class="indicator-item indicator-middle indicator-end badge badge-primary max-sm:px-1">
    <span class="max-sm:hidden">middle+end</span> <span class="sm:hidden">M-end</span>
  </span>
  <span class="indicator-item indicator-bottom indicator-start badge badge-primary max-sm:px-1">
    <span class="max-sm:hidden">bottom+start</span> <span class="sm:hidden">B-Start</span>
  </span>
  <span class="indicator-item indicator-bottom indicator-center badge badge-primary max-sm:px-1">
    <span class="max-sm:hidden">bottom+center</span> <span class="sm:hidden">B-center</span>
  </span>
  <span class="indicator-item indicator-bottom indicator-end badge badge-primary max-sm:px-1">
    <span class="max-sm:hidden">bottom+end</span> <span class="sm:hidden">B-end</span>
  </span>
  <div class="bg-primary/10 border-primary grid h-32 w-60 place-items-center rounded-md border max-sm:w-40">content</div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="indicator">
  <span class="indicator-item indicator-start sm:indicator-middle md:indicator-bottom lg:indicator-center xl:indicator-end status status-primary"></span>
  <div class="bg-primary/10 border-primary grid place-items-center rounded-md border p-3">
    <span class="icon-[componentx--bell] text-primary size-5"></span>
  </div>
</div>
```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
