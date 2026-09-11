---
name: "Dialog"
library: "ComponentX"
id: "dialog"
type: "overlay"
quality: "standard"
tags: ["background", "button", "form", "input", "navigation", "overlay", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Dialog

> **Type:** `overlay` · **Quality:** `standard` · **ID:** `dialog`
> **Path:** `components/overlay/dialog.md`

**Dialog** is a premium, production-ready component from the **ComponentX** library — engineered for overlay interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `background`, `button`, `form` workflows.
- **Pattern coverage** — includes `input`, `navigation`, `overlay` workflows.
- **Pattern coverage** — includes `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Dialog** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
title: React Dialog Components
description: A React dialog component built with Tailwind CSS and React Aria Components. Create modal dialogs and pop-up overlays for forms, messages, and actions with accessible focus and keyboard support.
---

import DialogControlledWithBackdropPreview from "@/components/preview/dialog/dialog-controlled-with-backdrop-preview";
import DialogCollectInputPreview from "@/components/preview/dialog/dialog-collect-input-preview";
import DialogControlledPreview from "@/components/preview/dialog/dialog-controlled-preview";
import DialogMultipleActionsPreview from "@/components/preview/dialog/dialog-multiple-actions-preview";
import DialogPreview from "@/components/preview/dialog/dialog-preview";
import DialogBasicPreview from "@/components/preview/dialog/dialog-basic-preview";
import DialogStickyFooterPreview from "@/components/preview/dialog/dialog-sticky-footer-preview";
import DialogWithoutClosePreview from "@/components/preview/dialog/dialog-without-close-preview";
import DialogCustomPreview from "@/components/preview/dialog/dialog-custom-preview";
import DialogWithoutOverlayPreview from "@/components/preview/dialog/dialog-without-overlay-preview";
import { getFileContent } from "@/utils/get-file-content";
import { Accordion, Accordions } from "componentx-ui/components/accordion";

# Dialog

The React Dialog component shows a modal window on top of the page to display content or collect user input. It is used for things like forms, messages, or actions that need user attention.

It opens as an overlay and can block or allow interaction with the background. For example, you can use it to edit a profile, show details, or ask users to take an action.

Built with React and `react-aria-components` Components, and styled using Tailwind CSS. It supports keyboard navigation, focus management, and accessible modal behavior.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/dialog/dialog-preview.tsx"
  )}
>
  <DialogPreview />
</ComponentPreview>

## Anatomy

Wrap the `Dialog` component with `OverlayWrapper` and `Backdrop` from the overlay module to create a complete dialog experience with trigger and backdrop behavior.

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
      <DialogTrigger />
      <Backdrop>
        <Dialog>
          <DialogHeader>
            <DialogTitle />
            <DialogDescription />
          </DialogHeader>
          <DialogBody />
          <DialogFooter>
            <DialogClose />
          </DialogFooter>
        </Dialog>
      </Backdrop>
    </OverlayWrapper>
  );
}
```

## Examples

### Basic Dialog

Wrap the `Dialog` component with `OverlayWrapper` and use `Button` as trigger to create a basic dialog component. Use `Backdrop` to render a backdrop overlay behind the dialog if needed.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/dialog/dialog-basic-preview.tsx"
  )}
>
  <DialogBasicPreview />
</ComponentPreview>

### Controlled Dialog

Pass `isOpen` and `onOpenChange` props to `Dialog` to create a controlled dialog component.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/dialog/dialog-controlled-preview.tsx"
  )}
  highlightLines={[20]}
  noPaddingOnPreviewForMobile
>
  <DialogControlledPreview />
</ComponentPreview>

**Note:** `OverlayWrapper` is not needed when using `Dialog` in controlled mode.

### Controlled Dialog with Backdrop

When creating a controlled dialog with a backdrop, pass the `isOpen` and `onOpenChange` props to `Backdrop` component.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/dialog/dialog-controlled-with-backdrop-preview.tsx"
  )}
  highlightLines={[23]}
>
  <DialogControlledWithBackdropPreview />
</ComponentPreview>

### Without Close Button

You can remove the default close button at the top using `showCloseButton={false}` on `Dialog`.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/dialog/dialog-without-close-preview.tsx"
  )}
  highlightLines={[23]}
>
  <DialogWithoutClosePreview />
</ComponentPreview>

### Collect Input

Present a form inside the dialog to collect user input. Use `autoFocus` to focus an input or action when the dialog opens.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/dialog/dialog-collect-input-preview.tsx"
  )}
  highlightWords={["autoFocus"]}
>
  <DialogCollectInputPreview />
</ComponentPreview>

### Multiple Actions

Offer the user multiple choices or actions to select from within a single dialog.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/dialog/dialog-multiple-actions-preview.tsx"
  )}
>
  <DialogMultipleActionsPreview />
</ComponentPreview>

### Sticky Footer

Keep the footer actions visible while the dialog content scrolls. Useful for long content like terms of service or license agreements.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/dialog/dialog-sticky-footer-preview.tsx"
  )}
>
  <DialogStickyFooterPreview />
</ComponentPreview>

### Without Overlay

Render the dialog without a backdrop overlay by omitting the `Backdrop` wrapper. The `Dialog` component renders with its own modal behavior but no visual backdrop.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/dialog/dialog-without-overlay-preview.tsx"
  )}
>
  <DialogWithoutOverlayPreview />
</ComponentPreview>

### Custom

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/dialog/dialog-custom-preview.tsx"
  )}
>
  <DialogCustomPreview />
</ComponentPreview>

## API Reference

### Dialog

The root component that wraps all the content and provide dialog behavior and accessibility features.

| Prop              | Type                                                                  | Default | Description                                                       |
| :---------------- | :-------------------------------------------------------------------- | :------ | :---------------------------------------------------------------- |
| `children`        | `React.ReactNode \| (opts: { close: () => void }) => React.ReactNode` | -       | Content of the dialog. Supports render props for `close()` access |
| `isOpen`          | `boolean`                                                             | -       | Controlled open state                                             |
| `defaultOpen`     | `boolean`                                                             | -       | Uncontrolled default open state                                   |
| `onOpenChange`    | `(isOpen: boolean) => void`                                           | -       | Called when the open state changes                                |
| `showCloseButton` | `boolean`                                                             | `true`  | Whether to show the default close button in the top-right         |
| `className`       | `string`                                                              | -       | Additional CSS classes for the dialog panel                       |

### DialogHeader

A semantic container for the title and description at the top of the dialog.

| Prop        | Type              | Default | Description            |
| :---------- | :---------------- | :------ | :--------------------- |
| `children`  | `React.ReactNode` | -       | Header content         |
| `className` | `string`          | -       | Additional CSS classes |

### DialogTitle

The dialog title. Supports all heading levels via the `level` prop (defaults to heading level 3).

| Prop        | Type              | Default | Description            |
| :---------- | :---------------- | :------ | :--------------------- |
| `children`  | `React.ReactNode` | -       | Title text             |
| `level`     | `number`          | `3`     | Heading level (1-6)    |
| `className` | `string`          | -       | Additional CSS classes |

### DialogDescription

A paragraph for supplementary text that describes the dialog's purpose.

| Prop        | Type              | Default | Description            |
| :---------- | :---------------- | :------ | :--------------------- |
| `children`  | `React.ReactNode` | -       | Description text       |
| `className` | `string`          | -       | Additional CSS classes |

### DialogBody

Main content area between the header and footer.

| Prop        | Type              | Default | Description            |
| :---------- | :---------------- | :------ | :--------------------- |
| `children`  | `React.ReactNode` | -       | Body content           |
| `className` | `string`          | -       | Additional CSS classes |

### DialogFooter

The bottom area mainly meant for actions.

| Prop        | Type              | Default | Description                    |
| :---------- | :---------------- | :------ | :----------------------------- |
| `children`  | `React.ReactNode` | -       | Footer content (buttons, etc.) |
| `className` | `string`          | -       | Additional CSS classes         |

The `showCloseButton` prop from the previous version has been removed from `DialogFooter`. Use `DialogClose` or a `Button` with `slot="close"` instead.

### DialogClose

A button with `slot="close"` that automatically closes the nearest dialog when pressed. Accepts all `Button` props except `slot`.

| Prop                 | Type              | Default | Description                    |
| :------------------- | :---------------- | :------ | :----------------------------- |
| `children`           | `React.ReactNode` | -       | The close button label/content |
| (All `Button` props) | —                 | -       | See Button API Reference       |

## Composition

The Dialog is composed of the root `Dialog` component plus layout and content slots. It is paired with `OverlayWrapper` and `Backdrop` from the overlay module for trigger and backdrop behavior.

```
OverlayWrapper                         — Root container. Wraps DialogTrigger from RAC. Manages open/close state.
├── Button (trigger)                   — Any pressable element that opens the dialog.
├── Backdrop                           — Wraps ModalOverlay from RAC. Provides the backdrop overlay.
│   └── Dialog                         — Wraps AriaModal + AriaDialog. The dialog panel with close button.
│       ├── DialogHeader               — Container for title and description at the top.
│       │   ├── DialogTitle            — Title heading with slot="title" for ARIA labelling.
│       │   └── DialogDescription      — Supplementary description text below the title.
│       ├── DialogBody                 — Scrollable content area between header and footer.
│       └── DialogFooter               — Action bar at the bottom for buttons.
│           └── DialogClose / Button   — Close button with slot="close" that automatically closes the dialog.
```

- Use `OverlayWrapper` (`DialogTrigger` from RAC) as the root. It wraps the trigger element and the dialog content and manages the open/close state.
- Use any pressable component (e.g. `Button`) as the trigger child of `OverlayWrapper`.
- Use `Backdrop` (`ModalOverlay` from RAC) to render a backdrop overlay. It accepts `isDismissable` and `isKeyboardDismissDisabled` props. Omit it entirely to render the dialog without a backdrop.
- Use `Dialog` as the panel. It wraps `AriaModal` and `AriaDialog`, managing focus trapping and ARIA attributes. The `children` prop accepts a render function with a `close` argument for programmatic dismissal.
- Use `DialogHeader` to group the title and description. It provides consistent spacing and layout.
- Use `DialogTitle` rendered via `Heading` with `slot="title"`. This automatically labels the dialog for screen readers.
- Use `DialogDescription` for supplementary text. It is positioned below the title inside the header.
- Use `DialogBody` for the main scrollable content area.
- Use `DialogFooter` for action buttons. Use `DialogClose` or any `Button` with `slot="close"` for custom close triggers.
- Use `DialogClose` to render a `Button` with `slot="close"`. It automatically closes the nearest dialog when pressed.

## Accessibility

- **Focus management:** The dialog keeps focus while open and returns focus to the trigger when it closes.
- **Keyboard support:** Users can press the `Escape` key to close the dialog. You can turn off this behavior by setting `isKeyboardDismissDisabled` on `Backdrop`.
- **Trigger behavior:** Users can open and close the dialog using a trigger or a close button with a mouse or keyboard.
- **Screen reader support:** Screen readers announce the dialog as a modal, and background content stays hidden while it is open.
- **ARIA labeling:** Use `DialogTitle` and `DialogDescription` to describe the dialog content clearly.
- **Outside click:** Users can close the dialog by clicking outside when `isDismissable` is enabled on `Backdrop`.
- **Dialog role:** The `Dialog` component renders with `role="dialog"` by default. Use `role="alertdialog"` for alert dialogs via the `role` prop.

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
