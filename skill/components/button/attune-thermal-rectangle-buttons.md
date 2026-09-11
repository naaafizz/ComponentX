---
name: "Attune Thermal — Rectangle Buttons"
library: "ComponentX"
id: "attune-thermal-rectangle-buttons"
type: "button"
quality: "lightweight"
tags: ["animated", "animation", "button", "layout", "shader", "text", "webgl"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Attune Thermal — Rectangle Buttons

> **Type:** `button` · **Quality:** `lightweight` · **ID:** `attune-thermal-rectangle-buttons`
> **Path:** `components/button/attune-thermal-rectangle-buttons.md`

**Attune Thermal — Rectangle Buttons** is a premium, production-ready component from the **ComponentX** library — engineered for button interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Lightweight tier** — a minimal footprint, a small dependency surface, and a clean implementation that drops into any project with zero friction.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `animated`, `animation`, `button` workflows.
- **Pattern coverage** — includes `layout`, `shader`, `text` workflows.
- **Pattern coverage** — includes `webgl` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Attune Thermal — Rectangle Buttons** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
name: add-rectangle-buttons
description: "Build Rectangle Buttons from its verified authored source using DOM + CSS, including the complete renderer, interactions, and required assets. Use when Codex needs to implement, port, or adapt this effect without requiring the ComponentX package or reconstructing the visual from an approximation."
---

# Build Rectangle Buttons

## Description

Twenty-four authored rectangle-button and animated CTA treatments collected into one family.

Recreate the authored behavior from the verified source, not from screenshots or the abbreviated orchestration sample in this skill. The implementation may live directly in the target project and does not require `@componentx/core`.

## Technologies

- React variant host
- One Section DOM/CSS source
- Ten isolated DOM/CSS CTA sources
- Two Lumen DOM/CSS treatments
- Eleven selected page-button treatments
- Light and dark palette controls
- Lazy-loaded variant renderers

## Verified source material

- `src/shaders/rectangle-buttons/RectangleButtons.tsx`
- `remote-control.html — shared button treatment`
- `src/shaders/section-elements/SectionElements.tsx`
- `src/shaders/section-elements/section-elements.css`
- `src/shaders/neuform-isolated/NeuformIsolatedEffects.tsx`
- `src/shaders/neuform-isolated/sources/launch-button.html`
- `src/shaders/neuform-isolated/sources/dot-border-button.html`
- `src/shaders/neuform-isolated/sources/floating-dots-cta.html`
- `src/shaders/neuform-isolated/sources/sliding-text-cta.html`
- `src/shaders/neuform-isolated/sources/gradient-beam-cta.html`
- `src/shaders/neuform-isolated/sources/gradient-pill-button.html`
- `src/shaders/neuform-isolated/sources/generate-button.html`
- `src/shaders/neuform-isolated/sources/glassmorphism-cta.html`
- `src/shaders/neuform-isolated/sources/spinning-border-button.html`
- `src/shaders/neuform-isolated/sources/gradient-cta.html`
- `src/shaders/lumen-cta/LumenCta.tsx`
- `src/shaders/lumen-cta/lumen-cta.css`
- `src/shaders/lumen-cta/sources/lumen.html`
- `halftone-bloom.html — Aster glass access and arrow CTA treatments`
- `public/landing-pages/cinder-k1-hero.html — Cinder K1 pre-order keycap treatment`
- `public/landing-pages/hanami.html — See the season outline CTA treatment`

Source revision: `SHA-256 ff30e28c2781`

## Implementation steps

1. Open every verified source file listed above and identify the renderer, host lifecycle, styles, and assets before editing.
2. Keep RectangleButtons as the public entry point and select any catalog treatment with the variant prop, including ember-keycap for the glowing tactile keycap or bloom-outline-button for the magnetic ink-bloom outline CTA.
3. Retain the original dark-glass rectangle, all ten complete authored CTA documents, and both Lumen treatments instead of flattening their markup or animation systems.
4. Expose mode and palette controls at the collection boundary while leaving each variant's authored hover, focus, and motion behavior intact.
5. Lazy-load and mount only the selected CTA renderer so inactive variants do not allocate isolated documents or animation loops.
6. Give the local component a sized, overflow-controlled parent and verify desktop, mobile, reduced-motion, and context-loss behavior.

Asset handling: This effect has no required external assets.

## Local component example

Import the copied local component rather than a package entrypoint:

```tsx
import { RectangleButtons } from "./effects/rectangle-buttons/RectangleButtons";
import "./effects/rectangle-buttons/styles.css";

export function Scene() {
  return <div className="effect-frame"><RectangleButtons /></div>;
}
```

## Core renderer pattern

This excerpt documents orchestration only. Copy the exact shader, geometry, pass, and interaction code from the verified source files.

```tsx
<RectangleButtons variant="bloom-outline-button" mode="dark" />
```

## Behavior contract

- Runtime: DOM + CSS
- Passes: 1 selected DOM/CSS button composition
- Interaction: Variant selection with authored hover, focus, motion, and palette behavior
- Assets: 5 local SF Pro font subsets + 1 authored remote portrait reference
- **renderer** (host): React DOM + scoped CSS
- **source** (fixed): Owner-selected reference HTML
- **theme** (fixed): Dark
- **layout** (responsive): Container-relative 16:9 composition
- **motion** (adaptive): Reduced-motion safe
- **assets** (owned): Local fonts and illustrations
- **variants** (fixed): Dark Glass + Launch + Dot Border + Floating Dots + Sliding Text + Gradient Beam + Gradient Pill + Generate + Glassmorphism + Spinning Border + Gradient + Lumen CTA + Lumen CTA Ghost + Trochil Signal + Attune Thermal + Tideform Outline + Understory Arrow Pill + Meridian Keycap Primary + Meridian Keycap Secondary + Halvorsen Arrow Pill + Aster Glass Access + Aster Glass Arrow + Ember Keycap + Bloom Outline Button

## Verification

1. Compare the rendered composition, animation timing, pointer behavior, and state transitions with the source implementation.
2. Exercise resize, high-DPI, mobile/coarse-pointer, reduced-motion, tab visibility, and WebGL context-loss paths where applicable.
3. Confirm every animation frame, observer, listener, geometry, buffer, texture, framebuffer, material, and renderer is released on teardown.
4. Check the browser console and confirm the effect renders at native-or-better backing resolution.

## Guardrails

- Do not substitute a visually similar package, demo, shader, or runtime.
- Do not approximate, reconstruct, or simplify the authored GLSL, render passes, geometry, interaction state, or assets.
- Keep exact source and asset hashes under regression tests when the source project provides them.
- Adapt only the surrounding host boundary needed by the target project; keep renderer behavior intact.

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
