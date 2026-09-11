---
name: "Spinner"
library: "ComponentX"
id: "spinner"
type: "loader"
quality: "showcase"
tags: ["animated", "animation", "background", "button", "data", "feedback", "form", "loading", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Spinner

> **Type:** `loader` · **Quality:** `showcase` · **ID:** `spinner`
> **Path:** `components/loader/spinner.md`

**Spinner** is a premium, production-ready component from the **ComponentX** library — engineered for loader interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Showcase tier** — a high-impact, visually rich implementation — animated, 3D, or dependency-heavy by design.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `animated`, `animation`, `background` workflows.
- **Pattern coverage** — includes `button`, `data`, `feedback` workflows.
- **Pattern coverage** — includes `form`, `loading`, `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Spinner** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
title: React Spinner Components
description: A React spinner component used as a loading indicator during ongoing processes. Displays animated spinners to show loading states in applications.
---

import SpinnerButtonPreview from "@/components/preview/spinner/spinner-button-preview";
import SpinnerCustomPreview from "@/components/preview/spinner/spinner-custom-preview";
import SpinnerPreview from "@/components/preview/spinner/spinner-preview";
import SpinnerSizesPreview from "@/components/preview/spinner/spinner-sizes-preview";
import SpinnerTypesPreview from "@/components/preview/spinner/spinner-types-preview";
import { getFileContent } from "@/utils/get-file-content";
import { Accordion, Accordions } from "componentx-ui/components/accordion";

# Spinner

React Spinner components are used to indicate that an action or process is currently in progress. They are commonly shown during data loading, form submission, page transitions, or background operations where immediate feedback is required.

This Spinner component is built with React and styled using Tailwind CSS. It supports multiple visual styles and sizes, making it easy to adapt to buttons, inline UI, or full-page loading states.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/spinner/spinner-preview.tsx"
  )}
>
  <SpinnerPreview />
</ComponentPreview>

## Usage

Import the component and render it where a loading state is needed.

```tsx
import { Spinner } from "@/components/componentx/core/spinner";

export default function SpinnerExample() {
  return <Spinner />;
}
```

## Examples

### Types

The Spinner component has `default`, `dotted`, and `dotted-round` types.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/spinner/spinner-types-preview.tsx"
  )}
>
  <SpinnerTypesPreview />
</ComponentPreview>

### Sizes

The Spinner component supports five pre-defined sizes: `sm`, `md`, `lg`, `xl`, and `xxl`.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/spinner/spinner-sizes-preview.tsx"
  )}
>
  <SpinnerSizesPreview />
</ComponentPreview>

### In Buttons

Spinners can be integrated into buttons to provide visual feedback during loading or pending actions.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/spinner/spinner-button-preview.tsx"
  )}
>
  <SpinnerButtonPreview />
</ComponentPreview>

### Custom

You can customize the spinner's behavior and appearance using Tailwind CSS utility classes.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/spinner/spinner-custom-preview.tsx"
  )}
>
  <SpinnerCustomPreview />
</ComponentPreview>

## API Reference

### Spinner

| Prop        | Type                                      | Default     | Description            |
| ----------- | ----------------------------------------- | ----------- | ---------------------- |
| `type`      | `'default' \| 'dotted' \| 'dotted-round'` | `'default'` | Spinner visual style   |
| `size`      | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl'`   | `'md'`      | Spinner size           |
| `className` | `string`                                  | -           | Additional CSS classes |

### Sizes

- **sm**: 20px (1.25rem)
- **md**: 28px (1.75rem)
- **lg**: 36px (2.25rem)
- **xl**: 40px (2.5rem)
- **xxl**: 48px (3rem)

## Accessibility

- Uses `role="presentation"` as the spinner is decorative
- Includes `alt="Spinner"` for context
- When used in buttons, ensure the button has descriptive text or aria-label
- Consider using `aria-busy="true"` on parent containers during loading states
- Animation respects `prefers-reduced-motion` through Tailwind's `animate-spin`

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
