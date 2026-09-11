---
name: "Input Group"
library: "ComponentX"
id: "input-group"
type: "form"
quality: "standard"
tags: ["button", "form", "input", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Input Group

> **Type:** `form` · **Quality:** `standard` · **ID:** `input-group`
> **Path:** `components/form/input-group.md`

**Input Group** is a premium, production-ready component from the **ComponentX** library — engineered for form interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `button`, `form`, `input` workflows.
- **Pattern coverage** — includes `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Input Group** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
title: React Input Group Components
description: A React input group component built with Tailwind CSS. Combine inputs with icons, buttons, and text addons to create search bars, URL fields, and form inputs.
---

import InputGroupAddonPreview from "@/components/preview/input-group/input-group-addon-preview";
import InputGroupAlignPreview from "@/components/preview/input-group/input-group-align-preview";
import InputGroupButtonPreview from "@/components/preview/input-group/input-group-button-preview";
import InputGroupPreview from "@/components/preview/input-group/input-group-preview";
import InputGroupTextareaPreview from "@/components/preview/input-group/input-group-textarea-preview";
import { getFileContent } from "@/utils/get-file-content";
import { Accordion, Accordions } from "componentx-ui/components/accordion";

# Input Group

The React Input Group component lets you combine an input field with icons, text, or buttons on a single line. It helps you add extra context or actions directly inside the input.

It is useful for things like search bars, URLs, or password fields. For example, you can add a search icon, a submit button, or a suffix like “@ComponentX.com” next to the input.

Built with React and styled using Tailwind CSS. It supports flexible layouts with add-ons, buttons, and text areas.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/input-group/input-group-preview.tsx"
  )}
>
  <InputGroupPreview />
</ComponentPreview>

## Anatomy

Import the components and build your input group structure:

```tsx
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupButton,
  InputGroupTextarea
} from "@/components/componentx/core/input-group";
import { Search1 } from "@componentx/icons";

export const InputGroupExample = () => (
  <InputGroup>
    <InputGroupAddon align="inline-start">
      <Search1 className="h-4 w-4" />
    </InputGroupAddon>
    <InputGroupInput placeholder="Search..." />
    <InputGroupAddon align="inline-end">
      <InputGroupButton size="xs">Submit</InputGroupButton>
    </InputGroupAddon>
  </InputGroup>
);
```

## Examples

### Addons

Combine inputs with text or icon addons to give users more context (e.g., an email domain or a currency symbol).

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/input-group/input-group-addon-preview.tsx"
  )}
>
  <InputGroupAddonPreview />
</ComponentPreview>

### Buttons

You can attach multiple interactive buttons inline. Helpful for actions like copying a link, showing/hiding a password, or clearing an input.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/input-group/input-group-button-preview.tsx"
  )}
>
  <InputGroupButtonPreview />
</ComponentPreview>

### Alignment

Display helper text or specific context headers/footers above or below your input field using `block-start` or `block-end` alignment.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/input-group/input-group-align-preview.tsx"
  )}
>
  <InputGroupAlignPreview />
</ComponentPreview>

### Textarea

You can use the `InputGroupTextarea` component to build multi-line input groups.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/input-group/input-group-textarea-preview.tsx"
  )}
>
  <InputGroupTextareaPreview />
</ComponentPreview>

## API Reference

### InputGroup

The root container that wraps all input group elements. Renders as a `<div>`.

| Prop        | Type     | Default | Description                              |
| :---------- | :------- | :------ | :--------------------------------------- |
| `className` | `string` | -       | Additional CSS classes for the container |

### InputGroupInput

An inline input control rendered inside the group. Accepts all props from the base `Input` component.

| Prop        | Type     | Default | Description                          |
| :---------- | :------- | :------ | :----------------------------------- |
| `className` | `string` | -       | Additional CSS classes for the input |

### InputGroupTextarea

A multi-line textarea control rendered inside the group. Accepts all props from the base `TextArea` component.

| Prop        | Type     | Default | Description                             |
| :---------- | :------- | :------ | :-------------------------------------- |
| `className` | `string` | -       | Additional CSS classes for the textarea |

### InputGroupAddon

A non-interactive addon element (icon, text, label) attached to the input group.

| Prop        | Type                                                             | Default          | Description                                    |
| :---------- | :--------------------------------------------------------------- | :--------------- | :--------------------------------------------- |
| `align`     | `"inline-start" \| "inline-end" \| "block-start" \| "block-end"` | `"inline-start"` | Position of the addon relative to the input    |
| `className` | `string`                                                         | -                | Additional CSS classes for the addon container |

### InputGroupButton

An interactive button rendered inside the input group. Renders as a `<button type="button">`.

| Prop        | Type                                     | Default | Description                            |
| :---------- | :--------------------------------------- | :------ | :------------------------------------- |
| `size`      | `"xs" \| "icon-xs" \| "sm" \| "icon-sm"` | `"xs"`  | Controls the button's size and padding |
| `className` | `string`                                 | -       | Additional CSS classes for the button  |

## Accessibility

- **Label association:** Input groups are visual wrappers, so labels should be linked to the input using `htmlFor` and `id`, or provided through a field wrapper.
- **Keyboard support:** Inputs and buttons inside the group follow native keyboard behavior. Users can type, move between elements using `Tab`, and activate buttons using `Enter` or `Space`.
- **Focus behavior:** Each interactive element (input, textarea, button) receives focus independently, with visible focus states for better usability.
- **Icon buttons:** Buttons that contain only icons should include an `aria-label` (for example, “Search” or “Show password”) so their purpose is clear to screen readers.
- **Grouped context:** Prefixes, suffixes, and addons provide visual context, but additional labels or helper text may be needed to clearly describe the input purpose.

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
