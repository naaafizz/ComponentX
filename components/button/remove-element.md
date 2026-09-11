---
name: "Remove element"
library: "ComponentX"
id: "remove-element"
type: "button"
quality: "standard"
tags: ["button", "card", "component", "data", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Remove element

> **Type:** `button` · **Quality:** `standard` · **ID:** `remove-element`
> **Path:** `components/button/remove-element.md`

**Remove element** is a premium, production-ready component from the **ComponentX** library — engineered for button interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `button`, `card`, `data` workflows.
- **Pattern coverage** — includes `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Remove element** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
<div class="card removing:opacity-0 removing:translate-x-5 bg-primary/20 text-primary max-w-sm transition duration-300 ease-in-out" id="card-dismiss" >
  <div class="card-header text-base-content/80 flex justify-between items-center">
    <span class="card-title text-primary">Remove card</span>
    <div class="card-actions">
      <button class="cursor-pointer leading-none" data-remove-element="#card-dismiss" aria-label="Close Button" >
        <span class="icon-[componentx--x] size-5 text-primary"></span>
      </button>
    </div>
  </div>
  <div class="card-body">
    <p>With a single click on the close button, this card will be effortlessly removed.</p>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<span class="badge badge-soft badge-lg badge-primary removing:translate-x-5 removing:opacity-0 transition duration-300 ease-in-out" id="badge-chip" >
  Badge
  <button class="icon-[componentx--circle-x-filled] size-5 min-h-0 cursor-pointer px-0 opacity-70" data-remove-element="#badge-chip" aria-label="Close Button" ></button>
</span>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="alert alert-soft alert-primary removing:translate-x-5 removing:opacity-0 flex items-center gap-4 transition duration-300 ease-in-out" role="alert" id="dismiss-alert" >
  Dive into our platform to discover exciting new features and updates.
  <button class="ms-auto cursor-pointer leading-none" data-remove-element="#dismiss-alert" aria-label="Close Button" >
    <span class="icon-[componentx--x] size-5"></span>
  </button>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="card removing:opacity-0 removing:translate-x-5 bg-primary/20 text-primary max-w-sm transition duration-300 ease-in-out" id="remove-element-to-destroy" >
  <div class="card-header text-base-content/80 flex justify-between items-center">
    <span class="card-title text-primary">Remove card</span>
    <div class="card-actions">
      <button class="cursor-pointer leading-none" data-remove-element="#remove-element-to-destroy" aria-label="Close Button" >
        <span class="icon-[componentx--x] size-5 text-primary"></span>
      </button>
    </div>
  </div>
  <div class="card-body">
    <p>With a single click on the close button, this card will be effortlessly removed.</p>
  </div>
</div>

<div class="mt-4 flex gap-3">
  <button class="btn btn-primary" id="destroy-btn">Destroy</button>
  <button class="btn btn-primary" id="reinit-btn" disabled>Reinitialize</button>
</div>
```

```js
<script>
  window.addEventListener('load', () => {
    // Destroy and reinit variables
    const removeElement = document.querySelectorAll('#remove-element-to-destroy [data-remove-element]')
    const destroyBtn = document.querySelector('#destroy-btn')
    const reinitBtn = document.querySelector('#reinit-btn')

    // Destroy usage
    destroyBtn.addEventListener('click', () => {
      removeElement.forEach(el => {
        const { element } = HSRemoveElement.getInstance(el, true)

        element.destroy()
      })

      destroyBtn.setAttribute('disabled', 'disabled')
      reinitBtn.removeAttribute('disabled')
    })

    // Reinit usage
    reinitBtn.addEventListener('click', () => {
      HSRemoveElement.autoInit()

      reinitBtn.setAttribute('disabled', 'disabled')
      destroyBtn.removeAttribute('disabled')
    })
  })
</script>

```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="card removing:opacity-0 bg-primary/20 text-primary max-w-sm transition duration-300 ease-in-out" id="card-dismiss-2" >
  <div class="card-header text-base-content/80 flex justify-between items-center">
    <span class="card-title text-primary">Remove card</span>
    <div class="card-actions">
      <button class="cursor-pointer leading-none" data-remove-element="#card-dismiss-2" data-remove-element-options='{"removeTargetAnimationClass":"translate-x-5"}' aria-label="Close Button" >
        <span class="icon-[componentx--x] size-5 text-primary"></span>
      </button>
    </div>
  </div>
  <div class="card-body">
    <p>With a single click on the close button, this card will be effortlessly removed.</p>
  </div>
</div>
```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
