---
name: "Loading"
library: "ComponentX"
id: "loading"
type: "loader"
quality: "standard"
tags: ["button", "card", "image", "loading", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Loading

> **Type:** `loader` · **Quality:** `standard` · **ID:** `loading`
> **Path:** `components/loader/loading.md`

**Loading** is a premium, production-ready component from the **ComponentX** library — engineered for loader interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `button`, `card`, `image` workflows.
- **Pattern coverage** — includes `loading`, `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Loading** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
<span class="loading loading-spinner loading-xs"></span>
<span class="loading loading-spinner loading-sm"></span>
<span class="loading loading-spinner"></span>
<span class="loading loading-spinner loading-lg"></span>
<span class="loading loading-spinner loading-xl"></span>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<span class="loading loading-dots loading-xs"></span>
<span class="loading loading-dots loading-sm"></span>
<span class="loading loading-dots"></span>
<span class="loading loading-dots loading-lg"></span>
<span class="loading loading-dots loading-xl"></span>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<span class="loading loading-ring loading-xs"></span>
<span class="loading loading-ring loading-sm"></span>
<span class="loading loading-ring"></span>
<span class="loading loading-ring loading-lg"></span>
<span class="loading loading-ring loading-xl"></span>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<span class="loading loading-ball loading-xs"></span>
<span class="loading loading-ball loading-sm"></span>
<span class="loading loading-ball"></span>
<span class="loading loading-ball loading-lg"></span>
<span class="loading loading-ball loading-xl"></span>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<span class="loading loading-bars loading-xs"></span>
<span class="loading loading-bars loading-sm"></span>
<span class="loading loading-bars"></span>
<span class="loading loading-bars loading-lg"></span>
<span class="loading loading-bars loading-xl"></span>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<span class="loading loading-infinity loading-xs"></span>
<span class="loading loading-infinity loading-sm"></span>
<span class="loading loading-infinity"></span>
<span class="loading loading-infinity loading-lg"></span>
<span class="loading loading-infinity loading-xl"></span>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<span class="loading loading-spinner text-primary"></span>
<span class="loading loading-spinner text-secondary"></span>
<span class="loading loading-spinner text-accent"></span>
<span class="loading loading-spinner text-neutral"></span>
<span class="loading loading-spinner text-info"></span>
<span class="loading loading-spinner text-success"></span>
<span class="loading loading-spinner text-warning"></span>
<span class="loading loading-spinner text-error"></span>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<button class="btn btn-primary btn-square btn-disabled" aria-label="Loading Button">
  <span class="loading loading-spinner loading-sm"></span>
</button>
<button class="btn btn-primary btn-disabled">
  <span class="loading loading-spinner loading-sm"></span>
<span>Loading...</span>
</button>
<button class="btn btn-success btn-square btn-disabled" aria-label="Loading Button">
  <span class="loading loading-ring loading-sm"></span>
</button>
<button class="btn btn-success btn-disabled">
  <span>Ping</span>
<span class="loading loading-ring loading-sm"></span>
</button>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="alert alert-primary border-0 flex items-center gap-4" role="alert">
  <span class="icon-[componentx--alert-triangle] size-5"></span>
  <p> <strong>Primary alert:</strong> Welcome to our platform! Explore our latest features and updates. </p>
  <div class="bg-base-100/50 absolute rounded-box start-0 top-0 size-full"></div>
  <div class="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
    <span class="loading loading-spinner"></span>
  </div>
</div>

<div class="alert alert-success border-0 flex items-center gap-4" role="alert">
  <span class="icon-[componentx--circle-check] size-5"></span>
  <p> <strong>Success alert:</strong> Explore our recent achievements and upcoming events. </p>
  <div class="bg-base-100/50 absolute rounded-box start-0 top-0 size-full"></div>
  <div class="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
    <span class="loading loading-spinner"></span>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="card group max-w-sm hover:shadow">
  <figure>
    <img src="https://cdn.flyonui.com/fy-assets/components/carousel/image-7.png" alt="Album" class="transition-transform duration-500 group-hover:scale-105" />
  </figure>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p> This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. </p>
  </div>
  <div class="card-footer">
    <small class="text-base-content/50">Last updated 3 mins ago</small>
  </div>
  <div class="bg-base-100/50 absolute start-0 top-0 size-full"></div>
  <div class="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
    <span class="loading loading-spinner loading-lg text-primary"></span>
  </div>
</div>
```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
