---
name: "Advanced select"
library: "ComponentX"
id: "advanced-select"
type: "form"
quality: "standard"
tags: ["button", "data", "form", "menu", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Advanced select

> **Type:** `form` · **Quality:** `standard` · **ID:** `advanced-select`
> **Path:** `components/form/advanced-select.md`

**Advanced select** is a premium, production-ready component from the **ComponentX** library — engineered for form interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `button`, `data`, `form` workflows.
- **Pattern coverage** — includes `menu`, `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Advanced select** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
<div class="max-w-sm">
  <select
    data-select='{
    "placeholder": "Select option...",
    "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
    "toggleClasses": "advance-select-toggle select-disabled:pointer-events-none select-disabled:opacity-40",
    "dropdownClasses": "advance-select-menu",
    "optionClasses": "advance-select-option selected:select-active",
    "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"icon-[componentx--check] shrink-0 size-4 text-primary hidden selected:block \"></span></div>",
    "extraMarkup": "<span class=\"icon-[componentx--caret-up-down] shrink-0 size-4 text-base-content absolute top-1/2 end-3 -translate-y-1/2 \"></span>"
    }'
    class="hidden"
  >
    <option value="">Choose</option>
    <option value="name">Full Name</option>
    <option value="email">Email Address</option>
    <option value="description">Project Description</option>
    <option value="user_id">User Identification Number</option>
  </select>
</div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="max-w-sm">
  <select
    data-select='{
    "placeholder": "<span class=\"inline-flex items-center\"><span class=\"icon-[componentx--filter] shrink-0 size-4 me-2\"></span> Filter</span>",
    "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
    "toggleClasses": "advance-select-toggle select-disabled:pointer-events-none select-disabled:opacity-40",
    "dropdownClasses": "advance-select-menu",
    "optionClasses": "advance-select-option selected:select-active",
    "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"icon-[componentx--check] shrink-0 size-4 text-primary hidden selected:block \"></span></div>",
    "extraMarkup": "<span class=\"icon-[componentx--caret-up-down] shrink-0 size-4 text-base-content absolute top-1/2 end-3 -translate-y-1/2 \"></span>"
  }'
    class="hidden"
  >
    <option value="">Choose</option>
    <option value="name">Full Name</option>
    <option value="email">Email Address</option>
    <option value="description">Project Description</option>
    <option value="user_id">User Identification Number</option>
  </select>
</div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="max-w-sm space-y-4">
  <!-- Extra small -->
  <select
    data-select='{
      "placeholder": "Select option...",
      "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
      "toggleClasses": "advance-select-toggle advance-select-xs select-disabled:pointer-events-none select-disabled:opacity-40",
      "dropdownClasses": "advance-select-menu",
      "dropdownSpace": 5,
      "optionClasses": "advance-select-option selected:select-active",
      "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"icon-[componentx--check] shrink-0 size-4 text-primary hidden selected:block \"></span></div>",
      "extraMarkup": "<span class=\"icon-[componentx--caret-up-down] shrink-0 size-3.5 text-base-content absolute top-1/2 end-3 -translate-y-1/2 \"></span>"
      }'
    class="hidden"
  >
    <option value="">Choose</option>
    <option value="name">Full Name</option>
    <option value="email">Email Address</option>
    <option value="description">Project Description</option>
    <option value="user_id">User Identification Number</option>
  </select>

  <!-- Small -->

<select
  data-select='{
    "placeholder": "Select option...",
    "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
    "toggleClasses": "advance-select-toggle advance-select-sm select-disabled:pointer-events-none select-disabled:opacity-40",
    "dropdownClasses": "advance-select-menu",
    "dropdownSpace": 8,
    "optionClasses": "advance-select-option selected:select-active",
    "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"icon-[componentx--check] shrink-0 size-4 text-primary hidden selected:block \"></span></div>",
    "extraMarkup": "<span class=\"icon-[componentx--caret-up-down] shrink-0 size-3.5 text-base-content absolute top-1/2 end-3 -translate-y-1/2 \"></span>"
    }' class="hidden" >
    <option value="">Choose</option>
    <option value="name">Full Name</option>
    <option value="email">Email Address</option>
    <option value="description">Project Description</option>
    <option value="user_id">User Identification Number</option>
</select>

<!-- Default -->

<select
  data-select='{
    "placeholder": "Select option...",
    "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
    "toggleClasses": "advance-select-toggle advance-select-md select-disabled:pointer-events-none select-disabled:opacity-40",
    "dropdownClasses": "advance-select-menu",
    "optionClasses": "advance-select-option selected:select-active",
    "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"icon-[componentx--check] shrink-0 size-4 text-primary hidden selected:block \"></span></div>",
    "extraMarkup": "<span class=\"icon-[componentx--caret-up-down] shrink-0 size-4 text-base-content absolute top-1/2 end-3 -translate-y-1/2 \"></span>"
    }' class="hidden" >
    <option value="">Choose</option>
    <option value="name">Full Name</option>
    <option value="email">Email Address</option>
    <option value="description">Project Description</option>
    <option value="user_id">User Identification Number</option>
</select>

<!-- Large -->

<select
  data-select='{
  "placeholder": "Select option...",
  "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
  "toggleClasses": "advance-select-toggle advance-select-lg select-disabled:pointer-events-none select-disabled:opacity-40",
  "dropdownClasses": "advance-select-menu",
  "optionClasses": "advance-select-option selected:select-active",
  "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"icon-[componentx--check] shrink-0 size-5 text-primary hidden selected:block \"></span></div>",
  "extraMarkup": "<span class=\"icon-[componentx--caret-up-down] shrink-0 size-5 text-base-content absolute top-1/2 end-3 -translate-y-1/2 \"></span>"
  }'
  class="hidden"
  >
    <option value="">Choose</option>
    <option value="name">Full Name</option>
    <option value="email">Email Address</option>
    <option value="description">Project Description</option>
    <option value="user_id">User Identification Number</option>
  </select>

<!-- Extra large -->

<select
  data-select='{
  "placeholder": "Select option...",
  "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
  "toggleClasses": "advance-select-toggle advance-select-xl select-disabled:pointer-events-none select-disabled:opacity-40",
  "dropdownClasses": "advance-select-menu",
  "optionClasses": "advance-select-option selected:select-active",
  "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"icon-[componentx--check] shrink-0 size-6 text-primary hidden selected:block \"></span></div>",
  "extraMarkup": "<span class=\"icon-[componentx--caret-up-down] shrink-0 size-5 text-base-content absolute top-1/2 end-3 -translate-y-1/2 \"></span>"
  }'
  class="hidden"
  >
    <option value="">Choose</option>
    <option value="name">Full Name</option>
    <option value="email">Email Address</option>
    <option value="description">Project Description</option>
    <option value="user_id">User Identification Number</option>
  </select>
</div>
```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="max-w-sm">
  <div>
    <label class="label-text" for="validSelect"> Choose your option </label>
    <select
      data-select='{
      "placeholder": "Select option...",
      "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
      "toggleClasses": "advance-select-toggle select-disabled:pointer-events-none select-disabled:opacity-40",
      "dropdownClasses": "advance-select-menu",
      "optionClasses": "advance-select-option selected:select-active",
      "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"icon-[componentx--check] shrink-0 size-4 text-primary hidden selected:block \"></span></div>",
      "extraMarkup": "<span class=\"icon-[componentx--caret-up-down] shrink-0 size-4 text-base-content absolute top-1/2 end-3 -translate-y-1/2 \"></span>"
      }'
      class="is-valid hidden" id="validSelect"
    >
      <option value="">Choose</option>
      <option value="name">Full Name</option>
      <option value="email">Email Address</option>
      <option value="description">Project Description</option>
      <option value="user_id">User Identification Number</option>
    </select>
    <span class="helper-text">Helper text</span>
  </div>
</div>
```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="max-w-sm">
  <div>
    <label class="label-text" for="invalidSelect"> Choose your option </label>
    <select
      data-select='{
      "placeholder": "Select option...",
      "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
      "toggleClasses": "advance-select-toggle select-disabled:pointer-events-none select-disabled:opacity-40",
      "dropdownClasses": "advance-select-menu",
      "optionClasses": "advance-select-option selected:select-active",
      "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"icon-[componentx--check] shrink-0 size-4 text-primary hidden selected:block \"></span></div>",
      "extraMarkup": "<span class=\"icon-[componentx--caret-up-down] shrink-0 size-4 text-base-content absolute top-1/2 end-3 -translate-y-1/2 \"></span>"
      }'
      class="is-invalid hidden" id="invalidSelect"
    >
      <option value="">Choose</option>
      <option value="name">Full Name</option>
      <option value="email">Email Address</option>
      <option value="description">Project Description</option>
      <option value="user_id">User Identification Number</option>
    </select>
    <span class="helper-text">Helper text</span>
  </div>
</div>
```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="max-w-sm">
  <select
    data-select='{
    "placeholder": "Select option...",
    "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
    "toggleClasses": "advance-select-toggle select-disabled:pointer-events-none select-disabled:opacity-40",
    "dropdownClasses": "advance-select-menu",
    "dropdownVerticalFixedPlacement": "bottom",
    "optionClasses": "advance-select-option selected:select-active",
    "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"icon-[componentx--check] shrink-0 size-4 text-primary hidden selected:block \"></span></div>",
    "extraMarkup": "<span class=\"icon-[componentx--caret-up-down] shrink-0 size-4 text-base-content absolute top-1/2 end-3 -translate-y-1/2 \"></span>"
    }'
    class="hidden"
  >
    <option value="">Choose</option>
    <option value="name">Full Name</option>
    <option value="email">Email Address</option>
    <option value="description">Project Description</option>
    <option value="user_id">User Identification Number</option>
  </select>
</div>
```





I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="max-w-sm">
  <select
    data-select='{
    "placeholder": "Select option...",
    "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
    "toggleClasses": "advance-select-toggle select-disabled:pointer-events-none select-disabled:opacity-40",
    "dropdownClasses": "advance-select-menu",
    "optionClasses": "advance-select-option selected:select-active",
    "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"icon-[componentx--check] shrink-0 size-4 text-primary hidden selected:block \"></span></div>",
    "extraMarkup": "<span class=\"icon-[componentx--caret-up-down] shrink-0 size-4 text-base-content/50 absolute top-1/2 end-3 -translate-y-1/2 \"></span>"
    }'
    class="hidden"
    disabled
  >
    <option value="">Choose</option>
    <option value="name">Full Name</option>
    <option value="email">Email Address</option>
    <option value="description">Project Description</option>
    <option value="user_id">User Identification Number</option>
  </select>
</div>
```





I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="max-w-sm">
  <select
    data-select='{
    "placeholder": "Select option...",
    "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
    "toggleClasses": "advance-select-toggle select-disabled:pointer-events-none select-disabled:opacity-40",
    "dropdownClasses": "advance-select-menu",
    "optionClasses": "advance-select-option selected:select-active advance-select-option selected:select-active select-disabled:pointer-events-none select-disabled:opacity-40",
    "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"icon-[componentx--check] shrink-0 size-4 text-primary hidden selected:block \"></span></div>",
    "extraMarkup": "<span class=\"icon-[componentx--caret-up-down] shrink-0 size-4 text-base-content/50 absolute top-1/2 end-3 -translate-y-1/2 \"></span>"
    }'
    class="hidden"
  >
    <option value="">Choose</option>
    <option value="name">Full Name</option>
    <option value="email">Email Address</option>
    <option value="description" disabled>Project Description</option>
    <option value="user_id">User Identification Number</option>
  </select>
</div>
```





I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="max-w-sm">
  <select
    multiple
    data-select='{
    "placeholder": "Select multiple options...",
    "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
    "toggleClasses": "advance-select-toggle select-disabled:pointer-events-none select-disabled:opacity-40",
    "dropdownClasses": "advance-select-menu",
    "optionClasses": "advance-select-option selected:select-active",
    "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"icon-[componentx--check] shrink-0 size-4 text-primary hidden selected:block \"></span></div>",
    "extraMarkup": "<span class=\"icon-[componentx--caret-up-down] shrink-0 size-4 text-base-content absolute top-1/2 end-3 -translate-y-1/2 \"></span>"
    }'
    class="hidden"
  >
    <option value="">Choose</option>
    <option value="name">Full Name</option>
    <option value="email">Email Address</option>
    <option value="description">Project Description</option>
    <option value="user_id">User Identification Number</option>
  </select>
</div>
```





I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="max-w-sm">
  <!-- Select -->
  <select
    multiple=""
    data-select='{
    "placeholder": "Select multiple options...",
    "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
    "toggleClasses": "advance-select-toggle select-disabled:pointer-events-none select-disabled:opacity-40",
    "dropdownClasses": "advance-select-menu",
    "optionClasses": "advance-select-option selected:select-active",
    "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><div class=\"me-2\" data-icon></div><div><div class=\"text-sm text-base-content \" data-title></div></div><div class=\"ms-auto\"><span class=\"icon-[componentx--check] shrink-0 size-4 text-primary hidden selected:block \"></span></div></div>",
    "extraMarkup": "<span class=\"icon-[componentx--caret-up-down] shrink-0 size-4 text-base-content absolute top-1/2 end-3 -translate-y-1/2 \"></span>"
  }'
    class="hidden"
  >
    <option value="">Choose</option>
    <option
      selected=""
      value="1"
      data-select-option='{ "icon": "<img class=\"shrink-0 size-6 rounded-full\" src=\"https://cdn.flyonui.com/fy-assets/avatar/avatar-5.png\" alt=\"Ethan Caldwell\" />"}'
    >
      Ethan Caldwell
    </option>
    <option
      value="2"
      data-select-option='{ "icon": "<img class=\"shrink-0 size-6 rounded-full\" src=\"https://cdn.flyonui.com/fy-assets/avatar/avatar-2.png\" alt=\"Isabella Martinez\" />"}'
    >
      Isabella Martinez
    </option>
    <option
      value="3"
      data-select-option='{ "icon": "<img class=\"shrink-0 size-6 rounded-full\" src=\"https://cdn.flyonui.com/fy-assets/avatar/avatar-8.png\" alt=\"Ava Thompson\" />"}'
    >
      Ava Thompson
    </option>
  </select>
  <!-- End Select -->
</div>
```





I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="max-w-sm">
  <select
    multiple
    data-select='{
    "placeholder": "Select multiple options...",
    "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
    "toggleClasses": "advance-select-toggle select-disabled:pointer-events-none select-disabled:opacity-40",
    "toggleCountText": "selected",
    "toggleCountTextMinItems": 2,
    "dropdownClasses": "advance-select-menu",
    "optionClasses": "advance-select-option selected:select-active",
    "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"icon-[componentx--check] shrink-0 size-4 text-primary hidden selected:block \"></span></div>",
    "extraMarkup": "<span class=\"icon-[componentx--caret-up-down] shrink-0 size-4 text-base-content absolute top-1/2 end-3 -translate-y-1/2 \"></span>"
    }'
    class="hidden"
  >
    <option value="">Choose</option>
    <option value="name">Full Name</option>
    <option value="email">Email Address</option>
    <option value="description">Project Description</option>
    <option value="user_id">User Identification Number</option>
  </select>
</div>
```







I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
  <!-- Select -->
<div class="max-w-sm">
  <select
    id="multi-cond-count"
    multiple=""
    data-select='{
      "placeholder": "Select multiple options...",
      "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
      "toggleClasses": "advance-select-toggle select-disabled:pointer-events-none select-disabled:opacity-40",
      "toggleSeparators": {
        "betweenItemsAndCounter": "&"
      },
      "toggleCountText": "+",
      "toggleCountTextPlacement": "prefix-no-space",
      "toggleCountTextMinItems": 3,
      "toggleCountTextMode": "nItemsAndCount",
      "dropdownClasses": "advance-select-menu max-h-44 overflow-y-auto",
      "optionClasses": "advance-select-option selected:select-active",
      "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"icon-[componentx--check] shrink-0 size-4 text-primary hidden selected:block \"></span></div>",
      "extraMarkup": "<span class=\"icon-[componentx--caret-up-down] shrink-0 size-4 text-base-content absolute top-1/2 end-3 -translate-y-1/2 \"></span>"
    }'
    class="hidden"
  >
    <option value="">Choose</option>
    <option>Name</option>
    <option>Email address</option>
    <option>Description</option>
    <option>User ID</option>
    <option>Address</option>
    <option>City</option>
    <option>Country</option>
  </select>
  <!-- End Select -->
</div>

<div class="mt-4 flex flex-wrap gap-2">
  <button type="button" id="clear-btn" class="btn btn-outline btn-primary btn-sm">Clear</button>
</div>
```

```js
<script>
  window.addEventListener('load', () =>
    requestAnimationFrame(() => {
      ;(function () {
        const clearBtn = document.querySelector('#clear-btn')

        clearBtn.addEventListener('click', () => {
          const clearSelectBtn = HSSelect.getInstance('#multi-cond-count', true)

          clearSelectBtn.element.setValue([])
        })
      })()
    })
  )
</script>

```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="max-w-sm">
  <select
    data-select='{
    "placeholder": "Select your sign",
    "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
    "toggleClasses": "advance-select-toggle select-disabled:pointer-events-none select-disabled:opacity-40",
    "hasSearch": true,
    "dropdownClasses": "advance-select-menu max-h-52 pt-0 overflow-y-auto",
    "optionClasses": "advance-select-option selected:select-active",
    "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"icon-[componentx--check] shrink-0 size-4 text-primary hidden selected:block \"></span></div>",
    "extraMarkup": "<span class=\"icon-[componentx--caret-up-down] shrink-0 size-4 text-base-content absolute top-1/2 end-3 -translate-y-1/2 \"></span>"
    }'
    class="hidden"
  >
    <option value="">Choose</option>
    <option value="aries">Aries</option>
    <option value="taurus">Taurus</option>
    <option value="gemini">Gemini</option>
    <option value="cancer">Cancer</option>
    <option value="leo">Leo</option>
    <option value="virgo">Virgo</option>
    <option value="libra">Libra</option>
    <option value="scorpio">Scorpio</option>
    <option value="sagittarius">Sagittarius</option>
    <option value="capricorn">Capricorn</option>
    <option value="aquarius">Aquarius</option>
    <option value="pisces">Pisces</option>
  </select>
</div>
```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="max-w-sm">
  <select
    data-select='{
      "hasSearch": true,
      "searchLimit": 5,
      "placeholder": "Select your sign",
      "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
      "toggleClasses": "advance-select-toggle select-disabled:pointer-events-none select-disabled:opacity-40",
      "dropdownClasses": "advance-select-menu max-h-52 pt-0 overflow-y-auto",
      "optionClasses": "advance-select-option selected:select-active",
      "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"icon-[componentx--check] shrink-0 size-4 text-primary hidden selected:block \"></span></div>",
      "extraMarkup": "<span class=\"icon-[componentx--caret-up-down] shrink-0 size-4 text-base-content absolute top-1/2 end-3 -translate-y-1/2 \"></span>"
    }'
    class="hidden"
  >
    <option value="">Choose</option>
    <option value="aries">Aries</option>
    <option value="taurus">Taurus</option>
    <option value="gemini">Gemini</option>
    <option value="cancer">Cancer</option>
    <option value="leo">Leo</option>
    <option value="virgo">Virgo</option>
    <option value="libra">Libra</option>
    <option value="scorpio">Scorpio</option>
    <option value="sagittarius">Sagittarius</option>
    <option value="capricorn">Capricorn</option>
    <option value="aquarius">Aquarius</option>
    <option value="pisces">Pisces</option>
  </select>
</div>
```






I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="max-w-sm">
  <select
    data-select='{
      "hasSearch": true,
      "minSearchLength": 2,
      "placeholder": "Select your sign",
      "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
      "toggleClasses": "advance-select-toggle select-disabled:pointer-events-none select-disabled:opacity-40",
      "dropdownClasses": "advance-select-menu max-h-52 pt-0 overflow-y-auto",
      "optionClasses": "advance-select-option selected:select-active",
      "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"icon-[componentx--check] shrink-0 size-4 text-primary hidden selected:block \"></span></div>",
      "extraMarkup": "<span class=\"icon-[componentx--caret-up-down] shrink-0 size-4 text-base-content absolute top-1/2 end-3 -translate-y-1/2 \"></span>"
    }'
    class="hidden overflow"
  >
    <option value="">Choose</option>
    <option value="AF">Afghanistan</option>
    <option value="AX">Aland Islands</option>
    <option value="AL">Albania</option>
    <option value="DZ">Algeria</option>
    <option value="AS">American Samoa</option>
    <option value="AD">Andorra</option>
    <option value="AO">Angola</option>
    <option value="AI">Anguilla</option>
    <option value="AG">Antigua and Barbuda</option>
    <option value="AR">Argentina</option>
    <option value="AM">Armenia</option>
    <option value="AW">Aruba</option>
    <option value="AU">Australia</option>
    <option value="AT">Austria</option>
    <option value="AZ">Azerbaijan</option>
    <option value="BS">Bahamas</option>
    <option value="BH">Bahrain</option>
    <option value="BD">Bangladesh</option>
    <option value="BB">Barbados</option>
    <option value="BY">Belarus</option>
    <option value="BE">Belgium</option>
    <option value="BZ">Belize</option>
    <option value="BJ">Benin</option>
    <option value="BM">Bermuda</option>
    <option value="BT">Bhutan</option>
    <option value="BO">Bolivia (Plurinational State of)</option>
    <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
    <option value="BA">Bosnia and Herzegovina</option>
    <option value="BW">Botswana</option>
    <option value="BR">Brazil</option>
    <option value="IO">British Indian Ocean Territory</option>
    <option value="BN">Brunei Darussalam</option>
    <option value="BG">Bulgaria</option>
    <option value="BF">Burkina Faso</option>
    <option value="BI">Burundi</option>
    <option value="CV">Cabo Verde</option>
    <option value="KH">Cambodia</option>
    <option value="CM">Cameroon</option>
    <option value="CA">Canada</option>
    <option value="KY">Cayman Islands</option>
    <option value="CF">Central African Republic</option>
    <option value="TD">Chad</option>
    <option value="CL">Chile</option>
    <option value="CN">China</option>
    <option value="CX">Christmas Island</option>
    <option value="CC">Cocos (Keeling) Islands</option>
    <option value="CO">Colombia</option>
    <option value="KM">Comoros</option>
    <option value="CK">Cook Islands</option>
    <option value="CR">Costa Rica</option>
    <option value="HR">Croatia</option>
    <option value="CU">Cuba</option>
    <option value="CW">Curaçao</option>
    <option value="CY">Cyprus</option>
    <option value="CZ">Czech Republic</option>
    <option value="CI">Côte Ivoire</option>
    <option value="CD">Democratic Republic of the Congo</option>
    <option value="DK">Denmark</option>
    <option value="DJ">Djibouti</option>
    <option value="DM">Dominica</option>
    <option value="DO">Dominican Republic</option>
    <option value="EC">Ecuador</option>
    <option value="EG">Egypt</option>
    <option value="SV">El Salvador</option>
    <option value="GB-ENG">England</option>
    <option value="GQ">Equatorial Guinea</option>
    <option value="ER">Eritrea</option>
    <option value="EE">Estonia</option>
    <option value="ET">Ethiopia</option>
    <option value="FK">Falkland Islands</option>
    <option value="FO">Faroe Islands</option>
    <option value="FM">Federated States of Micronesia</option>
    <option value="FJ">Fiji</option>
    <option value="FI">Finland</option>
    <option value="FR">France</option>
  </select>
</div>
```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="max-w-sm">
  <select
    multiple
    data-select='{
      "hasSearch": true,
      "isSearchDirectMatch": false,
      "searchPlaceholder": "Search options...",
      "placeholder": "Select options...",
      "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
      "toggleClasses": "advance-select-toggle select-disabled:pointer-events-none select-disabled:opacity-40",
      "dropdownClasses": "advance-select-menu max-h-48 -ms-1 overflow-y-auto pt-0",
      "optionClasses": "advance-select-option selected:select-active",
      "optionTemplate": "<div class=\"flex items-center\"> <div class=\"size-8 me-2\" data-icon></div><div><div class=\"text-sm font-semibold text-base-content\" data-title></div> <div class=\"text-xs text-base-content/80\" data-description></div></div><div class=\"flex justify-between items-center flex-1\"><span data-title></span><span class=\"icon-[componentx--check] shrink-0 size-4 text-primary hidden selected:block \"></span></div> </div>",
      "extraMarkup": "<span class=\"icon-[componentx--caret-up-down] shrink-0 size-4 text-base-content absolute top-1/2 end-3 -translate-y-1/2 \"></span>"
    }'
    class="hidden"
    aria-label="Advance select"
  >
    <option value="">Choose</option>
    <option
      selected=""
      value="1"
      data-select-option='{
        "icon": "<img class=\"rounded-full\" src=\"https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png\" alt=\"Mark Gilbert\" />"}'
    >
      Mark Gilbert
    </option>
    <option
      value="2"
      data-select-option='{
        "icon": "<img class=\"rounded-full\" src=\"https://cdn.flyonui.com/fy-assets/avatar/avatar-6.png\" alt=\"Eugenia Parsons\" />"}'
    >
      Eugenia Parsons
    </option>
    <option
      value="3"
      data-select-option='{
        "icon": "<img class=\"rounded-full\" src=\"https://cdn.flyonui.com/fy-assets/avatar/avatar-8.png\" alt=\"Francis Byrd\" />"}'
    >
      Francis Byrd
    </option>
    <option
      value="4"
      data-select-option='{
        "icon": "<img class=\"rounded-full\" src=\"https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png\" alt=\"Jayden Rogers\" />"}'
    >
      Mark@Gilbert
    </option>
     <option
      value="5"
      data-select-option='{
        "icon": "<img class=\"rounded-full\" src=\"https://cdn.flyonui.com/fy-assets/avatar/avatar-6.png\" alt=\"Eugenia Parsons\" />"}'
    >
      Eugenia#Parsons
    </option>
    <option
      value="6"
      data-select-option='{
        "icon": "<img class=\"rounded-full\" src=\"https://cdn.flyonui.com/fy-assets/avatar/avatar-8.png\" alt=\"Francis Byrd\" />"}'
    >
      Francis-Byrd
    </option>
    <option
      value="7"
      data-select-option='{
        "icon": "<img class=\"rounded-full\" src=\"https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png\" alt=\"Jayden Rogers\" />"}'
    >
      Mark.Gilbert
    </option>
     <option
      value="8"
      data-select-option='{
        "icon": "<img class=\"rounded-full\" src=\"https://cdn.flyonui.com/fy-assets/avatar/avatar-6.png\" alt=\"Eugenia Parsons\" />"}'
    >
      Eugenia_Parsons
    </option>
    <option
      value="9"
      data-select-option='{
        "icon": "<img class=\"rounded-full\" src=\"https://cdn.flyonui.com/fy-assets/avatar/avatar-8.png\" alt=\"Francis Byrd\" />"}'
    >
      Francis%Byrd
    </option>
    </option>
    <option
      value="7"
      data-select-option='{
        "icon": "<img class=\"rounded-full\" src=\"https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png\" alt=\"Jayden Rogers\" />"}'
    >
      Ma@rk Gilbert
    </option>
     <option
      value="8"
      data-select-option='{
        "icon": "<img class=\"rounded-full\" src=\"https://cdn.flyonui.com/fy-assets/avatar/avatar-6.png\" alt=\"Eugenia Parsons\" />"}'
    >
      Eugenia Par-sons
    </option>
    <option
      value="9"
      data-select-option='{
        "icon": "<img class=\"rounded-full\" src=\"https://cdn.flyonui.com/fy-assets/avatar/avatar-8.png\" alt=\"Francis Byrd\" />"}'
    >
      Francis B#yrd
    </option>
  </select>
</div>
```











I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="max-w-sm">
  <select
    multiple
    data-select='{
    "placeholder": "Select option...",
    "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
    "toggleClasses": "advance-select-toggle select-disabled:pointer-events-none select-disabled:opacity-40",
    "dropdownClasses": "advance-select-menu max-h-48 -ms-1 overflow-y-auto",
    "optionClasses": "advance-select-option selected:select-active",
    "mode": "tags",
    "wrapperClasses": "advance-select-tag flex-wrap",
    "tagsItemTemplate": " <div class=\"flex flex-nowrap items-center relative z-10 bg-base-100 border border-base-content/25 rounded-full p-1 m-1\"> <div class=\"size-6 me-1\" data-icon></div> <div class=\"whitespace-nowrap text-base-content\" data-title></div> <div class=\"btn btn-sm min-h-0 size-5 btn-circle btn-soft btn-secondary ms-2 \" data-remove><span class=\"icon-[componentx--x] shrink-0 size-3.5\"></span></div> </div>",
    "tagsInputClasses": "py-2.5 px-2 rounded-lg order-1 text-sm outline-none",
    "optionTemplate": "<div class=\"flex items-center\"> <div class=\"size-8 me-2\" data-icon></div><div><div class=\"text-sm font-semibold text-base-content\" data-title></div> <div class=\"text-xs text-base-content/80\" data-description></div></div><div class=\"flex justify-between items-center flex-1\"><span data-title></span><span class=\"icon-[componentx--check] shrink-0 size-4 text-primary hidden selected:block \"></span></div> </div>",
    "extraMarkup": "<span class=\"icon-[componentx--caret-up-down] shrink-0 size-4 text-base-content absolute top-1/2 end-3 -translate-y-1/2 \"></span>"
    }'
    class="hidden"
    aria-label="Advance select"
  >
    <option value="">Choose</option>
    <option
      selected=""
      value="1"
      data-select-option='{
        "description": "mark",
        "icon": "<img class=\"rounded-full\" src=\"https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png\" alt=\"Mark Gilbert\" />"}'
    >
      Mark Gilbert
    </option>
    <option
      value="2"
      data-select-option='{
        "description": "eug",
        "icon": "<img class=\"rounded-full\" src=\"https://cdn.flyonui.com/fy-assets/avatar/avatar-6.png\" alt=\"Eugenia Parsons\" />"}'
    >
      Eugenia Parsons
    </option>
    <option
      value="3"
      data-select-option='{
        "description": "francis",
        "icon": "<img class=\"rounded-full\" src=\"https://cdn.flyonui.com/fy-assets/avatar/avatar-8.png\" alt=\"Francis Byrd\" />"}'
    >
      Francis Byrd
    </option>
    <option
      value="4"
      data-select-option='{
        "description": "rogers",
        "icon": "<img class=\"rounded-full\" src=\"https://cdn.flyonui.com/fy-assets/avatar/avatar-3.png\" alt=\"Jayden Rogers\" />"}'
    >
      Jayden Rogers
    </option>
  </select>
</div>
```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="max-w-sm">
  <select
    data-select='{
    "placeholder": "Select option...",
    "toggleTag": "<button type=\"button\" aria-expanded=\"false\"><span class=\"me-2 flex\" data-icon></span><span class=\"text-base-content\" data-title></span></button>",
    "toggleClasses": "advance-select-toggle items-center",
    "dropdownClasses": "advance-select-menu max-h-44",
    "optionClasses": "advance-select-option selected:select-active",
    "optionTemplate": "<div><div class=\"flex items-center\"> <div class=\"me-2 flex\" data-icon></div> <div class=\"font-semibold text-base-content\" data-title></div> </div> <div class=\"mt-1.5 text-sm text-base-content/80\" data-description></div> </div>",
    "extraMarkup": "<span class=\"icon-[componentx--caret-up-down] shrink-0 size-4 text-base-content absolute top-1/2 end-3 -translate-y-1/2 \"></span>"
    }'
    class="hidden"
  >
    <option value="">Choose</option>
    <option
      value="5"
      selected
      data-select-option='{
        "description": "Recommended for beginners.",
        "icon": "<span class=\"icon-[componentx--circle-check] shrink-0 size-4 text-base-content\"></span>"}'
    >
      Beginner-friendly
    </option>
    <option
      value="6"
      data-select-option='{
        "description": "Suitable for advanced users.",
        "icon": "<span class=\"icon-[componentx--target] shrink-0 size-4 text-base-content\"></span>"}'
    >
      Advanced users
    </option>
  </select>
</div>
```





I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="max-w-sm">
  <select
    data-select='{
    "placeholder": "Select option...",
    "toggleTag": "<button type=\"button\" aria-expanded=\"false\"><span class=\"size-6 me-2\" data-icon></span><span class=\"text-base-content\" data-title></span></button>",
    "toggleClasses": "advance-select-toggle items-center",
    "dropdownClasses": "advance-select-menu max-h-44 overflow-y-auto",
    "optionClasses": "advance-select-option selected:select-active",
    "optionTemplate": "<div class=\"flex items-start\"> <div class=\"size-6 me-2\" data-icon></div> <div> <div class=\"text-base-content\" data-title></div><div></div>",
    "extraMarkup": "<span class=\"icon-[componentx--caret-up-down] shrink-0 size-4 text-base-content absolute top-1/2 end-3 -translate-y-1/2 \"></span>"
    }'
    class="hidden"
  >
    <option value="">Choose</option>
    <option
      selected=""
      value="1"
      data-select-option='{ "icon": "<img class=\"rounded-full\" src=\"https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png\" alt=\"Mark Gilbert\" />"}'
    >
      Mark Gilbert
    </option>
    <option
      value="2"
      data-select-option='{ "icon": "<img class=\"rounded-full\" src=\"https://cdn.flyonui.com/fy-assets/avatar/avatar-6.png\" alt=\"Eugenia Parsons\" />"}'
    >
      Eugenia Parsons
    </option>
    <option
      value="3"
      data-select-option='{ "icon": "<img class=\"rounded-full\" src=\"https://cdn.flyonui.com/fy-assets/avatar/avatar-8.png\" alt=\"Francis Byrd\" />"}'
    >
      Francis Byrd
    </option>
    <option
      value="4"
      data-select-option='{ "icon": "<img class=\"rounded-full\" src=\"https://cdn.flyonui.com/fy-assets/avatar/avatar-3.png\" alt=\"Jayden Rogers\" />"}'
    >
      Jayden Rogers
    </option>
  </select>
</div>
```





I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<button type="button" class="btn btn-primary" aria-haspopup="dialog" aria-expanded="false" aria-controls="select-modal" data-overlay="#select-modal" > Open modal </button>

<div id="select-modal" class="overlay modal overlay-open:opacity-100 overlay-open:duration-300 hidden" role="dialog" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title">Dialog Title</h3>
        <button type="button" class="btn btn-text btn-circle btn-sm absolute end-3 top-3" aria-label="Close" data-overlay="#select-modal" >
          <span class="icon-[componentx--x] size-4"></span>
        </button>
      </div>
      <div class="modal-body h-72">
        <select
          data-select='{
          "placeholder": "Select option...",
          "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
          "toggleClasses": "advance-select-toggle mt-0.5",
          "dropdownClasses": "advance-select-menu shadow-none border border-base-content/25",
          "optionClasses": "advance-select-option selected:select-active",
          "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"icon-[componentx--check] shrink-0 size-4 text-primary hidden selected:block \"></span></div>",
          "extraMarkup": "<span class=\"icon-[componentx--caret-up-down] shrink-0 size-4 text-base-content absolute top-1/2 end-3 -translate-y-1/2 \"></span>"
          }'
          class="hidden"
        >
          <option value="">Choose</option>
          <option value="name">Full Name</option>
          <option value="email">Email Address</option>
          <option value="description">Project Description</option>
          <option value="user_id">User Identification Number</option>
        </select>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-soft btn-secondary" data-overlay="#select-modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
```






I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="mb-4 flex gap-3">
  <button class="btn btn-primary" id="add-option">Add</button>
  <button class="btn btn-primary" id="remove-option">Remove</button>
</div>
<div class="max-w-sm">
  <select
    id="add-remove-select"
    data-select='{
    "placeholder": "Select option...",
    "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
    "toggleClasses": "advance-select-toggle select-disabled:pointer-events-none select-disabled:opacity-40",
    "dropdownClasses": "advance-select-menu max-h-48 overflow-y-auto",
    "optionClasses": "advance-select-option selected:select-active",
    "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"icon-[componentx--check] shrink-0 size-4 text-primary hidden selected:block \"></span></div>",
    "extraMarkup": "<span class=\"icon-[componentx--caret-up-down] shrink-0 size-4 text-base-content absolute top-1/2 end-3 -translate-y-1/2 \"></span>"
    }'
    class="hidden"
  >
    <option value="">Choose</option>
    <option value="name">Full Name</option>
    <option value="email">Email Address</option>
    <option value="description">Project Description</option>
    <option value="user_id">User Identification Number</option>
  </select>
</div>
```

```js
<script>
  window.addEventListener('load', () =>
    requestAnimationFrame(() => {
      const addRemove = window.HSSelect.getInstance('#add-remove-select')
      const addOptionsBtn = document.querySelector('#add-option')
      const removeOptionsBtn = document.querySelector('#remove-option')

      addOptionsBtn.addEventListener('click', () => {
        addRemove.addOption([
          {
            title: 'James Collins',
            val: '1'
          },
          {
            title: 'Amanda Harvey',
            val: '2'
          }
        ])
      })

      removeOptionsBtn.addEventListener('click', () => {
        addRemove.removeOption(['1', '2'])
      })
    })
  )
</script>

```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="max-w-sm">
  <select
    id="destroy-select"
    data-select='{
    "placeholder": "Select option...",
    "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
    "toggleClasses": "advance-select-toggle select-disabled:pointer-events-none select-disabled:opacity-40",
    "dropdownClasses": "advance-select-menu",
    "optionClasses": "advance-select-option selected:select-active",
    "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"icon-[componentx--check] shrink-0 size-4 text-primary hidden selected:block \"></span></div>",
    "extraMarkup": "<span id=\"select-icon\" class=\"icon-[componentx--caret-up-down] shrink-0 size-4 text-base-content absolute top-1/2 end-3 -translate-y-1/2 \"></span>"
    }'
    class="hidden"
  >
    <option value="">Choose</option>
    <option value="name">Full Name</option>
    <option value="email">Email Address</option>
    <option value="description">Project Description</option>
    <option value="user_id">User Identification Number</option>
  </select>
</div>
<div class="mt-4 flex gap-3">
  <button class="btn btn-primary" id="destroy-btn">Destroy</button>
  <button class="btn btn-primary" id="reinit-btn" disabled>Reinitialize</button>
</div>
```

```js
<script>
  window.addEventListener('load', () =>
    requestAnimationFrame(() => {
      const destroyBtn = document.querySelector('#destroy-btn')
      const reinitBtn = document.querySelector('#reinit-btn')
      const selectEl = document.querySelector('#destroy-select')
      const selectToggleIcon = document.querySelector('#select-icon')
      const destroySelect = window.HSSelect.getInstance('#destroy-select')

      // destroy and reinit select
      destroyBtn.addEventListener('click', () => {
        destroySelect.destroy()
        selectToggleIcon.style.display = 'none'

        reinitBtn.removeAttribute('disabled')
        destroyBtn.setAttribute('disabled', true)
      })

      reinitBtn.addEventListener('click', () => {
        new HSSelect(selectEl)
        selectToggleIcon.style.display = ''

        reinitBtn.setAttribute('disabled', true)
        destroyBtn.removeAttribute('disabled')
      })
    })
  )
</script>

```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="max-w-sm">
  <!-- Select -->
  <select
    id="single-setter"
    data-select='{
    "placeholder": "Select with button",
    "toggleTag": "<button type=\"button\" aria-expanded=\"false\"><span class=\"size-6 me-2\" data-icon></span><span class=\"text-base-content\" data-title></span></button>",
    "toggleClasses": "advance-select-toggle select-disabled:pointer-events-none select-disabled:opacity-40",
    "dropdownClasses": "advance-select-menu",
    "optionClasses": "advance-select-option selected:select-active",
    "optionTemplate": "<div class=\"flex items-start\"> <div class=\"size-6 me-2\" data-icon></div> <div> <div class=\"text-base-content\" data-title></div><div></div>",
    "extraMarkup": "<span id=\"select-icon\" class=\"icon-[componentx--caret-up-down] shrink-0 size-4 text-base-content absolute top-1/2 end-3 -translate-y-1/2 \"></span>"
  }'
    class="hidden"
  >
    <option value="">Choose</option>
    <option
      selected=""
      value="1"
      data-select-option='{ "icon": "<img class=\"rounded-full\" src=\"https://cdn.flyonui.com/fy-assets/avatar/avatar-5.png\" alt=\"Ethan Caldwell\" />"}'
    >
      Ethan Caldwell
    </option>
    <option
      value="2"
      data-select-option='{ "icon": "<img class=\"rounded-full\" src=\"https://cdn.flyonui.com/fy-assets/avatar/avatar-2.png\" alt=\"Isabella Martinez\" />"}'
    >
      Isabella Martinez
    </option>
    <option
      value="3"
      data-select-option='{ "icon": "<img class=\"rounded-full\" src=\"https://cdn.flyonui.com/fy-assets/avatar/avatar-8.png\" alt=\"Ava Thompson\" />"}'
    >
      Ava Thompson
    </option>
  </select>
  <!-- End Select -->
</div>

<div class="mt-4 flex flex-wrap gap-2">
  <button type="button" id="set-to-2" class="btn btn-sm btn-primary">
    Set value to "Isabella Martinez"
  </button>
  <button type="button" id="set-to-3" class="btn btn-sm btn-primary">Set value to "Ava Thompson"</button>
</div>

<div class="mt-3 flex flex-wrap gap-2">
  <button type="button" id="reset-single-value" class="btn btn-sm btn-soft btn-secondary">Reset value</button>
</div>
```

```js
<script>
  window.addEventListener('load', () =>
    requestAnimationFrame(() => {
      const setTo2 = document.querySelector('#set-to-2')
      const setTo3 = document.querySelector('#set-to-3')
      const resetValue = document.querySelector('#reset-single-value')
      const setSelect = window.HSSelect.getInstance('#single-setter')

      setTo2.addEventListener('click', () => {
        setSelect.setValue('2')
      })

      setTo3.addEventListener('click', () => {
        setSelect.setValue('3')
      })

      resetValue.addEventListener('click', () => {
        setSelect.setValue('')
      })
    })
  )
</script>

```





I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="max-w-sm">
  <!-- Select -->
  <select
    id="multiple-setter"
    multiple=""
    data-select='{
      "placeholder": "Select multiple option with button",
      "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
      "toggleClasses": "advance-select-toggle select-disabled:pointer-events-none select-disabled:opacity-40",
      "dropdownClasses": "advance-select-menu",
      "optionClasses": "advance-select-option selected:select-active",
      "optionTemplate": "<div class=\"flex items-start\"> <div class=\"size-6 me-2\" data-icon></div> <div> <div class=\"text-base-content\" data-title></div><div></div>",
      "extraMarkup": "<span id=\"select-icon\" class=\"icon-[componentx--caret-up-down] shrink-0 size-4 text-base-content absolute top-1/2 end-3 -translate-y-1/2 \"></span>"
    }'
    class="hidden"
  >
    <option value="">Choose</option>
    <option
      value="1"
      data-select-option='{ "icon": "<img class=\"rounded-full\" src=\"https://cdn.flyonui.com/fy-assets/avatar/avatar-5.png\" alt=\"Ethan Caldwell\" />"}'
    >
      Ethan Caldwell
    </option>
    <option
      value="2"
      data-select-option='{ "icon": "<img class=\"rounded-full\" src=\"https://cdn.flyonui.com/fy-assets/avatar/avatar-2.png\" alt=\"Isabella Martinez\" />"}'
    >
      Isabella Martinez
    </option>
    <option
      value="3"
      data-select-option='{ "icon": "<img class=\"rounded-full\" src=\"https://cdn.flyonui.com/fy-assets/avatar/avatar-8.png\" alt=\"Ava Thompson\" />"}'
    >
      Ava Thompson
    </option>
  </select>
</div>

<div class="mt-4 flex flex-wrap gap-2">
  <button type="button" id="set-to-1-and-2" class="btn btn-sm btn-primary">
    Set value to "Isabella Martinez" and ""
  </button>
  <button type="button" id="set-to-2-and-3" class="btn btn-sm btn-primary">
    Set value to "Ava Thompson" and ""
  </button>
</div>
<div class="mt-3 flex flex-wrap gap-2">
  <button type="button" id="reset-multiple-value" class="btn btn-sm btn-soft btn-secondary">Reset value</button>
</div>
```

```js
<script>
  window.addEventListener('load', () =>
    requestAnimationFrame(() => {
      const setTo1and2 = document.querySelector('#set-to-1-and-2')
      const setTo2and3 = document.querySelector('#set-to-2-and-3')
      const resetValueMulti = document.querySelector('#reset-multiple-value')
      const setSelectMulti = window.HSSelect.getInstance('#multiple-setter')

      setTo1and2.addEventListener('click', () => {
        setSelectMulti.setValue(['1', '2'])
      })

      setTo2and3.addEventListener('click', () => {
        setSelectMulti.setValue(['2', '3'])
      })

      resetValueMulti.addEventListener('click', () => {
        setSelectMulti.setValue([])
      })
    })
  )
</script>

```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="max-w-sm">
  <select
    data-select='{
      "apiUrl": "https://fakestoreapi.com/products",
      "apiQuery": "limit=10",
      "apiFieldsMap": {
        "id": "id",
        "val": "id",
        "title": "title",
        "icon": "image",
        "description": "description"
      },
      "apiIconTag": "<img />",
      "hasSearch": true,
      "searchPlaceholder": "Search...",
      "placeholder": "Select product...",
      "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
      "toggleClasses": "advance-select-toggle select-disabled:pointer-events-none select-disabled:opacity-40",
      "dropdownClasses": "advance-select-menu max-h-48 pt-0 overflow-y-auto",
      "optionClasses": "advance-select-option selected:select-active",
      "optionTemplate": "<div class=\"flex items-center gap-2\"><div class=\"size-8 overflow-hidden flex-none rounded-full\" data-icon></div><div><div class=\"text-sm font-semibold\" data-title></div><div class=\"text-xs \" data-description></div></div><span class=\"icon-[componentx--check] shrink-0 size-4 text-primary hidden selected:block \"></span></div>",
      "extraMarkup": "<span id=\"select-icon\" class=\"icon-[componentx--caret-up-down] shrink-0 size-4 text-base-content absolute top-1/2 end-3 -translate-y-1/2 \"></span>"
    }'
    class="hidden">
    <option value="">Choose</option>
  </select>
</div>
```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="max-w-sm">
  <select
    multiple
    data-select='{
      "apiUrl": "https://fakestoreapi.com/products",
      "apiQuery": "limit=10",
      "apiFieldsMap": {
        "id": "id",
        "val": "id",
        "title": "title",
        "icon": "image",
        "description": "description"
      },
      "apiIconTag": "<img />",
      "placeholder": "Select product...",
      "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
      "toggleClasses": "advance-select-toggle select-disabled:pointer-events-none select-disabled:opacity-40",
      "dropdownClasses": "advance-select-menu max-h-48 pt-0 overflow-y-auto",
      "optionClasses": "advance-select-option selected:select-active",
      "optionTemplate": "<div class=\"flex items-center gap-2\"><div class=\"size-8 overflow-hidden flex-none rounded-full\" data-icon></div><div><div class=\"text-sm font-semibold\" data-title></div><div class=\"text-xs \" data-description></div></div><span class=\"icon-[componentx--check] shrink-0 size-4 text-primary hidden selected:block \"></span></div>",
      "extraMarkup": "<span id=\"select-icon\" class=\"icon-[componentx--caret-up-down] shrink-0 size-4 text-base-content absolute top-1/2 end-3 -translate-y-1/2 \"></span>"
    }'
    class="hidden">
    <option value="">Choose</option>
  </select>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="max-w-sm">
  <select
    multiple
    data-select='{
      "apiUrl": "https://fakestoreapi.com/products",
      "apiQuery": "limit=10",
      "apiFieldsMap": {
        "id": "id",
        "val": "id",
        "title": "title",
        "icon": "image",
        "description": "description"
      },
      "apiIconTag": "<img />",
      "placeholder": "Select product...",
      "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
      "toggleClasses": "advance-select-toggle select-disabled:pointer-events-none select-disabled:opacity-40",
      "mode": "tags",
      "wrapperClasses": "advance-select-tag text-wrap flex-wrap",
      "tagsItemTemplate": " <div class=\"flex flex-nowrap items-center relative z-10 bg-base-100 border border-base-content/25 rounded-full p-1 m-1\"> <div class=\"size-6 overflow-hidden flex-none rounded-full me-1\" data-icon></div> <div class=\"truncate whitespace-break-spaces text-base-content\" data-title></div> <div class=\"btn btn-sm min-h-0 size-5 btn-circle btn-soft btn-secondary ms-2 \" data-remove><span class=\"icon-[componentx--x] shrink-0 size-3.5\"></span></div> </div>",
      "tagsInputClasses": "py-2.5 px-2 rounded-lg order-1 text-sm outline-none",
      "dropdownClasses": "advance-select-menu max-h-48 pt-0 overflow-y-auto",
      "optionClasses": "advance-select-option selected:select-active",
      "optionTemplate": "<div class=\"flex items-center gap-2\"><div class=\"size-8 overflow-hidden flex-none rounded-full\" data-icon></div><div><div class=\"text-sm font-semibold\" data-title></div><div class=\"text-xs \" data-description></div></div> <span class=\"icon-[componentx--check] shrink-0 size-4 text-primary hidden selected:block \"></span></div>",
      "extraMarkup": "<span id=\"select-icon\" class=\"icon-[componentx--caret-up-down] shrink-0 size-4 text-base-content absolute top-1/2 end-3 -translate-y-1/2 \"></span>"
    }'
    class="hidden">
    <option value="">Choose</option>
  </select>
</div>
```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="max-w-sm">
  <select
    multiple
    data-select='{
      "apiUrl": "https://fakestoreapi.com/products",
      "apiQuery": "limit=10",
      "apiFieldsMap": {
        "id": "id",
        "title": "title"
      },
      "apiIconTag": "<img />",
      "placeholder": "Select product...",
      "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
      "toggleClasses": "advance-select-toggle select-disabled:pointer-events-none select-disabled:opacity-40",
      "toggleCountText": "selected",
      "toggleCountTextMinItems": 2,
      "dropdownClasses": "advance-select-menu max-h-48 pt-0 overflow-y-auto",
      "optionClasses": "advance-select-option selected:select-active",
      "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"icon-[componentx--check] shrink-0 size-4 text-primary hidden selected:block \"></span></div>",
      "extraMarkup": "<span id=\"select-icon\" class=\"icon-[componentx--caret-up-down] shrink-0 size-4 text-base-content absolute top-1/2 end-3 -translate-y-1/2 \"></span>"
    }'
    class="hidden">
  
    <option value="">Choose</option>
  </select>
</div>
```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="max-w-sm">
  <select
    id="remote-multi-cond-count"
    multiple
    data-select='{
      "apiUrl": "https://fakestoreapi.com/products",
      "apiQuery": "limit=10",
      "apiFieldsMap": {
        "id": "id",
        "title": "title"
      },
      "apiIconTag": "<img />",
      "searchPlaceholder": "Search...",
      "placeholder": "Select product...",
      "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
      "toggleClasses": "advance-select-toggle select-disabled:pointer-events-none select-disabled:opacity-40",
      "toggleSeparators": {
        "betweenItemsAndCounter": "&"
      },
      "toggleCountText": "selected",
      "toggleCountTextMinItems": 2,
      "toggleCountTextMode": "nItemsAndCount",
      "dropdownClasses": "advance-select-menu max-h-48 pt-0 overflow-y-auto",
      "optionClasses": "advance-select-option selected:select-active",
      "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"icon-[componentx--check] shrink-0 size-4 text-primary hidden selected:block \"></span></div>",
      "extraMarkup": "<span id=\"select-icon\" class=\"icon-[componentx--caret-up-down] shrink-0 size-4 text-base-content absolute top-1/2 end-3 -translate-y-1/2 \"></span>"
    }'
    class="hidden">
    <option value="">Choose</option>
  </select>
</div>
<!-- Clear Button -->
<div class="mt-4 flex flex-wrap gap-2">
  <button type="button" id="remote-clear-btn" class="btn btn-outline btn-primary btn-sm">Clear</button>
</div>
```

```js
<script>
  window.addEventListener('load', () =>
    requestAnimationFrame(() => {
      ;(function () {
        const clearBtn = document.querySelector('#remote-clear-btn')

        clearBtn.addEventListener('click', () => {
          const clearSelectBtn = HSSelect.getInstance('#remote-multi-cond-count', true)

          clearSelectBtn.element.setValue([])
        })
      })()
    })
  )
</script>


```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="max-w-sm">
  <select 
    data-select='{
      "apiUrl": "https://fakestoreapi.com/products",
      "apiQuery": "limit=10",
      "apiFieldsMap": {
        "id": "id",
        "val": "id",
        "title": "title",
        "icon": "image"
      },
      "apiIconTag": "<img />",
      "placeholder": "Select product...",
      "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
      "toggleClasses": "advance-select-toggle select-disabled:pointer-events-none select-disabled:opacity-40",
      "dropdownClasses": "advance-select-menu max-h-48 pt-0 overflow-y-auto",
      "optionClasses": "advance-select-option selected:select-active",
      "optionTemplate": "<div class=\"flex items-center gap-2\"><div class=\"size-8 overflow-hidden flex-none rounded-full\" data-icon></div><div class=\"text-sm font-semibold\" data-title></div><span class=\"icon-[componentx--check] shrink-0 size-4 text-primary hidden selected:block \"></span></div>",
      "extraMarkup": "<span id=\"select-icon\" class=\"icon-[componentx--caret-up-down] shrink-0 size-4 text-base-content absolute top-1/2 end-3 -translate-y-1/2 \"></span>"
    }' 
    class="hidden"
  >
    <option value="">Choose</option>
  </select>
</div>
```






I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<button type="button" class="btn btn-primary" aria-haspopup="dialog" aria-expanded="false" aria-controls="overflow-animation-modal" data-overlay="#overflow-animation-modal" > Open modal </button>

<div id="overflow-animation-modal" class="overlay modal overlay-open:opacity-100 overlay-open:duration-300 hidden" role="dialog" tabindex="-1" aria-labelledby="overflow-animation-modal-label" >
  <div class="overlay-animation-target modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title">Dialog Title</h3>
        <button type="button" class="btn btn-text btn-circle btn-sm absolute end-3 top-3" aria-label="Close" data-overlay="#overflow-animation-modal" >
          <span class="icon-[componentx--x] size-4"></span>
        </button>
      </div>
      <div class="space-y-3 overflow-y-auto p-4">
        <!-- Select -->
        <select
          data-select='{
            "placeholder": "Select option...",
            "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
            "toggleClasses": "advance-select-toggle select-disabled:pointer-events-none select-disabled:opacity-40",
            "dropdownClasses": "advance-select-menu z-80 w-full",
            "dropdownScope": "window",
            "optionClasses": "advance-select-option selected:select-active",
            "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"icon-[componentx--check] shrink-0 size-4 text-primary hidden selected:block \"></span></div>",
            "extraMarkup": "<span class=\"icon-[componentx--caret-up-down] shrink-0 size-4 text-base-content absolute top-1/2 end-3 -translate-y-1/2 \"></span>"
            }'
          class="hidden" >
          <option value="">Choose</option>
          <option value="name">Full Name</option>
          <option value="email">Email Address</option>
          <option value="description">Project Description</option>
          <option value="user_id">User Identification Number</option>
        </select>
        <!-- End Select -->
        <!-- Select -->
        <select
          multiple
          data-select='{
            "placeholder": "Select multiple options...",
            "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
            "toggleClasses": "advance-select-toggle select-disabled:pointer-events-none select-disabled:opacity-40",
            "dropdownClasses": "advance-select-menu z-80 w-full",
            "dropdownScope": "window",
            "optionClasses": "advance-select-option selected:select-active",
            "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"icon-[componentx--check] shrink-0 size-4 text-primary hidden selected:block \"></span></div>",
            "extraMarkup": "<span class=\"icon-[componentx--caret-up-down] shrink-0 size-4 text-base-content absolute top-1/2 end-3 -translate-y-1/2 \"></span>"
            }' class="hidden" >
          <option value="">Choose</option>
          <option value="name">Full Name</option>
          <option value="email">Email Address</option>
          <option value="description">Project Description</option>
          <option value="user_id">User Identification Number</option>
        </select>
        <!-- End Select -->
        <!-- Select -->
        <label class="hidden" for="tags-modal">Tags modal label</label>
        <select
          multiple
          data-select='{
            "placeholder": "Select option...",
            "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
            "toggleClasses": "advance-select-toggle select-disabled:pointer-events-none select-disabled:opacity-40",
            "dropdownClasses": "advance-select-menu w-full z-80 max-h-48 -ms-1 overflow-y-auto",
            "optionClasses": "advance-select-option selected:select-active",
            "mode": "tags",
            "dropdownScope": "window",
            "wrapperClasses": "advance-select-tag flex-wrap",
            "tagsItemTemplate": " <div class=\"flex flex-nowrap items-center relative z-10 bg-base-100 border border-base-content/25 rounded-full p-1 m-1\"> <div class=\"size-6 me-1\" data-icon></div> <div class=\"whitespace-nowrap text-base-content\" data-title></div> <div class=\"btn btn-sm min-h-0 size-5 btn-circle btn-soft btn-secondary ms-2 \" data-remove><span class=\"icon-[componentx--x] shrink-0 size-3.5\"></span></div> </div>",
            "tagsInputClasses": "py-2.5 px-2 rounded-lg order-1 text-sm outline-none",
            "optionTemplate": "<div class=\"flex items-center\"> <div class=\"size-8 me-2\" data-icon></div><div><div class=\"text-sm font-semibold text-base-content\" data-title></div> <div class=\"text-xs text-base-content/80\" data-description></div></div><div class=\"flex justify-between items-center flex-1\"><span data-title></span><span class=\"icon-[componentx--check] shrink-0 size-4 text-primary hidden selected:block \"></span></div> </div>",
            "extraMarkup": "<span class=\"icon-[componentx--caret-up-down] shrink-0 size-4 text-base-content absolute top-1/2 end-3 -translate-y-1/2 \"></span>"
            }'
          class="hidden" aria-label="Advance select" id="tags-modal" >
          <option value="">Choose</option>
          <option
            selected=""
            value="1"
            data-select-option='{
              "description": "mark",
              "icon": "<img class=\"rounded-full\" src=\"https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png\" alt=\"Mark Gilbert\" />"}'
                  >
            Mark Gilbert
          </option>
          <option
            value="2"
            data-select-option='{
              "description": "eug",
              "icon": "<img class=\"rounded-full\" src=\"https://cdn.flyonui.com/fy-assets/avatar/avatar-6.png\" alt=\"Eugenia Parsons\" />"}'>
            Eugenia Parsons
          </option>
          <option
            value="3"
            data-select-option='{
              "description": "francis",
              "icon": "<img class=\"rounded-full\" src=\"https://cdn.flyonui.com/fy-assets/avatar/avatar-8.png\" alt=\"Francis Byrd\" />"}'>
            Francis Byrd
          </option>
          <option
            value="4"
            data-select-option='{
              "description": "rogers",
              "icon": "<img class=\"rounded-full\" src=\"https://cdn.flyonui.com/fy-assets/avatar/avatar-3.png\" alt=\"Jayden Rogers\" />"}'>
            Jayden Rogers
          </option>
        </select>
        <!-- End Select -->
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-soft btn-secondary" data-overlay="#overflow-animation-modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<button class="btn btn-primary mb-4" id="open-btn">Open</button>

<div class="max-w-sm">
  <select
    id="method-select"
    data-select='{
    "placeholder": "Select option...",
    "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
    "toggleClasses": "advance-select-toggle select-disabled:pointer-events-none select-disabled:opacity-40",
    "dropdownClasses": "advance-select-menu max-h-44 overflow-y-auto",
    "optionClasses": "advance-select-option selected:select-active",
    "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"icon-[componentx--check] shrink-0 size-4 text-primary hidden selected:block \"></span></div>",
    "extraMarkup": "<span class=\"icon-[componentx--caret-up-down] shrink-0 size-4 text-base-content absolute top-1/2 end-3 -translate-y-1/2 \"></span>"
    }'
    class="--prevent-on-load-init hidden"
  >
    <option value="">Choose</option>
    <option value="name">Full Name</option>
    <option value="email">Email Address</option>
    <option value="description">Project Description</option>
    <option value="user_id">User Identification Number</option>
  </select>
</div>
```

```js
<script>
  window.addEventListener('load', () =>
    requestAnimationFrame(() => {
      const select = new HSSelect(document.querySelector('#method-select'))
      const openBtn = document.querySelector('#open-btn')

      //Method usage
      openBtn.addEventListener('click', () => {
        select.open()
      })
    })
  )
</script>


```





I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="max-w-sm">
  <select
    id="event-select"
    data-select='{
    "placeholder": "Select option...",
    "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
    "toggleClasses": "advance-select-toggle select-disabled:pointer-events-none select-disabled:opacity-40",
    "dropdownClasses": "advance-select-menu",
    "optionClasses": "advance-select-option selected:select-active",
    "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"icon-[componentx--check] shrink-0 size-4 text-primary hidden selected:block \"></span></div>",
    "extraMarkup": "<span class=\"icon-[componentx--caret-up-down] shrink-0 size-4 text-base-content absolute top-1/2 end-3 -translate-y-1/2 \"></span>"
    }'
    class="hidden"
  >
    <option value="">Choose</option>
    <option value="name">Full Name</option>
    <option value="email">Email Address</option>
    <option value="description">Project Description</option>
    <option value="user_id">User Identification Number</option>
  </select>
</div>
```

```js
<script>
  window.addEventListener('load', () =>
    requestAnimationFrame(() => {
      const el = HSSelect.getInstance('#event-select')
      //Event usage
      el.on('change', instance => {
        console.log('selected')
      })
    })
  )
</script>


```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
