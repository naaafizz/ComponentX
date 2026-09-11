---
name: "Scroll Area"
library: "ComponentX"
id: "scroll-area"
type: "animation"
quality: "showcase"
tags: ["animation", "data", "navigation", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Scroll Area

> **Type:** `animation` · **Quality:** `showcase` · **ID:** `scroll-area`
> **Path:** `components/animation/scroll-area.md`

**Scroll Area** is a premium, production-ready component from the **ComponentX** library — engineered for animation interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Showcase tier** — a high-impact, visually rich implementation — animated, 3D, or dependency-heavy by design.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `animation`, `data`, `navigation` workflows.
- **Pattern coverage** — includes `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Scroll Area** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
title: React Scroll Area Components
description: A React scroll area component built with Tailwind CSS. Build scrollable containers with custom scrollbars, vertical and horizontal scrolling, and flexible layouts.
---

import { ScrollAreaBothPreview } from "@/components/preview/scroll-area/scroll-area-both-preview";
import { ScrollAreaHorizontalPreview } from "@/components/preview/scroll-area/scroll-area-horizontal-preview";
import { ScrollAreaPreview } from "@/components/preview/scroll-area/scroll-area-preview";
import { getFileContent } from "@/utils/get-file-content";
import { Accordion, Accordions } from "componentx-ui/components/accordion";

# Scroll Area

The React Scroll Area component creates a scrollable container with custom scrollbars. It lets users scroll through content while keeping full control over the look and behavior.

It is useful when the content is larger than its container. For example, you can use it for long lists, tables, logs, or side panels with fixed height.

Built with [Base UI](https://base-ui.com/react/components/scroll-area) and styled using Tailwind CSS, it supports vertical and horizontal scrolling, keyboard navigation, and accessible interactions.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/scroll-area/scroll-area-preview.tsx"
  )}
>
  <ScrollAreaPreview />
</ComponentPreview>

## Anatomy

Import the component parts and combine them to create a scrollable area.

```tsx
import {
  ScrollArea,
  ScrollAreaViewport,
  ScrollBar
} from "@/components/scroll-area";

export const ScrollAreaExample = () => (
  <ScrollArea>
    <ScrollAreaViewport>{/* Scrollable Content */}</ScrollAreaViewport>
    <ScrollBar orientation="vertical" />
    <ScrollBar orientation="horizontal" />
  </ScrollArea>
);
```

## Examples

### Basic Vertical Scroll

The most common use case for a scroll area, providing a custom vertical scrollbar for long lists or text blocks.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/scroll-area/scroll-area-preview.tsx"
  )}
>
  <ScrollAreaPreview />
</ComponentPreview>

### Horizontal Scroll

Use the `orientation="horizontal"` prop on the `ScrollBar` component to enable horizontal scrolling for wide content like carousels or data tables.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/scroll-area/scroll-area-horizontal-preview.tsx"
  )}
>
  <ScrollAreaHorizontalPreview />
</ComponentPreview>

### Both Axes

Enable both vertical and horizontal scrollbars for large content areas that exceed the container in both dimensions.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/scroll-area/scroll-area-both-preview.tsx"
  )}
>
  <ScrollAreaBothPreview />
</ComponentPreview>

## API Reference

### ScrollArea

The root component that groups all parts and manages the scroll state.

| Prop                    | Type                                                                                        | Default | Description                                                      |
| :---------------------- | :------------------------------------------------------------------------------------------ | :------ | :--------------------------------------------------------------- |
| `overflowEdgeThreshold` | `number \| { xStart?: number; xEnd?: number; yStart?: number; yEnd?: number } \| undefined` | `0`     | Threshold in pixels before overflow edge attributes are applied. |
| `className`             | `string`                                                                                    | -       | Additional CSS classes for the root element.                     |

### ScrollAreaViewport

The actual scrollable container.

| Prop        | Type     | Default | Description                              |
| :---------- | :------- | :------ | :--------------------------------------- |
| `className` | `string` | -       | Additional CSS classes for the viewport. |

### ScrollBar

The scrollbar track and thumb component.

| Prop          | Type                         | Default      | Description                                                 |
| :------------ | :--------------------------- | :----------- | :---------------------------------------------------------- |
| `orientation` | `'vertical' \| 'horizontal'` | `'vertical'` | The direction of movement for the scrollbar.                |
| `keepMounted` | `boolean`                    | `false`      | Whether to keep the element in the DOM when not scrollable. |
| `className`   | `string`                     | -            | Additional CSS classes for the scrollbar track.             |

## Accessibility

- **Keyboard support:** Users can scroll the content using keyboard keys when the scroll area is focused.
- **Scrollable container:** The `ScrollAreaViewport` acts as the main scrollable region and should contain all scrollable content.
- **Custom scrollbars:** Scrollbars are interactive and support mouse and touch drag.
- **Orientation support:** Supports vertical and horizontal scrolling based on content size and scrollbar configuration.
- **Screen reader support:** Use a clear structure and meaningful content within the scroll area so screen readers can interpret it correctly.

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
