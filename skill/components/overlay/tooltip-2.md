---
name: "Tooltip"
library: "ComponentX"
id: "tooltip-2"
type: "overlay"
quality: "standard"
tags: ["animated", "button", "overlay", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Tooltip

> **Type:** `overlay` · **Quality:** `standard` · **ID:** `tooltip-2`
> **Path:** `components/overlay/tooltip-2.md`

**Tooltip** is a premium, production-ready component from the **ComponentX** library — engineered for overlay interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `animated`, `button`, `overlay` workflows.
- **Pattern coverage** — includes `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Tooltip** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
<div class="tooltip">
  <button type="button" class="tooltip-toggle btn btn-square" aria-label="Tooltip">
    <span class="icon-[componentx--chevron-up]"></span>
  </button>
  <span class="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible" role="tooltip">
    <span class="tooltip-body">Tooltip on top</span>
  </span>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<!-- Primary tooltip -->
<div class="tooltip">
  <button type="button" class="tooltip-toggle btn btn-square btn-primary" aria-label="Primary Tooltip">
    <span class="icon-[componentx--chevron-up]"></span>
  </button>
  <span class="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible" role="tooltip">
    <span class="tooltip-body tooltip-primary">Primary tooltip</span>
  </span>
</div>
<!-- Secondary tooltip -->
<div class="tooltip">
  <button type="button" class="tooltip-toggle btn btn-square btn-secondary" aria-label="Secondary Tooltip">
    <span class="icon-[componentx--chevron-up]"></span>
  </button>
  <span class="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible" role="tooltip">
    <span class="tooltip-body tooltip-secondary">Secondary tooltip</span>
  </span>
</div>
<!-- Accent tooltip -->
<div class="tooltip">
  <button type="button" class="tooltip-toggle btn btn-square btn-accent" aria-label="Accent Tooltip">
    <span class="icon-[componentx--chevron-up]"></span>
  </button>
  <span class="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible" role="tooltip">
    <span class="tooltip-body tooltip-accent">Accent tooltip</span>
  </span>
</div>
<!-- Info tooltip -->
<div class="tooltip">
  <button type="button" class="tooltip-toggle btn btn-square btn-info" aria-label="Info Tooltip">
    <span class="icon-[componentx--chevron-up]"></span>
  </button>
  <span class="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible" role="tooltip">
    <span class="tooltip-body tooltip-info">Info tooltip</span>
  </span>
</div>
<!-- Success tooltip -->
<div class="tooltip">
  <button type="button" class="tooltip-toggle btn btn-square btn-success" aria-label="Success Tooltip">
    <span class="icon-[componentx--chevron-up]"></span>
  </button>
  <span class="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible" role="tooltip">
    <span class="tooltip-body tooltip-success">Success tooltip</span>
  </span>
</div>
<!-- Warning tooltip -->
<div class="tooltip">
  <button type="button" class="tooltip-toggle btn btn-square btn-warning" aria-label="Warning Tooltip">
    <span class="icon-[componentx--chevron-up]"></span>
  </button>
  <span class="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible" role="tooltip">
    <span class="tooltip-body tooltip-warning">Warning tooltip</span>
  </span>
</div>
<!-- Error tooltip -->
<div class="tooltip">
  <button type="button" class="tooltip-toggle btn btn-square btn-error" aria-label="Error Tooltip">
    <span class="icon-[componentx--chevron-up]"></span>
  </button>
  <span class="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible" role="tooltip">
    <span class="tooltip-body tooltip-error">Error tooltip</span>
  </span>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<!-- Left tooltip -->
<div class="tooltip [--placement:left]">
  <button type="button" class="tooltip-toggle btn btn-square" aria-label="Tooltip">
    <span class="icon-[componentx--chevron-left]"></span>
  </button>
  <span class="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible" role="tooltip">
    <span class="tooltip-body">Tooltip on left</span>
  </span>
</div>
<!-- Top tooltip (default) -->
<div class="tooltip">
  <button type="button" class="tooltip-toggle btn btn-square" aria-label="Tooltip">
    <span class="icon-[componentx--chevron-up]"></span>
  </button>
  <span class="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible" role="tooltip">
    <span class="tooltip-body">Tooltip on top</span>
  </span>
</div>
<!-- Bottom tooltip -->
<div class="tooltip [--placement:bottom]">
  <button type="button" class="tooltip-toggle btn btn-square" aria-label="Tooltip">
    <span class="icon-[componentx--chevron-down]"></span>
  </button>
  <span class="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible" role="tooltip">
    <span class="tooltip-body">Tooltip on bottom</span>
  </span>
</div>
<!-- Right tooltip -->
<div class="tooltip [--placement:right]">
  <button type="button" class="tooltip-toggle btn btn-square" aria-label="Tooltip">
    <span class="icon-[componentx--chevron-right]"></span>
  </button>
  <span class="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible" role="tooltip">
    <span class="tooltip-body">Tooltip on right</span>
  </span>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<p>
  The
  <span class="tooltip">
    <span class="tooltip-toggle">
      <a href="https://en.wikipedia.org/wiki/Himalayas" class="link link-primary link-hover">Himalayas</a>
      <span class="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible p-4" role="popover">
        <span class="tooltip-body bg-base-100 flex max-w-64 sm:max-w-xs rounded-lg p-0 text-start">
          <span class="text-base-content/80 flex w-1/2 flex-col justify-between p-2 sm:p-4 text-xs">
            <span class="text-base-content text-base font-medium">About Himalayas</span>
            The Great Himalayan mountain ranges in the Indian sub-continent region.
            <a href="https://en.wikipedia.org/wiki/Himalayas" target="blank" class="link link-primary link-hover flex items-center" >
              Read more
              <span class="icon-[componentx--chevron-right] rtl:rotate-180 mt-0.5"></span>
            </a>
          </span>
          <img src="https://lp-cms-production.imgix.net/2021-01/GettyRF_450207051.jpg?width=232" alt="the himalayas" class="h-40 w-1/2 rounded-e-lg object-cover" />
        </span>
      </span>
    </span>
  </span>
  , Asia's towering mountain range, separates the Indian subcontinent from the Tibetan Plateau. Mount Everest, Earth's
  highest peak, and over 100 others surpass 7,200 m. Spanning Nepal, China, Pakistan, Bhutan, and India, they birth
  major rivers like the Indus and the Ganges. Home to 600 million people, they shape South Asian and Tibetan cultures.
</p>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="tooltip [--placement:bottom-start] sm:[--placement:right]">
  <div class="tooltip-toggle">
    <div class="bg-base-100 shadow-base-300/20 flex items-center gap-3 rounded-lg p-2 shadow-sm hover:cursor-pointer" >
      <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-10.png" alt="Sophia" class="size-8 rounded-full object-cover" />
      <div class="flex flex-col items-start pe-4">
        <span class="text-base-content font-medium">Sophia Aldrin</span>
        <span class="text-base-content/80 -mt-1 text-xs">@sophia23</span>
      </div>
    </div>
    <div class="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible" role="popover">
      <div class="tooltip-body bg-base-100 text-base-content/80 w-80 rounded-lg p-4 text-start">
        <div class="mb-4 flex items-start justify-between">
          <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-10.png" alt="Sophia" class="size-12 rounded-full object-cover" />
          <button class="btn btn-primary btn-sm">Follow</button>
        </div>
        <div class="flex flex-col">
          <div class="text-base-content text-lg font-medium">Sophia Aldrin</div>
          <div class="-mt-1 text-xs">@sophia23</div>
          <p class="mt-4">
            Lead Software Architect.
            <br/>
            <a href="#" class="link link-primary link-animated text-sm">ABC Technologies</a>
          </p>
          <div class="mt-4 space-y-2">
            <div class="flex items-center gap-1.5">
              <span class="icon-[componentx--mail] size-4"></span>
              sophia23@gmail.com
            </div>
            <div class="flex items-center gap-1.5">
              <span class="icon-[componentx--phone] size-4"></span>+(101) 123-456-7891
            </div>
            <div class="flex items-center gap-1.5">
              <span class="icon-[componentx--map-pin] size-4"></span>
              Ontario, Canada
            </div>
          </div>
          <div class="divider my-4"></div>
          <div class="text-sm flex items-center gap-3">
            <div>
              <span class="text-base-content me-1 font-medium">478</span>
              Following
            </div>
            <div>
              <span class="text-base-content me-1 font-medium">1,984</span>
              Followers
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex items-center gap-1">
  <span>Terms & Conditions</span>
  <div class="tooltip [--placement:bottom]">
    <div class="tooltip-toggle">
      <span class="icon-[componentx--help] hover:text-primary mt-1.5 size-4"></span>
      <div class="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible" role="popover">
        <div class="tooltip-body bg-base-100 text-base-content/80 max-w-xs rounded-lg p-4 text-start">
          <span class="text-lg text-base-content">Terms and Conditions</span>
          <ul class="mt-4 space-y-1.5 text-xs">
            <li>
              Welcome to FlyonUI. If you continue to browse and use this TailwindCSS component library, you are agreeing to comply with
              and be bound by the following terms and conditions of its use.
            </li>
            <li>
              The content of the pages of this website is for your general information and use only. It is subject to
              change without notice.
            </li>
            <li>
              This website uses cookies to monitor browsing preferences. If you do allow cookies to be used, the
              following personal information may be stored by us for use by third parties.
            </li>
            <li>
              Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness,
              performance, completeness, or suitability of the information and materials found or offered on this
              website for any particular purpose.
            </li>
            <li>
              Your use of any information or materials on this website is entirely at your own risk, for which we shall
              not be liable. It shall be your own responsibility to ensure that any products, services, or information
              available through this website meet your specific requirements.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div id="tooltip-to-destroy">
  <div class="tooltip">
    <button type="button" class="tooltip-toggle btn btn-square" aria-label="Tooltip">
      <span class="icon-[componentx--chevron-up]"></span>
    </button>
    <span class="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible" role="tooltip">
      <span class="tooltip-body">Tooltip</span>
    </span>
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
      const tooltips = document.querySelector('#tooltip-to-destroy .tooltip')
      const destroy = document.querySelector('#destroy-btn')
      const reinit = document.querySelector('#reinit-btn')

      destroy.addEventListener('click', () => {
        const { element } = HSTooltip.getInstance(tooltips, true)
        element.destroy()

        destroy.setAttribute('disabled', 'disabled')
        reinit.removeAttribute('disabled')
      })

      reinit.addEventListener('click', () => {
        HSTooltip.autoInit()

        reinit.setAttribute('disabled', 'disabled')
        destroy.removeAttribute('disabled')
      })
    })()
  });
</script>

```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="tooltip" id="tooltip-target">
  <div class="tooltip-toggle">
    <button class="btn btn-square" aria-label="Tooltip"><span class="icon-[componentx--chevron-up]"></span></button>
    <div class="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible" role="tooltip">
      <span class="tooltip-body">Tooltip</span>
    </div>
  </div>
</div>

<button class="btn btn-primary" id="show-btn">Method</button>
```

```js
<script>
  window.addEventListener('load', function () {
    const tooltip = new HSTooltip(document.querySelector('#tooltip-target'))
    const showBtn = document.querySelector('#show-btn')

    showBtn.addEventListener('click', () => {
      tooltip.show()
      document.addEventListener('click', () => {
        tooltip.hide()
      })
    })
  })
</script>


```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="tooltip [--trigger:hover]" id="tooltip-target-2">
  <div class="tooltip-toggle">
    <button class="btn btn-square" aria-label="Tooltip"><span class="icon-[componentx--chevron-up]"></span></button>
    <div class="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible" role="tooltip">
      <span class="tooltip-body">Tooltip</span>
    </div>
  </div>
</div>
```

```js
<script>
  window.addEventListener('load', function () {
    const { element } = HSTooltip.getInstance('#tooltip-target-2', true)

    element.on('show', instance => console.log('show'))
    element.on('hide', instance => console.log('hide'))
  })
</script>


```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
