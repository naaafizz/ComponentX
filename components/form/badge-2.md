---
name: "Badge"
library: "ComponentX"
id: "badge-2"
type: "form"
quality: "lightweight"
tags: ["component", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Badge

> **Type:** `form` · **Quality:** `lightweight` · **ID:** `badge-2`
> **Path:** `components/form/badge-2.md`

**Badge** is a premium, production-ready component from the **ComponentX** library — engineered for form interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Lightweight tier** — a minimal footprint, a small dependency surface, and a clean implementation that drops into any project with zero friction.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Badge** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
title: React Badge Components
description: A React badge component for showing status, labels, or counts. Used to display small indicators like notifications, categories, or metadata with color options and icons.
---

import BadgeColors from "@/components/preview/badge/badge-colors";
import BadgeCustom from "@/components/preview/badge/badge-custom";
import BadgeIcons from "@/components/preview/badge/badge-icons";
import BadgePreview from "@/components/preview/badge/badge-preview";
import BadgeSizes from "@/components/preview/badge/badge-sizes";
import { getFileContent } from "@/utils/get-file-content";
import { Accordion, Accordions } from "componentx-ui/components/accordion";

# Badge

React Badge components are used to display small labels, counts, status indicators, or metadata with semantic colors and optional icons. They are commonly used for notifications, categories, tags, and metadata across interfaces.

This Badge component is built with React and styled using Tailwind CSS, giving developers control over size, color, and icon placement.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/badge/badge-preview.tsx"
  )}
>
  <BadgePreview />
</ComponentPreview>

## Usage

Import the component and pass the required props.

```tsx
import { Badge } from "@/components/badge";

export const BadgeExample = () => <Badge color="primary">New</Badge>;
```

## Examples

### Sizes

Badge component supports three predefined sizes: `sm`, `md`, and `lg`.

<ComponentPreview
  codeSnippet={getFileContent("/src/components/preview/badge/badge-sizes.tsx")}
>
  <BadgeSizes />
</ComponentPreview>

### Colors

The Badge component supports a wide range of semantic and vibrant color options like `primary`, `error`, and `success` etc.

<ComponentPreview
  codeSnippet={getFileContent("/src/components/preview/badge/badge-colors.tsx")}
>
  <BadgeColors />
</ComponentPreview>

### With Icons

Add icons before or after your text using the `prefixIcon` and `suffixIcon` props.

<ComponentPreview
  codeSnippet={getFileContent("/src/components/preview/badge/badge-icons.tsx")}
>
  <BadgeIcons />
</ComponentPreview>

### Custom

Use custom styles or positioning to create unique badges for specific use cases.

<ComponentPreview
  codeSnippet={getFileContent("/src/components/preview/badge/badge-custom.tsx")}
>
  <BadgeCustom />
</ComponentPreview>

## API Reference

### Badge

Extends `span` element props.

| Prop         | Type                                                                                                                                            | Default     | Description            |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ---------------------- |
| `size`       | `'sm' \| 'md' \| 'lg'`                                                                                                                          | `'sm'`      | Sets the badge size    |
| `color`      | `'gray' \| 'primary' \| 'error' \| 'warning' \| 'success' \| 'cyan' \| 'sky' \| 'blue' \| 'violet' \| 'purple' \| 'pink' \| 'rose' \| 'orange'` | `'primary'` | Sets the color scheme  |
| `prefixIcon` | `React.ReactNode`                                                                                                                               | -           | Icon before the text   |
| `suffixIcon` | `React.ReactNode`                                                                                                                               | -           | Icon after the text    |
| `className`  | `string`                                                                                                                                        | -           | Additional CSS classes |
| `children`   | `React.ReactNode`                                                                                                                               | -           | Badge content          |

## Notes

- Icons are automatically sized to `12px` (0.75rem) via the `[&>svg]:size-3` class
- Padding adjusts automatically based on the presence of prefix/suffix icons
- All standard `span` HTML attributes are supported

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
