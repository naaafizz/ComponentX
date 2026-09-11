---
name: "Resizable"
library: "ComponentX"
id: "resizable"
type: "navigation"
quality: "standard"
tags: ["component", "layout"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Resizable

> **Type:** `navigation` · **Quality:** `standard` · **ID:** `resizable`
> **Path:** `components/navigation/resizable.md`

**Resizable** is a premium, production-ready component from the **ComponentX** library — engineered for navigation interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `layout` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Resizable** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
title: React Resizable Panel Components
description: A React resizable component built with Tailwind CSS. Create resizable panel and split layouts with drag handles, adjustable sizes, and keyboard control.

---

import ResizableHandlePreview from "@/components/preview/resizable/resizable-handle-preview";
import ResizableNestedPreview from "@/components/preview/resizable/resizable-nested-preview";
import ResizablePreview from "@/components/preview/resizable/resizable-preview";
import ResizableVerticalPreview from "@/components/preview/resizable/resizable-vertical-preview";
import { getFileContent } from "@/utils/get-file-content";
import { Accordion, Accordions } from "componentx-ui/components/accordion";

# Resizable

The React Resizable component lets users resize panels by dragging a handle between them. It is used to create flexible layouts that allow users to adjust the size of sections.

It helps users control how much space each panel takes. For example, you can resize a sidebar and main content area in a dashboard.

Built with `react-resizable-panels` and styled using Tailwind CSS, it supports horizontal and vertical layouts, keyboard controls, and accessible interactions.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/resizable/resizable-preview.tsx"
  )}
>
  <ResizablePreview />
</ComponentPreview>

## Anatomy

Import the component parts and combine them.

```tsx
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from "@/components/resizable";

export const ResizableExample = () => (
  <ResizablePanelGroup direction="horizontal">
    <ResizablePanel>One</ResizablePanel>
    <ResizableHandle />
    <ResizablePanel>Two</ResizablePanel>
  </ResizablePanelGroup>
);
```

## Examples

### Vertical

Set the `orientation` prop to `vertical` to create a vertical layout.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/resizable/resizable-vertical-preview.tsx"
  )}
>
  <ResizableVerticalPreview />
</ComponentPreview>

### Visible Handle

Use the `withHandle` prop on `ResizableHandle` to show a more visible grabber.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/resizable/resizable-handle-preview.tsx"
  )}
>
  <ResizableHandlePreview />
</ComponentPreview>

### Nested

You can nest `ResizablePanelGroup` components to create complex layouts.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/resizable/resizable-nested-preview.tsx"
  )}
>
  <ResizableNestedPreview />
</ComponentPreview>

## API Reference

### ResizablePanelGroup

The main container for resizable panels.

| Prop          | Type                         | Default | Description                     |
| :------------ | :--------------------------- | :------ | :------------------------------ |
| `orientation` | `"horizontal" \| "vertical"` | -       | The direction of the panels.    |
| `id`          | `string`                     | -       | Unique ID for the panel group.  |
| `storage`     | `PanelGroupStorage`          | -       | Custom storage for panel sizes. |
| `className`   | `string`                     | -       | Additional CSS classes.         |

### ResizablePanel

A single panel within a group.

| Prop          | Type                     | Default | Description                            |
| :------------ | :----------------------- | :------ | :------------------------------------- |
| `defaultSize` | `number`                 | -       | The initial size of the panel (0-100). |
| `maxSize`     | `number`                 | -       | The maximum size of the panel (0-100). |
| `minSize`     | `number`                 | -       | The minimum size of the panel (0-100). |
| `collapsible` | `boolean`                | `false` | Whether the panel can be collapsed.    |
| `onCollapse`  | `() => void`             | -       | Callback when the panel collapses.     |
| `onExpand`    | `() => void`             | -       | Callback when the panel expands.       |
| `onResize`    | `(size: number) => void` | -       | Callback when the panel is resized.    |

### ResizableHandle

The separator between panels that users can drag.

| Prop         | Type      | Default | Description                  |
| :----------- | :-------- | :------ | :--------------------------- |
| `withHandle` | `boolean` | `false` | Shows a visible handle icon. |
| `disabled`   | `boolean` | `false` | Disables resizing.           |
| `className`  | `string`  | -       | Additional CSS classes.      |

## Accessibility

- **Keyboard support:** Users can resize panels using the `Arrow` keys. They can also use `Home` and `End` keys to quickly move to the minimum or maximum sizes.
- **Focus management:** Resize handles can receive focus, making them accessible for keyboard users.
- **Screen reader support:** The component uses `ARIA` attributes to help screen readers understand the layout and resizing behavior.
- **Resize handles:** The handle between panels is the main interaction point and can be used with both the mouse and keyboard.

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
