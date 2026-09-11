---
name: "Progress"
library: "ComponentX"
id: "progress-2"
type: "data-display"
quality: "advanced"
tags: ["background", "data", "feedback", "form", "loading"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Progress

> **Type:** `data-display` · **Quality:** `advanced` · **ID:** `progress-2`
> **Path:** `components/data-display/progress-2.md`

**Progress** is a premium, production-ready component from the **ComponentX** library — engineered for data display interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Advanced tier** — richer composition and interaction, engineered for complex layouts while keeping the public surface tight.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `background`, `data`, `feedback` workflows.
- **Pattern coverage** — includes `form`, `loading` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Progress** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
title: React Progress Bar Components
description: A React progress bar component that shows the progress or completion of a task. Displays a linear progress indicator with optional percentage label.
---

import ProgressBasicPreview from "@/components/preview/progress/progress-basic-preview";
import ProgressCustomPreview from "@/components/preview/progress/progress-custom-preview";
import ProgressPreview from "@/components/preview/progress/progress-preview";
import ProgressWithLabelPreview from "@/components/preview/progress/progress-with-label-preview";
import { getFileContent } from "@/utils/get-file-content";
import { Accordion, Accordions } from "componentx-ui/components/accordion";

# Progress

React Progress components are used to show the completion state of a task or process. They are commonly used for file uploads, form steps, loading states, and long-running actions where users need visual feedback.

This Progress component is built with React and styled using Tailwind CSS. It displays a linear progress bar with an optional percentage label and supports custom styling through props.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/progress/progress-preview.tsx"
  )}
>
  <ProgressPreview />
</ComponentPreview>

## Usage

Import the component and pass the progress value.

```tsx
import { Progress } from "@/components/componentx/core/progress";

export default function ProgressBasic() {
  return <Progress progress={50} withLabel />;
}
```

## Examples

### Basic Progress

Use the progress bar without a label.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/progress/progress-basic-preview.tsx"
  )}
>
  <ProgressBasicPreview />
</ComponentPreview>

### Progress with Label

Display the percentage value next to the bar.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/progress/progress-with-label-preview.tsx"
  )}
>
  <ProgressWithLabelPreview />
</ComponentPreview>

### Custom Progress

Customize the appearance of the progress bar using class names.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/progress/progress-custom-preview.tsx"
  )}
>
  <ProgressCustomPreview />
</ComponentPreview>

## API Reference

### Progress

Extends `div` element props.

| Prop         | Type      | Default | Description                           |
| ------------ | --------- | ------- | ------------------------------------- |
| `progress`   | `number`  | -       | Completion percentage (0–100)         |
| `withLabel`  | `boolean` | `false` | Show percentage label next to the bar |
| `className`  | `string`  | -       | Custom classes for container styling  |
| `trackColor` | `string`  | -       | Custom background color for the track |
| `barColor`   | `string`  | -       | Custom color for the progress bar     |

## Accessibility

- Uses `role="progressbar`" for screen readers
- Sets `aria-valuemin`, `aria-valuemax`, and `aria-valuenow`
- `aria-valuetext` reflects the current progress value
- Fully keyboard and screen-reader accessible.

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
