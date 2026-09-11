---
name: "File Upload"
library: "ComponentX"
id: "file-upload-2"
type: "form"
quality: "standard"
tags: ["animated", "button", "data", "form", "image", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · File Upload

> **Type:** `form` · **Quality:** `standard` · **ID:** `file-upload-2`
> **Path:** `components/form/file-upload-2.md`

**File Upload** is a premium, production-ready component from the **ComponentX** library — engineered for form interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `animated`, `button`, `data` workflows.
- **Pattern coverage** — includes `form`, `image`, `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **File Upload** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
  data-file-upload='{
    "url": "/upload",
    "extensions": {
      "csv": {
        "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4\"/><path d=\"m5 12-3 3 3 3\"/><path d=\"m9 18 3-3-3-3\"/></svg>",
        "class": "shrink-0 size-5"
      }
    }
  }' >

  <div class="bg-base-200/60 rounded-box flex flex-col justify-center border-2 border-base-content/20 border-dashed"  >
    <div class="text-center cursor-pointer p-12" data-file-upload-trigger="">
      <p class="text-base-content/50 mb-3 text-sm">Choose a file with a size up to 2MB.</p>
      <button class="btn btn-soft btn-sm btn-primary text-nowrap"> <span class="icon-[componentx--file-upload] size-4.5 shrink-0"></span> Drag & Drop to Upload </button>
      <p class="text-base-content/50 my-2 text-xs">or</p>
      <p class="link link-animated link-primary font-medium text-sm">Browse</p>
    </div>
    <div class="mx-12 mb-8 space-y-2 empty:m-0" data-file-upload-previews=""></div>
  </div>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div
  id="file-upload-limit"
  data-file-upload='{
  "url": "/upload",
  "maxFilesize": 1,
  "extensions": {
    "csv": {
      "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4\"/><path d=\"m5 12-3 3 3 3\"/><path d=\"m9 18 3-3-3-3\"/></svg>",
      "class": "shrink-0 size-5"
    }
  }
}' >
  <template data-file-upload-preview="">
    <div class="rounded-box bg-base-100 shadow-base-300/20 p-3 shadow-lg">
      <div class="mb-1 flex items-center justify-between">
        <div class="flex items-center gap-x-3">
          <span class="text-base-content/80 border-base-content/20 flex size-8 items-center justify-center rounded-lg border p-0.5" data-file-upload-file-icon="" >
            <img class="hidden rounded-md" data-dz-thumbnail="" />
          </span>
          <div>
            <p class="text-base-content text-sm font-medium">
              <span class="inline-block truncate align-bottom" data-file-upload-file-name=""></span>
              .
              <span data-file-upload-file-ext=""></span>
            </p>
            <p class="text-base-content/50 text-xs" data-file-upload-file-size="" data-file-upload-file-success=""></p>
            <p class="text-error text-xs" style="display: none" data-file-upload-file-error="">
              File exceeds size limit.
            </p>
          </div>
        </div>
        <div class="flex items-center">
          <div class="tooltip [--placement:top]" style="display: none" data-file-upload-file-error="">
            <button type="button" class="tooltip-toggle btn btn-sm btn-circle btn-text btn-error">
              <span class="icon-[componentx--alert-circle] size-4 shrink-0"></span>
            </button>
            <span class="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible" role="tooltip">
              <span class="tooltip-body">Please try to upload a file smaller than 1MB.</span>
            </span>
          </div>
          <button type="button" class="btn btn-sm btn-circle btn-text" data-file-upload-reload="">
            <span class="icon-[componentx--refresh] size-4 shrink-0"></span>
          </button>
          <button type="button" class="btn btn-sm btn-circle btn-text" data-file-upload-remove="">
            <span class="icon-[componentx--trash] size-4 shrink-0"></span>
          </button>
        </div>
      </div>
      <div class="flex items-center gap-x-3 whitespace-nowrap">
        <div class="progress h-2" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" data-file-upload-progress-bar="" >
          <div class="progress-bar progress-primary file-upload-complete:progress-success transition-all duration-500" style="width: 0" data-file-upload-progress-bar-pane="" ></div>
        </div>
        <span class="text-base-content mb-0.5 text-sm">
          <span data-file-upload-progress-bar-value="">0</span>%
        </span>
      </div>
    </div>
  </template>

  <div class="bg-base-200/60 rounded-box flex flex-col justify-center border-2 border-base-content/20 border-dashed"  >
    <div class="text-center cursor-pointer p-12" data-file-upload-trigger="">
      <p class="text-base-content/50 mb-3 text-sm">Choose a file no larger than 1MB.</p>
      <button class="btn btn-soft btn-sm btn-primary text-nowrap"> <span class="icon-[componentx--file-upload] size-4.5 shrink-0"></span> Drag & Drop to Upload </button>
      <p class="text-base-content/50 my-2 text-xs">or</p>
      <p class="link link-animated link-primary font-medium text-sm">Browse</p>
    </div>
    <div class="mx-12 mb-8 space-y-2 empty:m-0" data-file-upload-previews=""></div>
  </div>
</div>
```

```js

<script>
  window.addEventListener('load', function () {
    ;(function () {
      const { element } = HSFileUpload.getInstance('#file-upload-limit', true)

      element.dropzone.on('error', (file, response) => {
        if (file.size > element.concatOptions.maxFilesize * 1024 * 1024) {
          const filePreview = file.previewElement

          const successEls = filePreview.querySelectorAll('[data-file-upload-file-success]')
          const errorEls = filePreview.querySelectorAll('[data-file-upload-file-error]')
          if (successEls) successEls.forEach(el => (el.style.display = 'none'))
          errorEls.forEach(el => (el.style.display = ''))
          HSStaticMethods.autoInit(['tooltip'])
        }
      })
    })()
  })
</script>


```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div
  data-file-upload='{
  "url": "/upload",
  "acceptedFiles": "image/*",
  "autoHideTrigger": false,
  "extensions": {
    "csv": {
      "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4\"/><path d=\"m5 12-3 3 3 3\"/><path d=\"m9 18 3-3-3-3\"/></svg>",
      "class": "shrink-0 size-5"
    }
  }
}' >
  <template data-file-upload-preview="">
    <div class="rounded-box bg-base-100 shadow-base-300/20 relative mt-2 p-2 shadow-lg">
      <img class="mb-2 w-full rounded-lg object-cover" data-dz-thumbnail="" />
      <div class="mb-1 flex items-center justify-between gap-x-3 whitespace-nowrap">
        <div class="w-10">
          <span class="text-base-content mb-0.5 text-sm">
            <span data-file-upload-progress-bar-value="">0</span>%</span>
        </div>
        <div class="flex items-center gap-x-2">
          <button type="button" class="btn btn-sm btn-circle btn-text" data-file-upload-remove="">
            <span class="icon-[componentx--trash] size-4 shrink-0"></span>
          </button>
        </div>
      </div>
      <div class="progress h-2" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" data-file-upload-progress-bar="" >
        <div class="progress-bar progress-primary file-upload-complete:progress-success transition-all duration-500" style="width: 0" data-file-upload-progress-bar-pane="" ></div>
      </div>
    </div>
  </template>

  <div class="bg-base-200/60 rounded-box flex flex-col justify-center border-2 border-base-content/20 border-dashed"  >
    <div class="text-center cursor-pointer p-12" data-file-upload-trigger="">
      <p class="text-base-content/50 mb-3 text-sm">Choose a file with a size up to 2MB.</p>
      <button class="btn btn-soft btn-sm btn-primary text-nowrap"> <span class="icon-[componentx--file-upload] size-4.5 shrink-0"></span> Drag & Drop to Upload </button>
      <p class="text-base-content/50 my-2 text-xs">or</p>
      <p class="link link-animated link-primary font-medium text-sm">Browse</p>
    </div>
    <div class="mx-12 mb-8 empty:m-0 grid grid-cols-4 gap-2 empty:gap-0 max-sm:grid-cols-2" data-file-upload-previews=""></div>
  </div>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div
  data-file-upload='{
  "url": "/upload",
  "acceptedFiles": "image/*",
  "maxFiles": 1,
  "singleton": true
}' >
  <template data-file-upload-preview="">
    <div class="size-20">
      <img class="w-full rounded-full object-contain" data-dz-thumbnail="" />
    </div>
  </template>

  <div class="flex flex-wrap items-center gap-3 sm:gap-5">
    <div class="group" data-file-upload-previews="" data-file-upload-pseudo-trigger="">
      <span class="border-base-content/30 text-base-content/50 flex size-17 shrink-0 cursor-pointer items-center justify-center rounded-box border-2 border-dotted hover:bg-base-200/60 group-has-[div]:hidden" >
        <span class="icon-[componentx--user-square] size-9 shrink-0"></span>
      </span>
    </div>
    <div class="grow">
      <div class="flex items-center gap-x-2">
        <button type="button" class="btn btn-primary" data-file-upload-trigger="">
          <span class="icon-[componentx--upload] size-4 shrink-0"></span>
          Upload photo
        </button>
        <button type="button" class="btn btn-outline btn-error" data-file-upload-clear="">Delete</button>
      </div>
    </div>
  </div>
</div>
```





I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div
  data-file-upload='{
  "url": "/upload",
  "maxFiles": 1,
  "singleton": true
}'
>
  <template data-file-upload-preview="">
    <div class="flex w-full items-center">
      <span class="grow-0 overflow-hidden truncate" data-file-upload-file-name=""></span>
      <span class="grow-0">.</span>
      <span class="grow-0" data-file-upload-file-ext=""></span>
    </div>
  </template>

  <button type="button" class="relative flex w-full overflow-hidden rounded-lg border border-base-content/20 text-sm focus:z-10 focus:ring-1 focus:border-primary focus:ring-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50" >
    <span class="h-full text-nowrap bg-primary text-primary-content rounded-s-lg px-4 py-3">Choose File</span>
    <span class="group flex h-full grow overflow-hidden px-4 py-3 text-base-content" data-file-upload-previews="">
      <span class="group-has-[div]:hidden">No Chosen File</span>
    </span>
    <span class="absolute left-0 top-0 h-full w-full" data-file-upload-trigger=""></span>
  </button>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div
id="file-upload-to-destroy"
  data-file-upload='{
    "url": "/upload",
    "extensions": {
      "csv": {
        "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4\"/><path d=\"m5 12-3 3 3 3\"/><path d=\"m9 18 3-3-3-3\"/></svg>",
        "class": "shrink-0 size-5"
      }
    }
  }' >

  <div class="bg-base-200/60 rounded-box flex flex-col justify-center border-2 border-base-content/20 border-dashed"  >
    <div class="text-center cursor-pointer p-12" data-file-upload-trigger="">
      <p class="text-base-content/50 mb-3 text-sm">Choose a file with a size up to 2MB.</p>
      <button class="btn btn-soft btn-sm btn-primary text-nowrap"> <span class="icon-[componentx--file-upload] size-4.5 shrink-0"></span> Drag & Drop to Upload </button>
      <p class="text-base-content/50 my-2 text-xs">or</p>
      <p class="link link-animated link-primary font-medium text-sm">Browse</p>
    </div>
    <div class="mx-12 mb-8 space-y-2 empty:m-0" data-file-upload-previews=""></div>
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
    const fileUpload = document.querySelector('#file-upload-to-destroy')
    const destroyBtn = document.querySelector('#destroy-btn')
    const reinitBtn = document.querySelector('#reinit-btn')

    // Destroy usage
    destroyBtn.addEventListener('click', () => {
      const { element } = HSFileUpload.getInstance(fileUpload, true)

      element.destroy()

      destroyBtn.setAttribute('disabled', 'disabled')
      reinitBtn.removeAttribute('disabled')
    })

    // Reinit usage
    reinitBtn.addEventListener('click', () => {
      HSFileUpload.autoInit()

      reinitBtn.setAttribute('disabled', 'disabled')
      destroyBtn.removeAttribute('disabled')
    })
  })
</script>

```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
