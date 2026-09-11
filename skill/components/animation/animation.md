---
name: "Animation"
library: "ComponentX"
id: "animation"
type: "animation"
quality: "standard"
tags: ["animated", "animation", "button", "card", "image", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Animation

> **Type:** `animation` · **Quality:** `standard` · **ID:** `animation`
> **Path:** `components/animation/animation.md`

**Animation** is a premium, production-ready component from the **ComponentX** library — engineered for animation interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `animated`, `animation`, `button` workflows.
- **Pattern coverage** — includes `card`, `image`, `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Animation** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
<div class="flex w-full items-center justify-around max-sm:flex-col-reverse sm:gap-8">
  <ul class="divide-base-content/25 bg-base-100 shadow-base-300/20 h-80 w-64 divide-y overflow-y-auto rounded-xs shadow-xs **:rounded-none max-sm:h-48" >
    <li><button class="dropdown-item animation-button" value="motion-preset-fade">Fade</button></li>
    <li><button class="dropdown-item animation-button" value="motion-preset-slide-right">Slide</button></li>
    <li><button class="dropdown-item animation-button" value="motion-preset-focus">Focus</button></li>
    <li><button class="dropdown-item animation-button" value="motion-preset-blur-right">Blur</button></li>
    <li><button class="dropdown-item animation-button" value="motion-preset-expand">Expand</button></li>
    <li><button class="dropdown-item animation-button" value="motion-preset-shrink">Shrink</button></li>
    <li><button class="dropdown-item animation-button" value="motion-preset-pop">Pop</button></li>
    <li><button class="dropdown-item animation-button" value="motion-preset-shake">Shake</button></li>
    <li><button class="dropdown-item animation-button" value="motion-preset-bounce">Bounce</button></li>
    <li><button class="dropdown-item animation-button" value="motion-preset-compress">Compress</button></li>
    <li><button class="dropdown-item animation-button" value="motion-preset-pulse">Pulse</button></li>
    <li><button class="dropdown-item animation-button" value="motion-preset-wobble">Wobble</button></li>
    <li><button class="dropdown-item animation-button" value="motion-preset-seesaw">Seesaw</button></li>
    <li><button class="dropdown-item animation-button" value="motion-preset-oscillate">Oscillate</button></li>
    <li><button class="dropdown-item animation-button" value="motion-preset-stretch">Stretch</button></li>
    <li><button class="dropdown-item animation-button" value="motion-preset-float">Float</button></li>
    <li><button class="dropdown-item animation-button" value="motion-preset-spin">Spin</button></li>
    <li><button class="dropdown-item animation-button" value="motion-preset-blink">Blink</button></li>
    <li>
      <a class="dropdown-item link link-hover link-primary group justify-between" href="https://rombo.co/tailwind/" target="_blank" >
        More Animations
        <span class="icon-[componentx--chevron-right] -mb-0.5 size-4 group-hover:translate-x-1 rtl:rotate-180"></span>
      </a>
    </li>
  </ul>

  <div id="animated-box" class="mx-auto self-center">
    <div class="stats">
      <div class="stat">
        <div class="stat-figure">
          <div class="avatar">
            <div class="size-12 rounded-full">
              <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" alt="User Avatar" />
            </div>
          </div>
        </div>
        <div class="stat-title">Total page views</div>
        <div class="stat-value">89,400</div>
        <div class="stat-desc">21% ↗︎ than last month</div>
      </div>
    </div>
  </div>
</div>
```

```js
<script>
  window.addEventListener('load', function () {
    const animationButtons = document.querySelectorAll('.animation-button')
    const box = document.getElementById('animated-box')

    animationButtons.forEach(button => {
      button.addEventListener('click', () => {
        const animationClass = button.value

        // Remove all existing motion- classes
        const currentClasses = Array.from(box.classList)
        const motionClasses = currentClasses.filter(className => className.startsWith('motion-'))
        motionClasses.forEach(className => box.classList.remove(className))

        // Temporarily remove the animation class to re-trigger it
        void box.offsetWidth // Trigger reflow to allow re-adding the class
        box.classList.add(animationClass, 'motion-duration-1000')
      })
    })
  })
</script>


```

I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="avatar-group -space-x-5">
  <div class="avatar hover:motion-scale-out-110 motion-ease-spring-smooth hover:z-30">
    <div class="w-13">
      <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" alt="avatar" />
    </div>
  </div>
  <div class="avatar hover:motion-scale-out-110 motion-ease-spring-smooth hover:z-30">
    <div class="w-13">
      <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-12.png" alt="avatar" />
    </div>
  </div>
  <div class="avatar hover:motion-scale-out-110 motion-ease-spring-smooth hover:z-30">
    <div class="w-13">
      <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-10.png" alt="avatar" />
    </div>
  </div>
  <div class="avatar hover:motion-scale-out-110 motion-ease-spring-smooth hover:z-30">
    <div class="w-13">
      <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-6.png" alt="avatar" />
    </div>
  </div>
</div>
```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<button class="btn btn-square btn-text btn-error *:active:motion-preset-shake" aria-label="Soft Icon Button">
  <span class="icon-[componentx--bell-ringing] motion-duration-500 size-6"></span>
</button>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="card intersect:motion-scale-in-0 intersect:motion-opacity-in-0 intersect:motion-blur-in-[5px] intersect:motion-ease-spring-smooth intersect-half origin-bottom-right sm:max-w-sm" >
  <figure><img src="https://cdn.flyonui.com/fy-assets/components/card/image-7.png" alt="headphone" /></figure>
  <div class="card-body">
    <h5 class="card-title mb-2.5">Airpods Max</h5>
    <p class="mb-4">A perfect balance of exhilarating high-fidelity audio and the effortless magic of Airpods.</p>
    <div class="card-actions">
      <button class="btn btn-primary intersect:motion-delay-[400ms] intersect:motion-ease-spring-bouncy intersect:motion-scale-in-0" >
        Buy Now
      </button>
      <button class="btn btn-secondary btn-soft intersect:motion-delay-[500ms] intersect:motion-ease-spring-bouncy intersect:motion-scale-in-0" >
        Add to cart
      </button>
    </div>
  </div>
</div>
```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<ul class="flex w-96 flex-col gap-2 rounded-md *:rounded-md *:p-3 *:shadow-sm *:shadow-base-300/20" >
  <li class="bg-base-100 intersect:motion-scale-in-0 intersect:motion-opacity-in-0 origin-top">
    <div class="flex w-full items-center gap-2">
      <span class="icon-[componentx--brand-whatsapp] text-success size-6"></span>
      New Message(13)
    </div>
  </li>
  <li class="origin-to intersect:motion-delay-[500ms] bg-base-100 intersect:motion-scale-in-0 intersect:motion-opacity-in-0" >
    <div class="flex w-full items-center gap-2">
      <span class="icon-[componentx--brand-uber] text-base-content size-6"></span>
      Your ride is waiting outside
    </div>
  </li>
  <li class="origin-to intersect:motion-delay-[1000ms] bg-base-100 intersect:motion-scale-in-0 intersect:motion-opacity-in-0" >
    <div class="flex w-full items-center gap-2">
      <span class="icon-[componentx--brand-amazon] text-warning size-6"></span>
      You forget something in your cart
    </div>
  </li>
  <li class="origin-to intersect:motion-delay-[1500ms] bg-base-100 intersect:motion-scale-in-0 intersect:motion-opacity-in-0" >
    <div class="flex w-full items-center gap-2">
      <span class="icon-[componentx--brand-netflix] text-error size-6"></span>
      New series just dropped
    </div>
  </li>
</ul>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex flex-wrap gap-6">
  <div class="stats intersect:motion-preset-slide-left intersect:motion-ease-spring-bouncier max-sm:w-full">
    <div class="stat">
      <div class="avatar avatar-placeholder">
        <div class="bg-success/20 text-success size-10 rounded-full">
          <span class="icon-[componentx--package] size-6"></span>
        </div>
      </div>
      <div class="stat-value mb-1">Order</div>
      <div class="stat-title">7,500 of 10,000 orders</div>
      <div class="progress bg-success/10 h-2" role="progressbar" aria-label="Order Progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" >
        <div class="progress-bar progress-success w-3/4"></div>
      </div>
    </div>
  </div>

  <div class="stats intersect:motion-preset-slide-left intersect:motion-delay-[400ms] intersect:motion-ease-spring-bouncier max-sm:w-full" >
    <div class="stat">
      <div class="avatar avatar-placeholder">
        <div class="bg-warning/20 text-warning size-10 rounded-full">
          <span class="icon-[componentx--cash] size-6"></span>
        </div>
      </div>
      <div class="stat-value mb-1">Revenue</div>
      <div class="stat-title">$45,000 of $100,000</div>
      <div class="progress bg-warning/10 h-2" role="progressbar" aria-label="Revenue Progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" >
        <div class="progress-bar progress-warning w-2/5"></div>
      </div>
    </div>
  </div>

  <div class="stats intersect:motion-preset-slide-left intersect:motion-delay-[800ms] intersect:motion-ease-spring-bouncier max-sm:w-full" >
    <div class="stat">
      <div class="avatar avatar-placeholder">
        <div class="bg-error/20 text-error size-10 rounded-full">
          <span class="icon-[componentx--credit-card] size-6"></span>
        </div>
      </div>
      <div class="stat-value mb-1">Invoice</div>
      <div class="stat-title">$18,200 of $25,000</div>
      <div class="progress bg-error/10 h-2" role="progressbar" aria-label="Invoice Progressbar" aria-valuenow="73" aria-valuemin="0" aria-valuemax="100" >
        <div class="progress-bar progress-error w-[73%]"></div>
      </div>
    </div>
  </div>
</div>

<div>
  <h2 class="intersect:motion-preset-blur-left intersect:motion-delay-[1000ms] mb-4 text-3xl font-bold">
    Track Your Stats
  </h2>

  <p class="intersect:motion-preset-focus intersect:motion-delay-[1400ms]">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
  </p>
</div>
```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
