---
name: "Copy Markup"
library: "ComponentX"
id: "copy-markup"
type: "button"
quality: "standard"
tags: ["button", "component", "data", "input", "overlay", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Copy Markup

> **Type:** `button` · **Quality:** `standard` · **ID:** `copy-markup`
> **Path:** `components/button/copy-markup.md`

**Copy Markup** is a premium, production-ready component from the **ComponentX** library — engineered for button interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `button`, `data`, `input` workflows.
- **Pattern coverage** — includes `overlay`, `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Copy Markup** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
<p class="mb-4">
  Which technologies have you primarily used? <span class="text-base-content font-medium">(Maximum three)</span>
</p>

<div id="wrapper-for-copy" class="max-w-xs space-y-3">
  <input id="content-for-copy" type="text" class="input" placeholder="Enter Technology Name" />
</div>

<div class="mt-4 flex max-w-xs justify-end">
  <button
    type="button"
    data-copy-markup='{
    "targetSelector": "#content-for-copy",
    "wrapperSelector": "#wrapper-for-copy",
    "limit": 3
    }'
    id="copy-content"
    class="btn btn-sm btn-primary"
  >
    <span class="icon-[componentx--plus]"></span>
    Add Technology
  </button>
</div>
```

I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div id="wrapper-select-for-copy" class="space-y-3">
  <div id="content-select-for-copy" class="flex items-end gap-3 max-sm:flex-col">
    <div class="w-full sm:w-1/4">
      <label class="label-text" for="select"> Options </label>
      <select class="select" aria-label="select option" id="select">
        <option disabled selected>Choose option</option>
        <option value="size">Size</option>
        <option value="color">Color</option>
        <option value="weight">Weight</option>
        <option value="smell">Smell</option>
      </select>
    </div>
    <input type="text" class="input w-full sm:w-3/4" placeholder="Enter Value" />
  </div>
</div>

<p class="mt-4 text-end">
  <button
    type="button"
    data-copy-markup='{
      "targetSelector": "#content-select-for-copy",
      "wrapperSelector": "#wrapper-select-for-copy",
      "limit": 4
    }'
    id="copy-select-content"
    class="btn btn-sm btn-primary"
  >
    Add another option
  </button>
</p>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<button type="button" class="btn btn-primary" aria-haspopup="dialog" aria-expanded="false" aria-controls="modal-with-copy-markup" data-overlay="#modal-with-copy-markup">Open modal</button>

<div id="modal-with-copy-markup" class="overlay modal overlay-open:opacity-100 overlay-open:duration-300 hidden" role="dialog" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title">Skill survey</h3>
        <button type="button" class="btn btn-text btn-circle btn-sm absolute end-3 top-3" aria-label="Close" data-overlay="#modal-with-copy-markup">
          <span class="icon-[componentx--x] size-4"></span>
        </button>
      </div>
      <div class="modal-body grow space-y-3">
        <p>
          Which technologies have you primarily used?
          <br />
          <span class="text-base-content font-medium">(Maximum four)</span>
        </p>
        <div id="modal-wrapper-select-for-copy" class="space-y-3">
          <div id="modal-content-select-for-copy">
            <select class="select">
              <option disabled selected>Choose Technology</option>
              <option value="html">HTML</option>
              <option value="css">CSS</option>
              <option value="javascript">JavaScript</option>
              <option value="tailwindcss">TailwindCSS</option>
            </select>
          </div>
        </div>
        <p class="text-end">
          <button
            type="button"
            data-copy-markup='{
              "targetSelector": "#modal-content-select-for-copy",
              "wrapperSelector": "#modal-wrapper-select-for-copy",
              "limit": 4
            }'
            id="copy-select-with-modal-content"
            class="btn btn-sm btn-primary">
            Add another option
          </button>
        </p>
      </div>
      <div class="modal-footer mt-16">
        <button type="button" class="btn btn-soft btn-secondary" data-overlay="#modal-with-copy-markup">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<p class="mb-4">
  Which technologies have you primarily used? <span class="text-base-content font-medium">(Maximum three)</span>
</p>
  
<div id="wrapper-remove-for-copy-target" class="max-w-sm space-y-3">
  <div id="content-remove-for-copy-target" class="flex items-center gap-2">
    <input type="text" class="input" placeholder="Enter Technology Name" />
    <button class="btn btn-square btn-outline btn-error" aria-label="delete button" data-copy-markup-delete-item>
      <span class="icon-[componentx--x]"></span>
    </button>
  </div>
</div>
  
<div class="flex max-w-sm justify-end gap-2 mt-4">
  <button
    type="button"
    data-copy-markup='{
    "targetSelector": "#content-remove-for-copy-target",
    "wrapperSelector": "#wrapper-remove-for-copy-target",
    "limit": 3
    }'
    id="copy-content-rem-btn"
    class="btn btn-sm btn-primary">
    <span class="icon-[componentx--plus]"></span>
    Add Technology
  </button>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<p class="mb-4">
  Which technologies have you primarily used? <span class="text-base-content font-medium">(Maximum three)</span>
</p>

<div id="wrapper-for-copy-to-destroy" class="w-full space-y-3">
  <input id="content-for-copy-to-destroy" type="text" class="input" placeholder="Enter Technology Name" />
</div>

<div class="mt-4 flex w-full justify-end">
  <button
    type="button"
    data-copy-markup='{
    "targetSelector": "#content-for-copy-to-destroy",
    "wrapperSelector": "#wrapper-for-copy-to-destroy",
    "limit": 3
    }'
    id="copy-markup-to-destroy"
    class="btn btn-sm btn-primary"
  >
    <span class="icon-[componentx--plus]"></span>
    Add Technology
  </button>
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
    const copyBtn = document.querySelector('#copy-markup-to-destroy')
    const destroyBtn = document.querySelector('#destroy-btn')
    const reinitBtn = document.querySelector('#reinit-btn')

    // Destroy usage
    destroyBtn.addEventListener('click', () => {
      const { element } = HSCopyMarkup.getInstance(copyBtn, true)

      element.destroy()

      destroyBtn.setAttribute('disabled', 'disabled')
      reinitBtn.removeAttribute('disabled')
    })

    // Reinit usage
    reinitBtn.addEventListener('click', () => {
      HSCopyMarkup.autoInit()

      reinitBtn.setAttribute('disabled', 'disabled')
      destroyBtn.removeAttribute('disabled')
    })
  })
</script>

```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<p class="mb-4">
  Which technologies have you primarily used? <span class="text-base-content font-medium">(Maximum two)</span>
</p>

<div id="wrapper-method" class="max-w-sm space-y-3">
  <div id="content-method" class="flex gap-2">
    <input type="text" class="input" placeholder="Enter Technology Name" />
  </div>
</div>

<div class="mt-4 flex max-w-sm flex-wrap justify-end gap-2">
  <button
    type="button"
    data-copy-markup='{
    "targetSelector": "#content-method",
    "wrapperSelector": "#wrapper-method",
    "limit": 2
    }'
    id="copy-method"
    class="btn btn-sm btn-primary"
  >
    <span class="icon-[componentx--plus]"></span>
    Add Technology
  </button>
  <button id="delete-method" class="btn btn-sm btn-soft btn-error">
    <span class="icon-[componentx--minus]"></span>
    Remove Technology
  </button>
</div>
```

```js
<script>
  window.addEventListener('load', () => {
    const deleteBtn = document.querySelector('#delete-method')

    deleteBtn.addEventListener('click', () => {
      const copyMarkup = new HSCopyMarkup(document.querySelector('#copy-method'))
      copyMarkup.delete(document.querySelector('#content-method-0'))
    })
  })
</script>


```







I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<p class="mb-4">
  Which technologies have you primarily used? <span class="text-base-content font-medium">(Maximum two)</span>
</p>

<div id="wrapper-event" class="max-w-sm space-y-3">
  <input id="content-event" type="text" class="input --prevent-on-load-init" placeholder="Enter Technology Name" />
</div>

<div class="mt-4 flex max-w-sm flex-wrap justify-end gap-2">
  <button
    type="button"
    data-copy-markup='{
    "targetSelector": "#content-event",
    "wrapperSelector": "#wrapper-event",
    "limit": 2
    }'
    id="copy-event"
    class="btn btn-sm btn-primary"
  >
    <span class="icon-[componentx--plus]"></span>
    Add Technology
  </button>
  <button id="delete-event" class="btn btn-sm btn-soft btn-error">
    <span class="icon-[componentx--minus]"></span>
    Remove Technology
  </button>
</div>
```

```js
<script>
  window.addEventListener('load', () => {
    const el = HSCopyMarkup.getInstance('#copy-event')
    const deleteBtn2 = document.querySelector('#delete-event')

    deleteBtn2.addEventListener('click', () => {
      el.delete(document.querySelector('#content-event-0'))
    })

    el.on('copy', target => {
      console.log('target:', target)
    })
    el.on('delete', target => {
      console.log('target:', target)
    })
  })
</script>


```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
