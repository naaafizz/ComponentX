---
name: "Skeleton"
library: "ComponentX"
id: "skeleton"
type: "loader"
quality: "lightweight"
tags: ["animation", "button", "card", "chart", "data", "feedback", "image", "layout", "loading", "table"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Skeleton

> **Type:** `loader` · **Quality:** `lightweight` · **ID:** `skeleton`
> **Path:** `components/loader/skeleton.md`

**Skeleton** is a premium, production-ready component from the **ComponentX** library — engineered for loader interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Lightweight tier** — a minimal footprint, a small dependency surface, and a clean implementation that drops into any project with zero friction.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `animation`, `button`, `card` workflows.
- **Pattern coverage** — includes `chart`, `data`, `feedback` workflows.
- **Pattern coverage** — includes `image`, `layout`, `loading` workflows.
- **Pattern coverage** — includes `table` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Skeleton** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
title: React Skeleton Components
description: A React skeleton component used as a loading placeholder while content is being fetched. Displays skeleton screens as an alternative to spinners.
---

import SkeletonAvatarPreview from "@/components/preview/skeleton/skeleton-avatar-preview";
import SkeletonBlogPreview from "@/components/preview/skeleton/skeleton-blog-preview";
import SkeletonButtonPreview from "@/components/preview/skeleton/skeleton-button-preview";
import SkeletonCardPreview from "@/components/preview/skeleton/skeleton-card-preview";
import SkeletonChartPreview from "@/components/preview/skeleton/skeleton-chart-preview";
import SkeletonListPreview from "@/components/preview/skeleton/skeleton-list-preview";
import SkeletonPreview from "@/components/preview/skeleton/skeleton-preview";
import SkeletonShapesPreview from "@/components/preview/skeleton/skeleton-shapes-preview";
import SkeletonTablePreview from "@/components/preview/skeleton/skeleton-table-preview";
import { getFileContent } from "@/utils/get-file-content";
import { Accordion, Accordions } from "componentx-ui/components/accordion";

# Skeleton

React Skeleton components are used to show placeholder layouts while content is loading. They help users understand the structure of the page before data is available and reduce perceived loading time.

This Skeleton component is built with React and styled using Tailwind CSS. It provides flexible shapes and sizes that can be combined to match real UI layouts such as text, cards, avatars, buttons, and tables.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/skeleton/skeleton-preview.tsx"
  )}
>
  <SkeletonPreview />
</ComponentPreview>

## Usage

The Skeleton component provides a base animation. You can customize its dimensions by adjusting the height and width using `className` prop to match your layout requirements.

```tsx
import { Skeleton } from "@/components/componentx/core/skeleton";

export default function SkeletonUsage() {
  return <Skeleton className="h-4 w-48" />;
}
```

## Examples

### Text Lines

Use text line skeletons to simulate paragraphs or blocks of text.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/skeleton/skeleton-preview.tsx"
  )}
>
  <SkeletonPreview />
</ComponentPreview>

### Card Skeleton

A complete card layout simulation with image, title, and description placeholders.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/skeleton/skeleton-card-preview.tsx"
  )}
>
  <SkeletonCardPreview />
</ComponentPreview>

### Avatar Skeleton

Loading state for user profiles with avatar and text lines.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/skeleton/skeleton-avatar-preview.tsx"
  )}
>
  <SkeletonAvatarPreview />
</ComponentPreview>

### Different Shapes

Various geometric shapes available for different UI elements.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/skeleton/skeleton-shapes-preview.tsx"
  )}
>
  <SkeletonShapesPreview />
</ComponentPreview>

### Button Skeleton

A placeholder for button elements.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/skeleton/skeleton-button-preview.tsx"
  )}
>
  <SkeletonButtonPreview />
</ComponentPreview>

### Table Skeleton

Simulate tabulated data loading rows.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/skeleton/skeleton-table-preview.tsx"
  )}
>
  <SkeletonTablePreview />
</ComponentPreview>

### Blog Post Card

A common layout for blog posts or articles with images.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/skeleton/skeleton-blog-preview.tsx"
  )}
>
  <SkeletonBlogPreview />
</ComponentPreview>

### List Items

Simulate a list of items with icons and metadata.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/skeleton/skeleton-list-preview.tsx"
  )}
>
  <SkeletonListPreview />
</ComponentPreview>

### Chart Skeleton

A dashboard-style skeleton for charts and data visualization.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/skeleton/skeleton-chart-preview.tsx"
  )}
>
  <SkeletonChartPreview />
</ComponentPreview>

## API Reference

### Skeleton

Extends `div` element props.

| Prop        | Type     | Description            |
| ----------- | -------- | ---------------------- |
| `className` | `string` | Additional CSS classes |

## Accessibility

- Uses `div` element as a non-semantic placeholder
- Should be replaced with actual content when data loads
- Provides visual feedback during loading states
- Animation respects `prefers-reduced-motion` user preference

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
