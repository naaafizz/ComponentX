---
name: "Navigation Menu"
library: "ComponentX"
id: "navigation-menu"
type: "navigation"
quality: "standard"
tags: ["button", "menu", "navigation", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Navigation Menu

> **Type:** `navigation` · **Quality:** `standard` · **ID:** `navigation-menu`
> **Path:** `components/navigation/navigation-menu.md`

**Navigation Menu** is a premium, production-ready component from the **ComponentX** library — engineered for navigation interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `button`, `menu`, `navigation` workflows.
- **Pattern coverage** — includes `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Navigation Menu** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
title: React Navigation Menu Components
description: A React navigation menu component built with Tailwind CSS. Create top navigation with dropdown menus, grouped links, and keyboard support for accessible website navigation.
---

import NavigationMenuPositionerPreview from "@/components/preview/navigation-menu/navigation-menu-positioner-preview";
import NavigationMenuPreview from "@/components/preview/navigation-menu/navigation-menu-preview";
import NavigationMenuSimplePreview from "@/components/preview/navigation-menu/navigation-menu-simple-preview";
import { getFileContent } from "@/utils/get-file-content";
import { Accordion, Accordions } from "componentx-ui/components/accordion";

# Navigation Menu

The React Navigation Menu component displays a website or application's main links in a structured menu. It is usually placed at the top and can include dropdown menus with related links.

It helps users move between pages easily by grouping links into clear sections. For example, a navigation menu can include items like Products, Pricing, or Docs, with dropdown links under each.

Built with Base UI and styled using Tailwind CSS. It supports keyboard navigation and accessibility, and it works well across different screen sizes.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/navigation-menu/navigation-menu-preview.tsx"
  )}
>
  <NavigationMenuPreview />
</ComponentPreview>

## Anatomy

Import the component parts and combine them to create a structured navigation menu.

```tsx
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuIndicator,
  NavigationMenuPositioner
} from "@/components/componentx/core/navigation-menu";

export const NavigationMenuExample = () => (
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink href="/link1">Link One</NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink href="/link2">Direct Link Two</NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuIndicator />
    </NavigationMenuList>
    <NavigationMenuPositioner />
  </NavigationMenu>
);
```

## Usage

Import the navigation menu components and compose them to build your menu structure. You can use `NavigationMenuContent` for dropdowns or `NavigationMenuLink` for direct links.

```tsx
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuPositioner
} from "@/components/componentx/core/navigation-menu";

export default function NavigationMenuExample() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="/analytics">Analytics</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/pricing">Pricing</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuPositioner />
    </NavigationMenu>
  );
}
```

## Examples

### Simple Navigation Menu

A clean, text-based navigation menu with simple dropdown lists.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/navigation-menu/navigation-menu-simple-preview.tsx"
  )}
>
  <NavigationMenuSimplePreview />
</ComponentPreview>

### Positioning

Use the `NavigationMenuPositioner` component to position the viewport according to your need.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/navigation-menu/navigation-menu-positioner-preview.tsx"
  )}
>
  <NavigationMenuPositionerPreview />
</ComponentPreview>

## API Reference

### NavigationMenu

The root component that manages the state of the navigation menu.

| Prop            | Type                         | Default        | Description                                                                     |
| :-------------- | :--------------------------- | :------------- | :------------------------------------------------------------------------------ |
| `defaultValue`  | `any`                        | `null`         | The uncontrolled value of the item that should be initially selected.           |
| `value`         | `any`                        | `null`         | The controlled value of the navigation menu item that should be currently open. |
| `onValueChange` | `(value: any) => void`       | -              | Callback fired when the value changes.                                          |
| `delay`         | `number`                     | `50`           | How long to wait before opening the navigation menu (ms).                       |
| `closeDelay`    | `number`                     | `50`           | How long to wait before closing the navigation menu (ms).                       |
| `orientation`   | `"horizontal" \| "vertical"` | `"horizontal"` | The orientation of the navigation menu.                                         |
| `className`     | `string`                     | -              | Additional CSS classes.                                                         |

### NavigationMenuList

The container for the top-level menu items.

| Prop        | Type              | Default | Description                    |
| :---------- | :---------------- | :------ | :----------------------------- |
| `children`  | `React.ReactNode` | -       | `NavigationMenuItem` elements. |
| `className` | `string`          | -       | Additional CSS classes.        |

### NavigationMenuItem

A single item in the navigation menu.

| Prop        | Type     | Default | Description                                               |
| :---------- | :------- | :------ | :-------------------------------------------------------- |
| `value`     | `any`    | -       | A unique value that identifies this navigation menu item. |
| `className` | `string` | -       | Additional CSS classes.                                   |

### NavigationMenuTrigger

The button that opens the associated `NavigationMenuContent`.

| Prop           | Type      | Default | Description                                                |
| :------------- | :-------- | :------ | :--------------------------------------------------------- |
| `nativeButton` | `boolean` | `true`  | Whether the component renders a native `<button>` element. |
| `className`    | `string`  | -       | Additional CSS classes.                                    |

### NavigationMenuLink

An interactive link within the menu.

| Prop           | Type      | Default | Description                                                    |
| :------------- | :-------- | :------ | :------------------------------------------------------------- |
| `href`         | `string`  | -       | The URL to link to.                                            |
| `active`       | `boolean` | `false` | Whether the link is the currently active page.                 |
| `closeOnClick` | `boolean` | `false` | Whether to close the navigation menu when the link is clicked. |
| `className`    | `string`  | -       | Additional CSS classes.                                        |

### NavigationMenuContent

The dropdown panel containing sub-links.

| Prop          | Type      | Default | Description                                                               |
| :------------ | :-------- | :------ | :------------------------------------------------------------------------ |
| `keepMounted` | `boolean` | `false` | Whether to keep the content mounted in the DOM while the popup is closed. |
| `className`   | `string`  | -       | Additional CSS classes.                                                   |

### NavigationMenuPositioner

Positions the navigation menu against the currently active trigger.

| Prop                    | Type                                                                    | Default                | Description                                                                                      |
| :---------------------- | :---------------------------------------------------------------------- | :--------------------- | :----------------------------------------------------------------------------------------------- |
| `side`                  | `"top" \| "bottom" \| "left" \| "right"`                                | `"bottom"`             | Which side of the anchor element to align the popup against.                                     |
| `sideOffset`            | `number \| function`                                                    | `8`                    | Distance between the anchor and the popup in pixels.                                             |
| `align`                 | `"start" \| "center" \| "end"`                                          | `"start"`              | How to align the popup relative to the specified side.                                           |
| `alignOffset`           | `number \| function`                                                    | `0`                    | Additional offset along the alignment axis in pixels.                                            |
| `disableAnchorTracking` | `boolean`                                                               | `false`                | Whether to disable tracking the layout shift of the anchor.                                      |
| `arrowPadding`          | `number`                                                                | `5`                    | Minimum distance between the arrow and the edge of the popup.                                    |
| `anchor`                | `Element \| VirtualElement \| React.RefObject<Element \| null> \| null` | -                      | Explicit anchor element to position against. Positions to trigger if not provided.               |
| `collisionAvoidance`    | `CollisionAvoidance Object`                                             | -                      | Determines how to handle collisions.                                                             |
| `collisionBoundary`     | `'clipping-ancestors' \| Element \| Element[] \| Rect`                  | `'clipping-ancestors'` | Area that the popup is confined to.                                                              |
| `collisionPadding`      | `Padding Object \| number`                                              | `5`                    | Additional space to maintain from the edge of the collision boundary.                            |
| `sticky`                | `boolean`                                                               | `false`                | Whether to maintain the popup in the viewport after the anchor element was scrolled out of view. |
| `positionMethod`        | `'absolute' \| 'fixed'`                                                 | `'absolute'`           | CSS positioning method to use.                                                                   |
| `render`                | `ReactElement \| function`                                              | -                      | Replaces the rendered component with a custom element.                                           |
| `className`             | `string \| function`                                                    | -                      | Additional CSS classes.                                                                          |

### NavigationMenuIndicator

An icon that indicates that the trigger button opens a menu.

| Prop        | Type     | Default | Description             |
| :---------- | :------- | :------ | :---------------------- |
| `className` | `string` | -       | Additional CSS classes. |

## Accessibility

- **Semantic structure:** Uses roles like `menubar`, `menu`, and `menuitem` so assistive technologies can understand the navigation structure.
- **Keyboard support:** Users can move between items using `Arrow` keys and activate them using `Enter` or `Space`.
- **Focus management:** Focus moves between triggers and dropdown content, making the menu usable without a mouse.
- **Screen reader support:** Expanded states and active items are announced through built-in accessibility behavior.
- **Base UI integration:** Accessibility roles and behaviors are handled by the underlying Base UI components.

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
