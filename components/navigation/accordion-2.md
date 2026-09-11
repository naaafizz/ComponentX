---
name: "Accordion"
library: "ComponentX"
id: "accordion-2"
type: "navigation"
quality: "standard"
tags: ["component", "data", "layout", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Accordion

> **Type:** `navigation` · **Quality:** `standard` · **ID:** `accordion-2`
> **Path:** `components/navigation/accordion-2.md`

**Accordion** is a premium, production-ready component from the **ComponentX** library — engineered for navigation interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `data`, `layout`, `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Accordion** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
title: React Accordion Components
description: A React accordion component that lets users expand and collapse content sections. Built for accessibility, keyboard use, and flexible visual styles.
---

import { AccordionCustom } from "@/components/preview/accordion/accordion-custom";
import { AccordionPreview } from "@/components/preview/accordion/accordion-preview";
import { AccordionStyleFive } from "@/components/preview/accordion/accordion-style-five";
import { AccordionStyleFour } from "@/components/preview/accordion/accordion-style-four";
import { AccordionStyleOne } from "@/components/preview/accordion/accordion-style-one";
import { AccordionStyleThree } from "@/components/preview/accordion/accordion-style-three";
import { AccordionStyleTwo } from "@/components/preview/accordion/accordion-style-two";
import { getFileContent } from "@/utils/get-file-content";
import { Accordion, Accordions } from "componentx-ui/components/accordion";

# Accordion

React Accordion components let users show and hide sections of related content on a page. They are often used for FAQs, menus and submenus, settings panels, and other layouts where content needs to stay organized.

This Accordion component is styled using Tailwind CSS, giving developers control over structure, layout, and styling.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/accordion/accordion-preview.tsx"
  )}
>
  <AccordionPreview />
</ComponentPreview>

## Anatomy

Import the component parts and combine them.

```tsx
import {
  AccordionRoot,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/components/accordion";

export const AccordionExample = () => (
  <AccordionRoot>
    <AccordionItem>
      <AccordionTrigger />
      <AccordionContent />
    </AccordionItem>
  </AccordionRoot>
);
```

## Examples

### Style One (Default)

This is the default style for the accordion. No `variant` prop is required.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/accordion/accordion-style-one.tsx"
  )}
>
  <AccordionStyleOne />
</ComponentPreview>

### Style Two

Set `variant="style_two"` on `AccordionRoot` for this visual style.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/accordion/accordion-style-two.tsx"
  )}
>
  <AccordionStyleTwo />
</ComponentPreview>

### Style Three

Set `variant="style_three"` on `AccordionRoot` for this variation.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/accordion/accordion-style-three.tsx"
  )}
>
  <AccordionStyleThree />
</ComponentPreview>

### Style Four

Set `variant="style_four"` on `AccordionRoot` for this layout.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/accordion/accordion-style-four.tsx"
  )}
>
  <AccordionStyleFour />
</ComponentPreview>

### Style Five

Set `variant="style_five"` on `AccordionRoot` for this design.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/accordion/accordion-style-five.tsx"
  )}
>
  <AccordionStyleFive />
</ComponentPreview>

### Custom

Use `className` to give a custom look to the component.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/accordion/accordion-custom.tsx"
  )}
>
  <AccordionCustom />
</ComponentPreview>

## API Reference

### AccordionRoot

Wraps all accordion items and controls the overall layout and style.

| Prop        | Type                                                                          | Default       | Description                            |
| ----------- | ----------------------------------------------------------------------------- | ------------- | -------------------------------------- |
| `variant`   | `'style_one' \| 'style_two' \| 'style_three' \| 'style_four' \| 'style_five'` | `'style_one'` | Visual style variant for the accordion |
| `className` | `string`                                                                      | -             | Additional CSS classes                 |
| `children`  | `React.ReactNode`                                                             | -             | Accordion items                        |

### AccordionItem

A single accordion item that groups a trigger and its content.

| Prop        | Type              | Description                    |
| ----------- | ----------------- | ------------------------------ |
| `className` | `string`          | Additional CSS classes         |
| `children`  | `React.ReactNode` | Trigger and content components |

| Data Attribute | Values               | Description                                          |
| :------------- | :------------------- | :--------------------------------------------------- |
| `data-state`   | `"open" \| "closed"` | Indicates whether the item is expanded or collapsed. |

### AccordionTrigger

Toggles the visibility of the accordion content.

| Prop        | Type              | Description                      |
| ----------- | ----------------- | -------------------------------- |
| `className` | `string`          | Additional CSS classes           |
| `children`  | `React.ReactNode` | Trigger content (typically text) |

| Data Attribute | Values               | Description                                          |
| :------------- | :------------------- | :--------------------------------------------------- |
| `data-state`   | `"open" \| "closed"` | Indicates whether the item is expanded or collapsed. |

### AccordionContent

Holds the collapsible content for an accordion item.

| Prop        | Type              | Description                      |
| ----------- | ----------------- | -------------------------------- |
| `className` | `string`          | Additional CSS classes           |
| `children`  | `React.ReactNode` | Content to display when expanded |

| Data Attribute | Values               | Description                                          |
| :------------- | :------------------- | :--------------------------------------------------- |
| `data-state`   | `"open" \| "closed"` | Indicates whether the item is expanded or collapsed. |

## Accessibility

- Uses semantic HTML with a clear heading structure (`h3` elements)
- Applies ARIA attributes (`aria-controls`, `aria-expanded`, `aria-labelledby`)
- Supports keyboard interaction with focus handling
- Associates each trigger with its content using `role="region"`

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
