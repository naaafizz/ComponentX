---
name: "Aspect Ratio"
library: "ComponentX"
id: "aspect-ratio"
type: "form"
quality: "standard"
tags: ["component", "image", "layout", "loading", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Aspect Ratio

> **Type:** `form` · **Quality:** `standard` · **ID:** `aspect-ratio`
> **Path:** `components/form/aspect-ratio.md`

**Aspect Ratio** is a premium, production-ready component from the **ComponentX** library — engineered for form interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `image`, `layout`, `loading` workflows.
- **Pattern coverage** — includes `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Aspect Ratio** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
title: React Aspect Ratio Components
description: A React aspect ratio component built with Tailwind CSS. Keep images, videos, and embeds in a fixed ratio with responsive scaling and no layout shift.
---

import AspectRatioCustomPreview from "@/components/preview/aspect-ratio/aspect-ratio-custom-preview";
import AspectRatioImagePreview from "@/components/preview/aspect-ratio/aspect-ratio-image-preview";
import AspectRatioPreview from "@/components/preview/aspect-ratio/aspect-ratio-preview";
import AspectRatioVariantsPreview from "@/components/preview/aspect-ratio/aspect-ratio-variants-preview";
import { getFileContent } from "@/utils/get-file-content";
import { Accordion, Accordions } from "componentx-ui/components/accordion";

# Aspect Ratio

The React Aspect Ratio component keeps an element’s width and height in a fixed ratio. It is useful for images, videos, and embeds that need to keep the same shape across different screen sizes.

It adjusts the height based on the container width. So, the content scales correctly, and the layout does not shift during loading or resizing.

Built with React and styled using Tailwind CSS. It supports predefined aspect ratios and custom values for flexible layouts.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/aspect-ratio/aspect-ratio-preview.tsx"
  )}
>
  <AspectRatioPreview />
</ComponentPreview>

## Anatomy

Import the component and pass the desired aspect ratio variant or custom ratio.

```tsx
import { AspectRatio } from "@/components/componentx/core/aspect-ratio";

export const AspectRatioExample = () => (
  <AspectRatio ratio="video" className="rounded-lg overflow-hidden">
    <img
      src="path/to/image.jpg"
      alt="Description"
      className="size-full object-cover"
    />
  </AspectRatio>
);
```

## Examples

### Variants

The AspectRatio component supports eight predefined Tailwind CSS aspect ratio variants: `square` (1:1), `video` (16:9), `4/3`, `3/4`, `21/9`, `9/16`, `3/2`, and `2/3`.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/aspect-ratio/aspect-ratio-variants-preview.tsx"
  )}
>
  <AspectRatioVariantsPreview />
</ComponentPreview>

### Custom Ratio

You can specify a custom aspect ratio using the `customRatio` prop, which accepts any numeric value (e.g., `2.35` for cinematic widescreen).

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/aspect-ratio/aspect-ratio-custom-preview.tsx"
  )}
>
  <AspectRatioCustomPreview />
</ComponentPreview>

**Note:** The `customRatio` prop takes precedence over the `ratio` variant when both are provided.

### Images

The AspectRatio component works seamlessly with responsive images. Use `object-cover` or `object-contain` classes to control how images fill the container.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/aspect-ratio/aspect-ratio-image-preview.tsx"
  )}
>
  <AspectRatioImagePreview />
</ComponentPreview>

## API Reference

### AspectRatio

| Prop          | Type                                                                          | Default   | Description                                                                     |
| :------------ | :---------------------------------------------------------------------------- | :-------- | :------------------------------------------------------------------------------ |
| `ratio`       | `'square' \| 'video' \| '4/3' \| '3/4' \| '21/9' \| '9/16' \| '3/2' \| '2/3'` | `'video'` | Predefined aspect ratio variant based on Tailwind CSS classes                   |
| `customRatio` | `number`                                                                      | -         | Custom aspect ratio value (e.g., `16/9 \| 2.35`). Takes precedence over `ratio` |
| `className`   | `string`                                                                      | -         | Additional CSS classes to apply to the container                                |
| `children`    | `React.ReactNode`                                                             | -         | Content to display within the aspect ratio container **Required**               |

## Accessibility

- **Semantic structure:** The component uses a standard `<div>`. Add semantic elements inside it when needed, such as `<img>`, `<video>`, or `<iframe>`.
- **Alt text for images:** Always provide a clear `alt` attribute when using images so screen readers can understand the content.
- **Focus handling:** The component forwards refs, so you can manage focus if the content inside is interactive.
- **Responsive behavior:** The aspect ratio stays consistent across screen sizes, so content does not shift or break layout.

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
