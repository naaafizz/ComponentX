---
name: "Toast"
library: "ComponentX"
id: "toast"
type: "feedback"
quality: "standard"
tags: ["button", "feedback", "image", "layout", "navigation"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Toast

> **Type:** `feedback` · **Quality:** `standard` · **ID:** `toast`
> **Path:** `components/feedback/toast.md`

**Toast** is a premium, production-ready component from the **ComponentX** library — engineered for feedback interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `button`, `feedback`, `image` workflows.
- **Pattern coverage** — includes `layout`, `navigation` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Toast** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
title: React Toast Components
description: A React toast notification component for showing lightweight popup messages. Used to display success, error, or info feedback without interrupting users.
---

import ToastAvatarPreview from "@/components/preview/toast/toast-avatar-preview";
import ToastPreview from "@/components/preview/toast/toast-preview";
import ToastVariantsPreview from "@/components/preview/toast/toast-variants-preview";
import ToastWithTitlePreview from "@/components/preview/toast/toast-with-title-preview";
import ToastWithUndoPreview from "@/components/preview/toast/toast-with-undo-preview";
import { AvatarToast, Toast } from "@/registry/core/toast";
import { getFileContent } from "@/utils/get-file-content";
import { Accordion, Accordions } from "componentx-ui/components/accordion";

# Toast

React Toast components are used to show short, non-blocking messages that inform users about system events or actions. They are commonly used for success confirmations, error messages, warnings, and real-time updates.

This Toast component supports multiple variants, optional titles, action buttons, undo behavior, and message-style notifications with avatars. It is designed for quick feedback.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/toast/toast-preview.tsx"
  )}
>
  <ToastPreview />
</ComponentPreview>

## Anatomy

Import the component and pass the required props.

```tsx
import { Toast, AvatarToast } from "@/components/componentx/core/toast";

export const ToastExample = () => (
  <Toast
    variant="success"
    message={{
      title: "Success",
      description: "Your changes have been saved."
    }}
  />
);
```

## Usage

### Basic Toast

A simple toast notification with a description, used for brief updates.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/toast/toast-preview.tsx"
  )}
>
  <ToastPreview />
</ComponentPreview>

### Toast With Title & Actions

A structured toast layout that includes a title, description, and action buttons for user interaction.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/toast/toast-with-title-preview.tsx"
  )}
>
  <ToastWithTitlePreview />
</ComponentPreview>

**Note:**
When providing a `title` via the `message` object, the layout switches to a vertical content stack to accommodate more information. You can use `children` to render action buttons.

### Toast With Undo

A specialized toast for reversible actions that includes an inline 'Undo' button.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/toast/toast-with-undo-preview.tsx"
  )}
>
  <ToastWithUndoPreview />
</ComponentPreview>

**Note:**
For simple toasts (no title), the `Undo` button appears inline on the right side.

### Avatar Toast

A message-style toast that includes an avatar, sender name, message description, and timestamp. Ideal for chat or social notifications.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/toast/toast-avatar-preview.tsx"
  )}
>
  <ToastAvatarPreview />
</ComponentPreview>

## Variants

The Toast component supports five predefined variants: `success`, `error`, `info`, `warning`, and `default`.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/toast/toast-variants-preview.tsx"
  )}
>
  <ToastVariantsPreview />
</ComponentPreview>

**Note:**
Icon colors and icons are automatically determined by the `variant` prop.

## API Reference

### Toast

| Prop         | Type                                                       | Default     | Description                                                         |
| :----------- | :--------------------------------------------------------- | :---------- | :------------------------------------------------------------------ |
| `variant`    | `"success" \| "error" \| "info" \| "warning" \| "default"` | `"default"` | Controls icon and color theme                                       |
| `message`    | `string \| { title: string; description: string; }`        | —           | Main message content. Can be a string or an object with title.      |
| `undoAction` | `() => void`                                               | —           | Shows an “Undo” button (only when `message` is a string)            |
| `hideIcon`   | `boolean`                                                  | `false`     | Hides the status icon                                               |
| `icon`       | `React.ReactNode`                                          | —           | Custom icon to override the default variant icon                    |
| `children`   | `React.ReactNode`                                          | —           | Custom content rendered below the message (e.g. for action buttons) |

### AvatarToast

| Prop          | Type                                        | Description             |
| :------------ | :------------------------------------------ | :---------------------- |
| `name`        | `string`                                    | Sender name             |
| `description` | `string`                                    | Message body            |
| `image`       | `string`                                    | Avatar image source     |
| `status`      | `"none" \| "online" \| "offline" \| "busy"` | Avatar status indicator |
| `time`        | `string`                                    | Timestamp label         |

## Accessibility

- Dismiss buttons include visually hidden labels for screen readers.
- Buttons follow standard focus handling and keyboard navigation.
- Variant icons use meaningful symbols for visual association.
- Layout works for both compact and content-rich messages.

**Note:**
The Toast component is designed to work inside a toast stack or toaster system for managing multiple notifications.

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
