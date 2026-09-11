---
name: "Stepper"
library: "ComponentX"
id: "stepper"
type: "form"
quality: "standard"
tags: ["component", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Stepper

> **Type:** `form` · **Quality:** `standard` · **ID:** `stepper`
> **Path:** `components/form/stepper.md`

**Stepper** is a premium, production-ready component from the **ComponentX** library — engineered for form interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Stepper** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
<ul class="relative flex w-full gap-x-2">
  <li class="group flex-1 shrink basis-0">
    <div class="min-h-7.5 min-w-7.5 inline-flex w-full items-center align-middle text-sm">
      <span class="text-bg-soft-neutral size-7.5 flex shrink-0 items-center justify-center rounded-full text-sm font-medium" >
        1
      </span>
      <div class="bg-neutral/20 ms-2 h-px w-full flex-1 group-last:hidden"></div>
    </div>
    <div class="mt-2.5">
      <span class="text-base-content block">Step</span>
    </div>
  </li>

  <li class="group flex-1 shrink basis-0">
    <div class="min-h-7.5 min-w-7.5 inline-flex w-full items-center align-middle text-sm">
      <span class="text-bg-soft-neutral size-7.5 flex shrink-0 items-center justify-center rounded-full text-sm font-medium" >
        2
      </span>
      <div class="bg-neutral/20 ms-2 h-px w-full flex-1 group-last:hidden"></div>
    </div>
    <div class="mt-2.5">
      <span class="text-base-content block">Step</span>
    </div>
  </li>

  <li class="group flex-1 shrink basis-0">
    <div class="min-h-7.5 min-w-7.5 inline-flex w-full items-center align-middle text-sm">
      <span class="text-bg-soft-neutral size-7.5 flex shrink-0 items-center justify-center rounded-full text-sm font-medium" >
        3
      </span>
      <div class="bg-neutral/20 ms-2 h-px w-full flex-1 group-last:hidden"></div>
    </div>
    <div class="mt-2.5">
      <span class="text-base-content block">Step</span>
    </div>
  </li>
</ul>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<ul class="relative flex h-96 flex-col gap-y-2">
  <li class="group flex flex-1 shrink basis-0 flex-col w-fit">
    <div class="flex items-center justify-center gap-2.5 text-sm">
      <span class="text-bg-soft-neutral size-7.5 flex shrink-0 items-center justify-center rounded-full text-sm font-medium" >
        1
      </span>
      <div class="text-base-content block">Step</div>
    </div>
    <div class="bg-neutral/20 ms-3.5 mt-2 h-full w-px justify-self-start group-last:hidden"></div>
  </li>

  <li class="group flex flex-1 shrink basis-0 flex-col w-fit">
    <div class="flex items-center justify-center gap-2.5 text-sm">
      <span class="text-bg-soft-neutral size-7.5 flex shrink-0 items-center justify-center rounded-full text-sm font-medium" >
        2
      </span>
      <div class="text-base-content block">Step</div>
    </div>
    <div class="bg-neutral/20 ms-3.5 mt-2 h-full w-px justify-self-start group-last:hidden"></div>
  </li>

  <li class="group flex flex-1 shrink basis-0 flex-col w-fit">
    <div class="flex items-center justify-center gap-2.5 text-sm">
      <span class="text-bg-soft-neutral size-7.5 flex shrink-0 items-center justify-center rounded-full text-sm font-medium" >
        3
      </span>
      <div class="text-base-content block">Step</div>
    </div>
    <div class="bg-neutral/20 ms-3.5 mt-2 h-full w-px justify-self-start group-last:hidden"></div>
  </li>
</ul>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<ul class="relative flex w-full gap-x-2">
  <li class="group flex flex-1 shrink basis-0 items-center gap-x-2">
    <div class="min-h-7.5 min-w-7.5 inline-flex items-center justify-center align-middle text-sm">
      <span class="text-bg-soft-neutral size-7.5 flex shrink-0 items-center justify-center rounded-full font-medium" >
        1
      </span>
      <span class="text-base-content ms-2 block max-sm:hidden">Step</span>
    </div>
    <div class="bg-neutral/20 h-px w-full flex-1 group-last:hidden"></div>
  </li>

  <li class="group flex flex-1 shrink basis-0 items-center gap-x-2">
    <div class="min-h-7.5 min-w-7.5 inline-flex items-center justify-center align-middle text-sm">
      <span class="text-bg-soft-neutral size-7.5 flex shrink-0 items-center justify-center rounded-full font-medium" >
        2
      </span>
      <span class="text-base-content ms-2 block max-sm:hidden">Step</span>
    </div>
    <div class="bg-neutral/20 h-px w-full flex-1 group-last:hidden"></div>
  </li>

  <li class="group flex flex-1 shrink basis-0 items-center gap-x-2">
    <div class="min-h-7.5 min-w-7.5 inline-flex items-center justify-center align-middle text-sm">
      <span class="text-bg-soft-neutral size-7.5 flex shrink-0 items-center justify-center rounded-full font-medium" >
        3
      </span>
      <span class="text-base-content ms-2 block max-sm:hidden">Step</span>
    </div>
    <div class="bg-neutral/20 h-px w-full flex-1 group-last:hidden"></div>
  </li>
</ul>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<ul class="relative flex w-full gap-x-2">
  <li class="group flex-1 shrink basis-0">
    <div class="min-h-7.5 min-w-7.5 inline-flex w-full items-center align-middle text-sm">
      <span class="border border-neutral-200 text-base-content size-7.5 flex shrink-0 items-center justify-center rounded-full text-sm font-medium" >
        1
      </span>
      <div class="bg-neutral/20 ms-2 h-px w-full flex-1 group-last:hidden"></div>
    </div>
    <div class="mt-2.5">
      <span class="text-base-content block">Step</span>
    </div>
  </li>

  <li class="group flex-1 shrink basis-0">
    <div class="min-h-7.5 min-w-7.5 inline-flex w-full items-center align-middle text-sm">
      <span class="border border-neutral-200 text-base-content size-7.5 flex shrink-0 items-center justify-center rounded-full text-sm font-medium" >
        2
      </span>
      <div class="bg-neutral/20 ms-2 h-px w-full flex-1 group-last:hidden"></div>
    </div>
    <div class="mt-2.5">
      <span class="text-base-content block">Step</span>
    </div>
  </li>

  <li class="group flex-1 shrink basis-0">
    <div class="min-h-7.5 min-w-7.5 inline-flex w-full items-center align-middle text-sm">
      <span class="border border-neutral-200 text-base-content size-7.5 flex shrink-0 items-center justify-center rounded-full text-sm font-medium" >
        3
      </span>
      <div class="bg-neutral/20 ms-2 h-px w-full flex-1 group-last:hidden"></div>
    </div>
    <div class="mt-2.5">
      <span class="text-base-content block">Step</span>
    </div>
  </li>
</ul>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<ul class="relative flex w-full gap-x-2">
  <li class="group flex-1 shrink basis-0">
    <div class="min-h-7.5 min-w-7.5 inline-flex w-full items-center align-middle text-sm">
      <span class="text-bg-neutral size-7.5 flex shrink-0 items-center justify-center rounded-full text-sm font-medium" >
        1
      </span>
      <div class="bg-neutral/20 ms-2 h-px w-full flex-1 group-last:hidden"></div>
    </div>
    <div class="mt-2.5">
      <span class="text-base-content block">Step</span>
    </div>
  </li>

  <li class="group flex-1 shrink basis-0">
    <div class="min-h-7.5 min-w-7.5 inline-flex w-full items-center align-middle text-sm">
      <span class="text-bg-neutral size-7.5 flex shrink-0 items-center justify-center rounded-full text-sm font-medium" >
        2
      </span>
      <div class="bg-neutral/20 ms-2 h-px w-full flex-1 group-last:hidden"></div>
    </div>
    <div class="mt-2.5">
      <span class="text-base-content block">Step</span>
    </div>
  </li>

  <li class="group flex-1 shrink basis-0">
    <div class="min-h-7.5 min-w-7.5 inline-flex w-full items-center align-middle text-sm">
      <span class="text-bg-neutral size-7.5 flex shrink-0 items-center justify-center rounded-full text-sm font-medium" >
        3
      </span>
      <div class="bg-neutral/20 ms-2 h-px w-full flex-1 group-last:hidden"></div>
    </div>
    <div class="mt-2.5">
      <span class="text-base-content block">Step</span>
    </div>
  </li>
</ul>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<ul class="relative flex w-full gap-x-2">
  <li class="group flex-1 shrink basis-0">
    <div class="min-h-7.5 min-w-7.5 inline-flex w-full items-center align-middle text-sm">
      <span class="text-bg-soft-neutral size-7.5 flex shrink-0 items-center justify-center rounded-field text-sm font-medium" >
        1
      </span>
      <div class="bg-neutral/20 ms-2 h-px w-full flex-1 group-last:hidden"></div>
    </div>
    <div class="mt-2.5">
      <span class="text-base-content block">Step</span>
    </div>
  </li>

  <li class="group flex-1 shrink basis-0">
    <div class="min-h-7.5 min-w-7.5 inline-flex w-full items-center align-middle text-sm">
      <span class="text-bg-soft-neutral size-7.5 flex shrink-0 items-center justify-center rounded-field text-sm font-medium" >
        2
      </span>
      <div class="bg-neutral/20 ms-2 h-px w-full flex-1 group-last:hidden"></div>
    </div>
    <div class="mt-2.5">
      <span class="text-base-content block">Step</span>
    </div>
  </li>

  <li class="group flex-1 shrink basis-0">
    <div class="min-h-7.5 min-w-7.5 inline-flex w-full items-center align-middle text-sm">
      <span class="text-bg-soft-neutral size-7.5 flex shrink-0 items-center justify-center rounded-field text-sm font-medium" >
        3
      </span>
      <div class="bg-neutral/20 ms-2 h-px w-full flex-1 group-last:hidden"></div>
    </div>
    <div class="mt-2.5">
      <span class="text-base-content block">Step</span>
    </div>
  </li>
</ul>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<ul class="relative flex w-full gap-x-2">
  <li class="group flex-1 shrink basis-0">
    <div class="min-h-7.5 min-w-7.5 inline-flex w-full items-center align-middle text-sm">
      <span class="text-bg-soft-neutral size-7.5 flex shrink-0 items-center justify-center rounded-full text-sm font-medium" >
        1
      </span>
      <div class="bg-neutral/20 ms-2 h-px w-full flex-1 group-last:hidden"></div>
    </div>
    <div class="mt-2.5">
      <span class="text-base-content block">Step</span>
    </div>
  </li>

  <li class="group flex-1 shrink basis-0">
    <div class="min-h-7.5 min-w-7.5 inline-flex w-full items-center align-middle text-sm">
      <span class="text-bg-soft-neutral size-7.5 flex shrink-0 items-center justify-center rounded-full text-sm font-medium" >
        2
      </span>
      <div class="bg-neutral/20 ms-2 h-px w-full flex-1 group-last:hidden"></div>
    </div>
    <div class="mt-2.5">
      <span class="text-base-content block">Step</span>
    </div>
  </li>

  <li class="group flex-1 shrink basis-0">
    <div class="min-h-7.5 min-w-7.5 inline-flex w-full items-center align-middle text-sm">
      <span class="text-bg-soft-neutral size-7.5 flex shrink-0 items-center justify-center rounded-full text-sm font-medium" >
        3
      </span>
      <div class="bg-neutral/20 ms-2 h-px w-full flex-1 group-last:hidden"></div>
    </div>
    <div class="mt-2.5">
      <span class="text-base-content block">Step</span>
    </div>
  </li>
</ul>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<ul class="relative mx-auto flex w-96 gap-x-2">
  <li class="group flex-1 shrink basis-0">
    <div class="min-h-7.5 min-w-7.5 inline-flex w-full items-center align-middle text-sm">
      <span class="text-bg-soft-neutral size-7.5 flex shrink-0 items-center justify-center rounded-full text-sm font-medium" >
        1
      </span>
      <div class="bg-neutral/20 ms-2 h-px w-full flex-1 group-last:hidden"></div>
    </div>
    <div class="mt-2.5">
      <span class="text-base-content block">Step</span>
    </div>
  </li>

  <li class="group flex-1 shrink basis-0">
    <div class="min-h-7.5 min-w-7.5 inline-flex w-full items-center align-middle text-sm">
      <span class="text-bg-soft-neutral size-7.5 flex shrink-0 items-center justify-center rounded-full text-sm font-medium" >
        2
      </span>
      <div class="bg-neutral/20 ms-2 h-px w-full flex-1 group-last:hidden"></div>
    </div>
    <div class="mt-2.5">
      <span class="text-base-content block">Step</span>
    </div>
  </li>

  <li class="group flex-1 shrink basis-0">
    <div class="min-h-7.5 min-w-7.5 inline-flex w-full items-center align-middle text-sm">
      <span class="text-bg-soft-neutral size-7.5 flex shrink-0 items-center justify-center rounded-full text-sm font-medium" >
        3
      </span>
      <div class="bg-neutral/20 ms-2 h-px w-full flex-1 group-last:hidden"></div>
    </div>
    <div class="mt-2.5">
      <span class="text-base-content block">Step</span>
    </div>
  </li>
</ul>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<!-- Stepper -->
<ul class="relative flex w-full gap-x-2">
  <!-- Item -->
  <li class="group flex flex-1 shrink basis-0 items-center gap-x-2">
    <div class="min-h-7.5 min-w-7.5 inline-flex items-center justify-center align-middle text-sm">
      <img class="size-7.5 shrink-0 rounded-full" src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" alt="Image Description" />
      <span class="text-base-content ms-2 block max-sm:hidden">Step</span>
    </div>
    <div class="bg-neutral/20 h-px w-full flex-1 group-last:hidden"></div>
  </li>
  <!-- End Item -->

  <!-- Item -->
  <li class="group flex flex-1 shrink basis-0 items-center gap-x-2">
    <div class="min-h-7.5 min-w-7.5 inline-flex items-center justify-center align-middle text-sm">
      <span class="text-bg-soft-neutral size-7.5 flex shrink-0 items-center justify-center rounded-full font-medium" >
        <span class="icon-[componentx--arrow-bear-left-2] size-4 shrink-0"></span>
      </span>
      <span class="text-base-content ms-2 block max-sm:hidden">Step</span>
    </div>
    <div class="bg-neutral/20 h-px w-full flex-1 group-last:hidden"></div>
  </li>
  <!-- End Item -->

  <!-- Item -->
  <li class="group flex flex-1 shrink basis-0 items-center gap-x-2">
    <div class="min-h-7.5 min-w-7.5 inline-flex items-center justify-center align-middle text-sm">
      <span class="text-bg-soft-neutral size-7.5 flex shrink-0 items-center justify-center rounded-full font-medium" >
        <span class="text-primary inline-block size-4 animate-spin rounded-full border-[3px] border-current border-t-transparent" role="status" aria-label="loading" >
          <span class="sr-only">Loading...</span>
        </span>
      </span>
      <span class="text-base-content ms-2 block max-sm:hidden">Step</span>
    </div>
    <div class="bg-neutral/20 h-px w-full flex-1 group-last:hidden"></div>
  </li>
  <!-- End Item -->
</ul>
<!-- End Stepper -->
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<!-- Stepper -->
<ul class="relative flex w-full flex-col gap-2 md:flex-row">
  <!-- Item -->
  <li class="group flex flex-1 gap-x-2 md:block md:shrink md:basis-0">
    <div class="min-h-7.5 min-w-7.5 flex flex-col items-center align-middle text-sm md:inline-flex md:w-full md:flex-row md:flex-wrap" >
      <span class="text-bg-soft-neutral size-7.5 flex shrink-0 items-center justify-center rounded-full font-medium" >
        1
      </span>
      <div class="bg-neutral/20 mt-2 h-full w-px group-last:hidden md:ms-2 md:mt-0 md:h-px md:w-full md:flex-1"></div>
    </div>
    <div class="grow pb-5 md:mt-2.5 md:grow-0">
      <span class="text-base-content block">Step</span>
      <p class="text-base-content/50 text-sm">This is a description text.</p>
    </div>
  </li>
  <!-- End Item -->

  <!-- Item -->
  <li class="group flex flex-1 gap-x-2 md:block md:shrink md:basis-0">
    <div class="min-h-7.5 min-w-7.5 flex flex-col items-center align-middle text-sm md:inline-flex md:w-full md:flex-row md:flex-wrap" >
      <span class="text-bg-soft-neutral size-7.5 flex shrink-0 items-center justify-center rounded-full font-medium" >
        2
      </span>
      <div class="bg-neutral/20 mt-2 h-full w-px group-last:hidden md:ms-2 md:mt-0 md:h-px md:w-full md:flex-1"></div>
    </div>
    <div class="grow pb-5 md:mt-2.5 md:grow-0">
      <span class="text-base-content block">Step</span>
      <p class="text-base-content/50 text-sm">This is a description text.</p>
    </div>
  </li>
  <!-- End Item -->

  <!-- Item -->
  <li class="group flex flex-1 gap-x-2 md:block md:shrink md:basis-0">
    <div class="min-h-7.5 min-w-7.5 flex flex-col items-center align-middle text-sm md:inline-flex md:w-full md:flex-row md:flex-wrap" >
      <span class="text-bg-soft-neutral size-7.5 flex shrink-0 items-center justify-center rounded-full font-medium" >
        3
      </span>
      <div class="bg-neutral/20 mt-2 h-full w-px group-last:hidden md:ms-2 md:mt-0 md:h-px md:w-full md:flex-1"></div>
    </div>
    <div class="grow pb-5 md:mt-2.5 md:grow-0">
      <span class="text-base-content block">Step</span>
      <p class="text-base-content/50 text-sm">This is a description text.</p>
    </div>
  </li>
  <!-- End Item -->
</ul>
<!-- End Stepper -->
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<!-- Stepper -->
<ul class="relative flex w-full flex-col gap-2 md:flex-row">
  <!-- Item -->
  <li class="group flex flex-1 shrink basis-0 flex-col gap-x-2 md:flex-row md:items-center">
    <div class="min-h-7.5 min-w-7.5 inline-flex grow items-center align-middle text-sm md:grow-0">
      <span class="text-bg-soft-neutral size-7.5 flex shrink-0 items-center justify-center rounded-full font-medium" >
        1
      </span>
      <span class="text-base-content ms-2 block grow md:grow-0">Step</span>
    </div>
    <div class="bg-neutral/20 ms-3.5 mt-2 h-4 w-px group-last:hidden md:ms-0 md:mt-0 md:h-px md:w-full md:flex-1" ></div>
  </li>
  <!-- End Item -->

  <!-- Item -->
  <li class="group flex flex-1 shrink basis-0 flex-col gap-x-2 md:flex-row md:items-center">
    <div class="min-h-7.5 min-w-7.5 inline-flex grow items-center align-middle text-sm md:grow-0">
      <span class="text-bg-soft-neutral size-7.5 flex shrink-0 items-center justify-center rounded-full font-medium" >
        2
      </span>
      <span class="text-base-content ms-2 block grow md:grow-0">Step</span>
    </div>
    <div class="bg-neutral/20 ms-3.5 mt-2 h-4 w-px group-last:hidden md:ms-0 md:mt-0 md:h-px md:w-full md:flex-1" ></div>
  </li>
  <!-- End Item -->

  <!-- Item -->
  <li class="group flex flex-1 shrink basis-0 flex-col gap-x-2 md:flex-row md:items-center">
    <div class="min-h-7.5 min-w-7.5 inline-flex grow items-center align-middle text-sm md:grow-0">
      <span class="text-bg-soft-neutral size-7.5 flex shrink-0 items-center justify-center rounded-full font-medium" >
        3
      </span>
      <span class="text-base-content ms-2 block grow md:grow-0">Step</span>
    </div>
    <div class="bg-neutral/20 ms-3.5 mt-2 h-4 w-px group-last:hidden md:ms-0 md:mt-0 md:h-px md:w-full md:flex-1" ></div>
  </li>
  <!-- End Item -->
</ul>
<!-- End Stepper -->
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<!-- Stepper -->
<div data-stepper="" class="w-full">
  <!-- Stepper Nav -->
  <ul class="relative flex flex-row gap-x-2">
    <li class="group flex flex-1 shrink basis-0 items-center gap-x-2" data-stepper-nav-item='{ "index": 1 }'>
      <span class="min-h-7.5 min-w-7.5 inline-flex items-center align-middle text-sm">
        <span class="stepper-active:text-bg-primary stepper-active:shadow-sm shadow-base-300/20 stepper-success:text-bg-primary stepper-success:shadow-sm stepper-completed:text-bg-success text-bg-soft-neutral flex size-7.5 shrink-0 items-center justify-center rounded-full font-medium" >
          <span class="stepper-success:hidden stepper-completed:hidden">1</span>
          <span class="icon-[componentx--check] stepper-success:block hidden size-4 shrink-0"></span>
        </span>
        <span class="text-base-content ms-2 max-sm:hidden">Step</span>
      </span>
      <div class="stepper-success:bg-primary stepper-completed:bg-success bg-neutral/20 h-px w-full flex-1 group-last:hidden" ></div>
    </li>
    <li class="group flex flex-1 shrink basis-0 items-center gap-x-2" data-stepper-nav-item='{ "index": 2 }'>
      <span class="min-h-7.5 min-w-7.5 inline-flex items-center align-middle text-sm">
        <span class="stepper-active:text-bg-primary stepper-active:shadow-sm shadow-base-300/20 stepper-success:text-bg-primary stepper-success:shadow-sm stepper-completed:text-bg-success stepper-error:text-bg-error text-bg-soft-neutral flex size-7.5 shrink-0 items-center justify-center rounded-full font-medium" >
          <span class="stepper-success:hidden stepper-completed:hidden">2</span>
          <span class="icon-[componentx--check] stepper-success:block hidden size-4 shrink-0"></span>
        </span>
        <span class="text-base-content ms-2 max-sm:hidden">Step</span>
      </span>
      <div class="stepper-success:bg-primary stepper-completed:bg-success bg-neutral/20 h-px w-full flex-1 group-last:hidden" ></div>
    </li>
    <li class="group flex flex-1 shrink basis-0 items-center gap-x-2" data-stepper-nav-item='{ "index": 3 }'>
      <span class="min-h-7.5 min-w-7.5 inline-flex items-center align-middle text-sm">
        <span class="stepper-active:text-bg-primary stepper-active:shadow-sm shadow-base-300/20 stepper-success:text-bg-primary stepper-success:shadow-sm stepper-completed:text-bg-success stepper-error:text-bg-error text-bg-soft-neutral flex size-7.5 shrink-0 items-center justify-center rounded-full font-medium" >
          <span class="stepper-success:hidden stepper-completed:hidden">3</span>
          <span class="icon-[componentx--check] stepper-success:block hidden size-4 shrink-0"></span>
        </span>
        <span class="text-base-content ms-2 max-sm:hidden">Step</span>
      </span>
      <div class="stepper-success:bg-primary stepper-completed:bg-success bg-neutral/20 h-px w-full flex-1 group-last:hidden" ></div>
    </li>
    <!-- End Item -->
  </ul>
  <!-- End Stepper Nav -->

  <!-- Stepper Content -->
  <div class="mt-5 sm:mt-8">
    <!-- First Content -->
    <div data-stepper-content-item='{ "index": 1 }'>
      <div class="border-base-content/40 bg-base-200/50 flex h-48 items-center justify-center rounded-xl border border-dashed p-4" >
        <h3 class="text-base-content/50 text-2xl">First content</h3>
      </div>
    </div>
    <!-- End First Content -->
    <!-- Second Content -->
    <div data-stepper-content-item='{ "index": 2 }' style="display: none;">
      <div class="border-base-content/40 bg-base-200/50 flex h-48 items-center justify-center rounded-xl border border-dashed p-4" >
        <h3 class="text-base-content/50 text-2xl">Second content</h3>
      </div>
    </div>
    <!-- End Second Content -->
    <!-- Third Content -->
    <div data-stepper-content-item='{ "index": 3 }' style="display: none;">
      <div class="border-base-content/40 bg-base-200/50 flex h-48 items-center justify-center rounded-xl border border-dashed p-4" >
        <h3 class="text-base-content/50 text-2xl">Third content</h3>
      </div>
    </div>
    <!-- End Third Content -->
    <!-- Final Content -->
    <div data-stepper-content-item='{ "isFinal": true }' style="display: none;">
      <div class="border-base-content/40 bg-base-200/50 flex h-48 items-center justify-center rounded-xl border border-dashed p-4" >
        <h3 class="text-base-content/50 text-2xl">Final content</h3>
      </div>
    </div>
    <!-- End Final Content -->
    <!-- Button Group -->
    <div class="mt-5 flex items-center justify-between gap-x-2">
      <button type="button" class="btn btn-primary" data-stepper-back-btn="">
        <span class="icon-[componentx--chevron-left] text-primary-content rtl:rotate-180"></span>
        Back
      </button>
      <button type="button" class="btn btn-primary" data-stepper-next-btn="">
        Next
        <span class="icon-[componentx--chevron-right] text-primary-content rtl:rotate-180"></span>
      </button>
      <button type="button" class="btn btn-primary" data-stepper-finish-btn="" style="display: none;"> Finish </button>
      <button type="reset" class="btn btn-primary" data-stepper-reset-btn="" style="display: none;"> Reset </button>
    </div>
    <!-- End Button Group -->
  </div>
  <!-- End Stepper Content -->
</div>
<!-- End Stepper -->
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<!-- Stepper -->
<div data-stepper='{ "mode": "non-linear" }' class="w-full" >
  <!-- Stepper Nav -->
  <ul class="relative flex flex-row gap-x-2">
    <li class="group flex flex-1 shrink basis-0 items-center gap-x-2" data-stepper-nav-item='{ "index": 1 }'>
      <span class="min-h-7.5 min-w-7.5 inline-flex items-center align-middle text-sm">
        <span class="stepper-active:text-bg-primary stepper-active:shadow-sm shadow-base-300/20 stepper-success:text-bg-primary stepper-success:shadow-sm stepper-completed:text-bg-success text-bg-soft-neutral flex size-7.5 shrink-0 items-center justify-center rounded-full font-medium" >
          <span class="stepper-success:hidden stepper-completed:hidden">1</span>
          <span class="icon-[componentx--check] stepper-success:block hidden size-4 shrink-0"></span>
        </span>
        <span class="text-base-content ms-2 max-sm:hidden">Step</span>
      </span>
      <div class="stepper-success:bg-primary stepper-completed:bg-success bg-neutral/20 h-px w-full flex-1 group-last:hidden" ></div>
    </li>
    <li class="group flex flex-1 shrink basis-0 items-center gap-x-2" data-stepper-nav-item='{ "index": 2 }'>
      <span class="min-h-7.5 min-w-7.5 inline-flex items-center align-middle text-sm">
        <span class="stepper-active:text-bg-primary stepper-active:shadow-sm shadow-base-300/20 stepper-success:text-bg-primary stepper-success:shadow-sm stepper-completed:text-bg-success stepper-error:text-bg-error text-bg-soft-neutral flex size-7.5 shrink-0 items-center justify-center rounded-full font-medium" >
          <span class="stepper-success:hidden stepper-completed:hidden">2</span>
          <span class="icon-[componentx--check] stepper-success:block hidden size-4 shrink-0"></span>
        </span>
        <span class="text-base-content ms-2 max-sm:hidden">Step</span>
      </span>
      <div class="stepper-success:bg-primary stepper-completed:bg-success bg-neutral/20 h-px w-full flex-1 group-last:hidden" ></div>
    </li>
    <li class="group flex flex-1 shrink basis-0 items-center gap-x-2" data-stepper-nav-item='{ "index": 3 }'>
      <span class="min-h-7.5 min-w-7.5 inline-flex items-center align-middle text-sm">
        <span class="stepper-active:text-bg-primary stepper-active:shadow-sm shadow-base-300/20 stepper-success:text-bg-primary stepper-success:shadow-sm stepper-completed:text-bg-success stepper-error:text-bg-error text-bg-soft-neutral flex size-7.5 shrink-0 items-center justify-center rounded-full font-medium" >
          <span class="stepper-success:hidden stepper-completed:hidden">3</span>
          <span class="icon-[componentx--check] stepper-success:block hidden size-4 shrink-0"></span>
        </span>
        <span class="text-base-content ms-2 max-sm:hidden">Step</span>
      </span>
      <div class="stepper-success:bg-primary stepper-completed:bg-success bg-neutral/20 h-px w-full flex-1 group-last:hidden" ></div>
    </li>
    <!-- End Item -->
  </ul>
  <!-- End Stepper Nav -->

  <!-- Stepper Content -->
  <div class="mt-5 sm:mt-8">
    <!-- First Content -->
    <div data-stepper-content-item='{ "index": 1 }'>
      <div class="border-base-content/40 bg-base-200/50 flex h-48 items-center justify-center rounded-xl border border-dashed p-4" >
        <h3 class="text-base-content/50 text-2xl">First content</h3>
      </div>
    </div>
    <!-- End First Content -->
    <!-- Second Content -->
    <div data-stepper-content-item='{ "index": 2 }' style="display: none;">
      <div class="border-base-content/40 bg-base-200/50 flex h-48 items-center justify-center rounded-xl border border-dashed p-4" >
        <h3 class="text-base-content/50 text-2xl">Second content</h3>
      </div>
    </div>
    <!-- End Second Content -->
    <!-- Third Content -->
    <div data-stepper-content-item='{ "index": 3 }' style="display: none;">
      <div class="border-base-content/40 bg-base-200/50 flex h-48 items-center justify-center rounded-xl border border-dashed p-4" >
        <h3 class="text-base-content/50 text-2xl">Third content</h3>
      </div>
    </div>
    <!-- End Third Content -->
    <!-- Final Content -->
    <div data-stepper-content-item='{ "isFinal": true }' style="display: none;">
      <div class="border-base-content/40 bg-base-200/50 flex h-48 items-center justify-center rounded-xl border border-dashed p-4" >
        <h3 class="text-base-content/50 text-2xl">Final content</h3>
      </div>
    </div>
    <!-- End Final Content -->
    <!-- Button Group -->
    <div class="mt-5 flex items-center justify-center sm:justify-between gap-x-2">
      <button type="button" class="btn btn-primary" data-stepper-back-btn="">
        <span class="icon-[componentx--chevron-left] text-primary-content rtl:rotate-180"></span>
        <span class="max-sm:hidden">Back</span>
      </button>
      <button type="button" class="btn btn-primary" data-stepper-complete-step-btn=' { "completedText": "This step is completed" }' >
        Complete Step
      </button>
      <button type="button" class="btn btn-primary" data-stepper-next-btn="">
        <span class="max-sm:hidden">Next</span>
        <span class="icon-[componentx--chevron-right] text-primary-content rtl:rotate-180"></span>
      </button>
      <button type="button" class="btn btn-primary" data-stepper-finish-btn="" style="display: none;"> Finish </button>
      <button type="reset" class="btn btn-primary" data-stepper-reset-btn="" style="display: none;"> Reset </button>
    </div>
    <!-- End Button Group -->
  </div>
  <!-- End Stepper Content -->
</div>
<!-- End Stepper -->
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<!-- Stepper -->
<div data-stepper="" class="w-full">
  <!-- Stepper Nav -->
  <ul class="relative flex flex-row gap-x-2">
    <li class="group flex flex-1 shrink basis-0 items-center gap-x-2" data-stepper-nav-item='{ "index": 1,  "isOptional": true }' >
      <span class="min-h-7.5 min-w-7.5 inline-flex items-center align-middle text-sm">
        <span class="stepper-active:text-bg-primary stepper-active:shadow-sm shadow-base-300/20 stepper-success:text-bg-primary stepper-success:shadow-sm stepper-completed:text-bg-success text-bg-soft-neutral flex size-7.5 shrink-0 items-center justify-center rounded-full font-medium" >
          <span class="stepper-success:hidden stepper-completed:hidden">1</span>
          <span class="icon-[componentx--check] stepper-success:block hidden size-4 shrink-0"></span>
        </span>
        <span class="text-base-content ms-2 max-sm:hidden">Step</span>
      </span>
      <div class="stepper-success:bg-primary stepper-completed:bg-success bg-neutral/20 h-px w-full flex-1 group-last:hidden" ></div>
    </li>
    <li class="group flex flex-1 shrink basis-0 items-center gap-x-2" data-stepper-nav-item='{ "index": 2,  "isOptional": true }' >
      <span class="min-h-7.5 min-w-7.5 inline-flex items-center align-middle text-sm">
        <span class="stepper-active:text-bg-primary stepper-active:shadow-sm shadow-base-300/20 stepper-success:text-bg-primary stepper-success:shadow-sm stepper-completed:text-bg-success stepper-error:text-bg-error text-bg-soft-neutral flex size-7.5 shrink-0 items-center justify-center rounded-full font-medium" >
          <span class="stepper-success:hidden stepper-completed:hidden">2</span>
          <span class="icon-[componentx--check] stepper-success:block hidden size-4 shrink-0"></span>
        </span>
        <span class="text-base-content ms-2 max-sm:hidden">Step</span>
      </span>
      <div class="stepper-success:bg-primary stepper-completed:bg-success bg-neutral/20 h-px w-full flex-1 group-last:hidden" ></div>
    </li>
    <li class="group flex flex-1 shrink basis-0 items-center gap-x-2" data-stepper-nav-item='{ "index": 3 }'>
      <span class="min-h-7.5 min-w-7.5 inline-flex items-center align-middle text-sm">
        <span class="stepper-active:text-bg-primary stepper-active:shadow-sm shadow-base-300/20 stepper-success:text-bg-primary stepper-success:shadow-sm stepper-completed:text-bg-success stepper-error:text-bg-error text-bg-soft-neutral flex size-7.5 shrink-0 items-center justify-center rounded-full font-medium" >
          <span class="stepper-success:hidden stepper-completed:hidden">3</span>
          <span class="icon-[componentx--check] stepper-success:block hidden size-4 shrink-0"></span>
        </span>
        <span class="text-base-content ms-2 max-sm:hidden">Step</span>
      </span>
      <div class="stepper-success:bg-primary stepper-completed:bg-success bg-neutral/20 h-px w-full flex-1 group-last:hidden" ></div>
    </li>
    <!-- End Item -->
  </ul>
  <!-- End Stepper Nav -->

  <!-- Stepper Content -->
  <div class="mt-5 sm:mt-8">
    <!-- First Content -->
    <div data-stepper-content-item='{ "index": 1 }'>
      <div class="border-base-content/40 bg-base-200/50 flex h-48 items-center justify-center rounded-xl border border-dashed p-4" >
        <h3 class="text-base-content/50 text-2xl">First content</h3>
      </div>
    </div>
    <!-- End First Content -->
    <!-- Second Content -->
    <div data-stepper-content-item='{ "index": 2 }' style="display: none;">
      <div class="border-base-content/40 bg-base-200/50 flex h-48 items-center justify-center rounded-xl border border-dashed p-4" >
        <h3 class="text-base-content/50 text-2xl">Second content</h3>
      </div>
    </div>
    <!-- End Second Content -->
    <!-- Third Content -->
    <div data-stepper-content-item='{ "index": 3 }' style="display: none;">
      <div class="border-base-content/40 bg-base-200/50 flex h-48 items-center justify-center rounded-xl border border-dashed p-4" >
        <h3 class="text-base-content/50 text-2xl">Third content</h3>
      </div>
    </div>
    <!-- End Third Content -->
    <!-- Final Content -->
    <div data-stepper-content-item='{ "isFinal": true }' style="display: none;">
      <div class="border-base-content/40 bg-base-200/50 flex h-48 items-center justify-center rounded-xl border border-dashed p-4" >
        <h3 class="text-base-content/50 text-2xl">Final content</h3>
      </div>
    </div>
    <!-- End Final Content -->
    <!-- Button Group -->
    <div class="mt-5 flex items-center justify-center sm:justify-between gap-x-2">
      <button type="button" class="btn btn-primary" data-stepper-back-btn="">
        <span class="icon-[componentx--chevron-left] text-primary-content rtl:rotate-180"></span>
        Back
      </button>
      <button type="button" class="btn btn-primary" data-stepper-skip-btn="" style="display: none;"> Skip </button>
      <button type="button" class="btn btn-primary" data-stepper-next-btn="">
        Next
        <span class="icon-[componentx--chevron-right] text-primary-content rtl:rotate-180"></span>
      </button>
      <button type="button" class="btn btn-primary" data-stepper-finish-btn="" style="display: none;"> Finish </button>
      <button type="reset" class="btn btn-primary" data-stepper-reset-btn="" style="display: none;"> Reset </button>
    </div>
    <!-- End Button Group -->
  </div>
  <!-- End Stepper Content -->
</div>
<!-- End Stepper -->
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<!-- Stepper -->
<div data-stepper='{ "currentIndex": 2 }' class="w-full">
  <!-- Stepper Nav -->
  <ul class="relative flex flex-row gap-x-2">
    <li class="group flex flex-1 shrink basis-0 items-center gap-x-2" data-stepper-nav-item='{ "index": 1,  "isCompleted": true }' >
      <span class="min-h-7.5 min-w-7.5 inline-flex items-center align-middle text-sm">
        <span class="stepper-active:text-bg-primary stepper-active:shadow-sm shadow-base-300/20 stepper-success:text-bg-primary stepper-success:shadow-sm stepper-completed:text-bg-success text-bg-soft-neutral flex size-7.5 shrink-0 items-center justify-center rounded-full font-medium" >
          <span class="stepper-success:hidden stepper-completed:hidden">1</span>
          <span class="icon-[componentx--check] stepper-success:block hidden size-4 shrink-0"></span>
        </span>
        <span class="text-base-content ms-2 max-sm:hidden">Step</span>
      </span>
      <div class="stepper-success:bg-primary stepper-completed:bg-success bg-neutral/20 h-px w-full flex-1 group-last:hidden" ></div>
    </li>
    <li class="group flex flex-1 shrink basis-0 items-center gap-x-2" data-stepper-nav-item='{ "index": 2 }'>
      <span class="min-h-7.5 min-w-7.5 inline-flex items-center align-middle text-sm">
        <span class="stepper-active:text-bg-primary stepper-active:shadow-sm shadow-base-300/20 stepper-success:text-bg-primary stepper-success:shadow-sm stepper-completed:text-bg-success stepper-error:text-bg-error text-bg-soft-neutral flex size-7.5 shrink-0 items-center justify-center rounded-full font-medium" >
          <span class="stepper-success:hidden stepper-completed:hidden">2</span>
          <span class="icon-[componentx--check] stepper-success:block hidden size-4 shrink-0"></span>
        </span>
        <span class="text-base-content ms-2 max-sm:hidden">Step</span>
      </span>
      <div class="stepper-success:bg-primary stepper-completed:bg-success bg-neutral/20 h-px w-full flex-1 group-last:hidden" ></div>
    </li>
    <li class="group flex flex-1 shrink basis-0 items-center gap-x-2" data-stepper-nav-item='{ "index": 3 }'>
      <span class="min-h-7.5 min-w-7.5 inline-flex items-center align-middle text-sm">
        <span class="stepper-active:text-bg-primary stepper-active:shadow-sm shadow-base-300/20 stepper-success:text-bg-primary stepper-success:shadow-sm stepper-completed:text-bg-success stepper-error:text-bg-error text-bg-soft-neutral flex size-7.5 shrink-0 items-center justify-center rounded-full font-medium" >
          <span class="stepper-success:hidden stepper-completed:hidden">3</span>
          <span class="icon-[componentx--check] stepper-success:block hidden size-4 shrink-0"></span>
        </span>
        <span class="text-base-content ms-2 max-sm:hidden">Step</span>
      </span>
      <div class="stepper-success:bg-primary stepper-completed:bg-success bg-neutral/20 h-px w-full flex-1 group-last:hidden" ></div>
    </li>
    <!-- End Item -->
  </ul>
  <!-- End Stepper Nav -->

  <!-- Stepper Content -->
  <div class="mt-5 sm:mt-8">
    <!-- First Content -->
    <div data-stepper-content-item='{ "index": 1 }'>
      <div class="border-base-content/40 bg-base-200/50 flex h-48 items-center justify-center rounded-xl border border-dashed p-4" >
        <h3 class="text-base-content/50 text-2xl">First content</h3>
      </div>
    </div>
    <!-- End First Content -->
    <!-- Second Content -->
    <div data-stepper-content-item='{ "index": 2 }' style="display: none;">
      <div class="border-base-content/40 bg-base-200/50 flex h-48 items-center justify-center rounded-xl border border-dashed p-4" >
        <h3 class="text-base-content/50 text-2xl">Second content</h3>
      </div>
    </div>
    <!-- End Second Content -->
    <!-- Third Content -->
    <div data-stepper-content-item='{ "index": 3 }' style="display: none;">
      <div class="border-base-content/40 bg-base-200/50 flex h-48 items-center justify-center rounded-xl border border-dashed p-4" >
        <h3 class="text-base-content/50 text-2xl">Third content</h3>
      </div>
    </div>
    <!-- End Third Content -->
    <!-- Final Content -->
    <div data-stepper-content-item='{ "isFinal": true }' style="display: none;">
      <div class="border-base-content/40 bg-base-200/50 flex h-48 items-center justify-center rounded-xl border border-dashed p-4" >
        <h3 class="text-base-content/50 text-2xl">Final content</h3>
      </div>
    </div>
    <!-- End Final Content -->
    <!-- Button Group -->
    <div class="mt-5 flex items-center justify-between gap-x-2">
      <button type="button" class="btn btn-primary" data-stepper-back-btn="">
        <span class="icon-[componentx--chevron-left] text-primary-content rtl:rotate-180"></span>
        Back
      </button>
      <button type="button" class="btn btn-primary" data-stepper-next-btn="">
        Next
        <span class="icon-[componentx--chevron-right] text-primary-content rtl:rotate-180"></span>
      </button>
      <button type="button" class="btn btn-primary" data-stepper-finish-btn="" style="display: none;"> Finish </button>
      <button type="reset" class="btn btn-primary" data-stepper-reset-btn="" style="display: none;"> Reset </button>
    </div>
    <!-- End Button Group -->
  </div>
  <!-- End Stepper Content -->
</div>
<!-- End Stepper -->
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<!-- Stepper -->
<div data-stepper='{ "isCompleted": true }' class="completed w-full" >
  <!-- Stepper Nav -->
  <ul class="relative flex flex-row gap-x-2">
    <li class="is-valid group flex flex-1 shrink basis-0 items-center gap-x-2" data-stepper-nav-item='{ "index": 1,  "isCompleted": true }' >
      <span class="min-h-7.5 min-w-7.5 inline-flex items-center align-middle text-sm">
        <span class="stepper-active:text-bg-primary stepper-active:shadow-sm shadow-base-300/20 stepper-success:text-bg-primary stepper-success:shadow-sm stepper-completed:text-bg-success text-bg-soft-neutral flex size-7.5 shrink-0 items-center justify-center rounded-full font-medium" >
          <span class="stepper-success:hidden stepper-completed:hidden">1</span>
          <span class="icon-[componentx--check] stepper-success:block hidden size-4 shrink-0"></span>
        </span>
        <span class="text-base-content ms-2 max-sm:hidden">Step</span>
      </span>
      <div class="stepper-success:bg-primary stepper-completed:bg-success bg-neutral/20 h-px w-full flex-1 group-last:hidden" ></div>
    </li>
    <li class="is-valid group flex flex-1 shrink basis-0 items-center gap-x-2" data-stepper-nav-item='{ "index": 2,  "isCompleted": true }' >
      <span class="min-h-7.5 min-w-7.5 inline-flex items-center align-middle text-sm">
        <span class="stepper-active:text-bg-primary stepper-active:shadow-sm shadow-base-300/20 stepper-success:text-bg-primary stepper-success:shadow-sm stepper-completed:text-bg-success stepper-error:text-bg-error text-bg-soft-neutral flex size-7.5 shrink-0 items-center justify-center rounded-full font-medium" >
          <span class="stepper-success:hidden stepper-completed:hidden">2</span>
          <span class="icon-[componentx--check] stepper-success:block hidden size-4 shrink-0"></span>
        </span>
        <span class="text-base-content ms-2 max-sm:hidden">Step</span>
      </span>
      <div class="stepper-success:bg-primary stepper-completed:bg-success bg-neutral/20 h-px w-full flex-1 group-last:hidden" ></div>
    </li>
    <li class="is-valid group flex flex-1 shrink basis-0 items-center gap-x-2" data-stepper-nav-item='{ "index": 3,  "isCompleted": true }' >
      <span class="min-h-7.5 min-w-7.5 inline-flex items-center align-middle text-sm">
        <span class="stepper-active:text-bg-primary stepper-active:shadow-sm shadow-base-300/20 stepper-success:text-bg-primary stepper-success:shadow-sm stepper-completed:text-bg-success stepper-error:text-bg-error text-bg-soft-neutral flex size-7.5 shrink-0 items-center justify-center rounded-full font-medium" >
          <span class="stepper-success:hidden stepper-completed:hidden">3</span>
          <span class="icon-[componentx--check] stepper-success:block hidden size-4 shrink-0"></span>
        </span>
        <span class="text-base-content ms-2 max-sm:hidden">Step</span>
      </span>
      <div class="stepper-success:bg-primary stepper-completed:bg-success bg-neutral/20 h-px w-full flex-1 group-last:hidden" ></div>
    </li>
    <!-- End Item -->
  </ul>
  <!-- End Stepper Nav -->

  <!-- Stepper Content -->
  <div class="mt-5 sm:mt-8">
    <!-- First Content -->
    <div data-stepper-content-item='{ "index": 1,  "isCompleted": true }'>
      <div class="border-base-content/40 bg-base-200/50 flex h-48 items-center justify-center rounded-xl border border-dashed p-4" >
        <h3 class="text-base-content/50 text-2xl">First content</h3>
      </div>
    </div>
    <!-- End First Content -->
    <!-- Second Content -->
    <div data-stepper-content-item='{ "index": 2,  "isCompleted": true }' style="display: none;">
      <div class="border-base-content/40 bg-base-200/50 flex h-48 items-center justify-center rounded-xl border border-dashed p-4" >
        <h3 class="text-base-content/50 text-2xl">Second content</h3>
      </div>
    </div>
    <!-- End Second Content -->
    <!-- Third Content -->
    <div data-stepper-content-item='{ "index": 3,  "isCompleted": true }' style="display: none;">
      <div class="border-base-content/40 bg-base-200/50 flex h-48 items-center justify-center rounded-xl border border-dashed p-4" >
        <h3 class="text-base-content/50 text-2xl">Third content</h3>
      </div>
    </div>
    <!-- End Third Content -->
    <!-- Final Content -->
    <div data-stepper-content-item='{ "isFinal": true }' style="display: none;">
      <div class="border-base-content/40 bg-base-200/50 flex h-48 items-center justify-center rounded-xl border border-dashed p-4" >
        <h3 class="text-base-content/50 text-2xl">Final content</h3>
      </div>
    </div>
    <!-- End Final Content -->
    <!-- Button Group -->
    <div class="mt-5 flex items-center justify-between gap-x-2">
      <button type="button" class="btn btn-primary" data-stepper-back-btn="" style="display: none;">
        <span class="icon-[componentx--chevron-left] text-primary-content rtl:rotate-180"></span>
        Back
      </button>
      <button type="button" class="btn btn-primary" data-stepper-next-btn="" style="display: none;">
        Next
        <span class="icon-[componentx--chevron-right] text-primary-content rtl:rotate-180"></span>
      </button>
      <button type="button" class="btn btn-primary" data-stepper-finish-btn="" style="display: none;"> Finish </button>
      <button type="reset" class="btn btn-primary" data-stepper-reset-btn="">Reset</button>
    </div>
    <!-- End Button Group -->
  </div>
  <!-- End Stepper Content -->
</div>
<!-- End Stepper -->
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<!-- Stepper -->
<div id="error-stepper" data-stepper="" class="w-full">
  <!-- Stepper Nav -->
  <ul class="relative flex flex-row gap-x-2">
    <li class="is-invalid group flex flex-1 shrink basis-0 items-center gap-x-2" data-stepper-nav-item='{ "index": 1, "isInvalid": true  }' >
      <span class="min-h-7.5 min-w-7.5 inline-flex items-center align-middle text-sm">
        <span class="stepper-active:text-bg-primary stepper-active:shadow-sm shadow-base-300/20 stepper-success:text-bg-primary stepper-success:shadow-sm stepper-completed:text-bg-success stepper-error:text-bg-error stepper-processed:bg-base-200 text-bg-soft-neutral flex size-7.5 shrink-0 items-center justify-center rounded-full font-medium" >
          <span class="stepper-success:hidden stepper-error:hidden stepper-completed:hidden stepper-processed:hidden">
            1
          </span>
          <span class="icon-[componentx--check] stepper-success:block hidden size-4 shrink-0"></span>
          <span class="icon-[componentx--x] stepper-error:block hidden size-4 shrink-0"></span>
          <span class="text-error stepper-processed:inline-block hidden size-4 animate-spin rounded-full border-[3px] border-current border-t-transparent" role="status" aria-label="loading" >
            <span class="sr-only">Loading...</span>
          </span>
        </span>
        <span class="text-base-content ms-2 max-sm:hidden">Step</span>
      </span>
      <div class="stepper-success:bg-primary stepper-completed:bg-success bg-neutral/20 h-px w-full flex-1 group-last:hidden" ></div>
    </li>
    <li class="group flex flex-1 shrink basis-0 items-center gap-x-2" data-stepper-nav-item='{ "index": 2 }'>
      <span class="min-h-7.5 min-w-7.5 inline-flex items-center align-middle text-sm">
        <span class="stepper-active:text-bg-primary stepper-active:shadow-sm shadow-base-300/20 stepper-success:text-bg-primary stepper-success:shadow-sm stepper-completed:text-bg-success stepper-error:text-bg-error stepper-processed:bg-base-200 text-bg-soft-neutral flex size-7.5 shrink-0 items-center justify-center rounded-full font-medium" >
          <span class="stepper-success:hidden stepper-error:hidden stepper-completed:hidden stepper-processed:hidden">
            2
          </span>
          <span class="icon-[componentx--check] stepper-success:block hidden size-4 shrink-0"></span>
          <span class="icon-[componentx--x] stepper-error:block hidden size-4 shrink-0"></span>
          <span class="text-error stepper-processed:inline-block hidden size-4 animate-spin rounded-full border-[3px] border-current border-t-transparent" role="status" aria-label="loading" >
            <span class="sr-only">Loading...</span>
          </span>
        </span>
        <span class="text-base-content ms-2 max-sm:hidden">Step</span>
      </span>
      <div class="stepper-success:bg-primary stepper-completed:bg-success bg-neutral/20 h-px w-full flex-1 group-last:hidden" ></div>
    </li>
    <li class="group flex flex-1 shrink basis-0 items-center gap-x-2" data-stepper-nav-item='{ "index": 3 }'>
      <span class="min-h-7.5 min-w-7.5 inline-flex items-center align-middle text-sm">
        <span class="stepper-active:text-bg-primary stepper-active:shadow-sm shadow-base-300/20 stepper-success:text-bg-primary stepper-success:shadow-sm stepper-completed:text-bg-success stepper-error:text-bg-error stepper-processed:bg-base-200 text-bg-soft-neutral flex size-7.5 shrink-0 items-center justify-center rounded-full font-medium" >
          <span class="stepper-success:hidden stepper-error:hidden stepper-completed:hidden">3</span>
          <span class="icon-[componentx--check] stepper-success:block hidden size-4 shrink-0"></span>
          <span class="icon-[componentx--x] stepper-error:block hidden size-4 shrink-0"></span>
          <span class="text-error stepper-processed:inline-block hidden size-4 animate-spin rounded-full border-[3px] border-current border-t-transparent" role="status" aria-label="loading" >
            <span class="sr-only">Loading...</span>
          </span>
        </span>
        <span class="text-base-content ms-2 max-sm:hidden">Step</span>
      </span>
      <div class="stepper-success:bg-primary stepper-completed:bg-success bg-neutral/20 h-px w-full flex-1 group-last:hidden" ></div>
    </li>
    <!-- End Item -->
  </ul>
  <!-- End Stepper Nav -->

  <!-- Stepper Content -->
  <div class="mt-5 sm:mt-8">
    <!-- First Content -->
    <div data-stepper-content-item='{ "index": 1 }'>
      <div class="border-base-content/40 bg-base-200/50 flex h-48 items-center justify-center rounded-xl border border-dashed p-4" >
        <h3 class="text-base-content/50 text-2xl">First content</h3>
      </div>
    </div>
    <!-- End First Content -->
    <!-- Second Content -->
    <div data-stepper-content-item='{ "index": 2 }' style="display: none;">
      <div class="border-base-content/40 bg-base-200/50 flex h-48 items-center justify-center rounded-xl border border-dashed p-4" >
        <h3 class="text-base-content/50 text-2xl">Second content</h3>
      </div>
    </div>
    <!-- End Second Content -->
    <!-- Third Content -->
    <div data-stepper-content-item='{ "index": 3 }' style="display: none;">
      <div class="border-base-content/40 bg-base-200/50 flex h-48 items-center justify-center rounded-xl border border-dashed p-4" >
        <h3 class="text-base-content/50 text-2xl">Third content</h3>
      </div>
    </div>
    <!-- End Third Content -->
    <!-- Final Content -->
    <div data-stepper-content-item='{ "isFinal": true }' style="display: none;">
      <div class="border-base-content/40 bg-base-200/50 flex h-48 items-center justify-center rounded-xl border border-dashed p-4" >
        <h3 class="text-base-content/50 text-2xl">Final content</h3>
      </div>
    </div>
    <!-- End Final Content -->
    <!-- Button Group -->
    <div class="mt-5 flex items-center justify-between gap-x-2">
      <button type="button" class="btn btn-primary" data-stepper-back-btn="">
        <span class="icon-[componentx--chevron-left] text-primary-content rtl:rotate-180"></span>
        Back
      </button>
      <button type="button" class="btn btn-primary" data-stepper-next-btn="">
        Next
        <span class="icon-[componentx--chevron-right] text-primary-content rtl:rotate-180"></span>
      </button>
      <button type="button" class="btn btn-primary" data-stepper-finish-btn="" style="display: none;"> Finish </button>
      <button type="reset" class="btn btn-primary" data-stepper-reset-btn="" style="display: none;"> Reset </button>
    </div>
    <!-- End Button Group -->
  </div>
  <!-- End Stepper Content -->
</div>
<!-- End Stepper -->
```

```js
<script>
  window.addEventListener('load', () => {
    ;(function () {
      const errorStepper = HSStepper.getInstance('#error-stepper')
      let errorSuccessState = 1

      errorStepper.on('beforeNext', ind => {
        if (ind === 1) {
          errorStepper.setProcessedNavItem(ind)

          setTimeout(() => {
            errorStepper.unsetProcessedNavItem(ind)
            errorStepper.enableButtons()

            if (errorSuccessState) {
              errorStepper.goToNext()
            } else {
              errorStepper.setErrorNavItem(ind)
            }

            errorSuccessState = !errorSuccessState
          }, 2000)
        }
      })
    })()
  })
</script>


```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<!-- Stepper -->
<div data-stepper="" id="stepper-to-destroy" class="w-full">
  <!-- Stepper Nav -->
  <ul class="relative flex flex-row gap-x-2">
    <li class="group flex flex-1 shrink basis-0 items-center gap-x-2" data-stepper-nav-item='{ "index": 1 }'>
      <span class="min-h-7.5 min-w-7.5 inline-flex items-center align-middle text-sm">
        <span class="stepper-active:text-bg-primary stepper-active:shadow-sm shadow-base-300/20 stepper-success:text-bg-primary stepper-success:shadow-sm stepper-completed:text-bg-success text-bg-soft-neutral flex size-7.5 shrink-0 items-center justify-center rounded-full font-medium" >
          <span class="stepper-success:hidden stepper-completed:hidden">1</span>
          <span class="icon-[componentx--check] stepper-success:block hidden size-4 shrink-0"></span>
        </span>
        <span class="text-base-content ms-2 max-sm:hidden">Step</span>
      </span>
      <div class="stepper-success:bg-primary stepper-completed:bg-success bg-neutral/20 h-px w-full flex-1 group-last:hidden" ></div>
    </li>
    <li class="group flex flex-1 shrink basis-0 items-center gap-x-2" data-stepper-nav-item='{ "index": 2 }'>
      <span class="min-h-7.5 min-w-7.5 inline-flex items-center align-middle text-sm">
        <span class="stepper-active:text-bg-primary stepper-active:shadow-sm shadow-base-300/20 stepper-success:text-bg-primary stepper-success:shadow-sm stepper-completed:text-bg-success stepper-error:text-bg-error text-bg-soft-neutral flex size-7.5 shrink-0 items-center justify-center rounded-full font-medium" >
          <span class="stepper-success:hidden stepper-completed:hidden">2</span>
          <span class="icon-[componentx--check] stepper-success:block hidden size-4 shrink-0"></span>
        </span>
        <span class="text-base-content ms-2 max-sm:hidden">Step</span>
      </span>
      <div class="stepper-success:bg-primary stepper-completed:bg-success bg-neutral/20 h-px w-full flex-1 group-last:hidden" ></div>
    </li>
    <li class="group flex flex-1 shrink basis-0 items-center gap-x-2" data-stepper-nav-item='{ "index": 3 }'>
      <span class="min-h-7.5 min-w-7.5 inline-flex items-center align-middle text-sm">
        <span class="stepper-active:text-bg-primary stepper-active:shadow-sm shadow-base-300/20 stepper-success:text-bg-primary stepper-success:shadow-sm stepper-completed:text-bg-success stepper-error:text-bg-error text-bg-soft-neutral flex size-7.5 shrink-0 items-center justify-center rounded-full font-medium" >
          <span class="stepper-success:hidden stepper-completed:hidden">3</span>
          <span class="icon-[componentx--check] stepper-success:block hidden size-4 shrink-0"></span>
        </span>
        <span class="text-base-content ms-2 max-sm:hidden">Step</span>
      </span>
      <div class="stepper-success:bg-primary stepper-completed:bg-success bg-neutral/20 h-px w-full flex-1 group-last:hidden" ></div>
    </li>
    <!-- End Item -->
  </ul>
  <!-- End Stepper Nav -->

  <!-- Stepper Content -->
  <div class="mt-5 sm:mt-8">
    <!-- First Content -->
    <div data-stepper-content-item='{ "index": 1 }'>
      <div class="border-base-content/40 bg-base-200/50 flex h-48 items-center justify-center rounded-xl border border-dashed p-4" >
        <h3 class="text-base-content/50 text-2xl">First content</h3>
      </div>
    </div>
    <!-- End First Content -->
    <!-- Second Content -->
    <div data-stepper-content-item='{ "index": 2 }' style="display: none;">
      <div class="border-base-content/40 bg-base-200/50 flex h-48 items-center justify-center rounded-xl border border-dashed p-4" >
        <h3 class="text-base-content/50 text-2xl">Second content</h3>
      </div>
    </div>
    <!-- End Second Content -->
    <!-- Third Content -->
    <div data-stepper-content-item='{ "index": 3 }' style="display: none;">
      <div class="border-base-content/40 bg-base-200/50 flex h-48 items-center justify-center rounded-xl border border-dashed p-4" >
        <h3 class="text-base-content/50 text-2xl">Third content</h3>
      </div>
    </div>
    <!-- End Third Content -->
    <!-- Final Content -->
    <div data-stepper-content-item='{ "isFinal": true }' style="display: none;">
      <div class="border-base-content/40 bg-base-200/50 flex h-48 items-center justify-center rounded-xl border border-dashed p-4" >
        <h3 class="text-base-content/50 text-2xl">Final content</h3>
      </div>
    </div>
    <!-- End Final Content -->
    <!-- Button Group -->
    <div class="mt-5 flex items-center justify-between gap-x-2">
      <button type="button" class="btn btn-primary" data-stepper-back-btn="">
        <span class="icon-[componentx--chevron-left] text-primary-content rtl:rotate-180"></span>
        Back
      </button>
      <button type="button" class="btn btn-primary" data-stepper-next-btn="">
        Next
        <span class="icon-[componentx--chevron-right] text-primary-content rtl:rotate-180"></span>
      </button>
      <button type="button" class="btn btn-primary" data-stepper-finish-btn="" style="display: none;"> Finish </button>
      <button type="reset" class="btn btn-primary" data-stepper-reset-btn="" style="display: none;"> Reset </button>
    </div>
    <!-- End Button Group -->
  </div>
  <!-- End Stepper Content -->
</div>
<!-- End Stepper -->

<div class="mt-4 flex gap-3">
  <button class="btn btn-primary" id="destroy-btn">Destroy</button>
  <button class="btn btn-primary" id="reinit-btn" disabled>Reinitialize</button>
</div>
```

```js
<script>
  window.addEventListener('load', () => {
    ;(function () {
      const stepper = document.querySelector('#stepper-to-destroy')
      const destroy = document.querySelector('#destroy-btn')
      const reinit = document.querySelector('#reinit-btn')

      destroy.addEventListener('click', () => {
        const { element } = HSStepper.getInstance(stepper, true)

        element.destroy()

        destroy.setAttribute('disabled', 'disabled')
        reinit.removeAttribute('disabled')
      })

      reinit.addEventListener('click', () => {
        HSStepper.autoInit()

        reinit.setAttribute('disabled', 'disabled')
        destroy.removeAttribute('disabled')
      })
    })()
  });
</script>


```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
