---
name: "Chat Bubble"
library: "ComponentX"
id: "chat-bubble"
type: "button"
quality: "advanced"
tags: ["button", "card", "component", "image", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Chat Bubble

> **Type:** `button` · **Quality:** `advanced` · **ID:** `chat-bubble`
> **Path:** `components/button/chat-bubble.md`

**Chat Bubble** is a premium, production-ready component from the **ComponentX** library — engineered for button interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Advanced tier** — richer composition and interaction, engineered for complex layouts while keeping the public surface tight.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `button`, `card`, `image` workflows.
- **Pattern coverage** — includes `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Chat Bubble** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
<div class="chat chat-receiver">
  <div class="chat-bubble">Just booked tickets for our vacation!</div>
</div>
<div class="chat chat-sender">
  <div class="chat-bubble">Awesome! I can't wait!</div>
</div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="chat chat-receiver">
  <div class="chat-avatar avatar">
    <div class="size-10 rounded-full">
      <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" alt="avatar" />
    </div>
  </div>
  <div class="chat-bubble">I finally finished the marathon!</div>
</div>
<div class="chat chat-sender">
  <div class="chat-avatar avatar">
    <div class="size-10 rounded-full">
      <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-2.png" alt="avatar" />
    </div>
  </div>
  <div class="chat-bubble">Wow, that's incredible! I'm so proud of you!</div>
</div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="chat chat-receiver">
  <div class="chat-header text-base-content">
    Obi-Wan Kenobi
    <time class="text-base-content/50">12:45</time>
  </div>
  <div class="chat-bubble">I aced my final exams!</div>
</div>
<div class="chat chat-sender">
  <div class="chat-header text-base-content">
    Anakin
    <time class="text-base-content/50">12:46</time>
  </div>
  <div class="chat-bubble">Fantastic news! You worked so hard for it!</div>
</div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="chat chat-receiver">
  <div class="chat-bubble">Just finished my first painting!</div>
  <div class="chat-footer text-base-content/50">
    <div>Delivered</div>
  </div>
</div>
<div class="chat chat-sender">
  <div class="chat-bubble">That’s amazing! I’d love to see it!</div>
  <div class="chat-footer text-base-content/50">
    Seen
    <span class="icon-[componentx--checks] text-success align-bottom"></span>
  </div>
</div>
```

I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="chat chat-receiver">
  <div class="chat-avatar avatar">
    <div class="size-10 rounded-full">
      <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" alt="avatar" />
    </div>
  </div>
  <div class="chat-header text-base-content">
    Obi-Wan Kenobi
    <time class="text-base-content/50">12:45</time>
  </div>
  <div class="chat-bubble">I started learning guitar today!</div>
  <div class="chat-footer text-base-content/50">
    <div>Delivered</div>
  </div>
</div>
<div class="chat chat-sender">
  <div class="chat-avatar avatar">
    <div class="size-10 rounded-full">
      <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-2.png" alt="avatar" />
    </div>
  </div>
  <div class="chat-header text-base-content">
    Anakin
    <time class="text-base-content/50">12:46</time>
  </div>
  <div class="chat-bubble">That's awesome! You're going to be great at it!</div>
  <div class="chat-footer text-base-content/50">
    Seen
    <span class="icon-[componentx--checks] text-success align-bottom"></span>
  </div>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="chat chat-sender">
  <div class="chat-bubble">
    <div class="flex flex-col gap-4">
      Check out my new watch! 🤩
      <button class="border-base-content/30 w-52 overflow-hidden rounded-md border" aria-label="Image Button">
        <img class="w-full" src="https://cdn.flyonui.com/fy-assets/components/card/image-9.png" alt="Watch Image" />
      </button>
    </div>
  </div>
</div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="chat chat-sender">
  <div class="chat-bubble">
    Places on my bucket list. 🤩
    <div class="mt-4 grid h-36 w-56 grid-cols-2 gap-2 max-sm:w-52">
      <button class="border-base-content/30 overflow-hidden rounded-md border" aria-label="River Image Button">
        <img class="h-full" src="https://cdn.flyonui.com/fy-assets/components/carousel/image-5.png" alt="River Image" />
      </button>
      <button class="border-base-content/30 overflow-hidden rounded-md border" aria-label="Desert Image Button">
        <img class="h-full" src="https://cdn.flyonui.com/fy-assets/components/carousel/image-1.png" alt="Desert Image" />
      </button>
      <button class="border-base-content/30 overflow-hidden rounded-md border" aria-label="Mountain Image Button">
        <img class="h-full" src="https://cdn.flyonui.com/fy-assets/components/carousel/image-20.png" alt="Mountain Image" />
      </button>
      <div class="border-base-content/30 relative overflow-hidden rounded-md border" aria-label="More Images Button">
        <button class="bg-base-content/60 absolute flex size-full items-center justify-center">
          <span class="text-base-100 text-sm font-semibold">+5</span>
        </button>
        <img src="https://cdn.flyonui.com/fy-assets/components/carousel/image-21.png" class="h-full" alt="Lake Image" />
      </div>
    </div>
  </div>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="chat chat-sender">
  <div class="chat-bubble">
    <div class="flex flex-col gap-4">
      FlyonUI documentation file 📁
      <div class="bg-base-100 rounded-md">
        <button class="flex items-center gap-2 px-3 py-2 max-sm:w-11/12">
          <div class="flex flex-col gap-2 max-sm:w-5/6">
            <div class="flex items-center">
              <span class="icon-[componentx--file-type-pdf] text-error me-2 size-5"></span>
              <span class="text-base-content/80 truncate font-medium">documentation.pdf</span>
            </div>
            <div class="text-base-content flex items-center gap-1 text-xs max-sm:hidden">
              12 Pages
              <span class="icon-[componentx--circle-filled] mt-0.5 size-1.5"></span>
              18 MB
              <span class="icon-[componentx--circle-filled] mt-0.5 size-1.5"></span>
              PDF
            </div>
          </div>
          <span class="btn btn-text btn-circle">
            <span class="icon-[componentx--download] size-5"></span>
          </span>
        </button>
      </div>
    </div>
  </div>
</div>
```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
