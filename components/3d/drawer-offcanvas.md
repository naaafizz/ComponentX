---
name: "Drawer (Offcanvas)"
library: "ComponentX"
id: "drawer-offcanvas"
type: "3d"
quality: "showcase"
tags: ["3d", "button", "data", "overlay", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Drawer (Offcanvas)

> **Type:** `3d` · **Quality:** `showcase` · **ID:** `drawer-offcanvas`
> **Path:** `components/3d/drawer-offcanvas.md`

**Drawer (Offcanvas)** is a premium, production-ready component from the **ComponentX** library — engineered for 3D interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Showcase tier** — a high-impact, visually rich implementation — animated, 3D, or dependency-heavy by design.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `3d`, `button`, `data` workflows.
- **Pattern coverage** — includes `overlay`, `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Drawer (Offcanvas)** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
<button type="button" class="btn btn-primary" aria-haspopup="dialog" aria-expanded="false" aria-controls="overlay-example" data-overlay="#overlay-example">Open drawer</button>

<div id="overlay-example" class="overlay overlay-open:translate-x-0 drawer drawer-start hidden" role="dialog" tabindex="-1">
  <div class="drawer-header">
    <h3 class="drawer-title">Drawer Title</h3>
    <button type="button" class="btn btn-text btn-circle btn-sm absolute end-3 top-3" aria-label="Close" data-overlay="#overlay-example">
      <span class="icon-[componentx--x] size-5"></span>
    </button>
  </div>
  <div class="drawer-body">
    <p>
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </p>
  </div>
  <div class="drawer-footer">
    <button type="button" class="btn btn-soft btn-secondary" data-overlay="#overlay-example">Close</button>
    <button type="button" class="btn btn-primary">Save changes</button>
  </div>
</div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<!-- Drawer start -->

<button type="button" class="btn btn-primary" aria-haspopup="dialog" aria-expanded="false" aria-controls="overlay-start-example" data-overlay="#overlay-start-example">Toggle start</button>

<div id="overlay-start-example" class="overlay overlay-open:translate-x-0 drawer drawer-start hidden" role="dialog" tabindex="-1">
  <div class="drawer-header">
    <h3 class="drawer-title">Drawer Title</h3>
    <button type="button" class="btn btn-text btn-circle btn-sm absolute end-3 top-3" aria-label="Close" data-overlay="#overlay-start-example">
      <span class="icon-[componentx--x] size-5"></span>
    </button>
  </div>
  <div class="drawer-body">
    <p>
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </p>
  </div>
  <div class="drawer-footer">
    <button type="button" class="btn btn-soft btn-secondary" data-overlay="#overlay-start-example">Close</button>
    <button type="button" class="btn btn-primary">Save changes</button>
  </div>
</div>

<!-- Drawer end -->

<button type="button" class="btn btn-primary" aria-haspopup="dialog" aria-expanded="false" aria-controls="overlay-end-example" data-overlay="#overlay-end-example">Toggle end</button>

<div id="overlay-end-example" class="overlay overlay-open:translate-x-0 drawer drawer-end hidden" role="dialog" tabindex="-1">
  <div class="drawer-header">
    <h3 class="drawer-title">Drawer Title</h3>
    <button type="button" class="btn btn-text btn-circle btn-sm absolute end-3 top-3" aria-label="Close" data-overlay="#overlay-end-example">
      <span class="icon-[componentx--x] size-5"></span>
    </button>
  </div>
  <div class="drawer-body">
    <p>
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </p>
  </div>
  <div class="drawer-footer">
    <button type="button" class="btn btn-soft btn-secondary" data-overlay="#overlay-end-example">Close</button>
    <button type="button" class="btn btn-primary">Save changes</button>
  </div>
</div>

<!-- Drawer top -->

<button type="button" class="btn btn-primary" aria-haspopup="dialog" aria-expanded="false" aria-controls="overlay-top-example" data-overlay="#overlay-top-example">Toggle top</button>

<div id="overlay-top-example" class="overlay drawer overlay-open:translate-y-0 drawer-top hidden" role="dialog" tabindex="-1">
  <div class="drawer-header">
    <h3 class="drawer-title">Drawer Title</h3>
    <button type="button" class="btn btn-text btn-circle btn-sm absolute end-3 top-3" aria-label="Close" data-overlay="#overlay-top-example">
      <span class="icon-[componentx--x] size-5"></span>
    </button>
  </div>
  <div class="drawer-body">
    <p>
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </p>
  </div>
  <div class="drawer-footer">
    <button type="button" class="btn btn-soft btn-secondary" data-overlay="#overlay-top-example">Close</button>
    <button type="button" class="btn btn-primary">Save changes</button>
  </div>
</div>

<!-- Drawer bottom -->

<button type="button" class="btn btn-primary" aria-haspopup="dialog" aria-expanded="false" aria-controls="overlay-bottom-example" data-overlay="#overlay-bottom-example">Toggle bottom</button>

<div id="overlay-bottom-example" class="overlay drawer overlay-open:translate-y-0 drawer-bottom hidden" role="dialog" tabindex="-1">
  <div class="drawer-header">
    <h3 class="drawer-title">Drawer Title</h3>
    <button type="button" class="btn btn-text btn-circle btn-sm absolute end-3 top-3" aria-label="Close" data-overlay="#overlay-bottom-example">
      <span class="icon-[componentx--x] size-5"></span>
    </button>
  </div>
  <div class="drawer-body">
    <p>
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </p>
  </div>
  <div class="drawer-footer">
    <button type="button" class="btn btn-soft btn-secondary" data-overlay="#overlay-bottom-example">Close</button>
    <button type="button" class="btn btn-primary">Save changes</button>
  </div>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<!-- Drawer start -->

<button type="button" class="btn btn-primary" aria-haspopup="dialog" aria-expanded="false" aria-controls="overlay-start-example" data-overlay="#overlay-start-example">Toggle start</button>

<div id="overlay-start-example" class="overlay overlay-open:translate-x-0 drawer drawer-start hidden" role="dialog" tabindex="-1">
  <div class="drawer-header">
    <h3 class="drawer-title">Drawer Title</h3>
    <button type="button" class="btn btn-text btn-circle btn-sm absolute end-3 top-3" aria-label="Close" data-overlay="#overlay-start-example">
      <span class="icon-[componentx--x] size-5"></span>
    </button>
  </div>
  <div class="drawer-body">
    <p>
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </p>
  </div>
  <div class="drawer-footer">
    <button type="button" class="btn btn-soft btn-secondary" data-overlay="#overlay-start-example">Close</button>
    <button type="button" class="btn btn-primary">Save changes</button>
  </div>
</div>

<!-- Drawer end -->

<button type="button" class="btn btn-primary" aria-haspopup="dialog" aria-expanded="false" aria-controls="overlay-end-example" data-overlay="#overlay-end-example">Toggle end</button>

<div id="overlay-end-example" class="overlay overlay-open:translate-x-0 drawer drawer-end hidden" role="dialog" tabindex="-1">
  <div class="drawer-header">
    <h3 class="drawer-title">Drawer Title</h3>
    <button type="button" class="btn btn-text btn-circle btn-sm absolute end-3 top-3" aria-label="Close" data-overlay="#overlay-end-example">
      <span class="icon-[componentx--x] size-5"></span>
    </button>
  </div>
  <div class="drawer-body">
    <p>
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </p>
  </div>
  <div class="drawer-footer">
    <button type="button" class="btn btn-soft btn-secondary" data-overlay="#overlay-end-example">Close</button>
    <button type="button" class="btn btn-primary">Save changes</button>
  </div>
</div>

<!-- Drawer top -->

<button type="button" class="btn btn-primary" aria-haspopup="dialog" aria-expanded="false" aria-controls="overlay-top-example" data-overlay="#overlay-top-example">Toggle top</button>

<div id="overlay-top-example" class="overlay drawer overlay-open:translate-y-0 drawer-top hidden" role="dialog" tabindex="-1">
  <div class="drawer-header">
    <h3 class="drawer-title">Drawer Title</h3>
    <button type="button" class="btn btn-text btn-circle btn-sm absolute end-3 top-3" aria-label="Close" data-overlay="#overlay-top-example">
      <span class="icon-[componentx--x] size-5"></span>
    </button>
  </div>
  <div class="drawer-body">
    <p>
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </p>
  </div>
  <div class="drawer-footer">
    <button type="button" class="btn btn-soft btn-secondary" data-overlay="#overlay-top-example">Close</button>
    <button type="button" class="btn btn-primary">Save changes</button>
  </div>
</div>

<!-- Drawer bottom -->

<button type="button" class="btn btn-primary" aria-haspopup="dialog" aria-expanded="false" aria-controls="overlay-bottom-example" data-overlay="#overlay-bottom-example">Toggle bottom</button>

<div id="overlay-bottom-example" class="overlay drawer overlay-open:translate-y-0 drawer-bottom hidden" role="dialog" tabindex="-1">
  <div class="drawer-header">
    <h3 class="drawer-title">Drawer Title</h3>
    <button type="button" class="btn btn-text btn-circle btn-sm absolute end-3 top-3" aria-label="Close" data-overlay="#overlay-bottom-example">
      <span class="icon-[componentx--x] size-5"></span>
    </button>
  </div>
  <div class="drawer-body">
    <p>
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </p>
  </div>
  <div class="drawer-footer">
    <button type="button" class="btn btn-soft btn-secondary" data-overlay="#overlay-bottom-example">Close</button>
    <button type="button" class="btn btn-primary">Save changes</button>
  </div>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<button type="button" class="btn btn-primary" aria-haspopup="dialog" aria-expanded="false" aria-controls="overlay-responsive-example" data-overlay="#overlay-responsive-example">Open drawer</button>

<div id="overlay-responsive-example" class="overlay overlay-open:translate-x-0 drawer drawer-end lg:drawer-start hidden" role="dialog" tabindex="-1" >
  <div class="drawer-header">
    <h3 class="drawer-title">Drawer Title</h3>
    <button type="button" class="btn btn-text btn-circle btn-sm absolute end-3 top-3" aria-label="Close" data-overlay="#overlay-responsive-example">
      <span class="icon-[componentx--x] size-5"></span>
    </button>
  </div>
  <div class="drawer-body">
    <p>
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </p>
  </div>
  <div class="drawer-footer">
    <button type="button" class="btn btn-soft btn-secondary" data-overlay="#overlay-responsive-example">Close</button>
    <button type="button" class="btn btn-primary">Save changes</button>
  </div>
</div>
```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<button type="button" class="btn btn-primary" aria-haspopup="dialog" aria-expanded="false" aria-controls="overlay-form-example" data-overlay="#overlay-form-example">Toggle form</button>

<div id="overlay-form-example" class="overlay overlay-open:translate-x-0 drawer drawer-end hidden justify-start" role="dialog" tabindex="-1" >
  <div class="drawer-header">
    <h3 class="drawer-title">Drawer Title</h3>
    <button type="button" class="btn btn-text btn-circle btn-sm absolute end-3 top-3" aria-label="Close" data-overlay="#overlay-form-example">
      <span class="icon-[componentx--x] size-5"></span>
    </button>
  </div>
  <form>
    <div class="drawer-body justify-start">
      <div class="mb-4">
        <label class="label-text" for="fullName"> Full Name </label>
        <input type="text" placeholder="John Doe" class="input" id="fullName" />
      </div>
      <div class="mb-4">
        <label class="label-text" for="email"> Email </label>
        <input type="email" placeholder="john.doe@example.com" class="input" id="email" />
      </div>
      <div class="mb-4">
        <label class="label-text" for="contact"> Contact </label>
        <input type="text" placeholder="+91 (106) 234-34-85" class="input" id="contact" />
      </div>
      <div class="mb-4">
        <label class="label-text" for="company"> Company </label>
        <input type="text" placeholder="ABC Technologies Ltd" class="input" id="company" />
      </div>
      <div class="mb-4">
        <label class="label-text" for="country"> Country </label>
        <select class="select" id="country">
          <option disabled selected>Select Country</option>
          <option>USA</option>
          <option>India</option>
          <option>Canada</option>
          <option>Japan</option>
          <option>Russia</option>
        </select>
      </div>
      <div class="mb-4">
        <label class="label-text" for="userRole"> User Role </label>
        <select class="select" id="userRole">
          <option disabled selected>Select Role</option>
          <option>Subscriber</option>
          <option>Maintainer</option>
          <option>Editor</option>
          <option>Author</option>
          <option>Admin</option>
        </select>
      </div>
      <div class="mb-0.5">
        <label class="label-text" for="selectPlan"> Select Plan </label>
        <select class="select" id="selectPlan">
          <option disabled selected>Select Plan</option>
          <option>Basic</option>
          <option>Enterprise</option>
          <option>Company</option>
          <option>Team</option>
        </select>
      </div>
    </div>
    <div class="drawer-footer">
      <button type="button" class="btn btn-soft btn-secondary" data-overlay="#overlay-form-example">Close</button>
      <button type="submit" class="btn btn-primary">Save changes</button>
    </div>
  </form>
</div>
```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<button type="button" class="btn btn-primary" aria-haspopup="dialog" aria-expanded="false" aria-controls="overlay-navigation-example" data-overlay="#overlay-navigation-example" > Drawer with navigation </button>

<aside id="overlay-navigation-example" class="overlay overlay-open:translate-x-0 drawer drawer-start hidden max-w-72" tabindex="-1" >
  <div class="drawer-header">
    <h3 class="drawer-title">Menu</h3>
    <button type="button" class="btn btn-text btn-circle btn-sm absolute end-3 top-3" aria-label="Close" data-overlay="#overlay-navigation-example" >
      <span class="icon-[componentx--x] size-4"></span>
    </button>
  </div>
  <div class="drawer-body justify-start pb-6">
    <ul class="menu space-y-0.5 p-0">
      <li>
        <a href="#">
          <span class="icon-[componentx--home] size-5"></span>
          Dashboard
        </a>
      </li>
      <li class="space-x-0.5">
        <a class="collapse-toggle collapse-open:bg-base-content/10" id="layout-collapse" data-collapse="#layout-collapse-menu" >
          <span class="icon-[componentx--layout-navbar] size-5"></span>
          Layouts
          <span class="icon-[componentx--chevron-down] collapse-open:rotate-180 size-4"></span>
        </a>
        <ul id="layout-collapse-menu" class="collapse hidden w-auto space-y-0.5 overflow-hidden transition-[height] duration-300" aria-labelledby="layout-collapse" >
          <li>
            <a href="#">
              <span class="icon-[componentx--point] size-5"></span>
              Content Navbar
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon-[componentx--point] size-5"></span>
              Horizontal
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon-[componentx--point] size-5"></span>
              Without Menu
            </a>
          </li>
        </ul>
      </li>
      <li class="space-y-0.5">
        <a class="collapse-toggle collapse-open:bg-base-content/10" id="front-page-collapse" data-collapse="#front-page-collapse-menu" >
          <span class="icon-[componentx--box-multiple] size-5"></span>
          Front Pages
          <span class="icon-[componentx--chevron-down] collapse-open:rotate-180 size-4"></span>
        </a>
        <ul id="front-page-collapse-menu" class="collapse hidden w-auto space-y-0.5 overflow-hidden transition-[height] duration-300" aria-labelledby="front-page-collapse" >
          <li>
            <a href="#">
              <span class="icon-[componentx--point] size-5"></span>
              Landing Page
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon-[componentx--point] size-5"></span>
              Pricing Page
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon-[componentx--point] size-5"></span>
              Checkout Page
            </a>
          </li>
        </ul>
      </li>
      <div class="divider text-base-content/50 py-6 after:border-0">Apps & Pages</div>
      <li>
        <a href="#">
          <span class="icon-[componentx--message-chatbot] size-5"></span>
          Chat
        </a>
      </li>
      <li>
        <a href="#">
          <span class="icon-[componentx--mail] size-5"></span>
          Email
        </a>
      </li>
      <li>
        <a href="#">
          <span class="icon-[componentx--calendar] size-5"></span>
          Calendar
        </a>
      </li>
      <li class="space-x-0.5">
        <a class="collapse-toggle collapse-open:bg-base-content/10" id="ecommerce-collapse" data-collapse="#ecommerce-collapse-menu" >
          <span class="icon-[componentx--shopping-cart] size-5"></span>
          Ecommerce
          <span class="icon-[componentx--chevron-down] collapse-open:rotate-180 size-4"></span>
        </a>
        <ul id="ecommerce-collapse-menu" class="collapse hidden w-auto space-y-0.5 overflow-hidden transition-[height] duration-300" aria-labelledby="ecommerce-collapse" >
          <li>
            <a href="#">
              <span class="icon-[componentx--point] size-5"></span>
              Products
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon-[componentx--point] size-5"></span>
              Categories
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon-[componentx--point] size-5"></span>
              Shipping & Delivery
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon-[componentx--point] size-5"></span>
              Location
            </a>
          </li>
        </ul>
      </li>
      <div class="divider text-base-content/50 py-6 after:border-0">Account</div>
      <li>
        <a href="#">
          <span class="icon-[componentx--login] size-5"></span>
          Sign In
        </a>
      </li>
      <li>
        <a href="#">
          <span class="icon-[componentx--logout-2] size-5"></span>
          Sign Out
        </a>
      </li>
      <div class="divider text-base-content/50 py-6 after:border-0">Miscellaneous</div>
      <li>
        <a href="#">
          <span class="icon-[componentx--users-group] size-5"></span>
          Support
        </a>
      </li>
      <li>
        <a href="#">
          <span class="icon-[componentx--files] size-5"></span>
          Documentation
        </a>
      </li>
    </ul>
  </div>
</aside>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<button type="button" class="btn btn-primary" aria-haspopup="dialog" aria-expanded="false" aria-controls="overlay-body-scrolling" data-overlay="#overlay-body-scrolling">
  Body scrolling (no backdrop)
</button>

<div id="overlay-body-scrolling" class="overlay overlay-open:translate-x-0 drawer drawer-start hidden [--body-scroll:true] [--overlay-backdrop:false]" role="dialog" tabindex="-1">
  <div class="drawer-header">
    <h3 class="drawer-title">Drawer Title</h3>
    <button type="button" class="btn btn-text btn-circle btn-sm absolute end-3 top-3" aria-label="Close" data-overlay="#overlay-body-scrolling">
      <span class="icon-[componentx--x] size-5"></span>
    </button>
  </div>
  <div class="drawer-body">
    <p>
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </p>
  </div>
  <div class="drawer-footer">
    <button type="button" class="btn btn-soft btn-secondary" data-overlay="#overlay-body-scrolling">Close</button>
    <button type="button" class="btn btn-primary">Save changes</button>
  </div>
</div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<button type="button" class="btn btn-primary" aria-haspopup="dialog" aria-expanded="false" aria-controls="overlay-body-scrolling-with-backdrop" data-overlay="#overlay-body-scrolling-with-backdrop">
  Body scrolling (with backdrop)
</button>

<div id="overlay-body-scrolling-with-backdrop" class="overlay overlay-open:translate-x-0 drawer drawer-start hidden [--body-scroll:true]" role="dialog" tabindex="-1" >
  <div class="drawer-header">
    <h3 class="drawer-title">Drawer Title</h3>
    <button type="button" class="btn btn-text btn-circle btn-sm absolute end-3 top-3" aria-label="Close" data-overlay="#overlay-body-scrolling-with-backdrop">
      <span class="icon-[componentx--x] size-5"></span>
    </button>
  </div>
  <div class="drawer-body">
    <p>
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </p>
  </div>
  <div class="drawer-footer">
    <button type="button" class="btn btn-soft btn-secondary" data-overlay="#overlay-body-scrolling-with-backdrop">
      Close
    </button>
    <button type="button" class="btn btn-primary">Save changes</button>
  </div>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<button type="button" class="btn btn-primary" aria-haspopup="dialog" aria-expanded="false" aria-controls="overlay-backdrop-without-body-scrolling" data-overlay="#overlay-backdrop-without-body-scrolling">
  Backdrop (without bodyscroll)
</button>

<div id="overlay-backdrop-without-body-scrolling" class="overlay overlay-open:translate-x-0 drawer drawer-start hidden" role="dialog" tabindex="-1" >
  <div class="drawer-header">
    <h3 class="drawer-title">Drawer Title</h3>
    <button type="button" class="btn btn-text btn-circle btn-sm absolute end-3 top-3" aria-label="Close" data-overlay="#overlay-backdrop-without-body-scrolling">
      <span class="icon-[componentx--x] size-5"></span>
    </button>
  </div>
  <div class="drawer-body">
    <p>
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </p>
  </div>
  <div class="drawer-footer">
    <button type="button" class="btn btn-soft btn-secondary" data-overlay="#overlay-backdrop-without-body-scrolling">
      Close
    </button>
    <button type="button" class="btn btn-primary">Save changes</button>
  </div>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<button type="button" class="btn btn-primary" aria-haspopup="dialog" aria-expanded="false" aria-controls="overlay-custom-backdrop" data-overlay="#overlay-custom-backdrop">Open drawer</button>

<div id="overlay-custom-backdrop" class="overlay overlay-open:translate-x-0 drawer drawer-start overlay-backdrop-open:bg-warning/40 hidden" role="dialog" tabindex="-1" >
  <div class="drawer-header">
    <h3 class="drawer-title">Drawer Title</h3>
    <button type="button" class="btn btn-text btn-circle btn-sm absolute end-3 top-3" aria-label="Close" data-overlay="#overlay-custom-backdrop">
      <span class="icon-[componentx--x] size-5"></span>
    </button>
  </div>
  <div class="drawer-body">
    <p>
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </p>
  </div>
  <div class="drawer-footer">
    <button type="button" class="btn btn-soft btn-secondary" data-overlay="#overlay-custom-backdrop">Close</button>
    <button type="button" class="btn btn-primary">Save changes</button>
  </div>
</div>

<button type="button" class="btn btn-primary" aria-haspopup="dialog" aria-expanded="false" aria-controls="overlay-custom-backdrop-2" data-overlay="#overlay-custom-backdrop-2" data-overlay-options='{ "backdropClasses": "transition duration-300 fixed inset-0 bg-accent/40 overlay-backdrop" }'> Open drawer</button>

<div id="overlay-custom-backdrop-2" class="overlay overlay-open:translate-x-0 drawer drawer-start hidden" role="dialog" tabindex="-1">
  <div class="drawer-header">
    <h3 class="drawer-title">Drawer Title</h3>
    <button type="button" class="btn btn-text btn-circle btn-sm absolute end-3 top-3" aria-label="Close" data-overlay="#overlay-custom-backdrop-2">
      <span class="icon-[componentx--x] size-5"></span>
    </button>
  </div>
  <div class="drawer-body">
    <p>
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </p>
  </div>
  <div class="drawer-footer">
    <button type="button" class="btn btn-soft btn-secondary" data-overlay="#overlay-custom-backdrop-2">Close</button>
    <button type="button" class="btn btn-primary">Save changes</button>
  </div>
</div>
```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
