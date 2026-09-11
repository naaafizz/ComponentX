---
name: "Datatables"
library: "ComponentX"
id: "datatables"
type: "data-display"
quality: "advanced"
tags: ["button", "data", "table", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Datatables

> **Type:** `data-display` · **Quality:** `advanced` · **ID:** `datatables`
> **Path:** `components/data-display/datatables.md`

**Datatables** is a premium, production-ready component from the **ComponentX** library — engineered for data display interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Advanced tier** — richer composition and interaction, engineered for complex layouts while keeping the public surface tight.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `button`, `data`, `table` workflows.
- **Pattern coverage** — includes `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Datatables** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
<div
  class="bg-base-100 flex flex-col rounded-md shadow-base-300/20 shadow-sm"
  data-datatable='{
  "pageLength": 5,
  "pagingOptions": {
    "pageBtnClasses": "btn btn-text btn-circle btn-sm"
  }
}'
>
  <div class="overflow-x-auto">
    <div class="inline-block min-w-full align-middle">
      <div class="overflow-hidden">
        <table class="table min-w-full">
          <thead>
            <tr>
              <th scope="col" class="group">
                <div class="flex items-center justify-between">
                  Name
                  <span class="icon-[componentx--chevron-up] hidden datatable-ordering-asc:block"></span>
                  <span class="icon-[componentx--chevron-down] hidden datatable-ordering-desc:block"></span>
                </div>
              </th>
              <th scope="col" class="group">
                <div class="flex items-center justify-between">
                  Email
                  <span class="icon-[componentx--chevron-up] hidden datatable-ordering-asc:block"></span>
                  <span class="icon-[componentx--chevron-down] hidden datatable-ordering-desc:block"></span>
                </div>
              </th>
              <th scope="col" class="group">
                <div class="flex items-center justify-between">
                  Status
                  <span class="icon-[componentx--chevron-up] hidden datatable-ordering-asc:block"></span>
                  <span class="icon-[componentx--chevron-down] hidden datatable-ordering-desc:block"></span>
                </div>
              </th>
              <th scope="col" class="group">
                <div class="flex items-center justify-between">
                  Date
                  <span class="icon-[componentx--chevron-up] hidden datatable-ordering-asc:block"></span>
                  <span class="icon-[componentx--chevron-down] hidden datatable-ordering-desc:block"></span>
                </div>
              </th>
              <th scope="col" class="--exclude-from-ordering">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>johndoe@example.com</td>
              <td><span class="badge badge-soft badge-success badge-sm">Professional</span></td>
              <td>March 1, 2024</td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>janesmith@example.com</td>
              <td><span class="badge badge-soft badge-error badge-sm">Rejected</span></td>
              <td>March 2, 2024</td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Alice Johnson</td>
              <td>alicejohnson@example.com</td>
              <td><span class="badge badge-soft badge-info badge-sm">Applied</span></td>
              <td>March 3, 2024</td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Bob Brown</td>
              <td>bobrown@example.com</td>
              <td><span class="badge badge-soft badge-primary badge-sm">Current</span></td>
              <td>March 4, 2024</td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Alice Johnson</td>
              <td>alicej@example.com</td>
              <td><span class="badge badge-soft badge-primary badge-sm">Current</span></td>
              <td>January 15, 2024</td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Chris Evans</td>
              <td>chrisev@example.com</td>
              <td><span class="badge badge-soft badge-secondary badge-sm">Inactive</span></td>
              <td>November 20, 2023</td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Dana White</td>
              <td>danaw@example.com</td>
              <td><span class="badge badge-soft badge-primary badge-sm">Current</span></td>
              <td>February 2, 2024</td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Ethan Hall</td>
              <td>ethanh@example.com</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Pending</span></td>
              <td>April 14, 2024</td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Fiona Carter</td>
              <td>fionac@example.com</td>
              <td><span class="badge badge-soft badge-primary badge-sm">Current</span></td>
              <td>March 9, 2024</td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>George Smith</td>
              <td>georges@example.com</td>
              <td><span class="badge badge-soft badge-secondary badge-sm">Inactive</span></td>
              <td>December 12, 2023</td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Hannah Wright</td>
              <td>hannahw@example.com</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Pending</span></td>
              <td>June 10, 2024</td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Isaac Long</td>
              <td>isaacl@example.com</td>
              <td><span class="badge badge-soft badge-primary badge-sm">Current</span></td>
              <td>August 20, 2024</td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Jane Davis</td>
              <td>janed@example.com</td>
              <td><span class="badge badge-soft badge-primary badge-sm">Current</span></td>
              <td>July 3, 2024</td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Kevin Lee</td>
              <td>kevinl@example.com</td>
              <td><span class="badge badge-soft badge-primary badge-sm">Current</span></td>
              <td>May 12, 2024</td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Linda Green</td>
              <td>lindag@example.com</td>
              <td><span class="badge badge-soft badge-secondary badge-sm">Inactive</span></td>
              <td>October 7, 2023</td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div class="border-base-content/25 flex items-center justify-between gap-3 border-t p-3 max-md:flex-wrap max-md:justify-center">
   <div class="text-sm text-base-content/80" data-datatable-info="">
      Showing
      <span data-datatable-info-from=""></span>
      to
      <span data-datatable-info-to=""></span>
      of
      <span data-datatable-info-length=""></span>
      users
    </div>
    <div class="flex hidden items-center space-x-1" data-datatable-paging="">
      <button type="button" class="btn btn-text btn-circle btn-sm" data-datatable-paging-prev="">
        <span class="icon-[componentx--chevrons-left] size-4.5 rtl:rotate-180"></span>
        <span class="sr-only">Previous</span>
      </button>
      <div class="flex items-center space-x-1 [&>.active]:text-bg-soft-primary" data-datatable-paging-pages=""></div>
      <button type="button" class="btn btn-text btn-circle btn-sm" data-datatable-paging-next="">
        <span class="sr-only">Next</span>
        <span class="icon-[componentx--chevrons-right] size-4.5 rtl:rotate-180"></span>
      </button>
    </div>
  </div>
</div>
```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div
  class="bg-base-100 flex flex-col rounded-md shadow-base-300/20 shadow-sm"
  data-datatable='{
  "pageLength": 15,
  "scrollY": "470px",
  "pagingOptions": {
    "pageBtnClasses": "btn btn-text btn-circle btn-sm"
  }
}'
>
  <div class="min-h-[460px] overflow-x-auto">
    <div class="inline-block min-w-full align-middle">
      <div class="overflow-hidden">
        <table class="table min-w-full">
          <thead>
            <tr>
              <th scope="col" class="group w-fit">
                <div class="flex items-center justify-between">
                  Product Name
                  <span class="icon-[componentx--chevron-up] datatable-ordering-asc:block hidden"></span>
                  <span class="icon-[componentx--chevron-down] datatable-ordering-desc:block hidden"></span>
                </div>
              </th>
              <th scope="col" class="group w-fit">
                <div class="flex items-center justify-between">
                  Price
                  <span class="icon-[componentx--chevron-up] datatable-ordering-asc:block hidden"></span>
                  <span class="icon-[componentx--chevron-down] datatable-ordering-desc:block hidden"></span>
                </div>
              </th>
              <th scope="col" class="group w-fit">
                <div class="flex items-center justify-between">
                  Availability
                  <span class="icon-[componentx--chevron-up] datatable-ordering-asc:block hidden"></span>
                  <span class="icon-[componentx--chevron-down] datatable-ordering-desc:block hidden"></span>
                </div>
              </th>
              <th scope="col" class="--exclude-from-ordering">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Apple iPhone 15</td>
              <td>$999</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Samsung Galaxy S23</td>
              <td>$899</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Sony WH-1000XM5</td>
              <td>$399</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Dell XPS 15</td>
              <td>$1,299</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Logitech MX Master 3</td>
              <td>$99</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Microsoft Surface Laptop 5</td>
              <td>$1,499</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>HP Spectre x360</td>
              <td>$1,199</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Apple Watch Series 9</td>
              <td>$499</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Google Pixel 7</td>
              <td>$599</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Bose QuietComfort Earbuds II</td>
              <td>$279</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Asus ROG Zephyrus G14</td>
              <td>$1,899</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Sony PlayStation 5</td>
              <td>$499</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Amazon Echo Dot (5th Gen)</td>
              <td>$49</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>NVIDIA GeForce RTX 4090</td>
              <td>$1,599</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Lenovo ThinkPad X1 Carbon</td>
              <td>$1,799</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Google Nest Hub (2nd Gen)</td>
              <td>$99</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Fitbit Charge 6</td>
              <td>$149</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Razer Blade 16</td>
              <td>$2,499</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Oculus Quest 3</td>
              <td>$499</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Canon EOS R8</td>
              <td>$1,699</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>DJI Mavic 3 Pro</td>
              <td>$2,199</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Alienware Aurora R15</td>
              <td>$2,899</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>SteelSeries Arctis Nova Pro</td>
              <td>$349</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div class="border-base-content/25 flex items-center justify-between gap-3 border-t p-3 max-md:flex-wrap max-md:justify-center">
    <div class="text-base-content/80 text-sm" data-datatable-info="">
      Showing
      <span data-datatable-info-from="1"></span>
      to
      <span data-datatable-info-to="30"></span>
      of
      <span data-datatable-info-length="50"></span>
      products
    </div>
    <div class="flex hidden items-center space-x-1" data-datatable-paging="">
      <button type="button" class="btn btn-text btn-circle btn-sm" data-datatable-paging-prev="">
        <span class="icon-[componentx--chevrons-left] size-4.5 rtl:rotate-180"></span>
        <span class="sr-only">Previous</span>
      </button>
      <div class="[&>.active]:text-bg-soft-primary flex items-center space-x-1" data-datatable-paging-pages=""></div>
      <button type="button" class="btn btn-text btn-circle btn-sm" data-datatable-paging-next="">
        <span class="sr-only">Next</span>
        <span class="icon-[componentx--chevrons-right] size-4.5 rtl:rotate-180"></span>
      </button>
    </div>
  </div>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div
  class="bg-base-100 flex flex-col rounded-md shadow-base-300/20 shadow-sm"
  data-datatable='{
  "pageLength": 5,
  "pagingOptions": {
    "pageBtnClasses": "btn btn-text btn-circle btn-sm"
  },
  "selecting": true,
  "rowSelectingOptions": {
    "selectAllSelector": "#table-checkbox-all"
  }
}'
>
  <div class="overflow-x-auto">
    <div class="inline-block min-w-full align-middle">
      <div class="overflow-hidden">
        <table class="table min-w-full">
          <thead>
            <tr>
              <th scope="col" class="--exclude-from-ordering w-3.5 pe-0">
                <div class="flex h-5">
                  <input id="table-checkbox-all" type="checkbox" class="checkbox checkbox-sm" />
                  <label for="table-checkbox-all" class="sr-only">Checkbox</label>
                </div>
              </th>
              <th scope="col" class="group w-fit">
                <div class="flex items-center justify-between">
                  Product Name
                  <span class="icon-[componentx--chevron-up] datatable-ordering-asc:block hidden"></span>
                  <span class="icon-[componentx--chevron-down] datatable-ordering-desc:block hidden"></span>
                </div>
              </th>
              <th scope="col" class="group w-fit">
                <div class="flex items-center justify-between">
                  Price
                  <span class="icon-[componentx--chevron-up] datatable-ordering-asc:block hidden"></span>
                  <span class="icon-[componentx--chevron-down] datatable-ordering-desc:block hidden"></span>
                </div>
              </th>
              <th scope="col" class="group w-fit">
                <div class="flex items-center justify-between">
                  Availability
                  <span class="icon-[componentx--chevron-up] datatable-ordering-asc:block hidden"></span>
                  <span class="icon-[componentx--chevron-down] datatable-ordering-desc:block hidden"></span>
                </div>
              </th>
              <th scope="col" class="--exclude-from-ordering">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-checkbox-1" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-checkbox-1" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Apple iPhone 15</td>
              <td>$999</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-checkbox-2" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-checkbox-2" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Samsung Galaxy S23</td>
              <td>$899</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-checkbox-3" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-checkbox-3" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Sony WH-1000XM5</td>
              <td>$399</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-checkbox-4" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-checkbox-4" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Dell XPS 15</td>
              <td>$1,299</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-checkbox-5" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-checkbox-5" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Logitech MX Master 3</td>
              <td>$99</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-checkbox-6" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-checkbox-6" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Microsoft Surface Laptop 5</td>
              <td>$1,499</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-checkbox-7" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-checkbox-7" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>HP Spectre x360</td>
              <td>$1,199</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-checkbox-8" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-checkbox-8" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Apple Watch Series 9</td>
              <td>$499</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-checkbox-9" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-checkbox-9" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Google Pixel 7</td>
              <td>$599</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-checkbox-10" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-checkbox-10" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Bose QuietComfort Earbuds II</td>
              <td>$279</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-checkbox-11" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-checkbox-11" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Asus ROG Zephyrus G14</td>
              <td>$1,899</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-checkbox-12" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-checkbox-12" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Sony PlayStation 5</td>
              <td>$499</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-checkbox-13" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-checkbox-13" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Amazon Echo Dot (5th Gen)</td>
              <td>$49</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-checkbox-14" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-checkbox-14" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>NVIDIA GeForce RTX 4090</td>
              <td>$1,599</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-checkbox-15" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-checkbox-15" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Lenovo ThinkPad X1 Carbon</td>
              <td>$1,799</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-checkbox-16" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-checkbox-16" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Google Nest Hub (2nd Gen)</td>
              <td>$99</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-checkbox-17" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-checkbox-17" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Fitbit Charge 6</td>
              <td>$149</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-checkbox-18" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-checkbox-18" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Razer Blade 16</td>
              <td>$2,499</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-checkbox-19" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-checkbox-19" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Oculus Quest 3</td>
              <td>$499</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-checkbox-20" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-checkbox-20" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Canon EOS R8</td>
              <td>$1,699</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-checkbox-21" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-checkbox-21" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>DJI Mavic 3 Pro</td>
              <td>$2,199</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-checkbox-22" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-checkbox-22" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Alienware Aurora R15</td>
              <td>$2,899</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-checkbox-23" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-checkbox-23" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>SteelSeries Arctis Nova Pro</td>
              <td>$349</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div class="border-base-content/25 flex items-center justify-between gap-3 border-t p-3 max-md:flex-wrap max-md:justify-center">
    <div class="text-base-content/80 text-sm" data-datatable-info="">
      Showing
      <span data-datatable-info-from="1"></span>
      to
      <span data-datatable-info-to="30"></span>
      of
      <span data-datatable-info-length="50"></span>
      products
    </div>
    <div class="flex hidden items-center space-x-1" data-datatable-paging="">
      <button type="button" class="btn btn-text btn-circle btn-sm" data-datatable-paging-prev="">
        <span class="icon-[componentx--chevrons-left] size-4.5 rtl:rotate-180"></span>
        <span class="sr-only">Previous</span>
      </button>
      <div class="[&>.active]:text-bg-soft-primary flex items-center space-x-1" data-datatable-paging-pages=""></div>
      <button type="button" class="btn btn-text btn-circle btn-sm" data-datatable-paging-next="">
        <span class="sr-only">Next</span>
        <span class="icon-[componentx--chevrons-right] size-4.5 rtl:rotate-180"></span>
      </button>
    </div>
  </div>
</div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div
  class="bg-base-100 flex flex-col rounded-md shadow-base-300/20 shadow-sm"
  data-datatable='{
  "pageLength": 5,
  "pagingOptions": {
    "pageBtnClasses": "btn btn-text btn-circle btn-sm"
  },
  "selecting": true,
  "rowSelectingOptions": {
    "selectAllSelector": "#table-search-all"
  },
  "language": {
      "zeroRecords": "<div class=\"py-10 px-5 flex flex-col justify-center items-center text-center\"><span class=\"icon-[componentx--search] shrink-0 size-6 text-base-content\"></span><div class=\"max-w-sm mx-auto\"><p class=\"mt-2 text-sm text-base-content/80\">No search results</p></div></div>"
    }
}'
>
  <div class="py-3 ps-5 border-b border-base-content/25">
    <div class="input input-sm max-w-60">
      <span class="icon-[componentx--search] text-base-content/80 my-auto me-3 size-4 shrink-0"></span>
      <label class="sr-only" for="table-input-search"></label>
      <input type="search" class="grow" placeholder="Search for items" id="table-input-search" data-datatable-search="" />
    </div>
  </div>
  <div class="overflow-x-auto">
    <div class="inline-block min-w-full align-middle">
      <div class="overflow-hidden">
        <table class="table min-w-full">
          <thead>
            <tr>
              <th scope="col" class="--exclude-from-ordering w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-search-all" type="checkbox" class="checkbox checkbox-sm" />
                  <label for="table-search-all" class="sr-only">Checkbox</label>
                </div>
              </th>
              <th scope="col" class="group w-fit">
                <div class="flex items-center justify-between">
                  Product Name
                  <span class="icon-[componentx--chevron-up] datatable-ordering-asc:block hidden"></span>
                  <span class="icon-[componentx--chevron-down] datatable-ordering-desc:block hidden"></span>
                </div>
              </th>
              <th scope="col" class="group w-fit">
                <div class="flex items-center justify-between">
                  Price
                  <span class="icon-[componentx--chevron-up] datatable-ordering-asc:block hidden"></span>
                  <span class="icon-[componentx--chevron-down] datatable-ordering-desc:block hidden"></span>
                </div>
              </th>
              <th scope="col" class="group w-fit">
                <div class="flex items-center justify-between">
                  Availability
                  <span class="icon-[componentx--chevron-up] datatable-ordering-asc:block hidden"></span>
                  <span class="icon-[componentx--chevron-down] datatable-ordering-desc:block hidden"></span>
                </div>
              </th>
              <th scope="col" class="--exclude-from-ordering">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-search-1" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-search-1" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Apple iPhone 15</td>
              <td>$999</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-search-2" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-search-2" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Samsung Galaxy S23</td>
              <td>$899</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-search-3" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-search-3" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Sony WH-1000XM5</td>
              <td>$399</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-search-4" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-search-4" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Dell XPS 15</td>
              <td>$1,299</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-search-5" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-search-5" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Logitech MX Master 3</td>
              <td>$99</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-search-6" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-search-6" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Microsoft Surface Laptop 5</td>
              <td>$1,499</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-search-7" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-search-7" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>HP Spectre x360</td>
              <td>$1,199</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-search-8" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-search-8" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Apple Watch Series 9</td>
              <td>$499</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-search-9" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-search-9" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Google Pixel 7</td>
              <td>$599</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-search-10" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-search-10" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Bose QuietComfort Earbuds II</td>
              <td>$279</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-search-11" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-search-11" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Asus ROG Zephyrus G14</td>
              <td>$1,899</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-search-12" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-search-12" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Sony PlayStation 5</td>
              <td>$499</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-search-13" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-search-13" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Amazon Echo Dot (5th Gen)</td>
              <td>$49</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-search-14" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-search-14" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>NVIDIA GeForce RTX 4090</td>
              <td>$1,599</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-search-15" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-search-15" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Lenovo ThinkPad X1 Carbon</td>
              <td>$1,799</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-search-16" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-search-16" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Google Nest Hub (2nd Gen)</td>
              <td>$99</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-search-17" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-search-17" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Fitbit Charge 6</td>
              <td>$149</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-search-18" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-search-18" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Razer Blade 16</td>
              <td>$2,499</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-search-19" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-search-19" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Oculus Quest 3</td>
              <td>$499</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-search-20" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-search-20" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Canon EOS R8</td>
              <td>$1,699</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-search-21" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-search-21" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>DJI Mavic 3 Pro</td>
              <td>$2,199</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-search-22" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-search-22" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Alienware Aurora R15</td>
              <td>$2,899</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-search-23" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-search-23" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>SteelSeries Arctis Nova Pro</td>
              <td>$349</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div class="border-base-content/25 flex items-center justify-between gap-3 border-t p-3 max-md:flex-wrap max-md:justify-center">
    <div class="text-base-content/80 text-sm" data-datatable-info="">
      Showing
      <span data-datatable-info-from="1"></span>
      to
      <span data-datatable-info-to="30"></span>
      of
      <span data-datatable-info-length="50"></span>
      products
    </div>
    <div class="flex hidden items-center space-x-1" data-datatable-paging="">
      <button type="button" class="btn btn-text btn-circle btn-sm" data-datatable-paging-prev="">
        <span class="icon-[componentx--chevrons-left] size-4.5 rtl:rotate-180"></span>
        <span class="sr-only">Previous</span>
      </button>
      <div class="[&>.active]:text-bg-soft-primary flex items-center space-x-1" data-datatable-paging-pages=""></div>
      <button type="button" class="btn btn-text btn-circle btn-sm" data-datatable-paging-next="">
        <span class="sr-only">Next</span>
        <span class="icon-[componentx--chevrons-right] size-4.5 rtl:rotate-180"></span>
      </button>
    </div>
  </div>
</div>
```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div
  id="datatable-filter"
  class="bg-base-100 --prevent-on-load-init flex flex-col rounded-md shadow-base-300/20 shadow-sm"
  data-datatable='{
  "pageLength": 5,
  "pagingOptions": {
    "pageBtnClasses": "btn btn-text btn-circle btn-sm"
  },  
  "selecting": true,
  "rowSelectingOptions": {
    "selectAllSelector": "#datatable-filter-select-all-rows",
    "individualSelector": ".datatable-filter-select-row"
  },
  "language": {
      "zeroRecords": "<div class=\"py-10 px-5 flex flex-col justify-center items-center text-center\"><span class=\"icon-[componentx--search] shrink-0 size-6 text-base-content\"></span><div class=\"max-w-sm mx-auto\"><p class=\"mt-2 text-sm text-base-content/80\">No search results</p></div></div>"
    }
}'
>
  <div class="border-base-content/25 flex items-center border-b px-5 py-3 gap-3">
    <div class="input input-sm max-w-60">
      <span class="icon-[componentx--search] text-base-content/80 my-auto me-3 size-4 shrink-0"></span>
      <label class="sr-only" for="filter-search"></label>
      <input type="search" class="grow" placeholder="Search for items" id="filter-search" data-datatable-search="" />
    </div>
    <div class="flex flex-1 items-center justify-end gap-3">
      <!-- Select -->
      <select
        data-select='{
          "placeholder": "Select option...",
          "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
          "toggleClasses": "advance-select-toggle advance-select-sm",
          "dropdownClasses": "advance-select-menu w-24 max-sm:w-16",
          "optionClasses": "advance-select-option selected:select-active",
          "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"icon-[componentx--check] shrink-0 size-3 text-primary hidden selected:block \"></span></div>",
          "extraMarkup": "<span class=\"icon-[componentx--caret-up-down] shrink-0 size-4 text-base-content absolute top-1/2 end-2 -translate-y-1/2 \"></span>"
          }'
        class="hidden" data-datatable-page-entities="" >
        <option value="5" selected="">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
      </select>
      <!-- End Select -->
      <select
        data-select='{
          "placeholder": "Select option...",
          "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
          "toggleClasses": "advance-select-toggle advance-select-sm max-sm:w-20 w-36",
          "dropdownClasses": "advance-select-menu max-sm:w-28 w-full",
          "optionClasses": "advance-select-option selected:select-active",
          "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"icon-[componentx--check] shrink-0 size-3 text-primary hidden selected:block \"></span></div>",
          "extraMarkup": "<span class=\"icon-[componentx--caret-up-down] shrink-0 size-4 text-base-content absolute top-1/2 end-2 -translate-y-1/2 \"></span>"
          }'
        class="hidden" id="select-stock">
        <option value="all">All</option>
        <option value="In Stock">In Stock</option>
        <option value="Out of Stock">Out of Stock</option>
        <option value="Limited">Limited</option>        
      </select>
    </div>
  </div>
  <div class="overflow-x-auto">
    <div class="inline-block min-w-full align-middle">
      <div class="overflow-hidden">
        <table class="table min-w-full">
          <thead>
            <tr>
              <th scope="col" class="--exclude-from-ordering w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="datatable-filter-select-all-rows" type="checkbox" class="checkbox checkbox-sm" />
                  <label for="datatable-filter-select-all-rows" class="sr-only">Checkbox</label>
                </div>
              </th>
              <th scope="col" class="group w-fit">
                <div class="flex items-center justify-between">
                  Product Name
                  <span class="icon-[componentx--chevron-up] datatable-ordering-asc:block hidden"></span>
                  <span class="icon-[componentx--chevron-down] datatable-ordering-desc:block hidden"></span>
                </div>
              </th>
              <th scope="col" class="group w-fit">
                <div class="flex items-center justify-between">
                  Price
                  <span class="icon-[componentx--chevron-up] datatable-ordering-asc:block hidden"></span>
                  <span class="icon-[componentx--chevron-down] datatable-ordering-desc:block hidden"></span>
                </div>
              </th>
              <th scope="col" class="group w-fit">
                <div class="flex items-center justify-between">
                  Availability
                  <span class="icon-[componentx--chevron-up] datatable-ordering-asc:block hidden"></span>
                  <span class="icon-[componentx--chevron-down] datatable-ordering-desc:block hidden"></span>
                </div>
              </th>
              <th scope="col" class="--exclude-from-ordering">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-filter-1" type="checkbox" class="checkbox checkbox-sm datatable-filter-select-row" data-datatable-row-selecting-individual="" />
                  <label for="table-filter-1" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Apple iPhone 15</td>
              <td>$999</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-filter-2" type="checkbox" class="checkbox checkbox-sm datatable-filter-select-row" data-datatable-row-selecting-individual="" />
                  <label for="table-filter-2" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Samsung Galaxy S23</td>
              <td>$899</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-filter-3" type="checkbox" class="checkbox checkbox-sm datatable-filter-select-row" data-datatable-row-selecting-individual="" />
                  <label for="table-filter-3" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Sony WH-1000XM5</td>
              <td>$399</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-filter-4" type="checkbox" class="checkbox checkbox-sm datatable-filter-select-row" data-datatable-row-selecting-individual="" />
                  <label for="table-filter-4" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Dell XPS 15</td>
              <td>$1,299</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-filter-5" type="checkbox" class="checkbox checkbox-sm datatable-filter-select-row" data-datatable-row-selecting-individual="" />
                  <label for="table-filter-5" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Logitech MX Master 3</td>
              <td>$99</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-filter-6" type="checkbox" class="checkbox checkbox-sm datatable-filter-select-row" data-datatable-row-selecting-individual="" />
                  <label for="table-filter-6" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Microsoft Surface Laptop 5</td>
              <td>$1,499</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-filter-7" type="checkbox" class="checkbox checkbox-sm datatable-filter-select-row" data-datatable-row-selecting-individual="" />
                  <label for="table-filter-7" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>HP Spectre x360</td>
              <td>$1,199</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-filter-8" type="checkbox" class="checkbox checkbox-sm datatable-filter-select-row" data-datatable-row-selecting-individual="" />
                  <label for="table-filter-8" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Apple Watch Series 9</td>
              <td>$499</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-filter-9" type="checkbox" class="checkbox checkbox-sm datatable-filter-select-row" data-datatable-row-selecting-individual="" />
                  <label for="table-filter-9" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Google Pixel 7</td>
              <td>$599</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-filter-10" type="checkbox" class="checkbox checkbox-sm datatable-filter-select-row" data-datatable-row-selecting-individual="" />
                  <label for="table-filter-10" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Bose QuietComfort Earbuds II</td>
              <td>$279</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-filter-11" type="checkbox" class="checkbox checkbox-sm datatable-filter-select-row" data-datatable-row-selecting-individual="" />
                  <label for="table-filter-11" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Asus ROG Zephyrus G14</td>
              <td>$1,899</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-filter-12" type="checkbox" class="checkbox checkbox-sm datatable-filter-select-row" data-datatable-row-selecting-individual="" />
                  <label for="table-filter-12" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Sony PlayStation 5</td>
              <td>$499</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-filter-13" type="checkbox" class="checkbox checkbox-sm datatable-filter-select-row" data-datatable-row-selecting-individual="" />
                  <label for="table-filter-13" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Amazon Echo Dot (5th Gen)</td>
              <td>$49</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-filter-14" type="checkbox" class="checkbox checkbox-sm datatable-filter-select-row" data-datatable-row-selecting-individual="" />
                  <label for="table-filter-14" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>NVIDIA GeForce RTX 4090</td>
              <td>$1,599</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-filter-15" type="checkbox" class="checkbox checkbox-sm datatable-filter-select-row" data-datatable-row-selecting-individual="" />
                  <label for="table-filter-15" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Lenovo ThinkPad X1 Carbon</td>
              <td>$1,799</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-filter-16" type="checkbox" class="checkbox checkbox-sm datatable-filter-select-row" data-datatable-row-selecting-individual="" />
                  <label for="table-filter-16" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Google Nest Hub (2nd Gen)</td>
              <td>$99</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-filter-17" type="checkbox" class="checkbox checkbox-sm datatable-filter-select-row" data-datatable-row-selecting-individual="" />
                  <label for="table-filter-17" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Fitbit Charge 6</td>
              <td>$149</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-filter-18" type="checkbox" class="checkbox checkbox-sm datatable-filter-select-row" data-datatable-row-selecting-individual="" />
                  <label for="table-filter-18" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Razer Blade 16</td>
              <td>$2,499</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-filter-19" type="checkbox" class="checkbox checkbox-sm datatable-filter-select-row" data-datatable-row-selecting-individual="" />
                  <label for="table-filter-19" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Oculus Quest 3</td>
              <td>$499</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-filter-20" type="checkbox" class="checkbox checkbox-sm datatable-filter-select-row" data-datatable-row-selecting-individual="" />
                  <label for="table-filter-20" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Canon EOS R8</td>
              <td>$1,699</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-filter-21" type="checkbox" class="checkbox checkbox-sm datatable-filter-select-row" data-datatable-row-selecting-individual="" />
                  <label for="table-filter-21" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>DJI Mavic 3 Pro</td>
              <td>$2,199</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-filter-22" type="checkbox" class="checkbox checkbox-sm datatable-filter-select-row" data-datatable-row-selecting-individual="" />
                  <label for="table-filter-22" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Alienware Aurora R15</td>
              <td>$2,899</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-filter-23" type="checkbox" class="checkbox checkbox-sm datatable-filter-select-row" data-datatable-row-selecting-individual="" />
                  <label for="table-filter-23" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>SteelSeries Arctis Nova Pro</td>
              <td>$349</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div class="border-base-content/25 flex items-center justify-between gap-3 border-t p-3 max-md:flex-wrap max-md:justify-center">
    <div class="text-base-content/80 text-sm" data-datatable-info="">
      Showing
      <span data-datatable-info-from="1"></span>
      to
      <span data-datatable-info-to="30"></span>
      of
      <span data-datatable-info-length="50"></span>
      products
    </div>
    <div class="flex hidden items-center space-x-1" data-datatable-paging="">
      <button type="button" class="btn btn-text btn-circle btn-sm" data-datatable-paging-prev="">
        <span class="icon-[componentx--chevrons-left] size-4.5 rtl:rotate-180"></span>
        <span class="sr-only">Previous</span>
      </button>
      <div class="[&>.active]:text-bg-soft-primary flex items-center space-x-1" data-datatable-paging-pages=""></div>
      <button type="button" class="btn btn-text btn-circle btn-sm" data-datatable-paging-next="">
        <span class="sr-only">Next</span>
        <span class="icon-[componentx--chevrons-right] size-4.5 rtl:rotate-180"></span>
      </button>
    </div>
  </div>
</div>
```

```js

<script>
  window.addEventListener('load', () => {
    const available = document.querySelector('#select-stock')
    console.log('available', available)
    const { dataTable } = new HSDataTable('#datatable-filter')

    dataTable.search.fixed('stock', (searchStr, data, index) => {
      const isAvaiable = available.value === 'all' ? '' : available.value
      const parser = new DOMParser()
      const name = parser.parseFromString(data[3], 'text/html').body.textContent.trim()

      return isAvaiable === name || isAvaiable === ''
    })
    available.addEventListener('change', () => dataTable.draw())
  })
</script>


```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div
  id="datatable-column-filter"
  class="bg-base-100 --prevent-on-load-init flex flex-col rounded-md shadow-base-300/20 shadow-sm"
  data-datatable='{
  "pageLength": 5,
  "pagingOptions": {
    "pageBtnClasses": "btn btn-text btn-circle btn-sm"
  },
  "selecting": true,
  "ordering": false,
  "rowSelectingOptions": {
    "selectAllSelector": "#column-filter-select-all-rows",
    "individualSelector": ".column-filter-select-row"
  },
  "language": {
      "zeroRecords": "<div class=\"py-10 px-5 flex flex-col justify-center items-center text-center\"><span class=\"icon-[componentx--search] shrink-0 size-6 text-base-content\"></span><div class=\"max-w-sm mx-auto\"><p class=\"mt-2 text-sm text-base-content/80\">No search results</p></div></div>"
    }
}'
>
  <div class="border-base-content/25 flex items-center border-b px-5 py-3 gap-3">
    <div class="input input-sm max-w-60">
      <span class="icon-[componentx--search] text-base-content/80 my-auto me-3 size-4 shrink-0"></span>
      <label class="sr-only" for="column-filter-search"></label>
      <input type="search" class="grow" placeholder="Search for items" id="column-filter-search" data-datatable-search="" />
    </div>
    <div class="flex flex-1 items-center justify-end gap-3">
      <!-- Select -->
      <select
        data-select='{
          "placeholder": "Select option...",
          "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
          "toggleClasses": "advance-select-toggle advance-select-sm",
          "dropdownClasses": "advance-select-menu w-24 max-sm:w-16",
          "optionClasses": "advance-select-option selected:select-active",
          "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"icon-[componentx--check] shrink-0 size-3 text-primary hidden selected:block \"></span></div>",
          "extraMarkup": "<span class=\"icon-[componentx--caret-up-down] shrink-0 size-4 text-base-content absolute top-1/2 end-2 -translate-y-1/2 \"></span>"
          }'
        class="hidden"
        data-datatable-page-entities=""
      >
        <option value="5" selected="">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
      </select>
      <!-- End Select -->
    </div>
  </div>
  <div class="overflow-x-auto">
    <div class="inline-block min-w-full align-middle">
      <div class="overflow-hidden">
        <table class="table min-w-full">
          <thead>
            <tr>
              <th scope="col" class="--exclude-from-ordering w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="column-filter-select-all-rows" type="checkbox" class="checkbox checkbox-sm" />
                  <label for="column-filter-select-all-rows" class="sr-only">Checkbox</label>
                </div>
              </th>
              <th scope="col" class="group w-fit">
                <div class="flex items-center gap-2">
                  Product Name
                  <div class="dropdown relative inline-flex [--auto-close:inside]">
                    <button id="column-product-filter" type="button" class="dropdown-toggle" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" >
                      <span class="icon-[componentx--filter] size-3.5 text-base-content/50 -mb-0.5"></span>
                    </button>
                    <ul class="dropdown-menu dropdown-open:opacity-100 hidden w-auto" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-default" >
                      <li class="dropdown-item item-name">All</li>
                      <li class="dropdown-item item-name">Apple</li>
                      <li class="dropdown-item item-name">Samsung</li>
                      <li class="dropdown-item item-name">Sony</li>
                      <li class="dropdown-item item-name">Dell</li>
                    </ul>
                  </div>
                </div>
              </th>
              <th scope="col" class="group w-fit">
                <div class="flex items-center gap-2">
                  Price
                  <div class="dropdown relative inline-flex [--auto-close:inside]">
                    <button type="button" class="dropdown-toggle" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" >
                      <span class="icon-[componentx--filter] size-3.5 text-base-content/50 -mb-0.5"></span>
                    </button>
                    <ul class="dropdown-menu dropdown-open:opacity-100 hidden w-auto" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-default" >
                      <div class="flex max-w-sm gap-x-2">
                        <input id="input-min-price" type="number" class="input input-sm w-24 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" placeholder="Min price" style="-moz-appearance: textfield;"/>
                        <input id="input-max-price" type="number" class="input input-sm w-24 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" placeholder="Max price" style="-moz-appearance: textfield;" />
                      </div>
                    </ul>
                  </div>
                </div>
              </th>
              <th scope="col" class="group w-fit">
                <div class="flex items-center gap-2">
                  Availability
                  <div class="dropdown relative inline-flex [--auto-close:inside]">
                    <button id="column-price-filter" type="button" class="dropdown-toggle" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" >
                      <span class="icon-[componentx--filter] size-3.5 text-base-content/50 -mb-0.5"></span>
                    </button>
                    <ul class="dropdown-menu dropdown-open:opacity-100 hidden w-auto" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-default" >
                      <li class="dropdown-item column-stocks">All</li>
                      <li class="dropdown-item column-stocks">In Stock</li>
                      <li class="dropdown-item column-stocks">Out of Stock</li>
                      <li class="dropdown-item column-stocks">Limited</li>
                    </ul>
                  </div>
                </div>
              </th>
              <th scope="col" class="--exclude-from-ordering">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="column-filter-1" type="checkbox" class="checkbox checkbox-sm column-filter-select-row" data-datatable-row-selecting-individual="" />
                  <label for="column-filter-1" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Apple iPhone 15</td>
              <td>$999</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="column-filter-2" type="checkbox" class="checkbox checkbox-sm column-filter-select-row" data-datatable-row-selecting-individual="" />
                  <label for="column-filter-2" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Samsung Galaxy S23</td>
              <td>$899</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="column-filter-3" type="checkbox" class="checkbox checkbox-sm column-filter-select-row" data-datatable-row-selecting-individual="" />
                  <label for="column-filter-3" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Sony WH-1000XM5</td>
              <td>$399</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="column-filter-4" type="checkbox" class="checkbox checkbox-sm column-filter-select-row" data-datatable-row-selecting-individual="" />
                  <label for="column-filter-4" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Dell XPS 15</td>
              <td>$1,299</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="column-filter-5" type="checkbox" class="checkbox checkbox-sm column-filter-select-row" data-datatable-row-selecting-individual="" />
                  <label for="column-filter-5" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Logitech MX Master 3</td>
              <td>$99</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="column-filter-6" type="checkbox" class="checkbox checkbox-sm column-filter-select-row" data-datatable-row-selecting-individual="" />
                  <label for="column-filter-6" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Microsoft Surface Laptop 5</td>
              <td>$1,499</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="column-filter-7" type="checkbox" class="checkbox checkbox-sm column-filter-select-row" data-datatable-row-selecting-individual="" />
                  <label for="column-filter-7" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>HP Spectre x360</td>
              <td>$1,199</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="column-filter-8" type="checkbox" class="checkbox checkbox-sm column-filter-select-row" data-datatable-row-selecting-individual="" />
                  <label for="column-filter-8" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Apple Watch Series 9</td>
              <td>$499</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="column-filter-9" type="checkbox" class="checkbox checkbox-sm column-filter-select-row" data-datatable-row-selecting-individual="" />
                  <label for="column-filter-9" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Google Pixel 7</td>
              <td>$599</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="column-filter-10" type="checkbox" class="checkbox checkbox-sm column-filter-select-row" data-datatable-row-selecting-individual="" />
                  <label for="column-filter-10" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Bose QuietComfort Earbuds II</td>
              <td>$279</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="column-filter-11" type="checkbox" class="checkbox checkbox-sm column-filter-select-row" data-datatable-row-selecting-individual="" />
                  <label for="column-filter-11" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Asus ROG Zephyrus G14</td>
              <td>$1,899</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="column-filter-12" type="checkbox" class="checkbox checkbox-sm column-filter-select-row" data-datatable-row-selecting-individual="" />
                  <label for="column-filter-12" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Sony PlayStation 5</td>
              <td>$499</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="column-filter-13" type="checkbox" class="checkbox checkbox-sm column-filter-select-row" data-datatable-row-selecting-individual="" />
                  <label for="column-filter-13" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Amazon Echo Dot (5th Gen)</td>
              <td>$49</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="column-filter-14" type="checkbox" class="checkbox checkbox-sm column-filter-select-row" data-datatable-row-selecting-individual="" />
                  <label for="column-filter-14" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>NVIDIA GeForce RTX 4090</td>
              <td>$1,599</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="column-filter-15" type="checkbox" class="checkbox checkbox-sm column-filter-select-row" data-datatable-row-selecting-individual="" />
                  <label for="column-filter-15" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Lenovo ThinkPad X1 Carbon</td>
              <td>$1,799</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="column-filter-16" type="checkbox" class="checkbox checkbox-sm column-filter-select-row" data-datatable-row-selecting-individual="" />
                  <label for="column-filter-16" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Google Nest Hub (2nd Gen)</td>
              <td>$99</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="column-filter-17" type="checkbox" class="checkbox checkbox-sm column-filter-select-row" data-datatable-row-selecting-individual="" />
                  <label for="column-filter-17" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Fitbit Charge 6</td>
              <td>$149</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="column-filter-18" type="checkbox" class="checkbox checkbox-sm column-filter-select-row" data-datatable-row-selecting-individual="" />
                  <label for="column-filter-18" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Razer Blade 16</td>
              <td>$2,499</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="column-filter-19" type="checkbox" class="checkbox checkbox-sm column-filter-select-row" data-datatable-row-selecting-individual="" />
                  <label for="column-filter-19" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Oculus Quest 3</td>
              <td>$499</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="column-filter-20" type="checkbox" class="checkbox checkbox-sm column-filter-select-row" data-datatable-row-selecting-individual="" />
                  <label for="column-filter-20" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Canon EOS R8</td>
              <td>$1,699</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="column-filter-21" type="checkbox" class="checkbox checkbox-sm column-filter-select-row" data-datatable-row-selecting-individual="" />
                  <label for="column-filter-21" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>DJI Mavic 3 Pro</td>
              <td>$2,199</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="column-filter-22" type="checkbox" class="checkbox checkbox-sm column-filter-select-row" data-datatable-row-selecting-individual="" />
                  <label for="column-filter-22" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Alienware Aurora R15</td>
              <td>$2,899</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="column-filter-23" type="checkbox" class="checkbox checkbox-sm column-filter-select-row" data-datatable-row-selecting-individual="" />
                  <label for="column-filter-23" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>SteelSeries Arctis Nova Pro</td>
              <td>$349</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div class="border-base-content/25 flex items-center justify-between gap-3 border-t p-3 max-md:flex-wrap max-md:justify-center">
    <div class="text-base-content/80 text-sm" data-datatable-info="">
      Showing
      <span data-datatable-info-from="1"></span>
      to
      <span data-datatable-info-to="30"></span>
      of
      <span data-datatable-info-length="50"></span>
      products
    </div>
    <div class="flex hidden items-center space-x-1" data-datatable-paging="">
      <button type="button" class="btn btn-text btn-circle btn-sm" data-datatable-paging-prev="">
        <span class="icon-[componentx--chevrons-left] size-4.5 rtl:rotate-180"></span>
        <span class="sr-only">Previous</span>
      </button>
      <div class="[&>.active]:text-bg-soft-primary flex items-center space-x-1" data-datatable-paging-pages=""></div>
      <button type="button" class="btn btn-text btn-circle btn-sm" data-datatable-paging-next="">
        <span class="sr-only">Next</span>
        <span class="icon-[componentx--chevrons-right] size-4.5 rtl:rotate-180"></span>
      </button>
    </div>
  </div>
</div>
```

```js

<script>
  // Column filter
  window.addEventListener('load', () => {
    const productFilter = document.querySelectorAll('.item-name')
    const stockFilter = document.querySelectorAll('.column-stocks')
    const minPriceFilter = document.querySelector('#input-min-price')
    const maxPriceFilter = document.querySelector('#input-max-price')
    const { dataTable } = new HSDataTable('#datatable-column-filter')

    // Product filter event listeners
    productFilter.forEach(element => {
      element.addEventListener('click', () => {
        productFilter.forEach(el => el.classList.remove('active'))
        element.classList.add('active')
        dataTable.draw()
      })
    })

    // Stock filter event listeners
    stockFilter.forEach(element => {
      element.addEventListener('click', () => {
        stockFilter.forEach(el => el.classList.remove('active'))
        element.classList.add('active')
        dataTable.draw()
      })
    })

    // Price filter event listeners
    minPriceFilter?.addEventListener('input', () => dataTable.draw())
    maxPriceFilter?.addEventListener('input', () => dataTable.draw())

    dataTable.search.fixed('stock', (searchStr, data, index) => {
      // Get active filters
      const activeProductFilter = document.querySelector('.item-name.active')
      const activeStocksFilter = document.querySelector('.column-stocks.active')
      const minPrice = parseFloat(minPriceFilter?.value || '0')
      const maxPrice = parseFloat(maxPriceFilter?.value || '999999')

      // Get selected statuses
      const selectedProductStatus = activeProductFilter?.textContent.trim().toLowerCase() || ''
      const selectedStocksStatus = activeStocksFilter?.textContent.trim().toLowerCase() || ''

      // Parse HTML content
      const parser = new DOMParser()
      const productParser = parser.parseFromString(data[1], 'text/html').body.textContent.trim().toLowerCase()
      const stockParser = parser.parseFromString(data[3], 'text/html').body.textContent.trim().toLowerCase()

      // Parse price (assuming price is in data[2] and format is "$XX.XX")
      const priceString = parser.parseFromString(data[2], 'text/html').body.textContent.trim()
      const price = parseFloat(priceString.replace(/[^0-9.-]+/g, ''))

      // Match conditions
      const product = selectedProductStatus === 'all' || productParser.includes(selectedProductStatus)
      const stock = selectedStocksStatus === 'all' || stockParser.includes(selectedStocksStatus)
      const priceInRange = price >= minPrice && price <= maxPrice

      // If all filters are default, show everything
      if (selectedProductStatus === 'all' && selectedStocksStatus === 'all' && minPrice === 0 && maxPrice === 999999) {
        return true
      }

      // Apply all filters
      return product && stock && priceInRange
    })
  })
</script>

```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div
  id="datatable-with-hidden-columns"
  class="bg-base-100 --prevent-on-load-init flex flex-col rounded-md shadow-base-300/20 shadow-sm"
  data-datatable='{
  "pageLength": 5,
  "pagingOptions": {
    "pageBtnClasses": "btn btn-text btn-circle btn-sm"
  },
  "selecting": true,
  "rowSelectingOptions": {
    "selectAllSelector": "#hidden-select-all-rows"
  },
  "language": {
      "zeroRecords": "<div class=\"py-10 px-5 flex flex-col justify-center items-center text-center\"><span class=\"icon-[componentx--search] shrink-0 size-6 text-base-content\"></span><div class=\"max-w-sm mx-auto\"><p class=\"mt-2 text-sm text-base-content/80\">No search results</p></div></div>"
    }
}'
>
  <div class="border-base-content/25 flex items-center border-b px-5 py-3 gap-3">
    <div class="input input-sm max-w-60">
      <span class="icon-[componentx--search] text-base-content/80 my-auto me-3 size-4 shrink-0"></span>
      <label class="sr-only" for="hidden-column-search"></label>
      <input type="search" class="grow" placeholder="Search for items" id="hidden-column-search" data-datatable-search="" />
    </div>
    <div class="flex flex-1 items-center justify-end gap-3">
      <!-- Select -->
      <select
        data-select='{
          "placeholder": "Select option...",
          "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
          "toggleClasses": "advance-select-toggle advance-select-sm",
          "dropdownClasses": "advance-select-menu w-24 max-sm:w-16",
          "optionClasses": "advance-select-option selected:select-active",
          "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"icon-[componentx--check] shrink-0 size-3 text-primary hidden selected:block \"></span></div>",
          "extraMarkup": "<span class=\"icon-[componentx--caret-up-down] shrink-0 size-4 text-base-content absolute top-1/2 end-2 -translate-y-1/2 \"></span>"
          }'
        class="hidden"
        data-datatable-page-entities=""
      >
        <option value="5" selected="">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
      </select>
      <!-- End Select -->
      <select
        multiple=""
        data-select='{
          "placeholder": "Hide Columns",
          "toggleCountText": "selected",
          "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
          "toggleClasses": "advance-select-toggle advance-select-sm max-sm:w-20 w-36",
          "dropdownClasses": "advance-select-menu max-sm:w-28 w-full",
          "optionClasses": "advance-select-option selected:select-active",
          "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"icon-[componentx--check] shrink-0 size-3 text-primary hidden selected:block \"></span></div>",
          "extraMarkup": "<span class=\"icon-[componentx--caret-up-down] shrink-0 size-4 text-base-content absolute top-1/2 end-2 -translate-y-1/2 \"></span>"
          }'
        class="hidden"
        id="datatable-with-hidden-columns-select"
      >
        <option value="">Choose</option>
        <option value="1">Product Name</option>
        <option value="2">Price</option>
        <option value="3">Availability</option>
        <option value="4">Actions</option>
      </select>
    </div>
  </div>
  <div class="overflow-x-auto">
    <div class="inline-block min-w-full align-middle">
      <div class="overflow-hidden">
        <table class="table min-w-full">
          <thead>
            <tr>
              <th scope="col" class="--exclude-from-ordering w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="hidden-select-all-rows" type="checkbox" class="checkbox checkbox-sm" />
                  <label for="hidden-select-all-rows" class="sr-only">Checkbox</label>
                </div>
              </th>
              <th scope="col" class="group w-fit">
                <div class="flex items-center justify-between">
                  Product Name
                  <span class="icon-[componentx--chevron-up] datatable-ordering-asc:block hidden"></span>
                  <span class="icon-[componentx--chevron-down] datatable-ordering-desc:block hidden"></span>
                </div>
              </th>
              <th scope="col" class="group w-fit">
                <div class="flex items-center justify-between">
                  Price
                  <span class="icon-[componentx--chevron-up] datatable-ordering-asc:block hidden"></span>
                  <span class="icon-[componentx--chevron-down] datatable-ordering-desc:block hidden"></span>
                </div>
              </th>
              <th scope="col" class="group w-fit">
                <div class="flex items-center justify-between">
                  Availability
                  <span class="icon-[componentx--chevron-up] datatable-ordering-asc:block hidden"></span>
                  <span class="icon-[componentx--chevron-down] datatable-ordering-desc:block hidden"></span>
                </div>
              </th>
              <th scope="col" class="--exclude-from-ordering">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="datatable-with-hidden-columns-1" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="datatable-with-hidden-columns-1" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Apple iPhone 15</td>
              <td>$999</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="datatable-with-hidden-columns-2" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="datatable-with-hidden-columns-2" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Samsung Galaxy S23</td>
              <td>$899</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="datatable-with-hidden-columns-3" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="datatable-with-hidden-columns-3" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Sony WH-1000XM5</td>
              <td>$399</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="datatable-with-hidden-columns-4" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="datatable-with-hidden-columns-4" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Dell XPS 15</td>
              <td>$1,299</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="datatable-with-hidden-columns-5" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="datatable-with-hidden-columns-5" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Logitech MX Master 3</td>
              <td>$99</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="datatable-with-hidden-columns-6" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="datatable-with-hidden-columns-6" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Microsoft Surface Laptop 5</td>
              <td>$1,499</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="datatable-with-hidden-columns-7" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="datatable-with-hidden-columns-7" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>HP Spectre x360</td>
              <td>$1,199</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="datatable-with-hidden-columns-8" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="datatable-with-hidden-columns-8" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Apple Watch Series 9</td>
              <td>$499</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="datatable-with-hidden-columns-9" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="datatable-with-hidden-columns-9" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Google Pixel 7</td>
              <td>$599</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="datatable-with-hidden-columns-10" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="datatable-with-hidden-columns-10" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Bose QuietComfort Earbuds II</td>
              <td>$279</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="datatable-with-hidden-columns-11" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="datatable-with-hidden-columns-11" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Asus ROG Zephyrus G14</td>
              <td>$1,899</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="datatable-with-hidden-columns-12" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="datatable-with-hidden-columns-12" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Sony PlayStation 5</td>
              <td>$499</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="datatable-with-hidden-columns-13" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="datatable-with-hidden-columns-13" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Amazon Echo Dot (5th Gen)</td>
              <td>$49</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="datatable-with-hidden-columns-14" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="datatable-with-hidden-columns-14" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>NVIDIA GeForce RTX 4090</td>
              <td>$1,599</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="datatable-with-hidden-columns-15" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="datatable-with-hidden-columns-15" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Lenovo ThinkPad X1 Carbon</td>
              <td>$1,799</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="datatable-with-hidden-columns-16" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="datatable-with-hidden-columns-16" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Google Nest Hub (2nd Gen)</td>
              <td>$99</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="datatable-with-hidden-columns-17" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="datatable-with-hidden-columns-17" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Fitbit Charge 6</td>
              <td>$149</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="datatable-with-hidden-columns-18" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="datatable-with-hidden-columns-18" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Razer Blade 16</td>
              <td>$2,499</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="datatable-with-hidden-columns-19" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="datatable-with-hidden-columns-19" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Oculus Quest 3</td>
              <td>$499</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="datatable-with-hidden-columns-20" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="datatable-with-hidden-columns-20" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Canon EOS R8</td>
              <td>$1,699</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="datatable-with-hidden-columns-21" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="datatable-with-hidden-columns-21" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>DJI Mavic 3 Pro</td>
              <td>$2,199</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="datatable-with-hidden-columns-22" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="datatable-with-hidden-columns-22" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Alienware Aurora R15</td>
              <td>$2,899</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="datatable-with-hidden-columns-23" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="datatable-with-hidden-columns-23" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>SteelSeries Arctis Nova Pro</td>
              <td>$349</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div class="border-base-content/25 flex items-center justify-between gap-3 border-t p-3 max-md:flex-wrap max-md:justify-center">
    <div class="text-base-content/80 text-sm" data-datatable-info="">
      Showing
      <span data-datatable-info-from="1"></span>
      to
      <span data-datatable-info-to="30"></span>
      of
      <span data-datatable-info-length="50"></span>
      products
    </div>
    <div class="flex hidden items-center space-x-1" data-datatable-paging="">
      <button type="button" class="btn btn-text btn-circle btn-sm" data-datatable-paging-prev="">
        <span class="icon-[componentx--chevrons-left] size-4.5 rtl:rotate-180"></span>
        <span class="sr-only">Previous</span>
      </button>
      <div class="[&>.active]:text-bg-soft-primary flex items-center space-x-1" data-datatable-paging-pages=""></div>
      <button type="button" class="btn btn-text btn-circle btn-sm" data-datatable-paging-next="">
        <span class="sr-only">Next</span>
        <span class="icon-[componentx--chevrons-right] size-4.5 rtl:rotate-180"></span>
      </button>
    </div>
  </div>
</div>
```

```js

<script>
  window.addEventListener('load', () => {
    const { dataTable } = new HSDataTable('#datatable-with-hidden-columns')
    const select = HSSelect.getInstance('#datatable-with-hidden-columns-select', true)

    select.element.on('change', indices => {
      dataTable.columns().every(function (index) {
        const column = this

        if (indices.includes(index.toString())) column.visible(false)
        else column.visible(true)
      })
    })
  })
</script>


```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div
  id="multiple-controls"
  class="bg-base-100 flex flex-col rounded-md w-full shadow-base-300/20 shadow-sm"
  data-datatable='{
  "pageLength": 5,
  "pagingOptions": {
    "pageBtnClasses": "btn btn-text btn-circle btn-sm"
  },
  "colReorder": true,
  "selecting": true,
  "rowSelectingOptions": {
    "selectAllSelector": "#multiple-controls-select-all-rows"
  },
  "language": {
      "zeroRecords": "<div class=\"py-10 px-5 flex flex-col justify-center items-center text-center\"><span class=\"icon-[componentx--search] shrink-0 size-6 text-base-content\"></span><div class=\"max-w-sm mx-auto\"><p class=\"mt-2 text-sm text-base-content/80\">No search results</p></div></div>"
    }
}'
>

  <div class="flex items-center px-5 py-3 gap-3">
    <div class="input input-sm max-w-60">
      <span class="icon-[componentx--search] text-base-content/80 my-auto me-3 size-4 shrink-0"></span>
      <label class="sr-only" for="table-multiple-controls-search"></label>
      <input type="search" class="grow" placeholder="Search for items" id="table-multiple-controls-search" data-datatable-search="" />
    </div>
    <div class="flex flex-1 items-center justify-end gap-3">
      <!-- Select -->
      <select
        data-select='{
            "placeholder": "Select option...",
            "toggleTag": "<button type=\"button\" aria-expanded=\"false\"><span data-title></span></button>",
            "toggleClasses": "advance-select-toggle advance-select-sm",
            "dropdownClasses": "advance-select-menu w-24 max-sm:w-16",
            "optionClasses": "advance-select-option selected:select-active",
            "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"icon-[componentx--check] shrink-0 size-3 text-primary hidden selected:block \"></span></div>",
            "extraMarkup": "<span class=\"icon-[componentx--caret-up-down] shrink-0 size-4 text-base-content absolute top-1/2 end-2 -translate-y-1/2 \"></span>"
            }'
        class="hidden"
        data-datatable-page-entities=""
      >
        <option value="5" selected="">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
      </select>
      <!-- End Select -->
    </div>
  </div>
  <div class="border-base-content/25 flex items-center justify-between gap-3 border-b px-5 py-3 max-md:flex-wrap max-md:justify-center">
    <div class="text-base-content/80 text-sm" data-datatable-info="">
      Showing
      <span data-datatable-info-from="1"></span>
      to
      <span data-datatable-info-to="30"></span>
      of
      <span data-datatable-info-length="50"></span>
      products
    </div>
    <div class="flex items-center space-x-1" data-datatable-paging="">
      <button type="button" class="btn btn-text btn-circle btn-sm" data-datatable-paging-prev="">
        <span class="icon-[componentx--chevrons-left] size-4.5 rtl:rotate-180"></span>
        <span class="sr-only">Previous</span>
      </button>
      <div class="[&>.active]:text-bg-soft-primary flex items-center space-x-1" data-datatable-paging-pages=""></div>
      <button type="button" class="btn btn-text btn-circle btn-sm" data-datatable-paging-next="">
        <span class="sr-only">Next</span>
        <span class="icon-[componentx--chevrons-right] size-4.5 rtl:rotate-180"></span>
      </button>
    </div>
  </div>
  <div class="overflow-x-auto">
    <div class="inline-block min-w-full align-middle">
      <div class="overflow-hidden">
        <table class="table min-w-full">
          <thead>
            <tr>
              <th data-datatable-col-index="0"scope="col" class="--exclude-from-ordering w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="multiple-controls-select-all-rows" type="checkbox" class="checkbox checkbox-sm" />
                  <label for="multiple-controls-select-all-rows" class="sr-only">Checkbox</label>
                </div>
              </th>
              <th data-datatable-col-index="1" scope="col" class="group w-fit">
                <div class="flex items-center gap-2">
                  Product Name
                </div>
              </th>
              <th data-datatable-col-index="2" scope="col" class="group w-fit">
                <div class="flex items-center gap-2">
                  Price
                </div>
              </th>
              <th data-datatable-col-index="3" scope="col" class="group w-fit">
                <div class="flex items-center gap-2">
                  Availability
                </div>
              </th>
              <th data-datatable-col-index="-1" scope="col" class="--exclude-from-ordering">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-multiple-controls-checkbox-1" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-multiple-controls-checkbox-1" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Apple iPhone 15</td>
              <td>$999</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-multiple-controls-checkbox-2" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-multiple-controls-checkbox-2" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Samsung Galaxy S23</td>
              <td>$899</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-multiple-controls-checkbox-3" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-multiple-controls-checkbox-3" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Sony WH-1000XM5</td>
              <td>$399</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-multiple-controls-checkbox-4" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-multiple-controls-checkbox-4" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Dell XPS 15</td>
              <td>$1,299</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-multiple-controls-checkbox-5" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-multiple-controls-checkbox-5" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Logitech MX Master 3</td>
              <td>$99</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-multiple-controls-checkbox-6" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-multiple-controls-checkbox-6" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Microsoft Surface Laptop 5</td>
              <td>$1,499</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-multiple-controls-checkbox-7" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-multiple-controls-checkbox-7" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>HP Spectre x360</td>
              <td>$1,199</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-multiple-controls-checkbox-8" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-multiple-controls-checkbox-8" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Apple Watch Series 9</td>
              <td>$499</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-multiple-controls-checkbox-9" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-multiple-controls-checkbox-9" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Google Pixel 7</td>
              <td>$599</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-multiple-controls-checkbox-10" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-multiple-controls-checkbox-10" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Bose QuietComfort Earbuds II</td>
              <td>$279</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-multiple-controls-checkbox-11" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-multiple-controls-checkbox-11" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Asus ROG Zephyrus G14</td>
              <td>$1,899</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-multiple-controls-checkbox-12" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-multiple-controls-checkbox-12" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Sony PlayStation 5</td>
              <td>$499</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-multiple-controls-checkbox-13" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-multiple-controls-checkbox-13" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Amazon Echo Dot (5th Gen)</td>
              <td>$49</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-multiple-controls-checkbox-14" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-multiple-controls-checkbox-14" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>NVIDIA GeForce RTX 4090</td>
              <td>$1,599</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-multiple-controls-checkbox-15" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-multiple-controls-checkbox-15" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Lenovo ThinkPad X1 Carbon</td>
              <td>$1,799</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-multiple-controls-checkbox-16" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-multiple-controls-checkbox-16" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Google Nest Hub (2nd Gen)</td>
              <td>$99</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-multiple-controls-checkbox-17" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-multiple-controls-checkbox-17" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Fitbit Charge 6</td>
              <td>$149</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-multiple-controls-checkbox-18" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-multiple-controls-checkbox-18" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Razer Blade 16</td>
              <td>$2,499</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-multiple-controls-checkbox-19" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-multiple-controls-checkbox-19" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Oculus Quest 3</td>
              <td>$499</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-multiple-controls-checkbox-20" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-multiple-controls-checkbox-20" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Canon EOS R8</td>
              <td>$1,699</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-multiple-controls-checkbox-21" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-multiple-controls-checkbox-21" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>DJI Mavic 3 Pro</td>
              <td>$2,199</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-multiple-controls-checkbox-22" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-multiple-controls-checkbox-22" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Alienware Aurora R15</td>
              <td>$2,899</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-multiple-controls-checkbox-23" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-multiple-controls-checkbox-23" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>SteelSeries Arctis Nova Pro</td>
              <td>$349</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div class="border-base-content/25 flex items-center border-t px-5 py-3 gap-3">
    <div class="input input-sm max-w-60">
      <span class="icon-[componentx--search] text-base-content/80 my-auto me-3 size-4 shrink-0"></span>
      <label class="sr-only" for="table-multiple-controls-search-2"></label>
      <input type="search" class="grow" placeholder="Search for items" id="table-multiple-controls-search-2" data-datatable-search="" />
    </div>
    <div class="flex flex-1 items-center justify-end gap-3">
      <!-- Select -->
      <select
        data-select='{
            "placeholder": "Select option...",
            "toggleTag": "<button type=\"button\" aria-expanded=\"false\"><span data-title></span></button>",
            "toggleClasses": "advance-select-toggle advance-select-sm",
            "dropdownClasses": "advance-select-menu w-24 max-sm:w-16",
            "optionClasses": "advance-select-option selected:select-active",
            "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"icon-[componentx--check] shrink-0 size-3 text-primary hidden selected:block \"></span></div>",
            "extraMarkup": "<span class=\"icon-[componentx--caret-up-down] shrink-0 size-4 text-base-content absolute top-1/2 end-2 -translate-y-1/2 \"></span>"
            }'
        class="hidden"
        data-datatable-page-entities=""
      >
        <option value="5" selected="">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
      </select>
      <!-- End Select -->
    </div>
  </div>

  <div class="flex items-center justify-between px-5 py-3 gap-3 max-md:flex-wrap max-md:justify-center">
    <div class="text-base-content/80 text-sm" data-datatable-info="">
      Showing
      <span data-datatable-info-from="1"></span>
      to
      <span data-datatable-info-to="30"></span>
      of
      <span data-datatable-info-length="50"></span>
      products
    </div>
    <div class="flex hidden items-center space-x-1" data-datatable-paging="">
      <button type="button" class="btn btn-text btn-circle btn-sm" data-datatable-paging-prev="">
        <span class="icon-[componentx--chevrons-left] size-4.5 rtl:rotate-180"></span>
        <span class="sr-only">Previous</span>
      </button>
      <div class="[&>.active]:text-bg-soft-primary flex items-center space-x-1" data-datatable-paging-pages=""></div>
      <button type="button" class="btn btn-text btn-circle btn-sm" data-datatable-paging-next="">
        <span class="sr-only">Next</span>
        <span class="icon-[componentx--chevrons-right] size-4.5 rtl:rotate-180"></span>
      </button>
    </div>
  </div>
</div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div
  id="datatable-fixed-header"
  class="bg-base-100 --prevent-on-load-init flex flex-col rounded-md shadow-base-300/20 shadow-sm"
  data-datatable='{
  "pageLength": 5,
  "pagingOptions": {
    "pageBtnClasses": "btn btn-text btn-circle btn-sm"
  }
}'
>
  <div class="overflow-x-auto">
    <div class="inline-block min-w-full align-middle">
      <div class="overflow-hidden">
        <table class="table min-w-full">
          <thead class="bg-base-100">
            <tr>
              <th scope="col" class="group w-fit">
                <div class="flex items-center justify-between">
                  Product Name
                  <span class="icon-[componentx--chevron-up] datatable-ordering-asc:block hidden"></span>
                  <span class="icon-[componentx--chevron-down] datatable-ordering-desc:block hidden"></span>
                </div>
              </th>
              <th scope="col" class="group w-fit">
                <div class="flex items-center justify-between">
                  Price
                  <span class="icon-[componentx--chevron-up] datatable-ordering-asc:block hidden"></span>
                  <span class="icon-[componentx--chevron-down] datatable-ordering-desc:block hidden"></span>
                </div>
              </th>
              <th scope="col" class="group w-fit">
                <div class="flex items-center justify-between">
                  Availability
                  <span class="icon-[componentx--chevron-up] datatable-ordering-asc:block hidden"></span>
                  <span class="icon-[componentx--chevron-down] datatable-ordering-desc:block hidden"></span>
                </div>
              </th>
              <th scope="col" class="--exclude-from-ordering">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Apple iPhone 15</td>
              <td>$999</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Samsung Galaxy S23</td>
              <td>$899</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Sony WH-1000XM5</td>
              <td>$399</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Dell XPS 15</td>
              <td>$1,299</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Logitech MX Master 3</td>
              <td>$99</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Microsoft Surface Laptop 5</td>
              <td>$1,499</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>HP Spectre x360</td>
              <td>$1,199</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Apple Watch Series 9</td>
              <td>$499</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Google Pixel 7</td>
              <td>$599</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Bose QuietComfort Earbuds II</td>
              <td>$279</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Asus ROG Zephyrus G14</td>
              <td>$1,899</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Sony PlayStation 5</td>
              <td>$499</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Amazon Echo Dot (5th Gen)</td>
              <td>$49</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>NVIDIA GeForce RTX 4090</td>
              <td>$1,599</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Lenovo ThinkPad X1 Carbon</td>
              <td>$1,799</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Google Nest Hub (2nd Gen)</td>
              <td>$99</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Fitbit Charge 6</td>
              <td>$149</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Razer Blade 16</td>
              <td>$2,499</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Oculus Quest 3</td>
              <td>$499</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Canon EOS R8</td>
              <td>$1,699</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>DJI Mavic 3 Pro</td>
              <td>$2,199</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Alienware Aurora R15</td>
              <td>$2,899</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>SteelSeries Arctis Nova Pro</td>
              <td>$349</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div class="border-base-content/25 flex items-center justify-between gap-3 border-t p-3 max-md:flex-wrap max-md:justify-center">
    <div class="text-base-content/80 text-sm" data-datatable-info="">
      Showing
      <span data-datatable-info-from="1"></span>
      to
      <span data-datatable-info-to="30"></span>
      of
      <span data-datatable-info-length="50"></span>
      products
    </div>
    <div class="flex hidden items-center space-x-1" data-datatable-paging="">
      <button type="button" class="btn btn-text btn-circle btn-sm" data-datatable-paging-prev="">
        <span class="icon-[componentx--chevrons-left] size-4.5 rtl:rotate-180"></span>
        <span class="sr-only">Previous</span>
      </button>
      <div class="[&>.active]:text-bg-soft-primary flex items-center space-x-1" data-datatable-paging-pages=""></div>
      <button type="button" class="btn btn-text btn-circle btn-sm" data-datatable-paging-next="">
        <span class="sr-only">Next</span>
        <span class="icon-[componentx--chevrons-right] size-4.5 rtl:rotate-180"></span>
      </button>
    </div>
  </div>
</div>
```

```js

<script>
  // Fixed header
  window.addEventListener('load', () => {
    function getHeaderOffset() {
      if (window.innerWidth <= 769) return 100
      else if (window.innerWidth <= 1024) return 112
      else return 71
    }

    function updateHeaderOffset(table) {
      const headerOffset = getHeaderOffset()
      const fixedHeader = table.dataTable.fixedHeader

      fixedHeader.headerOffset(headerOffset)
      fixedHeader.adjust()
    }

    function adjustFixedHeaderParentWidth() {
      const tableContainerWidth = document.querySelector('#datatable-fixed-header .overflow-x-auto').clientWidth
      const fixedHeaderParent = document.querySelector('.dtfh-floatingparent')

      if (fixedHeaderParent) fixedHeaderParent.style.width = `${tableContainerWidth}px`
    }

    const tableContainer = document.querySelector('#datatable-fixed-header .overflow-x-auto')
    const datatable = new HSDataTable('#datatable-fixed-header', {
      fixedHeader: {
        header: true,
        headerOffset: getHeaderOffset()
      }
    })
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) adjustFixedHeaderParentWidth()
      })
    })
    const fixedHeaderParent = document.querySelector('.dtfh-floatingparent')

    adjustFixedHeaderParentWidth()

    if (fixedHeaderParent) {
      observer.observe(fixedHeaderParent, {
        childList: true,
        subtree: true
      })
    }

    tableContainer.addEventListener('scroll', evt => {
      const scrollLeft = evt.target.scrollLeft
      const fixedHeaderFloating = document.querySelector('.fixedHeader-floating')

      if (fixedHeaderFloating) fixedHeaderFloating.style.transform = `translateX(${-scrollLeft}px)`
    })

    window.addEventListener('resize', () => {
      updateHeaderOffset(datatable)
      adjustFixedHeaderParentWidth()
    })
  })
</script>


```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div
  id="datatable-with-column-actions"
  class="bg-base-100 --prevent-on-load-init flex flex-col rounded-md shadow-base-300/20 shadow-sm"
  data-datatable='{
  "pageLength": 5,
  "pagingOptions": {
    "pageBtnClasses": "btn btn-text btn-circle btn-sm"
  },
  "colReorder": true,
  "selecting": true,
  "rowSelectingOptions": {
    "selectAllSelector": "#datatable-column-actions-select-all-rows"
  },
  "language": {
      "zeroRecords": "<div class=\"py-10 px-5 flex flex-col justify-center items-center text-center\"><span class=\"icon-[componentx--search] shrink-0 size-6 text-base-content\"></span><div class=\"max-w-sm mx-auto\"><p class=\"mt-2 text-sm text-base-content/80\">No search results</p></div></div>"
    }
}'
>
  <div class="border-base-content/25 flex items-center border-b px-5 py-3 gap-3">
    <div class="input input-sm max-w-60">
      <span class="icon-[componentx--search] text-base-content/80 my-auto me-3 size-4 shrink-0"></span>
      <label class="sr-only" for="table-column-actions-search"></label>
      <input type="search" class="grow" placeholder="Search for items" id="table-column-actions-search" data-datatable-search="" />
    </div>
    <div class="flex flex-1 items-center justify-end gap-3">
      <!-- Select -->
      <select
        data-select='{
            "placeholder": "Select option...",
            "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
            "toggleClasses": "advance-select-toggle advance-select-sm",
            "dropdownClasses": "advance-select-menu w-24 max-sm:w-16",
            "optionClasses": "advance-select-option selected:select-active",
            "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"icon-[componentx--check] shrink-0 size-3 text-primary hidden selected:block \"></span></div>",
            "extraMarkup": "<span class=\"icon-[componentx--caret-up-down] shrink-0 size-4 text-base-content absolute top-1/2 end-2 -translate-y-1/2 \"></span>"
            }'
        class="hidden"
        data-datatable-page-entities=""
      >
        <option value="5" selected="">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
      </select>
      <!-- End Select -->
    </div>
  </div>
  <div class="overflow-x-auto">
    <div class="inline-block min-w-full align-middle">
      <div class="overflow-hidden">
        <table class="table min-w-full">
          <thead>
            <tr>
              <th data-datatable-col-index="0"scope="col" class="--exclude-from-ordering w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="datatable-column-actions-select-all-rows" type="checkbox" class="checkbox checkbox-sm" />
                  <label for="datatable-column-actions-select-all-rows" class="sr-only">Checkbox</label>
                </div>
              </th>
              <th data-datatable-col-index="1" scope="col" class="group w-fit --exclude-from-ordering">
                <div class="flex items-center gap-2">
                  Product Name
                  <div class="dropdown relative inline-flex [--auto-close:inside]">
                    <button id="dropdown-product-column-actions" type="button" class="dropdown-toggle" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" >
                      <span class="icon-[componentx--filter] text-base-content/50 -mb-0.5 size-3.5"></span>
                    </button>
                    <div class="dropdown-menu dropdown-open:opacity-100 hidden w-auto" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-default" >
                      <div class="flex min-w-24 flex-col gap-y-1">
                        <button type="button" data-datatable-col-sorting="asc" class="dropdown-item">
                          <span class="icon-[componentx--arrow-up]"></span>
                          Sort
                        </button>
                        <button type="button" data-datatable-col-sorting="desc" class="dropdown-item">
                          <span class="icon-[componentx--arrow-down]"></span>
                          Sort
                        </button>
                        <button type="button" data-datatable-col-reorder="left" class="dropdown-item">
                          <span class="icon-[componentx--arrow-left]"></span>
                          Move
                        </button>
                        <button type="button" data-datatable-col-reorder="right" class="dropdown-item">
                          <span class="icon-[componentx--arrow-right]"></span>
                          Move
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </th>
              <th data-datatable-col-index="2" scope="col" class="group w-fit --exclude-from-ordering">
                <div class="flex items-center gap-2">
                  Price
                  <div class="dropdown relative inline-flex [--auto-close:inside]">
                    <button id="dropdown-price-column-actions" type="button" class="dropdown-toggle" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" >
                      <span class="icon-[componentx--filter] text-base-content/50 -mb-0.5 size-3.5"></span>
                    </button>
                    <div class="dropdown-menu dropdown-open:opacity-100 hidden w-auto" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-default" >
                      <div class="flex min-w-24 flex-col gap-y-1">
                        <button type="button" data-datatable-col-sorting="asc" class="dropdown-item">
                          <span class="icon-[componentx--arrow-up]"></span>
                          Sort
                        </button>
                        <button type="button" data-datatable-col-sorting="desc" class="dropdown-item">
                          <span class="icon-[componentx--arrow-down]"></span>
                          Sort
                        </button>
                        <button type="button" data-datatable-col-reorder="left" class="dropdown-item">
                          <span class="icon-[componentx--arrow-left]"></span>
                          Move
                        </button>
                        <button type="button" data-datatable-col-reorder="right" class="dropdown-item">
                          <span class="icon-[componentx--arrow-right]"></span>
                          Move
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </th>
              <th data-datatable-col-index="3" scope="col" class="group w-fit --exclude-from-ordering">
                <div class="flex items-center gap-2">
                  Availability
                  <div class="dropdown relative inline-flex [--auto-close:inside]">
                    <button id="dropdown-availability-column-actions" type="button" class="dropdown-toggle" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" >
                      <span class="icon-[componentx--filter] text-base-content/50 -mb-0.5 size-3.5"></span>
                    </button>
                    <div class="dropdown-menu dropdown-open:opacity-100 hidden w-auto" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-default" >
                      <div class="flex min-w-24 flex-col gap-y-1">
                        <button type="button" data-datatable-col-sorting="asc" class="dropdown-item">
                          <span class="icon-[componentx--arrow-up]"></span>
                          Sort
                        </button>
                        <button type="button" data-datatable-col-sorting="desc" class="dropdown-item">
                          <span class="icon-[componentx--arrow-down]"></span>
                          Sort
                        </button>
                        <button type="button" data-datatable-col-reorder="left" class="dropdown-item">
                          <span class="icon-[componentx--arrow-left]"></span>
                          Move
                        </button>
                        <button type="button" data-datatable-col-reorder="right" class="dropdown-item">
                          <span class="icon-[componentx--arrow-right]"></span>
                          Move
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </th>
              <th data-datatable-col-index="-1" scope="col" class="--exclude-from-ordering">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-column-actions-checkbox-1" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-column-actions-checkbox-1" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Apple iPhone 15</td>
              <td>$999</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-column-actions-checkbox-2" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-column-actions-checkbox-2" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Samsung Galaxy S23</td>
              <td>$899</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-column-actions-checkbox-3" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-column-actions-checkbox-3" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Sony WH-1000XM5</td>
              <td>$399</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-column-actions-checkbox-4" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-column-actions-checkbox-4" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Dell XPS 15</td>
              <td>$1,299</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-column-actions-checkbox-5" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-column-actions-checkbox-5" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Logitech MX Master 3</td>
              <td>$99</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-column-actions-checkbox-6" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-column-actions-checkbox-6" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Microsoft Surface Laptop 5</td>
              <td>$1,499</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-column-actions-checkbox-7" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-column-actions-checkbox-7" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>HP Spectre x360</td>
              <td>$1,199</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-column-actions-checkbox-8" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-column-actions-checkbox-8" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Apple Watch Series 9</td>
              <td>$499</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-column-actions-checkbox-9" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-column-actions-checkbox-9" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Google Pixel 7</td>
              <td>$599</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-column-actions-checkbox-10" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-column-actions-checkbox-10" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Bose QuietComfort Earbuds II</td>
              <td>$279</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-column-actions-checkbox-11" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-column-actions-checkbox-11" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Asus ROG Zephyrus G14</td>
              <td>$1,899</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-column-actions-checkbox-12" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-column-actions-checkbox-12" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Sony PlayStation 5</td>
              <td>$499</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-column-actions-checkbox-13" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-column-actions-checkbox-13" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Amazon Echo Dot (5th Gen)</td>
              <td>$49</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-column-actions-checkbox-14" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-column-actions-checkbox-14" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>NVIDIA GeForce RTX 4090</td>
              <td>$1,599</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-column-actions-checkbox-15" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-column-actions-checkbox-15" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Lenovo ThinkPad X1 Carbon</td>
              <td>$1,799</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-column-actions-checkbox-16" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-column-actions-checkbox-16" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Google Nest Hub (2nd Gen)</td>
              <td>$99</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-column-actions-checkbox-17" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-column-actions-checkbox-17" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Fitbit Charge 6</td>
              <td>$149</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-column-actions-checkbox-18" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-column-actions-checkbox-18" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Razer Blade 16</td>
              <td>$2,499</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-column-actions-checkbox-19" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-column-actions-checkbox-19" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Oculus Quest 3</td>
              <td>$499</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-column-actions-checkbox-20" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-column-actions-checkbox-20" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Canon EOS R8</td>
              <td>$1,699</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-column-actions-checkbox-21" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-column-actions-checkbox-21" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>DJI Mavic 3 Pro</td>
              <td>$2,199</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-column-actions-checkbox-22" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-column-actions-checkbox-22" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Alienware Aurora R15</td>
              <td>$2,899</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-column-actions-checkbox-23" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="table-column-actions-checkbox-23" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>SteelSeries Arctis Nova Pro</td>
              <td>$349</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div class="border-base-content/25 flex items-center justify-between gap-3 border-t p-3 max-md:flex-wrap max-md:justify-center">
    <div class="text-base-content/80 text-sm" data-datatable-info="">
      Showing
      <span data-datatable-info-from="1"></span>
      to
      <span data-datatable-info-to="30"></span>
      of
      <span data-datatable-info-length="50"></span>
      products
    </div>
    <div class="flex items-center space-x-1" data-datatable-paging="">
      <button type="button" class="btn btn-text btn-circle btn-sm" data-datatable-paging-prev="">
        <span class="icon-[componentx--chevrons-left] size-4.5 rtl:rotate-180"></span>
        <span class="sr-only">Previous</span>
      </button>
      <div class="[&>.active]:text-bg-soft-primary flex items-center space-x-1" data-datatable-paging-pages=""></div>
      <button type="button" class="btn btn-text btn-circle btn-sm" data-datatable-paging-next="">
        <span class="sr-only">Next</span>
        <span class="icon-[componentx--chevrons-right] size-4.5 rtl:rotate-180"></span>
      </button>
    </div>
  </div>
</div>
```

```js

<script>
  // Fixed header
  window.addEventListener('load', () => {
    const { dataTable } = new HSDataTable('#datatable-with-column-actions')
    const directions = document.querySelectorAll('#datatable-with-column-actions thead [data-datatable-col-reorder]')
    const sorting = document.querySelectorAll('#datatable-with-column-actions thead [data-datatable-col-sorting]')

    function updateColumnIndices() {
      const headers = document.querySelectorAll('#datatable-with-column-actions thead th')

      headers.forEach((th, ind) => {
        th.setAttribute('data-datatable-col-index', dataTable.column(ind).index())
      })
    }

    function moveColumn(currentIndex, direction) {
      const headers = document.querySelectorAll('#datatable-with-column-actions thead th')
      const th = headers[currentIndex]
      const colIndex = parseInt(th.getAttribute('data-datatable-col-index'), 10)
      const newPos = colIndex + direction

      if (newPos >= 1 && newPos < headers.length - 1) {
        dataTable.colReorder.move(colIndex, newPos)

        updateColumnIndices()
      }
    }

    function sortColumn(colIndex, order) {
      dataTable.order([colIndex, order]).draw()
    }

    directions.forEach(btn => {
      btn.addEventListener('click', () => {
        const th = btn.closest('th')
        const dropdown = HSDropdown.getInstance(btn.closest('.dropdown'), true)
        const colIndex = Array.from(th.parentNode.children).indexOf(th)
        const direction = btn.getAttribute('data-datatable-col-reorder') === 'left' ? -1 : 1

        moveColumn(colIndex, direction)
        dropdown.element.el._floatingUI.update()
      })
    })

    sorting.forEach(btn => {
      btn.addEventListener('click', () => {
        const th = btn.closest('th')
        const colIndex = Array.from(th.parentNode.children).indexOf(th)
        const order = btn.getAttribute('data-datatable-col-sorting')

        sortColumn(colIndex, order)
      })
    })

    updateColumnIndices()
  })
</script>

```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div
  id="datatable-with-export"
  class="bg-base-100 --prevent-on-load-init flex flex-col rounded-md shadow-base-300/20 shadow-sm"
  data-datatable='{
  "pageLength": 5,
  "pagingOptions": {
    "pageBtnClasses": "btn btn-text btn-circle btn-sm"
  },
  "selecting": true,
  "rowSelectingOptions": {
    "selectAllSelector": "#export-select-all-rows"
  },
  "language": {
      "zeroRecords": "<div class=\"py-10 px-5 flex flex-col justify-center items-center text-center\"><span class=\"icon-[componentx--search] shrink-0 size-6 text-base-content\"></span><div class=\"max-w-sm mx-auto\"><p class=\"mt-2 text-sm text-base-content/80\">No search results</p></div></div>"
    },
  "layout": {
    "topStart": {
      "buttons": ["copy", "csv", "excel", "pdf", "print"]
    }
  }
}'
>
  <div class="border-base-content/25 flex items-center border-b px-5 py-3 gap-3">
    <div class="input input-sm max-w-60">
      <span class="icon-[componentx--search] text-base-content/80 my-auto me-3 size-4 shrink-0"></span>
      <label class="sr-only" for="table-export-search"></label>
      <input type="search" class="grow" placeholder="Search for items" id="table-export-search" data-datatable-search="" />
    </div>
    <div class="flex flex-1 items-center justify-end gap-3">
      <!-- Select -->
      <select
        data-select='{
          "placeholder": "Select option...",
          "toggleTag": "<button type=\"button\" aria-expanded=\"false\"><span data-title></span></button>",
          "toggleClasses": "advance-select-toggle advance-select-sm",
          "dropdownClasses": "advance-select-menu w-24 max-sm:w-16",
          "optionClasses": "advance-select-option selected:select-active",
          "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"icon-[componentx--check] shrink-0 size-3 text-primary hidden selected:block \"></span></div>",
          "extraMarkup": "<span class=\"icon-[componentx--caret-up-down] shrink-0 size-4 text-base-content absolute top-1/2 end-2 -translate-y-1/2 \"></span>"
          }'
        class="hidden"
        data-datatable-page-entities=""
      >
        <option value="5" selected="">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
      </select>
      <!-- End Select -->
      <div id="dropdown-datatable-with-export" class="dropdown relative inline-flex">
        <button id="datatable-export-dropdown" type="button" class="dropdown-toggle max-sm:btn-square btn btn-soft btn-sm" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" >
          <span class="flex items-center gap-3">
            <span class="icon-[componentx--download] size-4"></span>
            <span class="max-sm:hidden">Export</span>
          </span>
          <span class="icon-[componentx--chevron-down] max-sm:hidden dropdown-open:rotate-180 size-4"></span>
        </button>
        <div class="dropdown-menu dropdown-open:opacity-100 hidden" role="menu" aria-orientation="vertical" aria-labelledby="datatable-export-dropdown" >
          <button type="button" class="dropdown-item" data-datatable-action-type="copy">
            <span class="icon-[componentx--clipboard-copy] size-3.5 shrink-0"></span>
            Copy
          </button>
          <button type="button" class="dropdown-item" data-datatable-action-type="print">
            <span class="icon-[componentx--printer] size-3.5 shrink-0"></span>
            Print
          </button>
          <hr class="border-base-content/25 -mx-2 my-3" />
          <button type="button" class="dropdown-item" data-datatable-action-type="excel">
            <span class="icon-[componentx--file-excel] size-3.5 shrink-0"></span>
            Excel
          </button>
          <button type="button" class="dropdown-item" data-datatable-action-type="csv">
            <span class="icon-[componentx--file-type-csv] size-3.5 shrink-0"></span>
            CSV
          </button>
          <button type="button" class="dropdown-item" data-datatable-action-type="pdf">
            <span class="icon-[componentx--file-type-pdf] size-3.5 shrink-0"></span>
            PDF
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="overflow-x-auto">
    <div class="inline-block min-w-full align-middle">
      <div class="overflow-hidden">
        <table class="table min-w-full">
          <thead>
            <tr>
              <th scope="col" class="--exclude-from-ordering w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="export-select-all-rows" type="checkbox" class="checkbox checkbox-sm" />
                  <label for="export-select-all-rows" class="sr-only">Checkbox</label>
                </div>
              </th>
              <th scope="col" class="group w-fit">
                <div class="flex items-center justify-between">
                  Product Name
                  <span class="icon-[componentx--chevron-up] datatable-ordering-asc:block hidden"></span>
                  <span class="icon-[componentx--chevron-down] datatable-ordering-desc:block hidden"></span>
                </div>
              </th>
              <th scope="col" class="group w-fit">
                <div class="flex items-center justify-between">
                  Price
                  <span class="icon-[componentx--chevron-up] datatable-ordering-asc:block hidden"></span>
                  <span class="icon-[componentx--chevron-down] datatable-ordering-desc:block hidden"></span>
                </div>
              </th>
              <th scope="col" class="group w-fit">
                <div class="flex items-center justify-between">
                  Availability
                  <span class="icon-[componentx--chevron-up] datatable-ordering-asc:block hidden"></span>
                  <span class="icon-[componentx--chevron-down] datatable-ordering-desc:block hidden"></span>
                </div>
              </th>
              <th scope="col" class="--exclude-from-ordering">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="datatable-with-export-1" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="datatable-with-export-1" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Apple iPhone 15</td>
              <td>$999</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="datatable-with-export-2" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="datatable-with-export-2" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Samsung Galaxy S23</td>
              <td>$899</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="datatable-with-export-3" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="datatable-with-export-3" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Sony WH-1000XM5</td>
              <td>$399</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="datatable-with-export-4" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="datatable-with-export-4" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Dell XPS 15</td>
              <td>$1,299</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="datatable-with-export-5" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="datatable-with-export-5" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Logitech MX Master 3</td>
              <td>$99</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="datatable-with-export-6" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="datatable-with-export-6" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Microsoft Surface Laptop 5</td>
              <td>$1,499</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="datatable-with-export-7" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="datatable-with-export-7" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>HP Spectre x360</td>
              <td>$1,199</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="datatable-with-export-8" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="datatable-with-export-8" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Apple Watch Series 9</td>
              <td>$499</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="datatable-with-export-9" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="datatable-with-export-9" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Google Pixel 7</td>
              <td>$599</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="datatable-with-export-10" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="datatable-with-export-10" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Bose QuietComfort Earbuds II</td>
              <td>$279</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="datatable-with-export-11" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="datatable-with-export-11" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Asus ROG Zephyrus G14</td>
              <td>$1,899</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="datatable-with-export-12" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="datatable-with-export-12" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Sony PlayStation 5</td>
              <td>$499</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="datatable-with-export-13" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="datatable-with-export-13" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Amazon Echo Dot (5th Gen)</td>
              <td>$49</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="datatable-with-export-14" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="datatable-with-export-14" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>NVIDIA GeForce RTX 4090</td>
              <td>$1,599</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="datatable-with-export-15" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="datatable-with-export-15" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Lenovo ThinkPad X1 Carbon</td>
              <td>$1,799</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="datatable-with-export-16" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="datatable-with-export-16" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Google Nest Hub (2nd Gen)</td>
              <td>$99</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="datatable-with-export-17" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="datatable-with-export-17" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Fitbit Charge 6</td>
              <td>$149</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="datatable-with-export-18" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="datatable-with-export-18" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Razer Blade 16</td>
              <td>$2,499</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="datatable-with-export-19" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="datatable-with-export-19" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Oculus Quest 3</td>
              <td>$499</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="datatable-with-export-20" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="datatable-with-export-20" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Canon EOS R8</td>
              <td>$1,699</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="datatable-with-export-21" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="datatable-with-export-21" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>DJI Mavic 3 Pro</td>
              <td>$2,199</td>
              <td><span class="badge badge-soft badge-success badge-sm">In Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="datatable-with-export-22" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="datatable-with-export-22" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>Alienware Aurora R15</td>
              <td>$2,899</td>
              <td><span class="badge badge-soft badge-error badge-sm">Out of Stock</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="datatable-with-export-23" type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="" />
                  <label for="datatable-with-export-23" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td>SteelSeries Arctis Nova Pro</td>
              <td>$349</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Limited</span></td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div class="border-base-content/25 flex items-center justify-between gap-3 border-t p-3 max-md:flex-wrap max-md:justify-center">
    <div class="text-base-content/80 text-sm" data-datatable-info="">
      Showing
      <span data-datatable-info-from="1"></span>
      to
      <span data-datatable-info-to="30"></span>
      of
      <span data-datatable-info-length="50"></span>
      products
    </div>
    <div class="flex hidden items-center space-x-1" data-datatable-paging="">
      <button type="button" class="btn btn-text btn-circle btn-sm" data-datatable-paging-prev="">
        <span class="icon-[componentx--chevrons-left] size-4.5 rtl:rotate-180"></span>
        <span class="sr-only">Previous</span>
      </button>
      <div class="[&>.active]:text-bg-soft-primary flex items-center space-x-1" data-datatable-paging-pages=""></div>
      <button type="button" class="btn btn-text btn-circle btn-sm" data-datatable-paging-next="">
        <span class="sr-only">Next</span>
        <span class="icon-[componentx--chevrons-right] size-4.5 rtl:rotate-180"></span>
      </button>
    </div>
  </div>
</div>
```

```js

<script>
   window.addEventListener('load', () => {
    const { dataTable } = new HSDataTable('#datatable-with-export', {
      dom: 'B', // Required for buttons to work
      buttons: [
        {
          extend: 'copy',
          exportOptions: {
            columns: [1, 2, 3] // Columns to include (adjust indices as needed)
          }
        },
        {
          extend: 'csv',
          exportOptions: {
            columns: [1, 2, 3]
          }
        },
        {
          extend: 'excel',
          exportOptions: {
            columns: [1, 2, 3]
          }
        },
        {
          extend: 'pdf',
          exportOptions: {
            columns: [1, 2, 3]
          }
        },
        {
          extend: 'print',
          exportOptions: {
            columns: [1, 2, 3]
          }
        }
      ]
    })

    // Remove extra button due to dom: 'B', ;
    const buttons = document.querySelectorAll('#dropdown-datatable-with-export .dropdown-menu button')
    document.querySelectorAll('#datatable-with-export .dt-buttons').forEach(buttonContainer => {
      buttonContainer.style.display = 'none'
    })

    buttons.forEach(btn => {
      const type = btn.getAttribute('data-datatable-action-type')
      btn.addEventListener('click', () => dataTable.button(`.buttons-${type}`).trigger())
    })
  })
</script>


```





I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div
  id="datatable-with-ajax"
  class="bg-base-100 --prevent-on-load-init flex flex-col rounded-md shadow-base-300/20 shadow-sm"
  data-datatable='{
  "pageLength": 5,
  "pagingOptions": {
    "pageBtnClasses": "btn btn-text btn-circle btn-sm"
  },
  "selecting": true,
  "rowSelectingOptions": {
    "selectAllSelector": "#table-ajax-all"
  },
   "ajax": "/docs/json/mobile-stock.json",
  "columns": [
    { "data": "" },
    { "data": "product_name" },
    { "data": "price" },
    { "data": "availability" },
    { "data": "" }
   ],
  "language": {
      "zeroRecords": "<div class=\"py-10 px-5 flex flex-col justify-center items-center text-center\"><span class=\"icon-[componentx--search] shrink-0 size-6 text-base-content\"></span><div class=\"max-w-sm mx-auto\"><p class=\"mt-2 text-sm text-base-content/80\">No search results</p></div></div>"
    }
}'
>
  <div class="border-base-content/25 border-b py-3 ps-5">
    <div class="input input-sm max-w-60">
      <span class="icon-[componentx--search] text-base-content/80 my-auto me-3 size-4 shrink-0"></span>
      <label class="sr-only" for="table-ajax-input-search"></label>
      <input type="search" class="grow" placeholder="Search for items" id="table-ajax-input-search" data-datatable-search="" />
    </div>
  </div>
  <div class="overflow-x-auto">
    <div class="inline-block min-w-full align-middle">
      <div class="overflow-hidden">
        <table class="table min-w-full">
          <thead>
            <tr>
              <th data-datatable-col-index="0" scope="col" class="--exclude-from-ordering w-3.5 pe-0">
                <div class="flex h-5 items-center">
                  <input id="table-ajax-all" type="checkbox" class="checkbox checkbox-sm" />
                  <label for="table-ajax-all" class="sr-only">Checkbox</label>
                </div>
              </th>
              <th data-datatable-col-index="1" scope="col" class="group w-fit">
                <div class="flex items-center justify-between">
                  Product Name
                  <span class="icon-[componentx--chevron-up] datatable-ordering-asc:block hidden"></span>
                  <span class="icon-[componentx--chevron-down] datatable-ordering-desc:block hidden"></span>
                </div>
              </th>
              <th data-datatable-col-index="2" scope="col" class="group w-fit">
                <div class="flex items-center justify-between">
                  Price
                  <span class="icon-[componentx--chevron-up] datatable-ordering-asc:block hidden"></span>
                  <span class="icon-[componentx--chevron-down] datatable-ordering-desc:block hidden"></span>
                </div>
              </th>
              <th data-datatable-col-index="3" scope="col" class="group w-fit">
                <div class="flex items-center justify-between">
                  Availability
                  <span class="icon-[componentx--chevron-up] datatable-ordering-asc:block hidden"></span>
                  <span class="icon-[componentx--chevron-down] datatable-ordering-desc:block hidden"></span>
                </div>
              </th>
              <th data-datatable-col-index="-1" scope="col" class="--exclude-from-ordering">Actions</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  </div>

  <div class="border-base-content/25 flex items-center justify-between gap-3 border-t p-3 max-md:flex-wrap max-md:justify-center">
    <div class="text-base-content/80 text-sm" data-datatable-info="">
      Showing
      <span data-datatable-info-from="1"></span>
      to
      <span data-datatable-info-to="30"></span>
      of
      <span data-datatable-info-length="50"></span>
      products
    </div>
    <div class="flex hidden items-center space-x-1" data-datatable-paging="">
      <button type="button" class="btn btn-text btn-circle btn-sm" data-datatable-paging-prev="">
        <span class="icon-[componentx--chevrons-left] size-4.5 rtl:rotate-180"></span>
        <span class="sr-only">Previous</span>
      </button>
      <div class="[&>.active]:text-bg-soft-primary flex items-center space-x-1" data-datatable-paging-pages=""></div>
      <button type="button" class="btn btn-text btn-circle btn-sm" data-datatable-paging-next="">
        <span class="sr-only">Next</span>
        <span class="icon-[componentx--chevrons-right] size-4.5 rtl:rotate-180"></span>
      </button>
    </div>
  </div>
</div>
```

```js
<script>
  window.addEventListener('load', () => {
  new HSDataTable('#datatable-with-ajax', {
    columnDefs: [
      {
        target: 0, // For the checkbox column
        orderable: false,
        searchable: false,
        render: function (data, type, row) {
          return '<input type="checkbox" class="checkbox checkbox-sm" data-datatable-row-selecting-individual="">'
        }
      },
      {
        target: 1, // Maps to the JSON key `product_name`
        render: function (data, type, full, meta) {
          return '<div class="text-nowrap">' + data + '</div>'
        }
      },
      {
        target: 2, // Maps to the JSON key `price`
        render: function (data, type, full, meta) {
          return '<div class="text-nowrap">' + data + '</div>'
        }
      },
      {
        target: 3, // Maps to the JSON key `availability`
        render: function (data, type, full, meta) {
          var $state = full['state']
          return '<span class="badge badge-soft badge-sm badge-' + $state + '">' + data + '</span>'
        }
      },
      {
        target: -1, // For the actions column
        searchable: false,
        orderable: false,
        render: function (data, type, full, meta) {
          return (
            '<button class="btn btn-circle btn-text btn-sm" aria-label="Edit">' +
            '<span class="icon-[componentx--pencil] size-5"></span>' +
            '</button>' +
            '<button class="btn btn-circle btn-text btn-sm" aria-label="Delete">' +
            '<span class="icon-[componentx--trash] size-5"></span>' +
            '</button>' +
            '<button class="btn btn-circle btn-text btn-sm" aria-label="More">' +
            '<span class="icon-[componentx--dots-vertical] size-5"></span>' +
            '</button>'
          )
        }
      }
    ]
  })
})
</script>

```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div
  id="datatable-to-destroy"
  class="bg-base-100 flex flex-col rounded-md shadow-base-300/20 shadow-sm"
  data-datatable='{
  "pageLength": 5,
  "pagingOptions": {
    "pageBtnClasses": "btn btn-text btn-circle btn-sm"
  }
}'
>
  <div class="overflow-x-auto">
    <div class="inline-block min-w-full align-middle">
      <div class="overflow-hidden">
        <table class="table min-w-full">
          <thead>
            <tr>
              <th scope="col" class="group">
                <div class="flex items-center justify-between">
                  Name
                  <span class="icon-[componentx--chevron-up] hidden datatable-ordering-asc:block"></span>
                  <span class="icon-[componentx--chevron-down] hidden datatable-ordering-desc:block"></span>
                </div>
              </th>
              <th scope="col" class="group">
                <div class="flex items-center justify-between">
                  Email
                  <span class="icon-[componentx--chevron-up] hidden datatable-ordering-asc:block"></span>
                  <span class="icon-[componentx--chevron-down] hidden datatable-ordering-desc:block"></span>
                </div>
              </th>
              <th scope="col" class="group">
                <div class="flex items-center justify-between">
                  Status
                  <span class="icon-[componentx--chevron-up] hidden datatable-ordering-asc:block"></span>
                  <span class="icon-[componentx--chevron-down] hidden datatable-ordering-desc:block"></span>
                </div>
              </th>
              <th scope="col" class="group">
                <div class="flex items-center justify-between">
                  Date
                  <span class="icon-[componentx--chevron-up] hidden datatable-ordering-asc:block"></span>
                  <span class="icon-[componentx--chevron-down] hidden datatable-ordering-desc:block"></span>
                </div>
              </th>
              <th scope="col" class="--exclude-from-ordering">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>johndoe@example.com</td>
              <td><span class="badge badge-soft badge-success badge-sm">Professional</span></td>
              <td>March 1, 2024</td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>janesmith@example.com</td>
              <td><span class="badge badge-soft badge-error badge-sm">Rejected</span></td>
              <td>March 2, 2024</td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Alice Johnson</td>
              <td>alicejohnson@example.com</td>
              <td><span class="badge badge-soft badge-info badge-sm">Applied</span></td>
              <td>March 3, 2024</td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Bob Brown</td>
              <td>bobrown@example.com</td>
              <td><span class="badge badge-soft badge-primary badge-sm">Current</span></td>
              <td>March 4, 2024</td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Alice Johnson</td>
              <td>alicej@example.com</td>
              <td><span class="badge badge-soft badge-primary badge-sm">Current</span></td>
              <td>January 15, 2024</td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Chris Evans</td>
              <td>chrisev@example.com</td>
              <td><span class="badge badge-soft badge-secondary badge-sm">Inactive</span></td>
              <td>November 20, 2023</td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Dana White</td>
              <td>danaw@example.com</td>
              <td><span class="badge badge-soft badge-primary badge-sm">Current</span></td>
              <td>February 2, 2024</td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Ethan Hall</td>
              <td>ethanh@example.com</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Pending</span></td>
              <td>April 14, 2024</td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Fiona Carter</td>
              <td>fionac@example.com</td>
              <td><span class="badge badge-soft badge-primary badge-sm">Current</span></td>
              <td>March 9, 2024</td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>George Smith</td>
              <td>georges@example.com</td>
              <td><span class="badge badge-soft badge-secondary badge-sm">Inactive</span></td>
              <td>December 12, 2023</td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Hannah Wright</td>
              <td>hannahw@example.com</td>
              <td><span class="badge badge-soft badge-warning badge-sm">Pending</span></td>
              <td>June 10, 2024</td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Isaac Long</td>
              <td>isaacl@example.com</td>
              <td><span class="badge badge-soft badge-primary badge-sm">Current</span></td>
              <td>August 20, 2024</td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Jane Davis</td>
              <td>janed@example.com</td>
              <td><span class="badge badge-soft badge-primary badge-sm">Current</span></td>
              <td>July 3, 2024</td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Kevin Lee</td>
              <td>kevinl@example.com</td>
              <td><span class="badge badge-soft badge-primary badge-sm">Current</span></td>
              <td>May 12, 2024</td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Linda Green</td>
              <td>lindag@example.com</td>
              <td><span class="badge badge-soft badge-secondary badge-sm">Inactive</span></td>
              <td>October 7, 2023</td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--trash] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[componentx--dots-vertical] size-5"></span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div class="border-base-content/25 flex items-center justify-between gap-3 border-t p-3 max-md:flex-wrap max-md:justify-center">
   <div class="text-sm text-base-content/80" data-datatable-info="">
      Showing
      <span data-datatable-info-from=""></span>
      to
      <span data-datatable-info-to=""></span>
      of
      <span data-datatable-info-length=""></span>
      users
    </div>
    <div class="flex hidden items-center space-x-1" data-datatable-paging="">
      <button type="button" class="btn btn-text btn-circle btn-sm" data-datatable-paging-prev="">
        <span class="icon-[componentx--chevrons-left] size-4.5 rtl:rotate-180"></span>
        <span class="sr-only">Previous</span>
      </button>
      <div class="flex items-center space-x-1 [&>.active]:text-bg-soft-primary" data-datatable-paging-pages=""></div>
      <button type="button" class="btn btn-text btn-circle btn-sm" data-datatable-paging-next="">
        <span class="sr-only">Next</span>
        <span class="icon-[componentx--chevrons-right] size-4.5 rtl:rotate-180"></span>
      </button>
    </div>
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
    // Destroy and reinit variables
    const datatable = document.querySelector('#datatable-to-destroy')
    const destroyBtn = document.querySelector('#destroy-btn')
    const reinitBtn = document.querySelector('#reinit-btn')

    // Destroy usage
    destroyBtn.addEventListener('click', () => {
      const { element } = HSDataTable.getInstance(datatable, true)

      element.destroy()

      destroyBtn.setAttribute('disabled', 'disabled')
      reinitBtn.removeAttribute('disabled')
    })

    // Reinit usage
    reinitBtn.addEventListener('click', () => {
      HSDataTable.autoInit()

      reinitBtn.setAttribute('disabled', 'disabled')
      destroyBtn.removeAttribute('disabled')
    })
  })
</script>

```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
