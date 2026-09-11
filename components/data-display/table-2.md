---
name: "Table"
library: "ComponentX"
id: "table-2"
type: "data-display"
quality: "advanced"
tags: ["button", "data", "table", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Table

> **Type:** `data-display` · **Quality:** `advanced` · **ID:** `table-2`
> **Path:** `components/data-display/table-2.md`

**Table** is a premium, production-ready component from the **ComponentX** library — engineered for data display interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Advanced tier** — richer composition and interaction, engineered for complex layouts while keeping the public surface tight.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `button`, `data`, `table` workflows.
- **Pattern coverage** — includes `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Table** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
<div class="w-full overflow-x-auto">
  <table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Status</th>
        <th>Date</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>johndoe@example.com</td>
        <td><span class="badge badge-soft badge-success text-xs">Professional</span></td>
        <td>March 1, 2024</td>
        <td>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
        </td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td>janesmith@example.com</td>
        <td><span class="badge badge-soft badge-error text-xs">Rejected</span></td>
        <td>March 2, 2024</td>
        <td>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
        </td>
      </tr>
      <tr>
        <td>Alice Johnson</td>
        <td>alicejohnson@example.com</td>
        <td><span class="badge badge-soft badge-info text-xs">Applied</span></td>
        <td>March 3, 2024</td>
        <td>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
        </td>
      </tr>
      <tr>
        <td>Bob Brown</td>
        <td>bobrown@example.com</td>
        <td><span class="badge badge-soft badge-primary text-xs">Current</span></td>
        <td>March 4, 2024</td>
        <td>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="border-base-content/25 w-full overflow-x-auto border">
  <table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Status</th>
        <th>Date</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>johndoe@example.com</td>
        <td><span class="badge badge-soft badge-success text-xs">Professional</span></td>
        <td>March 1, 2024</td>
        <td>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
        </td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td>janesmith@example.com</td>
        <td><span class="badge badge-soft badge-error text-xs">Rejected</span></td>
        <td>March 2, 2024</td>
        <td>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
        </td>
      </tr>
      <tr>
        <td>Alice Johnson</td>
        <td>alicejohnson@example.com</td>
        <td><span class="badge badge-soft badge-info text-xs">Applied</span></td>
        <td>March 3, 2024</td>
        <td>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
        </td>
      </tr>
      <tr>
        <td>Bob Brown</td>
        <td>bobrown@example.com</td>
        <td><span class="badge badge-soft badge-primary text-xs">Current</span></td>
        <td>March 4, 2024</td>
        <td>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="w-full overflow-x-auto">
  <table class="table-borderless table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Status</th>
        <th>Date</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>johndoe@example.com</td>
        <td><span class="badge badge-soft badge-success text-xs">Professional</span></td>
        <td>March 1, 2024</td>
        <td>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
        </td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td>janesmith@example.com</td>
        <td><span class="badge badge-soft badge-error text-xs">Rejected</span></td>
        <td>March 2, 2024</td>
        <td>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
        </td>
      </tr>
      <tr>
        <td>Alice Johnson</td>
        <td>alicejohnson@example.com</td>
        <td><span class="badge badge-soft badge-info text-xs">Applied</span></td>
        <td>March 3, 2024</td>
        <td>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
        </td>
      </tr>
      <tr>
        <td>Bob Brown</td>
        <td>bobrown@example.com</td>
        <td><span class="badge badge-soft badge-primary text-xs">Current</span></td>
        <td>March 4, 2024</td>
        <td>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="w-full overflow-x-auto">
  <table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Status</th>
        <th>Date</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr class="row-hover">
        <td>John Doe</td>
        <td>johndoe@example.com</td>
        <td><span class="badge badge-soft badge-success text-xs">Professional</span></td>
        <td>March 1, 2024</td>
        <td>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
        </td>
      </tr>
      <tr class="row-hover">
        <td>Jane Smith</td>
        <td>janesmith@example.com</td>
        <td><span class="badge badge-soft badge-error text-xs">Rejected</span></td>
        <td>March 2, 2024</td>
        <td>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
        </td>
      </tr>
      <tr class="row-hover">
        <td>Alice Johnson</td>
        <td>alicejohnson@example.com</td>
        <td><span class="badge badge-soft badge-info text-xs">Applied</span></td>
        <td>March 3, 2024</td>
        <td>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
        </td>
      </tr>
      <tr class="row-hover">
        <td>Bob Brown</td>
        <td>bobrown@example.com</td>
        <td><span class="badge badge-soft badge-primary text-xs">Current</span></td>
        <td>March 4, 2024</td>
        <td>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="w-full overflow-x-auto">
  <table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Status</th>
        <th>Date</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr class="bg-primary/10">
        <td>John Doe</td>
        <td>johndoe@example.com</td>
        <td><span class="badge badge-soft badge-success text-xs">Professional</span></td>
        <td>March 1, 2024</td>
        <td>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
        </td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td class="bg-warning/10">janesmith@example.com</td>
        <td><span class="badge badge-soft badge-error text-xs">Rejected</span></td>
        <td>March 2, 2024</td>
        <td>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
        </td>
      </tr>
      <tr>
        <td>Alice Johnson</td>
        <td class="bg-warning/10">alicejohnson@example.com</td>
        <td><span class="badge badge-soft badge-info text-xs">Applied</span></td>
        <td>March 3, 2024</td>
        <td>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
        </td>
      </tr>
      <tr>
        <td>Bob Brown</td>
        <td class="bg-warning/10">bobrown@example.com</td>
        <td><span class="badge badge-soft badge-primary text-xs">Current</span></td>
        <td>March 4, 2024</td>
        <td>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="w-full overflow-x-auto">
  <table class="table-striped table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Status</th>
        <th>Date</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>johndoe@example.com</td>
        <td><span class="badge badge-soft badge-success text-xs">Professional</span></td>
        <td>March 1, 2024</td>
        <td>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
        </td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td>janesmith@example.com</td>
        <td><span class="badge badge-soft badge-error text-xs">Rejected</span></td>
        <td>March 2, 2024</td>
        <td>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
        </td>
      </tr>
      <tr>
        <td>Alice Johnson</td>
        <td>alicejohnson@example.com</td>
        <td><span class="badge badge-soft badge-info text-xs">Applied</span></td>
        <td>March 3, 2024</td>
        <td>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
        </td>
      </tr>
      <tr>
        <td>Bob Brown</td>
        <td>bobrown@example.com</td>
        <td><span class="badge badge-soft badge-primary text-xs">Current</span></td>
        <td>March 4, 2024</td>
        <td>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="w-full overflow-x-auto">
  <table class="table-striped-columns table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Status</th>
        <th>Date</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>johndoe@example.com</td>
        <td><span class="badge badge-soft badge-success text-xs">Professional</span></td>
        <td>March 1, 2024</td>
        <td>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
        </td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td>janesmith@example.com</td>
        <td><span class="badge badge-soft badge-error text-xs">Rejected</span></td>
        <td>March 2, 2024</td>
        <td>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
        </td>
      </tr>
      <tr>
        <td>Alice Johnson</td>
        <td>alicejohnson@example.com</td>
        <td><span class="badge badge-soft badge-info text-xs">Applied</span></td>
        <td>March 3, 2024</td>
        <td>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
        </td>
      </tr>
      <tr>
        <td>Bob Brown</td>
        <td>bobrown@example.com</td>
        <td><span class="badge badge-soft badge-primary text-xs">Current</span></td>
        <td>March 4, 2024</td>
        <td>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="border-base-content/25 w-full rounded-lg border">
  <div class="overflow-x-auto">
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Status</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John Doe</td>
          <td>johndoe@example.com</td>
          <td><span class="badge badge-soft badge-success text-xs">Professional</span></td>
          <td>March 1, 2024</td>
          <td>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
          </td>
        </tr>
        <tr>
          <td>Jane Smith</td>
          <td>janesmith@example.com</td>
          <td><span class="badge badge-soft badge-error text-xs">Rejected</span></td>
          <td>March 2, 2024</td>
          <td>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
          </td>
        </tr>
        <tr>
          <td>Alice Johnson</td>
          <td>alicejohnson@example.com</td>
          <td><span class="badge badge-soft badge-info text-xs">Applied</span></td>
          <td>March 3, 2024</td>
          <td>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
          </td>
        </tr>
        <tr>
          <td>Bob Brown</td>
          <td>bobrown@example.com</td>
          <td><span class="badge badge-soft badge-primary text-xs">Current</span></td>
          <td>March 4, 2024</td>
          <td>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="w-full overflow-x-auto">
  <table class="table-xs table">
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Occupation</th>
        <th>Company</th>
        <th>Location</th>
        <th>Last Active</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>John Doe</td>
        <td>Software Engineer</td>
        <td>ABC Technologies</td>
        <td>United States</td>
        <td>2022-03-10</td>
      </tr>
      <tr>
        <th>2</th>
        <td>Jane Smith</td>
        <td>Data Analyst</td>
        <td>XYZ Corporation</td>
        <td>Canada</td>
        <td>2022-03-09</td>
      </tr>
      <tr>
        <th>3</th>
        <td>Michael Johnson</td>
        <td>Marketing Manager</td>
        <td>Global Marketing Inc.</td>
        <td>United Kingdom</td>
        <td>2022-03-08</td>
      </tr>
      <tr>
        <th>4</th>
        <td>Emily Brown</td>
        <td>Graphic Designer</td>
        <td>Creative Solutions Ltd.</td>
        <td>Australia</td>
        <td>2022-03-07</td>
      </tr>
      <tr>
        <th>5</th>
        <td>David Wilson</td>
        <td>Financial Analyst</td>
        <td>FinanceX</td>
        <td>Germany</td>
        <td>2022-03-06</td>
      </tr>
      <tr>
        <th>6</th>
        <td>Alice Johnson</td>
        <td>Project Manager</td>
        <td>Project Solutions LLC</td>
        <td>France</td>
        <td>2022-03-05</td>
      </tr>
      <tr>
        <th>7</th>
        <td>Robert Lee</td>
        <td>Software Developer</td>
        <td>Tech Innovations</td>
        <td>China</td>
        <td>2022-03-04</td>
      </tr>
      <tr>
        <th>8</th>
        <td>Sarah Adams</td>
        <td>Human Resources Manager</td>
        <td>HR Solutions Ltd.</td>
        <td>Spain</td>
        <td>2022-03-03</td>
      </tr>
      <tr>
        <th>9</th>
        <td>James Wilson</td>
        <td>Business Analyst</td>
        <td>Global Enterprises</td>
        <td>United States</td>
        <td>2022-03-02</td>
      </tr>
      <tr>
        <th>10</th>
        <td>Mary Brown</td>
        <td>Marketing Coordinator</td>
        <td>Marketing Solutions Inc.</td>
        <td>Canada</td>
        <td>2022-03-01</td>
      </tr>
    </tbody>
  </table>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="h-96 w-full overflow-x-auto">
  <table class="table-pin-rows table">
    <thead>
      <tr>
        <th>A</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Aegis</td>
      </tr>
      <tr>
        <td>Agent Liberty</td>
      </tr>
      <tr>
        <td>Aqualad</td>
      </tr>
      <tr>
        <td>Astro Boy</td>
      </tr>
      <tr>
        <td>Azrael</td>
      </tr>
    </tbody>
    <thead>
      <tr>
        <th>B</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Banshee</td>
      </tr>
      <tr>
        <td>Black Bolt</td>
      </tr>
      <tr>
        <td>Black Lightning</td>
      </tr>
      <tr>
        <td>Blue Beetle</td>
      </tr>
      <tr>
        <td>Booster Gold</td>
      </tr>
    </tbody>
    <thead>
      <tr>
        <th>C</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Captain Britain</td>
      </tr>
      <tr>
        <td>Captain Universe</td>
      </tr>
      <tr>
        <td>Cyborg</td>
      </tr>
      <tr>
        <td>Cyclops</td>
      </tr>
    </tbody>
    <thead>
      <tr>
        <th>D</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Dagger</td>
      </tr>
      <tr>
        <td>Daredevil</td>
      </tr>
      <tr>
        <td>Darkhawk</td>
      </tr>
      <tr>
        <td>Deadpool</td>
      </tr>
    </tbody>
    <thead>
      <tr>
        <th>E</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Elektra</td>
      </tr>
      <tr>
        <td>Elongated Man</td>
      </tr>
    </tbody>
    <thead>
      <tr>
        <th>F</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Falcon</td>
      </tr>
      <tr>
        <td>Firestorm</td>
      </tr>
    </tbody>
    <thead>
      <tr>
        <th>G</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Gambit</td>
      </tr>
      <tr>
        <td>Ghost Rider</td>
      </tr>
      <tr>
        <td>Goliath</td>
      </tr>
      <tr>
        <td>Green Lantern</td>
      </tr>
    </tbody>
    <thead>
      <tr>
        <th>H</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Harley Quinn</td>
      </tr>
      <tr>
        <td>Havok</td>
      </tr>
      <tr>
        <td>Hellboy</td>
      </tr>
    </tbody>
    <thead>
      <tr>
        <th>I</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Iceman</td>
      </tr>
      <tr>
        <td>Invisible Woman</td>
      </tr>
    </tbody>
    <thead>
      <tr>
        <th>J</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Jean Grey</td>
      </tr>
      <tr>
        <td>Jubilee</td>
      </tr>
    </tbody>
    <thead>
      <tr>
        <th>K</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Kid Flash</td>
      </tr>
      <tr>
        <td>Kraven the Hunter</td>
      </tr>
    </tbody>
    <thead>
      <tr>
        <th>L</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Lex Luthor</td>
      </tr>
      <tr>
        <td>Loki</td>
      </tr>
    </tbody>
    <thead>
      <tr>
        <th>M</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Mad Hatter</td>
      </tr>
      <tr>
        <td>Magik</td>
      </tr>
    </tbody>
    <thead>
      <tr>
        <th>N</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Namor</td>
      </tr>
      <tr>
        <td>Nightcrawler</td>
      </tr>
    </tbody>
    <thead>
      <tr>
        <th>O</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Oracle</td>
      </tr>
    </tbody>
    <thead>
      <tr>
        <th>P</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Psylocke</td>
      </tr>
      <tr>
        <td>Punisher</td>
      </tr>
    </tbody>
    <thead>
      <tr>
        <th>Q</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Quasar</td>
      </tr>
    </tbody>
    <thead>
      <tr>
        <th>R</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Raven</td>
      </tr>
      <tr>
        <td>Red Hood</td>
      </tr>
    </tbody>
    <thead>
      <tr>
        <th>S</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Sandman</td>
      </tr>
      <tr>
        <td>Scarlet Witch</td>
      </tr>
      <tr>
        <td>She-Hulk</td>
      </tr>
      <tr>
        <td>Silver Surfer</td>
      </tr>
      <tr>
        <td>Spawn</td>
      </tr>
    </tbody>
    <thead>
      <tr>
        <th>T</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Taskmaster</td>
      </tr>
      <tr>
        <td>Thor</td>
      </tr>
    </tbody>
    <thead>
      <tr>
        <th>U</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Ultraman</td>
      </tr>
    </tbody>
    <thead>
      <tr>
        <th>V</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Venom</td>
      </tr>
    </tbody>
    <thead>
      <tr>
        <th>W</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Wasp</td>
      </tr>
      <tr>
        <td>Wolverine</td>
      </tr>
    </tbody>
    <thead>
      <tr>
        <th>X</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>X-23</td>
      </tr>
    </tbody>
    <thead>
      <tr>
        <th>Y</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Yellowjacket</td>
      </tr>
    </tbody>
    <thead>
      <tr>
        <th>Z</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Zorro</td>
      </tr>
      <tr>
        <td>Zathura</td>
      </tr>
    </tbody>
  </table>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="h-56 overflow-x-auto">
  <table class="table-xs table-pin-rows table-pin-cols table">
    <thead>
      <tr>
        <th></th>
        <td>Name</td>
        <td>Occupation</td>
        <td>Employer</td>
        <td>Email</td>
        <td>Location</td>
        <td>Last Access</td>
        <td>Favorite Color</td>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>Alice Johnson</td>
        <td>Software Engineer</td>
        <td>Alpha Tech</td>
        <td>alice@example.com</td>
        <td>United States</td>
        <td>12/16/2021</td>
        <td>Blue</td>
        <th>1</th>
      </tr>
      <tr>
        <th>2</th>
        <td>Bob Smith</td>
        <td>Marketing Manager</td>
        <td>Beta Corp</td>
        <td>bob@example.com</td>
        <td>Canada</td>
        <td>11/5/2021</td>
        <td>Green</td>
        <th>2</th>
      </tr>
      <tr>
        <th>3</th>
        <td>Charlie Brown</td>
        <td>Graphic Designer</td>
        <td>Gamma Designs</td>
        <td>charlie@example.com</td>
        <td>United Kingdom</td>
        <td>10/20/2021</td>
        <td>Red</td>
        <th>3</th>
      </tr>
      <tr>
        <th>4</th>
        <td>Dora Johnson</td>
        <td>HR Manager</td>
        <td>Delta Corp</td>
        <td>dora@example.com</td>
        <td>Australia</td>
        <td>9/15/2021</td>
        <td>Purple</td>
        <th>4</th>
      </tr>
      <tr>
        <th>5</th>
        <td>Ethan Hunt</td>
        <td>Secret Agent</td>
        <td>Eagle Eye</td>
        <td>ethan@example.com</td>
        <td>France</td>
        <td>8/10/2021</td>
        <td>Black</td>
        <th>5</th>
      </tr>
      <tr>
        <th>6</th>
        <td>Fiona Brown</td>
        <td>Financial Analyst</td>
        <td>Fox Finance</td>
        <td>fiona@example.com</td>
        <td>Germany</td>
        <td>7/5/2021</td>
        <td>Yellow</td>
        <th>6</th>
      </tr>
      <tr>
        <th>7</th>
        <td>George Wilson</td>
        <td>Project Manager</td>
        <td>Gazelle Projects</td>
        <td>george@example.com</td>
        <td>Brazil</td>
        <td>6/1/2021</td>
        <td>Orange</td>
        <th>7</th>
      </tr>
      <tr>
        <th>8</th>
        <td>Hannah Green</td>
        <td>Environmentalist</td>
        <td>Hunter Foundation</td>
        <td>hannah@example.com</td>
        <td>India</td>
        <td>5/25/2021</td>
        <td>Green</td>
        <th>8</th>
      </tr>
      <tr>
        <th>9</th>
        <td>Ian Black</td>
        <td>Journalist</td>
        <td>Insight News</td>
        <td>ian@example.com</td>
        <td>Japan</td>
        <td>4/20/2021</td>
        <td>Blue</td>
        <th>9</th>
      </tr>
      <tr>
        <th>10</th>
        <td>Jennifer White</td>
        <td>Doctor</td>
        <td>Jupiter Hospital</td>
        <td>jennifer@example.com</td>
        <td>South Africa</td>
        <td>3/15/2021</td>
        <td>White</td>
        <th>10</th>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <td>Name</td>
        <td>Occupation</td>
        <td>Employer</td>
        <td>Email</td>
        <td>Location</td>
        <td>Last Access</td>
        <td>Favorite Color</td>
        <th></th>
      </tr>
    </tfoot>
  </table>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="border-base-content/25 w-full rounded-lg border">
  <div class="overflow-x-auto">
    <table class="table">
      <tbody>
        <tr>
          <td>John Doe</td>
          <td>johndoe@example.com</td>
          <td><span class="badge badge-soft badge-success text-xs">Professional</span></td>
          <td>March 1, 2024</td>
          <td>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
          </td>
        </tr>
        <tr>
          <td>Jane Smith</td>
          <td>janesmith@example.com</td>
          <td><span class="badge badge-soft badge-error text-xs">Rejected</span></td>
          <td>March 2, 2024</td>
          <td>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
          </td>
        </tr>
        <tr>
          <td>Alice Johnson</td>
          <td>alicejohnson@example.com</td>
          <td><span class="badge badge-soft badge-info text-xs">Applied</span></td>
          <td>March 3, 2024</td>
          <td>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
          </td>
        </tr>
        <tr>
          <td>Bob Brown</td>
          <td>bobrown@example.com</td>
          <td><span class="badge badge-soft badge-primary text-xs">Current</span></td>
          <td>March 4, 2024</td>
          <td>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="w-full overflow-x-auto">
  <table class="table">
    <caption class="text-base-content p-5 text-left text-lg font-semibold rtl:text-right">
      Users Info
      <p class="text-base-content/80 mt-1 text-sm font-normal">
        Browse a list of user information such as name, email, status, date & more.
      </p>
    </caption>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Status</th>
        <th>Date</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>johndoe@example.com</td>
        <td><span class="badge badge-soft badge-success text-xs">Professional</span></td>
        <td>March 1, 2024</td>
        <td>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
        </td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td>janesmith@example.com</td>
        <td><span class="badge badge-soft badge-error text-xs">Rejected</span></td>
        <td>March 2, 2024</td>
        <td>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
        </td>
      </tr>
      <tr>
        <td>Alice Johnson</td>
        <td>alicejohnson@example.com</td>
        <td><span class="badge badge-soft badge-info text-xs">Applied</span></td>
        <td>March 3, 2024</td>
        <td>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
        </td>
      </tr>
      <tr>
        <td>Bob Brown</td>
        <td>bobrown@example.com</td>
        <td><span class="badge badge-soft badge-primary text-xs">Current</span></td>
        <td>March 4, 2024</td>
        <td>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="w-full overflow-x-auto">
  <table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Status</th>
        <th>Date</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>johndoe@example.com</td>
        <td><span class="badge badge-soft badge-success text-xs">Professional</span></td>
        <td>March 1, 2024</td>
        <td>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
        </td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td>janesmith@example.com</td>
        <td><span class="badge badge-soft badge-error text-xs">Rejected</span></td>
        <td>March 2, 2024</td>
        <td>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
        </td>
      </tr>
      <tr>
        <td>Alice Johnson</td>
        <td>alicejohnson@example.com</td>
        <td><span class="badge badge-soft badge-info text-xs">Applied</span></td>
        <td>March 3, 2024</td>
        <td>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
        </td>
      </tr>
      <tr>
        <td>Bob Brown</td>
        <td>bobrown@example.com</td>
        <td><span class="badge badge-soft badge-primary text-xs">Current</span></td>
        <td>March 4, 2024</td>
        <td>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
          <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Status</th>
        <th>Date</th>
        <th>Actions</th>
      </tr>
    </tfoot>
  </table>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="w-full overflow-x-auto h-fit">
  <table class="table">
    <thead>
      <tr>
        <th>#</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
    </tbody>
  </table>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="w-full rounded-lg pb-2 shadow-base-300/20 shadow-sm">
  <div class="overflow-x-auto">
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Status</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John Doe</td>
          <td>johndoe@example.com</td>
          <td><span class="badge badge-soft badge-success text-xs">Professional</span></td>
          <td>March 1, 2024</td>
          <td>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
          </td>
        </tr>
        <tr>
          <td>Jane Smith</td>
          <td>janesmith@example.com</td>
          <td><span class="badge badge-soft badge-error text-xs">Rejected</span></td>
          <td>March 2, 2024</td>
          <td>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
          </td>
        </tr>
        <tr>
          <td>Alice Johnson</td>
          <td>alicejohnson@example.com</td>
          <td><span class="badge badge-soft badge-info text-xs">Applied</span></td>
          <td>March 3, 2024</td>
          <td>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
          </td>
        </tr>
        <tr>
          <td>Bob Brown</td>
          <td>bobrown@example.com</td>
          <td><span class="badge badge-soft badge-primary text-xs">Current</span></td>
          <td>March 4, 2024</td>
          <td>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="w-full rounded-lg pb-2">
  <div class="overflow-x-auto">
    <table class="table">
      <thead>
        <tr class="border-0 bg-base-300/20 *:first:rounded-s-md *:last:rounded-e-md">
          <th>Name</th>
          <th>Email</th>
          <th>Status</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John Doe</td>
          <td>johndoe@example.com</td>
          <td><span class="badge badge-soft badge-success text-xs">Professional</span></td>
          <td>March 1, 2024</td>
          <td>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
          </td>
        </tr>
        <tr>
          <td>Jane Smith</td>
          <td>janesmith@example.com</td>
          <td><span class="badge badge-soft badge-error text-xs">Rejected</span></td>
          <td>March 2, 2024</td>
          <td>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
          </td>
        </tr>
        <tr>
          <td>Alice Johnson</td>
          <td>alicejohnson@example.com</td>
          <td><span class="badge badge-soft badge-info text-xs">Applied</span></td>
          <td>March 3, 2024</td>
          <td>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
          </td>
        </tr>
        <tr>
          <td>Bob Brown</td>
          <td>bobrown@example.com</td>
          <td><span class="badge badge-soft badge-primary text-xs">Current</span></td>
          <td>March 4, 2024</td>
          <td>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="w-full">
  <div class="flex flex-col flex-wrap gap-3 sm:flex-row sm:items-center sm:justify-between">
    <div class="dropdown relative inline-flex">
      <button id="dropdown-default" type="button" class="dropdown-toggle btn btn-outline btn-secondary font-normal" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" >
        <span class="icon-[componentx--clock]"></span>
        Last 30 days
        <span class="icon-[componentx--chevron-down] dropdown-open:rotate-180 size-4"></span>
      </button>
      <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-10" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-default" >
        <li><a class="dropdown-item" href="javascript:void(0)">Last 3 days</a></li>
        <li><a class="dropdown-item" href="javascript:void(0)">Last 7 days</a></li>
        <li><a class="dropdown-item" href="javascript:void(0)">Last 30 days</a></li>
        <li><a class="dropdown-item" href="javascript:void(0)">Last 3 months</a></li>
        <li><a class="dropdown-item" href="javascript:void(0)">Last year</a></li>
      </ul>
    </div>
    <div class="input max-w-xs">
      <span class="icon-[componentx--search] text-base-content/80 my-auto me-3 size-5 shrink-0"></span>
      <input type="search" class="grow" placeholder="Search" id="leadingIconDefault" />
    </div>
  </div>

  <div class="mt-8 overflow-x-auto">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th>
            <input type="checkbox" class="checkbox checkbox-primary checkbox-sm" aria-label="product" />
          </th>
          <th>Product</th>
          <th>Color</th>
          <th>Category</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox checkbox-primary checkbox-sm" aria-label="product" />
            </label>
          </th>
          <td>
            <div class="flex items-center gap-3">
              <div class="avatar">
                <div class="bg-base-content/10 h-10 w-10 rounded-md">
                  <img src="https://cdn.flyonui.com/fy-assets/components/table/product-2.png" alt="product image" />
                </div>
              </div>
              <div>
                <div class="text-sm opacity-50">Apple</div>
                <div class="font-medium">iPhone 14 Pro</div>
              </div>
            </div>
          </td>
          <td>Stealth black</td>
          <td>
            <div class="flex items-center">
              <span class="badge badge-primary badge-soft me-2 rounded-full p-1">
                <span class="icon-[componentx--device-mobile]"></span>
              </span>
              Phone
            </div>
          </td>
          <td>$599</td>
          <td>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
          </td>
        </tr>
        <!-- row 2 -->
        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox checkbox-primary checkbox-sm" aria-label="product" />
            </label>
          </th>
          <td>
            <div class="flex items-center gap-3">
              <div class="avatar">
                <div class="bg-base-content/10 h-10 w-10 rounded-md">
                  <img src="https://cdn.flyonui.com/fy-assets/components/table/product-1.png" alt="product image" />
                </div>
              </div>
              <div>
                <div class="text-sm opacity-50">Apple</div>
                <div class="font-medium">Watch series 7</div>
              </div>
            </div>
          </td>
          <td>Peach</td>
          <td>
            <div class="flex items-center">
              <span class="badge badge-info badge-soft me-2 rounded-full p-1">
                <span class="icon-[componentx--device-watch]"></span>
              </span>
              Watch
            </div>
          </td>
          <td>$999</td>
          <td>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
          </td>
        </tr>
        <!-- row 3 -->
        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox checkbox-primary checkbox-sm" aria-label="product" />
            </label>
          </th>
          <td>
            <div class="flex items-center gap-3">
              <div class="avatar">
                <div class="bg-base-content/15 h-10 w-10 rounded-md">
                  <img src="https://cdn.flyonui.com/fy-assets/components/table/product-19.png" alt="product image" />
                </div>
              </div>
              <div>
                <div class="text-sm opacity-50">Meta</div>
                <div class="font-medium">Quest</div>
              </div>
            </div>
          </td>
          <td>Elegant white</td>
          <td>
            <div class="flex items-center">
              <span class="badge badge-success badge-soft me-2 rounded-full p-1">
                <span class="icon-[componentx--device-vision-pro]"></span>
              </span>
              VR headset
            </div>
          </td>
          <td>$499</td>
          <td>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
          </td>
        </tr>
        <!-- row 4 -->
        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox checkbox-primary checkbox-sm" aria-label="product" />
            </label>
          </th>
          <td>
            <div class="flex items-center gap-3">
              <div class="avatar">
                <div class="bg-base-content/15 h-10 w-10 rounded-md">
                  <img src="https://cdn.flyonui.com/fy-assets/components/table/product-5.png" alt="product image" />
                </div>
              </div>
              <div>
                <div class="text-sm opacity-50">Apple</div>
                <div class="font-medium">Macbook Pro 16</div>
              </div>
            </div>
          </td>
          <td>Space gray</td>
          <td>
            <div class="flex items-center">
              <span class="badge badge-warning badge-soft me-2 rounded-full p-1">
                <span class="icon-[componentx--device-laptop]"></span>
              </span>
              Laptop
            </div>
          </td>
          <td>$1999</td>
          <td>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="flex flex-wrap items-center justify-between gap-2 py-4 pt-6">
    <div class="me-2 block max-w-sm text-sm text-base-content/80 sm:mb-0">
      Showing
      <span class="font-semibold text-base-content/80">1-4</span>
      of
      <span class="font-semibold">20</span>
      products
    </div>
    <nav class="join">
      <button type="button" class="btn btn-soft btn-square join-item" aria-label="previous button">
        <span class="icon-[componentx--chevron-left] size-5 rtl:rotate-180"></span>
      </button>
      <button type="button" class="btn btn-soft join-item btn-square aria-[current='page']:text-bg-primary" aria-current="page">1</button>
      <button type="button" class="btn btn-soft join-item btn-square aria-[current='page']:text-bg-primary">2</button>
      <button type="button" class="btn btn-soft join-item btn-square aria-[current='page']:text-bg-primary">3</button>
      <button type="button" class="btn btn-soft btn-square join-item" aria-label="next button">
        <span class="icon-[componentx--chevron-right] size-5 rtl:rotate-180"></span>
      </button>
    </nav>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="card w-full">
  <div class="w-full overflow-x-auto">
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Status</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John Doe</td>
          <td>johndoe@example.com</td>
          <td><span class="badge badge-soft badge-success text-xs">Professional</span></td>
          <td>March 1, 2024</td>
          <td>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
          </td>
        </tr>
        <tr>
          <td>Jane Smith</td>
          <td>janesmith@example.com</td>
          <td><span class="badge badge-soft badge-error text-xs">Rejected</span></td>
          <td>March 2, 2024</td>
          <td>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
          </td>
        </tr>
        <tr>
          <td>Alice Johnson</td>
          <td>alicejohnson@example.com</td>
          <td><span class="badge badge-soft badge-info text-xs">Applied</span></td>
          <td>March 3, 2024</td>
          <td>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
          </td>
        </tr>
        <tr>
          <td>Bob Brown</td>
          <td>bobrown@example.com</td>
          <td><span class="badge badge-soft badge-primary text-xs">Current</span></td>
          <td>March 4, 2024</td>
          <td>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--pencil] size-5"></span></button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--trash] size-5"></span></button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[componentx--dots-vertical] size-5"></span></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
