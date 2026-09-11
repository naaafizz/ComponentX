---
name: "Swap"
library: "ComponentX"
id: "swap"
type: "navigation"
quality: "standard"
tags: ["component", "input", "menu", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Swap

> **Type:** `navigation` · **Quality:** `standard` · **ID:** `swap`
> **Path:** `components/navigation/swap.md`

**Swap** is a premium, production-ready component from the **ComponentX** library — engineered for navigation interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `input`, `menu`, `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Swap** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
<label class="swap">
  <input type="checkbox" />
  <span class="swap-off">OFF</span>
  <span class="swap-on">ON</span>
</label>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<label class="swap">
  <input type="checkbox" />
  <span class="swap-on icon-[componentx--volume] size-6"></span>
  <span class="swap-off icon-[componentx--volume-off] size-6"></span>
</label>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<label class="swap swap-rotate">
  <input type="checkbox" />
  <span class="swap-on icon-[componentx--sun] size-6"></span>
  <span class="swap-off icon-[componentx--moon] size-6"></span>
</label>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<label class="btn btn-circle swap swap-rotate">
  <input type="checkbox" />
  <span class="icon-[componentx--menu-2] swap-off"></span>
  <span class="icon-[componentx--x] swap-on"></span>
</label>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<label class="swap swap-flip text-6xl">
  <input type="checkbox" />
  <span class="swap-on">😈</span>
  <span class="swap-off">😇</span>
</label>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<label class="swap swap-js text-6xl">
  <span class="swap-on">🥵</span>
  <span class="swap-off">🥶</span>
</label>
<label class="swap swap-js text-6xl">
  <span class="swap-on">🥳</span>
  <span class="swap-off">😭</span>
</label>
```

```js
<script>
// Swap elements JS code below
const swapElements = document.querySelectorAll('.swap-js')

// Function to handle click event on swap elements
function handleClick(event) {
  // Toggle the 'swap-active' class on the clicked swap element
  event.currentTarget.classList.toggle('swap-active')

  // Get the 'swap-on' and 'swap-off' elements within the current swap element
  const swapOn = event.currentTarget.querySelector('.swap-on')
  const swapOff = event.currentTarget.querySelector('.swap-off')

  // Determine the value based on the presence of 'swap-active' class
  const value = event.currentTarget.classList.contains('swap-active') ? swapOn.innerHTML : swapOff.innerHTML

  // Log the value to the console
  console.log(`Value: ${value}`)
}

// Iterate through each swap element and add click event listener
swapElements.forEach(swapElement => {
  swapElement.addEventListener('click', handleClick)
})

</script>


```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<label class="swap">
  <input type="checkbox" />
  <span class="swap-off font-medium">LTR</span>
  <span class="swap-on font-medium">RTL</span>
</label>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<label class="btn btn-circle swap swap-rotate">
  <input type="checkbox" />
  <span class="icon-[componentx--player-play] swap-off"></span>
  <span class="icon-[componentx--player-pause] swap-on"></span>
</label>
```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
