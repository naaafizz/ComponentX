---
name: "Number Field"
library: "ComponentX"
id: "number-field"
type: "form"
quality: "standard"
tags: ["form", "input"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Number Field

> **Type:** `form` · **Quality:** `standard` · **ID:** `number-field`
> **Path:** `components/form/number-field.md`

**Number Field** is a premium, production-ready component from the **ComponentX** library — engineered for form interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `form`, `input` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Number Field** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
title: React Number Field Components
description: A Number field component built with React Aria and Tailwind CSS. Create input fields for numeric values with different formatting options and increment and decrement buttons.
---

import NumberFieldBasicPreview from "@/components/preview/number-field/number-field-basic-preview";
import NumberFieldControlled from "@/components/preview/number-field/number-field-controlled";
import NumberFieldPreview from "@/components/preview/number-field/number-field-preview";
import NumberFieldUncontrolled from "@/components/preview/number-field/number-field-uncontrolled";
import NumberFieldWithStep from "@/components/preview/number-field/number-field-with-step";
import NumberFieldWithValidation from "@/components/preview/number-field/number-field-with-validation";
import NumberFieldWithFormValidation from "@/components/preview/number-field/number-field-with-form-validation";
import NumberFieldFormatOptions from "@/components/preview/number-field/number-field-format-options";
import NumberFieldCustomIcons from "@/components/preview/number-field/number-field-custom-icons";
import NumberFieldChevronRight from "@/components/preview/number-field/number-field-chevron-right";
import { getFileContent } from "@/utils/get-file-content";
import { Accordion, Accordions } from "componentx-ui/components/accordion";

# Number Field

React Number Field components allow users to enter a numeric value with increment and decrement controls. They are commonly used in shopping carts, booking flows, inventory forms, and any scenario requiring precise numeric input with quick adjustments.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/number-field/number-field-preview.tsx"
  )}
>
  <NumberFieldPreview />
</ComponentPreview>

## Anatomy

```tsx
import { FieldDescription, FieldLabel } from "@/registry/core/field";
import { Input } from "@/registry/core/input";
import {
  NumberField,
  NumberFieldAction,
  NumberFieldGroup
} from "@/registry/core/number-field";
import { Minus, Plus } from "@componentx/icons";

export const NumberFieldExample = () => (
  <NumberField>
    <FieldLabel>Quantity</FieldLabel>

    <NumberFieldGroup>
      <Input placeholder="0" />
      <NumberFieldAction slot="decrement">
        <Minus />
      </NumberFieldAction>
      <NumberFieldAction slot="increment">
        <Plus />
      </NumberFieldAction>
    </NumberFieldGroup>

    <FieldDescription>Enter a quantity between 0 and 100.</FieldDescription>
  </NumberField>
);
```

## Examples

### Basic Usage

A standard number field implementation with increment and decrement buttons for adjusting a numeric value.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/number-field/number-field-basic-preview.tsx"
  )}
  highlightLines={[
    [5, 9],
    [18, 26]
  ]}
>
  <NumberFieldBasicPreview />
</ComponentPreview>

### Controlled

Manage the numeric value externally using the `value` and `onChange` props.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/number-field/number-field-controlled.tsx"
  )}
  highlightLines={[11, 14, 18]}
>
  <NumberFieldControlled />
</ComponentPreview>

### Uncontrolled

An uncontrolled number field with a `defaultValue` prop.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/number-field/number-field-uncontrolled.tsx"
  )}
  highlightLines={[17]}
>

  <NumberFieldUncontrolled />
</ComponentPreview>

### With Step

Set a custom `step` value for fractional or non-standard increments.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/number-field/number-field-with-step.tsx"
  )}
  highlightLines={[18]}
>
  <NumberFieldWithStep />
</ComponentPreview>

### Validation

Display error messages and validation states when the numeric value falls outside the allowed range.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/number-field/number-field-with-validation.tsx"
  )}
  highlightLines={[17, 18, 34]}
>
  <NumberFieldWithValidation />
</ComponentPreview>

### Form Validation

Use a custom `validate` function for more control over error messages.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/number-field/number-field-with-form-validation.tsx"
  )}
  highlightLines={[[37, 49]]}
>
  <NumberFieldWithFormValidation />
</ComponentPreview>

### Format Options

Leverage the `formatOptions` prop to display numeric values as currency, percentages, or grouped decimals.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/number-field/number-field-format-options.tsx"
  )}
  highlightLines={[
    [19, 24],
    [43, 45],
    [64, 69]
  ]}
>
  <NumberFieldFormatOptions />
</ComponentPreview>

### Custom Icons

You can use any icons inside `<NumberFieldAction>` components. This example uses custom increment and decrement icons for a unique look.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/number-field/number-field-custom-icons.tsx"
  )}
  highlightLines={[[20, 25]]}
>
  <NumberFieldCustomIcons />
</ComponentPreview>

### Chevron Buttons (Right Aligned)

Position the action buttons according to your design needs.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/number-field/number-field-chevron-right.tsx"
  )}
>
  <NumberFieldChevronRight />
</ComponentPreview>

## API Reference

### NumberField

The numeric input component with stepper buttons. Wraps React Aria's `NumberField` and maps boolean props (`disabled`, `readOnly`, `required`, `invalid`) to their `is-*` equivalents.

| Prop                 | Type                                                                                                                                        | Default    | Description                                                    |
| :------------------- | :------------------------------------------------------------------------------------------------------------------------------------------ | :--------- | :------------------------------------------------------------- |
| `value`              | `number`                                                                                                                                    | -          | The current value (controlled).                                |
| `defaultValue`       | `number`                                                                                                                                    | -          | The default value (uncontrolled).                              |
| `onChange`           | `(value: number) => void`                                                                                                                   | -          | Handler called when the value changes.                         |
| `name`               | `string`                                                                                                                                    | -          | The name of the input, used when submitting an HTML form.      |
| `form`               | `string`                                                                                                                                    | -          | The `<form>` element to associate the input with.              |
| `id`                 | `string`                                                                                                                                    | -          | The element's unique identifier.                               |
| `autoFocus`          | `boolean`                                                                                                                                   | `false`    | Whether the input should receive focus on mount.               |
| `minValue`           | `number`                                                                                                                                    | -          | The smallest value allowed for the input.                      |
| `maxValue`           | `number`                                                                                                                                    | -          | The largest value allowed for the input.                       |
| `step`               | `number`                                                                                                                                    | `1`        | The amount the value changes with each increment or decrement. |
| `formatOptions`      | [Intl.NumberFormatOptions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) | -          | Formatting options for the value (e.g. currency, percentage).  |
| `isWheelDisabled`    | `boolean`                                                                                                                                   | `false`    | Disables changing the value with scroll.                       |
| `disabled`           | `boolean`                                                                                                                                   | `false`    | Whether the input is disabled.                                 |
| `readOnly`           | `boolean`                                                                                                                                   | `false`    | Whether the input is read only.                                |
| `required`           | `boolean`                                                                                                                                   | `false`    | Whether the input is required.                                 |
| `invalid`            | `boolean`                                                                                                                                   | `false`    | Whether the input is shown in an invalid state.                |
| `validate`           | `(value: number) => ValidationResult \| true \| null \| undefined`                                                                          | -          | Custom validation function for the number value.               |
| `validationBehavior` | `'aria' \| 'native'`                                                                                                                        | `'native'` | Whether to use native HTML or ARIA form validation.            |
| `aria-label`         | `string`                                                                                                                                    | -          | Defines a string that labels the current element.              |
| `aria-labelledby`    | `string`                                                                                                                                    | -          | Identifies the element (or elements) that label the element.   |
| `aria-describedby`   | `string`                                                                                                                                    | -          | Identifies the element that describes the object.              |
| `aria-details`       | `string`                                                                                                                                    | -          | Identifies the element providing extended description.         |
| `onBlur`             | `(e: FocusEvent) => void`                                                                                                                   | -          | Handler called when the element loses focus.                   |
| `onFocus`            | `(e: FocusEvent) => void`                                                                                                                   | -          | Handler called when the element receives focus.                |
| `onFocusChange`      | `(isFocused: boolean) => void`                                                                                                              | -          | Handler called when the element's focus status changes.        |
| `onKeyDown`          | `(e: KeyboardEvent) => void`                                                                                                                | -          | Handler called when a key is pressed.                          |
| `onKeyUp`            | `(e: KeyboardEvent) => void`                                                                                                                | -          | Handler called when a key is released.                         |
| `className`          | `string`                                                                                                                                    | -          | Additional CSS classes to apply to the container.              |

See the [React Aria NumberField documentation](https://react-aria.adobe.com/NumberField#numberfield) for more details.

## Composition

The Number Field is composed of the root `NumberField` component plus `NumberFieldGroup`, `Input`, and `NumberFieldAction` for the stepper buttons. It can be combined with shared field components (`FieldLabel`, `FieldDescription`, `FieldError`) for a complete form control.

```
NumberField                                     — Root container. Manages numeric state, validation, and ARIA context.
├── FieldLabel                                  — Visible label.
├── NumberFieldGroup                            — Groups the input and stepper buttons into a single layout.
│   ├── Input                                   — Editable text input area for direct typing.
│   ├── NumberFieldAction (slot: decrement)     — Decrement button (Minus icon).
│   └── NumberFieldAction (slot: increment)     — Increment button (Plus icon).
└── FieldDescription                            — Helper text.
```

- Use `NumberField` as the root. It provides the numeric value, validation state, and keyboard context to all children.
- Use `FieldLabel` to label the field. It is automatically linked to the input.
- Use `NumberFieldGroup` to wrap the input and action buttons. It handles the layout context for absolute-positioned buttons.
- Use `Input` for the editable text area. It accepts direct keyboard input and displays the current value.
- Use `NumberFieldAction` with `slot="decrement"` or `slot="increment"` to render the stepper buttons. Each button is absolutely positioned within the group.
- Use `FieldDescription` for helper text. It is automatically announced by screen readers.
- Use `FieldError` for validation messages. It is linked via `aria-errormessage` when `invalid` is set.

## Accessibility

- **Keyboard Support**: Users can increment and decrement the value using the `Arrow Up` and `Arrow Down` keys. Tab navigates to the next focusable element.
- **Screen Readers**: The current value is announced when it changes. The increment and decrement buttons are labeled with localized "Increase" and "Decrease" values.
- **Focus Management**: Focus remains on the input field when using stepper buttons, enabling rapid value adjustments without losing keyboard context.

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
