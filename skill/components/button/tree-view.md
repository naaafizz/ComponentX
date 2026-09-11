---
name: "Tree View"
library: "ComponentX"
id: "tree-view"
type: "button"
quality: "standard"
tags: ["button", "component", "data", "input", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Tree View

> **Type:** `button` · **Quality:** `standard` · **ID:** `tree-view`
> **Path:** `components/button/tree-view.md`

**Tree View** is a premium, production-ready component from the **ComponentX** library — engineered for button interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `button`, `data`, `input` workflows.
- **Pattern coverage** — includes `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Tree View** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
<div id="tree-view" class="rounded-sm" role="tree" aria-orientation="vertical" data-tree-view="">
  <!-- 1st Level Accordion -->
  <div class="accordion-item active" role="treeitem" aria-expanded="true" id="basic-tree-view-heading-one"
    data-tree-view-item='{
    "value": "assets",
    "isDir": true
  }'
  >
    <!-- 1st Level Accordion Heading -->
    <div class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5" >
      <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-expanded="true" aria-controls="basic-tree-view-collapse-one" >
        <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
      </button>
      <div class="tree-view-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
        <div class="flex items-center gap-x-3">
          <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
          <div class="grow">
            <span class="text-base-content">assets</span>
          </div>
        </div>
      </div>
    </div>
    <!-- End 1st Level Accordion Heading -->
    <!-- 1st Level Collapse -->
    <div id="basic-tree-view-collapse-one" class="accordion-content w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="basic-tree-view-heading-one" >
      <!-- 2nd Level Accordion Group -->
      <div class="tree-view-space">
        <!-- 2nd Level Nested Accordion -->
        <div class="accordion-item active" role="treeitem" aria-expanded="true" id="basic-tree-view-sub-heading-one"
          data-tree-view-item='{
          "value": "css",
          "isDir": true
        }'
        >
          <!-- 2nd Level Accordion Heading -->
          <div class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5" >
            <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-expanded="true" aria-controls="basic-tree-view-sub-collapse-one" >
              <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
            </button>
            <div class="tree-view-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
              <div class="flex items-center gap-x-3">
                <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
                <div class="grow">
                  <span class="text-base-content">css</span>
                </div>
              </div>
            </div>
          </div>
          <!-- End 2nd Level Accordion Heading -->
          <!-- 2nd Level Collapse -->
          <div id="basic-tree-view-sub-collapse-one" class="accordion-content w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="basic-tree-view-sub-heading-one" >
            <!-- 3rd Level Accordion Group -->
            <div class="tree-view-space">
              <!-- 3rd Level Accordion -->
              <div class="accordion-item active" role="treeitem" aria-expanded="true" id="basic-tree-view-sub-level-two-heading-one"
                data-tree-view-item='{
                "value": "main",
                "isDir": true
              }'
              >
                <!-- 3rd Level Accordion Heading -->
                <div class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5" >
                  <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-expanded="true" aria-controls="basic-tree-view-sub-level-two-collapse-one" >
                    <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
                  </button>
                  <div class="tree-view-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
                    <div class="flex items-center gap-x-3">
                      <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
                      <div class="grow">
                        <span class="text-base-content">main</span>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- End 3rd Level Accordion Heading -->
                <!-- 3rd Level Collapse -->
                <div id="basic-tree-view-sub-level-two-collapse-one" class="accordion-content w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="basic-tree-view-sub-level-two-heading-one" >
                  <div class="tree-view-space">
                    <!-- 3rd Level Item -->
                    <div class="tree-view-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem"
                      data-tree-view-item='{
                      "value": "main.css",
                      "isDir": false
                    }'
                    >
                      <div class="flex items-center gap-x-3">
                        <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
                        <div class="grow">
                          <span class="text-base-content">main.css</span>
                        </div>
                      </div>
                    </div>
                    <!-- End 3rd Level Item -->
                    <!-- 3rd Level Item -->
                    <div class="tree-view-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem"
                      data-tree-view-item='{
                      "value": "docs.css",
                      "isDir": false
                    }'
                    >
                      <div class="flex items-center gap-x-3">
                        <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
                        <div class="grow">
                          <span class="text-base-content">docs.css</span>
                        </div>
                      </div>
                    </div>
                    <!-- End 3rd Level Item -->
                    <!-- 3rd Level Item -->
                    <div class="tree-view-selected:bg-base-300/40 rounded-md px-2"
                      data-tree-view-item='{
                      "value": "README.txt",
                      "isDir": false
                    }'
                    >
                      <span class="text-base-content">README.txt</span>
                    </div>
                    <!-- End 3rd Level Item -->
                  </div>
                </div>
                <!-- End 3rd Level Collapse -->
              </div>
              <!-- End 3rd Level Accordion -->
              <!-- 3rd Level Accordion -->
              <div class="accordion-item" role="treeitem" aria-expanded="false" id="basic-tree-view-sub-level-two-heading-two"
                data-tree-view-item='{
                "value": "tailwind",
                "isDir": true
              }'
              >
                <!-- 3rd Level Accordion Heading -->
                <div class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5" >
                  <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-expanded="false" aria-controls="basic-tree-view-sub-level-two-collapse-two" >
                    <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
                  </button>
                  <div class="tree-view-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
                    <div class="flex items-center gap-x-3">
                      <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
                      <div class="grow">
                        <span class="text-base-content">tailwind</span>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- End 3rd Level Accordion Heading -->
                <!-- 3rd Level Collapse -->
                <div id="basic-tree-view-sub-level-two-collapse-two" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="basic-tree-view-sub-level-two-heading-two" >
                  <div class="tree-view-space">
                    <!-- 3rd Level Item -->
                    <div class="tree-view-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem"
                      data-tree-view-item='{
                      "value": "input.css",
                      "isDir": false
                    }'
                    >
                      <div class="flex items-center gap-x-3">
                        <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
                        <div class="grow">
                          <span class="text-base-content">input.css</span>
                        </div>
                      </div>
                    </div>
                    <!-- End 3rd Level Item -->
                  </div>
                </div>
                <!-- End 3rd Level Collapse -->
              </div>
              <!-- End 3rd Level Accordion -->
              <!-- 3rd Level Heading -->
              <div class="tree-view-selected:bg-base-300/40 rounded-md px-1.5 py-0.5" role="treeitem"
                data-tree-view-item='{
                "value": ".gitignore",
                "isDir": false
              }'
              >
                <span class="text-base-content">.gitignore</span>
              </div>
              <!-- End 3rd Level Heading -->
            </div>
            <!-- End 3rd Level Accordion Group -->
          </div>
          <!-- End 2nd Level Collapse -->
        </div>
        <!-- End 2nd Level Nested Accordion -->
        <!-- 2nd Level Nested Accordion -->
        <div class="accordion-item" role="treeitem" aria-expanded="false" id="basic-tree-view-sub-heading-two"
          data-tree-view-item='{
          "value": "img",
          "isDir": true
        }'
        >
          <!-- 2nd Level Accordion Heading -->
          <div class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5" >
            <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-expanded="false" aria-controls="basic-tree-view-sub-collapse-two" >
              <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
            </button>
            <div class="tree-view-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
              <div class="flex items-center gap-x-3">
                <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
                <div class="grow">
                  <span class="text-base-content">img</span>
                </div>
              </div>
            </div>
          </div>
          <!-- End 2nd Level Accordion Heading -->
          <!-- 2nd Level Collapse -->
          <div id="basic-tree-view-sub-collapse-two" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="basic-tree-view-sub-heading-two" >
            <div class="tree-view-space">
              <!-- 2nd Level Item -->
              <div class="tree-view-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem"
                data-tree-view-item='{
                "value": "hero.jpg",
                "isDir": false
              }'
              >
                <div class="flex items-center gap-x-3">
                  <span class="icon-[componentx--photo] text-base-content size-4 shrink-0"></span>
                  <div class="grow">
                    <span class="text-base-content">hero.jpg</span>
                  </div>
                </div>
              </div>
              <!-- End 2nd Level Item -->
              <!-- 2nd Level Item -->
              <div class="tree-view-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem"
                data-tree-view-item='{
                "value": "tailwind.png",
                "isDir": false
              }'
              >
                <div class="flex items-center gap-x-3">
                  <span class="icon-[componentx--photo] text-base-content size-4 shrink-0"></span>
                  <div class="grow">
                    <span class="text-base-content">tailwind.png</span>
                  </div>
                </div>
              </div>
              <!-- End 2nd Level Item -->
              <!-- 2nd Level Item -->
              <div class="tree-view-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem"
                data-tree-view-item='{
                "value": "untitled.png",
                "isDir": false
              }'
              >
                <div class="flex items-center gap-x-3">
                  <span class="icon-[componentx--photo] text-base-content size-4 shrink-0"></span>
                  <div class="grow">
                    <span class="text-base-content">untitled.png</span>
                  </div>
                </div>
              </div>
              <!-- End 2nd Level Item -->
            </div>
          </div>
          <!-- End 2nd Level Collapse -->
        </div>
        <!-- End 2nd Level Nested Accordion -->
        <!-- 2nd Level Nested Accordion -->
        <div class="accordion-item" role="treeitem" aria-expanded="false" id="basic-tree-view-sub-heading-three"
          data-tree-view-item='{
          "value": "js",
          "isDir": true
        }'
        >
          <!-- 2nd Level Accordion Heading -->
          <div class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5" >
            <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-expanded="false" aria-controls="basic-tree-view-sub-collapse-three" >
              <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
            </button>
            <div class="tree-view-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
              <div class="flex items-center gap-x-3">
                <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
                <div class="grow">
                  <span class="text-base-content">js</span>
                </div>
              </div>
            </div>
          </div>
          <!-- End 2nd Level Accordion Heading -->
          <!-- 2nd Level Collapse -->
          <div id="basic-tree-view-sub-collapse-three" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="basic-tree-view-sub-heading-three" >
            <div class="tree-view-space">
              <!-- 2nd Level Item -->
              <div class="tree-view-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem"
                data-tree-view-item='{
                "value": "flyonui.jpg",
                "isDir": false
              }'
              >
                <div class="flex items-center gap-x-3">
                  <span class="icon-[componentx--photo] text-base-content size-4 shrink-0"></span>
                  <div class="grow">
                    <span class="text-base-content">flyonui.jpg</span>
                  </div>
                </div>
              </div>
              <!-- End 2nd Level Item -->
            </div>
          </div>
          <!-- End 2nd Level Collapse -->
        </div>
        <!-- End 2nd Level Nested Accordion -->
      </div>
      <!-- 2nd Level Accordion Group -->
    </div>
    <!-- End 1st Level Collapse -->

  </div>
  <!-- End 1st Level Accordion -->

  <!-- 1st Level Accordion -->
  <div class="accordion-item" role="treeitem" aria-expanded="false" id="basic-tree-view-heading-two"
    data-tree-view-item='{
    "value": "scripts",
    "isDir": true
  }'
  >
    <!-- 1st Level Accordion Heading -->
    <div class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5" >
      <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-expanded="false" aria-controls="basic-tree-view-collapse-two" >
        <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
      </button>
      <div class="tree-view-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
        <div class="flex items-center gap-x-3">
          <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
          <div class="grow">
            <span class="text-base-content">scripts</span>
          </div>
        </div>
      </div>
    </div>
    <!-- End 1st Level Accordion Heading -->
    <!-- 1st Level Collapse -->
    <div id="basic-tree-view-collapse-two" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="basic-tree-view-heading-two" >
      <div class="tree-view-space">
        <!-- 1st Level Item -->
        <div class="tree-view-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem"
          data-tree-view-item='{
          "value": "flyonui.js",
          "isDir": false
        }'
        >
          <div class="flex items-center gap-x-3">
            <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
            <div class="grow">
              <span class="text-base-content">flyonui.js</span>
            </div>
          </div>
        </div>
        <!-- End 1st Level Item -->
        <!-- 1st Level Item -->
        <div class="tree-view-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem"
          data-tree-view-item='{
          "value": "tailwind.js",
          "isDir": false
        }'
        >
          <div class="flex items-center gap-x-3">
            <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
            <div class="grow">
              <span class="text-base-content">tailwind.js</span>
            </div>
          </div>
        </div>
        <!-- End 1st Level Item -->
        <!-- 1st Level Item -->
        <div class="tree-view-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem"
          data-tree-view-item='{
          "value": "www.js",
          "isDir": false
        }'
        >
          <div class="flex items-center gap-x-3">
            <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
            <div class="grow">
              <span class="text-base-content">www.js</span>
            </div>
          </div>
        </div>
        <!-- End 1st Level Item -->
      </div>
    </div>
    <!-- End 1st Level Collapse -->

  </div>
  <!-- End 1st Level Accordion -->

  <!-- 1st Level Accordion -->
  <div class="accordion-item" role="treeitem" aria-expanded="false" id="basic-tree-view-heading-three"
    data-tree-view-item='{
    "value": "templates",
    "isDir": true
  }'
  >
    <!-- 1st Level Accordion Heading -->
    <div class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5" >
      <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-expanded="false" aria-controls="basic-tree-view-collapse-three" >
        <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
      </button>
      <div class="tree-view-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
        <div class="flex items-center gap-x-3">
          <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
          <div class="grow">
            <span class="text-base-content">templates</span>
          </div>
        </div>
      </div>
    </div>
    <!-- End 1st Level Accordion Heading -->
    <!-- 1st Level Collapse -->
    <div id="basic-tree-view-collapse-three" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="basic-tree-view-heading-three" >
      <div class="tree-view-space">
        <!-- 1st Level Item -->
        <div class="tree-view-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem"
          data-tree-view-item='{
          "value": "index.html",
          "isDir": false
        }'
        >
          <div class="flex items-center gap-x-3">
            <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
            <div class="grow">
              <span class="text-base-content">index.html</span>
            </div>
          </div>
        </div>
        <!-- End 1st Level Item -->
      </div>
    </div>
    <!-- End 1st Level Collapse -->

  </div>
  <!-- End 1st Level Accordion -->
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div id="tree-view" class="rounded-sm" role="tree" aria-orientation="vertical" data-tree-view="">
  <div class="accordion">
  <!-- 1st Level Accordion -->
  <div class="accordion-item active" role="treeitem" aria-expanded="true" id="close-currently-opened-heading-one"
    data-tree-view-item='{
    "value": "assets",
    "isDir": true
  }'
  >
    <!-- 1st Level Accordion Heading -->
    <div class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5" >
      <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-expanded="true" aria-controls="close-currently-opened-collapse-one" >
        <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
      </button>
      <div class="tree-view-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
        <div class="flex items-center gap-x-3">
          <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
          <div class="grow">
            <span class="text-base-content">assets</span>
          </div>
        </div>
      </div>
    </div>
    <!-- End 1st Level Accordion Heading -->
    <!-- 1st Level Collapse -->
    <div id="close-currently-opened-collapse-one" class="accordion-content w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="close-currently-opened-heading-one" >
      <!-- 2nd Level Accordion Group -->
      <div class="accordion tree-view-space">
        <!-- 2nd Level Nested Accordion -->
        <div class="accordion-item active" role="treeitem" aria-expanded="true" id="close-currently-opened-sub-heading-one"
          data-tree-view-item='{
          "value": "css",
          "isDir": true
        }'
        >
          <!-- 2nd Level Accordion Heading -->
          <div class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5" >
            <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-expanded="true" aria-controls="close-currently-opened-sub-collapse-one" >
              <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
            </button>
            <div class="tree-view-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
              <div class="flex items-center gap-x-3">
                <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
                <div class="grow">
                  <span class="text-base-content">css</span>
                </div>
              </div>
            </div>
          </div>
          <!-- End 2nd Level Accordion Heading -->
          <!-- 2nd Level Collapse -->
          <div id="close-currently-opened-sub-collapse-one" class="accordion-content w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="close-currently-opened-sub-heading-one" >
            <!-- 3rd Level Accordion Group -->
            <div class="accordion tree-view-space">
              <!-- 3rd Level Accordion -->
              <div class="accordion-item active" role="treeitem" aria-expanded="true" id="close-currently-opened-sub-level-two-heading-one"
                data-tree-view-item='{
                "value": "main",
                "isDir": true
              }'
              >
                <!-- 3rd Level Accordion Heading -->
                <div class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5" >
                  <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-expanded="true" aria-controls="close-currently-opened-sub-level-two-collapse-one" >
                    <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
                  </button>
                  <div class="tree-view-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
                    <div class="flex items-center gap-x-3">
                      <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
                      <div class="grow">
                        <span class="text-base-content">main</span>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- End 3rd Level Accordion Heading -->
                <!-- 3rd Level Collapse -->
                <div id="close-currently-opened-sub-level-two-collapse-one" class="accordion-content w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="close-currently-opened-sub-level-two-heading-one" >
                  <div class="tree-view-space">
                    <!-- 3rd Level Item -->
                    <div class="tree-view-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem"
                      data-tree-view-item='{
                      "value": "main.css",
                      "isDir": false
                    }'
                    >
                      <div class="flex items-center gap-x-3">
                        <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
                        <div class="grow">
                          <span class="text-base-content">main.css</span>
                        </div>
                      </div>
                    </div>
                    <!-- End 3rd Level Item -->
                    <!-- 3rd Level Item -->
                    <div class="tree-view-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem"
                      data-tree-view-item='{
                      "value": "docs.css",
                      "isDir": false
                    }'
                    >
                      <div class="flex items-center gap-x-3">
                        <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
                        <div class="grow">
                          <span class="text-base-content">docs.css</span>
                        </div>
                      </div>
                    </div>
                    <!-- End 3rd Level Item -->
                    <!-- 3rd Level Item -->
                    <div class="tree-view-selected:bg-base-300/40 rounded-md px-2"
                      data-tree-view-item='{
                      "value": "README.txt",
                      "isDir": false
                    }'
                    >
                      <span class="text-base-content">README.txt</span>
                    </div>
                    <!-- End 3rd Level Item -->
                  </div>
                </div>
                <!-- End 3rd Level Collapse -->
              </div>
              <!-- End 3rd Level Accordion -->
              <!-- 3rd Level Accordion -->
              <div class="accordion-item" role="treeitem" aria-expanded="false" id="close-currently-opened-sub-level-two-heading-two"
                data-tree-view-item='{
                "value": "tailwind",
                "isDir": true
              }'
              >
                <!-- 3rd Level Accordion Heading -->
                <div class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5" >
                  <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-expanded="false" aria-controls="close-currently-opened-sub-level-two-collapse-two" >
                    <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
                  </button>
                  <div class="tree-view-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
                    <div class="flex items-center gap-x-3">
                      <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
                      <div class="grow">
                        <span class="text-base-content">tailwind</span>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- End 3rd Level Accordion Heading -->
                <!-- 3rd Level Collapse -->
                <div id="close-currently-opened-sub-level-two-collapse-two" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="close-currently-opened-sub-level-two-heading-two" >
                  <div class="tree-view-space">
                    <!-- 3rd Level Item -->
                    <div class="tree-view-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem"
                      data-tree-view-item='{
                      "value": "input.css",
                      "isDir": false
                    }'
                    >
                      <div class="flex items-center gap-x-3">
                        <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
                        <div class="grow">
                          <span class="text-base-content">input.css</span>
                        </div>
                      </div>
                    </div>
                    <!-- End 3rd Level Item -->
                  </div>
                </div>
                <!-- End 3rd Level Collapse -->
              </div>
              <!-- End 3rd Level Accordion -->
              <!-- 3rd Level Heading -->
              <div class="tree-view-selected:bg-base-300/40 rounded-md px-1.5 py-0.5" role="treeitem"
                data-tree-view-item='{
                "value": ".gitignore",
                "isDir": false
              }'
              >
                <span class="text-base-content">.gitignore</span>
              </div>
              <!-- End 3rd Level Heading -->
            </div>
            <!-- End 3rd Level Accordion Group -->
          </div>
          <!-- End 2nd Level Collapse -->
        </div>
        <!-- End 2nd Level Nested Accordion -->
        <!-- 2nd Level Nested Accordion -->
        <div class="accordion-item" role="treeitem" aria-expanded="false" id="close-currently-opened-sub-heading-two"
          data-tree-view-item='{
          "value": "img",
          "isDir": true
        }'
        >
          <!-- 2nd Level Accordion Heading -->
          <div class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5" >
            <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-expanded="false" aria-controls="close-currently-opened-sub-collapse-two" >
              <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
            </button>
            <div class="tree-view-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
              <div class="flex items-center gap-x-3">
                <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
                <div class="grow">
                  <span class="text-base-content">img</span>
                </div>
              </div>
            </div>
          </div>
          <!-- End 2nd Level Accordion Heading -->
          <!-- 2nd Level Collapse -->
          <div id="close-currently-opened-sub-collapse-two" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="close-currently-opened-sub-heading-two" >
            <div class="tree-view-space">
              <!-- 2nd Level Item -->
              <div class="tree-view-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem"
                data-tree-view-item='{
                "value": "hero.jpg",
                "isDir": false
              }'
              >
                <div class="flex items-center gap-x-3">
                  <span class="icon-[componentx--photo] text-base-content size-4 shrink-0"></span>
                  <div class="grow">
                    <span class="text-base-content">hero.jpg</span>
                  </div>
                </div>
              </div>
              <!-- End 2nd Level Item -->
              <!-- 2nd Level Item -->
              <div class="tree-view-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem"
                data-tree-view-item='{
                "value": "tailwind.png",
                "isDir": false
              }'
              >
                <div class="flex items-center gap-x-3">
                  <span class="icon-[componentx--photo] text-base-content size-4 shrink-0"></span>
                  <div class="grow">
                    <span class="text-base-content">tailwind.png</span>
                  </div>
                </div>
              </div>
              <!-- End 2nd Level Item -->
              <!-- 2nd Level Item -->
              <div class="tree-view-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem"
                data-tree-view-item='{
                "value": "untitled.png",
                "isDir": false
              }'
              >
                <div class="flex items-center gap-x-3">
                  <span class="icon-[componentx--photo] text-base-content size-4 shrink-0"></span>
                  <div class="grow">
                    <span class="text-base-content">untitled.png</span>
                  </div>
                </div>
              </div>
              <!-- End 2nd Level Item -->
            </div>
          </div>
          <!-- End 2nd Level Collapse -->
        </div>
        <!-- End 2nd Level Nested Accordion -->
        <!-- 2nd Level Nested Accordion -->
        <div class="accordion-item" role="treeitem" aria-expanded="false" id="close-currently-opened-sub-heading-three"
          data-tree-view-item='{
          "value": "js",
          "isDir": true
        }'
        >
          <!-- 2nd Level Accordion Heading -->
          <div class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5" >
            <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-expanded="false" aria-controls="close-currently-opened-sub-collapse-three" >
              <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
            </button>
            <div class="tree-view-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
              <div class="flex items-center gap-x-3">
                <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
                <div class="grow">
                  <span class="text-base-content">js</span>
                </div>
              </div>
            </div>
          </div>
          <!-- End 2nd Level Accordion Heading -->
          <!-- 2nd Level Collapse -->
          <div id="close-currently-opened-sub-collapse-three" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="close-currently-opened-sub-heading-three" >
            <div class="tree-view-space">
              <!-- 2nd Level Item -->
              <div class="tree-view-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem"
                data-tree-view-item='{
                "value": "flyonui.jpg",
                "isDir": false
              }'
              >
                <div class="flex items-center gap-x-3">
                  <span class="icon-[componentx--photo] text-base-content size-4 shrink-0"></span>
                  <div class="grow">
                    <span class="text-base-content">flyonui.jpg</span>
                  </div>
                </div>
              </div>
              <!-- End 2nd Level Item -->
            </div>
          </div>
          <!-- End 2nd Level Collapse -->
        </div>
        <!-- End 2nd Level Nested Accordion -->
      </div>
      <!-- 2nd Level Accordion Group -->
    </div>
    <!-- End 1st Level Collapse -->

  </div>
  <!-- End 1st Level Accordion -->

  <!-- 1st Level Accordion -->
  <div class="accordion-item" role="treeitem" aria-expanded="false" id="close-currently-opened-heading-two"
    data-tree-view-item='{
    "value": "scripts",
    "isDir": true
  }'
  >
    <!-- 1st Level Accordion Heading -->
    <div class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5" >
      <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-expanded="false" aria-controls="close-currently-opened-collapse-two" >
        <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
      </button>
      <div class="tree-view-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
        <div class="flex items-center gap-x-3">
          <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
          <div class="grow">
            <span class="text-base-content">scripts</span>
          </div>
        </div>
      </div>
    </div>
    <!-- End 1st Level Accordion Heading -->
    <!-- 1st Level Collapse -->
    <div id="close-currently-opened-collapse-two" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="close-currently-opened-heading-two" >
      <div class="tree-view-space">
        <!-- 1st Level Item -->
        <div class="tree-view-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem"
          data-tree-view-item='{
          "value": "flyonui.js",
          "isDir": false
        }'
        >
          <div class="flex items-center gap-x-3">
            <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
            <div class="grow">
              <span class="text-base-content">flyonui.js</span>
            </div>
          </div>
        </div>
        <!-- End 1st Level Item -->
        <!-- 1st Level Item -->
        <div class="tree-view-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem"
          data-tree-view-item='{
          "value": "tailwind.js",
          "isDir": false
        }'
        >
          <div class="flex items-center gap-x-3">
            <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
            <div class="grow">
              <span class="text-base-content">tailwind.js</span>
            </div>
          </div>
        </div>
        <!-- End 1st Level Item -->
        <!-- 1st Level Item -->
        <div class="tree-view-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem"
          data-tree-view-item='{
          "value": "www.js",
          "isDir": false
        }'
        >
          <div class="flex items-center gap-x-3">
            <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
            <div class="grow">
              <span class="text-base-content">www.js</span>
            </div>
          </div>
        </div>
        <!-- End 1st Level Item -->
      </div>
    </div>
    <!-- End 1st Level Collapse -->

  </div>
  <!-- End 1st Level Accordion -->

  <!-- 1st Level Accordion -->
  <div class="accordion-item" role="treeitem" aria-expanded="false" id="close-currently-opened-heading-three"
    data-tree-view-item='{
    "value": "templates",
    "isDir": true
  }'
  >
    <!-- 1st Level Accordion Heading -->
    <div class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5" >
      <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-expanded="false" aria-controls="close-currently-opened-collapse-three" >
        <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
      </button>
      <div class="tree-view-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
        <div class="flex items-center gap-x-3">
          <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
          <div class="grow">
            <span class="text-base-content">templates</span>
          </div>
        </div>
      </div>
    </div>
    <!-- End 1st Level Accordion Heading -->
    <!-- 1st Level Collapse -->
    <div id="close-currently-opened-collapse-three" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="close-currently-opened-heading-three" >
      <div class="tree-view-space">
        <!-- 1st Level Item -->
        <div class="tree-view-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem"
          data-tree-view-item='{
          "value": "index.html",
          "isDir": false
        }'
        >
          <div class="flex items-center gap-x-3">
            <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
            <div class="grow">
              <span class="text-base-content">index.html</span>
            </div>
          </div>
        </div>
        <!-- End 1st Level Item -->
      </div>
    </div>
    <!-- End 1st Level Collapse -->
  </div>
  </div>
  <!-- End 1st Level Accordion -->
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div id="tree-view-nested" class="rounded-sm" role="tree" aria-orientation="vertical" data-tree-view="">
  <!-- 1st Level Accordion Group -->
  <div data-nested-draggable="">
    <!-- 1st Level Accordion -->
    <div class="accordion-item dragged:bg-primary/20 dragged:rounded-sm nested-1 active" role="treeitem" aria-expanded="true" id="draggable-tree-heading-one"
      data-tree-view-item='{
        "value": "assets",
        "isDir": true
      }'
    >
      <!-- 1st Level Accordion Heading -->
      <div class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5" >
        <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-expanded="true" aria-controls="draggable-tree-collapse-one" >
          <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
        </button>
        <div class="tree-view-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
          <div class="flex items-center gap-x-3">
            <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
            <div class="grow">
              <span class="text-base-content">assets</span>
            </div>
          </div>
        </div>
      </div>
      <!-- End 1st Level Accordion Heading -->
      <!-- 1st Level Collapse -->
      <div id="draggable-tree-collapse-one" class="accordion-content w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="draggable-tree-heading-one" >
        <!-- 2nd Level Accordion Group -->
        <div class="tree-view-space" data-nested-draggable="">
          <!-- 2nd Level Nested Accordion -->
          <div class="accordion-item dragged:bg-primary/20 dragged:rounded-sm nested-2 active" role="treeitem" aria-expanded="true" id="draggable-tree-sub-heading-one"
            data-tree-view-item='{
              "value": "css",
              "isDir": true
            }'
          >
            <!-- 2nd Level Accordion Heading -->
            <div class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5" >
              <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-expanded="true" aria-controls="draggable-tree-sub-collapse-one" >
                <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
              </button>
              <div class="tree-view-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
                <div class="flex items-center gap-x-3">
                  <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
                  <div class="grow">
                    <span class="text-base-content">css</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- End 2nd Level Accordion Heading -->
            <!-- 2nd Level Collapse -->
            <div id="draggable-tree-sub-collapse-one" class="accordion-content w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="draggable-tree-sub-heading-one" >
              <!-- 3rd Level Accordion Group -->
              <div class="tree-view-space" data-nested-draggable="">
                <!-- 3rd Level Accordion -->
                <div class="accordion-item dragged:bg-primary/20 dragged:rounded-sm nested-3 active" role="treeitem" aria-expanded="true" id="draggable-tree-sub-level-two-heading-one"
                  data-tree-view-item='{
                    "value": "main",
                    "isDir": true
                  }'
                >
                  <!-- 3rd Level Accordion Heading -->
                  <div class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5" >
                    <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-expanded="true" aria-controls="draggable-tree-sub-level-two-collapse-one" >
                      <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
                    </button>
                    <div class="tree-view-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
                      <div class="flex items-center gap-x-3">
                        <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
                        <div class="grow">
                          <span class="text-base-content">main</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- End 3rd Level Accordion Heading -->
                  <!-- 3rd Level Collapse -->
                  <div id="draggable-tree-sub-level-two-collapse-one" class="accordion-content w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="draggable-tree-sub-level-two-heading-one" >
                    <div class="tree-view-space" data-nested-draggable="">
                      <!-- 3rd Level Item -->
                      <div class="tree-view-selected:bg-base-300/40 dragged:bg-primary/20 dragged:rounded-sm nested-4 cursor-pointer rounded-md px-2" role="treeitem"
                        data-tree-view-item='{
                          "value": "main.css",
                          "isDir": false
                        }'
                      >
                        <div class="flex items-center gap-x-3">
                          <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
                          <div class="grow">
                            <span class="text-base-content">main.css</span>
                          </div>
                        </div>
                      </div>
                      <!-- End 3rd Level Item -->
                      <!-- 3rd Level Item -->
                      <div class="tree-view-selected:bg-base-300/40 dragged:bg-primary/20 dragged:rounded-sm nested-4 cursor-pointer rounded-md px-2" role="treeitem"
                        data-tree-view-item='{
                          "value": "docs.css",
                          "isDir": false
                        }'
                      >
                        <div class="flex items-center gap-x-3">
                          <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
                          <div class="grow">
                            <span class="text-base-content">docs.css</span>
                          </div>
                        </div>
                      </div>
                      <!-- End 3rd Level Item -->
                      <!-- 3rd Level Item -->
                      <div class="tree-view-selected:bg-base-300/40 dragged:bg-primary/20 dragged:rounded-sm nested-4 rounded-md px-2"
                        data-tree-view-item='{
                          "value": "README.txt",
                          "isDir": false
                        }'
                      >
                        <span class="text-base-content">README.txt</span>
                      </div>
                      <!-- End 3rd Level Item -->
                    </div>
                  </div>
                  <!-- End 3rd Level Collapse -->
                </div>
                <!-- End 3rd Level Accordion -->
                <!-- 3rd Level Accordion -->
                <div class="accordion-item dragged:bg-primary/20 dragged:rounded-sm nested-3" role="treeitem" aria-expanded="false" id="draggable-tree-sub-level-two-heading-two"
                  data-tree-view-item='{
                    "value": "tailwind",
                    "isDir": true
                  }'
                >
                  <!-- 3rd Level Accordion Heading -->
                  <div class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5" >
                    <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-expanded="false" aria-controls="draggable-tree-sub-level-two-collapse-two" >
                      <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
                    </button>
                    <div class="tree-view-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
                      <div class="flex items-center gap-x-3">
                        <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
                        <div class="grow">
                          <span class="text-base-content">tailwind</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- End 3rd Level Accordion Heading -->
                  <!-- 3rd Level Collapse -->
                  <div id="draggable-tree-sub-level-two-collapse-two" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="draggable-tree-sub-level-two-heading-two" >
                    <div class="tree-view-space" data-nested-draggable="">
                      <!-- 3rd Level Item -->
                      <div class="tree-view-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem"
                        data-tree-view-item='{
                          "value": "input.css",
                          "isDir": false
                        }'
                      >
                        <div class="flex items-center gap-x-3">
                          <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
                          <div class="grow">
                            <span class="text-base-content">input.css</span>
                          </div>
                        </div>
                      </div>
                      <!-- End 3rd Level Item -->
                    </div>
                  </div>
                  <!-- End 3rd Level Collapse -->
                </div>
                <!-- End 3rd Level Accordion -->
                <!-- 3rd Level Heading -->
                <div class="tree-view-selected:bg-base-300/40 dragged:bg-primary/20 dragged:rounded-sm nested-3 rounded-md px-1.5 py-0.5" role="treeitem"
                  data-tree-view-item='{
                      "value": ".gitignore",
                      "isDir": false
                    }'
                >
                  <span class="text-base-content">.gitignore</span>
                </div>
                <!-- End 3rd Level Heading -->
              </div>
              <!-- End 3rd Level Accordion Group -->
            </div>
            <!-- End 2nd Level Collapse -->
          </div>
          <!-- End 2nd Level Nested Accordion -->
          <!-- 2nd Level Nested Accordion -->
          <div class="accordion-item" role="treeitem" aria-expanded="false" id="draggable-tree-sub-heading-two"
            data-tree-view-item='{
              "value": "img",
              "isDir": true
            }'
          >
            <!-- 2nd Level Accordion Heading -->
            <div class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5" >
              <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-expanded="false" aria-controls="draggable-tree-sub-collapse-two" >
                <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
              </button>
              <div class="tree-view-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
                <div class="flex items-center gap-x-3">
                  <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
                  <div class="grow">
                    <span class="text-base-content">img</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- End 2nd Level Accordion Heading -->
            <!-- 2nd Level Collapse -->
            <div id="draggable-tree-sub-collapse-two" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="draggable-tree-sub-heading-two" >
              <div class="tree-view-space" data-nested-draggable="">
                <!-- 2nd Level Item -->
                <div class="tree-view-selected:bg-base-300/40 dragged:bg-primary/20 dragged:rounded-sm nested-3 cursor-pointer rounded-md px-2" role="treeitem"
                  data-tree-view-item='{
                    "value": "hero.jpg",
                    "isDir": false
                  }'
                >
                  <div class="flex items-center gap-x-3">
                    <span class="icon-[componentx--photo] text-base-content size-4 shrink-0"></span>
                    <div class="grow">
                      <span class="text-base-content">hero.jpg</span>
                    </div>
                  </div>
                </div>
                <!-- End 2nd Level Item -->
                <!-- 2nd Level Item -->
                <div role="treeitem" class="tree-view-selected:bg-base-300/40 dragged:bg-primary/20 dragged:rounded-sm nested-3 cursor-pointer rounded-md px-2" role="treeitem"
                  data-tree-view-item='{
                    "value": "tailwind.png",
                    "isDir": false
                  }'
                >
                  <div class="flex items-center gap-x-3">
                    <span class="icon-[componentx--photo] text-base-content size-4 shrink-0"></span>
                    <div class="grow">
                      <span class="text-base-content">tailwind.png</span>
                    </div>
                  </div>
                </div>
                <!-- End 2nd Level Item -->
                <!-- 2nd Level Item -->
                <div class="tree-view-selected:bg-base-300/40 dragged:bg-primary/20 dragged:rounded-sm nested-3 cursor-pointer rounded-md px-2" role="treeitem"
                  data-tree-view-item='{
                    "value": "untitled.png",
                    "isDir": false
                  }'
                >
                  <div class="flex items-center gap-x-3">
                    <span class="icon-[componentx--photo] text-base-content size-4 shrink-0"></span>
                    <div class="grow">
                      <span class="text-base-content">untitled.png</span>
                    </div>
                  </div>
                </div>
                <!-- End 2nd Level Item -->
              </div>
            </div>
            <!-- End 2nd Level Collapse -->
          </div>
          <!-- End 2nd Level Nested Accordion -->
          <!-- 2nd Level Nested Accordion -->
          <div class="accordion-item dragged:bg-primary/20 dragged:rounded-sm nested-2" role="treeitem" aria-expanded="false" id="draggable-tree-sub-heading-three"
            data-tree-view-item='{
              "value": "js",
              "isDir": true
            }'
          >
            <!-- 2nd Level Accordion Heading -->
            <div class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5" >
              <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-expanded="false" aria-controls="draggable-tree-sub-collapse-three" >
                <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
              </button>
              <div class="tree-view-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
                <div class="flex items-center gap-x-3">
                  <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
                  <div class="grow">
                    <span class="text-base-content">js</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- End 2nd Level Accordion Heading -->
            <!-- 2nd Level Collapse -->
            <div id="draggable-tree-sub-collapse-three" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="draggable-tree-sub-heading-three" >
              <div class="tree-view-space" data-nested-draggable="">
                <!-- 2nd Level Item -->
                <div class="tree-view-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem"
                  data-tree-view-item='{
                    "value": "flyonui.jpg",
                    "isDir": false
                  }'
                >
                  <div class="flex items-center gap-x-3">
                    <span class="icon-[componentx--photo] text-base-content size-4 shrink-0"></span>
                    <div class="grow">
                      <span class="text-base-content">flyonui.jpg</span>
                    </div>
                  </div>
                </div>
                <!-- End 2nd Level Item -->
              </div>
            </div>
            <!-- End 2nd Level Collapse -->
          </div>
          <!-- End 2nd Level Nested Accordion -->
        </div>
        <!-- 2nd Level Accordion Group -->
      </div>
      <!-- End 1st Level Collapse -->
    </div>
    <!-- End 1st Level Accordion -->
    <!-- 1st Level Accordion -->
    <div class="accordion-item dragged:bg-primary/20 dragged:rounded-sm nested-1" role="treeitem" aria-expanded="false" id="draggable-tree-heading-two"
      data-tree-view-item='{
        "value": "scripts",
        "isDir": true
      }'
    >
      <!-- 1st Level Accordion Heading -->
      <div class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5" >
        <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-expanded="false" aria-controls="draggable-tree-collapse-two" >
          <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
        </button>
        <div class="tree-view-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
          <div class="flex items-center gap-x-3">
            <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
            <div class="grow">
              <span class="text-base-content">scripts</span>
            </div>
          </div>
        </div>
      </div>
      <!-- End 1st Level Accordion Heading -->
      <!-- 1st Level Collapse -->
      <div id="draggable-tree-collapse-two" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="draggable-tree-heading-two" >
        <div class="tree-view-space" data-nested-draggable="">
          <!-- 1st Level Item -->
          <div class="tree-view-selected:bg-base-300/40 dragged:bg-primary/20 dragged:rounded-sm nested-2 cursor-pointer rounded-md px-2" role="treeitem"
            data-tree-view-item='{
              "value": "flyonui.js",
              "isDir": false
            }'
          >
            <div class="flex items-center gap-x-3">
              <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
              <div class="grow">
                <span class="text-base-content">flyonui.js</span>
              </div>
            </div>
          </div>
          <!-- End 1st Level Item -->
          <!-- 1st Level Item -->
          <div class="tree-view-selected:bg-base-300/40 dragged:bg-primary/20 dragged:rounded-sm nested-2 cursor-pointer rounded-md px-2" role="treeitem"
            data-tree-view-item='{
              "value": "tailwind.js",
              "isDir": false
            }'
          >
            <div class="flex items-center gap-x-3">
              <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
              <div class="grow">
                <span class="text-base-content">tailwind.js</span>
              </div>
            </div>
          </div>
          <!-- End 1st Level Item -->
          <!-- 1st Level Item -->
          <div class="tree-view-selected:bg-base-300/40 dragged:bg-primary/20 dragged:rounded-sm nested-2 cursor-pointer rounded-md px-2" role="treeitem"
            data-tree-view-item='{
              "value": "www.js",
              "isDir": false
            }'
          >
            <div class="flex items-center gap-x-3">
              <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
              <div class="grow">
                <span class="text-base-content">www.js</span>
              </div>
            </div>
          </div>
          <!-- End 1st Level Item -->
        </div>
      </div>
      <!-- End 1st Level Collapse -->
    </div>
    <!-- End 1st Level Accordion -->
    <!-- 1st Level Accordion -->
    <div class="accordion-item dragged:bg-primary/20 dragged:rounded-sm nested-1" role="treeitem" aria-expanded="false" id="draggable-tree-heading-three"
      data-tree-view-item='{
        "value": "templates",
        "isDir": true
      }'
    >
      <!-- 1st Level Accordion Heading -->
      <div class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5" >
        <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-expanded="false" aria-controls="draggable-tree-collapse-three" >
          <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
        </button>
        <div class="tree-view-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
          <div class="flex items-center gap-x-3">
            <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
            <div class="grow">
              <span class="text-base-content">templates</span>
            </div>
          </div>
        </div>
      </div>
      <!-- End 1st Level Accordion Heading -->
      <!-- 1st Level Collapse -->
      <div id="draggable-tree-collapse-three" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="draggable-tree-heading-three" >
        <div class="tree-view-space" data-nested-draggable="">
          <!-- 1st Level Item -->
          <div class="tree-view-selected:bg-base-300/40 dragged:bg-primary/20 dragged:rounded-sm nested-2 cursor-pointer rounded-md px-2" role="treeitem"
            data-tree-view-item='{
              "value": "index.html",
              "isDir": false
            }'
          >
            <div class="flex items-center gap-x-3">
              <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
              <div class="grow">
                <span class="text-base-content">index.html</span>
              </div>
            </div>
          </div>
          <!-- End 1st Level Item -->
        </div>
      </div>
      <!-- End 1st Level Collapse -->
    </div>
  </div>
  <!-- End 1st Level Accordion Group -->
</div>
<!-- End Tree Root -->
```

```js
<script>
  window.addEventListener('load', () => {
    ;(function () {
      const draggable = document.querySelectorAll('[data-nested-draggable]')

      draggable.forEach(el => {
        const options = {
          group: 'nested',
          animation: 150,
          fallbackOnBody: true,
          swapThreshold: 0.65,
          ghostClass: 'dragged',
          onEnd: evt => {
            const { item } = evt

            if (item.classList.contains('accordion')) {
              let existingInstance = HSAccordion.getInstance(item, true)
              let updatedInstance

              existingInstance.element.update()
              updatedInstance = HSAccordion.getInstance(item, true)
              window.$hsAccordionCollection.map(el => {
                if (
                  el.element.el !== existingInstance.element.el &&
                  el.element.group === existingInstance.element.group &&
                  el.element.el.closest('.accordion') &&
                  el.element.el.classList.contains('active') &&
                  existingInstance.element.el.classList.contains('active')
                )
                  el.element.hide()

                return el
              })
            }

            if (!!item.hasAttribute('data-tree-view-item')) {
              const treeViewItem = HSTreeView.getInstance(item.closest('[data-tree-view]'), true)

              treeViewItem.element.update()
            }
          }
        }
        const data = el.getAttribute('data-nested-draggable')
        const dataOptions = data ? JSON.parse(data) : {}
        const sortable = new Sortable(el, _.merge(options, dataOptions))
      })
    })()
  })
</script>


```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<!-- Tree Root -->
<div id="tree-view-nested-alt" class="rounded-sm" role="tree" aria-orientation="vertical" data-tree-view="">
  <!-- 1st Level Accordion Group -->
  <div class="accordion" data-nested-draggable="">
    <!-- 1st Level Accordion -->
    <div class="accordion-item dragged:bg-primary/20 dragged:rounded-sm nested-1 active" role="treeitem" aria-expanded="true" id="draggable-and-auto-collapse-one-level-group-tree-heading-one"
      data-tree-view-item='{
      "value": "assets",
      "isDir": true
    }'
    >
      <!-- 1st Level Accordion Heading -->
      <div
        class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5"
      >
        <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-expanded="true" aria-controls="draggable-and-auto-collapse-one-level-group-tree-collapse-one" >
          <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
        </button>
        <div class="tree-view-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
          <div class="flex items-center gap-x-3">
            <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
            <div class="grow">
              <span class="text-base-content">assets</span>
            </div>
          </div>
        </div>
      </div>
      <!-- End 1st Level Accordion Heading -->
      <!-- 1st Level Collapse -->
      <div id="draggable-and-auto-collapse-one-level-group-tree-collapse-one" class="accordion-content w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="draggable-and-auto-collapse-one-level-group-tree-heading-one" >
        <!-- 2nd Level Accordion Group -->
        <div class="accordion tree-view-space" data-nested-draggable="">
          <!-- 2nd Level Nested Accordion -->
          <div class="accordion-item dragged:bg-primary/20 dragged:rounded-sm nested-2 active" role="treeitem" aria-expanded="true" id="draggable-and-auto-collapse-one-level-group-tree-sub-heading-one"
            data-tree-view-item='{
            "value": "css",
            "isDir": true
          }'
          >
            <!-- 2nd Level Accordion Heading -->
            <div class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5" >
              <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-expanded="true" aria-controls="draggable-and-auto-collapse-one-level-group-tree-sub-collapse-one" >
                <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
              </button>
              <div class="tree-view-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
                <div class="flex items-center gap-x-3">
                  <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
                  <div class="grow">
                    <span class="text-base-content">css</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- End 2nd Level Accordion Heading -->
            <!-- 2nd Level Collapse -->
            <div id="draggable-and-auto-collapse-one-level-group-tree-sub-collapse-one" class="accordion-content w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="draggable-and-auto-collapse-one-level-group-tree-sub-heading-one" >
              <!-- 3rd Level Accordion Group -->
              <div class="accordion tree-view-space" data-nested-draggable="">
                <!-- 3rd Level Accordion -->
                <div class="accordion-item dragged:bg-primary/20 dragged:rounded-sm nested-3 active" role="treeitem" aria-expanded="true" id="draggable-and-auto-collapse-one-level-group-tree-sub-level-two-heading-one"
                  data-tree-view-item='{
                  "value": "main",
                  "isDir": true
                }'
                >
                  <!-- 3rd Level Accordion Heading -->
                  <div class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5" >
                    <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-expanded="true" aria-controls="draggable-and-auto-collapse-one-level-group-tree-sub-level-two-collapse-one" >
                      <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
                    </button>
                    <div class="tree-view-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
                      <div class="flex items-center gap-x-3">
                        <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
                        <div class="grow">
                          <span class="text-base-content">main</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- End 3rd Level Accordion Heading -->
                  <!-- 3rd Level Collapse -->
                  <div id="draggable-and-auto-collapse-one-level-group-tree-sub-level-two-collapse-one" class="accordion-content w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="draggable-and-auto-collapse-one-level-group-tree-sub-level-two-heading-one" >
                    <div class="tree-view-space" data-nested-draggable="">
                      <!-- 3rd Level Item -->
                      <div class="tree-view-selected:bg-base-300/40 dragged:bg-primary/20 dragged:rounded-sm nested-4 cursor-pointer rounded-md px-2" role="treeitem"
                        data-tree-view-item='{
                        "value": "main.css",
                        "isDir": false
                      }'
                      >
                        <div class="flex items-center gap-x-3">
                          <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
                          <div class="grow">
                            <span class="text-base-content">main.css</span>
                          </div>
                        </div>
                      </div>
                      <!-- End 3rd Level Item -->
                      <!-- 3rd Level Item -->
                      <div class="tree-view-selected:bg-base-300/40 dragged:bg-primary/20 dragged:rounded-sm nested-4 cursor-pointer rounded-md px-2" role="treeitem"
                        data-tree-view-item='{
                        "value": "docs.css",
                        "isDir": false
                      }'
                      >
                        <div class="flex items-center gap-x-3">
                          <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
                          <div class="grow">
                            <span class="text-base-content">docs.css</span>
                          </div>
                        </div>
                      </div>
                      <!-- End 3rd Level Item -->
                      <!-- 3rd Level Item -->
                      <div class="tree-view-selected:bg-base-300/40 dragged:bg-primary/20 dragged:rounded-sm nested-4 tree-view-disabled:opacity-50 disabled px-2"
                        data-tree-view-item='{
                        "value": "README.txt",
                        "isDir": false
                      }'
                      >
                        <span class="text-base-content">README.txt</span>
                      </div>
                      <!-- End 3rd Level Item -->
                    </div>
                  </div>
                  <!-- End 3rd Level Collapse -->
                </div>
                <!-- End 3rd Level Accordion -->
                <!-- 3rd Level Accordion -->
                <div class="accordion-item dragged:bg-primary/20 dragged:rounded-sm nested-3" role="treeitem" aria-expanded="false" id="draggable-and-auto-collapse-one-level-group-tree-sub-level-two-heading-two"
                  data-tree-view-item='{
                  "value": "tailwind",
                  "isDir": true
                }'
                >
                  <!-- 3rd Level Accordion Heading -->
                  <div class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5" >
                    <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-expanded="false" aria-controls="draggable-and-auto-collapse-one-level-group-tree-sub-level-two-collapse-two" >
                      <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
                    </button>
                    <div class="tree-view-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
                      <div class="flex items-center gap-x-3">
                        <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
                        <div class="grow">
                          <span class="text-base-content">tailwind</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- End 3rd Level Accordion Heading -->
                  <!-- 3rd Level Collapse -->
                  <div id="draggable-and-auto-collapse-one-level-group-tree-sub-level-two-collapse-two" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="draggable-and-auto-collapse-one-level-group-tree-sub-level-two-heading-two" >
                    <div class="tree-view-space" data-nested-draggable="">
                      <!-- 3rd Level Item -->
                      <div class="tree-view-selected:bg-base-300/40 dragged:bg-primary/20 dragged:rounded-sm nested-4 cursor-pointer rounded-md px-2" role="treeitem"
                        data-tree-view-item='{
                        "value": "input.css",
                        "isDir": false
                      }'
                      >
                        <div class="flex items-center gap-x-3">
                          <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
                          <div class="grow">
                            <span class="text-base-content">input.css</span>
                          </div>
                        </div>
                      </div>
                      <!-- End 3rd Level Item -->
                    </div>
                  </div>
                  <!-- End 3rd Level Collapse -->
                </div>
                <!-- End 3rd Level Accordion -->
                <!-- 3rd Level Heading -->
                <div class="tree-view-selected:bg-base-300/40 dragged:bg-primary/20 dragged:rounded-sm nested-3 rounded-md px-1.5 py-0.5" role="treeitem"
                  data-tree-view-item='{
                  "value": ".gitignore",
                  "isDir": false
                }'
                >
                  <span class="text-base-content">.gitignore</span>
                </div>
                <!-- End 3rd Level Heading -->
              </div>
              <!-- End 3rd Level Accordion Group -->
            </div>
            <!-- End 2nd Level Collapse -->
          </div>
          <!-- End 2nd Level Nested Accordion -->
          <!-- 2nd Level Nested Accordion -->
          <div class="accordion-item dragged:bg-primary/20 dragged:rounded-sm nested-2" role="treeitem" aria-expanded="false" id="draggable-and-auto-collapse-one-level-group-tree-sub-heading-two"
            data-tree-view-item='{
            "value": "img",
            "isDir": true
          }'
          >
            <!-- 2nd Level Accordion Heading -->
            <div class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5" >
              <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-expanded="false" aria-controls="draggable-and-auto-collapse-one-level-group-tree-sub-collapse-two" >
                <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
              </button>
              <div class="tree-view-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
                <div class="flex items-center gap-x-3">
                  <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
                  <div class="grow">
                    <span class="text-base-content">img</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- End 2nd Level Accordion Heading -->
            <!-- 2nd Level Collapse -->
            <div id="draggable-and-auto-collapse-one-level-group-tree-sub-collapse-two" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="draggable-and-auto-collapse-one-level-group-tree-sub-heading-two" >
              <div class="tree-view-space" data-nested-draggable="">
                <!-- 2nd Level Item -->
                <div class="tree-view-selected:bg-base-300/40 dragged:bg-primary/20 dragged:rounded-sm nested-3 cursor-pointer rounded-md px-2" role="treeitem"
                  data-tree-view-item='{
                  "value": "hero.jpg",
                  "isDir": false
                }'
                >
                  <div class="flex items-center gap-x-3">
                    <span class="icon-[componentx--photo] text-base-content size-4 shrink-0"></span>
                    <div class="grow">
                      <span class="text-base-content">hero.jpg</span>
                    </div>
                  </div>
                </div>
                <!-- End 2nd Level Item -->
                <!-- 2nd Level Item -->
                <div class="tree-view-selected:bg-base-300/40 dragged:bg-primary/20 dragged:rounded-sm nested-3 cursor-pointer rounded-md px-2" role="treeitem"
                  data-tree-view-item='{
                  "value": "tailwind.png",
                  "isDir": false
                }'
                >
                  <div class="flex items-center gap-x-3">
                    <span class="icon-[componentx--photo] text-base-content size-4 shrink-0"></span>
                    <div class="grow">
                      <span class="text-base-content">tailwind.png</span>
                    </div>
                  </div>
                </div>
                <!-- End 2nd Level Item -->
                <!-- 2nd Level Item -->
                <div class="tree-view-selected:bg-base-300/40 dragged:bg-primary/20 dragged:rounded-sm nested-3 cursor-pointer rounded-md px-2" role="treeitem"
                  data-tree-view-item='{
                  "value": "untitled.png",
                  "isDir": false
                }'
                >
                  <div class="flex items-center gap-x-3">
                    <span class="icon-[componentx--photo] text-base-content size-4 shrink-0"></span>
                    <div class="grow">
                      <span class="text-base-content">untitled.png</span>
                    </div>
                  </div>
                </div>
                <!-- End 2nd Level Item -->
              </div>
            </div>
            <!-- End 2nd Level Collapse -->
          </div>
          <!-- End 2nd Level Nested Accordion -->
          <!-- 2nd Level Nested Accordion -->
          <div class="accordion-item dragged:bg-primary/20 dragged:rounded-sm nested-2" role="treeitem" aria-expanded="false" id="draggable-and-auto-collapse-one-level-group-tree-sub-heading-three"
            data-tree-view-item='{
            "value": "js",
            "isDir": true
          }'
          >
            <!-- 2nd Level Accordion Heading -->
            <div class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5" >
              <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-expanded="false" aria-controls="draggable-and-auto-collapse-one-level-group-tree-sub-collapse-three" >
                <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
              </button>
              <div class="tree-view-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
                <div class="flex items-center gap-x-3">
                  <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
                  <div class="grow">
                    <span class="text-base-content">js</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- End 2nd Level Accordion Heading -->
            <!-- 2nd Level Collapse -->
            <div id="draggable-and-auto-collapse-one-level-group-tree-sub-collapse-three" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="draggable-and-auto-collapse-one-level-group-tree-sub-heading-three" >
              <div class="tree-view-space" data-nested-draggable="">
                <!-- 2nd Level Item -->
                <div class="tree-view-selected:bg-base-300/40 dragged:bg-primary/20 dragged:rounded-sm nested-3 cursor-pointer rounded-md px-2" role="treeitem"
                  data-tree-view-item='{
                  "value": "flyonui.jpg",
                  "isDir": false
                }'
                >
                  <div class="flex items-center gap-x-3">
                    <span class="icon-[componentx--photo] text-base-content size-4 shrink-0"></span>
                    <div class="grow">
                      <span class="text-base-content">flyonui.jpg</span>
                    </div>
                  </div>
                </div>
                <!-- End 2nd Level Item -->
              </div>
            </div>
            <!-- End 2nd Level Collapse -->
          </div>
          <!-- End 2nd Level Nested Accordion -->
        </div>
        <!-- 2nd Level Accordion Group -->
      </div>
      <!-- End 1st Level Collapse -->
    </div>
    <!-- End 1st Level Accordion -->
    <!-- 1st Level Accordion -->
    <div class="accordion-item dragged:bg-primary/20 dragged:rounded-sm nested-1" role="treeitem" aria-expanded="false" id="draggable-and-auto-collapse-one-level-group-tree-heading-two"
      data-tree-view-item='{
      "value": "scripts",
      "isDir": true
    }'
    >
      <!-- 1st Level Accordion Heading -->
      <div class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5" >
        <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-expanded="false" aria-controls="draggable-and-auto-collapse-one-level-group-tree-collapse-two" >
          <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
        </button>
        <div class="tree-view-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
          <div class="flex items-center gap-x-3">
            <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
            <div class="grow">
              <span class="text-base-content">scripts</span>
            </div>
          </div>
        </div>
      </div>
      <!-- End 1st Level Accordion Heading -->
      <!-- 1st Level Collapse -->
      <div id="draggable-and-auto-collapse-one-level-group-tree-collapse-two" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="draggable-and-auto-collapse-one-level-group-tree-heading-two" >
        <div class="tree-view-space" data-nested-draggable="">
          <!-- 1st Level Item -->
          <div class="tree-view-selected:bg-base-300/40 dragged:bg-primary/20 dragged:rounded-sm nested-2 cursor-pointer rounded-md px-2" role="treeitem"
            data-tree-view-item='{
            "value": "flyonui.js",
            "isDir": false
          }'
          >
            <div class="flex items-center gap-x-3">
              <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
              <div class="grow">
                <span class="text-base-content">flyonui.js</span>
              </div>
            </div>
          </div>
          <!-- End 1st Level Item -->
          <!-- 1st Level Item -->
          <div class="tree-view-selected:bg-base-300/40 dragged:bg-primary/20 dragged:rounded-sm nested-2 cursor-pointer rounded-md px-2" role="treeitem"
            data-tree-view-item='{
            "value": "tailwind.js",
            "isDir": false
          }'
          >
            <div class="flex items-center gap-x-3">
              <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
              <div class="grow">
                <span class="text-base-content">tailwind.js</span>
              </div>
            </div>
          </div>
          <!-- End 1st Level Item -->
          <!-- 1st Level Item -->
          <div class="tree-view-selected:bg-base-300/40 dragged:bg-primary/20 dragged:rounded-sm nested-2 cursor-pointer rounded-md px-2" role="treeitem"
            data-tree-view-item='{
            "value": "www.js",
            "isDir": false
          }'
          >
            <div class="flex items-center gap-x-3">
              <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
              <div class="grow">
                <span class="text-base-content">www.js</span>
              </div>
            </div>
          </div>
          <!-- End 1st Level Item -->
        </div>
      </div>
      <!-- End 1st Level Collapse -->
    </div>
    <!-- End 1st Level Accordion -->
    <!-- 1st Level Accordion -->
    <div class="accordion-item dragged:bg-primary/20 dragged:rounded-sm nested-1 tree-view-disabled:opacity-50 disabled" role="treeitem" aria-expanded="false" id="draggable-and-auto-collapse-one-level-group-tree-heading-three"
      data-tree-view-item='{
      "value": "templates",
      "isDir": true
    }'
    >
      <!-- 1st Level Accordion Heading -->
      <div class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5" >
        <button class="accordion-toggle tree-view-disabled:pointer-events-none btn btn-sm btn-circle btn-text" disabled="" aria-expanded="false" aria-controls="draggable-and-auto-collapse-one-level-group-tree-collapse-three" >
          <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
        </button>
        <div class="tree-view-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
          <div class="flex items-center gap-x-3">
            <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
            <div class="grow">
              <span class="text-base-content">templates</span>
            </div>
          </div>
        </div>
      </div>
      <!-- End 1st Level Accordion Heading -->
      <!-- 1st Level Collapse -->
      <div id="draggable-and-auto-collapse-one-level-group-tree-collapse-three" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="draggable-and-auto-collapse-one-level-group-tree-heading-three" >
        <div class="tree-view-space" data-nested-draggable="">
          <!-- 1st Level Item -->
          <div class="tree-view-selected:bg-base-300/40 dragged:bg-primary/20 dragged:rounded-sm nested-2 cursor-pointer rounded-md px-2" role="treeitem"
            data-tree-view-item='{
            "value": "index.html",
            "isDir": false
          }'
          >
            <div class="flex items-center gap-x-3">
              <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
              <div class="grow">
                <span class="text-base-content">index.html</span>
              </div>
            </div>
          </div>
          <!-- End 1st Level Item -->
        </div>
      </div>
      <!-- End 1st Level Collapse -->
    </div>
    <!-- End 1st Level Accordion -->

  </div>
  <!-- End 1st Level Accordion Group -->
</div>
<!-- End Tree Root -->
```

```js
<script>
  window.addEventListener('load', () => {
    ;(function () {
      const draggable = document.querySelectorAll('[data-nested-draggable]')

      draggable.forEach(el => {
        const options = {
          group: 'nested',
          animation: 150,
          fallbackOnBody: true,
          swapThreshold: 0.65,
          ghostClass: 'dragged',
          onEnd: evt => {
            const { item } = evt

            if (item.classList.contains('accordion')) {
              let existingInstance = HSAccordion.getInstance(item, true)
              let updatedInstance

              existingInstance.element.update()
              updatedInstance = HSAccordion.getInstance(item, true)
              window.$hsAccordionCollection.map(el => {
                if (
                  el.element.el !== existingInstance.element.el &&
                  el.element.group === existingInstance.element.group &&
                  el.element.el.closest('.accordion') &&
                  el.element.el.classList.contains('active') &&
                  existingInstance.element.el.classList.contains('active')
                )
                  el.element.hide()

                return el
              })
            }

            if (!!item.hasAttribute('data-tree-view-item')) {
              const treeViewItem = HSTreeView.getInstance(item.closest('[data-tree-view]'), true)

              treeViewItem.element.update()
            }
          }
        }
        const data = el.getAttribute('data-nested-draggable')
        const dataOptions = data ? JSON.parse(data) : {}
        const sortable = new Sortable(el, _.merge(options, dataOptions))
      })
    })()
  })
</script>


```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<!-- Tree Root -->
<div id="tree-view-checkbox" role="tree" aria-orientation="vertical"
  data-tree-view='{
  "controlBy": "checkbox",
  "autoSelectChildren": true
}'
>
  <!-- 1st Level Accordion Group -->
  <div data-nested-draggable="">
    <!-- 1st Level Accordion -->
    <div class="accordion-item dragged:bg-primary/20 dragged:rounded-sm nested-2-1 active" role="treeitem" aria-expanded="true" id="checkbox-tree-heading-one"
      data-tree-view-item='{
      "value": "assets",
      "isDir": true
    }'
    >
      <!-- 1st Level Accordion Heading -->
      <div class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5" >
        <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-expanded="true" aria-controls="checkbox-tree-collapse-one" >
          <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
        </button>
        <div class="tree-view-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
          <div class="flex items-center gap-2">
            <input type="checkbox" class="checkbox checkbox-xs" id="assets" value="assets" />
            <label class="label-text text-base" for="assets">assets</label>
          </div>
        </div>
      </div>
      <!-- End 1st Level Accordion Heading -->
      <!-- 1st Level Collapse -->
      <div id="checkbox-tree-collapse-one" class="accordion-content w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="checkbox-tree-heading-one" >
        <!-- 2nd Level Accordion Group -->
        <div class="tree-view-space" data-nested-draggable="">
          <!-- 2nd Level Nested Accordion -->
          <div class="accordion-item dragged:bg-primary/20 dragged:rounded-sm nested-2-2 active" role="treeitem" aria-expanded="true" id="checkbox-tree-sub-heading-one"
            data-tree-view-item='{
            "value": "css",
            "isDir": true
          }'
          >
            <!-- 2nd Level Accordion Heading -->
            <div class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5" >
              <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-expanded="true" aria-controls="checkbox-tree-sub-collapse-one" >
                <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
              </button>
              <div class="tree-view-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
                <div class="flex items-center gap-2">
                  <input type="checkbox" class="checkbox checkbox-xs" id="css" value="css" />
                  <label class="label-text text-base" for="css">css</label>
                </div>
              </div>
            </div>
            <!-- End 2nd Level Accordion Heading -->
            <!-- 2nd Level Collapse -->
            <div id="checkbox-tree-sub-collapse-one" class="accordion-content w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="checkbox-tree-sub-heading-one" >
              <!-- 3rd Level Accordion Group -->
              <div class="tree-view-space" data-nested-draggable="">
                <!-- 3rd Level Accordion -->
                <div class="accordion-item dragged:bg-primary/20 dragged:rounded-sm nested-2-3 active" role="treeitem" aria-expanded="true" id="checkbox-tree-sub-level-two-heading-one"
                  data-tree-view-item='{
                  "value": "main",
                  "isDir": true
                }'
                >
                  <!-- 3rd Level Accordion Heading -->
                  <div class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5" >
                    <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-expanded="true" aria-controls="checkbox-tree-sub-level-two-collapse-one" >
                      <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
                    </button>
                    <div class="tree-view-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
                      <div class="flex items-center gap-2">
                        <input type="checkbox" class="checkbox checkbox-xs" id="main" value="main" />
                        <label class="label-text text-base" for="main">main</label>
                      </div>
                    </div>
                  </div>
                  <!-- End 3rd Level Accordion Heading -->
                  <!-- 3rd Level Collapse -->
                  <div id="checkbox-tree-sub-level-two-collapse-one" class="accordion-content w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="checkbox-tree-sub-level-two-heading-one" >
                    <div class="tree-view-space" data-nested-draggable="">
                      <!-- 3rd Level Item -->
                      <div class="tree-view-selected:bg-base-300/40 dragged:bg-primary/20 dragged:rounded-sm nested-2-4 cursor-pointer rounded-md px-2" role="treeitem"
                        data-tree-view-item='{
                        "value": "main.css",
                        "isDir": false
                      }'
                      >
                        <div class="flex items-center gap-2">
                          <input type="checkbox" class="checkbox checkbox-xs" id="mainCss" value="main.css" />
                          <label class="label-text text-base" for="mainCss">main.css</label>
                        </div>
                      </div>
                      <!-- End 3rd Level Item -->
                      <!-- 3rd Level Item -->
                      <div class="tree-view-selected:bg-base-300/40 dragged:bg-primary/20 dragged:rounded-sm nested-2-4 cursor-pointer rounded-md px-2" role="treeitem"
                        data-tree-view-item='{
                        "value": "docs.css",
                        "isDir": false
                      }'
                      >
                        <div class="flex items-center gap-2">
                          <input type="checkbox" class="checkbox checkbox-xs" id="docs" value="docs.css" />
                          <label class="label-text text-base" for="docs">docs.css</label>
                        </div>
                      </div>
                      <!-- End 3rd Level Item -->
                      <!-- 3rd Level Item -->
                      <div class="tree-view-selected:bg-base-300/40 dragged:bg-primary/20 dragged:rounded-sm nested-2-4 tree-view-disabled:opacity-50 disabled px-2"
                        data-tree-view-item='{
                        "value": "README.txt",
                        "isDir": false
                      }'
                      >
                        <div class="flex items-center gap-2">
                          <input type="checkbox" class="checkbox checkbox-xs" id="readme" value="README.txt" disabled />
                          <label class="label-text text-base" for="readme">README.txt</label>
                        </div>
                      </div>
                      <!-- End 3rd Level Item -->
                    </div>
                  </div>
                  <!-- End 3rd Level Collapse -->
                </div>
                <!-- End 3rd Level Accordion -->
                <!-- 3rd Level Accordion -->
                <div class="accordion-item dragged:bg-primary/20 dragged:rounded-sm nested-2-3" role="treeitem" aria-expanded="false" id="checkbox-tree-sub-level-two-heading-two"
                  data-tree-view-item='{
                  "value": "tailwind",
                  "isDir": true
                }'
                >
                  <!-- 3rd Level Accordion Heading -->
                  <div class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5" >
                    <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-expanded="false" aria-controls="checkbox-tree-sub-level-two-collapse-two" >
                      <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
                    </button>
                    <div class="tree-view-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
                      <div class="flex items-center gap-2">
                        <input type="checkbox" class="checkbox checkbox-xs" id="tailwind" value="tailwind" />
                        <label class="label-text text-base" for="tailwind">tailwind</label>
                      </div>
                    </div>
                  </div>
                  <!-- End 3rd Level Accordion Heading -->
                  <!-- 3rd Level Collapse -->
                  <div id="checkbox-tree-sub-level-two-collapse-two" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="checkbox-tree-sub-level-two-heading-two" >
                    <div class="tree-view-space" data-nested-draggable="">
                      <!-- 3rd Level Item -->
                      <div class="tree-view-selected:bg-base-300/40 dragged:bg-primary/20 dragged:rounded-sm nested-2-4 cursor-pointer rounded-md px-2" role="treeitem"
                        data-tree-view-item='{
                        "value": "input.css",
                        "isDir": false
                      }'
                      >
                        <div class="flex items-center gap-2">
                          <input type="checkbox" class="checkbox checkbox-xs" id="inputCss" value="input.css" />
                          <label class="label-text text-base" for="inputCss">input.css</label>
                        </div>
                      </div>
                      <!-- End 3rd Level Item -->
                    </div>
                  </div>
                  <!-- End 3rd Level Collapse -->
                </div>
                <!-- End 3rd Level Accordion -->
                <!-- 3rd Level Heading -->
                <div class="tree-view-selected:bg-base-300/40 dragged:bg-primary/20 dragged:rounded-sm nested-2-3 rounded-md px-1.5 py-0.5" role="treeitem"
                  data-tree-view-item='{
                  "value": ".gitignore",
                  "isDir": false
                }'
                >
                  <div class="flex items-center gap-2">
                    <input type="checkbox" class="checkbox checkbox-xs" id="gitignore" value=".gitignore" />
                    <label class="label-text text-base" for="gitignore">.gitignore</label>
                  </div>
                </div>
                <!-- End 3rd Level Heading -->
              </div>
              <!-- End 3rd Level Accordion Group -->
            </div>
            <!-- End 2nd Level Collapse -->
          </div>
          <!-- End 2nd Level Nested Accordion -->
          <!-- 2nd Level Nested Accordion -->
          <div class="accordion-item dragged:bg-primary/20 dragged:rounded-sm nested-2-2" role="treeitem" aria-expanded="false" id="checkbox-tree-sub-heading-two"
            data-tree-view-item='{
            "value": "img",
            "isDir": true
          }'
          >
            <!-- 2nd Level Accordion Heading -->
            <div class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5" >
              <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-expanded="false" aria-controls="checkbox-tree-sub-collapse-two" >
                <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
              </button>
              <div class="tree-view-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
                <div class="flex items-center gap-2">
                  <input type="checkbox" class="checkbox checkbox-xs" id="img" value="img" />
                  <label class="label-text text-base" for="img">img</label>
                </div>
              </div>
            </div>
            <!-- End 2nd Level Accordion Heading -->
            <!-- 2nd Level Collapse -->
            <div id="checkbox-tree-sub-collapse-two" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="checkbox-tree-sub-heading-two" >
              <div class="tree-view-space" data-nested-draggable="">
                <!-- 2nd Level Item -->
                <div class="tree-view-selected:bg-base-300/40 dragged:bg-primary/20 dragged:rounded-sm nested-2-3 cursor-pointer rounded-md px-2" role="treeitem"
                  data-tree-view-item='{
                  "value": "hero.jpg",
                  "isDir": false
                }'
                >
                  <div class="flex items-center gap-2">
                    <input type="checkbox" class="checkbox checkbox-xs" id="hero" value="hero.jpg" />
                    <label class="label-text text-base" for="hero">hero.jpg</label>
                  </div>
                </div>
                <!-- End 2nd Level Item -->
                <!-- 2nd Level Item -->
                <div class="tree-view-selected:bg-base-300/40 dragged:bg-primary/20 dragged:rounded-sm nested-2-3 cursor-pointer rounded-md px-2" role="treeitem"
                  data-tree-view-item='{
                  "value": "tailwind.png",
                  "isDir": false
                }'
                >
                  <div class="flex items-center gap-2">
                    <input type="checkbox" class="checkbox checkbox-xs" id="tailwindPng" value="tailwind.png" />
                    <label class="label-text text-base" for="tailwindPng">tailwind.png</label>
                  </div>
                </div>
                <!-- End 2nd Level Item -->
                <!-- 2nd Level Item -->
                <div class="tree-view-selected:bg-base-300/40 dragged:bg-primary/20 dragged:rounded-sm nested-2-3 cursor-pointer rounded-md px-2" role="treeitem"
                  data-tree-view-item='{
                  "value": "untitled.png",
                  "isDir": false
                }'
                >
                  <div class="flex items-center gap-2">
                    <input type="checkbox" class="checkbox checkbox-xs" id="untitled" value="untitled.png" />
                    <label class="label-text text-base" for="untitled">untitled.png</label>
                  </div>
                </div>
                <!-- End 2nd Level Item -->
              </div>
            </div>
            <!-- End 2nd Level Collapse -->
          </div>
          <!-- End 2nd Level Nested Accordion -->
          <!-- 2nd Level Nested Accordion -->
          <div class="accordion-item dragged:bg-primary/20 dragged:rounded-sm nested-2-2" role="treeitem" aria-expanded="false" id="checkbox-tree-sub-heading-three"
            data-tree-view-item='{
            "value": "js",
            "isDir": true
          }'
          >
            <!-- 2nd Level Accordion Heading -->
            <div class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5" >
              <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-expanded="false" aria-controls="checkbox-tree-sub-collapse-three" >
                <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
              </button>
              <div class="tree-view-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
                <div class="flex items-center gap-2">
                  <input type="checkbox" class="checkbox checkbox-xs" id="js" value="js" />
                  <label class="label-text text-base" for="js">js</label>
                </div>
              </div>
            </div>
            <!-- End 2nd Level Accordion Heading -->
            <!-- 2nd Level Collapse -->
            <div id="checkbox-tree-sub-collapse-three" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="checkbox-tree-sub-heading-three" >
              <div class="tree-view-space" data-nested-draggable="">
                <!-- 2nd Level Item -->
                <div class="tree-view-selected:bg-base-300/40 dragged:bg-primary/20 dragged:rounded-sm nested-2-3 cursor-pointer rounded-md px-2" role="treeitem"
                  data-tree-view-item='{
                  "value": "flyonui.jpg",
                  "isDir": false
                }'
                >
                  <div class="flex items-center gap-2">
                    <input type="checkbox" class="checkbox checkbox-xs" id="flyonuiJpg" value="flyonui.jpg" />
                    <label class="label-text text-base" for="flyonuiJpg">flyonui.jpg</label>
                  </div>
                </div>
                <!-- End 2nd Level Item -->
              </div>
            </div>
            <!-- End 2nd Level Collapse -->
          </div>
          <!-- End 2nd Level Nested Accordion -->
        </div>
        <!-- 2nd Level Accordion Group -->
      </div>
      <!-- End 1st Level Collapse -->
    </div>
    <!-- End 1st Level Accordion -->
    <!-- 1st Level Accordion -->
    <div class="accordion-item dragged:bg-primary/20 dragged:rounded-sm nested-2-1" role="treeitem" aria-expanded="false" id="checkbox-tree-heading-two"
      data-tree-view-item='{
      "value": "scripts",
      "isDir": true
    }'
    >
      <!-- 1st Level Accordion Heading -->
      <div class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5" >
        <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-expanded="false" aria-controls="checkbox-tree-collapse-two" >
          <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
        </button>
        <div class="tree-view-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
          <div class="flex items-center gap-2">
            <input type="checkbox" class="checkbox checkbox-xs" id="scripts" value="scripts" />
            <label class="label-text text-base" for="scripts">scripts</label>
          </div>
        </div>
      </div>
      <!-- End 1st Level Accordion Heading -->
      <!-- 1st Level Collapse -->
      <div id="checkbox-tree-collapse-two" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="checkbox-tree-heading-two" >
        <div class="tree-view-space" data-nested-draggable="">
          <!-- 1st Level Item -->
          <div class="tree-view-selected:bg-base-300/40 dragged:bg-primary/20 dragged:rounded-sm nested-2-2 cursor-pointer rounded-md px-2" role="treeitem"
            data-tree-view-item='{
            "value": "flyonui.js",
            "isDir": false
          }'
          >
            <div class="flex items-center gap-2">
              <input type="checkbox" class="checkbox checkbox-xs" id="flyonuiJs" value="flyonui.js" />
              <label class="label-text text-base" for="flyonuiJs">flyonui.js</label>
            </div>
          </div>
          <!-- End 1st Level Item -->
          <!-- 1st Level Item -->
          <div class="tree-view-selected:bg-base-300/40 dragged:bg-primary/20 dragged:rounded-sm nested-2-2 cursor-pointer rounded-md px-2" role="treeitem"
            data-tree-view-item='{
            "value": "tailwind.js",
            "isDir": false
          }'
          >
            <div class="flex items-center gap-2">
              <input type="checkbox" class="checkbox checkbox-xs" id="tailwindJS" value="tailwind.js" />
              <label class="label-text text-base" for="tailwindJS">tailwind.js</label>
            </div>
          </div>
          <!-- End 1st Level Item -->
          <!-- 1st Level Item -->
          <div class="tree-view-selected:bg-base-300/40 dragged:bg-primary/20 dragged:rounded-sm nested-2-2 cursor-pointer rounded-md px-2" role="treeitem"
            data-tree-view-item='{
            "value": "www.js",
            "isDir": false
          }'
          >
            <div class="flex items-center gap-2">
              <input type="checkbox" class="checkbox checkbox-xs" id="www" value="www.js" />
              <label class="label-text text-base" for="www">www.js</label>
            </div>
          </div>
          <!-- End 1st Level Item -->
        </div>
      </div>
      <!-- End 1st Level Collapse -->
    </div>
    <!-- End 1st Level Accordion -->
    <!-- 1st Level Accordion -->
    <div class="accordion-item dragged:bg-primary/20 dragged:rounded-sm nested-2-1 tree-view-disabled:opacity-50 disabled" role="treeitem" aria-expanded="false" id="checkbox-tree-heading-three"
      data-tree-view-item='{
      "value": "templates",
      "isDir": true
    }'
    >
      <!-- 1st Level Accordion Heading -->
      <div class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5" >
        <button class="accordion-toggle tree-view-disabled:pointer-events-none btn btn-sm btn-circle btn-text" aria-expanded="false" aria-controls="checkbox-tree-collapse-three" disabled="" >
          <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
        </button>
        <div class="tree-view-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
          <span class="text-base-content">
            <div class="flex items-center gap-2">
              <input type="checkbox" class="checkbox checkbox-xs" id="templates" value="templates" disabled />
              <label class="label-text text-base" for="templates">templates</label>
            </div>
          </span>
        </div>
      </div>
      <!-- End 1st Level Accordion Heading -->
      <!-- 1st Level Collapse -->
      <div id="checkbox-tree-collapse-three" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="checkbox-tree-heading-three" >
        <div class="tree-view-space" data-nested-draggable="">
          <!-- 1st Level Item -->
          <div class="tree-view-selected:bg-base-300/40 dragged:bg-primary/20 dragged:rounded-sm nested-2-2 cursor-pointer rounded-md px-2" role="treeitem"
            data-tree-view-item='{
            "value": "index.html",
            "isDir": false
          }'
          >
            <div class="flex items-center gap-2">
              <input type="checkbox" class="checkbox checkbox-xs" id="indexHtml" value="index.html" />
              <label class="label-text text-base" for="indexHtml">index.html</label>
            </div>
          </div>
          <!-- End 1st Level Item -->
        </div>
      </div>
      <!-- End 1st Level Collapse -->
    </div>
    <!-- End 1st Level Accordion -->

  </div>
  <!-- End 1st Level Accordion Group -->
</div>
<!-- End Tree Root -->
```

```js
<script>
  window.addEventListener('load', () => {
    ;(function () {
      const draggable = document.querySelectorAll('[data-nested-draggable]')

      draggable.forEach(el => {
        const options = {
          group: 'nested',
          animation: 150,
          fallbackOnBody: true,
          swapThreshold: 0.65,
          ghostClass: 'dragged',
          onEnd: evt => {
            const { item } = evt

            if (item.classList.contains('accordion')) {
              let existingInstance = HSAccordion.getInstance(item, true)
              let updatedInstance

              existingInstance.element.update()
              updatedInstance = HSAccordion.getInstance(item, true)
              window.$hsAccordionCollection.map(el => {
                if (
                  el.element.el !== existingInstance.element.el &&
                  el.element.group === existingInstance.element.group &&
                  el.element.el.closest('.accordion') &&
                  el.element.el.classList.contains('active') &&
                  existingInstance.element.el.classList.contains('active')
                )
                  el.element.hide()

                return el
              })
            }

            if (!!item.hasAttribute('data-tree-view-item')) {
              const treeViewItem = HSTreeView.getInstance(item.closest('[data-tree-view]'), true)

              treeViewItem.element.update()
            }
          }
        }
        const data = el.getAttribute('data-nested-draggable')
        const dataOptions = data ? JSON.parse(data) : {}
        const sortable = new Sortable(el, _.merge(options, dataOptions))
      })
    })()
  })
</script>


```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div id="tree-view-to-destroy" class="rounded-sm w-fit" role="tree" aria-orientation="vertical" data-tree-view="">
  <!-- 1st Level Accordion Group -->
  <!-- 1st Level Accordion -->
  <div class="accordion-item active" role="treeitem" aria-expanded="true" id="destroy-tree-view-heading-one"
    data-tree-view-item='{
      "value": "assets",
      "isDir": true
    }'
  >
    <!-- 1st Level Accordion Heading -->
    <div class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5" >
      <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-expanded="true" aria-controls="destroy-tree-view-collapse-one" >
        <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
      </button>
      <div class="tree-view-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
        <div class="flex items-center gap-x-3">
          <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
          <div class="grow">
            <span class="text-base-content">assets</span>
          </div>
        </div>
      </div>
    </div>
    <!-- End 1st Level Accordion Heading -->
    <!-- 1st Level Collapse -->
    <div id="destroy-tree-view-collapse-one" class="accordion-content w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="destroy-tree-view-heading-one" >
      <!-- 2nd Level Accordion Group -->
      <div class="tree-view-space">
        <!-- 2nd Level Nested Accordion -->
        <div class="accordion-item active" role="treeitem" aria-expanded="true" id="destroy-tree-view-sub-heading-one"
          data-tree-view-item='{
            "value": "css",
            "isDir": true
          }'
        >
          <!-- 2nd Level Accordion Heading -->
          <div class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5" >
            <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-expanded="true" aria-controls="destroy-tree-view-sub-collapse-one" >
              <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
            </button>
            <div class="tree-view-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
              <div class="flex items-center gap-x-3">
                <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
                <div class="grow">
                  <span class="text-base-content">css</span>
                </div>
              </div>
            </div>
          </div>
          <!-- End 2nd Level Accordion Heading -->
          <!-- 2nd Level Collapse -->
          <div id="destroy-tree-view-sub-collapse-one" class="accordion-content w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="destroy-tree-view-sub-heading-one" >
            <!-- 3rd Level Accordion Group -->
            <div class="tree-view-space">
              <!-- 3rd Level Accordion -->
              <div class="accordion-item active" role="treeitem" aria-expanded="true" id="destroy-tree-view-sub-level-two-heading-one"
                data-tree-view-item='{
                  "value": "main",
                  "isDir": true
                }'
              >
                <!-- 3rd Level Accordion Heading -->
                <div class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5" >
                  <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-expanded="true" aria-controls="destroy-tree-view-sub-level-two-collapse-one" >
                    <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
                  </button>
                  <div class="tree-view-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
                    <div class="flex items-center gap-x-3">
                      <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
                      <div class="grow">
                        <span class="text-base-content">main</span>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- End 3rd Level Accordion Heading -->
                <!-- 3rd Level Collapse -->
                <div id="destroy-tree-view-sub-level-two-collapse-one" class="accordion-content w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="destroy-tree-view-sub-level-two-heading-one" >
                  <div class="tree-view-space">
                    <!-- 3rd Level Item -->
                    <div class="tree-view-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem"
                      data-tree-view-item='{
                        "value": "main.css",
                        "isDir": false
                      }'
                    >
                      <div class="flex items-center gap-x-3">
                        <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
                        <div class="grow">
                          <span class="text-base-content">main.css</span>
                        </div>
                      </div>
                    </div>
                    <!-- End 3rd Level Item -->
                    <!-- 3rd Level Item -->
                    <div class="tree-view-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem"
                      data-tree-view-item='{
                        "value": "docs.css",
                        "isDir": false
                      }'
                    >
                      <div class="flex items-center gap-x-3">
                        <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
                        <div class="grow">
                          <span class="text-base-content">docs.css</span>
                        </div>
                      </div>
                    </div>
                    <!-- End 3rd Level Item -->
                    <!-- 3rd Level Item -->
                    <div class="tree-view-selected:bg-base-300/40 rounded-md px-2"
                      data-tree-view-item='{
                        "value": "README.txt",
                        "isDir": false
                      }'
                    >
                      <span class="text-base-content">README.txt</span>
                    </div>
                    <!-- End 3rd Level Item -->
                  </div>
                </div>
                <!-- End 3rd Level Collapse -->
              </div>
              <!-- End 3rd Level Accordion -->
              <!-- 3rd Level Accordion -->
              <div class="accordion-item" role="treeitem" aria-expanded="false" id="destroy-tree-view-sub-level-two-heading-two"
                data-tree-view-item='{
                  "value": "tailwind",
                  "isDir": true
                }'
              >
                <!-- 3rd Level Accordion Heading -->
                <div class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5" >
                  <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-expanded="false" aria-controls="destroy-tree-view-sub-level-two-collapse-two" >
                    <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
                  </button>
                  <div class="tree-view-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
                    <div class="flex items-center gap-x-3">
                      <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
                      <div class="grow">
                        <span class="text-base-content">tailwind</span>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- End 3rd Level Accordion Heading -->
                <!-- 3rd Level Collapse -->
                <div id="destroy-tree-view-sub-level-two-collapse-two" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="destroy-tree-view-sub-level-two-heading-two" >
                  <div class="tree-view-space">
                    <!-- 3rd Level Item -->
                    <div class="tree-view-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem"
                      data-tree-view-item='{
                        "value": "input.css",
                        "isDir": false
                      }'
                    >
                      <div class="flex items-center gap-x-3">
                        <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
                        <div class="grow">
                          <span class="text-base-content">input.css</span>
                        </div>
                      </div>
                    </div>
                    <!-- End 3rd Level Item -->
                  </div>
                </div>
                <!-- End 3rd Level Collapse -->
              </div>
              <!-- End 3rd Level Accordion -->
              <!-- 3rd Level Heading -->
              <div class="tree-view-selected:bg-base-300/40 rounded-md px-1.5 py-0.5" role="treeitem"
                data-tree-view-item='{
                    "value": ".gitignore",
                    "isDir": false
                  }'
              >
                <span class="text-base-content">.gitignore</span>
              </div>
              <!-- End 3rd Level Heading -->
            </div>
            <!-- End 3rd Level Accordion Group -->
          </div>
          <!-- End 2nd Level Collapse -->
        </div>
        <!-- End 2nd Level Nested Accordion -->
        <!-- 2nd Level Nested Accordion -->
        <div class="accordion-item" role="treeitem" aria-expanded="false" id="destroy-tree-view-sub-heading-two"
          data-tree-view-item='{
            "value": "img",
            "isDir": true
          }'
        >
          <!-- 2nd Level Accordion Heading -->
          <div class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5" >
            <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-expanded="false" aria-controls="destroy-tree-view-sub-collapse-two" >
              <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
            </button>
            <div class="tree-view-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
              <div class="flex items-center gap-x-3">
                <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
                <div class="grow">
                  <span class="text-base-content">img</span>
                </div>
              </div>
            </div>
          </div>
          <!-- End 2nd Level Accordion Heading -->
          <!-- 2nd Level Collapse -->
          <div id="destroy-tree-view-sub-collapse-two" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="destroy-tree-view-sub-heading-two" >
            <div class="tree-view-space">
              <!-- 2nd Level Item -->
              <div class="tree-view-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem"
                data-tree-view-item='{
                  "value": "hero.jpg",
                  "isDir": false
                }'
              >
                <div class="flex items-center gap-x-3">
                  <span class="icon-[componentx--photo] text-base-content size-4 shrink-0"></span>
                  <div class="grow">
                    <span class="text-base-content">hero.jpg</span>
                  </div>
                </div>
              </div>
              <!-- End 2nd Level Item -->
              <!-- 2nd Level Item -->
              <div role="treeitem" class="tree-view-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem"
                data-tree-view-item='{
                  "value": "tailwind.png",
                  "isDir": false
                }'
              >
                <div class="flex items-center gap-x-3">
                  <span class="icon-[componentx--photo] text-base-content size-4 shrink-0"></span>
                  <div class="grow">
                    <span class="text-base-content">tailwind.png</span>
                  </div>
                </div>
              </div>
              <!-- End 2nd Level Item -->
              <!-- 2nd Level Item -->
              <div class="tree-view-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem"
                data-tree-view-item='{
                  "value": "untitled.png",
                  "isDir": false
                }'
              >
                <div class="flex items-center gap-x-3">
                  <span class="icon-[componentx--photo] text-base-content size-4 shrink-0"></span>
                  <div class="grow">
                    <span class="text-base-content">untitled.png</span>
                  </div>
                </div>
              </div>
              <!-- End 2nd Level Item -->
            </div>
          </div>
          <!-- End 2nd Level Collapse -->
        </div>
        <!-- End 2nd Level Nested Accordion -->
        <!-- 2nd Level Nested Accordion -->
        <div class="accordion-item" role="treeitem" aria-expanded="false" id="destroy-tree-view-sub-heading-three"
          data-tree-view-item='{
            "value": "js",
            "isDir": true
          }'
        >
          <!-- 2nd Level Accordion Heading -->
          <div class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5" >
            <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-expanded="false" aria-controls="destroy-tree-view-sub-collapse-three" >
              <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
            </button>
            <div class="tree-view-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
              <div class="flex items-center gap-x-3">
                <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
                <div class="grow">
                  <span class="text-base-content">js</span>
                </div>
              </div>
            </div>
          </div>
          <!-- End 2nd Level Accordion Heading -->
          <!-- 2nd Level Collapse -->
          <div id="destroy-tree-view-sub-collapse-three" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="destroy-tree-view-sub-heading-three" >
            <div class="tree-view-space">
              <!-- 2nd Level Item -->
              <div class="tree-view-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem"
                data-tree-view-item='{
                  "value": "flyonui.jpg",
                  "isDir": false
                }'
              >
                <div class="flex items-center gap-x-3">
                  <span class="icon-[componentx--photo] text-base-content size-4 shrink-0"></span>
                  <div class="grow">
                    <span class="text-base-content">flyonui.jpg</span>
                  </div>
                </div>
              </div>
              <!-- End 2nd Level Item -->
            </div>
          </div>
          <!-- End 2nd Level Collapse -->
        </div>
        <!-- End 2nd Level Nested Accordion -->
      </div>
      <!-- 2nd Level Accordion Group -->
    </div>
    <!-- End 1st Level Collapse -->
  </div>
  <!-- End 1st Level Accordion -->
  <!-- 1st Level Accordion -->
  <div class="accordion-item" role="treeitem" aria-expanded="false" id="destroy-tree-view-heading-two"
    data-tree-view-item='{
      "value": "scripts",
      "isDir": true
    }'
  >
    <!-- 1st Level Accordion Heading -->
    <div class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5" >
      <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-expanded="false" aria-controls="destroy-tree-view-collapse-two" >
        <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
      </button>
      <div class="tree-view-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
        <div class="flex items-center gap-x-3">
          <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
          <div class="grow">
            <span class="text-base-content">scripts</span>
          </div>
        </div>
      </div>
    </div>
    <!-- End 1st Level Accordion Heading -->
    <!-- 1st Level Collapse -->
    <div id="destroy-tree-view-collapse-two" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="destroy-tree-view-heading-two" >
      <div class="tree-view-space">
        <!-- 1st Level Item -->
        <div class="tree-view-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem"
          data-tree-view-item='{
            "value": "flyonui.js",
            "isDir": false
          }'
        >
          <div class="flex items-center gap-x-3">
            <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
            <div class="grow">
              <span class="text-base-content">flyonui.js</span>
            </div>
          </div>
        </div>
        <!-- End 1st Level Item -->
        <!-- 1st Level Item -->
        <div class="tree-view-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem"
          data-tree-view-item='{
            "value": "tailwind.js",
            "isDir": false
          }'
        >
          <div class="flex items-center gap-x-3">
            <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
            <div class="grow">
              <span class="text-base-content">tailwind.js</span>
            </div>
          </div>
        </div>
        <!-- End 1st Level Item -->
        <!-- 1st Level Item -->
        <div class="tree-view-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem"
          data-tree-view-item='{
            "value": "www.js",
            "isDir": false
          }'
        >
          <div class="flex items-center gap-x-3">
            <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
            <div class="grow">
              <span class="text-base-content">www.js</span>
            </div>
          </div>
        </div>
        <!-- End 1st Level Item -->
      </div>
    </div>
    <!-- End 1st Level Collapse -->
  </div>
  <!-- End 1st Level Accordion -->
  <!-- 1st Level Accordion -->
  <div class="accordion-item" role="treeitem" aria-expanded="false" id="destroy-tree-view-heading-three"
    data-tree-view-item='{
      "value": "templates",
      "isDir": true
    }'
  >
    <!-- 1st Level Accordion Heading -->
    <div class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5" >
      <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-expanded="false" aria-controls="destroy-tree-view-collapse-three" >
        <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
      </button>
      <div class="tree-view-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
        <div class="flex items-center gap-x-3">
          <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
          <div class="grow">
            <span class="text-base-content">templates</span>
          </div>
        </div>
      </div>
    </div>
    <!-- End 1st Level Accordion Heading -->
    <!-- 1st Level Collapse -->
    <div id="destroy-tree-view-collapse-three" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="destroy-tree-view-heading-three" >
      <div class="tree-view-space">
        <!-- 1st Level Item -->
        <div class="tree-view-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem"
          data-tree-view-item='{
            "value": "index.html",
            "isDir": false
          }'
        >
          <div class="flex items-center gap-x-3">
            <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
            <div class="grow">
              <span class="text-base-content">index.html</span>
            </div>
          </div>
        </div>
        <!-- End 1st Level Item -->
      </div>
    </div>
    <!-- End 1st Level Collapse -->
  </div>
  <!-- End 1st Level Accordion Group -->
</div>
<!-- End Tree Root -->

<div class="mt-4 flex gap-3">
  <button class="btn btn-primary" id="destroy-btn">Destroy</button>
  <button class="btn btn-primary" id="reinit-btn" disabled>Reinitialize</button>
</div>
```

```js
<script>
  window.addEventListener('load', () => {
    ;(function () {
      const treeView = document.querySelector('#tree-view-to-destroy')
      const accordions = document.querySelectorAll('#tree-view-to-destroy .accordion-item')
      const destroy = document.querySelector('#destroy-btn')
      const reinit = document.querySelector('#reinit-btn')

      destroy.addEventListener('click', () => {
        const treeViewInstance = HSTreeView.getInstance(treeView, true)

        treeViewInstance.element.destroy()
        accordions.forEach(el => {
          const accordionInstance = HSAccordion.getInstance(el, true)

          accordionInstance.element.destroy()
        })

        destroy.setAttribute('disabled', 'disabled')
        reinit.removeAttribute('disabled')
      })

      reinit.addEventListener('click', () => {
        HSTreeView.autoInit()
        HSAccordion.autoInit()

        reinit.setAttribute('disabled', 'disabled')
        destroy.removeAttribute('disabled')
      })
    })()
  })
</script>


```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div role="tree" id="tree-view-method" aria-orientation="vertical" data-tree-view>
  <div class="accordion-item active" role="treeitem" aria-expanded="true" id="cco-four-heading-one"
    data-tree-view-item='{
    "value": "assets",
    "isDir": true
  }'
  >
    <div class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5" >
      <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-expanded="true" aria-controls="cco-four-collapse-one" >
        <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
      </button>
      assets
    </div>
    <div id="cco-four-collapse-one" class="accordion-content overflow-hidden px-2 transition-[height] duration-300" role="group" aria-labelledby="cco-four-heading-one" >
      <div class="tree-view-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem"
        data-tree-view-item='{
          "value": "image.jpg",
          "isDir": false
        }'
      >
        <div class="flex items-center gap-x-3">
          <span class="icon-[componentx--photo] text-base-content size-4 shrink-0"></span>
          <div class="grow">
            <span class="text-base-content">image.jpg</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<hr />

<button class="btn btn-outline" id="get-items-btn">Log Selected</button>
```

```js
<script>
  window.addEventListener('load', function () {
    // Update Methods
    const treeView = HSTreeView.getInstance('#tree-view-method', true)
    const getItemsBtn = document.querySelector('#get-items-btn')

    getItemsBtn.addEventListener('click', () => {
      console.log(treeView.element.getSelectedItems())
    })
  })
</script>


```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div role="tree" id="tree-view-event" aria-orientation="vertical" data-tree-view>
  <div class="accordion-item active" role="treeitem" aria-expanded="true" id="cco-four-heading-one-alt"
    data-tree-view-item='{
    "value": "assets",
    "isDir": true
  }'
  >
    <div class="accordion-heading tree-view-selected:bg-base-300/40 flex w-full items-center gap-x-0.5 rounded-md py-0.5" >
      <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-expanded="true" aria-controls="cco-four-collapse-one" >
        <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
      </button>
      assets
    </div>
    <div id="cco-four-collapse-one" class="accordion-content overflow-hidden px-2 transition-[height] duration-300" role="group" aria-labelledby="cco-four-heading-one-alt" >
      <div class="tree-view-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem"
        data-tree-view-item='{
          "value": "image.jpg",
          "isDir": false
        }'
      >
        <div class="flex items-center gap-x-3">
          <span class="icon-[componentx--photo] text-base-content size-4 shrink-0"></span>
          <div class="grow">
            <span class="text-base-content">image.jpg</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

```js
<script>
  window.addEventListener('load', function () {
    const el = HSTreeView.getInstance('#tree-view-event', true)

    el.element.on('click', data => {
      console.log('data', data)
    })
  })
</script>


```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
