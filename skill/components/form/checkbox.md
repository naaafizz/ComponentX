---
name: "Checkbox"
library: "ComponentX"
id: "checkbox"
type: "form"
quality: "standard"
tags: ["feedback", "form", "input", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Checkbox

> **Type:** `form` · **Quality:** `standard` · **ID:** `checkbox`
> **Path:** `components/form/checkbox.md`

**Checkbox** is a premium, production-ready component from the **ComponentX** library — engineered for form interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `feedback`, `form`, `input` workflows.
- **Pattern coverage** — includes `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Checkbox** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
title: React Checkbox Components
description: A React checkbox component that lets users select one or more options from a set. Used to toggle choices on or off with accessible input and keyboard support.
---

import { ComponentPreview } from "@/components/component-preview";
import CheckboxControlledPreview from "@/components/preview/checkbox/checkbox-controlled-preview";
import CheckboxPreview from "@/components/preview/checkbox/checkbox-preview";
import CheckboxSizesPreview from "@/components/preview/checkbox/checkbox-sizes-preview";
import CheckboxWithLabelPreview from "@/components/preview/checkbox/checkbox-with-label-preview";
import { Checkbox } from "@/registry/core/checkbox";
import { getFileContent } from "@/utils/get-file-content";
import { Accordion, Accordions } from "componentx-ui/components/accordion";

# Checkbox

React Checkbox components are used to let users select one or more options from a list. They are commonly used in forms, settings panels, and preference selections.

This Checkbox component is built with React and styled using Tailwind CSS, providing consistent visuals while keeping native checkbox behavior.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/checkbox/checkbox-preview.tsx"
  )}
>
  <CheckboxPreview />
</ComponentPreview>

## Usage

Import the component and either provide an accessible name directly or pair it with the standalone `Label` component.

```tsx
import { Checkbox } from "@/components/componentx/core/checkbox";
import { Label } from "@/components/componentx/core/label";
import { useId } from "react";

export default function CheckboxExample() {
  const id = useId();

  return (
    <div className="flex items-center gap-3">
      <Checkbox id={id} defaultChecked />
      <Label htmlFor={id}>Accept terms and conditions</Label>
    </div>
  );
}
```

## Examples

### Sizes

The Checkbox component supports two sizes: `sm` (default) and `md`.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/checkbox/checkbox-sizes-preview.tsx"
  )}
>
  <CheckboxSizesPreview />
</ComponentPreview>

### With Label

Use the standalone `Label` component when you want visible text next to the checkbox.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/checkbox/checkbox-with-label-preview.tsx"
  )}
>
  <CheckboxWithLabelPreview />
</ComponentPreview>

### Controlled

Control the checked state using React state.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/checkbox/checkbox-controlled-preview.tsx"
  )}
>
  <CheckboxControlledPreview />
</ComponentPreview>

## API Reference

### Checkbox

Extends `input` element props.

| Prop              | Type                       | Default | Description                                         |
| ----------------- | -------------------------- | ------- | --------------------------------------------------- |
| `id`              | `string`                   | -       | Input ID used with the standalone `Label` component |
| `className`       | `string`                   | -       | Additional wrapper classes                          |
| `size`            | `'sm' \| 'md'`             | `'sm'`  | Checkbox size                                       |
| `disabled`        | `boolean`                  | `false` | Disable checkbox interaction                        |
| `checked`         | `boolean`                  | -       | Controlled checked state                            |
| `defaultChecked`  | `boolean`                  | -       | Uncontrolled default checked state                  |
| `aria-label`      | `string`                   | -       | Accessible name when no visible label is used       |
| `aria-labelledby` | `string`                   | -       | Accessible name via an external label element       |
| `onChange`        | `(e: ChangeEvent) => void` | -       | Change event handler                                |

## Accessibility

- Uses a native `<input type="checkbox">` with standard keyboard support
- Pair with the standalone `Label` component for visible text and `htmlFor`/`id` association
- Requires an accessible name via `aria-label` or `aria-labelledby` when no visible label is used
- Fully keyboard accessible with standard checkbox behavior
- Visible focus ring provides clear keyboard feedback
- Disabled state is communicated by the native input `disabled` attribute
- Hover states are disabled when checkbox is disabled

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
