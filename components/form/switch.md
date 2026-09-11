---
name: "Switch"
library: "ComponentX"
id: "switch"
type: "form"
quality: "standard"
tags: ["form", "input", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Switch

> **Type:** `form` · **Quality:** `standard` · **ID:** `switch`
> **Path:** `components/form/switch.md`

**Switch** is a premium, production-ready component from the **ComponentX** library — engineered for form interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `form`, `input`, `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Switch** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
  <input type="checkbox" class="switch" id="defaultSwitch1" />
  <label class="label-text text-base" for="defaultSwitch1"> Default </label>
</div>
<div class="flex items-center gap-1">
  <input type="checkbox" class="switch" id="defaultSwitch2" checked />
  <label class="label-text text-base" for="defaultSwitch2"> Checked </label>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex items-center gap-1">
  <input type="checkbox" class="switch switch-primary" id="switchType1" />
  <label class="label-text text-base" for="switchType1"> Default </label>
</div>
<div class="flex items-center gap-1">
  <input type="checkbox" class="switch switch-primary" id="switchType2" checked />
  <label class="label-text text-base" for="switchType2"> Checked </label>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex items-center gap-1">
  <input type="checkbox" class="switch switch-outline switch-primary" id="switchType3" />
  <label class="label-text text-base" for="switchType3"> Default </label>
</div>
<div class="flex items-center gap-1">
  <input type="checkbox" class="switch switch-outline switch-primary" id="switchType4" checked />
  <label class="label-text text-base" for="switchType4"> Checked </label>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex items-center gap-1">
  <input type="checkbox" class="switch" id="switchDefault1" checked />
  <label class="label-text text-base" for="switchDefault1"> Default </label>
</div>
<div class="flex items-center gap-1">
  <input type="checkbox" class="switch switch-primary" id="switchPrimary1" checked />
  <label class="label-text text-base" for="switchPrimary1"> Primary </label>
</div>
<div class="flex items-center gap-1">
  <input type="checkbox" class="switch switch-secondary" id="switchSecondary1" checked />
  <label class="label-text text-base" for="switchSecondary1"> Secondary </label>
</div>
<div class="flex items-center gap-1">
  <input type="checkbox" class="switch switch-accent" id="switchAccent1" checked />
  <label class="label-text text-base" for="switchAccent1"> Accent </label>
</div>
<div class="flex items-center gap-1">
  <input type="checkbox" class="switch switch-info" id="switchInfo1" checked />
  <label class="label-text text-base" for="switchInfo1"> Info </label>
</div>
<div class="flex items-center gap-1">
  <input type="checkbox" class="switch switch-success" id="switchSuccess1" checked />
  <label class="label-text text-base" for="switchSuccess1"> Success </label>
</div>
<div class="flex items-center gap-1">
  <input type="checkbox" class="switch switch-warning" id="switchWarning1" checked />
  <label class="label-text text-base" for="switchWarning1"> Warning </label>
</div>
<div class="flex items-center gap-1">
  <input type="checkbox" class="switch switch-error" id="switchError1" checked />
  <label class="label-text text-base" for="switchError1"> Error </label>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex items-center gap-1">
  <input type="checkbox" class="switch switch-outline" id="switchDefault2" checked />
  <label class="label-text text-base" for="switchDefault2"> Default </label>
</div>
<div class="flex items-center gap-1">
  <input type="checkbox" class="switch switch-outline switch-primary" id="switchPrimary2" checked />
  <label class="label-text text-base" for="switchPrimary2"> Primary </label>
</div>
<div class="flex items-center gap-1">
  <input type="checkbox" class="switch switch-outline switch-secondary" id="switchSecondary2" checked />
  <label class="label-text text-base" for="switchSecondary2"> Secondary </label>
</div>
<div class="flex items-center gap-1">
  <input type="checkbox" class="switch switch-outline switch-accent" id="switchAccent2" checked />
  <label class="label-text text-base" for="switchAccent2"> Accent </label>
</div>
<div class="flex items-center gap-1">
  <input type="checkbox" class="switch switch-outline switch-info" id="switchInfo2" checked />
  <label class="label-text text-base" for="switchInfo2"> Info </label>
</div>
<div class="flex items-center gap-1">
  <input type="checkbox" class="switch switch-outline switch-success" id="switchSuccess2" checked />
  <label class="label-text text-base" for="switchSuccess2"> Success </label>
</div>
<div class="flex items-center gap-1">
  <input type="checkbox" class="switch switch-outline switch-warning" id="switchWarning2" checked />
  <label class="label-text text-base" for="switchWarning2"> Warning </label>
</div>
<div class="flex items-center gap-1">
  <input type="checkbox" class="switch switch-outline switch-error" id="switchError2" checked />
  <label class="label-text text-base" for="switchError2"> Error </label>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex items-center gap-1">
  <input type="checkbox" class="switch checked:text-[#e4b0f8] checked:border-[#9b59b6] checked:bg-[#9b59b6]" id="switchCustomColor1" checked/>
  <label class="label-text text-base" for="switchCustomColor1"> Hex code </label>
</div>
<div class="flex items-center gap-1">
  <input type="checkbox" class="switch checked:text-[#8fff8f] checked:border-[green] checked:bg-[green]" id="switchCustomColor2" checked/>
  <label class="label-text text-base" for="switchCustomColor2"> Named color </label>
</div>
<div class="flex items-center gap-1">
  <input type="checkbox" class="switch checked:text-amber-100 checked:border-amber-600 checked:bg-amber-600" id="switchCustomColor4" checked/>
  <label class="label-text text-base" for="switchCustomColor4"> Tailwind utility colors </label>
</div>

<div class="flex items-center gap-1">
  <input type="checkbox" class="switch checked:text-blue-100 checked:[--input-color:blue]" id="switchCustomColor5" checked/>
  <label class="label-text text-base" for="switchCustomColor5"> FlyonUI variable </label>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex items-center gap-1">
  <input type="checkbox" class="switch switch-outline checked:border-red-600 checked:text-blue-600" id="switchCustomColor6" checked />
  <label class="label-text text-base" for="switchCustomColor6"> Tailwind utility colors </label>
</div>
<div class="flex items-center gap-1">
  <input type="checkbox" class="switch switch-outline checked:[--input-color:#9b59b6]" id="switchCustomColor7" checked />
  <label class="label-text text-base" for="switchCustomColor7"> With variable </label>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex items-center">
  <input type="checkbox" class="switch switch-xs switch-primary" id="switchExtraSmall1" checked />
  <label class="label-text text-xs" for="switchExtraSmall1"> Extra small switch </label>
</div>
<div class="flex items-center gap-0.5">
  <input type="checkbox" class="switch switch-sm switch-primary" id="switchSmall1" checked />
  <label class="label-text" for="switchSmall1"> Small switch </label>
</div>
<div class="flex items-center gap-1">
  <input type="checkbox" class="switch switch-primary" id="switchSizeDefault1" checked />
  <label class="label-text text-base" for="switchSizeDefault1"> Default switch </label>
</div>
<div class="flex items-center gap-1.5">
  <input type="checkbox" class="switch switch-lg switch-primary" id="switchLarge1" checked />
  <label class="label-text text-lg" for="switchLarge1"> Large switch </label>
</div>
<div class="flex items-center gap-1.5">
  <input type="checkbox" class="switch switch-xl switch-primary" id="switchExtraLarge1" checked />
  <label class="label-text text-xl" for="switchExtraLarge1"> Extra large switch </label>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex items-center">
  <input type="checkbox" class="switch switch-outline switch-xs switch-primary" id="switchExtraSmall2" checked />
  <label class="label-text text-xs" for="switchExtraSmall2"> Extra small switch </label>
</div>
<div class="flex items-center gap-0.5">
  <input type="checkbox" class="switch switch-outline switch-sm switch-primary" id="switchSmall2" checked />
  <label class="label-text" for="switchSmall2"> Small switch </label>
</div>
<div class="flex items-center gap-1">
  <input type="checkbox" class="switch switch-outline switch-primary" id="switchSizeDefault2" checked />
  <label class="label-text text-base" for="switchSizeDefault2"> Default switch </label>
</div>
<div class="flex items-center gap-1.5">
  <input type="checkbox" class="switch switch-outline switch-lg switch-primary" id="switchLarge2" checked />
  <label class="label-text text-lg" for="switchLarge2"> Large switch </label>
</div>
<div class="flex items-center gap-1.5">
  <input type="checkbox" class="switch switch-outline switch-xl switch-primary" id="switchExtraLarge2" checked />
  <label class="label-text text-xl" for="switchExtraLarge2"> Extra large switch </label>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex items-start gap-3">
  <input type="checkbox" class="switch switch-primary is-valid mt-2" id="switchStateSuccess1" checked /> 
  <label class="label-text cursor-pointer flex flex-col" for="switchStateSuccess1">
    <span class="text-base">Email Notifications</span>
    <span>Receive email notifications for updates</span>
  </label>
</div>
<div class="flex items-start gap-3">
  <input type="checkbox" class="switch switch-outline switch-primary is-valid mt-2" id="switchStateSuccess2" checked />
  <label class="label-text cursor-pointer flex flex-col" for="switchStateSuccess2">
    <span class="text-base">Dark Mode</span>
    <span>Enable dark mode for better readability</span>
  </label>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex items-start gap-3">
  <input type="checkbox" class="switch switch-primary is-invalid mt-2" id="switchStateError1" />
  <label class="label-text cursor-pointer flex flex-col" for="switchStateError1">
    <span class="text-base">Email Notifications</span>
    <span>Receive email notifications for updates</span>
  </label>
</div>
<div class="flex items-start gap-3">
  <input type="checkbox" class="switch switch-outline switch-primary is-invalid mt-2" id="switchStateError2" />
  <label class="label-text cursor-pointer flex flex-col" for="switchStateError2">
    <span class="text-base">Dark Mode</span>
    <span>Enable dark mode for better readability</span>
  </label>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<!-- Default switch -->
<div class="space-x-3">
  <label class="relative inline-block">
    <input type="checkbox" class="switch switch-primary peer" aria-label="default switch with icon" />
    <span class="icon-[componentx--check] text-primary-content absolute start-1 top-1.5 hidden size-4 peer-checked:block" ></span>
    <span class="icon-[componentx--x] text-neutral-content absolute end-1 top-1.5  block size-4 peer-checked:hidden" ></span>
  </label>
  <label class="relative inline-block">
    <input type="checkbox" class="switch switch-primary peer" aria-label="default switch with icon" checked />
    <span class="icon-[componentx--check] text-primary-content absolute start-1 top-1.5 hidden size-4 peer-checked:block" ></span>
    <span class="icon-[componentx--x] text-neutral-content absolute end-1 top-1.5  block size-4 peer-checked:hidden" ></span>
  </label>
</div>

<!-- Outline switch -->

<div class="space-x-3">
  <label class="relative inline-block">
    <input type="checkbox" class="switch switch-primary switch-outline peer" aria-label="outline switch with icon" />
    <span class="icon-[componentx--check] text-primary absolute start-1 top-1.5 hidden size-4 peer-checked:block" ></span>
    <span class="icon-[componentx--x] text-neutral absolute end-1 top-1.5  block size-4 peer-checked:hidden" ></span>
  </label>
  <label class="relative inline-block">
    <input type="checkbox" class="switch switch-primary switch-outline peer" aria-label="outline switch with icon" checked />
    <span class="icon-[componentx--check] text-primary absolute start-1 top-1.5 hidden size-4 peer-checked:block" ></span>
    <span class="icon-[componentx--x] text-neutral absolute end-1 top-1.5  block size-4 peer-checked:hidden" ></span>
  </label>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="space-x-3">
  <input type="checkbox" class="switch switch-primary" aria-label="disabled switch" disabled />
  <input type="checkbox" class="switch switch-primary" aria-label="disabled switch" checked disabled />
</div>
<div class="space-x-3">
  <input type="checkbox" class="switch switch-primary switch-outline" aria-label="outlined disabled switch" disabled />
  <input type="checkbox" class="switch switch-primary switch-outline" aria-label="outlined disabled switch" checked disabled />
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex items-center gap-1">
  <input type="checkbox" class="switch switch-primary" id="switchSolid" />
  <label class="label-text text-base" for="switchSolid"> Solid switch </label>
</div>
<div class="flex items-center gap-1">
  <input type="checkbox" class="switch switch-primary switch-outline" id="switchOutline" />
  <label class="label-text text-base" for="switchOutline"> Outline switch </label>
</div>
 
<!-- js -->
<script>
  document.getElementById("switchSolid").indeterminate = true
  document.getElementById("switchOutline").indeterminate = true
</script>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex gap-4 flex-col sm:flex-row">
  <div class="flex items-start gap-2">
    <input type="checkbox" class="switch switch-primary mt-2" id="switchInline1" />
    <label class="label-text cursor-pointer flex flex-col" for="switchInline1">
      <span class="text-base">Email Notifications</span>
      <span>Receive email notifications for updates</span>
    </label>
  </div>
  <div class="flex items-start gap-2">
    <input type="checkbox" class="switch switch-primary mt-2" id="switchInline2" checked />
    <label class="label-text cursor-pointer flex flex-col" for="switchInline2">
      <span class="text-base">Dark Mode</span>
      <span>Enable dark mode for better readability</span>
    </label>
  </div>
  <div class="flex items-start gap-2">
    <input type="checkbox" class="switch switch-primary mt-2" id="switchInline3" />
    <label class="label-text cursor-pointer flex flex-col" for="switchInline3">
      <span class="text-base">Auto-Save</span>
      <span>Automatically save changes as you edit</span>
    </label>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex flex-col">
  <div class="flex items-start gap-4">
    <input type="checkbox" class="switch switch-primary mt-2" id="switchVertical1" />
    <label class="label-text cursor-pointer flex flex-col" for="switchVertical1">
      <span class="text-base">Email Notifications</span>
      <span>Receive email notifications for updates</span>
    </label>
  </div>
  <div class="flex items-start gap-4">
    <input type="checkbox" class="switch switch-primary mt-2" id="switchVertical2" checked />
    <label class="label-text cursor-pointer flex flex-col" for="switchVertical2">
      <span class="text-base">Dark Mode</span>
      <span>Enable dark mode for better readability</span>
    </label>
  </div>
  <div class="flex items-start gap-4">
    <input type="checkbox" class="switch switch-primary mt-2" id="switchVertical3" />
    <label class="label-text cursor-pointer flex flex-col" for="switchVertical3">
      <span class="text-base">Auto-Save</span>
      <span>Automatically save changes as you edit</span>
    </label>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="dropdown relative inline-flex [--auto-close:inside]">
  <button id="dropdown-checkbox" type="button" class="dropdown-switch btn btn-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
    Dropdown switch
    <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
  </button>
  <div class="dropdown-menu dropdown-open:opacity-100 min-w-60 hidden" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-checkbox">
    <div class="dropdown-item flex-col items-center gap-4 sm:flex-row sm:items-start">
      <input type="checkbox" class="switch switch-primary mt-2" id="switchDropdown1" />
      <label class="label-text cursor-pointer flex flex-col" for="switchDropdown1">
        <span class="text-base">Email Notifications</span>
        <span>Receive email notifications for updates</span>
      </;>
    </div>
    <div class="dropdown-item flex-col items-center gap-4 sm:flex-row sm:items-start">
      <input type="checkbox" class="switch switch-primary mt-2" id="switchDropdown2" checked />
      <label class="label-text cursor-pointer flex flex-col" for="switchDropdown2">
        <span class="text-base">Dark Mode</span>
        <span>Enable dark mode for better readability</span>
      </;>
    </div>
    <div class="dropdown-item flex-col items-center gap-4 sm:flex-row sm:items-start">
      <input type="checkbox" class="switch switch-primary mt-2" id="switchDropdown3" />
      <label class="label-text cursor-pointer flex flex-col" for="switchDropdown3">
        <span class="text-base">Auto-Save</span>
        <span>Automatically save changes as you edit</span>
      </;>
    </div>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<h6 class="text-base-content mb-1 text-base">Switch to your preferred languages:</h6>
<ul
  class="border-base-content/25 divide-base-content/25 rounded-box max-w-sm divide-y border *:cursor-pointer"
>
  <li>
    <label class="flex items-center gap-3 p-3">
      <input type="checkbox" class="switch switch-primary" />
      <span class="label-text text-base"> JavaScript </span>
    </label>
  </li>
  <li>
    <label class="flex items-center gap-3 p-3">
      <input type="checkbox" class="switch switch-primary" checked />
      <span class="label-text text-base"> Python </span>
    </label>
  </li>
  <li>
    <label class="flex items-center gap-3 p-3">
      <input type="checkbox" class="switch switch-primary" />
      <span class="label-text text-base"> Java </span>
    </label>
  </li>
</ul>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<h6 class="text-base-content mb-1 text-base">Switch to your preferred languages:</h6>
<ul class="border-base-content/25 divide-base-content/25 rounded-box border flex w-full flex-col *:w-full *:cursor-pointer max-sm:divide-y sm:flex-row sm:divide-x" >
  <li>
    <label class="flex items-center gap-3 p-3">
      <input type="checkbox" class="switch switch-primary" />
      <span class="label-text text-base"> JavaScript </span>
    </label>
  </li>
  <li>
    <label class="flex items-center gap-3 p-3">
      <input type="checkbox" class="switch switch-primary" checked />
      <span class="label-text text-base"> Python </span>
    </label>
  </li>
  <li>
    <label class="flex items-center gap-3 p-3">
      <input type="checkbox" class="switch switch-primary" />
      <span class="label-text text-base"> Java </span>
    </label>
  </li>
</ul>
```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
