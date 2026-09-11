---
name: "Tabs & Pills"
library: "ComponentX"
id: "tabs-pills"
type: "button"
quality: "standard"
tags: ["button", "component", "data", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Tabs & Pills

> **Type:** `button` · **Quality:** `standard` · **ID:** `tabs-pills`
> **Path:** `components/button/tabs-pills.md`

**Tabs & Pills** is a premium, production-ready component from the **ComponentX** library — engineered for button interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `button`, `data`, `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Tabs & Pills** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
<nav class="tabs tabs-bordered" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
  <button type="button" class="tab active-tab:tab-active active" id="tabs-basic-item-1" data-tab="#tabs-basic-1" aria-controls="tabs-basic-1" role="tab" aria-selected="true" >
    Home
  </button>
  <button type="button" class="tab active-tab:tab-active" id="tabs-basic-item-2" data-tab="#tabs-basic-2" aria-controls="tabs-basic-2" role="tab" aria-selected="false" >
    Profile
  </button>
  <button type="button" class="tab active-tab:tab-active" id="tabs-basic-item-3" data-tab="#tabs-basic-3" aria-controls="tabs-basic-3" role="tab" aria-selected="false" >
    Messages
  </button>
</nav>

<div class="mt-3">
  <div id="tabs-basic-1" role="tabpanel" aria-labelledby="tabs-basic-item-1">
    <p class="text-base-content/80">
      Welcome to the <span class="text-base-content font-semibold">Home tab!</span> Explore the latest updates and news here.
    </p>
  </div>
  <div id="tabs-basic-2" class="hidden" role="tabpanel" aria-labelledby="tabs-basic-item-2">
    <p class="text-base-content/80">
      This is your <span class="text-base-content font-semibold">Profile</span> tab, where you can update your personal information and manage your account details.
    </p>
  </div>
  <div id="tabs-basic-3" class="hidden" role="tabpanel" aria-labelledby="tabs-basic-item-3">
    <p class="text-base-content/80">
      <span class="text-base-content font-semibold">Messages:</span> View your recent messages, chat with friends, and manage your conversations.
    </p>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<nav class="tabs tabs-bordered" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
  <button type="button" class="tab active-tab:tab-active active w-full" id="tabs-basic-filled-item-1" data-tab="#tabs-basic-filled-1" aria-controls="tabs-basic-filled-1" role="tab" aria-selected="true">
    Home
  </button>
  <button type="button" class="tab active-tab:tab-active w-full" id="tabs-basic-filled-item-2" data-tab="#tabs-basic-filled-2" aria-controls="tabs-basic-filled-2" role="tab" aria-selected="false">
    Profile
  </button>
  <button type="button" class="tab active-tab:tab-active w-full" id="tabs-basic-filled-item-3" data-tab="#tabs-basic-filled-3" aria-controls="tabs-basic-filled-3" role="tab" aria-selected="false">
    Messages
  </button>
</nav>

<div class="mt-3">
  <div id="tabs-basic-filled-1" role="tabpanel" aria-labelledby="tabs-basic-filled-item-1">
    <p class="text-base-content/80">
      Welcome to the <span class="text-base-content font-semibold">Home tab!</span> Explore the latest updates and news here.
    </p>
  </div>
  <div id="tabs-basic-filled-2" class="hidden" role="tabpanel" aria-labelledby="tabs-basic-filled-item-2">
    <p class="text-base-content/80">
      This is your <span class="text-base-content font-semibold">Profile</span> tab, where you can update your personal information and manage your account details.
    </p>
  </div>
  <div id="tabs-basic-filled-3" class="hidden" role="tabpanel" aria-labelledby="tabs-basic-filled-item-3">
    <p class="text-base-content/80">
      <span class="text-base-content font-semibold">Messages:</span> View your recent messages, chat with friends, and manage your conversations.
    </p>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex">
  <nav class="tabs tabs-bordered tabs-vertical" aria-label="Tabs" role="tablist" data-tabs-vertical="true" aria-orientation="horizontal">
    <button type="button" class="tab active-tab:tab-active active" id="tabs-vertical-item-1" data-tab="#tabs-vertical-1" aria-controls="tabs-vertical-1" role="tab" aria-selected="true">
      Home
    </button>
    <button type="button" class="tab active-tab:tab-active" id="tabs-vertical-item-2" data-tab="#tabs-vertical-2" aria-controls="tabs-vertical-2" role="tab" aria-selected="false">
      Profile
    </button>
    <button type="button" class="tab active-tab:tab-active " id="tabs-vertical-item-3" data-tab="#tabs-vertical-3" aria-controls="tabs-vertical-3" role="tab" aria-selected="false">
      Messages
    </button>
  </nav>

  <div class="ms-3">
    <div id="tabs-vertical-1" role="tabpanel" aria-labelledby="tabs-vertical-item-1">
      <p class="text-base-content/80"> Welcome to the <span class="text-base-content font-semibold">Home tab!</span> Explore the latest updates and news here. </p>
    </div>
    <div id="tabs-vertical-2" class="hidden" role="tabpanel" aria-labelledby="tabs-vertical-item-2">
      <p class="text-base-content/80"> This is your <span class="text-base-content font-semibold">Profile</span> tab, where you can update your personal information and manage your account details. </p>
    </div>
    <div id="tabs-vertical-3" class="hidden" role="tabpanel" aria-labelledby="tabs-vertical-item-3">
      <p class="text-base-content/80"> <span class="text-base-content font-semibold">Messages:</span> View your recent messages, chat with friends, and manage your conversations. </p>
    </div>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<!-- Extra small -->
<nav class="tabs tabs-bordered tabs-xs" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
  <button type="button" class="tab active-tab:tab-active active" id="tabs-xs-item-1" data-tab="#tabs-xs-1" aria-controls="tabs-xs-1" role="tab" aria-selected="true">
    Home
  </button>
  <button type="button" class="tab active-tab:tab-active" id="tabs-xs-item-2" data-tab="#tabs-xs-2" aria-controls="tabs-xs-2" role="tab" aria-selected="false">
    Profile
  </button>
  <button type="button" class="tab active-tab:tab-active" id="tabs-xs-item-3" data-tab="#tabs-xs-3" aria-controls="tabs-xs-3" role="tab" aria-selected="false">
    Messages
  </button>
</nav>

<div class="mt-1.5">
  <div id="tabs-xs-1" role="tabpanel" aria-labelledby="tabs-xs-item-1">
    <p class="text-base-content/80 text-sm">
      Welcome to the
      <span class="text-base-content font-semibold">Home tab!</span>
      Explore the latest updates and news here.
    </p>
  </div>
  <div id="tabs-xs-2" class="hidden" role="tabpanel" aria-labelledby="tabs-xs-item-2">
    <p class="text-base-content/80 text-sm">
      This is your
      <span class="text-base-content font-semibold">Profile</span>
      tab, where you can update your personal information and manage your account details.
    </p>
  </div>
  <div id="tabs-xs-3" class="hidden" role="tabpanel" aria-labelledby="tabs-xs-item-3">
    <p class="text-base-content/80 text-sm">
      <span class="text-base-content font-semibold">Messages:</span>
      View your recent messages, chat with friends, and manage your conversations.
    </p>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<!-- Small -->
<nav class="tabs tabs-bordered tabs-sm" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
  <button type="button" class="tab active-tab:tab-active active" id="tabs-sm-item-1" data-tab="#tabs-sm-1" aria-controls="tabs-sm-1" role="tab" aria-selected="true">
    Home
  </button>
  <button type="button" class="tab active-tab:tab-active" id="tabs-sm-item-2" data-tab="#tabs-sm-2" aria-controls="tabs-sm-2" role="tab" aria-selected="false">
    Profile
  </button>
  <button type="button" class="tab active-tab:tab-active" id="tabs-sm-item-3" data-tab="#tabs-sm-3" aria-controls="tabs-sm-3" role="tab" aria-selected="false">
    Messages
  </button>
</nav>

<div class="mt-2">
  <div id="tabs-sm-1" role="tabpanel" aria-labelledby="tabs-sm-item-1">
    <p class="text-base-content/80 text-sm">
      Welcome to the
      <span class="text-base-content font-semibold">Home tab!</span>
      Explore the latest updates and news here.
    </p>
  </div>
  <div id="tabs-sm-2" class="hidden" role="tabpanel" aria-labelledby="tabs-sm-item-2">
    <p class="text-base-content/80 text-sm">
      This is your
      <span class="text-base-content font-semibold">Profile</span>
      tab, where you can update your personal information and manage your account details.
    </p>
  </div>
  <div id="tabs-sm-3" class="hidden" role="tabpanel" aria-labelledby="tabs-sm-item-3">
    <p class="text-base-content/80 text-sm">
      <span class="text-base-content font-semibold">Messages:</span>
      View your recent messages, chat with friends, and manage your conversations.
    </p>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<nav class="tabs tabs-bordered tabs-md" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
  <button type="button" class="tab active-tab:tab-active active" id="tabs-default-item-1" data-tab="#tabs-default-1" aria-controls="tabs-default-1" role="tab" aria-selected="true">
    Home
  </button>
  <button type="button" class="tab active-tab:tab-active" id="tabs-default-item-2" data-tab="#tabs-default-2" aria-controls="tabs-default-2" role="tab" aria-selected="false">
    Profile
  </button>
  <button type="button" class="tab active-tab:tab-active" id="tabs-default-item-3" data-tab="#tabs-default-3" aria-controls="tabs-default-3" role="tab" aria-selected="false">
    Messages
  </button>
</nav>

<div class="mt-2.5">
  <div id="tabs-default-1" role="tabpanel" aria-labelledby="tabs-default-item-1">
    <p class="text-base-content/80 text-lg">
      Welcome to the
      <span class="text-base-content font-semibold">Home tab!</span>
      Explore the latest updates and news here.
    </p>
  </div>
  <div id="tabs-default-2" class="hidden" role="tabpanel" aria-labelledby="tabs-default-item-2">
    <p class="text-base-content/80 text-lg">
      This is your
      <span class="text-base-content font-semibold">Profile</span>
      tab, where you can update your personal information and manage your account details.
    </p>
  </div>
  <div id="tabs-default-3" class="hidden" role="tabpanel" aria-labelledby="tabs-default-item-3">
    <p class="text-base-content/80 text-lg">
      <span class="text-base-content font-semibold">Messages:</span>
      View your recent messages, chat with friends, and manage your conversations.
    </p>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<nav class="tabs tabs-bordered tabs-lg overflow-x-auto" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
  <button type="button" class="tab active-tab:tab-active active" id="tabs-large-item-1" data-tab="#tabs-large-1" aria-controls="tabs-large-1" role="tab" aria-selected="true">
    Home
  </button>
  <button type="button" class="tab active-tab:tab-active" id="tabs-large-item-2" data-tab="#tabs-large-2" aria-controls="tabs-large-2" role="tab" aria-selected="false">
    Profile
  </button>
  <button type="button" class="tab active-tab:tab-active" id="tabs-large-item-3" data-tab="#tabs-large-3" aria-controls="tabs-large-3" role="tab" aria-selected="false">
    Messages
  </button>
</nav>

<div class="mt-3.5">
  <div id="tabs-large-1" role="tabpanel" aria-labelledby="tabs-large-item-1">
    <p class="text-base-content/80 text-lg">
      Welcome to the
      <span class="text-base-content font-semibold">Home tab!</span>
      Explore the latest updates and news here.
    </p>
  </div>
  <div id="tabs-large-2" class="hidden" role="tabpanel" aria-labelledby="tabs-large-item-2">
    <p class="text-base-content/80 text-lg">
      This is your
      <span class="text-base-content font-semibold">Profile</span>
      tab, where you can update your personal information and manage your account details.
    </p>
  </div>
  <div id="tabs-large-3" class="hidden" role="tabpanel" aria-labelledby="tabs-large-item-3">
    <p class="text-base-content/80 text-lg">
      <span class="text-base-content font-semibold">Messages:</span>
      View your recent messages, chat with friends, and manage your conversations.
    </p>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<nav class="tabs tabs-bordered tabs-xl overflow-x-auto" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
  <button type="button" class="tab active-tab:tab-active active" id="tabs-extra-large-item-1" data-tab="#tabs-extra-large-1" aria-controls="tabs-extra-large-1" role="tab" aria-selected="true">
    Home
  </button>
  <button type="button" class="tab active-tab:tab-active" id="tabs-extra-large-item-2" data-tab="#tabs-extra-large-2" aria-controls="tabs-extra-large-2" role="tab" aria-selected="false">
    Profile
  </button>
  <button type="button" class="tab active-tab:tab-active" id="tabs-extra-large-item-3" data-tab="#tabs-extra-large-3" aria-controls="tabs-extra-large-3" role="tab" aria-selected="false">
    Messages
  </button>
</nav>

<div class="mt-3.5">
  <div id="tabs-extra-large-1" role="tabpanel" aria-labelledby="tabs-extra-large-item-1">
    <p class="text-base-content/80 text-lg">
      Welcome to the
      <span class="text-base-content font-semibold">Home tab!</span>
      Explore the latest updates and news here.
    </p>
  </div>
  <div id="tabs-extra-large-2" class="hidden" role="tabpanel" aria-labelledby="tabs-extra-large-item-2">
    <p class="text-base-content/80 text-lg">
      This is your
      <span class="text-base-content font-semibold">Profile</span>
      tab, where you can update your personal information and manage your account details.
    </p>
  </div>
  <div id="tabs-extra-large-3" class="hidden" role="tabpanel" aria-labelledby="tabs-extra-large-item-3">
    <p class="text-base-content/80 text-lg">
      <span class="text-base-content font-semibold">Messages:</span>
      View your recent messages, chat with friends, and manage your conversations.
    </p>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<nav class="tabs tabs-bordered  justify-center" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
  <button type="button" class="tab active-tab:tab-active active" id="tabs-center-item-1" data-tab="#tabs-center-1" aria-controls="tabs-center-1" role="tab" aria-selected="true">
    Home
  </button>
  <button type="button" class="tab active-tab:tab-active" id="tabs-center-item-2" data-tab="#tabs-center-2" aria-controls="tabs-center-2" role="tab" aria-selected="false">
    Profile
  </button>
  <button type="button" class="tab active-tab:tab-active" id="tabs-center-item-3" data-tab="#tabs-center-3" aria-controls="tabs-center-3" role="tab" aria-selected="false">
    Messages
  </button>
</nav>

<div class="mt-3">
  <div id="tabs-center-1" role="tabpanel" aria-labelledby="tabs-center-item-1">
    <p class="text-base-content/80">
      Welcome to the <span class="text-base-content font-semibold">Home tab!</span> Explore the latest updates and news here.
    </p>
  </div>
  <div id="tabs-center-2" class="hidden" role="tabpanel" aria-labelledby="tabs-center-item-2">
    <p class="text-base-content/80">
      This is your <span class="text-base-content font-semibold">Profile</span> tab, where you can update your personal information and manage your account details.
    </p>
  </div>
  <div id="tabs-center-3" class="hidden" role="tabpanel" aria-labelledby="tabs-center-item-3">
    <p class="text-base-content/80">
      <span class="text-base-content font-semibold">Messages:</span> View your recent messages, chat with friends, and manage your conversations.
    </p>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<nav class="tabs tabs-bordered  justify-end" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
  <button type="button" class="tab active-tab:tab-active active" id="tabs-end-item-1" data-tab="#tabs-end-1" aria-controls="tabs-end-1" role="tab" aria-selected="true">
    Home
  </button>
  <button type="button" class="tab active-tab:tab-active" id="tabs-end-item-2" data-tab="#tabs-end-2" aria-controls="tabs-end-2" role="tab" aria-selected="false">
    Profile
  </button>
  <button type="button" class="tab active-tab:tab-active" id="tabs-end-item-3" data-tab="#tabs-end-3" aria-controls="tabs-end-3" role="tab" aria-selected="false">
    Messages
  </button>
</nav>

<div class="mt-3">
  <div id="tabs-end-1" role="tabpanel" aria-labelledby="tabs-end-item-1">
    <p class="text-base-content/80">
      Welcome to the <span class="text-base-content font-semibold">Home tab!</span> Explore the latest updates and news here.
    </p>
  </div>
  <div id="tabs-end-2" class="hidden" role="tabpanel" aria-labelledby="tabs-end-item-2">
    <p class="text-base-content/80">
      This is your <span class="text-base-content font-semibold">Profile</span> tab, where you can update your personal information and manage your account details.
    </p>
  </div>
  <div id="tabs-end-3" class="hidden" role="tabpanel" aria-labelledby="tabs-end-item-3">
    <p class="text-base-content/80">
      <span class="text-base-content font-semibold">Messages:</span> View your recent messages, chat with friends, and manage your conversations.
    </p>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<nav class="tabs tabs-bordered overflow-x-auto" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
  <button type="button" class="tab active-tab:tab-active active" id="tabs-icons-item-1" data-tab="#tabs-icons-1" aria-controls="tabs-icons-1" role="tab" aria-selected="true">
    <span class="icon-[componentx--home] size-5 shrink-0 me-2"></span>
    Home
  </button>
  <button type="button" class="tab active-tab:tab-active" id="tabs-icons-item-2" data-tab="#tabs-icons-2" aria-controls="tabs-icons-2" role="tab" aria-selected="false">
    <span class="icon-[componentx--user] size-5 shrink-0 me-2"></span>
    Profile
  </button>
  <button type="button" class="tab active-tab:tab-active" id="tabs-icons-item-3" data-tab="#tabs-icons-3" aria-controls="tabs-icons-3" role="tab" aria-selected="false">
    <span class="icon-[componentx--message] size-5 shrink-0 me-2"></span>
    Messages
  </button>
</nav>

<div class="mt-3">
  <div id="tabs-icons-1" role="tabpanel" aria-labelledby="tabs-icons-item-1">
    <p class="text-base-content/80">
      Welcome to the <span class="text-base-content font-semibold">Home tab!</span> Explore the latest updates and news here.
    </p>
  </div>
  <div id="tabs-icons-2" class="hidden" role="tabpanel" aria-labelledby="tabs-icons-item-2">
    <p class="text-base-content/80">
      This is your <span class="text-base-content font-semibold">Profile</span> tab, where you can update your personal information and manage your account details.
    </p>
  </div>
  <div id="tabs-icons-3" class="hidden" role="tabpanel" aria-labelledby="tabs-icons-item-3">
    <p class="text-base-content/80">
      <span class="text-base-content font-semibold">Messages:</span> View your recent messages, chat with friends, and manage your conversations.
    </p>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<nav class="tabs tabs-bordered overflow-x-auto" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
  <button type="button" class="tab active-tab:tab-active active" id="tabs-badges-item-1" data-tab="#tabs-badges-1" aria-controls="tabs-badges-1" role="tab" aria-selected="true">
    Home
    <span class="badge badge-soft badge-primary badge-sm ms-2 rounded-full">+99</span>
  </button>
  <button type="button" class="tab active-tab:tab-active" id="tabs-badges-item-2" data-tab="#tabs-badges-2" aria-controls="tabs-badges-2" role="tab" aria-selected="false">
    Profile
  </button>
  <button type="button" class="tab active-tab:tab-active" id="tabs-badges-item-3" data-tab="#tabs-badges-3" aria-controls="tabs-badges-3" role="tab" aria-selected="false">
    Messages
    <span class="badge badge-soft badge-primary badge-sm ms-2 rounded-full">+200</span>
  </button>
</nav>

<div class="mt-3">
  <div id="tabs-badges-1" role="tabpanel" aria-labelledby="tabs-badges-item-1">
    <p class="text-base-content/80">
      Welcome to the <span class="text-base-content font-semibold">Home tab!</span> Explore the latest updates and news here.
    </p>
  </div>
  <div id="tabs-badges-2" class="hidden" role="tabpanel" aria-labelledby="tabs-badges-item-2">
    <p class="text-base-content/80">
      This is your <span class="text-base-content font-semibold">Profile</span> tab, where you can update your personal information and manage your account details.
    </p>
  </div>
  <div id="tabs-badges-3" class="hidden" role="tabpanel" aria-labelledby="tabs-badges-item-3">
    <p class="text-base-content/80">
      <span class="text-base-content font-semibold">Messages:</span> View your recent messages, chat with friends, and manage your conversations.
    </p>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<nav class="tabs tabs-lifted" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
  <button type="button" class="tab active-tab:tab-active active" id="tabs-lifted-item-1" data-tab="#tabs-lifted-1" aria-controls="tabs-lifted-1" role="tab" aria-selected="true">
    Home
  </button>
  <button type="button" class="tab active-tab:tab-active" id="tabs-lifted-item-2" data-tab="#tabs-lifted-2" aria-controls="tabs-lifted-2" role="tab" aria-selected="false">
    Profile
  </button>
  <button type="button" class="tab active-tab:tab-active" id="tabs-lifted-item-3" data-tab="#tabs-lifted-3" aria-controls="tabs-lifted-3" role="tab" aria-selected="false">
    Messages
  </button>
</nav>

<div class="mt-3">
  <div id="tabs-lifted-1" role="tabpanel" aria-labelledby="tabs-lifted-item-1">
    <p class="text-base-content/80">
      Welcome to the <span class="text-base-content font-semibold">Home tab!</span> Explore the latest updates and news here.
    </p>
  </div>
  <div id="tabs-lifted-2" class="hidden" role="tabpanel" aria-labelledby="tabs-lifted-item-2">
    <p class="text-base-content/80">
      This is your <span class="text-base-content font-semibold">Profile</span> tab, where you can update your personal information and manage your account details.
    </p>
  </div>
  <div id="tabs-lifted-3" class="hidden" role="tabpanel" aria-labelledby="tabs-lifted-item-3">
    <p class="text-base-content/80">
      <span class="text-base-content font-semibold">Messages:</span> View your recent messages, chat with friends, and manage your conversations.
    </p>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<nav class="tabs tabs-bordered overflow-x-auto" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
  <button type="button" class="tab active-tab:tab-active active" id="tabs-scroll-item-1" data-tab="#tabs-scroll-1" aria-controls="#tabs-scroll-1" role="tab" aria-selected="true">
    Home
  </button>
  <button type="button" class="tab active-tab:tab-active" id="tabs-scroll-item-2" data-tab="#tabs-scroll-2" aria-controls="#tabs-scroll-2" role="tab" aria-selected="false">
    Profile
  </button>
  <button type="button" class="tab active-tab:tab-active" id="tabs-scroll-item-3" data-tab="#tabs-scroll-3" aria-controls="#tabs-scroll-3" role="tab" aria-selected="false">
    Messages
  </button>
  <button type="button" class="tab active-tab:tab-active" id="tabs-scroll-item-4" data-tab="#tabs-scroll-4" aria-controls="#tabs-scroll-4" role="tab" aria-selected="false">
    Settings
  </button>
  <button type="button" class="tab active-tab:tab-active" id="tabs-scroll-item-5" data-tab="#tabs-scroll-5" aria-controls="#tabs-scroll-5" role="tab" aria-selected="false">
    Help
  </button>
  <button type="button" class="tab active-tab:tab-active" id="tabs-scroll-item-6" data-tab="#tabs-scroll-6" aria-controls="#tabs-scroll-6" role="tab" aria-selected="false">
    Notifications
  </button>
  <button type="button" class="tab active-tab:tab-active" id="tabs-scroll-item-7" data-tab="#tabs-scroll-7" aria-controls="#tabs-scroll-7" role="tab" aria-selected="false">
    Feedback
  </button>
</nav>

<div class="mt-3">
  <div id="tabs-scroll-1" role="tabpanel" aria-labelledby="tabs-scroll-item-1">
    <p class="text-base-content/80">
      Welcome to the <span class="text-base-content font-semibold">Home tab!</span> Explore the latest updates and news here.
    </p>
  </div>
  <div id="tabs-scroll-2" class="hidden" role="tabpanel" aria-labelledby="tabs-scroll-item-2">
    <p class="text-base-content/80">
      This is your <span class="text-base-content font-semibold">Profile</span> tab, where you can update your personal information and manage your account details.
    </p>
  </div>
  <div id="tabs-scroll-3" class="hidden" role="tabpanel" aria-labelledby="tabs-scroll-item-3">
    <p class="text-base-content/80">
      <span class="text-base-content font-semibold">Messages:</span> View your recent messages, chat with friends, and manage your conversations.
    </p>
  </div>
  <div id="tabs-scroll-4" class="hidden" role="tabpanel" aria-labelledby="tabs-scroll-item-4">
    <p class="text-base-content/80">
      <span class="text-base-content font-semibold">Settings:</span> Adjust your preferences, manage your account, and configure your privacy settings here.
    </p>
  </div>
  <div id="tabs-scroll-5" class="hidden" role="tabpanel" aria-labelledby="tabs-scroll-item-5">
    <p class="text-base-content/80">
      <span class="text-base-content font-semibold">Help:</span> Find answers to frequently asked questions, get in touch with support, or read through user guides.
    </p>
  </div>
  <div id="tabs-scroll-6" class="hidden" role="tabpanel" aria-labelledby="tabs-scroll-item-6">
    <p class="text-base-content/80">
      <span class="text-base-content font-semibold">Notifications:</span> Manage your notifications, set preferences, and view your notification history.
    </p>
  </div>
  <div id="tabs-scroll-7" class="hidden" role="tabpanel" aria-labelledby="tabs-scroll-item-7">
    <p class="text-base-content/80">
      <span class="text-base-content font-semibold">Feedback:</span> Share your thoughts, report issues, or suggest new features to improve the platform.
    </p>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<nav class="tabs tabs-bordered" aria-label="Tabs" role="tablist" aria-orientation="horizontal" data-tabs='{
      "eventType": "hover"
    }'>
  <button type="button" class="tab active-tab:tab-active active" id="tabs-hover-item-1" data-tab="#tabs-hover-1" aria-controls="tabs-hover-1" role="tab" aria-selected="true" >
    Home
  </button>
  <button type="button" class="tab active-tab:tab-active" id="tabs-hover-item-2" data-tab="#tabs-hover-2" aria-controls="tabs-hover-2" role="tab" aria-selected="false" >
    Profile
  </button>
  <button type="button" class="tab active-tab:tab-active" id="tabs-hover-item-3" data-tab="#tabs-hover-3" aria-controls="tabs-hover-3" role="tab" aria-selected="false" >
    Messages
  </button>
</nav>

<div class="mt-3">
  <div id="tabs-hover-1" role="tabpanel" aria-labelledby="tabs-hover-item-1">
    <p class="text-base-content/80">
      Welcome to the <span class="text-base-content font-semibold">Home tab!</span> Explore the latest updates and news here.
    </p>
  </div>
  <div id="tabs-hover-2" class="hidden" role="tabpanel" aria-labelledby="tabs-hover-item-2">
    <p class="text-base-content/80">
      This is your <span class="text-base-content font-semibold">Profile</span> tab, where you can update your personal information and manage your account details.
    </p>
  </div>
  <div id="tabs-hover-3" class="hidden" role="tabpanel" aria-labelledby="tabs-hover-item-3">
    <p class="text-base-content/80">
      <span class="text-base-content font-semibold">Messages:</span> View your recent messages, chat with friends, and manage your conversations.
    </p>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<nav id="tabs-to-destroy" class="tabs tabs-bordered" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
  <button type="button" class="tab active-tab:tab-active active" id="tabs-destroy-item-1" data-tab="#tabs-destroy-1" aria-controls="tabs-destroy-1" role="tab" aria-selected="true" >
    Home
  </button>
  <button type="button" class="tab active-tab:tab-active" id="tabs-destroy-item-2" data-tab="#tabs-destroy-2" aria-controls="tabs-destroy-2" role="tab" aria-selected="false" >
    Profile
  </button>
  <button type="button" class="tab active-tab:tab-active" id="tabs-destroy-item-3" data-tab="#tabs-destroy-3" aria-controls="tabs-destroy-3" role="tab" aria-selected="false" >
    Messages
  </button>
</nav>

<div class="mt-3">
  <div id="tabs-destroy-1" role="tabpanel" aria-labelledby="tabs-destroy-item-1">
    <p class="text-base-content/80">
      Welcome to the <span class="text-base-content font-semibold">Home tab!</span> Explore the latest updates and news here.
    </p>
  </div>
  <div id="tabs-destroy-2" class="hidden" role="tabpanel" aria-labelledby="tabs-destroy-item-2">
    <p class="text-base-content/80">
      This is your <span class="text-base-content font-semibold">Profile</span> tab, where you can update your personal information and manage your account details.
    </p>
  </div>
  <div id="tabs-destroy-3" class="hidden" role="tabpanel" aria-labelledby="tabs-destroy-item-3">
    <p class="text-base-content/80">
      <span class="text-base-content font-semibold">Messages:</span> View your recent messages, chat with friends, and manage your conversations.
    </p>
  </div>
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
      const tabs = document.querySelector('#tabs-to-destroy')
      const destroy = document.querySelector('#destroy-btn')
      const reinit = document.querySelector('#reinit-btn')

      destroy.addEventListener('click', () => {
        const { element } = HSTabs.getInstance(tabs, true)

        element.destroy()

        destroy.setAttribute('disabled', 'disabled')
        reinit.removeAttribute('disabled')
      })

      reinit.addEventListener('click', () => {
        HSTabs.autoInit()

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
<select id="tab-select" class="select sm:hidden inline-flex" aria-label="Tabs">
  <option value="#tabs-responsive-1">Home</option>
  <option value="#tabs-responsive-2">Profile</option>
  <option value="#tabs-responsive-3">Messages</option>
</select>

<nav class="tabs tabs-bordered hidden sm:flex" aria-label="Tabs" role="tablist" data-tab-select="#tab-select">
  <button type="button" class="tab active-tab:tab-active active" id="tabs-responsive-item-1" data-tab="#tabs-responsive-1" aria-controls="tabs-responsive-1" role="tab" aria-selected="true">
    Home
  </button>
  <button type="button" class="tab active-tab:tab-active" id="tabs-responsive-item-2" data-tab="#tabs-responsive-2" aria-controls="tabs-responsive-2" role="tab" aria-selected="false">
    Profile
  </button>
  <button type="button" class="tab active-tab:tab-active" id="tabs-responsive-item-3" data-tab="#tabs-responsive-3" aria-controls="tabs-responsive-3" role="tab" aria-selected="false">
    Messages
  </button>
</nav>

<div class="mt-3">
  <div id="tabs-responsive-1" role="tabpanel" aria-labelledby="tabs-responsive-item-1">
    <p class="text-base-content/80">
      Welcome to the <span class="text-base-content font-semibold">Home tab!</span> Explore the latest updates and news here.
    </p>
  </div>
  <div id="tabs-responsive-2" class="hidden" role="tabpanel" aria-labelledby="tabs-responsive-item-2">
    <p class="text-base-content/80">
      This is your <span class="text-base-content font-semibold">Profile</span> tab, where you can update your personal information and manage your account details.
    </p>
  </div>
  <div id="tabs-responsive-3" class="hidden" role="tabpanel" aria-labelledby="tabs-responsive-item-3">
    <p class="text-base-content/80">
      <span class="text-base-content font-semibold">Messages:</span> View your recent messages, chat with friends, and manage your conversations.
    </p>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<nav class="tabs bg-base-200 rounded-field w-fit space-x-1 overflow-x-auto p-1" aria-label="Tabs" role="tablist" aria-orientation="horizontal" >
  <button type="button" class="btn btn-text active-tab:bg-primary active-tab:text-white hover:text-primary active hover:bg-transparent" id="tabs-segment-item-1" data-tab="#tabs-segment-1" aria-controls="tabs-segment-1" role="tab" aria-selected="true" >
    Home
  </button>
  <button type="button" class="btn btn-text active-tab:bg-primary active-tab:text-white hover:text-primary hover:bg-transparent" id="tabs-segment-item-2" data-tab="#tabs-segment-2" aria-controls="tabs-segment-2" role="tab" aria-selected="false" >
    Profile
  </button>
  <button type="button" class="btn btn-text active-tab:bg-primary active-tab:text-white hover:text-primary hover:bg-transparent" id="tabs-segment-item-3" data-tab="#tabs-segment-3" aria-controls="tabs-segment-3" role="tab" aria-selected="false" >
    Messages
  </button>
</nav>

<div class="mt-3">
  <div id="tabs-segment-1" role="tabpanel" aria-labelledby="tabs-segment-item-1">
    <p class="text-base-content/80">
      Welcome to the <span class="text-base-content font-semibold">Home tab!</span> Explore the latest updates and news here.
    </p>
  </div>
  <div id="tabs-segment-2" class="hidden" role="tabpanel" aria-labelledby="tabs-segment-item-2">
    <p class="text-base-content/80">
      This is your <span class="text-base-content font-semibold">Profile</span> tab, where you can update your personal information and manage your account details.
    </p>
  </div>
  <div id="tabs-segment-3" class="hidden" role="tabpanel" aria-labelledby="tabs-segment-item-3">
    <p class="text-base-content/80">
      <span class="text-base-content font-semibold">Messages:</span> View your recent messages, chat with friends, and manage your conversations.
    </p>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<nav class="tabs space-x-1 overflow-x-auto" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
  <button type="button" class="btn btn-text active-tab:bg-primary active-tab:text-white hover:text-primary active hover:bg-primary/20" id="tabs-pill-item-1" data-tab="#tabs-pill-1" aria-controls="tabs-pill-1" role="tab"> 
    Home 
  </button> 
  <button type="button" class="btn btn-text active-tab:bg-primary active-tab:text-white hover:text-primary hover:bg-primary/20" id="tabs-pill-item-2" data-tab="#tabs-pill-2" aria-controls="tabs-pill-2" role="tab">
    Profile
  </button>
  <button type="button" class="btn btn-text active-tab:bg-primary active-tab:text-white hover:text-primary hover:bg-primary/20" id="tabs-pill-item-3" data-tab="#tabs-pill-3" aria-controls="tabs-pill-3" role="tab">
    Messages
  </button>
</nav>

<div class="mt-3">
  <div id="tabs-pill-1" role="tabpanel" aria-labelledby="tabs-pill-item-1">
    <p class="text-base-content/80">
      Welcome to the <span class="text-base-content font-semibold">Home tab!</span> Explore the latest updates and news here.
    </p>
  </div>
  <div id="tabs-pill-2" class="hidden" role="tabpanel" aria-labelledby="tabs-pill-item-2">
    <p class="text-base-content/80">
      This is your <span class="text-base-content font-semibold">Profile</span> tab, where you can update your personal information and manage your account details.
    </p>
  </div>
  <div id="tabs-pill-3" class="hidden" role="tabpanel" aria-labelledby="tabs-pill-item-3">
    <p class="text-base-content/80">
      <span class="text-base-content font-semibold">Messages:</span> View your recent messages, chat with friends, and manage your conversations.
    </p>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<nav class="tabs overflow-x-auto space-x-1 p-1" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
  <button type="button" class="btn btn-text active-tab:bg-primary active-tab:text-white hover:text-primary active hover:bg-primary/20" id="tabs-pill-icon-item-1" data-tab="#tabs-pill-icon-1" aria-controls="tabs-pill-icon-1" role="tab" aria-selected="false">
    <span class="icon-[componentx--home] size-5 shrink-0"></span>
    <span class="hidden sm:inline">Home</span>
  </button>
  <button type="button" class="btn btn-text active-tab:bg-primary active-tab:text-white hover:text-primary hover:bg-primary/20" id="tabs-pill-icon-item-2" data-tab="#tabs-pill-icon-2" aria-controls="tabs-pill-icon-2" role="tab" aria-selected="false">
    <span class="icon-[componentx--user] size-5 shrink-0"></span>
    <span class="hidden sm:inline">Profile</span>
  </button>
  <button type="button" class="btn btn-text active-tab:bg-primary active-tab:text-white hover:text-primary hover:bg-primary/20" id="tabs-pill-icon-item-3" data-tab="#tabs-pill-icon-3" aria-controls="tabs-pill-icon-3" role="tab" aria-selected="false">
    <span class="icon-[componentx--message] size-5 shrink-0"></span>
    <span class="hidden sm:inline">Messages</span>
  </button>
</nav>

<div class="mt-3">
  <div id="tabs-pill-icon-1" role="tabpanel" aria-labelledby="tabs-pill-icon-item-1">
    <p class="text-base-content/80"> 
      Welcome to the <span class="text-base-content font-semibold">Home tab!</span> Explore the latest updates and news here. 
    </p>
  </div>
  <div id="tabs-pill-icon-2" class="hidden" role="tabpanel" aria-labelledby="tabs-pill-icon-item-2">
    <p class="text-base-content/80">
      This is your <span class="text-base-content font-semibold">Profile</span> tab, where you can update your personal information and manage your account details. 
     </p>
  </div>
  <div id="tabs-pill-icon-3" class="hidden" role="tabpanel" aria-labelledby="tabs-pill-icon-item-3">
    <p class="text-base-content/80"> 
      <span class="text-base-content font-semibold">Messages:</span> View your recent messages, chat with friends, and manage your conversations.
     </p>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<nav class="tabs space-x-1 overflow-x-auto" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
  <button type="button" class="grow btn btn-text active-tab:bg-primary active-tab:text-white hover:text-primary active hover:bg-primary/20" id="tabs-fill-item-1" data-tab="#tabs-fill-1" aria-controls="tabs-fill-1" role="tab" aria-selected="false">
    Home
  </button>
  <button type="button" class="grow btn btn-text active-tab:bg-primary active-tab:text-white hover:text-primary hover:bg-primary/20" id="tabs-fill-item-2" data-tab="#tabs-fill-2" aria-controls="tabs-fill-2" role="tab" aria-selected="false">
    Profile
  </button>
  <button type="button" class="grow btn btn-text active-tab:bg-primary active-tab:text-white hover:text-primary hover:bg-primary/20" id="tabs-fill-item-3" data-tab="#tabs-fill-3" aria-controls="tabs-fill-3" role="tab" aria-selected="false">
    Messages
  </button>
</nav>

<div class="mt-3">
  <div id="tabs-fill-1" role="tabpanel" aria-labelledby="tabs-fill-item-1">
    <p class="text-base-content/80">
      Welcome to the <span class="text-base-content font-semibold">Home tab!</span> Explore the latest updates and news here.
    </p>
  </div>
  <div id="tabs-fill-2" class="hidden" role="tabpanel" aria-labelledby="tabs-fill-item-2">
    <p class="text-base-content/80">
      This is your <span class="text-base-content font-semibold">Profile</span> tab, where you can update your personal information and manage your account details.
    </p>
  </div>
  <div id="tabs-fill-3" class="hidden" role="tabpanel" aria-labelledby="tabs-fill-item-3">
    <p class="text-base-content/80">
      <span class="text-base-content font-semibold">Messages:</span> View your recent messages, chat with friends, and manage your conversations.
    </p>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex">
  <nav class="tabs flex-col items-start space-y-1" aria-label="Tabs" role="tablist" data-tabs-vertical="true" aria-orientation="horizontal" >
    <button type="button" class="btn btn-text active-tab:bg-primary active-tab:text-white hover:text-primary hover:bg-primary/20 active w-full" id="tabs-pill-vertical-item-1" data-tab="#tabs-pill-vertical-1" aria-controls="tabs-pill-vertical-1" role="tab" aria-selected="true" >
      Home
    </button>
    <button type="button" class="btn btn-text active-tab:bg-primary active-tab:text-white hover:text-primary hover:bg-primary/20 w-full" id="tabs-pill-vertical-item-2" data-tab="#tabs-pill-vertical-2" aria-controls="tabs-pill-vertical-2" role="tab" aria-selected="false" >
      Profile
    </button>
    <button type="button" class="btn btn-text active-tab:bg-primary active-tab:text-white hover:text-primary hover:bg-primary/20 w-full" id="tabs-pill-vertical-item-3" data-tab="#tabs-pill-vertical-3" aria-controls="tabs-pill-vertical-3" role="tab" aria-selected="false" >
      Messages
    </button>
  </nav>

  <div class="ms-3">
    <div id="tabs-pill-vertical-1" role="tabpanel" aria-labelledby="tabs-pill-vertical-item-1">
      <p class="text-base-content/80">
        Welcome to the <span class="text-base-content font-semibold">Home tab!</span> Explore the latest updates and news here.
      </p>
    </div>
    <div id="tabs-pill-vertical-2" class="hidden" role="tabpanel" aria-labelledby="tabs-pill-vertical-item-2">
      <p class="text-base-content/80">
        This is your <span class="text-base-content font-semibold">Profile</span> tab, where you can update your personal information and manage your account details.
      </p>
    </div>
    <div id="tabs-pill-vertical-3" class="hidden" role="tabpanel" aria-labelledby="tabs-pill-vertical-item-3">
      <p class="text-base-content/80">
        <span class="text-base-content font-semibold">Messages:</span> View your recent messages, chat with friends, and manage your conversations.
      </p>
    </div>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<nav class="tabs tabs-bordered" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
  <button type="button" class="tab active-tab:tab-active active" id="tabs-method-item-1" data-tab="#tabs-method-1" aria-controls="tabs-method-1" role="tab" aria-selected="true">
    Home
  </button>
  <button type="button" class="tab active-tab:tab-active" id="tabs-method-item-2" data-tab="#tabs-method-2" aria-controls="tabs-method-2" role="tab" aria-selected="false">
    Profile
  </button>
  <button type="button" class="tab active-tab:tab-active" id="tabs-method-item-3" data-tab="#tabs-method-3" aria-controls="tabs-method-3" role="tab" aria-selected="false">
    Messages
  </button>
</nav>

<div class="mt-3">
  <div id="tabs-method-1" role="tabpanel" aria-labelledby="tabs-method-item-1">
    <p class="text-base-content/80">
      Welcome to the <span class="text-base-content font-semibold">Home tab!</span> Explore the latest updates and news here.
    </p>
  </div>
  <div id="tabs-method-2" class="hidden" role="tabpanel" aria-labelledby="tabs-method-item-2">
    <p class="text-base-content/80">
      This is your <span class="text-base-content font-semibold">Profile</span> tab, where you can update your personal information and manage your account details.
    </p>
  </div>
  <div id="tabs-method-3" class="hidden" role="tabpanel" aria-labelledby="tabs-method-item-3">
    <p class="text-base-content/80">
      <span class="text-base-content font-semibold">Messages:</span> View your recent messages, chat with friends, and manage your conversations.
    </p>
  </div>
</div>

<button type="button" class="btn btn-primary mt-3" id="open-btn"> Messages </button>
```

```js
<script>                        
  window.addEventListener('load', function () {
    const openBtn = document.querySelector('#open-btn')
    
    openBtn.addEventListener('click', () => {
      HSTabs.open(document.querySelector('#tabs-method-item-3'))
    })
  })
</script>


```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<nav class="tabs tabs-bordered" aria-label="Tabs" role="tablist" id="tabs-event" aria-orientation="horizontal">
  <button type="button" class="tab active-tab:tab-active active" id="tabs-event-item-1" data-tab="#tabs-event-1" aria-controls="tabs-event-1" role="tab" aria-selected="true">
    Home
  </button>
  <button type="button" class="tab active-tab:tab-active" id="tabs-event-item-2" data-tab="#tabs-event-2" aria-controls="tabs-event-2" role="tab" aria-selected="false">
    Profile
  </button>
  <button type="button" class="tab active-tab:tab-active" id="tabs-event-item-3" data-tab="#tabs-event-3" aria-controls="tabs-event-3" role="tab" aria-selected="false">
    Messages
  </button>
</nav>

<div class="mt-3">
  <div id="tabs-event-1" role="tabpanel" aria-labelledby="tabs-event-item-1">
    <p class="text-base-content/80">
      Welcome to the <span class="text-base-content font-semibold">Home tab!</span> Explore the latest updates and news here.
    </p>
  </div>
  <div id="tabs-event-2" class="hidden" role="tabpanel" aria-labelledby="tabs-event-item-2">
    <p class="text-base-content/80">
      This is your <span class="text-base-content font-semibold">Profile</span> tab, where you can update your personal information and manage your account details.
    </p>
  </div>
  <div id="tabs-event-3" class="hidden" role="tabpanel" aria-labelledby="tabs-event-item-3">
    <p class="text-base-content/80">
      <span class="text-base-content font-semibold">Messages:</span> View your recent messages, chat with friends, and manage your conversations.
    </p>
  </div>
</div>
```

```js
<script>
  window.addEventListener('load', function () {
    const el = HSTabs.getInstance('#tabs-event')

    el.on('change', ({ el, prev, current }) => {
      console.log('el', el)
      console.log('prev', prev)
      console.log('current', current)
    })
  })
</script>


```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
