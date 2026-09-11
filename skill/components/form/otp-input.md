---
name: "OTP Input"
library: "ComponentX"
id: "otp-input"
type: "form"
quality: "standard"
tags: ["card", "form", "input", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · OTP Input

> **Type:** `form` · **Quality:** `standard` · **ID:** `otp-input`
> **Path:** `components/form/otp-input.md`

**OTP Input** is a premium, production-ready component from the **ComponentX** library — engineered for form interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `card`, `form`, `input` workflows.
- **Pattern coverage** — includes `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **OTP Input** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
title: React OTP Input Components
description: A React OTP input component for entering one-time passwords or verification codes. Uses multiple input fields with auto focus, paste handling, and accessible behavior.
---

import CodeBlockCard from "@/components/code-block-card";
import { ComponentPreview } from "@/components/component-preview";
import OtpInputControlledPreview from "@/components/preview/otp-input/otp-input-controlled-preview";
import OtpInputCustomPreview from "@/components/preview/otp-input/otp-input-custom-preview";
import OtpInputDefaultPreview from "@/components/preview/otp-input/otp-input-default-preview";
import OtpInputDisabledPreview from "@/components/preview/otp-input/otp-input-disabled-preview";
import OtpInputPreview from "@/components/preview/otp-input/otp-input-preview";
import OtpInputSixDigitPreview from "@/components/preview/otp-input/otp-input-six-digit-preview";
import { getFileContent } from "@/utils/get-file-content";
import { Accordion, Accordions } from "componentx-ui/components/accordion";

# OTP Input

React OTP Input components are used to collect one-time passwords (OTP) or verification codes. They are commonly used in authentication flows such as login verification, password reset, and two-factor authentication.

This OTP Input component is built with React and styled using Tailwind CSS. It splits the code into multiple-input fields and handles focus, paste, labels, and hints with keyboard interaction.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/otp-input/otp-input-preview.tsx"
  )}
>
  <OtpInputPreview />
</ComponentPreview>

## Usage

Import the component and control the OTP value using state.

```tsx
import { OtpInput } from "@/components/componentx/core/otp-input";

export default OtpInputPreview = () => {
  const [value, setValue] = useState("");

  return (
    <OtpInput
      label="Verification Code"
      digitLength={6}
      value={value}
      onChange={e => setValue(e.target.value)}
      hint="Enter the 6-digit code sent to your email."
    />
  );
};
```

## Examples

### Default

Start with a standard 4-digit code entry by using the default `digitLength` configuration.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/otp-input/otp-input-default-preview.tsx"
  )}
>
  <OtpInputDefaultPreview />
</ComponentPreview>

### Six Digit Code

Accommodate longer verification codes by setting the `digitLength` prop to `6`.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/otp-input/otp-input-six-digit-preview.tsx"
  )}
>
  <OtpInputSixDigitPreview />
</ComponentPreview>

### Controlled

Pass `value` and `onChange` to control the OTP input from state.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/otp-input/otp-input-controlled-preview.tsx"
  )}
>
  <OtpInputControlledPreview />
</ComponentPreview>

### Disabled

Prevent all user interactions and focus state transitions by setting the `disabled` prop to `true`.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/otp-input/otp-input-disabled-preview.tsx"
  )}
>
  <OtpInputDisabledPreview />
</ComponentPreview>

### Custom

Use `className` to customize the input appearance.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/otp-input/otp-input-custom-preview.tsx"
  )}
>
  <OtpInputCustomPreview />
</ComponentPreview>

Note: The custom example demonstrates how you can override styles and structure for specific use cases like a secure login form.

## API Reference

### OtpInput

Extends `input` element props (except `value`).

| Prop          | Type                       | Default | Description                                   |
| ------------- | -------------------------- | ------- | --------------------------------------------- |
| `digitLength` | `4 \| 6`                   | `4`     | Number of OTP fields                          |
| `label`       | `string`                   | -       | Optional field label                          |
| `hint`        | `string`                   | -       | Helper text shown below the field             |
| `value`       | `string`                   | -       | Controlled OTP value (auto-synced to fields)  |
| `disabled`    | `boolean`                  | `false` | Disable all OTP inputs                        |
| `className`   | `string`                   | -       | Appended to each input element                |
| `onChange`    | `React.ChangeEventHandler` | -       | Returns concatenated OTP digits as one string |

### Behavior

- Each box only accepts a **single numeric digit**
- Auto-focus moves to the next box as you type
- Backspace moves focus to the previous input when empty
- Handles paste of full OTP (e.g., pasting `"123456"`)
- Automatically pads if `value` prop is shorter

## Accessibility

- Each digit is a native `<input type="text" />`
- Label is connected via `htmlFor`
- Focus ring follows system and custom ComponentX styles
- Digits select their content when focused—making replacement easier
- Screen readers read the label and each digit individually

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
