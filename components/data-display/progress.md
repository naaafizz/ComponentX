---
name: "Progress"
library: "ComponentX"
id: "progress"
type: "data-display"
quality: "advanced"
tags: ["data", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Progress

> **Type:** `data-display` · **Quality:** `advanced` · **ID:** `progress`
> **Path:** `components/data-display/progress.md`

**Progress** is a premium, production-ready component from the **ComponentX** library — engineered for data display interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Advanced tier** — richer composition and interaction, engineered for complex layouts while keeping the public surface tight.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `data`, `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Progress** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
<div class="progress w-56" role="progressbar" aria-label="0% Progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar w-0"></div>
</div>
<div class="progress w-56" role="progressbar" aria-label="25% Progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar w-1/4"></div>
</div>
<div class="progress w-56" role="progressbar" aria-label="50% Progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar w-1/2"></div>
</div>
<div class="progress w-56" role="progressbar" aria-label="75% Progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar w-3/4"></div>
</div>
<div class="progress w-56" role="progressbar" aria-label="100% Progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar w-full"></div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="progress progress-vertical h-56" role="progressbar" aria-label="0% Vertical Progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar h-0"></div>
</div>
<div class="progress progress-vertical h-56" role="progressbar" aria-label="25% Vertical Progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" >
  <div class="progress-bar h-1/4"></div>
</div>
<div class="progress progress-vertical h-56" role="progressbar" aria-label="50% Vertical Progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" >
  <div class="progress-bar h-1/2"></div>
</div>
<div class="progress progress-vertical h-56" role="progressbar" aria-label="75% Vertical Progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" >
  <div class="progress-bar h-3/4"></div>
</div>
<div class="progress progress-vertical h-56" role="progressbar" aria-label="100% Vertical Progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" >
  <div class="progress-bar h-full"></div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="progress w-56" role="progressbar" aria-label="Progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar w-1/2"></div>
</div>
<div class="progress h-2 w-56" role="progressbar" aria-label="Progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar w-1/2"></div>
</div>
<div class="progress h-2.5 w-56" role="progressbar" aria-label="Progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar w-1/2"></div>
</div>
<div class="progress h-3 w-56" role="progressbar" aria-label="Progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar w-1/2"></div>
</div>
<div class="progress h-4 w-56" role="progressbar" aria-label="Progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar w-1/2"></div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="progress h-4" role="progressbar" aria-label="25% Progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar w-1/4 font-normal">25%</div>
</div>
<div class="progress h-4" role="progressbar" aria-label="50% Progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar w-1/2 font-normal">50%</div>
</div>
<div class="progress h-4" role="progressbar" aria-label="75% Progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar w-3/4 font-normal">75%</div>
</div>
<div class="progress h-4" role="progressbar" aria-label="100% Progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar w-full font-normal">100%</div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex w-52 items-center gap-2">
  <div class="progress" role="progressbar" aria-label="25% Progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar w-1/4"></div>
  </div>
  <span class="text-base-content text-xs font-light">25%</span>
</div>

<div class="flex w-52 items-center gap-2">
  <div class="progress" role="progressbar" aria-label="50% Progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar w-1/2"></div>
  </div>
  <span class="text-base-content text-xs font-light">50%</span>
</div>

<div class="flex w-52 items-center gap-2">
  <div class="progress" role="progressbar" aria-label="75% Progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar w-3/4"></div>
  </div>
  <span class="text-base-content text-xs font-light">75%</span>
</div>

<div class="flex w-52 items-center gap-2">
  <div class="progress" role="progressbar" aria-label="100% Progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar w-full"></div>
  </div>
  <span class="text-base-content text-xs font-light">100%</span>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="w-52">
  <div class="mb-1 flex items-end justify-between">
    <p class="text-base-content text-xs font-medium">Title</p>
    <span class="text-base-content text-xs font-light">25%</span>
  </div>
  <div class="progress" role="progressbar" aria-label="25% Progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar w-1/4"></div>
  </div>
</div>

<div class="w-52">
  <div class="mb-1 flex items-end justify-between">
    <p class="text-base-content text-xs font-medium">Title</p>
    <span class="text-base-content text-xs font-light">50%</span>
  </div>
  <div class="progress" role="progressbar" aria-label="50% Progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar w-1/2"></div>
  </div>
</div>

<div class="w-52">
  <div class="mb-1 flex items-end justify-between">
    <p class="text-base-content text-xs font-medium">Title</p>
    <span class="text-base-content text-xs font-light">75%</span>
  </div>
  <div class="progress" role="progressbar" aria-label="75% Progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar w-3/4"></div>
  </div>
</div>

<div class="w-52">
  <div class="mb-1 flex items-end justify-between">
    <p class="text-base-content text-xs font-medium">Title</p>
    <span class="text-base-content text-xs font-light">100%</span>
  </div>
  <div class="progress" role="progressbar" aria-label="100% Progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar w-full"></div>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex w-52 flex-col gap-1">
  <span class="progress-label ms-[calc(25%-1.25rem)]">25%</span>
  <div class="progress h-2" role="progressbar" aria-label="25% Progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar w-1/4"></div>
  </div>
</div>
<div class="flex w-52 flex-col gap-1">
  <span class="progress-label ms-[calc(50%-1.25rem)]">50%</span>
  <div class="progress h-2" role="progressbar" aria-label="50% Progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar w-1/2"></div>
  </div>
</div>
<div class="flex w-52 flex-col gap-1">
  <span class="progress-label ms-[calc(75%-1.25rem)]">75%</span>
  <div class="progress h-2" role="progressbar" aria-label="75% Progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar w-3/4"></div>
  </div>
</div>
<div class="flex w-52 flex-col gap-1">
  <span class="progress-label ms-[calc(100%-1.4rem)]">100%</span>
  <div class="progress h-2" role="progressbar" aria-label="100% Progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar w-full"></div>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="progress progress-vertical h-56 w-4 rounded-none" role="progressbar" aria-label="25% Progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar h-1/4 rounded-none font-normal"><span class="-rotate-90">25%</span></div>
</div>
<div class="progress progress-vertical h-56 w-4 rounded-none" role="progressbar" aria-label="50% Progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar h-1/2 rounded-none font-normal"><span class="-rotate-90">50%</span></div>
</div>
<div class="progress progress-vertical h-56 w-4 rounded-none" role="progressbar" aria-label="75% Progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar h-3/4 rounded-none font-normal"><span class="-rotate-90">75%</span></div>
</div>
<div class="progress progress-vertical h-56 w-4 rounded-none" role="progressbar" aria-label="100% Progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar h-full rounded-none font-normal"><span class="-rotate-90">100%</span></div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex h-56 flex-col items-center gap-2">
  <span class="text-base-content text-xs font-light">25%</span>
  <div class="progress progress-vertical w-4" role="progressbar" aria-label="25% Progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar h-1/4"></div>
  </div>
</div>
<div class="flex h-56 flex-col items-center gap-2">
  <span class="text-base-content text-xs font-light">50%</span>
  <div class="progress progress-vertical w-4" role="progressbar" aria-label="50% Progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar h-1/2"></div>
  </div>
</div>
<div class="flex h-56 flex-col items-center gap-2">
  <span class="text-base-content text-xs font-light">75%</span>
  <div class="progress progress-vertical w-4" role="progressbar" aria-label="75% Progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar h-3/4"></div>
  </div>
</div>
<div class="flex h-56 flex-col items-center gap-2">
  <span class="text-base-content text-xs font-light">100%</span>
  <div class="progress progress-vertical w-4" role="progressbar" aria-label="100% Progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar h-full"></div>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex h-56 flex-col items-center justify-between gap-1">
  <span class="text-base-content text-xs font-light">25%</span>
  <div class="progress progress-vertical w-4" role="progressbar" aria-label="25% Progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar h-1/4"></div>
  </div>
  <p class="text-base-content text-xs font-medium">Title</p>
</div>
<div class="flex h-56 flex-col items-center justify-between gap-1">
  <span class="text-base-content text-xs font-light">50%</span>
  <div class="progress progress-vertical w-4" role="progressbar" aria-label="50% Progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar h-1/2"></div>
  </div>
  <p class="text-base-content text-xs font-medium">Title</p>
</div>
<div class="flex h-56 flex-col items-center justify-between gap-1">
  <span class="text-base-content text-xs font-light">75%</span>
  <div class="progress progress-vertical w-4" role="progressbar" aria-label="75% Progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar h-3/4"></div>
  </div>
  <p class="text-base-content text-xs font-medium">Title</p>
</div>
<div class="flex h-56 flex-col items-center justify-between gap-1">
  <span class="text-base-content text-xs font-light">100%</span>
  <div class="progress progress-vertical w-4" role="progressbar" aria-label="100% Progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar h-full"></div>
  </div>
  <p class="text-base-content text-xs font-medium">Title</p>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex gap-5">
  <div class="flex h-56 gap-1">
    <div class="relative w-10"><span class="progress-label absolute bottom-[calc(25%-0.75rem)] start-0">25%</span></div>
    <div class="progress progress-vertical w-2" role="progressbar" aria-label="25% Progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" >
      <div class="progress-bar h-1/4"></div>
    </div>
  </div>
  
  <div class="flex h-56 gap-1">
    <div class="progress progress-vertical w-2" role="progressbar" aria-label="50% Progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" >
      <div class="progress-bar h-1/2"></div>
    </div>
    <div class="relative w-10"><span class="progress-label absolute bottom-[calc(50%-0.75rem)] start-0">50%</span></div>
  </div>
</div>

<div class="flex gap-5">
  <div class="flex h-56 gap-1">
    <div class="relative w-10">
      <span class="progress-label border-primary text-primary absolute bottom-[calc(75%-0.75rem)] start-0">75%</span>
    </div>
    <div class="progress progress-vertical w-2" role="progressbar" aria-label="75% Progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" >
      <div class="progress-bar progress-primary h-3/4"></div>
    </div>
  </div>
  
  <div class="flex h-56 gap-1">
    <div class="progress progress-vertical w-2" role="progressbar" aria-label="100% Progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" >
      <div class="progress-bar progress-primary h-full"></div>
    </div>
    <div class="relative w-11">
      <span class="progress-label border-primary text-primary absolute bottom-[calc(100%-0.75rem)] start-0">100%</span>
    </div>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="progress w-56" role="progressbar" aria-label="Neutral Progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar w-3/4"></div>
</div>
<div class="progress w-56" role="progressbar" aria-label="Primary Progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-primary w-3/4"></div>
</div>
<div class="progress w-56" role="progressbar" aria-label="Secondary Progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-secondary w-3/4"></div>
</div>
<div class="progress w-56" role="progressbar" aria-label="Accent Progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-accent w-3/4"></div>
</div>
<div class="progress w-56" role="progressbar" aria-label="Info Progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-info w-3/4"></div>
</div>
<div class="progress w-56" role="progressbar" aria-label="Success Progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-success w-3/4"></div>
</div>
<div class="progress w-56" role="progressbar" aria-label="Warning Progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-warning w-3/4"></div>
</div>
<div class="progress w-56" role="progressbar" aria-label="Error Progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-error w-3/4"></div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="progress w-56" role="progressbar" aria-label="Neutral Progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-striped w-3/4"></div>
</div>
<div class="progress w-56" role="progressbar" aria-label="Primary Progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-primary progress-striped w-3/4"></div>
</div>
<div class="progress w-56" role="progressbar" aria-label="Secondary Progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-secondary progress-striped w-3/4"></div>
</div>
<div class="progress w-56" role="progressbar" aria-label="Accent Progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-accent progress-striped w-3/4"></div>
</div>
<div class="progress w-56" role="progressbar" aria-label="Info Progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-info progress-striped w-3/4"></div>
</div>
<div class="progress w-56" role="progressbar" aria-label="Success Progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-success progress-striped w-3/4"></div>
</div>
<div class="progress w-56" role="progressbar" aria-label="Warning Progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-warning progress-striped w-3/4"></div>
</div>
<div class="progress w-56" role="progressbar" aria-label="Error Progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-error progress-striped w-3/4"></div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="progress w-56" role="progressbar" aria-label="Neutral Progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-striped progress-animated w-3/4"></div>
</div>
<div class="progress w-56" role="progressbar" aria-label="Primary Progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-primary progress-striped progress-animated w-3/4"></div>
</div>
<div class="progress w-56" role="progressbar" aria-label="Secondary Progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-secondary progress-striped progress-animated w-3/4"></div>
</div>
<div class="progress w-56" role="progressbar" aria-label="Accent Progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-accent progress-striped progress-animated w-3/4"></div>
</div>
<div class="progress w-56" role="progressbar" aria-label="Info Progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-info progress-striped progress-animated w-3/4"></div>
</div>
<div class="progress w-56" role="progressbar" aria-label="Success Progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-success progress-striped progress-animated w-3/4"></div>
</div>
<div class="progress w-56" role="progressbar" aria-label="Warning Progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-warning progress-striped progress-animated w-3/4"></div>
</div>
<div class="progress w-56" role="progressbar" aria-label="Error Progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-error progress-striped progress-animated w-3/4"></div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="progress w-56" role="progressbar" aria-label="Rounded Progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-primary w-3/4"></div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="progress w-56 rounded-none" role="progressbar" aria-label="Squared Progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-primary w-3/4 rounded-none"></div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<!-- Default -->

<div>
  <div class="text-base-content mb-1 text-sm font-semibold">Default</div>
  <div class="progress h-3">
    <div class="progress-bar progress-primary w-1/4 rounded-e-none"></div> 
    <div class="progress-bar progress-success w-1/4 rounded-none"></div>
    <div class="progress-bar progress-error w-1/4 rounded-s-none"></div>
  </div>
</div>

<!-- Striped -->

<div>
  <div class="text-base-content mb-1 text-sm font-semibold">Striped</div>
  <div class="progress h-3">
    <div class="progress-bar progress-primary progress-striped w-1/4 rounded-e-none"></div>
    <div class="progress-bar progress-success progress-striped w-1/4 rounded-none"></div>
    <div class="progress-bar progress-error progress-striped w-1/4 rounded-s-none"></div>
  </div>
</div>

<!-- Animated -->

<div>
  <div class="text-base-content mb-1 text-sm font-semibold">Animated</div>
  <div class="progress h-3">
    <div class="progress-bar progress-primary progress-striped progress-animated w-1/4 rounded-e-none"></div>
    <div class="progress-bar progress-success progress-striped progress-animated w-1/4 rounded-none"></div>
    <div class="progress-bar progress-error progress-striped progress-animated w-1/4 rounded-s-none"></div>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="progress w-56">
  <div class="progress-bar progress-indeterminate"></div>
</div>
<div class="progress w-56">
  <div class="progress-bar progress-indeterminate progress-primary"></div>
</div>
<div class="progress w-56">
  <div class="progress-bar progress-indeterminate progress-secondary"></div>
</div>
<div class="progress w-56">
  <div class="progress-bar progress-indeterminate progress-accent"></div>
</div>
<div class="progress w-56">
  <div class="progress-bar progress-indeterminate progress-info"></div>
</div>
<div class="progress w-56">
  <div class="progress-bar progress-indeterminate progress-success"></div>
</div>
<div class="progress w-56">
  <div class="progress-bar progress-indeterminate progress-warning"></div>
</div>
<div class="progress w-56">
  <div class="progress-bar progress-indeterminate progress-error"></div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<!-- Step variant 1 -->

<div class="flex max-w-40 items-center gap-x-1">
  <div class="progress-step bg-primary" role="progressbar" aria-label="Progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ></div>
  <div class="progress-step bg-primary/10" role="progressbar" aria-label="Progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ></div>
  <div class="progress-step bg-primary/10" role="progressbar" aria-label="Progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ></div>
  <div class="progress-step bg-primary/10" role="progressbar" aria-label="Progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ></div>
  <p class="text-xs text-primary ms-1 font-medium">25%</p>
</div>

<!-- Step variant 1.1 -->

<div class="flex items-center gap-x-1">
  <div class="progress-step bg-primary" role="progressbar" aria-label="Progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ></div>
  <div class="progress-step bg-primary/10" role="progressbar" aria-label="Progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ></div>
  <div class="progress-step bg-primary/10" role="progressbar" aria-label="Progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ></div>
  <div class="progress-step bg-primary/10" role="progressbar" aria-label="Progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ></div>
  <p class="text-xs text-primary ms-1 font-medium">25%</p>
</div>

<!-- Step variant 2 -->

<div class="flex max-w-40 items-center gap-x-1">
  <div class="progress-step bg-warning" role="progressbar" aria-label="Progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ></div>
  <div class="progress-step bg-warning" role="progressbar" aria-label="Progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ></div>
  <div class="progress-step" role="progressbar" aria-label="Progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-step" role="progressbar" aria-label="Progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  <p class="text-xs text-warning ms-1 font-medium">50%</p>
</div>

<!-- Step variant 2.1 -->

<div class="flex items-center gap-x-1">
  <div class="progress-step bg-warning" role="progressbar" aria-label="Progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ></div>
  <div class="progress-step bg-warning" role="progressbar" aria-label="Progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ></div>
  <div class="progress-step" role="progressbar" aria-label="Progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-step" role="progressbar" aria-label="Progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  <p class="text-xs text-warning ms-1 font-medium">50%</p>
</div>

<!-- Step variant 3 -->

<div class="flex max-w-40 items-center gap-x-1">
  <div class="progress-step bg-success" role="progressbar" aria-label="Progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ></div>
  <div class="progress-step bg-success" role="progressbar" aria-label="Progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ></div>
  <div class="progress-step bg-success" role="progressbar" aria-label="Progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ></div>
  <div class="progress-step bg-success" role="progressbar" aria-label="Progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ></div>
  <p class="text-xs text-success ms-1 font-medium">100%</p>
</div>

<!-- Step variant 3.1 -->

<div class="flex items-center gap-x-1">
  <div class="progress-step bg-success" role="progressbar" aria-label="Progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ></div>
  <div class="progress-step bg-success" role="progressbar" aria-label="Progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ></div>
  <div class="progress-step bg-success" role="progressbar" aria-label="Progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ></div>
  <div class="progress-step bg-success" role="progressbar" aria-label="Progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ></div>
  <p class="text-xs text-success ms-1 font-medium">100%</p>
</div>

<!-- Step variant 4 -->

<div class="flex max-w-40 items-center gap-x-1">
  <div class="progress-step bg-info" role="progressbar" aria-label="Progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-step bg-info" role="progressbar" aria-label="Progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-step bg-info" role="progressbar" aria-label="Progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-step bg-info" role="progressbar" aria-label="Progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-step bg-info" role="progressbar" aria-label="Progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-step bg-info" role="progressbar" aria-label="Progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-step bg-info" role="progressbar" aria-label="Progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-step bg-info" role="progressbar" aria-label="Progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-step bg-info" role="progressbar" aria-label="Progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-step bg-info" role="progressbar" aria-label="Progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
  <p class="size-6"><span class="icon-[componentx--circle-check-filled] text-info size-6"></span></p>
</div>

<!-- Step variant 4.1 -->

<div class="flex items-center gap-x-1">
  <div class="progress-step bg-info" role="progressbar" aria-label="Progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-step bg-info" role="progressbar" aria-label="Progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-step bg-info" role="progressbar" aria-label="Progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-step bg-info" role="progressbar" aria-label="Progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-step bg-info" role="progressbar" aria-label="Progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-step bg-info" role="progressbar" aria-label="Progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-step bg-info" role="progressbar" aria-label="Progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-step bg-info" role="progressbar" aria-label="Progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-step bg-info" role="progressbar" aria-label="Progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-step bg-info" role="progressbar" aria-label="Progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
  <p class="size-6"><span class="icon-[componentx--circle-check-filled] text-info size-6"></span></p>
</div>
```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
