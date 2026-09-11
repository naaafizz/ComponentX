---
name: "Radial progress"
library: "ComponentX"
id: "radial-progress"
type: "data-display"
quality: "advanced"
tags: ["data", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Radial progress

> **Type:** `data-display` · **Quality:** `advanced` · **ID:** `radial-progress`
> **Path:** `components/data-display/radial-progress.md`

**Radial progress** is a premium, production-ready component from the **ComponentX** library — engineered for data display interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Advanced tier** — richer composition and interaction, engineered for complex layouts while keeping the public surface tight.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `data`, `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Radial progress** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
<div class="radial-progress" style="--value:75;" role="progressbar" aria-label="Radial Progress"></div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="radial-progress" style="--value:0;" role="progressbar" aria-label="0% Radial Progressbar">0%</div>
<div class="radial-progress" style="--value:20;" role="progressbar" aria-label="20% Radial Progressbar">20%</div>
<div class="radial-progress" style="--value:60;" role="progressbar" aria-label="60% Radial Progressbar">60%</div>
<div class="radial-progress" style="--value:80;" role="progressbar" aria-label="80% Radial Progressbar">80%</div>
<div class="radial-progress" style="--value:100;" role="progressbar" aria-label="100% Radial Progressbar">100%</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="radial-progress" style="--value:60;" role="progressbar" aria-label="60% Radial Progressbar">
  <div class="mx-auto">60%</div>
  <span class="text-secondary text-xs">Loss</span>
</div>
<div class="radial-progress" style="--value:80;" role="progressbar" aria-label="80% Radial Progressbar">
  <div class="mx-auto">80%</div>
  <span class="text-secondary text-xs">Profit</span>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="radial-progress text-neutral" style="--value:70;" role="progressbar" aria-label="Neutral Radial Progressbar">70%</div>
<div class="radial-progress text-primary" style="--value:70;" role="progressbar" aria-label="Primary Radial Progressbar">70%</div>
<div class="radial-progress text-secondary" style="--value:70;" role="progressbar" aria-label="Secondary Radial Progressbar">70%</div>
<div class="radial-progress text-accent" style="--value:70;" role="progressbar" aria-label="Accent Radial Progressbar">70%</div>
<div class="radial-progress text-info" style="--value:70;" role="progressbar" aria-label="Info Radial Progressbar">70%</div>
<div class="radial-progress text-success" style="--value:70;" role="progressbar" aria-label="Success Radial Progressbar">70%</div>
<div class="radial-progress text-warning" style="--value:70;" role="progressbar" aria-label="Warning Radial Progressbar">70%</div>
<div class="radial-progress text-error" style="--value:70;" role="progressbar" aria-label="Error Radial Progressbar">70%</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="radial-progress bg-neutral text-neutral-content border-neutral border-4" style="--value:70;" role="progressbar" aria-label="Neutral Radial Progressbar">70%</div>
<div class="radial-progress bg-primary text-primary-content border-primary border-4" style="--value:70;" role="progressbar" aria-label="Primary Radial Progressbar">70%</div>
<div class="radial-progress bg-secondary text-secondary-content border-secondary border-4"style="--value:70;"role="progressbar" aria-label="Secondary Radial Progressbar">70%</div>
<div class="radial-progress bg-accent text-accent-content border-accent border-4" style="--value:70;" role="progressbar" aria-label="Accent Radial Progressbar">70%</div>
<div class="radial-progress bg-info text-info-content border-info border-4" style="--value:70;" role="progressbar" aria-label="Info Radial Progressbar">70%</div>
<div class="radial-progress bg-success text-success-content border-success border-4" style="--value:70;" role="progressbar" aria-label="Success Radial Progressbar">70%</div>
<div class="radial-progress bg-warning text-warning-content border-warning border-4" style="--value:70;" role="progressbar" aria-label="Warning Radial Progressbar">70%</div>
<div class="radial-progress bg-error text-error-content border-error border-4" style="--value:70;" role="progressbar" aria-label="Error Radial Progressbar">70%</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="radial-progress bg-neutral/10 text-neutral border-4 border-transparent" style="--value:70;" role="progressbar" aria-label="Neutral Radial Progressbar">70%</div>
<div class="radial-progress bg-primary/10 text-primary border-4 border-transparent" style="--value:70;" role="progressbar" aria-label="Primary Radial Progressbar">70%</div>
<div class="radial-progress bg-secondary/10 text-secondary border-4 border-transparent" style="--value:70;" role="progressbar" aria-label="Secondary Radial Progressbar">70%</div>
<div class="radial-progress bg-accent/10 text-accent border-4 border-transparent" style="--value:70;" role="progressbar" aria-label="Accent Radial Progressbar">70%</div>
<div class="radial-progress bg-info/10 text-info border-4 border-transparent" style="--value:70;" role="progressbar" aria-label="Info Radial Progressbar">70%</div>
<div class="radial-progress bg-success/10 text-success border-4 border-transparent" style="--value:70;" role="progressbar" aria-label="Success Radial Progressbar">70%</div>
<div class="radial-progress bg-warning/10 text-warning border-4 border-transparent" style="--value:70;" role="progressbar" aria-label="Warning Radial Progressbar">70%</div>
<div class="radial-progress bg-error/10 text-error border-4 border-transparent" style="--value:70;" role="progressbar" aria-label="Error Radial Progressbar">70%</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="radial-progress" style="--value:70; --size:12rem; --thickness: 2px;" role="progressbar" aria-label="Radial Progressbar">70%</div>
<div class="radial-progress" style="--value:70; --size:12rem; --thickness: 2rem;" role="progressbar" aria-label="Radial Progressbar">70%</div>
<div class="radial-progress bg-primary/10 text-primary border-4 border-transparent" style="--value:70; --size:12rem; --thickness: 1rem;" role="progressbar" aria-label="Radial Progressbar">70%</div>
```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
