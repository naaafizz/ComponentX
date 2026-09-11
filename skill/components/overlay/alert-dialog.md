---
name: "Alert Dialog"
library: "ComponentX"
id: "alert-dialog"
type: "overlay"
quality: "standard"
tags: ["background", "button", "data", "navigation", "overlay"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Alert Dialog

> **Type:** `overlay` · **Quality:** `standard` · **ID:** `alert-dialog`
> **Path:** `components/overlay/alert-dialog.md`

**Alert Dialog** is a premium, production-ready component from the **ComponentX** library — engineered for overlay interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `background`, `button`, `data` workflows.
- **Pattern coverage** — includes `navigation`, `overlay` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Alert Dialog** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
title: React Alert Dialog Components
description: A React alert dialog component built with Tailwind CSS and React Aria Components. Show confirmation modals for actions like delete or logout with accessible focus and keyboard support.
---

import AlertDialogControlledPreview from "@/components/preview/alert-dialog/alert-dialog-controlled-preview";
import AlertDialogDestructivePreview from "@/components/preview/alert-dialog/alert-dialog-destructive-preview";
import AlertDialogPreview from "@/components/preview/alert-dialog/alert-dialog-preview";
import { getFileContent } from "@/utils/get-file-content";
import { Accordion, Accordions } from "componentx-ui/components/accordion";

# Alert Dialog

The React Alert Dialog component shows a modal window on top of the page to ask users to confirm an important action. It is used for actions like deleting data, logging out, or making permanent changes.

It opens as an overlay and blocks interaction with the background until the user takes action. For example, users must confirm before deleting an account or removing a file.

Built with React and `react-aria-components`, and styled using Tailwind CSS. It supports keyboard navigation, focus management, and accessible modal behavior.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/alert-dialog/alert-dialog-preview.tsx"
  )}
>
  <AlertDialogPreview />
</ComponentPreview>

## Anatomy

Wrap the `AlertDialog` component with `Backdrop` to create a complete alert dialog experience with backdrop behavior.

```tsx
"use client";

import { AlertDialog } from "@/registry/core/alert-dialog";
import { Button } from "@/registry/core/button";
import {
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/registry/core/dialog";
import { OverlayWrapper } from "@/registry/core/overlay";

export default function AlertDialogPreview() {
  return (
    <OverlayWrapper>
      <Button />

      <AlertDialog>
        <DialogHeader>
          <DialogTitle />
          <DialogDescription />
        </DialogHeader>

        <DialogFooter>
          <DialogClose />
        </DialogFooter>
      </AlertDialog>
    </OverlayWrapper>
  );
}
```

## Examples

### Basic

Wrap the `AlertDialog` component with `OverlayWrapper` to create a basic alert dialog component.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/alert-dialog/alert-dialog-preview.tsx"
  )}
>
  <AlertDialogPreview />
</ComponentPreview>

### Controlled

Use the `isOpen` and `onOpenChange` props to control the open state of the alert dialog.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/alert-dialog/alert-dialog-controlled-preview.tsx"
  )}
  highlightLines={[20]}
>
  <AlertDialogControlledPreview />
</ComponentPreview>

### Autofocus

Pass `autoFocus` to desired elements to automatically focus them when the alert dialog opens.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/alert-dialog/alert-dialog-destructive-preview.tsx"
  )}
  highlightWords={["autoFocus"]}
>
  <AlertDialogDestructivePreview />
</ComponentPreview>

## API Reference

### AlertDialog

The root component that wraps all the content and provides alert dialog behavior and accessibility features.

| Prop           | Type                        | Default | Description                        |
| :------------- | :-------------------------- | :------ | :--------------------------------- |
| `children`     | `React.ReactNode`           | -       | The trigger and content elements   |
| `isOpen`       | `boolean`                   | -       | Controlled open state              |
| `defaultOpen`  | `boolean`                   | -       | Uncontrolled default open state    |
| `onOpenChange` | `(isOpen: boolean) => void` | -       | Called when the open state changes |
| `className`    | `string`                    | -       | Additional CSS classes             |

## Composition

The Alert Dialog should be composed the same as `Dialog` without the `Backdrop` component.

```
OverlayWrapper                  — A stateful wrapper that manages the open state of the alert dialog and backdrop.
└── Button                      — The trigger button that opens the alert dialog.
    └── AriaDialog              — The dialog panel with `alertdialog` role and accessible behavior.
        └── children            — Content of the dialog.
```

- Follow the same composition as `Dialog` without the `Backdrop` component.
- Use `DialogHeader`, `DialogTitle`, `DialogDescription` and other `Dialog` sub-components to structure the content of the alert dialog.

## Accessibility

- **Dialog role:** The `AlertDialog` component renders with `role="alertdialog"` by default.
- **Focus management:** The alert dialog keeps focus while open and returns focus to the trigger when it closes.
- **Outside click and Keyboard support:** Closing the dialog by clicking outside and `Escape` key is disabled by default. Can be enabled with `isDismissable` and `isKeyboardDismissDisabled` props.
- **Screen reader support:** Screen readers announce the dialog as an alertdialog, so users understand that immediate action is required.

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
