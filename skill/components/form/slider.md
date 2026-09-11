---
name: "Slider"
library: "ComponentX"
id: "slider"
type: "form"
quality: "standard"
tags: ["form", "input", "navigation", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Slider

> **Type:** `form` · **Quality:** `standard` · **ID:** `slider`
> **Path:** `components/form/slider.md`

**Slider** is a premium, production-ready component from the **ComponentX** library — engineered for form interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `form`, `input`, `navigation` workflows.
- **Pattern coverage** — includes `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Slider** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
title: React Slider Components
description: A React slider component built with Tailwind CSS. Create range and input sliders with drag handles, step values, and support for single- or dual-handle selection.
---

import SliderDefaultPreview from "@/components/preview/slider/slider-default-preview";
import SliderDisabledPreview from "@/components/preview/slider/slider-disabled-preview";
import SliderRangePreview from "@/components/preview/slider/slider-range-preview";
import SliderStepPreview from "@/components/preview/slider/slider-step-preview";
import SliderValuePreview from "@/components/preview/slider/slider-value-preview";
import { getFileContent } from "@/utils/get-file-content";
import { Accordion, Accordions } from "componentx-ui/components/accordion";

# Slider

The React Slider component lets users select a value from a range by dragging a handle. It is commonly used for inputs like volume, price range, or brightness.

It allows users to move the slider to set a value or select a range using two handles. For example, users can choose a price range from 0 to 100.

Built with React and styled using Tailwind CSS. It supports single and range sliders, step values, keyboard navigation, and accessible interactions.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/slider/slider-default-preview.tsx"
  )}
>
  <SliderDefaultPreview />
</ComponentPreview>

## Anatomy

Import the component and pass the required props.

```tsx
import { Slider } from "@/components/componentx/core/slider";

export const SliderExample = () => (
  <Slider defaultValue={[50]} maxValue={100} minValue={0} />
);
```

## Examples

### Default

Basic single-thumb slider.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/slider/slider-default-preview.tsx"
  )}
>
  <SliderDefaultPreview />
</ComponentPreview>

### Range

Slider with two thumbs for selecting a range of values.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/slider/slider-range-preview.tsx"
  )}
>
  <SliderRangePreview />
</ComponentPreview>

### Step

Slider with a custom step value.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/slider/slider-step-preview.tsx"
  )}
>
  <SliderStepPreview />
</ComponentPreview>

### Value Display

Sliders with text and tooltip value displays using the `thumbValueType` prop.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/slider/slider-value-preview.tsx"
  )}
>
  <SliderValuePreview />
</ComponentPreview>

### Disabled

The disabled state of the slider.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/slider/slider-disabled-preview.tsx"
  )}
>
  <SliderDisabledPreview />
</ComponentPreview>

## API Reference

### Slider

| Prop             | Type                                  | Default    | Description                                              |
| :--------------- | :------------------------------------ | :--------- | :------------------------------------------------------- |
| `defaultValue`   | `number \| number[]`                  | -          | The initial value of the slider.                         |
| `minValue`       | `number`                              | `0`        | The smallest value allowed.                              |
| `maxValue`       | `number`                              | `100`      | The largest value allowed.                               |
| `step`           | `number`                              | `1`        | The increment between allowed values.                    |
| `isDisabled`     | `boolean`                             | `false`    | Whether the slider is disabled.                          |
| `thumbValueType` | `'hidden' \| 'text' \| 'tooltip'`     | `'hidden'` | How to display the current value next to the thumb.      |
| `onChange`       | `(value: number \| number[]) => void` | -          | Handler that is called when the value changes.           |
| `className`      | `string`                              | -          | Additional CSS classes to apply to the slider container. |

## Accessibility

- **Keyboard support:** Users can adjust the slider value using keyboard keys when the `thumb` is focused.
- **Focus management:** Each thumb can receive focus, and focus styles appear when navigating with the keyboard.
- **Value control:** Users can move the thumb to increase or decrease the value within the defined `range` and `step`.
- **Range support:** When using two thumbs, users can control both `minimum` and `maximum` values independently.
- **Disabled state:** When `disabled`, the slider cannot be focused or changed.
- **Screen reader support:** Provide clear labels for the slider so screen readers can describe its purpose and current value.

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
