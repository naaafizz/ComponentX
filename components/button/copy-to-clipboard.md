---
name: "Copy To Clipboard"
library: "ComponentX"
id: "copy-to-clipboard"
type: "button"
quality: "standard"
tags: ["button", "component", "data", "input", "overlay", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Copy To Clipboard

> **Type:** `button` · **Quality:** `standard` · **ID:** `copy-to-clipboard`
> **Path:** `components/button/copy-to-clipboard.md`

**Copy To Clipboard** is a premium, production-ready component from the **ComponentX** library — engineered for button interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `button`, `data`, `input` workflows.
- **Pattern coverage** — includes `overlay`, `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Copy To Clipboard** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
<div class="rounded-box inline-flex items-center gap-1 p-1 shadow-base-300/20 shadow-sm">
  <code id="clipboard-basic" class="px-2 text-base-content text-sm font-medium">npm install flyonui</code>
  <button type="button" class="js-clipboard btn btn-square btn-text" aria-label="Copy text to clipboard" data-clipboard-target="#clipboard-basic" data-clipboard-action="copy">
    <span class="js-clipboard-default icon-[componentx--clipboard] size-5 transition"></span>
    <span class="js-clipboard-success icon-[componentx--clipboard-check] text-primary hidden size-5"></span>
  </button>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex w-full gap-x-3">
  <input id="clipboard-input" type="text" class="input" value="https://www.flyonui.com/design/figma/12345" aria-label="Text to copy" />
  <button type="button" class="js-clipboard btn btn-primary" data-clipboard-target="#clipboard-input" data-clipboard-action="copy" data-clipboard-success-text="Copied!">
    <span class="js-clipboard-default icon-[componentx--clipboard] size-5 transition"></span>
    <span class="js-clipboard-success icon-[componentx--clipboard-check] hidden size-5"></span>
    <span class="js-clipboard-success-text">Copy</span>
  </button>
</div>
```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<label class="input max-w-md flex space-x-3">
  <span class="icon-[componentx--link] text-base-content/80 my-auto size-5 shrink-0"></span>
  <input id="clipboard-input-group" type="text" class="grow" value="https://www.flyonui.com/design/figma/12345" />
  <button type="button" class="js-clipboard my-auto size-5" aria-label="Copy text to clipboard" data-clipboard-target="#clipboard-input-group" data-clipboard-action="copy">
    <span class="js-clipboard-default icon-[componentx--clipboard] size-5 transition"></span>
    <span class="js-clipboard-success icon-[componentx--clipboard-check] text-primary hidden size-5"></span>
  </button>
</label>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="rounded-box flex min-w-60 items-center justify-between gap-x-4 px-4 py-3 shadow-base-300/20 shadow-sm">
  <code>
    <span class="text-base-content me-2 text-lg font-medium">$</span>
    <span id="clipboard-tooltip" class="text-base-content">npm i flyonui</span>
  </code>
  <div class="js-clipboard tooltip [--trigger:focus]" data-clipboard-target="#clipboard-tooltip" data-clipboard-action="copy">
    <span class="tooltip-toggle flex items-center justify-center">
      <span class="js-clipboard-default icon-[componentx--clipboard] size-6 transition"></span>
      <span class="js-clipboard-success icon-[componentx--clipboard-check] text-primary hidden size-6"></span>
    </span>
    <span class="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible" role="tooltip">
      <span class="tooltip-body">Copied!</span>
    </span>
  </div>
</div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="rounded-box flex min-w-60 items-center justify-between gap-x-4 px-4 py-3 shadow-base-300/20 shadow-sm">
  <code>
    <span class="text-base-content me-2 text-lg font-medium">$</span>
    <span id="clipboard-tooltip-on-hover" class="text-base-content">npm i flyonui</span>
  </code>
  <button type="button" class="js-clipboard tooltip" aria-label="Copy text to clipboard" data-clipboard-target="#clipboard-tooltip-on-hover" data-clipboard-action="copy" data-clipboard-success-text="Copied!">
    <span class="tooltip-toggle flex items-center justify-center">
      <span class="js-clipboard-default icon-[componentx--clipboard] size-6 transition"></span>
      <span class="js-clipboard-success icon-[componentx--clipboard-check] text-primary hidden size-6"></span>
    </span>
    <span class="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible" role="tooltip">
      <span class="tooltip-body js-clipboard-success-text">Copy</span>
    </span>
  </button>
</div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<input type="hidden" id="clipboard-tooltip-centered" value="npm i flyonui" />

<button type="button" class="js-clipboard tooltip rounded-box relative flex min-w-60 items-center justify-between gap-x-4 px-4 py-3 shadow-base-300/20 shadow-sm" data-clipboard-target="#clipboard-tooltip-centered" data-clipboard-action="copy" data-clipboard-success-text="Copied!">
  <code>
    <span class="text-base-content font-medium">$</span>
    <span class="text-base-content">npm i flyonui</span>
  </code>
  <span class="flex items-center justify-center">
    <span class="js-clipboard-default icon-[componentx--clipboard] size-6 transition"></span>
    <span class="js-clipboard-success icon-[componentx--clipboard-check] text-primary hidden size-6"></span>
  </span>
  <span class="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible" role="tooltip">
    <span class="tooltip-body js-clipboard-success-text">Copy</span>
  </span>
</button>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<button type="button" class="btn btn-primary" aria-haspopup="dialog" aria-expanded="false" aria-controls="clipboard-modal" data-overlay="#clipboard-modal">Open modal</button>

<div id="clipboard-modal" class="overlay modal overlay-open:opacity-100 overlay-open:duration-300 hidden" role="dialog" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title">Personal Access Token</h3>
        <button type="button" class="btn btn-text btn-circle btn-sm absolute end-3 top-3" aria-label="Close" data-overlay="#clipboard-modal">
          <span class="icon-[componentx--x] size-4"></span>
        </button>
      </div>
      <div class="modal-body">
        <div class="flex gap-3 pt-2">
          <div class="input">
            <span class="icon-[componentx--key] text-base-content/80 my-auto me-3 size-5 shrink-0"></span>
            <label class="sr-only" for="clipboard-input-modal">Full Name</label>
            <input type="text" class="grow" placeholder="John Doe" id="clipboard-input-modal" value="9A8b7c6d-5e4F-3g2h-1I0j-k9l8m7n6O5p4-q3r2s1t0-u9v8W7x6y5z4-a1b2c3d4e5F6" />
          </div>
          <button type="button" class="js-clipboard btn btn-primary h-9.5" data-clipboard-target="#clipboard-input-modal" data-clipboard-action="copy" data-clipboard-success-text="Copied!">
            <span class="js-clipboard-default icon-[componentx--clipboard] size-5 transition"></span>
            <span class="js-clipboard-success icon-[componentx--clipboard-check] hidden size-5"></span>
            <span class="js-clipboard-success-text">Copy</span>
          </button>
        </div>
        <p class="mt-3 text-xs">
          Do not share this PAT key with anyone or lose it. Add this key in your own PAT key in your account & actions.
          If you have any questions or need further assistance, please contact our support team.
        </p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-soft btn-secondary" data-overlay="#clipboard-modal">Close</button>
      </div>
    </div>
  </div>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="mockup-code bg-base-200/40 rounded-box relative pb-0 before:content-none">
  <pre id="clipboard-source-code" class="overflow-x-auto text-sm"><code>const clipboard = new ClipboardJS(el, {
    text: trigger => {
    const clipboardText = trigger.dataset.clipboardText

    if (clipboardText) return clipboardText

    const clipboardTarget = trigger.dataset.clipboardTarget
    const $element = document.querySelector(clipboardTarget)

    if ($element.tagName === 'SELECT' || $element.tagName === 'INPUT' || $element.tagName === 'TEXTAREA')
      return $element.value
    else return $element.textContent
    }

})</code></pre>

  <button type="button" class="js-clipboard tooltip absolute end-2 top-2" aria-label="Copy text to clipboard" data-clipboard-target="#clipboard-source-code" data-clipboard-action="copy" data-clipboard-success-text="Copied!">
    <span class="toolttip-toggle btn btn-square btn-primary">
      <span class="js-clipboard-default icon-[componentx--clipboard] size-5 transition"></span>
      <span class="js-clipboard-success icon-[componentx--clipboard-check] hidden size-5"></span>
    </span>
    <span class="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible" role="tooltip">
      <span class="tooltip-body js-clipboard-success-text">Copy</span>
    </span>
  </button>
</div>
```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
