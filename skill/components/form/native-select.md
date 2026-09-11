---
name: "Native Select"
library: "ComponentX"
id: "native-select"
type: "form"
quality: "standard"
tags: ["feedback", "form", "input", "menu"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Native Select

> **Type:** `form` · **Quality:** `standard` · **ID:** `native-select`
> **Path:** `components/form/native-select.md`

**Native Select** is a premium, production-ready component from the **ComponentX** library — engineered for form interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `feedback`, `form`, `input` workflows.
- **Pattern coverage** — includes `menu` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Native Select** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
title: Native Select Components
description: A Native select component built with React and Tailwind CSS. Create dropdown menus using the browser’s select input with mobile-friendly behavior and built-in accessibility.
---

import NativeSelectDisabledPreview from "@/components/preview/native-select/native-select-disabled-preview";
import NativeSelectOptGroupPreview from "@/components/preview/native-select/native-select-optgroup-preview";
import NativeSelectPlaceholderPreview from "@/components/preview/native-select/native-select-placeholder-preview";
import NativeSelectPreview from "@/components/preview/native-select/native-select-preview";
import NativeSelectStatesPreview from "@/components/preview/native-select/native-select-states-preview";
import { getFileContent } from "@/utils/get-file-content";
import { Accordion, Accordions } from "componentx-ui/components/accordion";

# Native Select

The Native Select component lets users choose an option from a dropdown list using the browser’s built-in select menu. It provides a simple and familiar way to handle selections.

It uses the native HTML select behavior, which works well on mobile devices and supports accessibility by default.

Built with React and styled using Tailwind CSS. It supports different states, such as error and success, along with placeholders and grouped items.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/native-select/native-select-preview.tsx"
  )}
>
  <NativeSelectPreview />
</ComponentPreview>

## Anatomy

Import the component and pass the required props.

```tsx
import {
  NativeSelect,
  NativeSelectOption
} from "@/components/componentx/core/native-select";

export const NativeSelectExample = () => (
  <NativeSelect>
    <NativeSelectOption value="option1">Option 1</NativeSelectOption>
    <NativeSelectOption value="option2">Option 2</NativeSelectOption>
  </NativeSelect>
);
```

## Examples

### States

The Native Select component supports `error` and `success` states for validation feedback.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/native-select/native-select-states-preview.tsx"
  )}
>
  <NativeSelectStatesPreview />
</ComponentPreview>

### Placeholder

Use the `placeholder` prop to display a placeholder when no value is selected.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/native-select/native-select-placeholder-preview.tsx"
  )}
>
  <NativeSelectPlaceholderPreview />
</ComponentPreview>

### Disabled

The component can be disabled to prevent user interaction.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/native-select/native-select-disabled-preview.tsx"
  )}
>
  <NativeSelectDisabledPreview />
</ComponentPreview>

### Option Groups

Use `NativeSelectOptGroup` to group related options together.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/native-select/native-select-optgroup-preview.tsx"
  )}
>
  <NativeSelectOptGroupPreview />
</ComponentPreview>

## API Reference

### NativeSelect

| Prop          | Type                                | Default     | Description                                    |
| :------------ | :---------------------------------- | :---------- | :--------------------------------------------- |
| `variant`     | `'default' \| 'success' \| 'error'` | `'default'` | Controls the visual state of the select        |
| `placeholder` | `string`                            | -           | Sets a placeholder for the select              |
| `disabled`    | `boolean`                           | -           | Disables the select                            |
| `className`   | `string`                            | -           | Additional CSS classes to apply to the wrapper |

### NativeSelectOption

| Prop        | Type     | Default | Description            |
| :---------- | :------- | :------ | :--------------------- |
| `className` | `string` | -       | Additional CSS classes |

### NativeSelectOptGroup

| Prop        | Type     | Default | Description            |
| :---------- | :------- | :------ | :--------------------- |
| `className` | `string` | -       | Additional CSS classes |

## Accessibility

- **Semantic structure:** Uses the native `<select>` element, so it follows standard form behavior by default.
- **Keyboard support:** Users can open the dropdown and move between options using keyboard keys such as `Arrow` keys, `Enter`, and `Space`.
- **Label association:** The select can be linked to a label using `htmlFor` and `id`, so users understand what the field is for.
- **Screen reader support:** Options, selected values, and groups are handled through the browser’s built-in accessibility behavior.
- **Disabled state:** Disabled selects and options are handled natively and are not interactive.

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
