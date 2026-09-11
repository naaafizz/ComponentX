---
name: "List"
library: "ComponentX"
id: "list"
type: "navigation"
quality: "standard"
tags: ["background", "card", "component", "data", "feedback", "layout", "navigation", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · List

> **Type:** `navigation` · **Quality:** `standard` · **ID:** `list`
> **Path:** `components/navigation/list.md`

**List** is a premium, production-ready component from the **ComponentX** library — engineered for navigation interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `background`, `card`, `data` workflows.
- **Pattern coverage** — includes `feedback`, `layout`, `navigation` workflows.
- **Pattern coverage** — includes `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **List** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
title: React List Components
description: A React list component for displaying a collection of items. Used to render vertical or horizontal lists with optional dividers and active states.
---

import CodeBlockCard from "@/components/code-block-card";
import { ComponentPreview } from "@/components/component-preview";
import ListCustomPreview from "@/components/preview/list/list-custom-preview";
import ListHorizontalPreview from "@/components/preview/list/list-horizontal-preview";
import ListOrderedUnorderedPreview from "@/components/preview/list/list-ordered-unordered-preview";
import ListPreview from "@/components/preview/list/list-preview";
import ListUsersPreview from "@/components/preview/list/list-users-preview";
import ListVerticalPreview from "@/components/preview/list/list-vertical-preview";
import ListWithActiveStatePreview from "@/components/preview/list/list-with-active-state-preview";
import ListWithIconsPreview from "@/components/preview/list/list-with-icons-preview";
import ListWithInputsPreview from "@/components/preview/list/list-with-inputs-preview";
import ListWithoutDividersPreview from "@/components/preview/list/list-without-dividers-preview";
import { getFileContent } from "@/utils/get-file-content";
import { Accordion, Accordions } from "componentx-ui/components/accordion";

# List

React List components are used to display a collection of related items. They are commonly used for navigation menus, settings panels, item groups, and structured content lists.

This List component is built with React and styled using Tailwind CSS. It supports vertical and horizontal layouts, dividers, and active item states.

<ComponentPreview
  codeSnippet={getFileContent("/src/components/preview/list/list-preview.tsx")}
>
  <ListPreview />
</ComponentPreview>

## Usage

Import the component and render list items as children.

```tsx
import { List } from "@/components/componentx/core/list";

export default function Example() {
  return (
    <List>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </List>
  );
}
```

## Examples

### Vertical List

Use the vertical layout for stacked navigation or menus.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/list/list-vertical-preview.tsx"
  )}
>
  <ListVerticalPreview />
</ComponentPreview>

Note: Vertical lists have a max width of 228px (14.25rem).

### Horizontal List

Use the horizontal layout for inline navigation or filters.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/list/list-horizontal-preview.tsx"
  )}
>
  <ListHorizontalPreview />
</ComponentPreview>

Note: Horizontal lists have a max width of `fit-content`.

### Without Dividers

You can remove dividers when visual separation is not needed. Dividers can be hidden with the `hideDividers` prop.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/list/list-without-dividers-preview.tsx"
  )}
>
  <ListWithoutDividersPreview />
</ComponentPreview>

### With Active State

Mark an item as active to indicate the current selection.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/list/list-with-active-state-preview.tsx"
  )}
>
  <ListWithActiveStatePreview />
</ComponentPreview>

Note: Active items are styled with primary background and text color. Active state is communicated via `data-active` attribute.

### With Icons

Add icons to list items for visual interest and better clarity.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/list/list-with-icons-preview.tsx"
  )}
>
  <ListWithIconsPreview />
</ComponentPreview>

### With Badges

Use badges with icons to add more context and information to your list items.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/list/list-custom-preview.tsx"
  )}
>
  <ListCustomPreview />
</ComponentPreview>

Note: Counts with `data-type="count"` are automatically positioned with `ml-auto`. Icons automatically inherit the current text color.

### Ordered and Unordered Lists

Create traditional ordered (numbered) and unordered (bullet) lists.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/list/list-ordered-unordered-preview.tsx"
  )}
>
  <ListOrderedUnorderedPreview />
</ComponentPreview>

### With Inputs

Integrate checkboxes or radio buttons for selectable list items.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/list/list-with-inputs-preview.tsx"
  )}
>
  <ListWithInputsPreview />
</ComponentPreview>

### User List

Display user information with avatars, names, emails, and status indicators.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/list/list-users-preview.tsx"
  )}
>
  <ListUsersPreview />
</ComponentPreview>

## API Reference

### List

Extends `ul` element props.

| Prop           | Type                         | Default      | Description                  |
| -------------- | ---------------------------- | ------------ | ---------------------------- |
| `direction`    | `'vertical' \| 'horizontal'` | `'vertical'` | List layout direction        |
| `hideDividers` | `boolean`                    | `false`      | Hide dividers between items  |
| `children`     | `React.ReactNode`            | -            | List items (`<li>` elements) |

### List Item

Use standard `<li>` elements as children with optional data attributes:

| Attribute           | Type      | Description                                                     |
| ------------------- | --------- | --------------------------------------------------------------- |
| `data-active`       | `boolean` | Marks item as active (applies primary styling)                  |
| `data-type="count"` | -         | Applied to `<span>` for count badges (auto-positioned to right) |

## Accessibility

- Uses semantic `<ul>` and `<li>` elements
- Active state is communicated via `data-active` attribute
- Hover states provide clear visual feedback and apply to all list items by default
- Keyboard accessible when used with interactive elements
- Icons inherit text color for consistent styling

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
