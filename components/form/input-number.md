---
name: "Input Number"
library: "ComponentX"
id: "input-number"
type: "form"
quality: "standard"
tags: ["button", "data", "form", "input", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Input Number

> **Type:** `form` · **Quality:** `standard` · **ID:** `input-number`
> **Path:** `components/form/input-number.md`

**Input Number** is a premium, production-ready component from the **ComponentX** library — engineered for form interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `button`, `data`, `form` workflows.
- **Pattern coverage** — includes `input`, `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Input Number** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
<div class="input max-w-sm" data-input-number>
  <input type="text" value="1" aria-label="Input number" data-input-number-input />
  <span class="my-auto flex gap-3">
    <button type="button" class="btn btn-primary btn-soft size-5.5 min-h-0 rounded-sm p-0" aria-label="Decrement button" data-input-number-decrement >
      <span class="icon-[componentx--minus] size-3.5 shrink-0"></span>
    </button>
    <button type="button" class="btn btn-primary btn-soft size-5.5 min-h-0 rounded-sm p-0" aria-label="Increment button" data-input-number-increment >
      <span class="icon-[componentx--plus] size-3.5 shrink-0"></span>
    </button>
  </span>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="max-w-sm" data-input-number>
  <label class="label-text" for="number-input-label">Quantity:</label>
  <div class="input">
    <input type="text" value="1" aria-label="Label input number" data-input-number-input id="number-input-label" />
    <span class="my-auto flex gap-3">
      <button type="button" class="btn btn-primary btn-soft size-5.5 min-h-0 rounded-sm p-0" aria-label="Decrement button" data-input-number-decrement >
        <span class="icon-[componentx--minus] size-3.5 shrink-0"></span>
      </button>
      <button type="button" class="btn btn-primary btn-soft size-5.5 min-h-0 rounded-sm p-0" aria-label="Increment button" data-input-number-increment >
        <span class="icon-[componentx--plus] size-3.5 shrink-0"></span>
      </button>
    </span>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="input max-w-sm" data-input-number>
  <input type="text" class="is-valid" type="text" value="1" aria-label="success state" data-input-number-input />
  <span class="my-auto flex gap-3">
    <button type="button" class="btn btn-primary btn-soft size-5.5 min-h-0 rounded-sm p-0" aria-label="Decrement button" data-input-number-decrement >
      <span class="icon-[componentx--minus] size-3.5 shrink-0"></span>
    </button>
    <button type="button" class="btn btn-primary btn-soft size-5.5 min-h-0 rounded-sm p-0" aria-label="Increment button" data-input-number-increment >
      <span class="icon-[componentx--plus] size-3.5 shrink-0"></span>
    </button>
  </span>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="input max-w-sm" data-input-number>
  <input type="text" class="is-invalid" type="text" value="1" aria-label="error state" data-input-number-input />
  <span class="my-auto flex gap-3">
    <button type="button" class="btn btn-primary btn-soft size-5.5 min-h-0 rounded-sm p-0" aria-label="Decrement button" data-input-number-decrement >
      <span class="icon-[componentx--minus] size-3.5 shrink-0"></span>
    </button>
    <button type="button" class="btn btn-primary btn-soft size-5.5 min-h-0 rounded-sm p-0" aria-label="Increment button" data-input-number-increment >
      <span class="icon-[componentx--plus] size-3.5 shrink-0"></span>
    </button>
  </span>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="input max-w-sm" data-input-number>
  <input type="text" type="text" value="1" aria-label="Disable input number" data-input-number-input disabled />
  <span class="my-auto flex gap-3">
    <button type="button" class="btn btn-primary btn-soft size-5.5 min-h-0 rounded-sm p-0" aria-label="Decrement button" data-input-number-decrement >
      <span class="icon-[componentx--minus] size-3.5 shrink-0"></span>
    </button>
    <button type="button" class="btn btn-primary btn-soft size-5.5 min-h-0 rounded-sm p-0" aria-label="Increment button" data-input-number-increment >
      <span class="icon-[componentx--plus] size-3.5 shrink-0"></span>
    </button>
  </span>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="max-w-sm" data-input-number>
  <label class="label-text" for="number-input-vertically">Quantity:</label>
  <div class="input pe-0">
    <input type="text" value="0" aria-label="Vertical stacked buttons" data-input-number-input id="number-input-vertically" />
    <span class="divide-base-content/25 border-base-content/25 my-auto flex flex-col divide-y border-s">
      <button type="button" class="flex size-4.5 items-center justify-center" aria-label="Increment button" data-input-number-decrement >
        <span class="icon-[componentx--minus] size-3.5 shrink-0"></span>
      </button>
      <button type="button" class="flex size-4.5 items-center justify-center" aria-label="Decrement button" data-input-number-increment >
        <span class="icon-[componentx--plus] size-3.5 shrink-0"></span>
      </button>
    </span>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="max-w-sm" data-input-number>
  <label class="label-text" for="number-input-horizontally">Quantity:</label>
  <div class="input pe-0">
    <input type="text" value="0" aria-label="Horizontal stacked buttons" data-input-number-input id="number-input-horizontally" />
    <span class="divide-base-content/25 border-base-content/25 flex items-center divide-x border-s" >
      <button type="button" class="flex size-9.5 items-center justify-center" aria-label="Increment button" data-input-number-decrement >
        <span class="icon-[componentx--minus] size-3.5 shrink-0"></span>
      </button>
      <button type="button" class="flex size-9.5 items-center justify-center" aria-label="Decrement button" data-input-number-increment >
        <span class="icon-[componentx--plus] size-3.5 shrink-0"></span>
      </button>
    </span>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="max-w-sm" data-input-number>
  <label class="label-text" for="number-input-stretched">Quantity:</label>
  <div class="input px-0">
    <span class="border-base-content/25 border-e ps-0">
      <button type="button" class="flex size-9.5 items-center justify-center" aria-label="Decrement button" data-input-number-decrement >
        <span class="icon-[componentx--minus] size-3.5 shrink-0"></span>
      </button>
    </span>
    <input class="px-3" type="text" value="0" aria-label="Stretched stacked buttons" data-input-number-input id="number-input-stretched" />
    <span class="border-base-content/25 border-s pe-0">
      <button type="button" class="flex size-9.5 items-center justify-center" aria-label="Increment button" data-input-number-increment >
        <span class="icon-[componentx--plus] size-3.5 shrink-0"></span>
      </button>
    </span>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="max-w-32" data-input-number>
  <label class="label-text" for="number-input-mini">Quantity:</label>
  <div class="input items-center">
    <button type="button" class="btn btn-primary btn-soft size-5.5 min-h-0 rounded-sm p-0" aria-label="Decrement button" data-input-number-decrement >
      <span class="icon-[componentx--minus] size-3.5 shrink-0"></span>
    </button>
    <input class="text-center" type="text" value="0" aria-label="Mini stacked buttons" data-input-number-input id="number-input-mini" />
    <button type="button" class="btn btn-primary btn-soft size-5.5 min-h-0 rounded-sm p-0" aria-label="Increment button" data-input-number-increment >
      <span class="icon-[componentx--plus] size-3.5 shrink-0"></span>
    </button>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<!-- Number of seat -->
<div class="input input-lg relative max-w-sm px-0" data-input-number>
  <span class="border-base-content/25 border-e ps-0">
    <button type="button" class="flex size-11.5 items-center justify-center" aria-label="Decrement button" data-input-number-decrement >
      <span class="icon-[componentx--minus] size-3.5 shrink-0"></span>
    </button>
  </span>
  <input class="pb-2 text-center" type="text" value="0" aria-label="seat counter" data-input-number-input id="number-input-booking" />
  <div class="absolute start-1/2 bottom-0.5 flex -translate-x-1/2 items-center rtl:translate-x-1/2">
    <span class="icon-[componentx--ticket] text-base-content/80 me-2 size-4"></span>
    <span class="text-base-content/80 text-xs text-nowrap">Number of seat</span>
  </div>
  <span class="border-base-content/25 border-s pe-0">
    <button type="button" class="flex size-11.5 items-center justify-center" aria-label="Increment button" data-input-number-increment >
      <span class="icon-[componentx--plus] size-3.5 shrink-0"></span>
    </button>
  </span>
</div>

<!-- Number of Bucket -->
<div class="input input-lg relative max-w-sm px-0" data-input-number>
  <span class="border-base-content/25 border-e ps-0">
    <button type="button" class="flex size-11.5 items-center justify-center" aria-label="Decrement button" data-input-number-decrement >
      <span class="icon-[componentx--minus] size-3.5 shrink-0"></span>
    </button>
  </span>
  <input class="pb-2 text-center" id="number-input-bucket" type="text" value="0" aria-label="Bucket counter" data-input-number-input id="number-input-booking" />
  <div class="absolute start-1/2 bottom-0.5 flex -translate-x-1/2 items-center rtl:translate-x-1/2">
    <span class="icon-[componentx--brand-bitbucket] text-base-content/80 me-2 size-4"></span>
    <span class="text-base-content/80 text-xs text-nowrap">Number of Bucket</span>
  </div>
  <span class="border-base-content/25 border-s pe-0">
    <button type="button" class="flex size-11.5 items-center justify-center" aria-label="Increment button" data-input-number-increment >
      <span class="icon-[componentx--plus] size-3.5 shrink-0"></span>
    </button>
  </span>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="input max-w-sm" data-input-number='{ "step": 5 }'>
  <input type="text" value="0" aria-label="Step control" data-input-number-input />
  <span class="my-auto flex gap-3">
    <button type="button" class="btn btn-primary btn-soft size-5.5 min-h-0 rounded-sm p-0" aria-label="Decrement button" data-input-number-decrement >
      <span class="icon-[componentx--minus] size-3.5 shrink-0"></span>
    </button>
    <button type="button" class="btn btn-primary btn-soft size-5.5 min-h-0 rounded-sm p-0" aria-label="Increment button" data-input-number-increment >
      <span class="icon-[componentx--plus] size-3.5 shrink-0"></span>
    </button>
  </span>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="input max-w-sm" data-input-number='{ "max": 15 }'>
  <input type="text" value="1" aria-label="Maximum value input" data-input-number-input />
  <span class="my-auto flex gap-3">
    <button type="button" class="btn btn-primary btn-soft size-5.5 min-h-0 rounded-sm p-0" aria-label="Decrement button" data-input-number-decrement >
      <span class="icon-[componentx--minus] size-3.5 shrink-0"></span>
    </button>
    <button type="button" class="btn btn-primary btn-soft size-5.5 min-h-0 rounded-sm p-0" aria-label="Increment button" data-input-number-increment >
      <span class="icon-[componentx--plus] size-3.5 shrink-0"></span>
    </button>
  </span>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="input max-w-sm" data-input-number='{ "min": -15 }'>
  <input type="text" value="0" aria-label="Minimum value input" data-input-number-input />
  <span class="my-auto flex gap-3">
    <button type="button" class="btn btn-primary btn-soft size-5.5 min-h-0 rounded-sm p-0" aria-label="Decrement button" data-input-number-decrement >
      <span class="icon-[componentx--minus] size-3.5 shrink-0"></span>
    </button>
    <button type="button" class="btn btn-primary btn-soft size-5.5 min-h-0 rounded-sm p-0" aria-label="Increment button" data-input-number-increment >
      <span class="icon-[componentx--plus] size-3.5 shrink-0"></span>
    </button>
  </span>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div id="input-number-to-destroy" class="input max-w-sm" data-input-number>
  <input type="text" value="1" aria-label="Input number destroy" data-input-number-input />
  <span class="my-auto flex gap-3">
    <button type="button" class="btn btn-primary btn-soft size-5.5 min-h-0 rounded-sm p-0" aria-label="Decrement button" data-input-number-decrement >
      <span class="icon-[componentx--minus] size-3.5 shrink-0"></span>
    </button>
    <button type="button" class="btn btn-primary btn-soft size-5.5 min-h-0 rounded-sm p-0" aria-label="Increment button" data-input-number-increment >
      <span class="icon-[componentx--plus] size-3.5 shrink-0"></span>
    </button>
  </span>
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
    const inputNumber = document.querySelector('#input-number-to-destroy')
    const destroyBtn = document.querySelector('#destroy-btn')
    const reinitBtn = document.querySelector('#reinit-btn')

    // Destroy usage
    destroyBtn.addEventListener('click', () => {
      const { element } = HSInputNumber.getInstance(inputNumber, true)

      element.destroy()

      destroyBtn.setAttribute('disabled', 'disabled')
      reinitBtn.removeAttribute('disabled')
    })

    // Reinit usage
    reinitBtn.addEventListener('click', () => {
      HSInputNumber.autoInit()

      reinitBtn.setAttribute('disabled', 'disabled')
      destroyBtn.removeAttribute('disabled')
    })
  })
</script>

```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div id="input-number" class="input max-w-sm" data-input-number>
  <input type="text" value="1" aria-label="Number input" data-input-number-input />
  <span class="my-auto flex gap-3">
    <button type="button" class="btn btn-primary btn-soft size-5.5 min-h-0 rounded-sm p-0" aria-label="Decrement button" data-input-number-decrement >
      <span class="icon-[componentx--minus] size-3.5 shrink-0"></span>
    </button>
    <button type="button" class="btn btn-primary btn-soft size-5.5 min-h-0 rounded-sm p-0" aria-label="Increment button" data-input-number-increment >
      <span class="icon-[componentx--plus] size-3.5 shrink-0"></span>
    </button>
  </span>
</div>
```

```js
<script>
  window.addEventListener('load', function () {
    const el = HSInputNumber.getInstance('#input-number')
  
    el.on('change', ({ inputValue }) => {
      console.log('Changed to:', inputValue)
    })
  })
</script>


```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
