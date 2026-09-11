---
name: "Hover Card"
library: "ComponentX"
id: "hover-card"
type: "animation"
quality: "showcase"
tags: ["animation", "card", "data", "image", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Hover Card

> **Type:** `animation` · **Quality:** `showcase` · **ID:** `hover-card`
> **Path:** `components/animation/hover-card.md`

**Hover Card** is a premium, production-ready component from the **ComponentX** library — engineered for animation interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Showcase tier** — a high-impact, visually rich implementation — animated, 3D, or dependency-heavy by design.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `animation`, `card`, `data` workflows.
- **Pattern coverage** — includes `image`, `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Hover Card** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
title: React Hover Card Components
description: A React hover card component built with Tailwind CSS. Show preview cards on hover with user info, link previews, or product details using tooltip-style popups.
---

import HoverCardAnimationPreview from "@/components/preview/hover-card/hover-card-animation-preview";
import HoverCardPlacementPreview from "@/components/preview/hover-card/hover-card-placement-preview";
import HoverCardPreview from "@/components/preview/hover-card/hover-card-preview";
import HoverCardProductPreview from "@/components/preview/hover-card/hover-card-product-preview";
import HoverCardProfilePreview from "@/components/preview/hover-card/hover-card-profile-preview";
import { getFileContent } from "@/utils/get-file-content";
import { Accordion, Accordions } from "componentx-ui/components/accordion";

# Hover Card

The React Hover Card component shows a small preview panel when a user hovers over an element. It is used to display extra information without leaving the page.

It helps users quickly view details without having to click. For example, you can display a user profile, product info, or a link preview when hovering over a name or an item.

Built with Base UI's `PreviewCard` component and styled using Tailwind CSS. It supports positioning, delays, keyboard access, and accessible interactions.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/hover-card/hover-card-preview.tsx"
  )}
>
  <HoverCardPreview />
</ComponentPreview>

## Anatomy

Import the sub-components and compose them.

```tsx
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent
} from "@/components/componentx/core/hover-card";

export const HoverCardAnatomy = () => (
  <HoverCard>
    <HoverCardTrigger>Hover me</HoverCardTrigger>
    <HoverCardContent>The content to display on hover.</HoverCardContent>
  </HoverCard>
);
```

## Examples

### Profile Preview

A common use case for hover cards is displaying user profile metadata when hovering over a username or avatar.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/hover-card/hover-card-profile-preview.tsx"
  )}
>
  <HoverCardProfilePreview />
</ComponentPreview>

### Product Preview

Hover cards can also be used to show a quick summary of a product, including an image, price, and description.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/hover-card/hover-card-product-preview.tsx"
  )}
>
  <HoverCardProductPreview />
</ComponentPreview>

### Placement

Use the `side` and `align` props to control the position of the hover card relative to its trigger.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/hover-card/hover-card-placement-preview.tsx"
  )}
>
  <HoverCardPlacementPreview />
</ComponentPreview>

### Custom Animation

You can customize the entrance and exit animations of the hover card using CSS transitions or animations, often by targeting the `data-state` attribute or using `componentx-motion`.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/hover-card/hover-card-animation-preview.tsx"
  )}
>
  <HoverCardAnimationPreview />
</ComponentPreview>

## API Reference

### HoverCard

The root component that manages the state and coordination of the hover card.

| Prop           | Type                      | Default | Description                                                   |
| :------------- | :------------------------ | :------ | :------------------------------------------------------------ |
| `open`         | `boolean`                 | -       | Whether the hover card is currently open.                     |
| `onOpenChange` | `(open: boolean) => void` | -       | Event handler called when the hover card is opened or closed. |
| `defaultOpen`  | `boolean`                 | `false` | Whether the hover card is initially open.                     |
| `actionsRef`   | `Ref<Actions>`            | -       | A ref to imperative actions (e.g., `close`, `unmount`).       |

### HoverCardTrigger

The element that opens the hover card on hover.

| Prop         | Type                       | Default | Description                                                            |
| :----------- | :------------------------- | :------ | :--------------------------------------------------------------------- |
| `href`       | `string`                   | -       | The URL that the hyperlink points to.                                  |
| `delay`      | `number`                   | `600`   | How long to wait before the hover card opens (ms).                     |
| `closeDelay` | `number`                   | `300`   | How long to wait before the hover card closes (ms).                    |
| `payload`    | `any`                      | -       | A payload to pass to the hover card when it is opened.                 |
| `render`     | `ReactElement \| function` | -       | Allows replacing the HTML element or composing with another component. |

### HoverCardContent

The container for the hover card contents, which includes positioning logic.

| Prop          | Type                                     | Default    | Description                                       |
| :------------ | :--------------------------------------- | :--------- | :------------------------------------------------ |
| `side`        | `'top' \| 'bottom' \| 'left' \| 'right'` | `'bottom'` | Which side of the trigger to align against.       |
| `sideOffset`  | `number`                                 | `4`        | Distance between the anchor and the popup (px).   |
| `align`       | `'start' \| 'center' \| 'end'`           | `'center'` | How to align the popup relative to the side.      |
| `alignOffset` | `number`                                 | `4`        | Additional offset along the alignment axis (px).  |
| `className`   | `string`                                 | -          | Additional CSS classes for the content container. |

See [Base UI](https://base-ui.com/react/components/preview-card#api-reference) documentation for more information.

## Accessibility

- **Keyboard support:** The trigger element can receive focus, allowing keyboard users to access the hover card.
- **Focus behavior:** When the trigger is focused, the hover card can open just like on hover.
- **Screen reader support:** Use clear text or labels on the trigger so screen readers can describe what the hover card represents.
- **Positioning and timing:** You can control open and close delays to make the interaction more usable and predictable.
- **Controlled state:** You can control the open state manually to manage visibility in more complex or accessibility-focused use cases.

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
