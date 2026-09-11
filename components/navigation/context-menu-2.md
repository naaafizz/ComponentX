---
name: "Context Menu"
library: "ComponentX"
id: "context-menu-2"
type: "navigation"
quality: "standard"
tags: ["button", "menu", "navigation", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Context Menu

> **Type:** `navigation` · **Quality:** `standard` · **ID:** `context-menu-2`
> **Path:** `components/navigation/context-menu-2.md`

**Context Menu** is a premium, production-ready component from the **ComponentX** library — engineered for navigation interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `button`, `menu`, `navigation` workflows.
- **Pattern coverage** — includes `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Context Menu** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
<div class="dropdown relative inline-flex [--trigger:contextmenu]">
  <div class="dropdown-toggle py-3 px-4 w-60 sm:w-96 h-25 flex justify-center items-center text-sm font-medium rounded-lg border-2 border-dashed border-primary bg-base-100 text-primary shadow-xs">Right click</div>
  <div class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="default">
    <!-- Core Actions -->
    <button type="button" class="dropdown-item">
      <span class="icon-[componentx--arrow-back-up] size-5 shrink-0"></span>
      Reply
    </button>
    <button type="button" class="dropdown-item">
      <span class="icon-[componentx--arrow-back-up-double] size-5 shrink-0"></span>
      Reply all
    </button>
    <button type="button" class="dropdown-item">
      <span class="icon-[componentx--arrow-forward-up] size-5 shrink-0"></span>
      Forward
    </button>
    <button type="button" class="dropdown-item">
      <span class="icon-[componentx--send] size-5 shrink-0"></span>
      Resend
    </button>
    <hr class="border-base-content/25 -mx-2" />
    <!-- Extra Options -->
    <div class="dropdown relative [--offset:15] max-sm:[--placement:bottom-start] [--placement:right-start] [--trigger:hover]">
      <button type="button" class="dropdown-toggle dropdown-item" role="menuitem" tabindex="-1">
        <span class="icon-[componentx--text-plus] size-5 shrink-0"></span>
        More
        <span class="icon-[componentx--chevron-right] rtl:rotate-180 size-5 shrink-0 ms-auto"></span>
      </button>
      <div class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60 before:w-6 before:absolute before:-start-6 before:top-0 before:h-full after:w-6 after:absolute after:-end-6 after:top-0 after:h-full" role="menu" aria-orientation="vertical" aria-labelledby="default">
        <button type="button" class="dropdown-item">
          <span class="icon-[componentx--clipboard-copy] size-5 shrink-0"></span>
          Copy conversation
        </button>
        <button type="button" class="dropdown-item">
          <span class="icon-[componentx--archive] size-5 shrink-0"></span>
          Archive Conversation
        </button>
        <button type="button" class="dropdown-item">
          <span class="icon-[componentx--mail-opened] size-5 shrink-0"></span>
          Move to Folder
        </button>
        <button type="button" class="dropdown-item">
          <span class="icon-[componentx--star] size-5 shrink-0"></span>
          Mark as Important
        </button>
        <button type="button" class="dropdown-item">
          <span class="icon-[componentx--bell-off] size-5 shrink-0"></span>
          Mute Notifications
        </button>
      </div>
    </div>
    <hr class="border-base-content/25 -mx-2" />
    <!-- Status and Other Actions -->
    <button type="button" class="dropdown-item">
      <span class="icon-[componentx--mail] size-5 shrink-0"></span>
      Mark as unread
    </button>
    <button type="button" class="dropdown-item">
      <span class="icon-[componentx--mail-opened] size-5 shrink-0"></span>
      Mark as read
    </button>
    <button type="button" class="dropdown-item">
      <span class="icon-[componentx--archive] size-5 shrink-0"></span>
      Archive
    </button>
    <button type="button" class="dropdown-item">
      <span class="icon-[componentx--trash] size-5 shrink-0"></span>
      Delete
    </button>
    <button type="button" class="dropdown-item">
      <span class="icon-[componentx--alert-circle] size-5 shrink-0"></span>
      Report Spam
    </button>
    <button type="button" class="dropdown-item">
      <span class="icon-[componentx--file-export] size-5 shrink-0"></span>
      Export Conversation
    </button>
  </div>
</div>
```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
