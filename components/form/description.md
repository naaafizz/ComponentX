---
name: "Description"
library: "ComponentX"
id: "description"
type: "form"
quality: "lightweight"
tags: ["component", "form", "input", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Description

> **Type:** `form` · **Quality:** `lightweight` · **ID:** `description`
> **Path:** `components/form/description.md`

**Description** is a premium, production-ready component from the **ComponentX** library — engineered for form interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Lightweight tier** — a minimal footprint, a small dependency surface, and a clean implementation that drops into any project with zero friction.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `form`, `input`, `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Description** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
title: React Description Components
description: A React description component to provide detailed information about input elements in a clean, accessible way.
---

import { getFileContent } from "@/utils/get-file-content";
import { Accordion, Accordions } from "componentx-ui/components/accordion";
import DescriptionPreview from "@/components/preview/description/description-preview";
import DescriptionWithoutFieldPreview from "@/components/preview/description/description-without-field-preview";

# Description

The `Description` component is designed to provide detailed information about input elements in a clean and accessible way. It can be used to enhance the user experience by offering additional context or instructions for form fields.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/description/description-preview.tsx"
  )}
>
  <DescriptionPreview />
</ComponentPreview>

## Usage

Import the component and compose it with your field components.

```tsx
import { Input } from "@/components/componentx/core/input";
import { TextField } from "@/components/componentx/core/input";
import { Label } from "@/components/componentx/core/label";
import { Description } from "@/components/componentx/core/description";

export default function InputPreview() {
  return (
    <TextField className="grid gap-2">
      <Label>Email</Label>
      <Input type="email" placeholder="Enter your email" autoComplete="email" />
      <Description>
        We will never share your email with anyone else.
      </Description>
    </TextField>
  );
}
```

## Examples

### With Field Container

Compose the `Description` component within a field container with a `Label` and input element for a complete form field.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/description/description-preview.tsx"
  )}
  highlightLines={[10, 16]}
>
  <DescriptionPreview />
</ComponentPreview>

### Without Field Container

Provide `id` and `aria-describedby` props to the `Description` and input components to associate them without a field container.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/description/description-without-field-preview.tsx"
  )}
  highlightLines={[13, 15]}
>
  <DescriptionWithoutFieldPreview />
</ComponentPreview>

**Note:** When using within a field container, the `Description` component is automatically connected to the context. No need to manually set `id` or `aria-describedby` props.

## API Reference

### Description

The `Description` component wraps React Aria's `Text` component and inherits its `TextProps` surface.

| Prop        | Type        | Default | Description                                                                                |
| :---------- | :---------- | :------ | :----------------------------------------------------------------------------------------- |
| `children`  | `ReactNode` | -       | The helper text or content shown as the description.                                       |
| `className` | `string`    | -       | Additional CSS classes to apply to the description element.                                |
| `id`        | `string`    | -       | Optional identifier for the description element.                                           |
| `slot`      | `string`    | -       | React Aria slot name used for field composition. The component sets this to `description`. |

## Accessibility

- Use `Description` for supporting helper text, hints, or brief instructions tied to an input.
- When the component is inside a React Aria field container, it is linked to the control automatically through the `description` slot.
- If you render it outside a field container, connect it with `aria-describedby` on the associated control.

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
