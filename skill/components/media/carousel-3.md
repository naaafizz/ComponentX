---
name: "Carousel"
library: "ComponentX"
id: "carousel-3"
type: "media"
quality: "advanced"
tags: ["button", "data", "image", "media", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Carousel

> **Type:** `media` · **Quality:** `advanced` · **ID:** `carousel-3`
> **Path:** `components/media/carousel-3.md`

**Carousel** is a premium, production-ready component from the **ComponentX** library — engineered for media interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Advanced tier** — richer composition and interaction, engineered for complex layouts while keeping the public surface tight.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `button`, `data`, `image` workflows.
- **Pattern coverage** — includes `media`, `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Carousel** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
<!-- Slider -->
<div
  data-carousel='{
    "loadingClasses": "opacity-0",
    "dotsItemClasses": "carousel-box carousel-active:bg-primary"
  }' class="relative w-full" >
  <div class="carousel h-80">
    <div class="carousel-body h-full opacity-0">
      <div class="carousel-slide">
        <div class="bg-base-200/60 flex h-full justify-center p-6">
          <span class="self-center text-2xl sm:text-4xl">First slide</span>
        </div>
      </div>
      <div class="carousel-slide active">
        <div class="bg-base-200/80 flex h-full justify-center p-6">
          <span class="self-center text-2xl sm:text-4xl">Second slide</span>
        </div>
      </div>
      <div class="carousel-slide">
        <div class="bg-base-200 flex h-full justify-center p-6">
          <span class="self-center text-2xl sm:text-4xl">Third slide</span>
        </div>
      </div>
    </div>
  </div>

  <button type="button" class="carousel-prev start-5 max-sm:start-3 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm">
    <span class="icon-[componentx--chevron-left] size-5"></span>
    <span class="sr-only">Previous</span>
  </button>
  <button type="button" class="carousel-next end-5 max-sm:end-3 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm">
    <span class="icon-[componentx--chevron-right] size-5"></span>
    <span class="sr-only">Next</span>
  </button>

  <div class="carousel-pagination absolute bottom-3 end-0 start-0 flex justify-center gap-3"></div>
</div>
<!-- End Slider -->
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div
  id="indicators"
  data-carousel='{ "loadingClasses": "opacity-0", "dotsItemClasses": "carousel-dot carousel-active:bg-primary" }'
  class="relative w-full"
>
  <div class="carousel h-80">
    <div class="carousel-body h-full opacity-0">
      <!-- Slide 1 -->
      <div class="carousel-slide">
        <div class="bg-base-200/60 flex h-full justify-center p-6">
          <span class="self-center text-2xl sm:text-4xl">First slide</span>
        </div>
      </div>
      <!-- Slide 2 -->
      <div class="carousel-slide">
        <div class="bg-base-200/80 flex h-full justify-center p-6">
          <span class="self-center text-2xl sm:text-4xl">Second slide</span>
        </div>
      </div>
      <!-- Slide 3 -->
      <div class="carousel-slide">
        <div class="bg-base-200 flex h-full justify-center p-6">
          <span class="self-center text-2xl sm:text-4xl">Third slide</span>
        </div>
      </div>
    </div>
  </div>
  <div class="carousel-pagination absolute bottom-3 end-0 start-0 flex justify-center gap-3"></div>
</div>
```






I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div data-carousel='{ "loadingClasses": "opacity-0" }' class="relative w-full" id="carousel-progress">
  <div class="carousel h-80 rounded-none">
    <div class="carousel-body h-full opacity-0">
      <!-- Slide 1 -->
      <div class="carousel-slide">
        <div class="bg-base-200/40 flex h-full justify-center p-6">
          <span class="self-center text-2xl sm:text-4xl">First slide</span>
        </div>
      </div>
      <!-- Slide 2 -->
      <div class="carousel-slide">
        <div class="bg-base-200/60 flex h-full justify-center p-6">
          <span class="self-center text-2xl sm:text-4xl">Second slide</span>
        </div>
      </div>
      <!-- Slide 3 -->
      <div class="carousel-slide">
        <div class="bg-base-200/60 flex h-full justify-center p-6">
          <span class="self-center text-2xl sm:text-4xl">Third slide</span>
        </div>
      </div>
      <!-- Slide 4 -->
      <div class="carousel-slide">
        <div class="bg-base-200/80 flex h-full justify-center p-6">
          <span class="self-center text-2xl sm:text-4xl">Fourth slide</span>
        </div>
      </div>
      <!-- Slide 5 -->
      <div class="carousel-slide">
        <div class="bg-base-200 flex h-full justify-center p-6">
          <span class="self-center text-2xl sm:text-4xl">Fifth slide</span>
        </div>
      </div>
    </div>
    <div class="carousel-pagination absolute end-0 start-0 top-0 justify-start space-x-0">
      <span class="carousel-pagination-item carousel-active:block carousel-active:bg-primary hidden h-1 w-1/5"></span>
      <span class="carousel-pagination-item carousel-active:block carousel-active:bg-primary hidden h-1 w-2/5"></span>
      <span class="carousel-pagination-item carousel-active:block carousel-active:bg-primary hidden h-1 w-3/5"></span>
      <span class="carousel-pagination-item carousel-active:block carousel-active:bg-primary hidden h-1 w-4/5"></span>
      <span class="carousel-pagination-item carousel-active:block carousel-active:bg-primary hidden h-1 w-full"></span>
    </div>
  </div>
  <!-- Previous Slide -->
  <button type="button" class="carousel-prev start-5 max-sm:start-3 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm">
    <span class="icon-[componentx--chevron-left] size-5"></span>
    <span class="sr-only">Previous</span>
  </button>
  <!-- Next Slide -->
  <button type="button" class="carousel-next end-5 max-sm:end-3 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm">
    <span class="icon-[componentx--chevron-right] size-5"></span>
    <span class="sr-only">Next</span>
  </button>
</div>
```






I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div id="image" data-carousel='{ "loadingClasses": "opacity-0" }' class="relative w-full">
  <div class="carousel">
    <div class="carousel-body h-full opacity-0">
      <!-- Slide 1 -->
      <div class="carousel-slide">
        <div class="flex h-full justify-center">
          <img src="https://cdn.flyonui.com/fy-assets/components/carousel/image-22.png" class="size-full object-cover" alt="game" />
        </div>
      </div>
      <!-- Slide 2 -->
      <div class="carousel-slide">
        <div class="flex h-full justify-center">
          <img src="https://cdn.flyonui.com/fy-assets/components/carousel/image-15.png" class="size-full object-cover" alt="vrbox" />
        </div>
      </div>
      <!-- Slide 3 -->
      <div class="carousel-slide">
        <div class="flex h-full justify-center">
          <img src="https://cdn.flyonui.com/fy-assets/components/carousel/image-16.png" class="size-full object-cover" alt="laptop" />
        </div>
      </div>
      <!-- Slide 4 -->
      <div class="carousel-slide">
        <div class="flex h-full justify-center">
          <img src="https://cdn.flyonui.com/fy-assets/components/carousel/image-8.png" class="size-full object-cover" alt="VRBox" />
        </div>
      </div>
      <!-- Slide 5 -->
      <div class="carousel-slide">
        <div class="flex h-full justify-center">
          <img src="https://cdn.flyonui.com/fy-assets/components/carousel/image-23.png" class="size-full object-cover" alt="iwatch" />
        </div>
      </div>
    </div>
  </div>
  <!-- Previous Slide -->
  <button type="button" class="carousel-prev start-5 max-sm:start-3 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm">
    <span class="icon-[componentx--chevron-left] size-5 cursor-pointer"></span>
    <span class="sr-only">Previous</span>
  </button>
  <!-- Next Slide -->
   <button type="button" class="carousel-next end-5 max-sm:end-3 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm">
    <span class="icon-[componentx--chevron-right] size-5"></span>
    <span class="sr-only">Next</span>
  </button>
</div>
```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div id="horizontal-thumbnails" data-carousel='{ "loadingClasses": "opacity-0" }' class="relative w-full">
  <div class="carousel">
    <div class="carousel-body h-3/4 opacity-0">
      <!-- Slide 1 -->
      <div class="carousel-slide">
        <div class="flex size-full justify-center">
          <img
            src="https://cdn.flyonui.com/fy-assets/components/carousel/image-21.png"
            class="size-full object-cover"
            alt="mountain"
          />
        </div>
      </div>
      <!-- Slide 2 -->
      <div class="carousel-slide">
        <div class="flex size-full justify-center">
          <img
            src="https://cdn.flyonui.com/fy-assets/components/carousel/image-14.png"
            class="size-full object-cover"
            alt="sand"
          />
        </div>
      </div>
      <!-- Slide 3 -->
      <div class="carousel-slide">
        <div class="flex size-full justify-center">
          <img
            src="https://cdn.flyonui.com/fy-assets/components/carousel/image-7.png"
            class="size-full object-cover"
            alt="cloud"
          />
        </div>
      </div>
    </div>
    <div class="carousel-pagination bg-base-100 absolute bottom-0 end-0 start-0 z-1 h-1/4 gap-2 flex justify-center gap-2 overflow-x-auto pt-2" >
      <img src="https://cdn.flyonui.com/fy-assets/components/carousel/image-21.png" class="carousel-pagination-item carousel-active:opacity-100 grow object-cover opacity-30" alt="mountain" />
      <img src="https://cdn.flyonui.com/fy-assets/components/carousel/image-14.png" class="carousel-pagination-item carousel-active:opacity-100 grow object-cover opacity-30" alt="sand" />
      <img src="https://cdn.flyonui.com/fy-assets/components/carousel/image-7.png" class="carousel-pagination-item carousel-active:opacity-100 grow object-cover opacity-30" alt="cloud" />
    </div>
    <!-- Previous Slide -->
    <button type="button" class="carousel-prev start-5 max-sm:start-3 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm">
      <span class="icon-[componentx--chevron-left] size-5 cursor-pointer"></span>
      <span class="sr-only">Previous</span>
    </button>
    <!-- Next Slide -->
    <button type="button" class="carousel-next end-5 max-sm:end-3 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm">
      <span class="icon-[componentx--chevron-right] size-5"></span>
      <span class="sr-only">Next</span>
    </button>
  </div>
</div>
```






I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div id="vertical-thumbnails" data-carousel='{ "loadingClasses": "opacity-0" }' class="relative w-full">
  <div class="carousel flex space-x-2 rounded-none">
    <div class="flex-none">
      <div class="carousel-pagination h-full max-sm:w-8 w-[200px] flex justify-between flex-col gap-y-2 overflow-hidden">
        <img src="https://cdn.flyonui.com/fy-assets/components/carousel/image-21.png" class="carousel-pagination-item carousel-active:opacity-100 grow object-cover opacity-30 rounded-lg" alt="mountain" />
        <img src="https://cdn.flyonui.com/fy-assets/components/carousel/image-14.png" class="carousel-pagination-item carousel-active:opacity-100 grow object-cover opacity-30 rounded-lg" alt="sand" />
        <img src="https://cdn.flyonui.com/fy-assets/components/carousel/image-7.png" class="carousel-pagination-item carousel-active:opacity-100 grow object-cover opacity-30 rounded-lg" alt="cloud" />
      </div>
    </div>
    <div class="relative grow overflow-hidden rounded-2xl">
      <div class="carousel-body h-80 opacity-0">
        <!-- Slide 1 -->
        <div class="carousel-slide">
          <div class="flex size-full justify-center">
            <img src="https://cdn.flyonui.com/fy-assets/components/carousel/image-21.png" class="size-full object-cover" alt="mountain" />
          </div>
        </div>
        <!-- Slide 2 -->
        <div class="carousel-slide">
          <div class="flex size-full justify-center">
            <img src="https://cdn.flyonui.com/fy-assets/components/carousel/image-14.png" class="size-full object-cover" alt="sand" />
          </div>
        </div>
        <!-- Slide 3 -->
        <div class="carousel-slide">
          <div class="flex size-full justify-center">
            <img
              src="https://cdn.flyonui.com/fy-assets/components/carousel/image-7.png"
              class="size-full object-cover"
              alt="cloud"
            />
          </div>
        </div>
      </div>
      <!-- Previous Slide -->
      <button type="button" class="carousel-prev start-5 max-sm:start-3 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm">
        <span class="icon-[componentx--chevron-left] size-5 cursor-pointer"></span>
        <span class="sr-only">Previous</span>
      </button>
      <!-- Next Slide -->
      <button type="button" class="carousel-next end-5 max-sm:end-3 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm">
        <span class="icon-[componentx--chevron-right] size-5"></span>
        <span class="sr-only">Next</span>
      </button>
    </div>
  </div>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div
  id="multi-slide"
  data-carousel='{ "loadingClasses": "opacity-0", "slidesQty": { "xs": 1, "lg": 3 } }'
  class="relative w-full"
>
  <div class="carousel h-80">
    <div class="carousel-body  h-full opacity-0">
      <!-- Slide 1 -->
      <div class="carousel-slide">
        <div class="bg-base-200/50 flex h-full justify-center p-6">
          <span class="self-center text-lg">First slide</span>
        </div>
      </div>
      <!-- Slide 2 -->
      <div class="carousel-slide">
        <div class="bg-base-200 flex h-full justify-center p-6">
          <span class="self-center text-lg">Second slide</span>
        </div>
      </div>
      <!-- Slide 3 -->
      <div class="carousel-slide">
        <div class="bg-base-200 flex h-full justify-center p-6">
          <span class="self-center text-lg">Third slide</span>
        </div>
      </div>
      <!-- Slide 4 -->
      <div class="carousel-slide">
        <div class="bg-base-200/50 flex h-full justify-center p-6">
          <span class="self-center text-lg">Fourth slide</span>
        </div>
      </div>
      <!-- Slide 5 -->
      <div class="carousel-slide">
        <div class="bg-base-200 flex h-full justify-center p-6">
          <span class="self-center text-lg">Fifth slide</span>
        </div>
      </div>
      <!-- Slide 6 -->
      <div class="carousel-slide">
        <div class="bg-base-200 flex h-full justify-center p-6">
          <span class="self-center text-lg">Sixth slide</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Previous Slide -->
  <button type="button" class="carousel-prev start-5 max-sm:start-3 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm">
    <span class="icon-[componentx--chevron-left] size-5 cursor-pointer"></span>
    <span class="sr-only">Previous</span>
  </button>
  <!-- Next Slide -->
   <button type="button" class="carousel-next end-5 max-sm:end-3 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm">
    <span class="icon-[componentx--chevron-right] size-5"></span>
    <span class="sr-only">Next</span>
  </button>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div
  id="centered"
  data-carousel='{ "loadingClasses": "opacity-0", "isCentered": true, "slidesQty": { "xs": 1, "lg": 2 } }'
  class="relative w-full"
>
  <div class="carousel h-80">
    <div class="carousel-body h-full opacity-0">
      <!-- Slide 1 -->
      <div class="carousel-slide px-1">
        <div class="bg-base-200/50 flex h-full justify-center p-6">
          <span class="self-center text-lg">First slide</span>
        </div>
      </div>
      <!-- Slide 2 -->
      <div class="carousel-slide px-1">
        <div class="bg-base-200 flex h-full justify-center p-6">
          <span class="self-center text-lg">Second slide</span>
        </div>
      </div>
      <!-- Slide 3 -->
      <div class="carousel-slide px-1">
        <div class="bg-base-200 flex h-full justify-center p-6">
          <span class="self-center text-lg">Third slide</span>
        </div>
      </div>
      <!-- Slide 4 -->
      <div class="carousel-slide px-1">
        <div class="bg-base-200/50 flex h-full justify-center p-6">
          <span class="self-center text-lg">Fourth slide</span>
        </div>
      </div>
      <!-- Slide 5 -->
      <div class="carousel-slide px-1">
        <div class="bg-base-200 flex h-full justify-center p-6">
          <span class="self-center text-lg">Fifth slide</span>
        </div>
      </div>
      <!-- Slide 6 -->
      <div class="carousel-slide px-1">
        <div class="bg-base-200 flex h-full justify-center p-6">
          <span class="self-center text-lg">Sixth slide</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Previous Slide -->
   <button type="button" class="carousel-prev start-5 max-sm:start-3 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm">
    <span class="icon-[componentx--chevron-left] size-5 cursor-pointer"></span>
    <span class="sr-only">Previous</span>
  </button>
  <!-- Next Slide -->
   <button type="button" class="carousel-next end-5 max-sm:end-3 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm">
    <span class="icon-[componentx--chevron-right] size-5"></span>
    <span class="sr-only">Next</span>
  </button>
</div>
```

I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div id="draggable" data-carousel='{ "loadingClasses": "opacity-0","dotsItemClasses": "carousel-dot carousel-active:bg-primary", "slidesQty": { "xs": 1, "lg": 3 }, "isDraggable": true }' class="relative w-full" >
  <div class="carousel h-80">
    <div class="carousel-body h-full carousel-dragging:transition-none carousel-dragging:cursor-grabbing cursor-grab opacity-0" >
      <!-- Slide 1 -->
      <div class="carousel-slide">
        <div class="bg-base-200/50 flex h-full justify-center p-6">
          <span class="self-center text-lg">First slide</span>
        </div>
      </div>
      <!-- Slide 2 -->
      <div class="carousel-slide">
        <div class="bg-base-200 flex h-full justify-center p-6">
          <span class="self-center text-lg">Second slide</span>
        </div>
      </div>
      <!-- Slide 3 -->
      <div class="carousel-slide">
        <div class="bg-base-200 flex h-full justify-center p-6">
          <span class="self-center text-lg">Third slide</span>
        </div>
      </div>
      <!-- Slide 4 -->
      <div class="carousel-slide">
        <div class="bg-base-200/50 flex h-full justify-center p-6">
          <span class="self-center text-lg">Fourth slide</span>
        </div>
      </div>
      <!-- Slide 5 -->
      <div class="carousel-slide">
        <div class="bg-base-200 flex h-full justify-center p-6">
          <span class="self-center text-lg">Fifth slide</span>
        </div>
      </div>
      <!-- Slide 6 -->
      <div class="carousel-slide">
        <div class="bg-base-200 flex h-full justify-center p-6">
          <span class="self-center text-lg">Sixth slide</span>
        </div>
      </div>
    </div>
  </div>
  <div class="carousel-pagination absolute bottom-3 end-0 start-0 flex justify-center gap-3"></div>
</div>
```





I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div id="snap" data-carousel='{ "loadingClasses": "opacity-0", "slidesQty": { "xs": 1, "lg": 3 }, "isCentered": true, "isSnap": true }' class="relative w-full" >
  <div class="carousel h-80 flex overflow-y-auto snap-x snap-mandatory overflow-x-auto">
    <div class="carousel-body h-full gap-2 opacity-0">
      <!-- Slide 1 -->
      <div class="carousel-slide snap-center">
        <div class="bg-base-200/50 flex h-full justify-center p-6">
          <span class="self-center text-lg">First slide</span>
        </div>
      </div>
      <!-- Slide 2 -->
      <div class="carousel-slide snap-center">
        <div class="bg-base-200 flex h-full justify-center p-6">
          <span class="self-center text-lg">Second slide</span>
        </div>
      </div>
      <!-- Slide 3 -->
      <div class="carousel-slide snap-center">
        <div class="bg-base-200 flex h-full justify-center p-6">
          <span class="self-center text-lg">Third slide</span>
        </div>
      </div>
      <!-- Slide 4 -->
      <div class="carousel-slide snap-center">
        <div class="bg-base-200/50 flex h-full justify-center p-6">
          <span class="self-center text-lg">Fourth slide</span>
        </div>
      </div>
      <!-- Slide 5 -->
      <div class="carousel-slide snap-center">
        <div class="bg-base-200 flex h-full justify-center p-6">
          <span class="self-center text-lg">Fifth slide</span>
        </div>
      </div>
      <!-- Slide 6 -->
      <div class="carousel-slide snap-center">
        <div class="bg-base-200 flex h-full justify-center p-6">
          <span class="self-center text-lg">Sixth slide</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Previous Slide -->
  <button type="button" class="carousel-prev start-5 max-sm:start-3 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm">
    <span class="icon-[componentx--chevron-left] size-5 cursor-pointer"></span>
    <span class="sr-only">Previous</span>
  </button>
  <!-- Next Slide -->
   <button type="button" class="carousel-next end-5 max-sm:end-3 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm">
    <span class="icon-[componentx--chevron-right] size-5"></span>
    <span class="sr-only">Next</span>
  </button>
</div>
```





I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div id="auto-height" data-carousel='{ "isAutoHeight": true, "loadingClasses": "opacity-0" }' class="relative w-full">
  <div class="carousel">
    <div class="carousel-body h-full relative opacity-0">
      <!-- Slide 1 -->
      <div class="carousel-slide h-80 lg:h-96">
        <div class="bg-base-200/50 flex h-full justify-center p-6">
          <span class="self-center text-2xl sm:text-4xl transition duration-700">First slide</span>
        </div>
      </div>
      <!-- Slide 2 -->
      <div class="carousel-slide h-80">
        <div class="bg-base-200 flex h-full justify-center p-6">
          <span class="self-center text-2xl sm:text-4xl transition duration-700">Second slide</span>
        </div>
      </div>
      <!-- Slide 3 -->
      <div class="carousel-slide h-80 lg:h-64">
        <div class="bg-base-200 flex h-full justify-center p-6">
          <span class="self-center text-2xl sm:text-4xl transition duration-700">Third slide</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Previous Slide -->
  <button type="button" class="carousel-prev start-5 max-sm:start-3 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm">
    <span class="icon-[componentx--chevron-left] size-5 cursor-pointer"></span>
    <span class="sr-only">Previous</span>
  </button>
  <!-- Next Slide -->
   <button type="button" class="carousel-next end-5 max-sm:end-3 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm">
    <span class="icon-[componentx--chevron-right] size-5"></span>
    <span class="sr-only">Next</span>
  </button>
</div>
```





I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div id="info" data-carousel='{ "loadingClasses": "opacity-0", "isInfiniteLoop": true, "slidesQty": 1 }' class="relative w-full">
  <div class="carousel h-80">
    <div class="carousel-body h-full opacity-0">
      <!-- Slide 1 -->
      <div class="carousel-slide">
        <div class="bg-base-200/50 flex h-full justify-center p-6">
          <span class="self-center text-2xl sm:text-4xl">First slide</span>
        </div>
      </div>
      <!-- Slide 2 -->
      <div class="carousel-slide">
        <div class="bg-base-200 flex h-full justify-center p-6">
          <span class="self-center text-2xl sm:text-4xl">Second slide</span>
        </div>
      </div>
      <!-- Slide 3 -->
      <div class="carousel-slide">
        <div class="bg-base-200 flex h-full justify-center p-6">
          <span class="self-center text-2xl sm:text-4xl">Third slide</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Previous Slide -->
  <button type="button" class="carousel-prev start-5 max-sm:start-3 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm">
    <span class="icon-[componentx--chevron-left] size-5 cursor-pointer"></span>
    <span class="sr-only">Previous</span>
  </button>
  <!-- Next Slide -->
   <button type="button" class="carousel-next end-5 max-sm:end-3 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm">
    <span class="icon-[componentx--chevron-right] size-5"></span>
    <span class="sr-only">Next</span>
  </button>
  <div
    class="carousel-info absolute bottom-3 start-[50%] inline-flex -translate-x-[50%] justify-center rounded-lg bg-base-100 px-4"
  >
    <span class="carousel-info-current me-1">0</span>
    /
    <span class="carousel-info-total ms-1">0</span>
  </div>
</div>
```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div
  id="carousel-to-destroy"
  data-carousel='{ "loadingClasses": "opacity-0", "dotsItemClasses": "carousel-dot carousel-active:bg-primary", "slidesQty": { "xs": 1, "lg": 3 }, "isCentered": true, "isSnap": true }'
  class="relative w-full"
>
  <div class="carousel overflow-y-auto flex h-80 snap-x snap-mandatory overflow-x-auto">
    <div class="carousel-body h-full gap-2 opacity-0">
      <!-- Slide 1 -->
      <div class="carousel-slide snap-center">
        <div class="bg-base-200/50 flex h-full justify-center p-6">
          <span class="self-center text-lg">First slide</span>
        </div>
      </div>
      <!-- Slide 2 -->
      <div class="carousel-slide snap-center">
        <div class="bg-base-200 flex h-full justify-center p-6">
          <span class="self-center text-lg">Second slide</span>
        </div>
      </div>
      <!-- Slide 3 -->
      <div class="carousel-slide snap-center">
        <div class="bg-base-200 flex h-full justify-center p-6">
          <span class="self-center text-lg">Third slide</span>
        </div>
      </div>
      <!-- Slide 4 -->
      <div class="carousel-slide snap-center">
        <div class="bg-base-200/50 flex h-full justify-center p-6">
          <span class="self-center text-lg">Fourth slide</span>
        </div>
      </div>
      <!-- Slide 5 -->
      <div class="carousel-slide snap-center">
        <div class="bg-base-200 flex h-full justify-center p-6">
          <span class="self-center text-lg">Fifth slide</span>
        </div>
      </div>
      <!-- Slide 6 -->
      <div class="carousel-slide snap-center">
        <div class="bg-base-200 flex h-full justify-center p-6">
          <span class="self-center text-lg">Sixth slide</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Previous Slide -->
  <button type="button" class="carousel-prev start-5 max-sm:start-3 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm">
    <span class="icon-[componentx--chevron-left] size-5 cursor-pointer"></span>
    <span class="sr-only">Previous</span>
  </button>
  <!-- Next Slide -->
   <button type="button" class="carousel-next end-5 max-sm:end-3 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm">
    <span class="icon-[componentx--chevron-right] size-5"></span>
    <span class="sr-only">Next</span>
  </button>

  <div class="carousel-pagination absolute bottom-8 end-0 start-0 flex justify-center gap-3"></div>
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
    const carousel = document.querySelector('#carousel-to-destroy')
    const destroyBtn = document.querySelector('#destroy-btn')
    const reinitBtn = document.querySelector('#reinit-btn')

    // Destroy usage
    destroyBtn.addEventListener('click', () => {
      const { element } = HSCarousel.getInstance(carousel, true)

      element.destroy()

      destroyBtn.setAttribute('disabled', 'disabled')
      reinitBtn.removeAttribute('disabled')
    })

    // Reinit usage
    reinitBtn.addEventListener('click', () => {
      HSCarousel.autoInit()

      reinitBtn.setAttribute('disabled', 'disabled')
      destroyBtn.removeAttribute('disabled')
    })
  })
</script>

```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div id="current-index" data-carousel='{ "loadingClasses": "opacity-0", "currentIndex": 1 }' class="relative w-full">
  <div class="carousel h-80">
    <div class="carousel-body h-full opacity-0">
      <!-- Slide 1 -->
      <div class="carousel-slide">
        <div class="bg-base-200/60 flex h-full justify-center p-6">
          <span class="self-center text-2xl sm:text-4xl">First slide</span>
        </div>
      </div>
      <!-- Slide 2 -->
      <div class="carousel-slide">
        <div class="bg-base-200/80 flex h-full justify-center p-6">
          <span class="self-center text-2xl sm:text-4xl">Second slide</span>
        </div>
      </div>
      <!-- Slide 3 -->
      <div class="carousel-slide">
        <div class="bg-base-200 flex h-full justify-center p-6">
          <span class="self-center text-2xl sm:text-4xl">Third slide</span>
        </div>
      </div>
    </div>
  </div>
  <!-- Previous Slide -->
  <button type="button" class="carousel-prev start-5 max-sm:start-3 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm">
    <span class="icon-[componentx--chevron-left] size-5 cursor-pointer"></span>
    <span class="sr-only">Previous</span>
  </button>
  <!-- Next Slide -->
   <button type="button" class="carousel-next end-5 max-sm:end-3 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm">
    <span class="icon-[componentx--chevron-right] size-5"></span>
    <span class="sr-only">Next</span>
  </button>
</div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div id="auto-play" data-carousel='{ "loadingClasses": "opacity-0", "isAutoPlay": true, "speed": 1000 }' class="relative w-full" >
  <div class="carousel h-80">
    <div class="carousel-body opacity-0 h-full">
      <!-- Slide 1 -->
      <div class="carousel-slide">
        <div class="bg-base-200/60 flex h-full justify-center p-6">
          <span class="self-center text-2xl sm:text-4xl">First slide</span>
        </div>
      </div>
      <!-- Slide 2 -->
      <div class="carousel-slide">
        <div class="bg-base-200/80 flex h-full justify-center p-6">
          <span class="self-center text-2xl sm:text-4xl">Second slide</span>
        </div>
      </div>
      <!-- Slide 3 -->
      <div class="carousel-slide">
        <div class="bg-base-200 flex h-full justify-center p-6">
          <span class="self-center text-2xl sm:text-4xl">Third slide</span>
        </div>
      </div>
    </div>
  </div>
  <!-- Previous Slide -->
  <button type="button" class="carousel-prev start-5 max-sm:start-3 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm">
    <span class="icon-[componentx--chevron-left] size-5 cursor-pointer"></span>
    <span class="sr-only">Previous</span>
  </button>
  <!-- Next Slide -->
   <button type="button" class="carousel-next end-5 max-sm:end-3 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm">
    <span class="icon-[componentx--chevron-right] size-5"></span>
    <span class="sr-only">Next</span>
  </button>
</div>
```

I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div id="infinite-loop" data-carousel='{ "loadingClasses": "opacity-0", "isInfiniteLoop": true }' class="relative w-full">
  <div class="carousel h-80">
    <div class="carousel-body h-full opacity-0">
      <!-- Slide 1 -->
      <div class="carousel-slide">
        <div class="bg-base-200/60 flex h-full justify-center p-6">
          <span class="self-center text-2xl sm:text-4xl">First slide</span>
        </div>
      </div>
      <!-- Slide 2 -->
      <div class="carousel-slide">
        <div class="bg-base-200/80 flex h-full justify-center p-6">
          <span class="self-center text-2xl sm:text-4xl">Second slide</span>
        </div>
      </div>
      <!-- Slide 3 -->
      <div class="carousel-slide">
        <div class="bg-base-200 flex h-full justify-center p-6">
          <span class="self-center text-2xl sm:text-4xl">Third slide</span>
        </div>
      </div>
    </div>
  </div>
  <!-- Previous Slide -->
  <button type="button" class="carousel-prev start-5 max-sm:start-3 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm">
    <span class="icon-[componentx--chevron-left] size-5 cursor-pointer"></span>
    <span class="sr-only">Previous</span>
  </button>
  <!-- Next Slide -->
   <button type="button" class="carousel-next end-5 max-sm:end-3 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm">
    <span class="icon-[componentx--chevron-right] size-5"></span>
    <span class="sr-only">Next</span>
  </button>
</div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<!-- Slider -->
<div
  data-carousel='{
    "loadingClasses": "opacity-0",
    "dotsItemClasses": "carousel-box carousel-active:bg-primary",
    "isRTL": true
  }' class="relative w-full" dir="rtl">
  <div class="carousel h-80">
    <div class="carousel-body h-full opacity-0">
      <div class="carousel-slide">
        <div class="bg-base-200/60 flex h-full justify-center p-6">
          <span class="self-center text-2xl sm:text-4xl">First slide</span>
        </div>
      </div>
      <div class="carousel-slide">
        <div class="bg-base-200/80 flex h-full justify-center p-6">
          <span class="self-center text-2xl sm:text-4xl">Second slide</span>
        </div>
      </div>
      <div class="carousel-slide">
        <div class="bg-base-200 flex h-full justify-center p-6">
          <span class="self-center text-2xl sm:text-4xl">Third slide</span>
        </div>
      </div>
    </div>
  </div>

  <button type="button" class="carousel-prev start-5 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm">
    <span class="icon-[componentx--chevron-left] size-5 cursor-pointer rtl:rotate-180"></span>
    <span class="sr-only">Previous</span>
  </button>
   <button type="button" class="carousel-next end-5 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm">
    <span class="icon-[componentx--chevron-right] size-5 rtl:rotate-180"></span>
    <span class="sr-only">Next</span>
  </button>

  <div class="carousel-pagination absolute bottom-3 end-0 start-0 flex justify-center gap-3"></div>
</div>
<!-- End Slider -->
```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
