---
name: "Override Grid — Predictive Arc"
library: "ComponentX"
id: "override-grid-predictive-arc"
type: "layout"
quality: "advanced"
tags: ["animated", "animation", "background", "data", "layout", "shader", "text", "webgl"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Override Grid — Predictive Arc

> **Type:** `layout` · **Quality:** `advanced` · **ID:** `override-grid-predictive-arc`
> **Path:** `components/layout/override-grid-predictive-arc.md`

**Override Grid — Predictive Arc** is a premium, production-ready component from the **ComponentX** library — engineered for layout interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Advanced tier** — richer composition and interaction, engineered for complex layouts while keeping the public surface tight.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `animated`, `animation`, `background` workflows.
- **Pattern coverage** — includes `data`, `layout`, `shader` workflows.
- **Pattern coverage** — includes `text`, `webgl` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Override Grid — Predictive Arc** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
name: add-predictive-arc
description: "Build Predictive Arc from its verified authored source using Canvas 2D + Raw WebGL + Three.js r128, including the complete renderer, interactions, and required assets. Use when Codex needs to implement, port, or adapt this effect without requiring the ComponentX package or reconstructing the visual from an approximation."
---

# Build Predictive Arc

## Description

Eight animated arc, signal, ribbon, void, and halftone scenes collected in one Canvas 2D, raw-WebGL, and Three.js family.

Recreate the authored behavior from the verified source, not from screenshots or the abbreviated orchestration sample in this skill. The implementation may live directly in the target project and does not require `@componentx/core`.

## Technologies

- React variant host
- Four Canvas 2D renderers
- Three raw-WebGL renderers
- One Three.js point-field renderer
- Dark/light mode surfaces
- Lazy-loaded variant sources
- ResizeObserver, IntersectionObserver, adaptive pixel ratio, and requestAnimationFrame

## Verified source material

- `Axiom---Predictive-Search-Engine (3).html — predictive arc source`
- `Axiom-Dynamic-Data-Orchestration.html — data pixel arc source`
- `src/shaders/predictive-arc/predictiveArcRenderer.ts`
- `src/shaders/data-pixel-arc/dataPixelArcRenderer.ts`
- `src/shaders/neuform-isolated/sources/signal-particles.html`
- `src/shaders/neuform-isolated/sources/override-grid.html`
- `src/shaders/neuform-isolated/NeuformBatchEffects.tsx`
- `src/shaders/ribbon-field/RibbonFieldBackground.tsx`
- `src/shaders/ribbon-field/ribbonFieldShaders.ts`
- `src/shaders/neuform-isolated/NeuformIsolatedEffects.tsx`
- `src/shaders/neuform-isolated/sources/void-protocol.html`
- `src/shaders/neuform-isolated/NeuformCraftEffects.tsx`
- `src/shaders/neuform-isolated/sources/nexus-unified-flow.html`
- `src/shaders/neuform-isolated/sources/amber-halftone.html`
- `src/shaders/predictive-arc/PredictiveArcCollection.tsx`
- `src/shaders/predictive-arc/PredictiveArcCanvas.tsx`

Source revision: `SHA-256 fa86582fc870`

## Implementation steps

1. Open every verified source file listed above and identify the renderer, host lifecycle, styles, and assets before editing.
2. Keep Predictive Arc as the public entry point and select predictive, data-pixel, signal-particles, override-grid, ribbon-field, void-field, halftone-flow, or amber-halftone with the variant prop.
3. Retain each authored renderer and its original composition instead of blending the scenes into one canvas.
4. Expose the shared mode, speed, hue, saturation, and brightness controls at the collection boundary.
5. Lazy-load the isolated Signal Particles, Override Grid, Ribbon Field, Void Field, Halftone Flow, and Amber Halftone renderers so only the selected variant runs.
6. Preserve each renderer's resize, visibility, animation-frame, and cleanup lifecycle.
7. Give the local component a sized, overflow-controlled parent and verify desktop, mobile, reduced-motion, and context-loss behavior.

Asset handling: This effect has no required external assets.

## Local component example

Import the copied local component rather than a package entrypoint:

```tsx
import { PredictiveArcCanvas } from "./effects/predictive-arc/PredictiveArcCanvas";
import "./effects/predictive-arc/styles.css";

export function Scene() {
  return <div className="effect-frame"><PredictiveArcCanvas /></div>;
}
```

## Core renderer pattern

This excerpt documents orchestration only. Copy the exact shader, geometry, pass, and interaction code from the verified source files.

```tsx
<PredictiveArcCanvas variant="ribbon-field" speed={1.2} hue={12} />
```

## Behavior contract

- Runtime: Canvas 2D + Raw WebGL + Three.js r128
- Passes: 1 selected Canvas 2D, raw-WebGL, or Three.js field pass
- Interaction: Variant selection plus customizable mode, speed, color, and brightness
- Assets: No external assets
- **renderer** (host): Canvas 2D + Raw WebGL + Three.js
- **variants** (fixed): Predictive + Data Pixel + Signal + Override + Ribbon + Void + Halftone Flow + Amber Halftone
- **mode** (optional): dark | light
- **pixelRatio** (adaptive): ≤ 2
- **assets** (fixed): None

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
# Predictive Arc — Override Grid — Complete source

Component: `PredictiveArcCanvas`
Variant: **Override Grid** (`override-grid`)
Runtime: Canvas 2D + Raw WebGL + Three.js r128
Source revision: `SHA-256 fa86582fc870`

## Current configured usage

```tsx
import { PredictiveArcCanvas } from "@componentx/threeui";
import "@componentx/threeui/style.css";

export function Scene() {
  return (
    <div className="shader-frame">
      <PredictiveArcCanvas
        variant="override-grid"
        size={48}
        gap={2}
        mode="dark"
        speed={1.00}
        hue={0}
        saturation={1.00}
        brightness={1.00}
      />
    </div>
  );
}
```

## Required assets

No binary assets are required.

## Full implementation source

This bundle contains all 16 required text source files. Preserve their paths and contents; none are excerpts.

### `src/shaders/predictive-arc/PredictiveArcCollection.tsx`

Role: component · 78 lines · 2860 bytes · SHA-256 `b77a845ab2fa8e8ef8d9b6812d71efe6f320d865d97ec97b2e15253b5950fd63`

```tsx
import { lazy, Suspense } from "react";

import type { RibbonFieldBackgroundProps } from "../ribbon-field/RibbonFieldBackground";
import type { NeuformBatchEffectProps } from "../neuform-isolated/NeuformBatchEffects";
import type { NeuformCraftEffectProps } from "../neuform-isolated/NeuformCraftEffects";
import type { NeuformIsolatedEffectProps } from "../neuform-isolated/NeuformIsolatedEffects";
import {
  PredictiveArcCanvas as PredictiveArcCore,
  type PredictiveArcCanvasProps as PredictiveArcCoreProps,
  type PredictiveArcVariant as PredictiveArcCoreVariant,
} from "./PredictiveArcCanvas";

export type PredictiveArcVariant = PredictiveArcCoreVariant | "ribbon-field" | "void-field" | "halftone-flow" | "amber-halftone";

type RibbonFieldVariantProps = RibbonFieldBackgroundProps & {
  variant: "ribbon-field";
};

type VoidFieldVariantProps = NeuformIsolatedEffectProps & {
  variant: "void-field";
};

type HalftoneFlowVariantProps = NeuformCraftEffectProps & {
  variant: "halftone-flow";
};

type AmberHalftoneVariantProps = NeuformBatchEffectProps & {
  variant: "amber-halftone";
};

export type PredictiveArcCanvasProps =
  | PredictiveArcCoreProps
  | RibbonFieldVariantProps
  | VoidFieldVariantProps
  | HalftoneFlowVariantProps
  | AmberHalftoneVariantProps;

const RibbonFieldVariant = lazy(() =>
  import("../ribbon-field/RibbonFieldBackground").then((module) => ({ default: module.RibbonFieldBackground })),
);

const VoidFieldVariant = lazy(() =>
  import("../neuform-isolated/NeuformIsolatedEffects").then((module) => ({ default: module.VoidField })),
);

const HalftoneFlowVariant = lazy(() =>
  import("../neuform-isolated/NeuformCraftEffects").then((module) => ({ default: module.HalftoneFlow })),
);

const AmberHalftoneVariant = lazy(() =>
  import("../neuform-isolated/NeuformBatchEffects").then((module) => ({ default: module.AmberHalftone })),
);

const FALLBACK = <div className="threeui-background predictive-arc" />;

export function PredictiveArcCanvas(props: PredictiveArcCanvasProps) {
  if (props.variant === "ribbon-field") {
    const { variant: _variant, ...ribbonProps } = props;
    return <Suspense fallback={FALLBACK}><RibbonFieldVariant {...ribbonProps} /></Suspense>;
  }

  if (props.variant === "void-field") {
    const { variant: _variant, ...voidProps } = props;
    return <Suspense fallback={FALLBACK}><VoidFieldVariant {...voidProps} /></Suspense>;
  }

  if (props.variant === "halftone-flow") {
    const { variant: _variant, ...halftoneProps } = props;
    return <Suspense fallback={FALLBACK}><HalftoneFlowVariant {...halftoneProps} /></Suspense>;
  }

  if (props.variant === "amber-halftone") {
    const { variant: _variant, ...amberProps } = props;
    return <Suspense fallback={FALLBACK}><AmberHalftoneVariant {...amberProps} /></Suspense>;
  }

  return <PredictiveArcCore {...props} />;
}
```

### `src/shaders/predictive-arc/PredictiveArcCanvas.tsx`

Role: variant-component · 127 lines · 4365 bytes · SHA-256 `ebaa5a1b1f785c7772aaedc2b195318fd63bd9c3e5e5d8e175600968b245dae7`

```tsx
import { lazy, Suspense, useEffect, useRef } from "react";
import {
  DataPixelArcCanvas,
  type DataPixelArcCanvasProps,
} from "../data-pixel-arc/DataPixelArcCanvas";
import type { NeuformBatchEffectProps } from "../neuform-isolated/NeuformBatchEffects";
import {
  createPredictiveArcRenderer,
  PREDICTIVE_ARC_DEFAULTS,
  type PredictiveArcOptions,
} from "./predictiveArcRenderer";

export type PredictiveArcVariant = "predictive" | "data-pixel" | "signal-particles" | "override-grid";

type PredictiveVariantProps = Partial<PredictiveArcOptions> & {
  className?: string;
  variant?: "predictive";
};

type DataPixelVariantProps = DataPixelArcCanvasProps & {
  variant: "data-pixel";
};

type BatchVariantProps = Partial<NeuformBatchEffectProps> & {
  variant: "signal-particles" | "override-grid";
};

export type PredictiveArcCanvasProps =
  | PredictiveVariantProps
  | DataPixelVariantProps
  | BatchVariantProps;

const SignalParticlesVariant = lazy(() =>
  import("../neuform-isolated/NeuformBatchEffects").then((module) => ({ default: module.SignalParticles })),
);

const OverrideGridVariant = lazy(() =>
  import("../neuform-isolated/NeuformBatchEffects").then((module) => ({ default: module.OverrideGrid })),
);

function PredictiveArcRenderer({ className = "", ...props }: PredictiveVariantProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const optionsRef = useRef({ ...PREDICTIVE_ARC_DEFAULTS, ...props });
  optionsRef.current = { ...PREDICTIVE_ARC_DEFAULTS, ...props };

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return undefined;
    const renderer = createPredictiveArcRenderer(canvas, () => optionsRef.current);
    if (!renderer) return undefined;
    let frame = 0;
    let visible = true;
    const resize = () => {
      const bounds = host.getBoundingClientRect();
      renderer.resize(bounds.width, bounds.height);
      renderer.render();
    };
    const tick = () => {
      renderer.render();
      frame = visible && !document.hidden ? requestAnimationFrame(tick) : 0;
    };
    const observer = new ResizeObserver(resize);
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? true;
      if (visible && !frame) frame = requestAnimationFrame(tick);
      if (!visible && frame) cancelAnimationFrame(frame), frame = 0;
    });
    const visibility = () => {
      if (document.hidden && frame) cancelAnimationFrame(frame), frame = 0;
      else if (!document.hidden && visible && !frame) frame = requestAnimationFrame(tick);
    };
    observer.observe(host);
    intersection.observe(host);
    document.addEventListener("visibilitychange", visibility);
    resize();
    frame = requestAnimationFrame(tick);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      observer.disconnect();
      intersection.disconnect();
      document.removeEventListener("visibilitychange", visibility);
    };
  }, []);

  return (
    <div
      ref={hostRef}
      className={`threeui-background predictive-arc predictive-arc--${optionsRef.current.mode}${className ? ` ${className}` : ""}`}
      data-mode={optionsRef.current.mode}
    >
      <canvas
        ref={canvasRef}
        style={{ filter: `hue-rotate(${optionsRef.current.hue}deg) saturate(${optionsRef.current.saturation})` }}
      />
    </div>
  );
}

export function PredictiveArcCanvas(props: PredictiveArcCanvasProps) {
  if (props.variant === "data-pixel") {
    const { variant: _variant, ...canvasProps } = props;
    return <DataPixelArcCanvas {...canvasProps} />;
  }

  if (props.variant === "signal-particles") {
    const { variant: _variant, ...effectProps } = props;
    return (
      <Suspense fallback={<div className="threeui-background predictive-arc" />}>
        <SignalParticlesVariant {...effectProps} />
      </Suspense>
    );
  }

  if (props.variant === "override-grid") {
    const { variant: _variant, ...effectProps } = props;
    return (
      <Suspense fallback={<div className="threeui-background predictive-arc" />}>
        <OverrideGridVariant {...effectProps} />
      </Suspense>
    );
  }

  const { variant: _variant, ...canvasProps } = props as PredictiveVariantProps;
  return <PredictiveArcRenderer {...canvasProps} />;
}
```

### `src/shaders/predictive-arc/predictiveArcRenderer.ts`

Role: renderer-source · 112 lines · 4088 bytes · SHA-256 `fc08c66b13c4a8173c8a88845926b72266d1b1a4fc345c84f44ee61fbfaba92b`

```typescript
export type PredictiveArcMode = "dark" | "light";

export type PredictiveArcOptions = {
  mode: PredictiveArcMode;
  speed: number;
  spacing: number;
  dotSize: number;
  archHeight: number;
  thickness: number;
  brightness: number;
  hue: number;
  saturation: number;
};

export const PREDICTIVE_ARC_DEFAULTS: PredictiveArcOptions = {
  mode: "dark",
  speed: 1,
  spacing: 5,
  dotSize: 6,
  archHeight: 0.7,
  thickness: 1,
  brightness: 1,
  hue: 0,
  saturation: 1,
};

function resolveMode(mode: PredictiveArcOptions["mode"] | number | string | undefined): PredictiveArcMode {
  if (mode === "light" || mode === 1 || mode === "1") return "light";
  return "dark";
}

export function createPredictiveArcRenderer(
  canvas: HTMLCanvasElement,
  getOptions: () => PredictiveArcOptions,
) {
  const context = canvas.getContext("2d", { alpha: false });
  if (!context) return null;
  let width = 1;
  let height = 1;
  let time = 0;

  const resize = (nextWidth: number, nextHeight: number) => {
    width = Math.max(1, nextWidth);
    height = Math.max(1, nextHeight);
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  };

  const render = () => {
    const options = getOptions();
    const mode = resolveMode(options.mode);
    const isLight = mode === "light";
    context.fillStyle = isLight ? "#eef1f6" : "#030303";
    context.fillRect(0, 0, width, height);
    time += 0.015 * options.speed;

    const centerX = width / 2;
    const archPeakY = height * 0.35;
    const archWidth = width * 1.5;
    const archHeight = height * options.archHeight;
    context.globalCompositeOperation = isLight ? "source-over" : "lighter";

    for (let x = 0; x < width; x += options.spacing) {
      const normX = (x - centerX) / (archWidth / 2);
      const curveY = archPeakY + normX * normX * archHeight;
      for (let y = 0; y < height; y += options.spacing) {
        const distanceToCurve = Math.abs(y - curveY);
        const thickness = (140 + (1 - Math.abs(normX)) * 80) * options.thickness;
        if (distanceToCurve >= thickness) continue;
        let intensity = 1 - distanceToCurve / thickness;
        const waveX = Math.sin(x * 0.015 + time);
        const waveY = Math.cos(y * 0.02 + time);
        intensity = intensity * 0.7 + waveX * waveY * 0.3 * intensity;
        intensity *= Math.max(0, 1 - Math.pow(Math.abs(normX), 2.5));
        if (intensity <= 0.02) continue;

        let r: number;
        let g: number;
        let b: number;
        if (isLight) {
          // Cool violet ink on pale paper — readable without additive washout.
          r = Math.min(255, 48 * intensity + 70 * Math.pow(intensity, 3));
          g = Math.min(255, 28 * intensity + 45 * Math.pow(intensity, 4));
          b = Math.min(255, 120 * intensity + 110 * Math.pow(intensity, 2));
          if (intensity > 0.7) {
            const coreBoost = (intensity - 0.7) * 3.3;
            r = Math.min(255, r + 90 * coreBoost);
            g = Math.min(255, g + 70 * coreBoost);
            b = Math.min(255, b + 110 * coreBoost);
          }
        } else {
          r = Math.min(255, 60 * intensity + 100 * Math.pow(intensity, 3));
          g = Math.min(255, 20 * intensity + 60 * Math.pow(intensity, 4));
          b = Math.min(255, 120 * intensity + 135 * Math.pow(intensity, 2));
          if (intensity > 0.7) {
            const coreBoost = (intensity - 0.7) * 3.3;
            r = Math.min(255, r + 150 * coreBoost);
            g = Math.min(255, g + 150 * coreBoost);
            b = Math.min(255, b + 150 * coreBoost);
          }
        }
        context.fillStyle = `rgb(${Math.floor(r * options.brightness)}, ${Math.floor(g * options.brightness)}, ${Math.floor(b * options.brightness)})`;
        context.fillRect(x, y, options.dotSize * intensity, options.dotSize * intensity);
      }
    }
    context.globalCompositeOperation = "source-over";
  };

  return { resize, render };
}
```

### `src/shaders/data-pixel-arc/DataPixelArcCanvas.tsx`

Role: variant-component · 43 lines · 2376 bytes · SHA-256 `2e25156d43dfd1bf0fb47384f75df240cd0c4038deae75a8dacae7c213269c5b`

```tsx
import { useEffect, useRef } from "react";
import { createDataPixelArcRenderer, DATA_PIXEL_ARC_DEFAULTS, type DataPixelArcOptions } from "./dataPixelArcRenderer";

export type DataPixelArcCanvasProps = Partial<DataPixelArcOptions> & { className?: string };

export function DataPixelArcCanvas({ className = "", ...props }: DataPixelArcCanvasProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const optionsRef = useRef({ ...DATA_PIXEL_ARC_DEFAULTS, ...props });
  optionsRef.current = { ...DATA_PIXEL_ARC_DEFAULTS, ...props };
  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return undefined;
    const renderer = createDataPixelArcRenderer(canvas, () => optionsRef.current);
    if (!renderer) return undefined;
    let frame = 0;
    let visible = true;
    const resize = () => { const bounds = host.getBoundingClientRect(); renderer.resize(bounds.width, bounds.height); renderer.render(); };
    const tick = () => { renderer.render(); frame = visible && !document.hidden ? requestAnimationFrame(tick) : 0; };
    const observer = new ResizeObserver(resize);
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? true;
      if (visible && !frame) frame = requestAnimationFrame(tick);
      if (!visible && frame) cancelAnimationFrame(frame), frame = 0;
    });
    const visibility = () => {
      if (document.hidden && frame) cancelAnimationFrame(frame), frame = 0;
      else if (!document.hidden && visible && !frame) frame = requestAnimationFrame(tick);
    };
    observer.observe(host); intersection.observe(host); document.addEventListener("visibilitychange", visibility); resize(); frame = requestAnimationFrame(tick);
    return () => { if (frame) cancelAnimationFrame(frame); observer.disconnect(); intersection.disconnect(); document.removeEventListener("visibilitychange", visibility); };
  }, []);
  return (
    <div
      ref={hostRef}
      className={`threeui-background data-pixel-arc data-pixel-arc--${optionsRef.current.mode}${className ? ` ${className}` : ""}`}
      data-mode={optionsRef.current.mode}
    >
      <canvas ref={canvasRef} style={{ filter: `hue-rotate(${optionsRef.current.hue}deg) saturate(${optionsRef.current.saturation})` }} />
    </div>
  );
}
```

### `src/shaders/data-pixel-arc/dataPixelArcRenderer.ts`

Role: variant-renderer-source · 106 lines · 4372 bytes · SHA-256 `65bdfb98424996d935923f39f163e1667f0bc2b8faa458d900f4450beabba0eb`

```typescript
export type DataPixelArcMode = "dark" | "light";

export type DataPixelArcOptions = {
  mode: DataPixelArcMode;
  speed: number;
  pixelSize: number;
  arcCenter: number;
  arcDrop: number;
  thickness: number;
  brightness: number;
  hue: number;
  saturation: number;
};

export const DATA_PIXEL_ARC_DEFAULTS: DataPixelArcOptions = {
  mode: "dark",
  speed: 1,
  pixelSize: 8,
  arcCenter: 0.4,
  arcDrop: 0.9,
  thickness: 0.35,
  brightness: 1,
  hue: 0,
  saturation: 1,
};

function resolveMode(mode: DataPixelArcOptions["mode"] | number | string | undefined): DataPixelArcMode {
  if (mode === "light" || mode === 1 || mode === "1") return "light";
  return "dark";
}

export function createDataPixelArcRenderer(canvas: HTMLCanvasElement, getOptions: () => DataPixelArcOptions) {
  const context = canvas.getContext("2d", { alpha: false });
  if (!context) return null;
  let width = 1;
  let height = 1;
  let time = 0;
  let lightBackground: CanvasGradient | null = null;
  const resize = (nextWidth: number, nextHeight: number) => {
    width = Math.max(1, nextWidth);
    height = Math.max(1, nextHeight);
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    lightBackground = context.createLinearGradient(0, 0, 0, height);
    lightBackground.addColorStop(0, "#f8faf6");
    lightBackground.addColorStop(0.58, "#f3f6f1");
    lightBackground.addColorStop(1, "#edf1ec");
  };
  const render = () => {
    const options = getOptions();
    const isLight = resolveMode(options.mode) === "light";
    context.fillStyle = isLight && lightBackground ? lightBackground : "#030308";
    context.fillRect(0, 0, width, height);
    const cols = Math.ceil(width / options.pixelSize);
    const rows = Math.ceil(height / options.pixelSize);
    const arcCenterY = height * options.arcCenter;
    const arcDrop = height * options.arcDrop;
    const thickness = height * options.thickness;
    for (let x = 0; x < cols; x += 1) {
      for (let y = 0; y < rows; y += 1) {
        const px = x * options.pixelSize;
        const py = y * options.pixelSize;
        const nx = (px / width) * 2 - 1;
        const curveY = arcCenterY + Math.pow(Math.abs(nx), 1.8) * arcDrop;
        let intensity = Math.max(0, 1 - Math.abs(py - curveY) / thickness);
        if (intensity <= 0.01) continue;
        const wave1 = Math.sin(nx * 4 - time * 1.5) * 0.1;
        const wave2 = Math.cos(py * 0.01 + time) * 0.1;
        intensity = Math.max(0, Math.min(1, intensity + wave1 + wave2));
        intensity *= Math.max(0, 1 - Math.pow(Math.abs(nx), 2.5));
        if (intensity <= 0.02) continue;
        const coreStrength = Math.pow(intensity, 3);
        const middleStrength = Math.pow(intensity, 1.5);
        let r: number;
        let g: number;
        let b: number;
        if (isLight) {
          // Sage edge pixels hold their shape on paper while the emerald core stays vivid.
          const pigment = Math.pow(intensity, 0.78);
          const inkStrength = Math.max(0.45, Math.min(1.35, options.brightness));
          const paper = [238, 242, 237];
          const ink = [
            192 - 172 * pigment - 10 * coreStrength,
            204 - 88 * pigment + 18 * coreStrength,
            193 - 132 * pigment + 4 * coreStrength,
          ];
          r = Math.max(0, Math.min(255, Math.round(paper[0] + (ink[0] - paper[0]) * inkStrength)));
          g = Math.max(0, Math.min(255, Math.round(paper[1] + (ink[1] - paper[1]) * inkStrength)));
          b = Math.max(0, Math.min(255, Math.round(paper[2] + (ink[2] - paper[2]) * inkStrength)));
        } else {
          r = Math.floor((30 * intensity + 100 * coreStrength) * options.brightness);
          g = Math.floor((220 * middleStrength + 40 * coreStrength) * options.brightness);
          b = Math.floor((80 * intensity + 50 * coreStrength) * options.brightness);
        }
        context.fillStyle = `rgb(${r}, ${g}, ${b})`;
        context.globalAlpha = isLight ? Math.min(1, 0.22 + Math.pow(intensity, 0.68) * 0.78) : intensity;
        context.fillRect(px, py, options.pixelSize - 1, options.pixelSize - 1);
      }
    }
    context.globalAlpha = 1;
    time += 0.02 * options.speed;
  };
  return { resize, render };
}
```

### `src/shaders/neuform-isolated/NeuformBatchEffects.tsx`

Role: variant-component · 949 lines · 41426 bytes · SHA-256 `dc68c51bea26b922965de44b4fb8d6c432607508fb2b61e16ed60d245da1a69f`

```tsx
import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";

import constellationFieldSource from "./sources/constellation-field.html?raw";
import particleDriftSource from "./sources/particle-drift.html?raw";
import particleNetworkSource from "./sources/particle-network.html?raw";
import fluxVortexSource from "./sources/flux-vortex.html?raw";
import portalFieldSource from "./sources/portal-field.html?raw";
import flowFieldSource from "./sources/flow-field.html?raw";
import amberHalftoneSource from "./sources/amber-halftone.html?raw";
import diagnosticsPanelSource from "./sources/diagnostics-panel.html?raw";
import signalParticlesSource from "./sources/signal-particles.html?raw";
import skeuomorphicToggleSource from "./sources/skeuomorphic-toggle.html?raw";
import matrixFieldSource from "./sources/matrix-field.html?raw";
import gatewayFlowSource from "./sources/gateway-flow.html?raw";
import connectivityGraphSource from "./sources/connectivity-graph.html?raw";
import interfaceLinesSource from "./sources/interface-lines.html?raw";
import wireframeFormsSource from "./sources/wireframe-forms.html?raw";
import defenseLinesSource from "./sources/defense-lines.html?raw";
import overrideGridSource from "./sources/override-grid.html?raw";
import topoFieldSource from "./sources/topo-field.html?raw";

type FocusRole = "background" | "ui";
type NeuformMode = "dark" | "light";
type NeuformModePreference = NeuformMode | "auto";

type FocusTarget = {
  selector: string;
  role: FocusRole;
  width?: string;
};

type BakeKnobs = {
  variant: string;
  size: number;
  gap: number;
  length: number;
  density: number;
  strokeWidth: number;
  mode: NeuformMode;
};

type EffectDefinition = {
  title: string;
  source: string;
  background: string | ((mode: NeuformMode) => string);
  defaultMode?: NeuformModePreference;
  supportsMode?: boolean;
  targets: readonly FocusTarget[];
  focusCss?: string;
  patch?: (source: string, knobs: BakeKnobs) => string;
};

export type NeuformBatchEffectProps = {
  variant?: string;
  mode?: NeuformModePreference;
  speed?: number;
  size?: number;
  gap?: number;
  length?: number;
  density?: number;
  strokeWidth?: number;
  opacity?: number;
  hue?: number;
  saturation?: number;
  brightness?: number;
  className?: string;
  style?: CSSProperties;
};

export const NEUFORM_BATCH_DEFAULTS = {
  mode: "dark" as NeuformMode,
  speed: 1,
  size: 1,
  gap: 2,
  length: 1,
  density: 1,
  strokeWidth: 1,
  opacity: 1,
  hue: 0,
  saturation: 1,
  brightness: 1,
} as const;

const LIGHT_PAPER = "#eef1f6";

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(maximum, Math.max(minimum, value));
}

function scaleCount(base: number, density: number, minimum = 1) {
  return Math.max(minimum, Math.round(base * density));
}

function resolveWireframeVariant(variant: string) {
  return variant === "cylinders" || variant === "sphere" ? variant : "cube";
}

/** WebGL1 GLSL ES requires float literals (10.0), not ints (10). */
function glslFloat(value: number, digits = 3) {
  const fixed = Number(value).toFixed(digits);
  return fixed.includes(".") ? fixed : `${fixed}.0`;
}

function resolveMode(mode: NeuformMode | number | string | undefined, fallback: NeuformMode = "dark"): NeuformMode {
  if (mode === undefined || mode === null) return fallback;
  if (mode === "light" || mode === 1 || mode === "1") return "light";
  return "dark";
}

function readAutomaticMode(): NeuformMode {
  if (typeof document === "undefined" || typeof window === "undefined") return "dark";
  const root = document.documentElement;
  const declared = root.dataset.scheme ?? root.dataset.theme;
  if (declared === "light" || declared === "dark") return declared;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function useAutomaticMode(enabled: boolean) {
  const [mode, setMode] = useState<NeuformMode>(readAutomaticMode);

  useEffect(() => {
    if (!enabled || typeof document === "undefined" || typeof window === "undefined") return undefined;
    const root = document.documentElement;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const update = () => setMode(readAutomaticMode());
    const observer = new MutationObserver(update);
    observer.observe(root, { attributes: true, attributeFilter: ["data-scheme", "data-theme"] });
    media.addEventListener("change", update);
    update();
    return () => {
      observer.disconnect();
      media.removeEventListener("change", update);
    };
  }, [enabled]);

  return mode;
}

function resolveBackground(background: EffectDefinition["background"], mode: NeuformMode) {
  return typeof background === "function" ? background(mode) : background;
}

const DIAGNOSTICS_PANEL_FOCUS_CSS = `
[data-threeui-role="ui"].flex-grow {
  flex: none !important;
  width: min(calc(100% - 32px), var(--threeui-target-width, 360px)) !important;
  height: auto !important;
  min-height: 0 !important;
  max-height: calc(100% - 32px) !important;
  aspect-ratio: 1 / 1 !important;
  margin: 0 !important;
  overflow: hidden !important;
}
[data-threeui-role="ui"] > canvas {
  position: absolute !important;
  inset: 0 !important;
  width: 100% !important;
  height: 100% !important;
}
`;

function patchDiagnosticsPanel(source: string, { mode }: BakeKnobs) {
  let next = source.replaceAll(
    "time += 0.015;",
    "time += 0.015 * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);",
  );
  if (mode === "light") {
    // Match canvas cutouts to light paper; deepen emerald strokes for contrast.
    next = next
      .replaceAll("ctx.fillStyle = '#020804';", `ctx.fillStyle = '${LIGHT_PAPER}';`)
      .replaceAll("rgba(52,211,153,", "rgba(4,120,87,");
  }
  return next;
}

const EFFECTS = {
  constellationField: {
    title: "Constellation Field",
    source: constellationFieldSource,
    supportsMode: true,
    background: (mode) => (mode === "light" ? LIGHT_PAPER : "#070914"),
    targets: [{ selector: "#constellationCanvas", role: "background" }],
    patch(source, { size, length, density, strokeWidth, mode }) {
      let next = source
        .replace("const LINK = 160;", `const LINK = ${Math.round(160 * length)};`)
        .replace(
          "const MAX_NODES = window.innerWidth < 768 ? 40 : 85;",
          `const MAX_NODES = window.innerWidth < 768 ? ${scaleCount(40, density, 8)} : ${scaleCount(85, density, 12)};`,
        )
        .replace(
          "radius: Math.random() * 2.4 + 1.8",
          `radius: (Math.random() * 2.4 + 1.8) * ${size}`,
        )
        .replace("ctx.lineWidth = 1;", `ctx.lineWidth = ${Number(Math.max(0.25, strokeWidth).toFixed(2))};`)
        .replace("node.x += node.vx;", "node.x += node.vx * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);")
        .replace("node.y += node.vy;", "node.y += node.vy * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);");
      if (mode === "light") {
        // Deeper bronze ink so gold nodes stay readable on paper.
        next = next
          .replace("ctx.strokeStyle = '#E6C879';", "ctx.strokeStyle = '#8B6914';")
          .replace("ctx.fillStyle = '#E6C879';", "ctx.fillStyle = '#8B6914';");
      }
      return next;
    },
  },
  particleDrift: {
    title: "Particle Drift",
    source: particleDriftSource,
    supportsMode: true,
    background: (mode) => (mode === "light" ? LIGHT_PAPER : "#030509"),
    targets: [{ selector: "#particle-canvas", role: "background" }],
    patch(source, { size, length, density, mode }) {
      const link = Math.round(120 * length);
      const proximityAlpha = mode === "light" ? 0.22 : 0.15;
      let next = source
        .replace("Array.from({ length: 90 })", `Array.from({ length: ${scaleCount(90, density, 12)} })`)
        .replace("Array.from({ length: 25 })", `Array.from({ length: ${scaleCount(25, density, 4)} })`)
        .replace("length: Math.random() * 100 + 50,", `length: (Math.random() * 100 + 50) * ${length},`)
        .replace("n.y += n.vy; // Slow drift", "n.y += n.vy * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1); // Slow drift")
        .replace("b.y -= b.speed;", "b.y -= b.speed * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);")
        .replace("if(d < 120) {", `if(d < ${link}) {`)
        .replace("0.15 * (1 - d/120)", `${proximityAlpha} * (1 - d/${link})`)
        .replace("ctx.lineWidth = 1.5;", `ctx.lineWidth = ${Number((1.5 * size).toFixed(2))};`);
      if (mode === "light") {
        next = next
          .replaceAll("rgba(96, 165, 250,", "rgba(37, 99, 235,")
          .replaceAll("rgba(156, 163, 175,", "rgba(36, 48, 68,")
          .replace("ctx.fillStyle = dist < 180 ? '#60A5FA' : 'rgba(36, 48, 68, 0.4)';", "ctx.fillStyle = dist < 180 ? '#2563EB' : 'rgba(36, 48, 68, 0.55)';");
      }
      return next;
    },
  },
  particleNetwork: {
    title: "Particle Network",
    source: particleNetworkSource,
    supportsMode: true,
    background: (mode) => (mode === "light" ? LIGHT_PAPER : "#05070d"),
    targets: [{ selector: "#particle-canvas", role: "background" }],
    patch(source, { size, length, density, mode }) {
      let next = source
        .replace("const particleCount = 200;", `const particleCount = ${scaleCount(200, density, 40)};`)
        .replace("this.length = Math.random() * 2 + 0.5;", `this.length = (Math.random() * 2 + 0.5) * ${length};`)
        .replace("this.z -= this.speed;", "this.z -= this.speed * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);")
        .replace("const fov = 300;", `const fov = ${Math.round(300 / Math.max(0.4, size))};`);
      if (mode === "light") {
        next = next
          .replace("ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';", "ctx.fillStyle = 'rgba(238, 241, 246, 0.55)';")
          .replace(
            "const hue = Math.random() > 0.5 ? '200, 220, 255' : '106, 157, 237';",
            "const hue = Math.random() > 0.5 ? '36, 48, 68' : '37, 99, 235';",
          );
      }
      return next;
    },
  },
  fluxVortex: {
    title: "Flux Vortex",
    source: fluxVortexSource,
    background: "#050505",
    targets: [{ selector: "#webgl-canvas", role: "background" }],
    patch(source, { size, density }) {
      return source
        .replace("const vortexCount = 9500;", `const vortexCount = ${scaleCount(9500, density, 1200)};`)
        .replace("const particlesCount = 300;", `const particlesCount = ${scaleCount(300, density, 40)};`)
        .replace("size: 0.006, // Smaller dots requested", `size: ${Number((0.006 * size).toFixed(4))}, // Smaller dots requested`)
        .replace("size: 0.008,", `size: ${Number((0.008 * size).toFixed(4))},`);
    },
  },
  portalField: {
    title: "Portal Field",
    source: portalFieldSource,
    background: "#05060a",
    targets: [{ selector: "#webgl-container", role: "background" }],
    patch(source, { size, length }) {
      return source
        .replace(
          "float d1 = sdArc(st, center, 0.6, 0.02, 0.15);",
          `float d1 = sdArc(st, center, ${glslFloat(0.6 * length, 3)}, ${glslFloat(0.02 * size, 4)}, 0.15);`,
        )
        .replace(
          "float d2 = sdArc(st, center, 0.65, 0.06, 0.2);",
          `float d2 = sdArc(st, center, ${glslFloat(0.65 * length, 3)}, ${glslFloat(0.06 * size, 4)}, 0.2);`,
        );
    },
  },
  flowField: {
    title: "Flow Field",
    source: flowFieldSource,
    background: "#0a0a0a",
    targets: [{ selector: "#canvas", role: "background" }],
    patch(source, { size, length, density }) {
      return source
        .replace(/<script defer src="https:\/\/static\.cloudflareinsights\.com\/beacon\.min\.js[^>]*><\/script>/, "")
        .replace("const PARTICLE_COUNT = 2500;", `const PARTICLE_COUNT = ${scaleCount(2500, density, 300)};`)
        .replace("let NOISE_SCALE = 0.0025;", `let NOISE_SCALE = ${Number((0.0025 / length).toFixed(6))};`)
        .replace("time += 0.0008;", "time += 0.0008 * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||0);")
        .replace(
          "let vx = Math.cos(angle) * p.speed * SPEED;",
          "let vx = Math.cos(angle) * p.speed * SPEED * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||0);",
        )
        .replace(
          "let vy = Math.sin(angle) * p.speed * SPEED;",
          "let vy = Math.sin(angle) * p.speed * SPEED * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||0);",
        )
        .replace("ctx.lineWidth = p.size;", `ctx.lineWidth = p.size * ${Number(size.toFixed(3))};`);
    },
  },
  amberHalftone: {
    title: "Amber Halftone",
    source: amberHalftoneSource,
    supportsMode: true,
    background: (mode) => (mode === "light" ? LIGHT_PAPER : "#0A0A0A"),
    targets: [{ selector: "#webgl-halftone", role: "background" }],
    patch(source, { size, length, density, mode }) {
      // Density must tighten spacing (not grow gridSize). Growing gridSize only adds
      // points outside the orthographic frustum, which looks sparse/broken full-bleed.
      const spacing = Number((0.085 / Math.max(0.25, density)).toFixed(4));
      const gridSize = Math.max(12, Math.ceil(2.8 / spacing));
      const pointSize = Number((9 * size).toFixed(2));
      const wave = Number((6 * length).toFixed(2));
      let next = source
        .replace("const gridSize = 20;", `const gridSize = ${gridSize};`)
        .replace("positions.push(x * 0.15, y * 0.15, 0);", `positions.push(x * ${spacing}, y * ${spacing}, 0);`)
        .replace(
          "float animatedScale = scale * (sin(dist * 6.0 - time * 2.5) * 0.5 + 0.5);",
          `float animatedScale = scale * (sin(dist * ${glslFloat(wave, 2)} - time * 2.5) * 0.5 + 0.5);`,
        )
        .replace("gl_PointSize = animatedScale * 5.0;", `gl_PointSize = animatedScale * ${glslFloat(pointSize, 2)};`)
        .replace(
          "material.uniforms.time.value = clock.getElapsedTime();",
          "material.uniforms.time.value = clock.getElapsedTime() * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);",
        );
      if (mode === "light") {
        next = next
          .replace("renderer.setClearColor(0x0A0A0A, 1);", "renderer.setClearColor(0xeef1f6, 1);")
          .replace("color1: { value: new THREE.Color(0xFBBF24) },", "color1: { value: new THREE.Color(0xB45309) },")
          .replace("color2: { value: new THREE.Color(0xFFFFFF) }", "color2: { value: new THREE.Color(0x1a1f2a) }");
      }
      return next;
    },
  },
  diagnosticsLayers: {
    title: "Layered Planes",
    source: diagnosticsPanelSource,
    supportsMode: true,
    background: (mode) => (mode === "light" ? LIGHT_PAPER : "#020804"),
    targets: [{ selector: "#main-container article:nth-of-type(1) .flex-grow", role: "ui", width: "360px" }],
    focusCss: DIAGNOSTICS_PANEL_FOCUS_CSS,
    patch: patchDiagnosticsPanel,
  },
  diagnosticsNodes: {
    title: "Node Cubes",
    source: diagnosticsPanelSource,
    supportsMode: true,
    background: (mode) => (mode === "light" ? LIGHT_PAPER : "#020804"),
    targets: [{ selector: "#main-container article:nth-of-type(2) .flex-grow", role: "ui", width: "360px" }],
    focusCss: DIAGNOSTICS_PANEL_FOCUS_CSS,
    patch: patchDiagnosticsPanel,
  },
  diagnosticsFlow: {
    title: "Flowing Mesh",
    source: diagnosticsPanelSource,
    supportsMode: true,
    background: (mode) => (mode === "light" ? LIGHT_PAPER : "#020804"),
    targets: [{ selector: "#main-container article:nth-of-type(3) .flex-grow", role: "ui", width: "360px" }],
    focusCss: DIAGNOSTICS_PANEL_FOCUS_CSS,
    patch: patchDiagnosticsPanel,
  },
  signalParticles: {
    title: "Signal Particles",
    source: signalParticlesSource,
    supportsMode: true,
    background: (mode) => (mode === "light" ? LIGHT_PAPER : "#0a0a0a"),
    targets: [{ selector: "#particle-canvas", role: "background" }],
    patch(source, { size, length, mode }) {
      let next = source
        .replace("const spacing = 16;", `const spacing = ${Math.max(6, Math.round(16 / Math.max(0.35, length)))};`)
        .replace("const dotRadius = 1.5;", `const dotRadius = ${Number((1.5 * size).toFixed(2))};`)
        .replace("time += 0.02;", "time += 0.02 * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);");
      if (mode === "light") {
        next = next
          .replace("ctx.fillStyle = '#3b82f6'; // Blue highlight", "ctx.fillStyle = '#1d4ed8'; // Blue highlight")
          .replace("ctx.fillStyle = '#8b5cf6'; // Purple highlight", "ctx.fillStyle = '#5b21b6'; // Purple highlight")
          .replace("ctx.fillStyle = `rgba(148, 163, 184, ${alpha})`;", `ctx.fillStyle = \`rgba(36, 48, 68, \${alpha})\`;`);
      }
      return next;
    },
  },
  skeuomorphicToggle: {
    title: "Skeuomorphic Toggle",
    source: skeuomorphicToggleSource,
    supportsMode: true,
    defaultMode: "auto",
    background: (mode) => (mode === "light" ? "#f8fafc" : "#0b1220"),
    targets: [{ selector: "#skeuomorphic-toggle", role: "ui", width: "192px" }],
    focusCss: `
#skeuomorphic-toggle {
  width: 12rem !important;
  height: 4rem !important;
  margin: auto !important;
  overflow: visible !important;
  max-height: none !important;
}
`,
    patch(source, { mode }) {
      if (mode !== "dark") return source;
      return source
        .replace(
          "var ON_BG = 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px), linear-gradient(180deg, #dbeafe 0%, #93c5fd 100%)';",
          "var ON_BG = 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.035) 2px, rgba(255,255,255,0.035) 4px), linear-gradient(180deg, #1e3a8a 0%, #172554 100%)';",
        )
        .replace(
          "var OFF_BG = 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px), linear-gradient(180deg, #e2e8f0 0%, #cbd5e1 100%)';",
          "var OFF_BG = 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.025) 2px, rgba(255,255,255,0.025) 4px), linear-gradient(180deg, #1e293b 0%, #0f172a 100%)';",
        )
        .replace(
          "var ON_SHADOW = 'inset 0 4px 8px rgba(0,0,0,0.1), inset 0 -2px 4px rgba(255,255,255,0.7), 0 0 0 6px rgba(239, 246, 255, 0.8), 0 0 25px 5px rgba(96, 165, 250, 0.4)';",
          "var ON_SHADOW = 'inset 0 5px 10px rgba(0,0,0,0.52), inset 0 -2px 4px rgba(147,197,253,0.24), 0 0 0 6px rgba(15,23,42,0.96), 0 0 26px 5px rgba(59,130,246,0.42)';",
        )
        .replace(
          "var OFF_SHADOW = 'inset 0 4px 8px rgba(0,0,0,0.12), inset 0 -2px 4px rgba(255,255,255,0.55), 0 0 0 6px rgba(241, 245, 249, 0.9), 0 0 18px 2px rgba(148, 163, 184, 0.25)';",
          "var OFF_SHADOW = 'inset 0 5px 10px rgba(0,0,0,0.56), inset 0 -2px 4px rgba(148,163,184,0.12), 0 0 0 6px rgba(15,23,42,0.96), 0 0 18px 2px rgba(30,64,175,0.2)';",
        )
        .replace("var ON_BORDER = '#60a5fa';", "var ON_BORDER = '#3b82f6';")
        .replace("var OFF_BORDER = '#94a3b8';", "var OFF_BORDER = '#334155';")
        .replace(
          "background: linear-gradient(180deg, #ffffff 0%, #f4f8ff 100%);",
          "background: linear-gradient(180deg, #e2e8f0 0%, #94a3b8 100%);",
        )
        .replace("border: 1px solid #e0edfa;", "border: 1px solid #64748b;");
    },
  },
  matrixField: {
    title: "Matrix Field",
    source: matrixFieldSource,
    background: "#000000",
    targets: [{ selector: "#glcanvas", role: "background" }],
    patch(source, { size, length }) {
      return source.replace(
        "float intensity = 0.006;",
        `float intensity = ${glslFloat(0.006 * size * length, 5)};`,
      );
    },
  },
  gatewayFlow: {
    title: "Gateway Flow",
    source: gatewayFlowSource,
    supportsMode: true,
    background: (mode) => (mode === "light" ? LIGHT_PAPER : "#000000"),
    targets: [{ selector: "#flow-canvas", role: "background" }],
    patch(source, { size, density, mode }) {
      let next = source
        .replace("const numPaths = 80;", `const numPaths = ${scaleCount(80, density, 12)};`)
        .replace("p.t += p.speed;", "p.t += p.speed * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);")
        .replace("ctx.lineWidth = 1.2;", `ctx.lineWidth = ${Number((1.2 * size).toFixed(2))};`);
      if (mode === "light") {
        next = next
          .replace("ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';", `ctx.strokeStyle = 'rgba(26, 31, 42, 0.4)';`)
          .replace("ctx.fillStyle = `rgba(255, 255, 255, 0.7)`;", `ctx.fillStyle = \`rgba(26, 31, 42, 0.75)\`;`);
      }
      return next;
    },
  },
  connectivityGraph: {
    title: "Connectivity Graph",
    source: connectivityGraphSource,
    supportsMode: true,
    defaultMode: "light",
    background: (mode) => (mode === "light" ? "#c4d9ef" : "#0a1220"),
    targets: [{ selector: "#networkCanvas", role: "background" }],
    patch(source, { size, length, density, mode }) {
      let next = source
        .replace(
          "const particleCount = window.innerWidth < 768 ? 150 : 400;",
          `const particleCount = window.innerWidth < 768 ? ${scaleCount(150, density, 30)} : ${scaleCount(400, density, 60)};`,
        )
        .replace("this.maxLength = 20 + Math.random() * 180;", `this.maxLength = (20 + Math.random() * 180) * ${length};`)
        .replace("this.distance += this.speed;", "this.distance += this.speed * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);")
        .replace("ctx.lineWidth = 0.5 + (distRatio * 2);", `ctx.lineWidth = (0.5 + (distRatio * 2)) * ${size};`);
      if (mode === "dark") {
        next = next
          .replace("const lightness = 15 + (distRatio * 35);", "const lightness = 58 + (distRatio * 28);")
          .replace(
            "const tailColor = `hsla(${hue}, 90%, ${Math.max(5, lightness - 15)}%, ${this.alpha * 0.05})`;",
            "const tailColor = `hsla(${hue}, 90%, ${Math.max(40, lightness - 15)}%, ${this.alpha * 0.08})`;",
          );
      }
      return next;
    },
  },
  interfaceLines: {
    title: "Interface Lines",
    source: interfaceLinesSource,
    supportsMode: true,
    background: (mode) => (mode === "light" ? LIGHT_PAPER : "#050505"),
    targets: [{ selector: "#bg-canvas", role: "background" }],
    patch(source, { size, length, density, mode }) {
      const link = Math.round(120 * length);
      let next = source
        .replace(
          "const numParticles = window.innerWidth < 640 ? 30 : 70;",
          `const numParticles = window.innerWidth < 640 ? ${scaleCount(30, density, 8)} : ${scaleCount(70, density, 12)};`,
        )
        .replace("p.x += p.vx;", "p.x += p.vx * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);")
        .replace("p.y += p.vy;", "p.y += p.vy * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);")
        .replace("if (dist < 120)", `if (dist < ${link})`)
        .replace("ctx.lineWidth = 1;", `ctx.lineWidth = ${Number((1 * size).toFixed(2))};`);
      if (mode === "light") {
        next = next
          .replace(
            "ctx.strokeStyle = `rgba(255, 255, 255, ${0.28 + (1 - dist / 120) * 0.42})`;",
            `ctx.strokeStyle = \`rgba(26, 31, 42, \${0.28 + (1 - dist / ${link}) * 0.42})\`;`,
          )
          .replace("ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';", `ctx.fillStyle = 'rgba(26, 31, 42, 0.85)';`);
      } else {
        // Keep stroke alpha formula in sync with baked link distance on dark path.
        next = next.replace(
          "ctx.strokeStyle = `rgba(255, 255, 255, ${0.28 + (1 - dist / 120) * 0.42})`;",
          `ctx.strokeStyle = \`rgba(255, 255, 255, \${0.28 + (1 - dist / ${link}) * 0.42})\`;`,
        );
      }
      return next;
    },
  },
  wireframeForms: {
    title: "Wireframe Forms",
    source: wireframeFormsSource,
    supportsMode: true,
    background: (mode) => (mode === "light" ? LIGHT_PAPER : "#050505"),
    targets: [{ selector: "main", role: "ui", width: "1040px" }],
    focusCss: `
main {
  display: flex !important;
  flex-direction: row !important;
  flex-wrap: wrap !important;
  align-items: center !important;
  justify-content: center !important;
  gap: clamp(1rem, 3vw, 2.5rem) !important;
  height: auto !important;
  min-height: 0 !important;
  padding: 1.5rem !important;
  background: transparent !important;
  border: 0 !important;
  box-shadow: none !important;
  grid-template-columns: none !important;
}
main > .absolute { display: none !important; }
main > .group {
  height: auto !important;
  min-height: 0 !important;
  padding: 0 !important;
  overflow: visible !important;
  background: transparent !important;
  flex: 0 0 auto !important;
  width: min(72vw, 480px) !important;
}
main > .group:not([data-wireframe-selected]) { display: none !important; }
main > .group > :not([data-wireframe-visual]) { display: none !important; }
main > .group > [data-wireframe-visual] {
  padding: 0 !important;
  flex-grow: 0 !important;
  width: 100% !important;
  aspect-ratio: 1 !important;
}
main > .group > [data-wireframe-visual] > :not(canvas) { display: none !important; }
#canvas1, #canvas2, #canvas3 {
  width: 100% !important;
  max-width: none !important;
  height: 100% !important;
  opacity: 1 !important;
  mix-blend-mode: normal !important;
}
`,
    patch(source, { variant, size, length, mode }) {
      const selectedVariant = resolveWireframeVariant(variant);
      const selectedSection = {
        cube: "<!-- Section 01: Hypercube -->",
        cylinders: "<!-- Section 02: Logic Cylinders -->",
        sphere: "<!-- Section 03: Esoteric Sphere -->",
      }[selectedVariant];
      let next = source
        .replace(
          `${selectedSection}\n        <div class="group`,
          `${selectedSection}\n        <div data-wireframe-selected="${selectedVariant}" class="group`,
        )
        .replace("this.angleY += 0.005;", "this.angleY += 0.005 * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);")
        .replace("this.angleX += 0.002;", "this.angleX += 0.002 * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);")
        .replace("const s = 80;", `const s = ${Math.round(80 * length)};`)
        .replace("const r = 70;", `const r = ${Math.round(70 * length)};`)
        .replace("const s = 50; ", `const s = ${Math.round(50 * length)}; `)
        .replace("this.ctx.lineWidth = 0.8;", `this.ctx.lineWidth = ${Number((0.8 * size).toFixed(2))};`);
      if (mode === "light") {
        next = next
          .replace(
            "this.ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.4})`;",
            "this.ctx.strokeStyle = `rgba(26, 31, 42, ${alpha * 0.45})`;",
          )
          .replace(
            "this.ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;",
            "this.ctx.fillStyle = `rgba(26, 31, 42, ${alpha})`;",
          );
      }
      return next;
    },
  },
  defenseLines: {
    title: "Defense Lines",
    source: defenseLinesSource,
    supportsMode: true,
    background: (mode) => (mode === "light" ? "#f4ecec" : "#120303"),
    targets: [{ selector: "#bg-canvas", role: "background" }],
    patch(source, { size, length, density, mode }) {
      let next = source
        .replace(
          "const particleCount = window.innerWidth < 768 ? 40 : 100;",
          `const particleCount = window.innerWidth < 768 ? ${scaleCount(40, density, 8)} : ${scaleCount(100, density, 16)};`,
        )
        .replace("baseLength: Math.random() * 80 + 20,", `baseLength: (Math.random() * 80 + 20) * ${length},`)
        .replace(
          "p.y -= p.speedY * 1.5 * (1 + centerProximity * 0.5);",
          "p.y -= p.speedY * 1.5 * (1 + centerProximity * 0.5) * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);",
        )
        .replace("ctx.lineWidth = 0.5;", `ctx.lineWidth = ${Number((0.5 * size).toFixed(2))};`);
      if (mode === "light") {
        // Slightly deeper crimson so rain lines stay crisp on pale rose paper.
        next = next
          .replaceAll("rgba(220, 38, 38, 0)", "rgba(153, 27, 27, 0)")
          .replace("grad.addColorStop(0.5, `rgba(255, ${38 + brightness}, ${38 + brightness}, ${currentOpacity})`);", "grad.addColorStop(0.5, `rgba(185, ${20 + brightness * 0.55}, ${20 + brightness * 0.55}, ${currentOpacity})`);");
      }
      return next;
    },
  },
  overrideGrid: {
    title: "Override Grid",
    source: overrideGridSource,
    supportsMode: true,
    background: (mode) => (mode === "light" ? LIGHT_PAPER : "#050505"),
    targets: [{ selector: "#grid-canvas", role: "background" }],
    patch(source, { size, gap, mode }) {
      const blockSize = Math.max(8, Math.round(size));
      const blockGap = Math.max(0, Math.round(gap));
      let next = source
        .replace("const blockSize = 48;", `const blockSize = ${blockSize};`)
        .replace("const blockGap = 2;", `const blockGap = ${blockGap};`)
        .replace("time += 0.04;", "time += 0.04 * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);");
      if (mode === "light") {
        next = next.replace(
          "ctx.fillStyle = `rgba(249, 115, 22, ${alpha})`;",
          "ctx.fillStyle = `rgba(194, 65, 12, ${alpha * 1.35})`;",
        );
      }
      return next;
    },
  },
  topoField: {
    title: "Topo Field",
    source: topoFieldSource,
    supportsMode: true,
    background: (mode) => (mode === "light" ? LIGHT_PAPER : "#000000"),
    targets: [{ selector: "#topo-canvas", role: "background" }],
    patch(source, { length, density, mode }) {
      let next = source
        .replace("float noiseScale = 1.4;", `float noiseScale = ${glslFloat(1.4 * length, 3)};`)
        .replace("float numBands = 10.0;", `float numBands = ${glslFloat(10 * density, 2)};`);
      if (mode === "light") {
        // Additive white-on-black does not invert cleanly — mix paper toward ink by line strength.
        next = next
          .replace("gridLines = clamp(gridLines, 0.0, 1.0) * 0.12;", "gridLines = clamp(gridLines, 0.0, 1.0) * 0.55;")
          .replace(
            "float topoLines = smoothstep(0.02, 0.00, triangleWave) * 0.45;",
            "float topoLines = smoothstep(0.03, 0.00, triangleWave) * 0.95;",
          )
          .replace(
            "vec3 color = vec3(0.0);\n                    color += vec3(1.0) * gridLines;\n                    color += vec3(1.0) * topoLines;",
            "vec3 paper = vec3(0.933, 0.945, 0.965);\n                    vec3 ink = vec3(0.12, 0.14, 0.18);\n                    float lines = clamp(gridLines + topoLines, 0.0, 1.0);\n                    vec3 color = mix(paper, ink, lines);",
          );
      }
      return next;
    },
  },
} as const satisfies Record<string, EffectDefinition>;

function buildFocusedDocument(
  definition: EffectDefinition,
  knobs: BakeKnobs & {
    speed: number;
    opacity: number;
  },
) {
  const mode = knobs.mode;
  const background = resolveBackground(definition.background, mode);
  const targetJson = JSON.stringify(definition.targets).replace(/</g, "\\u003c");
  const controlsJson = JSON.stringify({
    mode,
    speed: knobs.speed,
    size: knobs.size,
    gap: knobs.gap,
    length: knobs.length,
    density: knobs.density,
    strokeWidth: knobs.strokeWidth,
    opacity: knobs.opacity,
  }).replace(/</g, "\\u003c");
  const patchedSource = definition.patch
    ? definition.patch(definition.source, {
        variant: knobs.variant,
        size: knobs.size,
        gap: knobs.gap,
        length: knobs.length,
        density: knobs.density,
        strokeWidth: knobs.strokeWidth,
        mode,
      })
    : definition.source;
  const focusStyle = `<style data-threeui-focus>
html, body { width: 100% !important; height: 100% !important; min-height: 0 !important; margin: 0 !important; padding: 0 !important; overflow: hidden !important; background: ${background} !important; }
body { position: relative !important; display: flex !important; align-items: center !important; justify-content: center !important; }
body > * { visibility: hidden !important; }
body[data-threeui-ready] > [data-threeui-role] { visibility: visible !important; }
[data-threeui-residual] { display: none !important; }
[data-threeui-role="background"] { position: fixed !important; inset: 0 !important; width: 100% !important; height: 100% !important; max-width: none !important; max-height: none !important; z-index: 0 !important; opacity: 1 !important; pointer-events: none !important; }
[data-threeui-role="ui"] { position: relative !important; z-index: 1 !important; width: min(calc(100% - 32px), var(--threeui-target-width, 1040px)) !important; max-width: none !important; max-height: calc(100% - 32px) !important; margin: auto !important; overflow: auto !important; opacity: 1 !important; transform: none !important; filter: none !important; flex: none !important; box-sizing: border-box !important; }
${definition.focusCss ?? ""}
</style>`;
  const controlScript = `<script data-threeui-controls>
(function () {
  var controls = ${controlsJson};
  window.__SF_CONTROLS = controls;
  var origin = performance.now();
  var virtual = 0;
  var last = origin;
  var performanceNow = performance.now.bind(performance);
  var dateNow = Date.now.bind(Date);
  var dateOrigin = dateNow();
  performance.now = function () {
    var real = performanceNow();
    virtual += (real - last) * (controls.speed || 1);
    last = real;
    return origin + virtual;
  };
  Date.now = function () {
    return dateOrigin + (performance.now() - origin);
  };
  var raf = window.requestAnimationFrame.bind(window);
  window.requestAnimationFrame = function (callback) {
    return raf(function () {
      callback(performance.now());
    });
  };
  function applyVisual() {
    var opacity = controls.opacity == null ? 1 : controls.opacity;
    var size = controls.size == null ? 1 : controls.size;
    Array.prototype.forEach.call(document.querySelectorAll('[data-threeui-role]'), function (element) {
      element.style.opacity = String(opacity);
      if (element.getAttribute('data-threeui-role') === 'ui') {
        element.style.transform = 'scale(' + size + ')';
        element.style.transformOrigin = 'center center';
      }
    });
  }
  window.addEventListener('message', function (event) {
    if (!event.data || event.data.type !== 'threeui-controls') return;
    var next = event.data.controls || {};
    Object.keys(next).forEach(function (key) { controls[key] = next[key]; });
    applyVisual();
  });
  window.__SF_APPLY_CONTROLS = applyVisual;
})();
</script>`;
  const focusScript = `<script data-threeui-focus>
(function () {
  var isolated = false;
  function isolate() {
    if (isolated) return;
    var specs = ${targetJson};
    var roots = [];
    specs.forEach(function (spec) {
      var element = document.querySelector(spec.selector);
      if (!element) return;
      element.setAttribute('data-threeui-role', spec.role);
      if (spec.width) element.style.setProperty('--threeui-target-width', spec.width);
      if (!roots.some(function (root) { return root.contains(element); })) roots.push(element);
    });
    if (!roots.length) return;
    isolated = true;
    roots.forEach(function (root) { document.body.appendChild(root); });
    Array.from(document.body.children).forEach(function (element) {
      if (roots.indexOf(element) !== -1) return;
      element.setAttribute('data-threeui-residual', '');
      element.setAttribute('aria-hidden', 'true');
      if ('inert' in element) element.inert = true;
    });
    document.body.setAttribute('data-threeui-ready', '');
    if (window.__SF_APPLY_CONTROLS) window.__SF_APPLY_CONTROLS();
    requestAnimationFrame(function () { window.dispatchEvent(new Event('resize')); });
  }
  function scheduleIsolation() { setTimeout(isolate, 100); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', scheduleIsolation, { once: true });
  else scheduleIsolation();
  window.addEventListener('load', isolate, { once: true });
})();
</script>`;
  return patchedSource
    .replace(/<head([^>]*)>/i, `<head$1>${controlScript}${focusStyle}`)
    .replace(/<\/body>/i, `${focusScript}</body>`);
}

function NeuformBatchEffect({
  definition,
  variant = "cube",
  mode,
  speed = NEUFORM_BATCH_DEFAULTS.speed,
  size = NEUFORM_BATCH_DEFAULTS.size,
  gap = NEUFORM_BATCH_DEFAULTS.gap,
  length = NEUFORM_BATCH_DEFAULTS.length,
  density = NEUFORM_BATCH_DEFAULTS.density,
  strokeWidth = NEUFORM_BATCH_DEFAULTS.strokeWidth,
  opacity = NEUFORM_BATCH_DEFAULTS.opacity,
  hue = NEUFORM_BATCH_DEFAULTS.hue,
  saturation = NEUFORM_BATCH_DEFAULTS.saturation,
  brightness = NEUFORM_BATCH_DEFAULTS.brightness,
  className,
  style,
}: NeuformBatchEffectProps & { definition: EffectDefinition }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const requestedMode = mode ?? definition.defaultMode ?? NEUFORM_BATCH_DEFAULTS.mode;
  const automaticMode = useAutomaticMode(requestedMode === "auto");
  const resolvedMode = requestedMode === "auto"
    ? automaticMode
    : resolveMode(requestedMode, NEUFORM_BATCH_DEFAULTS.mode);
  const background = resolveBackground(definition.background, resolvedMode);
  const safeSpeed = clamp(speed, 0, 3);
  // Size accepts both multipliers (most effects) and absolute pixels (override grid).
  const safeSize = clamp(size, 0.05, 200);
  const safeGap = clamp(gap, 0, 64);
  const safeLength = clamp(length, 0.35, 2.5);
  const safeDensity = clamp(density, 0.25, 2.5);
  const safeStrokeWidth = clamp(strokeWidth, 0.25, 8);
  const safeOpacity = clamp(opacity, 0.05, 1);
  const safeHue = clamp(hue, -180, 180);
  const safeSaturation = clamp(saturation, 0, 2);
  const safeBrightness = clamp(brightness, 0.35, 1.65);

  // Rebuild when baked geometry/mode knobs change. Speed/opacity stay live via postMessage + time wrap.
  const source = useMemo(
    () =>
      buildFocusedDocument(definition, {
        variant,
        mode: resolvedMode,
        speed: NEUFORM_BATCH_DEFAULTS.speed,
        size: safeSize,
        gap: safeGap,
        length: safeLength,
        density: safeDensity,
        strokeWidth: safeStrokeWidth,
        opacity: NEUFORM_BATCH_DEFAULTS.opacity,
      }),
    [definition, resolvedMode, safeDensity, safeGap, safeLength, safeSize, safeStrokeWidth, variant],
  );

  useEffect(() => {
    const frame = iframeRef.current?.contentWindow;
    if (!frame) return;
    frame.postMessage(
      {
        type: "threeui-controls",
        controls: {
          mode: resolvedMode,
          speed: safeSpeed,
          size: safeSize,
          gap: safeGap,
          length: safeLength,
          density: safeDensity,
          strokeWidth: safeStrokeWidth,
          opacity: safeOpacity,
        },
      },
      "*",
    );
  }, [resolvedMode, safeDensity, safeGap, safeLength, safeOpacity, safeSize, safeSpeed, safeStrokeWidth, source]);

  const filter =
    safeHue === 0 && safeSaturation === 1 && safeBrightness === 1
      ? undefined
      : `hue-rotate(${safeHue}deg) saturate(${safeSaturation}) brightness(${safeBrightness})`;

  return (
    <iframe
      ref={iframeRef}
      className={className}
      title={definition.title}
      srcDoc={source}
      sandbox="allow-scripts"
      loading="eager"
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        border: 0,
        background,
        filter,
        ...style,
      }}
    />
  );
}

function createEffectComponent(definition: EffectDefinition) {
  return function EffectComponent(props: NeuformBatchEffectProps) {
    return <NeuformBatchEffect {...props} definition={definition} />;
  };
}

export const ConstellationField = createEffectComponent(EFFECTS.constellationField);
export const ParticleDrift = createEffectComponent(EFFECTS.particleDrift);
export const ParticleNetwork = createEffectComponent(EFFECTS.particleNetwork);
export const FluxVortex = createEffectComponent(EFFECTS.fluxVortex);
export const PortalField = createEffectComponent(EFFECTS.portalField);
export const FlowField = createEffectComponent(EFFECTS.flowField);
export const AmberHalftone = createEffectComponent(EFFECTS.amberHalftone);
const DIAGNOSTICS_PANEL_VARIANTS = {
  layers: EFFECTS.diagnosticsLayers,
  nodes: EFFECTS.diagnosticsNodes,
  flow: EFFECTS.diagnosticsFlow,
} as const;

export type DiagnosticsPanelVariant = keyof typeof DIAGNOSTICS_PANEL_VARIANTS;

export const DIAGNOSTICS_PANEL_DEFAULTS = {
  ...NEUFORM_BATCH_DEFAULTS,
  variant: "layers",
} as const;

export function DiagnosticsPanel({
  variant = DIAGNOSTICS_PANEL_DEFAULTS.variant,
  ...props
}: NeuformBatchEffectProps & { variant?: DiagnosticsPanelVariant }) {
  const definition = DIAGNOSTICS_PANEL_VARIANTS[variant] ?? DIAGNOSTICS_PANEL_VARIANTS.layers;
  return <NeuformBatchEffect {...props} definition={definition} />;
}
export const SignalParticles = createEffectComponent(EFFECTS.signalParticles);
export const SkeuomorphicToggle = createEffectComponent(EFFECTS.skeuomorphicToggle);
export const MatrixField = createEffectComponent(EFFECTS.matrixField);
export const GatewayFlow = createEffectComponent(EFFECTS.gatewayFlow);
export const ConnectivityGraph = createEffectComponent(EFFECTS.connectivityGraph);
export const InterfaceLines = createEffectComponent(EFFECTS.interfaceLines);
export const WireframeForms = createEffectComponent(EFFECTS.wireframeForms);
export const DefenseLines = createEffectComponent(EFFECTS.defenseLines);
export const OverrideGrid = createEffectComponent(EFFECTS.overrideGrid);
export const TopoField = createEffectComponent(EFFECTS.topoField);
```

### `src/shaders/neuform-isolated/sources/amber-halftone.html`

Role: canonical-source · 331 lines · 16324 bytes · SHA-256 `3d9ebb64a15a1985c4cef1f01457281a49b2d9900405fd674e8748cac8af00a0`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aegis Security - Remixed Bento</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Space+Mono&display=swap" rel="stylesheet">
</head>
<body class="bg-[#111111] text-black antialiased min-h-screen flex items-center justify-center p-4 md:p-8 lg:p-12 overflow-x-hidden selection:bg-yellow-300 selection:text-black" style="font-family: 'Space Mono', monospace;">

    <!-- Bento Grid Container -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full max-w-5xl mx-auto min-h-[85vh] py-8">
        
        <!-- Card 1: Grainy / Light (Black Globe) -->
        <article class="col-span-1 relative w-full h-[500px] md:h-auto min-h-[450px] rounded-[2rem] flex flex-col justify-between p-8 overflow-hidden shadow-2xl border border-transparent" style="background: linear-gradient(#f4f4f0, #f4f4f0) padding-box, linear-gradient(135deg, #ffffff 0%, #d1d5db 100%) border-box;">
            <!-- Noise Overlay -->
            <div class="absolute inset-0 z-10 pointer-events-none opacity-[0.15]" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E'); mix-blend-mode: multiply;"></div>
            
            <!-- WebGL Background -->
            <div class="absolute inset-0 z-0 top-1/4">
                <canvas id="webgl-lines" class="w-full h-full opacity-60"></canvas>
            </div>

            <!-- Header -->
            <header class="relative z-20 flex justify-between items-center text-sm tracking-tight font-normal">
                <div class="flex items-center gap-1.5">
                    <iconify-icon icon="solar:shield-network-linear" width="20" height="20" style="stroke-width: 1.5;"></iconify-icon>
                    <span>aegis</span>
                </div>
                <span class="text-xs opacity-50 uppercase tracking-widest">Sector.01</span>
            </header>

            <!-- Main Content -->
            <main class="relative z-20 mt-auto">
                <h2 class="text-3xl md:text-4xl tracking-tight leading-[1.1] mb-4 masked-reveal">
                    Absolute stealth.<br>Zero presence.
                </h2>
                <p class="text-xs leading-relaxed font-sans max-w-[220px] text-black/70 masked-reveal" style="font-family: 'Inter', sans-serif;">
                    Your network footprint.<br>Entirely eradicated.
                </p>
            </main>
        </article>

        <!-- Card 2: Yellow Grid + Aura Asset Image -->
        <article class="col-span-1 relative w-full h-[500px] md:h-auto min-h-[450px] rounded-[2rem] flex flex-col justify-between p-8 overflow-hidden shadow-2xl border border-transparent" style="background: linear-gradient(#FDE047, #FDE047) padding-box, linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(202,138,4,0.4) 100%) border-box;">
            
            <!-- Aura Asset Image Background -->
            <div class="absolute inset-0 z-0 opacity-40 mix-blend-multiply pointer-events-none">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/724142aa-44a6-48d3-9cf3-761e00d05b78_1600w.jpg" class="w-full h-full object-cover" alt="Futuristic Deconstructed Pyramid">
            </div>

            <!-- Grid Background Overlay -->
            <div class="absolute inset-0 z-0 opacity-[0.15] pointer-events-none" style="background-image: linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px); background-size: 1.5rem 1.5rem;"></div>

            <!-- Header -->
            <header class="relative z-20 flex justify-between items-center text-sm tracking-tight font-normal">
                <div class="flex items-center gap-1.5">
                    <iconify-icon icon="solar:shield-network-linear" width="20" height="20" style="stroke-width: 1.5;"></iconify-icon>
                    <span>aegis</span>
                </div>
                <span class="text-xs opacity-50 uppercase tracking-widest">Sector.02</span>
            </header>

            <!-- Main Content -->
            <main class="relative z-20 mt-auto">
                <h2 class="text-3xl md:text-4xl tracking-tight leading-[1.1] masked-reveal">
                    Adaptive shields.<br>Total autonomy.
                </h2>
            </main>
        </article>

        <!-- Card 3: Black Halftone -->
        <article class="col-span-1 md:col-span-2 relative w-full h-[450px] md:h-[350px] rounded-[2rem] flex flex-col md:flex-row justify-between p-8 overflow-hidden text-white shadow-2xl border border-transparent" style="font-family: 'Inter', sans-serif; background: linear-gradient(#0A0A0A, #0A0A0A) padding-box, linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 100%) border-box;">
            
            <!-- WebGL Halftone Background -->
            <div class="absolute inset-0 z-0 md:left-1/3 pointer-events-none">
                <canvas id="webgl-halftone" class="w-full h-full"></canvas>
            </div>

            <!-- Header (Left on desktop) -->
            <header class="relative z-20 flex md:flex-col justify-between md:justify-start items-center md:items-start text-sm tracking-tight font-normal text-white/90 gap-4" style="font-family: 'Space Mono', monospace;">
                <div class="flex items-center gap-1.5">
                    <iconify-icon icon="solar:shield-network-linear" width="20" height="20" class="text-yellow-400" style="stroke-width: 1.5;"></iconify-icon>
                    <span>aegis</span>
                </div>
                <span class="text-xs opacity-50 uppercase tracking-widest">Sector.03</span>
            </header>

            <!-- Main Content (Right on desktop) -->
            <main class="relative z-20 mt-auto md:mt-0 md:self-end md:text-right max-w-md w-full">
                <h2 class="text-4xl md:text-5xl tracking-tight leading-[1.1] font-normal mb-4 md:mb-6 uppercase masked-reveal">
                    Quantum<br>Core.
                </h2>
                <p class="text-xs leading-relaxed text-white/70 md:ml-auto md:max-w-[240px] masked-reveal" style="font-family: 'Space Mono', monospace;">
                    Next-gen cryptography<br>for modern infrastructure.
                </p>
            </main>
        </article>

    </div>

    <script>
        // GSAP ScrollTrigger Setup
        gsap.registerPlugin(ScrollTrigger);

        // Utility: Split text into words and wrap for masking
        function wrapWords(element) {
            const text = element.innerHTML;
            const words = text.split(/(<br>|\s+)/).filter(Boolean);
            element.innerHTML = '';
            
            words.forEach(word => {
                if (word === '<br>') {
                    element.appendChild(document.createElement('br'));
                    return;
                }
                if (word.trim() === '') {
                    element.appendChild(document.createTextNode(' '));
                    return;
                }

                const outerSpan = document.createElement('span');
                outerSpan.style.display = 'inline-block';
                outerSpan.style.overflow = 'hidden';
                outerSpan.style.verticalAlign = 'bottom';
                outerSpan.style.paddingBottom = '0.1em'; // Prevent clipping on descenders

                const innerSpan = document.createElement('span');
                innerSpan.style.display = 'inline-block';
                innerSpan.innerHTML = word;
                innerSpan.classList.add('reveal-target');
                innerSpan.style.transform = 'translateY(110%)';
                innerSpan.style.willChange = 'transform';

                outerSpan.appendChild(innerSpan);
                element.appendChild(outerSpan);
            });
        }

        // Apply masking structure and animation
        document.querySelectorAll('.masked-reveal').forEach(el => {
            wrapWords(el);
            
            gsap.to(el.querySelectorAll('.reveal-target'), {
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%",
                    toggleActions: "play none none reverse"
                },
                y: "0%",
                duration: 0.85,
                ease: "power4.out",
                stagger: 0.04
            });
        });

        /* --- WebGL Section 1: Abstract Lines --- */
        const initLinesWebGL = () => {
            const canvas = document.getElementById('webgl-lines');
            if(!canvas) return;
            const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
            
            const resize = () => {
                const parent = canvas.parentElement;
                const width = parent.clientWidth;
                const height = parent.clientHeight;
                renderer.setSize(width, height);
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
            };
            window.addEventListener('resize', resize);
            resize();

            camera.position.z = 4.5;

            const group = new THREE.Group();
            scene.add(group);

            const material = new THREE.LineBasicMaterial({ color: 0x111111, transparent: true, opacity: 0.85 }); 
            const particlesCount = 200;
            
            const geometry = new THREE.BufferGeometry();
            const positions = new Float32Array(particlesCount * 3);
            
            for(let i = 0; i < particlesCount * 3; i+=3) {
                const r = 2.5;
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.acos((Math.random() * 2) - 1);
                
                positions[i] = r * Math.sin(phi) * Math.cos(theta);
                positions[i+1] = r * Math.sin(phi) * Math.sin(theta);
                positions[i+2] = r * Math.cos(phi);
            }
            
            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            
            const index = [];
            for (let i = 0; i < particlesCount; i++) {
                for (let j = i + 1; j < particlesCount; j++) {
                    const dx = positions[i*3] - positions[j*3];
                    const dy = positions[i*3+1] - positions[j*3+1];
                    const dz = positions[i*3+2] - positions[j*3+2];
                    const distSq = dx*dx + dy*dy + dz*dz;
                    if (distSq < 1.2) { 
                        index.push(i, j);
                    }
                }
            }
            geometry.setIndex(index);
            
            const lines = new THREE.LineSegments(geometry, material);
            group.add(lines);

            const animate = () => {
                requestAnimationFrame(animate);
                group.rotation.y += 0.002;
                group.rotation.x += 0.001;
                renderer.render(scene, camera);
            };
            animate();
        };

        /* --- WebGL Section 3: Animated Halftone --- */
        const initHalftoneWebGL = () => {
            const canvas = document.getElementById('webgl-halftone');
            if(!canvas) return;
            const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
            renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
            renderer.setClearColor(0x0A0A0A, 1);
            const scene = new THREE.Scene();
            const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
            
            const resize = () => {
                const parent = canvas.parentElement;
                const width = Math.max(1, (parent && parent.clientWidth) || window.innerWidth || canvas.clientWidth || 1);
                const height = Math.max(1, (parent && parent.clientHeight) || window.innerHeight || canvas.clientHeight || 1);
                renderer.setSize(width, height, false);
                canvas.style.width = '100%';
                canvas.style.height = '100%';
                const aspect = width / height;
                camera.left = -aspect;
                camera.right = aspect;
                camera.bottom = -1;
                camera.top = 1;
                camera.updateProjectionMatrix();
            };
            window.addEventListener('resize', resize);
            resize();
            camera.position.z = 1;

            const gridSize = 20;
            const geometry = new THREE.BufferGeometry();
            const positions = [];
            const scales = [];

            for (let x = -gridSize; x <= gridSize; x++) {
                for (let y = -gridSize; y <= gridSize; y++) {
                    positions.push(x * 0.15, y * 0.15, 0);
                    scales.push(1); 
                }
            }

            geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
            geometry.setAttribute('scale', new THREE.Float32BufferAttribute(scales, 1));

            const material = new THREE.ShaderMaterial({
                uniforms: {
                    time: { value: 0 },
                    color1: { value: new THREE.Color(0xFBBF24) }, 
                    color2: { value: new THREE.Color(0xFFFFFF) }
                },
                vertexShader: `
                    attribute float scale;
                    varying vec2 vUv;
                    varying float vScale;
                    uniform float time;
                    
                    void main() {
                        vUv = position.xy;
                        float dist = length(position.xy);
                        float animatedScale = scale * (sin(dist * 6.0 - time * 2.5) * 0.5 + 0.5);
                        vScale = animatedScale;
                        
                        gl_PointSize = animatedScale * 5.0; 
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }
                `,
                fragmentShader: `
                    uniform vec3 color1;
                    uniform vec3 color2;
                    varying vec2 vUv;
                    varying float vScale;
                    
                    void main() {
                        vec2 coord = gl_PointCoord - vec2(0.5);
                        if(length(coord) > 0.5) discard;
                        
                        vec3 finalColor = mix(color2, color1, (vUv.y + 1.0) * 0.5);
                        gl_FragColor = vec4(finalColor, vScale * 0.9);
                    }
                `,
                transparent: true
            });

            const points = new THREE.Points(geometry, material);
            scene.add(points);

            const clock = new THREE.Clock();
            const animate = () => {
                requestAnimationFrame(animate);
                material.uniforms.time.value = clock.getElapsedTime();
                renderer.render(scene, camera);
            };
            animate();
        };

        // Initialize WebGL instances
        initLinesWebGL();
        initHalftoneWebGL();
    </script>
</body>
</html>
```

### `src/shaders/neuform-isolated/sources/signal-particles.html`

Role: canonical-source · 273 lines · 33027 bytes · SHA-256 `613a2005d18795dbc25a5d0f93c3ae4dfecdfcb939ea6e2c5702b82eb1e4bfff`

```html
<!doctype html>
<html lang="en" data-autofocus-guard-installed="1"><head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vanguard Security - Intelligence</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
    <!-- GSAP for Masked Reveal -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
<style>*, ::before, ::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }/* ! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com */*,::after,::before{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}::after,::before{--tw-content:''}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:0px}.top-0{top:0px}.z-0{z-index:0}.z-50{z-index:50}.z-10{z-index:10}.mx-4{margin-left:1rem;margin-right:1rem}.mx-auto{margin-left:auto;margin-right:auto}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.mt-2{margin-top:0.5rem}.mt-auto{margin-top:auto}.flex{display:flex}.grid{display:grid}.h-1{height:0.25rem}.h-32{height:8rem}.h-\[65vh\]{height:65vh}.h-full{height:100%}.min-h-screen{min-height:100vh}.min-h-\[500px\]{min-height:500px}.w-full{width:100%}.max-w-2xl{max-width:42rem}.max-w-4xl{max-width:56rem}.max-w-7xl{max-width:80rem}.max-w-\[40px\]{max-width:40px}.grid-cols-1{grid-template-columns:repeat(1, minmax(0, 1fr))}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.items-end{align-items:flex-end}.items-center{align-items:center}.items-baseline{align-items:baseline}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1\.5{gap:0.375rem}.gap-2{gap:0.5rem}.gap-3{gap:0.75rem}.gap-6{gap:1.5rem}.gap-\[2px\]{gap:2px}.overflow-hidden{overflow:hidden}.rounded{border-radius:0.25rem}.rounded-md{border-radius:0.375rem}.rounded-sm{border-radius:0.125rem}.rounded-xl{border-radius:0.75rem}.border-b{border-bottom-width:1px}.border-white\/5{border-color:rgb(255 255 255 / 0.05)}.bg-\[\#0a0a0a\]{--tw-bg-opacity:1;background-color:rgb(10 10 10 / var(--tw-bg-opacity, 1))}.bg-\[\#0a0a0a\]\/80{background-color:rgb(10 10 10 / 0.8)}.bg-\[\#1a1a1a\]{--tw-bg-opacity:1;background-color:rgb(26 26 26 / var(--tw-bg-opacity, 1))}.bg-blue-600{--tw-bg-opacity:1;background-color:rgb(37 99 235 / var(--tw-bg-opacity, 1))}.bg-\[\#121212\]{--tw-bg-opacity:1;background-color:rgb(18 18 18 / var(--tw-bg-opacity, 1))}.bg-blue-500\/80{background-color:rgb(59 130 246 / 0.8)}.bg-purple-500\/80{background-color:rgb(168 85 247 / 0.8)}.bg-slate-500{--tw-bg-opacity:1;background-color:rgb(100 116 139 / var(--tw-bg-opacity, 1))}.p-6{padding:1.5rem}.px-1\.5{padding-left:0.375rem;padding-right:0.375rem}.px-3{padding-left:0.75rem;padding-right:0.75rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-0\.5{padding-top:0.125rem;padding-bottom:0.125rem}.py-1\.5{padding-top:0.375rem;padding-bottom:0.375rem}.py-4{padding-top:1rem;padding-bottom:1rem}.py-12{padding-top:3rem;padding-bottom:3rem}.pt-16{padding-top:4rem}.pt-6{padding-top:1.5rem}.text-center{text-align:center}.font-sans{font-family:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"}.text-base{font-size:1rem;line-height:1.5rem}.text-xs{font-size:0.75rem;line-height:1rem}.text-5xl{font-size:3rem;line-height:1}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:0.875rem;line-height:1.25rem}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.font-light{font-weight:300}.leading-relaxed{line-height:1.625}.leading-tight{line-height:1.25}.tracking-tight{letter-spacing:-0.025em}.tracking-wide{letter-spacing:0.025em}.text-slate-200{--tw-text-opacity:1;color:rgb(226 232 240 / var(--tw-text-opacity, 1))}.text-slate-300{--tw-text-opacity:1;color:rgb(203 213 225 / var(--tw-text-opacity, 1))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.text-slate-400{--tw-text-opacity:1;color:rgb(148 163 184 / var(--tw-text-opacity, 1))}.text-slate-500{--tw-text-opacity:1;color:rgb(100 116 139 / var(--tw-text-opacity, 1))}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.opacity-80{opacity:0.8}.backdrop-blur-md{--tw-backdrop-blur:blur(12px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition-colors{transition-property:color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.duration-300{transition-duration:300ms}.selection\:bg-blue-500\/30 *::selection{background-color:rgb(59 130 246 / 0.3)}.selection\:bg-blue-500\/30::selection{background-color:rgb(59 130 246 / 0.3)}.before\:absolute::before{content:var(--tw-content);position:absolute}.before\:inset-0::before{content:var(--tw-content);inset:0px}.before\:-z-10::before{content:var(--tw-content);z-index:-10}.before\:rounded-md::before{content:var(--tw-content);border-radius:0.375rem}.before\:rounded-xl::before{content:var(--tw-content);border-radius:0.75rem}.before\:bg-gradient-to-b::before{content:var(--tw-content);background-image:linear-gradient(to bottom, var(--tw-gradient-stops))}.before\:from-white\/20::before{content:var(--tw-content);--tw-gradient-from:rgb(255 255 255 / 0.2) var(--tw-gradient-from-position);--tw-gradient-to:rgb(255 255 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.before\:from-white\/15::before{content:var(--tw-content);--tw-gradient-from:rgb(255 255 255 / 0.15) var(--tw-gradient-from-position);--tw-gradient-to:rgb(255 255 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.before\:to-transparent::before{content:var(--tw-content);--tw-gradient-to:transparent var(--tw-gradient-to-position)}.before\:p-\[1px\]::before{content:var(--tw-content);padding:1px}.before\:transition-colors::before{content:var(--tw-content);transition-property:color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.before\:duration-500::before{content:var(--tw-content);transition-duration:500ms}.before\:\[mask-composite\:exclude\]::before{content:var(--tw-content);-webkit-mask-composite:xor;mask-composite:exclude}.before\:\[mask\:linear-gradient\(\#fff_0_0\)_content-box\2c linear-gradient\(\#fff_0_0\)\]::before{content:var(--tw-content);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0)}.hover\:bg-\[\#222\]:hover{--tw-bg-opacity:1;background-color:rgb(34 34 34 / var(--tw-bg-opacity, 1))}.hover\:before\:from-white\/25:hover::before{content:var(--tw-content);--tw-gradient-from:rgb(255 255 255 / 0.25) var(--tw-gradient-from-position);--tw-gradient-to:rgb(255 255 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.group:hover .group-hover\:opacity-100{opacity:1}@media (min-width: 768px){.md\:grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr))}.md\:text-7xl{font-size:4.5rem;line-height:1}.md\:text-xl{font-size:1.25rem;line-height:1.75rem}}@media (min-width: 1024px){.lg\:grid-cols-3{grid-template-columns:repeat(3, minmax(0, 1fr))}.lg\:text-2xl{font-size:1.5rem;line-height:2rem}.lg\:text-8xl{font-size:6rem;line-height:1}}</style><meta name="disabled-font-classes" content="font-inter,font-roboto,font-poppins,font-playfair,font-merriweather,font-bricolage,font-work-sans,font-pt-serif,font-space-mono,font-cormorant,font-newsreader,font-dm-sans,font-oswald,font-geist-mono,font-space-grotesk,font-montserrat,font-quicksand,font-google-sans-flex,font-nunito,font-geist,font-jakarta,font-instrument-serif"><link id="all-fonts-link-font-manrope" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&amp;display=swap"><style id="all-fonts-style-font-manrope">.font-manrope { font-family: 'Manrope', sans-serif !important; }</style></head>
<body class="bg-[#0a0a0a] text-slate-200 min-h-screen selection:bg-blue-500/30 antialiased font-sans">

    <!-- Header -->
    <header class="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div class="flex items-center gap-2">
            <span class="text-base text-white tracking-tight font-medium font-sans">Vanguard</span>
            <span class="bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded tracking-wide font-sans">Security</span>
        </div>
        <button class="relative flex items-center gap-1.5 bg-[#1a1a1a] hover:bg-[#222] transition-colors text-slate-300 text-xs px-3 py-1.5 rounded-md z-0 before:absolute before:inset-0 before:-z-10 before:rounded-md before:p-[1px] before:bg-gradient-to-b before:from-white/20 before:to-transparent before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude] before:[WebkitMaskComposite:xor] font-sans">
            <iconify-icon icon="solar:alt-arrow-left-linear" stroke-width="1.5"></iconify-icon>
            Back to Portal
        </button>
    </header>

    <!-- Hero Section with Canvas Animation & Aura Background -->
    <section class="relative w-full h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden border-b border-white/5 pt-16">
        <!-- Aura Abstract Asset Image Background -->
        <div class="absolute inset-0 z-0 opacity-20 mix-blend-screen bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_3840w.jpg')] bg-cover bg-center"></div>
        
        <!-- WebGL/Canvas Background -->
        <canvas id="particle-canvas" class="absolute inset-0 z-0 w-full h-full opacity-80" width="1519" height="715"></canvas>
        
        <!-- Hero Content -->
        <div class="relative z-10 text-center mx-4 max-w-4xl w-full">
            <h1 class="reveal-text text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-tight mb-6 font-manrope font-light">
                Autonomous Cyber<br>Immunity
            </h1>
            <p class="reveal-text text-lg md:text-xl lg:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-manrope font-light">
                Securing global infrastructure through AI-driven threat intelligence and proactive zero-day neutralization.
            </p>
        </div>
    </section>

    <!-- Content Grid Section -->
    <section class="max-w-7xl mx-auto px-6 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <!-- Card 1 -->
            <div class="relative bg-[#121212] rounded-xl p-6 h-full flex flex-col group z-0 before:absolute before:inset-0 before:-z-10 before:rounded-xl before:p-[1px] before:bg-gradient-to-b before:from-white/15 hover:before:from-white/25 before:to-transparent before:transition-colors before:duration-500 before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude] before:[WebkitMaskComposite:xor]">
                <div class="mb-4">
                    <h3 class="reveal-text text-base text-white tracking-tight flex items-baseline gap-2 font-medium font-sans">
                        Sentinel Protocol <span class="text-xs text-slate-500 font-normal font-sans">(Threat Detection)</span>
                    </h3>
                    <p class="text-sm text-slate-400 mt-2 leading-relaxed font-normal font-sans">
                        Deep learning algorithms monitoring data streams to isolate vulnerabilities before they manifest.
                    </p>
                </div>
                
                <!-- Animated Dot Chart -->
                <div class="mt-auto pt-6 flex items-end gap-3 h-32 opacity-80 group-hover:opacity-100 transition-opacity">
                    <!-- Bars -->
                    <div class="chart-col flex flex-col-reverse gap-[2px] w-full max-w-[40px]">
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                    </div>
                    <div class="chart-col flex flex-col-reverse gap-[2px] w-full max-w-[40px]">
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                    </div>
                    <div class="chart-col flex flex-col-reverse gap-[2px] w-full max-w-[40px]">
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                    </div>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="relative bg-[#121212] rounded-xl p-6 h-full flex flex-col group z-0 before:absolute before:inset-0 before:-z-10 before:rounded-xl before:p-[1px] before:bg-gradient-to-b before:from-white/15 hover:before:from-white/25 before:to-transparent before:transition-colors before:duration-500 before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude] before:[WebkitMaskComposite:xor]">
                <div class="mb-4">
                    <h3 class="reveal-text text-base text-white tracking-tight flex items-baseline gap-2 font-medium font-sans">
                        Nexus Guardian <span class="text-xs text-slate-500 font-normal font-sans">(Node Security)</span>
                    </h3>
                    <p class="text-sm text-slate-400 mt-2 leading-relaxed font-normal font-sans">
                        Heuristic analysis tracking process execution and memory states to halt malicious payloads instantly.
                    </p>
                </div>
                
                <!-- Animated Dot Chart (Purple tint) -->
                <div class="mt-auto pt-6 flex items-end gap-3 h-32 opacity-80 group-hover:opacity-100 transition-opacity">
                    <div class="chart-col flex flex-col-reverse gap-[2px] w-full max-w-[40px]">
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                    </div>
                    <div class="chart-col flex flex-col-reverse gap-[2px] w-full max-w-[40px]">
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                    </div>
                    <div class="chart-col flex flex-col-reverse gap-[2px] w-full max-w-[40px]">
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                    </div>
                </div>
            </div>

            <!-- Card 3 -->
            <div class="relative bg-[#121212] rounded-xl p-6 h-full flex flex-col group z-0 before:absolute before:inset-0 before:-z-10 before:rounded-xl before:p-[1px] before:bg-gradient-to-b before:from-white/15 hover:before:from-white/25 before:to-transparent before:transition-colors before:duration-500 before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude] before:[WebkitMaskComposite:xor]">
                <div class="mb-4">
                    <h3 class="reveal-text text-base text-white tracking-tight flex items-baseline gap-2 font-medium font-sans">
                        Aether Monitor <span class="text-xs text-slate-500 font-normal font-sans">(Cloud Defense)</span>
                    </h3>
                    <p class="text-sm text-slate-400 mt-2 leading-relaxed font-normal font-sans">
                        Continuous validation of distributed environments and access controls to maintain absolute state integrity.
                    </p>
                </div>
                
                <!-- Animated Dot Chart (Blue tint) -->
                <div class="mt-auto pt-6 flex items-end gap-3 h-32 opacity-80 group-hover:opacity-100 transition-opacity">
                    <div class="chart-col flex flex-col-reverse gap-[2px] w-full max-w-[40px]">
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                    </div>
                    <div class="chart-col flex flex-col-reverse gap-[2px] w-full max-w-[40px]">
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <!-- Scripts -->
    <script>
        document.addEventListener("DOMContentLoaded", () => {
            // Text Masked Reveal with GSAP Split Logic
            document.querySelectorAll('.reveal-text').forEach(el => {
                const html = el.innerHTML;
                const newHtml = html.split(/(<br\s*\/?>|\s+)/).map(part => {
                    if (part.match(/<br/i)) return part;
                    if (part.trim() === '') return part; 
                    return `<span style="display:inline-block; overflow:hidden; vertical-align:top;"><span class="reveal-word" style="display:inline-block; transform:translateY(100%); opacity:0;">${part}</span></span>`;
                }).join('');
                el.innerHTML = newHtml;
            });

            gsap.registerPlugin(ScrollTrigger);
            gsap.utils.toArray('.reveal-text').forEach(el => {
                gsap.to(el.querySelectorAll('.reveal-word'), {
                    y: '0%',
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.04,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 90%'
                    }
                });
            });

            // Chart Animation Logic
            setInterval(() => {
                document.querySelectorAll('.chart-col').forEach(col => {
                    const dots = col.querySelectorAll('.chart-dot');
                    const activeCount = Math.floor(Math.random() * (dots.length + 1));
                    dots.forEach((dot, index) => {
                        dot.style.opacity = index < activeCount ? '1' : '0.15';
                    });
                });
            }, 600);

            // Canvas Background Logic
            const canvas = document.getElementById('particle-canvas');
            if (canvas) {
                const ctx = canvas.getContext('2d');
                let width, height;
                
                const spacing = 16;
                const dotRadius = 1.5;
                let time = 0;

                function resize() {
                    width = canvas.width = canvas.offsetWidth;
                    height = canvas.height = canvas.offsetHeight;
                }
                
                window.addEventListener('resize', resize);
                resize();

                function draw() {
                    ctx.clearRect(0, 0, width, height);
                    
                    const cols = Math.floor(width / spacing);
                    const rows = Math.floor(height / spacing);
                    
                    const offsetX = (width - cols * spacing) / 2;
                    const offsetY = (height - rows * spacing) / 2;

                    for (let i = 0; i <= cols; i++) {
                        for (let j = 0; j <= rows; j++) {
                            const x = offsetX + i * spacing;
                            const y = offsetY + j * spacing;
                            
                            const nx = i * 0.1;
                            const ny = j * 0.1;
                            
                            const wave1 = Math.sin(nx + time * 0.5) * Math.cos(ny - time * 0.3);
                            const wave2 = Math.sin(nx * 0.5 - ny * 0.5 + time * 0.8);
                            const value = wave1 + wave2;

                            if (value > 0.1) {
                                ctx.beginPath();
                                ctx.arc(x, y, dotRadius, 0, Math.PI * 2);

                                const highlightCheck = Math.sin(i * 12.34) * Math.cos(j * 56.78);
                                
                                if (highlightCheck > 0.98) {
                                    ctx.fillStyle = '#3b82f6'; // Blue highlight
                                } else if (highlightCheck < -0.98) {
                                    ctx.fillStyle = '#8b5cf6'; // Purple highlight
                                } else {
                                    const alpha = Math.min(0.6, (value - 0.1) * 0.8);
                                    ctx.fillStyle = `rgba(148, 163, 184, ${alpha})`;
                                }
                                
                                ctx.fill();
                            }
                        }
                    }
                    
                    time += 0.02;
                    requestAnimationFrame(draw);
                }
                
                draw();
            }
        });
    </script>

</body></html>
```

### `src/shaders/neuform-isolated/sources/override-grid.html`

Role: canonical-source · 258 lines · 14421 bytes · SHA-256 `dc7800f2b6b6329b8b71ea4a06b82af91cff8379701c6a7fa4c9a92d47f89d6c`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>System Override</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
</head>
<body class="bg-zinc-900 text-orange-500 font-mono w-full h-screen overflow-hidden relative select-none flex items-center justify-center">

    <!-- Aura Asset Background Image (Subtle) -->
    <div class="absolute inset-0 z-[-1] opacity-30 mix-blend-screen bg-cover bg-center" style="background-image: url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_1600w.jpg');"></div>

    <!-- Dither / Noise Overlay -->
    <div class="pointer-events-none absolute inset-0 z-50 opacity-[0.06] mix-blend-screen" style="background-image: url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 2 2%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Crect width=%221%22 height=%221%22 fill=%22%23f97316%22/%3E%3Crect x=%221%22 y=%221%22 width=%221%22 height=%221%22 fill=%22%23f97316%22/%3E%3C/svg%3E'); background-size: 2px 2px;"></div>

    <!-- WebGL-style Block by Block Animation Canvas -->
    <canvas id="grid-canvas" class="absolute inset-0 z-0 opacity-50" aria-hidden="true"></canvas>

    <!-- Viewport Corner Markers -->
    <div class="absolute top-4 left-4 w-4 h-4 border-t border-l border-orange-500/50 z-10"></div>
    <div class="absolute top-4 right-4 w-4 h-4 border-t border-r border-orange-500/50 z-10"></div>
    <div class="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-orange-500/50 z-10"></div>
    <div class="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-orange-500/50 z-10"></div>

    <!-- Background Telemetry Text -->
    <div class="absolute top-8 left-8 text-xs font-thin opacity-60 tracking-widest flex flex-col gap-1 z-10 hidden sm:flex">
        <span>SYNC_PHASE: <span id="log-frame">000000</span></span>
        <span>SYS_OVERRIDE_SEQ: [ ACTIVE ]</span>
        <span>ROUTE_MAP: TRACING</span>
        <span>CRIT_ALERT:</span>
        <span class="text-orange-600 animate-pulse">> ERR_TIMEOUT</span>
        <span id="typewriter" class="text-orange-400"></span>
    </div>

    <div class="absolute bottom-8 right-8 text-xs font-thin opacity-60 tracking-widest text-right z-10 hidden sm:block">
        <span id="log-mem">REG_ADDR: 0xFA48B2</span><br>
        <span>STATE: OVERRIDING</span>
    </div>

    <!-- Main Content Container -->
    <main class="relative z-20 w-full max-w-5xl h-full flex items-center justify-center px-4 sm:px-16">
        
        <!-- Container Lines & Mini Squares -->
        <div class="absolute inset-y-12 left-8 w-px bg-gradient-to-b from-transparent via-orange-500/30 to-transparent hidden sm:block"></div>
        <div class="absolute inset-y-12 right-8 w-px bg-gradient-to-b from-transparent via-orange-500/30 to-transparent hidden sm:block"></div>
        <div class="absolute top-1/4 left-[30px] w-1.5 h-1.5 border border-orange-500/80 hidden sm:block"></div>
        <div class="absolute bottom-1/4 left-[30px] w-1.5 h-1.5 border border-orange-500/80 hidden sm:block"></div>
        <div class="absolute top-1/3 right-[30px] w-1.5 h-1.5 border border-orange-500/80 hidden sm:block"></div>
        <div class="absolute bottom-1/3 right-[30px] w-1.5 h-1.5 border border-orange-500/80 hidden sm:block"></div>

        <!-- The Main Orange Block (Gradient Border for Premium Surface) -->
        <div class="p-[1px] bg-gradient-to-br from-orange-300 via-orange-600/70 to-orange-900/40 relative w-full shadow-[0_0_50px_rgba(249,115,22,0.15)]">
            
            <div class="relative w-full h-40 sm:h-48 bg-[#f97316] flex items-center transition-all duration-100">
                
                <!-- Top Left Tab -->
                <div class="absolute -top-6 left-0 h-6 w-24 bg-[#f97316] flex items-center justify-between px-2 text-xs font-normal text-zinc-800 tracking-widest border-b border-zinc-800">
                    <span>TIMEOUT</span>
                    <div class="w-1.5 h-1.5 bg-zinc-800"></div>
                </div>

                <!-- Right Edge Extrusions & Cutouts -->
                <div class="absolute -top-3 right-0 h-3 w-10 sm:w-16 bg-[#f97316]">
                    <div class="absolute top-1 right-1 w-1 h-1 bg-zinc-800"></div>
                </div>
                <div class="absolute -bottom-3 right-0 h-3 w-10 sm:w-16 bg-[#f97316]">
                    <div class="absolute bottom-1 right-1 w-1 h-1 bg-zinc-800"></div>
                </div>

                <!-- Left Edge Middle Cutout -->
                <div class="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-4 bg-zinc-800 border-r border-[#f97316]/50"></div>
                <!-- Right Edge Middle Cutout -->
                <div class="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-6 bg-zinc-800"></div>

                <!-- Inner Layout -->
                <div class="flex w-full h-full px-4 sm:px-8">
                    
                    <!-- Left Section: Warning & Text -->
                    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-4 sm:gap-6 w-full sm:w-1/2 border-zinc-800/30 sm:border-r pr-0 sm:pr-6 relative gs-reveal-container">
                        <!-- Subtle animated background highlight in left section -->
                        <div class="absolute inset-0 bg-white/5 opacity-0 animate-[pulse_4s_ease-in-out_infinite]" style="animation-direction: alternate;"></div>
                        
                        <iconify-icon icon="solar:round-transfer-horizontal-linear" class="text-zinc-800 text-5xl sm:text-7xl shrink-0 animate-spin-slow relative z-10" style="stroke-width: 1.5px; animation: spin 4s linear infinite;"></iconify-icon>
                        <div class="flex flex-col relative z-10 pt-1">
                            <h1 class="text-zinc-800 text-3xl sm:text-5xl font-light tracking-tight leading-[0.85] uppercase overflow-hidden pb-1">
                                <span class="block gs-reveal">System</span>
                            </h1>
                            <h2 class="text-zinc-800 text-3xl sm:text-5xl font-thin tracking-tight leading-[0.85] uppercase mt-1 overflow-hidden pb-1">
                                <span class="block gs-reveal">Override</span>
                            </h2>
                        </div>
                    </div>

                    <!-- Right Section: Data Matrix -->
                    <div class="hidden sm:flex flex-1 relative items-center justify-end pl-6">
                        <!-- Crosshairs / Guides -->
                        <div class="absolute inset-x-6 top-1/2 h-px bg-zinc-800/20 -translate-y-1/2"></div>
                        <div class="absolute inset-y-8 right-32 w-px bg-zinc-800/20"></div>
                        <div class="absolute inset-y-8 right-12 w-px bg-zinc-800/20"></div>

                        <!-- Data Grid Blocks -->
                        <div class="flex gap-4 sm:gap-6 relative z-10">
                            <!-- Block Group 1 -->
                            <div class="grid grid-cols-2 gap-1.5 h-fit">
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                            </div>
                            
                            <!-- Block Group 2 (Offset) -->
                            <div class="grid grid-cols-2 gap-1.5 h-fit mt-8">
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] opacity-20 animate-pulse"></div>
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                            </div>

                            <div class="w-2"></div>

                            <!-- Block Group 3 (Top aligned, missing piece blinking to suggest retry) -->
                            <div class="grid grid-cols-2 gap-1.5 h-fit">
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                                <div class="w-5 h-5 bg-transparent border border-zinc-800 relative animate-pulse">
                                    <div class="absolute inset-x-1 top-1/2 h-px bg-zinc-800"></div>
                                    <div class="absolute inset-y-1 left-1/2 w-px bg-zinc-800"></div>
                                </div>
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Bottom Left Micro Details -->
                <div class="absolute bottom-2 left-4 flex gap-2 items-center text-zinc-800">
                    <iconify-icon icon="solar:server-square-linear" class="text-lg opacity-80" style="stroke-width: 1.5px;"></iconify-icon>
                    <div class="flex flex-col">
                        <span class="text-xs tracking-widest opacity-80 uppercase font-light leading-none">AUTH_NODE // ACCESS DENIED</span>
                        <span class="text-xs tracking-widest opacity-60 uppercase font-thin mt-1">EXECUTING BYPASS PROTOCOL...</span>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <script>
        // GSAP ScrollTrigger Masked Reveal
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(".gs-reveal", {
            y: "120%",
            duration: 1.2,
            stagger: 0.15,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".gs-reveal-container",
                start: "top 95%",
            }
        });

        // WebGL-style Block by Block Animation (Simulated in 2D for constraints)
        const canvas = document.getElementById('grid-canvas');
        const ctx = canvas.getContext('2d');
        let width, height, time = 0;

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resize);
        resize();

        function draw() {
            ctx.clearRect(0, 0, width, height);
            time += 0.04;

            const blockSize = 48;
            const blockGap = 2;
            const pitch = blockSize + blockGap;
            const cols = Math.ceil(width / pitch);
            const rows = Math.ceil(height / pitch);

            const centerX = cols / 2;
            const centerY = rows / 2;

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const dist = Math.sqrt(Math.pow(i - centerX, 2) + Math.pow(j - centerY, 2));
                    const wave = Math.sin(time - dist * 0.4);
                    
                    if (wave > 0) {
                        const alpha = wave * 0.15; 
                        ctx.fillStyle = `rgba(249, 115, 22, ${alpha})`;
                        
                        // Block scaling for "Z-depth" pulsing feel
                        const scale = wave * 0.7 + 0.3;
                        const size = blockSize * scale;
                        const offset = (pitch - size) / 2;
                        
                        ctx.fillRect(i * pitch + offset, j * pitch + offset, size, size);
                    }
                }
            }
            requestAnimationFrame(draw);
        }
        draw();

        // Simulate telemetry data updates
        setInterval(() => {
            const frameLog = document.getElementById('log-frame');
            const memLog = document.getElementById('log-mem');
            if (frameLog) frameLog.innerText = Math.floor(Math.random() * 999999).toString().padStart(6, '0');
            if (memLog) {
                const hex = Math.floor(Math.random() * 16777215).toString(16).toUpperCase();
                memLog.innerText = `REG_ADDR: 0x${hex}`;
            }
        }, 150);

        // Typewriter Animation Logic
        const typewriterElement = document.getElementById('typewriter');
        if (typewriterElement) {
            const phrases = ["> INITIATING BYPASS...", "> FLUSHING REGISTERS...", "> TIMEOUT: RETRYING..."];
            let phraseIdx = 0;
            let charIdx = 0;
            let isDeleting = false;
            
            function type() {
                const currentPhrase = phrases[phraseIdx];
                if (isDeleting) {
                    charIdx--;
                } else {
                    charIdx++;
                }
                
                typewriterElement.innerText = currentPhrase.substring(0, charIdx) + "_";
                
                let speed = isDeleting ? 30 : 60;
                
                if (!isDeleting && charIdx === currentPhrase.length) {
                    speed = 2000;
                    isDeleting = true;
                } else if (isDeleting && charIdx === 0) {
                    isDeleting = false;
                    phraseIdx = (phraseIdx + 1) % phrases.length;
                    speed = 500;
                }
                
                setTimeout(type, speed);
            }
            type();
        }
    </script>
</body>
</html>
```

### `src/shaders/ribbon-field/RibbonFieldBackground.tsx`

Role: variant-component · 22 lines · 4717 bytes · SHA-256 `fab02cb57c44c7307afd29cd03d01141372ad90163632b9a6a77910a245a5996`

```tsx
import { useEffect, useRef } from "react";
import { RIBBON_FIELD_FRAGMENT_SHADER, RIBBON_FIELD_VERTEX_SHADER } from "./ribbonFieldShaders";

export type RibbonFieldBackgroundProps = { speed?: number; pointerAmount?: number; smoothing?: number; brightness?: number; opacity?: number; hue?: number; saturation?: number; className?: string };
export const RIBBON_FIELD_DEFAULTS = { speed: 1, pointerAmount: 1, smoothing: 0.035, brightness: 1, opacity: 1, hue: 0, saturation: 1 } as const;
function compile(gl: WebGLRenderingContext, type: number, source: string) { const shader = gl.createShader(type); if (!shader) throw new Error("Unable to create Axiom shader"); gl.shaderSource(shader, source); gl.compileShader(shader); if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(shader) ?? "Axiom shader compilation failed"); return shader; }

export function RibbonFieldBackground({ className = "", ...props }: RibbonFieldBackgroundProps) {
  const hostRef = useRef<HTMLDivElement>(null), canvasRef = useRef<HTMLCanvasElement>(null); const optionsRef = useRef({ ...RIBBON_FIELD_DEFAULTS, ...props }); optionsRef.current = { ...RIBBON_FIELD_DEFAULTS, ...props };
  useEffect(() => {
    const host = hostRef.current, canvas = canvasRef.current; if (!host || !canvas) return undefined; const gl = canvas.getContext("webgl", { alpha: true, antialias: false, premultipliedAlpha: false }); if (!gl) return undefined;
    const vertex = compile(gl, gl.VERTEX_SHADER, RIBBON_FIELD_VERTEX_SHADER), fragment = compile(gl, gl.FRAGMENT_SHADER, RIBBON_FIELD_FRAGMENT_SHADER), program = gl.createProgram(); if (!program) return undefined; gl.attachShader(program, vertex); gl.attachShader(program, fragment); gl.linkProgram(program); if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(program) ?? "Axiom program link failed"); gl.useProgram(program);
    const buffer = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buffer); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW); const position = gl.getAttribLocation(program, "position"); gl.enableVertexAttribArray(position); gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
    const resolution = gl.getUniformLocation(program, "resolution"), time = gl.getUniformLocation(program, "time"), pointerUniform = gl.getUniformLocation(program, "pointer"); let mouseX = 0.72, mouseY = 0.42, targetX = 0.72, targetY = 0.42, frame = 0, visible = true; const startedAt = performance.now();
    const pointer = (event: PointerEvent) => { const bounds = host.getBoundingClientRect(); targetX = 0.72 + (((event.clientX - bounds.left) / Math.max(bounds.width, 1)) - 0.72) * optionsRef.current.pointerAmount; targetY = 0.42 + ((1 - (event.clientY - bounds.top) / Math.max(bounds.height, 1)) - 0.42) * optionsRef.current.pointerAmount; };
    const resize = () => { const bounds = host.getBoundingClientRect(), ratio = Math.min(window.devicePixelRatio || 1, 2); canvas.width = Math.max(1, Math.floor(bounds.width * ratio)); canvas.height = Math.max(1, Math.floor(bounds.height * ratio)); gl.viewport(0, 0, canvas.width, canvas.height); gl.uniform2f(resolution, canvas.width, canvas.height); };
    const render = (now: number) => { const options = optionsRef.current; mouseX += (targetX - mouseX) * options.smoothing; mouseY += (targetY - mouseY) * options.smoothing; gl.uniform1f(time, (now - startedAt) * 0.001 * options.speed); gl.uniform2f(pointerUniform, mouseX, mouseY); gl.drawArrays(gl.TRIANGLES, 0, 6); frame = visible && !document.hidden ? requestAnimationFrame(render) : 0; };
    const resizeObserver = new ResizeObserver(resize), intersection = new IntersectionObserver(([entry]) => { visible = entry?.isIntersecting ?? true; if (visible && !frame) frame = requestAnimationFrame(render); if (!visible && frame) cancelAnimationFrame(frame), frame = 0; }); resizeObserver.observe(host); intersection.observe(host); host.addEventListener("pointermove", pointer, { passive: true }); resize(); frame = requestAnimationFrame(render);
    return () => { if (frame) cancelAnimationFrame(frame); resizeObserver.disconnect(); intersection.disconnect(); host.removeEventListener("pointermove", pointer); gl.deleteBuffer(buffer); gl.deleteShader(vertex); gl.deleteShader(fragment); gl.deleteProgram(program); };
  }, []);
  const options = optionsRef.current; return <div ref={hostRef} className={`threeui-background ribbon-field${className ? ` ${className}` : ""}`}><canvas ref={canvasRef} style={{ opacity: options.opacity, filter: `hue-rotate(${options.hue}deg) saturate(${options.saturation}) brightness(${options.brightness})` }} /></div>;
}
```

### `src/shaders/ribbon-field/ribbonFieldShaders.ts`

Role: variant-renderer-source · 76 lines · 2907 bytes · SHA-256 `ab578acab44bbff7f3cf67f1c82b3e2e1d03689de3fcbdc23681e8b5a0a3536c`

```typescript
export const RIBBON_FIELD_VERTEX_SHADER = `
        attribute vec2 position;
        void main() {
          gl_Position = vec4(position, 0.0, 1.0);
        }
      `;

export const RIBBON_FIELD_FRAGMENT_SHADER = `
        precision highp float;
        uniform vec2 resolution;
        uniform float time;
        uniform vec2 pointer;

        float hash(vec2 p) {
          p = fract(p * vec2(123.34, 456.21));
          p += dot(p, p + 45.32);
          return fract(p.x * p.y);
        }

        float ribbon(vec2 uv, float offset, float width, float phase) {
          float y = 0.55 + 0.20 * sin((uv.x * 2.15) + phase) + 0.045 * sin((uv.x * 7.0) - phase * 0.7);
          float d = abs(uv.y - y - offset);
          return exp(-(d * d) / width);
        }

        void main() {
          vec2 uv = gl_FragCoord.xy / resolution.xy;
          vec2 p = uv;
          p.x *= resolution.x / resolution.y;

          float t = time * 0.22;
          float drift = (pointer.x - 0.5) * 0.06;

          float rightFade = smoothstep(0.28, 0.72, uv.x);
          float centerDark = 1.0 - smoothstep(0.0, 0.88, distance(uv, vec2(0.18, 0.48)));

          float r1 = ribbon(vec2(uv.x + drift, uv.y), 0.03, 0.0065, t + 0.9);
          float r2 = ribbon(vec2(uv.x - drift * 0.7, uv.y), -0.23, 0.0085, t + 3.25);
          float r3 = ribbon(vec2(uv.x + drift * 0.4, uv.y), 0.25, 0.014, t + 1.85);

          float glow = r1 * 1.14 + r2 * 1.05 + r3 * 0.48;

          vec3 teal = vec3(0.17, 0.83, 0.75);
          vec3 cyan = vec3(0.22, 0.82, 0.96);
          vec3 indigo = vec3(0.39, 0.38, 0.92);
          vec3 purple = vec3(0.66, 0.33, 0.98);
          vec3 blue = vec3(0.23, 0.51, 0.96);

          vec3 col = vec3(0.0);
          col += cyan * r1 * 0.92;
          col += teal * r1 * 0.62;
          col += indigo * r3 * 0.42;
          col += blue * r2 * 0.66;
          col += purple * (r2 + r3) * 0.30;

          float bloom = exp(-pow(distance(uv, vec2(0.76, 0.40 + 0.035 * sin(t))), 2.0) / 0.050);
          bloom += exp(-pow(distance(uv, vec2(0.71, 0.75 + 0.025 * cos(t))), 2.0) / 0.030);
          col += vec3(0.42, 0.85, 1.0) * bloom * 0.34;

          vec2 grid = fract(gl_FragCoord.xy / 7.0) - 0.5;
          float dotShape = smoothstep(0.29, 0.11, length(grid));
          float noise = hash(floor(gl_FragCoord.xy / 7.0));
          float scan = 0.72 + 0.28 * sin((uv.x + uv.y) * 38.0 + time * 1.3);
          float dots = dotShape * (0.48 + 0.52 * noise) * scan;

          float micro = hash(gl_FragCoord.xy + time) * 0.035;
          float alpha = clamp((glow * 1.55 + bloom * 0.50) * dots * rightFade, 0.0, 1.0);
          alpha *= 1.0 - centerDark * 0.56;

          vec3 base = vec3(0.005, 0.005, 0.005);
          vec3 finalColor = mix(base, col, clamp(alpha * 1.55, 0.0, 1.0));
          finalColor += micro * rightFade;

          gl_FragColor = vec4(finalColor, 1.0);
        }
      `;
```

### `src/shaders/neuform-isolated/NeuformIsolatedEffects.tsx`

Role: variant-component · 2004 lines · 93888 bytes · SHA-256 `fe9856234253bc3c1a13b3afb84f3d84644dfa6d578e7203bb3e1dd5eced1b75`

```tsx
import { useEffect, useMemo, useRef, type CSSProperties } from "react";

import aetherisLabsSource from "./sources/aetheris-labs.html?raw";
import audioWordmarkSource from "./sources/audio-wordmark.html?raw";
import dotBorderButtonSource from "./sources/dot-border-button.html?raw";
import creatorStudioIntroSource from "./sources/creator-studio-intro.html?raw";
import epiludeFooterSource from "./sources/epilude-footer.html?raw";
import expanseSource from "./sources/digital-expanse.html?raw";
import floatingDotsCtaSource from "./sources/floating-dots-cta.html?raw";
import galleryHeadingSource from "./sources/gallery-heading.html?raw";
import generateButtonSource from "./sources/generate-button.html?raw";
import glassmorphismCtaSource from "./sources/glassmorphism-cta.html?raw";
import gradientBeamCtaSource from "./sources/gradient-beam-cta.html?raw";
import gradientCtaSource from "./sources/gradient-cta.html?raw";
import gradientPillButtonSource from "./sources/gradient-pill-button.html?raw";
import ignitionSource from "./sources/ignition-terminal.html?raw";
import launchButtonSource from "./sources/launch-button.html?raw";
import starfieldSource from "./sources/imaginie-starfield.html?raw";
import tactileSource from "./sources/nexus-tactile.html?raw";
import topologySource from "./sources/nexus-topology.html?raw";
import recursiveErosionSource from "./sources/recursive-erosion.html?raw";
import slidingTextCtaSource from "./sources/sliding-text-cta.html?raw";
import spinningBorderButtonSource from "./sources/spinning-border-button.html?raw";
import thinkingSource from "./sources/thinking-button.html?raw";
import performanceGaugesSource from "./sources/performance-gauges.html?raw";
import logicCoreSource from "./sources/platform-core.html?raw";
import cloudSource from "./sources/strata-cloud.html?raw";
import particleOrbSource from "./sources/synthesis-orb.html?raw";
import inductionSource from "./sources/valence-core.html?raw";
import dimensionalSource from "./sources/vanguard-dimensional.html?raw";
import vertex9Source from "./sources/vertex-9.html?raw";
import voidFieldSource from "./sources/void-protocol.html?raw";

type FocusRole = "background" | "button" | "visual";
type EffectMode = "light" | "dark";

type FocusTarget = {
  selector: string;
  role: FocusRole;
  fit?: "cover" | "contain-square" | "wide-wordmark" | "portrait-stage";
  preserveTransform?: boolean;
};

type EffectDefinition = {
  title: string;
  source: string;
  background: string;
  targets: readonly FocusTarget[];
  theme?: {
    nativeMode?: EffectMode;
    lightBackground: string;
    darkBackground: string;
    invertBackground?: boolean;
  };
  transformSource?: (source: string, mode: EffectMode) => string;
  hiddenTargets?: readonly string[];
  introWordmark?: {
    sceneSelector: string;
    text: string;
    fontSize: number;
    endTime: number;
    holdTime: number;
    logoSvg: string;
  };
};

const THREEUI_MARK_SVG = `<svg viewBox="0 0 512 512" aria-hidden="true">
  <defs>
    <mask id="threeui-intro-cut" maskUnits="userSpaceOnUse" x="0" y="0" width="512" height="512">
      <rect width="512" height="512" fill="#000"/>
      <circle cx="256" cy="256" r="208" fill="#fff"/>
      <g fill="none" stroke="#000" stroke-linecap="round" stroke-width="28">
        <path d="M36 178C112 252 184 264 260 196C336 128 404 114 482 180"/>
        <path d="M36 292C112 366 184 378 260 310C336 242 404 228 482 294"/>
      </g>
    </mask>
  </defs>
  <rect width="512" height="512" fill="#f5f5f7" mask="url(#threeui-intro-cut)"/>
</svg>`;

const SHADERS_WORDMARK_SVG = `<svg width="1600" height="300" viewBox="0 0 1600 300" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="800" y="235" text-anchor="middle" fill="#F4F4F0" font-family="'Helvetica Neue', Helvetica, Arial, sans-serif" font-size="240" font-weight="900" letter-spacing="-8">SHADERS</text>
</svg>`;

export type NeuformIsolatedEffectProps = {
  mode?: EffectMode;
  hue?: number;
  saturation?: number;
  brightness?: number;
  className?: string;
  style?: CSSProperties;
};

export const NEUFORM_ISOLATED_DEFAULTS = {
  mode: "dark",
  hue: 0,
  saturation: 1,
  brightness: 1,
} as const;

/* ------------------------------------------------------------------ *
   The four galleries

   A variant is a different room, not another camera angle on one. Each
   brings its own orbit, its own twelve flat plate colours, the procedural
   field those plates are shaded with, the face the headline is set in, and
   the way the ring picks up speed when a pointer arrives.
 * ------------------------------------------------------------------ */
export const GALLERY_HEADING_VARIANTS = {
  /* matte — museum colours under one soft rise of noise, a light sans on
     wide tracking, and a ring that is sprung rather than eased */
  "rising-diagonal": {
    title: "Twelve Works in Slow Orbit",
    headline: ["TWELVE WORKS", "IN SLOW ORBIT"],
    headlineWidths: [1846, 2000],
    axis: 25.5,
    phase: 93,
    direction: 1,
    field: "matte",
    palette: [
      "#e9e5dd", "#20232a", "#c25a43", "#2f5b4e", "#d6cfc2", "#3a4763",
      "#dda45c", "#14161a", "#a7b3a4", "#f3f1ec", "#5a6670", "#8c4b3f",
    ],
    /* headline ink: [muted line, emphasis line, offset plate] */
    ink: { dark: ["#8d949c", "#ffffff", "#20232a"], light: ["#6b7280", "#111827", "#e9e5dd"] },
    type: { font: "sans", weight: "400", headlineSize: 1.15, tracking: 0.1 },
    motion: { spring: true, ease: 0.42 },
  },
  /* glitch — broadcast colours torn into flat blocks, rows out of register,
     and a bold sans that breaks up with them */
  "falling-diagonal": {
    title: "Signal Lost, Image Holding",
    headline: ["SIGNAL LOST", "IMAGE HOLDING"],
    headlineWidths: [1622, 1917],
    axis: -25.5,
    phase: 87,
    direction: -1,
    field: "glitch",
    palette: [
      "#0b0b12", "#ff2f6d", "#00e6ff", "#13f28a", "#f2f2f8", "#7a1bff",
      "#101018", "#ff7a1a", "#141a2e", "#e01f52", "#1a1a26", "#0ac2d8",
    ],
    /* headline ink: [muted line, emphasis line, offset plate] */
    ink: { dark: ["#ff2f6d", "#f2f2f8", "#0b0b12"], light: ["#c81049", "#111827", "#f2f2f8"] },
    type: { font: "sans", weight: "700", headlineSize: 1.2, tracking: 0 },
    motion: { spring: false, ease: 0.12 },
  },
  /* riso — print colours dithered to three tones over a lit corner, set in
     an old-style serif with a hard offset plate behind it */
  "horizontal-sweep": {
    title: "Prints from the Flat Files",
    headline: ["PRINTS FROM", "THE FLAT FILES"],
    headlineWidths: [1506, 1917],
    axis: 0,
    phase: 90,
    direction: 1,
    field: "riso",
    palette: [
      "#e0b64a", "#b1512a", "#6d7638", "#ecdfc2", "#2f6b66", "#8a3a2b",
      "#d69b3e", "#3c4630", "#c06e3a", "#e6d3a8", "#546d76", "#7a4726",
    ],
    /* headline ink: [muted line, emphasis line, offset plate] */
    ink: { dark: ["#e0b64a", "#f4e9d2", "#6d2a16"], light: ["#8a3a2b", "#2b2018", "#e0b64a"] },
    type: { font: "oldstyle", weight: "700", headlineSize: 1.2, tracking: 0.03 },
    motion: { spring: false, ease: 0.9 },
  },
  /* halftone — one ink on one stock, shaded only by dot size, under a high
     contrast didone */
  "vertical-loop": {
    title: "One Wall, Twelve Plates",
    headline: ["ONE WALL", "TWELVE PLATES"],
    headlineWidths: [1132, 1840],
    axis: 90,
    phase: 0,
    direction: -1,
    field: "halftone",
    palette: [
      "#12110f", "#f2efe8", "#1c1b18", "#e4e0d7", "#2b2a26", "#d6d1c6",
      "#0a0a09", "#faf8f3", "#1f1e1a", "#eae6dd", "#161513", "#c0402c",
    ],
    /* headline ink: [muted line, emphasis line, offset plate] */
    ink: { dark: ["#c0402c", "#f2efe8", "#12110f"], light: ["#c0402c", "#12110f", "#e4e0d7"] },
    type: { font: "didone", weight: "400", headlineSize: 1.25, tracking: 0.06 },
    motion: { spring: false, ease: 0.55 },
  },
} as const;

export type GalleryHeadingVariant = keyof typeof GALLERY_HEADING_VARIANTS;
type GalleryHeadingConfiguration = (typeof GALLERY_HEADING_VARIANTS)[GalleryHeadingVariant];

/* the four serif display stacks the headline can be set in; every one is a
   system face, so the sandboxed document needs no network to render */
export const GALLERY_HEADING_FONTS = {
  serif: '"Times New Roman",Times,"Liberation Serif","Nimbus Roman",serif',
  didone: 'Didot,"Bodoni 72","Bodoni MT","Playfair Display",Georgia,serif',
  oldstyle: '"Iowan Old Style","Palatino Linotype",Palatino,"Book Antiqua",Georgia,serif',
  sans: '"Helvetica Neue",Helvetica,"Inter",Arial,system-ui,sans-serif',
} as const;

export type GalleryHeadingFont = keyof typeof GALLERY_HEADING_FONTS;

export const GALLERY_HEADING_WEIGHTS = ["400", "700"] as const;
export type GalleryHeadingWeight = (typeof GALLERY_HEADING_WEIGHTS)[number];

/* font, weight, and headline size are per-variant; a caller that leaves them
   out gets the typography its gallery was drawn with, not a global default */
export const GALLERY_HEADING_DEFAULTS = {
  ...NEUFORM_ISOLATED_DEFAULTS,
  variant: "rising-diagonal",
} as const;

function transformThinkingButtonSource(source: string, mode: EffectMode) {
  const background = mode === "light" ? "#f4f7fb" : "#111318";
  const plate = mode === "light"
    ? ["#60a5fa", "#3b82f6", "#2563eb"]
    : ["#2563eb", "#1d4ed8", "#1e40af"];

  return source
    .replace("<title>Uploading — glowing border microinteraction</title>", "<title>Thinking — glowing border microinteraction</title>")
    .replace("<style>", '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap" rel="stylesheet">\n<style>')
    .replaceAll("#1d1d1d", background)
    .replace("var word = 'Uploading'", "var word = 'Thinking'")
    .replace(
      'var FONT = \'300 100px -apple-system, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Inter, system-ui, "Segoe UI", Roboto, sans-serif\';',
      'var FONT = \'300 100px Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif\';',
    )
    .replace(
      "      if(glyphs[i].ch === 'g') doubleStoreyG(c);\n      else{",
      "      {",
    )
    .replace("grd.addColorStop(0, '#2e3242');", `grd.addColorStop(0, '${plate[0]}');`)
    .replace("grd.addColorStop(0.55, '#2b2f3c');", `grd.addColorStop(0.55, '${plate[1]}');`)
    .replace("grd.addColorStop(1, '#272c36');", `grd.addColorStop(1, '${plate[2]}');`)
    .replaceAll("rgb(83,92,135)", "rgb(219,234,254)")
    .replaceAll("rgb(97,106,150)", "rgb(239,246,255)")
    .replace("rgb(133,141,189)", "rgb(255,255,255)")

    /* The recording framed one oversized hero button. SCL shrinks the whole
       composition — plate, track, comet widths, blur radii — down to a normal
       control, and the centre moves with it so the button stays in the middle. */
    .replace(
      "  var CX = 1024 - 22, CY = 1024 + 11.5;   /* button centre in the source recording */",
      "  var SCL = 0.49;                          /* hero button -> normal button */\n"
        + "  var CX = (1024 - 22)/SCL, CY = (1024 + 11.5)/SCL;",
    )
    .replace("    k = S*dpr/REF;", "    k = S*dpr/REF*SCL;")
    /* a touch wider than the source plate, to sit the spinner and the label side by side */
    .replace("  var PW = 976, PH = 345, PR = 100;", "  var PW = 1010, PH = 345, PR = 100;")
    /* the label drops well below a straight scale so it reads as button text */
    .replace(
      "  var TXT_W = 778, TXT_CAP = 120, TXT_BASE = 1093;",
      "  var TXT_W = 450, TXT_CAP = 79, TXT_BASE = CY + 38;\n"
        + "  var BR_R = 13, BR_SP = 40, BR_GAP = 78;   /* braille dot radius, cell pitch, gap to label */\n"
        + "  var BR_W = BR_SP + 2*BR_R, BR_SHIFT = (BR_W + BR_GAP)/2;\n"
        + "  /* the terminal 'dots' spinner, as raised-dot masks: bit 0..2 = left column top->bottom, 3..5 = right */\n"
        + "  var BRAILLE = [0x0B,0x19,0x39,0x38,0x3C,0x34,0x26,0x27,0x07,0x0F];\n"
        + "  var BR_STEPS = 30;                        /* three full spinner cycles per lap, so the loop still joins */",
    )
    .replace(
      "  var glyphs = [], fontPx = 169, tracking = 0, textX = 0;",
      "  var glyphs = [], fontPx = 169, tracking = 0, textX = 0, brailleX = 0;",
    )
    /* spinner + label are centred as one unit, so the label shifts right by half the spinner block */
    .replace(
      "    textX = (CX + 4)*k - TXT_W*k/2 + lead;",
      "    textX = (CX + 4)*k - TXT_W*k/2 + lead + BR_SHIFT*k;\n"
        + "    brailleX = (CX + 4)*k - (BR_W + BR_GAP + TXT_W)*k/2 + BR_R*k;",
    )
    .replace(
      "  function label(c, ph){",
      "  /* the spinner is drawn as dots rather than braille glyphs, so it never depends\n"
        + "     on a system face carrying the U+28xx block */\n"
        + "  function braille(c, ph){\n"
        + "    var mask = BRAILLE[Math.floor(ph*BR_STEPS) % BRAILLE.length];\n"
        + "    var cy = (CY - 1.5)*k, r = BR_R*k, sp = BR_SP*k;\n"
        + "    for(var b=0;b<6;b++){\n"
        + "      var on = (mask >> b) & 1;\n"
        + "      c.beginPath();\n"
        + "      c.arc(brailleX + (b < 3 ? 0 : sp), cy + ((b % 3) - 1)*sp, on ? r : r*0.7, 0, Math.PI*2);\n"
        + "      c.fillStyle = on ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.16)';\n"
        + "      c.fill();\n"
        + "    }\n"
        + "  }\n\n"
        + "  function label(c, ph){",
    )
    .replace("    plate(ctx);\n    label(ctx, ph);", "    plate(ctx);\n    braille(ctx, ph);\n    label(ctx, ph);");
}

/* ------------------------------------------------------------------ *
   Owner-selected button surfaces

   Both documents stay byte-for-byte exact. Each was authored against a
   single ground — the pill against white, the dot border against black —
   so the mode the preview is set to decides which one has to be re-toned.
   Geometry, elevation, hover choreography, and the masked metallic edge
   are left alone; only the values the other ground would swallow move.
 * ------------------------------------------------------------------ */

/* authored on white: over the dark ground the translucent black fill sinks
   below the backdrop and the 60% black label disappears entirely */
function transformGradientPillButtonSource(source: string, mode: EffectMode) {
  if (mode !== "dark") return source;

  return source
    /* the concave metallic fill, mirrored — bright at the edges, dim through
       the middle, so the pill still reads as a curved plate rather than a hole */
    .replace("from-black/10 via-black/20 to-black/10", "from-white/[0.16] via-white/[0.07] to-white/[0.16]")
    .replace("text-black/60", "text-white/70")
    .replace("text-slate-600", "text-slate-200")
    .replace('stroke="#666"', 'stroke="#e5e7eb"')
    /* the hover fill sits behind the gradient, so near-white flashed the pill */
    .replace("hover:bg-slate-50", "hover:bg-white/10");
}

/* authored on black: dots, dashes, hatch, border, label, and arrow are all
   white at low alpha, so on the light ground nothing shows until hover */
function transformDotBorderButtonSource(source: string, mode: EffectMode) {
  if (mode !== "light") return source;

  return source
    .replaceAll("#fffa", "#111a")   /* corner dots, dashed border, hovered arrow stroke */
    .replaceAll("#fffd", "#111d")   /* label */
    .replaceAll("#fff4", "#1114")   /* resting arrow stroke */
    .replaceAll("#fff3", "#1113")   /* diagonal hatch, button border, hovered arrow fill */
    .replaceAll("#fff2", "#1112");  /* resting arrow fill */
}

/* ------------------------------------------------------------------ *
   Gallery Heading

   The packaged document stays byte-for-byte exact. The rewrite below turns
   the authored launch poster into a gallery heading: the small corner marks
   and the two flanking notes are dropped, the two-line headline is scaled
   about the block centre the author composed it on, the twelve ring tiles
   are cropped to 4:3, and the ring rests until a pointer is over it.

   It also replaces the subject. The authored tiles were eleven grainy
   gradient wallpapers, and this is a gallery rather than a gradient
   showcase — so every tile becomes one flat colour shaded by a procedural
   noise field, and each variant runs its own field, its own typography, and
   its own way of coming up to speed.

   Font, weight, and headline size arrive by postMessage rather than by a
   document rebuild, because rebuilding a srcDoc iframe would regenerate all
   twelve 512px tile textures on every control tick.
 * ------------------------------------------------------------------ */

/* the authored small-label builder, replaced wholesale by an empty layer */
const GALLERY_HEADING_LABEL_BLOCK = /function buildLabels\(\)\{[\s\S]*?\n\}\n\nfunction resize/;

/* the authored headline builder, replaced by the per-variant one */
const GALLERY_HEADING_HEAD_BLOCK = /function buildHead\(\)\{[\s\S]*?\n\}\n\nfunction buildLabels/;

/* the gradient wallpapers and every helper that painted them */
const GALLERY_HEADING_ART_BLOCK = /function lin\(x,x0,y0,x1,y1,stops\)\{[\s\S]*?\n\];\n\nfunction roundRectPath/;

/* the authored film grain, now laid by each field painter at its own weight */
const GALLERY_HEADING_GRAIN_BLOCK = /    \/\* film grain \*\/\n[\s\S]*?\n    x\.restore\(\);\n    front\.push\(c\);/;

/* the authored clock, replaced by the hover-driven one */
const GALLERY_HEADING_CLOCK_BLOCK = /var t0 = performance\.now\(\), tNow = 0, playing = true;[\s\S]*?window\.__play = function\(\)\{ t0 = performance\.now\(\) - tNow\*1000; playing = true; \};/;

/* the headline, set once per variant: an optional hard offset plate under
   the ink for riso, an optional channel break-up over it for glitch, and
   tracking that the fitted width absorbs so the letterforms stay proportional */
const GALLERY_HEADING_HEAD = `function buildHead(){
  headLayer = mkc(Math.max(1,W), Math.max(1,H));
  var x = headLayer.getContext('2d');
  if (x.letterSpacing !== undefined) x.letterSpacing = (HEAD_TRACK*HEAD_CAP*HEAD_SIZE*K).toFixed(2)+'px';
  if (HEAD_STYLE === 'riso'){
    var off = 0.055*HEAD_CAP*HEAD_SIZE*K;
    headPass(x, off, off, HEAD_SHADOW);
  }
  headPass(x, 0, 0, null);
  if (HEAD_STYLE === 'glitch') headGlitch(x);
}

/* one setting of the two headline lines, optionally displaced and forced to
   a single colour, so a style can stack passes into its treatment */
function headPass(x, dx, dy, tint){
  for (var i=0;i<HEAD.length;i++){
    var h = HEAD[i];
    fitText(x, h.s, SANS, HEAD_WEIGHT, HEAD_CAP*HEAD_SIZE*K, d2sx(1481) + dx,
            d2sy(HEAD_MID + (h.top - HEAD_MID)*HEAD_SIZE) + dy, h.w*HEAD_SIZE*K, tint || h.fill);
  }
}

/* the headline as a picture that lost its signal: a few rows slip sideways
   and two colour channels sit out of register behind the letterforms */
function headGlitch(x){
  var w = headLayer.width, h = headLayer.height, i;
  var snap = mkc(w,h);
  snap.getContext('2d').drawImage(headLayer,0,0);
  var r = rng(0x2E51);
  var top = d2sy(HEAD_MID) - HEAD_CAP*HEAD_SIZE*K*2.1, span = HEAD_CAP*HEAD_SIZE*K*4.2;
  for (i=0;i<7;i++){
    var sy = Math.round(top + r()*span);
    var sh = Math.round((0.03 + r()*0.11)*HEAD_CAP*HEAD_SIZE*K);
    var dx = Math.round((r()-0.5)*0.08*w);
    x.clearRect(0,sy,w,sh);
    x.drawImage(snap, 0,sy,w,sh, dx,sy,w,sh);
  }
  var ghost = function(color){
    var g = mkc(w,h), gx = g.getContext('2d');
    gx.drawImage(snap,0,0);
    gx.globalCompositeOperation = 'source-in';
    gx.fillStyle = color; gx.fillRect(0,0,w,h);
    return g;
  };
  var off = 0.05*HEAD_CAP*HEAD_SIZE*K;
  x.save();
  /* the ghosts go under the letterforms, so the headline stays readable */
  x.globalCompositeOperation = 'destination-over';
  x.globalAlpha = 0.9;
  x.drawImage(ghost(HEAD_GHOST[0]), -off, 0);
  x.drawImage(ghost(HEAD_GHOST[1]), off, 0);
  x.restore();
}

function buildLabels`;

/* twelve flat plates and the four fields that shade them */
const GALLERY_HEADING_ART = `function fill(x,style){ x.fillStyle = style; x.fillRect(0,0,TS,TS); }

function rgbOf(hex){
  var v = parseInt(hex.slice(1),16);
  return [(v>>16)&255,(v>>8)&255,v&255];
}
function mixRGB(a,b,t){
  return [a[0]+(b[0]-a[0])*t, a[1]+(b[1]-a[1])*t, a[2]+(b[2]-a[2])*t];
}
function cssRGB(c){
  return 'rgb('+(c[0]|0)+','+(c[1]|0)+','+(c[2]|0)+')';
}
function luma(c){ return (c[0]*0.299 + c[1]*0.587 + c[2]*0.114)/255; }

/* value noise on a 64x64 lattice, smoothstep-interpolated and wrapped */
function noiseField(seed){
  var g = new Float32Array(4096), r = rng(seed), i;
  for (i=0;i<4096;i++) g[i] = r();
  return function(x,y){
    var x0 = Math.floor(x), y0 = Math.floor(y);
    var fx = x - x0, fy = y - y0;
    fx = fx*fx*(3-2*fx); fy = fy*fy*(3-2*fy);
    var ra = (y0 & 63)*64, rb = ((y0+1) & 63)*64, ca = x0 & 63, cb = (x0+1) & 63;
    var a = g[ra+ca], b = g[ra+cb], c = g[rb+ca], d = g[rb+cb];
    return a + (b-a)*fx + (c-a)*fy + (a-b-c+d)*fx*fy;
  };
}
function fbm(n,x,y,oct){
  var v = 0, amp = 0.5, f = 1, tot = 0, i;
  for (i=0;i<oct;i++){ v += amp*n(x*f,y*f); tot += amp; amp *= 0.5; f *= 2; }
  return v/tot;
}
function grain(x, alpha){
  x.save();
  x.globalCompositeOperation = 'overlay';
  x.globalAlpha = alpha;
  x.fillStyle = x.createPattern(grainTile,'repeat');
  x.fillRect(0,0,TS,TS);
  x.restore();
}

/* paint a low-resolution field, then blow it up over the whole tile: smooth
   for a matte plate, nearest wherever the noise has to keep its edges */
function fieldBuffer(N, shade){
  var buf = mkc(N,N), bx = buf.getContext('2d'), d = bx.createImageData(N,N), px, py, o, c;
  for (py=0;py<N;py++){
    for (px=0;px<N;px++){
      c = shade((px+0.5)/N, (py+0.5)/N, px, py);
      o = (py*N+px)*4;
      d.data[o] = c[0]|0; d.data[o+1] = c[1]|0; d.data[o+2] = c[2]|0;
      d.data[o+3] = c.length > 3 ? c[3]|0 : 255;
    }
  }
  bx.putImageData(d,0,0);
  return buf;
}
function blowUp(x, buf, smooth, alpha){
  x.save();
  x.imageSmoothingEnabled = smooth;
  if (alpha !== undefined) x.globalAlpha = alpha;
  x.drawImage(buf, 0, 0, TS, TS);
  x.restore();
}

/* matte — a museum plate: flat colour, one slow rise of noise across it,
   and grain fine enough to read as the surface rather than as an effect */
function paintMatte(x, base, i){
  var n = noiseField(0x2C41 + i*9176);
  var hi = mixRGB(base,[255,255,255],0.13), lo = mixRGB(base,[0,0,0],0.15);
  blowUp(x, fieldBuffer(160, function(u,v){
    var s = 0.5 + (fbm(n, u*6.5, v*6.5, 5) - 0.5)*1.9 + (v - 0.5)*0.07;
    s = s < 0 ? 0 : s > 1 ? 1 : s;
    return s < 0.5 ? mixRGB(lo, base, s*2) : mixRGB(base, hi, (s-0.5)*2);
  }), true);
  grain(x, 0.1);
}

/* glitch — a plate that lost the signal: flat blocks torn out of the
   neighbouring colours, rows slipped sideways, two channels off register */
function paintGlitch(x, base, i){
  var r = rng(0x51B7 + i*30011), k;
  fill(x, cssRGB(base));
  for (k=0;k<4;k++){
    x.fillStyle = cssRGB(rgbOf(PLATES[(i + 1 + ((r()*5)|0)) % PLATES.length]));
    x.fillRect(Math.round((r()-0.2)*TS), Math.round(r()*TS),
               Math.round((0.2 + r()*0.55)*TS), Math.round((0.04 + r()*0.2)*TS));
  }
  blowUp(x, fieldBuffer(64, function(){
    var w = r() < 0.5 ? 250 : 6;
    return [w,w,w, r() < 0.2 ? 200 : 0];
  }), false, 0.5);
  /* rows slip sideways, each one wrapped so no edge is ever left empty */
  var snap = mkc(TS,TS);
  snap.getContext('2d').drawImage(x.canvas,0,0);
  for (k=0;k<11;k++){
    var y0 = Math.round(r()*TS), h = Math.round((0.01 + r()*0.06)*TS);
    var dx = Math.round((r()-0.5)*0.36*TS);
    x.clearRect(0,y0,TS,h);
    x.drawImage(snap, 0,y0,TS,h, dx,y0,TS,h);
    x.drawImage(snap, 0,y0,TS,h, dx + (dx < 0 ? TS : -TS),y0,TS,h);
  }
  var channel = function(color){
    var g = mkc(TS,TS), gx = g.getContext('2d');
    gx.drawImage(x.canvas,0,0);
    gx.globalCompositeOperation = 'multiply';
    gx.fillStyle = color; gx.fillRect(0,0,TS,TS);
    return g;
  };
  var red = channel('#ff3050'), cyan = channel('#30e0ff');
  x.save();
  x.globalCompositeOperation = 'lighter';
  x.globalAlpha = 0.3;
  x.drawImage(red, -0.022*TS, 0);
  x.drawImage(cyan, 0.022*TS, 0);
  x.restore();
  x.save();
  x.fillStyle = 'rgba(0,0,0,0.22)';
  for (k=0;k<TS;k+=4) x.fillRect(0,k,TS,1);
  x.restore();
  grain(x, 0.24);
}

/* riso — the printed plate: a lit corner and a noise field quantised to
   three tones through an ordered dither, then scanlines and heavy grain */
var BAYER = [0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];
function paintRiso(x, base, i){
  var n = noiseField(0x77A3 + i*15731), k;
  var lo = mixRGB(base,[24,14,6],0.66), hi = mixRGB(base,[255,238,196],0.5);
  var cx = 0.22 + (i % 3)*0.28, cy = 0.2 + ((i/3)|0)*0.2;
  blowUp(x, fieldBuffer(100, function(u,v,px,py){
    var d = Math.sqrt((u-cx)*(u-cx) + (v-cy)*(v-cy));
    var s = (1 - d*1.25)*0.72 + fbm(n, u*3.2, v*3.2, 3)*0.52 - 0.1;
    var band = Math.floor(s*2.4 + (BAYER[(py & 3)*4 + (px & 3)] + 0.5)/16);
    return band <= 0 ? lo : band === 1 ? base : hi;
  }), false);
  x.save();
  x.fillStyle = 'rgba(28,14,4,0.18)';
  for (k=0;k<TS;k+=6) x.fillRect(0,k,TS,2);
  x.restore();
  grain(x, 0.22);
}

/* halftone — one ink on one stock, shaded only by the size of the dots on
   a screen rotated a few degrees further for every tile */
function paintHalftone(x, base, i){
  var n = noiseField(0x3F19 + i*21467), gx, gy;
  fill(x, cssRGB(base));
  var dot = luma(base) > 0.5 ? mixRGB(base,[0,0,0],0.88) : mixRGB(base,[255,255,255],0.9);
  var pitch = TS/30, a = (17 + (i % 4)*9)*Math.PI/180;
  var ca = Math.cos(a), sa = Math.sin(a), span = Math.ceil(TS/pitch);
  x.save();
  x.fillStyle = cssRGB(dot);
  x.translate(TS/2, TS/2);
  x.rotate(a);
  for (gy=-span;gy<=span;gy++){
    for (gx=-span;gx<=span;gx++){
      var wx = gx*pitch, wy = gy*pitch;
      var u = (wx*ca - wy*sa)/TS + 0.5, v = (wx*sa + wy*ca)/TS + 0.5;
      if (u < -0.1 || u > 1.1 || v < -0.1 || v > 1.1) continue;
      var s = fbm(n, u*2.7, v*2.7, 4)*0.95 + (0.55 - v)*0.5;
      var rad = pitch*0.66*(s < 0 ? 0 : s > 1 ? 1 : s);
      if (rad < 0.4) continue;
      x.beginPath(); x.arc(wx, wy, rad, 0, Math.PI*2); x.fill();
    }
  }
  x.restore();
  grain(x, 0.12);
}

var PAINTERS = { matte: paintMatte, glitch: paintGlitch, riso: paintRiso, halftone: paintHalftone };
var ART = (function(){
  var painter = PAINTERS[FIELD] || paintMatte, list = [], i;
  for (i=0;i<PLATES.length;i++){
    list.push((function(index){
      return function(x){ painter(x, rgbOf(PLATES[index]), index); };
    })(i));
  }
  return list;
})();

function roundRectPath`;

/* the ring rests at a standstill and only orbits while a pointer is over it,
   easing up and back down so hovering in and out never snaps; the matte
   gallery is sprung instead, overshooting into motion and rocking once as it
   settles. The same block carries the live control channel, since both need
   the render loop's state.

   The document sees the pointer arrive reliably, but a sandboxed cross-process
   frame is not guaranteed the matching leave — so the host watches for that
   edge and posts it in, and the two signals together decide the state. */
const GALLERY_HEADING_CLOCK = `var tNow = 0, playing = true, hovering = false, rate = 0, vel = 0, settled = false, last = performance.now();

function setHover(state){
  if (hovering === state) return;
  hovering = state; settled = false;
  /* the host cannot see the pointer arrive over this frame, so tell it — it is
     the one that will see the pointer leave again */
  if (state && window.parent !== window){
    try { window.parent.postMessage({ threeuiPointerOver: true }, '*'); } catch (error) {}
  }
}
var root = document.documentElement;
root.addEventListener('pointerenter', function(){ setHover(true); });
root.addEventListener('pointermove',  function(){ setHover(true); });
root.addEventListener('pointerdown',  function(){ setHover(true); });
root.addEventListener('pointerleave', function(){ setHover(false); });
root.addEventListener('pointercancel',function(){ setHover(false); });
window.addEventListener('blur', function(){ setHover(false); });

function frame(now){
  var dt = Math.min(0.05, Math.max(0, (now - last)/1000));
  last = now;
  if (playing){
    if (SPRING){
      vel += (((hovering ? 1 : 0) - rate)*SPRING_K - vel*SPRING_D)*dt;
      rate += vel*dt;
    } else {
      rate += ((hovering ? 1 : 0) - rate) * (1 - Math.exp(-dt/EASE));
    }
    if (Math.abs(rate) > 0.0004 || Math.abs(vel) > 0.0004){
      tNow = ((tNow + dt*rate) % DUR + DUR) % DUR;
      render(tNow); settled = false;
    } else if (!settled){
      rate = 0; vel = 0; render(tNow); settled = true;
    }
  }
  requestAnimationFrame(frame);
}

/* font family, weight, and headline size arrive live so a control tick never
   rebuilds the document and repaints the twelve tile textures */
window.addEventListener('message', function(event){
  var runtime = event.data && event.data.threeuiRuntime;
  if (!runtime) return;
  if (typeof runtime.font === 'string') SANS = runtime.font;
  if (typeof runtime.weight === 'string') HEAD_WEIGHT = runtime.weight;
  if (typeof runtime.headlineSize === 'number' && runtime.headlineSize > 0){
    HEAD_SIZE = Math.max(0.6, Math.min(1.8, runtime.headlineSize));
  }
  if (typeof runtime.hover === 'number') setHover(runtime.hover > 0);
  buildHead(); settled = false; render(tNow);
});

window.addEventListener('resize', function(){ resize(); settled = false; render(tNow); });
resize();
render(tNow);
requestAnimationFrame(frame);

window.__DUR = DUR;
window.__seek = function(t){
  tNow = ((t % DUR) + DUR) % DUR;
  playing = false;
  render(tNow);
};
window.__play = function(){ last = performance.now(); playing = true; settled = false; };`;

function transformGalleryHeadingSource(
  source: string,
  mode: EffectMode,
  variant: GalleryHeadingConfiguration,
) {
  const background = mode === "light" ? "#f4f7fb" : "#000000";
  const ink = mode === "light" ? variant.ink.light : variant.ink.dark;
  const font = GALLERY_HEADING_FONTS[variant.type.font];

  return source
    .replace("<title>New Grainient Collection Added — motion</title>", `<title>${variant.title} — motion</title>`)
    .replace("html,body{margin:0;height:100%;background:#000;overflow:hidden}", `html,body{margin:0;height:100%;background:${background};overflow:hidden}`)
    .replace("axis: 25.5,", `axis: ${variant.axis},`)
    .replace("phase: 93", `phase: ${variant.phase}`)

    /* 4:3 tiles: the tile keeps its authored width and the ring plane is where
       the crop happens, so the square texture is covered, never squashed */
    .replace(
      "  tile: 346,            /* tile side in ring units (R = a)               */",
      "  tile: 346,            /* tile width in ring units (R = a)              */\n"
        + "  aspect: 0.75,         /* tile height / width — a 4:3 landscape crop    */",
    )
    .replace(
      "  roundRectPath(ctx, TS, TS, TS*RING.radius);",
      "  roundRectPath(ctx, TS, TS*RING.aspect, TS*RING.aspect*RING.radius);",
    )

    /* the headline is the whole composition now, so it carries the variant's
       face, weight, tracking, and treatment, and scales about HEAD_MID — the
       vertical centre of the authored two-line block */
    .replace(
      "var CAP = 142;          /* headline cap height */\nvar SMALL = 22;         /* small-label cap height */",
      `var HEAD_CAP = 142;     /* authored headline cap height */\n`
        + `var HEAD_MID = 1093;    /* authored vertical centre of the two-line block */\n`
        + `var HEAD_SIZE = ${variant.type.headlineSize};   /* headline size multiplier */\n`
        + `var HEAD_WEIGHT = '${variant.type.weight}'; /* headline weight */\n`
        + `var HEAD_TRACK = ${variant.type.tracking};   /* headline tracking, in cap heights */\n`
        + `var HEAD_STYLE = '${variant.field}';\n`
        + `var HEAD_SHADOW = '${ink[2]}';  /* riso: the plate under the ink */\n`
        + `var HEAD_GHOST = ['#ff2f6d','#00e6ff'];  /* glitch: the two channel ghosts */\n`
        + `var PLATES = ${JSON.stringify(variant.palette)};\n`
        + `var FIELD = '${variant.field}';       /* which painter shades the plates */\n`
        + `var EASE = ${variant.motion.ease};        /* seconds for the orbit to reach hover speed */\n`
        + `var SPRING = ${variant.motion.spring ? 1 : 0}, SPRING_K = 26, SPRING_D = 5.7;`,
    )
    .replace(
      "var SANS = '\"Helvetica Neue\",Helvetica,\"Inter\",Arial,system-ui,sans-serif';",
      `var SANS = '${font}';`,
    )
    .replace("{ s:'NEW GRAINIENT',    top:930,  w:1370, fill:'#d0d0d0' }", `{ s:'${variant.headline[0]}', top:930,  w:${variant.headlineWidths[0]}, fill:'${ink[0]}' }`)
    .replace("{ s:'COLLECTION ADDED', top:1114, w:1775, fill:'#ffffff' }", `{ s:'${variant.headline[1]}', top:1114, w:${variant.headlineWidths[1]}, fill:'${ink[1]}' }`)
    .replace(" * Tile artwork — eleven grainy gradient \"wallpapers\"", " * Tile artwork — twelve flat plates under a procedural noise field")
    .replace(GALLERY_HEADING_ART_BLOCK, GALLERY_HEADING_ART)
    .replace(GALLERY_HEADING_GRAIN_BLOCK, "    /* each field painter lays its own grain, at the weight its style wants */\n    front.push(c);")

    /* the authored reverse side crushed a gradient to a hint; a flat plate has
       less to give up, so the far half of the ring keeps more of its colour */
    .replace("y.fillStyle = 'rgba(6,8,18,0.75)';", "y.fillStyle = 'rgba(10,12,24,0.45)';")
    .replace(GALLERY_HEADING_HEAD_BLOCK, GALLERY_HEADING_HEAD)
    .replace(
      GALLERY_HEADING_LABEL_BLOCK,
      "function buildLabels(){\n"
        + "  /* the launch poster's corner marks and flanking notes are dropped; the\n"
        + "     layer stays so the compositing order below is untouched */\n"
        + "  labelLayer = mkc(1,1);\n"
        + "}\n\nfunction resize",
    )

    .replace("var spin = (t/DUR)*Math.PI*2;", `var spin = (t/DUR)*Math.PI*2*${variant.direction};`)
    .replace("ctx.fillStyle = '#000';\n  ctx.fillRect(0,0,W,H);", `ctx.fillStyle = '${background}';\n  ctx.fillRect(0,0,W,H);`)

    .replace(GALLERY_HEADING_CLOCK_BLOCK, GALLERY_HEADING_CLOCK);
}

/* ------------------------------------------------------------------ *
   Recursive Erosion styles

   The packaged document stays byte-for-byte exact. Each style is a runtime
   rewrite of the authored blocks that decide the subject — where the lattice
   points sit, where the glowing ropes ride, how the vertex shader shapes and
   erodes a point, and which palette it is tinted with — so the same erosion,
   trail, grain, chromatic fringe, and seamless-loop machinery drives a
   lightning sphere, a branch structure, a mountain range, or a nebula.

   Every rewrite also carries the host-control channel: speed, point size, and
   wavelength arrive by postMessage and the pointer is read inside the
   document, because a srcDoc iframe cannot take a live prop without being
   rebuilt, and rebuilding it would restart the loop on every slider tick.
 * ------------------------------------------------------------------ */

const RECURSIVE_EROSION_POINT_BLOCK = /  var GA=Math\.PI\*\(3-Math\.sqrt\(5\)\), SP=Math\.sqrt\(4\*Math\.PI\/N\);[\s\S]*?(?=  var A=\{dir:)/;
const RECURSIVE_EROSION_PATH_BLOCK = /  var W=\[\];[\s\S]*?(?=  var tmpA=)/;
const RECURSIVE_EROSION_SHAPE_BLOCK = /'  vec3 dir=a_dir;',[\s\S]*?'  float face=smoothstep\(-0\.10,0\.06,n\.z\);',/;
const RECURSIVE_EROSION_ROTATION_BLOCK = /    var ax=0\.22\*Math\.sin\(th\)\+0\.06\*Math\.sin\(th\*2\+1\.1\);\n    var ay=0\.30\*Math\.sin\(th\+2\.2\)\+0\.08\*Math\.cos\(th\*2\);\n    var az=0\.10\*Math\.cos\(th\+0\.6\);/;

/* the two authored flicker envelopes, one for the lattice halo and one for the
   rope itself — a style that replaces them replaces both with the same term */
const RECURSIVE_EROSION_HALO_FLICKER = "      var flick=0.76+0.24*Math.sin(th*2.0+w.fl);";
const RECURSIVE_EROSION_ROPE_FLICKER = "      var flick=0.86+0.14*Math.sin(th*2.0+w.fl);";

type RecursiveErosionStyle = {
  title: string;
  screenReaderCopy: string;
  duration: string;
  lattice: string;
  ropes: string;
  pearls: string;
  scale: string;
  dotSize: string;
  threshold: string;
  wormFalloff: string;
  dotProfile: string;
  /* omitted when the style keeps the authored fibonacci lattice */
  points?: string;
  paths: string;
  shape: string;
  palette: readonly [string, string, string];
  tint: string;
  rotation: string;
  grain: string;
  /* only styles that answer the pointer replace these two */
  pointerBoost?: string;
  projection?: string;
  /* only styles that strike rather than crawl replace the flicker envelope */
  flicker?: string;
  lightBackground: string;
  darkBackground: string;
};

const RECURSIVE_EROSION_SPHERE: RecursiveErosionStyle = {
  title: "Recursive Erosion — Lightning Sphere Motion Study",
  screenReaderCopy: "A four-second looping study of a generative particle sphere: a dense lattice of small orange dots over a transparent backdrop, its surface crumpling and eroding into holes while jagged lightning arcs strike across it, and the shell leaning out toward the pointer wherever the cursor rests, each dot fringed with red and blue chromatic aberration.",
  duration: "  var DUR=3.99;                 /* reference loop length */",
  lattice: "  var N=7000;                   /* lattice points */",
  ropes: "  var WORMS=8, TAIL=12, WN=WORMS*TAIL;",
  pearls: "  var PEARL=44, TN=WORMS*PEARL, TSTRIDE=5;",
  scale: "    gl.uniform2f(U.u_scale,0.672*aspX,0.672*aspY);",
  dotSize: "    gl.uniform1f(U.u_px,Math.max(1.0,size/1080*6.4*PSIZE));",
  threshold: "    gl.uniform1f(U.u_thr,0.19+0.04*Math.sin(th*2+0.8));",
  wormFalloff: "  '      boost+=u_worm[i].w*exp(-dot(d,d)*160.0);',",
  dotProfile: "  '  v_k=(u_pass>0.5)?3.0:(u_trail>0.5?0.0:2.1);',",
  paths: `  var W=[], TWO=6.283185307179586;
  for(i=0;i<WORMS;i++){
    /* each strike still rides a tilted great circle centred on the viewer-facing
       side, so a steady handful of arcs is always on screen */
    var cz=0.06+R0()*0.86, ca0=R0()*TWO, cr=Math.sqrt(Math.max(0,1-cz*cz));
    var c=[Math.cos(ca0)*cr,Math.sin(ca0)*cr,cz];
    var t0=Math.abs(c[1])<0.85?[0,1,0]:[1,0,0];
    var d=t0[0]*c[0]+t0[1]*c[1]+t0[2]*c[2];
    var u=[t0[0]-c[0]*d,t0[1]-c[1]*d,t0[2]-c[2]*d];
    var lu=Math.hypot(u[0],u[1],u[2]); u=[u[0]/lu,u[1]/lu,u[2]/lu];
    var v=[c[1]*u[2]-c[2]*u[1],c[2]*u[0]-c[0]*u[2],c[0]*u[1]-c[1]*u[0]];
    var rho=0.46+R0()*0.42, sr=Math.sin(rho), crho=Math.cos(rho);
    var mm=1+Math.floor(R0()*2);
    /* the kink pattern has to close over the loop, so a whole number of kinks
       per revolution is chosen first and the frequency derived from it */
    var kper=Math.max(6,Math.round(4.6*TWO*mm));
    W.push({c:c,u:u,v:v,sr:sr,cr:crho,m:mm,ph:R0()*TWO,
            str:1.35+R0()*0.45,arc:(1.45+R0()*0.60)/sr,fl:R0()*TWO,
            seed:1+R0()*97,kper:kper,zq:kper/(TWO*mm),
            rate:2+Math.floor(R0()*4),ph0:R0(),
            /* one discharge: near-instant attack, exponential decay, and a
               stutter down the tail. That envelope is what reads as lightning
               instead of as a rope crawling steadily over the shell. */
            env:function(t){
              var f=(t/TWO)*this.rate+this.ph0; f-=Math.floor(f);
              var e=Math.exp(-f*4.4)*(0.58+0.42*Math.sin(f*88.0+this.fl));
              return e>0?e:0;
            }});
  }
  /* a fixed hash, so every kink of an arc stays put instead of boiling */
  function zig(seed,k){
    var x=Math.sin(seed*127.1+k*311.7)*43758.5453;
    return (x-Math.floor(x))*2-1;
  }
  /* a point on strike k's arc at angle ang, written into out[] — the great
     circle carries a piecewise-linear kink pattern, and that is what turns the
     authored smooth rope into a forked bolt */
  function onPath(w,ang,out){
    var s=ang*w.zq+w.seed, ki=Math.floor(s), f=s-ki;
    var e=f*f*(3-2*f), pp=w.kper;
    var k0=((ki%pp)+pp)%pp, k1=(((ki+1)%pp)+pp)%pp;
    var off=(zig(w.seed,k0)*(1-e)+zig(w.seed,k1)*e)*0.105;
    var tw=(zig(w.seed+7.3,k0)*(1-e)+zig(w.seed+7.3,k1)*e)*0.065;
    var a2=ang+tw, ca=Math.cos(a2), sa=Math.sin(a2), rr=w.sr+off;
    out[0]=w.c[0]*w.cr+(w.u[0]*ca+w.v[0]*sa)*rr;
    out[1]=w.c[1]*w.cr+(w.u[1]*ca+w.v[1]*sa)*rr;
    out[2]=w.c[2]*w.cr+(w.u[2]*ca+w.v[2]*sa)*rr;
  }
`,
  shape: `'  vec3 dir=a_dir;',
  '  vec2 c=vec2(cos(u_th),sin(u_th));',
  /* every noise lookup rides a closed circular path, so the morph is exactly
     periodic; the wavelength control scales all of them together */
  '  float iw=1.0/u_wave;',
  '  float n1=snoise(dir*(1.30*iw)+vec3(c*0.95,0.0));',
  '  float n2=snoise(dir*(2.70*iw)+vec3(0.0,c*0.80));',
  '  float n3=snoise(dir*(5.60*iw)+vec3(c.y*0.62,0.0,c.x*0.62));',
  '  float ridge=1.0-abs(n2);',
  '  float disp=0.54*n1+0.44*(ridge-0.5)+0.20*n3;',
  '  float R=1.0+0.305*disp;',
  /* recursive erosion: two scales of noise chew holes through the shell */
  '  float e=0.66*snoise(dir*(1.45*iw)+vec3(c*1.30,0.4))+0.34*snoise(dir*(3.10*iw)+vec3(0.3,c*1.05));',
  '  float alive=smoothstep(u_thr-0.05,u_thr+0.06,e+0.5);',
  '  vec3 n=u_rot*dir;',
  /* pointer attraction: the resting point is projected into the same clip space
     the pointer is reported in, then a gaussian around the cursor lifts the
     shell along its own radius and drags it toward the cursor at projection */
  '  vec3 rest=u_rot*(dir*R);',
  '  vec2 toP=u_ptr.xy-(rest.xy*(1.0/(1.0-0.14*rest.z))*u_scale+u_off);',
  '  float pull=u_ptr.z*exp(-dot(toP,toP)*22.0)*smoothstep(-0.30,0.22,n.z);',
  '  vec3 p=u_rot*(dir*(R+0.22*pull));',
  '  float persp=1.0/(1.0-0.14*p.z);',
  '  float face=smoothstep(-0.10,0.06,n.z);',`,
  palette: [
    "  '  vec3 cDim=vec3(0.94,0.33,0.05);',",
    "  '  vec3 cMid=vec3(1.00,0.56,0.16);',",
    "  '  vec3 cHot=vec3(1.00,0.90,0.72);',",
  ],
  tint: "  '  vec3 col=mix(cDim,cMid,a_rand.x*a_rand.x);',",
  rotation: `    var ax=0.22*Math.sin(th)+0.06*Math.sin(th*2+1.1);
    var ay=0.30*Math.sin(th+2.2)+0.08*Math.cos(th*2);
    var az=0.10*Math.cos(th+0.6);`,
  grain: "        d[i]=n; d[i+1]=n*0.74; d[i+2]=n*0.52; d[i+3]=255;",
  pointerBoost: "  '    boost=min(boost+pull*0.85,1.5);',",
  projection: "  '  gl_Position=vec4(p.xy*persp*u_scale+u_off+toP*(pull*0.26),0.0,1.0);',",
  flicker: "      var flick=w.env(th);",
  lightBackground: "#f4f3f1",
  darkBackground: "#0a0908",
};

const RECURSIVE_EROSION_BRANCHES: RecursiveErosionStyle = {
  title: "Recursive Erosion — Branch Growth Motion Study",
  screenReaderCopy: "A looping study of a generative branch structure: a dendritic lattice of small amber dots over a transparent backdrop, its limbs swaying and eroding back from the tips while bright glowing pulses climb from the root out to each branch tip, each dot fringed with red and blue chromatic aberration.",
  duration: "  var DUR=9.0;                  /* reference loop length */",
  lattice: "  var N=4200;                   /* lattice points */",
  ropes: "  var WORMS=8, TAIL=12, WN=WORMS*TAIL;",
  pearls: "  var PEARL=40, TN=WORMS*PEARL, TSTRIDE=5;",
  scale: "    gl.uniform2f(U.u_scale,0.72*aspX,0.72*aspY);",
  dotSize: "    gl.uniform1f(U.u_px,Math.max(1.0,size/1080*7.6*PSIZE));",
  threshold: "    gl.uniform1f(U.u_thr,0.20+0.05*Math.sin(th*2+0.8));",
  wormFalloff: "  '      boost+=u_worm[i].w*exp(-dot(d,d)*450.0);',",
  dotProfile: "  '  v_k=(u_pass>0.5)?3.0:(u_trail>0.5?0.0:2.1);',",
  points: `  var SKEL=[], CHAIN=[];
  (function(){
    /* one recursive limb: walk it in short steps, then fork off children */
    function grow(px,py,pz,dx,dy,dz,len,rad,depth,chain){
      var steps=Math.max(2,Math.round(len*16));
      var sl=len/steps;
      for(var s=0;s<steps;s++){
        var nx=px+dx*sl, ny=py+dy*sl, nz=pz+dz*sl;
        SKEL.push([px,py,pz,nx,ny,nz,rad*(1-0.45*s/steps)]);
        chain.push([nx,ny,nz]);
        px=nx; py=ny; pz=nz;
        /* a gentle curl keeps the limbs from reading as straight spokes */
        dx+=(R0()*2-1)*0.20; dy+=(R0()*2-1)*0.11+0.02; dz+=(R0()*2-1)*0.20;
        var dl=1/Math.hypot(dx,dy,dz); dx*=dl; dy*=dl; dz*=dl;
      }
      if(depth>=5||len<0.060){ CHAIN.push(chain.slice()); return; }
      var forks=depth<3?3:2;
      for(var f=0;f<forks;f++){
        /* a wide fork angle is what makes the crown read as a canopy instead
           of a torch flame; the small upward bias only keeps it from drooping */
        var fa=R0()*6.283, sp=0.78+R0()*0.62;
        var bx=dx+Math.cos(fa)*sp, by=dy+0.06, bz=dz+Math.sin(fa)*sp;
        var bl=1/Math.hypot(bx,by,bz);
        grow(px,py,pz,bx*bl,by*bl,bz*bl,len*0.80,rad*0.63,depth+1,chain.slice());
      }
    }
    grow(0,-0.90,0,0,1,0,0.42,0.070,0,[[0,-0.90,0]]);
  })();
  /* the grown tree is recentred and normalized, so the crown fills the frame
     whatever the fork angles happened to do */
  var lo3=[1e9,1e9,1e9], hi3=[-1e9,-1e9,-1e9];
  for(var q=0;q<SKEL.length;q++){
    for(var ei=0;ei<6;ei++){
      var ax3=ei%3, vv3=SKEL[q][ei];
      if(vv3<lo3[ax3]) lo3[ax3]=vv3;
      if(vv3>hi3[ax3]) hi3[ax3]=vv3;
    }
  }
  var mid3=[(lo3[0]+hi3[0])*0.5,(lo3[1]+hi3[1])*0.5,(lo3[2]+hi3[2])*0.5];
  var NRM=1.92/Math.max(1e-6,hi3[1]-lo3[1]);
  for(q=0;q<SKEL.length;q++){
    var sg3=SKEL[q];
    for(ei=0;ei<6;ei++) sg3[ei]=(sg3[ei]-mid3[ei%3])*NRM;
    sg3[6]*=NRM;
  }
  for(q=0;q<CHAIN.length;q++){
    /* every chain shares the trunk nodes with its siblings, so each slot takes
       a fresh normalized point instead of being rescaled in place */
    var ch3=CHAIN[q];
    for(ei=0;ei<ch3.length;ei++) ch3[ei]=[(ch3[ei][0]-mid3[0])*NRM,(ch3[ei][1]-mid3[1])*NRM,(ch3[ei][2]-mid3[2])*NRM];
  }
  /* one cumulative table weighted by length times radius, so the grain lands
     by bark area — weighting by length alone starves the trunk, because the
     hundred-odd twigs carry most of the skeleton's total length */
  var CUM=new Float64Array(SKEL.length), TOT=0;
  for(q=0;q<SKEL.length;q++){
    TOT+=Math.hypot(SKEL[q][3]-SKEL[q][0],SKEL[q][4]-SKEL[q][1],SKEL[q][5]-SKEL[q][2])*SKEL[q][6];
    CUM[q]=TOT;
  }
  for(var i=0;i<N;i++){
    var pick=R0()*TOT, lo=0, hi=SKEL.length-1;
    while(lo<hi){ var mid=(lo+hi)>>1; if(CUM[mid]<pick) lo=mid+1; else hi=mid; }
    var sg=SKEL[lo], tt=R0();
    var bx0=sg[0]+(sg[3]-sg[0])*tt, by0=sg[1]+(sg[4]-sg[1])*tt, bz0=sg[2]+(sg[5]-sg[2])*tt;
    /* scatter inside the limb radius so each branch reads as bark, not a wire */
    var rr=sg[6]*Math.pow(R0(),0.55), ra=R0()*6.283, rp=Math.acos(2*R0()-1);
    dirs[i*3]=bx0+rr*Math.sin(rp)*Math.cos(ra);
    dirs[i*3+1]=by0+rr*Math.cos(rp);
    dirs[i*3+2]=bz0+rr*Math.sin(rp)*Math.sin(ra);
    rnds[i*2]=R0(); rnds[i*2+1]=R0();
  }
`,
  paths: `  var W=[];
  for(i=0;i<WORMS;i++){
    /* every rope owns one limb, entering it above the shared trunk so eight
       pulses do not pile onto the same few nodes at once */
    W.push({ch:CHAIN[Math.min(CHAIN.length-1,Math.floor(R0()*CHAIN.length))],
            u0:0.20+R0()*0.34,m:1+Math.floor(R0()*2),ph:R0()*6.283,
            str:0.72+R0()*0.26,arc:1.55+R0()*0.90,fl:R0()*6.283});
  }
  /* a point on rope k's limb at angle ang, written into out[] — the parameter
     folds back on itself, so the pulse runs out to the tip and returns without
     a seam and the tail bunches into a flare while it turns around */
  function onPath(w,ang,out){
    var f=ang/6.283185307179586; f-=Math.floor(f);
    var u=w.u0+(1-w.u0)*(1-Math.abs(1-2*f));
    var x=u*(w.ch.length-1), k=Math.floor(x), t=x-k;
    if(k>w.ch.length-2){ k=w.ch.length-2; t=1; }
    if(k<0){ k=0; t=0; }
    var a=w.ch[k], b=w.ch[k+1];
    out[0]=a[0]+(b[0]-a[0])*t;
    out[1]=a[1]+(b[1]-a[1])*t;
    out[2]=a[2]+(b[2]-a[2])*t;
  }
`,
  shape: `'  vec3 dir=a_dir;',
  '  vec2 c=vec2(cos(u_th),sin(u_th));',
  /* every noise lookup rides a closed circular path, so the sway is exactly
     periodic; the wavelength control scales all of them together */
  '  float iw=1.0/u_wave;',
  '  float n1=snoise(dir*(1.90*iw)+vec3(c*0.72,0.0));',
  '  float n2=snoise(dir*(4.20*iw)+vec3(0.0,c*0.60));',
  '  float n3=snoise(dir*(8.40*iw)+vec3(c.y*0.48,0.0,c.x*0.48));',
  /* the canopy sways, the trunk holds still */
  '  float lift=smoothstep(-0.95,0.60,dir.y);',
  '  vec3 q0=dir+vec3(n1*1.10,n2*0.34,n3*0.90)*0.085*lift;',
  '  float shade=clamp(0.40+0.60*lift+0.22*n1,0.0,1.0);',
  /* recursive erosion: two scales of noise eat the limbs back from the tips
     while the trunk and the lower limbs stay whole, so the crown never floats */
  '  float e=0.64*snoise(dir*(1.80*iw)+vec3(c*1.20,0.4))+0.36*snoise(dir*(3.90*iw)+vec3(0.3,c*1.05));',
  '  float alive=smoothstep(u_thr-0.06,u_thr+0.08,e+0.5+0.50*(1.0-smoothstep(-0.90,0.15,dir.y)));',
  '  vec3 n=normalize(u_rot*(q0+vec3(0.0,0.22,0.0)));',
  '  vec3 p=u_rot*q0;',
  '  float persp=1.0/(1.0-0.18*p.z);',
  '  float face=1.0;',`,
  palette: [
    "  '  vec3 cDim=vec3(0.72,0.26,0.06);',",
    "  '  vec3 cMid=vec3(1.00,0.58,0.16);',",
    "  '  vec3 cHot=vec3(1.00,0.90,0.62);',",
  ],
  tint: "  '  vec3 col=mix(cDim,cMid,clamp(shade*0.78+a_rand.x*0.32,0.0,1.0));',",
  rotation: `    var ax=0.10*Math.sin(th)+0.03*Math.sin(th*2+1.1);
    var ay=th;
    var az=0.05*Math.cos(th+0.6);`,
  grain: "        d[i]=n; d[i+1]=n*0.70; d[i+2]=n*0.44; d[i+3]=255;",
  lightBackground: "#f4f3f1",
  darkBackground: "#0a0908",
};

const RECURSIVE_EROSION_MOUNTAINS: RecursiveErosionStyle = {
  title: "Recursive Erosion — Mountain Range Motion Study",
  screenReaderCopy: "A looping study of a generative mountain range: a height field of small dots over a transparent backdrop, its ridges drifting and eroding into scree while bright glowing veins run down the slopes, each dot fringed with red and blue chromatic aberration.",
  duration: "  var DUR=9.0;                  /* reference loop length */",
  lattice: "  var N=16640;                  /* lattice points */",
  ropes: "  var WORMS=6, TAIL=14, WN=WORMS*TAIL;",
  pearls: "  var PEARL=46, TN=WORMS*PEARL, TSTRIDE=5;",
  scale: "    gl.uniform2f(U.u_scale,0.72*aspX,0.72*aspY);",
  dotSize: "    gl.uniform1f(U.u_px,Math.max(1.0,size/1080*6.8*PSIZE));",
  threshold: "    gl.uniform1f(U.u_thr,0.17+0.05*Math.sin(th*2+0.8));",
  wormFalloff: "  '      boost+=u_worm[i].w*exp(-dot(d,d)*130.0);',",
  dotProfile: "  '  v_k=(u_pass>0.5)?3.0:(u_trail>0.5?0.0:2.1);',",
  points: `  var NZ=64, PER=Math.max(1,Math.floor(N/NZ));
  for(var i=0;i<N;i++){
    /* the buffer is filled far row first. With premultiplied over-blending and
       no depth test, later points paint over earlier ones, so a near ridge hides
       the range standing behind it and the relief reads solid instead of
       transparent — this ordering is what makes the silhouette. */
    var uz=(Math.floor(i/PER)+0.5+(R0()*2-1)*0.40)/NZ;
    /* negative z is the far side; rows tighten toward it so distant ridges
       keep their grain instead of thinning out as they shrink */
    var vz=Math.pow(uz,1.30);
    dirs[i*3]=(R0()*2-1)*1.90;
    dirs[i*3+1]=0;
    dirs[i*3+2]=vz*2.20-1.10;
    rnds[i*2]=R0(); rnds[i*2+1]=R0();
  }
`,
  paths: `  var W=[];
  for(i=0;i<WORMS;i++){
    /* every vein wanders across the base plane; the shader lifts it onto the
       ridge with the same height field the lattice is displaced by */
    W.push({x0:(R0()*2-1)*1.30,am:0.20+R0()*0.32,fr:2.1+R0()*3.4,
            m:1+Math.floor(R0()*2),ph:R0()*6.283,
            str:0.92+R0()*0.30,arc:1.50+R0()*1.00,fl:R0()*6.283});
  }
  /* a point on vein k at angle ang, written into out[] — the parameter folds
     back on itself, so the flow runs down the slope and climbs back seamlessly */
  function onPath(w,ang,out){
    var f=ang/6.283185307179586; f-=Math.floor(f);
    var u=1-Math.abs(1-2*f);
    out[0]=w.x0+Math.sin(u*w.fr+w.ph)*w.am;
    out[1]=0;
    out[2]=1.05-2.10*u;
  }
`,
  shape: `'  vec3 dir=a_dir;',
  '  vec2 c=vec2(cos(u_th),sin(u_th));',
  /* the height field is read on a flat slice whose sample point rides a closed
     circular path, so the range drifts and morphs exactly periodically; the
     wavelength control scales every lookup together */
  '  float iw=1.0/u_wave;',
  '  vec3 g=vec3(dir.x,dir.z,0.0);',
  '  float n1=snoise(g*(1.05*iw)+vec3(c*0.42,0.0));',
  '  float n2=snoise(g*(2.35*iw)+vec3(0.0,c*0.36));',
  '  float n3=snoise(g*(5.30*iw)+vec3(c.y*0.30,0.0,c.x*0.30));',
  /* a ridged fractal: folding the noise about zero turns smooth hills into
     crests, and squaring the fold sharpens those crests into a skyline */
  '  float r1=1.0-abs(n1), r2=1.0-abs(n2);',
  '  float h=0.86*r1*r1+0.40*r2*r1+0.15*n3-0.58;',
  /* the range settles toward the near edge, so the front reads as a valley floor */
  '  h*=0.42+0.58*smoothstep(-0.55,1.15,-dir.z);',
  '  float shade=clamp(0.28+1.45*h,0.0,1.0);',
  /* recursive erosion: two scales of noise strip the scree off the slopes */
  '  float e=0.62*snoise(g*(1.55*iw)+vec3(c*1.10,0.4))+0.38*snoise(g*(3.30*iw)+vec3(0.3,c*0.95));',
  '  float alive=smoothstep(u_thr-0.07,u_thr+0.09,e+0.5+0.40*smoothstep(0.0,0.34,h));',
  '  vec3 q0=vec3(dir.x,h,dir.z);',
  '  vec3 n=u_rot*vec3(0.0,1.0,0.0);',
  '  vec3 p=u_rot*q0;',
  '  float persp=1.0/(1.0-0.26*p.z);',
  /* only the far rows haze out: everything else keeps full coverage, because
     the near rows have to paint over the far ones for the relief to read solid */
  '  float face=1.0-0.45*smoothstep(0.30,1.12,-dir.z);',`,
  palette: [
    "  '  vec3 cDim=vec3(0.30,0.22,0.42);',",
    "  '  vec3 cMid=vec3(0.94,0.45,0.20);',",
    "  '  vec3 cHot=vec3(1.00,0.83,0.48);',",
  ],
  tint: "  '  vec3 col=mix(cDim,cMid,clamp(shade*shade*1.15+a_rand.x*0.12,0.0,1.0));',",
  rotation: `    var ax=0.32+0.018*Math.sin(th);
    var ay=0.16*Math.sin(th+2.2);
    var az=0.0;`,
  grain: "        d[i]=n*0.86; d[i+1]=n*0.62; d[i+2]=n*0.74; d[i+3]=255;",
  lightBackground: "#f2f1f5",
  darkBackground: "#0b0a10",
};

const RECURSIVE_EROSION_NEBULA: RecursiveErosionStyle = {
  title: "Recursive Erosion — Nebula Cloud Motion Study",
  screenReaderCopy: "A looping study of a generative nebula: a volumetric cloud of small violet and magenta dots over a transparent backdrop, shearing around its own core and eroding into voids while bright glowing filaments wind through it, each dot fringed with red and blue chromatic aberration.",
  duration: "  var DUR=8.0;                  /* reference loop length */",
  lattice: "  var N=9000;                   /* lattice points */",
  ropes: "  var WORMS=7, TAIL=12, WN=WORMS*TAIL;",
  pearls: "  var PEARL=64, TN=WORMS*PEARL, TSTRIDE=5;",
  scale: "    gl.uniform2f(U.u_scale,0.66*aspX,0.66*aspY);",
  dotSize: "    gl.uniform1f(U.u_px,Math.max(1.0,size/1080*9.5*PSIZE));",
  threshold: "    gl.uniform1f(U.u_thr,0.12+0.05*Math.sin(th*2+0.8));",
  wormFalloff: "  '      boost+=u_worm[i].w*exp(-dot(d,d)*150.0);',",
  dotProfile: "  '  v_k=(u_pass>0.5)?3.0:1.2;',",
  points: `  var LOBE=[];
  for(var q=0;q<6;q++) LOBE.push([(R0()*2-1)*0.52,(R0()*2-1)*0.30,(R0()*2-1)*0.52,0.22+R0()*0.30]);
  for(var i=0;i<N;i++){
    var L=LOBE[Math.min(LOBE.length-1,Math.floor(R0()*LOBE.length))];
    /* three summed uniforms approximate a gaussian, so each lobe keeps a dense
       core that thins out instead of ending on a hard edge */
    var g1=R0()+R0()+R0()-1.5, g2=R0()+R0()+R0()-1.5, g3=R0()+R0()+R0()-1.5;
    dirs[i*3]=L[0]+g1*L[3]*2.10;
    dirs[i*3+1]=L[1]+g2*L[3]*1.25;
    dirs[i*3+2]=L[2]+g3*L[3]*2.10;
    rnds[i*2]=R0(); rnds[i*2+1]=R0();
  }
`,
  paths: `  var W=[];
  for(i=0;i<WORMS;i++){
    /* every filament rides a tilted ring through the cloud, so the loop stays
       seamless and a steady handful of them is always inside the volume */
    var cz=(R0()*2-1)*0.85, ca0=R0()*6.283, cr=Math.sqrt(Math.max(0,1-cz*cz));
    var c=[Math.cos(ca0)*cr,Math.sin(ca0)*cr,cz];
    var t0=Math.abs(c[1])<0.85?[0,1,0]:[1,0,0];
    var d=t0[0]*c[0]+t0[1]*c[1]+t0[2]*c[2];
    var u=[t0[0]-c[0]*d,t0[1]-c[1]*d,t0[2]-c[2]*d];
    var lu=Math.hypot(u[0],u[1],u[2]); u=[u[0]/lu,u[1]/lu,u[2]/lu];
    var v=[c[1]*u[2]-c[2]*u[1],c[2]*u[0]-c[0]*u[2],c[0]*u[1]-c[1]*u[0]];
    W.push({c:c,u:u,v:v,rad:0.34+R0()*0.80,off:(R0()*2-1)*0.46,
            m:1+Math.floor(R0()*2),ph:R0()*6.283,
            str:0.88+R0()*0.32,arc:1.35+R0()*0.85,fl:R0()*6.283});
  }
  /* a point on filament k's ring at angle ang, written into out[] */
  function onPath(w,ang,out){
    var ca=Math.cos(ang), sa=Math.sin(ang);
    out[0]=w.c[0]*w.off+(w.u[0]*ca+w.v[0]*sa)*w.rad;
    out[1]=w.c[1]*w.off+(w.u[1]*ca+w.v[1]*sa)*w.rad;
    out[2]=w.c[2]*w.off+(w.u[2]*ca+w.v[2]*sa)*w.rad;
  }
`,
  shape: `'  vec3 dir=a_dir;',
  '  vec2 c=vec2(cos(u_th),sin(u_th));',
  /* every noise lookup rides a closed circular path, so the shear is exactly
     periodic; the wavelength control scales all of them together */
  '  float iw=1.0/u_wave;',
  '  float n1=snoise(dir*(1.20*iw)+vec3(c*0.82,0.0));',
  '  float n2=snoise(dir*(2.45*iw)+vec3(0.0,c*0.68));',
  '  float n3=snoise(dir*(5.10*iw)+vec3(c.y*0.52,0.0,c.x*0.52));',
  '  float rad=length(dir);',
  /* the cloud shears around its own core instead of pulsing in and out; the
     ropes take a fraction of that shear, or the high-frequency term would
     shatter each filament into unrelated dots */
  '  vec3 q0=dir+vec3(n2-n3,n3-n1,n1-n2)*(u_trail>0.5?0.14:0.26)*(0.30+0.70*rad);',
  '  float shade=clamp(0.5+0.62*n1+0.30*n3-0.42*rad,0.0,1.0);',
  /* recursive erosion, folded about zero: where the summed noise crosses zero
     the cloud survives as a thin sheet, so the voids are separated by filaments
     rather than by an even fog */
  '  float e=1.0-abs(0.62*snoise(dir*(1.35*iw)+vec3(c*1.15,0.4))+0.38*snoise(dir*(2.90*iw)+vec3(0.3,c*0.95)));',
  '  float alive=smoothstep(u_thr+0.24,u_thr+0.78,e+0.34*(1.0-smoothstep(0.10,1.15,rad)));',
  '  vec3 n=normalize(u_rot*q0+vec3(0.0,0.0,0.0001));',
  '  vec3 p=u_rot*q0;',
  '  float persp=1.0/(1.0-0.22*p.z);',
  /* cloud dots stay translucent so the volume builds up as haze instead of
     reading as a bag of discs, and the core carries the extra density — the
     filament ropes opt out, or they would be hazed away with everything else */
  '  float face=(u_trail>0.5)?1.0:(0.20+0.56*smoothstep(-1.15,0.85,p.z))*(1.0+0.95*(1.0-smoothstep(0.0,0.60,rad)));',`,
  palette: [
    "  '  vec3 cDim=vec3(0.30,0.18,0.62);',",
    "  '  vec3 cMid=vec3(0.86,0.24,0.62);',",
    "  '  vec3 cHot=vec3(1.00,0.78,0.94);',",
  ],
  tint: "  '  vec3 col=mix(cDim,cMid,clamp(shade*0.85+a_rand.x*0.30,0.0,1.0));',",
  rotation: `    var ax=0.16*Math.sin(th)+0.05*Math.sin(th*2+1.1);
    var ay=0.42*Math.sin(th+2.2)+0.10*Math.cos(th*2);
    var az=0.08*Math.cos(th+0.6);`,
  grain: "        d[i]=n*0.78; d[i+1]=n*0.52; d[i+2]=n; d[i+3]=255;",
  lightBackground: "#f4f2f8",
  darkBackground: "#08060f",
};

const RECURSIVE_EROSION_STYLES = {
  sphere: RECURSIVE_EROSION_SPHERE,
  branches: RECURSIVE_EROSION_BRANCHES,
  mountains: RECURSIVE_EROSION_MOUNTAINS,
  nebula: RECURSIVE_EROSION_NEBULA,
} as const;

export type RecursiveErosionVariant = keyof typeof RECURSIVE_EROSION_STYLES;

export const RECURSIVE_EROSION_DEFAULTS = {
  ...NEUFORM_ISOLATED_DEFAULTS,
  variant: "sphere",
  speed: 1,
  pointSize: 1,
  wavelength: 1,
} as const;

/* the live-control and pointer channel every style carries */
const RECURSIVE_EROSION_HOST_RUNTIME = `  /* ------------------------------------------------------------------ *
     host controls — this document is served through a srcDoc iframe, so it
     cannot take a live React prop without being rebuilt, and rebuilding it
     would restart the loop on every slider tick. Speed, point size, and
     wavelength arrive by postMessage and land on the next frame; the pointer
     is read here and handed to the shader in clip space, the same space
     gl_Position is written in.
   * ------------------------------------------------------------------ */
  var SPEED=1, PSIZE=1, WAVE=1;
  var PX=0, PY=0, PA=0, tPX=0, tPY=0, tPA=0;
  window.addEventListener('message',function(ev){
    var d=ev&&ev.data&&ev.data.threeuiRuntime;
    if(!d) return;
    if(typeof d.speed==='number') SPEED=Math.max(0,Math.min(3,d.speed));
    if(typeof d.pointSize==='number') PSIZE=Math.max(0.35,Math.min(2.5,d.pointSize));
    if(typeof d.wavelength==='number') WAVE=Math.max(0.4,Math.min(2.5,d.wavelength));
    /* a paused document still has to repaint, or the sliders look dead */
    if(!playing) render(at);
  });
  var PREF=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!PREF){
    /* the isolating host marks the background stage pointer-events:none, so the
       cursor never hit-tests onto it — the listener goes on the document, which
       still sees every move over the frame, and the stage is only measured */
    window.addEventListener('pointermove',function(ev){
      var r=stage.getBoundingClientRect();
      if(!r.width||!r.height) return;
      tPX=((ev.clientX-r.left)/r.width)*2-1;
      tPY=1-((ev.clientY-r.top)/r.height)*2;
      tPA=1;
    });
    document.documentElement.addEventListener('pointerleave',function(){tPA=0});
    window.addEventListener('pointercancel',function(){tPA=0});
    window.addEventListener('blur',function(){tPA=0});
  }
`;

function transformRecursiveErosionSource(source: string, style: RecursiveErosionStyle) {
  let served = source
    .replace("<title>Recursive Erosion — Particle Sphere Motion Study</title>", `<title>${style.title}</title>`)
    .replace(/<p class="sr">[\s\S]*?<\/p>/, `<p class="sr">${style.screenReaderCopy}</p>`)
    .replace("  var DUR=3.99;                 /* reference loop length */", style.duration)
    .replace("  var N=2500;                   /* lattice points */", style.lattice)
    .replace("  var WORMS=7, TAIL=14, WN=WORMS*TAIL;", style.ropes)
    .replace("  var PEARL=34, TN=WORMS*PEARL, TSTRIDE=5;", style.pearls)
    .replace(
      "  'uniform float u_th, u_px, u_pass, u_thr, u_trail;',",
      "  'uniform float u_th, u_px, u_pass, u_thr, u_trail, u_wave;',\n  'uniform vec3 u_ptr;',",
    )
    .replace(RECURSIVE_EROSION_SHAPE_BLOCK, style.shape)
    .replace("  '      boost+=u_worm[i].w*exp(-dot(d,d)*260.0);',", style.wormFalloff)
    .replace("  '  vec3 cDim=vec3(0.94,0.33,0.05);',", style.palette[0])
    .replace("  '  vec3 cMid=vec3(1.00,0.56,0.16);',", style.palette[1])
    .replace("  '  vec3 cHot=vec3(1.00,0.71,0.31);',", style.palette[2])
    .replace("  '  vec3 col=mix(cDim,cMid,a_rand.x*a_rand.x);',", style.tint)
    .replace("  '  v_k=(u_pass>0.5)?3.0:(u_trail>0.5?0.0:2.1);',", style.dotProfile)
    .replace(RECURSIVE_EROSION_PATH_BLOCK, style.paths)
    .replace(RECURSIVE_EROSION_ROTATION_BLOCK, style.rotation)
    .replace("        d[i]=n; d[i+1]=n*0.74; d[i+2]=n*0.52; d[i+3]=255;", style.grain)
    /* the grain rides the same clock, so speed 0 is a still frame and not a
       frozen field under a crawling overlay */
    .replace("    grain(frameNo++);", "    grain(SPEED>0?frameNo++:frameNo);")
    .replace(
      "  ['u_rot','u_th','u_scale','u_px','u_pass','u_thr','u_off','u_worm','u_trail'].forEach(function(k){",
      "  ['u_rot','u_th','u_scale','u_px','u_pass','u_thr','u_off','u_worm','u_trail','u_ptr','u_wave'].forEach(function(k){",
    )
    .replace("  var frameNo=0;", `${RECURSIVE_EROSION_HOST_RUNTIME}  var frameNo=0;`)
    .replace(
      "    var th=2*Math.PI*(t/DUR);\n    worms(th); rope(th);",
      "    var th=2*Math.PI*(t/DUR);\n    /* ease the pointer, so a fast flick pulls the field instead of snapping it */\n    PX+=(tPX-PX)*0.16; PY+=(tPY-PY)*0.16; PA+=(tPA-PA)*0.10;\n    worms(th); rope(th);",
    )
    .replace(
      "    gl.uniform4fv(U.u_worm,wormPos);",
      "    gl.uniform4fv(U.u_worm,wormPos);\n    gl.uniform3f(U.u_ptr,PX,PY,PA);\n    gl.uniform1f(U.u_wave,WAVE);",
    )
    .replace(
      "  function play(){if(playing&&raf)return;playing=true;start=performance.now()-at*1000;if(!raf)raf=requestAnimationFrame(tick)}",
      "  function play(){if(playing&&raf)return;playing=true;start=null;if(!raf)raf=requestAnimationFrame(tick)}",
    )
    .replace(
      "    if(start===null)start=now;\n    at=((now-start)/1000)%DUR;",
      "    if(start===null)start=now;\n    /* the clock accumulates, so the speed control changes the rate instead of\n       rescaling elapsed time, which would jump the phase on every change */\n    var dt=Math.min(0.1,(now-start)/1000); start=now;\n    at=(at+dt*SPEED)%DUR;",
    )
    .replace("    gl.uniform2f(U.u_scale,0.672*aspX,0.672*aspY);", style.scale)
    .replace("    gl.uniform1f(U.u_px,Math.max(1.0,size/1080*8.0));", style.dotSize)
    .replace("    gl.uniform1f(U.u_thr,0.19+0.04*Math.sin(th*2+0.8));", style.threshold);

  if (style.points) served = served.replace(RECURSIVE_EROSION_POINT_BLOCK, style.points);
  if (style.pointerBoost) served = served.replace("  '    boost=min(boost,1.5);',", style.pointerBoost);
  if (style.projection) served = served.replace("  '  gl_Position=vec4(p.xy*persp*u_scale+u_off,0.0,1.0);',", style.projection);
  if (style.flicker) {
    served = served
      .replace(RECURSIVE_EROSION_HALO_FLICKER, style.flicker)
      .replace(RECURSIVE_EROSION_ROPE_FLICKER, style.flicker);
  }
  return served;
}

function transformEpiludeWordmarkSource(source: string, mode: EffectMode) {
  const palette = mode === "light"
    ? "[[8, 10, 15], [40, 48, 62], [85, 96, 116]]"
    : "[[255, 255, 255], [226, 232, 240], [191, 205, 225]]";

  return source
    .replace("<title>Epilude — Footer</title>", "<title>Shaders Particle Wordmark</title>")
    .replace("aspect-ratio: 8.541554959785524;", "aspect-ratio: 5.333333333333333;")
    .replace(/var WORDMARK =[\s\S]*?"<\/svg>";/, `var WORDMARK = ${JSON.stringify(SHADERS_WORDMARK_SVG)};`)
    .replace("var PALETTE = [[255, 255, 255], [226, 232, 240], [191, 205, 225]];", `var PALETTE = ${palette};`)
    .replace("a: 0.04 + 0.95 * band * Math.pow(flake, 1.8)", "a: 0.14 + 0.86 * band * Math.pow(flake, 1.8)");
}

function transformAudioWordmarkSource(source: string, mode: EffectMode) {
  const background = mode === "light" ? "#f4f7fb" : "#000";
  const ink = mode === "light" ? "#172033" : "#E8EEE9";
  const secondaryInk = mode === "light" ? "#536076" : "#c9d4cc";
  const accent = mode === "light" ? "#315efb" : "#7080ff";

  return source
    .replace("<title>Supreme Radio — Graphic Identity</title>", "<title>ThreeUI — Audio Wordmark</title>")
    .replaceAll("supreme radio", "ThreeUI")
    .replaceAll("#EA3927", accent)
    .replaceAll("#E8EEE9", ink)
    .replaceAll("#E3EDE5", ink)
    .replaceAll("#c9d4cc", secondaryInk)
    .replaceAll("#000", background)
    .replace("var DUR = 20;", "var DUR = 4.7;");
}

const EFFECTS = {
  expanse: {
    title: "Expanse Field shader background",
    source: expanseSource,
    background: "#07080b",
    targets: [{ selector: "#glcanvas", role: "background" }],
  },
  starfield: {
    title: "Imaginie star portal",
    source: starfieldSource,
    background: "#0d0a12",
    theme: {
      nativeMode: "dark",
      lightBackground: "#f4f7fb",
      darkBackground: "#0d0a12",
      invertBackground: true,
    },
    targets: [
      { selector: "#ambient-starfield", role: "background" },
      { selector: "#portal-stars", role: "background" },
      { selector: ".holo-btn", role: "button" },
    ],
  },
  particleOrb: {
    title: "Synthesis autonomous orb",
    source: particleOrbSource,
    background: "#050505",
    targets: [{ selector: "#orbCanvas", role: "background" }],
  },
  performanceGaugesTachometer: {
    title: "Tachometer diagnostic gauge",
    source: performanceGaugesSource,
    background: "#000000",
    targets: [{ selector: "#gauge-tachometer", role: "visual", fit: "contain-square" }],
  },
  performanceGaugesSpeedometer: {
    title: "Speedometer diagnostic gauge",
    source: performanceGaugesSource,
    background: "#000000",
    targets: [{ selector: "#gauge-speedometer", role: "visual", fit: "contain-square" }],
  },
  performanceGaugesBoost: {
    title: "Turbo boost diagnostic gauge",
    source: performanceGaugesSource,
    background: "#000000",
    targets: [{ selector: "#gauge-boost", role: "visual", fit: "contain-square" }],
  },
  performanceGaugesPower: {
    title: "EV power diagnostic gauge",
    source: performanceGaugesSource,
    background: "#000000",
    targets: [{ selector: "#gauge-power", role: "visual", fit: "contain-square" }],
  },
  logicCore: {
    title: "Logic Core isometric field",
    source: logicCoreSource,
    background: "#050505",
    targets: [{ selector: "#three-canvas-container", role: "background" }],
  },
  ignition: {
    title: "Ignition Button shader button",
    source: ignitionSource,
    background: "#f0ede7",
    theme: {
      nativeMode: "light",
      lightBackground: "#f0ede7",
      darkBackground: "#121316",
      invertBackground: true,
    },
    targets: [
      { selector: "#bg-gl", role: "background" },
      { selector: "#btn", role: "button" },
    ],
  },
  induction: {
    title: "Induction Button kinetic button",
    source: inductionSource,
    background: "#050505",
    theme: {
      nativeMode: "dark",
      lightBackground: "#f4f7fb",
      darkBackground: "#050505",
      invertBackground: true,
    },
    targets: [
      { selector: "#bg-canvas", role: "background" },
      { selector: "#btn", role: "button" },
    ],
  },
  aetherisLabs: {
    title: "Aetheris Labs plasma button",
    source: aetherisLabsSource,
    background: "#020614",
    theme: {
      nativeMode: "dark",
      lightBackground: "#f4f7fb",
      darkBackground: "#020614",
      invertBackground: true,
    },
    targets: [
      { selector: "#bg-gl", role: "background" },
      { selector: "#btn", role: "button" },
    ],
  },
  tactile: {
    title: "Nexus tactile fluidics button",
    source: tactileSource,
    background: "#03090d",
    theme: {
      nativeMode: "dark",
      lightBackground: "#f4f7fb",
      darkBackground: "#03090d",
      invertBackground: true,
    },
    targets: [
      { selector: "#bg-canvas", role: "background" },
      { selector: "#btn", role: "button" },
    ],
  },
  thinking: {
    title: "Thinking Button canvas animation",
    source: thinkingSource,
    background: "#111318",
    theme: {
      lightBackground: "#f4f7fb",
      darkBackground: "#111318",
    },
    transformSource: transformThinkingButtonSource,
    targets: [{ selector: "#stage", role: "button" }],
  },
  slidingTextCta: {
    title: "Sliding Text CTA button",
    source: slidingTextCtaSource,
    background: "#111318",
    theme: { lightBackground: "#f4f7fb", darkBackground: "#111318" },
    targets: [{ selector: ".component-wrapper button", role: "button", preserveTransform: true }],
  },
  floatingDotsCta: {
    title: "Floating Dots CTA button",
    source: floatingDotsCtaSource,
    background: "#111318",
    theme: { lightBackground: "#f4f7fb", darkBackground: "#111318" },
    targets: [{ selector: ".component-wrapper button", role: "button", preserveTransform: true }],
  },
  launchButton: {
    title: "Gradient Launch button",
    source: launchButtonSource,
    background: "#111318",
    theme: { lightBackground: "#f4f7fb", darkBackground: "#111318" },
    targets: [{ selector: ".component-wrapper button", role: "button", preserveTransform: true }],
  },
  dotBorderButton: {
    title: "Dot Border button",
    source: dotBorderButtonSource,
    background: "#111318",
    theme: { lightBackground: "#f4f7fb", darkBackground: "#111318" },
    transformSource: transformDotBorderButtonSource,
    targets: [{ selector: ".component-wrapper .btn-wrapper", role: "button", preserveTransform: true }],
  },
  gradientCta: {
    title: "Gradient CTA button",
    source: gradientCtaSource,
    background: "#111318",
    theme: { lightBackground: "#f4f7fb", darkBackground: "#111318" },
    targets: [{ selector: ".component-wrapper button", role: "button", preserveTransform: true }],
  },
  spinningBorderButton: {
    title: "Spinning Border button",
    source: spinningBorderButtonSource,
    background: "#111318",
    theme: { lightBackground: "#f4f7fb", darkBackground: "#111318" },
    targets: [{ selector: ".component-wrapper button", role: "button", preserveTransform: true }],
  },
  glassmorphismCta: {
    title: "Glassmorphism CTA button",
    source: glassmorphismCtaSource,
    background: "#111318",
    theme: { lightBackground: "#f4f7fb", darkBackground: "#111318" },
    targets: [{ selector: ".component-wrapper a", role: "button", preserveTransform: true }],
  },
  generateButton: {
    title: "Generate button",
    source: generateButtonSource,
    background: "#111318",
    theme: { lightBackground: "#f4f7fb", darkBackground: "#111318" },
    targets: [{ selector: ".component-wrapper .btn-wrapper", role: "button", preserveTransform: true }],
  },
  gradientPillButton: {
    title: "Gradient Pill button",
    source: gradientPillButtonSource,
    background: "#111318",
    theme: { lightBackground: "#f4f7fb", darkBackground: "#111318" },
    transformSource: transformGradientPillButtonSource,
    targets: [{ selector: ".component-wrapper button", role: "button", preserveTransform: true }],
  },
  gradientBeamCta: {
    title: "Gradient Beam CTA button",
    source: gradientBeamCtaSource,
    background: "#111318",
    theme: { lightBackground: "#f4f7fb", darkBackground: "#111318" },
    targets: [{ selector: ".component-wrapper button", role: "button", preserveTransform: true }],
  },
  recursiveErosion: {
    title: "Recursive Erosion particle sphere background",
    source: recursiveErosionSource,
    background: "#0a0908",
    theme: {
      lightBackground: "#f4f3f1",
      darkBackground: "#0a0908",
    },
    targets: [{ selector: "#stage", role: "background" }],
    hiddenTargets: ["#badge", ".sr"],
  },
  threeUIIntro: {
    title: "ThreeUI chromatic wordmark intro",
    source: creatorStudioIntroSource,
    background: "#000000",
    theme: {
      nativeMode: "dark",
      lightBackground: "#f4f7fb",
      darkBackground: "#000000",
      invertBackground: true,
    },
    targets: [{ selector: "#stage", role: "background" }],
    hiddenTargets: [".sr"],
    introWordmark: {
      sceneSelector: "#comp .scene:first-child",
      text: "ThreeUI",
      fontSize: 130,
      endTime: 1.7,
      holdTime: 1.1,
      logoSvg: THREEUI_MARK_SVG,
    },
  },
  particleWordmark: {
    title: "Shaders particle wordmark",
    source: epiludeFooterSource,
    background: "#0c0c0d",
    theme: {
      lightBackground: "#f4f7fb",
      darkBackground: "#0c0c0d",
    },
    transformSource: transformEpiludeWordmarkSource,
    targets: [{ selector: "#storm", role: "visual", fit: "wide-wordmark" }],
  },
  audioWordmark: {
    title: "ThreeUI audio wordmark",
    source: audioWordmarkSource,
    background: "#000000",
    theme: {
      lightBackground: "#f4f7fb",
      darkBackground: "#000000",
    },
    transformSource: transformAudioWordmarkSource,
    targets: [{ selector: "#stage", role: "visual", fit: "portrait-stage", preserveTransform: true }],
  },
  galleryHeading: {
    title: "Gallery Heading canvas animation",
    source: galleryHeadingSource,
    background: "#000000",
    theme: {
      lightBackground: "#f4f7fb",
      darkBackground: "#000000",
    },
    transformSource: (source, mode) => transformGalleryHeadingSource(source, mode, GALLERY_HEADING_VARIANTS[GALLERY_HEADING_DEFAULTS.variant]),
    targets: [{ selector: "#stage", role: "background" }],
  },
  dimensional: {
    title: "Vanguard dimensional architecture",
    source: dimensionalSource,
    background: "#050608",
    targets: [{ selector: "#webgl-canvas", role: "background" }],
  },
  cloud: {
    title: "Strata cloud migration field",
    source: cloudSource,
    background: "#071010",
    targets: [{ selector: "#c", role: "background" }],
  },
  vertex9: {
    title: "Vertex 9 global data field",
    source: vertex9Source,
    background: "#050505",
    targets: [{ selector: "#webgl-canvas", role: "background" }],
  },
  topology: {
    title: "Nexus topology field",
    source: topologySource,
    background: "#070707",
    targets: [{ selector: "#animationCanvas", role: "background" }],
  },
  voidField: {
    title: "Void Field shader background",
    source: voidFieldSource,
    background: "#030305",
    targets: [{ selector: "#webgl-canvas", role: "background" }],
  },
} as const satisfies Record<string, EffectDefinition>;

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(maximum, Math.max(minimum, value));
}

function effectBackground(definition: EffectDefinition, mode: EffectMode) {
  return definition.theme?.[`${mode}Background`] ?? definition.background;
}

function buildFocusedDocument(definition: EffectDefinition, mode: EffectMode) {
  const background = effectBackground(definition, mode);
  const invertBackground = definition.theme?.invertBackground === true && definition.theme.nativeMode !== mode;
  const source = definition.transformSource?.(definition.source, mode) ?? definition.source;
  const targetJson = JSON.stringify(definition.targets).replace(/</g, "\\u003c");
  const hiddenTargetJson = JSON.stringify(definition.hiddenTargets ?? []).replace(/</g, "\\u003c");
  const introWordmarkJson = JSON.stringify(definition.introWordmark ?? null).replace(/</g, "\\u003c");
  const modeJson = JSON.stringify(mode);
  const backgroundFilter = invertBackground ? "filter: invert(1) hue-rotate(180deg) saturate(.92) brightness(1.02) !important;" : "";
  const introWordmarkStyle = definition.introWordmark
    ? `${definition.introWordmark.sceneSelector} .tx { font-size: ${definition.introWordmark.fontSize}px !important; }`
    : "";
  const focusStyle = `<style data-threeui-focus>
html, body { width: 100% !important; height: 100% !important; min-height: 0 !important; margin: 0 !important; padding: 0 !important; overflow: hidden !important; background: ${background} !important; color-scheme: ${mode} !important; }
body { position: relative !important; display: flex !important; align-items: center !important; justify-content: center !important; }
body > * { visibility: hidden !important; }
body[data-threeui-ready] > [data-threeui-role] { visibility: visible !important; }
[data-threeui-residual] { display: none !important; }
[data-threeui-hidden] { display: none !important; }
[data-threeui-role="background"] { position: fixed !important; inset: 0 !important; width: 100% !important; height: 100% !important; max-width: none !important; max-height: none !important; z-index: 0 !important; opacity: 1 !important; pointer-events: none !important; ${backgroundFilter} }
[data-threeui-role="background"][data-threeui-fit="contain-square"] { position: absolute !important; top: 50% !important; right: auto !important; bottom: auto !important; left: 50% !important; width: min(100vw, 100vh) !important; height: min(100vw, 100vh) !important; aspect-ratio: 1 / 1 !important; transform: translate(-50%, -50%) !important; }
[data-threeui-role="button"] { position: relative !important; z-index: 2 !important; opacity: 1 !important; flex: none !important; }
[data-threeui-role="button"]:not([data-threeui-preserve-transform]) { transform: none !important; }
[data-threeui-role="visual"] { position: relative !important; z-index: 1 !important; width: min(100%, 1040px) !important; max-width: 1040px !important; max-height: 100% !important; margin: auto !important; padding: 24px !important; overflow: auto !important; opacity: 1 !important; filter: none !important; }
[data-threeui-role="visual"]:not([data-threeui-preserve-transform]) { transform: none !important; }
[data-threeui-role="visual"][data-threeui-fit="contain-square"] { flex: none !important; width: min(calc(100vw - 32px), calc(100vh - 32px)) !important; max-width: none !important; height: min(calc(100vw - 32px), calc(100vh - 32px)) !important; max-height: none !important; aspect-ratio: 1 / 1 !important; padding: 0 !important; overflow: hidden !important; }
[data-threeui-role="visual"][data-threeui-fit="wide-wordmark"] { width: min(calc(100vw - 48px), 1180px) !important; max-width: calc(100vw - 48px) !important; height: auto !important; max-height: none !important; aspect-ratio: 16 / 3 !important; padding: 0 !important; overflow: hidden !important; }
[data-threeui-role="visual"][data-threeui-fit="portrait-stage"] { position: absolute !important; top: 50% !important; right: auto !important; bottom: auto !important; left: 50% !important; width: 1080px !important; max-width: none !important; height: 1350px !important; max-height: none !important; padding: 0 !important; overflow: hidden !important; transform-origin: center !important; }
${introWordmarkStyle}
</style>`;
  const focusScript = `<script data-threeui-focus>
(function () {
  document.documentElement.dataset.sfMode = ${modeJson};
  var isolated = false;
  function isolate() {
    if (isolated) return;
    var specs = ${targetJson};
    var hiddenSelectors = ${hiddenTargetJson};
    var introWordmark = ${introWordmarkJson};
    var roots = [];
    hiddenSelectors.forEach(function (selector) {
      document.querySelectorAll(selector).forEach(function (element) {
        element.setAttribute('data-threeui-hidden', '');
        element.setAttribute('aria-hidden', 'true');
        if ('inert' in element) element.inert = true;
      });
    });
    specs.forEach(function (spec) {
      var element = document.querySelector(spec.selector);
      if (!element) return;
      element.setAttribute('data-threeui-role', spec.role);
      if (spec.fit) element.setAttribute('data-threeui-fit', spec.fit);
      if (spec.preserveTransform) element.setAttribute('data-threeui-preserve-transform', '');
      if (!roots.some(function (root) { return root.contains(element); })) roots.push(element);
    });
    if (introWordmark) {
      var introScene = document.querySelector(introWordmark.sceneSelector);
      var introText = introScene && introScene.querySelector('.tx');
      var introMark = introText && introText.querySelector('.mark');
      if (introText && introMark) {
        introMark.innerHTML = introWordmark.logoSvg;
        var introCharacters = Array.from(introText.children).filter(function (element) { return element !== introMark; });
        introCharacters.forEach(function (element, index) {
          element.textContent = introWordmark.text[index] === ' ' ? '\u00a0' : (introWordmark.text[index] || '');
          element.style.display = index < introWordmark.text.length ? 'inline-block' : 'none';
        });
      }
      var introReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      var introStartedAt = performance.now();
      function renderIntroWordmark(now) {
        if (typeof window.__seek !== 'function') return;
        if (introReducedMotion) {
          window.__seek(introWordmark.endTime);
          return;
        }
        var introCycle = introWordmark.endTime + introWordmark.holdTime;
        var introTime = ((now - introStartedAt) / 1000) % introCycle;
        window.__seek(Math.min(introTime, introWordmark.endTime));
        requestAnimationFrame(renderIntroWordmark);
      }
      requestAnimationFrame(renderIntroWordmark);
    }
    if (!roots.length) return;
    isolated = true;
    roots.forEach(function (root) {
      var placeholderLink = root.matches('a[href="#"]') ? root : root.querySelector('a[href="#"]');
      if (placeholderLink) placeholderLink.addEventListener('click', function (event) { event.preventDefault(); });
      document.body.appendChild(root);
    });
    Array.from(document.body.children).forEach(function (element) {
      if (roots.indexOf(element) !== -1) return;
      element.setAttribute('data-threeui-residual', '');
      element.setAttribute('aria-hidden', 'true');
      if ('inert' in element) element.inert = true;
    });
    document.body.setAttribute('data-threeui-ready', '');
    requestAnimationFrame(function () { window.dispatchEvent(new Event('resize')); });
  }
  function scheduleIsolation() { setTimeout(isolate, 100); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', scheduleIsolation, { once: true });
  else scheduleIsolation();
  window.addEventListener('load', isolate, { once: true });
})();
</script>`;
  return source
    .replace(/<\/head>/i, `${focusStyle}</head>`)
    .replace(/<\/body>/i, `${focusScript}</body>`);
}

function NeuformIsolatedEffect({
  definition,
  mode = NEUFORM_ISOLATED_DEFAULTS.mode,
  hue = NEUFORM_ISOLATED_DEFAULTS.hue,
  saturation = NEUFORM_ISOLATED_DEFAULTS.saturation,
  brightness = NEUFORM_ISOLATED_DEFAULTS.brightness,
  runtime,
  trackPointerHover,
  className,
  style,
}: NeuformIsolatedEffectProps & {
  definition: EffectDefinition;
  runtime?: Readonly<Record<string, number | string>>;
  trackPointerHover?: boolean;
}) {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const safeMode: EffectMode = mode === "light" ? "light" : "dark";
  const background = effectBackground(definition, safeMode);
  const source = useMemo(() => buildFocusedDocument(definition, safeMode), [definition, safeMode]);
  const safeHue = clamp(hue, -180, 180);
  const safeSaturation = clamp(saturation, 0, 2);
  const safeBrightness = clamp(brightness, 0.35, 1.65);
  const filter = safeHue === 0 && safeSaturation === 1 && safeBrightness === 1
    ? undefined
    : `hue-rotate(${safeHue}deg) saturate(${safeSaturation}) brightness(${safeBrightness})`;

  /* the leave edge is a handshake. The frame announces that the pointer arrived,
     because the host document sees no moves at all while the pointer is over the
     frame; the host then reports the first move that lands outside the frame,
     because a sandboxed cross-process frame is not guaranteed a pointerleave. */
  useEffect(() => {
    const frame = frameRef.current;
    if (!trackPointerHover || !frame) return undefined;
    let inside = false;

    const leave = () => {
      if (!inside) return;
      inside = false;
      frame.contentWindow?.postMessage({ threeuiRuntime: { hover: 0 } }, "*");
    };
    const onMessage = (event: MessageEvent) => {
      if (event.source === frame.contentWindow && event.data?.threeuiPointerOver) inside = true;
    };
    const onPointerMove = (event: PointerEvent) => {
      if (!inside) return;
      const bounds = frame.getBoundingClientRect();
      const outside = event.clientX < bounds.left || event.clientX > bounds.right
        || event.clientY < bounds.top || event.clientY > bounds.bottom;
      if (outside) leave();
    };

    window.addEventListener("message", onMessage);
    window.addEventListener("pointermove", onPointerMove, true);
    frame.addEventListener("pointerleave", leave);
    document.addEventListener("mouseleave", leave);
    window.addEventListener("blur", leave);
    return () => {
      window.removeEventListener("message", onMessage);
      window.removeEventListener("pointermove", onPointerMove, true);
      frame.removeEventListener("pointerleave", leave);
      document.removeEventListener("mouseleave", leave);
      window.removeEventListener("blur", leave);
    };
  }, [trackPointerHover]);

  /* a srcDoc document cannot take a live prop, so continuous controls are posted
     into it instead of rebuilt into it — rebuilding restarts the animation */
  const runtimeMessage = runtime ? JSON.stringify(runtime) : null;
  useEffect(() => {
    const frame = frameRef.current;
    if (!frame || !runtimeMessage) return;
    const post = () => frame.contentWindow?.postMessage({ threeuiRuntime: JSON.parse(runtimeMessage) }, "*");
    post();
    frame.addEventListener("load", post);
    return () => frame.removeEventListener("load", post);
  }, [runtimeMessage, source]);

  return (
    <iframe
      ref={frameRef}
      className={className}
      data-mode={safeMode}
      title={definition.title}
      srcDoc={source}
      sandbox="allow-scripts"
      loading="eager"
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        border: 0,
        background,
        filter,
        ...style,
      }}
    />
  );
}

function createEffectComponent(definition: EffectDefinition) {
  return function EffectComponent(props: NeuformIsolatedEffectProps) {
    return <NeuformIsolatedEffect {...props} definition={definition} />;
  };
}

export const ExpanseField = createEffectComponent(EFFECTS.expanse);
export const StarPortal = createEffectComponent(EFFECTS.starfield);
export const ParticleOrbField = createEffectComponent(EFFECTS.particleOrb);
const PERFORMANCE_GAUGE_VARIANTS = {
  tachometer: EFFECTS.performanceGaugesTachometer,
  speedometer: EFFECTS.performanceGaugesSpeedometer,
  boost: EFFECTS.performanceGaugesBoost,
  power: EFFECTS.performanceGaugesPower,
} as const;

export type PerformanceGaugesVariant = keyof typeof PERFORMANCE_GAUGE_VARIANTS;

export const PERFORMANCE_GAUGES_DEFAULTS = {
  ...NEUFORM_ISOLATED_DEFAULTS,
  variant: "tachometer",
} as const;

export function PerformanceGauges({ variant = PERFORMANCE_GAUGES_DEFAULTS.variant, ...props }: NeuformIsolatedEffectProps & { variant?: PerformanceGaugesVariant }) {
  const definition = PERFORMANCE_GAUGE_VARIANTS[variant] ?? PERFORMANCE_GAUGE_VARIANTS.tachometer;
  return <NeuformIsolatedEffect {...props} definition={definition} />;
}
export const LogicCoreField = createEffectComponent(EFFECTS.logicCore);
export const IgnitionButton = createEffectComponent(EFFECTS.ignition);
export const InductionButton = createEffectComponent(EFFECTS.induction);
export const PlasmaButton = createEffectComponent(EFFECTS.aetherisLabs);
export const TactileButton = createEffectComponent(EFFECTS.tactile);
export const ThinkingButton = createEffectComponent(EFFECTS.thinking);
/** @deprecated Use ThinkingButton. */
export const UploadingButton = ThinkingButton;
export const SlidingTextCta = createEffectComponent(EFFECTS.slidingTextCta);
export const FloatingDotsCta = createEffectComponent(EFFECTS.floatingDotsCta);
export const LaunchButton = createEffectComponent(EFFECTS.launchButton);
export const DotBorderButton = createEffectComponent(EFFECTS.dotBorderButton);
export const GradientCta = createEffectComponent(EFFECTS.gradientCta);
export const SpinningBorderButton = createEffectComponent(EFFECTS.spinningBorderButton);
export const GlassmorphismCta = createEffectComponent(EFFECTS.glassmorphismCta);
export const GenerateButton = createEffectComponent(EFFECTS.generateButton);
export const GradientPillButton = createEffectComponent(EFFECTS.gradientPillButton);
export const GradientBeamCta = createEffectComponent(EFFECTS.gradientBeamCta);
export function RecursiveErosionBackground({
  variant = RECURSIVE_EROSION_DEFAULTS.variant,
  speed = RECURSIVE_EROSION_DEFAULTS.speed,
  pointSize = RECURSIVE_EROSION_DEFAULTS.pointSize,
  wavelength = RECURSIVE_EROSION_DEFAULTS.wavelength,
  ...props
}: NeuformIsolatedEffectProps & {
  variant?: RecursiveErosionVariant;
  speed?: number;
  pointSize?: number;
  wavelength?: number;
}) {
  const style = RECURSIVE_EROSION_STYLES[variant] ?? RECURSIVE_EROSION_STYLES[RECURSIVE_EROSION_DEFAULTS.variant];
  const definition = useMemo<EffectDefinition>(() => ({
    ...EFFECTS.recursiveErosion,
    title: style.title,
    background: style.darkBackground,
    theme: { lightBackground: style.lightBackground, darkBackground: style.darkBackground },
    transformSource: (source) => transformRecursiveErosionSource(source, style),
  }), [style]);
  const runtime = useMemo(() => ({
    speed: clamp(speed, 0, 3),
    pointSize: clamp(pointSize, 0.35, 2.5),
    wavelength: clamp(wavelength, 0.4, 2.5),
  }), [speed, pointSize, wavelength]);

  return <NeuformIsolatedEffect {...props} definition={definition} runtime={runtime} />;
}
export const ThreeUIIntro = createEffectComponent(EFFECTS.threeUIIntro);
export const ParticleWordmark = createEffectComponent(EFFECTS.particleWordmark);
export const AudioWordmark = createEffectComponent(EFFECTS.audioWordmark);
export function GalleryHeading({
  variant = GALLERY_HEADING_DEFAULTS.variant,
  font,
  weight,
  headlineSize,
  ...props
}: NeuformIsolatedEffectProps & {
  variant?: GalleryHeadingVariant;
  font?: GalleryHeadingFont;
  weight?: GalleryHeadingWeight;
  headlineSize?: number;
}) {
  const configuration = GALLERY_HEADING_VARIANTS[variant] ?? GALLERY_HEADING_VARIANTS[GALLERY_HEADING_DEFAULTS.variant];
  const definition = useMemo<EffectDefinition>(() => ({
    ...EFFECTS.galleryHeading,
    title: `${configuration.title} canvas animation`,
    transformSource: (source, mode) => transformGalleryHeadingSource(source, mode, configuration),
  }), [configuration]);
  /* typography rides the live channel: a rebuilt srcDoc would repaint every
     tile texture and restart the ring on each control tick. Leaving a prop out
     keeps the face this gallery was drawn with rather than a global default. */
  const runtime = useMemo(() => {
    const type = configuration.type;
    const resolvedWeight = weight && GALLERY_HEADING_WEIGHTS.includes(weight) ? weight : type.weight;
    return {
      font: (font && GALLERY_HEADING_FONTS[font]) ?? GALLERY_HEADING_FONTS[type.font],
      weight: resolvedWeight,
      headlineSize: clamp(headlineSize ?? type.headlineSize, 0.6, 1.8),
    };
  }, [configuration, font, headlineSize, weight]);

  return <NeuformIsolatedEffect {...props} definition={definition} runtime={runtime} trackPointerHover />;
}

/** @deprecated Use GalleryHeading. */
export const GradientCollection = GalleryHeading;
export const DimensionalField = createEffectComponent(EFFECTS.dimensional);
export const CloudField = createEffectComponent(EFFECTS.cloud);
export const DataField = createEffectComponent(EFFECTS.vertex9);
export const TopologyField = createEffectComponent(EFFECTS.topology);
export const VoidField = createEffectComponent(EFFECTS.voidField);
```

### `src/shaders/neuform-isolated/sources/void-protocol.html`

Role: variant-source · 358 lines · 21426 bytes · SHA-256 `affd21553ba951c0ff0f5a8e40a84ae70d49aaff3c4c69ea4ae1ec897dec21e3`

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Void Field</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400&display=swap" rel="stylesheet">
</head>
<body class="antialiased text-purple-200 bg-[#08030c] min-h-screen relative overflow-x-hidden flex items-center justify-center p-4 lg:p-12" style="font-family: 'Inter', sans-serif;">

    <!-- Background decorative text -->
    <div class="fixed top-[-5vh] left-[-10vw] text-[40vw] font-extralight tracking-tight text-purple-400/[0.03] select-none z-0 leading-none">
        042
    </div>

    <!-- Container Lines Directive -->
    <div class="relative w-full max-w-[1100px] mx-auto z-10">
        <!-- Infinite Container Vertical Lines -->
        <div class="absolute top-[-100vh] bottom-[-100vh] left-0 w-px bg-purple-400/10 hidden md:block z-0"></div>
        <div class="absolute top-[-100vh] bottom-[-100vh] right-0 w-px bg-purple-400/10 hidden md:block z-0"></div>
        
        <!-- Container Corner Nodes (6px square) -->
        <div class="absolute top-0 left-[-2.5px] w-[6px] h-[6px] bg-purple-300 border border-purple-800 z-20 hidden md:block"></div>
        <div class="absolute top-0 right-[-2.5px] w-[6px] h-[6px] bg-purple-300 border border-purple-800 z-20 hidden md:block"></div>
        <div class="absolute bottom-0 left-[-2.5px] w-[6px] h-[6px] bg-purple-300 border border-purple-800 z-20 hidden md:block"></div>
        <div class="absolute bottom-0 right-[-2.5px] w-[6px] h-[6px] bg-purple-300 border border-purple-800 z-20 hidden md:block"></div>

        <!-- Thin 16px Frame Brackets -->
        <div class="absolute top-[-16px] left-[-16px] w-[16px] h-[16px] border-t border-l border-purple-400/30 hidden md:block z-20"></div>
        <div class="absolute top-[-16px] right-[-16px] w-[16px] h-[16px] border-t border-r border-purple-400/30 hidden md:block z-20"></div>
        <div class="absolute bottom-[-16px] left-[-16px] w-[16px] h-[16px] border-b border-l border-purple-400/30 hidden md:block z-20"></div>
        <div class="absolute bottom-[-16px] right-[-16px] w-[16px] h-[16px] border-b border-r border-purple-400/30 hidden md:block z-20"></div>

        <div class="py-12 lg:py-24 flex justify-center w-full">
            
            <!-- Main Hardware Housing (2.3:1 Aspect Ratio on lg) -->
            <div class="relative w-full lg:aspect-[2.3/1] rounded-[3rem] bg-[#130a1c] shadow-[0_10px_40px_rgba(0,0,0,0.8),_0_20px_80px_rgba(0,0,0,0.6),inset_0_0_0_1px_rgba(216,180,254,0.15)] p-3 lg:p-5 flex flex-col">
                
                <!-- Premium Gradient Bezel Edge -->
                <div class="absolute inset-0 rounded-[3rem] shadow-[inset_0_2px_4px_rgba(216,180,254,0.05)] pointer-events-none z-10 border border-transparent" style="background: linear-gradient(135deg, rgba(216,180,254,0.15) 0%, rgba(216,180,254,0.02) 40%, transparent 100%) border-box; -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0); -webkit-mask-composite: destination-out; mask-composite: exclude;"></div>

                <!-- Hardware Details (Screws/Rivets top/bottom) -->
                <div class="absolute top-3 left-1/4 w-3 h-3 rounded-full bg-black/90 shadow-[inset_0_1px_1px_rgba(216,180,254,0.2)] z-20"></div>
                <div class="absolute top-3 right-1/4 w-3 h-3 rounded-full bg-black/90 shadow-[inset_0_1px_1px_rgba(216,180,254,0.2)] z-20"></div>
                <div class="absolute bottom-3 left-1/4 w-3 h-3 rounded-full bg-black/90 shadow-[inset_0_1px_1px_rgba(216,180,254,0.2)] z-20"></div>
                <div class="absolute bottom-3 right-1/4 w-3 h-3 rounded-full bg-black/90 shadow-[inset_0_1px_1px_rgba(216,180,254,0.2)] z-20"></div>

                <!-- Inner Housing / Shadow Box -->
                <div class="relative rounded-[2.5rem] bg-[#0a0510] overflow-hidden shadow-[inset_0_20px_50px_rgba(0,0,0,0.9)] border border-purple-400/5 z-10 flex-grow flex flex-col" style="background-image: repeating-linear-gradient(to right, #0a0510, #0a0510 6px, #10081a 6px, #10081a 10px);">
                    
                    <!-- Screen Area -->
                    <div class="relative m-4 lg:m-8 rounded-xl bg-[#0a0510] shadow-[inset_0_5px_20px_rgba(0,0,0,1)] overflow-hidden flex flex-col flex-grow min-h-[400px] lg:min-h-0">
                        
                        <!-- Premium Gradient Screen Border -->
                        <div class="absolute inset-0 rounded-xl pointer-events-none border border-transparent z-30" style="background: linear-gradient(180deg, rgba(216,180,254,0.15) 0%, rgba(216,180,254,0.02) 25%, rgba(0,0,0,0.8) 100%) border-box; -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0); -webkit-mask-composite: destination-out; mask-composite: exclude;"></div>

                        <!-- WebGL Dot Matrix Layer -->
                        <canvas id="webgl-canvas" class="absolute inset-0 w-full h-full opacity-80 mix-blend-screen pointer-events-none z-0"></canvas>

                        <!-- Screen Horizontal Corrugation Overlay -->
                        <div class="absolute inset-0 pointer-events-none z-10 opacity-40" style="background-image: repeating-linear-gradient(to bottom, transparent, transparent 18px, rgba(0,0,0,0.9) 18px, rgba(0,0,0,0.9) 20px);"></div>

                        <!-- Faint Geometric Wireframe -->
                        <svg class="absolute right-0 top-0 h-full w-2/3 opacity-10 pointer-events-none z-10 stroke-purple-500" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M400 50 L550 150 L550 350 L400 450 L250 350 L250 150 Z" stroke-width="2"></path>
                            <path d="M400 50 L400 250 M250 150 L400 250 M550 150 L400 250 M400 450 L400 250 M250 350 L400 250 M550 350 L400 250" stroke-width="1"></path>
                            <circle cx="550" cy="150" r="40" stroke-width="2"></circle>
                        </svg>

                        <!-- Content Container -->
                        <div class="relative z-20 flex flex-col h-full text-purple-100 w-full">
                            
                            <!-- Top Section -->
                            <div class="flex items-center px-6 lg:px-12 py-6 border-b border-purple-400/10 bg-gradient-to-r from-transparent to-black/60">
                                <div class="flex items-center gap-4 border-r border-purple-400/20 pr-8">
                                    <iconify-icon icon="solar:arrow-right-up-linear" class="text-4xl text-purple-400" style="stroke-width: 1.5px;"></iconify-icon>
                                    <div class="flex items-center gap-2">
                                        <div class="w-1 h-6 bg-purple-400/50"></div>
                                        <span class="text-3xl font-extralight tracking-tight">V-72</span>
                                    </div>
                                </div>
                                <div class="pl-8 text-xs font-normal uppercase tracking-widest opacity-70 leading-tight">
                                    Void<br>Protocol
                                </div>
                            </div>

                            <!-- Middle Section (Data Band) -->
                            <div class="bg-purple-500/[0.03] text-purple-100 border-b border-purple-400/10 flex flex-col lg:flex-row relative backdrop-blur-sm">
                                
                                <!-- Inner layout grid -->
                                <div class="grid grid-cols-1 lg:grid-cols-12 w-full">
                                    <!-- Column 1: Core Telemetry -->
                                    <div class="lg:col-span-3 px-6 lg:px-12 py-6 flex items-center border-b lg:border-b-0 lg:border-r border-purple-400/10">
                                        <h2 class="text-3xl lg:text-4xl font-extralight tracking-tight leading-none masked-reveal">
                                            Quantum<br>Metric
                                        </h2>
                                    </div>

                                    <!-- Column 2: Date -->
                                    <div class="lg:col-span-3 px-6 lg:px-8 py-6 flex items-center border-b lg:border-b-0 lg:border-r border-purple-400/10">
                                        <div class="flex items-start gap-1">
                                            <span class="text-4xl lg:text-5xl font-extralight tracking-tight">NET.42</span>
                                            <span class="text-sm font-extralight mt-1 opacity-70">.8192</span>
                                        </div>
                                        <iconify-icon icon="solar:double-alt-arrow-right-linear" class="ml-auto text-2xl opacity-40" style="stroke-width: 1.5px;"></iconify-icon>
                                    </div>

                                    <!-- Column 3: Data Uplink -->
                                    <div class="lg:col-span-3 px-6 lg:px-8 py-6 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-purple-400/10">
                                        <div class="text-4xl lg:text-5xl font-extralight tracking-tight masked-reveal">72</div>
                                        <div class="text-xs font-normal uppercase tracking-widest mt-1 opacity-70">Link Status</div>
                                    </div>

                                    <!-- Column 4: Cycles -->
                                    <div class="lg:col-span-3 px-6 lg:px-8 py-6 flex flex-col justify-center relative">
                                        <div class="flex items-center gap-3">
                                            <iconify-icon icon="solar:atom-linear" class="text-2xl opacity-40" style="stroke-width: 1.5px;"></iconify-icon>
                                            <div class="text-4xl lg:text-5xl font-extralight tracking-tight masked-reveal">1.059</div>
                                        </div>
                                        <div class="text-xs font-normal uppercase tracking-widest mt-1 ml-9 opacity-70">Phases</div>
                                    </div>
                                </div>
                            </div>

                            <!-- Bottom Section -->
                            <div class="flex-grow flex items-end px-6 lg:px-12 py-8 lg:py-12 bg-gradient-to-t from-black/80 to-transparent relative">
                                <div class="flex items-end gap-8 w-full">
                                    <div class="text-8xl lg:text-9xl leading-none font-extralight tracking-tight opacity-90 masked-reveal text-purple-100" style="text-shadow: 0px 0px 20px rgba(216,180,254,0.2);">
                                        99
                                    </div>
                                    <div class="mb-4 lg:mb-8 flex flex-col gap-2">
                                        <div class="text-xs font-normal uppercase tracking-widest leading-tight opacity-70">
                                            System<br>Override
                                        </div>
                                        <iconify-icon icon="solar:target-linear" class="text-2xl opacity-50 text-purple-200" style="stroke-width: 1.5px;"></iconify-icon>
                                    </div>
                                </div>

                                <!-- Bottom Edge Detailing -->
                                <div class="absolute bottom-0 left-0 w-full h-4 flex border-t border-purple-400/10">
                                    <div class="w-16 h-full bg-[#0e0716] border-r border-purple-400/10 flex items-center justify-center gap-1">
                                        <div class="w-1 h-1 bg-purple-400/30 rounded-full"></div>
                                        <div class="w-1 h-1 bg-purple-400/30 rounded-full"></div>
                                    </div>
                                    <div class="w-32 h-full bg-purple-400/5 border-r border-purple-400/10"></div>
                                    <!-- Striped hazard area -->
                                    <div class="w-48 h-full border-r border-purple-400/10" style="background-image: repeating-linear-gradient(45deg, rgba(216,180,254,0.05) 0, rgba(216,180,254,0.05) 4px, transparent 4px, transparent 8px);"></div>
                                    <div class="w-16 h-full bg-[#0e0716] border-r border-purple-400/10 flex items-center justify-center gap-1">
                                        <div class="w-1 h-1 bg-purple-400/30 rounded-full"></div>
                                        <div class="w-1 h-1 bg-purple-400/30 rounded-full"></div>
                                    </div>
                                    <div class="flex-grow h-full bg-purple-400/[0.02]"></div>
                                    <div class="w-16 h-full bg-[#0e0716] border-l border-purple-400/10 flex items-center justify-center gap-1">
                                        <div class="w-1 h-1 bg-purple-400/30 rounded-full"></div>
                                        <div class="w-1 h-1 bg-purple-400/30 rounded-full"></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Scripts for WebGL and GSAP -->
    <script>
        // 1. Masked Reveal via GSAP (TranslateY 100% to 0% with power4.out)
        document.addEventListener("DOMContentLoaded", () => {
            gsap.registerPlugin(ScrollTrigger);

            const revealElements = document.querySelectorAll('.masked-reveal');
            
            revealElements.forEach(el => {
                const text = el.innerHTML;
                const words = text.split(/<br>|\s+/).filter(w => w.trim() !== '');
                el.innerHTML = '';
                
                words.forEach((word) => {
                    const wrapper = document.createElement('span');
                    wrapper.className = 'inline-block overflow-hidden align-bottom pb-1 -mb-1 mr-2';
                    
                    const inner = document.createElement('span');
                    inner.className = 'inline-block translate-y-[100%] opacity-0';
                    inner.innerHTML = word;
                    
                    if(text.includes(word + '<br>')) {
                        wrapper.appendChild(inner);
                        el.appendChild(wrapper);
                        el.appendChild(document.createElement('br'));
                    } else {
                        wrapper.appendChild(inner);
                        el.appendChild(wrapper);
                    }
                });

                gsap.to(el.querySelectorAll('span > span'), {
                    y: "0%",
                    opacity: 1,
                    duration: 1.2,
                    ease: "power4.out",
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                    }
                });
            });
        });

        // 2. WebGL Dot-Matrix Terminal Shader
        const canvas = document.getElementById('webgl-canvas');
        const gl = canvas.getContext('webgl', { alpha: true, antialias: false });

        if (gl) {
            const resize = () => {
                canvas.width = canvas.clientWidth;
                canvas.height = canvas.clientHeight;
                gl.viewport(0, 0, canvas.width, canvas.height);
            };
            window.addEventListener('resize', resize);
            resize();

            const vertexShaderSource = `
                attribute vec2 position;
                void main() {
                    gl_Position = vec4(position, 0.0, 1.0);
                }
            `;

            const fragmentShaderSource = `
                precision highp float;
                uniform vec2 iResolution;
                uniform float iTime;
                uniform vec2 uMouse;

                vec2 barrel(vec2 uv, float amt) {
                    vec2 cc = uv - 0.5;
                    float r = dot(cc, cc);
                    return uv + cc * r * amt;
                }

                float rand(vec2 co) {
                    return fract(sin(dot(co, vec2(12.9898,78.233))) * 43758.5453);
                }

                void main() {
                    vec2 uv = gl_FragCoord.xy / iResolution.xy;
                    
                    // Parallax drift based on uMouse
                    vec2 mouseOffset = (uMouse - 0.5) * 0.05;
                    uv += mouseOffset;

                    // Barrel distortion curvature
                    uv = barrel(uv, 0.2);

                    // Clamp edges
                    if(uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
                        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
                        return;
                    }

                    // Dot matrix resolution
                    vec2 gridCount = vec2(100.0, 100.0 * (iResolution.y / iResolution.x));
                    vec2 gridUv = fract(uv * gridCount);
                    vec2 id = floor(uv * gridCount);

                    // Radial symmetry distance
                    vec2 cc = id / gridCount - 0.5;
                    float dist = length(cc);
                    
                    // Slow breathing pulse
                    float pulse = sin(iTime * 1.5 - dist * 10.0) * 0.5 + 0.5;

                    // Dot formulation
                    float dotSize = 0.35 * pulse;
                    float d = length(gridUv - 0.5);
                    float circle = smoothstep(dotSize, dotSize - 0.05, d);

                    // Digital scanlines
                    float scanline = sin(uv.y * 800.0) * 0.03;

                    // Randomized flicker
                    float flicker = rand(vec2(iTime, id.y)) > 0.98 ? 0.4 : 1.0;

                    // Base color compilation (Tinted Monotone Purple)
                    vec3 col = vec3(circle * pulse * flicker);
                    col -= scanline;
                    col *= vec3(0.7, 0.3, 1.0); // Purple tint
                    
                    // Vignette edge masking
                    col *= smoothstep(0.8, 0.2, dist);

                    gl_FragColor = vec4(col, 1.0);
                }
            `;

            const compileShader = (type, source) => {
                const shader = gl.createShader(type);
                gl.shaderSource(shader, source);
                gl.compileShader(shader);
                return shader;
            };

            const vertexShader = compileShader(gl.VERTEX_SHADER, vertexShaderSource);
            const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentShaderSource);

            const program = gl.createProgram();
            gl.attachShader(program, vertexShader);
            gl.attachShader(program, fragmentShader);
            gl.linkProgram(program);
            gl.useProgram(program);

            const positionBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
                -1.0, -1.0,  1.0, -1.0, -1.0,  1.0,
                -1.0,  1.0,  1.0, -1.0,  1.0,  1.0
            ]), gl.STATIC_DRAW);

            const positionLocation = gl.getAttribLocation(program, "position");
            gl.enableVertexAttribArray(positionLocation);
            gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

            const iResLoc = gl.getUniformLocation(program, "iResolution");
            const iTimeLoc = gl.getUniformLocation(program, "iTime");
            const uMouseLoc = gl.getUniformLocation(program, "uMouse");

            // Interactive pointer drift tracking
            let mouseX = 0.5, mouseY = 0.5;
            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX / window.innerWidth;
                mouseY = 1.0 - (e.clientY / window.innerHeight);
            });

            const startTime = performance.now();
            const render = (time) => {
                const elapsedTime = (time - startTime) / 1000.0;
                
                gl.uniform2f(iResLoc, canvas.width, canvas.height);
                gl.uniform1f(iTimeLoc, elapsedTime);
                gl.uniform2f(uMouseLoc, mouseX, mouseY);

                gl.drawArrays(gl.TRIANGLES, 0, 6);
                requestAnimationFrame(render);
            };
            requestAnimationFrame(render);
        }
    </script>
</body>
</html>
```

### `src/shaders/neuform-isolated/NeuformCraftEffects.tsx`

Role: variant-component · 268 lines · 10720 bytes · SHA-256 `0a1680c3c119dba8c61d946322afa0b64d36dfd80956fb5e7c3fd017d7bfa450`

```tsx
import { useMemo, type CSSProperties } from "react";

import emberStormSource from "./sources/aeonix-ember-storm.html?raw";
import fluidSource from "./sources/aura-ui-fluid.html?raw";
import neonSource from "./sources/glassblown-neon.html?raw";
import julianVanceNebulaSource from "./sources/julian-vance-nebula.html?raw";
import engravedCertificateSource from "./sources/kinetic-lathe-certificate.html?raw";
import luminaWeaversClothSource from "./sources/lumina-weavers-cloth.html?raw";
import nexusUnifiedFlowSource from "./sources/nexus-unified-flow.html?raw";

type FocusRole = "background" | "ui";
type EffectMode = "dark" | "light";

type FocusTarget = {
  selector: string;
  role: FocusRole;
  width?: string;
};

type EffectDefinition = {
  title: string;
  source: string;
  background: string | ((mode: EffectMode) => string);
  targets: readonly FocusTarget[];
  presentation?: "animated-typography" | "woven-cloth-label";
};

export type NeuformCraftEffectProps = {
  mode?: EffectMode;
  hue?: number;
  saturation?: number;
  brightness?: number;
  className?: string;
  style?: CSSProperties;
};

export const NEUFORM_CRAFT_DEFAULTS = {
  hue: 0,
  saturation: 1,
  brightness: 1,
} as const;

const EFFECTS = {
  neon: {
    title: "Animated neon typography",
    source: neonSource,
    background: (mode) => (mode === "light" ? "#f4f4f2" : "#090909"),
    targets: [{ selector: "#board", role: "ui", width: "1040px" }],
    presentation: "animated-typography",
  },
  luminaWeaversCloth: {
    title: "Woven Cloth kinetic textile",
    source: luminaWeaversClothSource,
    background: "#16090b",
    targets: [{ selector: "body > div.fixed.inset-0.overflow-hidden.z-0", role: "background" }],
    presentation: "woven-cloth-label",
  },
  julianVanceNebula: {
    title: "Julian Vance nebula background",
    source: julianVanceNebulaSource,
    background: "#09090b",
    targets: [{ selector: "#bg-canvas", role: "background" }],
  },
  fluid: {
    title: "Aura UI fluid background",
    source: fluidSource,
    background: "#030306",
    targets: [{ selector: "#bg-canvas", role: "background" }],
  },
  nexusUnifiedFlow: {
    title: "Nexus unified halftone flow",
    source: nexusUnifiedFlowSource,
    background: "#000000",
    targets: [{ selector: "#glcanvas", role: "background" }],
  },
  emberStorm: {
    title: "Aeonix ember storm",
    source: emberStormSource,
    background: "#080503",
    targets: [{ selector: "#gl", role: "background" }],
  },
  engravedCertificate: {
    title: "Kinetic Lathe certificate",
    source: engravedCertificateSource,
    background: "#ded6c2",
    targets: [{ selector: "#cert", role: "ui", width: "720px" }],
  },
} as const satisfies Record<string, EffectDefinition>;

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(maximum, Math.max(minimum, value));
}

function replaceRequired(source: string, authored: string, focused: string) {
  if (!source.includes(authored)) {
    throw new Error(`Neuform source adapter could not find: ${authored}`);
  }
  return source.replace(authored, focused);
}

function animatedTypographySource(source: string) {
  return [
    [
      "return { t0: after + 5.6 + frnd() * 7.2, dur: total, segs: segs };",
      "return { t0: after + 1.25 + frnd() * 1.75, dur: total, segs: segs };",
    ],
    ["if (!ev) ev = nextEvent(4.2);", "if (!ev) ev = nextEvent(0.55);"],
    [
      "cap = Math.min((W - W * 0.12) / blockW, (H - H * 0.18) / blockH);",
      "cap = Math.min((W - W * 0.20) / blockW, (H - H * 0.28) / blockH);",
    ],
    ["var y0 = (H - blockH * cap) * 0.48;", "var y0 = (H - blockH * cap) / 2;"],
  ].reduce(
    (adapted, [authored, focused]) => replaceRequired(adapted, authored, focused),
    source,
  );
}

function wovenClothLabelSource(source: string) {
  return [
    ["x.fillText('L W', W/2, 190);", "x.fillText('W C', W/2, 190);"],
    ["x.fillText('· KYOTO ·', W/2, 246);", "x.fillText('· WOVEN CLOTH ·', W/2, 246);"],
    ["x.fillText('LUMINA', W/2, 400);", "x.fillText('WOVEN', W/2, 400);"],
    ["x.fillText('WEAVERS', W/2, 520);", "x.fillText('CLOTH', W/2, 520);"],
    [
      "x.fillText('K I N E T I C   T E X T I L E S   ·   2 0 2 4', W/2, 626);",
      "x.fillText('T E X T I L E   S I M U L A T I O N', W/2, 626);",
    ],
  ].reduce(
    (adapted, [authored, focused]) => replaceRequired(adapted, authored, focused),
    source,
  );
}

function resolveBackground(definition: EffectDefinition, mode: EffectMode) {
  return typeof definition.background === "function" ? definition.background(mode) : definition.background;
}

function buildFocusedDocument(definition: EffectDefinition, mode: EffectMode) {
  const targetJson = JSON.stringify(definition.targets).replace(/</g, "\\u003c");
  const background = resolveBackground(definition, mode);
  const monochromeFilter = mode === "light"
    ? "grayscale(1) invert(1) contrast(1.08)"
    : "grayscale(1) contrast(1.08)";
  const presentationStyle = definition.presentation === "animated-typography"
    ? `
@keyframes sf-neon-type-breathe {
  0%, 100% { transform: translate3d(0, 3px, 0) scale(0.988); opacity: 0.88; }
  45% { transform: translate3d(0, -3px, 0) scale(1); opacity: 1; }
  68% { transform: translate3d(0, 0, 0) scale(0.996); opacity: 0.96; }
}
#board { overflow: visible !important; }
#neon {
  transform-origin: 50% 52%;
  animation: sf-neon-type-breathe 5.6s cubic-bezier(0.22, 1, 0.36, 1) infinite;
  filter: ${monochromeFilter};
  will-change: transform, opacity;
}
@media (prefers-reduced-motion: reduce) {
  #neon { animation: none !important; transform: none !important; opacity: 1 !important; }
}
`
    : "";
  const focusStyle = `<style data-threeui-focus>
html, body { width: 100% !important; height: 100% !important; min-height: 0 !important; margin: 0 !important; padding: 0 !important; overflow: hidden !important; background: ${background} !important; }
body { position: relative !important; display: flex !important; align-items: center !important; justify-content: center !important; }
body > * { visibility: hidden !important; }
body[data-threeui-ready] > [data-threeui-role] { visibility: visible !important; }
[data-threeui-residual] { display: none !important; }
[data-threeui-role="background"] { position: fixed !important; inset: 0 !important; width: 100% !important; height: 100% !important; max-width: none !important; max-height: none !important; z-index: 0 !important; opacity: 1 !important; pointer-events: none !important; }
[data-threeui-role="ui"] { position: relative !important; z-index: 1 !important; width: min(calc(100% - 32px), var(--threeui-target-width, 1040px)) !important; max-width: none !important; max-height: calc(100% - 32px) !important; margin: auto !important; overflow: auto !important; opacity: 1 !important; transform: none !important; filter: none !important; flex: none !important; box-sizing: border-box !important; }
${presentationStyle}
</style>`;
  const focusScript = `<script data-threeui-focus>
(function () {
  var isolated = false;
  function isolate() {
    if (isolated) return;
    var specs = ${targetJson};
    var roots = [];
    specs.forEach(function (spec) {
      var element = document.querySelector(spec.selector);
      if (!element) return;
      element.setAttribute('data-threeui-role', spec.role);
      if (spec.width) element.style.setProperty('--threeui-target-width', spec.width);
      if (!roots.some(function (root) { return root.contains(element); })) roots.push(element);
    });
    if (!roots.length) return;
    isolated = true;
    roots.forEach(function (root) { document.body.appendChild(root); });
    Array.from(document.body.children).forEach(function (element) {
      if (roots.indexOf(element) !== -1) return;
      element.setAttribute('data-threeui-residual', '');
      element.setAttribute('aria-hidden', 'true');
      if ('inert' in element) element.inert = true;
    });
    document.body.setAttribute('data-threeui-ready', '');
    requestAnimationFrame(function () { window.dispatchEvent(new Event('resize')); });
  }
  function scheduleIsolation() { setTimeout(isolate, 100); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', scheduleIsolation, { once: true });
  else scheduleIsolation();
  window.addEventListener('load', isolate, { once: true });
})();
</script>`;
  const presentedSource = definition.presentation === "animated-typography"
    ? animatedTypographySource(definition.source)
    : definition.presentation === "woven-cloth-label"
      ? wovenClothLabelSource(definition.source)
      : definition.source;
  return presentedSource
    .replace(/<\/head>/i, `${focusStyle}</head>`)
    .replace(/<\/body>/i, `${focusScript}</body>`);
}

function NeuformCraftEffect({
  definition,
  mode = "dark",
  hue = NEUFORM_CRAFT_DEFAULTS.hue,
  saturation = NEUFORM_CRAFT_DEFAULTS.saturation,
  brightness = NEUFORM_CRAFT_DEFAULTS.brightness,
  className,
  style,
}: NeuformCraftEffectProps & { definition: EffectDefinition }) {
  const safeMode: EffectMode = mode === "light" ? "light" : "dark";
  const background = resolveBackground(definition, safeMode);
  const source = useMemo(() => buildFocusedDocument(definition, safeMode), [definition, safeMode]);
  const safeHue = clamp(hue, -180, 180);
  const safeSaturation = clamp(saturation, 0, 2);
  const safeBrightness = clamp(brightness, 0.35, 1.65);
  const filter = safeHue === 0 && safeSaturation === 1 && safeBrightness === 1
    ? undefined
    : `hue-rotate(${safeHue}deg) saturate(${safeSaturation}) brightness(${safeBrightness})`;

  return (
    <iframe
      className={className}
      data-mode={safeMode}
      title={definition.title}
      srcDoc={source}
      sandbox="allow-scripts"
      loading="eager"
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        border: 0,
        background,
        filter,
        ...style,
      }}
    />
  );
}

function createEffectComponent(definition: EffectDefinition) {
  return function EffectComponent(props: NeuformCraftEffectProps) {
    return <NeuformCraftEffect {...props} definition={definition} />;
  };
}

export const NeonTypography = createEffectComponent(EFFECTS.neon);
export const WovenCloth = createEffectComponent(EFFECTS.luminaWeaversCloth);
export const NebulaBackground = createEffectComponent(EFFECTS.julianVanceNebula);
export const FluidFieldBackground = createEffectComponent(EFFECTS.fluid);
export const HalftoneFlow = createEffectComponent(EFFECTS.nexusUnifiedFlow);
export const EmberStorm = createEffectComponent(EFFECTS.emberStorm);
export const EngravedCertificate = createEffectComponent(EFFECTS.engravedCertificate);
```

### `src/shaders/neuform-isolated/sources/nexus-unified-flow.html`

Role: variant-source · 282 lines · 15094 bytes · SHA-256 `fa1a015ae407dc2091c3c96239d28107e973cbc03aa7abef37dd5da791d5428b`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nexus - Unified Ecosystem</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
    <!-- GSAP for Animations -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
</head>
<body class="bg-black text-white font-sans min-h-screen overflow-x-hidden antialiased selection:bg-red-500/30 flex flex-col relative" style="font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">

    <!-- WebGL Background -->
    <canvas id="glcanvas" class="fixed inset-0 w-full h-full -z-20"></canvas>

    <!-- Overlay structural lines to match reference -->
    <div class="fixed inset-0 pointer-events-none -z-10 w-full h-full">
        <!-- Thin angled lines behind logo area -->
        <div class="absolute top-0 left-0 w-[600px] h-[600px] border-l border-t border-white/5 origin-top-left rotate-[15deg] translate-x-[-100px] translate-y-[-100px]"></div>
        <div class="absolute top-0 left-0 w-[800px] h-[800px] border-l border-white/5 origin-top-left rotate-[-25deg] translate-x-[200px] translate-y-[-50px]"></div>
        <!-- Horizontal grid line -->
        <div class="absolute top-[20%] w-full border-t border-white/5"></div>
    </div>

    <!-- Main Content Layout -->
    <div class="flex-1 flex flex-col relative z-10 w-full max-w-[1600px] mx-auto min-h-screen border-l border-r border-white/10">
        
        <!-- Hero Section -->
        <main class="flex-1 flex flex-col lg:flex-row items-center lg:items-center justify-between px-8 sm:px-16 lg:px-24 py-24 lg:py-0 relative">
            
            <!-- Left: Logo & Title -->
            <div class="flex items-center gap-6 group cursor-default w-full lg:w-1/2 mb-20 lg:mb-0">
                <!-- Abstract Geometric Icon -->
                <svg width="72" height="72" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-white transform group-hover:scale-105 transition-transform duration-500 ease-out" style="flex-shrink: 0;">
                    <path d="M10 20 L50 40 L90 10 L80 50 L95 85 L50 60 L15 90 L25 50 Z" fill="currentColor"/>
                    <path d="M50 40 L50 60" stroke="black" stroke-width="2"/>
                    <path d="M10 20 L50 60" stroke="black" stroke-width="2"/>
                </svg>
                
                <!-- Masked Reveal Title -->
                <h1 class="text-7xl sm:text-8xl lg:text-9xl font-semibold tracking-tighter lowercase leading-none flex flex-wrap gap-x-4 gap-y-2 reveal-text">
                    <span class="inline-block overflow-hidden pt-2">
                        <span class="reveal-word inline-block translate-y-[120%] pb-2">nexus</span>
                    </span>
                    <span class="inline-block overflow-hidden pt-2">
                        <span class="reveal-word inline-block translate-y-[120%] pb-2">flow</span>
                    </span>
                </h1>
            </div>

            <!-- Right: Input & Social Proof -->
            <div class="w-full lg:w-1/2 flex flex-col items-start lg:items-end relative">
                <!-- Offset Input Container -->
                <div class="relative group w-full max-w-md">
                    <!-- Stylized Shadow/Offset with subtle gradient -->
                    <div class="absolute inset-0 bg-gradient-to-br from-[#A63A29] to-[#732215] translate-x-3 translate-y-3 transition-transform duration-300 ease-out group-hover:translate-x-4 group-hover:translate-y-4"></div>
                    
                    <!-- Input Box with Premium Gradient Border Treatment -->
                    <div class="relative z-10 p-[1px] bg-gradient-to-r from-white/40 via-white/10 to-white/30">
                        <div class="bg-white flex items-center justify-between p-1 w-full h-[60px] sm:h-[72px]">
                            <input type="email" placeholder="Join the waitlist..." class="w-full h-full bg-transparent text-black outline-none px-6 text-base sm:text-lg font-medium placeholder:text-gray-500 placeholder:font-normal" />
                        </div>
                    </div>
                </div>

                <!-- Users Proof -->
                <div class="flex flex-row items-center gap-4 mt-10 mr-2">
                    <span class="text-sm font-medium tracking-wide">5,102+ early adopters</span>
                    <div class="flex -space-x-3">
                        <!-- Avatars with Gradient Borders -->
                        <div class="w-8 h-8 rounded-full p-[2px] bg-gradient-to-br from-white/50 to-white/10 bg-black shadow-sm">
                            <img class="w-full h-full rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2f563338-39fa-47ea-9761-658d4f3f84db_1600w.jpg" alt="User avatar">
                        </div>
                        <div class="w-8 h-8 rounded-full p-[2px] bg-gradient-to-br from-white/50 to-white/10 bg-black shadow-sm">
                            <img class="w-full h-full rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f5668c5-fc4a-44e0-bc5e-a664189d3c31_1600w.jpg" alt="User avatar">
                        </div>
                        <div class="w-8 h-8 rounded-full p-[2px] bg-gradient-to-br from-white/50 to-white/10 bg-black shadow-sm">
                            <img class="w-full h-full rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eca707cc-a5b7-439a-b4fd-247f6106c2e1_1600w.jpg" alt="User avatar">
                        </div>
                        <div class="w-8 h-8 rounded-full p-[2px] bg-gradient-to-br from-white/50 to-white/10 bg-black shadow-sm">
                            <img class="w-full h-full rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/77415a2e-dcbc-4748-a29d-fced4821881a_1600w.jpg" alt="User avatar">
                        </div>
                    </div>
                </div>
            </div>
            
        </main>

        <!-- Structural Horizontal Divider -->
        <div class="w-full border-t border-white/20"></div>

        <!-- Footer Section -->
        <footer class="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[300px]">
            
            <!-- Footer Left: Brand & Desc -->
            <div class="lg:col-span-4 p-8 sm:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-white/20 flex flex-col gap-6">
                <div class="flex items-center gap-3">
                    <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-white">
                        <path d="M10 20 L50 40 L90 10 L80 50 L95 85 L50 60 L15 90 L25 50 Z" fill="currentColor"/>
                    </svg>
                    <span class="text-base font-semibold tracking-tight">Nexus</span>
                </div>
                <p class="text-sm text-gray-400 leading-relaxed max-w-[280px]">
                    Your unified ecosystem to synchronize thoughts, maintain momentum, and build effortlessly.
                </p>
            </div>

            <!-- Footer Right: Links -->
            <div class="lg:col-span-8 p-8 sm:p-12 lg:p-16 grid grid-cols-2 sm:grid-cols-3 gap-12 sm:gap-8">
                <!-- Column 1 -->
                <div class="flex flex-col gap-5">
                    <h3 class="text-sm font-semibold tracking-tight text-white mb-1">Product</h3>
                    <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors duration-200">Capabilities</a>
                    <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors duration-200">Mechanism</a>
                    <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors duration-200">Plans</a>
                </div>
                
                <!-- Column 2 -->
                <div class="flex flex-col gap-5">
                    <h3 class="text-sm font-semibold tracking-tight text-white mb-1">Company</h3>
                    <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors duration-200">Our Story</a>
                    <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors duration-200">Join Us</a>
                    <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors duration-200">Get in Touch</a>
                    <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors duration-200">Media</a>
                </div>

                <!-- Column 3 -->
                <div class="flex flex-col gap-5">
                    <h3 class="text-sm font-semibold tracking-tight text-white mb-1">Resources</h3>
                    <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors duration-200">Support</a>
                    <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors duration-200">Changelog</a>
                    <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors duration-200">Documentation</a>
                </div>
            </div>

        </footer>
    </div>

    <!-- Scripts -->
    <script>
        // --- WebGL Background Animation ---
        const canvas = document.getElementById('glcanvas');
        const gl = canvas.getContext('webgl');

        if (!gl) {
            console.error('WebGL not supported');
        } else {
            // Resize handler
            function resize() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                gl.viewport(0, 0, canvas.width, canvas.height);
            }
            window.addEventListener('resize', resize);
            resize();

            // Vertex Shader
            const vsSource = `
                attribute vec4 aVertexPosition;
                void main() {
                    gl_Position = aVertexPosition;
                }
            `;

            // Fragment Shader (Halftone Flow)
            const fsSource = `
                precision highp float;
                uniform vec2 u_resolution;
                uniform float u_time;

                mat2 rot(float a) {
                    float s = sin(a), c = cos(a);
                    return mat2(c, -s, s, c);
                }

                void main() {
                    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
                    vec2 p = uv * 2.0 - 1.0;
                    p.x *= u_resolution.x / u_resolution.y;

                    vec2 flow_uv = p;
                    float time = u_time * 0.4;
                    
                    for(float i = 1.0; i < 4.0; i++) {
                        flow_uv *= rot(time * 0.1);
                        flow_uv.x += sin(flow_uv.y * 2.0 * i + time) * 0.5;
                        flow_uv.y += cos(flow_uv.x * 1.5 * i - time * 0.8) * 0.5;
                    }

                    float intensity = sin(flow_uv.x * 2.0 + flow_uv.y * 3.0) * 0.5 + 0.5;
                    
                    vec3 col_dark = vec3(0.02, 0.0, 0.0);
                    vec3 col_red = vec3(0.8, 0.1, 0.05);
                    vec3 col_bright = vec3(1.0, 0.6, 0.2);
                    
                    vec3 fluid_color = mix(col_dark, col_red, smoothstep(0.2, 0.6, intensity));
                    fluid_color = mix(fluid_color, col_bright, smoothstep(0.7, 1.0, intensity));

                    float gridSize = 6.0; 
                    vec2 grid_uv = gl_FragCoord.xy / gridSize;
                    vec2 cell_uv = fract(grid_uv) - 0.5;
                    
                    float dist = length(cell_uv);
                    float radius = intensity * 0.45; 
                    float dot_mask = smoothstep(radius, radius - 0.1, dist);
                    
                    vec3 final_color = mix(vec3(0.0), fluid_color, dot_mask);
                    final_color += fluid_color * 0.15;

                    gl_FragColor = vec4(final_color, 1.0);
                }
            `;

            function compileShader(gl, type, source) {
                const shader = gl.createShader(type);
                gl.shaderSource(shader, source);
                gl.compileShader(shader);
                if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                    console.error(gl.getShaderInfoLog(shader));
                    gl.deleteShader(shader);
                    return null;
                }
                return shader;
            }

            const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vsSource);
            const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fsSource);

            const program = gl.createProgram();
            gl.attachShader(program, vertexShader);
            gl.attachShader(program, fragmentShader);
            gl.linkProgram(program);
            gl.useProgram(program);

            const positions = new Float32Array([
                -1.0,  1.0,
                 1.0,  1.0,
                -1.0, -1.0,
                 1.0, -1.0,
            ]);
            const positionBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

            const positionLocation = gl.getAttribLocation(program, "aVertexPosition");
            gl.enableVertexAttribArray(positionLocation);
            gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

            const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
            const timeLocation = gl.getUniformLocation(program, "u_time");

            let startTime = Date.now();
            function render() {
                gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
                gl.uniform1f(timeLocation, (Date.now() - startTime) / 1000.0);
                
                gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
                requestAnimationFrame(render);
            }
            render();
        }

        // --- GSAP ScrollTrigger Masked Word Reveal ---
        document.addEventListener("DOMContentLoaded", (event) => {
            gsap.registerPlugin(ScrollTrigger);

            gsap.to(".reveal-word", {
                y: "0%",
                duration: 1.2,
                stagger: 0.15,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: ".reveal-text",
                    start: "top 90%",
                }
            });
        });
    </script>
</body>
</html>
```

### `src/shaders/ComponentX.css`

Role: shared-style · 1775 lines · 40715 bytes · SHA-256 `efe4447139f1358dd8e9be68edf6fa46cbefbd1de423a4d6c439ca61d2c8eccf`

```css
.threeui-mount,
.terrain-plume-component,
.text-path-study,
.article-headings-component,
.animated-top-dock-component,
.typography-vortex-component,
.mechanical-keyboard,
.retro-metallic,
.landscape-scene,
.japanese-tower-landscape,
.sakura-branch-scene,
.isometric-motion-grid,
.isometric-illustration,
.tetrahedron-365,
.liquid-metal-button,
.iso-mail-lightshafts,
.spark-badge,
.hypnotic-loops,
.at-the-horizon,
.scalability-bricks,
.threeui-background {
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  overflow: hidden;
}

.mechanical-keyboard {
  isolation: isolate;
  background: #090a0c;
}

.mechanical-keyboard__frame {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  background: #090a0c;
  opacity: 0;
  transition: opacity 180ms ease-out;
  touch-action: none;
}

.mechanical-keyboard__frame.is-ready {
  opacity: 1;
}

.retro-metallic {
  isolation: isolate;
  background: #08090a;
}

.retro-metallic__frame {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  background: #08090a;
  opacity: 0;
  transition: opacity 180ms ease-out;
  touch-action: none;
}

.retro-metallic__frame.is-ready {
  opacity: 1;
}

.japanese-tower-landscape {
  isolation: isolate;
  background: #ecdcbc;
}

.japanese-tower-landscape__frame {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  background: #ecdcbc;
  opacity: 0;
  transition: opacity 180ms ease-out;
}

.japanese-tower-landscape__frame.is-ready {
  opacity: 1;
}

.landscape-scene {
  isolation: isolate;
  background: #ecdcbc;
}

.landscape-scene__frame {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  background: #ecdcbc;
  opacity: 0;
  transition: opacity 180ms ease-out;
  touch-action: none;
}

.landscape-scene__frame.is-ready {
  opacity: 1;
}

.sakura-branch-scene {
  isolation: isolate;
  background: #d4738a;
}

.sakura-branch-scene__frame {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  background: #d4738a;
  opacity: 0;
  transition: opacity 180ms ease-out;
}

.sakura-branch-scene__frame.is-ready {
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  .sakura-branch-scene__frame {
    transition: none;
  }
}

.isometric-motion-grid {
  isolation: isolate;
  background: #08090a;
}

.isometric-motion-grid__stage {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1200px;
  height: 675px;
  transform-origin: 50% 50%;
}

.isometric-motion-grid__frame {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  background: #08090a;
  opacity: 0;
  transition: opacity 180ms ease-out;
}

.isometric-motion-grid__frame.is-ready {
  opacity: 1;
}

.isometric-illustration {
  isolation: isolate;
  background: #111;
}

.isometric-illustration__frame {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  background: #111;
  opacity: 0;
  transition: opacity 180ms ease-out;
}

.isometric-illustration__frame.is-ready {
  opacity: 1;
}

.tetrahedron-365 {
  isolation: isolate;
  background: #000;
}

.tetrahedron-365__frame {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  background: #000;
  opacity: 0;
  transition: opacity 180ms ease-out;
}

.tetrahedron-365__frame.is-ready {
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  .tetrahedron-365__frame {
    transition: none;
  }
}

.liquid-metal-button {
  isolation: isolate;
  background: #070708;
}

.liquid-metal-button__frame {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  background: #070708;
  opacity: 0;
  transition: opacity 180ms ease-out;
}

.liquid-metal-button__frame.is-ready {
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  .liquid-metal-button__frame {
    transition: none;
  }
}

.iso-mail-lightshafts {
  isolation: isolate;
  background: #140f0b;
}

.iso-mail-lightshafts__frame {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  background: #140f0b;
  opacity: 0;
  transition: opacity 180ms ease-out;
}

.iso-mail-lightshafts__frame.is-ready {
  opacity: 1;
}

.spark-badge {
  isolation: isolate;
  background: #000;
}

.spark-badge__frame {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  background: #000;
  opacity: 0;
  transition: opacity 180ms ease-out;
}

.spark-badge__frame.is-ready {
  opacity: 1;
}

.hypnotic-loops {
  isolation: isolate;
  background: #f15a24;
}

.hypnotic-loops__frame {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  background: #f15a24;
  opacity: 0;
}

.hypnotic-loops__frame.is-ready {
  opacity: 1;
}

.at-the-horizon {
  isolation: isolate;
  background: #000;
}

.at-the-horizon__frame {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  background: #000;
  opacity: 0;
  transition: opacity 180ms ease-out;
}

.at-the-horizon__frame.is-ready {
  opacity: 1;
}

.scalability-bricks {
  isolation: isolate;
  background: #0b0b0c;
}

.scalability-bricks__frame {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  background: #0b0b0c;
  opacity: 0;
  transition: opacity 180ms ease-out;
}

.scalability-bricks__frame.is-ready {
  opacity: 1;
}

.text-path-study {
  isolation: isolate;
  background: #08090a;
}

.text-path-study--light {
  background: #f3f5f8;
}

.text-path-study-frame {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  background: transparent;
  transform-origin: 50% 50%;
}

.threeui-background {
  position: relative;
  isolation: isolate;
  background: #030304;
}

.threeui-background.condensation {
  background: transparent;
}

.threeui-background.predictive-arc--light,
.threeui-background.data-pixel-arc--light {
  background: #f3f6f1;
}

.typography-vortex-component.typography-vortex-component--light {
  background: #eef1f6;
}

.typography-vortex-component--light .typography-vortex-component__hint {
  color: rgba(28, 30, 38, 0.55);
}

.threeui-background > canvas {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
}

.cross-beam-canvas,
.terrain-plume-canvas {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
}

.terrain-plume-component {
  pointer-events: none;
}

.terrain-plume-component {
  --fe-bg: #030304;
  --fe-band: clamp(260px, 52cqw, 820px);

  isolation: isolate;
  container-type: inline-size;
  background:
    linear-gradient(180deg, #050505 0%, #020202 44%, #000 100%);
}

/* Each scene keeps the same engraved grammar and only moves the ground tone the
   body fill and the reveal cover are painted with. */
.terrain-plume-component[data-terrain-scene="river"] {
  --fe-bg: #03070a;

  background:
    linear-gradient(180deg, #05090d 0%, #020507 44%, #000 100%);
}

.terrain-plume-component[data-terrain-scene="desert"] {
  --fe-bg: #0a0603;

  background:
    linear-gradient(180deg, #0d0805 0%, #060302 44%, #000 100%);
}

.terrain-plume-component[data-terrain-scene="bridge-city"] {
  --fe-bg: #03050b;

  background:
    linear-gradient(180deg, #050810 0%, #020407 44%, #000 100%);
}

/* The authored plume sits at the foot of its own canvas, where the terrain band
   buries it. Every scene keeps that exact gradient and only raises the canvas
   until the glow clears the range — stopping below the far edge of the hatch so
   the ground line the eye reads as the horizon is also where the sky starts,
   and the canvas edge itself stays behind the terrain. */
.terrain-plume-component[data-terrain-scene="river"] .terrain-plume-canvas,
.terrain-plume-component[data-terrain-scene="desert"] .terrain-plume-canvas,
.terrain-plume-component[data-terrain-scene="bridge-city"] .terrain-plume-canvas {
  top: auto;
  bottom: calc(var(--fe-band) * 0.33);
}

/* The footer vignette was tuned to bury the plume behind a range that fills the
   frame. These scenes leave far more open sky, so the same wash is lightened
   until the glow survives it. */
.terrain-plume-component[data-terrain-scene="river"]::after,
.terrain-plume-component[data-terrain-scene="desert"]::after,
.terrain-plume-component[data-terrain-scene="bridge-city"]::after {
  background:
    radial-gradient(circle at 50% 100%, rgba(255, 255, 255, 0.07), transparent 34%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.3) 72%, rgba(0, 0, 0, 0.62));
}

.terrain-plume-component::before,
.terrain-plume-component::after {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  content: "";
}

.terrain-plume-component::before {
  background:
    linear-gradient(90deg, transparent calc(50% - 0.5px), rgba(255, 255, 255, 0.05) calc(50% - 0.5px) calc(50% + 0.5px), transparent calc(50% + 0.5px)),
    repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.022) 0 1px, transparent 1px 11.5vw),
    repeating-linear-gradient(180deg, rgba(255, 255, 255, 0.018) 0 1px, transparent 1px 5.8rem);
  opacity: 0.74;
}

.terrain-plume-component::after {
  background:
    radial-gradient(circle at 50% 100%, rgba(255, 255, 255, 0.09), transparent 34%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.62) 72%, rgba(0, 0, 0, 0.9));
}

.terrain-plume-canvas {
  z-index: 0;
}

.footer-engraved-terrain {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  display: block;
  width: 100%;
  height: var(--fe-band);
  pointer-events: none;
}

.footer-engraved-reveal {
  position: absolute;
  inset: 0;
  z-index: 5;
  display: block;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.footer-engraved-grain {
  position: absolute;
  inset: 0;
  z-index: 6;
  pointer-events: none;
  opacity: 0.05;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/></filter><rect width='160' height='160' filter='url(%23n)'/></svg>");
  background-size: 160px 160px;
}
.sunset-valley-scene,
.sunset-valley-canvas {
  display: block;
  width: 100%;
  height: 100%;
}

.sunset-valley-scene {
  position: relative;
  overflow: hidden;
  background: #090d16;
}

.sunset-valley-canvas {
  position: relative;
  z-index: 1;
  opacity: 0;
  touch-action: none;
}

.sunset-valley-canvas.is-ready {
  opacity: 1;
}

img.sunset-valley-fallback {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.temple-night-scene,
.temple-night-canvas {
  display: block;
  width: 100%;
  height: 100%;
}

.temple-night-scene {
  position: relative;
  overflow: hidden;
  background: #05070a;
}

.temple-night-canvas {
  position: relative;
  z-index: 1;
  opacity: 0;
  touch-action: none;
}

.temple-night-canvas.is-ready {
  opacity: 1;
}

.temple-night-unavailable {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  margin: 0;
  color: #a9b2b7;
  background: #05070a;
}

.yosemite-sunset-scene,
.yosemite-sunset-canvas {
  display: block;
  width: 100%;
  height: 100%;
}

.yosemite-sunset-scene {
  position: relative;
  overflow: hidden;
  background: #241a26;
}

.yosemite-sunset-canvas {
  position: relative;
  z-index: 1;
  opacity: 0;
  touch-action: none;
}

.yosemite-sunset-canvas.is-ready {
  opacity: 1;
}

.yosemite-sunset-unavailable {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  margin: 0;
  color: #e0c3ab;
  background: #241a26;
}

.presidio-sunset-scene,
.presidio-sunset-canvas {
  display: block;
  width: 100%;
  height: 100%;
}

.presidio-sunset-scene {
  position: relative;
  overflow: hidden;
  background: #2a1c22;
}

.presidio-sunset-canvas {
  position: relative;
  z-index: 1;
  opacity: 0;
  touch-action: none;
}

.presidio-sunset-canvas.is-ready {
  opacity: 1;
}

.presidio-sunset-unavailable {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  margin: 0;
  color: #e6c1ad;
  background: #2a1c22;
}

.lake-louise-scene,
.lake-louise-canvas {
  display: block;
  width: 100%;
  height: 100%;
}

.lake-louise-scene {
  position: relative;
  overflow: hidden;
  background: #171d2c;
}

.lake-louise-canvas {
  position: relative;
  z-index: 1;
  opacity: 0;
  touch-action: none;
}

.lake-louise-canvas.is-ready {
  opacity: 1;
}

.lake-louise-unavailable {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  margin: 0;
  color: #b9c8d6;
  background: #171d2c;
}

.bookshelf,
.bookshelf__canvas,
.sketchbook,
.sketchbook__frame {
  display: block;
  width: 100%;
  height: 100%;
}

.bookshelf {
  position: relative;
  container-type: inline-size;
  overflow: hidden;
  background: #171a24;
  outline: none;
}

.bookshelf__canvas {
  position: absolute;
  inset: 0;
  opacity: 0;
  touch-action: none;
}

.bookshelf__canvas.is-ready {
  opacity: 1;
}

.bookshelf__source-controls {
  display: none;
}

.bookshelf__unavailable {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  margin: 0;
  padding: 24px;
  color: #f4eee6;
  text-align: center;
}

.sketchbook {
  position: relative;
  overflow: hidden;
  background: #ece7dc;
}

.sketchbook__frame {
  border: 0;
  opacity: 0;
  background: #ece7dc;
}

.sketchbook__frame.is-ready {
  opacity: 1;
}

@font-face {
  font-family: "ThreeUI Fragment Mono";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("./fonts/fragment-mono.woff2") format("woff2");
}

.article-headings-component,
.animated-top-dock-component,
.typography-vortex-component {
  container-type: inline-size;
  color: #ecece8;
  background: #0b0b0b;
  font-family: "Geist", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.article-headings-component {
  display: grid;
  grid-template-rows: auto 1fr 1fr;
  padding: clamp(20px, 5.4cqw, 74px) clamp(20px, 6.2cqw, 86px);
  isolation: isolate;
}

.article-headings-component::after,
.animated-top-dock-component::after,
.typography-vortex-component::after {
  position: absolute;
  inset: 0;
  z-index: 5;
  pointer-events: none;
  content: "";
  opacity: 0.12;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.16'/%3E%3C/svg%3E");
  mix-blend-mode: soft-light;
}

.article-headings-component__header {
  display: flex;
  justify-content: space-between;
  padding-bottom: clamp(14px, 2.6cqw, 30px);
  color: #62625e;
  font: 400 clamp(8px, 0.85cqw, 10px) / 1 "ThreeUI Fragment Mono", ui-monospace, monospace;
  letter-spacing: 0.12em;
}

.article-headings-component__entry {
  display: grid;
  grid-template-columns: clamp(28px, 4cqw, 56px) minmax(0, 1fr) auto;
  align-items: center;
  gap: clamp(10px, 2.2cqw, 30px);
  border-top: 1px solid #2a2a28;
}

.article-headings-component__entry h2 {
  margin: 0;
  color: #e9e9e5;
  font-size: clamp(18px, 3.2cqw, 44px);
  font-weight: 600;
  line-height: 1.08;
  letter-spacing: -0.02em;
}

.article-headings-component__index,
.article-headings-component__meta {
  color: #60605c;
  font: 400 clamp(8px, 0.85cqw, 10px) / 1.3 "ThreeUI Fragment Mono", ui-monospace, monospace;
  letter-spacing: 0.06em;
}

.article-headings-component__meta {
  text-align: right;
}

.article-headings-component--light {
  color: #202128;
  background: #f3f5f8;
}

.article-headings-component--light .article-headings-component__header,
.article-headings-component--light .article-headings-component__index,
.article-headings-component--light .article-headings-component__meta {
  color: #71737b;
}

.article-headings-component--light .article-headings-component__entry {
  border-color: #d9dce3;
}

.article-headings-component--light .article-headings-component__entry h2 {
  color: #1d1f26;
}

.typography-vortex-component {
  position: relative;
  isolation: isolate;
  touch-action: none;
  cursor: crosshair;
}

.typography-vortex-component canvas {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
}

.typography-vortex-component__hint,
.animated-top-dock-component__caption {
  position: absolute;
  z-index: 6;
  color: #62625e;
  font: 400 9px/1 "ThreeUI Fragment Mono", ui-monospace, monospace;
  letter-spacing: 0.1em;
}

.typography-vortex-component__hint {
  right: 18px;
  bottom: 16px;
}

.animated-top-dock-component {
  position: relative;
  display: grid;
  place-items: center;
  isolation: isolate;
  background:
    radial-gradient(circle at 50% 20%, rgba(255, 255, 255, 0.035), transparent 34%),
    #080808;
}

.animated-top-dock__nav {
  position: absolute;
  top: clamp(24px, 5cqw, 46px);
  left: 50%;
  z-index: 10;
  display: flex;
  align-items: flex-start;
  gap: 3px;
  height: 38px;
  padding: 4px;
  overflow: visible;
  border: 1px solid #292929;
  border-radius: 11px;
  background: rgba(14, 14, 14, 0.86);
  box-shadow: 0 12px 34px rgba(0, 0, 0, 0.48), inset 0 1px rgba(255, 255, 255, 0.035);
  backdrop-filter: blur(18px) saturate(75%);
  transform: translateX(-50%);
  isolation: isolate;
}

.animated-top-dock__item {
  position: relative;
  z-index: 6;
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  height: 28px;
  min-width: 0;
  padding: 0;
  border: 1px solid transparent;
  border-radius: 7px;
  outline: none;
  color: #858580;
  background: rgba(21, 21, 20, 0.9);
  font: 400 10px/1 "ThreeUI Fragment Mono", ui-monospace, monospace;
  letter-spacing: 0.1em;
  white-space: nowrap;
  backdrop-filter: blur(14px) saturate(70%);
  transform-origin: 50% 0;
  transition: color 0.15s, border-color 0.18s, background 0.18s, box-shadow 0.18s;
  will-change: width, height, transform;
  cursor: pointer;
}

.animated-top-dock__item[data-dock-near="true"],
.animated-top-dock__item:focus-visible {
  z-index: 7;
  color: #ecece8;
  border-color: #41413e;
  background: rgba(27, 27, 26, 0.94);
  box-shadow: 0 7px 16px rgba(0, 0, 0, 0.26);
}

.animated-top-dock__logo {
  width: 28px;
  height: 28px;
  overflow: hidden;
  background: #e8e8e3;
}

.animated-top-dock__logo svg {
  display: block;
  width: 100%;
  height: 100%;
}

.animated-top-dock__link {
  gap: 6px;
  width: 94px;
  padding: 0 9px;
}

.animated-top-dock__link[aria-pressed="true"] {
  color: #111;
  border-color: #e8e8e3;
  background: #e8e8e3;
  box-shadow: 0 7px 18px rgba(0, 0, 0, 0.28);
}

.animated-top-dock__icon {
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  width: 13px;
  height: 13px;
  opacity: 0.62;
  transition: opacity 0.16s;
}

.animated-top-dock__icon svg {
  display: block;
  width: 100%;
  height: 100%;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.animated-top-dock__item[data-dock-near="true"] .animated-top-dock__icon,
.animated-top-dock__item:focus-visible .animated-top-dock__icon {
  opacity: 1;
}

.animated-top-dock-component__caption {
  right: 18px;
  bottom: 16px;
}

@media (max-width: 600px) {
  .article-headings-component {
    padding: 18px;
  }

  .article-headings-component__entry {
    grid-template-columns: 24px minmax(0, 1fr);
  }

  .article-headings-component__entry h2 {
    font-size: clamp(17px, 5.5vw, 26px);
  }

  .article-headings-component__meta {
    display: none;
  }

  .animated-top-dock__nav {
    top: 24px;
    gap: 2px;
    height: 36px;
  }

  .animated-top-dock__item {
    height: 26px !important;
    transform: none !important;
  }

  .animated-top-dock__logo {
    width: 26px !important;
    height: 26px !important;
  }

  .animated-top-dock__link {
    width: auto !important;
    padding: 0 7px;
    font-size: 8px;
    letter-spacing: 0.07em;
  }

  .animated-top-dock__icon {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .animated-top-dock__item {
    transform: none !important;
  }
}

/* ── Top dock variants ────────────────────────────────────────────────────
   Every dimension below is a container query unit with a clamp, because these
   bars are shown at anything from a 600 px card to a 1920 px capture frame: a
   fixed 56 px bar that reads correctly in the catalogue frame becomes a thin
   strip of small type at full width. One scale block feeds all three. */

.animated-top-dock-component.atd-modern,
.animated-top-dock-component.atd-retro,
.animated-top-dock-component.atd-glass {
  --atd-top: clamp(16px, 2.6cqw, 46px);
  --atd-bar-width: min(1460px, calc(100% - clamp(24px, 4.2cqw, 96px)));
  --atd-bar-height: clamp(48px, 3.4cqw, 68px);
  --atd-bar-pad: clamp(5px, 0.42cqw, 9px);
  --atd-bar-lead: clamp(14px, 1.15cqw, 25px);
  --atd-item-height: clamp(30px, 2.2cqw, 44px);
  --atd-item-pad: clamp(10px, 0.86cqw, 18px);
  --atd-label: clamp(12px, 0.78cqw, 17px);
  --atd-icon: clamp(13px, 0.92cqw, 19px);
  --atd-gap: clamp(5px, 0.44cqw, 9px);
  --atd-brand: clamp(13px, 0.94cqw, 20px);
  --atd-mark: clamp(22px, 1.55cqw, 33px);
  --atd-action-height: clamp(34px, 2.5cqw, 50px);
  display: block;
  overflow: hidden;
}

.atd-modern__bar,
.atd-retro__bar {
  position: absolute;
  top: var(--atd-top);
  left: 50%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: var(--atd-bar-width);
  height: var(--atd-bar-height);
  transform: translateX(-50%);
}

/* Command bar: the bar hugs its own content — brand, dock and actions sit in
   one flow with a gap between them rather than being pushed to the far edges of
   a full-bleed strip. That only holds because the dock's track is locked to its
   rest width (lockTrack in the controller): the spring then grows its items
   outside that track instead of widening the bar and shoving the brand and the
   actions around on every pointer move. */
.atd-modern__bar {
  /* space-between is inherited rather than centred on purpose: at its natural
     width the three groups already fill the box, and in a shell too narrow for
     them the overflow then runs off the right instead of taking the brand off
     the left as well */
  width: max-content;
  max-width: var(--atd-bar-width);
  padding: var(--atd-bar-pad) var(--atd-bar-pad) var(--atd-bar-pad) var(--atd-bar-lead);
}

.atd-modern__dock {
  display: flex;
  flex: none;
  gap: clamp(2px, 0.2cqw, 5px);
  align-items: flex-start;
  /* the track is one item tall and its rest width wide, and the row is centred
     inside it, so a growing item overflows evenly on all four sides without
     moving a single neighbour in the bar */
  justify-content: center;
  height: var(--atd-item-height);
}

.atd-modern__item,
.atd-retro__item,
.atd-glass__item {
  display: inline-flex;
  flex: none;
  gap: var(--atd-gap);
  align-items: center;
  justify-content: center;
  height: var(--atd-item-height);
  padding: 0 var(--atd-item-pad);
  outline: none;
  white-space: nowrap;
  transform-origin: 50% 0;
  will-change: width, height, transform;
  cursor: pointer;
}

.atd-modern__brand,
.atd-glass__brand,
.atd-retro__brand {
  display: inline-flex;
  flex: none;
  gap: clamp(7px, 0.6cqw, 13px);
  align-items: center;
  text-decoration: none;
}

.atd-modern__mark,
.atd-glass__mark {
  display: block;
  width: var(--atd-mark);
  height: var(--atd-mark);
  overflow: hidden;
}

.atd-modern__mark svg,
.atd-glass__mark svg {
  display: block;
  width: 100%;
  height: 100%;
}

.atd-modern__word,
.atd-glass__word {
  font-size: var(--atd-brand);
  font-weight: 600;
  letter-spacing: -0.018em;
}

.atd-modern__actions {
  display: inline-flex;
  flex: none;
  gap: clamp(4px, 0.34cqw, 8px);
  align-items: center;
}

.atd-modern__ghost {
  height: var(--atd-action-height);
  padding: 0 clamp(12px, 0.95cqw, 20px);
  border: 0;
  border-radius: 999px;
  background: transparent;
  font: 500 var(--atd-label) / 1 inherit;
  transition: color 0.16s, background 0.16s;
  cursor: pointer;
}

.atd-modern__cta,
.atd-glass__cta {
  height: var(--atd-action-height);
  border-radius: 999px;
  font: 600 var(--atd-label) / 1 inherit;
  letter-spacing: -0.01em;
  white-space: nowrap;
  transition: transform 0.18s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.18s;
  cursor: pointer;
}

/* ── Modern command bar ─────────────────────────────────────────────────── */

.animated-top-dock-component.atd-modern {
  /* a ceiling rather than a width: the command bar sizes itself to its own
     cluster, and only falls back to an inset strip in a shell too narrow to
     hold it */
  --atd-bar-width: min(1240px, calc(100% - clamp(24px, 5cqw, 120px)));
  background: #07080c;
}

.atd-modern__aurora {
  position: absolute;
  inset: -24% -12% auto -12%;
  z-index: 1;
  height: 82%;
  pointer-events: none;
  background:
    radial-gradient(58% 62% at 22% 36%, rgba(78, 116, 255, 0.4), transparent 68%),
    radial-gradient(46% 56% at 78% 20%, rgba(186, 96, 255, 0.3), transparent 70%),
    radial-gradient(40% 48% at 52% 6%, rgba(56, 220, 214, 0.2), transparent 72%),
    radial-gradient(34% 40% at 50% 14%, rgba(255, 255, 255, 0.07), transparent 76%);
  filter: blur(8px);
}

.atd-modern__bar {
  gap: clamp(14px, 2.4cqw, 40px);
  border: 1px solid rgba(255, 255, 255, 0.045);
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(25, 27, 36, 0.86), rgba(12, 13, 18, 0.82));
  box-shadow: 0 22px 52px -24px rgba(0, 0, 0, 0.92), inset 0 1px rgba(255, 255, 255, 0.045);
  backdrop-filter: blur(22px) saturate(150%);
  -webkit-backdrop-filter: blur(22px) saturate(150%);
}

.atd-modern__brand {
  color: #f2f3f7;
}

.atd-modern__mark {
  /* a full circle: the shared brand mark is a rounded square, so the disc is cut
     from it by the mark box's own clip rather than by a second svg */
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.42);
}

.atd-modern__item {
  border: 1px solid transparent;
  border-radius: 999px;
  color: #9b9fae;
  background: transparent;
  font: 500 var(--atd-label) / 1 inherit;
  letter-spacing: -0.005em;
  transition: color 0.16s, border-color 0.18s, background 0.18s, box-shadow 0.18s, backdrop-filter 0.18s;
}

/* :hover is carried alongside the proximity flag so the glass still lands when
   the spring is off — reduced motion, a coarse pointer, a narrow viewport */
.atd-modern__item[data-dock-near="true"],
.atd-modern__item:hover,
.atd-modern__item:focus-visible {
  color: #f4f5f9;
  border-color: rgba(255, 255, 255, 0.055);
  background: rgba(255, 255, 255, 0.055);
  box-shadow: 0 8px 20px -14px rgba(0, 0, 0, 0.9), inset 0 1px rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(18px) saturate(170%);
  -webkit-backdrop-filter: blur(18px) saturate(170%);
}

.atd-modern__item[aria-pressed="true"] {
  color: #0a0b10;
  border-color: transparent;
  background: linear-gradient(180deg, #ffffff, #dfe3ef);
  box-shadow: 0 10px 24px -12px rgba(120, 150, 255, 0.75), inset 0 -1px rgba(0, 0, 0, 0.14);
}

.atd-modern__icon,
.atd-glass__icon {
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  width: var(--atd-icon);
  height: var(--atd-icon);
  opacity: 0.72;
  transition: opacity 0.16s;
}

.atd-modern__icon svg,
.atd-glass__icon svg {
  display: block;
  width: 100%;
  height: 100%;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.25;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.atd-modern__item[data-dock-near="true"] .atd-modern__icon,
.atd-modern__item[aria-pressed="true"] .atd-modern__icon,
.atd-glass__item[data-dock-near="true"] .atd-glass__icon,
.atd-glass__item[aria-pressed="true"] .atd-glass__icon {
  opacity: 1;
}

.atd-modern__ghost {
  color: #a7abba;
}

.atd-modern__ghost:hover {
  color: #f0f1f6;
  background: rgba(255, 255, 255, 0.06);
}

.atd-modern__cta {
  display: inline-flex;
  gap: var(--atd-gap);
  align-items: center;
  padding: 0 var(--atd-bar-pad) 0 clamp(14px, 1.1cqw, 24px);
  border: 0;
  color: #0a0b10;
  background: linear-gradient(180deg, #ffffff, #d8ddec);
  box-shadow: 0 10px 26px -14px rgba(150, 175, 255, 0.95), inset 0 -1px rgba(0, 0, 0, 0.16);
}

.atd-modern__cta svg {
  box-sizing: border-box;
  width: calc(var(--atd-action-height) - clamp(12px, 0.9cqw, 20px));
  height: calc(var(--atd-action-height) - clamp(12px, 0.9cqw, 20px));
  padding: clamp(4px, 0.3cqw, 7px);
  border-radius: 999px;
  background: rgba(10, 11, 16, 0.1);
  fill: none;
  stroke: currentColor;
  stroke-width: 1.4;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.atd-modern__cta:hover {
  box-shadow: 0 16px 32px -14px rgba(150, 175, 255, 1), inset 0 -1px rgba(0, 0, 0, 0.16);
  transform: translateY(-1px);
}

.atd-modern__stage {
  position: absolute;
  top: 58%;
  left: 50%;
  z-index: 4;
  width: min(88cqw, 1120px);
  text-align: center;
  pointer-events: none;
  transform: translate(-50%, -50%);
}

.atd-modern__eyebrow {
  margin: 0 0 clamp(8px, 0.9cqw, 18px);
  color: #7d84a0;
  font: 400 clamp(8px, 0.62cqw, 13px) / 1 "ThreeUI Fragment Mono", ui-monospace, monospace;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}

.atd-modern__headline {
  /* background-clip: text paints only inside the element box, so at this size a
     1.0-ish line-height would cut the ascenders and descenders out of the fill.
     The padding buys the ink its own room back. */
  margin: 0;
  padding: 0.08em 0 0.14em;
  color: transparent;
  background: linear-gradient(180deg, #ffffff 16%, rgba(255, 255, 255, 0.3));
  background-clip: text;
  -webkit-background-clip: text;
  font-size: clamp(30px, 7.6cqw, 150px);
  font-weight: 400;
  line-height: 1.04;
  letter-spacing: -0.03em;
  text-wrap: balance;
}

/* ── Retro pixel terminal ───────────────────────────────────────────────────
   The field canvas is a small drawing buffer stretched by CSS with
   nearest-neighbour sampling, so its dither pattern arrives as real square
   pixels. Every chrome edge here is square to sit on that same grid. */

.animated-top-dock-component.atd-retro {
  --atd-label: clamp(9px, 0.68cqw, 15px);
  --atd-icon: clamp(10px, 0.78cqw, 17px);
  --atd-brand: clamp(11px, 0.8cqw, 18px);
  background: #0b0819;
}

.atd-retro__field {
  position: absolute;
  inset: 0;
  z-index: 0;
  display: block;
  width: 100%;
  height: 100%;
  image-rendering: pixelated;
}

.atd-retro__vignette {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background:
    radial-gradient(124% 90% at 50% 34%, transparent 28%, rgba(6, 4, 16, 0.62) 100%),
    linear-gradient(180deg, rgba(6, 4, 16, 0.6) 0%, transparent 24%, transparent 62%, rgba(6, 4, 16, 0.58) 100%);
}

/* the raster runs at screen resolution, not at the field's pixel scale, so the
   line structure stays a raster instead of banding the chunky artwork */
.atd-retro::before {
  position: absolute;
  inset: 0;
  z-index: 11;
  pointer-events: none;
  content: "";
  opacity: calc(var(--atd-retro-scan, 0.32) * 1.5);
  background: repeating-linear-gradient(180deg, rgba(0, 0, 0, 0.42) 0 1px, transparent 1px 3px);
}

/* Horizontal fit: the bar is one continuous strip and the menu cells own all of
   it. There are no gaps and no rounded ends — every cell is separated by a rule
   and runs the full height, and the controller renormalises the widths so
   opening one cell takes its room from the neighbours. */
.atd-retro__bar {
  gap: 0;
  padding: 0;
  overflow: hidden;
  border: 2px solid #f4e6c8;
  background: #1a1030;
  box-shadow: 6px 6px 0 rgba(6, 4, 16, 0.62);
}

.atd-retro__brand {
  height: 100%;
  padding: 0 clamp(12px, 1.1cqw, 26px);
  border-right: 2px solid #4b2f7e;
  color: #f9c74f;
  background: #150c28;
  font: 400 var(--atd-brand) / 1 "ThreeUI Fragment Mono", ui-monospace, monospace;
  letter-spacing: 0.12em;
}

.atd-retro__dock {
  display: flex;
  flex: 1 1 0;
  gap: 0;
  align-items: stretch;
  min-width: 0;
  height: 100%;
}

.atd-retro__badge {
  display: inline-flex;
  width: var(--atd-icon);
  height: var(--atd-icon);
}

.atd-retro__badge svg,
.atd-retro__icon svg {
  display: block;
  width: 100%;
  height: 100%;
  fill: currentColor;
  shape-rendering: crispEdges;
}

.atd-retro__item {
  height: 100%;
  min-width: 0;
  padding: 0 clamp(6px, 0.5cqw, 12px);
  overflow: hidden;
  border: 0;
  border-right: 2px solid #4b2f7e;
  color: #b9a7e8;
  background: #241548;
  font: 400 var(--atd-label) / 1 "ThreeUI Fragment Mono", ui-monospace, monospace;
  letter-spacing: 0.14em;
  transition: color 0.1s steps(2), background 0.1s steps(2);
}

.atd-retro__item[data-dock-near="true"],
.atd-retro__item:focus-visible {
  color: #fff4d6;
  background: #3a2170;
}

.atd-retro__item[aria-pressed="true"] {
  color: #1a1030;
  background: #f9c74f;
}

.atd-retro__icon {
  display: inline-flex;
  flex: none;
  width: var(--atd-icon);
  height: var(--atd-icon);
}

.atd-retro__cta {
  display: inline-flex;
  flex: none;
  gap: var(--atd-gap);
  align-items: center;
  height: 100%;
  padding: 0 clamp(14px, 1.2cqw, 28px);
  border: 0;
  border-left: 2px solid #f4e6c8;
  color: #1a1030;
  background: #f47b5c;
  font: 400 var(--atd-label) / 1 "ThreeUI Fragment Mono", ui-monospace, monospace;
  letter-spacing: 0.16em;
  transition: background 0.1s steps(2), color 0.1s steps(2);
  cursor: pointer;
}

.atd-retro__cta:hover {
  color: #1a1030;
  background: #f9c74f;
}

.atd-retro__readout {
  position: absolute;
  bottom: clamp(30px, 4.2cqw, 74px);
  left: 50%;
  z-index: 8;
  display: flex;
  gap: clamp(12px, 2.4cqw, 42px);
  margin: 0;
  color: #a08fd4;
  font: 400 clamp(9px, 0.62cqw, 13px) / 1 "ThreeUI Fragment Mono", ui-monospace, monospace;
  letter-spacing: 0.2em;
  transform: translateX(-50%);
}

/* ── Liquid glass ───────────────────────────────────────────────────────────
   Vertical fit: the dock leaves the top edge for a rail down the left side. The
   proximity field runs on the y axis, so an item grows taller and leans out to
   the right instead of widening and dropping. The rail is a real
   backdrop-filter panel over the refracting Three.js bead field, so its blur
   samples the same pixels the glass shader refracts. */

.animated-top-dock-component.atd-glass {
  --atd-rail-width: clamp(158px, 12.5cqw, 250px);
  background: #08090d;
}

.atd-glass__field {
  position: absolute;
  inset: 0;
  z-index: 0;
  display: block;
  width: 100%;
  height: 100%;
}

/* a scrim behind the rail: the bead field is bright enough in places to swallow
   the wordmark, and the panel's own blur cannot darken what it samples */
.atd-glass::before {
  position: absolute;
  inset: 0 auto 0 0;
  z-index: 5;
  width: 42%;
  pointer-events: none;
  content: "";
  background: linear-gradient(90deg, rgba(6, 7, 11, 0.66), rgba(6, 7, 11, 0));
}

.atd-glass__rail {
  position: absolute;
  top: 50%;
  left: clamp(20px, 3.4cqw, 68px);
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: clamp(6px, 0.5cqw, 11px);
  align-items: stretch;
  width: var(--atd-rail-width);
  padding: var(--atd-bar-pad);
  border-radius: clamp(20px, 1.7cqw, 34px);
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05));
  box-shadow:
    0 30px 64px -26px rgba(0, 0, 0, 0.92),
    inset 0 1px 0 rgba(255, 255, 255, 0.44),
    inset 0 -1px 0 rgba(255, 255, 255, 0.12),
    inset 0 0 0 1px rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(26px) saturate(190%);
  -webkit-backdrop-filter: blur(26px) saturate(190%);
  transform: translateY(-50%);
}

.atd-glass__rail::before {
  position: absolute;
  inset: 0;
  pointer-events: none;
  content: "";
  border-radius: inherit;
  background: linear-gradient(168deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0) 76%, rgba(255, 255, 255, 0.14) 100%);
}

.atd-glass__brand {
  position: relative;
  padding: clamp(6px, 0.5cqw, 12px) clamp(8px, 0.7cqw, 15px);
  color: #fbfbfe;
}

.atd-glass__mark {
  border-radius: clamp(7px, 0.5cqw, 11px);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.42), inset 0 0 0 1px rgba(255, 255, 255, 0.3);
}

.atd-glass__hairline {
  height: 1px;
  margin: clamp(2px, 0.2cqw, 5px) clamp(6px, 0.5cqw, 12px);
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.26), rgba(255, 255, 255, 0.04));
}

.atd-glass__dock {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: clamp(2px, 0.2cqw, 5px);
  align-items: stretch;
}

.atd-glass__item {
  justify-content: flex-start;
  width: 100%;
  border: 1px solid transparent;
  border-radius: clamp(12px, 1cqw, 22px);
  color: rgba(255, 255, 255, 0.66);
  background: transparent;
  font: 500 var(--atd-label) / 1 inherit;
  letter-spacing: -0.005em;
  /* the rail grows downward from each item's own top edge */
  transform-origin: 0 50%;
  transition: color 0.18s, border-color 0.2s, background 0.2s, box-shadow 0.2s;
}

.atd-glass__item[data-dock-near="true"],
.atd-glass__item:focus-visible {
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.24);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0.07));
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.46), 0 8px 18px -10px rgba(0, 0, 0, 0.8);
}

.atd-glass__item[aria-pressed="true"] {
  color: #0d0f16;
  border-color: rgba(255, 255, 255, 0.6);
  background: linear-gradient(180deg, #ffffff, #e6e9f4);
  box-shadow: 0 10px 24px -12px rgba(255, 255, 255, 0.5), inset 0 -1px rgba(0, 0, 0, 0.14);
}

.atd-glass__cta {
  display: inline-flex;
  gap: var(--atd-gap);
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 clamp(12px, 1cqw, 22px);
  border: 1px solid rgba(255, 255, 255, 0.55);
  color: #0d0f16;
  background: linear-gradient(180deg, #ffffff, #dfe3f0);
  box-shadow: 0 12px 30px -14px rgba(255, 255, 255, 0.6), inset 0 -1px rgba(0, 0, 0, 0.16);
}

.atd-glass__cta svg {
  width: var(--atd-icon);
  height: var(--atd-icon);
  fill: none;
  stroke: currentColor;
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.atd-glass__cta:hover {
  box-shadow: 0 16px 34px -14px rgba(255, 255, 255, 0.75), inset 0 -1px rgba(0, 0, 0, 0.16);
  transform: translateY(-1px);
}

.atd-modern .animated-top-dock-component__caption,
.atd-glass .animated-top-dock-component__caption {
  color: rgba(255, 255, 255, 0.34);
}

.atd-retro .animated-top-dock-component__caption {
  z-index: 12;
  color: #7b6ab0;
}

@container (max-width: 900px) {
  .atd-modern__ghost {
    display: none;
  }

  .atd-modern__item span:last-child,
  .atd-retro__item span:last-child {
    display: none;
  }

  /* the bar is sized by its content now, so a shell this narrow has to give the
     content back: the call to action drops to its glyph rather than pushing the
     cluster past the bar's own max width */
  .atd-modern__cta span {
    display: none;
  }

  .atd-modern__cta {
    padding: 0 var(--atd-bar-pad);
  }

  /* the rail collapses to its icons rather than keeping a 158 px column in a
     card that is only a few hundred pixels wide */
  .animated-top-dock-component.atd-glass {
    --atd-rail-width: auto;
  }

  .atd-glass__item {
    justify-content: center;
  }

  .atd-glass__item span:last-child,
  .atd-glass__word,
  .atd-glass__cta span {
    display: none;
  }

  .atd-glass__cta {
    justify-content: center;
  }
}

@media (max-width: 600px) {
  .atd-modern__word {
    display: none;
  }

  .atd-modern__item {
    height: 28px !important;
    transform: none !important;
  }

  .atd-glass__item {
    height: auto !important;
    transform: none !important;
  }

  /* the strip keeps its full-height cells on a phone; only the spring stops */
  .atd-retro__item {
    height: 100% !important;
    transform: none !important;
  }

  .atd-modern__stage {
    top: 62%;
  }

  .atd-retro__readout {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .atd-modern__item,
  .atd-retro__item,
  .atd-glass__item {
    transform: none !important;
  }
}
```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
