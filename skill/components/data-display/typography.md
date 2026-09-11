---
name: "Typography"
library: "ComponentX"
id: "typography"
type: "data-display"
quality: "advanced"
tags: ["background", "data", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Typography

> **Type:** `data-display` · **Quality:** `advanced` · **ID:** `typography`
> **Path:** `components/data-display/typography.md`

**Typography** is a premium, production-ready component from the **ComponentX** library — engineered for data display interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Advanced tier** — richer composition and interaction, engineered for complex layouts while keeping the public surface tight.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `background`, `data`, `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Typography** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
<h1 class="text-base-content text-4xl">Heading 1</h1>
<h2 class="text-base-content text-3xl">Heading 2</h2>
<h3 class="text-base-content text-2xl">Heading 3</h3>
<h4 class="text-base-content text-xl">Heading 4</h4>
<h5 class="text-base-content text-lg">Heading 5</h5>
<h6 class="text-base-content text-base">Heading 6</h6>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div>
  <h5 class="text-base-content text-lg font-semibold">Body text</h5>
  <p class="text-base-content/80 text-base">
    Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus. Duis
    mollis, est non commodo luctus.Duis mollis, est non commodo luctus.
  </p>
</div>
<div>
  <h5 class="text-base-content text-lg font-semibold">Small text</h5>
  <small class="text-base-content/80">
    Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus. Duis
    mollis, est non commodo luctus.Duis mollis, est non commodo luctus.
  </small>
</div>
<div>
  <h5 class="text-base-content text-lg font-semibold">Muted text</h5>
  <p class="text-base-content/50 text-base">
    Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus. Duis
    mollis, est non commodo luctus.Duis mollis, est non commodo luctus.
  </p>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<p class="text-base-content/80"> You can use the mark tag to <mark>highlight</mark> text. </p>
<p class="text-base-content/80"><del>This line of text is meant to be treated as deleted text.</del></p>
<p class="text-base-content/80"><s>This line of text is meant to be treated as no longer accurate.</s></p>
<p class="text-base-content/80"><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
<p class="text-base-content/80"><u>This line of text will render as underlined.</u></p>
<p class="text-base-content/80"><small>This line of text is meant to be treated as fine print.</small></p>
<p class="text-base-content/80"><strong>This line rendered as bold text.</strong></p>
<p class="text-base-content/80"><em>This line rendered as italicized text.</em></p>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<p class="bg-linear-to-r from-primary to-error bg-clip-text text-transparent font-black text-4xl w-fit"> Gradient text </p>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<p class="first-letter:text-base-content text-justify first-letter:float-left first-letter:me-3 first-letter:text-7xl first-letter:font-bold first-line:uppercase first-line:tracking-widest" >
  You see this old vinyl record, weathered and worn, its label scratched and faded? At first glance, it may appear as
  nothing more than discarded junk. Yet, to me, it holds something infinitely precious—the sound of my childhood. It's
  not just music; it's a treasure trove of memories, each groove on its surface a testament to days gone by. As I gently
  place the needle onto its surface, I am transported back to a time when summer nights stretched on forever, filled
  with the warmth of family gatherings and pop that emanates from the speakers is like a whisper from the past, a
  nostalgic echo of moments I hold dear.
</p>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="max-w-lg">
  <details class="open:bg-base-100 rounded-lg p-6 open:shadow" open>
    <summary class="text-base-content select-none text-base font-semibold">How did paperclips come to be?</summary>
    <div class="text-base-content/80 mt-3 text-base">
      <p>
        The humble paperclip has an interesting history. It was first patented in the late 19th century by Norwegian
        inventor Johan Vaaler, although the exact origin of the paperclip dates back even earlier to other similar
        designs.
      </p>
    </div>
  </details>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<p class="text-bg-primary px-2 py-4"> This uses text-primary-content on a bg-primary background: <span class="font-medium">text-bg-primary</span> </p>

<p class="text-bg-soft-primary px-2 py-4"> This uses text-primary-content on a bg-soft-primary background: <span class="font-medium">text-bg-soft-primary</span> </p>

<p class="text-border-primary px-2 py-4"> This uses text-primary-content alongside a border-primary: <span class="font-medium">text-border-primary</span> </p>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<span class="gradient-bg gradient-bg-primary w-full rounded-md p-5">
<p class="text-primary-content"> Use these semantic gradient background classes to create a smooth left-to-right gradient. The gradient starts with the semantic color on the left and transitions to a 20% darker shade on the right. This helps add depth and visual interest while maintaining consistency with your theme colors.
</p>
</span>
```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
