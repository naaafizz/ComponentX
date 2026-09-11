---
name: "Radio Input"
library: "ComponentX"
id: "radio-input"
type: "form"
quality: "standard"
tags: ["button", "form", "input"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Radio Input

> **Type:** `form` · **Quality:** `standard` · **ID:** `radio-input`
> **Path:** `components/form/radio-input.md`

**Radio Input** is a premium, production-ready component from the **ComponentX** library — engineered for form interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `button`, `form`, `input` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Radio Input** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
title: React Radio Button Components
description: A React radio button component built with Tailwind CSS. Create radio groups for single-selection form fields, with labels and accessible options for plans, settings, and preferences.
---

import RadioControlledPreview from "@/components/preview/radio/radio-controlled-preview";
import RadioCustomPreview from "@/components/preview/radio/radio-custom-preview";
import RadioDefaultCheckedPreview from "@/components/preview/radio/radio-default-checked-preview";
import RadioDisabledPreview from "@/components/preview/radio/radio-disabled-preview";
import RadioGroupPreview from "@/components/preview/radio/radio-group-preview";
import RadioPreview from "@/components/preview/radio/radio-preview";
import RadioSizesPreview from "@/components/preview/radio/radio-sizes-preview";
import RadioWithoutLabelPreview from "@/components/preview/radio/radio-without-label-preview";
import { getFileContent } from "@/utils/get-file-content";
import { Accordion, Accordions } from "componentx-ui/components/accordion";

# Radio Input

The React Radio button component lets users select one option from a radio group. It is commonly used in forms for things like plans, settings, or preferences.

It works by grouping options so only one can be selected at a time. For example, users can choose between Basic, Pro, or Enterprise plans.

Built with React and styled using Tailwind CSS. It uses native radio inputs for reliable behavior and supports labels, sizes, and form control states.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/radio/radio-preview.tsx"
  )}
>
  <RadioPreview />
</ComponentPreview>

## Usage

Import the component and the `Label` component, then wrap the `RadioInput` within the `Label` for proper association.

```tsx
import { Label } from "@/components/componentx/core/label";
import { RadioInput } from "@/components/componentx/core/radio-input";

export default function RadioWithLabelPreview() {
  return (
    <div className="flex flex-col gap-3">
      <Label className="group flex cursor-pointer items-center gap-3 select-none">
        <RadioInput name="plan" value="basic" />
        <span>Basic Plan</span>
      </Label>
      <Label className="group flex cursor-pointer items-center gap-3 select-none">
        <RadioInput name="plan" value="pro" />
        <span>Pro Plan</span>
      </Label>
      <Label className="group flex cursor-pointer items-center gap-3 select-none">
        <RadioInput name="plan" value="enterprise" />
        <span>Enterprise Plan</span>
      </Label>
    </div>
  );
}
```

## Examples

### Sizes

The Radio Input component supports two predefined sizes: `sm` and `md`.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/radio/radio-sizes-preview.tsx"
  )}
>
  <RadioSizesPreview />
</ComponentPreview>

### Without Label

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/radio/radio-without-label-preview.tsx"
  )}
>
  <RadioWithoutLabelPreview />
</ComponentPreview>

**Note:** Use this only when the label is provided through surrounding context.

### Controlled

Handle state manually with the `checked` and `onChange` props.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/radio/radio-controlled-preview.tsx"
  )}
>
  <RadioControlledPreview />
</ComponentPreview>

### Disabled

Use the `disabled` prop to prevent interaction.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/radio/radio-disabled-preview.tsx"
  )}
>
  <RadioDisabledPreview />
</ComponentPreview>

### Default Checked

Use `defaultChecked` to set the initial state.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/radio/radio-default-checked-preview.tsx"
  )}
>
  <RadioDefaultCheckedPreview />
</ComponentPreview>

### Radio Group

Use semantic grouping for related options.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/radio/radio-group-preview.tsx"
  )}
>
  <RadioGroupPreview />
</ComponentPreview>

### Custom Radio

Create custom radio inputs with tailwind css utility classes.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/radio/radio-custom-preview.tsx"
  )}
>
  <RadioCustomPreview />
</ComponentPreview>

## API Reference

### RadioInput

| Prop             | Type                       | Default | Description                                  |
| ---------------- | -------------------------- | ------- | -------------------------------------------- |
| `size`           | `'sm' \| 'md'`             | `'sm'`  | Radio button size                            |
| `name`           | `string`                   | -       | Radio group name (required for grouping)     |
| `value`          | `string`                   | -       | Radio button value                           |
| `id`             | `string`                   | -       | Custom input ID                              |
| `disabled`       | `boolean`                  | `false` | Disable radio interaction                    |
| `checked`        | `boolean`                  | -       | Controlled checked state                     |
| `defaultChecked` | `boolean`                  | -       | Uncontrolled default checked state           |
| `onChange`       | `(e: ChangeEvent) => void` | -       | Change event handler                         |
| `className`      | `string`                   | -       | Additional CSS classes for the input wrapper |

## Accessibility

- **Native behavior:** Uses a native `<input type="radio">`, so it works with screen readers and form semantics by default.
- **Group selection:** Radio inputs with the same `name` are grouped, allowing users to select only one option at a time.
- **Label association:** Wrap the input with a Label or use `htmlFor` to connect them. This allows users to click the label to select the option.
- **Keyboard support:** Users can navigate between options using `Arrow` keys and select an option using the keyboard.
- **Focus management:** The selected radio can receive focus, and focus styles help users see which option is active.
- **Disabled state:** Disabled radios cannot be selected and are skipped during interaction.

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
