---
name: "Separator"
library: "ComponentX"
id: "separator"
type: "navigation"
quality: "lightweight"
tags: ["component", "layout", "menu"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Separator

> **Type:** `navigation` · **Quality:** `lightweight` · **ID:** `separator`
> **Path:** `components/navigation/separator.md`

**Separator** is a premium, production-ready component from the **ComponentX** library — engineered for navigation interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Lightweight tier** — a minimal footprint, a small dependency surface, and a clean implementation that drops into any project with zero friction.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `layout`, `menu` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Separator** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
title: React Separator Components
description: A React separator component built with Tailwind CSS. Add horizontal or vertical dividers to separate content in layouts, menus, and lists for clear structure.
---

import SeparatorOrientationPreview from "@/components/preview/separator/separator-orientation-preview";
import SeparatorPreview from "@/components/preview/separator/separator-preview";
import { getFileContent } from "@/utils/get-file-content";
import { Accordion, Accordions } from "componentx-ui/components/accordion";

# Separator

The React Separator component is used to divide content into sections. It helps visually and semantically separate items in layouts such as menus, lists, or pages.

It improves readability by adding clear boundaries between content. For example, you can use it between sidebar items, page sections, or menu groups.

Built with React and styled using Tailwind CSS. It supports both horizontal and vertical divider and works well in accessible UI layouts.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/separator/separator-preview.tsx"
  )}
>
  <SeparatorPreview />
</ComponentPreview>

## Anatomy

Import the component and pass the required props.

```tsx
import { Separator } from "@/components/componentx/core/separator";

export const SeparatorExample = () => <Separator />;
```

## Examples

### Orientation

The Separator component supports both horizontal and vertical orientations.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/separator/separator-orientation-preview.tsx"
  )}
>
  <SeparatorOrientationPreview />
</ComponentPreview>

## API Reference

### Separator

| Prop          | Type                         | Default        | Description                                       |
| :------------ | :--------------------------- | :------------- | :------------------------------------------------ |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | The orientation of the separator.                 |
| `className`   | `string`                     | -              | Additional CSS classes to apply to the separator. |

## Accessibility

- **Semantic role:** The separator visually divides content. Use it to separate sections in layouts, menus, or lists clearly.
- **Orientation:** Set the correct orientation (horizontal or vertical) so the separator matches the layout structure.
- **Non-interactive element:** The separator does not handle focus or keyboard interaction, so it should not be used as an interactive element.

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
