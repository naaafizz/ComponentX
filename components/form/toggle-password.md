---
name: "Toggle Password"
library: "ComponentX"
id: "toggle-password"
type: "form"
quality: "standard"
tags: ["button", "data", "form", "input", "overlay", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Toggle Password

> **Type:** `form` · **Quality:** `standard` · **ID:** `toggle-password`
> **Path:** `components/form/toggle-password.md`

**Toggle Password** is a premium, production-ready component from the **ComponentX** library — engineered for form interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `button`, `data`, `form` workflows.
- **Pattern coverage** — includes `input`, `overlay`, `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Toggle Password** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
<div class="input max-w-sm">
  <input id="toggle-password" type="password" placeholder="Enter password" value="Pwd_1242@mA1" />
  <button type="button" data-toggle-password='{ "target": "#toggle-password" }' class="block cursor-pointer" aria-label="password toggle" >
    <span class="icon-[componentx--eye] text-base-content/80 password-active:block hidden size-5 shrink-0"></span>
    <span class="icon-[componentx--eye-off] text-base-content/80 password-active:hidden block size-5 shrink-0"></span>
  </button>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="max-w-sm">
  <label class="label-text" for="toggle-password-label">Password</label>
  <div class="input">
    <input id="toggle-password-label" type="password" placeholder="Enter password" value="Pwd_1242@mA1" />
    <button type="button" data-toggle-password='{ "target": "#toggle-password-label" }' class="block cursor-pointer" aria-label="password toggle" >
      <span class="icon-[componentx--eye] text-base-content/80 password-active:block hidden size-5 shrink-0"></span>
      <span class="icon-[componentx--eye-off] text-base-content/80 password-active:hidden block size-5 shrink-0"></span>
    </button>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="input max-w-sm">
  <div class="input-floating grow">
    <input id="toggle-password-floating" type="password" placeholder="Enter password" value="Pwd_1242@mA1" />
    <label class="input-floating-label ms-0" for="toggle-password-floating">Password</label>
  </div>
  <button type="button" data-toggle-password='{ "target": "#toggle-password-floating" }' class="block cursor-pointer" aria-label="password toggle">
    <span class="icon-[componentx--eye] text-base-content/80 password-active:block hidden size-5 shrink-0"></span>
    <span class="icon-[componentx--eye-off] text-base-content/80 password-active:hidden block size-5 shrink-0"></span>
  </button>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<!-- Basis -->
<div class="max-w-sm">
  <label class="label-text" for="toggle-password-basic-success">Password</label>
  <div class="input is-valid">
    <input id="toggle-password-basic-success" type="password" placeholder="Enter password" value="Pwd_1242@mA1" />
    <button type="button" data-toggle-password='{ "target": "#toggle-password-basic-success" }' class="block cursor-pointer" aria-label="password toggle" >
      <span class="icon-[componentx--eye] text-base-content/80 password-active:block hidden size-5 shrink-0"></span>
      <span class="icon-[componentx--eye-off] text-base-content/80 password-active:hidden block size-5 shrink-0"></span>
    </button>
  </div>
</div>
<!-- Floating example -->
<div class="input max-w-sm">
  <div class="input-floating">
    <input id="toggle-password-floating-success" class="is-valid" type="password" placeholder="Enter password" value="Pwd_1242@mA1" />
    <label class="input-floating-label ms-0" for="toggle-password-floating-success">Password</label>
  </div>
  <button type="button" data-toggle-password='{ "target": "#toggle-password-floating-success" }' class="block cursor-pointer" aria-label="password toggle" >
    <span class="icon-[componentx--eye] text-base-content/80 password-active:block hidden size-5 shrink-0"></span>
    <span class="icon-[componentx--eye-off] text-base-content/80 password-active:hidden block size-5 shrink-0"></span>
  </button>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<!-- Basis -->
<div class="max-w-sm">
  <label class="label-text" for="toggle-password-basic-error">Password</label>
  <div class="input is-invalid">
    <input id="toggle-password-basic-error" type="password" placeholder="Enter password" value="Pwd_1242@mA1" />
    <button type="button" data-toggle-password='{ "target": "#toggle-password-basic-error" }' class="block cursor-pointer" aria-label="password toggle" >
      <span class="icon-[componentx--eye] text-base-content/80 password-active:block hidden size-5 shrink-0"></span>
      <span class="icon-[componentx--eye-off] text-base-content/80 password-active:hidden block size-5 shrink-0"></span>
    </button>
  </div>
</div>

<!-- Floating example -->
<div class="input max-w-sm">
  <div class="input-floating">
    <input id="toggle-password-floating-error" class="is-invalid" type="password" placeholder="Enter password" value="Pwd_1242@mA1" />
    <label class="input-floating-label ms-0" for="toggle-password-floating-error">Password</label>
  </div>
  <button type="button" data-toggle-password='{ "target": "#toggle-password-floating-error" }' class="block cursor-pointer" aria-label="password toggle" >
    <span class="icon-[componentx--eye] text-base-content/80 password-active:block hidden size-5 shrink-0"></span>
    <span class="icon-[componentx--eye-off] text-base-content/80 password-active:hidden block size-5 shrink-0"></span>
  </button>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div data-toggle-password-group>
  <!-- Current password -->
  <div class="mb-4 max-w-sm">
    <label class="label-text" for="toggle-password-multiple1">Current Password</label>
    <div class="input">
      <input id="toggle-password-multiple1" type="password" placeholder="Enter password" value="Pwd_1242@mA1" />
      <button type="button" data-toggle-password='{ "target": ["#toggle-password-multiple1","#toggle-password-multiple2"] }' class="block cursor-pointer" aria-label="password toggle" >
        <span class="icon-[componentx--eye] text-base-content/80 password-active:block hidden size-5 shrink-0"></span>
        <span class="icon-[componentx--eye-off] text-base-content/80 password-active:hidden block size-5 shrink-0"></span>
      </button>
    </div>
  </div>
  <!-- New password -->
  <div class="max-w-sm">
    <label class="label-text" for="toggle-password-multiple2">New Password</label>
    <div class="input">
      <input id="toggle-password-multiple2" type="password" placeholder="Enter password" value="Pwd_1242@mA1" />
      <button type="button" data-toggle-password='{ "target": ["#toggle-password-multiple1","#toggle-password-multiple2"] }' class="block cursor-pointer" aria-label="password toggle" >
        <span class="icon-[componentx--eye] text-base-content/80 password-active:block hidden size-5 shrink-0"></span>
        <span class="icon-[componentx--eye-off] text-base-content/80 password-active:hidden block size-5 shrink-0"></span>
      </button>
    </div>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="mb-3 max-w-sm">
  <label class="label-text" for="toggle-password-checkbox">Password</label>
  <input id="toggle-password-checkbox" type="password" class="input" placeholder="Enter password" value="Pwd_1242@mA1" />
</div>

<div class="flex items-center gap-2">
  <input id="toggleCheckboxPassword" type="checkbox" data-toggle-password='{ "target": "#toggle-password-checkbox" }' class="checkbox checkbox-primary" />
  <label class="label-text text-base" for="toggleCheckboxPassword">Show password</label>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<button type="button" class="btn btn-primary" aria-haspopup="dialog" aria-expanded="false" aria-controls="password-modal" data-overlay="#password-modal" >
  Open modal
</button>

<div id="password-modal" class="overlay modal overlay-open:opacity-100 overlay-open:duration-300 hidden" role="dialog" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title">Check Password</h3>
        <button type="button" class="btn btn-text btn-circle btn-sm absolute end-3 top-3" aria-label="Close" data-overlay="#password-modal" >
          <span class="icon-[componentx--x] size-4"></span>
        </button>
      </div>
      <div class="modal-body">
        <label class="label-text" for="toggle-password-modal">Password</label>
        <div class="input">
          <input id="toggle-password-modal" type="password" placeholder="Enter password" value="Pwd_1242@mA1" />
          <button type="button" data-toggle-password='{ "target": "#toggle-password-modal" }' class="block cursor-pointer" aria-label="password toggle" >
            <span class="icon-[componentx--eye] text-base-content/80 password-active:block hidden size-5 shrink-0"></span>
            <span
              class="icon-[componentx--eye-off] text-base-content/80 password-active:hidden block size-5 shrink-0"
            ></span>
          </button>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-soft btn-secondary" data-overlay="#password-modal">Close</button>
      </div>
    </div>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div id="toggle-password-to-destroy" data-toggle-password-group>
  <!-- Current password -->
  <div class="mb-4 max-w-sm">
    <label class="label-text" for="toggle-password-destroy">Current Password</label>
    <div class="input">
      <input id="toggle-password-destroy" type="password" placeholder="Enter password" value="Pwd_1242@mA1" />
      <button type="button" data-toggle-password='{ "target": ["#toggle-password-destroy","#toggle-password-destroy2"] }' class="block cursor-pointer" aria-label="password toggle" >
        <span class="icon-[componentx--eye] text-base-content/80 password-active:block hidden size-5 shrink-0"></span>
        <span class="icon-[componentx--eye-off] text-base-content/80 password-active:hidden block size-5 shrink-0"></span>
      </button>
    </div>
  </div>
  <!-- New password -->
  <div class="max-w-sm">
    <label class="label-text" for="toggle-password-destroy2">New Password</label>
    <div class="input">
      <input id="toggle-password-destroy2" type="password" placeholder="Enter password" value="Pwd_1242@mA1" />
      <button type="button" data-toggle-password='{ "target": ["#toggle-password-destroy","#toggle-password-destroy2"] }' class="block cursor-pointer" aria-label="password toggle" >
        <span class="icon-[componentx--eye] text-base-content/80 password-active:block hidden size-5 shrink-0"></span>
        <span class="icon-[componentx--eye-off] text-base-content/80 password-active:hidden block size-5 shrink-0"></span>
      </button>
    </div>
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
    const togglesPassword = document.querySelectorAll('#toggle-password-to-destroy [data-toggle-password]')
    const destroyBtn = document.querySelector('#destroy-btn')
    const reinitBtn = document.querySelector('#reinit-btn')

    destroyBtn.addEventListener('click', () => {
      togglesPassword.forEach(el => {
        const { element } = HSTogglePassword.getInstance(el, true)

        element.destroy()
      })

      destroyBtn.setAttribute('disabled', 'disabled')
      reinitBtn.removeAttribute('disabled')
    })

    reinitBtn.addEventListener('click', () => {
      HSTogglePassword.autoInit()

      reinitBtn.setAttribute('disabled', 'disabled')
      destroyBtn.removeAttribute('disabled')
    })
  })
</script>

```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="input max-w-sm">
  <input id="toggle-password-mt" type="password" placeholder="Enter password" value="Pwd_1242@mA1" />
  <button id="toggle-password-method" type="button" data-toggle-password='{ "target": "#toggle-password-mt" }' class="block cursor-pointer" aria-label="password toggle">
    <span class="icon-[componentx--eye] text-base-content/80 password-active:block hidden size-5 shrink-0"></span>
    <span class="icon-[componentx--eye-off] text-base-content/80 password-active:hidden block size-5 shrink-0"></span>
  </button>
</div>

<button type="button" class="btn btn-primary w-max" id="show-btn">Show Btn</button>
```

```js
<script>
  window.addEventListener('load', function () {
    const togglePassword = new HSTogglePassword(document.querySelector('#toggle-password-method'))
    const showBtn = document.querySelector('#show-btn')

    showBtn.addEventListener('click', () => {
      togglePassword.show()
    })
  })
</script>


```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="input max-w-sm">
  <input id="toggle-password-el" type="password" placeholder="Enter password" value="Pwd_1242@mA1" />
  <button id="toggle-password-event" type="button" data-toggle-password='{ "target": "#toggle-password-el" }' class="block cursor-pointer" aria-label="password toggle" >
    <span class="icon-[componentx--eye] text-base-content/80 password-active:block hidden size-5 shrink-0"></span>
    <span class="icon-[componentx--eye-off] text-base-content/80 password-active:hidden block size-5 shrink-0"></span>
  </button>
</div>
```

```js
<script>
  window.addEventListener('load', function () {
    const el = HSTogglePassword.getInstance('#toggle-password-event')

    el.on('toggle', target => {
      console.log('target:', target)
    })
  })
</script>


```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
