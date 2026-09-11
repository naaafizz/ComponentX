---
name: "Input"
library: "ComponentX"
id: "input"
type: "form"
quality: "standard"
tags: ["data", "form", "input", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Input

> **Type:** `form` · **Quality:** `standard` · **ID:** `input`
> **Path:** `components/form/input.md`

**Input** is a premium, production-ready component from the **ComponentX** library — engineered for form interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `data`, `form`, `input` workflows.
- **Pattern coverage** — includes `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Input** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
title: React Input Components
description: A React input component built with Tailwind CSS. Create text input fields for forms with labels, placeholders, validation states, and support for both controlled and uncontrolled usage.
---

import InputControlledPreview from "@/components/preview/input/input-controlled-preview";
import InputUncontrolledPreview from "@/components/preview/input/input-uncontrolled-preview";
import InputCustomPreview from "@/components/preview/input/input-custom-preview";
import InputPreview from "@/components/preview/input/input-preview";
import InputStatesPreview from "@/components/preview/input/input-states-preview";
import InputDisabledPreview from "@/components/preview/input/input-disabled-preview";
import InputWithLabelPreview from "@/components/preview/input/input-with-label-preview";
import { Input } from "@/registry/core/input";
import { getFileContent } from "@/utils/get-file-content";
import { Accordion, Accordions } from "componentx-ui/components/accordion";

# Input

The React Input component lets users enter text in a form. It is used for fields like name, email, password, and other text inputs.

It works like a standard input field and can be used with a label, placeholder, and validation messages. For example, users can type their email and see an error or success message based on the input.

Built with React Aria Components and styled using Tailwind CSS. It is designed to be used with the [Label component](https://ComponentX.com/docs/components/label) for accessibility and supports validation states, as well as controlled and uncontrolled inputs.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/input/input-preview.tsx"
  )}
>
  <InputPreview />
</ComponentPreview>

## Usage

Import the component and pair it with a label for accessibility. The input accepts the standard HTML input props, along with the ComponentX `state` variant and `className`.

```tsx
import { Input } from "@/components/componentx/core/input";
import { Label } from "@/components/componentx/core/label";
import { useId } from "react";

export default function InputPreview() {
  const id = useId();

  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>Email</Label>
      <Input
        id={id}
        type="email"
        placeholder="Enter your email"
        autoComplete="email"
      />
    </div>
  );
}
```

## Examples

### With Label and Hint

Use the `Label` and `Description` components to show a label and helper text.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/input/input-with-label-preview.tsx"
  )}
  highlightLines={[9, [11, 13]]}
>
  <InputWithLabelPreview />
</ComponentPreview>

### Controlled

Use the native `value` and `onChange` props for controlled usage.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/input/input-controlled-preview.tsx"
  )}
  highlightLines={[18, 19]}
>
  <InputControlledPreview />
</ComponentPreview>

### Uncontrolled

Use the `defaultValue` prop on field container for uncontrolled usage.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/input/input-uncontrolled-preview.tsx"
  )}
  highlightLines={[10]}
>
  <InputUncontrolledPreview />
</ComponentPreview>

### States

Use the `state` prop to switch between the built-in visual variants.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/input/input-states-preview.tsx"
  )}
  highlightLines={[13, 21]}
>
  <InputStatesPreview />
</ComponentPreview>

### Disabled

Use `disabled` prop on field container to disable user interaction and apply disabled styles.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/input/input-disabled-preview.tsx"
  )}
  highlightWords={["disabled"]}
>
  <InputDisabledPreview />
</ComponentPreview>

### Custom Style

Use `className` to override or extend the default styling.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/input/input-custom-preview.tsx"
  )}
  highlightLines={[16]}
>
  <InputCustomPreview />
</ComponentPreview>

## API Reference

### Input

`Input` extends the native HTML `input` props from React Aria Components.

| Prop           | Type                                         | Default     | Description                                                                   |
| -------------- | -------------------------------------------- | ----------- | ----------------------------------------------------------------------------- |
| `placeholder`  | `string`                                     | -           | Temporary text shown when the input is empty.                                 |
| `className`    | `string`                                     | -           | CSS class name for the element. Can be a function that receives render state. |
| `state`        | `'default' \| 'error' \| 'success'`          | `'default'` | ComponentX visual state variant added by the wrapper component.                |
| `value`        | `string`                                     | -           | Controlled input value.                                                       |
| `defaultValue` | `string`                                     | -           | Uncontrolled initial value.                                                   |
| `onChange`     | `(e: ChangeEvent<HTMLInputElement>) => void` | -           | Fires when the input value changes.                                           |
| `disabled`     | `boolean`                                    | `false`     | Disables user interaction.                                                    |
| `autoFocus`    | `boolean`                                    | `false`     | Automatically focuses the input on mount.                                     |
| `type`         | `string`                                     | `'text'`    | Native input type.                                                            |
| `name`         | `string`                                     | -           | Name submitted with form data.                                                |
| `id`           | `string`                                     | -           | Unique input identifier.                                                      |

## Accessibility

- Associate the input with a label using `htmlFor` and `id`.
- Use `Description` or helper text for additional context when needed.
- Prefer native validation props like `required`, `minLength`, `maxLength`, and `pattern` when possible.
- React Aria applies the correct focus-visible and invalid states for styling and assistive technology.

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
