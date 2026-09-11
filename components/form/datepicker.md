---
name: "DatePicker"
library: "ComponentX"
id: "datepicker"
type: "form"
quality: "standard"
tags: ["form", "input", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · DatePicker

> **Type:** `form` · **Quality:** `standard` · **ID:** `datepicker`
> **Path:** `components/form/datepicker.md`

**DatePicker** is a premium, production-ready component from the **ComponentX** library — engineered for form interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `form`, `input`, `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **DatePicker** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
<input type="text" class="input max-w-sm" placeholder="YYYY-MM-DD" id="flatpickr-date" />
```

```js
<script>
  window.addEventListener('load', function () {
    // Basic
    flatpickr('#flatpickr-date', {
      monthSelectorType: 'static'
    })
  })
</script>


```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<input type="text" class="input max-w-sm" placeholder="HH:MM" id="flatpickr-time" />
```

```js
<script>
  window.addEventListener('load', function () {
    // Time
    flatpickr('#flatpickr-time', {
      enableTime: true,
      noCalendar: true,
      dateFormat: 'H:i'
    })
  })
</script>


```







I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<input type="text" class="input max-w-sm" placeholder="YYYY-MM-DD" id="flatpickr-default" />
```

```js
<script>
  window.addEventListener('load', function () {
    // Default Type
    flatpickr('#flatpickr-default', {
      monthSelectorType: 'static'
    })
  })
</script>


```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="input-floating max-w-sm">
  <input type="text" placeholder="YYYY-MM-DD" class="input" id="flatpickr-floating" />
  <label class="input-floating-label" for="flatpickr-floating">Date</label>
</div>
```

```js
<script>
  window.addEventListener('load', function () {
    // floating Type
    flatpickr('#flatpickr-floating', {
      monthSelectorType: 'static'
    })
  })
</script>


```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="max-w-sm">
  <label class="label-text" for="flatpickrStateSuccess">Date</label>
  <input type="text" placeholder="YYYY-MM-DD" class="input is-valid flatpickr-success" id="flatpickrStateSuccess" />
  <span class="helper-text">Helper text</span>
</div>

<div class="input-floating max-w-sm">
  <input type="text" placeholder="YYYY-MM-DD" class="input is-valid flatpickr-success" id="flatpickrFloatingStateSuccess" />
  <label class="input-floating-label" for="flatpickrFloatingStateSuccess">Date</label>
  <span class="helper-text ps-3">Helper text</span>
</div>
```

```js
<script>
  window.addEventListener('load', function () {
    // Success Date Picker
    flatpickr('.flatpickr-success', {
      monthSelectorType: 'static'
    })
  })
</script>


```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="max-w-sm">
  <label class="label-text" for="flatpickrStateError">Date</label>
  <input type="text" placeholder="John Doe" class="input is-invalid flatpickr-error" id="flatpickrStateError" />
  <span class="helper-text">Helper text</span>
</div>

<div class="input-floating max-w-sm">
  <input type="text" placeholder="John Doe" class="input is-invalid flatpickr-error" id="flatpickrFloatingStateError" />
  <label class="input-floating-label" for="flatpickrFloatingStateError">Date</label>
  <span class="helper-text ps-3">Helper text</span>
</div>
```

```js
<script>
  window.addEventListener('load', function () {
    // Error  Date Picker
    flatpickr('.flatpickr-error', {
      monthSelectorType: 'static'
    })
  })
</script>


```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<input type="text" class="input max-w-sm" placeholder="YYYY-MM-DD HH:MM" id="flatpickr-date-time" />
```

```js
<script>
  window.addEventListener('load', function () {
    // Date Time
    flatpickr('#flatpickr-date-time', {
      enableTime: true,
      dateFormat: 'Y-m-d H:i'
    })
  })
</script>


```

I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<input type="text" class="input max-w-sm" placeholder="YYYY-MM-DD, YYYY-MM-DD" id="flatpickr-multiple-date" />
```

```js
<script>
  window.addEventListener('load', function () {
    // Multiple Date
    flatpickr('#flatpickr-multiple-date', {
      mode: 'multiple',
      dateFormat: 'Y-m-d'
    })
  })
</script>


```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<input type="text" class="input max-w-sm" placeholder="YYYY-MM-DD to YYYY-MM-DD" id="flatpickr-range" />
```

```js
<script>
  window.addEventListener('load', function () {
    // Range Date Picker
    flatpickr('#flatpickr-range', {
      mode: 'range'
    })
  })
</script>


```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<input type="text" class="input max-w-sm" placeholder="Month DD, YYYY" id="flatpickr-human-friendly" />
```

```js
<script>
  window.addEventListener('load', function () {
    // Human Friendly
    flatpickr('#flatpickr-human-friendly', {
      altInput: true,
      altFormat: 'F j, Y',
      dateFormat: 'Y-m-d'
    })
  })
</script>


```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<input type="text" class="input max-w-sm" placeholder="Month DD, YYYY" id="flatpickr-human-friendly" />
```

```js
<script>
  window.addEventListener('load', function () {
    // Human Friendly
    flatpickr('#flatpickr-human-friendly', {
      altInput: true,
      altFormat: 'F j, Y',
      dateFormat: 'Y-m-d'
    })
  })
</script>


```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<input type="text" class="input max-w-sm" placeholder="YYYY-MM-DD" id="flatpickr-disabled-range" />
```

```js
<script>
  window.addEventListener('load', function () {
    // Disable Date Picker
    const fromDate = new Date(Date.now() - 3600 * 1000 * 48)
    const toDate = new Date(Date.now() + 3600 * 1000 * 48)
    flatpickr('#flatpickr-disabled-range', {
      dateFormat: 'Y-m-d',
      disable: [
        {
          from: fromDate.toISOString().split('T')[0],
          to: toDate.toISOString().split('T')[0]
        }
      ]
    })
  })
</script>


```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<input type="text" class="input max-w-sm" placeholder="YYYY-MM-DD" id="flatpickr-localization" />
```

```js
<script>
  window.addEventListener('load', function () {
    // Localization
    flatpickr('#flatpickr-localization', {
      locale: 'ru'
    })
  })
</script>


```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<input type="text" class="input max-w-sm" placeholder="YYYY-MM-DD" id="flatpickr-week-number" />
```

```js
<script>
  window.addEventListener('load', function () {
    // Week Numbers
    flatpickr('#flatpickr-week-number', {
      weekNumbers: true,
      monthSelectorType: 'static'
    })
  })
</script>


```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
