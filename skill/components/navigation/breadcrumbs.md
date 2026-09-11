---
name: "Breadcrumbs"
library: "ComponentX"
id: "breadcrumbs"
type: "navigation"
quality: "standard"
tags: ["layout", "navigation", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Breadcrumbs

> **Type:** `navigation` · **Quality:** `standard` · **ID:** `breadcrumbs`
> **Path:** `components/navigation/breadcrumbs.md`

**Breadcrumbs** is a premium, production-ready component from the **ComponentX** library — engineered for navigation interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `layout`, `navigation`, `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Breadcrumbs** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
title: React Breadcrumbs Components
description: A React breadcrumbs component that shows the current page’s location in a site hierarchy. Helps users understand navigation paths and move between parent pages.
---

import BreadcrumbsPreview from "@/components/preview/breadcrumb/breadcrumbs-preview";
import BreadcrumbsStylesPreview from "@/components/preview/breadcrumb/breadcrumbs-styles-preview";
import BreadcrumbsWithIconPreview from "@/components/preview/breadcrumb/breadcrumbs-with-icon-preview";
import { getFileContent } from "@/utils/get-file-content";
import { Accordion, Accordions } from "componentx-ui/components/accordion";

# Breadcrumbs

React Breadcrumbs components show the current page’s location within a site hierarchy. They help users understand where they are and navigate back to parent pages.

This Breadcrumbs component is built with React and styled using Tailwind CSS, giving developers control over layout, separators, and icons.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/breadcrumb/breadcrumbs-preview.tsx"
  )}
>
  <BreadcrumbsPreview />
</ComponentPreview>

## Usage

Import the component and pass the required props.

```tsx
import { Breadcrumbs } from "@/components/componentx/core/breadcrumbs";

export const BreadcrumbsExample = () => (
  <Breadcrumbs
    items={[
      { href: "/", label: "Home" },
      { href: "/products", label: "Products" },
      { href: "/products/laptop", label: "Laptop" }
    ]}
  />
);
```

## Examples

### With Icons

Show navigation context by adding an `icon` to individual items within the `items` array.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/breadcrumb/breadcrumbs-with-icon-preview.tsx"
  )}
>
  <BreadcrumbsWithIconPreview />
</ComponentPreview>

Note: Icons are automatically sized to `16px` (1rem) via the `[&>svg]:size-4` class.

### Divider Types

Use different divider styles between breadcrumb items using the `dividerType` prop.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/breadcrumb/breadcrumbs-styles-preview.tsx"
  )}
>
  <BreadcrumbsStylesPreview />
</ComponentPreview>

Note: The last item in the breadcrumb trail is automatically styled with darker text to indicate the current page.

## API Reference

### Breadcrumbs

| Prop          | Type                            | Default   | Description                          |
| :------------ | :------------------------------ | :-------- | :----------------------------------- |
| `items`       | `BreadcrumbItem[]`              | -         | Array of breadcrumb items (required) |
| `dividerType` | `'slash' \| 'chevron' \| 'dot'` | `'slash'` | Style of divider between items       |

`BreadcrumbItem`

| Property | Type              | Description                    |
| :------- | :---------------- | :----------------------------- |
| `href`   | `string`          | Link destination (required)    |
| `label`  | `string`          | Display text (required)        |
| `icon`   | `React.ReactNode` | Optional icon before the label |

## Accessibility

- Uses semantic `<ol>` and `<li>` elements for navigation
- The last item is visually distinguished with darker text color
- Icons inherit the current text color for consistent styling
- All links support keyboard navigation

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
