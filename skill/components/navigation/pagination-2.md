---
name: "Pagination"
library: "ComponentX"
id: "pagination-2"
type: "navigation"
quality: "standard"
tags: ["button", "navigation", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Pagination

> **Type:** `navigation` · **Quality:** `standard` · **ID:** `pagination-2`
> **Path:** `components/navigation/pagination-2.md`

**Pagination** is a premium, production-ready component from the **ComponentX** library — engineered for navigation interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `button`, `navigation`, `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Pagination** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
<nav class="flex items-center gap-x-1">
  <button type="button" class="btn btn-text">Previous</button>
  <div class="flex items-center gap-x-1">
    <button type="button" class="btn btn-text btn-square aria-[current='page']:text-bg-primary">1</button>
    <button type="button" class="btn btn-text btn-square aria-[current='page']:text-bg-primary" aria-current="page"> 2 </button>
    <button type="button" class="btn btn-text btn-square aria-[current='page']:text-bg-primary">3</button>
  </div>
  <button type="button" class="btn btn-text">Next</button>
</nav>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<nav class="flex items-center gap-x-1">
  <button type="button" class="btn btn-soft">Previous</button>
  <div class="flex items-center gap-x-1">
    <button type="button" class="btn btn-soft btn-square aria-[current='page']:text-bg-soft-primary">1</button>
    <button type="button" class="btn btn-soft btn-square aria-[current='page']:text-bg-soft-primary" aria-current="page">2</button>
    <button type="button" class="btn btn-soft btn-square aria-[current='page']:text-bg-soft-primary">3</button>
  </div>
  <button type="button" class="btn btn-soft">Next</button>
</nav>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<nav class="flex items-center gap-x-1">
  <button type="button" class="btn btn-outline">Previous</button>
  <div class="flex items-center gap-x-1">
    <button type="button" class="btn btn-outline btn-square aria-[current='page']:text-border-primary aria-[current='page']:bg-primary/10" >1</button>
    <button type="button" class="btn btn-outline btn-square aria-[current='page']:text-border-primary aria-[current='page']:bg-primary/10" aria-current="page">2</button>
    <button type="button" class="btn btn-outline btn-square aria-[current='page']:text-border-primary aria-[current='page']:bg-primary/10" >3</button>
  </div>
  <button type="button" class="btn btn-outline">Next</button>
</nav>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<nav class="flex items-center gap-x-1">
  <button type="button" class="btn btn-soft">Previous</button>
  <div class="flex items-center gap-x-1">
    <button type="button" class="btn btn-soft btn-square aria-[current='page']:text-bg-soft-primary">1</button>
    <button type="button" class="btn btn-soft btn-square aria-[current='page']:text-bg-soft-primary" aria-current="page">2</button>
    <button type="button" class="btn btn-soft btn-square aria-[current='page']:text-bg-soft-primary">3</button>
  </div>
  <button type="button" class="btn btn-soft">Next</button>
</nav>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<nav class="flex items-center gap-x-1">
  <button type="button" class="btn btn-soft rounded-none">Previous</button>
  <div class="flex items-center gap-x-1">
    <button type="button" class="btn btn-soft btn-square aria-[current='page']:text-bg-soft-primary rounded-none">1</button>
    <button type="button" class="btn btn-soft btn-square aria-[current='page']:text-bg-soft-primary rounded-none" aria-current="page">2</button>
    <button type="button" class="btn btn-soft btn-square aria-[current='page']:text-bg-soft-primary rounded-none">3</button>
  </div>
  <button type="button" class="btn btn-soft rounded-none">Next</button>
</nav>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<nav class="flex items-center gap-x-1">
  <button type="button" class="btn btn-soft rounded-full">Previous</button>
  <div class="flex items-center gap-x-1">
    <button type="button" class="btn btn-soft btn-circle aria-[current='page']:text-bg-soft-primary">1</button>
    <button type="button" class="btn btn-soft btn-circle aria-[current='page']:text-bg-soft-primary" aria-current="page">2</button>
    <button type="button" class="btn btn-soft btn-circle aria-[current='page']:text-bg-soft-primary">3</button>
  </div>
  <button type="button" class="btn btn-soft rounded-full">Next</button>
</nav>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<!--extra small button -->
<nav class="flex items-center gap-x-1">
  <button type="button" class="btn btn-soft btn-xs">Previous</button>
  <div class="flex items-center gap-x-1">
    <button type="button" class="btn btn-soft btn-xs btn-square aria-[current='page']:text-bg-soft-primary">1</button>
    <button type="button" class="btn btn-soft btn-xs btn-square aria-[current='page']:text-bg-soft-primary" aria-current="page">2</button>
    <button type="button" class="btn btn-soft btn-xs btn-square aria-[current='page']:text-bg-soft-primary">3</button>
  </div>
  <button type="button" class="btn btn-soft btn-xs">Next</button>
</nav>
<!-- small button -->
<nav class="flex items-center gap-x-1">
  <button type="button" class="btn btn-soft btn-sm">Previous</button>
  <div class="flex items-center gap-x-1">
    <button type="button" class="btn btn-soft btn-sm btn-square aria-[current='page']:text-bg-soft-primary">1</button>
    <button type="button" class="btn btn-soft btn-sm btn-square aria-[current='page']:text-bg-soft-primary" aria-current="page">2</button>
    <button type="button" class="btn btn-soft btn-sm btn-square aria-[current='page']:text-bg-soft-primary">3</button>
  </div>
  <button type="button" class="btn btn-soft btn-sm">Next</button>
</nav>
<!-- Default button -->
<nav class="flex items-center gap-x-1">
  <button type="button" class="btn btn-soft">Previous</button>
  <div class="flex items-center gap-x-1">
    <button type="button" class="btn btn-soft btn-square aria-[current='page']:text-bg-soft-primary">1</button>
    <button type="button" class="btn btn-soft btn-square aria-[current='page']:text-bg-soft-primary" aria-current="page">2</button>
    <button type="button" class="btn btn-soft btn-square aria-[current='page']:text-bg-soft-primary">3</button>
  </div>
  <button type="button" class="btn btn-soft">Next</button>
</nav>
<!-- Large button -->
<nav class="flex items-center gap-x-1">
  <button type="button" class="btn btn-soft btn-lg">Previous</button>
  <div class="flex items-center gap-x-1">
    <button type="button" class="btn btn-soft btn-lg btn-square aria-[current='page']:text-bg-soft-primary">1</button>
    <button type="button" class="btn btn-soft btn-lg btn-square aria-[current='page']:text-bg-soft-primary" aria-current="page">2</button>
    <button type="button" class="btn btn-soft btn-lg btn-square aria-[current='page']:text-bg-soft-primary">3</button>
  </div>
  <button type="button" class="btn btn-soft btn-lg">Next</button>
</nav>
<!-- Extra Large button -->
<nav class="flex items-center gap-x-1">
  <button type="button" class="btn btn-soft btn-xl">Previous</button>
  <div class="flex items-center gap-x-1">
    <button type="button" class="btn btn-soft btn-xl btn-square aria-[current='page']:text-bg-soft-primary">1</button>
    <button type="button" class="btn btn-soft btn-xl btn-square aria-[current='page']:text-bg-soft-primary" aria-current="page">2</button>
    <button type="button" class="btn btn-soft btn-xl btn-square aria-[current='page']:text-bg-soft-primary">3</button>
  </div>
  <button type="button" class="btn btn-soft btn-xl">Next</button>
</nav>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<!-- Default -->
<nav class="flex items-center gap-x-1">
  <button type="button" class="btn btn-soft">Previous</button>
  <div class="flex items-center gap-x-1">
    <button type="button" class="btn btn-soft btn-square aria-[current='page']:text-bg-soft-primary">1</button>
    <button type="button" class="btn btn-soft btn-square aria-[current='page']:text-bg-soft-primary" aria-current="page">2</button>
    <button type="button" class="btn btn-soft btn-square aria-[current='page']:text-bg-soft-primary">3</button>
  </div>
  <button type="button" class="btn btn-soft">Next</button>
</nav>
<!-- justify-center -->
<nav class="flex items-center justify-center gap-x-1">
  <button type="button" class="btn btn-soft">Previous</button>
  <div class="flex items-center gap-x-1">
    <button type="button" class="btn btn-soft btn-square aria-[current='page']:text-bg-soft-primary">1</button>
    <button type="button" class="btn btn-soft btn-square aria-[current='page']:text-bg-soft-primary" aria-current="page">2</button>
    <button type="button" class="btn btn-soft btn-square aria-[current='page']:text-bg-soft-primary">3</button>
  </div>
  <button type="button" class="btn btn-soft">Next</button>
</nav>
<!-- justify-end -->
<nav class="flex items-center justify-end gap-x-1">
  <button type="button" class="btn btn-soft">Previous</button>
  <div class="flex items-center gap-x-1">
    <button type="button" class="btn btn-soft btn-square aria-[current='page']:text-bg-soft-primary">1</button>
    <button type="button" class="btn btn-soft btn-square aria-[current='page']:text-bg-soft-primary" aria-current="page">2</button>
    <button type="button" class="btn btn-soft btn-square aria-[current='page']:text-bg-soft-primary">3</button>
  </div>
  <button type="button" class="btn btn-soft">Next</button>
</nav>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<nav class="flex items-center gap-x-1">
  <button type="button" class="btn btn-soft max-sm:btn-square">
    <span class="hidden sm:block">Previous</span>
    <span class="icon-[componentx--chevron-left] rtl:rotate-180 block size-5 sm:hidden"></span>
  </button>
  <div class="flex items-center gap-x-1">
    <button type="button" class="btn btn-soft btn-square aria-[current='page']:text-bg-soft-primary">1</button>
    <button type="button" class="btn btn-soft btn-square aria-[current='page']:text-bg-soft-primary" aria-current="page">2</button>
    <button type="button" class="btn btn-soft btn-square aria-[current='page']:text-bg-soft-primary">3</button>
  </div>
  <button type="button" class="btn btn-soft max-sm:btn-square">
    <span class="hidden sm:block">Next</span>
    <span class="icon-[componentx--chevron-right] rtl:rotate-180 block size-5 sm:hidden"></span>
  </button>
</nav>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<nav class="flex items-center gap-x-1">
  <button type="button" class="btn btn-soft btn-disabled">Previous</button>
  <div class="flex items-center gap-x-1">
    <button type="button" class="btn btn-soft btn-square aria-[current='page']:text-bg-soft-primary" aria-current="page">1</button>
    <button type="button" class="btn btn-soft btn-square aria-[current='page']:text-bg-soft-primary">2</button>
    <button type="button" class="btn btn-soft btn-square aria-[current='page']:text-bg-soft-primary">3</button>
  </div>
  <button type="button" class="btn btn-soft">Next</button>
</nav>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<nav class="flex items-center gap-x-1">
  <button type="button" class="btn btn-text btn-square" aria-label="Previous Button">
    <span class="icon-[componentx--chevron-left] size-5 rtl:rotate-180"></span>
  </button>
  <div class="flex items-center gap-x-1">
    <button type="button" class="btn btn-text btn-square pointer-events-none" aria-current="page">1</button>
    <span class="text-base-content/80 mx-3">of</span>
    <button type="button" class="btn btn-text btn-square pointer-events-none">3</button>
  </div>
  <button type="button" class="btn btn-text btn-square" aria-label="Next Button">
    <span class="icon-[componentx--chevron-right] size-5 rtl:rotate-180"></span>
  </button>
</nav>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<nav class="join">
  <button type="button" class="btn btn-soft btn-square join-item" aria-label="Previous Button">
    <span class="icon-[componentx--chevron-left] size-5 rtl:rotate-180"></span>
  </button>
  <button type="button" class="btn btn-soft join-item btn-square aria-[current='page']:text-bg-soft-primary">1</button>
  <button type="button" class="btn btn-soft join-item btn-square aria-[current='page']:text-bg-soft-primary" aria-current="page">2</button>
  <button type="button" class="btn btn-soft join-item btn-square aria-[current='page']:text-bg-soft-primary">3</button>
  <button type="button" class="btn btn-soft btn-square join-item" aria-label="Next Button">
    <span class="icon-[componentx--chevron-right] size-5 rtl:rotate-180"></span>
  </button>
</nav>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<nav class="flex items-center gap-x-1">
  <button type="button" class="btn btn-soft max-sm:btn-square">
    <span class="icon-[componentx--chevron-left] size-5 rtl:rotate-180"></span>
    <span class="hidden sm:inline">Previous</span>
  </button>
  <div class="flex items-center gap-x-1">
    <button type="button" class="btn btn-soft btn-square aria-[current='page']:text-bg-soft-primary">1</button>
    <button type="button" class="btn btn-soft btn-square aria-[current='page']:text-bg-soft-primary" aria-current="page">2</button>
    <button type="button" class="btn btn-soft btn-square aria-[current='page']:text-bg-soft-primary">3</button>
  </div>
  <button type="button" class="btn btn-soft max-sm:btn-square">
    <span class="hidden sm:inline">Next</span>
    <span class="icon-[componentx--chevron-right] size-5 rtl:rotate-180"></span>
  </button>
</nav>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<nav class="flex items-center gap-x-1">
  <button type="button" class="btn btn-soft max-sm:btn-square">
    <span class="icon-[componentx--chevron-left] size-5 rtl:rotate-180 sm:hidden"></span>
    <span class="hidden sm:inline">Previous</span>
  </button>
  <div class="flex items-center gap-x-1">
    <button type="button" class="btn btn-soft btn-square aria-[current='page']:text-bg-soft-primary">1</button>
    <button type="button" class="btn btn-soft btn-square aria-[current='page']:text-bg-soft-primary" aria-current="page">2</button>
    <button type="button" class="btn btn-soft btn-square aria-[current='page']:text-bg-soft-primary">3</button>
    <!-- tooltip -->
    <div class="tooltip inline-block">
      <button type="button" class="tooltip-toggle tooltip-toggle btn btn-soft btn-square group" aria-label="More Pages">
        <span class="icon-[componentx--dots] size-5 group-hover:hidden"></span>
        <span class="icon-[componentx--chevrons-right] rtl:rotate-180 hidden size-5 shrink-0 group-hover:block"></span>
        <span class="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible" role="tooltip">
          <span class="tooltip-body">Next 7 pages</span>
        </span>
      </button>
    </div>
    <!-- tooltip end -->
    <button type="button" class="btn btn-soft btn-square aria-[current='page']:text-bg-soft-primary">10</button>
  </div>
  <button type="button" class="btn btn-soft max-sm:btn-square">
    <span class="hidden sm:inline">Next</span>
    <span class="icon-[componentx--chevron-right] size-5 rtl:rotate-180 sm:hidden"></span>
  </button>
</nav>
```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
