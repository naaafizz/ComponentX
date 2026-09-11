---
name: "Input"
library: "ComponentX"
id: "input-2"
type: "form"
quality: "standard"
tags: ["card", "form", "input", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Input

> **Type:** `form` · **Quality:** `standard` · **ID:** `input-2`
> **Path:** `components/form/input-2.md`

**Input** is a premium, production-ready component from the **ComponentX** library — engineered for form interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `card`, `form`, `input` workflows.
- **Pattern coverage** — includes `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Input** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
<input type="text" class="input max-w-sm" aria-label="input" />
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<input type="text" placeholder="Type here" class="input max-w-sm" />
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="w-96">
  <label class="label-text" for="labelAndHelperText">Full Name</label>
  <input type="text" placeholder="John Doe" class="input" id="labelAndHelperText" />
  <span class="helper-text">Please write your full name</span>
</div>

<div class="w-96">
  <label class="label-text" for="labelAndHelperTextRight">Full Name</label>
  <input type="text" placeholder="John Doe" class="input" id="labelAndHelperTextRight" />
  <span class="helper-text text-end">Please write your full name</span>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="w-96">
  <label class="label-text sr-only" for="hiddenLabel">Full name</label>
  <input type="text" id="hiddenLabel" class="input" placeholder="John Doe" />
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="w-96">
  <label class="label-text" for="defaultInput">Full name</label>
  <input type="text" placeholder="John Doe" class="input" id="defaultInput" />
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="input-floating w-96">
  <input type="text" placeholder="John Doe" class="input" id="floatingInput" />
  <label class="input-floating-label" for="floatingInput">Full name</label>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<input type="text" placeholder="John Doe" class="input input-xs max-w-sm" />
<input type="text" placeholder="John Doe" class="input input-sm max-w-sm" />
<input type="text" placeholder="John Doe" class="input max-w-sm" />
<input type="text" placeholder="John Doe" class="input input-lg max-w-sm" />
<input type="text" placeholder="John Doe" class="input input-xl max-w-sm" />
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="input-floating max-w-sm">
  <input type="text" placeholder="John Doe" class="input input-xs" id="floatingLabelExtraSmall" />
  <label class="input-floating-label" for="floatingLabelExtraSmall">Full name</label>
</div>

<div class="input-floating max-w-sm">
  <input type="text" placeholder="John Doe" class="input input-sm" id="floatingLabelSmall" />
  <label class="input-floating-label" for="floatingLabelSmall">Full name</label>
</div>

<div class="input-floating max-w-sm">
  <input type="text" placeholder="John Doe" class="input" id="floatingLabelDefault" />
  <label class="input-floating-label" for="floatingLabelDefault">Full name</label>
</div>

<div class="input-floating max-w-sm">
  <input type="text" placeholder="John Doe" class="input input-lg" id="floatingLabelLarge" />
  <label class="input-floating-label" for="floatingLabelLarge">Full Name</label>
</div>

<div class="input-floating max-w-sm">
  <input type="text" placeholder="John Doe" class="input input-xl" id="floatingLabelExtraLarge" />
  <label class="input-floating-label" for="floatingLabelExtraLarge">Full Name</label>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="max-w-sm">
  <label class="label-text" for="successInput">Full Name</label>
  <input type="text" placeholder="John Doe" class="input is-valid" id="successInput" />
  <span class="helper-text">Helper text</span>
</div>

<div class="input-floating max-w-sm">
  <input type="text" placeholder="John Doe" class="input is-valid" id="successFloatingInput" />
  <label class="input-floating-label" for="successFloatingInput">Full name</label>
  <span class="helper-text ps-3">Helper text</span>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="max-w-sm">
  <label class="label-text" for="errorInput">Full Name</label>
  <input type="text" placeholder="John Doe" class="input is-invalid" id="errorInput" />
  <span class="helper-text">Helper text</span>
</div>

<div class="input-floating max-w-sm">
  <input type="text" placeholder="John Doe" class="input is-invalid" id="errorFloatingInput" />
  <label class="input-floating-label" for="errorFloatingInput">Full name</label>
  <span class="helper-text ps-3">Helper text</span>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="input max-w-sm">
  <label class="label-text my-auto me-3 p-0" for="inlineLabelName">Name</label>
  <input type="text" class="grow" placeholder="FlyonUI" id="inlineLabelName" />
</div>
<div class="input max-w-sm">
  <label class="label-text my-auto me-3 p-0" for="inlineLabelEmail">Email</label>
  <input type="email" class="grow" placeholder="admin@site.com" id="inlineLabelEmail" />
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="input max-w-sm">
  <span class="icon-[componentx--user] text-base-content/80 my-auto me-3 size-5 shrink-0"></span>
  <label class="sr-only" for="leadingIconDefault">Full Name</label>
  <input type="text" class="grow" placeholder="John Doe" id="leadingIconDefault" />
</div>

<div class="input max-w-sm">
  <span class="icon-[componentx--user] text-base-content/80 my-auto size-5 shrink-0"></span>
  <div class="input-floating grow">
    <input type="text" placeholder="John Doe" class="ps-3" id="leadingIconFloating" />
    <label class="input-floating-label" for="leadingIconFloating">Full name</label>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="input max-w-sm">
  <input type="text" class="grow" placeholder="xxxx-xxxx-xxxx-xxxx" id="trailingIconDefault" />
  <label class="sr-only" for="trailingIconDefault">Card Number</label>
  <span class="icon-[componentx--brand-mastercard] text-base-content/80 my-auto ms-3 size-5 shrink-0"></span>
</div>

<div class="input max-w-sm">
  <div class="input-floating grow">
    <input type="text" class="grow" placeholder="xxxx-xxxx-xxxx-xxxx" id="trailingIconFloating" />
    <label class="input-floating-label ms-0" for="trailingIconFloating">Full name</label>
  </div>
  <span class="icon-[componentx--brand-mastercard] text-base-content/80 my-auto ms-3 size-5 shrink-0"></span>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="input max-w-sm space-x-3">
  <span class="label-text my-auto">$</span>
  <input type="number" class="grow" placeholder="00.00" id="trailingAndLeadingInput" />
  <label class="sr-only" for="trailingAndLeadingInput">Enter amount</label>
  <span class="label-text my-auto">USD</span>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="input input-lg flex max-w-sm space-x-4">
  <span class="icon-[componentx--search] text-base-content/80 my-auto size-6 shrink-0"></span>
  <input type="search" class="grow" placeholder="Search" id="kbdInput" />
  <label class="sr-only" for="kbdInput">Search</label>
  <span class="my-auto flex gap-2">
    <kbd class="kbd kbd-sm">⌘</kbd>
    <kbd class="kbd kbd-sm">K</kbd>
  </span>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="input max-w-sm">
  <input type="checkbox" class="checkbox checkbox-primary my-auto me-3" />
  <input type="text" class="grow" placeholder="John Doe" />
</div>

<div class="input max-w-sm">
  <input type="radio" name="radio-1" class="radio radio-primary my-auto me-3" />
  <input type="text" class="grow" placeholder="John Doe" />
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="input items-center pe-0 max-w-sm">
  <input class="grow" placeholder="Search" />
  <select class="select ms-3" aria-label="select">
    <option disabled selected>Filter</option>
    <option>Sci-fi</option>
    <option>Drama</option>
    <option>Action</option>
  </select>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="max-w-sm">
  <label class="label-text" for="pillInput">Full Name</label>
  <input type="text" placeholder="John Doe" class="input rounded-full" id="pillInput" />
</div>

<div class="input-floating max-w-sm">
  <input type="text" placeholder="John Doe" class="input rounded-full" id="pillFloatingInput" />
  <label class="input-floating-label" for="pillFloatingInput">Full name</label>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="space-y-3">
  <div class="relative">
    <label class="label-text" for="helperTextInput">Full Name</label>
    <input type="text" placeholder="John Doe" class="input max-w-sm" id="helperTextInput" />
    <span class="helper-text">Please write your full name</span>
  </div>

  <div class="input-floating max-w-sm">
    <input type="text" placeholder="John Doe" class="input" id="helperTextFloatingInput" />
    <label class="input-floating-label" for="helperTextFloatingInput">Full Name</label>
    <span class="helper-text ps-3">Please write your full name</span>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<input type="text" placeholder="Type here" class="input no-focus border-0 max-w-sm" />
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="w-96">
  <label class="label-text" for="disabledInput"> What is your name? </label>
  <input type="text" placeholder="John Doe" class="input" id="disabledInput" disabled />
</div>

<div class="input-floating max-w-sm">
  <input type="text" placeholder="John Doe" class="input" id="disabledFloatingInput" disabled/>
  <label class="input-floating-label" for="disabledFloatingInput">Full Name</label>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="w-96">
  <label class="label-text" for="readonlyInput">What is your name?</label>
  <input type="text" placeholder="John Doe" class="input" id="readonlyInput" readonly />
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="join max-w-sm">
  <input class="input join-item" placeholder="Search" />
  <button class="btn btn-outline btn-secondary join-item">Search</button>
</div>

<div class="join max-w-sm">
  <button class="btn btn-outline btn-secondary join-item">Search</button>
  <input class="input join-item" placeholder="Search" />
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="join w-96">
  <div class="input join-item flex">
    <span class="icon-[componentx--user] text-base-content/80 my-auto me-3 size-5 shrink-0"></span>
    <label class="sr-only" for="groupInput">Full Name</label>
    <input type="text" class="grow" placeholder="John Doe" id="groupInput" />
  </div>
  <button class="btn btn-outline btn-secondary join-item h-auto">Search</button>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="join w-96">
  <input class="input join-item" placeholder="Search" />
  <select class="select join-item w-36" aria-label="select">
    <option disabled selected>Filter</option>
    <option>Sci-fi</option>
    <option>Drama</option>
    <option>Action</option>
  </select>
</div>
```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
