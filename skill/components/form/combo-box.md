---
name: "Combo Box"
library: "ComponentX"
id: "combo-box"
type: "form"
quality: "standard"
tags: ["component", "data", "input", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Combo Box

> **Type:** `form` · **Quality:** `standard` · **ID:** `combo-box`
> **Path:** `components/form/combo-box.md`

**Combo Box** is a premium, production-ready component from the **ComponentX** library — engineered for form interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `data`, `input`, `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Combo Box** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
<div class="relative max-w-sm" data-combo-box="">
  <div class="relative">
    <input class="input" type="text" value="India" role="combobox" aria-expanded="false" data-combo-box-input="" aria-label="Default combobox" />
    <span class="icon-[componentx--caret-up-down] text-base-content absolute end-3 top-1/2 size-4 shrink-0 -translate-y-1/2" data-combo-box-toggle="" ></span>
  </div>
  <div class="bg-base-100 rounded-box shadow-base-300/20 absolute z-50 max-h-44 w-full space-y-0.5 overflow-y-auto p-2 shadow-lg" style="display: none" data-combo-box-output="" >
    <div class="dropdown-item combo-box-selected:dropdown-active" tabindex="0" data-combo-box-output-item="">
      <div class="flex items-center justify-between">
        <span data-combo-box-search-text="Venezuela" data-combo-box-value="">Venezuela</span>
        <span class="icon-[componentx--check] text-primary combo-box-selected:block hidden size-4 shrink-0"></span>
      </div>
    </div>
    <div class="dropdown-item combo-box-selected:dropdown-active" tabindex="1" data-combo-box-output-item="">
      <div class="flex items-center justify-between">
        <span data-combo-box-search-text="Papua New Guinea" data-combo-box-value="">Papua New Guinea</span>
        <span class="icon-[componentx--check] text-primary combo-box-selected:block hidden size-4 shrink-0"></span>
      </div>
    </div>
    <div class="dropdown-item combo-box-selected:dropdown-active" tabindex="2" data-combo-box-output-item="">
      <div class="flex items-center justify-between">
        <span data-combo-box-search-text="South Africa " data-combo-box-value="">South Africa</span>
        <span class="icon-[componentx--check] text-primary combo-box-selected:block hidden size-4 shrink-0"></span>
      </div>
    </div>
    <div class="dropdown-item combo-box-selected:dropdown-active" tabindex="3" data-combo-box-output-item="">
      <div class="flex items-center justify-between">
        <span data-combo-box-search-text="Honduras" data-combo-box-value="">Honduras</span>
        <span class="icon-[componentx--check] text-primary combo-box-selected:block hidden size-4 shrink-0"></span>
      </div>
    </div>
    <div class="dropdown-item combo-box-selected:dropdown-active" tabindex="4" data-combo-box-output-item="">
      <div class="flex items-center justify-between">
        <span data-combo-box-search-text="India" data-combo-box-value="">India</span>
        <span class="icon-[componentx--check] text-primary combo-box-selected:block hidden size-4 shrink-0"></span>
      </div>
    </div>
    <div class="dropdown-item combo-box-selected:dropdown-active" tabindex="5" data-combo-box-output-item="">
      <div class="flex items-center justify-between">
        <span data-combo-box-search-text="El Salvador" data-combo-box-value="">El Salvador</span>
        <span class="icon-[componentx--check] text-primary combo-box-selected:block hidden size-4 shrink-0"></span>
      </div>
    </div>
  </div>
</div>
```

<div class="relative max-w-sm"
  data-combo-box='{
    "apiUrl": "https://www.freetestapi.com/api/v1/countries",
    "outputItemTemplate": "<div class=\"dropdown-item combo-box-selected:dropdown-active\" data-combo-box-output-item><div class=\"flex justify-between items-center w-full\"><div data-combo-box-output-item-field=\"name\" data-combo-box-search-text data-combo-box-value></div><span class=\"icon-[componentx--check] text-primary combo-box-selected:block hidden size-4 shrink-0\"></span></div></div>"
  }' >
  <div class="relative">
    <input class="input" type="text" value="India" role="combobox" aria-expanded="false" data-combo-box-input="" aria-label="Json-based combobox" />
    <span class="icon-[componentx--caret-up-down] text-base-content absolute end-3 top-1/2 size-4 shrink-0 -translate-y-1/2" data-combo-box-toggle="" ></span>
  </div>
  <div class="bg-base-100 rounded-box shadow-base-300/20 absolute z-50 max-h-44 w-full space-y-0.5 overflow-y-auto p-2 shadow-lg" style="display: none" data-combo-box-output="" ></div>
</div>


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="relative max-w-sm"
  data-combo-box='{
    "apiUrl": "https://restcountries.com/v3.1",
    "apiSearchPath": "name",
    "apiSearchDefaultPath": "all",
    "outputItemTemplate": "<div class=\"dropdown-item combo-box-selected:dropdown-active\" data-combo-box-output-item><div class=\"flex justify-between items-center w-full\"><div><div class=\"hidden\" data-combo-box-output-item-field=\"ccn3\"></div><div data-combo-box-output-item-field=\"name.common\" data-combo-box-search-text data-combo-box-value></div></div><span class=\"icon-[componentx--check] text-primary combo-box-selected:block hidden size-4 shrink-0\"></span></div></div>"
  }' >
  <div class="relative">
    <input class="input" type="text" value="India" role="combobox" aria-expanded="false" data-combo-box-input="" aria-label="based on API pathes combobox" />
    <span class="icon-[componentx--caret-up-down] text-base-content absolute end-3 top-1/2 size-4 shrink-0 -translate-y-1/2" data-combo-box-toggle="" ></span>
  </div>
  <div class="bg-base-100 rounded-box shadow-base-300/20 absolute z-50 max-h-44 w-full space-y-0.5 overflow-y-auto p-2 shadow-lg" style="display: none" data-combo-box-output="" ></div>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="relative max-w-sm"
  data-combo-box='{
  "apiUrl": "https://www.freetestapi.com/api/v1/countries",
  "apiQuery": "limit=7",
  "apiSearchQuery": "search",
  "outputEmptyTemplate": "<div class=\"dropdown-item\">No countries found...</div>",
  "outputItemTemplate": "<div class=\"dropdown-item combo-box-selected:dropdown-active\" data-combo-box-output-item><div class=\"flex justify-between items-center w-full\"><div data-combo-box-output-item-field=\"name\" data-combo-box-search-text data-combo-box-value></div><span class=\"icon-[componentx--check] text-primary combo-box-selected:block hidden size-4 shrink-0\"></span></div></div>"
}' >
  <div class="relative">
    <input class="input" type="text" value="India" role="combobox" aria-expanded="false" data-combo-box-input="" aria-label="Parameters in combobox" />
    <span class="icon-[componentx--caret-up-down] text-base-content absolute end-3 top-1/2 size-4 shrink-0 -translate-y-1/2" data-combo-box-toggle="" ></span>
  </div>
  <div class="bg-base-100 rounded-box shadow-base-300/20 absolute z-50 max-h-44 w-full space-y-0.5 overflow-y-auto p-2 shadow-lg" style="display: none;" data-combo-box-output="" ></div>
</div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="relative max-w-sm"
  data-combo-box='{
  "apiUrl": "https://www.freetestapi.com/api/v1/countries",
  "apiQuery": "limit=15",
  "minSearchLength": 2,
  "apiSearchQuery": "search",
  "outputEmptyTemplate": "<div class=\"dropdown-item\">No countries found...</div>",
  "outputItemTemplate": "<div class=\"dropdown-item combo-box-selected:dropdown-active\" data-combo-box-output-item><div class=\"flex justify-between items-center w-full\"><div data-combo-box-output-item-field=\"name\" data-combo-box-search-text data-combo-box-value></div><span class=\"icon-[componentx--check] text-primary combo-box-selected:block hidden size-4 shrink-0\"></span></div></div>"
}' >
  <div class="relative">
    <input class="input" type="text" value="India" role="combobox" aria-expanded="false" data-combo-box-input="" aria-label="Parameters in combobox" />
    <span class="icon-[componentx--caret-up-down] text-base-content absolute end-3 top-1/2 size-4 shrink-0 -translate-y-1/2" data-combo-box-toggle="" ></span>
  </div>
  <div class="bg-base-100 rounded-box shadow-base-300/20 absolute z-50 max-h-44 w-full space-y-0.5 overflow-y-auto p-2 shadow-lg" style="display: none;" data-combo-box-output="" ></div>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="relative max-w-sm"
  data-combo-box='{
  "apiUrl": "https://www.freetestapi.com/api/v1/countries",
  "isOpenOnFocus": true,
  "outputEmptyTemplate": "<div class=\"dropdown-item\">No countries found...</div>",
  "outputItemTemplate": "<div class=\"dropdown-item combo-box-selected:dropdown-active\" data-combo-box-output-item> <div class=\"flex justify-between items-center w-full\"> <div data-combo-box-output-item-field=\"name\" data-combo-box-search-text data-combo-box-value></div><span class=\"icon-[componentx--check] text-primary combo-box-selected:block hidden size-4 shrink-0\"></span></div></div>" 
  }' >
  <div class="relative">
    <input class="input" type="text" value="India" role="combobox" aria-expanded="false" data-combo-box-input="" aria-label="open on focus combobox" />
    <span class="icon-[componentx--caret-up-down] text-base-content absolute end-3 top-1/2 size-4 shrink-0 -translate-y-1/2" data-combo-box-toggle="" ></span>
  </div>
  <div class="bg-base-100 rounded-box shadow-base-300/20 absolute z-50 max-h-44 w-full space-y-0.5 overflow-y-auto p-2 shadow-lg" style="display: none" data-combo-box-output="" ></div>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="relative max-w-sm" data-combo-box="">
  <div class="relative">
    <input class="input" type="text" role="combobox" aria-expanded="false" value="" data-combo-box-input="" aria-label="Combobox with close button" />
    <div class="combo-box-active:flex absolute inset-y-0 end-8 hidden items-center">
      <button type="button" class="btn btn-sm btn-circle btn-text btn-primary" aria-label="Close" data-combo-box-close="" >
        <span class="sr-only">Close</span>
        <span class="icon-[componentx--xbox-x] size-4 shrink-0"></span>
      </button>
    </div>
    <span class="icon-[componentx--caret-up-down] text-base-content absolute end-3 top-1/2 size-4 shrink-0 -translate-y-1/2" data-combo-box-toggle="" ></span>
  </div>
  <div class="bg-base-100 rounded-box shadow-base-300/20 absolute z-50 max-h-44 w-full space-y-0.5 overflow-y-auto p-2 shadow-lg" style="display: none" data-combo-box-output="" >
    <div class="dropdown-item combo-box-selected:dropdown-active" tabindex="0" data-combo-box-output-item="">
      <div class="flex items-center justify-between">
        <span data-combo-box-search-text="Venezuela" data-combo-box-value="">Venezuela</span>
        <span class="icon-[componentx--check] text-primary combo-box-selected:block hidden size-4 shrink-0"></span>
      </div>
    </div>
    <div class="dropdown-item combo-box-selected:dropdown-active" tabindex="1" data-combo-box-output-item="">
      <div class="flex items-center justify-between">
        <span data-combo-box-search-text="Papua New Guinea" data-combo-box-value="">Papua New Guinea</span>
        <span class="icon-[componentx--check] text-primary combo-box-selected:block hidden size-4 shrink-0"></span>
      </div>
    </div>
    <div class="dropdown-item combo-box-selected:dropdown-active" tabindex="2" data-combo-box-output-item="">
      <div class="flex items-center justify-between">
        <span data-combo-box-search-text="South Africa " data-combo-box-value="">South Africa</span>
        <span class="icon-[componentx--check] text-primary combo-box-selected:block hidden size-4 shrink-0"></span>
      </div>
    </div>
    <div class="dropdown-item combo-box-selected:dropdown-active" tabindex="3" data-combo-box-output-item="">
      <div class="flex items-center justify-between">
        <span data-combo-box-search-text="Honduras" data-combo-box-value="">Honduras</span>
        <span class="icon-[componentx--check] text-primary combo-box-selected:block hidden size-4 shrink-0"></span>
      </div>
    </div>
    <div class="dropdown-item combo-box-selected:dropdown-active" tabindex="4" data-combo-box-output-item="">
      <div class="flex items-center justify-between">
        <span data-combo-box-search-text="India" data-combo-box-value="">India</span>
        <span class="icon-[componentx--check] text-primary combo-box-selected:block hidden size-4 shrink-0"></span>
      </div>
    </div>
    <div class="dropdown-item combo-box-selected:dropdown-active" tabindex="5" data-combo-box-output-item="">
      <div class="flex items-center justify-between">
        <span data-combo-box-search-text="El Salvador" data-combo-box-value="">El Salvador</span>
        <span class="icon-[componentx--check] text-primary combo-box-selected:block hidden size-4 shrink-0"></span>
      </div>
    </div>
  </div>
</div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="max-w-sm">
  <div class="relative"
    data-combo-box='{
      "groupingType": "default",
      "preventSelection": true,
      "isOpenOnFocus": true,
      "groupingTitleTemplate": "<div class=\"block text-xs text-base-content/50 m-3 mb-1\"></div>"
    }' >
    <div class="relative">
      <input class="input ps-8" type="text" placeholder="Search for an action" role="combobox" aria-expanded="false" value="" data-combo-box-input="" />
      <span class="icon-[componentx--search] text-base-content absolute start-3 top-1/2 size-4 shrink-0 -translate-y-1/2" ></span>
    </div>
    <div class="bg-base-100 rounded-box p-2 shadow-base-300/20 shadow-lg" style="display: none" data-combo-box-output="" >
      <div data-combo-box-output-items-wrapper="" class="space-y-0.5">
        <!-- Group: Recent Actions -->
        <div data-combo-box-output-item='{"group": {"name": "recent", "title": "Recent Actions"}}' tabindex="0">
          <a class="dropdown-item combo-box-selected:dropdown-active" href="#">
            <span class="icon-[componentx--writing] text-base-content/80 size-5 shrink-0"></span>
            <span class="text-base-content" data-combo-box-search-text="Write a document" data-combo-box-value="" >
              Write a document
            </span>
            <span class="text-base-content/50 ms-auto hidden text-xs sm:inline" data-combo-box-search-text="Google Docs" data-combo-box-value="" >
              Google Docs
            </span>
          </a>
        </div>
        <div data-combo-box-output-item='{"group": {"name": "recent", "title": "Recent Actions"}}' tabindex="1">
          <a class="dropdown-item combo-box-selected:dropdown-active" href="#">
            <span class="icon-[componentx--calendar] text-base-content/80 size-5 shrink-0"></span>
            <span class="text-base-content" data-combo-box-search-text="Schedule a meeting" data-combo-box-value="" >
              Schedule a meeting
            </span>
            <span class="text-base-content/50 ms-auto hidden text-xs sm:inline" data-combo-box-search-text="Google Calendar" data-combo-box-value="" >
              Google Calendar
            </span>
          </a>
        </div>
        <div data-combo-box-output-item='{"group": {"name": "recent", "title": "Recent Actions"}}' tabindex="2">
          <a class="dropdown-item combo-box-selected:dropdown-active" href="#">
            <span class="icon-[componentx--presentation] text-base-content/80 size-5 shrink-0"></span>
            <span class="text-base-content" data-combo-box-search-text="Create a presentation" data-combo-box-value="" >
              Create a presentation
            </span>
            <span class="text-base-content/50 ms-auto hidden text-xs sm:inline" data-combo-box-search-text="Microsoft PowerPoint" data-combo-box-value="" >
              PowerPoint
            </span>
          </a>
        </div>
        <!-- Group: People -->
        <div data-combo-box-output-item='{"group": {"name": "people", "title": "People"}}' tabindex="4">
          <a class="dropdown-item combo-box-selected:dropdown-active" href="#">
            <img class="size-6 shrink-0 rounded-full" src="https://cdn.flyonui.com/fy-assets/avatar/avatar-2.png" alt="Image Description" />
            <span class="text-base-content" data-combo-box-search-text="Alice Johnson" data-combo-box-value="" >
              Alice Johnson
            </span>
            <span class="ms-auto text-xs text-teal-600" data-combo-box-search-text="Online" data-combo-box-value="">
              Online
            </span>
          </a>
        </div>
        <div data-combo-box-output-item='{"group": {"name": "people", "title": "People"}}' tabindex="5">
          <a class="dropdown-item combo-box-selected:dropdown-active" href="#">
            <img class="size-6 shrink-0 rounded-full" src="https://cdn.flyonui.com/fy-assets/avatar/avatar-11.png" alt="Image Description" />
            <span class="text-base-content" data-combo-box-search-text="David Kim" data-combo-box-value="">
              David Kim
            </span>
            <span class="text-base-content/50 ms-auto text-xs" data-combo-box-search-text="Offline" data-combo-box-value="" >
              Offline
            </span>
          </a>
        </div>
        <div data-combo-box-output-item='{"group": {"name": "people", "title": "People"}}' tabindex="6">
          <a class="dropdown-item combo-box-selected:dropdown-active" href="#">
            <img class="size-6 shrink-0 rounded-full" src="https://cdn.flyonui.com/fy-assets/avatar/avatar-12.png" alt="Image Description" />
            <span class="text-base-content" data-combo-box-search-text="Rosa Martinez" data-combo-box-value="" >
              Rosa Martinez
            </span>
            <span class="text-base-content/50 ms-auto text-xs" data-combo-box-search-text="Offline" data-combo-box-value="" >
              Offline
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<h5 class="text-base-content text-base"> Press <kbd class="kbd kbd-sm">Shift</kbd> + <kbd class="kbd kbd-sm">:</kbd> for SearchBox. </h5>

<!-- SearchBox Trigger -->

<button type="button" class="hidden" aria-haspopup="dialog" aria-expanded="false" aria-controls="html-modal-combo-box" data-overlay="#html-modal-combo-box" ></button>

<div id="html-modal-combo-box" class="overlay modal overlay-open:opacity-100 overlay-open:duration-300 hidden" role="dialog" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="relative"
        data-combo-box='{
          "preventVisibility": true,
          "groupingType": "default",
          "preventSelection": true,
          "isOpenOnFocus": true,
          "groupingTitleTemplate": "<div class=\"block text-xs text-base-content/50 m-3 mb-1\"></div>"
        }' >
        <div class="modal-header block">
          <div class="relative">
            <input class="input ps-8" type="text" placeholder="Search or type a command" role="combobox" aria-expanded="false" value="" autofocus="" data-combo-box-input="" />
            <span class="icon-[componentx--search] text-base-content absolute start-3 top-1/2 size-4 shrink-0 -translate-y-1/2" data-combo-box-toggle="" ></span>
          </div>
        </div>
        <!-- SearchBox Modal Body -->
        <div class="modal-body overflow-y-auto mt-0 max-h-72 p-1.5" data-combo-box-output="">
          <div class="space-y-0.5 p-0.5" data-combo-box-output-items-wrapper="">
            <!-- Group: Recent Actions -->
            <div data-combo-box-output-item='{"group": {"name": "recent", "title": "Recent Actions"}}' tabindex="0">
              <a class="dropdown-item combo-box-selected:dropdown-active" href="#">
                <span class="icon-[componentx--writing] text-base-content/80 size-4 shrink-0"></span>
                <span class="text-base-content text-sm" data-combo-box-search-text="Write a document" data-combo-box-value="" >
                  Write a document
                </span>
                <span class="text-base-content/50 ms-auto hidden text-xs sm:inline" data-combo-box-search-text="Google Docs" data-combo-box-value="" >
                  Google Docs
                </span>
              </a>
            </div>
            <div data-combo-box-output-item='{"group": {"name": "recent", "title": "Recent Actions"}}' tabindex="1">
              <a class="dropdown-item combo-box-selected:dropdown-active" href="#">
                <span class="icon-[componentx--calendar] text-base-content/80 size-4 shrink-0"></span>
                <span class="text-base-content text-sm" data-combo-box-search-text="Schedule a meeting" data-combo-box-value="" >
                  Schedule a meeting
                </span>
                <span class="text-base-content/50 ms-auto hidden text-xs sm:inline" data-combo-box-search-text="Google Calendar" data-combo-box-value="" >
                  Google Calendar
                </span>
              </a>
            </div>
            <div data-combo-box-output-item='{"group": {"name": "recent", "title": "Recent Actions"}}' tabindex="2">
              <a class="dropdown-item combo-box-selected:dropdown-active" href="#">
                <span class="icon-[componentx--presentation] text-base-content/80 size-4 shrink-0"></span>
                <span class="text-base-content text-sm" data-combo-box-search-text="Create a presentation" data-combo-box-value="" >
                  Create a presentation
                </span>
                <span class="text-base-content/50 ms-auto hidden text-xs sm:inline" data-combo-box-search-text="Microsoft PowerPoint" data-combo-box-value="" >
                  PowerPoint
                </span>
              </a>
            </div>
            <!-- Group: People -->
            <div data-combo-box-output-item='{"group": {"name": "people", "title": "People"}}' tabindex="4">
              <a class="dropdown-item combo-box-selected:dropdown-active" href="#">
                <img class="size-5 shrink-0 rounded-full" src="https://cdn.flyonui.com/fy-assets/avatar/avatar-2.png" alt="Image Description" />
                <span class="text-base-content text-sm" data-combo-box-search-text="Alice Johnson" data-combo-box-value="" >
                  Alice Johnson
                </span>
                <span class="ms-auto text-xs text-teal-600" data-combo-box-search-text="Online" data-combo-box-value="">
                  Online
                </span>
              </a>
            </div>
            <div data-combo-box-output-item='{"group": {"name": "people", "title": "People"}}' tabindex="5">
              <a class="dropdown-item combo-box-selected:dropdown-active" href="#">
                <img class="size-5 shrink-0 rounded-full" src="https://cdn.flyonui.com/fy-assets/avatar/avatar-11.png" alt="Image Description" />
                <span class="text-base-content text-sm" data-combo-box-search-text="David Kim" data-combo-box-value="" >
                  David Kim
                </span>
                <span class="text-base-content/50 ms-auto text-xs" data-combo-box-search-text="Offline" data-combo-box-value="" >
                  Offline
                </span>
              </a>
            </div>
            <div data-combo-box-output-item='{"group": {"name": "people", "title": "People"}}' tabindex="6">
              <a class="dropdown-item combo-box-selected:dropdown-active" href="#">
                <img class="size-5 shrink-0 rounded-full" src="https://cdn.flyonui.com/fy-assets/avatar/avatar-12.png" alt="Image Description" />
                <span class="text-base-content text-sm" data-combo-box-search-text="Rosa Martinez" data-combo-box-value="" >
                  Rosa Martinez
                </span>
                <span class="text-base-content/50 ms-auto text-xs" data-combo-box-search-text="Offline" data-combo-box-value="" >
                  Offline
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

```js
<script>
  window.addEventListener('load', () => {
    //HTML modal combo box
    const htmlOverlay = HSOverlay.getInstance('#html-modal-combo-box', true)
    const htmlCombobox = HSComboBox.getInstance('#html-modal-combo-box [data-combo-box]', true)

    window.addEventListener('keydown', function (evt) {
      if (evt.code === 'Semicolon' && evt.shiftKey) {
        if (htmlOverlay.element && htmlOverlay.element.el.classList.contains('open')) return false

        htmlOverlay.element.open()
        htmlCombobox.element.setCurrent()
      }
    })
  })
</script>

```






I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="max-w-sm">
  <div class="relative"
    data-combo-box='{
    "groupingType": "default",
    "isOpenOnFocus": true,
    "apiUrl": "/docs/json/searchbox.json",
    "apiGroupField": "position",
    "outputItemTemplate": "<div class=\"dropdown-item combo-box-selected:dropdown-active\" data-combo-box-output-item> <div class=\"flex items-center justify-between\"> <div class=\"flex items-center w-full\"> <div class=\"flex items-center justify-center rounded-full bg-base-200 size-6 overflow-hidden me-2.5\"> <img class=\"shrink-0\" data-combo-box-output-item-attr=&apos;[{\"valueFrom\": \"image\", \"attr\": \"src\"}, {\"valueFrom\": \"name\", \"attr\": \"alt\"}]&apos; /> </div> <div data-combo-box-output-item-field=\"name\" data-combo-box-search-text data-combo-box-value></div> </div> <span class=\"icon-[componentx--check] text-primary combo-box-selected:block hidden size-4 shrink-0\"> </span> </div> </div>","groupingTitleTemplate": "<div class=\"block text-xs text-base-content/50 m-3 mb-1\"></div>"
  }' >
    <!-- SearchBox -->
    <div class="relative">
      <input class="input ps-8" type="text" placeholder="Search or type a command" role="combobox" aria-expanded="false" value="" autofocus="" data-combo-box-input="" />
      <span class="icon-[componentx--search] text-base-content absolute start-3 top-1/2 size-4 shrink-0 -translate-y-1/2" ></span>
    </div>
    <!-- SearchBox Body -->
    <div class="bg-base-100 rounded-box shadow-base-300/20 absolute z-50 max-h-56 w-full space-y-0.5 overflow-y-auto p-2 shadow-lg" style="display: none" data-combo-box-output="" ></div>
  </div>
</div>
```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<h5 class="text-base-content text-base"> Press <kbd class="kbd kbd-sm">Shift</kbd> + <kbd class="kbd kbd-sm">t</kbd> for SearchBox. </h5>

<!-- SearchBox Trigger -->

<button type="button" class="hidden" aria-haspopup="dialog" aria-expanded="false" aria-controls="json-modal-combo-box" data-overlay="#json-modal-combo-box" ></button>

<!-- SearchBox Modal -->
<div id="json-modal-combo-box" class="overlay modal overlay-open:opacity-100 overlay-open:duration-300 hidden" role="dialog" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="relative"
        data-combo-box='{
        "preventVisibility": true,
        "groupingType": "default",
        "apiUrl": "/docs/json/searchbox.json",
        "apiGroupField": "position",
        "outputItemTemplate": "<div class=\"dropdown-item combo-box-selected:dropdown-active\" data-combo-box-output-item> <div class=\"flex items-center justify-between\"> <div class=\"flex items-center w-full\"> <div class=\"flex items-center justify-center rounded-full bg-base-200 size-6 overflow-hidden me-2.5\"> <img class=\"shrink-0\" data-combo-box-output-item-attr=&apos;[{\"valueFrom\": \"image\", \"attr\": \"src\"}, {\"valueFrom\": \"name\", \"attr\": \"alt\"}]&apos; /> </div> <div data-combo-box-output-item-field=\"name\" data-combo-box-search-text data-combo-box-value></div> </div> <span class=\"icon-[componentx--check] text-primary combo-box-selected:block hidden size-4 shrink-0\"> </span> </div> </div>",
        "groupingTitleTemplate": "<div class=\"block text-xs text-base-content/50 m-3 mb-1\"></div>"
      }' >
        <!-- SearchBox -->
        <div class="modal-header block">
          <div class="relative">
            <input class="input ps-8" type="text" placeholder="Search or type a command" role="combobox" aria-expanded="false" value="" autofocus="" data-combo-box-input="" />
            <span class="icon-[componentx--search] text-base-content absolute start-3 top-1/2 size-4 shrink-0 -translate-y-1/2" ></span>
          </div>
        </div>
        <!-- SearchBox Modal Body -->
        <div class="modal-body" data-combo-box-output="">
          <div class="overflow-y-auto max-h-72 space-y-0.5" data-combo-box-output-items-wrapper="" ></div>
        </div>
      </div>
    </div>
  </div>
</div>
```

```js
<script>
  window.addEventListener('load', () => {
    //Json modal combo box
    const jsonOverlay = HSOverlay.getInstance('#json-modal-combo-box', true)
    const jsonCombobox = HSComboBox.getInstance('#json-modal-combo-box [data-combo-box]', true)

    window.addEventListener('keydown', function (evt) {
      if (evt.code === 'KeyT' && evt.shiftKey) {
        if (jsonOverlay.element && jsonOverlay.element.el.classList.contains('open')) return false

        jsonOverlay.element.open()
        jsonCombobox.element.setCurrent()
      }
    })
  })
</script>

```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="max-w-sm">
  <div
    class="relative"
    data-combo-box='{
      "groupingType": "tabs",
      "isOpenOnFocus": true,
      "apiUrl": "https://fakestoreapi.com/products",
      "apiGroupField": "category",
      "outputItemTemplate": "<div class=\"dropdown-item combo-box-selected:dropdown-active\" data-combo-box-output-item> <div class=\"flex justify-between items-center w-full\"> <div class=\"truncate\" data-combo-box-output-item-field=\"title\" data-combo-box-search-text data-combo-box-value></div> <span class=\"icon-[componentx--check] text-primary combo-box-selected:block hidden size-4 shrink-0\"> </span> </div> </div>",
      "groupingTitleTemplate": "<button type=\"button\" class=\"btn btn-sm btn-text capitalize combo-box-tab-active:btn-active\"></button>",
      "tabsWrapperTemplate": "<div class=\"overflow-x-auto mb-1 pb-2\"></div>"
    }' >
    <!-- SearchBox -->
    <div class="relative">
      <input class="input ps-8" type="text" placeholder="Search or type a command" role="combobox" aria-expanded="false" value="" autofocus="" data-combo-box-input="" />
      <span class="icon-[componentx--search] text-base-content absolute start-3 top-1/2 size-4 shrink-0 -translate-y-1/2" ></span>
    </div>
    <!-- SearchBox body -->
    <div class="bg-base-100 rounded-box shadow-base-300/20 absolute z-50 max-h-56 w-full overflow-y-auto p-2 shadow-lg" style="display: none" data-combo-box-output="" >
      <div data-combo-box-output-items-wrapper="" class="space-y-0.5"></div>
    </div>
  </div>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<h5 class="text-base-content text-base"> Press <kbd class="kbd kbd-sm">\</kbd> for SearchBox. </h5>

<!-- SearchBox Trigger -->

<button type="button" class="hidden" aria-haspopup="dialog" aria-expanded="false" aria-controls="tab-modal-combo-box" data-overlay="#tab-modal-combo-box" ></button>

<!-- SearchBox Modal -->
<div id="tab-modal-combo-box" class="overlay modal overlay-open:opacity-100 overlay-open:duration-300 hidden" role="dialog" tabindex="-1">
  <div class="modal-dialog overflow-x-hidden">
    <div class="modal-content max-h-full">
      <div class="relative"
        data-combo-box='{
            "preventVisibility": true,
            "groupingType": "tabs",
            "isOpenOnFocus": true,
            "apiUrl": "https://fakestoreapi.com/products",
            "apiGroupField": "category",
            "outputItemTemplate": "<div class=\"dropdown-item combo-box-selected:dropdown-active\" data-combo-box-output-item> <div  class=\"flex justify-between items-center w-full\"> <div class=\"truncate\" data-combo-box-output-item-field=\"title\" data-combo-box-search-text data-combo-box-value></div> <span class=\"icon-[componentx--check] text-primary combo-box-selected:block hidden size-4 shrink-0\"> </span> </div> </div>",
            "groupingTitleTemplate": "<button type=\"button\" class=\"btn btn-sm btn-text capitalize combo-box-tab-active:btn-active\"></button>",
            "tabsWrapperTemplate": "<div class=\"overflow-x-auto mb-1 pb-2\"></div>"
            }' >
        <div class="modal-header block">
          <div class="relative">
            <input class="input ps-8" type="text" placeholder="Search or type a command" role="combobox" aria-expanded="false" value="" autofocus="" data-combo-box-input="" />
            <span class="icon-[componentx--search] text-base-content absolute start-3 top-1/2 size-4 shrink-0 -translate-y-1/2" ></span>
          </div>
        </div>
        <!-- SearchBox Modal Body -->
        <div class="modal-body" data-combo-box-output="">
          <div class="overflow-y-auto max-h-72 space-y-0.5" data-combo-box-output-items-wrapper="" ></div>
        </div>
      </div>
    </div>
  </div>
</div>
```

```js
<script>
  window.addEventListener('load', () => {
    //tab modal combo box
    const tabOverlay = HSOverlay.getInstance('#tab-modal-combo-box', true)
    const tabCombobox = HSComboBox.getInstance('#tab-modal-combo-box [data-combo-box]', true)

    window.addEventListener('keydown', function (evt) {
      if (evt.code === 'Backslash') {
        if (tabOverlay.element && tabOverlay.element.el.classList.contains('open')) return false

        tabOverlay.element.open()
        tabCombobox.element.setCurrent()
      }
    })
  })
</script>

```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div id="combo-box-to-destroy" class="relative max-w-sm" data-combo-box="">
  <div class="relative">
    <input class="input" type="text" value="India" role="combobox" aria-expanded="false" data-combo-box-input="" aria-label="Combobox Destroy" />
    <span class="icon-[componentx--caret-up-down] text-base-content absolute end-3 top-1/2 size-4 shrink-0 -translate-y-1/2" data-combo-box-toggle="" ></span>
  </div>
  <div class="bg-base-100 rounded-box shadow-base-300/20 absolute z-50 max-h-44 w-full space-y-0.5 overflow-y-auto p-2 shadow-lg" style="display: none" data-combo-box-output="" >
    <div class="dropdown-item combo-box-selected:dropdown-active" tabindex="0" data-combo-box-output-item="">
      <div class="flex items-center justify-between">
        <span data-combo-box-search-text="Venezuela" data-combo-box-value="">Venezuela</span>
        <span class="icon-[componentx--check] text-primary combo-box-selected:block hidden size-4 shrink-0"></span>
      </div>
    </div>
    <div class="dropdown-item combo-box-selected:dropdown-active" tabindex="1" data-combo-box-output-item="">
      <div class="flex items-center justify-between">
        <span data-combo-box-search-text="Papua New Guinea" data-combo-box-value="">Papua New Guinea</span>
        <span class="icon-[componentx--check] text-primary combo-box-selected:block hidden size-4 shrink-0"></span>
      </div>
    </div>
    <div class="dropdown-item combo-box-selected:dropdown-active" tabindex="2" data-combo-box-output-item="">
      <div class="flex items-center justify-between">
        <span data-combo-box-search-text="South Africa " data-combo-box-value="">South Africa</span>
        <span class="icon-[componentx--check] text-primary combo-box-selected:block hidden size-4 shrink-0"></span>
      </div>
    </div>
    <div class="dropdown-item combo-box-selected:dropdown-active" tabindex="3" data-combo-box-output-item="">
      <div class="flex items-center justify-between">
        <span data-combo-box-search-text="Honduras" data-combo-box-value="">Honduras</span>
        <span class="icon-[componentx--check] text-primary combo-box-selected:block hidden size-4 shrink-0"></span>
      </div>
    </div>
    <div class="dropdown-item combo-box-selected:dropdown-active" tabindex="4" data-combo-box-output-item="">
      <div class="flex items-center justify-between">
        <span data-combo-box-search-text="India" data-combo-box-value="">India</span>
        <span class="icon-[componentx--check] text-primary combo-box-selected:block hidden size-4 shrink-0"></span>
      </div>
    </div>
    <div class="dropdown-item combo-box-selected:dropdown-active" tabindex="5" data-combo-box-output-item="">
      <div class="flex items-center justify-between">
        <span data-combo-box-search-text="El Salvador" data-combo-box-value="">El Salvador</span>
        <span class="icon-[componentx--check] text-primary combo-box-selected:block hidden size-4 shrink-0"></span>
      </div>
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
    const combobox = document.querySelector('#combo-box-to-destroy')
    const destroyBtn = document.querySelector('#destroy-btn')
    const reinitBtn = document.querySelector('#reinit-btn')

    // Destroy usage
    destroyBtn.addEventListener('click', () => {
      const { element } = HSComboBox.getInstance(combobox, true)

      element.destroy()

      destroyBtn.setAttribute('disabled', 'disabled')
      reinitBtn.removeAttribute('disabled')
    })

    // Reinit usage
    reinitBtn.addEventListener('click', () => {
      HSComboBox.autoInit()

      reinitBtn.setAttribute('disabled', 'disabled')
      destroyBtn.removeAttribute('disabled')
    })    
  })
</script>

```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
