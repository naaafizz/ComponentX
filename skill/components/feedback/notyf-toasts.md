---
name: "Notyf (Toasts)"
library: "ComponentX"
id: "notyf-toasts"
type: "feedback"
quality: "standard"
tags: ["background", "button", "card", "feedback", "form", "input", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Notyf (Toasts)

> **Type:** `feedback` · **Quality:** `standard` · **ID:** `notyf-toasts`
> **Path:** `components/feedback/notyf-toasts.md`

**Notyf (Toasts)** is a premium, production-ready component from the **ComponentX** library — engineered for feedback interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `background`, `button`, `card` workflows.
- **Pattern coverage** — includes `feedback`, `form`, `input` workflows.
- **Pattern coverage** — includes `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Notyf (Toasts)** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
<button class="btn btn-primary" id="notyf-default-example">Default notyf</button>
```

```js
<script>
  window.addEventListener('load', function () {
    const notyfDefault = new Notyf()

    document.getElementById('notyf-default-example').addEventListener('click', function () {
     notyfDefault.success('This is primary notification!')
    })
  })
</script>


```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<button class="btn btn-primary" id="notyf-custom-example">Custom notyf</button>
```

```js
<script>
  window.addEventListener('load', function () {
    const notyfCustom = new Notyf({
      duration: 3000,
      position: {
        x: 'right',
        y: 'top'
      },
      types: [
        {
          type: 'primary',
          background: 'var(--color-primary)',
          icon: { className: 'icon-[componentx--circle-check] !text-primary', tagName: 'i' },
          text: '',
          color: 'white'
        }
      ]
    })

    document.getElementById('notyf-custom-example').addEventListener('click', function () {
      notyfCustom.open({
        type: 'primary',
        message: 'This is primary notification!',
        duration: 3000,
        ripple: true,
        dismissible: true
      })
    })
  })
</script>


```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="card mt-6 max-w-lg max-sm:w-64">
  <form id="notificationForm">
    <div class="card-body">
      <!-- Message -->
      <div>
        <label class="label-text" for="notyf-value"> Message </label>
        <input id="notyf-value" type="text" placeholder="Notification message" class="input" autofocus />
      </div>
      <!-- Number -->
      <div>
        <label class="label-text" for="notyf-number"> Duration </label>
        <input id="notyf-number" type="number" placeholder="1000 (Milliseconds)" class="input" min="1000" />
      </div>
      <!-- position - X -->
      <div class="flex flex-col">
        <h6 class="text-sm text-base-content mb-1">Position - X</h6>
        <div class="flex flex-wrap gap-3">
          <div class="flex items-center gap-1">
            <input type="radio" name="radio-x" class="radio radio-primary" id="positionXLeft" value="left" checked />
            <label class="label-text text-base" for="positionXLeft"> Left </label>
          </div>
          <div class="flex items-center gap-1">
            <input type="radio" name="radio-x" class="radio radio-primary" id="positionXcenter" value="center" />
            <label class="label-text text-base" for="positionXcenter"> Center </label>
          </div>
          <div class="flex items-center gap-1">
            <input type="radio" name="radio-x" class="radio radio-primary" id="positionXright" value="right" />
            <label class="label-text text-base" for="positionXright"> Right </label>
          </div>
        </div>
      </div>
      <!-- position - Y -->
      <div class="flex flex-col">
        <h6 class="text-sm text-base-content mb-1">Position - Y</h6>
        <div class="flex flex-wrap gap-3">
          <div class="flex items-center gap-1">
            <input type="radio" name="radio-y" class="radio radio-primary" id="positionYtop" value="top" checked />
            <label class="label-text text-base" for="positionYtop"> Top </label>
          </div>
          <div class="flex items-center gap-1">
            <input type="radio" name="radio-y" class="radio radio-primary" id="positionYcenter" value="center" />
            <label class="label-text text-base" for="positionYcenter"> Center </label>
          </div>
          <div class="flex items-center gap-1">
            <input type="radio" name="radio-y" class="radio radio-primary" id="positionYbottom" value="bottom" />
            <label class="label-text text-base" for="positionYbottom"> Bottom </label>
          </div>
        </div>
      </div>
      <!-- Behavior -->
      <div class="flex flex-col">
        <h6 class="text-sm text-base-content mb-1">Behavior</h6>
        <div class="flex flex-col gap-2 sm:flex-row sm:gap-4">
          <div class="flex items-center gap-1">
            <input id="notyf-ripple" type="checkbox" class="checkbox checkbox-primary" checked />
            <label class="label-text text-base" for="notyf-ripple"> With Ripple effect </label>
          </div>
          <div class="flex items-center gap-1">
            <input id="notyf-dismiss" type="checkbox" class="checkbox checkbox-primary"/>
            <label class="label-text text-base" for="notyf-dismiss"> Dismissible </label>
          </div>
        </div>
      </div>
      <!-- Type -->
      <div class="flex flex-col">
        <h6 class="text-sm text-base-content mb-1">Type</h6>
        <div class="flex flex-col gap-2 sm:flex-row sm:gap-4">
          <div class="flex items-center gap-1">
            <input type="radio" name="radio-type" class="radio radio-primary" id="typeSuccess" value="success" checked />
            <label class="label-text text-base" for="typeSuccess"> Success </label>
          </div>
          <div class="flex items-center gap-1">
            <input type="radio" name="radio-type" class="radio radio-primary" id="typeInfo" value="info" />
            <label class="label-text text-base" for="typeInfo"> Info </label>
          </div>
          <div class="flex items-center gap-1">
            <input type="radio" name="radio-type" class="radio radio-primary" id="typeWarning" value="warning" />
            <label class="label-text text-base" for="typeWarning"> Warning </label>
          </div>
          <div class="flex items-center gap-1">
            <input type="radio" name="radio-type" class="radio radio-primary" id="typeError" value="error" />
            <label class="label-text text-base" for="typeError"> Error </label>
          </div>
        </div>
      </div>
      <button id="notyf-submit" type="submit" class="btn btn-primary">Show Notification</button>
    </div>
  </form>
</div>
```

```js
<script>
  window.addEventListener('load', function () {
    const notyf = new Notyf({
      duration: 3000,
      position: {
        x: 'right',
        y: 'top'
      },
      types: [
        {
          // Added Info and Warning type 
          type: 'info',
          background: 'var(--color-info)',
          icon: { className: 'icon-[componentx--info-circle] !text-info', tagName: 'i' },
          text: '',
          color: 'white'
        },
        {
          type: 'warning',
          background: 'var(--color-warning)',
          icon: { className: 'icon-[componentx--alert-triangle] !text-warning', tagName: 'i' },
          text: '',
          color: 'white'
        }
      ]
    })

    document.getElementById('notificationForm').addEventListener('submit', function (event) {
      event.preventDefault()

      // Get values from the form
      let message = document.getElementById('notyf-value').value || 'This is a notification!'
      let duration = parseInt(document.getElementById('notyf-number').value) || 3000 // Default duration to 3000 if not specified
      let positionX = document.querySelector('input[name="radio-x"]:checked').value
      let positionY = document.querySelector('input[name="radio-y"]:checked').value
      let ripple = document.getElementById('notyf-ripple').checked
      let dismissible = document.getElementById('notyf-dismiss').checked
      let type = document.querySelector('input[name="radio-type"]:checked').value

      // Update Notyf instance with dynamic position
      notyf.options.duration = duration
      notyf.options.position = {
        x: positionX,
        y: positionY
      }

      // Show the toast notification
      notyf.open({
        type: type,
        message: message,
        duration: duration,
        ripple: ripple,
        dismissible: dismissible
      })
    })
  })
</script>


```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
