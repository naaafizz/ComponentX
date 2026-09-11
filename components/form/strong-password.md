---
name: "Strong Password"
library: "ComponentX"
id: "strong-password"
type: "form"
quality: "standard"
tags: ["card", "data", "form", "input", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Strong Password

> **Type:** `form` · **Quality:** `standard` · **ID:** `strong-password`
> **Path:** `components/form/strong-password.md`

**Strong Password** is a premium, production-ready component from the **ComponentX** library — engineered for form interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `card`, `data`, `form` workflows.
- **Pattern coverage** — includes `input`, `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Strong Password** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
<div class="flex max-w-sm">
  <div class="flex-1">
    <input type="password" id="password-base" class="input" placeholder="Enter password" />
    <div
      data-strong-password='{
        "target": "#password-base",
        "stripClasses": "strong-password:bg-primary strong-password-accepted:bg-teal-500 h-1.5 flex-auto bg-neutral/20"
      }'
      class="rounded-full overflow-hidden mt-2 flex gap-0.5">
    </div>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="max-w-sm">
  <div class="flex-1">
    <label class="label-text" for="password-label"> Enter password </label>
    <input type="password" id="password-label" class="input" placeholder="Enter password" />
    <div
      data-strong-password='{
        "target": "#password-label",
        "stripClasses": "strong-password:bg-primary strong-password-accepted:bg-teal-500 h-1.5 flex-auto bg-neutral/20"
      }'
      class="rounded-full overflow-hidden mt-2 flex gap-0.5">
    </div>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<!-- Floating example -->
<div class="flex max-w-sm">
  <div class="input-floating">
    <input type="password" id="password-floating" class="input" placeholder="Make it strong" />
    <label class="input-floating-label" for="password-floating">Enter password</label>
    <div
      data-strong-password='{
        "target": "#password-floating",
        "stripClasses": "strong-password:bg-primary strong-password-accepted:bg-teal-500 h-1.5 flex-auto bg-neutral/20"
      }'
      class="rounded-full overflow-hidden mt-2 flex gap-0.5">
    </div>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="max-w-sm">
  <div class="flex mb-2">
    <div class="flex-1">
      <input type="password" id="password-hints" class="input" placeholder="Enter password" />
      <div
        data-strong-password='{
          "target": "#password-hints",
          "hints": "#password-hints-content",
          "stripClasses": "strong-password:bg-primary strong-password-accepted:bg-teal-500 h-1.5 flex-auto bg-neutral/20"
        }'
        class="rounded-full overflow-hidden mt-2 flex gap-0.5">
      </div>
    </div>
  </div>
  <div id="password-hints-content" class="mb-3">
    <div>
      <span class="text-sm text-base-content">Level:</span>
      <span
        data-pw-strength-hint='["Empty", "Weak", "Medium", "Strong", "Very Strong", "Super Strong"]'
        class="text-base-content text-sm font-semibold">
      </span>
    </div>
    <h6 class="my-2 text-base font-semibold text-base-content">Your password must contain:</h6>
    <ul class="text-base-content/80 space-y-1 text-sm">
      <li data-pw-strength-rule="min-length" class="strong-password-active:text-success flex items-center gap-x-2">
        <span class="icon-[componentx--circle-check] hidden size-5 shrink-0" data-check></span>
        <span class="icon-[componentx--circle-x] hidden size-5 shrink-0" data-uncheck></span>
        Minimum number of characters is 6.
      </li>
      <li data-pw-strength-rule="lowercase" class="strong-password-active:text-success flex items-center gap-x-2">
        <span class="icon-[componentx--circle-check] hidden size-5 shrink-0" data-check></span>
        <span class="icon-[componentx--circle-x] hidden size-5 shrink-0" data-uncheck></span>
        Should contain lowercase.
      </li>
      <li data-pw-strength-rule="uppercase" class="strong-password-active:text-success flex items-center gap-x-2">
        <span class="icon-[componentx--circle-check] hidden size-5 shrink-0" data-check></span>
        <span class="icon-[componentx--circle-x] hidden size-5 shrink-0" data-uncheck></span>
        Should contain uppercase.
      </li>
      <li data-pw-strength-rule="numbers" class="strong-password-active:text-success flex items-center gap-x-2">
        <span class="icon-[componentx--circle-check] hidden size-5 shrink-0" data-check></span>
        <span class="icon-[componentx--circle-x] hidden size-5 shrink-0" data-uncheck></span>
        Should contain numbers.
      </li>
      <li data-pw-strength-rule="special-characters" class="strong-password-active:text-success flex items-center gap-x-2" >
        <span class="icon-[componentx--circle-check] hidden size-5 shrink-0" data-check></span>
        <span class="icon-[componentx--circle-x] hidden size-5 shrink-0" data-uncheck></span>
        Should contain special characters.
      </li>
    </ul>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex max-w-sm">
  <div class="flex-1">
    <input type="password" id="min-length" class="input" placeholder="Enter password" />
    <div
      data-strong-password='{
        "target": "#min-length",
        "stripClasses": "strong-password-accepted:bg-teal-500 h-1.5 flex-auto rounded-full bg-neutral/20",
        "minLength": "7",
        "checksExclude": ["lowercase", "uppercase", "numbers", "special-characters"]
      }'
      class="mt-2">
    </div>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex max-w-sm">
  <div class="flex-1">
    <input type="password" id="password-special-character" class="input" placeholder="Enter password" />
    <div
      data-strong-password='{
        "target": "#password-special-character",
        "stripClasses": "strong-password:bg-primary strong-password-accepted:bg-teal-500 h-1.5 flex-auto bg-neutral/20",
        "specialCharactersSet": "&!@"
      }'
      class="rounded-full overflow-hidden mt-2 flex gap-0.5">
    </div>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="max-w-sm">
  <div class="flex">
    <div class="relative flex-1">
      <input type="password" id="password-popover" class="input" placeholder="Enter password"/>
      <div id="password-popover-content" class="card absolute z-10 w-full hidden p-4">
        <div
          data-strong-password='{
            "target": "#password-popover",
            "hints": "#password-popover-content",
            "stripClasses": "strong-password:bg-primary strong-password-accepted:bg-teal-500 h-1.5 flex-auto bg-neutral/20",
            "mode": "popover"
          }'
          class="rounded-full overflow-hidden mt-2.5 flex gap-0.5">
        </div>
        <h6 class="text-base text-base-content my-2 font-semibold">Your password must contain:</h6>
        <ul class="text-base-content/80 space-y-1 text-sm">
          <li data-pw-strength-rule="min-length" class="strong-password-active:text-success flex items-center gap-x-2">
            <span class="icon-[componentx--circle-check] hidden size-5 shrink-0" data-check></span>
            <span class="icon-[componentx--circle-x] hidden size-5 shrink-0" data-uncheck></span>
            Minimum number of characters is 6.
          </li>
          <li data-pw-strength-rule="lowercase" class="strong-password-active:text-success flex items-center gap-x-2">
            <span class="icon-[componentx--circle-check] hidden size-5 shrink-0" data-check></span>
            <span class="icon-[componentx--circle-x] hidden size-5 shrink-0" data-uncheck></span>
            Should contain lowercase.
          </li>
          <li data-pw-strength-rule="uppercase" class="strong-password-active:text-success flex items-center gap-x-2">
            <span class="icon-[componentx--circle-check] hidden size-5 shrink-0" data-check></span>
            <span class="icon-[componentx--circle-x] hidden size-5 shrink-0" data-uncheck></span>
            Should contain uppercase.
          </li>
          <li data-pw-strength-rule="numbers" class="strong-password-active:text-success flex items-center gap-x-2">
            <span class="icon-[componentx--circle-check] hidden size-5 shrink-0" data-check></span>
            <span class="icon-[componentx--circle-x] hidden size-5 shrink-0" data-uncheck></span>
            Should contain numbers.
          </li>
          <li data-pw-strength-rule="special-characters" class="strong-password-active:text-success flex items-center gap-x-2" >
            <span class="icon-[componentx--circle-check] hidden size-5 shrink-0" data-check></span>
            <span class="icon-[componentx--circle-x] hidden size-5 shrink-0" data-uncheck></span>
            Should contain special characters.
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="max-w-sm">
  <div class="flex mb-2">
    <div class="flex-1">
      <input type="password" id="password-hints-to-destroy" class="input" placeholder="Enter password" />
      <div
        id="strong-password-to-destroy"
        data-strong-password='{
          "target": "#password-hints-to-destroy",
          "hints": "#password-hints-content-to-destroy",
          "stripClasses": "strong-password:bg-primary strong-password-accepted:bg-teal-500 h-1.5 flex-auto bg-neutral/20"
        }'
        class="rounded-full overflow-hidden mt-2 flex gap-0.5">
      </div>
    </div>
  </div>
  <div id="password-hints-content-to-destroy" class="mb-3">
    <div>
      <span class="text-sm text-base-content">Level:</span>
      <span
        data-pw-strength-hint='["Empty", "Weak", "Medium", "Strong", "Very Strong", "Super Strong"]'
        class="text-base-content text-sm font-semibold">
      </span>
    </div>
    <h6 class="my-2 text-base font-semibold text-base-content">Your password must contain:</h6>
    <ul class="text-base-content/80 space-y-1 text-sm">
      <li data-pw-strength-rule="min-length" class="strong-password-active:text-success flex items-center gap-x-2">
        <span class="icon-[componentx--circle-check] hidden size-5 shrink-0" data-check></span>
        <span class="icon-[componentx--circle-x] hidden size-5 shrink-0" data-uncheck></span>
        Minimum number of characters is 6.
      </li>
      <li data-pw-strength-rule="lowercase" class="strong-password-active:text-success flex items-center gap-x-2">
        <span class="icon-[componentx--circle-check] hidden size-5 shrink-0" data-check></span>
        <span class="icon-[componentx--circle-x] hidden size-5 shrink-0" data-uncheck></span>
        Should contain lowercase.
      </li>
      <li data-pw-strength-rule="uppercase" class="strong-password-active:text-success flex items-center gap-x-2">
        <span class="icon-[componentx--circle-check] hidden size-5 shrink-0" data-check></span>
        <span class="icon-[componentx--circle-x] hidden size-5 shrink-0" data-uncheck></span>
        Should contain uppercase.
      </li>
      <li data-pw-strength-rule="numbers" class="strong-password-active:text-success flex items-center gap-x-2">
        <span class="icon-[componentx--circle-check] hidden size-5 shrink-0" data-check></span>
        <span class="icon-[componentx--circle-x] hidden size-5 shrink-0" data-uncheck></span>
        Should contain numbers.
      </li>
      <li data-pw-strength-rule="special-characters" class="strong-password-active:text-success flex items-center gap-x-2" >
        <span class="icon-[componentx--circle-check] hidden size-5 shrink-0" data-check></span>
        <span class="icon-[componentx--circle-x] hidden size-5 shrink-0" data-uncheck></span>
        Should contain special characters.
      </li>
    </ul>
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
    const strongPassword = document.querySelector('#strong-password-to-destroy')
    const destroyBtn = document.querySelector('#destroy-btn')
    const reinitBtn = document.querySelector('#reinit-btn')

    // Destroy usage
    destroyBtn.addEventListener('click', () => {
      const { element } = HSStrongPassword.getInstance(strongPassword, true)

      element.destroy()

      destroyBtn.setAttribute('disabled', 'disabled')
      reinitBtn.removeAttribute('disabled')
    })

    // Reinit usage
    reinitBtn.addEventListener('click', () => {
      HSStrongPassword.autoInit()

      reinitBtn.setAttribute('disabled', 'disabled')
      destroyBtn.removeAttribute('disabled')
    })
  })
</script>

```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex max-w-sm">
  <div class="flex-1">
    <input type="password" id="password-event" class="input" placeholder="Enter password" />
    <div
      id="strong-password"
      data-strong-password='{
        "target": "#password-event",
        "stripClasses": "strong-password:bg-primary strong-password-accepted:bg-teal-500 h-1.5 flex-auto bg-neutral/20"
      }'
      class="rounded-full overflow-hidden mt-2 flex gap-0.5">
    </div>
  </div>
</div>
```

```js
<script>
  window.addEventListener('load', function () {
    const el = HSStrongPassword.getInstance('#strong-password', true).element
    el.on('change', ({ strength, rules }) => {
      console.log('strength:', strength)
      console.log('rules:', rules)
    })
  })
</script>


```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
