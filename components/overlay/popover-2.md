---
name: "Popover"
library: "ComponentX"
id: "popover-2"
type: "overlay"
quality: "standard"
tags: ["button", "overlay", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Popover

> **Type:** `overlay` · **Quality:** `standard` · **ID:** `popover-2`
> **Path:** `components/overlay/popover-2.md`

**Popover** is a premium, production-ready component from the **ComponentX** library — engineered for overlay interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `button`, `overlay`, `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Popover** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

<div class="tooltip [--trigger:click]">
  <div class="tooltip-toggle">
    <button class="btn btn-square" aria-label="Popover Button"><span class="icon-[componentx--chevron-up]"></span></button>
    <div class="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible" role="popover">
      <div class="tooltip-body bg-base-100 max-w-xs rounded-lg p-4 text-start">
        <span class="text-base-content text-lg font-medium">Popover title</span>
        <p class="text-base-content/80 text-base pt-4">
          This text serves as placeholder content for the popover, showcasing its overall look in the user interface.
        </p>
      </div>
    </div>
  </div>
</div>I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<!-- Primary popover -->
<div class="tooltip [--trigger:click]">
  <div class="tooltip-toggle">
    <button class="btn btn-square btn-primary" aria-label="Primary Popover Button"><span class="icon-[componentx--chevron-up]"></span></button>
    <div class="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible" role="popover">
      <div class="tooltip-body tooltip-primary max-w-xs rounded-lg p-4 text-start">
        <span class="text-lg font-medium">Popover title</span>
        <p class="text-base pt-4">
          This text serves as placeholder content for the popover, showcasing its overall look in the user interface.
        </p>
      </div>
    </div>
  </div>
</div>
<!-- Secondary popover -->
<div class="tooltip [--trigger:click]">
  <div class="tooltip-toggle">
    <button class="btn btn-square btn-secondary" aria-label="Secondary Popover Button"><span class="icon-[componentx--chevron-up]"></span></button>
    <div class="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible" role="popover">
      <div class="tooltip-body tooltip-secondary max-w-xs rounded-lg p-4 text-start">
        <span class="text-lg font-medium">Popover title</span>
        <p class="text-base pt-4">
          This text serves as placeholder content for the popover, showcasing its overall look in the user interface.
        </p>
      </div>
    </div>
  </div>
</div>
<!-- Accent popover -->
<div class="tooltip [--trigger:click]">
  <div class="tooltip-toggle">
    <button class="btn btn-square btn-accent" aria-label="Accent Popover Button"><span class="icon-[componentx--chevron-up]"></span></button>
    <div class="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible" role="popover">
      <div class="tooltip-body tooltip-accent max-w-xs rounded-lg p-4 text-start">
        <span class="text-lg font-medium">Popover title</span>
        <p class="text-base pt-4">
          This text serves as placeholder content for the popover, showcasing its overall look in the user interface.
        </p>
      </div>
    </div>
  </div>
</div>
<!-- Info popover -->
<div class="tooltip [--trigger:click]">
  <div class="tooltip-toggle">
    <button class="btn btn-square btn-info" aria-label="Info Popover Button"><span class="icon-[componentx--chevron-up]"></span></button>
    <div class="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible" role="popover">
      <div class="tooltip-body tooltip-info max-w-xs rounded-lg p-4 text-start">
        <span class="text-lg font-medium">Popover title</span>
        <p class="text-base pt-4">
          This text serves as placeholder content for the popover, showcasing its overall look in the user interface.
        </p>
      </div>
    </div>
  </div>
</div>
<!-- Success popover -->
<div class="tooltip [--trigger:click]">
  <div class="tooltip-toggle">
    <button class="btn btn-square btn-success" aria-label="Success Popover Button"><span class="icon-[componentx--chevron-up]"></span></button>
    <div class="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible" role="popover">
      <div class="tooltip-body tooltip-success max-w-xs rounded-lg p-4 text-start">
        <span class="text-lg font-medium">Popover title</span>
        <p class="text-base pt-4">
          This text serves as placeholder content for the popover, showcasing its overall look in the user interface.
        </p>
      </div>
    </div>
  </div>
</div>
<!-- Warning popover -->
<div class="tooltip [--trigger:click]">
  <div class="tooltip-toggle">
    <button class="btn btn-square btn-warning" aria-label="Warning Popover Button"><span class="icon-[componentx--chevron-up]"></span></button>
    <div class="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible" role="popover">
      <div class="tooltip-body tooltip-warning max-w-xs rounded-lg p-4 text-start">
        <span class="text-lg font-medium">Popover title</span>
        <p class="text-base pt-4">
          This text serves as placeholder content for the popover, showcasing its overall look in the user interface.
        </p>
      </div>
    </div>
  </div>
</div>
<!-- Error popover -->
<div class="tooltip [--trigger:click]">
  <div class="tooltip-toggle">
    <button class="btn btn-square btn-error" aria-label="Error Popover Button"><span class="icon-[componentx--chevron-up]"></span></button>
    <div class="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible" role="popover">
      <div class="tooltip-body tooltip-error max-w-xs rounded-lg p-4 text-start">
        <span class="text-lg font-medium">Popover title</span>
        <p class="text-base pt-4">
          This text serves as placeholder content for the popover, showcasing its overall look in the user interface.
        </p>
      </div>
    </div>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<!-- Left popover -->
<div class="tooltip [--trigger:click] [--placement:left]">
  <div class="tooltip-toggle">
    <button class="btn btn-square" aria-label="Popover Button"><span class="icon-[componentx--chevron-left]"></span></button>
    <div class="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible" role="popover">
      <div class="tooltip-body bg-base-100 max-w-xs rounded-lg p-4 text-start">
        <span class="text-base-content text-lg font-medium">Popover title</span>
        <p class="text-base-content/80 text-base pt-4">
          This text serves as placeholder content for the popover, showcasing its overall look in the user interface.
        </p>
      </div>
    </div>
  </div>
</div>
<!-- Top popover (default) -->
<div class="tooltip [--trigger:click]">
  <div class="tooltip-toggle">
    <button class="btn btn-square" aria-label="Popover Button"><span class="icon-[componentx--chevron-up]"></span></button>
    <div class="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible" role="popover">
      <div class="tooltip-body bg-base-100 max-w-xs rounded-lg p-4 text-start">
        <span class="text-base-content text-lg font-medium">Popover title</span>
        <p class="text-base-content/80 text-base pt-4">
          This text serves as placeholder content for the popover, showcasing its overall look in the user interface.
        </p>
      </div>
    </div>
  </div>
</div>
<!-- Bottom popover -->
<div class="tooltip [--placement:bottom] [--trigger:click]">
  <div class="tooltip-toggle">
    <button class="btn btn-square" aria-label="Popover Button"><span class="icon-[componentx--chevron-down]"></span></button>
    <div class="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible" role="popover">
      <div class="tooltip-body bg-base-100 max-w-xs rounded-lg p-4 text-start">
        <span class="text-base-content text-lg font-medium">Popover title</span>
        <p class="text-base-content/80 text-base pt-4">
          This text serves as placeholder content for the popover, showcasing its overall look in the user interface.
        </p>
      </div>
    </div>
  </div>
</div>
<!-- Right popover -->
<div class="tooltip [--placement:right] [--trigger:click]">
  <div class="tooltip-toggle">
    <button class="btn btn-square" aria-label="Popover Button"><span class="icon-[componentx--chevron-right]"></span></button>
    <div class="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible" role="popover">
      <div class="tooltip-body bg-base-100 max-w-xs rounded-lg p-4 text-start">
        <span class="text-base-content text-lg font-medium">Popover title</span>
        <p class="text-base-content/80 text-base pt-4">
          This text serves as placeholder content for the popover, showcasing its overall look in the user interface.
        </p>
      </div>
    </div>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="tooltip [--trigger:click]">
  <div class="tooltip-toggle">
    <p class="text-primary cursor-pointer select-none flex items-center gap-1">
      Ratings & reviews
      <span class="icon-[componentx--eye-closed] tooltip-shown:hidden"></span>
      <span class="icon-[componentx--eye] hidden tooltip-shown:inline-block"></span>
    </p>
    <div class="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible p-4" role="popover">
      <div class="tooltip-body bg-base-100 text-base-content/80 flex max-w-xs flex-col gap-1 rounded-lg p-4 text-start" >
        <div class="text-primary text-xl flex items-center gap-1 font-medium">
          4.35
          <span class="icon-[componentx--star-filled] size-5"></span>
        </div>
        <div class="text-base-content font-medium">Total 300 reviews</div>
        <p>All reviews are from genuine customers.</p>
        <div class="mt-4 flex items-center justify-between">
          <span class="badge badge-soft badge-primary rounded-full">+6 this week</span>
          <a href="#" class="link link-primary link-hover text-sm">See all</a>
        </div>
        <div class="divider my-2"></div>
        <div class="space-y-2">
          <div class="flex w-full items-center gap-2">
            <span class="text-sm text-nowrap font-medium leading-5">5 Star</span>
            <div class="progress" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar progress-primary w-3/4"></div>
            </div>
            <span class="text-sm font-medium leading-5">225</span>
          </div>
          <div class="flex w-full items-center gap-2">
            <span class="text-sm text-nowrap font-medium leading-5">4 Star</span>
            <div class="progress" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar progress-primary w-[10%]"></div>
            </div>
            <span class="text-sm font-medium leading-5">30</span>
          </div>
          <div class="flex w-full items-center gap-2">
            <span class="text-sm text-nowrap font-medium leading-5">3 Star</span>
            <div class="progress" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar progress-primary w-[10%]"></div>
            </div>
            <span class="text-sm font-medium leading-5">30</span>
          </div>
          <div class="flex w-full items-center gap-2">
            <span class="text-sm text-nowrap font-medium leading-5">2 Star</span>
            <div class="progress" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar progress-primary w-[5%]"></div>
            </div>
            <span class="text-sm font-medium leading-5">15</span>
          </div>
          <div class="flex w-full items-center gap-2">
            <span class="text-sm text-nowrap font-medium leading-5">1 Star</span>
            <div class="progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar progress-primary w-0"></div>
            </div>
            <span class="text-sm font-medium leading-5">00</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="tooltip [--trigger:click] [--scope:window]">
  <div class="tooltip-toggle">
    <button class="btn btn-square" aria-label="Popover Button"><span class="icon-[componentx--chevron-up]"></span></button>
    <div class="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible" role="popover">
      <div class="tooltip-body bg-base-100 max-w-xs rounded-lg p-4 text-start">
        <span class="text-base-content text-lg font-medium">Popover title</span>
        <p class="text-base-content/80 text-base py-4">
          This text serves as placeholder content for the popover, showcasing its overall look in the user interface.
        </p>
        <a href="#" class="link link-primary">Click me</a>
      </div>
    </div>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="tooltip">
  <div class="tooltip-toggle">
    <button class="btn btn-square" aria-label="Popover Button"><span class="icon-[componentx--chevron-up]"></span></button>
    <div class="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible" role="popover">
      <div class="tooltip-body bg-base-100 max-w-xs rounded-lg p-4 text-start">
        <span class="text-base-content text-lg font-medium">Popover title</span>
        <p class="text-base-content/80 text-base py-4">
          This text serves as placeholder content for the popover, showcasing its overall look in the user interface.
        </p>
        <a href="#" class="link link-primary">Click me</a>
      </div>
    </div>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="tooltip [--trigger:click] [--interaction:true]">
  <div class="tooltip-toggle">
    <button class="btn btn-square" aria-label="Popover Button"><span class="icon-[componentx--chevron-up]"></span></button>
    <div class="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible " role="popover">
      <div class="tooltip-body bg-base-100 max-w-xs rounded-lg p-4 text-start">
        <span class="text-base-content text-lg font-medium">Popover title</span>
        <p class="text-base-content/80 text-base py-4">
          This text serves as placeholder content for the popover, showcasing its overall look in the user interface.
        </p>
        <a href="#" class="link link-primary">Click me</a>
      </div>
    </div>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="tooltip show [--trigger:click] [--strategy:absolute] [--placement:bottom]">
  <div class="tooltip-toggle">
    <button class="btn btn-square" aria-label="Popover Button"><span class="icon-[componentx--chevron-down]"></span></button>
    <div class="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible" role="popover">
      <div class="tooltip-body bg-base-100 w-64 sm:max-w-xs rounded-lg p-4 text-start">
        <span class="text-base-content text-lg font-medium">Popover title</span>
        <p class="text-base-content/80 text-base pt-4">
          This text serves as placeholder content for the popover, showcasing its overall look in the user interface.
        </p>
      </div>
    </div>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="tooltip show [--trigger:click] [--placement:right-start] [--prevent-popper:true]">
  <div class="tooltip-toggle">
    <button class="btn btn-square" aria-label="Popover Button"><span class="icon-[componentx--chevron-down]"></span></button>
    <div class="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible" role="popover">
      <div class="tooltip-body bg-base-100 w-64 sm:max-w-xs rounded-lg p-4 text-start">
        <span class="text-base-content text-lg font-medium">Popover title</span>
        <p class="text-base-content/80 text-base pt-4">
          This text serves as placeholder content for the popover, showcasing its overall look in the user interface.
        </p>
      </div>
    </div>
  </div>
</div>
```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
