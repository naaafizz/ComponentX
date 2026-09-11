---
name: "Button"
library: "ComponentX"
id: "button"
type: "button"
quality: "lightweight"
tags: ["button", "form", "input", "loading", "navigation"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Button

> **Type:** `button` · **Quality:** `lightweight` · **ID:** `button`
> **Path:** `components/button/button.md`

**Button** is a premium, production-ready component from the **ComponentX** library — engineered for button interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Lightweight tier** — a minimal footprint, a small dependency surface, and a clean implementation that drops into any project with zero friction.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `button`, `form`, `input` workflows.
- **Pattern coverage** — includes `loading`, `navigation` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Button** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
title: React Button Components
description: A React button component that lets users trigger actions and events. Used for clicks, form actions, and user interactions with multiple styles and sizes.
---

import ButtonAppearancesPreview from "@/components/preview/button/button-appearances-preview";
import ButtonCustomPreview from "@/components/preview/button/button-custom-preview";
import ButtonDisabledPreview from "@/components/preview/button/button-disabled-preview";
import ButtonPreview from "@/components/preview/button/button-preview";
import ButtonSizesPreview from "@/components/preview/button/button-sizes-preview";
import ButtonVariantsPreview from "@/components/preview/button/button-variants-preview";
import ButtonWithIconPreview from "@/components/preview/button/button-with-icon-preview";
import { getFileContent } from "@/utils/get-file-content";
import { Accordion, Accordions } from "componentx-ui/components/accordion";

# Button

React Button components are used to trigger actions such as submitting forms, opening dialogs, or starting processes. They are a core part of user interaction across interfaces.

This Button component is built with React and styled using Tailwind CSS, giving developers control over appearance, size, and interaction states.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/button/button-preview.tsx"
  )}
>
  <ButtonPreview />
</ComponentPreview>

## Usage

Import the component and pass the required props.

```tsx
import { Button } from "@/components/componentx/core/button";

export const ButtonExample = () => <Button variant="primary">Click me</Button>;
```

## Examples

### Variants

Use variants to indicate the purpose of an action.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/button/button-variants-preview.tsx"
  )}
  highlightWords={["primary", "danger", "success", "ghost"]}
>
  <ButtonVariantsPreview />
</ComponentPreview>

Note: Ghost variant automatically adjusts focus ring size to `ring-2` for subtler appearance.

### Appearances

Use appearances to control the visual style.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/button/button-appearances-preview.tsx"
  )}
  highlightLines={[9, 12, 15, 18, 27, 30, 33, 36]}
>
  <ButtonAppearancesPreview />
</ComponentPreview>

### Sizes

Choose a size that fits the surrounding UI.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/button/button-sizes-preview.tsx"
  )}
  highlightWords={["xs", "sm", "md", "lg"]}
>
  <ButtonSizesPreview />
</ComponentPreview>

### With Icons

Icons are automatically adjusted based on the `size` and `variant` props. Use `iconOnly` for buttons with just an icon.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/button/button-with-icon-preview.tsx"
  )}
  highlightLines={[8]}
  highlightWords={["iconOnly"]}
>
  <ButtonWithIconPreview />
</ComponentPreview>

### Disabled

Pass the `disabled` prop to the field container to disable a button.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/button/button-disabled-preview.tsx"
  )}
  highlightWords={["disabled"]}
>
  <ButtonDisabledPreview />
</ComponentPreview>

Note: Disabled buttons have `pointer-events-none` to prevent interaction.

### Custom

You can use `className` to add custom styles or create custom states like loading.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/button/button-custom-preview.tsx"
  )}
  highlightLines={[6]}
>

  <ButtonCustomPreview />
</ComponentPreview>

## API Reference

| Prop         | Type                                            | Default     | Description                                                         |
| :----------- | :---------------------------------------------- | :---------- | :------------------------------------------------------------------ |
| `variant`    | `'primary' \| 'danger' \| 'success' \| 'ghost'` | `'primary'` | Visual style variant                                                |
| `appearance` | `'fill' \| 'outline'`                           | `'fill'`    | Filled or outlined style                                            |
| `size`       | `'xs' \| 'sm' \| 'md' \| 'lg'`                  | `'md'`      | Button size                                                         |
| `iconOnly`   | `boolean`                                       | `false`     | Icon-only button (square aspect)                                    |
| `disabled`   | `boolean`                                       | `false`     | Disable button interaction (maps to React Aria's `isDisabled` prop) |
| `pending`    | `boolean`                                       | `false`     | Whether the button is in a pending state                            |
| `onPress`    | `(e: PressEvent) => void`                       | -           | Handler that is called when the press is released over the target   |
| `readOnly`   | `boolean`                                       | `false`     | Prevent interaction while keeping focusable                         |

## Accessibility

- Built using React Aria `Button` which provides robust accessibility features across devices and input modalities
- Full keyboard navigation and screen reader support out of the box
- Handles press events normalized across mouse, keyboard, and touch interactions
- Supports `pending` state which is announced to assistive technologies while keeping the element focusable

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
