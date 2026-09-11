---
name: "Button Group"
library: "ComponentX"
id: "button-group"
type: "button"
quality: "lightweight"
tags: ["button", "layout"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Button Group

> **Type:** `button` · **Quality:** `lightweight` · **ID:** `button-group`
> **Path:** `components/button/button-group.md`

**Button Group** is a premium, production-ready component from the **ComponentX** library — engineered for button interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Lightweight tier** — a minimal footprint, a small dependency surface, and a clean implementation that drops into any project with zero friction.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `button`, `layout` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Button Group** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
title: React Button Group Components
description: A React button group component for grouping related buttons together. Used to display connected actions in a horizontal or vertical layout with consistent styling.
---

import ButtonGroupCustomPreview from "@/components/preview/button-group/button-group-custom-preview";
import ButtonGroupPreview from "@/components/preview/button-group/button-group-preview";
import ButtonGroupSizesPreview from "@/components/preview/button-group/button-group-sizes-preview";
import ButtonGroupVariantsPreview from "@/components/preview/button-group/button-group-variants-preview";
import { getFileContent } from "@/utils/get-file-content";
import { Accordion, Accordions } from "componentx-ui/components/accordion";

# Button Group

React Button Group components are used to group related actions together. They help present multiple buttons as a single unit, making it easier for users to understand available options.

This Button Group component is built with React and styled using Tailwind CSS, providing consistent spacing, alignment, and visual grouping.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/button-group/button-group-preview.tsx"
  )}
>
  <ButtonGroupPreview />
</ComponentPreview>

## Usage

Import the component and wrap related buttons inside it.

```tsx
import { ButtonGroup } from "@/components/componentx/core/button-group";

export const ButtonGroupExample = () => (
  <ButtonGroup>
    <button>Day</button>
    <button>Week</button>
    <button>Month</button>
  </ButtonGroup>
);
```

## Examples

### Variants

Use variants to change the visual style of the button group.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/button-group/button-group-variants-preview.tsx"
  )}
>
  <ButtonGroupVariantsPreview />
</ComponentPreview>

### Sizes

Adjust the size to match surrounding UI elements.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/button-group/button-group-sizes-preview.tsx"
  )}
>
  <ButtonGroupSizesPreview />
</ComponentPreview>

### Custom

Create a custom styled example using `className` to override styles.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/button-group/button-group-custom-preview.tsx"
  )}
>
  <ButtonGroupCustomPreview />
</ComponentPreview>

## API Reference

### ButtonGroup

Extends `div` element props.

| Prop        | Type                       | Default     | Description            |
| ----------- | -------------------------- | ----------- | ---------------------- |
| `variant`   | `'primary' \| 'secondary'` | `'primary'` | Visual style variant   |
| `size`      | `'sm' \| 'md' \| 'lg'`     | `'md'`      | Button group size      |
| `className` | `string`                   | -           | Additional CSS classes |
| `children`  | `React.ReactNode`          | -           | Button elements        |

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
