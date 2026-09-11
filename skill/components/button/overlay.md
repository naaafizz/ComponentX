---
name: "Overlay"
library: "ComponentX"
id: "overlay"
type: "button"
quality: "standard"
tags: ["animation", "button", "component", "overlay"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Overlay

> **Type:** `button` · **Quality:** `standard` · **ID:** `overlay`
> **Path:** `components/button/overlay.md`

**Overlay** is a premium, production-ready component from the **ComponentX** library — engineered for button interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `animation`, `button`, `overlay` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Overlay** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
title: React Overlay Components
description: A React overlay component used to create stateless overlays. Create modal dialogs and pop-up overlays for forms, messages, and actions with accessible focus and keyboard support.
---

import OverlayPreview from "@/components/preview/overlay/overlay-preview";
import OverlayWrapperPreview from "@/components/preview/overlay/overlay-wrapper-preview";
import ControlledOverlayWithBackdropPreview from "@/components/preview/overlay/controlled-overlay-with-backdrop-preview";
import { getFileContent } from "@/utils/get-file-content";
import { Accordion, Accordions } from "componentx-ui/components/accordion";

# React Overlay Components

The React Overlay components provide a flexible and accessible way to create overlay components like modal dialogs and pop-up overlays for forms, messages, and actions without managing the underlying state and accessibility concerns. Built on top of the React Aria library, these components manage states, focus, keyboard interactions, and accessibility features to ensure a seamless user experience.

`OverlayWrapper` is a stateful component for any kind of overlay, that manages the open/close state of the overlay and provides a context for its children. `Backdrop` is primarily meant for showing backdrop behind the overlay component, can also manage states optionally.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/overlay/overlay-preview.tsx"
  )}
>
  <OverlayPreview />
</ComponentPreview>

## Anatomy

Compose `OverlayWrapper` and `Backdrop` with any type of overlay components.

```tsx
import { OverlayWrapper } from "@/components/componentx/core/overlay";
import { Backdrop } from "@/components/componentx/core/overlay";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogBody,
  DialogFooter,
  DialogClose
} from "@/components/componentx/core/dialog";

export default function DialogAnatomy() {
  return (
    <OverlayWrapper>
      <Button />

      <Backdrop>// An overlay component like Dialog, Popover, etc.</Backdrop>
    </OverlayWrapper>
  );
}
```

## Examples

### Overlay Wrapper

Create an uncontrolled overlay component by wrapping it with `OverlayWrapper`. The wrapper will manage the open/close state and provide the necessary context for the overlay component to function properly.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/overlay/overlay-wrapper-preview.tsx"
  )}
  highlightLines={[4, 9, 19]}
>
  <OverlayWrapperPreview />
</ComponentPreview>

### Backdrop

Use `Backdrop` to create a backdrop behind the overlay component.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/overlay/overlay-preview.tsx"
  )}
  highlightLines={[13, 20, 43]}
>
  <OverlayPreview />
</ComponentPreview>

### Controlled Overlay with Backdrop

When creating a controlled overlay with a backdrop, pass the `isOpen` and `onOpenChange` props to `Backdrop` component instead of the overlay component itself.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/overlay/controlled-overlay-with-backdrop-preview.tsx"
  )}
  highlightLines={[23]}
>
  <ControlledOverlayWithBackdropPreview />
</ComponentPreview>

## API Reference

### OverlayWrapper

The root component that manages the open/close state and provides context for overlay components.

| Prop               | Type                                                    | Default | Description                                                              |
| :----------------- | :------------------------------------------------------ | :------ | :----------------------------------------------------------------------- |
| `children`         | `React.ReactNode`                                       | -       | Content of the overlay, typically a trigger element                      |
| `isOpen`           | `boolean`                                               | -       | Controlled open state                                                    |
| `defaultOpen`      | `boolean`                                               | -       | Uncontrolled default open state                                          |
| `onOpenChange`     | `(isOpen: boolean) => void`                             | -       | Called when the open state changes                                       |
| `className`        | `string`                                                | -       | Additional CSS classes for the wrapper                                   |
| `style`            | `React.CSSProperties`                                   | -       | Inline styles for the wrapper                                            |
| `id`               | `string`                                                | -       | The element's unique identifier                                          |
| `aria-label`       | `string`                                                | -       | Defines a string value that labels the current element                   |
| `aria-labelledby`  | `string`                                                | -       | Identifies the element (or elements) that labels the current element     |
| `aria-describedby` | `string`                                                | -       | Identifies the element (or elements) that describes the object           |
| `aria-details`     | `string`                                                | -       | Identifies the element (or elements) that provide a detailed description |
| `role`             | `'dialog' \| 'alertdialog' \| 'alert' \| 'alertdialog'` | -       | The accessibility role for the dialog                                    |
| `slot`             | `string`                                                | -       | A slot name for the component                                            |

### Backdrop

Wraps ModalOverlay from RAC to provide a backdrop overlay behind overlay components.

| Prop                           | Type                                                                  | Default | Description                                                                           |
| :----------------------------- | :-------------------------------------------------------------------- | :------ | :------------------------------------------------------------------------------------ |
| `children`                     | `React.ReactNode \| (opts: { close: () => void }) => React.ReactNode` | -       | Content of the backdrop, typically an overlay component                               |
| `isDismissable`                | `boolean`                                                             | `true`  | Whether to close the backdrop when the user interacts outside it                      |
| `isEntering`                   | `boolean`                                                             | -       | Whether the backdrop is currently performing an entry animation                       |
| `isExiting`                    | `boolean`                                                             | -       | Whether the backdrop is currently performing an exit animation                        |
| `isKeyboardDismissDisabled`    | `boolean`                                                             | `false` | Whether pressing the Escape key to close the backdrop should be disabled              |
| `shouldCloseOnInteractOutside` | `(element: HTMLElement) => boolean`                                   | -       | Function to filter out interaction with elements that should not dismiss the backdrop |
| `className`                    | `string`                                                              | -       | Additional CSS classes for the backdrop                                               |
| `style`                        | `React.CSSProperties`                                                 | -       | Inline styles for the backdrop                                                        |
| `id`                           | `string`                                                              | -       | The element's unique identifier                                                       |
| `aria-label`                   | `string`                                                              | -       | Defines a string value that labels the current element                                |
| `aria-labelledby`              | `string`                                                              | -       | Identifies the element (or elements) that labels the current element                  |
| `aria-describedby`             | `string`                                                              | -       | Identifies the element (or elements) that describes the object                        |
| `aria-details`                 | `string`                                                              | -       | Identifies the element (or elements) that provide a detailed description              |

## Composition

The Overlay components are composed of the root `OverlayWrapper` and `Backdrop` components. They are paired with overlay components like `Dialog` or `Popover` for complete overlay behavior.

```
OverlayWrapper                         — Root container that wraps the trigger and overlay content.
├── Button (trigger)                   — Any pressable element.
└── Backdrop                           — Provides the backdrop overlay.
    └── Dialog / Popover               — The overlay panel (Dialog, Popover, etc.) with content.
```

- Use `OverlayWrapper` as the root. It wraps the trigger element and the overlay content and manages the open/close state.
- Use any pressable component (e.g. `Button`) as the trigger. Make sure it is the child of `OverlayWrapper`.
- Use `Backdrop` to render a backdrop overlay. It accepts `isDismissable`, `isKeyboardDismissDisabled`, and `shouldCloseOnInteractOutside` props. Omit it entirely to render the overlay without a backdrop.
- Use `Dialog`, `Popover`, or any overlay component as the child of `Backdrop` to display the actual overlay content.

## Accessibility

- **Focus management:** The overlay keeps focus while open and returns focus to the trigger when it closes.
- **Keyboard support:** Users can press the `Escape` key to close the overlay. You can turn off this behavior by setting `isKeyboardDismissDisabled` on `Backdrop`.
- **Trigger behavior:** Users can open and close the overlay using a trigger or a close button with a mouse or keyboard.
- **Outside click:** Users can close the overlay by clicking outside when `isDismissable` is enabled on `Backdrop`.
- **Overlay role:** The overlay component (e.g., `Dialog`) renders with `role="dialog"` by default. Use `role="alertdialog"` for alert dialogs via the `role` prop on the overlay component.
- **ARIA labeling:** Use `aria-label` or `aria-labelledby` on the overlay component to describe the overlay content clearly.

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
