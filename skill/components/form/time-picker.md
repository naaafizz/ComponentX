---
name: "Time Picker"
library: "ComponentX"
id: "time-picker"
type: "form"
quality: "standard"
tags: ["button", "form", "input"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Time Picker

> **Type:** `form` · **Quality:** `standard` · **ID:** `time-picker`
> **Path:** `components/form/time-picker.md`

**Time Picker** is a premium, production-ready component from the **ComponentX** library — engineered for form interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `button`, `form`, `input` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Time Picker** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
title: React Time Picker Components
description: A React time picker component that allows users to select a time value. Used in forms to choose hours and minutes through an accessible time input.
---

import TimePickerCustomTriggerPreview from "@/components/preview/time-picker/time-picker-custom-trigger-preview";
import TimePickerLabelPreview from "@/components/preview/time-picker/time-picker-label-preview";
import TimePickerPreview from "@/components/preview/time-picker/time-picker-preview";
import { getFileContent } from "@/utils/get-file-content";
import { Accordion, Accordions } from "componentx-ui/components/accordion";

# Time Picker

React Time Picker components allow users to select a specific time value using a clear, scrollable interface. They are commonly used in booking forms, scheduling flows, reminders, and time-based filters.

For a segment-based keyboard input, see the [Time Field](/components/time-field) component.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/time-picker/time-picker-preview.tsx"
  )}
>
  <TimePickerPreview />
</ComponentPreview>

## Anatomy

Import the component and pass the required props.

```tsx
import {
  TimePicker,
  TimePickerTrigger
} from "@/components/componentx/core/time-picker";

export const TimePickerExample = () => (
  <TimePicker onSelect={date => console.log(date)}>
    <TimePickerTrigger>Select Time</TimePickerTrigger>
  </TimePicker>
);
```

## Examples

### Basic Usage

A standard time picker implementation using `react-aria` for accessibility. It provides a trigger button that opens a popover with scrollable columns for hours, minutes, and AM/PM selection.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/time-picker/time-picker-preview.tsx"
  )}
>
  <TimePickerPreview />
</ComponentPreview>

### With Label

You can combine the Time Picker with a label and other elements to create a complete form control.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/time-picker/time-picker-label-preview.tsx"
  )}
>
  <TimePickerLabelPreview />
</ComponentPreview>

### Custom Trigger

The `TimePickerTrigger` can be customized or replaced with any element that accepts refs and props.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/time-picker/time-picker-custom-trigger-preview.tsx"
  )}
>
  <TimePickerCustomTriggerPreview />
</ComponentPreview>

## API Reference

### TimePicker

The popover-based time picker component.

| Prop       | Type                   | Default | Description                                        |
| :--------- | :--------------------- | :------ | :------------------------------------------------- |
| `children` | `React.ReactNode`      | -       | Trigger element (usually `TimePickerTrigger`)      |
| `onSelect` | `(date: Date) => void` | -       | Callback when hour/minute/period selection updates |

### TimePickerTrigger

Extends `Button` props from `react-aria-components`.

| Prop        | Type     | Description                          |
| :---------- | :------- | :----------------------------------- |
| `className` | `string` | Custom styles for the trigger button |

## Accessibility

- **Keyboard Support**: Users can navigate the popover columns using `Arrow` keys and select values with `Enter`.
- **Screen Readers**: Uses `MenuTrigger` and `Popover` roles to ensure screen readers announce the interactive elements correctly.
- **Focus Management**: Focus is moved into the popover when opened and returned to the trigger upon selection or dismissal.

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
