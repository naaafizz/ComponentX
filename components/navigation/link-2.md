---
name: "Link"
library: "ComponentX"
id: "link-2"
type: "navigation"
quality: "lightweight"
tags: ["component", "feedback", "navigation", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Link

> **Type:** `navigation` · **Quality:** `lightweight` · **ID:** `link-2`
> **Path:** `components/navigation/link-2.md`

**Link** is a premium, production-ready component from the **ComponentX** library — engineered for navigation interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Lightweight tier** — a minimal footprint, a small dependency surface, and a clean implementation that drops into any project with zero friction.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `feedback`, `navigation`, `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Link** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
title: React Link Components
description: A React link component for navigation between pages. Renders a semantic anchor element to create internal or external links with accessible behavior.
---

import { ComponentPreview } from "@/components/component-preview";
import LinkCustomPreview from "@/components/preview/link/link-custom-preview";
import LinkExternalPreview from "@/components/preview/link/link-external-preview";
import LinkPreview from "@/components/preview/link/link-preview";
import LinkSizesPreview from "@/components/preview/link/link-sizes-preview";
import LinkVariantsPreview from "@/components/preview/link/link-variants-preview";
import { getFileContent } from "@/utils/get-file-content";
import { Accordion, Accordions } from "componentx-ui/components/accordion";

# Link

React Link components are used for navigation between pages or sections. They render semantic anchor elements and are commonly used for internal routing, external links, and inline navigation.

This Link component is built with React and styled using Tailwind CSS. It supports different sizes, visual variants, and optional icons.

<ComponentPreview
  codeSnippet={getFileContent("/src/components/preview/link/link-preview.tsx")}
>
  <LinkPreview />
</ComponentPreview>

## Usage

Import the component and pass the required props.

```tsx
import { Link } from "@/components/componentx/core/link";

export default function Example() {
  return <Link href="/about">Learn more</Link>;
}
```

## Examples

### Variants

Use variants to change the visual style of the link.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/link/link-variants-preview.tsx"
  )}
>
  <LinkVariantsPreview />
</ComponentPreview>

### Sizes

Choose a size that fits the surrounding text.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/link/link-sizes-preview.tsx"
  )}
>
  <LinkSizesPreview />
</ComponentPreview>

### External Link

Use standard anchor attributes for external navigation.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/link/link-external-preview.tsx"
  )}
>
  <LinkExternalPreview />
</ComponentPreview>

Note: Icons are automatically sized to 20px (1.25rem) via the `[&>svg]:size-5` class. The component uses `inline-flex` for proper icon alignment with text.

### Custom

Combine different variants, sizes, and icons to create custom link styles for various use cases.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/link/link-custom-preview.tsx"
  )}
>
  <LinkCustomPreview />
</ComponentPreview>

Note: Works with any routing library by passing custom `href` props. Supports all standard anchor attributes.

## API Reference

### Link

Extends `a` element props.

| Prop        | Type                  | Default  | Description                  |
| ----------- | --------------------- | -------- | ---------------------------- |
| `href`      | `string`              | -        | Link destination (required)  |
| `variant`   | `'primary' \| 'dark'` | `'dark'` | Visual style variant         |
| `size`      | `'sm' \| 'md'`        | `'sm'`   | Link size                    |
| `className` | `string`              | -        | Additional CSS classes       |
| `children`  | `React.ReactNode`     | -        | Link content                 |
| `target`    | `string`              | -        | Link target (e.g., `_blank`) |
| `rel`       | `string`              | -        | Link relationship            |

## Accessibility

- Uses semantic `<a>` elements for proper navigation
- Supports all standard anchor attributes including `target` and `rel`
- Keyboard accessible with standard link behavior
- Hover states provide clear visual feedback with smooth color transitions
- Icons inherit text color for consistent styling

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
