---
name: "Phone"
library: "ComponentX"
id: "phone"
type: "form"
quality: "lightweight"
tags: ["background", "component", "image"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Phone

> **Type:** `form` · **Quality:** `lightweight` · **ID:** `phone`
> **Path:** `components/form/phone.md`

**Phone** is a premium, production-ready component from the **ComponentX** library — engineered for form interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Lightweight tier** — a minimal footprint, a small dependency surface, and a clean implementation that drops into any project with zero friction.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `background`, `image` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Phone** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
<div class="mockup-phone">
  <div class="mockup-phone-camera"></div> 
  <div class="mockup-phone-display bg-base-200">
    <div class="h-142 w-80 grid place-content-center">Hi.</div>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="mockup-phone">
  <div class="mockup-phone-camera"></div> 
  <div class="mockup-phone-display flex justify-center">
    <div class="h-142 w-80"><img class="size-full object-cover" src="https://cdn.flyonui.com/fy-assets/components/iphone/image.png" alt="phone background" /></div>
  </div>
</div>
```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
