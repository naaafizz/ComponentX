---
name: "Pagination"
library: "ComponentX"
id: "pagination"
type: "navigation"
quality: "standard"
tags: ["button", "layout", "navigation", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Pagination

> **Type:** `navigation` · **Quality:** `standard` · **ID:** `pagination`
> **Path:** `components/navigation/pagination.md`

**Pagination** is a premium, production-ready component from the **ComponentX** library — engineered for navigation interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `button`, `layout`, `navigation` workflows.
- **Pattern coverage** — includes `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Pagination** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
title: React Pagination Components
description: A React pagination component for navigating between pages of content. Displays page numbers with previous and next controls to move through results.
---

import { ComponentPreview } from "@/components/component-preview";
import PaginationCompactPreviewSource from "@/components/preview/pagination/pagination-compact-preview-source";
import PaginationDefaultPreviewSource from "@/components/preview/pagination/pagination-default-preview-source";
import PaginationFullSidePreviewSource from "@/components/preview/pagination/pagination-full-side-preview-source";
import PaginationIconSidePreviewSource from "@/components/preview/pagination/pagination-icon-side-preview-source";
import PaginationLabelSidePreviewSource from "@/components/preview/pagination/pagination-label-side-preview-source";
import PaginationMobilePreview from "@/components/preview/pagination/pagination-mobile-preview";
import { getFileContent } from "@/utils/get-file-content";
import { Accordion, Accordions } from "componentx-ui/components/accordion";

# Pagination

React Pagination components are used to navigate through large sets of content split across multiple pages. They are commonly used in tables, search results, and content listings.

This Pagination component is built with React and styled using Tailwind CSS. It supports different layouts for page buttons, previous and next controls, and automatic ellipsis handling.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/pagination/pagination-default-preview.tsx"
  )}
  noPaddingOnPreviewForMobile
>
  <PaginationDefaultPreviewSource />
</ComponentPreview>

## Usage

Import the component and control the active page using state.

```tsx
import { Pagination } from "@/components/componentx/core/pagination";

const PaginationExample = () => (
  <Pagination
    currentPage={2}
    totalPages={10}
    onPageChange={p => console.log(p)}
  />
);

export default PaginationExample;
```

## Examples

### Compact Variant

Use the `compact` variant for a minimal style, often suited for smaller sections or footers.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/pagination/pagination-compact-preview.tsx"
  )}
  noPaddingOnPreviewForMobile
>
  <PaginationCompactPreviewSource />
</ComponentPreview>

### Full Side Layout

This is the `default` layout, showing both the icon and the text label ("Previous"/"Next") for side buttons.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/pagination/pagination-full-side-preview.tsx"
  )}
  noPaddingOnPreviewForMobile
>
  <PaginationFullSidePreviewSource />
</ComponentPreview>

### Label-Only Side Layout

Shows only the text label ("Previous"/"Next") on desktop, but hides it on mobile to save space.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/pagination/pagination-label-side-preview.tsx"
  )}
  noPaddingOnPreviewForMobile
>
  <PaginationLabelSidePreviewSource />
</ComponentPreview>

### Icon-Only Side Layout

Uses icons only for previous and next buttons.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/pagination/pagination-icon-side-preview.tsx"
  )}
  noPaddingOnPreviewForMobile
>
  <PaginationIconSidePreviewSource />
</ComponentPreview>

### Mobile Preview

The pagination component is fully responsive, seamlessly adapting its layout and controls to ensure a consistent experience across various devices and screen sizes.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/pagination/pagination-default-preview.tsx"
  )}
>
  <PaginationMobilePreview />
</ComponentPreview>

## API Reference

### Pagination

| Prop           | Type                          | Default     | Description                                                   |
| :------------- | :---------------------------- | :---------- | :------------------------------------------------------------ |
| `currentPage`  | `number`                      | -           | The currently active page number (1-based index).             |
| `totalPages`   | `number`                      | -           | The total number of available pages.                          |
| `onPageChange` | `(page: number) => void`      | -           | Callback function triggered when a page button is clicked.    |
| `variant`      | `'default' \| 'compact'`      | `'default'` | Overall pagination style.                                     |
| `sideLayout`   | `'full' \| 'label' \| 'icon'` | `'full'`    | Controls the appearance of the "Previous" and "Next" buttons. |

## Accessibility

- Uses semantic `<nav>` with `role="navigation"` and `aria-label="Pagination"`.
- All interactive page buttons and side buttons have descriptive `aria-label` attributes.
- The currently active page is indicated using `aria-current="page"`.
- Disabled states on side buttons clearly communicate when no previous or next page is available.

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
