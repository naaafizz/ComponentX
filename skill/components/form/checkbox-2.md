---
name: "Checkbox"
library: "ComponentX"
id: "checkbox-2"
type: "form"
quality: "standard"
tags: ["button", "form", "input", "menu", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Checkbox

> **Type:** `form` · **Quality:** `standard` · **ID:** `checkbox-2`
> **Path:** `components/form/checkbox-2.md`

**Checkbox** is a premium, production-ready component from the **ComponentX** library — engineered for form interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `button`, `form`, `input` workflows.
- **Pattern coverage** — includes `menu`, `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Checkbox** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
<div class="flex items-center gap-1">
  <input type="checkbox" class="checkbox" id="defaultCheckbox1" />
  <label class="label-text text-base" for="defaultCheckbox1">Default</label>
</div>
<div class="flex items-center gap-1">
  <input type="checkbox" class="checkbox" id="defaultCheckbox2" checked />
  <label class="label-text text-base" for="defaultCheckbox2">Checked</label>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex items-center gap-1">
  <input type="checkbox" class="checkbox" id="checkboxDefault" checked />
  <label class="label-text text-base" for="checkboxDefault"> Default </label>
</div>
<div class="flex items-center gap-1">
  <input type="checkbox" class="checkbox checkbox-primary" id="checkboxPrimary" checked />
  <label class="label-text text-base" for="checkboxPrimary"> Primary </label>
</div>
<div class="flex items-center gap-1">
  <input type="checkbox" class="checkbox checkbox-secondary" id="checkboxSecondary" checked />
  <label class="label-text text-base " for="checkboxSecondary"> Secondary </label>
</div>
<div class="flex items-center gap-1">
  <input type="checkbox" class="checkbox checkbox-accent" id="checkboxAccent" checked />
  <label class="label-text text-base" for="checkboxAccent"> Accent </label>
</div>
<div class="flex items-center gap-1">
  <input type="checkbox" class="checkbox checkbox-info" id="checkboxInfo" checked />
  <label class="label-text text-base" for="checkboxInfo"> Info </label>
</div>
<div class="flex items-center gap-1">
  <input type="checkbox" class="checkbox checkbox-success" id="checkboxSuccess" checked />
  <label class="label-text text-base" for="checkboxSuccess"> Success </label>
</div>
<div class="flex items-center gap-1">
  <input type="checkbox" class="checkbox checkbox-warning" id="checkboxWarning" checked />
  <label class="label-text text-base" for="checkboxWarning"> Warning </label>
</div>
<div class="flex items-center gap-1">
  <input type="checkbox" class="checkbox checkbox-error" id="checkboxError" checked />
  <label class="label-text text-base" for="checkboxError"> Error </label>
</div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex items-center gap-1">
  <input type="checkbox" class="checkbox checked:border-[#f0f] checked:bg-[#f0f] checked:text-[#fff]" id="checkboxCustomColor1" checked />
  <label class="label-text text-base" for="checkboxCustomColor1"> hex code </label>
</div>

<div class="flex items-center gap-1">
  <input type="checkbox" class="checkbox checked:border-[green] checked:bg-[green] checked:text-white" id="checkboxCustomColor2" checked />
  <label class="label-text text-base" for="checkboxCustomColor2"> Named color </label>
</div>

<div class="flex items-center gap-1">
  <input type="checkbox" class="checkbox checked:border-amber-400 checked:bg-amber-400 checked:text-amber-800" id="checkboxCustomColor5" checked/>
  <label class="label-text text-base" for="checkboxCustomColor5"> Tailwind utility colors </label>
</div>

<div class="flex items-center gap-1">
  <input type="checkbox" class="checkbox [--input-color:blue] checked:text-white" id="checkboxCustomColor5" checked/>
  <label class="label-text text-base" for="checkboxCustomColor5"> FlyonUI variable </label>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex items-center">
  <input type="checkbox" class="checkbox checkbox-primary checkbox-xs" id="checkboxExtraSmall" checked />
  <label class="label-text text-xs" for="checkboxExtraSmall"> Extra small </label>
</div>
<div class="flex items-center gap-0.5">
  <input type="checkbox" class="checkbox checkbox-primary checkbox-sm" id="checkboxSmall" checked />
  <label class="label-text" for="checkboxSmall"> Small </label>
</div>
<div class="flex items-center gap-1">
  <input type="checkbox" class="checkbox checkbox-primary" id="checkboxSizeDefault" checked />
  <label class="label-text text-base" for="checkboxSizeDefault"> Default </label>
</div>
<div class="flex items-center gap-1.5">
  <input type="checkbox" class="checkbox checkbox-primary checkbox-lg" id="checkboxLarge" checked />
  <label class="label-text text-lg" for="checkboxLarge"> Large </label>
</div>
<div class="flex items-center gap-1.5">
  <input type="checkbox" class="checkbox checkbox-primary checkbox-xl" id="checkboxExtraLarge" checked />
  <label class="label-text text-xl" for="checkboxExtraLarge"> Extra Large </label>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex gap-2">
  <input type="checkbox" class="checkbox checkbox-primary is-valid mt-2" id="checkboxStateSuccess" checked/>
  <label class="label-text cursor-pointer flex flex-col" for="checkboxStateSuccess">
    <span class="text-base">Delete</span>
    <span >Notify me when this action happens.</span>
  </label>
</div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex gap-2">
  <input type="checkbox" class="checkbox checkbox-primary is-invalid mt-2" id="checkboxStateError" />
  <label class="label-text cursor-pointer flex flex-col" for="checkboxStateError">
    <span class="text-base">Delete</span>
    <span>Notify me when this action happens.</span>
  </label>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<input type="checkbox" class="checkbox" aria-label="disabled checkbox" checked disabled />
<input type="checkbox" class="checkbox" aria-label="disabled checkbox" disabled />
```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex items-center gap-1">
  <input type="checkbox" class="checkbox checkbox-primary" id="check2" />
  <label class="label-text text-base" for="check2">Indeterminate</label>
</div>
<!-- js -->
<script>
  document.getElementById("check2").indeterminate = true
</script>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex gap-4 overflow-x-auto">
  <div class="flex items-center gap-2">
    <input type="checkbox" class="checkbox checkbox-primary" id="checkboxInline1" />
    <label class="label-text text-base" for="checkboxInline1"> Vue </label>
  </div>
  <div class="flex items-center gap-2">
    <input type="checkbox" class="checkbox checkbox-primary" id="checkboxInline2" checked />
    <label class="label-text text-base" for="checkboxInline2"> Angular </label>
  </div>
  <div class="flex items-center gap-2">
    <input type="checkbox" class="checkbox checkbox-primary" id="checkboxInline3" />
    <label class="label-text text-base" for="checkboxInline3"> React </label>
  </div>
</div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex flex-col gap-2">
  <div class="flex items-center gap-2">
    <input type="checkbox" class="checkbox checkbox-primary" id="checkboxVertical1" />
    <label class="label-text text-base" for="checkboxVertical1"> Vue </label>
  </div>
  <div class="flex items-center gap-2">
    <input type="checkbox" class="checkbox checkbox-primary" id="checkboxVertical2" checked />
    <label class="label-text text-base" for="checkboxVertical2"> Angular </label>
  </div>
  <div class="flex items-center gap-2">
    <input type="checkbox" class="checkbox checkbox-primary" id="checkboxVertical3" />
    <label class="label-text text-base" for="checkboxVertical3"> React </label>
  </div>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="dropdown relative inline-flex [--auto-close:inside]">
  <button id="dropdown-checkbox" type="button" class="dropdown-toggle btn btn-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
    Dropdown checkbox
    <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
  </button>
  <div class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60 space-y-0.5" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-checkbox">
    <div class="dropdown-item flex-col items-center gap-4 sm:flex-row sm:items-start">
      <input type="checkbox" class="checkbox checkbox-primary mt-2" id="checkboxDropdown1" checked />
      <label class="label-text cursor-pointer flex flex-col" for="checkboxDropdown1">
        <span class="font-semibold">Rename</span>
        <span class="text-base-content/50 text-base">Notify me when this action happens.</span>
      </label>
    </div>
    <div class="dropdown-item flex-col items-center gap-4 sm:flex-row sm:items-start">
      <input type="checkbox" class="checkbox checkbox-primary mt-2" id="checkboxDropdown2" />
      <label class="label-text cursor-pointer flex flex-col" for="checkboxDropdown2">
        <span class="font-semibold">Move</span>
        <span class="text-base-content/50 text-base">Notify me when this action happens.</span>
      </label>
    </div>
  </div>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<h6 class="text-base-content mb-1 text-base">Select your favorite language:</h6>
<ul class="border-base-content/25 divide-base-content/25 rounded-box max-w-sm divide-y border *:cursor-pointer" >
  <li>
    <label class="flex items-center gap-3 p-3">
      <input type="checkbox" class="checkbox checkbox-primary" />
      <span class="label-text text-base"> C++ </span>
    </label>
  </li>
  <li>
    <label class="flex items-center gap-3 p-3">
      <input type="checkbox" class="checkbox checkbox-primary" checked />
      <span class="label-text text-base"> Ruby </span>
    </label>
  </li>
  <li>
    <label class="flex items-center gap-3 p-3">
      <input type="checkbox" class="checkbox checkbox-primary" />
      <span class="label-text text-base"> Swift </span>
    </label>
  </li>
</ul>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<h6 class="text-base-content mb-1 text-base">Select your favorite language:</h6>
<ul
  class="border-base-content/25 divide-base-content/25 rounded-box flex w-full flex-col border *:w-full *:cursor-pointer max-sm:divide-y sm:flex-row sm:divide-x"
>
  <li class="w-full">
    <label class="flex items-center gap-3 p-3">
      <input type="checkbox" class="checkbox checkbox-primary" />
      <span class="label-text text-base"> Python </span>
    </label>
  </li>
  <li class="w-full">
    <label class="flex items-center gap-3 p-3">
      <input type="checkbox" class="checkbox checkbox-primary" checked />
      <span class="label-text text-base"> JavaScript </span>
    </label>
  </li>
  <li class="w-full">
    <label class="flex items-center gap-3 p-3">
      <input type="checkbox" class="checkbox checkbox-primary" />
      <span class="label-text text-base"> Java </span>
    </label>
  </li>
</ul>
```

I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex w-full flex-wrap items-start gap-3 sm:flex-nowrap">
  <label class="custom-option flex flex-row items-start gap-3 sm:w-1/2">
    <input type="checkbox" class="checkbox checkbox-primary mt-2" checked required />
    <span class="label-text w-full text-start">
      <span class="flex justify-between mb-1">
        <span class="text-base font-medium">Basic</span>
        <span class="text-base-content/50 text-base">Free</span>
      </span>
      <span class="text-base-content/80">Get 1 project with 1 teams members.</span>
    </span>
  </label>
  <label class="custom-option flex flex-row items-start gap-3 sm:w-1/2">
    <input type="checkbox" class="checkbox checkbox-primary mt-2" required />
    <span class="label-text w-full text-start">
      <span class="flex justify-between mb-1">
        <span class="text-base font-medium">Premium</span>
        <span class="text-base-content/50 text-base">$ 5.00</span>
      </span>
      <span class="text-base-content/80">Get 5 projects with 5 team members.</span>
    </span>
  </label>
</div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex w-full flex-wrap items-start gap-3 sm:flex-nowrap">
  <label class="custom-option flex flex-row items-start gap-4 sm:w-1/2">
    <input type="checkbox" class="checkbox hidden" checked />
    <span class="label-text w-full text-start">
      <span class="flex justify-between mb-1">
        <span class="text-base font-medium">Basic</span>
        <span class="text-base-content/50 text-base">Free</span>
      </span>
      <span class="text-base-content/80">Get 1 project with 1 teams members.</span>
    </span>
  </label>
  <label class="custom-option flex flex-row items-start gap-4 sm:w-1/2">
    <input type="checkbox" class="checkbox hidden" />
    <span class="label-text w-full text-start">
      <span class="flex justify-between mb-1">
        <span class="text-base font-medium">Premium</span>
        <span class="text-base-content/50 text-base">$ 5.00</span>
      </span>
      <span class="text-base-content/80">Get 5 projects with 5 team members.</span>
    </span>
  </label>
</div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex w-full flex-wrap items-start gap-3 sm:flex-nowrap">
  <label class="custom-soft-option flex flex-row items-start gap-3 sm:w-1/2">
    <input type="checkbox" class="checkbox checkbox-primary mt-2" checked />
    <span class="label-text w-full text-start">
      <span class="flex justify-between mb-1">
        <span class="text-base font-medium">Basic</span>
        <span class="text-base-content/50 text-base">Free</span>
      </span>
      <span class="text-base-content/80">Get 1 project with 1 teams members.</span>
    </span>
  </label>
  <label class="custom-soft-option flex flex-row items-start gap-3 sm:w-1/2">
    <input type="checkbox" class="checkbox checkbox-primary mt-2" />
    <span class="label-text w-full text-start">
      <span class="flex justify-between mb-1">
        <span class="text-base font-medium">Premium</span>
        <span class="text-base-content/50 text-base">$ 5.00</span>
      </span>
      <span class="text-base-content/80">Get 5 projects with 5 team members.</span>
    </span>
  </label>
</div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex w-full items-start gap-3 flex-wrap sm:flex-nowrap">
  <label class="custom-option text-center flex sm:w-1/2 flex-col items-center gap-3">
    <span class="icon-[componentx--rocket] size-10"></span>
    <span class="flex flex-col label-text">
      <span class="text-base font-medium mb-1">Starter</span>
      <span class="text-base-content/80"> Cake sugar plum fruitcake I love sweet roll jelly-o</span>
    </span>
    <input type="checkbox" class="checkbox checkbox-primary" />
  </label>
  <label class="custom-option text-center flex sm:w-1/2 flex-col items-center gap-3">
    <span class="icon-[componentx--user] size-10"></span>
    <span class="flex flex-col label-text">
      <span class="text-base font-medium mb-1">Personal</span>
      <span class="text-base-content/80"> Cake sugar plum fruitcake I love sweet roll jelly-o.</span>
    </span>
    <input type="checkbox" class="checkbox checkbox-primary" checked />
  </label>
  <label class="custom-option text-center flex sm:w-1/2 flex-col items-center gap-3">
    <span class="icon-[componentx--crown] size-10"></span>
    <span class="flex flex-col label-text">
      <span class="text-base font-medium mb-1">Enterprise</span>
      <span class="text-base-content/80"> Cake sugar plum fruitcake I love sweet roll jelly-o.</span>
    </span>
    <input type="checkbox" class="checkbox checkbox-primary" />
  </label>
</div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex flex-nowrap items-start gap-3">
  <label class="custom-option relative p-0">
    <span class="w-full">
      <img src="https://cdn.flyonui.com/fy-assets/components/radio/image-6.png" class="bg-contain" alt="checkbox image" />
    </span>
    <input type="checkbox" class="checkbox checkbox-primary absolute end-0 top-0 m-3 hidden checked:block hover:block" />
  </label>
  <label class="custom-option relative p-0">
    <span class="w-full">
      <img src="https://cdn.flyonui.com/fy-assets/components/radio/image-3.png" class="bg-contain" alt="checkbox image" />
    </span>
    <input type="checkbox" class="checkbox checkbox-primary absolute end-0 top-0 m-3 hidden checked:block hover:block" checked />
  </label>
  <label class="custom-option relative p-0">
    <span class="w-full">
      <img src="https://cdn.flyonui.com/fy-assets/components/radio/image-5.png" class="bg-contain" alt="checkbox image" />
    </span>
    <input type="checkbox" class="checkbox checkbox-primary absolute end-0 top-0 m-3 hidden checked:block hover:block" />
  </label>
</div>
```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
