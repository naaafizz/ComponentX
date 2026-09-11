---
name: "WYSIWYG Editor"
library: "ComponentX"
id: "wysiwyg-editor"
type: "button"
quality: "advanced"
tags: ["button", "component", "data", "image", "overlay", "table", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · WYSIWYG Editor

> **Type:** `button` · **Quality:** `advanced` · **ID:** `wysiwyg-editor`
> **Path:** `components/button/wysiwyg-editor.md`

**WYSIWYG Editor** is a premium, production-ready component from the **ComponentX** library — engineered for button interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Advanced tier** — richer composition and interaction, engineered for complex layouts while keeping the public surface tight.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `button`, `data`, `image` workflows.
- **Pattern coverage** — includes `overlay`, `table`, `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **WYSIWYG Editor** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
<div id="basic" class="bg-base-100 shadow-base-300/20 rounded-box w-full p-4 shadow-sm"></div>
```

```js
<script>
  const editor = new EditorJS({
    holder: 'basic', // id of the element
    // placeholder
    placeholder: 'Type text or paste a link',

    // Tools
    tools: {
      header: {
        class: Header,
        inlineToolbar: ['marker', 'link'],
        config: {
          placeholder: 'Header'
        },
        shortcut: 'CMD+SHIFT+H'
      },
      raw: RawTool,
      image: SimpleImage,
      checklist: {
        class: Checklist,
        inlineToolbar: true
      },
      list: {
        class: NestedList,
        inlineToolbar: true,
        shortcut: 'CMD+SHIFT+L'
      },
      embed: Embed,
      quote: {
        class: Quote,
        inlineToolbar: true,
        config: {
          quotePlaceholder: 'Enter a quote',
          captionPlaceholder: "Quote's author"
        },
        shortcut: 'CMD+SHIFT+O'
      },
      marker: {
        class: Marker,
        shortcut: 'CMD+SHIFT+M'
      },
      table: {
        class: Table,
        inlineToolbar: true,
        shortcut: 'CMD+ALT+T'
      },
      inlineCode: {
        class: InlineCode,
        shortcut: 'CMD+SHIFT+I'
      },
      warning: {
        class: Warning,
        inlineToolbar: true,
        shortcut: 'CMD+SHIFT+W',
        config: {
          titlePlaceholder: 'Title',
          messagePlaceholder: 'Message'
        }
      }
    },

    onChange: () => {
      editor
        .save()
        .then(outputData => {
          displayJSON(outputData)
        })
        .catch(error => {
          console.error('Saving failed: ', error)
        })
    }
  })

  // Function to display JSON data
  function displayJSON(data) {
    const outputElement = document.getElementById('output')
    outputElement.textContent = JSON.stringify(data, null, 2) // Pretty print JSON with indentation
  }
</script>


```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<button type="button" class="btn btn-primary" aria-haspopup="dialog" aria-expanded="false" aria-controls="text-editor-modal" data-overlay="#text-editor-modal">Daily tasks</button>

<div id="text-editor-modal" class="overlay modal overlay-open:opacity-100 overlay-open:duration-300 hidden" role="dialog" tabindex="-1">
  <div class="modal-dialog modal-dialog-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title">Daily tasks</h3>
        <button type="button" class="btn btn-text btn-circle btn-sm absolute end-3 top-3" aria-label="Close" data-overlay="#text-editor-modal">
          <span class="icon-[componentx--x] size-4"></span>
        </button>
      </div>
      <div class="modal-body">
        <div id="modal-editor" class="border border-base-content/25 rounded-box p-4"></div>
      </div>
    </div>
  </div>
</div>
```

```js
<script>
  const modaleditor = new EditorJS({
    holder: 'modal-editor', // id of the element
    // placeholder
    placeholder: 'Type text or paste a link',

    // Tools
    tools: {
      header: {
        class: Header,
        inlineToolbar: ['marker', 'link'],
        config: {
          placeholder: 'Header'
        },
        shortcut: 'CMD+SHIFT+H'
      },
      raw: RawTool,
      image: SimpleImage,
      checklist: {
        class: Checklist,
        inlineToolbar: true
      },
      list: {
        class: NestedList,
        inlineToolbar: true,
        shortcut: 'CMD+SHIFT+L'
      },
      embed: Embed,
      quote: {
        class: Quote,
        inlineToolbar: true,
        config: {
          quotePlaceholder: 'Enter a quote',
          captionPlaceholder: "Quote's author"
        },
        shortcut: 'CMD+SHIFT+O'
      },
      marker: {
        class: Marker,
        shortcut: 'CMD+SHIFT+M'
      },
      table: {
        class: Table,
        inlineToolbar: true,
        shortcut: 'CMD+ALT+T'
      },
      inlineCode: {
        class: InlineCode,
        shortcut: 'CMD+SHIFT+I'
      },
      warning: {
        class: Warning,
        inlineToolbar: true,
        shortcut: 'CMD+SHIFT+W',
        config: {
          titlePlaceholder: 'Title',
          messagePlaceholder: 'Message'
        }
      }
    }
  })
</script>


```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
