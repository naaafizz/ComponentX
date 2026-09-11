---
name: "Toggle"
library: "ComponentX"
id: "toggle"
type: "form"
quality: "standard"
tags: ["background", "form", "input", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Toggle

> **Type:** `form` · **Quality:** `standard` · **ID:** `toggle`
> **Path:** `components/form/toggle.md`

**Toggle** is a premium, production-ready component from the **ComponentX** library — engineered for form interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `background`, `form`, `input` workflows.
- **Pattern coverage** — includes `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Toggle** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
title: React Toggle Switch Components
description: A React toggle switch component for enabling or disabling features. An accessible on/off control built on a checkbox, commonly used in settings and preferences.
---

import ToggleBasicPreview from "@/components/preview/toggle/toggle-basic-preview";
import ToggleControlledPreview from "@/components/preview/toggle/toggle-controlled-preview";
import ToggleNoLabelPreview from "@/components/preview/toggle/toggle-no-label-preview";
import ToggleSizesPreview from "@/components/preview/toggle/toggle-sizes-preview";
import { getFileContent } from "@/utils/get-file-content";
import { Accordion, Accordions } from "componentx-ui/components/accordion";

# Toggle

The Toggle component, commonly referred to as a **switch**, allows users to turn a setting **on or off**. It represents a binary choice and is typically used for preferences, feature flags, and configuration options.

This component is built on a native checkbox input and styled using Tailwind CSS. It supports labels, multiple sizes, controlled and uncontrolled usage, and full keyboard and screen reader accessibility.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/toggle/toggle-basic-preview.tsx"
  )}
>
  <ToggleBasicPreview />
</ComponentPreview>

## Usage

```tsx
import { Toggle } from "@/components/componentx/core/toggle";

export default function ToggleBasic() {
  return <Toggle label="Enable Feature X" defaultChecked />;
}
```

## Examples

### Sizes

The toggle switch comes in `sm` and `md` sizes. The default size is `sm`.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/toggle/toggle-sizes-preview.tsx"
  )}
>
  <ToggleSizesPreview />
</ComponentPreview>

Note: The `size` prop adjusts the dimensions of the track and the thumb for both `sm` and `md` sizes.

### Label

The label is optional. When omitted, provide an accessible name using `aria-label`.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/toggle/toggle-no-label-preview.tsx"
  )}
>
  <ToggleNoLabelPreview />
</ComponentPreview>

### Controlled State

Use the `checked` and `onChange` props to fully control the toggle state.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/toggle/toggle-controlled-preview.tsx"
  )}
>
  <ToggleControlledPreview />
</ComponentPreview>

**Note:**
Visual state is handled using CSS `peer` and `peer-checked` utilities. The primary color is applied to the background of the track when the switch is checked (`peer-checked:bg-primary-500`). The thumb position animates based on the checked state.

## API Reference

### Toggle

Extends `input` element props.

| Prop        | Type           | Default | Description                                                                                                |
| :---------- | :------------- | :------ | :--------------------------------------------------------------------------------------------------------- |
| `label`     | `string`       | -       | Optional text label displayed next to the switch.                                                          |
| `size`      | `'sm' \| 'md'` | `'sm'`  | The size of the toggle switch.                                                                             |
| `className` | `string`       | -       | Additional CSS classes for the **hidden input element** (use standard HTML props for the overall control). |

## Accessibility

- Built on a standard HTML `<input type="checkbox">` which provides native keyboard and accessibility support.
- Toggle the switch using the **Space** key when the component is focused.
- Visible label is properly associated via `htmlFor` and `id`
- Input is visually hidden using `sr-only` but remains available to screen readers
- Works correctly with assistive technologies and form semantics

Note: This component is designed for use inside forms, settings pages, and preference panels.

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
