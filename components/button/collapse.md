---
name: "Collapse"
library: "ComponentX"
id: "collapse"
type: "button"
quality: "standard"
tags: ["button", "component", "data", "menu", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Collapse

> **Type:** `button` · **Quality:** `standard` · **ID:** `collapse`
> **Path:** `components/button/collapse.md`

**Collapse** is a premium, production-ready component from the **ComponentX** library — engineered for button interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `button`, `data`, `menu` workflows.
- **Pattern coverage** — includes `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Collapse** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
<button type="button" class="collapse-toggle btn btn-primary" id="basic-collapse" aria-expanded="false" aria-controls="basic-collapse-heading" data-collapse="#basic-collapse-heading">
  Collapse
  <span class="icon-[componentx--chevron-down] collapse-open:rotate-180 size-4"></span>
</button>
<div id="basic-collapse-heading" class="collapse hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="basic-collapse">
  <div class="border-base-content/25 mt-3 rounded-md border p-3">
    <p class="text-base-content/80">
      The collapsible body remains concealed by default until the collapse plugin dynamically adds specific classes. These classes are instrumental in styling each element, dictating the overall appearance, and managing visibility through CSS transitions.
    </p>
  </div>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<button type="button" class="collapse-toggle btn btn-primary" id="shadow-collapse" aria-expanded="false" aria-controls="shadow-collapse-heading" data-collapse="#shadow-collapse-heading" >
  Collapse
  <span class="icon-[componentx--chevron-down] collapse-open:rotate-180 size-4"></span>
</button>
<div id="shadow-collapse-heading" class="collapse hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="shadow-collapse" >
  <div class="bg-primary/20 mt-3 rounded-md p-3">
    <p class="text-primary">
      The collapsible body remains concealed by default until the collapse plugin dynamically adds specific classes.
      These classes are instrumental in styling each element, dictating the overall appearance, and managing visibility
      through CSS transitions.
    </p>
  </div>
</div>
```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="dropdown relative inline-flex [--auto-close:inside]">
  <button id="dropdown-collapse" type="button" class="dropdown-toggle btn btn-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
    Actions
    <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
  </button>
  <div class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-collapse">
    <div class="dropdown-header">Quick Actions</div>
    <div><a class="dropdown-item" href="#">Send Newsletter</a></div>
    <div><a class="dropdown-item" href="#">View Purchases</a></div>
    <div>
      <button id="nested-collapse-2" class="collapse-toggle dropdown-item justify-between" aria-expanded="false" aria-controls="nested-collapse-content" data-collapse="#nested-collapse-content" >
        More Options
        <span class="icon-[componentx--chevron-down] collapse-open:rotate-180 size-4"></span>
      </button>
      <div class="collapse hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="nested-collapse-2" id="nested-collapse-content" >
        <ul class="py-3 ps-3">
          <li><a class="dropdown-item" href="#">Download Documents</a></li>
          <li><a class="dropdown-item" href="#">Manage Team Account</a></li>
        </ul>
      </div>
    </div>
    <div><a class="dropdown-item" href="#">Logout</a></div>
  </div>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div>
  <h6 class="text-base-content text-base">How can I track my order?</h6>
  <div id="show-hide-collapse-heading" class="collapse hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="show-hide-collapse" >
    <p class="text-base-content/80">
      To track your order, simply log in to your account and navigate to the order history section. You'll find detailed
      information about your order status and tracking number there.
    </p>
  </div>
</div>

<button type="button" class="collapse-toggle link link-primary inline-flex items-center" id="show-hide-collapse" aria-expanded="false" aria-controls="show-hide-collapse-heading" data-collapse="#show-hide-collapse-heading" >
  <span class="collapse-open:hidden">Read more</span>
  <span class="collapse-open:block hidden">Read less</span>
  <span class="icon-[componentx--chevron-down] collapse-open:rotate-180 ms-2 size-4"></span>
</button>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<button type="button" class="collapse-toggle btn btn-primary" id="collapse-destroy" aria-expanded="false" aria-controls="collapse-destroy-heading" data-collapse="#collapse-destroy-heading">
  Collapse
  <span class="icon-[componentx--chevron-down] collapse-open:rotate-180 size-4"></span>
</button>
<div id="collapse-destroy-heading" class="collapse hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="collapse-destroy">
  <div class="border-base-content/25 mt-3 rounded-md border p-3">
    <p class="text-base-content/80">
      The collapsible body remains concealed by default until the collapse plugin dynamically adds specific classes. These classes are instrumental in styling each element, dictating the overall appearance, and managing visibility through CSS transitions.
    </p>
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
    ;(function () {
      const collapse = document.querySelector('#collapse-destroy')
      const destroy = document.querySelector('#destroy-btn')
      const reinit = document.querySelector('#reinit-btn')

      destroy.addEventListener('click', () => {
        const { element } = HSCollapse.getInstance(collapse, true)
        element.destroy()

        destroy.setAttribute('disabled', 'disabled')
        reinit.removeAttribute('disabled')
      })

      reinit.addEventListener('click', () => {
        HSCollapse.autoInit()

        reinit.setAttribute('disabled', 'disabled')
        destroy.removeAttribute('disabled')
      })
    })()
  });
</script>

```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
