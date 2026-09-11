---
name: "Drag & Drop"
library: "ComponentX"
id: "drag-drop"
type: "form"
quality: "standard"
tags: ["animation", "card", "component", "image", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Drag & Drop

> **Type:** `form` · **Quality:** `standard` · **ID:** `drag-drop`
> **Path:** `components/form/drag-drop.md`

**Drag & Drop** is a premium, production-ready component from the **ComponentX** library — engineered for form interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `animation`, `card`, `image` workflows.
- **Pattern coverage** — includes `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Drag & Drop** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
<ul id="list-example" class="border-base-content/25 divide-base-content/25 rounded-md max-w-sm divide-y border *:cursor-move *:p-3 *:flex *:items-center *:gap-3" >
  <li>
    <span class="icon-[componentx--bell] size-4 shrink-0"></span>
    Weekly Insights
    <span class="icon-[componentx--grip-vertical] text-base-content ms-auto size-4 shrink-0"></span>
  </li>
  <li>
    <span class="icon-[componentx--cloud-download] size-4 shrink-0"></span>
    Resource Center
    <span class="icon-[componentx--grip-vertical] text-base-content ms-auto size-4 shrink-0"></span>
  </li>
  <li>
    <span class="icon-[componentx--users] size-4 shrink-0"></span>
    Team Collaboration
    <span class="icon-[componentx--grip-vertical] text-base-content ms-auto size-4 shrink-0"></span>
  </li>
  <li>
    <span class="icon-[componentx--bell] size-4 shrink-0"></span>
    Product Updates
    <span class="icon-[componentx--grip-vertical] text-base-content ms-auto size-4 shrink-0"></span>
  </li>
  <li>
    <span class="icon-[componentx--users] size-4 shrink-0"></span>
    Community Forum
    <span class="icon-[componentx--grip-vertical] text-base-content ms-auto size-4 shrink-0"></span>
  </li>
</ul>
```

```js
<script>
 window.addEventListener('load', () => {
  ;(function () {
    // Basic example
    const listExample = document.querySelector('#list-example')

    if (listExample) {
      Sortable.create(listExample, {
        animation: 150,
        dragClass: '!border-0'
      })
    }
  })()
})

</script>


```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div id="stat-example" class="grid md:grid-cols-2 gap-6 *:cursor-move">
  <div class="stats max-sm:w-full">
    <div class="stat">
      <div class="avatar avatar-placeholder">
        <div class="bg-success/20 text-success size-10 rounded-full">
          <span class="icon-[componentx--package] size-6"></span>
        </div>
      </div>
      <div class="stat-value mb-1">Order</div>
      <div class="stat-title">7,500 of 10,000 orders</div>
      <div class="progress bg-success/10 h-2" role="progressbar" aria-label="Order Progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" >
        <div class="progress-bar progress-success w-3/4"></div>
      </div>
    </div>
  </div>

  <div class="stats max-sm:w-full">
    <div class="stat">
      <div class="avatar avatar-placeholder">
        <div class="bg-warning/20 text-warning size-10 rounded-full">
          <span class="icon-[componentx--cash] size-6"></span>
        </div>
      </div>
      <div class="stat-value mb-1">Revenue</div>
      <div class="stat-title">$45,000 of $100,000</div>
      <div class="progress bg-warning/10 h-2" role="progressbar" aria-label="Revenue Progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" >
        <div class="progress-bar progress-warning w-2/5"></div>
      </div>
    </div>
  </div>

  <div class="stats max-sm:w-full">
    <div class="stat">
      <div class="avatar avatar-placeholder">
        <div class="bg-error/20 text-error size-10 rounded-full">
          <span class="icon-[componentx--credit-card] size-6"></span>
        </div>
      </div>
      <div class="stat-value mb-1">Invoice</div>
      <div class="stat-title">$18,200 of $25,000</div>
      <div class="progress bg-error/10 h-2" role="progressbar" aria-label="Invoice Progressbar" aria-valuenow="73" aria-valuemin="0" aria-valuemax="100" >
        <div class="progress-bar progress-error w-9/12"></div>
      </div>
    </div>
  </div>

  <!-- Shipment Stats -->
  <div class="stats">
    <div class="stat">
      <div class="avatar avatar-placeholder">
        <div class="bg-info/20 text-info size-10 rounded-full">
          <span class="icon-[componentx--truck] size-6"></span>
        </div>
      </div>
      <div class="stat-value mb-1">Shipments</div>
      <div class="stat-title">10,450 of 12,000 shipments</div>
      <div class="progress bg-info/10 h-2" role="progressbar" aria-label="Invoice Progressbar" aria-valuenow="73" aria-valuemin="0" aria-valuemax="100" >
        <div class="progress-bar progress-info w-11/12"></div>
      </div>
    </div>
  </div>
</div>
```

```js
<script>
 window.addEventListener('load', () => {
  ;(function () {
     // Stat example
    const statExample = document.querySelector('#stat-example')

    if (statExample) {
      Sortable.create(statExample, {
        animation: 150
      })
    }
  })()
})

</script>


```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flew-wrap flex items-center gap-3 *:cursor-move" id="image-example">
  <div class="avatar">
    <div class="size-10 rounded-full">
      <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" alt="avatar" />
    </div>
  </div>
  <div class="avatar">
    <div class="size-10 rounded-full">
      <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-2.png" alt="avatar" />
    </div>
  </div>
  <div class="avatar">
    <div class="size-10 rounded-full">
      <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-3.png" alt="avatar" />
    </div>
  </div>
  <div class="avatar">
    <div class="size-10 rounded-full">
      <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-5.png" alt="avatar" />
    </div>
  </div>
  <div class="avatar">
    <div class="size-10 rounded-full">
      <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-7.png" alt="avatar" />
    </div>
  </div>
  <div class="avatar">
    <div class="size-10 rounded-full">
      <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-10.png" alt="avatar" />
    </div>
  </div>
  <div class="avatar">
    <div class="size-10 rounded-full">
      <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-12.png" alt="avatar" />
    </div>
  </div>
  <div class="avatar">
    <div class="size-10 rounded-full">
      <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-15.png" alt="avatar" />
    </div>
  </div>
</div>
```

```js

<script>
 window.addEventListener('load', () => {
  ;(function () {
    // Image example
    const imageExample = document.querySelector('#image-example')

    if (imageExample) {
      Sortable.create(imageExample, {
        animation: 150
      })
    }
  })()
})

</script>


```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="bg-base-100 shadow-base-300/20 rounded-box grid w-full grid-cols-1 gap-5 p-4 shadow-sm sm:grid-cols-2">
  <div>
    <p class="text-base-content text-base font-semibold">Pending Tasks</p>
    <ul class="divide-base-content/25 divide-y *:cursor-move *:p-3 *:flex *:items-center" id="pending-tasks">
      <li>
        <span>Design new company logo.</span>
        <div class="avatar ms-auto">
          <div class="size-6 rounded-full">
            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-11.png" alt="avatar" />
          </div>
        </div>
      </li>
      <li>
        <span>Prepare quarterly report.</span>
        <div class="avatar ms-auto">
          <div class="size-6 rounded-full">
            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-12.png" alt="avatar" />
          </div>
        </div>
      </li>
      <li>
        <span>Schedule team meeting.</span>
        <div class="avatar ms-auto">
          <div class="size-6 rounded-full">
            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-13.png" alt="avatar" />
          </div>
        </div>
      </li>
      <li>
        <span>Update client database.</span>
        <div class="avatar ms-auto">
          <div class="size-6 rounded-full">
            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-14.png" alt="avatar" />
          </div>
        </div>
      </li>
      <li>
        <span>Plan marketing campaign.</span>
        <div class="avatar ms-auto">
          <div class="size-6 rounded-full">
            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-15.png" alt="avatar" />
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div>
    <p class="text-base-content text-base font-semibold">Completed Tasks</p>
    <ul class="divide-base-content/25 divide-y *:cursor-move *:p-3 *:flex *:items-center" id="completed-tasks">
      <li>
        <span>Launch new website.</span>
        <div class="avatar ms-auto">
          <div class="size-6 rounded-full">
            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-16.png" alt="avatar" />
          </div>
        </div>
      </li>
      <li>
        <span>Finalize budget proposal.</span>
        <div class="avatar ms-auto">
          <div class="size-6 rounded-full">
            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-17.png" alt="avatar" />
          </div>
        </div>
      </li>
      <li>
        <span>Conduct employee training.</span>
        <div class="avatar ms-auto">
          <div class="size-6 rounded-full">
            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-18.png" alt="avatar" />
          </div>
        </div>
      </li>
      <li>
        <span>Organize office relocation.</span>
        <div class="avatar ms-auto">
          <div class="size-6 rounded-full">
            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-19.png" alt="avatar" />
          </div>
        </div>
      </li>
      <li>
        <span>Attend industry conference.</span>
        <div class="avatar ms-auto">
          <div class="size-6 rounded-full">
            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-20.png" alt="avatar" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
```

```js

<script>
 window.addEventListener('load', () => {
  ;(function () {
    // shared example
    const pendingTasks = document.querySelector('#pending-tasks')
    const completedTasks = document.querySelector('#completed-tasks')

    if (pendingTasks) {
      Sortable.create(pendingTasks, {
        animation: 150,
        group: 'taskList',
        dragClass: '!border-0'
      })
    }
    if (completedTasks) {
      Sortable.create(completedTasks, {
        animation: 150,
        group: 'taskList',
        dragClass: '!border-0'
      })
    }
  })()
})

</script>


```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="bg-base-100 shadow-base-300/20 rounded-box grid w-full grid-cols-1 gap-5 p-4 shadow-sm sm:grid-cols-2">
  <div>
    <p class="text-base-content text-base font-semibold">Pending Tasks</p>
    <ul class="divide-base-content/25 divide-y *:flex *:cursor-move *:items-center *:p-3" id="clone-source-1">
      <li>
        <span>Develop mobile app prototype.</span>
        <div class="avatar ms-auto">
          <div class="size-6 rounded-full">
            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-21.png" alt="avatar" />
          </div>
        </div>
      </li>
      <li>
        <span>Research market trends.</span>
        <div class="avatar ms-auto">
          <div class="size-6 rounded-full">
            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-22.png" alt="avatar" />
          </div>
        </div>
      </li>
      <li>
        <span>Organize product launch event.</span>
        <div class="avatar ms-auto">
          <div class="size-6 rounded-full">
            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-23.png" alt="avatar" />
          </div>
        </div>
      </li>
      <li>
        <span>Update company policy documents.</span>
        <div class="avatar ms-auto">
          <div class="size-6 rounded-full">
            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-24.png" alt="avatar" />
          </div>
        </div>
      </li>
      <li>
        <span>Design promotional materials.</span>
        <div class="avatar ms-auto">
          <div class="size-6 rounded-full">
            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-25.png" alt="avatar" />
          </div>
        </div>
      </li>
      <li>
        <span>Prepare investor pitch deck.</span>
        <div class="avatar ms-auto">
          <div class="size-6 rounded-full">
            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-26.png" alt="avatar" />
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div>
    <p class="text-base-content text-base font-semibold">Completed Tasks</p>
    <ul class="divide-base-content/25 divide-y *:flex *:cursor-move *:items-center *:p-3" id="clone-source-2">
      <li>
        <span>Complete quarterly audit.</span>
        <div class="avatar ms-auto">
          <div class="size-6 rounded-full">
            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-29.png" alt="avatar" />
          </div>
        </div>
      </li>
      <li>
        <span>Launch social media campaign.</span>
        <div class="avatar ms-auto">
          <div class="size-6 rounded-full">
            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-8.png" alt="avatar" />
          </div>
        </div>
      </li>
      <li>
        <span>Train new staff members.</span>
        <div class="avatar ms-auto">
          <div class="size-6 rounded-full">
            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-6.png" alt="avatar" />
          </div>
        </div>
      </li>
      <li>
        <span>Upgrade office equipment.</span>
        <div class="avatar ms-auto">
          <div class="size-6 rounded-full">
            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-14.png" alt="avatar" />
          </div>
        </div>
      </li>
      <li>
        <span>Submit project deliverables.</span>
        <div class="avatar ms-auto">
          <div class="size-6 rounded-full">
            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-18.png" alt="avatar" />
          </div>
        </div>
      </li>
      <li>
        <span>Host client appreciation dinner.</span>
        <div class="avatar ms-auto">
          <div class="size-6 rounded-full">
            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-7.png" alt="avatar" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
```

```js

<script>
 window.addEventListener('load', () => {
  ;(function () {
    // Clone example
    (cloneSource1 = document.getElementById('clone-source-1')),
    (cloneSource2 = document.getElementById('clone-source-2'))

    if (cloneSource1) {
      Sortable.create(cloneSource1, {
        animation: 150,
        group: {
          name: 'cloneList',
          pull: 'clone',
          revertClone: true
        },
        dragClass: '!border-0'
      })
    }
    if (cloneSource2) {
      Sortable.create(cloneSource2, {
        animation: 150,
        group: {
          name: 'cloneList',
          pull: 'clone',
          revertClone: true
        },
        dragClass: '!border-0'
      })
    }
  })()
})

</script>


```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="bg-base-100 shadow-base-300/20 rounded-box grid w-full grid-cols-1 gap-5 p-4 shadow-sm sm:grid-cols-2">
  <div>
    <p class="text-base-content text-base font-semibold">Pending Tasks</p>
    <ul class="divide-base-content/25 divide-y *:flex *:cursor-move *:items-center *:p-3" id="disabled-source-1">
      <li>
        <span>Compile Q4 financial statements.</span>
        <span class="icon-[componentx--grip-vertical] text-base-content ms-auto size-4 shrink-0"></span>
      </li>
      <li>
        <span>Review vendor contracts.</span>
        <span class="icon-[componentx--grip-vertical] text-base-content ms-auto size-4 shrink-0"></span>
      </li>
      <li>
        <span>Test new software deployment.</span>
        <span class="icon-[componentx--grip-vertical] text-base-content ms-auto size-4 shrink-0"></span>
      </li>
      <li>
        <span>Create new onboarding materials.</span>
        <span class="icon-[componentx--grip-vertical] text-base-content ms-auto size-4 shrink-0"></span>
      </li>
      <li>
        <span>Analyze customer satisfaction survey.</span>
        <span class="icon-[componentx--grip-vertical] text-base-content ms-auto size-4 shrink-0"></span>
      </li>
    </ul>
  </div>
  <div>
    <p class="text-base-content text-base font-semibold">Completed Tasks</p>
    <ul class="divide-base-content/25 divide-y *:flex *:cursor-move *:items-center *:p-3" id="disabled-source-2">
      <li>
        <span>Launch internal newsletter.</span>
        <span class="icon-[componentx--grip-vertical] text-base-content ms-auto size-4 shrink-0"></span>
      </li>
      <li>
        <span>Finalize project timeline for new product.</span>
        <span class="icon-[componentx--grip-vertical] text-base-content ms-auto size-4 shrink-0"></span>
      </li>
      <li>
        <span>Conduct annual security audit.</span>
        <span class="icon-[componentx--grip-vertical] text-base-content ms-auto size-4 shrink-0"></span>
      </li>
      <li>
        <span>Hold Q3 review meeting with stakeholders.</span>
        <span class="icon-[componentx--grip-vertical] text-base-content ms-auto size-4 shrink-0"></span>
      </li>
      <li>
        <span>Complete brand style guide.</span>
        <span class="icon-[componentx--grip-vertical] text-base-content ms-auto size-4 shrink-0"></span>
      </li>
      <li>
        <span>Update remote work policy.</span>
        <span class="icon-[componentx--grip-vertical] text-base-content ms-auto size-4 shrink-0"></span>
      </li>
    </ul>
  </div>
</div>
```

```js

<script>
 window.addEventListener('load', () => {
  ;(function () {
    // disabled example
    ;(disabledSource1 = document.getElementById('disabled-source-1')),
      (disabledSource2 = document.getElementById('disabled-source-2'))

    if (disabledSource1) {
      Sortable.create(disabledSource1, {
        animation: 150,
        group: {
          name: 'disabledList',
          pull: 'clone',
          put: false // Do not allow items to be put into this list
        },
        sort: false, // To disable sorting: set sort to false
        dragClass: '!border-0'
      })
    }
    if (disabledSource2) {
      Sortable.create(disabledSource2, {
        animation: 150,
        group: 'disabledList',
        dragClass: '!border-0'
      })
    }
  })()
})

</script>


```

I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<ul id="handle-example" class="border-base-content/25 divide-base-content/25 rounded-md max-w-sm divide-y border *:p-3 *:flex *:items-center *:gap-3" >
  <li>
    <span class="icon-[componentx--arrows-move] text-base-content handle me-1.5 size-4 shrink-0 cursor-move"></span>
    <span class="icon-[componentx--bell] size-4 shrink-0"></span>
    Weekly Insights
  </li>
  <li>
    <span class="icon-[componentx--arrows-move] text-base-content handle me-1.5 size-4 shrink-0 cursor-move"></span>
    <span class="icon-[componentx--cloud-download] size-4 shrink-0"></span>
    Resource Center
  </li>
  <li>
    <span class="icon-[componentx--arrows-move] text-base-content handle me-1.5 size-4 shrink-0 cursor-move"></span>
    <span class="icon-[componentx--users] size-4 shrink-0"></span>
    Team Collaboration
  </li>
  <li>
    <span class="icon-[componentx--arrows-move] text-base-content handle me-1.5 size-4 shrink-0 cursor-move"></span>
    <span class="icon-[componentx--bell] size-4 shrink-0"></span>
    Product Updates
  </li>
  <li>
    <span class="icon-[componentx--arrows-move] text-base-content handle me-1.5 size-4 shrink-0 cursor-move"></span>
    <span class="icon-[componentx--users] size-4 shrink-0"></span>
    Community Forum
  </li>
</ul>
```

```js
<script>
 window.addEventListener('load', () => {
  ;(function () {
     // Handle example
    const handleExample = document.querySelector('#handle-example')

    if (handleExample) {
      Sortable.create(handleExample, {
        animation: 150,
        dragClass: '!border-0',
        handle: '.handle' // handle's class
      })
    }
  })()
})

</script>


```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div id="nested-sortable" class="w-full">
  <div class="nested-sortable-item space-y-1">
    <div class="nested-1 space-y-1">
      <div class="p-3 flex items-center gap-x-3 cursor-move bg-base-100 border border-base-content/25 rounded-lg font-medium text-sm text-base-content/80">
        Item 1.1
        <span class="icon-[componentx--grip-vertical] text-base-content ms-auto size-4 shrink-0"></span>
      </div>
      <div class="ps-5 space-y-1 nested-sortable-item">
        <div class="nested-2">
          <div class="p-3 flex items-center gap-x-3 cursor-move bg-base-200/60 border border-base-content/25 rounded-lg font-medium text-sm text-base-content/80">
            Item 2.1
            <span class="icon-[componentx--grip-vertical] text-base-content ms-auto size-4 shrink-0"></span>
          </div>
        </div>
        <div class="nested-2 space-y-1">
          <div class="p-3 flex items-center gap-x-3 cursor-move bg-base-200/60 border border-base-content/25 rounded-lg font-medium text-sm text-base-content/80">
            Item 2.2
            <span class="icon-[componentx--grip-vertical] text-base-content ms-auto size-4 shrink-0"></span>
          </div>
          <div class="ps-5 space-y-1 nested-sortable-item">
            <div class="nested-3">
              <div class="p-3 flex items-center gap-x-3 cursor-move bg-base-200 border border-base-content/25 rounded-lg font-medium text-sm text-base-content/80">
                Item 3.1
                <span class="icon-[componentx--grip-vertical] text-base-content ms-auto size-4 shrink-0"></span>
              </div>
            </div>
            <div class="nested-3">
              <div class="p-3 flex items-center gap-x-3 cursor-move bg-base-200 border border-base-content/25 rounded-lg font-medium text-sm text-base-content/80">
                Item 3.2
                <span class="icon-[componentx--grip-vertical] text-base-content ms-auto size-4 shrink-0"></span>
              </div>
            </div>
            <div class="nested-3">
              <div class="p-3 flex items-center gap-x-3 cursor-move bg-base-200 border border-base-content/25 rounded-lg font-medium text-sm text-base-content/80">
                Item 3.3
                <span class="icon-[componentx--grip-vertical] text-base-content ms-auto size-4 shrink-0"></span>
              </div>
            </div>
            <div class="nested-3">
              <div class="p-3 flex items-center gap-x-3 cursor-move bg-base-200 border border-base-content/25 rounded-lg font-medium text-sm text-base-content/80">
                Item 3.4
                <span class="icon-[componentx--grip-vertical] text-base-content ms-auto size-4 shrink-0"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="nested-2">
          <div class="p-3 flex items-center gap-x-3 cursor-move bg-base-200/60 border border-base-content/25 rounded-lg font-medium text-sm text-base-content/80">
            Item 2.3
            <span class="icon-[componentx--grip-vertical] text-base-content ms-auto size-4 shrink-0"></span>
          </div>
        </div>
        <div class="nested-2">
          <div class="p-3 flex items-center gap-x-3 cursor-move bg-base-200/60 border border-base-content/25 rounded-lg font-medium text-sm text-base-content/80">
            Item 2.4
            <span class="icon-[componentx--grip-vertical] text-base-content ms-auto size-4 shrink-0"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="nested-1">
      <div class="p-3 flex items-center gap-x-3 cursor-move bg-base-100 border border-base-content/25 rounded-lg font-medium text-sm text-base-content/80">
        Item 1.2
        <span class="icon-[componentx--grip-vertical] text-base-content ms-auto size-4 shrink-0"></span>
      </div>
    </div>
    <div class="nested-1">
      <div class="p-3 flex items-center gap-x-3 cursor-move bg-base-100 border border-base-content/25 rounded-lg font-medium text-sm text-base-content/80">
        Item 1.3
        <span class="icon-[componentx--grip-vertical] text-base-content ms-auto size-4 shrink-0"></span>
      </div>
    </div>
    <div class="nested-1 space-y-1">
      <div class="p-3 flex items-center gap-x-3 cursor-move bg-base-100 border border-base-content/25 rounded-lg font-medium text-sm text-base-content/80">
        Item 1.4
        <span class="icon-[componentx--grip-vertical] text-base-content ms-auto size-4 shrink-0"></span>
      </div>
      <div class="ps-5 space-y-1 nested-sortable-item">
        <div class="nested-2">
          <div class="p-3 flex items-center gap-x-3 cursor-move bg-base-200/60 border border-base-content/25 rounded-lg font-medium text-sm text-base-content/80">
            Item 2.1
            <span class="icon-[componentx--grip-vertical] text-base-content ms-auto size-4 shrink-0"></span>
          </div>
        </div>
        <div class="nested-2">
          <div class="p-3 flex items-center gap-x-3 cursor-move bg-base-200/60 border border-base-content/25 rounded-lg font-medium text-sm text-base-content/80">
            Item 2.2
            <span class="icon-[componentx--grip-vertical] text-base-content ms-auto size-4 shrink-0"></span>
          </div>
        </div>
        <div class="nested-2">
          <div class="p-3 flex items-center gap-x-3 cursor-move bg-base-200/60 border border-base-content/25 rounded-lg font-medium text-sm text-base-content/80">
            Item 2.3
            <span class="icon-[componentx--grip-vertical] text-base-content ms-auto size-4 shrink-0"></span>
          </div>
        </div>
        <div class="nested-2">
          <div class="p-3 flex items-center gap-x-3 cursor-move bg-base-200/60 border border-base-content/25 rounded-lg font-medium text-sm text-base-content/80">
            Item 2.4
            <span class="icon-[componentx--grip-vertical] text-base-content ms-auto size-4 shrink-0"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="nested-1">
      <div class="p-3 flex items-center gap-x-3 cursor-move bg-base-100 border border-base-content/25 rounded-lg font-medium text-sm text-base-content/80">
        Item 1.5
        <span class="icon-[componentx--grip-vertical] text-base-content ms-auto size-4 shrink-0"></span>
      </div>
    </div>
  </div>
</div>
```

```js

<script>
 window.addEventListener('load', () => {
  ;(function () {
     // Nested example
    const nestedSortables = document.querySelectorAll('#nested-sortable .nested-sortable-item')

    for (var i = 0; i < nestedSortables.length; i++) {
      Sortable.create(nestedSortables[i], {
        group: 'nested',
        animation: 150,
        fallbackOnBody: true,
        swapThreshold: 0.65
      })
    }
  })()
})

</script>


```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<ul id="swap-example" class="border-base-content/25 divide-base-content/25 rounded-md max-w-sm divide-y border *:cursor-move *:p-3 *:flex *:items-center *:gap-3" >
  <li>
    <span class="icon-[componentx--bell] size-4 shrink-0"></span>
    Weekly Insights
    <span class="icon-[componentx--grip-vertical] text-base-content ms-auto size-4 shrink-0"></span>
  </li>
  <li>
    <span class="icon-[componentx--cloud-download] size-4 shrink-0"></span>
    Resource Center
    <span class="icon-[componentx--grip-vertical] text-base-content ms-auto size-4 shrink-0"></span>
  </li>
  <li>
    <span class="icon-[componentx--users] size-4 shrink-0"></span>
    Team Collaboration
    <span class="icon-[componentx--grip-vertical] text-base-content ms-auto size-4 shrink-0"></span>
  </li>
  <li>
    <span class="icon-[componentx--bell] size-4 shrink-0"></span>
    Product Updates
    <span class="icon-[componentx--grip-vertical] text-base-content ms-auto size-4 shrink-0"></span>
  </li>
  <li>
    <span class="icon-[componentx--users] size-4 shrink-0"></span>
    Community Forum
    <span class="icon-[componentx--grip-vertical] text-base-content ms-auto size-4 shrink-0"></span>
  </li>
</ul>
```

```js
<script>
 window.addEventListener('load', () => {
  ;(function () {
    // Swap example
    const swapExample = document.querySelector('#swap-example')

    if (swapExample) {
      Sortable.create(swapExample, {
        animation: 150,
        swap: true, // Enable swap plugin
        swapClass: '!text-bg-soft-primary', // The class applied to the hovered swap item
        dragClass: '!border-0'
      })
    }
  })()
})

</script>


```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
