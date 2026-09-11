---
name: "Social Button"
library: "ComponentX"
id: "social-button"
type: "button"
quality: "lightweight"
tags: ["button", "card", "navigation", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Social Button

> **Type:** `button` · **Quality:** `lightweight` · **ID:** `social-button`
> **Path:** `components/button/social-button.md`

**Social Button** is a premium, production-ready component from the **ComponentX** library — engineered for button interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Lightweight tier** — a minimal footprint, a small dependency surface, and a clean implementation that drops into any project with zero friction.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `button`, `card`, `navigation` workflows.
- **Pattern coverage** — includes `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Social Button** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
title: React Social Login Buttons
description: Pre-styled React social login buttons for authentication and sharing flows. Visual buttons only, commonly used for “Continue with Google” or GitHub actions.
---

import SocialButtonCustomPreview from "@/components/preview/social-button/social-button-custom-preview";
import SocialButtonDisabledPreview from "@/components/preview/social-button/social-button-disabled-preview";
import SocialButtonIconPreview from "@/components/preview/social-button/social-button-icon-preview";
import SocialButtonPreview from "@/components/preview/social-button/social-button-preview";
import { getFileContent } from "@/utils/get-file-content";
import { Accordion, Accordions } from "componentx-ui/components/accordion";

# Social Button

React Social Button components are used to display branded action buttons for social authentication or sharing. They are commonly seen in sign-in flows such as “Continue with Google”, “Sign in with GitHub”, or similar third-party actions.

This component focuses only on **visual presentation**. It does not handle authentication logic. It is built with React and styled using Tailwind CSS to ensure consistent sizing, alignment, and icon spacing across different providers.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/social-button/social-button-preview.tsx"
  )}
>
  <SocialButtonPreview />
</ComponentPreview>

## Usage

Import the component and provide an icon and label.

```tsx
import { SocialButton } from "@/components/componentx/core/social-button";

const SocialButtonUsage = () => (
  <SocialButton>
    <GoogleIcon />
    Continue with Google
  </SocialButton>
);

export default SocialButtonUsage;
```

### With Icon

Social buttons with a card-like shadow effect.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/social-button/social-button-icon-preview.tsx"
  )}
>
  <SocialButtonIconPreview />
</ComponentPreview>

### Disabled

`disabled` prop disables the button and reduces icon opacity and prevents interaction.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/social-button/social-button-disabled-preview.tsx"
  )}
>
  <SocialButtonDisabledPreview />
</ComponentPreview>

Note: Icons maintain 60% opacity when button is disabled.

### Custom

Use custom styles or positioning to create unique social buttons for specific use cases.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/social-button/social-button-custom-preview.tsx"
  )}
>
  <SocialButtonCustomPreview />
</ComponentPreview>

## API Reference

### SocialButton

Extends `button` element props and inherits all Button component props.

| Prop        | Type              | Default | Description                    |
| ----------- | ----------------- | ------- | ------------------------------ |
| `children`  | `React.ReactNode` | -       | Button content (icon and text) |
| `className` | `string`          | -       | Additional CSS classes         |
| `disabled`  | `boolean`         | `false` | Disable button interaction     |
| `onClick`   | `() => void`      | -       | Click event handler            |

## Accessibility

- Built on top of the [Button](./button) component with all its accessibility features
- Includes focus ring styling for keyboard navigation
- Disabled state reduces icon opacity and prevents interaction
- Icons inherit text color for consistent styling
- Supports all standard button HTML attributes

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
