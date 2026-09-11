---
name: "Radio"
library: "ComponentX"
id: "radio"
type: "form"
quality: "standard"
tags: ["form", "input", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Radio

> **Type:** `form` · **Quality:** `standard` · **ID:** `radio`
> **Path:** `components/form/radio.md`

**Radio** is a premium, production-ready component from the **ComponentX** library — engineered for form interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `form`, `input`, `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Radio** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
  <input type="radio" name="radio-0" class="radio" id="defaultRadio1" />
  <label class="label-text text-base" for="defaultRadio1"> Default </label>
</div>
<div class="flex items-center gap-1">
  <input type="radio" name="radio-0" class="radio" id="defaultRadio2" checked />
  <label class="label-text text-base" for="defaultRadio2"> Checked </label>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex gap-3">
  <input type="radio" name="radio-1" class="radio radio-primary mt-2" id="radioDelete" />
  <label class="label-text cursor-pointer flex flex-col" for="radioDelete">
    <span class="text-base">Delete</span>
    <span>Notify me when this action happens.</span>
  </label>
</div>

<div class="flex gap-3">
  <input type="radio" name="radio-1" class="radio radio-primary mt-2" id="radioArchieve" checked />
  <label class="label-text cursor-pointer flex flex-col" for="radioArchieve">
    <span class="text-base">Archive</span>
    <span>Notify me when this action happens.</span>
  </label>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex items-center gap-1">
  <input type="radio" name="radio-2" class="radio radio-primary" id="radioType1" />
  <label class="label-text text-base" for="radioType1"> Default </label>
</div>
<div class="flex items-center gap-1">
  <input type="radio" name="radio-2" class="radio radio-primary" id="radioType2" checked />
  <label class="label-text text-base" for="radioType2"> Checked </label>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex items-center gap-1">
  <input type="radio" name="radio-3" class="radio radio-inset radio-primary" id="radioType3"  />
  <label class="label-text text-base" for="radioType3"> Default </label>
</div>
<div class="flex items-center gap-1">
  <input type="radio" name="radio-3" class="radio radio-inset radio-primary" id="radioType4" checked/>
  <label class="label-text text-base" for="radioType4"> Checked </label>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex items-center gap-1">
  <input type="radio"  class="radio" id="radioDefault1" checked />
  <label class="label-text text-base" for="radioDefault1"> Default </label>
</div>
<div class="flex items-center gap-1">
  <input type="radio"  class="radio radio-primary" id="radioPrimary1" checked />
  <label class="label-text text-base" for="radioPrimary1"> Primary </label>
</div>
<div class="flex items-center gap-1">
  <input type="radio"  class="radio radio-secondary" id="radioSecondary1" checked />
  <label class="label-text text-base" for="radioSecondary1"> Secondary </label>
</div>
<div class="flex items-center gap-1">
  <input type="radio"  class="radio radio-accent" id="radioAccent1" checked />
  <label class="label-text text-base" for="radioAccent1"> Accent </label>
</div>
<div class="flex items-center gap-1">
  <input type="radio"  class="radio radio-info" id="radioInfo1" checked />
  <label class="label-text text-base" for="radioInfo1"> Info </label>
</div>
<div class="flex items-center gap-1">
  <input type="radio"  class="radio radio-success" id="radioSuccess1" checked />
  <label class="label-text text-base" for="radioSuccess1"> Success </label>
</div>
<div class="flex items-center gap-1">
  <input type="radio"  class="radio radio-warning" for="radioWarning1" checked />
  <label class="label-text text-base" for="radioWarning1"> Warning </label>
</div>
<div class="flex items-center gap-1">
  <input type="radio"  class="radio radio-error" for="radioError1" checked />
  <label class="label-text text-base" for="radioError1"> Error </label>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex items-center gap-1">
  <input type="radio" class="radio radio-inset" id="radioDefault2" checked />
  <label class="label-text text-base" for="radioDefault2"> Default </label>
</div>
<div class="flex items-center gap-1">
  <input type="radio" class="radio radio-inset radio-primary" id="radioPrimary2" checked />
  <label class="label-text text-base" for="radioPrimary2"> Primary </label>
</div>
<div class="flex items-center gap-1">
  <input type="radio" class="radio radio-inset radio-secondary" id="radioSecondary2" checked />
  <label class="label-text text-base" for="radioSecondary2"> Secondary </label>
</div>
<div class="flex items-center gap-1">
  <input type="radio" class="radio radio-inset radio-accent" id="radioAccent2" checked />
  <label class="label-text text-base" for="radioAccent2"> Accent </label>
</div>
<div class="flex items-center gap-1">
  <input type="radio" class="radio radio-inset radio-info" id="radioInfo2" checked />
  <label class="label-text text-base" for="radioInfo2"> Info </label>
</div>
<div class="flex items-center gap-1">
  <input type="radio" class="radio radio-inset radio-success" id="radioSuccess2" checked />
  <label class="label-text text-base" for="radioSuccess2"> Success </label>
</div>
<div class="flex items-center gap-1">
  <input type="radio" class="radio radio-inset radio-warning" id="radioWarning2" checked />
  <label class="label-text text-base" for="radioWarning2"> Warning </label>
</div>
<div class="flex items-center gap-1">
  <input type="radio" class="radio radio-inset radio-error" id="radioError2" checked />
  <label class="label-text text-base" for="radioError2"> Error </label>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex items-center gap-1">
  <input type="radio" name="radio-4" class="radio [--input-color:pink]" id="radioCustomColor1" />
  <label class="label-text text-base" for="radioCustomColor1"> FlyonUI variable </label>
</div>
<div class="flex items-center gap-1">
  <input type="radio" name="radio-4" class="radio checked:text-pink-300" id="radioCustomColor2" checked />
  <label class="label-text text-base" for="radioCustomColor2"> Tailwind utility colors </label>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex items-center gap-1">
  <input type="radio" name="radio-5" class="radio radio-inset [--input-color:green]" id="radioCustomColor3"  />
  <label class="label-text text-base" for="radioCustomColor3"> FlyonUI variable </label>
</div>
<div class="flex items-center gap-1">
  <input type="radio" name="radio-5" class="radio radio-inset checked:text-green-700" id="radioCustomColor4"  checked />
  <label class="label-text text-base" for="radioCustomColor4"> Tailwind utility colors </label>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex items-center">
  <input type="radio" name="radio-6" class="radio radio-xs radio-primary" id="radioExtraSmall1" />
  <label class="label-text text-xs" for="radioExtraSmall1"> Extra small </label>
</div>
<div class="flex items-center gap-0.5">
  <input type="radio" name="radio-6" class="radio radio-sm radio-primary" id="radioSmall1" />
  <label class="label-text" for="radioSmall1"> Small </label>
</div>
<div class="flex items-center gap-1">
  <input type="radio" name="radio-6" class="radio radio-primary" id="radioSizeDefault1" checked />
  <label class="label-text text-base" for="radioSizeDefault1"> Default </label>
</div>
<div class="flex items-center gap-1.5">
  <input type="radio" name="radio-6" class="radio radio-lg radio-primary" id="radioLarge1" />
  <label class="label-text text-lg" for="radioLarge1"> Large </label>
</div>
<div class="flex items-center gap-1.5">
  <input type="radio" name="radio-6" class="radio radio-xl radio-primary" id="radioExtraLarge1" />
  <label class="label-text text-xl" for="radioExtraLarge1"> Extra Large </label>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex items-center">
  <input type="radio" name="radio-7" class="radio radio-inset radio-xs radio-primary" id="radioExtraSmall2" />
  <label class="label-text text-xs" for="radioExtraSmall2"> Extra small </label>
</div>
<div class="flex items-center gap-0.5">
  <input type="radio" name="radio-7" class="radio radio-inset radio-sm radio-primary" id="radioSmall2" />
  <label class="label-text" for="radioSmall2"> Small </label>
</div>
<div class="flex items-center gap-1">
  <input type="radio" name="radio-7" class="radio radio-inset radio-primary" id="radioSizeDefault2" checked />
  <label class="label-text text-base" for="radioSizeDefault2"> Default </label>
</div>
<div class="flex items-center gap-1.5">
  <input type="radio" name="radio-7" class="radio radio-inset radio-lg radio-primary" id="radioLarge" />
  <label class="label-text text-lg" for="radioLarge"> Large </label>
</div>
<div class="flex items-center gap-1.5">
  <input type="radio" name="radio-7" class="radio radio-inset radio-xl radio-primary" id="radioExtraLarge" />
  <label class="label-text text-xl" for="radioExtraLarge"> Extra Large </label>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex gap-3">
  <input type="radio" name="radio-success" class="radio radio-primary is-valid mt-2" id="radioStateSuccess1" checked />
  <label class="label-text cursor-pointer flex flex-col" for="radioStateSuccess1">
    <span class="text-base">Delete</span>
    <span>Notify me when this action happens.</span>
  </label>
</div>
<div class="flex gap-3">
  <input type="radio" name="radio-success" class="radio radio-inset radio-primary is-valid mt-2" id="radioStateSuccess2" checked />
  <label class="label-text cursor-pointer flex flex-col" for="radioStateSuccess2">
    <span class="text-base">Archive</span>
    <span>Notify me when this action happens.</span>
  </label>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex gap-3">
  <input type="radio" name="radio-error" class="radio radio-primary is-invalid mt-2" id="radioStateError1" checked/>
  <label class="label-text cursor-pointer flex flex-col" for="radioStateError1">
    <span class="text-base">Delete</span>
    <span>Notify me when this action happens.</span>
  </label>
</div>
<div class="flex gap-3">
  <input type="radio" name="radio-error" class="radio radio-inset radio-primary is-invalid mt-2" id="radioStateError2" />
  <label class="label-text cursor-pointer flex flex-col" for="radioStateError2">
    <span class="text-base">Archive</span>
    <span>Notify me when this action happens.</span>
  </label>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="space-x-3">
  <input type="radio" name="radio-8" class="radio" aria-label="disabled radio" checked disabled />
  <input type="radio" name="radio-8" class="radio" aria-label="disabled radio" disabled />
</div>
<div class="space-x-3">
  <input type="radio" name="radio-9" class="radio radio-inset" aria-label="disabled radio" checked disabled />
  <input type="radio" name="radio-9" class="radio radio-inset" aria-label="disabled radio" disabled />
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex gap-4 overflow-x-auto">
  <div class="flex items-center gap-2">
    <input type="radio" name="radio-10" class="radio radio-primary" id="radioInline1" />
    <label class="label-text text-base" for="radioInline1"> Vue </label>
  </div>
  <div class="flex items-center gap-2">
    <input type="radio" name="radio-10" class="radio radio-primary" id="radioInline2" checked />
    <label class="label-text text-base" for="radioInline2"> Angular </label>
  </div>
  <div class="flex items-center gap-2">
    <input type="radio" name="radio-10" class="radio radio-primary" id="radioInline3" />
    <label class="label-text text-base" for="radioInline3"> React </label>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex flex-col gap-2">
  <div class="flex items-center gap-2">
    <input type="radio" name="radio-11" class="radio radio-primary" id="radioVertical1" />
    <label class="label-text text-base" for="radioVertical1"> Vue </label>
  </div>
  <div class="flex items-center gap-2">
    <input type="radio" name="radio-11" class="radio radio-primary" id="radioVertical2" checked />
    <label class="label-text text-base" for="radioVertical2"> Angular </label>
  </div>
  <div class="flex items-center gap-2">
    <input type="radio" name="radio-11" class="radio radio-primary" id="radioVertical3" />
    <label class="label-text text-base" for="radioVertical3"> React </label>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="dropdown relative inline-flex [--auto-close:inside]">
  <button id="dropdown-radio" type="button" class="dropdown-toggle btn btn-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
    Dropdown radio
    <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
  </button>
  <div class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-radio">
    <div class="dropdown-item flex-col items-center gap-4 sm:flex-row sm:items-start">
      <input name="radio-12" type="radio" class="radio radio-primary mt-2" id="radioDropdown1" checked />
      <label class="label-text cursor-pointer flex flex-col" for="radioDropdown1">
        <span class="font-semibold">Rename</span>
        <span class="text-base-content/50">Notify me when this action happens.</span>
      </label>
    </div>
    <div class="dropdown-item flex-col items-center gap-4 sm:flex-row sm:items-start">
      <input name="radio-12" type="radio" class="radio radio-primary mt-2" id="radioDropdown2" />
      <label class="label-text cursor-pointer flex flex-col" for="radioDropdown2">
        <span class="font-semibold">Move</span>
        <span class="text-base-content/50">Notify me when this action happens.</span>
      </label>
    </div>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<h6 class="text-base text-base-content mb-1">Select you favourite language:</h6>
<ul class="border-base-content/25 divide-base-content/25 rounded-box max-w-sm divide-y border *:cursor-pointer">
  <li>
    <label class="flex items-center gap-3 p-3">
      <input type="radio" name="radio-13" class="radio radio-primary" />
      <span class="label-text text-base"> C++ </span>
    </label>
  </li>
  <li>
    <label class="flex items-center gap-3 p-3">
      <input type="radio" name="radio-13" class="radio radio-primary" checked />
      <span class="label-text text-base"> Ruby </span>
    </label>
  </li>
  <li>
    <label class="flex items-center gap-3 p-3">
      <input type="radio" name="radio-13" class="radio radio-primary" />
      <span class="label-text text-base"> Swift </span>
    </label>
  </li>
</ul>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<h6 class="text-base text-base-content mb-1">Select you favourite language:</h6>
<ul
  class="border-base-content/25 divide-base-content/25 rounded-box flex w-full flex-col border *:w-full *:cursor-pointer max-sm:divide-y sm:flex-row sm:divide-x">
  <li>
    <label class="flex items-center gap-2 p-3">
      <input type="radio" name="radio-14" class="radio radio-primary ms-3" />
      <span class="label-text text-base"> Python </span>
    </label>
  </li>
  <li>
    <label class="flex items-center gap-2 p-3">
      <input type="radio" name="radio-14" class="radio radio-primary ms-3" checked />
      <span class="label-text text-base"> JavaScript </span>
    </label>
  </li>
  <li>
    <label class="flex items-center gap-2 p-3">
      <input type="radio" name="radio-14" class="radio radio-primary ms-3" />
      <span class="label-text text-base"> Java </span>
    </label>
  </li>
</ul>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="join drop-shadow">
  <input class="join-item btn btn-soft" type="radio" name="radio-15" aria-label="Radio 1" checked/>
  <input class="join-item btn btn-soft" type="radio" name="radio-15" aria-label="Radio 2" />
  <input class="join-item btn btn-soft" type="radio" name="radio-15" aria-label="Radio 3" />
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex w-full items-start gap-3 flex-wrap sm:flex-nowrap">
  <label class="custom-option flex sm:w-1/2 flex-row items-start gap-3">
    <input type="radio" name="radio-16" class="radio radio-primary mt-2" checked />
    <span class="label-text w-full text-start">
      <span class="flex justify-between mb-1">
        <span class="text-base font-medium">Basic</span>
        <span class="text-base-content/50 text-base">Free</span>
      </span>
      <span class="text-base-content/80">Get 1 project with 1 teams members.</span>
    </span>
  </label>
  <label class="custom-option flex sm:w-1/2 flex-row items-start gap-3">
    <input type="radio" name="radio-16" class="radio radio-primary mt-2" />
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
  <label class="custom-option flex sm:w-1/2 flex-row items-start gap-3">
    <input type="radio" name="radio-17" class="radio hidden" checked />
    <span class="label-text w-full text-start">
      <span class="flex justify-between mb-1">
        <span class="text-base font-medium">Basic</span>
        <span class="text-base-content/50 text-base">Free</span>
      </span>
      <span class="text-base-content/80">Get 1 project with 1 teams members.</span>
    </span>
  </label>
  <label class="custom-option flex sm:w-1/2 flex-row items-start gap-3">
    <input type="radio" name="radio-17" class="radio hidden" />
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
  <label class="custom-soft-option flex sm:w-1/2 flex-row items-start gap-3">
    <input type="radio" name="radio-18" class="radio radio-primary mt-2" checked />
    <span class="label-text w-full text-start">
      <span class="flex justify-between mb-1">
        <span class="text-base font-medium">Basic</span>
        <span class="text-base-content/50 text-base">Free</span>
      </span>
      <span class="text-base-content/80">Get 1 project with 1 teams members.</span>
    </span>
  </label>
  <label class="custom-soft-option flex sm:w-1/2 flex-row items-start gap-3">
    <input type="radio" name="radio-18" class="radio radio-primary mt-2" />
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
    <input type="radio" name="radio-19" class="radio radio-primary" />
  </label>
  <label class="custom-option text-center flex sm:w-1/2 flex-col items-center gap-3">
    <span class="icon-[componentx--user] size-10"></span>
    <span class="flex flex-col label-text">
      <span class="text-base font-medium mb-1">Personal</span>
      <span class="text-base-content/80"> Cake sugar plum fruitcake I love sweet roll jelly-o.</span>
    </span>
    <input type="radio" name="radio-19" class="radio radio-primary" checked />
  </label>
  <label class="custom-option text-center flex sm:w-1/2 flex-col items-center gap-3">
    <span class="icon-[componentx--crown] size-10"></span>
    <span class="flex flex-col label-text">
      <span class="text-base font-medium mb-1">Enterprise</span>
      <span class="text-base-content/80"> Cake sugar plum fruitcake I love sweet roll jelly-o.</span>
    </span>
    <input type="radio" name="radio-19" class="radio radio-primary" />
  </label>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex items-start gap-3 flex-nowrap">
  <label class="custom-option p-0">
    <span class="w-full">
      <img src="https://cdn.flyonui.com/fy-assets/components/radio/image-6.png" class="bg-contain" alt="Radio image"/>
    </span>
    <input type="radio" name="radio-20" class="radio hidden" />
  </label>
  <label class="custom-option p-0">
    <span class="w-full">
      <img src="https://cdn.flyonui.com/fy-assets/components/radio/image-3.png" class="bg-contain" alt="Radio image"/>
    </span>
    <input type="radio" name="radio-20" class="radio hidden" checked />
  </label>
  <label class="custom-option p-0">
    <span class="w-full">
     <img src="https://cdn.flyonui.com/fy-assets/components/radio/image-5.png" class="bg-contain" alt="Radio image"/>
    </span>
    <input type="radio" name="radio-20" class="radio hidden" />
  </label>
</div>
```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
