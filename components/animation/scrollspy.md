---
name: "Scrollspy"
library: "ComponentX"
id: "scrollspy"
type: "animation"
quality: "showcase"
tags: ["animation", "button", "data", "menu", "navigation", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Scrollspy

> **Type:** `animation` · **Quality:** `showcase` · **ID:** `scrollspy`
> **Path:** `components/animation/scrollspy.md`

**Scrollspy** is a premium, production-ready component from the **ComponentX** library — engineered for animation interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Showcase tier** — a high-impact, visually rich implementation — animated, 3D, or dependency-heavy by design.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `animation`, `button`, `data` workflows.
- **Pattern coverage** — includes `menu`, `navigation`, `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Scrollspy** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
<div id="scrollspy-scrollable-parent" class="overflow-y-auto max-h-96">
  <div class="grid grid-cols-5">
    <div class="col-span-2 sm:col-span-1">
      <ul class="sticky top-0 text-sm leading-6" data-scrollspy="#scrollspy" data-scrollspy-scrollable-parent="#scrollspy-scrollable-parent">
        <li class="text-base-content text-xl font-medium">Index</li>
        <li data-scrollspy-group="">
          <a href="#chapter-1" class="text-base-content/80 hover:text-base-content scrollspy-active:text-primary active block py-0.5 font-medium">
            Chapter 1
          </a>
          <ul>
            <li class="ms-0.5 sm:ms-4">
              <a href="#chapter-1-1" class="text-base-content/80 hover:text-base-content scrollspy-active:text-primary flex items-center gap-x-2 py-0.5">
                <span class="icon-[componentx--point] size-4"></span>
                Chapter 1-1
              </a>
            </li>
            <li class="ms-0.5 sm:ms-4">
              <a href="#chapter-1-2" class="text-base-content/80 hover:text-base-content scrollspy-active:text-primary flex items-center gap-x-2 py-0.5">
                <span class="icon-[componentx--point] size-4"></span>
                Chapter 1-2
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#chapter-2" class="text-base-content/80 hover:text-base-content scrollspy-active:text-primary block py-0.5 font-medium">
            Chapter 2
          </a>
        </li>
        <li data-scrollspy-group="">
          <a href="#chapter-3" class="text-base-content/80 hover:text-base-content scrollspy-active:text-primary block py-0.5 font-medium">
            Chapter 3
          </a>
          <ul>
            <li class="ms-0.5 sm:ms-4">
              <a href="#chapter-3-1" class="text-base-content/80 hover:text-base-content scrollspy-active:text-primary flex items-center gap-x-2 py-0.5">
                <span class="icon-[componentx--point] size-4"></span>
                Chapter 3-1
              </a>
            </li>
            <li class="ms-0.5 sm:ms-4">
              <a href="#chapter-3-2" class="text-base-content/80 hover:text-base-content scrollspy-active:text-primary flex items-center gap-x-2 py-0.5">
                <span class="icon-[componentx--point] size-4"></span>
                Chapter 3-2
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="col-span-3 sm:col-span-4">
      <div id="scrollspy" class="space-y-4 pe-1">
        <div id="chapter-1">
          <p class="text-base-content text-lg font-semibold">Chapter 1</p>
          <p class="mt-1 text-sm leading-6">
            This placeholder content serves to demonstrate the functionality of the scrollspy page. As you scroll down,
            the corresponding navigation link is highlighted to indicate the active section. This example copy is
            continuously added to underscore the scrolling and highlighting feature.
          </p>
        </div>
        <div id="chapter-1-1">
          <p class="text-base-content text-lg font-semibold">Chapter 1-1</p>
          <p class="mt-1 text-sm leading-6">
            This placeholder content serves to demonstrate the functionality of the scrollspy page. As you scroll down,
            the corresponding navigation link is highlighted to indicate the active section. This example copy is
            continuously added to underscore the scrolling and highlighting feature.
          </p>
        </div>
        <div id="chapter-1-2">
          <p class="text-base-content text-lg font-semibold">Chapter 1-2</p>
          <p class="mt-1 text-sm leading-6">
            This placeholder content serves to demonstrate the functionality of the scrollspy page. As you scroll down,
            the corresponding navigation link is highlighted to indicate the active section. This example copy is
            continuously added to underscore the scrolling and highlighting feature.
          </p>
        </div>
        <div id="chapter-2">
          <p class="text-base-content text-lg font-semibold">Chapter 2</p>
          <p class="mt-1 text-sm leading-6">
            This placeholder content serves to demonstrate the functionality of the scrollspy page. As you scroll down,
            the corresponding navigation link is highlighted to indicate the active section. This example copy is
            continuously added to underscore the scrolling and highlighting feature.
          </p>
        </div>
        <div id="chapter-3">
          <p class="text-base-content text-lg font-semibold">Chapter 3</p>
          <p class="mt-1 text-sm leading-6">
            This placeholder content serves to demonstrate the functionality of the scrollspy page. As you scroll down,
            the corresponding navigation link is highlighted to indicate the active section. This example copy is
            continuously added to underscore the scrolling and highlighting feature.
          </p>
        </div>
        <div id="chapter-3-1">
          <p class="text-base-content text-lg font-semibold">Chapter 3-1</p>
          <p class="mt-1 text-sm leading-6">
            This placeholder content serves to demonstrate the functionality of the scrollspy page. As you scroll down,
            the corresponding navigation link is highlighted to indicate the active section. This example copy is
            continuously added to underscore the scrolling and highlighting feature.
          </p>
        </div>
        <div id="chapter-3-2">
          <p class="text-base-content text-lg font-semibold">Chapter 3-2</p>
          <p class="mt-1 text-sm leading-6">
            This placeholder content serves to demonstrate the functionality of the scrollspy page. As you scroll down,
            the corresponding navigation link is highlighted to indicate the active section. This example copy is
            continuously added to underscore the scrolling and highlighting feature.
          </p>
        </div>
        <div class="h-[16.5rem]"></div>
      </div>
    </div>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<nav class="navbar rounded-box w-full gap-2 max-md:flex-col md:items-center" aria-label="Scrollspy navbar">
  <div class="flex items-center justify-between max-md:w-full">
    <div class="navbar-start items-center justify-between max-md:w-full">
      <a class="link text-base-content link-neutral text-xl font-semibold no-underline" href="#">Navbar</a>
      <div class="md:hidden">
        <button type="button" class="collapse-toggle btn btn-outline btn-sm btn-square" data-collapse="#dropdown-navbar-collapse" aria-controls="dropdown-navbar-collapse" aria-label="Toggle navigation">
          <span class="icon-[componentx--menu-2] collapse-open:hidden size-4"></span>
          <span class="icon-[componentx--x] collapse-open:block hidden size-4"></span>
        </button>
      </div>
    </div>
  </div>
  <div id="dropdown-navbar-collapse" data-scrollspy="#scrollspy-1" data-scrollspy-scrollable-parent="#scrollspy-scrollable-parent-1" class="md:navbar-end collapse hidden grow overflow-hidden transition-[height] duration-300 max-md:w-full">
    <ul class="menu md:menu-horizontal gap-2 p-0 text-base">
      <li><a class="hover:text-base-content scrollspy-active:text-bg-soft-primary active" href="#first">First</a></li>
      <li><a class="hover:text-base-content scrollspy-active:text-bg-soft-primary" href="#second">Second</a></li>
      <li class="dropdown relative inline-flex [--auto-close:inside] [--offset:9] [--placement:bottom-end]">
        <button id="dropdown-transportation" type="button" class="dropdown-toggle dropdown-open:bg-base-content/10 dropdown-open:text-base-content" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
          Dropdown
          <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
        </button>
        <ul class="dropdown-menu dropdown-open:opacity-100 hidden w-36" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-nav">
          <a class="dropdown-item scrollspy-active:dropdown-active" href="#third">Third</a>
          <a class="dropdown-item scrollspy-active:dropdown-active" href="#fourth">Fourth</a>
          <a class="dropdown-item scrollspy-active:dropdown-active" href="#fifth">Fifth</a>
        </ul>
      </li>
    </ul>
  </div>
</nav>
<div id="scrollspy-scrollable-parent-1" class="overflow-y-auto max-h-[340px]">
  <div id="scrollspy-1" class="mt-3 space-y-4">
    <div id="first">
      <p class="text-base-content text-lg font-semibold">First</p>
      <p class="mt-1 text-sm leading-6">
        This placeholder content serves to demonstrate the functionality of the scrollspy page. As you scroll down, the
        corresponding navigation link is highlighted to indicate the active section. This example copy is continuously
        added to underscore the scrolling and highlighting feature.
      </p>
    </div>
    <div id="second">
      <p class="text-base-content text-lg font-semibold">Second</p>
      <p class="mt-1 text-sm leading-6">
        This placeholder content serves to demonstrate the functionality of the scrollspy page. As you scroll down, the
        corresponding navigation link is highlighted to indicate the active section. This example copy is continuously
        added to underscore the scrolling and highlighting feature.
      </p>
    </div>
    <div id="third">
      <p class="text-base-content text-lg font-semibold">Third</p>
      <p class="mt-1 text-sm leading-6">
        This placeholder content serves to demonstrate the functionality of the scrollspy page. As you scroll down, the
        corresponding navigation link is highlighted to indicate the active section. This example copy is continuously
        added to underscore the scrolling and highlighting feature.
      </p>
    </div>
    <div id="fourth">
      <p class="text-base-content text-lg font-semibold">Fourth</p>
      <p class="mt-1 text-sm leading-6">
        This placeholder content serves to demonstrate the functionality of the scrollspy page. As you scroll down, the
        corresponding navigation link is highlighted to indicate the active section. This example copy is continuously
        added to underscore the scrolling and highlighting feature.
      </p>
    </div>
    <div id="fifth">
      <p class="text-base-content text-lg font-semibold">Fifth</p>
      <p class="mt-1 text-sm leading-6">
        This placeholder content serves to demonstrate the functionality of the scrollspy page. As you scroll down, the
        corresponding navigation link is highlighted to indicate the active section. This example copy is continuously
        added to underscore the scrolling and highlighting feature.
      </p>
    </div>
    <div class="h-56"></div>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div id="scrollspy-scrollable-parent-3" class="overflow-y-auto max-h-96">
  <div class="grid grid-cols-5">
    <div class="col-span-2 pe-6 sm:col-span-1">
      <ul class="border-base-content/25 divide-base-content/25 sticky top-0 divide-y rounded-md border text-sm leading-6 *:p-0 *:first:rounded-t-md *:last:rounded-b-md" data-scrollspy="#scrollspy-3" data-scrollspy-scrollable-parent="#scrollspy-scrollable-parent-3">
        <li class="hover:bg-base-200/50">
          <a href="#item-1" class="text-base-content/80 hover:text-base-content scrollspy-active:text-primary scrollspy-active:bg-primary/20 active block rounded-t-md p-2 py-1.5 font-medium">Item 1</a>
        </li>
        <li class="hover:bg-base-200/50">
          <a href="#item-2" class="text-base-content/80 hover:text-base-content scrollspy-active:text-primary scrollspy-active:bg-primary/20 block p-2 py-1.5 font-medium">Item 2</a>
        </li>
        <li class="hover:bg-base-200/50">
          <a href="#item-3" class="text-base-content/80 hover:text-base-content scrollspy-active:text-primary scrollspy-active:bg-primary/20 block p-2 py-1.5 font-medium">Item 3</a>
        </li>
        <li class="hover:bg-base-200/50">
          <a href="#item-4" class="text-base-content/80 hover:text-base-content scrollspy-active:text-primary scrollspy-active:bg-primary/20 block p-2 py-1.5 font-medium" >Item 4</a>
        </li>
        <li class="hover:bg-base-200/50">
          <a href="#item-5" class="text-base-content/80 hover:text-base-content scrollspy-active:text-primary scrollspy-active:bg-primary/20 block p-2 py-1.5 font-medium" >Item 5</a>
        </li>
        <li class="hover:bg-base-200/50">
          <a href="#item-6" class="text-base-content/80 hover:text-base-content scrollspy-active:text-primary scrollspy-active:bg-primary/20 block rounded-b-md p-2 py-1.5 font-medium" >Item 6</a>
        </li>
      </ul>
    </div>
    <div class="col-span-3 sm:col-span-4">
      <div id="scrollspy-3" class="space-y-4 pe-1">
        <div id="item-1">
          <p class="text-base-content text-lg font-semibold">Item 1</p>
          <p class="mt-1 text-sm leading-6">
            This placeholder content serves to demonstrate the functionality of the scrollspy page. As you scroll down,
            the corresponding navigation link is highlighted to indicate the active section. This example copy is
            continuously added to underscore the scrolling and highlighting feature.
          </p>
        </div>
        <div id="item-2">
          <p class="text-base-content text-lg font-semibold">Item 2</p>
          <p class="mt-1 text-sm leading-6">
            This placeholder content serves to demonstrate the functionality of the scrollspy page. As you scroll down,
            the corresponding navigation link is highlighted to indicate the active section. This example copy is
            continuously added to underscore the scrolling and highlighting feature.
          </p>
        </div>
        <div id="item-3">
          <p class="text-base-content text-lg font-semibold">Item 3</p>
          <p class="mt-1 text-sm leading-6">
            This placeholder content serves to demonstrate the functionality of the scrollspy page. As you scroll down,
            the corresponding navigation link is highlighted to indicate the active section. This example copy is
            continuously added to underscore the scrolling and highlighting feature.
          </p>
        </div>
        <div id="item-4">
          <p class="text-base-content text-lg font-semibold">Item 4</p>
          <p class="mt-1 text-sm leading-6">
            This placeholder content serves to demonstrate the functionality of the scrollspy page. As you scroll down,
            the corresponding navigation link is highlighted to indicate the active section. This example copy is
            continuously added to underscore the scrolling and highlighting feature.
          </p>
        </div>
        <div id="item-5">
          <p class="text-base-content text-lg font-semibold">Item 5</p>
          <p class="mt-1 text-sm leading-6">
            This placeholder content serves to demonstrate the functionality of the scrollspy page. As you scroll down,
            the corresponding navigation link is highlighted to indicate the active section. This example copy is
            continuously added to underscore the scrolling and highlighting feature.
          </p>
        </div>
        <div id="item-6">
          <p class="text-base-content text-lg font-semibold">Item 6</p>
          <p class="mt-1 text-sm leading-6">
            This placeholder content serves to demonstrate the functionality of the scrollspy page. As you scroll down,
            the corresponding navigation link is highlighted to indicate the active section. This example copy is
            continuously added to underscore the scrolling and highlighting feature.
          </p>
        </div>
        <div class="h-[16.5rem]"></div>
      </div>
    </div>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<nav class="navbar rounded-box w-full gap-2 max-md:flex-col md:items-center" aria-label="Scrollspy navbar">
  <div class="flex items-center justify-between max-md:w-full">
    <div class="navbar-start items-center justify-between max-md:w-full">
      <a class="link text-base-content link-neutral text-xl font-semibold no-underline" href="#">Navbar</a>
      <div class="md:hidden">
        <button type="button" class="collapse-toggle btn btn-outline btn-sm btn-square" data-collapse="#dropdown-navbar-destroy-collapse" aria-controls="dropdown-navbar-destroy-collapse" aria-label="Toggle navigation">
          <span class="icon-[componentx--menu-2] collapse-open:hidden size-4"></span>
          <span class="icon-[componentx--x] collapse-open:block hidden size-4"></span>
        </button>
      </div>
    </div>
  </div>
  <div id="dropdown-navbar-destroy-collapse" data-scrollspy="#scrollspy-destroy" data-scrollspy-scrollable-parent="#scrollspy-scrollable-destroy-parent" class="md:navbar-end collapse hidden grow overflow-hidden transition-[height] duration-300 max-md:w-full">
    <ul class="menu md:menu-horizontal gap-2 p-0 text-base">
      <li><a class="hover:text-base-content scrollspy-active:text-bg-soft-primary active" href="#scrollspy-to-destroy-first">First</a></li>
      <li><a class="hover:text-base-content scrollspy-active:text-bg-soft-primary" href="#scrollspy-to-destroy-second">Second</a></li>
      <li class="dropdown relative inline-flex [--auto-close:inside] [--offset:9] [--placement:bottom-end]">
        <button id="scrollspy-to-destroy-collapse" type="button" class="dropdown-toggle dropdown-open:bg-base-content/10 dropdown-open:text-base-content" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
          Dropdown
          <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
        </button>
        <ul class="dropdown-menu dropdown-open:opacity-100 hidden w-36" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-nav">
          <a class="dropdown-item scrollspy-active:dropdown-active" href="#scrollspy-to-destroy-third">Third</a>
          <a class="dropdown-item scrollspy-active:dropdown-active" href="#scrollspy-to-destroy-fourth">Fourth</a>
          <a class="dropdown-item scrollspy-active:dropdown-active" href="#scrollspy-to-destroy-fifth">Fifth</a>
        </ul>
      </li>
    </ul>
  </div>
</nav>
<div id="scrollspy-scrollable-destroy-parent" class="overflow-y-auto max-h-[340px]">
  <div id="scrollspy-destroy" class="mt-3 space-y-4">
    <div id="scrollspy-to-destroy-first">
      <p class="text-base-content text-lg font-semibold">First</p>
      <p class="mt-1 text-sm leading-6">
        This placeholder content serves to demonstrate the functionality of the scrollspy page. As you scroll down, the
        corresponding navigation link is highlighted to indicate the active section. This example copy is continuously
        added to underscore the scrolling and highlighting feature.
      </p>
    </div>
    <div id="scrollspy-to-destroy-second">
      <p class="text-base-content text-lg font-semibold">Second</p>
      <p class="mt-1 text-sm leading-6">
        This placeholder content serves to demonstrate the functionality of the scrollspy page. As you scroll down, the
        corresponding navigation link is highlighted to indicate the active section. This example copy is continuously
        added to underscore the scrolling and highlighting feature.
      </p>
    </div>
    <div id="scrollspy-to-destroy-third">
      <p class="text-base-content text-lg font-semibold">Third</p>
      <p class="mt-1 text-sm leading-6">
        This placeholder content serves to demonstrate the functionality of the scrollspy page. As you scroll down, the
        corresponding navigation link is highlighted to indicate the active section. This example copy is continuously
        added to underscore the scrolling and highlighting feature.
      </p>
    </div>
    <div id="scrollspy-to-destroy-fourth">
      <p class="text-base-content text-lg font-semibold">Fourth</p>
      <p class="mt-1 text-sm leading-6">
        This placeholder content serves to demonstrate the functionality of the scrollspy page. As you scroll down, the
        corresponding navigation link is highlighted to indicate the active section. This example copy is continuously
        added to underscore the scrolling and highlighting feature.
      </p>
    </div>
    <div id="scrollspy-to-destroy-fifth">
      <p class="text-base-content text-lg font-semibold">Fifth</p>
      <p class="mt-1 text-sm leading-6">
        This placeholder content serves to demonstrate the functionality of the scrollspy page. As you scroll down, the
        corresponding navigation link is highlighted to indicate the active section. This example copy is continuously
        added to underscore the scrolling and highlighting feature.
      </p>
    </div>
    <div class="h-56"></div>
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
      const scrollspy = document.querySelector('[data-scrollspy="#scrollspy-destroy"]')
      const destroy = document.querySelector('#destroy-btn')
      const reinit = document.querySelector('#reinit-btn')

      destroy.addEventListener('click', () => {
        const { element } = HSScrollspy.getInstance(scrollspy, true)

        element.destroy()

        destroy.setAttribute('disabled', 'disabled')
        reinit.removeAttribute('disabled')
      })

      reinit.addEventListener('click', () => {
        HSScrollspy.autoInit()

        reinit.setAttribute('disabled', 'disabled')
        destroy.removeAttribute('disabled')
      })

      setTimeout(() => {
        const scrollspyInstance = HSScrollspy.getInstance('[data-scrollspy="#scrollspy-destroy"]', true)
        const collapseInstance = HSCollapse.getInstance('[data-collapse="#dropdown-navbar-destroy-collapse"]', true)

        scrollspyInstance.element.on('beforeScroll', instance => {
          return new Promise(res => {
            if (collapseInstance.element.el.classList.contains('open')) {
              collapseInstance.element.hide()
              HSStaticMethods.afterTransition(collapseInstance.element.content, () => res(true))
            } else {
              res(true)
            }
          })
        })
      })
    })()
  });
</script>

```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div id="scrollspy-scrollable-parent-4" class="overflow-y-auto max-h-[340px]">
  <header class="bg-base-100 sticky inset-x-0 top-0 z-10 w-full text-sm">
    <nav class="navbar w-full gap-2 max-md:flex-col md:items-center" aria-label="Scrollspy navbar">
      <div class="flex max-md:w-full items-center justify-between">
        <div class="navbar-start items-center justify-between max-md:w-full">
          <a class="link text-base-content link-neutral text-xl font-semibold no-underline" href="#">Navbar</a>
          <div class="md:hidden">
            <button type="button" class="collapse-toggle btn btn-outline btn-sm btn-square" data-collapse="#dropdown-navbar-collapse2" aria-controls="dropdown-navbar-collapse2" aria-label="Toggle navigation">
              <span class="icon-[componentx--menu-2] collapse-open:hidden size-4"></span>
              <span class="icon-[componentx--x] collapse-open:block hidden size-4"></span>
            </button>
          </div>
        </div>
      </div>
      <div id="dropdown-navbar-collapse2" data-scrollspy="#scrollspy-4" data-scrollspy-scrollable-parent="#scrollspy-scrollable-parent-4" class="md:navbar-end collapse hidden grow overflow-hidden transition-[height] duration-300 max-md:w-full [--scrollspy-offset:170] sm:[--scrollspy-offset:100]" >
        <ul class="menu md:menu-horizontal gap-2 p-0 text-base">
          <li><a class="hover:text-base-content scrollspy-active:text-bg-soft-primary active" href="#first-header">First</a></li>
          <li><a class="hover:text-base-content scrollspy-active:text-bg-soft-primary" href="#second-header">Second</a></li>
          <li class="dropdown relative inline-flex [--auto-close:inside] [--offset:9] [--placement:bottom-end]">
            <button id="dropdown-transportation" type="button" class="dropdown-toggle dropdown-open:bg-base-content/10 dropdown-open:text-base-content" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
              Dropdown
              <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
            </button>
            <ul class="dropdown-menu dropdown-open:opacity-100 hidden w-36" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-nav">
              <a class="dropdown-item scrollspy-active:dropdown-active" href="#third-header">Third</a>
              <a class="dropdown-item scrollspy-active:dropdown-active" href="#fourth-header">Fourth</a>
              <a class="dropdown-item scrollspy-active:dropdown-active" href="#fifth-header">Fifth</a>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <div id="scrollspy-4" class="mt-3 space-y-4">
    <div id="first-header">
      <p class="text-base-content text-lg font-semibold">First</p>
      <p class="mt-1 text-sm leading-6">
        This placeholder content serves to demonstrate the functionality of the scrollspy page. As you scroll down, the
        corresponding navigation link is highlighted to indicate the active section. This example copy is continuously
        added to underscore the scrolling and highlighting feature.
      </p>
    </div>
    <div id="second-header">
      <p class="text-base-content text-lg font-semibold">Second</p>
      <p class="mt-1 text-sm leading-6">
        This placeholder content serves to demonstrate the functionality of the scrollspy page. As you scroll down, the
        corresponding navigation link is highlighted to indicate the active section. This example copy is continuously
        added to underscore the scrolling and highlighting feature.
      </p>
    </div>
    <div id="third-header">
      <p class="text-base-content text-lg font-semibold">Third</p>
      <p class="mt-1 text-sm leading-6">
        This placeholder content serves to demonstrate the functionality of the scrollspy page. As you scroll down, the
        corresponding navigation link is highlighted to indicate the active section. This example copy is continuously
        added to underscore the scrolling and highlighting feature.
      </p>
    </div>
    <div id="fourth-header">
      <p class="text-base-content text-lg font-semibold">Fourth</p>
      <p class="mt-1 text-sm leading-6">
        This placeholder content serves to demonstrate the functionality of the scrollspy page. As you scroll down, the
        corresponding navigation link is highlighted to indicate the active section. This example copy is continuously
        added to underscore the scrolling and highlighting feature.
      </p>
    </div>
    <div id="fifth-header">
      <p class="text-base-content text-lg font-semibold">Fifth</p>
      <p class="mt-1 text-sm leading-6">
        This placeholder content serves to demonstrate the functionality of the scrollspy page. As you scroll down, the
        corresponding navigation link is highlighted to indicate the active section. This example copy is continuously
        added to underscore the scrolling and highlighting feature.
      </p>
    </div>
    <div class="h-44"></div>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<nav class="navbar w-full gap-2 max-md:flex-col md:items-center" aria-label="Global">
  <div class="flex max-md:w-full items-center justify-between">
    <div class="navbar-start items-center justify-between max-md:w-full">
      <a class="link text-base-content link-neutral text-xl font-semibold no-underline" href="#">Navbar</a>
      <div class="md:hidden">
        <button type="button" class="collapse-toggle btn btn-outline btn-sm btn-square" data-collapse="#navbar-collapse-basic" aria-controls="navbar-collapse-basic" aria-label="Toggle navigation">
          <span class="icon-[componentx--menu-2] collapse-open:hidden size-4"></span>
          <span class="icon-[componentx--x] collapse-open:block hidden size-4"></span>
        </button>
      </div>
    </div>
  </div>
  <div id="navbar-collapse-basic" data-scrollspy="#scrollspy-event" data-scrollspy-scrollable-parent="#scrollspy-scrollable-parent-event" class="md:navbar-end collapse hidden grow overflow-hidden transition-[height] duration-300 max-md:w-full [--scrollspy-offset:170] sm:[--scrollspy-offset:50]" >
    <ul class="menu md:menu-horizontal gap-2 p-0 text-base">
      <li><a class="hover:text-base-content scrollspy-active:text-bg-soft-primary active" href="#first-event">First</a></li>
      <li><a class="hover:text-base-content scrollspy-active:text-bg-soft-primary" href="#second-event">Second</a></li>
      <li class="dropdown relative inline-flex [--auto-close:inside] [--offset:9] [--placement:bottom-end]">
        <button id="dropdown-transportation" type="button" class="dropdown-toggle dropdown-open:bg-base-content/10 dropdown-open:text-base-content" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
          Dropdown
          <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
        </button>
        <ul class="dropdown-menu dropdown-open:opacity-100 hidden w-36" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-nav">
          <a class="dropdown-item scrollspy-active:dropdown-active" href="#third-event">Third</a>
          <a class="dropdown-item scrollspy-active:dropdown-active" href="#fourth-event">Fourth</a>
          <a class="dropdown-item scrollspy-active:dropdown-active" href="#fifth-event">Fifth</a>
        </ul>
      </li>
    </ul>
  </div>
</nav>
<div id="scrollspy-scrollable-parent-event" class="overflow-y-auto max-h-[340px]">
  <div id="scrollspy-event" class="mt-3 space-y-4">
    <div id="first-event">
      <p class="text-base-content text-lg font-semibold">First</p>
      <p class="mt-1 text-sm leading-6">
        This placeholder content serves to demonstrate the functionality of the scrollspy page. As you scroll down, the
        corresponding navigation link is highlighted to indicate the active section. This example copy is continuously
        added to underscore the scrolling and highlighting feature.
      </p>
    </div>
    <div id="second-event">
      <p class="text-base-content text-lg font-semibold">Second</p>
      <p class="mt-1 text-sm leading-6">
        This placeholder content serves to demonstrate the functionality of the scrollspy page. As you scroll down, the
        corresponding navigation link is highlighted to indicate the active section. This example copy is continuously
        added to underscore the scrolling and highlighting feature.
      </p>
    </div>
    <div id="third-event">
      <p class="text-base-content text-lg font-semibold">Third</p>
      <p class="mt-1 text-sm leading-6">
        This placeholder content serves to demonstrate the functionality of the scrollspy page. As you scroll down, the
        corresponding navigation link is highlighted to indicate the active section. This example copy is continuously
        added to underscore the scrolling and highlighting feature.
      </p>
    </div>
    <div id="fourth-event">
      <p class="text-base-content text-lg font-semibold">Fourth</p>
      <p class="mt-1 text-sm leading-6">
        This placeholder content serves to demonstrate the functionality of the scrollspy page. As you scroll down, the
        corresponding navigation link is highlighted to indicate the active section. This example copy is continuously
        added to underscore the scrolling and highlighting feature.
      </p>
    </div>
    <div id="fifth-event">
      <p class="text-base-content text-lg font-semibold">Fifth</p>
      <p class="mt-1 text-sm leading-6">
        This placeholder content serves to demonstrate the functionality of the scrollspy page. As you scroll down, the
        corresponding navigation link is highlighted to indicate the active section. This example copy is continuously
        added to underscore the scrolling and highlighting feature.
      </p>
    </div>
    <div class="h-56"></div>
  </div>
</div>
```

```js
<script>
  window.addEventListener('load', function () { 
    const el = HSScrollspy.getInstance('[data-scrollspy="#scrollspy-event"]', true)
    const collapse = HSCollapse.getInstance('[data-collapse="#navbar-collapse-basic"]', true)
    
    el.element.on('beforeScroll', instance => {
      return new Promise(res => {
        if (collapse.element.el.classList.contains('open')) {
          collapse.element.hide()
          StaticMethods.afterTransition(collapse.element.content, () => res(true))
        } else {
          res(true)
        }
      })
    })
  })
</script>


```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
