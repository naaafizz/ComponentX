---
name: "Tooltip"
library: "ComponentX"
id: "tooltip"
type: "overlay"
quality: "standard"
tags: ["button", "overlay", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Tooltip

> **Type:** `overlay` · **Quality:** `standard` · **ID:** `tooltip`
> **Path:** `components/overlay/tooltip.md`

**Tooltip** is a premium, production-ready component from the **ComponentX** library — engineered for overlay interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `button`, `overlay`, `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Tooltip** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
title: React Tooltip Components
description: A React tooltip component that shows informative text on hover or focus. A floating popup used to describe UI elements, built for accessibility and precise positioning.
---

import TooltipAsChildPreview from "@/components/preview/tooltip/tooltip-as-child-preview";
import TooltipControlledPreview from "@/components/preview/tooltip/tooltip-controlled-preview";
import TooltipDefaultPreview from "@/components/preview/tooltip/tooltip-default-preview";
import TooltipPlacementPreview from "@/components/preview/tooltip/tooltip-placement-preview";
import { getFileContent } from "@/utils/get-file-content";
import { Accordion, Accordions } from "componentx-ui/components/accordion";

# Tooltip

The Tooltip component displays short, contextual information when a user **hovers over** or **focuses on** an element. It is commonly used to explain icons, buttons, or UI elements without taking up permanent space.

This component is built with **React** and powered by **`@floating-ui/react`** for accurate positioning, collision handling, and accessible interactions.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/tooltip/tooltip-default-preview.tsx"
  )}
>
  <TooltipDefaultPreview />
</ComponentPreview>

## Anatomy

The **Tooltip** component uses a compound component pattern and must contain a **`TooltipTrigger`** and **`TooltipContent`**.

```tsx
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent
} from "@/components/componentx/core/tooltip";
import { InfoCircle } from "@componentx/icons";

export default function TooltipUsageExample() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button className="text-primary-500">
          <InfoCircle className="size-5" />
        </button>
      </TooltipTrigger>
      <TooltipContent>Helpful context.</TooltipContent>
    </Tooltip>
  );
}
```

## Examples

### Placements

The tooltip can be positioned in four directions: `top`, `bottom`, `left`, and `right` using the `placement` prop.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/tooltip/tooltip-placement-preview.tsx"
  )}
>
  <TooltipPlacementPreview />
</ComponentPreview>

### Triggering with any Element (`asChild`)

Use the `asChild` prop on **`TooltipTrigger`** to forward all required event handlers and `ref` to its single child element, allowing you to use any element (like an icon button, link, or custom component) as the trigger.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/tooltip/tooltip-as-child-preview.tsx"
  )}
>
  <TooltipAsChildPreview />
</ComponentPreview>

### Controlled Tooltip

You can fully control the open state using `open` and `onOpenChange`.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/tooltip/tooltip-controlled-preview.tsx"
  )}
>
  <TooltipControlledPreview />
</ComponentPreview>

## API Reference

### Tooltip

The root component that manages state and floating logic.

| Prop           | Type                      | Default | Description                                                  |
| :------------- | :------------------------ | :------ | :----------------------------------------------------------- |
| `initialOpen`  | `boolean`                 | `false` | The initial open state for uncontrolled usage.               |
| `placement`    | `Placement`               | `'top'` | The position of the tooltip content relative to the trigger. |
| `open`         | `boolean`                 | -       | **(Controlled)** The open state. Overrides internal state.   |
| `onOpenChange` | `(open: boolean) => void` | -       | **(Controlled)** Event handler when the open state changes.  |

### TooltipTrigger

The element that activates the tooltip.

| Prop       | Type              | Default | Description                                                                                             |
| :--------- | :---------------- | :------ | :------------------------------------------------------------------------------------------------------ |
| `asChild`  | `boolean`         | `false` | When `true`, props are forwarded to the single child element instead of rendering a default `<button>`. |
| `children` | `React.ReactNode` | -       | The element that triggers the tooltip. Defaults to a `<button>`.                                        |

### TooltipContent

The popup containing the descriptive content.

| Prop       | Type              | Default | Description                                     |
| :--------- | :---------------- | :------ | :---------------------------------------------- |
| `children` | `React.ReactNode` | -       | The content to be displayed inside the tooltip. |

## Accessibility

- Uses `role="tooltip"` for correct screen reader interpretation
- Opens on hover and keyboard focus
- Closes automatically when focus or pointer leaves
- Fully keyboard accessible using the Tab key
- Uses `safePolygon` logic to prevent accidental closing when moving the cursor
- Screen readers announce tooltip content when the trigger is focused

## Notes

- The component uses **`FloatingPortal`** to render the content outside the DOM flow of the trigger, preventing clipping issues, while still maintaining correct positioning.
- The content has an integrated **arrow** which is correctly positioned and styled to point toward the trigger.
- **`offset`**, **`flip`**, and **`shift`** middleware ensure the tooltip stays in view and avoids being cut off by the viewport edges.

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
