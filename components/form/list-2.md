---
name: "List"
library: "ComponentX"
id: "list-2"
type: "form"
quality: "standard"
tags: ["component", "data", "image", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · List

> **Type:** `form` · **Quality:** `standard` · **ID:** `list-2`
> **Path:** `components/form/list-2.md`

**List** is a premium, production-ready component from the **ComponentX** library — engineered for form interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `data`, `image`, `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **List** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
<h5 class="text-base-content text-lg">List decimal</h5>
<ol class="list-inside list-decimal">
  <li class="mb-2">Start by signing up for our newsletter.</li>
  <li class="mb-2">Explore our collection of articles and tutorials.</li>
  <li class="mb-2">Join our community forums to connect with like-minded individuals.</li>
</ol>

<h5 class="text-base-content text-lg">List disc</h5>
<ul class="list-inside list-disc">
  <li class="mb-2">Benefits of regular exercise:</li>
  <li class="mb-2">Healthy weight maintenance</li>
  <li class="mb-2">Improved mood and mental health</li>
</ul>

<h5 class="text-base-content text-lg">List none</h5>
<ul class="list-inside list-none">
  <li class="mb-2">Essential items for a hiking trip:</li>
  <li class="mb-2">Backpack with proper support</li>
  <li class="mb-2">Water bottle or hydration pack</li>
</ul>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<h5 class="text-base-content text-lg">List inside</h5>
<ul class="list-inside list-disc">
  <li class="mb-2">"Harry Potter and the Sorcerer's Stone" by J.K. Rowling</li>
  <li class="mb-2">"To Kill a Mockingbird" by Harper Lee</li>
  <li class="mb-2">"The Great Gatsby" by F. Scott Fitzgerald</li>
</ul>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<h5 class="text-base-content text-lg ms-4">List outside</h5>
<ul class="list-outside list-disc ms-4">
  <li class="mb-2">Rio de Janeiro, Brazil</li>
  <li class="mb-2">Paris, France</li>
  <li class="mb-2">Kyoto, Japan</li>
</ul>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<ul class="text-base-content/80 list-inside list-image-[url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNCAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjMzhiZGY4Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy42ODUuMTUzYS43NTIuNzUyIDAgMCAxIC4xNDMgMS4wNTJsLTggMTAuNWEuNzUuNzUgMCAwIDEtMS4xMjcuMDc1bC00LjUtNC41YS43NS43NSAwIDAgMSAxLjA2LTEuMDZsMy44OTQgMy44OTMgNy40OC05LjgxN2EuNzUuNzUgMCAwIDEgMS4wNS0uMTQzWiIgLz48L3N2Zz4=)]" >
  <li class="mb-2">Mumbai, India</li>
  <li class="mb-2">Paris, France</li>
  <li class="mb-2">Kyoto, Japan</li>
  <li class="mb-2">Rio de Janeiro, Brazil</li>
</ul>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<ul class="space-y-3 text-sm">
  <li class="flex items-center space-x-3">
    <span class="bg-primary text-primary-content flex items-center justify-center rounded-full p-1">
      <span class="icon-[componentx--arrow-right] size-4 rtl:rotate-180"></span>
    </span>
    <span class="text-base-content/80"> Product Overview </span>
  </li>
  <li class="flex items-center space-x-3">
    <span class="bg-primary text-primary-content flex items-center justify-center rounded-full p-1">
      <span class="icon-[componentx--arrow-right] size-4 rtl:rotate-180"></span>
    </span>
    <span class="text-base-content/80"> Installation Guide </span>
  </li>
  <li class="flex items-center space-x-3">
    <span class="bg-primary text-primary-content flex items-center justify-center rounded-full p-1">
      <span class="icon-[componentx--arrow-right] size-4 rtl:rotate-180"></span>
    </span>
    <span class="text-base-content/80"> Troubleshooting Tips </span>
  </li>
</ul>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<ul class="space-y-3 text-sm">
  <li class="flex items-center space-x-3">
    <span class="bg-primary/20 text-primary flex items-center justify-center rounded-full p-1">
      <span class="icon-[componentx--arrow-right] size-4 rtl:rotate-180"></span>
    </span>
    <span class="text-base-content/80"> Product Overview </span>
  </li>
  <li class="flex items-center space-x-3">
    <span class="bg-primary/20 text-primary flex items-center justify-center rounded-full p-1">
      <span class="icon-[componentx--arrow-right] size-4 rtl:rotate-180"></span>
    </span>
    <span class="text-base-content/80"> Installation Guide </span>
  </li>
  <li class="flex items-center space-x-3">
    <span class="bg-primary/20 text-primary flex items-center justify-center rounded-full p-1">
      <span class="icon-[componentx--arrow-right] size-4 rtl:rotate-180"></span>
    </span>
    <span class="text-base-content/80"> Troubleshooting Tips </span>
  </li>
</ul>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<ul class="space-y-3 text-sm">
  <li class="flex items-center space-x-3">
    <span class="border-primary text-primary flex items-center justify-center rounded-full border p-0.5">
      <span class="icon-[componentx--arrow-right] size-4 rtl:rotate-180"></span>
    </span>
    <span class="text-base-content/80"> FAQ </span>
  </li>
  <li class="flex items-center space-x-3">
    <span class="border-primary text-primary flex items-center justify-center rounded-full border p-0.5">
      <span class="icon-[componentx--arrow-right] size-4 rtl:rotate-180"></span>
    </span>
    <span class="text-base-content/80"> Installation Guide </span>
  </li>
  <li class="flex items-center space-x-3">
    <span class="border-primary text-primary flex items-center justify-center rounded-full border p-0.5">
      <span class="icon-[componentx--arrow-right] size-4 rtl:rotate-180"></span>
    </span>
    <span class="text-base-content/80"> Troubleshooting Tips </span>
  </li>
</ul>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div>
  <div class="px-4 sm:px-0">
    <h3 class="text-2xl font-semibold text-base-content">Product Information</h3>
    <p class="mt-1 max-w-full text-base-content/80">Details of the latest product release.</p>
  </div>
  <div class="mt-6 border-t border-base-content/25">
    <dl class="divide-y divide-base-content/25">
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 text-base">
        <dt class="font-medium text-base-content">Product Name</dt>
        <dd class="mt-1  text-base-content/80 sm:col-span-2 sm:mt-0">FlyonUI Django</dd>
      </div>
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 text-base">
        <dt class="font-medium text-base-content">Category</dt>
        <dd class="mt-1  text-base-content/80 sm:col-span-2 sm:mt-0">Admin template</dd>
      </div>
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 text-base">
        <dt class="font-medium text-base-content">Release Date</dt>
        <dd class="mt-1  text-base-content/80 sm:col-span-2 sm:mt-0">March 15, 2024</dd>
      </div>
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 text-base">
        <dt class="font-medium text-base-content">Price</dt>
        <dd class="mt-1  text-base-content/80 sm:col-span-2 sm:mt-0">$499</dd>
      </div>
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 text-base">
        <dt class="font-medium text-base-content">Description</dt>
        <dd class="mt-1  text-base-content/80 sm:col-span-2 sm:mt-0">
          The <span class="font-semibold text-base-content">FlyonUI – Bootstrap Django Admin Dashboard Template</span> – is the most developer friendly & highly customizable Admin Dashboard Template based on Bootstrap 5.
        </dd>
      </div>
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 text-base">
        <dt class="font-medium text-base-content">Documents</dt>
        <dd class="mt-2 text-base-content sm:col-span-2 sm:mt-0">
          <ul role="list" class="divide-y divide-base-content/25 rounded-md border border-base-content/25">
            <li class="flex items-center justify-between py-4 ps-4 pe-5">
              <div class="flex w-0 flex-1 items-center">
                <span class="icon-[componentx--paperclip] size-5 shrink-0"></span>
                <div class="ms-4 flex min-w-0 flex-1 gap-2">
                  <span class="truncate font-medium">FlyonUI_Pro_User_Manual.pdf</span>
                  <span class="shrink-0 text-base-content/50">3.2mb</span>
                </div>
              </div>
              <div class="ms-4 shrink-0">
                <a href="#" class="link link-primary">Download</a>
              </div>
            </li>
            <li class="flex items-center justify-between py-4 ps-4 pe-5">
              <div class="flex w-0 flex-1 items-center">
                <span class="icon-[componentx--paperclip] size-5 shrink-0"></span>
                <div class="ms-4 flex min-w-0 flex-1 gap-2">
                  <span class="truncate font-medium">FlyonUI_Pro_Installation_Guide.pdf</span>
                  <span class="shrink-0 text-base-content/50">5.1mb</span>
                </div>
              </div>
              <div class="ms-4 shrink-0">
                <a href="#" class="link link-primary">Download</a>
              </div>
            </li>
          </ul>
        </dd>
      </div>
    </dl>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<ul class="list-inside list-disc marker:text-purple-500">
  <li class="mb-2">"Harry Potter and the Sorcerer's Stone" by J.K. Rowling</li>
  <li class="mb-2">"To Kill a Mockingbird" by Harper Lee</li>
  <li class="mb-2">"The Great Gatsby" by F. Scott Fitzgerald</li>
</ul>
<ul class="list-inside list-decimal marker:text-purple-500">
  <li class="mb-2">"Harry Potter and the Sorcerer's Stone" by J.K. Rowling</li>
  <li class="mb-2">"To Kill a Mockingbird" by Harper Lee</li>
  <li class="mb-2">"The Great Gatsby" by F. Scott Fitzgerald</li>
</ul>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<ul class="flex list-inside list-disc gap-3 marker:text-neutral-300">
  <li class="list-none text-nowrap">Product</li>
  <li class="text-nowrap">Pro Tips</li>
  <li class="text-nowrap">Install Guide</li>
</ul>
```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
