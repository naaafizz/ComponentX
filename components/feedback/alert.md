---
name: "Alert"
library: "ComponentX"
id: "alert"
type: "feedback"
quality: "standard"
tags: ["button", "data", "feedback", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Alert

> **Type:** `feedback` · **Quality:** `standard` · **ID:** `alert`
> **Path:** `components/feedback/alert.md`

**Alert** is a premium, production-ready component from the **ComponentX** library — engineered for feedback interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `button`, `data`, `feedback` workflows.
- **Pattern coverage** — includes `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Alert** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
<div class="alert" role="alert">
  A quick alert conveying key information or prompting action within a system.
</div>
<div class="alert alert-primary" role="alert">Welcome to our platform! Explore our latest features and updates.</div>
<div class="alert alert-info" role="alert">Stay tuned for our upcoming events and announcements.</div>
<div class="alert alert-success" role="alert">Your transaction was successful. Thank you for choosing our service!</div>
<div class="alert alert-warning" role="alert">
  Attention! Your account security may be at risk. Enable two-factor authentication now.
</div>
<div class="alert alert-error" role="alert">Oops! It seems there was an unexpected error. Please try again later.</div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="alert alert-soft" role="alert">
  A quick alert conveying key information or prompting action within a system.
</div>
<div class="alert alert-soft alert-primary" role="alert">
  Welcome to our platform! Explore our latest features and updates.
</div>
<div class="alert alert-soft alert-info" role="alert">Stay tuned for our upcoming events and announcements.</div>
<div class="alert alert-soft alert-success" role="alert">
  Your transaction was successful. Thank you for choosing our service!
</div>
<div class="alert alert-soft alert-warning" role="alert">
  Attention! Your account security may be at risk. Enable two-factor authentication now.
</div>
<div class="alert alert-soft alert-error" role="alert">
  Oops! It seems there was an unexpected error. Please try again later.
</div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="alert alert-outline" role="alert">
  A quick alert conveying key information or prompting action within a system.
</div>
<div class="alert alert-outline alert-primary" role="alert">
  Welcome to our platform! Explore our latest features and updates.
</div>
<div class="alert alert-outline alert-info" role="alert">Stay tuned for our upcoming events and announcements.</div>
<div class="alert alert-outline alert-success" role="alert">
  Your transaction was successful. Thank you for choosing our service!
</div>
<div class="alert alert-outline alert-warning" role="alert">
  Attention! Your account security may be at risk. Enable two-factor authentication now.
</div>
<div class="alert alert-outline alert-error" role="alert">
  Oops! It seems there was an unexpected error. Please try again later.
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="alert alert-outline border-dashed" role="alert">
  A quick alert conveying key information or prompting action within a system.
</div>
<div class="alert alert-outline border-dashed alert-primary" role="alert">
  Welcome to our platform! Explore our latest features and updates.
</div>
<div class="alert alert-outline border-dashed alert-info" role="alert">Stay tuned for our upcoming events and announcements.</div>
<div class="alert alert-outline border-dashed alert-success" role="alert">
  Your transaction was successful. Thank you for choosing our service!
</div>
<div class="alert alert-outline border-dashed alert-warning" role="alert">
  Attention! Your account security may be at risk. Enable two-factor authentication now.
</div>
<div class="alert alert-outline border-dashed alert-error" role="alert">
  Oops! It seems there was an unexpected error. Please try again later.
</div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="alert alert-warning flex items-center gap-4" role="alert">
  <span class="icon-[componentx--alert-triangle] shrink-0 size-6"></span>
  <p><span class="text-lg font-semibold">Warning alert:</span> Stay informed about the latest updates and upcoming events.</p>
</div>

<div class="alert alert-success flex items-center gap-4" role="alert">
  <span class="icon-[componentx--circle-check] shrink-0 size-6"></span>
  <p><span class="text-lg font-semibold">Success alert:</span> Explore our recent achievements and upcoming events.
  </p>
</div>

<div class="alert alert-soft alert-warning flex items-center gap-4" role="alert">
  <span class="icon-[componentx--alert-triangle] shrink-0 size-6"></span>
  <p><span class="text-lg font-semibold">Warning alert:</span> Take note of important updates and upcoming events.
  </p>
</div>

<div class="alert alert-soft alert-success flex items-center gap-4" role="alert">
  <span class="icon-[componentx--circle-check] shrink-0 size-6"></span>
  <p><span class="text-lg font-semibold">Success alert:</span> Celebrate our successes and stay informed about upcoming events.
  </p>
</div>

<div class="alert alert-outline alert-warning flex items-center gap-4" role="alert">
  <span class="icon-[componentx--alert-triangle] shrink-0 size-6"></span>
  <p><span class="text-lg font-semibold">Warning alert:</span> Pay attention to warnings and stay updated about upcoming events.
  </p>
</div>

<div class="alert alert-outline alert-success flex items-center gap-4" role="alert">
  <span class="icon-[componentx--circle-check] shrink-0 size-6"></span>
  <p><span class="text-lg font-semibold">Success alert:</span> Be aware of important notices and upcoming events.
  </p>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="alert alert-soft alert-primary flex items-start gap-4">
  <span class="icon-[componentx--check] shrink-0 size-6"></span>
  <div class="flex flex-col gap-1">
    <h5 class="text-lg font-semibold">Server maintenance in progress</h5>
    <p>Our servers are currently undergoing maintenance. We apologize for any inconvenience caused and appreciate your patience.
    </p>
  </div>
</div>
```







I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="alert alert-soft alert-primary flex items-start gap-4">
  <span class="icon-[componentx--info-circle] shrink-0 size-6"></span>
  <div class="flex flex-col gap-1">
    <h5 class="text-lg font-semibold">Please ensure that your password meets the following requirements:</h5>
    <ul class="mt-1.5 list-inside list-disc">
      <li>Contains a minimum of 10 characters and a maximum of 100 characters.</li>
      <li>Includes at least one lowercase character.</li>
      <li>Incorporates at least one special character such as !, @, #, or ?.</li>
    </ul>
  </div>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="alert alert-soft alert-primary" role="alert">
  Please read the <a href="#" class="link link-primary font-semibold">policy</a>. These can be configured in Settings.
  <div class="mt-4 flex gap-2">
    <button type="button" class="btn btn-primary btn-sm">Ok</button>
    <button type="button" class="btn btn-outline btn-secondary btn-sm">Cancel</button>
  </div>
</div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="alert alert-soft alert-primary flex items-start max-sm:flex-col max-sm:items-center gap-4">
  <span class="icon-[componentx--check] size-6 shrink-0"></span>
  <div class="flex flex-col grow gap-1 max-sm:items-center">
    <h5 class="text-lg font-semibold">Server maintenance in progress</h5>
    <p>Our servers are currently undergoing maintenance. We apologize for any inconvenience caused and appreciate your patience.</p>
  </div>
  <div class="flex gap-2">
    <button type="button" class="btn btn-primary btn-sm">Agree</button>
    <button type="button" class="btn btn-outline btn-secondary btn-sm">Cancel</button>
  </div>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="alert alert-soft alert-primary removing:translate-x-5 removing:opacity-0 flex items-center gap-4 transition duration-300 ease-in-out" role="alert" id="dismiss-alert1">
  Dive into our platform to discover exciting new features and updates.
  <button class="ms-auto cursor-pointer leading-none" data-remove-element="#dismiss-alert1" aria-label="Close Button">
    <span class="icon-[componentx--x] size-5"></span>
  </button>
</div>
```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
