---
name: "Footer"
library: "ComponentX"
id: "footer"
type: "navigation"
quality: "standard"
tags: ["navigation", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Footer

> **Type:** `navigation` · **Quality:** `standard` · **ID:** `footer`
> **Path:** `components/navigation/footer.md`

**Footer** is a premium, production-ready component from the **ComponentX** library — engineered for navigation interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `navigation`, `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Footer** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
<div class="w-full">
  <footer class="footer items-center px-6 py-4">
    <aside class="grid-flow-col items-center">
      <p>&copy;2024 <a class="link link-hover font-medium" href="#">FlyonUI</a></p>
    </aside>
    <nav class="text-base-content grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <a class="link link-hover" href="#">License</a>
      <a class="link link-hover" href="#">Help</a>
      <a class="link link-hover" href="#">Contact</a>
      <a class="link link-hover" href="#">Policy</a>
    </nav>
  </footer>
</div>
```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="w-full">
  <!-- Demo content -->
  <div class="flex w-full flex-col gap-4">
    <div class="mb-4 flex items-center gap-4">
      <div class="skeleton h-16 w-16 shrink-0 rounded-full"></div>
      <div class="flex flex-col gap-4">
        <div class="skeleton h-4 w-52"></div>
        <div class="skeleton h-4 w-52"></div>
      </div>
    </div>
    <div class="skeleton mb-4 h-32 w-full"></div>
  </div>
  <!-- Static footer -->
  <footer class="footer bg-base-200/60 items-center rounded-t-box px-6 py-4 shadow-base-300/20 shadow-sm">
    <aside class="grid-flow-col items-center">
      <p>&copy;2024 <a class="link link-hover font-medium" href="#">FlyonUI</a></p>
    </aside>
    <nav class="text-base-content grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <a class="link link-hover" href="#">License</a>
      <a class="link link-hover" href="#">Help</a>
      <a class="link link-hover" href="#">Contact</a>
      <a class="link link-hover" href="#">Policy</a>
    </nav>
  </footer>
</div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="relative h-60 w-full">
  <!-- Demo content -->
  <div class="overflow-y-auto relative h-full w-full overflow-y-scroll pe-2">
    <div class="flex w-full flex-col gap-4">
      <div class="mb-4 flex items-center gap-4">
        <div class="skeleton h-16 w-16 rounded-full"></div>
        <div class="flex flex-col gap-4">
          <div class="skeleton h-4 w-52"></div>
          <div class="skeleton h-4 w-52"></div>
        </div>
      </div>
      <div class="skeleton mb-4 h-16 w-full"></div>
      <div class="skeleton mb-4 h-32 w-full"></div>
    </div>
    <!-- Sticky Footer -->
    <footer class="footer bg-base-200 absolute -bottom-px sticky start-0 w-full px-6 py-4">
      <aside class="grid-flow-col items-center">
        <p>&copy;2024 <a class="link link-hover font-medium" href="#">FlyonUI</a></p>
      </aside>
      <nav class="text-base-content grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a class="link link-hover" href="#">License</a>
        <a class="link link-hover" href="#">Help</a>
        <a class="link link-hover" href="#">Contact</a>
        <a class="link link-hover" href="#">Policy</a>
      </nav>
    </footer>
  </div>
</div>
```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
