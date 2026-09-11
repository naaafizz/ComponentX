---
name: "Dropdown"
library: "ComponentX"
id: "dropdown-2"
type: "overlay"
quality: "standard"
tags: ["button", "form", "input", "menu", "overlay", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Dropdown

> **Type:** `overlay` · **Quality:** `standard` · **ID:** `dropdown-2`
> **Path:** `components/overlay/dropdown-2.md`

**Dropdown** is a premium, production-ready component from the **ComponentX** library — engineered for overlay interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `button`, `form`, `input` workflows.
- **Pattern coverage** — includes `menu`, `overlay`, `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Dropdown** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
<div class="dropdown relative inline-flex">
  <button id="dropdown-default" type="button" class="dropdown-toggle btn btn-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
    Dropdown
    <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
  </button>
  <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-default">
    <li><a class="dropdown-item" href="#">My Profile</a></li>
    <li><a class="dropdown-item" href="#">Settings</a></li>
    <li><a class="dropdown-item" href="#">Billing</a></li>
    <li><a class="dropdown-item" href="#">FAQs</a></li>
  </ul>
</div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="dropdown relative inline-flex">
  <button id="dropdown-header" type="button" class="dropdown-toggle btn btn-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
    Dropdown header
    <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
  </button>
  <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-header">
    <li class="dropdown-header gap-2">
      <div class="avatar">
        <div class="w-10 rounded-full">
          <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-2.png" alt="User Avatar" />
        </div>
      </div>
      <div>
        <h6 class="text-base-content text-base font-semibold">John Doe</h6>
        <small class="text-base-content/50 text-sm font-normal">jhon@doe.com</small>
      </div>
    </li>
    <li><a class="dropdown-item" href="#">My Profile</a></li>
    <li><a class="dropdown-item" href="#">Settings</a></li>
    <li><a class="dropdown-item" href="#">Billing</a></li>
    <li><a class="dropdown-item" href="#">FAQs</a></li>
  </ul>
</div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="dropdown relative inline-flex">
  <button id="dropdown-footer" type="button" class="dropdown-toggle btn btn-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
    Dropdown footer
    <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
  </button>
  <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-footer">
    <li><a class="dropdown-item" href="#">My Profile</a></li>
    <li><a class="dropdown-item" href="#">Settings</a></li>
    <li><a class="dropdown-item" href="#">Billing</a></li>
    <li><a class="dropdown-item" href="#">FAQs</a></li>
    <li class="dropdown-footer gap-2">
      <button class="btn btn-error btn-soft btn-block">Sign out</button>
    </li>
  </ul>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="dropdown relative inline-flex">
  <button id="dropdown-title" type="button" class="dropdown-toggle btn btn-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
    Dropdown title
    <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
  </button>
  <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-title">
    <li class="dropdown-title">Settings</li>
    <li><a class="dropdown-item" href="#">My Profile</a></li>
    <li><a class="dropdown-item" href="#">Settings</a></li>
    <li><a class="dropdown-item" href="#">Billing</a></li>
    <li><a class="dropdown-item" href="#">FAQs</a></li>
    <hr class="border-base-content/25 my-2 -mx-2" />
    <li class="dropdown-title">Contact</li>
    <li><a class="dropdown-item" href="#">Contact support</a></li>
  </ul>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="dropdown relative inline-flex [--auto-close:inside]">
  <button id="dropdown-form" type="button" class="dropdown-toggle btn btn-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
    Dropdown form
    <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
  </button>
  <div class="dropdown-menu dropdown-open:opacity-100 min-w-70 hidden" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-form">
    <form class="p-4">
      <div class="mb-4">
        <label class="label-text" for="username"> Username </label>
        <input type="text" placeholder="Johndoe" class="input" id="username" />
      </div>
      <div class="mb-4">
        <label class="label-text" for="password"> Password </label>
        <input type="password" placeholder="············" class="input" id="password" autocomplete="password" />
      </div>
      <button type="submit" class="btn btn-primary btn-block">Sign in</button>
    </form>
  </div>
</div>
```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="dropdown relative inline-flex [--auto-close:inside]">
  <button id="dropdown-transportation" type="button" class="dropdown-toggle btn btn-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
    Dropdown radio
    <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
  </button>
  <div class="dropdown-menu dropdown-open:opacity-100 hidden" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-transportation">
    <div class="dropdown-item gap-4">
      <input id="dropdown-radio-car-2" name="dropdown-item-radio" type="radio" class="radio radio-primary" checked/>
      <label for="dropdown-radio-car-2" class="label-text text-base-content block text-sm font-semibold">Car </label>
    </div>
    <div class="dropdown-item gap-4">
      <input id="dropdown-radio-bicycle-2" name="dropdown-item-radio" type="radio" class="radio radio-primary" />
      <label for="dropdown-radio-bicycle-2" class="label-text text-base-content text-sm font-semibold"> Bicycle </label>
    </div>
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
  <div class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-checkbox">
    <div class="dropdown-item items-start gap-4 max-sm:px-2">
      <input type="checkbox" class="checkbox checkbox-primary mt-2" id="checkboxDropdown-1" checked />
      <label class="label-text flex flex-col items-start" for="checkboxDropdown-1">
        <span class="font-semibold">Mark as important</span>
        <span class="text-base-content/50">Notify me when this action happens.</span>
      </label>
    </div>
    <div class="dropdown-item items-start gap-4 max-sm:px-2">
      <input type="checkbox" class="checkbox checkbox-primary mt-2" id="checkboxDropdown-2" />
      <label class="label-text flex flex-col items-start" for="checkboxDropdown-2">
        <span class="font-semibold">Share with team</span>
        <span class="text-base-content/50">Notify me when this action happens.</span>
      </label>
    </div>
  </div>
</div>
```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="dropdown relative inline-flex [--auto-close:inside]">
  <button id="dropdown-checkbox" type="button" class="dropdown-toggle btn btn-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
    Dropdown switch
    <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
  </button>
  <div class="dropdown-menu dropdown-open:opacity-100 min-w-60 hidden" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-checkbox">
    <div class="dropdown-item items-start gap-4">
      <input type="checkbox" class="switch switch-primary mt-2" id="switchDropdown-1" checked />
      <label class="label-text flex flex-col items-start" for="switchDropdown-1">
        <span class="text-base">Notifications</span>
        <span>Receive push notifications</span>
      </label>
    </div>
    <div class="dropdown-item items-start gap-4">
      <input type="checkbox" class="switch switch-primary mt-2" id="switchDropdown-2" />
      <label class="label-text flex flex-col items-start" for="switchDropdown-2">
        <span class="text-base">Location Services</span>
        <span>Allow access to your location</span>
      </label>
    </div>
    <div class="dropdown-item items-start gap-4">
      <input type="checkbox" class="switch switch-primary mt-2" id="switchDropdown-2" checked />
      <label class="label-text flex flex-col items-start" for="switchDropdown-3">
        <span class="text-base">Dark Theme</span>
        <span>Enable dark theme for the app</span>
      </label>
    </div>
  </div>
</div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="dropdown relative inline-flex">
  <button id="nested-dropdown" type="button" class="dropdown-toggle btn btn-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
    Dropdown
    <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
  </button>
  <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="nested-dropdown">
    <li><a class="dropdown-item" href="#">Send My Profile</a></li>
    <li><a class="dropdown-item" href="#">View Settings</a></li>
    <li class="dropdown relative [--offset:15] [--placement:right-start] [--scope:window]">
      <button id="nested-dropdown-2" class="dropdown-toggle dropdown-item justify-between"  aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
        More Options
        <span class="icon-[componentx--chevron-right] size-4 rtl:rotate-180"></span>
      </button>
      <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="nested-dropdown-2">
        <li><a class="dropdown-item" href="#">Download Documents</a></li>
        <li><a class="dropdown-item" href="#">Manage FAQs</a></li>
      </ul>
    </li>
    <li><a class="dropdown-item" href="#">Logout</a></li>
  </ul>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="dropdown relative inline-flex">
  <button id="dropdown-menu-icon" type="button" class="dropdown-toggle btn btn-square btn-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
    <span class="icon-[componentx--dots-vertical] size-6"></span>
  </button>
  <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-menu-icon">
    <li><a class="dropdown-item" href="#">My Profile</a></li>
    <li><a class="dropdown-item" href="#">Settings</a></li>
    <li><a class="dropdown-item" href="#">Billing</a></li>
    <li><a class="dropdown-item" href="#">FAQs</a></li>
  </ul>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="join">
  <button type="button" class="btn btn-outline btn-primary join-item">Dropdown</button>
  <div class="dropdown relative inline-flex">
    <button id="dropdown-split" type="button" class="dropdown-toggle btn btn-square btn-primary join-item" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
      <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
    </button>
    <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-split">
      <li><a class="dropdown-item" href="#">My Profile</a></li>
      <li><a class="dropdown-item" href="#">Settings</a></li>
      <li><a class="dropdown-item" href="#">Billing</a></li>
      <li><a class="dropdown-item" href="#">FAQs</a></li>
    </ul>
  </div>
</div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="dropdown relative inline-flex">
  <button id="dropdown-avatar" type="button" class="dropdown-toggle btn btn-outline btn-primary flex items-center gap-2 rounded-full" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
    <div class="avatar">
      <div class="size-6 rounded-full">
        <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-3.png" alt="User Avatar" />
      </div>
    </div>
    John Doe
    <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
  </button>
  <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-avatar">
    <li class="dropdown-header gap-3">
      <div class="avatar">
        <div class="w-10 rounded-full">
          <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-3.png" alt="User Avatar" />
        </div>
      </div>
      <div>
        <h6 class="text-base-content text-base font-semibold">John Doe</h6>
        <small class="text-base-content/50 text-sm font-normal">jhon@doe.com</small>
      </div>
    </li>
    <li><a class="dropdown-item" href="#">My Profile</a></li>
    <li><a class="dropdown-item" href="#">Settings</a></li>
    <li><a class="dropdown-item" href="#">Billing</a></li>
    <li><a class="dropdown-item" href="#">FAQs</a></li>
  </ul>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="dropdown relative inline-flex">
  <button id="dropdown-Slide" type="button" class="dropdown-toggle btn btn-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
    Dropdown
    <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
  </button>
  <ul class="dropdown-menu transition-[opacity,margin] duration-300 dropdown-open:opacity-100 hidden min-w-60 mt-2" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-Slide">
    <li><a class="dropdown-item" href="#">My Profile</a></li>
    <li><a class="dropdown-item" href="#">Settings</a></li>
    <li><a class="dropdown-item" href="#">Billing</a></li>
    <li><a class="dropdown-item" href="#">FAQs</a></li>
  </ul>
</div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="w-full">
  <div class="dropdown relative inline-flex  [--strategy:absolute]">
    <button id="dropdown-transform" type="button" class="dropdown-toggle btn btn-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
      Dropdown
      <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
    </button>
    <ul class="dropdown-menu dropdown-open:opacity-100 dropdown-open:ease-in dropdown-open:scale-100 mt-0 hidden min-w-60 origin-top-left rtl:origin-top-right scale-0 transition duration-300 ease-out rtl:left-0"  role="menu" aria-orientation="vertical" aria-labelledby="dropdown-transform">
      <li><a class="dropdown-item" href="#">My Profile</a></li>
      <li><a class="dropdown-item" href="#">Settings</a></li>
      <li><a class="dropdown-item" href="#">Billing</a></li>
      <li><a class="dropdown-item" href="#">FAQs</a></li>
    </ul>
  </div>
</div>
```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="w-full">
  <div class="dropdown relative inline-flex [--strategy:absolute]">
    <button id="dropdown-transform" type="button" class="dropdown-toggle btn btn-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
      Dropdown
      <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
    </button>
    <div class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60 rtl:left-0" role="menu" aria-orientation="vertical">
      <ul class="dropdown-open:ease-in dropdown-open:translate-x-0 -translate-x-1 rtl:translate-x-1 transition duration-300 ease-out" aria-labelledby="dropdown-transform" data-dropdown-transition>
        <li><a class="dropdown-item" href="#">My Profile</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Billing</a></li>
        <li><a class="dropdown-item" href="#">FAQs</a></li>
      </ul>
    </div>
  </div>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="dropdown relative inline-flex">
  <button id="dropdown-active" type="button" class="dropdown-toggle btn btn-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
    Dropdown
    <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
  </button>
  <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-active">
    <li><a class="dropdown-item dropdown-active" href="#" aria-current="true">My Profile</a></li>
    <li><a class="dropdown-item" href="#">Settings</a></li>
    <li><a class="dropdown-item" href="#">Billing</a></li>
    <li><a class="dropdown-item" href="#">FAQs</a></li>
  </ul>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="dropdown relative inline-flex">
  <button id="dropdown-disabled" type="button" class="dropdown-toggle btn btn-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
    Dropdown
    <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
  </button>
  <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-disabled">
    <li><a class="dropdown-item dropdown-disabled" href="#" aria-disabled="true">My Profile</a></li>
    <li><a class="dropdown-item" href="#">Settings</a></li>
    <li><a class="dropdown-item" href="#">Billing</a></li>
    <li><a class="dropdown-item" href="#">FAQs</a></li>
  </ul>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="dropdown relative inline-flex [--trigger:hover]">
  <button id="dropdown-hover" type="button" class="dropdown-toggle btn btn-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
    Dropdown
    <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
  </button>
  <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-hover">
    <li><a class="dropdown-item" href="#">My Profile</a></li>
    <li><a class="dropdown-item" href="#">Settings</a></li>
    <li><a class="dropdown-item" href="#">Billing</a></li>
    <li><a class="dropdown-item" href="#">FAQs</a></li>
  </ul>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="dropdown relative inline-flex">
  <button id="dropdown-dividers" type="button" class="dropdown-toggle btn btn-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
    Dropdown
    <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
  </button>
  <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-dividers">
    <li><a class="dropdown-item" href="#">My Profile</a></li>
    <li><a class="dropdown-item" href="#">Settings</a></li>
    <li><a class="dropdown-item" href="#">Billing</a></li>
    <li><a class="dropdown-item" href="#">FAQs</a></li>
    <li><hr class="border-base-content/25 -mx-2" /></li>
    <li><a class="dropdown-item" href="#">Pricing</a></li>
    <li><hr class="border-base-content/25 -mx-2" /></li>
    <li><a class="dropdown-item" href="#">Logout Out</a></li>
  </ul>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="dropdown relative inline-flex">
  <button id="dropdown-icons" type="button" class="dropdown-toggle btn btn-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
    Dropdown
    <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
  </button>
  <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-icons">
    <li>
      <a class="dropdown-item" href="#">
        <span class="icon-[componentx--bell] size-5 shrink-0"></span>
        My Profile
      </a>
    </li>
    <li>
      <a class="dropdown-item" href="#">
        <span class="icon-[componentx--garden-cart] size-5 shrink-0"></span>
        Settings
      </a>
    </li>
    <li>
      <a class="dropdown-item" href="#">
        <span class="icon-[componentx--cloud-download] size-5 shrink-0"></span>
        Billing
      </a>
    </li>
    <li>
      <a class="dropdown-item" href="#">
        <span class="icon-[componentx--users] size-5 shrink-0"></span>
        FAQs
      </a>
    </li>
  </ul>
</div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="dropdown relative inline-flex">
  <button id="dropdown-shortcuts" type="button" class="dropdown-toggle btn btn-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
    Dropdown
    <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
  </button>
  <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-shortcuts">
    <li>
      <a class="dropdown-item justify-between" href="#">
        Dashboard
        <span class>
          <kbd class="kbd kbd-sm">⌘</kbd>
          +
          <kbd class="kbd kbd-sm">i</kbd>
        </span>
      </a>
    </li>
    <li>
      <a class="dropdown-item justify-between" href="#">
        Settings
        <span class>
          <kbd class="kbd kbd-sm">⌘</kbd>
          +
          <kbd class="kbd kbd-sm">s</kbd>
        </span>
      </a>
    </li>
    <li>
      <a class="dropdown-item justify-between" href="#">
        Billing
        <span class>
          <kbd class="kbd kbd-sm">⌘</kbd>
          +
          <kbd class="kbd kbd-sm">d</kbd>
        </span>
      </a>
    </li>
    <li>
      <a class="dropdown-item justify-between" href="#">
        Sign out
        <span class>
          <kbd class="kbd kbd-sm">⌘</kbd>
          +
          <kbd class="kbd kbd-sm">l</kbd>
        </span>
      </a>
    </li>
  </ul>
</div>
```





I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="dropdown relative inline-flex">
  <button id="dropdown-scrollable" type="button" class="dropdown-toggle" aria-label="Notification Button">
    <div class="indicator">
      <span class="indicator-item bg-error size-2.5 rounded-full"></span>
      <span class="icon-[componentx--bell] text-base-content size-5"></span>
    </div>
  </button>
  <div class="dropdown-menu dropdown-open:opacity-100 hidden" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-scrollable">
    <div class="dropdown-header justify-center">
      <h6 class="text-base text-base-content">Notification</h6>
    </div>
    <div class="overflow-y-auto text-base-content/80 max-h-52 max-sm:max-w-72">
      <div class="dropdown-item">
        <div class="avatar avatar-away-bottom">
          <div class="w-10 rounded-full">
            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" alt="User Avatar" />
          </div>
        </div>
        <div class="w-52 sm:w-60">
          <h6 class="truncate text-base">Charles Franklin</h6>
          <small class="text-base-content/50 truncate">Accepted your connection</small>
        </div>
      </div>
      <div class="dropdown-item">
        <div class="avatar">
          <div class="w-10 rounded-full">
            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-2.png" alt="User Avatar" />
          </div>
        </div>
        <div class="w-52 sm:w-60">
          <h6 class="!truncate text-base">Martian added moved Charts & Maps task to the done board.</h6>
          <small class="text-base-content/50 truncate">Today 10:00 AM</small>
        </div>
      </div>
      <div class="dropdown-item">
        <div class="avatar avatar-online-bottom">
          <div class="w-10 rounded-full">
            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-8.png" alt="User Avatar" />
          </div>
        </div>
        <div class="w-52 sm:w-60">
          <h6 class="truncate text-base">New Message</h6>
          <small class="text-base-content/50 truncate">You have new message from Natalie</small>
        </div>
      </div>
      <div class="dropdown-item">
        <div class="avatar avatar-placeholder">
          <div class="bg-neutral text-neutral-content w-10 rounded-full p-2">
            <span class="icon-[componentx--user] size-full"></span>
          </div>
        </div>
        <div class="w-52 sm:w-60">
          <h6 class="truncate text-base">Application has been approved 🚀</h6>
          <small class="text-base-content/50 text-wrap">Your ABC project application has been approved.</small>
        </div>
      </div>
      <div class="dropdown-item">
        <div class="avatar">
          <div class="w-10 rounded-full">
            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-10.png" alt="User Avatar" />
          </div>
        </div>
        <div class="w-52 sm:w-60">
          <h6 class="truncate text-base">New message from Jane</h6>
          <small class="text-base-content/50 text-wrap">Your have new message from Jane</small>
        </div>
      </div>
      <div class="dropdown-item">
        <div class="avatar">
          <div class="w-10 rounded-full">
            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-3.png" alt="User Avatar" />
          </div>
        </div>
        <div class="w-52 sm:w-60">
          <h6 class="truncate text-base">Barry Commented on App review task.</h6>
          <small class="text-base-content/50 truncate">Today 8:32 AM</small>
        </div>
      </div>
    </div>
    <a href="#" class="dropdown-footer justify-center gap-1">
      <span class="icon-[componentx--eye] size-4"></span>
      View all
    </a>
  </div>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="join">
  <input class="input join-item" placeholder="Email" />
  <div class="dropdown relative inline-flex w-full">
    <button id="dropdown-input" type="button" class="dropdown-toggle btn btn-primary join-item" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
      Dropdown
      <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
    </button>
    <ul class="dropdown-menu dropdown-open:opacity-100 hidden" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-input">
      <li><a class="dropdown-item" href="#">Subscribe</a></li>
      <li><a class="dropdown-item" href="#">Verify</a></li>
    </ul>
  </div>
</div>
```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div id="dropdown-to-destroy" class="dropdown relative inline-flex">
  <button id="dropdown-default" type="button" class="dropdown-toggle btn btn-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
    Dropdown
    <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
  </button>
  <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-default">
    <li><a class="dropdown-item" href="#">My Profile</a></li>
    <li><a class="dropdown-item" href="#">Settings</a></li>
    <li><a class="dropdown-item" href="#">Billing</a></li>
    <li><a class="dropdown-item" href="#">FAQs</a></li>
  </ul>
</div>

<div class="mt-4 flex gap-3">
  <button class="btn btn-primary" id="destroy-btn">Destroy</button>
  <button class="btn btn-primary" id="reinit-btn" disabled>Reinitialize</button>
</div>
```

```js
<script>
  window.addEventListener('load', () => {
    ;(function () {
      const dropdown = document.querySelector('#dropdown-to-destroy')
      const destroy = document.querySelector('#destroy-btn')
      const reinit = document.querySelector('#reinit-btn')

      destroy.addEventListener('click', () => {
        const { element } = HSDropdown.getInstance(dropdown, true)

        element.destroy()

        destroy.setAttribute('disabled', 'disabled')
        reinit.removeAttribute('disabled')
      })

      reinit.addEventListener('click', () => {
        HSDropdown.autoInit()

        reinit.setAttribute('disabled', 'disabled')
        destroy.removeAttribute('disabled')
      })
    })()
  });
</script>

```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="dropdown relative inline-flex [--placement:right-start]">
  <button id="dropdown-sm" type="button" class="dropdown-toggle btn btn-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
    Dropdown
    <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
  </button>
  <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" aria-labelledby="dropdown-sm">
    <li><a class="dropdown-item" href="#">My Profile</a></li>
    <li><a class="dropdown-item" href="#">Settings</a></li>
    <li><a class="dropdown-item" href="#">Billing</a></li>
    <li><a class="dropdown-item" href="#">FAQs</a></li>
  </ul>
</div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="dropdown relative inline-flex">
  <button id="dropdown-outside" type="button" class="dropdown-toggle btn btn-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
    True (DEFAULT)
    <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
  </button>
  <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-outside">
    <li><a class="dropdown-item" href="#">My Profile</a></li>
    <li><a class="dropdown-item" href="#">Settings</a></li>
    <li><a class="dropdown-item" href="#">Billing</a></li>
    <li><a class="dropdown-item" href="#">FAQs</a></li>
  </ul>
</div>

<div class="dropdown relative inline-flex [--auto-close:inside]">
  <button id="dropdown-transportation" type="button" class="dropdown-toggle btn btn-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
    Inside
    <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
  </button>
  <div class="dropdown-menu dropdown-open:opacity-100 hidden" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-transportation">
    <div class="dropdown-item gap-4">
      <input id="dropdown-radio-car" name="dropdown-item-radio-2" type="radio" class="radio radio-primary" checked/>
      <label for="dropdown-radio-car" class="label-text text-base-content block text-sm font-semibold">Car </label>
    </div>
    <div class="dropdown-item gap-4">
      <input id="dropdown-radio-bicycle" name="dropdown-item-radio-2" type="radio" class="radio radio-primary" />
      <label for="dropdown-radio-bicycle" class="label-text text-base-content text-sm font-semibold"> Bicycle </label>
    </div>
  </div>
</div>

<div class="dropdown relative inline-flex [--auto-close:outside]">
  <button id="dropdown-outside" type="button" class="dropdown-toggle btn btn-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
    Outside
    <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
  </button>
  <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-outside">
    <li><a class="dropdown-item" href="#">My Profile</a></li>
    <li><a class="dropdown-item" href="#">Settings</a></li>
    <li><a class="dropdown-item" href="#">Billing</a></li>
    <li><a class="dropdown-item" href="#">FAQs</a></li>
  </ul>
</div>

<div class="dropdown relative inline-flex [--auto-close:false]">
  <button id="dropdown-false" type="button" class="dropdown-toggle btn btn-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
    False
    <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
  </button>
  <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-false">
    <li><a class="dropdown-item" href="#">My Profile</a></li>
    <li><a class="dropdown-item" href="#">Settings</a></li>
    <li><a class="dropdown-item" href="#">Billing</a></li>
    <li><a class="dropdown-item" href="#">FAQs</a></li>
  </ul>
</div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="dropdown relative inline-flex">
  <button id="scope-dropdown" type="button" class="dropdown-toggle btn btn-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
    Dropdown
    <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
  </button>
  <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="scope-dropdown">
    <li><a class="dropdown-item" href="#">Send My Profile</a></li>
    <li><a class="dropdown-item" href="#">View Settings</a></li>
    <li class="dropdown relative [--scope:window] [--offset:15] [--placement:right-start]">
      <button id="scope-dropdown-nested" class="dropdown-toggle dropdown-item justify-between"  aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
        More Options
        <span class="icon-[componentx--chevron-right] size-4 rtl:rotate-180"></span>
      </button>
      <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="scope-dropdown-nested">
        <li><a class="dropdown-item" href="#">Download Documents</a></li>
        <li><a class="dropdown-item" href="#">Manage FAQs</a></li>
      </ul>
    </li>
    <li><a class="dropdown-item" href="#">Logout</a></li>
  </ul>
</div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="w-full">
  <div class="dropdown relative inline-flex [--strategy:absolute]">
    <button id="dropdown-strategy" type="button" class="dropdown-toggle btn btn-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
      Dropdown
      <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
    </button>
    <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60 rtl:left-0" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-strategy">
      <li><a class="dropdown-item" href="#">My Profile</a></li>
      <li><a class="dropdown-item" href="#">Settings</a></li>
      <li><a class="dropdown-item" href="#">Billing</a></li>
      <li><a class="dropdown-item" href="#">FAQs</a></li>
    </ul>
  </div>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="dropdown relative inline-flex [--offset:30]">
  <button id="dropdown-offset" type="button" class="dropdown-toggle btn btn-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
    Dropdown
    <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
  </button>
  <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-offset">
    <li><a class="dropdown-item" href="#">My Profile</a></li>
    <li><a class="dropdown-item" href="#">Settings</a></li>
    <li><a class="dropdown-item" href="#">Billing</a></li>
    <li><a class="dropdown-item" href="#">FAQs</a></li>
  </ul>
</div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="dropdown relative inline-flex [--flip:false]">
  <button id="dropdown-flip" type="button" class="dropdown-toggle btn btn-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
    Dropdown
    <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
  </button>
  <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-flip">
    <li><a class="dropdown-item" href="#">My Profile</a></li>
    <li><a class="dropdown-item" href="#">Settings</a></li>
    <li><a class="dropdown-item" href="#">Billing</a></li>
    <li><a class="dropdown-item" href="#">FAQs</a></li>
  </ul>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="dropdown relative inline-flex [--placement:top-start]">
  <button id="dropdown-dropup-start" type="button" class="dropdown-toggle btn btn-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
    Top start
    <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
  </button>
  <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-dropup-start">
    <li><a class="dropdown-item" href="#">My Profile</a></li>
    <li><a class="dropdown-item" href="#">Settings</a></li>
    <li><a class="dropdown-item" href="#">Billing</a></li>
    <li><a class="dropdown-item" href="#">FAQs</a></li>
  </ul>
</div>

<div class="dropdown relative inline-flex [--placement:top]">
  <button id="dropdown-dropup" type="button" class="dropdown-toggle btn btn-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
    Top
    <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
  </button>
  <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-dropup">
    <li><a class="dropdown-item" href="#">My Profile</a></li>
    <li><a class="dropdown-item" href="#">Settings</a></li>
    <li><a class="dropdown-item" href="#">Billing</a></li>
    <li><a class="dropdown-item" href="#">FAQs</a></li>
  </ul>
</div>

<div class="dropdown relative inline-flex [--placement:top-end]">
  <button id="dropdown-dropup-end" type="button" class="dropdown-toggle btn btn-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
    Top end
    <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
  </button>
  <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-dropup-end">
    <li><a class="dropdown-item" href="#">My Profile</a></li>
    <li><a class="dropdown-item" href="#">Settings</a></li>
    <li><a class="dropdown-item" href="#">Billing</a></li>
    <li><a class="dropdown-item" href="#">FAQs</a></li>
  </ul>
</div>
```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="dropdown relative inline-flex">
  <button id="dropdown-bottom-start" type="button" class="dropdown-toggle btn btn-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
    Bottom start
    <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
  </button>
  <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-bottom-start">
    <li><a class="dropdown-item" href="#"> My Profile </a></li>
    <li><a class="dropdown-item" href="#"> Settings </a></li>
    <li><a class="dropdown-item" href="#"> Billing </a></li>
    <li><a class="dropdown-item" href="#"> FAQs </a></li>
  </ul>
</div>

<div class="dropdown relative inline-flex [--placement:bottom]">
  <buttom id="dropdown-bottom" type="button" class="dropdown-toggle btn btn-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
    Bottom
    <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
  </buttom>
  <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-bottom">
    <li><a class="dropdown-item" href="#"> My Profile </a></li>
    <li><a class="dropdown-item" href="#"> Settings </a></li>
    <li><a class="dropdown-item" href="#"> Billing </a></li>
    <li><a class="dropdown-item" href="#"> FAQs </a></li>
  </ul>
</div>

<div class="dropdown relative inline-flex [--placement:bottom-end]">
  <button id="dropdown-bottom-start" type="button" class="dropdown-toggle btn btn-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
    Bottom end
    <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
  </button>
  <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-bottom-start">
    <li><a class="dropdown-item" href="#"> My Profile </a></li>
    <li><a class="dropdown-item" href="#"> Settings </a></li>
    <li><a class="dropdown-item" href="#"> Billing </a></li>
    <li><a class="dropdown-item" href="#"> FAQs </a></li>
  </ul>
</div>
```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex flex-col gap-9">
  <div class="dropdown relative inline-flex [--placement:right-start]">
    <button id="dropdown-dropright-start" type="button" class="dropdown-toggle btn btn-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
      Right start
      <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
    </button>
    <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-dropright-start">
      <li><a class="dropdown-item" href="#">My Profile</a></li>
      <li><a class="dropdown-item" href="#">Settings</a></li>
      <li><a class="dropdown-item" href="#">Billing</a></li>
      <li><a class="dropdown-item" href="#">FAQs</a></li>
    </ul>
  </div>

  <div class="dropdown relative inline-flex [--placement:right]">
    <buttom id="dropdown-dropright" type="button" class="dropdown-toggle btn btn-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
      Right
      <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
    </buttom>
    <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-dropright">
      <li><a class="dropdown-item" href="#">My Profile</a></li>
      <li><a class="dropdown-item" href="#">Settings</a></li>
      <li><a class="dropdown-item" href="#">Billing</a></li>
      <li><a class="dropdown-item" href="#">FAQs</a></li>
    </ul>
  </div>

  <div class="dropdown relative inline-flex [--placement:right-end]">
    <button id="dropdown-dropright-end" type="button" class="dropdown-toggle btn btn-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
      Right end
      <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
    </button>
    <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-dropright-end">
      <li><a class="dropdown-item" href="#">My Profile</a></li>
      <li><a class="dropdown-item" href="#">Settings</a></li>
      <li><a class="dropdown-item" href="#">Billing</a></li>
      <li><a class="dropdown-item" href="#">FAQs</a></li>
    </ul>
  </div>
</div>
```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="dropdown relative inline-flex [--placement:left-start]">
  <button id="dropdown-dropleft-start" type="button" class="dropdown-toggle btn btn-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
    Left start
    <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
  </button>
  <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-dropleft-start">
    <li><a class="dropdown-item" href="#"> My Profile </a></li>
    <li><a class="dropdown-item" href="#"> Settings </a></li>
    <li><a class="dropdown-item" href="#"> Billing </a></li>
    <li><a class="dropdown-item" href="#"> FAQs </a></li>
  </ul>
</div>

<div class="dropdown relative inline-flex [--placement:left]">
  <buttom id="dropdown-dropleft" type="button" class="dropdown-toggle btn btn-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
    Left
    <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
  </buttom>
  <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-dropleft">
    <li><a class="dropdown-item" href="#"> My Profile </a></li>
    <li><a class="dropdown-item" href="#"> Settings </a></li>
    <li><a class="dropdown-item" href="#"> Billing </a></li>
    <li><a class="dropdown-item" href="#"> FAQs </a></li>
  </ul>
</div>

<div class="dropdown relative inline-flex [--placement:left-end]">
  <button id="dropdown-dropleft-end" type="button" class="dropdown-toggle btn btn-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
    Left end
    <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
  </button>
  <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-dropleft-end">
    <li><a class="dropdown-item" href="#"> My Profile </a></li>
    <li><a class="dropdown-item" href="#"> Settings </a></li>
    <li><a class="dropdown-item" href="#"> Billing </a></li>
    <li><a class="dropdown-item" href="#"> FAQs </a></li>
  </ul>
</div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex gap-10 flex-wrap">
  <div class="dropdown relative inline-flex --prevent-on-load-init" id="dropdown-method">
    <button id="dropdown-method-usage" type="button" class="dropdown-toggle btn btn-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
      Dropdown
      <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
    </button>
    <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-method-usage">
      <li><a class="dropdown-item" href="#">My Profile</a></li>
      <li><a class="dropdown-item" href="#">Settings</a></li>
      <li><a class="dropdown-item" href="#">Billing</a></li>
      <li><a class="dropdown-item" href="#">FAQs</a></li>
    </ul>
  </div>

<button class="btn btn-primary" id="open-btn">Method</button>

</div>
```

```js
<script>
  window.addEventListener('load', function () {
    const dropdown = new HSDropdown(document.querySelector('#dropdown-method'))
    const openBtn = document.querySelector('#open-btn')

    openBtn.addEventListener('click', () => {
      dropdown.open()
    })
  })
</script>


```

I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="dropdown relative inline-flex" id="dropdown-event">
  <button id="dropdown-event-usage" type="button" class="dropdown-toggle btn btn-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
    Dropdown
    <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
  </button>
  <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-event-usage">
    <li><a class="dropdown-item" href="#">My Profile</a></li>
    <li><a class="dropdown-item" href="#">Settings</a></li>
    <li><a class="dropdown-item" href="#">Billing</a></li>
    <li><a class="dropdown-item" href="#">FAQs</a></li>
  </ul>
</div>
```

```js
<script>
  window.addEventListener('load', function () {
    const { element } = HSDropdown.getInstance('#dropdown-event', true)

    element.on('open', instance => {
      console.log('open')
    })
    element.on('close', instance => {
      console.log('close')
    })
  })
</script>


```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
