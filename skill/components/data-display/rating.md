---
name: "Rating"
library: "ComponentX"
id: "rating"
type: "data-display"
quality: "advanced"
tags: ["animation", "data", "image", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Rating

> **Type:** `data-display` · **Quality:** `advanced` · **ID:** `rating`
> **Path:** `components/data-display/rating.md`

**Rating** is a premium, production-ready component from the **ComponentX** library — engineered for data display interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Advanced tier** — richer composition and interaction, engineered for complex layouts while keeping the public surface tight.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `animation`, `data`, `image` workflows.
- **Pattern coverage** — includes `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Rating** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
<div class="flex" id="raty-with-image"></div>
```

```js
<script>
document.addEventListener('DOMContentLoaded', function () {
  const ratingImage = new Raty(document.querySelector('#raty-with-image'), {
    path: '/images/' // path/to/images(directory)
  })

  ratingImage.init()
})
</script>


```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex" id="raty-with-font"></div>
```

```js
<script>
document.addEventListener('DOMContentLoaded', function () {
  const ratingFont = new Raty(document.querySelector('#raty-with-font'), {
    path: '/fonts/', // path/to/fonts(directory)
    starType: 'i'
  })
  ratingFont.init()
})
</script>


```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex" id="raty-read-only"></div>
```

```js
<script>
document.addEventListener('DOMContentLoaded', function () {
  const ratingReadOnly = new Raty(document.querySelector('#raty-read-only'), {
    path: '/images/',
    score: 3,
    readOnly: true
  })
  ratingReadOnly.init()
})
</script>


```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex" id="raty-custom-icons"></div>
```

```js
<script>
document.addEventListener('DOMContentLoaded', function () {
  const ratingCustomIcons = new Raty(document.querySelector('#raty-custom-icons'), {
    starType: 'i',
    starOff: 'icon-[componentx--heart-filled] opacity-20 size-7 text-error',
    starOn: 'icon-[componentx--heart-filled] size-7 text-error'
  })
  ratingCustomIcons.init()
})
</script>


```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex" id="raty-with-half-stars"></div>
```

```js
<script>
document.addEventListener('DOMContentLoaded', function () {
  const ratingHalfStars = new Raty(document.querySelector('#raty-with-half-stars'), {
    path: '/images/',
    score: 2.5,
    half: true
  })
  ratingHalfStars.init()
})
</script>


```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex" id="raty-xs"></div>
<div class="flex" id="raty-sm"></div>
<div class="flex" id="raty-default"></div>
<div class="flex" id="raty-lg"></div>
```

```js
<script>
document.addEventListener('DOMContentLoaded', function () {
  // Small
  const ratingSmall = new Raty(document.querySelector('#raty-sm'), {
    starType: 'i',
    score: 1,
    starOff: 'icon-[componentx--star-filled] opacity-20 size-4',
    starOn: 'icon-[componentx--star-filled] size-4'
  })
  ratingSmall.init()

  // Default
  const ratingDefault = new Raty(document.querySelector('#raty-default'), {
    starType: 'i',
    score: 2,
    starOff: 'icon-[componentx--star-filled] opacity-20 size-7',
    starOn: 'icon-[componentx--star-filled] size-7'
  })
  ratingDefault.init()

  // Large
  const ratingLarge = new Raty(document.querySelector('#raty-lg'), {
    starType: 'i',
    score: 3,
    starOff: 'icon-[componentx--star-filled] opacity-20 size-10',
    starOn: 'icon-[componentx--star-filled] size-10'
  })
  ratingLarge.init()
})
</script>


```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex" id="raty-primary"></div>
<div class="flex" id="raty-warning"></div>
<div class="flex" id="raty-error"></div>
```

```js
<script>
document.addEventListener('DOMContentLoaded', function () {
  // Primary
  const ratingPrimary = new Raty(document.querySelector('#raty-primary'), {
    starType: 'i',
    score: 1,
    starOff: 'icon-[componentx--star-filled] opacity-20 size-7 text-primary',
    starOn: 'icon-[componentx--star-filled] size-7 text-primary'
  })
  ratingPrimary.init()
  
  // Warning
  const ratingWarning = new Raty(document.querySelector('#raty-warning'), {
    starType: 'i',
    score: 2,
    starOff: 'icon-[componentx--star-filled] opacity-20 size-7 text-warning',
    starOn: 'icon-[componentx--star-filled] size-7 text-warning'
  })
  ratingWarning.init()

  // Error
  const ratingError = new Raty(document.querySelector('#raty-error'), {
    starType: 'i',
    score: 3,
    starOff: 'icon-[componentx--star-filled] opacity-20 size-7 text-error',
    starOn: 'icon-[componentx--star-filled] size-7 text-error'
  })
  ratingError.init()
})
</script>


```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex" id="raty-with-hints"></div>
<div class="h-6" data-hint></div>
```

```js
<script>
document.addEventListener('DOMContentLoaded', function () {
  const ratingHints = new Raty(document.querySelector('#raty-with-hints'), {
    path: '/images/',
    hints: ['Terrible 😔', 'Unsatisfactory 😑', 'Average 😊', 'Nice 😁', 'Splendid 😍'],
    target: '[data-hint]',
    targetFormat: 'Your experience was: {score}'
  })
  ratingHints.init()
})
</script>


```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex" id="raty-with-custom-number-of-stars"></div>
```

```js
<script>
document.addEventListener('DOMContentLoaded', function () {
  const ratingCustomStars = new Raty(document.querySelector('#raty-with-custom-number-of-stars'), {
    path: '/images/',
    number: 8
  })
  ratingCustomStars.init()
})
</script>


```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex items-center justify-between gap-4">
  <div class="flex" id="raty-with-score"></div>
  <div class="border-base-content/25 rounded-field text-base-content flex size-8 items-center justify-center border border-2 font-semibold" id="raty-score" ></div>
</div>
```

```js
<script>
document.addEventListener('DOMContentLoaded', function () {
  const ratingWithScore = new Raty(document.querySelector('#raty-with-score'), {
    starType: 'i',
    score: 2,
    starOff: 'icon-[componentx--star-filled] opacity-20 size-7',
    starOn: 'icon-[componentx--star-filled] size-7 text-warning',
    starHalf: 'icon-[componentx--star-half-filled] size-7 text-warning',
    targetScore: '#raty-score',
    half: true,
    click: function (score, event) {
      document.querySelector('#raty-score').textContent = score
    }
  })
  ratingWithScore.init()

  // Initial score
  document.querySelector('#raty-score').textContent = ratingWithScore.score()
})
</script>


```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex" id="raty-with-reset"></div>
```

```js
<script>
document.addEventListener('DOMContentLoaded', function () {
  const ratingWithReset = new Raty(document.querySelector('#raty-with-reset'), {
    starType: 'i',
    score: 2,
    starOff: 'icon-[componentx--star-filled] opacity-20 size-7',
    starOn: 'icon-[componentx--star-filled] size-7 text-warning',
    cancelOff: 'cancel-off-png',
    cancelOn: 'cancel-on-png text-error',
    cancelButton: true,
    cancelHint: 'Reset rating!',
    cancelPlace: 'right'
  })
  ratingWithReset.init()
})
</script>


```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex" id="raty-with-animation"></div>
```

```js
<script>
document.addEventListener('DOMContentLoaded', function () {
  const ratingWithAnimation = new Raty(document.querySelector('#raty-with-animation'), {
    starType: 'i',
    starOff: 'icon-[componentx--star-filled] opacity-20 size-7',
    starOn: 'icon-[componentx--star-filled] size-7 text-warning',
    click: function (score, event, target) {
      // Add the animation class to the clicked star using requestAnimationFrame
      requestAnimationFrame(() => {
        target.target.classList.add('raty-jump')
      })
    }
  })
  ratingWithAnimation.init()
  
  // Add hover effect immediately after initialization
  const stars = document.querySelectorAll('#raty-with-animation i') // Adjust the selector if needed
  stars.forEach(star => {
    star.addEventListener('mouseover', () => {
      star.classList.add('raty-jump')
    })
    star.addEventListener('mouseout', () => {
      star.classList.remove('raty-jump')
    })
  })
})
</script>


```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
