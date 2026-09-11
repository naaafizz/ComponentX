---
name: "Divider"
library: "ComponentX"
id: "divider"
type: "button"
quality: "lightweight"
tags: ["button", "component", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Divider

> **Type:** `button` · **Quality:** `lightweight` · **ID:** `divider`
> **Path:** `components/button/divider.md`

**Divider** is a premium, production-ready component from the **ComponentX** library — engineered for button interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Lightweight tier** — a minimal footprint, a small dependency surface, and a clean implementation that drops into any project with zero friction.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `button`, `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Divider** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
<div class="divider"></div>
<div class="divider divider-neutral"></div>
<div class="divider divider-primary"></div>
<div class="divider divider-secondary"></div>
<div class="divider divider-accent"></div>
<div class="divider divider-info"></div>
<div class="divider divider-success"></div>
<div class="divider divider-warning"></div>
<div class="divider divider-error"></div>
```

I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex h-60 flex-wrap gap-8">
  <div class="divider divider-horizontal"></div>
  <div class="divider divider-horizontal divider-neutral"></div>
  <div class="divider divider-horizontal divider-primary"></div>
  <div class="divider divider-horizontal divider-secondary"></div>
  <div class="divider divider-horizontal divider-accent"></div>
  <div class="divider divider-horizontal divider-info"></div>
  <div class="divider divider-horizontal divider-success"></div>
  <div class="divider divider-horizontal divider-warning"></div>
  <div class="divider divider-horizontal divider-error"></div>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex h-60 flex-wrap gap-5">
  <div class="divider divider-horizontal">Text</div>
  <div class="divider divider-horizontal"><span class="flex items-center justify-center"><span class="icon-[componentx--sun] size-5"></span></span> </div>
</div>
```

I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="divider">Text</div>
<div class="divider"><span class="flex items-center justify-center"><span class="icon-[componentx--crown] size-5"></span></span></div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="divider">Default</div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="divider divider-dotted">Dotted</div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="divider divider-dashed">Dashed</div>
```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="divider after:border-t-2 before:border-t-2">Default</div>
<div class="divider divider-dotted after:border-t-4 before:border-t-4">Dotted</div>
<div class="divider divider-dashed after:border-t-8 before:border-t-8">Dashed</div>
```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="divider divider-start">Start</div>
<div class="divider">Center</div>
<div class="divider divider-end">End</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex h-60 gap-5">
  <div class="divider divider-start divider-horizontal">Start</div>
  <div class="divider divider-horizontal">Center</div>
  <div class="divider divider-end divider-horizontal">End</div>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex w-full flex-col gap-5 lg:flex-row">
  <div class="shadow-base-300/20 bg-base-200 grid h-32 grow place-items-center shadow-sm"></div>
  <div class="divider lg:divider-horizontal">OR</div>
  <div class="shadow-base-300/20 bg-base-200 grid h-32 grow place-items-center shadow-sm"></div>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex w-full gap-5 lg:flex-col">
  <div class="shadow-base-300/20 bg-base-200 grid h-32 grow place-items-center shadow-sm"></div>
  <div class="divider divider-horizontal lg:divider-vertical">OR</div>
  <div class="shadow-base-300/20 bg-base-200 grid h-32 grow place-items-center shadow-sm"></div>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex w-fit flex-col gap-5 lg:flex-row">
  <div class="grid grow place-items-center">
    <button class="btn btn-soft [--btn-color:#1877F2] [--btn-fg:#1877F2]">
      <span class="icon-[componentx--brand-facebook]"></span>
      Sign in with Facebook
    </button>
  </div>
  <div class="divider lg:divider-horizontal"></div>
  <div class="grid grow place-items-center">
    <button class="btn btn-soft [--btn-color:#1da1f2] [--btn-fg:#1da1f2]">
      <span class="icon-[componentx--brand-x]"></span>
      Sign in with Twitter
    </button>
  </div>
</div>




```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex w-fit flex-col gap-5">
  <div class="grid grow place-items-center">
    <button class="btn btn-soft [--btn-color:#1877F2] [--btn-fg:#1877F2]">
      <span class="icon-[componentx--brand-facebook]"></span>
      Sign in with Facebook
    </button>
  </div>
  <div class="divider divider-vertical"></div>
  <div class="grid grow place-items-center">
    <button class="btn btn-soft w-full [--btn-color:#1da1f2] [--btn-fg:#1da1f2]">
      <span class="icon-[componentx--brand-x]"></span>
      Sign in with Twitter
    </button>
  </div>
</div>
```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
