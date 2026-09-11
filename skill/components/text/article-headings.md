---
name: "Article Headings"
library: "ComponentX"
id: "article-headings"
type: "text"
quality: "lightweight"
tags: ["animation", "background", "button", "media", "shader", "text", "webgl"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Article Headings

> **Type:** `text` · **Quality:** `lightweight` · **ID:** `article-headings`
> **Path:** `components/text/article-headings.md`

**Article Headings** is a premium, production-ready component from the **ComponentX** library — engineered for text interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Lightweight tier** — a minimal footprint, a small dependency surface, and a clean implementation that drops into any project with zero friction.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `animation`, `background`, `button` workflows.
- **Pattern coverage** — includes `media`, `shader`, `text` workflows.
- **Pattern coverage** — includes `webgl` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Article Headings** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
name: add-article-headings
description: "Build Article Headings from its verified authored source using DOM/CSS + Canvas 2D, including the complete renderer, interactions, and required assets. Use when Codex needs to implement, port, or adapt this effect without requiring the ComponentX package or reconstructing the visual from an approximation."
---

# Build Article Headings

## Description

Three expressive text treatments collected in one family: a chromatic intro, a particle wordmark, and an audio-reactive identity lockup.

Recreate the authored behavior from the verified source, not from screenshots or the abbreviated orchestration sample in this skill. The implementation may live directly in the target project and does not require `@componentx/core`.

## Technologies

- A lazy React and TypeScript host for five text-animation variants
- Semantic DOM headings with requestAnimationFrame decoding
- Canvas 2D neon, particle-mask, and audio-bar renderers
- A chromatic DOM/CSS intro isolated from its authored source document
- Synchronized dark/light surfaces, palette controls, and reduced-motion handling

## Verified source material

- `ascii-page-transition-v1.html — article headings and decode lifecycle`
- `src/shaders/article-headings/TextAnimationCollection.tsx`
- `src/shaders/article-headings/articleHeadingDecode.ts`
- `src/shaders/article-headings/ArticleHeadings.tsx`
- `src/shaders/neuform-isolated/sources/glassblown-neon.html`
- `src/shaders/neuform-isolated/sources/creator-studio-intro.html`
- `src/shaders/neuform-isolated/sources/epilude-footer.html`
- `src/shaders/neuform-isolated/sources/audio-wordmark.html`
- `src/shaders/neuform-isolated/NeuformCraftEffects.tsx`
- `src/shaders/neuform-isolated/NeuformIsolatedEffects.tsx`
- `src/shaders/fonts/fragment-mono.woff2`

Source revision: `5a736cd3c1f6f19802f61ebb10e1701b9f7aa26e / SHA-256 e14795f24ea8 / 8d2cfccf1140 / 26f0d8d04494 / 1545c354af8d`

## Implementation steps

1. Open every verified source file listed above and identify the renderer, host lifecycle, styles, and assets before editing.
2. Expose article-headings, neon-sign, ComponentX-intro, particle-wordmark, and audio-wordmark through one discriminated variant prop.
3. Preserve the article decoder as semantic headings, including its eased reveal budget, scramble window, cleanup, and reduced-motion behavior.
4. Keep the Neon Typography source and its Canvas 2D tubing, electrode, flicker, and bloom renderer intact.
5. Keep the intro, particle, and audio documents as sandboxed authored sources, adapting only presentation, theme, and ComponentX copy.
6. Lazy-load each renderer, forward only its compatible props, and preserve the family’s per-variant control sets and preview media.
7. Give the local component a sized, overflow-controlled parent and verify desktop, mobile, reduced-motion, and context-loss behavior.

Asset handling: Copy the exact extracted Fragment Mono file for the article metadata and keep the four bundled owned HTML source documents available to the collection adapters.

## Local component example

Import the copied local component rather than a package entrypoint:

```tsx
import { TextAnimationCollection } from "./effects/article-headings/TextAnimationCollection";
import "./effects/article-headings/styles.css";

export function Scene() {
  return <div className="effect-frame"><TextAnimationCollection variant="article-headings" mode="dark" duration={560} stagger={140} /></div>;
}
```

## Core renderer pattern

This excerpt documents orchestration only. Copy the exact shader, geometry, pass, and interaction code from the verified source files.

```tsx
<TextAnimationCollection variant="audio-wordmark" mode="dark" brightness={1} />
```

## Behavior contract

- Runtime: DOM/CSS + Canvas 2D
- Passes: Variant-dependent DOM/CSS or one to two Canvas 2D passes
- Interaction: Authored text motion with responsive presentation, reduced-motion handling, and synchronized light/dark mode
- Assets: Exact embedded Fragment Mono font; all other sources and marks are bundled inline
- **renderer** (variant): DOM/CSS or Canvas 2D
- **variants** (fixed): Intro | Particle | Audio
- **mode** (optional): dark | light
- **motion** (adaptive): Reduced-motion aware
- **assets** (bundled): Fragment Mono + inline source documents

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
# Article Headings — Intro Text — Complete source

Component: `TextAnimationCollection`
Variant: **Intro Text** (`ComponentX-intro`)
Runtime: DOM/CSS + Canvas 2D
Source revision: `5a736cd3c1f6f19802f61ebb10e1701b9f7aa26e / SHA-256 e14795f24ea8 / 8d2cfccf1140 / 26f0d8d04494 / 1545c354af8d`

## Current configured usage

```tsx
import { TextAnimationCollection } from "@componentx/threeui";
import "@componentx/threeui/style.css";

export function Scene() {
  return (
    <div className="shader-frame">
      <TextAnimationCollection
        variant="threeui-intro"
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

This bundle contains all 3 required text source files. Preserve their paths and contents; none are excerpts.

### `src/shaders/neuform-isolated/NeuformIsolatedEffects.tsx`

Role: component · 2004 lines · 93888 bytes · SHA-256 `fe9856234253bc3c1a13b3afb84f3d84644dfa6d578e7203bb3e1dd5eced1b75`

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

### `src/shaders/neuform-isolated/sources/creator-studio-intro.html`

Role: canonical-source · 1170 lines · 57430 bytes · SHA-256 `e14795f24ea8aa9cb0005ea740923289869de3250ac4ea18f58527cd42e18cbe`

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Creator Studio — Keynote Motion Study</title>
<meta name="description" content="Self-contained 30-second keynote-style motion study: twenty-one beats of kinetic type, device mockups and app props on black.">
<style>
  :root{
    --ink:#f5f5f7;
    --font:-apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text","Helvetica Neue",Helvetica,Arial,sans-serif;
  }
  *{box-sizing:border-box;margin:0;padding:0}
  html,body{height:100%;overflow:hidden;background:#000}
  body{display:grid;place-items:center;font-family:var(--font);color:var(--ink)}
  .sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
  #stage{position:relative;width:min(100vw,177.78vh);aspect-ratio:16/9;overflow:hidden;background:#000}
  #comp{position:absolute;left:50%;top:50%;width:1280px;height:720px;margin:-360px 0 0 -640px;transform-origin:50% 50%}
  .scene{position:absolute;inset:0;display:none}
  .scene.on{display:block}

  /* ---------- type ---------- */
  .line{position:absolute;inset:0;pointer-events:none}
  .tx{position:absolute;left:0;right:0;top:50%;text-align:center;white-space:nowrap;
      font-weight:600;letter-spacing:-.012em;line-height:1;transform:translateY(-50%);
      will-change:transform,opacity,filter}
  .tx span{display:inline-block;will-change:transform,opacity,filter}
  #ruler{position:absolute;left:-9999px;top:0;visibility:hidden;white-space:pre;
         font-weight:600;letter-spacing:-.012em;line-height:1;font-size:100px}

  .mark{display:inline-block;vertical-align:-.07em;margin-right:.14em}
  .mark svg{display:block;width:.8em;height:.8em}

  /* ---------- window wall ---------- */
  .win{position:absolute;border-radius:10px;overflow:hidden;background:#0b0b0f;
       box-shadow:0 22px 54px rgba(0,0,0,.72);will-change:transform,opacity}
  .win:after{content:"";position:absolute;inset:0;background:rgba(0,0,0,.34);pointer-events:none}
  .win .pane{position:absolute;left:7%;right:7%;top:14%;bottom:12%;border-radius:4px;overflow:hidden}
  .win .bar{height:15px;background:#26262b;display:flex;align-items:center;gap:4px;padding:0 6px}
  .win .bar i{width:5px;height:5px;border-radius:50%;background:#4a4a52;display:block}
  .win .body{position:absolute;left:0;right:0;top:15px;bottom:0}
  .win .side{position:absolute;left:0;top:0;bottom:0;width:21%;background:#1b1b20}
  .win .side u{display:block;height:6px;margin:6px 5px;border-radius:2px;background:#31313a}
  .win .strip{position:absolute;left:0;right:0;bottom:0;background:#131318}
  .win .strip u{position:absolute;bottom:5px;border-radius:2px}
  .win .bars{position:absolute;left:26%;right:7%;bottom:13%;top:18%;display:flex;align-items:flex-end;gap:6%}
  .win .bars u{flex:1;border-radius:1px}
  .win .txt{position:absolute;left:8%;right:8%;top:12%}
  .win .txt u{display:block;height:5px;border-radius:2px;background:#3c3c46;margin-bottom:7px}
  .win .tiles{position:absolute;inset:6%;display:grid;grid-template-columns:repeat(4,1fr);gap:4px}
  .win .tiles u{border-radius:2px}

  /* ---------- dock ---------- */
  #dockBar{position:absolute;left:125px;top:306px;width:1025px;height:106px;border-radius:26px;
           background:rgba(36,36,42,.74);border:1px solid rgba(255,255,255,.07);
           transform-origin:50% 50%;will-change:transform,opacity}
  .ico{position:absolute;width:65px;height:65px;border-radius:16px;
       background:linear-gradient(180deg,#3a3a43,#1d1d24);border:1px solid rgba(255,255,255,.13);
       box-shadow:inset 0 1px 0 rgba(255,255,255,.14);
       display:grid;place-items:center;will-change:transform,opacity}
  .ico svg{width:58px;height:58px;display:block;filter:saturate(1.15)}

  /* ---------- audio tracks ---------- */
  .track{position:absolute;left:340px;width:600px;border-radius:11px;overflow:hidden;
         transform-origin:50% 100%;will-change:transform,opacity}
  .track b{position:absolute;left:9px;top:5px;font-size:11px;font-weight:500;letter-spacing:.02em;color:rgba(255,255,255,.95)}
  .track .art{position:absolute;left:0;right:0;top:19px;bottom:0}
  .track .art u{position:absolute;background:rgba(255,255,255,.9);border-radius:1px}

  /* ---------- devices ---------- */
  .mac{position:absolute;left:50%;top:123px;width:648px;margin-left:-324px;will-change:transform,opacity}
  .mac .lid{position:relative;border:10px solid #1b1b1f;border-radius:20px;background:#000;
            box-shadow:0 0 0 1px #3d3d44,0 34px 70px rgba(0,0,0,.75)}
  .mac .scr{position:relative;width:100%;padding-top:64%;overflow:hidden;border-radius:9px;background:#000}
  .mac .notch{position:absolute;left:50%;top:-8px;width:78px;height:8px;margin-left:-39px;background:#1b1b1f;border-radius:0 0 6px 6px}
  .mac .base{position:relative;left:50%;width:746px;height:15px;margin-left:-373px;border-radius:0 0 14px 14px;
             background:linear-gradient(180deg,#2c2c33,#0d0d10);box-shadow:0 8px 22px rgba(0,0,0,.75)}
  .mac .base:after{content:"";position:absolute;left:50%;bottom:0;width:96px;height:5px;margin-left:-48px;
                   border-radius:0 0 5px 5px;background:#3a3a42}
  .pad{position:absolute;left:50%;top:157px;width:557px;margin-left:-278.5px;padding:12px;border-radius:26px;
       background:linear-gradient(160deg,#63676f,#2b2d33);box-shadow:0 30px 70px rgba(0,0,0,.75);
       transform-origin:50% 46%;will-change:transform,opacity}
  .pad .scr{position:relative;width:100%;padding-top:73.5%;overflow:hidden;border-radius:15px;background:#000}
  .scrIn{position:absolute;inset:0}

  .grad{position:absolute;inset:0}
  .grad b{position:absolute;border-radius:50%;display:block}
  .canvasType{position:absolute;inset:0;font-weight:600;letter-spacing:-.022em;line-height:.94}
  .canvasType div{position:absolute;white-space:nowrap;will-change:transform,opacity}

  .tbox{position:absolute;border:1px solid rgba(255,255,255,.55);will-change:transform,opacity}
  .tbox i{position:absolute;width:6px;height:6px;background:#fff;border:1px solid #75757c}
  .tbox i:nth-child(1){left:-3px;top:-3px}.tbox i:nth-child(2){right:-3px;top:-3px}
  .tbox i:nth-child(3){left:-3px;bottom:-3px}.tbox i:nth-child(4){right:-3px;bottom:-3px}
  .tbox span{position:absolute;left:10px;top:50%;transform:translateY(-52%);font-weight:600;white-space:nowrap;letter-spacing:-.02em}

  .palette{position:absolute;right:9px;top:9px;bottom:9px;width:28px;border-radius:14px;
           background:rgba(42,42,48,.9);display:flex;flex-direction:column;align-items:center;gap:9px;padding:9px 0}
  .palette u{display:block;width:11px;height:11px;border-radius:3px;background:#71717b}
  .guide{position:absolute;left:0;right:0;height:1px;background:#3ad462;opacity:.75}
  .hand{position:absolute;will-change:transform,opacity}

  /* ---------- edit clip ---------- */
  #clip{position:absolute;border-radius:5px;overflow:hidden;background:#0e1430;
        border:2px solid #6a3af0;box-shadow:0 0 34px rgba(120,60,255,.75),inset 0 0 0 1px rgba(180,150,255,.4);
        will-change:transform,opacity}
  #clip .thumbs{position:absolute;left:0;right:0;top:0;height:74%;display:flex}
  #clip .thumbs u{flex:1;border-right:1px solid rgba(0,0,0,.4);position:relative;overflow:hidden;
                  background:linear-gradient(180deg,#8e9aa8 0%,#c3c9cf 42%,#6d757f 43%,#3c4249 100%)}
  #clip .thumbs u:after{content:"";position:absolute;left:34%;top:26%;width:32%;height:62%;border-radius:44% 44% 12% 12%;background:#14161c}
  #clip .wave{position:absolute;left:0;right:0;bottom:0;height:26%;background:#232a55;display:flex;align-items:flex-end;gap:1px;padding:0 2px}
  #clip .wave u{flex:1;background:rgba(190,200,255,.55);border-radius:1px 1px 0 0}

  /* ---------- prompt ---------- */
  #daisyC{position:absolute;left:0;top:0}
  #liquid{filter:url(#goo);position:absolute;inset:0}
  #liquid .drop{position:absolute;border-radius:50%;background:#8ecfee}
  .gloss{position:absolute;left:0;right:0;top:50%;text-align:center;white-space:nowrap;
         font-weight:700;letter-spacing:-.02em;line-height:1;transform:translateY(-50%);
         color:transparent;background:linear-gradient(180deg,#ffffff 4%,#c8ebfb 32%,#5aa6cf 76%);
         -webkit-background-clip:text;background-clip:text;mix-blend-mode:screen}

  /* ---------- props ---------- */
  .keys{position:absolute;left:351px;top:421px;width:580px;height:123px;display:flex;gap:6px;will-change:opacity}
  .keys u{flex:1;border-radius:9px;background:linear-gradient(180deg,#3c3c43,#26262c);
          box-shadow:inset 0 1px 0 rgba(255,255,255,.1)}
  .bin{position:absolute;left:531px;top:444px;width:219px;height:219px;will-change:transform,opacity}
  .bin .cup{position:absolute;left:0;right:0;top:12px;bottom:0;
    clip-path:polygon(5% 0,95% 0,83% 100%,17% 100%);
    background:linear-gradient(180deg,rgba(206,210,216,.9),rgba(228,232,238,.94) 34%,rgba(244,246,249,.98));
    border-radius:10px 10px 30px 30px}
  .bin .rim{position:absolute;left:0;right:0;top:0;height:36px;border-radius:16px/18px;
    background:linear-gradient(180deg,rgba(250,251,253,.98),rgba(198,203,212,.8));
    box-shadow:inset 0 -7px 12px rgba(255,255,255,.5)}
  .bin .hole{position:absolute;left:16px;right:16px;top:6px;height:22px;border-radius:14px/11px;
    background:linear-gradient(180deg,rgba(90,96,106,.9),rgba(150,156,166,.7))}
  .wad{position:absolute;width:46px;height:46px;will-change:transform,opacity}
  .frag{position:absolute;left:0;right:0;top:50%;text-align:center;white-space:nowrap;font-weight:600;
         letter-spacing:-.012em;line-height:1;color:#9b22f0;transform:translateY(-50%);
         text-shadow:0 0 34px rgba(150,40,255,.95),0 0 70px rgba(150,40,255,.5);will-change:transform,opacity}
  .cursor{position:absolute;width:34px;height:34px;border-radius:50%;border:1px solid rgba(255,255,255,.9);
          background:radial-gradient(circle at 34% 28%,rgba(255,255,255,.55),rgba(0,0,0,.5));will-change:transform,opacity}
  .glowdot{position:absolute;width:16px;height:16px;border-radius:50%;
           background:radial-gradient(circle,#ffe27a,#f0a020 55%,rgba(240,160,32,0) 72%);
           box-shadow:0 0 18px rgba(255,200,80,.9);will-change:transform,opacity}
  .appRow{position:absolute;left:0;right:0;text-align:center;white-space:nowrap;font-weight:600;
          letter-spacing:-.015em;line-height:1;will-change:transform,opacity}
  .appRow em{font-style:normal;display:inline-block;width:.92em;height:.92em;border-radius:.2em;
             vertical-align:-.16em;margin-right:.22em;box-shadow:inset 0 0 0 1px rgba(255,255,255,.12)}
</style>
</head>
<body>
<p class="sr">A thirty-second keynote-style motion study on black. A chromatic wordmark assembles, a wall of creative app windows drifts past, then twenty short type beats follow — one subscription, endless creativity, a dock of apps, a three-track beat, editing a video, taking your design anywhere, and quick verbs from Prompt it to Share it — closing on a price, a scrolling list of app names, and the Creator Studio wordmark.</p>
<div id="stage">
  <div id="comp"></div>
  <svg width="0" height="0" style="position:absolute" aria-hidden="true">
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b"/>
      <feColorMatrix in="b" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -10" result="g"/>
      <feComposite in="SourceGraphic" in2="g" operator="atop"/>
    </filter>
  </svg>
</div>
<span id="ruler" aria-hidden="true"></span>
<script>
(function(){
  "use strict";
  var DUR=30.122, W=1280, H=720;
  var comp=document.getElementById('comp'), stage=document.getElementById('stage'), ruler=document.getElementById('ruler');

  /* ---------- math ---------- */
  var clamp=function(v,a,b){return v<a?a:(v>b?b:v)};
  var lerp=function(a,b,t){return a+(b-a)*t};
  var seg=function(t,a,b){return clamp((t-a)/(b-a||1e-6),0,1)};
  var smooth=function(t){return t*t*(3-2*t)};
  var eOut=function(t){return 1-Math.pow(1-t,3)};
  var eIn=function(t){return t*t*t};
  var back=function(t){var c=1.6;return 1+(c+1)*Math.pow(t-1,3)+c*Math.pow(t-1,2)};
  function rng(s){var a=s>>>0;return function(){a+=0x6D2B79F5;var t=a;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return((t^t>>>14)>>>0)/4294967296}}

  /* ---------- dom ---------- */
  function el(tag,cls,parent,html){
    var n=document.createElement(tag);
    if(cls)n.className=cls;
    if(html!=null)n.innerHTML=html;
    (parent||comp).appendChild(n);
    return n;
  }
  function setT(n,v){if(n._t!==v){n._t=v;n.style.transform=v}}
  function setO(n,v){var r=clamp(v,0,1).toFixed(3);if(n._o!==r){n._o=r;n.style.opacity=r}}
  function setF(n,v){if(n._f!==v){n._f=v;n.style.filter=v}}
  function setC(n,v){if(n._c!==v){n._c=v;n.style.color=v}}
  var TXY='translateY(-50%) ';

  /* fit a string to a pixel width so every beat matches the reference measurements */
  function fitPx(str,target,weight){
    ruler.style.fontWeight=weight||600;
    ruler.style.fontSize='100px';
    ruler.textContent=str;
    return 100*target/ruler.getBoundingClientRect().width;
  }
  function advances(str,fs,weight){
    ruler.style.fontWeight=weight||600;
    ruler.style.fontSize=fs+'px';
    var out=[];
    for(var i=0;i<str.length;i++){
      ruler.textContent=str[i];
      out.push(ruler.getBoundingClientRect().width);
    }
    return out;
  }
  function letters(node,str){
    node.textContent='';
    var out=[];
    for(var i=0;i<str.length;i++){
      var s=document.createElement('span');
      s.textContent=str[i]===' '?'\u00a0':str[i];
      node.appendChild(s); out.push(s);
    }
    return out;
  }
  /* one centred line, auto-sized to a reference width */
  function textLine(scene,str,targetW){
    var wrap=el('div','line',scene);
    var tx=el('div','tx',wrap);
    var fs=fitPx(str,targetW);
    tx.style.fontSize=fs.toFixed(2)+'px';
    return {wrap:wrap, tx:tx, chars:letters(tx,str), fs:fs};
  }

  var APPLE='<svg viewBox="0 0 24 24" aria-hidden="true">'+
    '<path fill="currentColor" d="M17.1 12.7c0-2.6 2.1-3.9 2.2-4-1.2-1.8-3.1-2-3.7-2.1-1.7-.1-3.3 1-4.1 1-.8 0-2.1-1-3.5-1-1.8 0-3.6 1.1-4.5 2.8-1.9 3.4-.5 8.4 1.4 11.2 1 1.3 2.1 2.8 3.6 2.7 1.4 0 1.9-.9 3.6-.9s2.1.9 3.6.9c1.5 0 2.4-1.3 3.3-2.7 1.1-1.5 1.5-3 1.5-3.1-.1 0-3.4-1.3-3.4-4.8z"/>'+
    '<path fill="currentColor" d="M14.6 4.9c.8-.9 1.3-2.2 1.1-3.5-1.1.1-2.5.8-3.3 1.7-.7.9-1.3 2.2-1.1 3.4 1.2.1 2.5-.6 3.3-1.6z"/></svg>';

  /* =====================================================================
     1 + 21 · wordmark, chromatic assemble
     ===================================================================== */
  function makeWordmark(){
    var s=el('div','scene');
    var wrap=el('div','line',s);
    var tx=el('div','tx',wrap);
    var fs=fitPx('Creator Studio',678);
    tx.style.fontSize=fs.toFixed(2)+'px';
    var mk=el('span','mark',tx,APPLE);
    var chars=[], str='Creator Studio';
    for(var i=0;i<str.length;i++){
      var sp=document.createElement('span');
      sp.textContent=str[i]===' '?'\u00a0':str[i];
      tx.appendChild(sp); chars.push(sp);
    }
    var R=rng(7719), jit=chars.map(function(){return [R()*2-1,R()*2-1,R()]});
    return {node:s, update:function(t,p){
      setO(mk,smooth(seg(p,.26,.5)));
      setT(mk,'scale('+lerp(.55,1,eOut(seg(p,.26,.56))).toFixed(3)+')');
      for(var i=0;i<chars.length;i++){
        var j=jit[i];
        var a=eOut(clamp(seg(p,.02,.5)*1.5-j[2]*.5,0,1));
        setT(chars[i],'translate('+(j[0]*62*(1-a)).toFixed(1)+'px,'+(j[1]*34*(1-a)).toFixed(1)+'px) scale('+lerp(1.24,1,a).toFixed(3)+')');
        setO(chars[i],Math.min(1,a*1.6));
        var sep=(1-a)*11;
        chars[i].style.textShadow=sep>.4
          ? (-sep).toFixed(1)+'px 0 rgba(255,64,72,.85),'+sep.toFixed(1)+'px 0 rgba(64,255,190,.8),0 '+(sep*.55).toFixed(1)+'px rgba(96,124,255,.8)'
          : 'none';
        setF(chars[i],sep>.7?'blur('+(sep*.3).toFixed(2)+'px)':'none');
      }
    }};
  }

  /* =====================================================================
     2 · wall of creative app windows
     ===================================================================== */
  var WALLPAL=[
    ['#1c6b47','#93d46b'],['#8a1d3c','#f05a6d'],['#123c70','#4aa8f0'],
    ['#572a86','#c07af0'],['#7d4a12','#f0b45a'],['#0e4f54','#4fd6c8'],
    ['#6b1050','#f05ac0'],['#24406b','#7aa8f0'],['#3a5f10','#b0e05a'],
    ['#6b2a10','#f08a5a'],['#28286b','#8a8af0'],['#0d5a2c','#5ad68a']
  ];
  function makeWall(){
    var s=el('div','scene'), R=rng(4242), wins=[];
    for(var i=0;i<34;i++){
      var w=el('div','win',s);
      var pal=WALLPAL[Math.floor(R()*WALLPAL.length)];
      var variant=i%6;
      var bw=lerp(160,330,R()), bh=bw*lerp(.6,.68,R());
      w.style.width=bw.toFixed(0)+'px'; w.style.height=bh.toFixed(0)+'px';
      el('div','bar',w,'<i></i><i></i><i></i>');
      var body=el('div','body',w);
      body.style.background='#0d0d12';
      var pane=el('div','pane',body);
      pane.style.background='linear-gradient(150deg,'+pal[0]+','+pal[1]+')';
      pane.style.opacity='.82';
      var k;
      if(variant===0){
        el('div','side',body,'<u></u><u></u><u></u><u></u><u></u>');
        var st=el('div','strip',body); st.style.height='26%';
        for(k=0;k<5;k++){var u=el('u','',st);u.style.left=(6+k*18)+'%';u.style.width='15%';u.style.height='11px';u.style.background=k%2?pal[1]:'#3f4a6a'}
      } else if(variant===1){
        pane.style.display='none';
        var st2=el('div','strip',body); st2.style.height='56%';
        for(k=0;k<7;k++){var u2=el('u','',st2);u2.style.left=(3+k*13.6)+'%';u2.style.width='12%';
          u2.style.height=(10+(k%3)*8)+'px';u2.style.bottom=(7+(k%3)*15)+'px';u2.style.background=k%2?pal[1]:pal[0]}
        var th=el('div','',body);
        th.style.cssText='position:absolute;left:6%;top:6%;width:54%;height:34%;border-radius:5px;background:linear-gradient(140deg,'+pal[0]+','+pal[1]+')';
      } else if(variant===2){
        pane.style.display='none';
        body.style.background='#e9e9ee';
        var bars=el('div','bars',body);
        for(k=0;k<6;k++){var b=el('u','',bars);b.style.height=(24+((k*37)%70))+'%';b.style.background=k%2?pal[1]:pal[0]}
        var tx2=el('div','txt',body);
        for(k=0;k<3;k++){var l3=el('u','',tx2);l3.style.background='#cbcbd2';l3.style.width=(80-k*18)+'%'}
      } else if(variant===3){
        pane.style.display='none';
        var ti=el('div','tiles',body);
        for(k=0;k<12;k++){var t4=el('u','',ti);t4.style.background='linear-gradient('+(k*30)+'deg,'+pal[0]+','+pal[1]+')'}
      } else if(variant===4){
        pane.style.display='none';
        for(k=0;k<3;k++){
          var tr=el('div','',body);
          tr.style.cssText='position:absolute;left:6%;right:6%;top:'+(11+k*29)+'%;height:21%;border-radius:4px;background:'+
            (k===0?pal[1]:k===1?pal[0]:'#7a3ad6')+';opacity:.92';
        }
      } else {
        var sh=el('div','',body);
        sh.style.cssText='position:absolute;left:20%;top:16%;width:60%;height:76%;border-radius:42% 42% 28% 28%;background:rgba(0,0,0,.4);filter:blur(7px)';
      }
      wins.push({n:w,rot:(R()*2-1)*2.6,ph:R()*6.283,w:bw,h:bh,d:R()});
      void i;
    }
    return {node:s, update:function(t,p){
      var phase=t<.5?0:(t<1.06?1:2);
      var pp=phase===0?seg(t,0,.5):phase===1?seg(t,.5,1.06):seg(t,1.06,1.92);
      var zoom=lerp(.9,1.16,pp)*(1+phase*.08);
      for(var i=0;i<wins.length;i++){
        var o=wins[i], k=(i+phase*11)%wins.length;
        var gx=((k*137)%13)/12, gy=((k*71)%9)/8;
        var depth=.62+((k*53)%100)/100*.6;
        var x=lerp(-120,1400,gx)+Math.sin(t*.7+o.ph)*18;
        var y=lerp(-80,800,gy)+Math.cos(t*.55+o.ph)*15;
        var sc=depth*zoom;
        var cx=(x-W/2)*lerp(1,1.16,pp)+W/2, cy=(y-H/2)*lerp(1,1.16,pp)+H/2;
        o.n.style.left=(cx-o.w/2).toFixed(1)+'px';
        o.n.style.top=(cy-o.h/2).toFixed(1)+'px';
        setT(o.n,'scale('+sc.toFixed(3)+') rotate('+o.rot.toFixed(2)+'deg)');
        setO(o.n,Math.min(1,smooth(seg(t,0,.24))*1.2)*(1-seg(t,1.8,1.92))*clamp(.5+depth*.5,.4,1));
      }
    }};
  }

  /* =====================================================================
     3 · one subscription / endless creativity
     ===================================================================== */
  function makeLines(){
    var s=el('div','scene');
    function build(str,target){
      var wrap=el('div','line',s), tx=el('div','tx',wrap);
      tx.style.fontSize=fitPx(str,target).toFixed(2)+'px';
      var out=[];
      str.split(' ').forEach(function(word,i){
        var sp=document.createElement('span');
        sp.textContent=(i?'\u00a0':'')+word;
        tx.appendChild(sp); out.push(sp);
      });
      return {tx:tx,words:out};
    }
    var A=build('One subscription.',705), B=build('Endless creativity.',702);
    function play(o,p,a0,out0){
      var vis=1-smooth(seg(p,out0,out0+.07));
      setO(o.tx,vis);
      for(var i=0;i<o.words.length;i++){
        var q=eOut(clamp(seg(p,a0+i*.135,a0+.2+i*.135),0,1));
        setO(o.words[i],q*vis);
        setT(o.words[i],'translateY('+((1-q)*24).toFixed(1)+'px)');
        setF(o.words[i],q<.97?'blur('+((1-q)*6).toFixed(2)+'px)':'none');
      }
    }
    return {node:s, update:function(t,p){ play(A,p,.02,.44); play(B,p,.5,.94) }};
  }

  /* =====================================================================
     4 · dock
     ===================================================================== */
  var ICONS=[
    '<svg viewBox="0 0 32 32"><rect x="7" y="16" width="4.4" height="10" rx="1" fill="#7fd44a"/><rect x="13.8" y="9" width="4.4" height="17" rx="1" fill="#a6e86a"/><rect x="20.6" y="13" width="4.4" height="13" rx="1" fill="#5fbe32"/><rect x="6" y="27" width="20" height="1.8" fill="#c9f2a0"/></svg>',
    '<svg viewBox="0 0 32 32"><path d="M6 20h20l-4-9H10z" fill="#6fb6f0"/><rect x="15" y="20" width="2" height="7" fill="#8fd0f7"/><rect x="10" y="26" width="12" height="2" rx="1" fill="#4a90d0"/></svg>',
    '<svg viewBox="0 0 32 32"><path d="M8 25c0-10 3-14 6-14s3 7 5 7 3-4 5-4" stroke="#f05ad0" stroke-width="3.2" fill="none" stroke-linecap="round"/><circle cx="23.4" cy="14.6" r="2.6" fill="#f7a0e4"/></svg>',
    '<svg viewBox="0 0 32 32"><rect x="5" y="12" width="22" height="13" rx="3" fill="#a15ff0"/><path d="M5 12l6-4 16 2-4 3z" fill="#c79af7"/></svg>',
    '<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="12.5" fill="#dce1e9"/><circle cx="16" cy="16" r="7" fill="#9aa3b0"/><circle cx="16" cy="16" r="2" fill="#33373f"/></svg>',
    '<svg viewBox="0 0 32 32"><path d="M16 8l9.5 5-9.5 5-9.5-5z" fill="#e0324a"/><path d="M16 18l9.5 5-9.5 5-9.5-5z" fill="#a81d2c" opacity=".9"/></svg>',
    '<svg viewBox="0 0 32 32"><path d="M8 25l16-17 2.4 3.4-14.4 15z" fill="#f0863a"/><path d="M8 25.6h18.4" stroke="#f0b45a" stroke-width="2.2"/></svg>',
    '<svg viewBox="0 0 32 32"><path d="M16 6v20" stroke="#4fd6b8" stroke-width="2"/><circle cx="16" cy="9.5" r="3.2" fill="#4fd6b8"/><circle cx="21.5" cy="18" r="3.2" fill="#4fd6b8"/><circle cx="10.5" cy="22.5" r="3.2" fill="#4fd6b8"/></svg>',
    '<svg viewBox="0 0 32 32"><path d="M8 9h16l-8 7 8 7H8l8-7z" fill="none" stroke="#f0d05a" stroke-width="2.6"/></svg>',
    '<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="11.5" fill="#2f7fb8"/><path d="M7.5 17c2-4.4 3 4.4 5 0s3 4.4 5 0 3 3.4 5-1" stroke="#c8eafa" stroke-width="2.2" fill="none" stroke-linecap="round"/></svg>'
  ];
  function makeDock(){
    var s=el('div','scene');
    var bar=el('div','',s); bar.id='dockBar';
    var icos=[];
    for(var i=0;i<ICONS.length;i++){
      var n=el('div','ico',s,ICONS[i]);
      n.style.left=(148+i*101)+'px'; n.style.top='326px';
      icos.push(n);
    }
    return {node:s, update:function(t,p){
      var q0=eOut(seg(p,0,.24));
      setO(bar,q0);
      setT(bar,'scaleX('+lerp(.7,1,q0).toFixed(3)+')');
      for(var i=0;i<icos.length;i++){
        var q=clamp(seg(p,.08+i*.03,.36+i*.03),0,1);
        var lift=(i===4)?eOut(seg(p,.5,.76)):0;
        setO(icos[i],Math.min(1,q*1.7));
        setT(icos[i],'translateY('+((1-back(q))*30-lift*52).toFixed(1)+'px) scale('+(lerp(.6,1,back(q))*(1+lift*.58)).toFixed(3)+')');
        icos[i].style.boxShadow=lift>.02
          ? '0 0 '+(46*lift).toFixed(0)+'px rgba(216,234,255,'+(.85*lift).toFixed(2)+'),inset 0 1px 0 rgba(255,255,255,.2)'
          : 'inset 0 1px 0 rgba(255,255,255,.14)';
        icos[i].style.zIndex=i===4?5:1;
      }
    }};
  }

  /* =====================================================================
     5 · make a beat
     ===================================================================== */
  function makeBeatText(){
    var s=el('div','scene');
    var L=textLine(s,'Make a beat.',469);
    var R=rng(551), jit=L.chars.map(function(){return [R()*2-1,R()*2-1]});
    return {node:s, update:function(t,p){
      setO(L.tx,smooth(seg(p,.02,.14))*(1-smooth(seg(p,.88,1))));
      for(var i=0;i<L.chars.length;i++){
        var q=eOut(clamp(seg(p,.04+i*.028,.34+i*.028),0,1));
        setT(L.chars[i],'translate('+(jit[i][0]*34*(1-q)).toFixed(1)+'px,'+
          (jit[i][1]*18*(1-q)+Math.sin(t*5.4+i)*(1-q)*5).toFixed(1)+'px)');
        setO(L.chars[i],Math.min(1,q*1.5));
      }
    }};
  }

  /* =====================================================================
     6 · three-track beat
     ===================================================================== */
  function makeTracks(){
    var s=el('div','scene'), R=rng(9051);
    var specs=[
      {name:'DRUMS_137BPM', top:112,h:138,g:'linear-gradient(180deg,#84e44e,#5cc832)',glow:'#7fe04a',kind:'roll'},
      {name:'BASS_137BPM',  top:259,h:132,g:'linear-gradient(180deg,#a850f0,#8b2ce0)',glow:'#a24ef0',kind:'ticks'},
      {name:'HARMONY_137BPM',top:400,h:140,g:'linear-gradient(180deg,#d431c2,#6f0d58)',glow:'#d02fc0',kind:'wave'}
    ];
    var tr=specs.map(function(sp){
      var n=el('div','track',s);
      n.style.top=sp.top+'px'; n.style.height=sp.h+'px'; n.style.background=sp.g;
      n.style.boxShadow='0 0 30px '+sp.glow+'70,0 0 5px '+sp.glow+'bb';
      el('b','',n).textContent=sp.name;
      var art=el('div','art',n), i, j;
      if(sp.kind==='roll'){
        for(i=0;i<52;i++){
          var u=el('u','',art);
          u.style.left=(8+i*11.4)+'px'; u.style.width='6px';
          u.style.height=(R()<.3?15:9)+'px'; u.style.top=(34+R()*58)+'px';
        }
      } else if(sp.kind==='ticks'){
        for(i=0;i<28;i++){
          var y=24+R()*54;
          var g=el('u','',art); g.style.left=(16+i*20.4)+'px'; g.style.width='15px'; g.style.height='2px'; g.style.top=y+'px';
          var v=el('u','',art); v.style.left=(16+i*20.4)+'px'; v.style.width='2px'; v.style.height='11px'; v.style.top=(y-4)+'px';
        }
      } else {
        for(i=0;i<2;i++){
          for(j=0;j<126;j++){
            var amp=(Math.sin(j*.2)*.4+Math.sin(j*.06)*.4+.62)*16;
            var wv=el('u','',art);
            wv.style.left=(7+j*4.7)+'px'; wv.style.width='2px';
            wv.style.height=Math.max(2,amp*(.5+R()*.7)).toFixed(1)+'px';
            wv.style.top=(16+i*40+(20-amp/2)).toFixed(1)+'px';
            wv.style.background='rgba(255,255,255,.6)';
          }
        }
      }
      return n;
    });
    var head=el('div','',s);
    head.style.cssText='position:absolute;top:75px;width:6px;height:30px;background:#fff;border-radius:1px';
    return {node:s, update:function(t,p){
      for(var i=0;i<tr.length;i++){
        var q=eOut(clamp(seg(p,.06+i*.2,.32+i*.2),0,1));
        setO(tr[i],q);
        setT(tr[i],'translateY('+((1-q)*30).toFixed(1)+'px) scaleY('+lerp(.68,1,q).toFixed(3)+')');
      }
      setO(head,smooth(seg(p,.02,.12)));
      head.style.left=(516+Math.sin(t*2.4)*7).toFixed(1)+'px';
    }};
  }

  /* =====================================================================
     7 · edit a video
     ===================================================================== */
  function makeEditVideo(){
    var s=el('div','scene');
    var fs=fitPx('Edit a',237);
    // staggered intro pair
    var pre=el('div','line',s);
    var p1=el('div','tx',pre), p2=el('div','tx',pre);
    p1.style.fontSize=p2.style.fontSize=fs.toFixed(2)+'px';
    p1.textContent='Edit a'; p2.textContent='video.';
    p1.style.color='#c98ff5'; p1.style.textShadow='0 0 30px rgba(160,80,255,.8)';
    p2.style.color='#6e6e75';
    // resolved single line with the clip in the middle
    var main=el('div','line',s);
    var mt=el('div','tx',main); mt.style.fontSize=fs.toFixed(2)+'px';
    var a=el('span','',mt); a.textContent='Edit\u00a0a\u00a0';
    var gap=el('span','',mt); gap.style.display='inline-block';
    var b=el('span','',mt); b.textContent='\u00a0video.';
    var clip=el('div','',s); clip.id='clip';
    var th=el('div','thumbs',clip);
    for(var i=0;i<3;i++)el('u','',th);
    var wv=el('div','wave',clip);
    for(i=0;i<64;i++){
      var u=el('u','',wv);
      u.style.height=(22+Math.abs(Math.sin(i*.7))*58+((i*37)%20))+'%';
    }
    return {node:s, update:function(t,p){
      var swap=seg(p,.58,.7);
      // intro pair
      var pv=1-smooth(swap);
      setO(pre,pv);
      var q1=eOut(seg(p,.02,.24)), q2=eOut(seg(p,.14,.42));
      setT(p1,TXY+'translate('+lerp(-40,-118,q1).toFixed(0)+'px,'+lerp(-30,-46,q1).toFixed(0)+'px)');
      setO(p1,q1);
      setT(p2,TXY+'translate('+lerp(160,118,q2).toFixed(0)+'px,'+lerp(58,42,q2).toFixed(0)+'px)');
      setO(p2,q2);
      // resolved line + clip
      var mv=smooth(swap);
      setO(main,mv);
      var open=eOut(seg(p,.66,.84));
      var gw=lerp(0,575,open);
      gap.style.width=gw.toFixed(0)+'px';
      clip.style.width=Math.max(2,gw-6).toFixed(0)+'px';
      clip.style.height='200px';
      clip.style.left=(W/2-gw/2+3).toFixed(0)+'px';
      clip.style.top='262px';
      setO(clip,mv*Math.min(1,open*2.4)*(1-seg(p,.93,1)));
      setT(clip,'scaleY('+lerp(.5,1,eOut(seg(p,.64,.82))).toFixed(3)+')');
    }};
  }

  /* =====================================================================
     8 · macbook, text boxes
     ===================================================================== */
  function macFrame(parent){
    var m=el('div','mac',parent);
    var lid=el('div','lid',m);
    var scr=el('div','scr',lid);
    el('div','notch',lid);
    var inn=el('div','scrIn',scr);
    el('div','base',m);
    return {root:m, screen:inn};
  }
  function makeMac(){
    var s=el('div','scene');
    var mac=macFrame(s);
    var clip=el('div','',mac.screen);
    clip.style.cssText='position:absolute;inset:0;background:linear-gradient(150deg,#2f2118,#c08a5a)';
    var subj=el('div','',clip);
    subj.style.cssText='position:absolute;left:24%;top:26%;width:52%;height:62%;border-radius:44% 44% 28% 28%;background:rgba(18,10,6,.55);filter:blur(4px)';
    var pal=el('div','palette',mac.screen);
    for(var i=0;i<11;i++)el('u','',pal);
    var guide=el('div','guide',mac.screen);
    var b1=el('div','tbox',mac.screen,'<i></i><i></i><i></i><i></i><span>Take</span>');
    var b2=el('div','tbox',mac.screen,'<i></i><i></i><i></i><i></i><span>your</span>');
    b1.querySelector('span').style.fontSize='132px';
    b2.querySelector('span').style.fontSize='86px';
    return {node:s, update:function(t,p){
      setO(mac.root,smooth(seg(p,0,.09)));
      setT(mac.root,'scale('+lerp(.95,1,eOut(seg(p,0,.3))).toFixed(3)+')');
      setO(clip,1-seg(p,.18,.32));
      setO(pal,smooth(seg(p,.22,.4)));
      guide.style.top='64%';
      setO(guide,smooth(seg(p,.34,.48))*(1-seg(p,.92,1)));
      var i1=seg(p,.28,.44);
      b1.style.left='16%'; b1.style.top='30%'; b1.style.width='52%'; b1.style.height='34%';
      setO(b1,smooth(i1));
      setT(b1,'scale('+lerp(.9,1,eOut(i1)).toFixed(3)+')');
      var i2=seg(p,.64,.8);
      b2.style.left='54%'; b2.style.top='36%'; b2.style.width='30%'; b2.style.height='24%';
      setO(b2,smooth(i2));
      setT(b2,'translateX('+((1-eOut(i2))*26).toFixed(1)+'px)');
    }};
  }

  /* =====================================================================
     9 · take your design anywhere
     ===================================================================== */
  var GRADS=[
    {bg:'#3c0a1a', blobs:['#8e1436','#cc1f4c','#f2567c']},
    {bg:'#2a0742', blobs:['#6d1baa','#a92ee2','#da6af2']},
    {bg:'#0f3a10', blobs:['#3f7a18','#82c62c','#dcf24c']}
  ];
  function gradientCanvas(parent){
    var g=el('div','grad',parent), blobs=[];
    for(var i=0;i<3;i++)blobs.push(el('b','',g));
    return {set:function(idx,t){
      var sp=GRADS[idx];
      g.style.background=sp.bg;
      for(var i=0;i<blobs.length;i++){
        var b=blobs[i], sz=lerp(152,112,i/2);
        b.style.width=sz+'%'; b.style.height=(sz*1.35)+'%';
        b.style.left=lerp(-26,6,i/2)+'%';
        b.style.top=(lerp(-8,26,i/2)+Math.sin(t*.7+i)*2)+'%';
        b.style.background='radial-gradient(circle at 42% 36%,'+sp.blobs[i]+',rgba(0,0,0,0) 70%)';
        b.style.opacity=(.96-i*.08).toFixed(2);
      }
    }};
  }
  function makeCanvasScene(){
    var s=el('div','scene');
    var mac=macFrame(s);
    var pad=el('div','pad',s);
    var padIn=el('div','scrIn',el('div','scr',pad));
    var gMac=gradientCanvas(mac.screen), gPad=gradientCanvas(padIn);
    function typeBlock(parent,unit){
      var w=el('div','canvasType',parent);
      var rows=[
        {txt:'Take',     x:'5%',  y:'3%',  s:1.0},
        {txt:'your',     x:'43%', y:'25%', s:1.0},
        {txt:'design',   x:'4%',  y:'47%', s:1.0},
        {txt:'anywhere.',x:'2%',  y:'69%', s:1.0}
      ];
      return {root:w, rows:rows.map(function(r){
        var d=el('div','',w);
        d.textContent=r.txt;
        d.style.left=r.x; d.style.top=r.y;
        d.style.fontSize=(unit*r.s)+'px';
        d.style.color='rgba(255,255,255,.94)';
        return d;
      })};
    }
    var tMac=typeBlock(mac.screen,114), tPad=typeBlock(padIn,110);
    var pencil=el('div','',s);
    pencil.style.cssText='position:absolute;height:8px;border-radius:4px;background:linear-gradient(90deg,#8f939b,#d6dae0);will-change:transform,opacity';
    var hand=el('div','hand',s);
    hand.innerHTML='<svg viewBox="0 0 260 340" aria-hidden="true"><path fill="#b07f5e" d="M124 340V206c0-17-11-30-11-45 0-10 8-14 15-9 8 6 13 19 15 32l4 24 7-95c1-13 6-19 14-18 9 1 12 9 12 20l1 79 9-69c2-12 9-17 16-15 8 2 11 10 10 21l-9 71 15-47c4-12 12-15 19-12 7 4 9 12 5 23l-19 67c-7 24-11 42-11 59v54z"/></svg>';
    return {node:s, update:function(t,p){
      var onPad=p>.42;
      mac.root.style.display=onPad?'none':'block';
      pad.style.display=onPad?'block':'none';
      var idx=p<.18?0:(p<.38?1:2);
      var g=onPad?gPad:gMac, tb=onPad?tPad:tMac;
      g.set(idx,t);
      var host=onPad?pad:mac.root;
      setO(host,smooth(seg(p,0,.08)));
      var grow=eOut(seg(p,.42,1));
      setT(host,onPad
        ? 'scale('+lerp(1,1.44,grow).toFixed(3)+') translate('+lerp(0,-16,grow).toFixed(0)+'px,'+lerp(0,26,grow).toFixed(0)+'px)'
        : 'scale('+lerp(.96,1,eOut(seg(p,0,.3))).toFixed(3)+')');
      setF(host,onPad&&grow>.5?'blur('+((grow-.5)*5.2).toFixed(2)+'px)':'none');
      for(var i=0;i<tb.rows.length;i++){
        var q=eOut(clamp(seg(p,.01+i*.045,.11+i*.045),0,1));
        setO(tb.rows[i],q);
        setT(tb.rows[i],'translateY('+((1-q)*20).toFixed(1)+'px)');
      }
      var pen=smooth(seg(p,.56,.72));
      pencil.style.left='430px'; pencil.style.top='104px'; pencil.style.width='420px';
      setO(pencil,pen*(1-seg(p,.94,1)));
      var hi=seg(p,.72,.98);
      hand.style.left='700px'; hand.style.top='300px';
      setO(hand,Math.min(1,hi*2.4));
      setT(hand,'translate('+lerp(230,26,eOut(hi)).toFixed(0)+'px,'+lerp(120,30,eOut(hi)).toFixed(0)+'px) rotate('+lerp(20,6,eOut(hi)).toFixed(1)+'deg)');
    }};
  }

  /* =====================================================================
     10 · prompt it — clean, daisies, liquid
     ===================================================================== */
  function makePrompt(){
    var s=el('div','scene');
    var L=textLine(s,'Prompt it.',600);
    var cv=document.createElement('canvas');
    cv.id='daisyC'; cv.width=W; cv.height=H; s.appendChild(cv);
    var g2=cv.getContext('2d');
    var liquid=el('div','',s); liquid.id='liquid';
    var lt=el('div','tx',liquid);
    lt.style.fontSize=L.fs.toFixed(2)+'px'; lt.style.fontWeight='700'; lt.style.color='#8ecfee';
    lt.textContent='Prompt it.';
    var gl=el('div','gloss',s); gl.style.fontSize=L.fs.toFixed(2)+'px'; gl.textContent='Prompt it.';
    var R=rng(3131), drops=[];
    for(var i=0;i<28;i++){
      var d=el('div','drop',liquid);
      var sz=lerp(8,26,R());
      d.style.width=sz+'px'; d.style.height=sz+'px';
      drops.push({n:d,x:lerp(340,940,R()),y:lerp(240,470,R()),sz:sz,ph:R()*6.283,sp:.4+R()*.9});
    }
    var pts=null;
    function samplePts(){
      var m=document.createElement('canvas'), mc=m.getContext('2d');
      m.width=W; m.height=200;
      mc.font='700 '+L.fs.toFixed(0)+'px -apple-system,"SF Pro Display",Helvetica,Arial,sans-serif';
      mc.textAlign='center'; mc.textBaseline='middle';
      mc.fillText('Prompt it.',W/2,100);
      var data=mc.getImageData(0,0,W,200).data, out=[];
      for(var y=0;y<200;y+=13){
        for(var x=0;x<W;x+=13){
          if(data[(y*W+x)*4+3]>110) out.push([x,y]);
        }
      }
      return out;
    }
    function daisy(x,y,r,rot,a){
      g2.save(); g2.translate(x,y); g2.rotate(rot); g2.globalAlpha=a;
      g2.fillStyle='#f4f3ef';
      for(var i=0;i<9;i++){
        g2.save(); g2.rotate(i/9*6.2832);
        g2.beginPath(); g2.ellipse(0,-r*.6,r*.25,r*.6,0,0,6.2832); g2.fill();
        g2.restore();
      }
      g2.fillStyle='#e6b229';
      g2.beginPath(); g2.arc(0,0,r*.3,0,6.2832); g2.fill();
      g2.restore();
    }
    return {node:s, update:function(t,p){
      var cq=smooth(seg(p,.01,.07))*(1-smooth(seg(p,.13,.19)));
      var gq=smooth(seg(p,.68,.76))*(1-smooth(seg(p,.92,1)));
      setO(L.tx,Math.max(cq,gq*.6));
      setT(L.tx,TXY+'scale('+lerp(1.04,1,eOut(seg(p,.02,.24))).toFixed(3)+')');
      if(gq>.01){ setC(L.tx,'rgba(198,126,112,1)'); setF(L.tx,'blur('+(3+gq*5).toFixed(1)+'px)') }
      else { setC(L.tx,'#f5f5f7'); setF(L.tx,'none') }

      var dq=smooth(seg(p,.15,.23))*(1-smooth(seg(p,.40,.46)));
      cv.style.opacity=dq.toFixed(3);
      if(dq>.004){
        if(!pts) pts=samplePts();
        g2.clearRect(0,0,W,H);
        var grow=eOut(seg(p,.15,.38));
        for(var i=0;i<pts.length;i++){
          var q=clamp(grow*1.4-((i*37)%100)/100*.4,0,1);
          if(q<=.02) continue;
          daisy(pts[i][0],pts[i][1]+260,lerp(4,15,q)+Math.sin(t*2+i)*.8,(i*1.7)%6.283,q);
        }
      }
      var lq=smooth(seg(p,.4,.48))*(1-smooth(seg(p,.6,.68)));
      setO(liquid,lq); setO(gl,lq*.9);
      var wob=Math.sin(t*2.2)*2.4;
      setT(lt,TXY+'translateY('+wob.toFixed(2)+'px)');
      setT(gl,TXY+'translateY('+wob.toFixed(2)+'px)');
      var burst=eOut(seg(p,.46,.74));
      for(i=0;i<drops.length;i++){
        var d=drops[i];
        d.n.style.left=(d.x+Math.cos(d.ph)*burst*lerp(30,170,d.sp*.7)-d.sz/2).toFixed(1)+'px';
        d.n.style.top=(d.y+Math.sin(d.ph)*burst*lerp(20,120,d.sp*.7)+Math.sin(t*1.6+d.ph)*3-d.sz/2).toFixed(1)+'px';
      }
    }};
  }

  /* =====================================================================
     11 · perform it
     ===================================================================== */
  function makePerform(){
    var s=el('div','scene');
    var keys=el('div','keys',s);
    for(var i=0;i<4;i++)el('u','',keys);
    var L=textLine(s,'Perform it.',575);
    var TINT=['#ffffff','#ffffff','#d8f0ff','#bfe6fb','#cfe8fb','#c46ff5','#a83af0','#ffffff','#f7d79a','#f2c37a','#f0bb6a'];
    var hands=el('div','',s);
    hands.innerHTML='<svg viewBox="0 0 1280 340" aria-hidden="true">'+
      '<g fill="#6f4a32">'+
      '<path d="M196 340V186c0-22 15-38 34-38 18 0 30 16 30 38v78l52-12c22-5 38 6 38 24 0 40-44 64-92 64z"/>'+
      '<path d="M262 340v-96c0-14 9-24 20-24s20 10 20 24v96z" fill="#7d5237"/>'+
      '<path d="M604 340V162c0-24 17-42 37-42 20 0 33 18 33 42v88l58-14c24-5 41 7 41 27 0 44-48 70-100 70z"/>'+
      '<path d="M676 340v-104c0-15 10-26 22-26s22 11 22 26v104z" fill="#7d5237"/>'+
      '</g></svg>';
    hands.style.cssText='position:absolute;left:0;right:0;bottom:0;height:340px;will-change:opacity,transform';
    return {node:s, update:function(t,p){
      var env=smooth(seg(p,.02,.16))*(1-smooth(seg(p,.84,1)));
      setO(L.tx,env);
      L.tx.style.textShadow='0 0 34px rgba(255,255,255,.45)';
      for(var i=0;i<L.chars.length;i++){
        setC(L.chars[i],TINT[i]||'#ffffff');
        setO(L.chars[i],1);
        setT(L.chars[i],'translateY('+(Math.sin(t*9+i*.7)*1.4).toFixed(2)+'px)');
      }
      setO(keys,env*smooth(seg(p,.06,.28)));
      setO(hands,env*smooth(seg(p,.1,.4)));
      setT(hands,'translateY('+((1-eOut(seg(p,.1,.5)))*60).toFixed(0)+'px)');
    }};
  }

  /* =====================================================================
     12 · loop it
     ===================================================================== */
  function makeLoop(){
    var s=el('div','scene');
    var L=textLine(s,'Loop it.',375);
    return {node:s, update:function(t,p){
      setO(L.tx,smooth(seg(p,.02,.14))*(1-smooth(seg(p,.9,1))));
      for(var i=0;i<L.chars.length;i++){
        var q=eOut(clamp(seg(p,.03+i*.03,.3+i*.03),0,1));
        var spin=(i===1||i===2)?Math.sin(t*4.6+i*.7)*140*(1-seg(p,.1,.34)):0;
        setT(L.chars[i],'translateY('+((1-q)*20).toFixed(1)+'px) rotateY('+spin.toFixed(0)+'deg)');
        setO(L.chars[i],q);
      }
    }};
  }

  /* =====================================================================
     13 · select it
     ===================================================================== */
  function makeSelect(){
    var s=el('div','scene');
    var L=textLine(s,'Select it.',499);
    L.chars.forEach(function(c){setC(c,'#48484d')});
    var lime=el('div','line',s);
    var lt=el('div','tx',lime);
    lt.style.fontSize=L.fs.toFixed(2)+'px'; lt.style.color='#a6f024';
    lt.style.textShadow='0 0 34px rgba(160,240,40,.6)';
    lt.innerHTML='<span>S</span><span style="opacity:0">elect it.</span>';
    var first=lt.firstChild;
    var cur=el('div','cursor',s);
    return {node:s, update:function(t,p){
      var env=smooth(seg(p,.02,.14))*(1-smooth(seg(p,.88,1)));
      setO(L.tx,env); setO(lt,env);
      var trace=eOut(seg(p,.08,.44));
      first.style.clipPath='inset('+((1-trace)*100).toFixed(1)+'% 0 0 0)';
      cur.style.left=(400+Math.sin(trace*3.4)*22).toFixed(1)+'px';
      cur.style.top=lerp(300,382,trace).toFixed(1)+'px';
      setO(cur,env*smooth(seg(p,.04,.14))*(1-seg(p,.5,.66)));
    }};
  }

  /* =====================================================================
     14 · write it — letters riding an s-curve
     ===================================================================== */
  function makeWrite(){
    var s=el('div','scene');
    var str='Write it.', fs=fitPx(str,620);
    var adv=advances(str,fs), total=adv.reduce(function(a,b){return a+b},0);
    var wrap=el('div','line',s);
    var svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
    svg.setAttribute('viewBox','0 0 1280 720');
    svg.setAttribute('width','1280'); svg.setAttribute('height','720');
    svg.style.cssText='position:absolute;left:0;top:0;overflow:visible';
    var path=document.createElementNS('http://www.w3.org/2000/svg','path');
    /* steep, flat, steep — the reference baseline is a stepped S */
    function P(u){
      var y=468+(378-468)*smooth(seg(u,0,.32))+(276-378)*smooth(seg(u,.6,1));
      return [336+700*u, y];
    }
    /* arc-length table so letters space evenly along the curve, not along x */
    var N=240, LUT=[0], prev=P(0), arc=0;
    for(var i=1;i<=N;i++){
      var pt=P(i/N);
      arc+=Math.hypot(pt[0]-prev[0],pt[1]-prev[1]);
      LUT.push(arc); prev=pt;
    }
    function uAt(dist){
      var d=clamp(dist,0,arc), lo=0, hi=N;
      while(hi-lo>1){var mid=(lo+hi)>>1; if(LUT[mid]<d)lo=mid; else hi=mid}
      var span=LUT[hi]-LUT[lo]||1;
      return (lo+(d-LUT[lo])/span)/N;
    }
    var dstr='M';
    for(i=0;i<=60;i++){ var q=P(i/60); dstr+=(i?' L':'')+q[0].toFixed(1)+' '+q[1].toFixed(1) }
    path.setAttribute('d',dstr);
    path.setAttribute('fill','none');
    path.setAttribute('stroke','#e0872a');
    path.setAttribute('stroke-width','2.4');
    path.setAttribute('stroke-linecap','round');
    svg.appendChild(path); wrap.appendChild(svg);
    var len=0;
    var glyphs=[];
    for(i=0;i<str.length;i++){
      var g=document.createElement('span');
      g.textContent=str[i]===' '?'\u00a0':str[i];
      g.style.cssText='position:absolute;font-weight:600;letter-spacing:-.012em;line-height:1;white-space:pre;'+
        'font-size:'+fs.toFixed(2)+'px;transform-origin:0% 100%;will-change:transform,opacity';
      wrap.appendChild(g);
      glyphs.push({n:g, run:len});
      len+=adv[i];
    }
    var pad=(arc-total)/2;
    var dot=el('div','glowdot',s);
    return {node:s, update:function(t,p){
      var env=1-smooth(seg(p,.86,1));
      var draw=eOut(seg(p,.04,.72));
      var pl=path.getTotalLength?path.getTotalLength():1400;
      path.style.strokeDasharray=pl.toFixed(0);
      path.style.strokeDashoffset=(pl*(1-draw)).toFixed(0);
      path.style.opacity=(env*.95).toFixed(2);
      for(var i=0;i<glyphs.length;i++){
        var g=glyphs[i];
        var u=uAt(pad+g.run);
        var a=P(u), b=P(Math.min(1,u+.012));
        var ang=Math.atan2(b[1]-a[1],b[0]-a[0])*180/Math.PI;
        var q=clamp(seg(p,.06+i*.055,.2+i*.055),0,1);
        g.n.style.left=a[0].toFixed(1)+'px';
        g.n.style.top=a[1].toFixed(1)+'px';
        setT(g.n,'rotate('+ang.toFixed(2)+'deg) translate(0,-'+(fs*.78).toFixed(1)+'px) scale('+lerp(.86,1,eOut(q)).toFixed(3)+')');
        setO(g.n,q*env);
      }
      var hp=P(clamp(draw,0,1));
      dot.style.left=(hp[0]-8).toFixed(1)+'px';
      dot.style.top=(hp[1]-8).toFixed(1)+'px';
      setO(dot,env*smooth(seg(p,.04,.14))*(1-seg(p,.78,.9)));
    }};
  }

  /* =====================================================================
     15 · scrap it
     ===================================================================== */
  function makeScrap(){
    var s=el('div','scene');
    var L=textLine(s,'Scrap it.',469);
    var bin=el('div','bin',s);
    el('div','cup',bin); el('div','rim',bin); el('div','hole',bin);
    var bits=el('div','',bin);
    bits.style.cssText='position:absolute;left:22px;right:22px;top:2px;height:18px;overflow:hidden';
    ['#e8e9ec','#f0d24a','#4fb8e0','#e05a8a'].forEach(function(c,i){
      var q=el('div','',bits);
      q.style.cssText='position:absolute;left:'+(i*26+4)+'px;top:'+(3+(i%2)*4)+'px;width:22px;height:14px;'+
        'border-radius:4px;background:'+c+';opacity:.9';
    });
    var wad=el('div','wad',s);
    wad.innerHTML='<svg viewBox="0 0 46 46" aria-hidden="true"><path fill="#eceef2" d="M7 16l10-11 15 4 7 11-5 14-15 7-11-7z"/>'+
      '<path fill="#c8ccd4" d="M17 5l6 15-16-4zM39 20l-5 14-11-14z"/></svg>';
    return {node:s, update:function(t,p){
      var env=smooth(seg(p,.01,.06))*(1-smooth(seg(p,.5,.62)));
      setO(L.tx,env);
      for(var i=0;i<L.chars.length;i++){
        var q=eOut(clamp(seg(p,.01+i*.008,.07+i*.008),0,1));
        setO(L.chars[i],q);
        setT(L.chars[i],'translateY('+((1-q)*16).toFixed(1)+'px)');
      }
      setO(bin,smooth(seg(p,.04,.16))*(1-smooth(seg(p,.92,1))));
      setT(bin,'scale('+lerp(.9,1,eOut(seg(p,.04,.26))).toFixed(3)+')');
      setO(bits,smooth(seg(p,.56,.68)));
      var drop=seg(p,.28,.56);
      wad.style.left=lerp(760,614,drop).toFixed(0)+'px';
      wad.style.top=lerp(300,444,eIn(drop)+drop*.25).toFixed(0)+'px';
      setO(wad,drop>0&&drop<.95?1:0);
      setT(wad,'rotate('+(drop*540).toFixed(0)+'deg) scale('+lerp(1.15,.72,drop).toFixed(2)+')');
    }};
  }

  /* =====================================================================
     16 · move it
     ===================================================================== */
  function makeMove(){
    var s=el('div','scene');
    var L=textLine(s,'Move it.',462);
    return {node:s, update:function(t,p){
      setO(L.tx,smooth(seg(p,.02,.14))*(1-smooth(seg(p,.9,1))));
      for(var i=0;i<L.chars.length;i++){
        var q=eOut(clamp(seg(p,.06+i*.06,.5+i*.06),0,1));
        var dir=i%2?1:-1;
        setT(L.chars[i],'translate('+(dir*86*(1-q)).toFixed(1)+'px,'+(dir*-14*(1-q)).toFixed(1)+'px)');
        setO(L.chars[i],Math.min(1,q*1.6));
      }
    }};
  }

  /* =====================================================================
     17 · upscale it — sharp lime left, pixellated right
     ===================================================================== */
  function makeUpscale(){
    var s=el('div','scene');
    var L=textLine(s,'Upscale it.',598);
    var lime=el('div','line',s);
    var lt=el('div','tx',lime);
    lt.style.fontSize=L.fs.toFixed(2)+'px';
    lt.style.color='#a6f024';
    lt.style.textShadow='0 0 40px rgba(150,240,40,.55)';
    lt.textContent='Upscale it.';
    var cv=document.createElement('canvas');
    cv.width=W; cv.height=H;
    cv.style.cssText='position:absolute;left:0;top:0;image-rendering:pixelated';
    s.appendChild(cv);
    var g2=cv.getContext('2d');
    var lo=document.createElement('canvas');
    var SC=12;
    lo.width=Math.ceil(W/SC); lo.height=Math.ceil(H/SC);
    var lg=lo.getContext('2d');
    lg.font='600 '+(L.fs/SC).toFixed(2)+'px -apple-system,"SF Pro Display",Helvetica,Arial,sans-serif';
    lg.textAlign='center'; lg.textBaseline='middle';
    lg.fillStyle='#f5f5f7';
    lg.fillText('Upscale it.',W/2/SC,H/2/SC);
    var divider=el('div','',s);
    divider.style.cssText='position:absolute;top:177px;width:1.5px;height:365px;background:rgba(255,255,255,.85)';
    return {node:s, update:function(t,p){
      var env=smooth(seg(p,.02,.14))*(1-smooth(seg(p,.86,1)));
      var sweep=seg(p,.04,.96);
      var x=lerp(320,920,sweep*sweep*.6+sweep*.4);
      setO(L.tx,0);
      setO(lt,env);
      lt.style.clipPath='inset(0 '+(W-x).toFixed(0)+'px 0 0)';
      g2.clearRect(0,0,W,H);
      g2.save();
      g2.beginPath(); g2.rect(x,0,W-x,H); g2.clip();
      g2.imageSmoothingEnabled=false;
      g2.globalAlpha=env;
      g2.drawImage(lo,0,0,lo.width,lo.height,0,0,W,H);
      g2.restore();
      divider.style.left=x.toFixed(1)+'px';
      setO(divider,env*(1-seg(p,.8,.94)));
    }};
  }

  /* =====================================================================
     18 · share it — shatters into glowing shards
     ===================================================================== */
  function makeShare(){
    var s=el('div','scene');
    var L=textLine(s,'Share it.',421);
    var TINT=['#eaf4ff','#eaf4ff','#4da6f0','#4da6f0','#4da6f0','#ffffff','#ffffff','#ffffff','#ffffff'];
    /* slice inside the word's own bounds so each shard reads as a fragment */
    var R=rng(8123), frags=[], TW=421, x00=(W-TW)/2;
    for(var i=0;i<9;i++){
      var f=el('div','frag',s);
      f.style.fontSize=L.fs.toFixed(2)+'px';
      f.textContent='Share it.';
      var xa=(x00+i*TW/9)/W*100, xb=(x00+(i+1)*TW/9)/W*100, sk=R()*16-8;
      f.style.clipPath='polygon('+xa.toFixed(2)+'% '+(R()*22).toFixed(0)+'%,'+xb.toFixed(2)+'% 0%,'+
        xb.toFixed(2)+'% '+(78+R()*22).toFixed(0)+'%,'+xa.toFixed(2)+'% 100%)';
      frags.push({n:f,a:(i/8-.5)*2.2+(R()*.5-.25),sp:.5+R()*.9,rot:(R()*2-1)*70,sk:sk});
    }
    return {node:s, update:function(t,p){
      var shat=seg(p,.62,1);
      setO(L.tx,smooth(seg(p,.02,.14))*(1-smooth(seg(p,.6,.7))));
      L.tx.style.textShadow='0 0 46px rgba(190,225,255,.5)';
      for(var i=0;i<L.chars.length;i++){
        var q=eOut(clamp(seg(p,.03+i*.03,.3+i*.03),0,1));
        setC(L.chars[i],TINT[i]||'#ffffff');
        setO(L.chars[i],q);
        setT(L.chars[i],'translateY('+((1-q)*18).toFixed(1)+'px)');
      }
      for(i=0;i<frags.length;i++){
        var f=frags[i], e=eOut(shat);
        setO(f.n,shat>0?smooth(seg(p,.62,.67))*(1-seg(p,.94,1)):0);
        setT(f.n,TXY+'translate('+(f.a*430*e).toFixed(0)+'px,'+((f.sp-.9)*470*e).toFixed(0)+'px) '+
          'rotate('+(f.rot*1.5*e).toFixed(1)+'deg) skewY('+(f.sk*e).toFixed(1)+'deg) scale('+lerp(1,1.9,e).toFixed(2)+')');
      }
    }};
  }

  /* =====================================================================
     19 · price
     ===================================================================== */
  function makePrice(){
    var s=el('div','scene');
    var str='Get it for $12.99/mo.';
    var wrap=el('div','line',s), tx=el('div','tx',wrap);
    tx.style.fontSize=fitPx(str,811).toFixed(2)+'px';
    var chars=letters(tx,str);
    for(var i=11;i<chars.length;i++) chars[i].style.textShadow='0 0 30px rgba(255,255,255,.6)';
    return {node:s, update:function(t,p){
      setO(tx,smooth(seg(p,.02,.14))*(1-smooth(seg(p,.9,1))));
      for(var i=0;i<chars.length;i++){
        var q=i<11?eOut(seg(p,.04,.2)):clamp(seg(p,.16+(i-11)*.028,.24+(i-11)*.028),0,1);
        setO(chars[i],q);
        setT(chars[i],'translateY('+((1-eOut(q))*12).toFixed(1)+'px)');
      }
    }};
  }

  /* =====================================================================
     20 · scrolling app picker
     ===================================================================== */
  function makeApps(){
    var s=el('div','scene');
    var APPS=[
      ['Final Cut Pro','#a24ef0','linear-gradient(160deg,#5b2ba8,#2a1050)'],
      ['Motion','#f04ad0','linear-gradient(160deg,#f07ad8,#7a1060)'],
      ['Pixelmator Pro','#e0324a','linear-gradient(160deg,#c02038,#4a0a14)'],
      ['Compressor','#f0d05a','linear-gradient(160deg,#f0c24a,#5a4210)'],
      ['Numbers','#7fd44a','linear-gradient(160deg,#7fd44a,#1f5a14)'],
      ['Keynote','#5ab4f0','linear-gradient(160deg,#5ab4f0,#12456b)'],
      ['Logic Pro','#d8dde6','linear-gradient(160deg,#d8dde6,#5a5f68)'],
      ['GarageBand','#f0863a','linear-gradient(160deg,#f0a04a,#6b3a10)']
    ];
    var rows=APPS.map(function(a){
      var d=el('div','appRow',s);
      d.innerHTML='<em style="background:'+a[2]+'"></em>'+a[0];
      d.style.color=a[1];
      d.style.fontSize='80px';
      return d;
    });
    return {node:s, update:function(t,p){
      var pos=.2+6*Math.pow(p,2.2);
      var fade=1-smooth(seg(p,.96,1));
      for(var i=0;i<rows.length;i++){
        var d=i-pos;
        var near=clamp(1-Math.abs(d),0,1);
        var sc=lerp(.86,1.42,Math.pow(near,1.5));
        rows[i].style.top='0px';
        rows[i].style.transform='translateY('+(360+d*132-48).toFixed(1)+'px) scale('+sc.toFixed(3)+')';
        setO(rows[i],clamp(1.3-Math.abs(d)*.92,0,1)*fade);
        setF(rows[i],near<.6?'brightness(.6)':'none');
      }
    }};
  }

  /* =====================================================================
     timeline
     ===================================================================== */
  var SCENES=[
    {a:0.00,  b:1.72,  s:makeWordmark()},
    {a:1.72,  b:3.42,  s:makeWall()},
    {a:3.42,  b:5.62,  s:makeLines()},
    {a:5.62,  b:6.92,  s:makeDock()},
    {a:6.92,  b:7.72,  s:makeBeatText()},
    {a:7.72,  b:9.52,  s:makeTracks()},
    {a:9.52,  b:11.42, s:makeEditVideo()},
    {a:11.42, b:13.32, s:makeMac()},
    {a:13.32, b:16.10, s:makeCanvasScene()},
    {a:16.10, b:18.02, s:makePrompt()},
    {a:18.02, b:18.56, s:makePerform()},
    {a:18.56, b:19.42, s:makeLoop()},
    {a:19.42, b:20.26, s:makeSelect()},
    {a:20.26, b:21.34, s:makeWrite()},
    {a:21.34, b:23.10, s:makeScrap()},
    {a:23.10, b:24.20, s:makeMove()},
    {a:24.20, b:24.86, s:makeUpscale()},
    {a:24.86, b:25.82, s:makeShare()},
    {a:25.82, b:27.32, s:makePrice()},
    {a:27.32, b:28.52, s:makeApps()},
    {a:28.52, b:DUR,   s:makeWordmark()}
  ];

  var active=null;
  function render(t){
    var k=Math.min((stage.clientWidth||W)/W,(stage.clientHeight||H)/H);
    comp.style.transform='scale('+k.toFixed(4)+')';
    for(var i=0;i<SCENES.length;i++){
      var sc=SCENES[i];
      if(t>=sc.a && t<sc.b){
        if(active!==sc){
          if(active) active.s.node.classList.remove('on');
          sc.s.node.classList.add('on');
          active=sc;
        }
        sc.s.update(t-sc.a, seg(t,sc.a,sc.b));
        return;
      }
    }
  }

  /* ---------- driver ---------- */
  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var start=null, raf=0, playing=!reduce, held=false, at=0;
  function seek(t){at=((t%DUR)+DUR)%DUR;render(at);return at}
  function play(){if(playing&&raf)return;playing=true;start=performance.now()-at*1000;if(!raf)raf=requestAnimationFrame(tick)}
  function pause(){playing=false;if(raf){cancelAnimationFrame(raf);raf=0}}
  function tick(now){
    if(!playing){raf=0;return}
    raf=requestAnimationFrame(tick);
    if(start===null)start=now;
    at=((now-start)/1000)%DUR;
    render(at);
  }
  window.addEventListener('resize',function(){render(at)});
  if(reduce){ seek(29.6) } else {
    raf=requestAnimationFrame(tick);
    document.addEventListener('visibilitychange',function(){
      if(document.hidden){ if(playing){held=true;pause()} }
      else if(held){ held=false; play() }
    });
  }
  window.__DUR=DUR;
  window.__seek=function(t){pause();return seek(t)};
  window.__play=play; window.__pause=pause; window.__time=function(){return at};
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
