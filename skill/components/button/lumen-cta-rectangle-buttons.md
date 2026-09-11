---
name: "Lumen CTA — Rectangle Buttons"
library: "ComponentX"
id: "lumen-cta-rectangle-buttons"
type: "button"
quality: "lightweight"
tags: ["animated", "animation", "button", "card", "data", "layout", "shader", "text", "webgl"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Lumen CTA — Rectangle Buttons

> **Type:** `button` · **Quality:** `lightweight` · **ID:** `lumen-cta-rectangle-buttons`
> **Path:** `components/button/lumen-cta-rectangle-buttons.md`

**Lumen CTA — Rectangle Buttons** is a premium, production-ready component from the **ComponentX** library — engineered for button interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Lightweight tier** — a minimal footprint, a small dependency surface, and a clean implementation that drops into any project with zero friction.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `animated`, `animation`, `button` workflows.
- **Pattern coverage** — includes `card`, `data`, `layout` workflows.
- **Pattern coverage** — includes `shader`, `text`, `webgl` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Lumen CTA — Rectangle Buttons** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
# Rectangle Buttons — Lumen CTA — Complete source

Component: `RectangleButtons`
Variant: **Lumen CTA** (`lumen-cta`)
Runtime: DOM + CSS
Source revision: `SHA-256 ff30e28c2781`

## Current configured usage

```tsx
import { RectangleButtons } from "@componentx/threeui";
import "@componentx/threeui/style.css";

export function Scene() {
  return (
    <div className="shader-frame">
      <RectangleButtons
        variant="lumen-cta"
        mode="dark"
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

This bundle contains all 4 required text source files. Preserve their paths and contents; none are excerpts.

### `src/shaders/lumen-cta/LumenCta.tsx`

Role: component · 80 lines · 2229 bytes · SHA-256 `437b62c7b9b3009f1fc80fc24e81f2014c1bab9567ba1afcff314b72c6b0b519`

```tsx
import type { CSSProperties, MouseEventHandler } from "react";

import "./lumen-cta.css";

export type LumenCtaVariant = "primary" | "ghost";
export type LumenCtaMode = "light" | "dark";

export type LumenCtaProps = {
  variant?: LumenCtaVariant;
  mode?: LumenCtaMode;
  label?: string;
  ring?: boolean;
  hue?: number;
  saturation?: number;
  brightness?: number;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  style?: CSSProperties;
};

export const LUMEN_CTA_DEFAULTS = {
  variant: "primary",
  mode: "dark",
  label: "Get your card",
  ring: true,
  hue: 0,
  saturation: 1,
  brightness: 1,
} as const satisfies Required<
  Pick<LumenCtaProps, "variant" | "mode" | "label" | "ring" | "hue" | "saturation" | "brightness">
>;

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(maximum, Math.max(minimum, value));
}

export function LumenCta({
  variant = LUMEN_CTA_DEFAULTS.variant,
  mode = LUMEN_CTA_DEFAULTS.mode,
  label = LUMEN_CTA_DEFAULTS.label,
  ring = LUMEN_CTA_DEFAULTS.ring,
  hue = LUMEN_CTA_DEFAULTS.hue,
  saturation = LUMEN_CTA_DEFAULTS.saturation,
  brightness = LUMEN_CTA_DEFAULTS.brightness,
  disabled = false,
  type = "button",
  onClick,
  className = "",
  style,
}: LumenCtaProps) {
  const safeVariant: LumenCtaVariant = variant === "ghost" ? "ghost" : "primary";
  const safeMode: LumenCtaMode = mode === "light" ? "light" : "dark";

  return (
    <div
      className={`lumen-cta lumen-cta--${safeMode}${className ? ` ${className}` : ""}`}
      data-variant={safeVariant}
      style={
        {
          "--lumen-cta-hue": `${clamp(hue, -180, 180)}deg`,
          "--lumen-cta-saturation": clamp(saturation, 0, 2),
          "--lumen-cta-brightness": clamp(brightness, 0.35, 1.65),
          ...style,
        } as CSSProperties
      }
    >
      <button
        className={`lumen-cta__button${safeVariant === "ghost" ? " lumen-cta__button--ghost" : ""}`}
        type={type}
        disabled={disabled}
        onClick={onClick}
      >
        {label}
        {ring ? <i className="lumen-cta__ring" aria-hidden="true" /> : null}
      </button>
    </div>
  );
}
```

### `src/shaders/lumen-cta/lumen-cta.css`

Role: style-source · 123 lines · 2938 bytes · SHA-256 `a19f7e01d0a0580afaedfaccd7a1acb1a74a004ded3e5269d59da986e085c151`

```css
.lumen-cta,
.lumen-cta *,
.lumen-cta *::before,
.lumen-cta *::after {
  box-sizing: border-box;
}

.lumen-cta {
  --lumen-cta-hue: 0deg;
  --lumen-cta-saturation: 1;
  --lumen-cta-brightness: 1;
  position: relative;
  display: grid;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  place-items: center;
  overflow: hidden;
  isolation: isolate;
  background: #0b0821;
}

.lumen-cta--light {
  background: #f3f0fb;
}

.lumen-cta__button {
  /* Measurements are the authored ones from lumen.html: .btn / .btn-primary. */
  height: 45px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 0 30px;
  border-radius: 999px;
  border: 0;
  outline: 1px solid rgba(255, 255, 255, 0.1);
  text-decoration: none;
  font-family: "Mulish", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 15.7px;
  font-weight: 600;
  line-height: 1;
  color: #fff;
  white-space: nowrap;
  position: relative;
  cursor: pointer;
  appearance: none;
  background: linear-gradient(
    90deg,
    #050014 0%,
    #0d0029 20%,
    #1e0066 40%,
    #2f00ab 60%,
    #5227c0 75%,
    #9470d9 100%
  );
  box-shadow:
    0 4px 22px rgba(70, 20, 190, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.14);
  filter: hue-rotate(var(--lumen-cta-hue)) saturate(var(--lumen-cta-saturation))
    brightness(var(--lumen-cta-brightness));
  transition: filter 0.25s ease;
}

.lumen-cta__button:hover:not(:disabled) {
  filter: hue-rotate(var(--lumen-cta-hue)) saturate(var(--lumen-cta-saturation))
    brightness(calc(var(--lumen-cta-brightness) * 1.12));
}

.lumen-cta__button:focus-visible {
  outline: 2px solid rgba(255, 255, 255, 0.85);
  outline-offset: 3px;
}

.lumen-cta__button:disabled {
  cursor: default;
  opacity: 0.55;
}

/* The authored sibling: same pill, glass instead of gradient (.btn-ghost / .navcta). */
.lumen-cta__button--ghost {
  padding: 0 33px;
  background: rgba(255, 255, 255, 0.018);
  outline-color: rgba(255, 255, 255, 0.2);
  box-shadow: none;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: background 0.25s ease, outline-color 0.25s ease;
}

.lumen-cta__button--ghost:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.09);
  filter: hue-rotate(var(--lumen-cta-hue)) saturate(var(--lumen-cta-saturation))
    brightness(var(--lumen-cta-brightness));
}

.lumen-cta--light .lumen-cta__button--ghost {
  color: #1a1033;
  background: rgba(12, 6, 34, 0.03);
  outline-color: rgba(12, 6, 34, 0.16);
}

.lumen-cta--light .lumen-cta__button--ghost:hover:not(:disabled) {
  background: rgba(12, 6, 34, 0.07);
}

.lumen-cta__ring {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  border: 1.3px solid rgba(255, 255, 255, 0.9);
  flex: 0 0 auto;
}

.lumen-cta--light .lumen-cta__button--ghost .lumen-cta__ring {
  border-color: rgba(26, 16, 51, 0.75);
}

@media (prefers-reduced-motion: reduce) {
  .lumen-cta__button {
    transition: none;
  }
}
```

### `src/shaders/lumen-cta/sources/lumen.html`

Role: canonical-source · 720 lines · 33252 bytes · SHA-256 `8992e7c0ceb4c306502f5c296f1fd3e8c8602372d1a217fa1f3b5e49445ec28d`

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Nocturne — Money that never sleeps</title>
<meta name="description" content="Nocturne — a debit card for life after dark, rendered in three.js on a still midnight sea.">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23 29'%3E%3Cpath d='M9.09 2.3A13.91 13.91 0 0 0 23 16.21' stroke='%23fff' stroke-width='4.6' fill='none'/%3E%3Cpath d='M2.3 12.79A13.91 13.91 0 0 0 16.21 26.7' stroke='%23fff' stroke-width='4.6' fill='none'/%3E%3C/svg%3E">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;600&display=swap" rel="stylesheet">
<style>
  :root{
    --ink:#ffffff;
    --ink-dim:#8ea6cc;
    --ink-dimmer:#7d94b8;
    --pad:32px;
  }
  *{box-sizing:border-box}
  html,body{margin:0;padding:0;height:100%;background:#050b1a;overflow:hidden}
  body{
    font-family:'Mulish',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
    font-weight:300;
    color:var(--ink);
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
  }
  #gl{position:fixed;inset:0;width:100%;height:100%;display:block;z-index:0}

  .stage{position:fixed;inset:0;z-index:2;pointer-events:none}
  .stage > *{pointer-events:auto}

  /* ---------------- nav ---------------- */
  nav{
    position:absolute;left:0;right:0;top:0;height:88px;
    display:flex;align-items:center;
    padding:0 var(--pad);
  }
  .brand{display:flex;align-items:center;gap:13px;text-decoration:none;color:var(--ink)}
  .brand svg{display:block;width:23px;height:29px;overflow:visible}
  .brand span{font-size:16px;font-weight:400;letter-spacing:-.005em;line-height:1}

  .navpill{
    position:absolute;left:50%;top:22px;transform:translateX(-50%);
    height:45px;display:flex;align-items:center;gap:0;
    padding:0 5px;border-radius:999px;
    border:1px solid rgba(255,255,255,.20);
    background:rgba(255,255,255,.05);
    backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);
  }
  .navpill a{
    color:#fff;text-decoration:none;font-size:15.7px;font-weight:600;
    padding:0 16.3px;line-height:1;white-space:nowrap;transition:opacity .25s ease;opacity:.94;
  }
  .navpill a:hover{opacity:1}

  .navcta{
    position:absolute;right:var(--pad);top:19px;
    height:47px;display:inline-flex;align-items:center;gap:9px;
    padding:0 21px;border-radius:999px;
    border:1px solid rgba(255,255,255,.24);
    background:rgba(255,255,255,.05);
    backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);
    color:#fff;text-decoration:none;font-size:15.7px;font-weight:600;white-space:nowrap;
    transition:background .25s ease,border-color .25s ease;
  }
  .navcta:hover{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.32)}
  .ring{width:7px;height:7px;border-radius:50%;border:1.3px solid rgba(255,255,255,.9);flex:0 0 auto}

  /* ---------------- hero copy ---------------- */
  h1{
    position:absolute;left:var(--pad);top:114px;margin:0;
    font-size:58.4px;line-height:60px;font-weight:300;letter-spacing:0;
    white-space:nowrap;
  }
  h1 .dim{color:var(--ink-dim);display:block}

  .lede{
    position:absolute;left:var(--pad);top:484px;margin:0;width:360px;
    font-size:15.7px;line-height:22px;font-weight:600;color:#fff;letter-spacing:0;
  }
  .facts{
    position:absolute;right:var(--pad);top:484px;margin:0;text-align:right;
    font-size:15.7px;line-height:22px;font-weight:600;color:#fff;
  }

  .bigtag{
    position:absolute;right:30px;bottom:41px;margin:0;text-align:right;
    font-size:58.5px;line-height:60px;font-weight:300;letter-spacing:0;
    color:#fff;white-space:nowrap;
  }
  .bigtag .dim{color:var(--ink-dimmer);display:block}

  .actions{position:absolute;left:var(--pad);bottom:45px;display:flex;gap:16px;align-items:center}
  .btn{
    height:45px;display:inline-flex;align-items:center;gap:10px;
    padding:0 30px;border-radius:999px;text-decoration:none;
    font-size:15.7px;font-weight:600;color:#fff;white-space:nowrap;position:relative;
  }
  .btn-ghost{padding:0 33px}
  .btn-primary{
    background:linear-gradient(90deg,#050014 0%,#0d0029 20%,#1e0066 40%,#2f00ab 60%,#5227c0 75%,#9470d9 100%);
    box-shadow:0 4px 22px rgba(70,20,190,.30), inset 0 1px 0 rgba(255,255,255,.14);
    border:1px solid rgba(255,255,255,.10);
  }
  .btn-primary:hover{filter:brightness(1.12)}
  .btn-ghost{
    border:1px solid rgba(255,255,255,.20);
    background:rgba(255,255,255,.018);
    backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);
  }
  .btn-ghost:hover{background:rgba(255,255,255,.09)}

  @media (max-width:1240px){ .navpill{display:none} }
  @media (max-width:1180px){
    h1{font-size:46px;line-height:50px;top:100px}
    .bigtag{font-size:40px;line-height:45px;bottom:132px}
    .lede{top:auto;bottom:214px;width:min(330px,44vw)}
    .facts{top:auto;bottom:214px}
    .actions{bottom:52px}
  }
  @media (max-width:820px){
    h1{font-size:38px;line-height:42px;top:92px}
    .bigtag{font-size:32px;line-height:36px;bottom:150px}
    .lede{bottom:236px;width:min(290px,52vw);font-size:14.5px;line-height:20px}
    .facts{bottom:236px;font-size:14.5px;line-height:20px}
  }
  @media (max-width:620px){
    :root{--pad:20px}
    h1{font-size:31px;line-height:35px;top:80px}
    .bigtag{font-size:25px;line-height:29px;bottom:160px;left:var(--pad);right:auto;text-align:left}
    .lede{bottom:230px;width:min(320px,88vw);font-size:14px;line-height:20px}
    .facts{display:none}
    .navcta{display:none}
    .actions{bottom:44px;gap:12px}
    .btn{height:43px;padding:0 22px;font-size:15px}
    .btn-ghost{padding:0 22px}
  }
  @media (max-height:560px){
    h1{font-size:32px;line-height:36px;top:74px}
    .bigtag{font-size:26px;line-height:30px;bottom:96px}
    .lede,.facts{bottom:150px;font-size:13.5px;line-height:19px}
    .actions{bottom:34px}
  }
</style>
</head>
<body>
<canvas id="gl"></canvas>

<div class="stage">
  <nav>
    <a class="brand" href="#">
      <svg viewBox="0 0 23 29" fill="none" aria-hidden="true">
        <path d="M9.09 2.30 A13.91 13.91 0 0 0 23 16.21" stroke="#fff" stroke-width="4.6"/>
        <path d="M2.30 12.79 A13.91 13.91 0 0 0 16.21 26.70" stroke="#fff" stroke-width="4.6"/>
      </svg>
      <span>Nocturne</span>
    </a>
    <div class="navpill">
      <a href="#">Accounts</a>
      <a href="#">How it works</a>
      <a href="#">Rates</a>
      <a href="#">Support</a>
    </div>
    <a class="navcta" href="#">Open an account <i class="ring"></i></a>
  </nav>

  <h1>Money that never<span class="dim">sleeps</span></h1>

  <p class="lede">Send, save, and settle around the clock —<br>one account that simply never closes.</p>
  <p class="facts">No monthly fees<br>Live in 90 seconds</p>

  <p class="bigtag"><span class="dim">A debit card for</span>life after dark</p>

  <div class="actions">
    <a class="btn btn-primary" href="#">Open an account <i class="ring"></i></a>
    <a class="btn btn-ghost" href="#">See how it works</a>
  </div>
</div>

<script src="https://unpkg.com/three@0.149.0/build/three.min.js"></script>
<script>
(function(){
'use strict';
// ───────────────────────────── design constants ─────────────────────────────
// Solved from the reference: 1440x1026, horizon at y=572, world unit = card width.
var DES_W=1440, DES_H=1026;
var FOVY=35;                       // vertical field of view (deg)
var CAM_PITCH= 2.0768*Math.PI/180; // pitched up -> horizon lands at 55.75% of the frame
var CAM_H=0.5556;                  // camera height above the water plane
var CARD_W=1.0, CARD_H=1.4603, CARD_T=0.030, CARD_R=0.062;
var CARD_X=-0.0008, CARD_Y=0.7140, CARD_Z=-4.3043;   // Y measured from the water plane
var ARCH_R=4.7627, ARCH_TUBE=0.045;
var ARCH_X=-0.0957, ARCH_Y=0.4587, ARCH_Z=-21.02;
var OMEGA=2*Math.PI/1.5;           // master clock: 1.5 s cycle
var GYRO_A=8.812*Math.PI/180, GYRO_PH=134.43*Math.PI/180;
var GYRO_CX=-1.991*Math.PI/180, GYRO_CY=0.898*Math.PI/180;

var Q=new URLSearchParams(location.search);
var FIXED_T=Q.has('t')?parseFloat(Q.get('t')):null;
var REDUCED=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(REDUCED&&FIXED_T===null) FIXED_T=0.62;   // a settled, well-composed pose
if(Q.get('ui')==='0'){var st=document.querySelector('.stage'); if(st) st.style.visibility='hidden';}

// ───────────────────────────── renderer ─────────────────────────────
var canvas=document.getElementById('gl');
var renderer=new THREE.WebGLRenderer({canvas:canvas,antialias:true,alpha:false,powerPreference:'high-performance'});
renderer.setClearColor(0x000000,1);
var scene=new THREE.Scene();
var camera=new THREE.PerspectiveCamera(FOVY,1,0.05,4000);
camera.position.set(0,CAM_H,0);
camera.rotation.order='YXZ';
camera.rotation.set(CAM_PITCH,0,0);

var DPR=1;
var reflRT=null, sceneRT=null;

// ───────────────────────────── shared GLSL ─────────────────────────────
var COMMON=[
'precision highp float;',
'float hash11(float p){ p=fract(p*0.1031); p*=p+33.33; p*=p+p; return fract(p); }',
'float hash13(vec3 p){ p=fract(p*0.1031); p+=dot(p,p.yzx+33.33); return fract((p.x+p.y)*p.z); }',
'float vnoise(vec3 x){',
'  vec3 i=floor(x), f=fract(x); f=f*f*(3.0-2.0*f);',
'  float n000=hash13(i+vec3(0,0,0)), n100=hash13(i+vec3(1,0,0));',
'  float n010=hash13(i+vec3(0,1,0)), n110=hash13(i+vec3(1,1,0));',
'  float n001=hash13(i+vec3(0,0,1)), n101=hash13(i+vec3(1,0,1));',
'  float n011=hash13(i+vec3(0,1,1)), n111=hash13(i+vec3(1,1,1));',
'  return mix(mix(mix(n000,n100,f.x),mix(n010,n110,f.x),f.y),',
'             mix(mix(n001,n101,f.x),mix(n011,n111,f.x),f.y),f.z);',
'}',
'float fbm(vec3 p){',
'  float a=0.5,s=0.0; mat3 m=mat3(0.00,0.80,0.60,-0.80,0.36,-0.48,-0.60,-0.48,0.64);',
'  for(int i=0;i<5;i++){ s+=a*vnoise(p); p=m*p*2.02; a*=0.5; }',
'  return s;',
'}',
'vec3 s2l(vec3 c){ return pow(c,vec3(2.2)); }',
'vec3 l2s(vec3 c){ return pow(max(c,0.0),vec3(1.0/2.2)); }',
''].join('\n');

var SKY=[
'uniform vec3 uGlowCol, uNebCol, uGlowDir; uniform vec3 uSky[7];',
'uniform float uGlowSig, uGlowI, uNebI, uStarI, uTime;',
'vec3 skyColor(vec3 rd, float stars){',
'  float y=rd.y;',
'  // vertical ramp measured off the reference sky (linear light, 0.05 rad steps)',
'  float e=clamp(y,0.0,0.32)/0.0533333;',
'  float ei=floor(e); float ef=e-ei; int ek=int(ei);',
'  vec3 sa=uSky[6], sb=uSky[6];',
'  for(int q=0;q<6;q++){ if(q==ek){ sa=uSky[q]; sb=uSky[q+1]; } }',
'  vec3 col=mix(sa,sb,ef);',
'  // soft nebula banks',
'  vec3 q=rd*vec3(3.1,6.4,3.1);',
'  float n=fbm(q*1.25+vec3(11.3,4.1,7.7));',
'  float neb=smoothstep(0.470,0.700,n)*(0.20+0.80*clamp(y*3.6,0.0,1.0));',
'  col+=uNebCol*neb*uNebI;',
'  // horizon glow',
'  float ca=dot(normalize(rd),uGlowDir);',
'  float ang=acos(clamp(ca,-1.0,1.0));',
'  float g=exp(-pow(ang/uGlowSig,2.0))+0.0026*exp(-pow(ang/(uGlowSig*3.2),2.0));',
'  col+=uGlowCol*g*uGlowI;',
'  // stars',
'  if(stars>0.0){',
'    vec3 sp=rd*340.0; vec3 ci=floor(sp);',
'    float h=hash13(ci);',
'    if(h>0.9055){',
'      vec3 cf=fract(sp)-0.5;',
'      vec3 jitter=vec3(hash11(h*13.1),hash11(h*27.7),hash11(h*41.3))-0.5;',
'      float d=length(cf-jitter*0.6);',
'      float b=smoothstep(0.21,0.0,d)*(0.30+0.70*hash11(h*7.3));',
'      float tw=0.75+0.25*sin(uTime*2.1+h*90.0);',
'      col+=vec3(0.95,0.93,1.0)*b*tw*uStarI*stars*smoothstep(-0.02,0.25,y);',
'    }',
'  }',
'  return col;',
'}',
''].join('\n');

var skyUniforms={
  uSky:{value:[]},
  uGlowCol:{value:new THREE.Color()},
  uNebCol:{value:new THREE.Color()},
  uGlowDir:{value:new THREE.Vector3(0,-0.004,-1).normalize()},
  uGlowSig:{value:0.163},
  uGlowI:{value:1.0},
  uNebI:{value:1.0},
  uStarI:{value:1.0},
  uTime:{value:0}
};
function sRGB(hex){ var c=new THREE.Color(hex); return new THREE.Color(Math.pow(c.r,2.2),Math.pow(c.g,2.2),Math.pow(c.b,2.2)); }
// elevation ramp, linear RGB, sampled every 0.0533 of rd.y (0 -> 0.32)
// elevation ramp, linear RGB, every 0.0533 of rd.y (0 -> 0.32): midnight blue
var SKY_RAMP=[[0.0593,0.0798,0.3176],[0.0503,0.0745,0.2981],[0.0327,0.0497,0.2421],
              [0.0214,0.0350,0.1893],[0.0131,0.0253,0.1481],[0.0062,0.0142,0.1074],
              [0.0026,0.0085,0.0798]];
var CFG={
  glow:'#a6d2ff', neb:'#a9bcd8',
  glowSig:0.136, glowI:2.20, nebI:0.08, starI:0.70
};
function applySky(){
  skyUniforms.uSky.value=SKY_RAMP.map(function(c){return new THREE.Color(c[0],c[1],c[2]);});
  skyUniforms.uGlowCol.value.copy(sRGB(CFG.glow));
  skyUniforms.uNebCol.value.setRGB(0.44,0.56,1.0);
  skyUniforms.uGlowSig.value=CFG.glowSig;
  skyUniforms.uGlowI.value=CFG.glowI;
  skyUniforms.uNebI.value=CFG.nebI;
  skyUniforms.uStarI.value=CFG.starI;
}
applySky();

// ───────────────────────────── sky backdrop ─────────────────────────────
var camU={ uRight:{value:new THREE.Vector3()}, uUp:{value:new THREE.Vector3()},
           uFwd:{value:new THREE.Vector3()}, uTanHalf:{value:0}, uAspect:{value:1} };
var skyMat=new THREE.ShaderMaterial({
  uniforms:Object.assign({},skyUniforms,camU),
  depthTest:false, depthWrite:false,
  vertexShader:'varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,1.0,1.0); }',
  fragmentShader:COMMON+SKY+[
  'varying vec2 vUv;',
  'uniform vec3 uRight,uUp,uFwd; uniform float uTanHalf,uAspect;',
  'void main(){',
  '  vec2 p=vUv*2.0-1.0;',
  '  vec3 rd=normalize(uFwd + uRight*(p.x*uTanHalf*uAspect) + uUp*(p.y*uTanHalf));',
  '  vec3 c=skyColor(rd,1.0);',
  '  gl_FragColor=vec4(l2s(c),1.0);',
  '}'].join('\n')
});
var skyMesh=new THREE.Mesh(new THREE.PlaneGeometry(2,2),skyMat);
skyMesh.frustumCulled=false; skyMesh.renderOrder=-10;
scene.add(skyMesh);

// ───────────────────────────── card ─────────────────────────────
function roundedRectShape(w,h,r){
  var s=new THREE.Shape(), x=-w/2, y=-h/2;
  s.moveTo(x+r,y);
  s.lineTo(x+w-r,y); s.quadraticCurveTo(x+w,y,x+w,y+r);
  s.lineTo(x+w,y+h-r); s.quadraticCurveTo(x+w,y+h,x+w-r,y+h);
  s.lineTo(x+r,y+h); s.quadraticCurveTo(x,y+h,x,y+h-r);
  s.lineTo(x,y+r); s.quadraticCurveTo(x,y,x+r,y);
  return s;
}
var cardGeo=new THREE.ExtrudeGeometry(roundedRectShape(CARD_W,CARD_H,CARD_R),
  {depth:CARD_T,bevelEnabled:true,bevelThickness:0.006,bevelSize:0.006,bevelSegments:3,curveSegments:22});
cardGeo.translate(0,0,-CARD_T/2);
cardGeo.computeVertexNormals();
(function(){ // planar UVs from x,y so front + rim share the artwork frame
  var pos=cardGeo.attributes.position, uvs=new Float32Array(pos.count*2);
  for(var i=0;i<pos.count;i++){
    uvs[i*2]  =(pos.getX(i)+CARD_W/2)/CARD_W;
    uvs[i*2+1]=1.0-(pos.getY(i)+CARD_H/2)/CARD_H;
  }
  cardGeo.setAttribute('uv',new THREE.BufferAttribute(uvs,2));
})();

// card artwork (chip / wordmark / brand arcs) drawn to a canvas
function cardMarkTexture(){
  // the two brand arcs: identical 90 deg quarter circles, offset diagonally
  var W=512, H=Math.round(512*CARD_H/CARD_W);
  var c=document.createElement('canvas'); c.width=W; c.height=H;
  var g=c.getContext('2d');
  var R=W*0.1493, sw=W*0.0494;
  g.strokeStyle='#ffffff'; g.lineWidth=sw; g.lineCap='butt';
  [[0.6220,0.3973],[0.5491,0.5011]].forEach(function(p){
    g.beginPath(); g.arc(W*p[0], H*p[1], R, Math.PI*0.5, Math.PI); g.stroke();
  });
  var t=new THREE.CanvasTexture(c); t.flipY=false; t.anisotropy=8; t.needsUpdate=true;
  return t;
}
function cardArtTexture(){
  var W=1024, H=Math.round(1024*CARD_H/CARD_W);
  var c=document.createElement('canvas'); c.width=W; c.height=H;
  var g=c.getContext('2d');
  g.clearRect(0,0,W,H);

  // ---- EMV chip: 5 fingers, solid centre band, 5 fingers ----
  var cx0=W*0.766, cy0=H*0.0795, cw=W*0.118, ch=H*0.1082;
  var rr=cw*0.135;
  g.fillStyle='rgba(238,236,244,0.98)';
  g.beginPath();
  g.moveTo(cx0+rr,cy0); g.lineTo(cx0+cw-rr,cy0); g.quadraticCurveTo(cx0+cw,cy0,cx0+cw,cy0+rr);
  g.lineTo(cx0+cw,cy0+ch-rr); g.quadraticCurveTo(cx0+cw,cy0+ch,cx0+cw-rr,cy0+ch);
  g.lineTo(cx0+rr,cy0+ch); g.quadraticCurveTo(cx0,cy0+ch,cx0,cy0+ch-rr);
  g.lineTo(cx0,cy0+rr); g.quadraticCurveTo(cx0,cy0,cx0+rr,cy0); g.closePath(); g.fill();
  g.globalCompositeOperation='destination-out';
  g.fillStyle='#000';
  [[0.145,0.030],[0.381,0.030],[0.619,0.030],[0.855,0.030]].forEach(function(v){
    g.fillRect(cx0+cw*(v[0]-v[1]/2), cy0, cw*v[1], ch*0.297);
    g.fillRect(cx0+cw*(v[0]-v[1]/2), cy0+ch*0.684, cw*v[1], ch*0.316);
  });
  g.fillRect(cx0, cy0+ch*0.278, cw, ch*0.040);
  g.fillRect(cx0, cy0+ch*0.671, cw, ch*0.027);
  g.globalCompositeOperation='source-over';

  // ---- wordmark ----
  g.fillStyle='rgba(255,255,255,0.99)';
  var fs=H*0.0579;                       // cap 0.0411 of the card height / Mulish cap ratio 0.71
  g.font='600 '+fs+'px Mulish, system-ui, sans-serif';
  g.textBaseline='alphabetic';
  if('letterSpacing' in g) g.letterSpacing=(fs*0.055).toFixed(2)+'px';
  var m=g.measureText('Nocturne');
  g.fillText('Nocturne', W*0.120+(m.actualBoundingBoxLeft||0), H*0.9466);
  if('letterSpacing' in g) g.letterSpacing='0px';

  var t=new THREE.CanvasTexture(c); t.flipY=false; t.anisotropy=8; t.needsUpdate=true;
  return t;
}

var PASS={uEncode:{value:1}, uReflFade:{value:15.0}, uArchFade:{value:1.5}};
var cardUniforms=Object.assign({
  uArt:{value:null},
  uMark:{value:null},
  uCurv:{value:new THREE.Vector2(1.015,0.245)},
  uLw:{value:0.075},
  uLl:{value:1.60},
  uLoff:{value:0.1116},
  uPd:{value:new THREE.Vector3(-0.4457,0.8951,0)},
  uLaxis:{value:new THREE.Vector3(0.8951,0.4457,0)},
  uSpecCol:{value:new THREE.Vector3(0.70,0.86,1.00)},
  uBandI:{value:0.215},
  uCam:{value:new THREE.Vector3()},
  uEncode:PASS.uEncode,
  uReflFade:PASS.uReflFade
},skyUniforms);

var cardMat=new THREE.ShaderMaterial({
  uniforms:cardUniforms, side:THREE.DoubleSide,
  vertexShader:[
  'varying vec2 vUv; varying vec3 vN; varying vec3 vW; varying vec3 vT; varying vec3 vB;',
  'void main(){ vUv=uv; mat3 m=mat3(modelMatrix);',
  '  vN=normalize(m*normal); vT=normalize(m*vec3(1.0,0.0,0.0)); vB=normalize(m*vec3(0.0,1.0,0.0));',
  '  vec4 w=modelMatrix*vec4(position,1.0); vW=w.xyz;',
  '  gl_Position=projectionMatrix*viewMatrix*w; }'].join('\n'),
  fragmentShader:COMMON+SKY+[
  'varying vec2 vUv; varying vec3 vN; varying vec3 vW; varying vec3 vT; varying vec3 vB;',
  'uniform float uReflFade;',
  'uniform sampler2D uArt,uMark; uniform float uBandI,uEncode;',
  'uniform vec3 uCam,uLaxis,uPd,uSpecCol; uniform vec2 uCurv; uniform float uLw,uLl,uLoff;',
  // base gradient of the card artwork, fitted from the reference (band removed)
  'vec3 cardBase(vec2 uv){',
  '  float u=clamp(uv.x,0.03,0.97), v=clamp(uv.y,0.02,0.98);',
  '  float U2=u*u,U3=U2*u,U4=U3*u,U5=U4*u;',
  '  float V2=v*v,V3=V2*v,V4=V3*v,V5=V4*v;',
  '  float r=+0.130046-1.902770*v+9.104567*V2-18.981270*V3+19.107280*V4-7.331406*V5-0.296894*u+3.157422*u*v-8.564896*u*V2+11.468227*u*V3-5.586505*u*V4+1.612817*U2-4.463720*U2*v+3.932750*U2*V2-0.471929*U2*V3-2.368938*U3+4.350466*U3*v-2.251935*U3*V2+1.230187*U4-1.203454*U4*v-0.160995*U5;',
  '  float g=+0.105626-1.672649*v+9.203426*V2-21.063687*V3+21.788257*V4-8.297541*V5-0.313634*u+3.297877*u*v-11.158597*u*V2+16.146581*u*V3-8.109575*u*V4+1.229731*U2-3.564870*U2*v+3.650588*U2*V2+0.135369*U2*V3-2.066140*U3+2.916709*U3*v-2.302265*U3*V2+1.591828*U4-0.514380*U4*v-0.511339*U5;',
  '  float b=+0.181705-2.583078*v+12.773667*V2-28.929175*V3+32.557368*V4-13.797728*V5-0.455706*u+1.348018*u*v+2.662210*u*V2-2.091564*u*V3-0.868155*u*V4+3.226593*U2-6.385232*U2*v-3.199963*U2*V2+5.280860*U2*V3-2.188520*U3+9.604219*U3*v-4.182629*U3*V2-1.492419*U4-2.254428*U4*v+1.270163*U5;',
  '  vec3 c=s2l(clamp(vec3(r,g,b),0.0,1.0));',
  '  // the gradient was fitted off a violet card; rotate it into midnight blue',
  '  return vec3(c.r*0.30+c.b*0.02, c.g*0.75+c.b*0.10, c.b*1.02+c.r*0.05);',
  '}',
  'void main(){',
  '  vec2 uv=vUv;',
  '  vec3 col=cardBase(uv);',
  '  // strip light reflected off a shallow virtual bulge -> a band that slides *and* turns',
  '  vec3 V=normalize(uCam-vW);',
  '  vec2 p=vec2(uv.x-0.5,(0.5-uv.y)*1.4603);',
  '  vec3 Nb=normalize(vN - (vT*(p.x*uCurv.x) + vB*(p.y*uCurv.y)));',
  '  vec3 Rr=reflect(-V,Nb);',
  '  float dp=dot(Rr,uPd)-uLoff;',
  '  float dax=dot(Rr,uLaxis);',
  '  float band=exp(-pow(dp/uLw,2.0))*exp(-pow(dax/uLl,2.0));',
  '  col+=uSpecCol*band*uBandI;',
  '  float fr=pow(1.0-clamp(dot(normalize(vN),V),0.0,1.0),3.0);',
  '  col+=vec3(0.34,0.52,0.78)*fr*0.05;',
  '  // embossed brand arcs (measured as a ~1.75x lift of the base ramp)',
  '  float mk=texture2D(uMark,uv).a;',
  '  col*=mix(vec3(1.0),vec3(1.78,1.78,1.52),mk);',
  '  // artwork',
  '  vec4 art=texture2D(uArt,uv);',
  '  col=mix(col,s2l(art.rgb),art.a);',
  '  if(uEncode<0.5){ float fd=exp(-max(vW.y,0.0)*uReflFade); gl_FragColor=vec4(col*fd,fd); return; }',
  '  gl_FragColor=vec4(l2s(col),1.0);',
  '}'].join('\n')
});

var card=new THREE.Mesh(cardGeo,cardMat);
card.position.set(CARD_X,CARD_Y,CARD_Z);
card.rotation.order='XYZ';
scene.add(card);

// ───────────────────────────── arch ─────────────────────────────
var archGeo=new THREE.TorusGeometry(ARCH_R,ARCH_TUBE,40,1600);
var archMat=new THREE.ShaderMaterial({
  uniforms:Object.assign({uCam:{value:new THREE.Vector3()},uBody:{value:sRGB('#22375f')},uSpec:{value:1.0},uWaterCol:{value:new THREE.Color(0.005,0.012,0.050)},uArchSig:{value:14.0},uArchI:{value:1.9},uEncode:PASS.uEncode,uReflFade:PASS.uArchFade},skyUniforms),
  side:THREE.DoubleSide,
  vertexShader:['varying vec3 vN; varying vec3 vW;',
  'void main(){ vN=normalize(mat3(modelMatrix)*normal); vec4 w=modelMatrix*vec4(position,1.0); vW=w.xyz;',
  ' gl_Position=projectionMatrix*viewMatrix*w; }'].join('\n'),
  fragmentShader:COMMON+SKY+[
  'varying vec3 vN; varying vec3 vW; uniform vec3 uCam,uBody,uWaterCol; uniform float uSpec,uEncode,uReflFade,uArchSig,uArchI;',
  'void main(){',
  '  vec3 N=normalize(vN); vec3 V=normalize(uCam-vW);',
  '  vec3 R=reflect(-V,N);',
  '  // rays that go below the horizon see dark water, not the bright horizon band',
  '  vec3 env=skyColor(vec3(R.x,max(R.y,0.0),R.z),0.0);',
  '  env=mix(env,uWaterCol,clamp(-R.y*5.0,0.0,1.0));',
  '  float fr=0.03+0.97*pow(1.0-clamp(dot(N,V),0.0,1.0),3.0);',
  '  vec3 col=uBody*0.92+env*fr*uSpec;',
  '  // glossy key highlight, held at a constant offset inside the tube cross-section',
  '  float lobe=pow(clamp(-N.y,0.0,1.0),uArchSig);',
  '  col+=vec3(0.82,0.92,1.00)*lobe*uArchI;',
  '  if(uEncode<0.5){ float fd=exp(-max(vW.y,0.0)*uReflFade); gl_FragColor=vec4(col*fd,fd); return; }',
  '  gl_FragColor=vec4(l2s(col),1.0);',
  '}'].join('\n')
});
var arch=new THREE.Mesh(archGeo,archMat);
arch.position.set(ARCH_X,ARCH_Y,ARCH_Z);
scene.add(arch);

// ───────────────────────────── water ─────────────────────────────
var waterUniforms=Object.assign({
  uRefl:{value:null},
  uRes:{value:new THREE.Vector2(1,1)},
  uCam:{value:new THREE.Vector3()},
  uCenter:{value:new THREE.Vector3(CARD_X,0,CARD_Z)},
  uDeep:{value:new THREE.Color(0.0035,0.0085,0.0520)},
  uDistort:{value:0.60},
  uDecay:{value:0.35},
  uSmear:{value:0.006},
  uFpow:{value:20.0},
  uF0:{value:0.140},
  uK:{value:5.0},
  uSwell:{value:0.06},
  uSunI:{value:3.5},
  uSunSig:{value:0.09},
  uSunCol:{value:new THREE.Vector3(0.62,0.82,1.00)},
  uAmp:{value:0.20},
  uFade:{value:0.010}
},skyUniforms);

var waterMat=new THREE.ShaderMaterial({
  uniforms:waterUniforms,
  vertexShader:['varying vec3 vW;',
  'void main(){ vec4 w=modelMatrix*vec4(position,1.0); vW=w.xyz; gl_Position=projectionMatrix*viewMatrix*w; }'].join('\n'),
  fragmentShader:COMMON+SKY+[
  'varying vec3 vW;',
  'uniform sampler2D uRefl; uniform vec2 uRes; uniform vec3 uCam,uCenter,uDeep;',
  'uniform float uDistort,uAmp,uFade,uDecay,uFpow,uF0,uSunI,uSunSig,uK,uSwell,uSmear;',
  'uniform vec3 uSunCol;',
  'void main(){',
  '  vec3 P=vW;',
  '  vec3 toCam=uCam-P; float dist=length(toCam); vec3 V=toCam/dist;',
  '  vec2 d2=P.xz-uCenter.xz; float r=length(d2);',
  '  vec2 dir = r>1e-4 ? d2/r : vec2(1.0,0.0);',
  '  // break the rings out of perfect circles',
  '  float ang=atan(d2.y,d2.x);',
  '  float wob=0.30*sin(ang*2.0+0.7)+0.20*sin(ang*3.0-1.9)+0.11*sin(ang*5.0+2.4);',
  '  r=r*(1.0+wob*0.11)+wob*0.16;',
  '  float fade=1.0/(1.0+dist*dist*uFade);',
  '  float t=uTime;',
  '  vec2 grad=vec2(0.0);',
  '  // concentric ripples radiating from the card',
  '  float A=0.050*uAmp;',
  '  float k=uK;',
  '  float dec=1.0/(1.0+r*r*uDecay*uDecay);',
  '  grad+=dir*(A*dec*k*cos(k*r-OMEGA_*t));',
  '  grad+=dir*(A*0.24*dec*(k*2.3)*cos(k*2.3*r-OMEGA_*t*2.0+1.7));',
  '  grad+=dir*(A*0.055*dec*(k*4.6)*cos(k*4.6*r-OMEGA_*t*3.0+4.1));',
  '  float cap=exp(-max(dist-1.8,0.0)*1.9);',   // capillary detail dies fast or it moires
  '  grad+=dir*(A*0.05*dec*cap*(k*13.0)*cos(k*13.0*r-OMEGA_*t*5.0+1.3));',
  '  // broad swell so the sheet is never perfectly flat',
  '  vec3 q=vec3(P.x*0.42,t*0.30,P.z*0.42);',
  '  float n1=fbm(q), n2=fbm(q+vec3(3.7,0.0,1.9));',
  '  grad+=vec2(n1-0.5,n2-0.5)*uSwell*(0.35+0.65*dec);',
  '  grad*=fade;',
  '  vec3 N=normalize(vec3(-grad.x,1.0,-grad.y));',
  '  vec3 R=reflect(-V,N); R.y=abs(R.y);',
  '  vec3 skyR=skyColor(R,0.35);',
  '  vec2 uv=gl_FragCoord.xy/uRes;',
  '  vec2 off=vec2(N.x,N.z)*uDistort/(1.0+dist*0.22);',
  '  // rippled water smears a near reflection vertically -- 5 taps along the distortion',
  '  float sm=uSmear*(0.25+length(off)*6.0);',
  '  vec4 objR=vec4(0.0);',
  '  for(int q=-2;q<=2;q++){',
  '    float o=float(q)*sm;',
  '    objR+=texture2D(uRefl,clamp(uv+off+vec2(o*0.5,o),vec2(0.002),vec2(0.998)));',
  '    objR+=texture2D(uRefl,clamp(uv+off+vec2(o*1.7,-o*0.4),vec2(0.002),vec2(0.998)));',
  '  }',
  '  objR*=0.1;',
  '  vec3 refl=mix(skyR,objR.rgb,objR.a);',
  '  float ct=clamp(dot(V,N),0.0,1.0);',
  '  float F=uF0+(1.0-uF0)*pow(1.0-ct,uFpow);',
  '  vec3 col=mix(uDeep,refl,F);',
  '  // sun glitter: the horizon light is far brighter than the displayed sky',
  '  float sang=acos(clamp(dot(R,uGlowDir),-1.0,1.0));',
  '  col+=uSunCol*(exp(-pow(sang/uSunSig,2.0))*uSunI*(0.25+0.75*F));',
  '  gl_FragColor=vec4(l2s(col),1.0);',
  '}'].join('\n').replace(/OMEGA_/g,OMEGA.toFixed(6))
});
var water=new THREE.Mesh(new THREE.PlaneGeometry(4000,4000,1,1),waterMat);
water.rotation.x=-Math.PI/2;
water.position.set(0,0,-1200);
water.frustumCulled=false;
scene.add(water);

// ───────────────────────────── reflection camera ─────────────────────────────
var reflCam=new THREE.PerspectiveCamera(FOVY,1,0.05,4000);
reflCam.matrixAutoUpdate=false;
var MIRROR=new THREE.Matrix4().makeScale(1,-1,1);

// ───────────────────────────── resize ─────────────────────────────
var QUALITY=1.0;                     // adaptive pixel-ratio governor
function resize(){
  var w=canvas.clientWidth||window.innerWidth, h=canvas.clientHeight||window.innerHeight;
  var cap=(w*h>2200000)?1.6:2.0;      // keep very large canvases affordable
  DPR=Math.min(window.devicePixelRatio||1, cap)*QUALITY;
  renderer.setPixelRatio(DPR);
  renderer.setSize(w,h,false);
  var aspect=w/h, designA=DES_W/DES_H;
  camera.aspect=aspect;
  // narrower than the design -> widen the frustum so the scene still fits, but cap it
  // so a portrait phone does not end up with a fish-eye view of a tiny card
  var adapted = aspect<designA ? 2*Math.atan(Math.tan(FOVY*Math.PI/360)*designA/aspect)*180/Math.PI : FOVY;
  camera.fov = Math.min(adapted, 52);
  camera.updateProjectionMatrix();
  reflCam.aspect=camera.aspect; reflCam.fov=camera.fov; reflCam.updateProjectionMatrix();
  var rs=Math.min(0.34, 620/Math.max(w*DPR,1));   // deliberately soft: ripples destroy detail anyway
  var rw=Math.max(2,Math.round(w*DPR*rs)), rh=Math.max(2,Math.round(h*DPR*rs));
  if(reflRT) reflRT.dispose();
  reflRT=new THREE.WebGLRenderTarget(rw,rh,{minFilter:THREE.LinearFilter,magFilter:THREE.LinearFilter,format:THREE.RGBAFormat,type:THREE.HalfFloatType});
  waterUniforms.uRefl.value=reflRT.texture;
  waterUniforms.uRes.value.set(w*DPR,h*DPR);
  camU.uTanHalf.value=Math.tan(camera.fov*Math.PI/360);
  camU.uAspect.value=camera.aspect;
}
window.addEventListener('resize',resize);

// ───────────────────────────── loop ─────────────────────────────
cardUniforms.uArt.value=cardArtTexture();
cardUniforms.uMark.value=cardMarkTexture();
if(document.fonts&&document.fonts.ready){document.fonts.ready.then(function(){cardUniforms.uArt.value=cardArtTexture();});}

var _r=new THREE.Vector3(),_u=new THREE.Vector3(),_f=new THREE.Vector3();
function setCamBasis(cam){
  cam.updateMatrixWorld();
  var m=cam.matrixWorld.elements;
  _r.set(m[0],m[1],m[2]); _u.set(m[4],m[5],m[6]); _f.set(-m[8],-m[9],-m[10]);
  camU.uRight.value.copy(_r); camU.uUp.value.copy(_u); camU.uFwd.value.copy(_f);
  camU.uTanHalf.value=Math.tan(cam.fov*Math.PI/360);
  camU.uAspect.value=cam.aspect;
}

var clock=new THREE.Clock();
var T=0, slow=0, fast=0, visible=true;
document.addEventListener('visibilitychange',function(){
  visible=!document.hidden;
  if(visible){ clock.getDelta(); requestAnimationFrame(frame); }
});
function frame(){
  if(!visible) return;
  var dt=clock.getDelta();
  var t = FIXED_T!==null ? FIXED_T : (T+=Math.min(dt,0.05));
  // governor: two seconds of >26 ms frames drops the pixel ratio one notch
  if(FIXED_T===null&&dt>0){
    if(dt>0.026){ slow++; fast=0; } else { fast++; if(fast>240){ slow=0; fast=0; } }
    if(slow>90&&QUALITY>0.55){ QUALITY=Math.max(0.55,QUALITY-0.25); slow=0; resize(); }
  }
  skyUniforms.uTime.value=t;

  // card gyration
  var th=GYRO_PH-OMEGA*t;
  // the pose was solved in a +Z-forward frame; three.js looks down -Z, so both angles flip
  card.rotation.x=-(GYRO_CX+GYRO_A*Math.cos(th));
  card.rotation.y=-(GYRO_CY+GYRO_A*Math.sin(th));
  card.position.y=CARD_Y+0.0059*Math.sin(OMEGA*t+2.44);
  card.position.x=CARD_X+0.0035*Math.sin(OMEGA*t+0.51);

  // specular band sweep (measured: 1.5 s sinusoid across the card face)

  camera.updateMatrixWorld();
  cardUniforms.uCam.value.setFromMatrixPosition(camera.matrixWorld);
  archMat.uniforms.uCam.value.copy(cardUniforms.uCam.value);
  waterUniforms.uCam.value.copy(cardUniforms.uCam.value);

  // ---- reflection pass ----
  reflCam.matrixWorld.multiplyMatrices(MIRROR,camera.matrixWorld);
  reflCam.matrixWorldInverse.copy(reflCam.matrixWorld).invert();
  reflCam.projectionMatrix.copy(camera.projectionMatrix);
  reflCam.projectionMatrixInverse.copy(camera.projectionMatrixInverse);
  skyMesh.visible=false; water.visible=false; PASS.uEncode.value=0;
  renderer.setRenderTarget(reflRT);
  renderer.setClearColor(0x000000,0);
  renderer.clear(true,true,false);
  renderer.render(scene,reflCam);
  skyMesh.visible=true; water.visible=true; PASS.uEncode.value=1;

  // ---- main pass ----
  setCamBasis(camera);
  renderer.setRenderTarget(null);
  renderer.setClearColor(0x000000,1);
  renderer.render(scene,camera);

  if(visible) requestAnimationFrame(frame);
}
resize();
requestAnimationFrame(frame);

window.__probe=function(){
  var w=renderer.domElement.clientWidth, h=renderer.domElement.clientHeight;
  camera.updateMatrixWorld(); card.updateMatrixWorld();
  function px(v){ var p=v.clone().project(camera); return [(p.x*0.5+0.5)*w, (0.5-p.y*0.5)*h]; }
  var hw=CARD_W/2, hh=CARD_H/2, out={};
  out.cardTL=px(card.localToWorld(new THREE.Vector3(-hw, hh,0)));
  out.cardTR=px(card.localToWorld(new THREE.Vector3( hw, hh,0)));
  out.cardBR=px(card.localToWorld(new THREE.Vector3( hw,-hh,0)));
  out.cardBL=px(card.localToWorld(new THREE.Vector3(-hw,-hh,0)));
  out.horizon=px(new THREE.Vector3(0,0,-1e6))[1];
  out.archTop=px(new THREE.Vector3(ARCH_X,ARCH_Y+ARCH_R,ARCH_Z));
  out.archL=px(new THREE.Vector3(ARCH_X-ARCH_R,ARCH_Y,ARCH_Z));
  out.archR=px(new THREE.Vector3(ARCH_X+ARCH_R,ARCH_Y,ARCH_Z));
  out.rot=[card.rotation.x*180/Math.PI, card.rotation.y*180/Math.PI];
  out.fov=camera.fov; out.size=[w,h];
  return out;
};
window.__lumen={THREE:THREE,scene:scene,camera:camera,card:card,arch:arch,water:water,CFG:CFG,applySky:applySky,
  uCard:cardUniforms,uWater:waterUniforms,uSky:skyUniforms,
  setT:function(v){FIXED_T=v;}};
})();
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
