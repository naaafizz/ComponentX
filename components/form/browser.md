---
name: "Browser"
library: "ComponentX"
id: "browser"
type: "form"
quality: "standard"
tags: ["background", "component", "image", "input"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Browser

> **Type:** `form` · **Quality:** `standard` · **ID:** `browser`
> **Path:** `components/form/browser.md`

**Browser** is a premium, production-ready component from the **ComponentX** library — engineered for form interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `background`, `image`, `input` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Browser** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
<div class="mockup-browser border border-neutral/30">
  <div class="mockup-browser-toolbar">
    <div class="input border border-neutral/30">https://flyonui.com</div>
  </div>
  <div class="flex justify-center px-4 py-16 border-t border-neutral/30">Hello!</div>
</div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="mockup-browser bg-base-300/40">
  <div class="mockup-browser-toolbar">
    <div class="input bg-base-200">https://flyonui.com</div>
  </div>
  <div class="flex justify-center px-4 py-16 bg-base-200">Hello!</div>
</div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="mockup-browser bg-base-300/40">
  <div class="mockup-browser-toolbar">
    <div class="input bg-base-200">https://flyonui.com</div>
  </div>
  <div class="flex h-80 justify-center"><img class="w-full object-cover" src="https://cdn.flyonui.com/fy-assets/components/carousel/image-14.png" alt="browser background" /></div>
</div>
```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
