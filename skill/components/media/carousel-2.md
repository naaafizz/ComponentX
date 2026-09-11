---
name: "Carousel"
library: "ComponentX"
id: "carousel-2"
type: "media"
quality: "advanced"
tags: ["button", "card", "feedback", "image", "media", "navigation", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Carousel

> **Type:** `media` · **Quality:** `advanced` · **ID:** `carousel-2`
> **Path:** `components/media/carousel-2.md`

**Carousel** is a premium, production-ready component from the **ComponentX** library — engineered for media interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Advanced tier** — richer composition and interaction, engineered for complex layouts while keeping the public surface tight.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `button`, `card`, `feedback` workflows.
- **Pattern coverage** — includes `image`, `media`, `navigation` workflows.
- **Pattern coverage** — includes `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Carousel** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
title: React Carousel Components
description: A React carousel component built with Tailwind CSS. Create image sliders, card carousels, and testimonial sliders with smooth scrolling, navigation controls, and responsive layouts.
---

import CarouselApiPreview from "@/components/preview/carousel/carousel-api-preview";
import CarouselPluginPreview from "@/components/preview/carousel/carousel-plugin-preview";
import CarouselPreview from "@/components/preview/carousel/carousel-preview";
import CarouselTestimonialsPreview from "@/components/preview/carousel/carousel-testimonials-preview";
import CarouselVerticalPreview from "@/components/preview/carousel/carousel-vertical-preview";
import { getFileContent } from "@/utils/get-file-content";
import { Accordion, Accordions } from "componentx-ui/components/accordion";

# Carousel

The React Carousel component lets users scroll through a list of items, such as images, cards, or testimonials. It shows one or more items at a time and allows users to move between them.

It helps save space while still displaying multiple pieces of content. For example, you can use a carousel for product images, customer reviews, or featured content.

Built on top of Embla Carousel and styled with Tailwind CSS. It supports smooth scrolling and keyboard navigation, and it works well across different screen sizes.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/carousel/carousel-preview.tsx"
  )}
>
  <CarouselPreview />
</ComponentPreview>

## Anatomy

Import the components and wrap your items.

```tsx
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/carousel";

export const CarouselExample = () => (
  <Carousel>
    <CarouselContent>
      <CarouselItem>...</CarouselItem>
      <CarouselItem>...</CarouselItem>
      <CarouselItem>...</CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
);
```

## Examples

### Default Carousel

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/carousel/carousel-preview.tsx"
  )}
>
  <CarouselPreview />
</ComponentPreview>

### Testimonials

A single-item carousel for customer reviews and feedback.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/carousel/carousel-testimonials-preview.tsx"
  )}
>
  <CarouselTestimonialsPreview />
</ComponentPreview>

### Vertical Orientation

Set the `orientation="vertical"` prop to create a vertical scrolling carousel.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/carousel/carousel-vertical-preview.tsx"
  )}
>
  <CarouselVerticalPreview />
</ComponentPreview>

### API Control & Events

Use the `setApi` prop to get access to the Embla Carousel instance for custom controls or events.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/carousel/carousel-api-preview.tsx"
  )}
>
  <CarouselApiPreview />
</ComponentPreview>

### Plugin & Options

Use the `opts` prop to pass configuration [options](https://www.embla-carousel.com/docs/v8/api/options) to the carousel and `plugins` prop to add [plugins](https://www.embla-carousel.com/docs/v8/plugins).

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/carousel/carousel-plugin-preview.tsx"
  )}
>
  <CarouselPluginPreview />
</ComponentPreview>

## API Reference

### Carousel

The root component that provides context and manages the Embla instance.

| Prop          | Type                         | Default        | Description                                    |
| ------------- | ---------------------------- | -------------- | ---------------------------------------------- |
| `opts`        | `CarouselOptions`            | -              | Options for the Embla Carousel instance.       |
| `plugins`     | `CarouselPlugin[]`           | -              | Plugins for the Embla Carousel instance.       |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | The orientation of the carousel.               |
| `setApi`      | `(api: CarouselApi) => void` | -              | Callback to receive the Embla Carousel API.    |
| `className`   | `string`                     | -              | Additional CSS classes for the root container. |

### CarouselContent

The wrapper for the carousel items.

| Prop        | Type              | Description                                    |
| ----------- | ----------------- | ---------------------------------------------- |
| `className` | `string`          | Additional CSS classes for the slides wrapper. |
| `children`  | `React.ReactNode` | The `CarouselItem` components.                 |

### CarouselItem

A single slide within the carousel.

| Prop        | Type              | Description                           |
| ----------- | ----------------- | ------------------------------------- |
| `className` | `string`          | Additional CSS classes for the slide. |
| `children`  | `React.ReactNode` | The content of the slide.             |

### CarouselPrevious / CarouselNext

Navigation buttons for the carousel. They accept all props of the `Button` component.

| Prop         | Type                                            | Default     | Description                            |
| ------------ | ----------------------------------------------- | ----------- | -------------------------------------- |
| `variant`    | `'primary' \| 'danger' \| 'success' \| 'ghost'` | `'ghost'`   | The visual variant of the button.      |
| `appearance` | `'outline' \| 'fill'`                           | `'outline'` | The visual appearance of the button.   |
| `size`       | `'xs' \| 'sm' \| 'md' \| 'lg'`                  | `'sm'`      | The size of the navigation button.     |
| `className`  | `string`                                        | -           | Additional CSS classes for the button. |

See the [Embla Cacrousel Guides](https://www.embla-carousel.com/docs/v8/guides) for more information.

## Accessibility

- **Keyboard support:** Users can navigate between slides using `Arrow` keys.
- **Screen reader support:** Navigation buttons include hidden text like “Previous slide” and “Next slide” so screen readers can announce them clearly.
- **ARIA roles:** The carousel uses roles like `region` (carousel) and `group` (slide) to help screen readers understand the structure.
- **Slide structure:** Each slide is treated as a separate group so users can identify slide boundaries.
- **Navigation states:** Navigation buttons are `disabled` when there are no more slides to scroll.
- **Accessibility plugins:** You can use the Embla accessibility plugin to enhance support for screen readers and interactions.

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
