---
name: "Label"
library: "ComponentX"
id: "label"
type: "form"
quality: "lightweight"
tags: ["component", "form", "input", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Label

> **Type:** `form` · **Quality:** `lightweight` · **ID:** `label`
> **Path:** `components/form/label.md`

**Label** is a premium, production-ready component from the **ComponentX** library — engineered for form interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Lightweight tier** — a minimal footprint, a small dependency surface, and a clean implementation that drops into any project with zero friction.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `form`, `input`, `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Label** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
title: React Label Components
description: A React label component built with Tailwind CSS. Add accessible labels to form inputs like text fields, text areas, and selects with proper htmlFor and id attributes.
---

import LabelPreview from "@/components/preview/label/label-preview";
import LabelSelectPreview from "@/components/preview/label/label-select-preview";
import LabelTextAreaPreview from "@/components/preview/label/label-textarea-preview";
import { getFileContent } from "@/utils/get-file-content";
import { Accordion, Accordions } from "componentx-ui/components/accordion";

# Label

The React Label component is used to describe a form input like a text field, textarea, select, or any other control that needs an accessible name. It helps users understand what information they need to enter.

It is built on top of React Aria's `Label` primitive and styled with Tailwind CSS. Use `htmlFor` with a matching input `id` when the label and field are separate elements. For example, clicking “Email Address” will focus the email input field.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/label/label-preview.tsx"
  )}
>
  <LabelPreview />
</ComponentPreview>

## Anatomy

Import the component and connect it to the control you want to describe.

```tsx
import { Label } from "@/components/componentx/core/label";

export const LabelExample = () => {
  return (
    <TextField className="w-sm">
      <Label htmlFor="email">Email Address:</Label>
      <Input
        id="email"
        type="email"
        placeholder="Enter your email"
        className="w-full"
      />
    </TextField>
  );
};
```

If your control already wraps the label and field together, you can omit `htmlFor` and let React Aria handle the association through context.

## Examples

### With Text Area

Use the Label component with a description-heavy field like `TextArea`.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/label/label-textarea-preview.tsx"
  )}
  highlightLines={[11]}
>
  <LabelTextAreaPreview />
</ComponentPreview>

**Note:** When `Label` is used inside a React Aria field component, the label can be associated through context. For separate elements, provide matching `htmlFor` and `id` props.

### With Select

Associate the Label with a `NativeSelect` component.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/label/label-select-preview.tsx"
  )}
  highlightLines={[13]}
>
  <LabelSelectPreview />
</ComponentPreview>

## API Reference

### Label

The `Label` component wraps React Aria's `Label` and inherits its full prop surface.

| Prop        | Type        | Default | Description                                                    |
| :---------- | :---------- | :------ | :------------------------------------------------------------- |
| `children`  | `ReactNode` | -       | The text or content displayed inside the label.                |
| `className` | `string`    | -       | Additional CSS classes to apply to the label.                  |
| `htmlFor`   | `string`    | -       | Associates the label with a form control by matching its `id`. |
| `id`        | `string`    | -       | Optional identifier for the label element itself.              |
| `slot`      | `string`    | -       | Optional slot name for React Aria composition patterns.        |

**Note:** `id` and `htmlFor` props are automatically provided by the field container. So it is discouraged to set them manually.

## Accessibility

- **Accessible name:** The label provides the accessible name for the associated control, so screen readers can announce what the field is for.
- **Label association:** Use `htmlFor` with a matching `id` when the label and control are separate. If the field is wrapped by a React Aria field component, the association can come from context instead.
- **Native semantics:** The component renders a native `<label>` by default, which gives users a larger click target and supports standard form controls.
- **Non-native controls:** If you are labeling a non-native element, set `labelElementType` to a non-label element such as `span` so the markup stays valid.

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
