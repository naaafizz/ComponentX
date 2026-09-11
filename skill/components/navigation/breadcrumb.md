---
name: "Breadcrumb"
library: "ComponentX"
id: "breadcrumb"
type: "navigation"
quality: "standard"
tags: ["button", "form", "input", "menu", "navigation", "overlay", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Breadcrumb

> **Type:** `navigation` · **Quality:** `standard` · **ID:** `breadcrumb`
> **Path:** `components/navigation/breadcrumb.md`

**Breadcrumb** is a premium, production-ready component from the **ComponentX** library — engineered for navigation interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `button`, `form`, `input` workflows.
- **Pattern coverage** — includes `menu`, `navigation`, `overlay` workflows.
- **Pattern coverage** — includes `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Breadcrumb** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
<div class="breadcrumbs">
  <ul>
    <li>
      <a href="#">Home</a>
    </li>
    <li class="breadcrumbs-separator rtl:rotate-180"><span class="icon-[componentx--chevron-right]"></span></li>
    <li>
      <a href="#">Components</a>
    </li>
    <li class="breadcrumbs-separator rtl:rotate-180"><span class="icon-[componentx--chevron-right]"></span></li>
    <li aria-current="page">Breadcrumb</li>
  </ul>
</div>
```






I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="breadcrumbs">
  <ul>
    <li>
      <a href="#">Home</a>
    </li>
    <li class="breadcrumbs-separator rtl:-rotate-[40deg]">/</li>
    <li>
      <a href="#">Components</a>
    </li>
    <li class="breadcrumbs-separator rtl:-rotate-[40deg]">/</li>
    <li aria-current="page">Breadcrumb</li>
  </ul>
</div>
```







I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="breadcrumbs">
  <ol>
    <li>
      <a href="#"> <span class="icon-[componentx--star-filled] size-5"></span>Home</a>
    </li>
    <li class="breadcrumbs-separator rtl:rotate-180"><span class="icon-[componentx--chevron-right]"></span></li>
    <li>
      <a href="#"> <span class="icon-[componentx--star-filled] size-5"></span>Components</a>
    </li>
    <li class="breadcrumbs-separator rtl:rotate-180"><span class="icon-[componentx--chevron-right]"></span></li>
    <li aria-current="page">
      <span class="icon-[componentx--star-filled] me-1 size-5"></span>
      Breadcrumb
    </li>
  </ol>
</div>
```





I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="breadcrumbs">
  <ol>
    <li>
      <a href="#"> <span class="icon-[componentx--folder] size-5"></span>Home</a>
    </li>
    <li class="breadcrumbs-separator rtl:rotate-180"><span class="icon-[componentx--chevron-right]"></span></li>
    <li>
      <a href="#" aria-label="More Pages"><span class="icon-[componentx--dots]"></span></a>
    </li>
    <li class="breadcrumbs-separator rtl:rotate-180"><span class="icon-[componentx--chevron-right]"></span></li>
    <li aria-current="page">
      <span class="icon-[componentx--file] me-1 size-5"></span>
      Breadcrumb
    </li>
  </ol>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="breadcrumbs">
  <ol>
    <li>
      <a href="#">Home</a>
    </li>
    <li class="breadcrumbs-separator rtl:-rotate-[40deg]">/</li>
    <li>
      <div class="dropdown relative inline-flex">
        <button id="dropdown-default" type="button" class="dropdown-toggle btn btn-text font-normal" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
          Components
          <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
        </button>
        <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-10" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-default">
          <li><a class="dropdown-item" href="#">Overlay</a></li>
          <li><a class="dropdown-item" href="#">Navigation</a></li>
          <li><a class="dropdown-item" href="#">Collapse</a></li>
          <li><a class="dropdown-item" href="#">Form</a></li>
        </ul>
      </div>
    </li>
    <li class="breadcrumbs-separator rtl:-rotate-[40deg]">/</li>
    <li aria-current="page">
      <div class="dropdown relative inline-flex">
        <button id="dropdown-default" type="button" class="dropdown-toggle btn btn-text btn-secondary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
          Component
          <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
        </button>
        <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-10" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-default">
          <li><a class="dropdown-item" href="#">Modal</a></li>
          <li><a class="dropdown-item" href="#">Breadcrumb</a></li>
          <li><a class="dropdown-item" href="#">Accordion</a></li>
          <li><a class="dropdown-item" href="#">Input</a></li>
        </ul>
      </div>
    </li>
  </ol>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="breadcrumbs h-fit max-w-xs">
  <ul>
    <li>
      <a href="#"> <span class="icon-[componentx--folder] size-5"></span>Home</a>
    </li>
    <li class="breadcrumbs-separator rtl:-rotate-[40deg]">/</li>
    <li>
      <a href="#"> <span class="icon-[componentx--folder] size-5"></span>App</a>
    </li>
    <li class="breadcrumbs-separator rtl:-rotate-[40deg]">/</li>
    <li>
      <a href="#"> <span class="icon-[componentx--folder] size-5"></span>Components</a>
    </li>
    <li class="breadcrumbs-separator rtl:-rotate-[40deg]">/</li>
    <li>
      <a href="#"> <span class="icon-[componentx--folder] size-5"></span>Navigation</a>
    </li>
    <li class="breadcrumbs-separator rtl:-rotate-[40deg]">/</li>
    <li>
      <span class="icon-[componentx--file] me-1 size-5"></span>
      Breadcrumb
    </li>
  </ul>
</div>
```





I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="w-full rounded-lg border px-4 py-2">
  <div class="breadcrumbs">
    <ul>
      <li>
        <a href="#">Home</a>
      </li>
      <li class="breadcrumbs-separator rtl:-rotate-[40deg]">/</li>
      <li>
        <a href="#">Components</a>
      </li>
      <li class="breadcrumbs-separator rtl:-rotate-[40deg]">/</li>
      <li aria-current="page">
        <span class="bg-primary/20 !text-primary rounded-xs px-1.5 py-0.5">Breadcrumb</span>
      </li>
    </ul>
  </div>
</div>
```








I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="border-base-content/25 w-full rounded-lg border px-4 py-2">
  <div class="breadcrumbs">
    <ul>
      <li>
        <a href="#">Home</a>
      </li>
      <li class="breadcrumbs-separator rtl:-rotate-[40deg]">/</li>
      <li>
        <a href="#">Components</a>
      </li>
      <li class="breadcrumbs-separator rtl:-rotate-[40deg]">/</li>
      <li aria-current="page">Breadcrumb</li>
    </ul>
  </div>
</div>
```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
