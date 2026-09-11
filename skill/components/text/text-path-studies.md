---
name: "Text Path Studies"
library: "ComponentX"
id: "text-path-studies"
type: "text"
quality: "lightweight"
tags: ["animation", "background", "card", "layout", "shader", "text", "webgl"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Text Path Studies

> **Type:** `text` · **Quality:** `lightweight` · **ID:** `text-path-studies`
> **Path:** `components/text/text-path-studies.md`

**Text Path Studies** is a premium, production-ready component from the **ComponentX** library — engineered for text interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Lightweight tier** — a minimal footprint, a small dependency surface, and a clean implementation that drops into any project with zero friction.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `animation`, `background`, `card` workflows.
- **Pattern coverage** — includes `layout`, `shader`, `text` workflows.
- **Pattern coverage** — includes `webgl` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Text Path Studies** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
name: add-globe-study
description: "Build Text Path Studies from its verified authored source using Canvas 2D, including the complete renderer, interactions, and required assets. Use when Codex needs to implement, port, or adapt this effect without requiring the ComponentX package or reconstructing the visual from an approximation."
---

# Build Text Path Studies

## Description

Six interactive Canvas 2D typography studies spanning a globe, flowing outlines, morphing glyphs, cloth physics, ripples, and a particle sphere.

Recreate the authored behavior from the verified source, not from screenshots or the abbreviated orchestration sample in this skill. The implementation may live directly in the target project and does not require `@componentx/core`.

## Technologies

- React variant host
- Two exact authored Canvas 2D documents
- Six interactive text-path studies
- Sandboxed source isolation
- Light and dark palette controls

## Verified source material

- `text-on-a-path-ii.html — FIG 06 Globe, FIG 07 Outline Typeflow, FIG 08 Morphing Glyph Cloud, and FIG 11 Cloth`
- `text-on-a-path.html — FIG 04 Ripple and FIG 05 Ball`
- `src/shaders/text-path-studies/TextPathStudies.tsx`

Source revision: `SHA-256 2e21ae3b77c3 + e5d01ff0fc47`

## Implementation steps

1. Open every verified source file listed above and identify the renderer, host lifecycle, styles, and assets before editing.
2. Keep TextPathStudies as the public entry point and select globe-study, outline-typeflow, morphing-glyph-cloud, cloth-study, ripple-study, or ball-study with the variant prop.
3. Retain both complete authored Text on a Path documents and focus only the selected figure inside an allow-scripts-only sandbox.
4. Preserve each study's own drag, zoom, hover, click, morph, cloth, ripple, or particle interaction instead of flattening them into one renderer.
5. Expose shared mode, scale, opacity, and palette controls at the collection boundary.
6. Mount only the selected source document so inactive studies do not allocate canvases or animation loops.
7. Give the local component a sized, overflow-controlled parent and verify desktop, mobile, reduced-motion, and context-loss behavior.

Asset handling: This effect has no required external assets.

## Local component example

Import the copied local component rather than a package entrypoint:

```tsx
import { TextPathStudies } from "./effects/globe-study/TextPathStudies";
import "./effects/globe-study/styles.css";

export function Scene() {
  return <div className="effect-frame"><TextPathStudies /></div>;
}
```

## Core renderer pattern

This excerpt documents orchestration only. Copy the exact shader, geometry, pass, and interaction code from the verified source files.

```tsx
<TextPathStudies variant="outline-typeflow" mode="dark" />
```

## Behavior contract

- Runtime: Canvas 2D
- Passes: 1 selected sandboxed Canvas 2D study
- Interaction: Variant-specific drag, zoom, hover, click, morph, cloth, ripple, and particle interactions
- Assets: No external assets
- **source** (fixed): Six exact authored figures across two documents
- **renderer** (sandbox): Canvas 2D
- **mode** (optional): dark | light
- **variant** (optional): Six text-path studies
- **pixelRatio** (adaptive): ≤ 2.5
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
# Text Path Studies — Globe Type Study — Complete source

Component: `TextPathStudies`
Variant: **Globe Type Study** (`globe-study`)
Runtime: Canvas 2D
Source revision: `SHA-256 2e21ae3b77c3 + e5d01ff0fc47`

## Current configured usage

```tsx
import { TextPathStudies } from "@componentx/threeui";
import "@componentx/threeui/style.css";

export function Scene() {
  return (
    <div className="shader-frame">
      <TextPathStudies
        mode="dark"
        scale={1.00}
        opacity={1.00}
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

### `src/shaders/text-path-studies/TextPathStudies.tsx`

Role: component · 326 lines · 10892 bytes · SHA-256 `049af9bb9116cfdf1a9c502fcc2e605bbef775958c8c9c3853c59123a88b08ba`

```tsx
import { useMemo, type CSSProperties } from "react";
import firstStudiesSource from "./sources/text-on-a-path.html?raw";
import secondStudiesSource from "./sources/text-on-a-path-ii.html?raw";

type StudyDefinition = {
  source: string;
  index: number;
  title: string;
  layout: "cards" | "figures";
  presentation?: "dark-frameless";
  renderDensity?: {
    minimum: number;
    maximum: number;
  };
};

export type TextPathStudyProps = {
  mode?: "dark" | "light";
  scale?: number;
  opacity?: number;
  hue?: number;
  saturation?: number;
  brightness?: number;
  className?: string;
  style?: CSSProperties;
};

export type TextPathStudiesVariant =
  | "globe-study"
  | "outline-typeflow"
  | "morphing-glyph-cloud"
  | "cloth-study"
  | "ripple-study"
  | "ball-study";

export type TextPathStudiesProps = TextPathStudyProps & {
  variant?: TextPathStudiesVariant;
};

export const TEXT_PATH_STUDY_DEFAULTS = {
  mode: "dark",
  scale: 1,
  opacity: 1,
  hue: 0,
  saturation: 1,
  brightness: 1,
} as const;

const STUDIES = {
  globe: { source: secondStudiesSource, index: 1, title: "Globe", layout: "figures" },
  outlineTypeflow: {
    source: secondStudiesSource,
    index: 2,
    title: "Outline Typeflow",
    layout: "figures",
    renderDensity: { minimum: 2, maximum: 2.5 },
  },
  morphingGlyphCloud: {
    source: secondStudiesSource,
    index: 3,
    title: "Morphing Glyph Cloud",
    layout: "figures",
    renderDensity: { minimum: 2, maximum: 2.5 },
  },
  cloth: { source: secondStudiesSource, index: 6, title: "Cloth", layout: "figures" },
  ripple: {
    source: firstStudiesSource,
    index: 2,
    title: "Ripple",
    layout: "cards",
    presentation: "dark-frameless",
  },
  ball: {
    source: firstStudiesSource,
    index: 3,
    title: "Ball",
    layout: "cards",
    presentation: "dark-frameless",
  },
} as const satisfies Record<string, StudyDefinition>;

const TEXT_PATH_VARIANTS: Record<TextPathStudiesVariant, StudyDefinition> = {
  "globe-study": STUDIES.globe,
  "outline-typeflow": STUDIES.outlineTypeflow,
  "morphing-glyph-cloud": STUDIES.morphingGlyphCloud,
  "cloth-study": STUDIES.cloth,
  "ripple-study": STUDIES.ripple,
  "ball-study": STUDIES.ball,
};

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(maximum, Math.max(minimum, value));
}

function focusStyles(definition: StudyDefinition, mode: "dark" | "light") {
  const selected = definition.index;
  const surface = mode === "light" ? "#f3f5f8" : "#08090a";
  const themeStyles = mode === "light"
    ? `
      :root {
        color-scheme: light;
        --bg: #f3f5f8;
        --line: rgba(20, 24, 32, .055);
        --line-strong: rgba(20, 24, 32, .10);
        --fig: rgba(20, 24, 32, .42);
        --title: #171922;
        --copy: rgba(20, 24, 32, .62);
      }
    `
    : ":root { color-scheme: dark; }";
  const cardPresentationStyles = definition.presentation === "dark-frameless"
    ? `
      .stage, .row {
        background: ${surface} !important;
        overflow: visible !important;
      }
      .card:nth-child(${selected}) {
        width: 100% !important;
        height: 100% !important;
        aspect-ratio: auto !important;
        border-radius: 0 !important;
        overflow: visible !important;
        background: transparent !important;
        isolation: auto !important;
      }
    `
    : `
      .card:nth-child(${selected}) {
        width: min(100cqw, 100cqh) !important;
        height: min(100cqw, 100cqh) !important;
      }
    `;
  const layoutStyles = definition.layout === "figures"
    ? `
      .grid {
        display: block !important;
        width: 100% !important;
        height: 100% !important;
        overflow: hidden !important;
      }
      .fig { display: none !important; }
      .fig:nth-child(${selected}) {
        display: flex !important;
        width: 100% !important;
        height: 100% !important;
        padding: 0 !important;
      }
      .fig::before, .fig::after, .fignum, .fig h3, .fig p { display: none !important; }
      .art {
        display: flex !important;
        width: 100% !important;
        height: 100% !important;
        max-height: none !important;
        margin: 0 !important;
        align-items: center !important;
        justify-content: center !important;
      }
      .plate {
        width: min(100cqw, 100cqh) !important;
        height: min(100cqw, 100cqh) !important;
      }
    `
    : `
      .stage {
        width: 100% !important;
        height: 100% !important;
        padding: 0 !important;
        overflow: hidden !important;
        align-items: center !important;
        justify-content: center !important;
      }
      .row {
        display: flex !important;
        width: 100% !important;
        height: 100% !important;
        padding: 0 !important;
        align-items: center !important;
        justify-content: center !important;
      }
      .card { display: none !important; }
      .card:nth-child(${selected}) {
        display: block !important;
      }
      .card figcaption { display: none !important; }
      ${cardPresentationStyles}
    `;

  return `<style id="threeui-study-focus">
    ${themeStyles}
    html, body, .frame {
      width: 100% !important;
      height: 100% !important;
      overflow: hidden !important;
    }
    body { margin: 0 !important; background: ${surface} !important; }
    .frame { padding: 0 !important; background: ${surface} !important; }
    header { display: none !important; }
    ${layoutStyles}
  </style>`;
}

const AUTHORED_SURFACE_DENSITY = "var dpr = Math.min(1.5, window.devicePixelRatio || 1);";
const AUTHORED_CARD_INK = "var INK  = '20,19,16';";
const AUTHORED_FIGURE_INK = "var INK  = '226,228,233';";

function replaceRequired(source: string, authored: string, focused: string) {
  if (!source.includes(authored)) {
    throw new Error(`Text path source adapter could not find: ${authored}`);
  }
  return source.replace(authored, focused);
}

function framelessCardSource(source: string, mode: "dark" | "light") {
  const replacements = [
    [AUTHORED_CARD_INK, mode === "light" ? AUTHORED_CARD_INK : "var INK  = '238,240,244';"],
    [
      "      var cell = s.w * 0.02860;\n      var fs   = cell * 1.10;",
      "      var size = Math.min(s.w, s.h);\n      var cell = size * 0.02860;\n      var fs   = cell * 1.10;",
    ],
    ["      var speed = s.w * 1.20;", "      var speed = size * 1.20;"],
    [
      "      var fs = s.w*FS;\n      var now = performance.now();\n      var hitR = s.w*0.055, hit = hitR*hitR;",
      "      var size = Math.min(s.w, s.h);\n      var fs = size*FS;\n      var now = performance.now();\n      var hitR = size*0.055, hit = hitR*hitR;",
    ],
    [
      "          vx: (dx/d)*s.w*(0.10 + Math.random()*0.16) + (Math.random()-0.5)*s.w*0.05,\n          vy: (dy/d)*s.w*0.08 - s.w*(0.04 + Math.random()*0.10),",
      "          vx: (dx/d)*size*(0.10 + Math.random()*0.16) + (Math.random()-0.5)*size*0.05,\n          vy: (dy/d)*size*0.08 - size*(0.04 + Math.random()*0.10),",
    ],
    [
      "      var cx = s.w/2, cy = s.h/2 + s.w*CYOFF;\n      var R  = s.w*RR;\n      var fs = s.w*FS;",
      "      var size = Math.min(s.w, s.h);\n      var cx = s.w/2, cy = s.h/2 + size*CYOFF;\n      var R  = size*RR;\n      var fs = size*FS;",
    ],
    ["      var g = s.w*0.80;", "      var g = size*0.80;"],
  ] as const;

  return replacements.reduce(
    (adapted, [authored, focused]) => replaceRequired(adapted, authored, focused),
    source,
  );
}

function focusedDocument(definition: StudyDefinition, mode: "dark" | "light") {
  const presentedSource = definition.presentation === "dark-frameless"
    ? framelessCardSource(definition.source, mode)
    : mode === "light"
      ? replaceRequired(definition.source, AUTHORED_FIGURE_INK, "var INK  = '38,40,48';")
      : definition.source;
  const source = definition.renderDensity
    ? presentedSource.replace(
        AUTHORED_SURFACE_DENSITY,
        `var dpr = Math.min(${definition.renderDensity.maximum}, Math.max(${definition.renderDensity.minimum}, window.devicePixelRatio || 1));`,
      )
    : presentedSource;

  return source
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${definition.title} — ThreeUI</title>`)
    .replace("</head>", `${focusStyles(definition, mode)}\n</head>`);
}

function TextPathStudy({
  definition,
  mode = TEXT_PATH_STUDY_DEFAULTS.mode,
  scale = TEXT_PATH_STUDY_DEFAULTS.scale,
  opacity = TEXT_PATH_STUDY_DEFAULTS.opacity,
  hue = TEXT_PATH_STUDY_DEFAULTS.hue,
  saturation = TEXT_PATH_STUDY_DEFAULTS.saturation,
  brightness = TEXT_PATH_STUDY_DEFAULTS.brightness,
  className,
  style,
}: TextPathStudyProps & { definition: StudyDefinition }) {
  const safeMode = mode === "light" ? "light" : "dark";
  const document = useMemo(() => focusedDocument(definition, safeMode), [definition, safeMode]);
  const boundedScale = clamp(scale, 0.65, 1.5);
  const boundedOpacity = clamp(opacity, 0.1, 1);
  const boundedHue = clamp(hue, -180, 180);
  const boundedSaturation = clamp(saturation, 0, 2);
  const boundedBrightness = clamp(brightness, 0.4, 1.8);
  const filter = boundedHue === 0 && boundedSaturation === 1 && boundedBrightness === 1
    ? undefined
    : `hue-rotate(${boundedHue}deg) saturate(${boundedSaturation}) brightness(${boundedBrightness})`;

  return (
    <div
      className={["text-path-study", `text-path-study--${safeMode}`, className].filter(Boolean).join(" ")}
      data-mode={safeMode}
      style={{ opacity: boundedOpacity, filter, ...style }}
    >
      <iframe
        className="text-path-study-frame"
        data-mode={safeMode}
        title={`${definition.title} interactive canvas study`}
        sandbox="allow-scripts"
        srcDoc={document}
        style={{ transform: boundedScale === 1 ? undefined : `scale(${boundedScale})` }}
      />
    </div>
  );
}

export function TextPathStudies({ variant = "globe-study", ...props }: TextPathStudiesProps = {}) {
  return <TextPathStudy definition={TEXT_PATH_VARIANTS[variant]} {...props} />;
}

export function GlobeStudy(props: TextPathStudyProps = {}) {
  return <TextPathStudy definition={STUDIES.globe} {...props} />;
}

export function OutlineTypeflow(props: TextPathStudyProps = {}) {
  return <TextPathStudy definition={STUDIES.outlineTypeflow} {...props} />;
}

export function MorphingGlyphCloud(props: TextPathStudyProps = {}) {
  return <TextPathStudy definition={STUDIES.morphingGlyphCloud} {...props} />;
}

export function ClothStudy(props: TextPathStudyProps = {}) {
  return <TextPathStudy definition={STUDIES.cloth} {...props} />;
}

export function RippleStudy(props: TextPathStudyProps = {}) {
  return <TextPathStudy definition={STUDIES.ripple} {...props} />;
}

export function BallStudy(props: TextPathStudyProps = {}) {
  return <TextPathStudy definition={STUDIES.ball} {...props} />;
}
```

### `src/shaders/text-path-studies/sources/text-on-a-path-ii.html`

Role: canonical-source · 1316 lines · 62883 bytes · SHA-256 `2e21ae3b77c3eda7e9189ffb75d5a4c6a7e53f5c44ad78125657051a05b71e72`

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Text on a Path II — Six More Studies in Motion</title>
<style>
  :root{
    --bg:#08090a;
    --line:rgba(255,255,255,.028);
    --line-strong:rgba(255,255,255,.05);
    --fig:rgba(255,255,255,.24);
    --title:#f2f3f5;
    --copy:rgba(255,255,255,.46);
    --sans:-apple-system,BlinkMacSystemFont,"Inter","Segoe UI",Helvetica,Arial,sans-serif;
  }
  *{box-sizing:border-box;margin:0;padding:0}
  html,body{height:100%}
  body{
    background:var(--bg);
    font-family:var(--sans);
    color:var(--copy);
    -webkit-font-smoothing:antialiased;
    overflow:hidden;
    -webkit-user-select:none;user-select:none;
  }
  .frame{height:100%;display:flex;flex-direction:column;padding:clamp(18px,2.2vw,34px)}
  header{
    display:flex;align-items:baseline;justify-content:space-between;gap:24px;flex:0 0 auto;
    font-size:clamp(9.5px,.78vw,12px);font-weight:500;line-height:1;letter-spacing:.15em;
    padding-bottom:clamp(14px,1.6vw,22px);
    border-bottom:1px solid var(--line);
  }
  .ttl{white-space:nowrap;color:rgba(255,255,255,.78)}
  .ttl b{font-weight:600;color:rgba(255,255,255,.92)}
  .ttl span{color:rgba(255,255,255,.30);margin-left:1.5em}
  .nav{color:rgba(255,255,255,.30);white-space:nowrap}

  .grid{
    position:relative;
    flex:1 1 auto;min-height:0;
    display:grid;
    grid-template-columns:repeat(3,1fr);
    grid-auto-rows:1fr;
  }
  .fig{
    position:relative;min-width:0;min-height:0;
    display:flex;flex-direction:column;justify-content:center;
    padding:clamp(14px,1.35vw,22px) clamp(16px,1.7vw,28px) clamp(12px,1.2vw,20px);
  }
  /* the only chrome: hairlines between the figures */
  .fig::before{
    content:"";position:absolute;left:0;top:0;bottom:0;width:1px;background:var(--line);
  }
  .fig:nth-child(3n+1)::before{display:none}
  .fig:nth-child(n+4)::after{
    content:"";position:absolute;left:0;right:0;top:0;height:1px;background:var(--line);
  }
  .fignum{
    font-size:clamp(9px,.72vw,11.5px);font-weight:500;letter-spacing:.17em;
    color:var(--fig);flex:0 0 auto;
  }
  .art{
    flex:1 1 auto;min-height:0;max-height:min(100%, 52vh);
    margin:clamp(4px,.5vw,10px) 0 clamp(10px,1.1vw,18px);
    display:flex;align-items:center;justify-content:center;
    container-type:size;
  }
  .plate{
    /* square, centred: every study measures itself off one side */
    position:relative;width:min(100cqw,100cqh);height:min(100cqw,100cqh);
    cursor:crosshair;touch-action:none;
    /* a breath of light under the drawing, the way the reference lifts its figures */
    background:radial-gradient(ellipse 60% 58% at 50% 48%, rgba(255,255,255,.038), rgba(255,255,255,0) 70%);
  }
  h3{
    font-size:clamp(13px,1.03vw,16px);font-weight:500;letter-spacing:-.01em;
    color:var(--title);margin-bottom:.42em;flex:0 0 auto;
  }
  .fig p{
    font-size:clamp(12px,.95vw,15px);line-height:1.58;color:var(--copy);
    max-width:34ch;flex:0 0 auto;
  }
  .plate canvas{
    position:absolute;inset:0;width:100%;height:100%;display:block;
    /* its own layer, so repainting the drawing never re-rasterises the copy under it */
    transform:translateZ(0);contain:strict;
  }

  @media (max-width:900px){
    /* stacked: plain block flow, so no grid row ever compresses a figure */
    .grid{display:block;overflow-y:auto;-webkit-overflow-scrolling:touch}
    .fig{display:block;padding:26px 4px 30px}
    .fig::before{display:none}
    .fig:nth-child(n+2)::after{content:"";position:absolute;left:0;right:0;top:0;height:1px;background:var(--line)}
    .art{height:min(78vw,420px);max-height:none;margin:14px 0 20px}
    .plate{width:min(100cqw,100cqh);height:min(100cqw,100cqh)}
    .fig p{max-width:none}
    .nav{display:none}
  }
</style>
</head>
<body>
<div class="frame">
  <header>
    <div class="ttl"><b>TEXT ON A PATH</b><span>SIX MORE STUDIES IN MOTION</span></div>
    <div class="nav">GLOBE · CODEX · CLAUDE · BOOK · CARD · CLOTH</div>
  </header>

  <div class="grid" id="grid">
    <section class="fig">
      <div class="fignum">FIG 06</div>
      <div class="art"><div class="plate"><canvas id="globe"></canvas></div></div>
      <h3>Globe</h3>
      <p>Land drawn as type along the latitude lines. Drag, scroll and click to pin.</p>
    </section>
    <section class="fig">
      <div class="fignum">FIG 07</div>
      <div class="art"><div class="plate"><canvas id="codex"></canvas></div></div>
      <h3>Codex</h3>
      <p>The mark&rsquo;s outline sampled as one path, with a sentence running its full length.</p>
    </section>
    <section class="fig">
      <div class="fignum">FIG 08</div>
      <div class="art"><div class="plate"><canvas id="mark"></canvas></div></div>
      <h3>Claude Code</h3>
      <p>Two marks sharing a cloud of glyphs, paired so the change reads as a turn.</p>
    </section>
    <section class="fig">
      <div class="fignum">FIG 09</div>
      <div class="art"><div class="plate"><canvas id="book"></canvas></div></div>
      <h3>Book</h3>
      <p>The turning leaf is a curved surface, not a door. Drag through five spreads.</p>
    </section>
    <section class="fig">
      <div class="fignum">FIG 10</div>
      <div class="art"><div class="plate"><canvas id="tilt"></canvas></div></div>
      <h3>Card</h3>
      <p>Every glyph placed in card space, pushed through the same perspective divide.</p>
    </section>
    <section class="fig">
      <div class="fignum">FIG 11</div>
      <div class="art"><div class="plate"><canvas id="cloth"></canvas></div></div>
      <h3>Cloth</h3>
      <p>A verlet sheet of letters that shear with the weave. Grab it and pull.</p>
    </section>
  </div>
</div>

<script>
(function(){
  "use strict";

  var FACE = '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif';
  var INK  = '226,228,233';        // soft light type on a near-black ground
  var GROUND = '#08090a';
  var SVGNS = 'http://www.w3.org/2000/svg';

  /* the two marks, straight from simple-icons (24x24 viewBox) */
  var D_OPENAI = "M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z";
  var D_CCODE  = "M21 10.5h3v3h-3v3h-1.5v3H18v-3h-1.5v3H15v-3H9v3H7.5v-3H6v3H4.5v-3H3v-3H0v-3h3v-6h18Zm-15 0h1.5v-3H6Zm10.5 0H18v-3h-1.5z";
  var D_CLAUDE = "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z";
  var LAND_B64 = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPcBAOD/HwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA//+P//f/LwgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4/v/4/////wcAAAAEAPABAAAAfAAAAAAAAAAAAAAAAAAAAADg9w/4/////wEAAP4AAAAAAAAA+AAAAAAAAAAAAAAAAAAAAIAG+Of//////wAAAHwGAAAAAAAAAAMAAAAAAAAAAAAAAACABwAc/4P//////wAAADAAAAAAQAAAAD4AAAAAAAAAAAAAAAAAfMbDcQAA/v///wAAAAAAAADABwAA//8HAMAPAAAAAAAAAABgAAAAAAAA/P///wAAAAAAAABwAADg//8AAAAAAAAAAAAAAADwG457dwcA8P//HwAAAAAAAAAYAAD///9/eAAAAAAAAAAAAAD4/g0H/w8A8P//PwAAAAAAAAAOgOv/////fwD/AAAAAAA/AAAA/B84/v8A8P//LwAAAAD4AAAA4PP//////////wAAAOD///H/+D/3cPgDoP//DwAAAID/BwAAx/v/////////P4AA/P///////////////////////w8AAOcBAAgAAAAAAAAAAAAAgP///////////////////////wcAACYAAAQAAAAAAAAAAAAAgf///////////////////////wMM8AAAAAAAAAAAAAAAAAAAIID/////////e+wPwH8AgA8AAP/5z/////////////////8/ANH///////9/AIALgD8AAAAAwH/+//////////////////9/APj///////8fADwAAD8AAAAA8D/+//////////////////sPAPC/+f////8fAPwAADgAAAAA8D/+////////////////D/wBAMCfAP////8PAPwYAAAAAAAA8H/4//////////////9/DgcAAAAcAOD///8/APw/AAAAAAAQAB7w//////////////8BgAMAAAACAMD/////Afh/AAAAAAA4gBz+/////////////38A4AMAAMAAAMD/////B/z/AAAAAABwwAb+/////////////x8A8AEAAAAAAAD/////P///AwAAAADmgOH//////////////z8A4AAAAAAAAAD+////P/7/BwAAAAD28P////////////////8D4AAAAAAAAAD8////f/7/BwAAAADz+f////////////////8HIAAAAAAAAAD6////////BAAAAABw/v////////////////8EAAAAAAAAAADo//////8jHgAAAACA//////////////////8MAAAAAAAAAADQ//////8OPgAAAADw//////////////////8AAAAAAAAAAADg//////+PIAAAAADA////v////////////38EAAAAAAAAAADg////////AAAAAACA//v/zD/8/////////z8AAAAAAAAAAADg//////8bAAAAAACA//N/gD///////////x8GAAAAAAAAAADw//////8AAAAAAAD+B8c/AD/+/////////wcPAAAAAAAAAADg//////8AAAAAAAD+gx4/DH74/////////wABAAAAAAAAAADg/////x8AAAAAAAD+gbCn///8////////fQABAAAAAAAAAADg/////w8AAAAAAAD/gCDn///4//////9/MgADAAAAAAAAAADA/////w8AAAAAAAD+AADm/3/4//////8/cIABAAAAAAAAAADA/////wcAAAAAAAA44AHC///5////////4+ABAAAAAAAAAACA/////wcAAAAAAACI/wEA4P//////////4OgAAAAAAAAAAAAA/////wMAAAAAAAD4/wAA4P//////////ADYAAAAAAAAAAAAA/P///wEAAAAAAAD+/wEA8P//////////AQcAAAAAAAAAAAAA+P//fwAAAAAAAAD//w8P8P//////////AQEAAAAAAAAAAAAAyP//fwAAAAAAAAD//3//////////////AQAAAAAAAAAAAAAA0P+PYQAAAAAAAAD//////z//////////AwAAAAAAAAAAAAAAoP8HwAAAAAAAAMD/////83/+////////AQAAAAAAAAAAAAAAIP8DwAAAAAAAAOD/////5//I////////AAAAAAAAAAAAAAAAQP4DgAAAAAAAAPD/////z/+A////////AAAAAAAAAAAAAAAAAPwDAAIAAAAAAPD/////z/8ZwP////9/AQAAAAAAAAAAAAAAAPgDQAAAAAAAAPj/////j/9/gP////8fAQAAAAAAAAAAAAAAAPADEAMAAAAAAPz/////v///AP9//P8DAAAAAAAAAAAAAAAAAPADAwwAAAAAAPj/////P/9/APw//B8AAAAAAAAAAAAIAAAAAPCHA8AAAAAAAPj/////P/4/APwP+J8BAAAAAAAAAAAAAAAAAMD/A0YEAAAAAPj/////f/4fAPwH+B8AAwAAAAAAAAAAAAAAAAD/AQAAAAAAAPj/////f/wHAPgD8D8AAwAAAAAAAAAAAAAAAADgHwAAAAAAAPj///////wDAPgAwH8AAQAAAAAAAAAAAAAAAADAHwAAAAAAAPz//////30AAPAAwH8AAAAAAAAAAAAAAAAAAAAAHAAAAAAAAPj//////wsAAPAAgH4AAQAAAAAAAAAAAAAAAAAAGEAAAAAAAPj//////wMBAPAAgHwAAAAAAAAAAAAAAAAAAAAAGPAhAAAAAPD///////cBAOAAgDiABAAAAAAAAAAAAAAAAAAAIPl/AAAAAOD///////8AAGABABBAFAAAAAAAAAAAAAAAAAAAgP7/AQAAAMD///////8AAAABgAAAHAAAAAAAAAAAAAAAAAAAAPz/AQAAAID///////8AAAABAAEgCAAAAAAAAAAAAAAAAAAAAPz/HwAAAAD/8P///38AAAAAAANgAAAAAAAAAAAAAAAAAAAAAPz/fwAAAAAAoP///z8AAAAAYAd4AAAAAAAAAAAAAAAAAAAAAPz/fwAAAAAAAP///x8AAAAAwAY8AAAAAAAAAAAAAAAAAAAAAP7//wAAAAAAAP///w8AAAAAgAc+AAAAAAAAAAAAAAAAAAAAAP///wAAAAAAAP///wcAAAAAgIM/TwAAAAAAAAAAAAAAAAAAAP///wEAAAAAgP///wMAAAAAAIc/QAQAAAAAAAAAAAAAAAAAgP///w8AAAAAgP///wEAAAAAAA6fAUQAAAAAAAAAAAAAAAAAAP////8AAAAAAP///wAAAAAAAB6ewuwDAgAAAAAAAAAAAAAAgP////8DAAAAAP7//wAAAAAAABwAAvAPAgAAAAAAAAAAAAAAgP////8PAAAAAPz/fwAAAAAAABAAAMCfAQAAAAAAAAAAAAAAAP////8PAAAAAPz//wAAAAAAAOADAIA/MAAAAAAAAAAAAAAAAP7///8PAAAAAPz/fwAAAAAAAAAPAMBngAAAAAAAAAAAAAAAAP7///8PAAAAAPz//wAAAAAAAAAACABAAAAAAAAAAAAAAAAAAPz///8HAAAAAPj//wAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAPz///8DAAAAAPj//wAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAPj///8BAAAAAPz//4AAAAAAAAAAAB8GAAAAAAAAAAAAAAAAAPj///8BAAAAAPz//8EAAAAAAAAAIB8OAAAAAAAAAAAAAAAAAPD///8BAAAAAP7//+AAAAAAAAAA+B8OACAAAAAAAAAAAAAAAMD///8BAAAAAP7/f/gAAAAAAAAA/H8eAAAAAAAAAAAAAAAAAID///8AAAAAAP7/H/gAAAAAAAAA/P8fAABAAAAAAAAAAAAAAAD///8AAAAAAPz/D3AAAAAAAAAA/v8/AAAAAAAAAAAAAAAAAAD///8AAAAAAPj/D3gAAAAAAADA//9/AAgAAAAAAAAAAAAAAAD//38AAAAAAPj/DzgAAAAAAADw////AAAAAAAAAAAAAAAAAAD//x8AAAAAAPD/DzgAAAAAAAD4////AQAAAAAAAAAAAAAAAAD//wMAAAAAAPD/DzgAAAAAAAD4////AwAAAAAAAAAAAAAAAID//wEAAAAAAPD/AwAAAAAAAAD4////AwAAAAAAAAAAAAAAAID//wEAAAAAAPD/AwAAAAAAAAD4////BwAAAAAAAAAAAAAAAID//wEAAAAAAOD/AwAAAAAAAAD4////BwAAAAAAAAAAAAAAAID//wAAAAAAAOD/AQAAAAAAAADw////BwAAAAAAAAAAAAAAAID//wAAAAAAAMD/AAAAAAAAAADw////AwAAAAAAAAAAAAAAAID/fwAAAAAAAIB/AAAAAAAAAADgf/z/AwAAAAAAAAAAAAAAAID/PwAAAAAAAIA/AAAAAAAAAADgB/D/AQAAAAAAAAAAAAAAAMD/HQAAAAAAAIABAAAAAAAAAADwAND/AQAAAAAAAAAAAAAAAMD/AwAAAAAAAAAAAAAAAAAAAAAAAID/AAAIAAAAAAAAAAAAAMD/BwAAAAAAAAAAAAAAAAAAAAAAAAD/AAAQAAAAAAAAAAAAAOD/AwAAAAAAAAAAAAAAAAAAAAAAAAA+AABwAAAAAAAAAAAAAOA/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAOA/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAOAPAAAAAAAAAAAAAAAAAAAAAAAAAABwAAAGAAAAAAAAAAAAAMAPAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAADAAAAAAAAAAAAAPAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMABAAAAAAAAAAAAAPADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOABAAAAAAAAAAAAAPAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPADAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAPABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPCBAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAA+AABAAJ8//j8PAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAPD/fwD///////8/AAAAAAAAAAAAAAAAAIA+AAAAAAAAAAAAPP///8D/////////HwAAAAAAAAAAAAAAAIA9AAAAAAAA8Pz/////P/j//////////wMAAAAAAAAAAMAAAPB9AAAAAID/////////P/7///////////8BAAAAAAAAAOABAwB/AAAAAPD///////////////////////8AAAAAAFACPoD///9/AAAAAPD//////////////////////x8AAAAA+P////////8HAAAAAP///////////////////////wcAAAAA/v///////wMAAAAA/v///////////////////////wcAAAD8/////////w8AAA7w/////////////////////////w8AAMAB/////////wMAgB84/////////////////////////wEAAAAA/P///////3/w4AcA/////////////////////////wAAAADg//////////8/gM///////////////////////////wMAAADg/////////////f///////////////////////////z8A7wMA/v////////////////////////////////////////8/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";

  /* 64 ready-made ink strings — assigning a freshly built rgba() per glyph is what
     drags a page like this from 60fps to 20 */
  /* on black the eye needs far less ink, so every alpha runs through SOFT first */
  var SOFT = 0.88;
  var INK64 = [];
  for (var q0=0;q0<64;q0++) INK64.push('rgba(' + INK + ',' + (q0/63*SOFT).toFixed(4) + ')');
  function ink(a){ return INK64[a <= 0 ? 0 : a >= 1 ? 63 : (a*63)|0]; }

  /* ---------- shared plumbing ---------- */
  function rng(seed){
    var s = seed >>> 0;
    return function(){
      s ^= s << 13; s >>>= 0;
      s ^= s >> 17;
      s ^= s << 5;  s >>>= 0;
      return s / 4294967296;
    };
  }

  /* one canvas per figure, sized to the drawing only. A single board spanning the
     whole grid also had to composite every empty text row, and this page is
     pixel-bound, so trimming that area is the cheapest frame you can buy. */
  function Surface(el){
    this.el = el; this.ctx = el.getContext('2d');
    this.w = 0; this.h = 0; this.dpr = 1;
    this.resize();
  }
  Surface.prototype.resize = function(){
    var r = this.el.getBoundingClientRect();
    if (!r.width || !r.height) return false;
    var dpr = Math.min(1.5, window.devicePixelRatio || 1);
    var w = Math.round(r.width*dpr), h = Math.round(r.height*dpr);
    if (w === this.el.width && h === this.el.height && this.w === r.width) return false;
    this.el.width = w; this.el.height = h;
    this.w = r.width; this.h = r.height; this.dpr = dpr;
    this.ctx.setTransform(dpr,0,0,dpr,0,0);
    return true;
  };
  /* panels are no longer square, so scale off the short side and centre on the box */
  Object.defineProperty(Surface.prototype, 'u', {
    get: function(){ return this.w < this.h ? this.w : this.h; }
  });
  Surface.prototype.base = function(){
    this.ctx.setTransform(this.dpr,0,0,this.dpr,0,0);
  };

  /* Chrome rasterises and caches a glyph per (font, transform). A thousand distinct
     rotations a frame is a thousand cache misses — 24ms. Snapping every angle to one of
     64 steps makes them all hits and costs 8ms. The 5.6-degree error is invisible. */
  var QA = Math.PI*2/64;
  function qang(a){ return Math.round(a/QA)*QA; }

  function local(canvas, e){
    var r = canvas.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  }

  /* ---------- svg path helpers ---------- */
  var scratch = document.createElementNS(SVGNS, 'svg');
  scratch.setAttribute('viewBox','0 0 24 24');
  scratch.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden;pointer-events:none';
  document.body.appendChild(scratch);

  /* dense samples of a path, split wherever the pen jumps between subpaths */
  function polylines(d, step){
    var el = document.createElementNS(SVGNS,'path');
    el.setAttribute('d', d);
    scratch.appendChild(el);
    var L = el.getTotalLength();
    var n = Math.max(64, Math.ceil(L/step));
    var lines = [], cur = [], prev = null;
    for (var i=0;i<=n;i++){
      var p = el.getPointAtLength(L*i/n);
      if (prev){
        var jump = Math.hypot(p.x-prev.x, p.y-prev.y);
        if (jump > step*6){ if (cur.length>3) lines.push(cur); cur = []; }
      }
      cur.push({x:p.x, y:p.y});
      prev = p;
    }
    if (cur.length>3) lines.push(cur);
    scratch.removeChild(el);

    /* arc-length parameterise each run */
    return lines.map(function(pts){
      var acc = [0];
      for (var i=1;i<pts.length;i++)
        acc.push(acc[i-1] + Math.hypot(pts[i].x-pts[i-1].x, pts[i].y-pts[i-1].y));
      return { pts:pts, acc:acc, len:acc[acc.length-1] };
    }).filter(function(l){ return l.len > step*8; });
  }

  var _pt = {x:0, y:0, a:0};
  function atLength(line, t){
    var len = line.len;
    t = t - Math.floor(t/len)*len;                 // wrap
    var a = line.acc, lo = 0, hi = a.length-1;
    while (lo < hi-1){ var m = (lo+hi)>>1; if (a[m] <= t) lo = m; else hi = m; }
    var seg = a[hi]-a[lo] || 1, f = (t-a[lo])/seg;
    var p0 = line.pts[lo], p1 = line.pts[hi];
    _pt.x = p0.x + (p1.x-p0.x)*f;
    _pt.y = p0.y + (p1.y-p0.y)*f;
    _pt.a = Math.atan2(p1.y-p0.y, p1.x-p0.x);
    return _pt;
  }

  /* points scattered evenly inside a filled path, centred and normalised to its own
     bounding box so a short wide mark and a tall one both fill the same frame */
  function fitPoints(d, spacing, rand, rule){
    var S = 320;
    var c = document.createElement('canvas'); c.width = c.height = S;
    var x = c.getContext('2d');
    x.setTransform(S/24,0,0,S/24,0,0);
    x.fillStyle = '#000';
    x.fill(new Path2D(d), rule || 'evenodd');
    var data = x.getImageData(0,0,S,S).data;
    var inside = [];
    for (var i=0;i<S*S;i++) if (data[i*4+3] > 128) inside.push(i);
    var out = [];
    if (!inside.length) return out;
    var hit = new Uint8Array(S*S);
    var x0=1e9,x1=-1e9,y0=1e9,y1=-1e9;
    for (var m=0;m<inside.length;m++){
      var gx = inside[m] % S, gy = (inside[m] / S)|0;
      hit[inside[m]] = 1;
      if (gx<x0)x0=gx; if (gx>x1)x1=gx; if (gy<y0)y0=gy; if (gy>y1)y1=gy;
    }
    var span = Math.max(x1-x0, y1-y0) || 1;
    var mx = (x0+x1)/2, my = (y0+y1)/2;

    /* jittered grid at the glyph's own advance, so letters sit shoulder to shoulder
       without stacking into an unreadable smear */
    var cell = Math.max(1.6, spacing*span);
    for (var gy2 = y0; gy2 < y1; gy2 += cell){
      for (var gx2 = x0; gx2 < x1; gx2 += cell){
        var jx = gx2 + rand()*cell, jy = gy2 + rand()*cell;
        var ix = jx|0, iy = jy|0;
        if (ix<0||ix>=S||iy<0||iy>=S || !hit[iy*S+ix]) continue;
        out.push({ x: (jx - mx)/span, y: (jy - my)/span });
      }
    }
    return out;
  }

  /* a pool of light that re-adds a bitmap's own luminance through a soft mask, so
     type under the cursor thickens instead of the paper just going grey */
  var glowC = null, glowX = null;
  function readLight(ctx, u, look, paint){
    if (!look) return;
    var R = u*0.22, d = 2;
    var w = Math.ceil(R*2*d);
    if (!glowC){ glowC = document.createElement('canvas'); glowX = glowC.getContext('2d'); }
    if (glowC.width !== w){ glowC.width = glowC.height = w; }
    glowX.setTransform(d,0,0,d,0,0);
    glowX.globalCompositeOperation = 'source-over';
    glowX.clearRect(0,0,R*2,R*2);
    glowX.save();
    glowX.translate(-(look.x-R), -(look.y-R));
    paint(glowX);
    glowX.restore();
    var g = glowX.createRadialGradient(R,R,0,R,R,R);
    g.addColorStop(0,   'rgba(0,0,0,1)');
    g.addColorStop(0.55,'rgba(0,0,0,.62)');
    g.addColorStop(1,   'rgba(0,0,0,0)');
    glowX.globalCompositeOperation = 'destination-in';
    glowX.fillStyle = g;
    glowX.fillRect(0,0,R*2,R*2);
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    ctx.globalAlpha = 0.85;
    ctx.drawImage(glowC, look.x-R, look.y-R, R*2, R*2);
    ctx.restore();
  }

  /* ---------- 06 / GLOBE ---------- */
  var Globe = (function(){
    var cv = document.getElementById('globe');
    var s  = new Surface(cv);
    var MW = 288, MH = 144, land;
    (function(){
      var bin = atob(LAND_B64);
      land = new Uint8Array(bin.length);
      for (var i=0;i<bin.length;i++) land[i] = bin.charCodeAt(i);
    })();
    function isLand(lon, lat){
      var gx = Math.floor((lon+180)/360*MW), gy = Math.floor((90-lat)/180*MH);
      if (gx<0||gx>=MW||gy<0||gy>=MH) return false;
      var b = gy*MW+gx;
      return (land[b>>3] >> (b&7)) & 1;
    }

    var PHRASE = "everypointonthisballisapathbacktoanotherone";
    var nodes = [];
    (function(){
      /* the halftone grid is fine enough to draw a coastline; every third land cell
         also carries a letter, which is as dense as type can get and stay readable */
      var LAT_STEP = 3.05, k = 0, run = 0, sea3 = 0;
      for (var lat = -86; lat <= 86; lat += LAT_STEP){
        var rl = Math.cos(lat*Math.PI/180);
        var n  = Math.max(1, Math.round(98*rl));
        for (var i=0;i<n;i++){
          var lon = -180 + 360*i/n;
          var l = isLand(lon, lat);
          if (!l && (sea3++ % 2)) continue;          // half the ocean carries the whole sphere
          var letter = 0;
          if (l && (run++ % 2 === 0)) letter = PHRASE.charAt(k++ % PHRASE.length);
          nodes.push({
            lat: lat*Math.PI/180, lon: lon*Math.PI/180,
            land: l, c: letter
          });
        }
      }
    })();

    var spin = 2.1, vel = 0.16, hover = false, drag = null, tilt = -0.36, vtilt = 0;
    var land8 = [];
    var zoom = 1, zoomT = 1, pins = [], look = null;
    var sea = [], soil = [];

    cv.addEventListener('pointerenter', function(){ hover = true; });
    cv.addEventListener('pointerleave', function(){ hover = false; });
    cv.addEventListener('pointerdown', function(e){
      drag = local(cv, e); drag.moved = false; 
      cv.setPointerCapture(e.pointerId);
    });
    cv.addEventListener('pointermove', function(e){
      var p = local(cv, e);
      look = p;
      if (!drag) return;
      vel  = (p.x - drag.x) / s.u * 9;
      vtilt = -(p.y - drag.y) / s.u * 6;
      tilt  = Math.max(-1.15, Math.min(1.15, tilt + vtilt*0.016));
      drag = p; drag.moved = true;
    });
    function release(e){
      if (drag && !drag.moved){                    // a click that never became a drag drops a pin
        var g = unproject(drag.x, drag.y);
        if (g){ pins.push({lat:g.lat, lon:g.lon, t:performance.now()}); if (pins.length>7) pins.shift(); }
      }
      drag = null;
    }
    cv.addEventListener('pointerup', release);
    cv.addEventListener('pointercancel', function(){ drag = null; });
    cv.addEventListener('wheel', function(e){
      e.preventDefault();
      zoomT = Math.max(0.85, Math.min(2.6, zoomT * Math.exp(-e.deltaY*0.0016)));
    }, {passive:false});

    /* screen point -> the lat/lon it is sitting on, or null if it missed the globe */
    var view = {cx:0, cy:0, R:1, cs:1, sn:0, ct:1, st:0};
    function unproject(px, py){
      var x1 = (px - view.cx)/view.R, y2 = (view.cy - py)/view.R;
      var q = 1 - x1*x1 - y2*y2;
      if (q <= 0.002) return null;
      var z2 = Math.sqrt(q);
      var y0 =  y2*view.ct + z2*view.st;
      var z1 = -y2*view.st + z2*view.ct;
      var x0 =  x1*view.cs + z1*view.sn;
      var z0 = -x1*view.sn + z1*view.cs;
      return { lat: Math.asin(Math.max(-1, Math.min(1, y0))), lon: Math.atan2(z0, x0) };
    }

    function draw(now, dt){
      var ctx = s.ctx;
      ctx.clearRect(0,0,s.w,s.h);

      zoom += (zoomT - zoom) * Math.min(1, dt/180);
      if (!drag){
        var idle = hover ? 0.045 : 0.16;           // slow down under the hand so it can be aimed
        vel += (idle - vel) * Math.min(1, dt/900);       // coast back to the idle drift
        vtilt *= Math.pow(0.90, dt/16);
        tilt += vtilt*dt/1000;
        tilt += (-0.36 - tilt) * Math.min(1, dt/4000);
      }
      spin += vel * dt/1000;

      var cx = s.w/2, cy = s.h/2 + s.u*0.035;
      var R  = s.u*0.318*zoom;
      var fs = s.u*0.0275*Math.pow(zoom, 0.72);
      var cs = Math.cos(spin), sn = Math.sin(spin);
      var ct = Math.cos(tilt), st = Math.sin(tilt);
      view.cx = cx; view.cy = cy; view.R = R; view.cs = cs; view.sn = sn; view.ct = ct; view.st = st;

      /* a soft pool of light under the cursor, so the type near it reads */
      var lx = -1e9, ly = -1e9, lr = s.u*0.20, lr2 = lr*lr;
      if (look && !drag){ lx = look.x; ly = look.y; }

      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';

      /* dots first, in depth passes — setting ctx.font per glyph is what kills the frame */
      sea.length = 0; soil.length = 0;
      for (var i=0;i<nodes.length;i++){
        var nd = nodes[i];
        var cl = Math.cos(nd.lat);
        var x0 = cl*Math.cos(nd.lon), y0 = Math.sin(nd.lat), z0 = cl*Math.sin(nd.lon);
        var x1 =  x0*cs - z0*sn,  z1 = x0*sn + z0*cs;
        var y2 =  y0*ct - z1*st,  z2 = y0*st + z1*ct;
        if (z2 <= 0.02) continue;                        // solid earth: far side is hidden

        var px = cx + x1*R, py = cy - y2*R;      // canvas y grows downward
        var dx = px-lx, dy = py-ly;
        var glow = (dx*dx + dy*dy < lr2) ? (1 - Math.sqrt(dx*dx+dy*dy)/lr) : 0;
        if (!nd.land){ sea.push(px, py, Math.min(0.999, z2 + glow*0.55)); continue; }
        if (!nd.c){ soil.push(px, py, Math.min(0.999, z2 + glow*0.55)); continue; }

        /* tangent to this parallel, so the type runs east */
        var tx0 = -Math.sin(nd.lon), tz0 = Math.cos(nd.lon);
        var tx1 = tx0*cs - tz0*sn, tz1 = tx0*sn + tz0*cs;
        var ang = qang(Math.atan2(tz1*st, tx1));
        var b = Math.min(7, Math.max(0, ((Math.min(0.999, z2 + glow*0.6))*7.99)|0));
        (land8[b] || (land8[b] = [])).push(px, py, ang, nd.c, 0);
      }

      /* sea and land as a halftone, six depth passes each, batched into one path per pass */
      var dmin = Math.max(0.7, s.u*0.0029);
      function dots(list, base, gain, grow){
        for (var lvl=0; lvl<6; lvl++){
          var z = (lvl+0.5)/6, dsz = dmin*grow*(0.55 + 0.75*z);
          ctx.fillStyle = ink(base + gain*z);
          ctx.beginPath();
          for (var q=0;q<list.length;q+=3){
            var lv = list[q+2] >= 1 ? 5 : (list[q+2]*6)|0;
            if (lv !== lvl) continue;
            ctx.rect(list[q]-dsz/2, list[q+1]-dsz/2, dsz, dsz);
          }
          ctx.fill();
        }
      }
      dots(sea,  0.10, 0.22, 1.0);
      dots(soil, 0.34, 0.46, 1.7);

      /* land: eight size buckets, so ctx.font is touched eight times instead of a thousand */
      for (var bi=0; bi<8; bi++){
        var arr = land8[bi];
        if (!arr || !arr.length) continue;
        var zb = (bi+0.5)/8;
        ctx.font = 'bold ' + (fs*(0.42 + 0.58*zb)).toFixed(2) + 'px ' + FACE;
        ctx.fillStyle = ink(0.28 + 0.72*Math.pow(zb, 0.6));
        for (var t=0;t<arr.length;t+=5){
          ctx.save();
          ctx.translate(arr[t], arr[t+1]);
          ctx.rotate(arr[t+2]);
          ctx.fillText(arr[t+3], 0, 0);
          ctx.restore();
        }
        arr.length = 0;
      }

      /* pins ride the surface they were dropped on */
      for (var pi=0; pi<pins.length; pi++){
        var pn = pins[pi];
        var pcl = Math.cos(pn.lat);
        var ax = pcl*Math.cos(pn.lon), ay = Math.sin(pn.lat), az = pcl*Math.sin(pn.lon);
        var bx1 = ax*cs - az*sn, bz1 = ax*sn + az*cs;
        var by2 = ay*ct - bz1*st, bz2 = ay*st + bz1*ct;
        if (bz2 <= 0.02) continue;
        var ppx = cx + bx1*R, ppy = cy - by2*R;
        var age = (now - pn.t)/1000;
        var pop = Math.min(1, age/0.22);
        var rr2 = s.u*0.016*(0.4 + 0.6*pop)*(0.55 + 0.45*bz2);
        ctx.beginPath();
        ctx.arc(ppx, ppy, rr2, 0, Math.PI*2);
        ctx.strokeStyle = ink(0.30 + 0.55*bz2);
        ctx.lineWidth = Math.max(0.7, s.u*0.0022);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(ppx, ppy, Math.max(0.7, rr2*0.22), 0, Math.PI*2);
        ctx.fillStyle = ink(0.45 + 0.55*bz2);
        ctx.fill();
        if (age < 0.9){                                   // a ring that opens once, on landing
          var w2 = 1 - age/0.9;
          ctx.beginPath();
          ctx.arc(ppx, ppy, rr2 + (1-w2)*s.u*0.05, 0, Math.PI*2);
          ctx.strokeStyle = ink(0.55*w2*w2);
          ctx.lineWidth = Math.max(0.6, s.u*0.0016);
          ctx.stroke();
        }
      }
    }
    return { s:s, draw:draw };
  })();

  /* ---------- 07 / CODEX — type running the mark's outline ---------- */
  var Codex = (function(){
    var cv = document.getElementById('codex');
    var s  = new Surface(cv);
    var lines = polylines(D_OPENAI, 0.05);
    var PHRASE = "codexreadsthepathandwritesitbackagain";
    var flow = 0, speed = 1, hover = false, look = null;
    var burst = [];                                   // letters kicked loose by a click

    cv.addEventListener('pointerenter', function(){ hover = true; });
    cv.addEventListener('pointerleave', function(){ hover = false; look = null; });
    cv.addEventListener('pointermove', function(e){ look = local(cv, e); });
    cv.addEventListener('pointerdown', function(){
      
      burst.push({ t:performance.now() });
      if (burst.length > 3) burst.shift();
    });

    function draw(now, dt){
      var ctx = s.ctx;
      ctx.clearRect(0,0,s.w,s.h);

      speed += ((hover ? 3.1 : 1) - speed) * Math.min(1, dt/280);
      flow  += speed * dt/1000 * 1.9;

      var span = s.u*0.62;                            // the 24-unit mark, in card px
      var k = span/24;
      var cx = s.w/2 - 12*k, cy = s.h/2 + s.u*0.02 - 12*k;
      var fs = s.u*0.0250, step = fs*0.76/k;          // spacing measured in path units

      /* the most recent click sends a shove outward that settles back */
      var kick = 0, kickAge = 0;
      if (burst.length){
        kickAge = (now - burst[burst.length-1].t)/1000;
        kick = Math.max(0, 1 - kickAge/1.1);
        kick = kick*kick;
      }

      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.font = 'bold ' + fs.toFixed(2) + 'px ' + FACE;
      var base = 0.92 - kick*0.35;
      ctx.fillStyle = ink(base);
      var lit = -1;                                  /* quantised, so fillStyle is touched rarely */
      var lx = look ? look.x : -1e9, ly = look ? look.y : -1e9;
      var LR = s.u*0.22, LR2 = LR*LR;

      var idx = 0;
      for (var li=0; li<lines.length; li++){
        var line = lines[li];
        var n = Math.max(3, Math.round(line.len/step));
        var sp = line.len/n;
        for (var i=0;i<n;i++){
          var q = atLength(line, i*sp + flow);
          var px = cx + q.x*k, py = cy + q.y*k;

          if (kick > 0){
            var dx = px - (cx+12*k), dy = py - (cy+12*k);
            var d = Math.hypot(dx,dy) || 1;
            var wob = Math.sin(i*1.7 + li*2.3);
            px += dx/d * kick * s.u*0.11 * (0.6+0.5*wob);
            py += dy/d * kick * s.u*0.11 * (0.6+0.5*wob);
          }

          var gd = 0;
          if (look){
            var ddx = px-lx, ddy = py-ly, dd = ddx*ddx + ddy*ddy;
            if (dd < LR2) gd = 1 - Math.sqrt(dd)/LR;
          }
          var lv = (gd*5)|0;
          if (lv !== lit){ lit = lv; ctx.fillStyle = ink(base + (1-base)*((lv+ (lv?0.5:0))/5)); }
          ctx.save();
          ctx.translate(px, py);
          ctx.rotate(qang(q.a));
          ctx.fillText(PHRASE.charAt(idx++ % PHRASE.length), 0, 0);
          ctx.restore();
        }
      }
    }
    return { s:s, draw:draw };
  })();

  /* ---------- 08 / CLAUDE CODE — a glyph cloud that morphs between marks ---------- */
  var Mark = (function(){
    var cv = document.getElementById('mark');
    var s  = new Surface(cv);
    var SPAN = 0.60, FS = 0.0180;                 // fractions of the card
    var GAP  = (FS*0.60*1.06)/SPAN;               // one glyph advance, in shape units
    var rand = rng(9152026);
    var A = fitPoints(D_CLAUDE, GAP, rand, 'evenodd');   // claude burst — the resting mark
    var B = fitPoints(D_CCODE,  GAP, rand, 'evenodd');   // claude code
    var CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>/\\{}[]()=+-*#$%&@?!";
    var glyphs = [];
    for (var i=0;i<Math.max(A.length,B.length);i++){
      glyphs.push({
        c: CHARS.charAt((rand()*CHARS.length)|0),
        ph: rand()*Math.PI*2,
        sp: 0.55 + rand()*0.9,
        wob: 0.4 + rand()*0.8
      });
    }
    /* keep the two clouds paired by angle so the morph reads as a rotation, not a shuffle */
    function order(set){
      return set.map(function(p,i){ return {i:i, a:Math.atan2(p.y, p.x), r:Math.hypot(p.x,p.y)}; })
                .sort(function(u,v){ return u.a - v.a || u.r - v.r; })
                .map(function(o){ return o.i; });
    }
    var oa = order(A), ob = order(B);
    var M = Math.min(A.length, B.length);
    var pair = [];
    for (var j=0;j<M;j++)
      pair.push([ A[oa[(j*A.length/M)|0]], B[ob[(j*B.length/M)|0]] ]);

    var m = 0, target = 0, hover = null, live = true;

    cv.addEventListener('pointerdown', function(){ target = 1 - target;  live = true; });
    cv.addEventListener('pointermove', function(e){ hover = local(cv, e); live = true; });
    cv.addEventListener('pointerleave', function(){ hover = null; live = true; });

    function draw(now, dt){
      var ctx = s.ctx;
      var moving = hover || Math.abs(target-m) > 1e-4;
      if (!moving && !live) return;              // settled: the last frame stays on screen
      live = !!moving;
      ctx.clearRect(0,0,s.w,s.h);

      m += (target - m) * Math.min(1, dt/460);
      var e = m<0.5 ? 4*m*m*m : 1 - Math.pow(-2*m+2,3)/2;   // easeInOutCubic

      var span = s.u*SPAN;
      var cx = s.w/2, cy = s.h/2 + s.u*0.02;
      var fs = s.u*FS;
      var t  = now/1000;
      var travel = 4*e*(1-e);                                // biggest scatter mid-flight

      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.font = 'bold ' + fs.toFixed(2) + 'px ' + FACE;
      ctx.fillStyle = ink(0.88);
      var dirty = false;

      for (var i=0;i<pair.length;i++){
        var g = glyphs[i], p = pair[i];
        var ux = p[0].x + (p[1].x - p[0].x)*e;
        var uy = p[0].y + (p[1].y - p[0].y)*e;
        var px = cx + ux*span, py = cy + uy*span;

        /* a slow breath at rest, an arc while morphing */
        px += Math.sin(t*g.sp + g.ph) * s.u*0.0035 * g.wob;
        py += Math.cos(t*g.sp*0.9 + g.ph) * s.u*0.0035 * g.wob;
        py -= travel * Math.sin(g.ph) * s.u*0.05;

        var a = 0.88;
        if (hover){
          var dx = px-hover.x, dy = py-hover.y, d2 = dx*dx+dy*dy;
          var rr = s.u*0.10;
          if (d2 < rr*rr){
            var d = Math.sqrt(d2) || 1, push = (1 - d/rr);
            px += dx/d * push*push * s.u*0.055;
            py += dy/d * push*push * s.u*0.055;
            a = 0.88 - 0.35*push;
          }
        }
        if (a !== 0.88){ ctx.fillStyle = ink(a); dirty = true; }
        else if (dirty){ ctx.fillStyle = ink(0.88); dirty = false; }
        ctx.fillText(g.c, px, py);
      }
    }
    return { s:s, draw:draw, reset:function(){ live = true; } };
  })();

  /* ---------- 09 / BOOK ----------
     The leaf that turns is a curved surface, not a door: a chain of strips whose
     tangent sweeps through an arc, so the paper bends the way paper bends. Lifted
     from the approach in github.com/MengTo/sketchbook. */
  var Book = (function(){
    var cv = document.getElementById('book');
    var s  = new Surface(cv);
    /* ten pages, five spreads — a real end in both directions */
    var PAGES = [
      "A line is the shortest promise between two points. A letter set on it agrees to keep going. " +
      "Set enough of them down and the promise becomes a sentence, which is only a line that learned " +
      "to mean something on the way.",

      "Curve the line and the letters do not complain. Each one turns a little further than the last, " +
      "and the eye, which was following the shape anyway, reads the turning as intent. A spiral says " +
      "patience. A straight rule says hurry.",

      "Type bends but it does not break. A letter rotated past ninety degrees is still a letter; it " +
      "has simply become a direction as well. Past a hundred and eighty it is upside down, which is " +
      "not an error but a return trip.",

      "Give a page enough letters and it stops being a surface. It becomes a route, and the margin " +
      "becomes the place where the route pauses for breath. The gutter is the fold in the middle of " +
      "the thought.",

      "A book is a path folded so that it fits in the hand. Every fold is a promise that the line " +
      "resumes on the other side, and it always does, in the same voice, one leaf later.",

      "Turning a page is not a cut. It is a hinge. The paper lifts, curves through an arc it has to " +
      "invent on the spot, and lands with the sentence still running underneath it.",

      "What bends is never the letter itself but the surface it rides. Hold the sheet still and the " +
      "type is rigid. Move the sheet and every glyph inherits the movement without being asked.",

      "The eye reads the path before it reads the word. That is why a ring of type feels like an " +
      "announcement and a column feels like an argument, before a single letter has been identified.",

      "Set a sentence on a sphere and it becomes a latitude. Set it on cloth and it becomes weather. " +
      "The words do not change; the ground underneath them does, and that turns out to be enough.",

      "Every letter is a small machine for holding a shape still. Arrange them along something that " +
      "moves and you have built the only machine that reads back: a line that knows where it is going."
    ];
    var LAST = (PAGES.length/2 | 0) - 1;          /* highest spread index */

    var ROWS = 15, N = 13, BETA = 0.62;
    var spread = 0, t = 0, dir = 1, drag = null, spring = null;
    var idle = 0, touched = false, autoDir = 1, look = null;

    /* each half-page is rendered once into its own bitmap and reused every frame */
    var tex = {}, texKey = '';
    function pageTex(page, w, h){
      var k = page + '@' + (w|0) + 'x' + (h|0);
      if (tex[k]) return tex[k];
      var c = document.createElement('canvas');
      var d = Math.min(2, window.devicePixelRatio || 1);
      c.width = Math.max(1, Math.round(w*d)); c.height = Math.max(1, Math.round(h*d));
      var x = c.getContext('2d');
      x.setTransform(d,0,0,d,0,0);
      /* paper has to be opaque or the leaf lets the page beneath read through it */
      x.fillStyle = GROUND; x.fillRect(0,0,w,h);
      x.fillStyle = 'rgba(255,255,255,.028)'; x.fillRect(0,0,w,h);
      var pad = w*0.11, iw = w - pad*2;
      var fs = iw*0.062, lh = (h - pad*1.6)/(ROWS+0.6);
      x.font = fs.toFixed(2) + 'px ' + FACE;
      x.textBaseline = 'middle'; x.textAlign = 'left';
      x.fillStyle = ink(0.80);
      var words = (PAGES[page] || '').split(' ');
      var i = 0, r = 0, line;
      while (i < words.length && r < ROWS){
        line = '';
        while (i < words.length){
          var nx = line ? line + ' ' + words[i] : words[i];
          if (line && x.measureText(nx).width > iw) break;
          line = nx; i++;
        }
        x.fillText(line, pad, pad*0.9 + lh*(r+0.5));
        r++;
      }
      x.font = (fs*0.9).toFixed(2) + 'px ' + FACE;
      x.textAlign = 'center';
      x.fillStyle = ink(0.42);
      x.fillText(String(page+1), w/2, h - pad*0.42);
      tex[k] = c;
      return c;
    }

    function canTurn(d){ return spread + d >= 0 && spread + d <= LAST; }
    function begin(d){
      if (spring || drag) return false;
      if (!canTurn(d)) return false;
      dir = d; t = 0;
      return true;
    }
    cv.addEventListener('pointerdown', function(e){
      var p = local(cv, e);
      touched = true;
      if (begin(p.x > s.w/2 ? 1 : -1)){
        drag = { x:p.x, w:s.w };
        cv.setPointerCapture(e.pointerId);
      }
    });
    cv.addEventListener('pointermove', function(e){
      var p = local(cv, e);
      look = p;
      if (!drag) return;
      var span = s.u*0.42;
      var d = dir > 0 ? (drag.x - p.x) : (p.x - drag.x);
      t = Math.max(0, Math.min(1, d/span));
    });
    cv.addEventListener('pointerleave', function(){ look = null; });
    function letGo(){
      if (!drag) return;
      drag = null;
      spring = { to: t > 0.42 ? 1 : 0 };
    }
    cv.addEventListener('pointerup', letGo);
    cv.addEventListener('pointercancel', letGo);

    var settled = false;
    function draw(now, dt){
      var ctx = s.ctx;

      if (!drag){
        if (spring){
          t += (spring.to - t) * Math.min(1, dt/150);
          if (Math.abs(spring.to - t) < 0.004){
            t = spring.to;
            if (t === 1) spread = Math.max(0, spread + dir);
            t = 0; spring = null; settled = false;
          }
        } else if (!touched){
          idle += dt;                                  /* leafs back and forth until you take over */
          if (idle > 3800){
            idle = 0;
            if (!canTurn(autoDir)) autoDir = -autoDir;
            if (begin(autoDir)) spring = { to: 1 };
          }
        }
      }
      var moving = drag || spring || t > 0 || look;
      if (settled && !moving) return;
      settled = !moving;

      ctx.clearRect(0,0,s.w,s.h);

      var BW = s.u*0.86, BH = s.u*0.60;
      var bx = (s.w-BW)/2, by = s.h/2 - BH/2 + s.u*0.02;
      var HW = BW/2, spineX = bx + HW, cyB = by + BH/2;
      var F = BW*1.9;

      var L = spread*2, R = spread*2 + 1;
      var from = dir > 0 ? R : L, to = dir > 0 ? R + 1 : L - 1;
      var turning = t > 0.0005;
      var stayL = turning && dir < 0 ? to : L;      /* at rest the spread is just L | R */
      var stayR = turning && dir > 0 ? to : R;

      /* the block */
      ctx.beginPath();
      if (ctx.roundRect) ctx.roundRect(bx, by, BW, BH, s.u*0.006); else ctx.rect(bx,by,BW,BH);
      ctx.fillStyle = 'rgba(255,255,255,.022)';
      ctx.fill();
      ctx.strokeStyle = ink(0.18);
      ctx.lineWidth = Math.max(0.6, s.u*0.0016);
      ctx.stroke();

      /* the two pages that stay put */
      ctx.drawImage(pageTex(stayL, HW, BH), bx, by, HW, BH);
      ctx.drawImage(pageTex(stayR, HW, BH), spineX, by, HW, BH);

      if (turning){
        var th = Math.PI*t, beta = BETA*Math.sin(Math.PI*t);
        var tt = th + beta, td = 2*beta/N;
        var seg = HW/N, side = dir > 0 ? 1 : -1;
        var px = 0, pz = 0;

        var frontTex = pageTex(from, HW, BH);
        var backTex  = pageTex(to,   HW, BH);

        for (var i=0;i<N;i++){
          var a  = tt - (i+0.5)*td;
          var u0 = i*seg, u1 = (i+1)*seg;
          var nx = px + seg*Math.cos(a), nz = pz + seg*Math.sin(a);

          var d0 = F/(F - pz*0.55), d1 = F/(F - nz*0.55);
          var x0 = spineX + side*px*d0, x1 = spineX + side*nx*d1;
          var vs = (d0 + d1)/2;
          var dw = Math.abs(x1 - x0);
          if (dw < 0.05){ px = nx; pz = nz; continue; }

          /* the sheet's normal points at the eye while cos(a) is positive */
          var front = Math.cos(a) > 0;
          var img = front ? frontTex : backTex;
          /* a right-hand leaf carries its spine at image-x 0 on the front and at
             image-x HW on the back; a left-hand leaf is the other way round */
          var sameDir = (side > 0) === front;
          var sx = sameDir ? u0 : (HW - u1);
          var mirror = sameDir ? (x1 < x0) : (x1 > x0);
          var dxL = x0 < x1 ? x0 : x1;

          ctx.save();
          ctx.translate(mirror ? dxL + dw : dxL, cyB);
          ctx.scale(mirror ? -1 : 1, vs);
          ctx.drawImage(img,
            sx*(img.width/HW), 0, seg*(img.width/HW), img.height,
            0, -BH/2, dw, BH);
          /* paper is matte: shade by how far this strip has turned away */
          var lit = Math.abs(Math.cos(a));
          ctx.fillStyle = 'rgba(0,0,0,' + ((1-lit)*0.58).toFixed(3) + ')';
          ctx.fillRect(0, -BH/2, dw, BH);
          if (lit > 0.74){
            ctx.fillStyle = 'rgba(255,255,255,' + ((lit-0.74)*0.12).toFixed(3) + ')';
            ctx.fillRect(0, -BH/2, dw, BH);
          }
          ctx.restore();

          px = nx; pz = nz;
        }

        /* the shadow the lifted leaf throws back onto the spread */
        var sh = ctx.createLinearGradient(spineX, 0, spineX + side*HW*0.55, 0);
        sh.addColorStop(0, 'rgba(0,0,0,' + (0.42*Math.sin(Math.PI*t)).toFixed(3) + ')');
        sh.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = sh;
        ctx.fillRect(Math.min(spineX, spineX + side*HW*0.55), by, HW*0.55, BH);
      }

      /* the reading light */
      readLight(ctx, s.u, look, function(gx){
        gx.drawImage(pageTex(stayL, HW, BH), bx, by, HW, BH);
        gx.drawImage(pageTex(stayR, HW, BH), spineX, by, HW, BH);
      });

      /* the gutter */
      var g = ctx.createLinearGradient(spineX - BW*0.05, 0, spineX + BW*0.05, 0);
      g.addColorStop(0,   'rgba(0,0,0,0)');
      g.addColorStop(0.5, 'rgba(0,0,0,0.62)');
      g.addColorStop(1,   'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.fillRect(spineX - BW*0.05, by, BW*0.10, BH);
    }
    return { s:s, draw:draw, reset:function(){ tex = {}; settled = false; } };
  })();

  /* ---------- 10 / CARD — a plane of type under real perspective ---------- */
  var Tilt = (function(){
    var cv = document.getElementById('tilt');
    var s  = new Surface(cv);
    var rx = 0, ry = 0, tx = 0, ty = 0, flip = 0, flipTarget = 0;

    var live = true, over = false, edge = 0, look = null;
    cv.addEventListener('pointermove', function(e){
      var p = local(cv, e);
      look = p;
      ty =  (p.x/s.w - 0.5) * 1.05;
      tx = -(p.y/s.h - 0.5) * 0.75;
      over = true; live = true;
    });
    cv.addEventListener('pointerenter', function(){ over = true; live = true; });
    cv.addEventListener('pointerleave', function(){ tx = ty = 0; over = false; live = true; look = null; });
    cv.addEventListener('pointerdown', function(){ flipTarget = 1 - flipTarget;  live = true; });

    var FRONT = {
      kicker:'TEXT ON A PATH',
      title:'STUDY 10',
      body:['a plane of type carried','through a perspective','divide, one glyph at a','time — the letters keep','the surface, not the','other way round'],
      foot:'TILT / FLIP'
    };
    var BACK = {
      kicker:'REVERSE',
      title:'STUDY 10',
      body:['every character is placed','in card space and pushed','through the same matrix,','so the type shears with','the plane instead of','being pasted on it'],
      foot:'CARD SPACE'
    };
    var EDGE = "textonapath ";

    function draw(now, dt){
      var ctx = s.ctx;
      var moving = over || Math.abs(tx-rx) > 1e-4 || Math.abs(ty-ry) > 1e-4 ||
                   Math.abs(flipTarget-flip) > 1e-4 || false;
      if (!moving && !live) return;                       // parked: leave the last frame on screen
      live = moving;
      ctx.clearRect(0,0,s.w,s.h);

      if (over || Math.abs(flipTarget-flip) > 1e-4) edge += dt/1000*8;   // border type only runs live
      rx += (tx - rx) * Math.min(1, dt/220);
      ry += (ty - ry) * Math.min(1, dt/220);
      flip += (flipTarget - flip) * Math.min(1, dt/420);
      var fe = flip<0.5 ? 4*flip*flip*flip : 1 - Math.pow(-2*flip+2,3)/2;
      var spin = fe*Math.PI;

      var CW = s.u*0.50, CH = s.u*0.70;                  // card size in card-space px
      var F = s.w*1.9;                                   // focal length
      var cx = s.w/2, cy = s.h/2 + s.u*0.02;

      var ca = Math.cos(ry + spin), sa = Math.sin(ry + spin);
      var cb = Math.cos(rx), sb = Math.sin(rx);

      /* card basis vectors rotated into view space */
      function xform(u,v){
        var x = u, y = v, z = 0;
        var x1 =  x*ca + z*sa,  z1 = -x*sa + z*ca;       // yaw
        var y2 =  y*cb - z1*sb, z2 = y*sb + z1*cb;       // pitch
        var d = F/(F - z2);
        return { x: cx + x1*d, y: cy + y2*d, z: z2, d: d };
      }
      var facingBack = Math.cos(ry + spin) < 0;
      var face = facingBack ? BACK : FRONT;

      /* card body */
      var c00 = xform(-CW/2,-CH/2), c10 = xform(CW/2,-CH/2),
          c11 = xform(CW/2, CH/2),  c01 = xform(-CW/2, CH/2);
      ctx.beginPath();
      ctx.moveTo(c00.x,c00.y); ctx.lineTo(c10.x,c10.y);
      ctx.lineTo(c11.x,c11.y); ctx.lineTo(c01.x,c01.y); ctx.closePath();
      ctx.fillStyle = 'rgba(255,255,255,' + (0.018 + 0.032*Math.abs(Math.sin(ry+spin))).toFixed(3) + ')';
      ctx.fill();
      ctx.strokeStyle = ink(0.34);
      ctx.lineWidth = Math.max(0.6, s.u*0.0022);
      ctx.stroke();

      /* every glyph goes through the same transform, with its own local frame */
      var h = 0.6;
      var curA = 1, curLit = -1;
      var LR = s.u*0.15, LR2 = LR*LR;   // the card is small; keep the pool small too
      function glyph(ch, u, v, mirror){
        var p0 = xform(u,v);
        if (p0.z > F*0.92) return;
        var gd = 0;
        if (look){
          var ddx = p0.x-look.x, ddy = p0.y-look.y, dd = ddx*ddx + ddy*ddy;
          if (dd < LR2) gd = 1 - Math.sqrt(dd)/LR;
        }
        var lv = (gd*5)|0;
        if (lv !== curLit){ curLit = lv; ctx.fillStyle = ink(curA + (1-curA)*((lv + (lv?0.5:0))/5)); }
        var pu = xform(u+h, v), pv = xform(u, v+h);
        ctx.save();
        s.base();
        ctx.transform((pu.x-p0.x)/h, (pu.y-p0.y)/h, (pv.x-p0.x)/h, (pv.y-p0.y)/h, p0.x, p0.y);
        if (mirror) ctx.scale(-1, 1);
        ctx.fillText(ch, 0, 0);
        ctx.restore();
      }
      function line(str, u0, v, size, alpha, bold){
        var m = facingBack ? -1 : 1;
        ctx.font = (bold?'bold ':'') + size.toFixed(2) + 'px ' + FACE;
        curA = alpha; curLit = -1;
        ctx.fillStyle = ink(alpha);
        var pen = u0;
        for (var i=0;i<str.length;i++){
          var ch = str.charAt(i), aw = ctx.measureText(ch).width;
          glyph(ch, (pen + aw/2)*m, v, facingBack);      // placed on its own centre
          pen += aw;
        }
      }

      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      var pad = CW*0.11;
      var k1 = CW*0.052, k2 = CW*0.125, k3 = CW*0.055;
      line(face.kicker, -CW/2+pad, -CH/2+pad*1.0, k1, 0.55, true);
      line(face.title,  -CW/2+pad, -CH/2+pad*2.3, k2, 0.95, true);
      for (var i=0;i<face.body.length;i++)
        line(face.body[i], -CW/2+pad, -CH/2+pad*3.9 + i*k3*1.55, k3, 0.72, false);
      line(face.foot,   -CW/2+pad,  CH/2-pad*0.85, k1, 0.55, true);

      /* type running the card's own border */
      var per = 2*(CW-pad*0.7) + 2*(CH-pad*0.7);
      var es = CW*0.040, estep = es*0.62, n = Math.floor(per/estep);
      var W2 = CW-pad*0.7, H2 = CH-pad*0.7;
      var off = edge % estep;
      ctx.font = es.toFixed(2) + 'px ' + FACE;
      curA = 0.42; curLit = -1;
      ctx.fillStyle = ink(0.42);
      for (var e2=0;e2<n;e2++){
        var t = (e2*estep + off) % per, u, v, rot;
        if (t < W2){ u = -W2/2 + t;  v = -H2/2; rot = 0; }
        else if (t < W2+H2){ u = W2/2; v = -H2/2 + (t-W2); rot = Math.PI/2; }
        else if (t < 2*W2+H2){ u = W2/2 - (t-W2-H2); v = H2/2; rot = Math.PI; }
        else { u = -W2/2; v = H2/2 - (t-2*W2-H2); rot = -Math.PI/2; }
        if (facingBack) u = -u;   // the 180-degree flip already mirrors the plane
        var p0 = xform(u,v);
        if (p0.z > F*0.92) continue;
        var egd = 0;
        if (look){
          var edx = p0.x-look.x, edy = p0.y-look.y, edd = edx*edx + edy*edy;
          if (edd < LR2) egd = 1 - Math.sqrt(edd)/LR;
        }
        var elv = (egd*5)|0;
        if (elv !== curLit){ curLit = elv; ctx.fillStyle = ink(0.42 + 0.58*((elv + (elv?0.5:0))/5)); }
        var pu = xform(u+h,v), pv = xform(u,v+h);
        var ax = (pu.x-p0.x)/h, ay = (pu.y-p0.y)/h;
        var bx = (pv.x-p0.x)/h, by = (pv.y-p0.y)/h;
        ctx.save(); s.base();
        ctx.transform(ax, ay, bx, by, p0.x, p0.y);
        if (facingBack) ctx.scale(-1, 1);
        ctx.rotate(rot);
        ctx.fillText(EDGE.charAt(e2 % EDGE.length), 0, 0);
        ctx.restore();
      }

      s.base();
    }
    return { s:s, draw:draw, reset:function(){ live = true; } };
  })();

  /* ---------- 11 / CLOTH ---------- */
  var Cloth = (function(){
    var cv = document.getElementById('cloth');
    var s  = new Surface(cv);
    var GX = 19, GY = 21;
    var PHRASE = "thefabricremembersthelineitwasgivenandkeepsonsayingitwhilethewindpullsatthecorners";
    var pts = [], rest = 0, built = 0;
    var pointer = null, wind = 0, held = null;

    function build(){
      var w = s.w; if (!w) return;
      rest = s.u*0.58/(GX-1);
      var x0 = w/2 - rest*(GX-1)/2, y0 = s.h*0.185;
      pts = [];
      for (var j=0;j<GY;j++) for (var i=0;i<GX;i++){
        var x = x0 + i*rest, y = y0 + j*rest;
        pts.push({ x:x, y:y, px:x, py:y, pin:(j===0 && (i%5===0 || i===GX-1)) ? {x:x,y:y} : null, free:0 });
      }
      built = w;
    }
    function P(i,j){ return pts[j*GX+i]; }

    cv.addEventListener('pointermove', function(e){
      pointer = local(cv, e);
      if (held){ held.gx = pointer.x; held.gy = pointer.y; }
    });
    cv.addEventListener('pointerleave', function(){ pointer = null; });
    cv.addEventListener('pointerdown', function(e){
      var p = local(cv, e);
      var best = null, bd = 1e9;
      for (var k=0;k<pts.length;k++){
        var q = pts[k];
        if (q.pin) continue;
        var d = (q.x-p.x)*(q.x-p.x) + (q.y-p.y)*(q.y-p.y);
        if (d < bd){ bd = d; best = q; }
      }
      if (best && bd < (s.u*0.24)*(s.u*0.24)){
        held = best; held.gx = p.x; held.gy = p.y;
        cv.setPointerCapture(e.pointerId);
      }
    });
    function drop(){ held = null; }
    cv.addEventListener('pointerup', drop);
    cv.addEventListener('pointercancel', drop);

    /* fixed-step verlet: a variable dt makes the constraint pass under-relax and the
       sheet collapses instead of hanging */
    var acc2 = 0, H = 1/120;
    function step(dtms){
      acc2 += Math.min(50, dtms)/1000;
      var guard = 0;
      while (acc2 >= H && guard++ < 2){ acc2 -= H; substep(H); }
    }
    function substep(h){
      var g = s.w*1.6, now = performance.now();
      wind += h;
      var hh = h*h, damp = 0.992;
      for (var k=0;k<pts.length;k++){
        var p = pts[k];
        if (p === held){
          p.px = p.x; p.py = p.y;
          p.x += (held.gx - p.x)*0.45;              // the hand leads, the cloth follows
          p.y += (held.gy - p.y)*0.45;
          continue;
        }
        if (p.pin && p.free < now){ p.x = p.pin.x; p.y = p.pin.y; p.px = p.x; p.py = p.y; continue; }
        var vx = (p.x - p.px)*damp, vy = (p.y - p.py)*damp;
        p.px = p.x; p.py = p.y;
        var breeze = (Math.sin(wind*1.9 + p.y*0.035) * 0.55 + Math.sin(wind*0.7)*0.45) * s.u*0.55;
        p.x += vx + breeze*hh;
        p.y += vy + g*hh;
        if (pointer && !held){                      // a passing hand only brushes it
          var dx = p.x-pointer.x, dy = p.y-pointer.y, d = Math.hypot(dx,dy);
          var rr = s.u*0.13;
          if (d < rr && d > 0.001){
            var push = (1-d/rr)*(1-d/rr) * s.u*0.008;
            p.x += dx/d*push; p.y += dy/d*push;
          }
        }
      }
      var iters = held ? 12 : 6;                  // a hand on it needs the constraint to travel
      for (var it=0; it<iters; it++){
        for (var j=0;j<GY;j++) for (var i=0;i<GX;i++){
          if (i<GX-1) solve(P(i,j), P(i+1,j), rest);
          if (j<GY-1) solve(P(i,j), P(i,j+1), rest);
        }
        for (var m=0;m<pts.length;m++){
          var q = pts[m];
          if (q === held){ q.x = held.gx; q.y = held.gy; continue; }
          if (q.pin && q.free < now){ q.x = q.pin.x; q.y = q.pin.y; }
        }
      }
      /* a final hard clamp: cloth stretches a little and then simply refuses,
         otherwise a long pull draws it out into strings */
      var lim = rest*1.14;
      for (var j2=0;j2<GY;j2++) for (var i2=0;i2<GX;i2++){
        if (i2<GX-1) clamp(P(i2,j2), P(i2+1,j2), lim);
        if (j2<GY-1) clamp(P(i2,j2), P(i2,j2+1), lim);
      }
    }
    function clamp(a, b, lim){
      var dx = b.x-a.x, dy = b.y-a.y, d = Math.hypot(dx,dy);
      if (d <= lim || d < 1e-4) return;
      var f = (d-lim)/d*0.5, ox = dx*f, oy = dy*f;
      if (a !== held && !(a.pin && a.free < performance.now())){ a.x += ox; a.y += oy; }
      if (b !== held && !(b.pin && b.free < performance.now())){ b.x -= ox; b.y -= oy; }
    }
    function solve(a, b, len){
      var dx = b.x-a.x, dy = b.y-a.y, d = Math.hypot(dx,dy) || 1e-4;
      var diff = (d-len)/d*0.5;
      var ox = dx*diff, oy = dy*diff;
      a.x += ox; a.y += oy; b.x -= ox; b.y -= oy;
    }

    function draw(now, dt){
      var ctx = s.ctx;
      if (built !== s.w) build();
      ctx.clearRect(0,0,s.w,s.h);
      step(dt);

      var fs = rest*0.86;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.font = 'bold ' + fs.toFixed(2) + 'px ' + FACE;
      var idx = 0;
      for (var j=0;j<GY-1;j++){
        for (var i=0;i<GX-1;i++){
          var a = P(i,j), b = P(i+1,j), c = P(i,j+1), d2 = P(i+1,j+1);
          var mx = (a.x+b.x+c.x+d2.x)/4, my = (a.y+b.y+c.y+d2.y)/4;
          var ex = (b.x-a.x + d2.x-c.x)/2, ey = (b.y-a.y + d2.y-c.y)/2;
          var fx = (c.x-a.x + d2.x-b.x)/2, fy = (c.y-a.y + d2.y-b.y)/2;
          var sx = Math.hypot(ex,ey)/rest, sy = Math.hypot(fx,fy)/rest;
          var area = Math.abs(ex*fy - ey*fx)/(rest*rest);   // stands in for facing
          var ang = Math.atan2(ey, ex);
          var a2 = 0.20 + 0.75*Math.min(1, area);
          ctx.save();
          ctx.translate(mx, my);
          ctx.rotate(qang(ang));
          ctx.scale(Math.max(0.15, Math.min(1.7, sx)), Math.max(0.15, Math.min(1.7, sy)));
          ctx.fillStyle = ink(a2);
          ctx.fillText(PHRASE.charAt(idx++ % PHRASE.length), 0, 0);
          ctx.restore();
        }
      }

      /* the pegs it hangs from */
      for (var i2=0;i2<GX;i2++){
        var q = P(i2,0);
        if (!q.pin) continue;
        var held = q.free < now;
        ctx.beginPath();
        ctx.arc(q.pin.x, q.pin.y, s.w*(held?0.006:0.004), 0, Math.PI*2);
        ctx.fillStyle = ink(held?0.62:0.22);
        ctx.fill();
      }
    }
    return { s:s, draw:draw, reset:build };
  })();

  /* ---------- loop ---------- */
  var studies = [Globe, Codex, Mark, Book, Tilt, Cloth];
  var prev = performance.now();
  var visible = [true,true,true,true,true,true];
  function checkVisible(){
    var vh = window.innerHeight;
    for (var i=0;i<studies.length;i++){
      var r = studies[i].s.el.getBoundingClientRect();
      visible[i] = r.bottom > -80 && r.top < vh + 80;   // stacked on a phone, paint what is on screen
    }
  }
  function frame(now){
    var dt = Math.min(64, now - prev); prev = now;
    for (var i=0;i<studies.length;i++){
      var st = studies[i], sf = st.s;
      if (!sf.w || !visible[i]) continue;
      sf.base();
      st.draw(now, dt);
    }
    requestAnimationFrame(frame);
  }
  addEventListener('scroll', checkVisible, true);
  requestAnimationFrame(frame);

  function onResize(){
    for (var i=0;i<studies.length;i++){
      studies[i].s.resize();
      if (studies[i].reset) studies[i].reset();
    }
    checkVisible();
  }
  window.addEventListener('resize', onResize);
  if (window.ResizeObserver) new ResizeObserver(onResize).observe(document.getElementById('grid'));
  onResize();
})();
</script>
</body>
</html>
```

### `src/shaders/text-path-studies/sources/text-on-a-path.html`

Role: variant-source · 474 lines · 15502 bytes · SHA-256 `e5d01ff0fc47ea3d4f351033c14690efd9d4393ab238ec26a2e090c600be52a5`

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Text on a Path — Three Studies in Motion</title>
<style>
  :root{
    --bg:#0b0b0b;
    --paper:#f1f2ee;
    --paper-in:#ebece7;
    --ink:#141310;
    --gap:15px;
    --pad:12px;
  }
  *{box-sizing:border-box;margin:0;padding:0}
  html,body{height:100%}
  body{
    background:var(--bg);
    font-family:"Courier New",Courier,monospace;
    -webkit-font-smoothing:antialiased;
    overflow:hidden;
    -webkit-user-select:none;user-select:none;
  }
  .frame{
    height:100%;
    display:flex;
    flex-direction:column;
    padding:var(--pad);
  }
  header{
    display:flex;
    align-items:baseline;
    justify-content:space-between;
    gap:24px;
    flex:0 0 auto;
    font-size:clamp(8.9px,.883vw,14px);
    line-height:1;
    letter-spacing:.121em;
  }
  .ttl{white-space:nowrap}
  .ttl b{color:#fff;font-weight:700}
  .ttl span{color:#949494;font-weight:400;margin-left:1.35em}
  .nav{color:#8e8e8e;white-space:nowrap}
  .stage{
    flex:1 1 auto;
    min-height:0;
    padding:0 24px;
    container-type:size;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  .row{display:flex;gap:var(--gap)}
  .card{
    position:relative;
    width:min(calc((100cqw - 2*var(--gap))/3), 100cqh);
    aspect-ratio:1/1;
    border-radius:3.7%;
    overflow:hidden;
    container-type:inline-size;
    background:
      radial-gradient(ellipse 74% 74% at 50% 50%, var(--paper-in) 0%, var(--paper-in) 34%, var(--paper) 92%);
    isolation:isolate;
  }
  .card figcaption{
    position:absolute;
    top:4.05%;left:4.3%;
    font-size:2.92cqw;
    font-weight:700;
    letter-spacing:0;
    color:#12110e;
    z-index:2;
    pointer-events:none;
    white-space:nowrap;
  }
  canvas{
    position:absolute;inset:0;width:100%;height:100%;display:block;
    cursor:crosshair;touch-action:none;
  }
  @media (max-width:820px){
    :root{--gap:12px}
    .stage{padding:0;overflow-y:auto;align-items:flex-start}
    .row{flex-direction:column;padding:2px 0 14px}
    .card{width:min(100cqw, 76cqh)}
  }
  @media (max-width:700px){ .nav{display:none} }
</style>
</head>
<body>
<div class="frame">
  <header>
    <div class="ttl"><b>TEXT ON A PATH</b><span>— THREE STUDIES IN MOTION</span></div>
    <div class="nav">WRITE · RIPPLE · ROLL</div>
  </header>

  <div class="stage">
    <div class="row">
      <figure class="card" id="c-write"><figcaption>03 / SKYWRITING</figcaption><canvas id="write"></canvas></figure>
      <figure class="card" id="c-ripple"><figcaption>04 / RIPPLE</figcaption><canvas id="ripple"></canvas></figure>
      <figure class="card" id="c-ball"><figcaption>05 / BALL</figcaption><canvas id="ball"></canvas></figure>
    </div>
  </div>
</div>

<script>
(function(){
  "use strict";

  var MONO = '"Courier New", Courier, monospace';
  var INK  = '20,19,16';

  /* ---------- tiny seeded rng so the plates are stable across reloads ---------- */
  function rng(seed){
    var s = seed >>> 0;
    return function(){
      s ^= s << 13; s >>>= 0;
      s ^= s >> 17;
      s ^= s << 5;  s >>>= 0;
      return s / 4294967296;
    };
  }

  /* ---------- canvas plumbing ---------- */
  function Surface(canvas){
    this.el = canvas;
    this.ctx = canvas.getContext('2d');
    this.w = 0; this.h = 0; this.dpr = 1;
    this.resize();
  }
  Surface.prototype.resize = function(){
    var r = this.el.getBoundingClientRect();
    if (!r.width || !r.height) return false;
    var dpr = Math.min(2, window.devicePixelRatio || 1);
    var w = Math.round(r.width * dpr), h = Math.round(r.height * dpr);
    if (w === this.el.width && h === this.el.height && this.w === r.width) return false;
    this.el.width = w; this.el.height = h;
    this.w = r.width; this.h = r.height; this.dpr = dpr;
    this.ctx.setTransform(dpr,0,0,dpr,0,0);
    return true;
  };

  /* pointer helper -> local css coords of the canvas */
  function local(canvas, e){
    var r = canvas.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  }

  /* =========================================================
     03 / SKYWRITING — letters emitted along the cursor path
     ========================================================= */
  var Write = (function(){
    var cv = document.getElementById('write');
    var s  = new Surface(cv);
    var PHRASE = "thepathfollowsyourhandwhereveritgoeswritinglight";
    var MAX_AGE = 2200;          // ms a glyph survives
    var glyphs = [];
    var idx = 0, acc = 0, last = null, inside = false;
    var hint = 0;                // 0..1 opacity of the idle prompt

    function metrics(){
      var k = s.w;
      var fs = k*0.0290;
      return { fs: fs, sp: fs*0.55 };   // step by roughly the font's own advance
    }

    function emit(x, y, now){
      var m = metrics();
      if (!last){ last = {x:x,y:y}; return; }
      var dx = x-last.x, dy = y-last.y, d = Math.sqrt(dx*dx+dy*dy);
      if (d < 0.001) return;
      var ang = Math.atan2(dy, dx);
      var t = 0, rem = d;
      while (acc + rem >= m.sp){
        var need = m.sp - acc;
        t += need; rem -= need; acc = 0;
        var f = t/d;
        glyphs.push({
          x: last.x + dx*f,
          y: last.y + dy*f,
          a: ang,
          c: PHRASE.charAt(idx % PHRASE.length),
          t: now
        });
        idx++;
      }
      acc += rem;
      last = {x:x, y:y};
    }

    cv.addEventListener('pointerenter', function(){ inside = true; last = null; acc = 0; });
    cv.addEventListener('pointerleave', function(){ inside = false; last = null; });
    cv.addEventListener('pointermove', function(e){
      var p = local(cv, e);
      inside = true;
      emit(p.x, p.y, performance.now());
    });

    function draw(now, dt){
      var ctx = s.ctx, m = metrics();
      ctx.clearRect(0,0,s.w,s.h);

      while (glyphs.length && now - glyphs[0].t > MAX_AGE) glyphs.shift();
      if (glyphs.length > 900) glyphs.splice(0, glyphs.length - 900);

      ctx.font = m.fs.toFixed(2) + 'px ' + MONO;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      for (var i=0;i<glyphs.length;i++){
        var g = glyphs[i];
        var k = 1 - (now - g.t)/MAX_AGE;
        if (k <= 0) continue;
        var a = Math.pow(Math.min(1, k*1.9), 1.25);   // holds full ink near the head, long soft tail
        ctx.save();
        ctx.translate(g.x, g.y);
        ctx.rotate(g.a);
        ctx.fillStyle = 'rgba(' + INK + ',' + a.toFixed(3) + ')';
        ctx.fillText(g.c, 0, 0);
        ctx.restore();
      }

      /* idle prompt */
      var want = (!inside && glyphs.length === 0) ? 1 : 0;
      hint += (want - hint) * Math.min(1, dt/260);
      if (hint > 0.004){
        ctx.save();
        ctx.font = (s.w*0.0268).toFixed(2) + 'px ' + MONO;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = 'rgba(' + INK + ',' + (hint*0.86).toFixed(3) + ')';
        ctx.fillText('move the cursor here', s.w/2, s.h/2);
        ctx.restore();
      }
    }

    return { s:s, draw:draw, reset:function(){ glyphs.length = 0; last = null; } };
  })();

  /* =========================================================
     04 / RIPPLE — static glyph plate, rings fire on click
     ========================================================= */
  var Ripple = (function(){
    var cv = document.getElementById('ripple');
    var s  = new Surface(cv);
    var N  = 24;
    var CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789=?#§¶△◊×÷%@&*/<>+-$¥£~^|:;.,()[]{}";
    var plate = [];
    (function(){
      var r = rng(20260809);
      for (var i=0;i<N*N;i++) plate.push(CHARS.charAt(Math.floor(r()*CHARS.length)));
    })();

    var rings = [];
    var LIFE  = 1250;   // ms

    cv.addEventListener('pointerdown', function(e){
      var p = local(cv, e);
      rings.push({ x:p.x, y:p.y, t:performance.now() });
      if (rings.length > 8) rings.shift();
    });

    function draw(now){
      var ctx = s.ctx;
      ctx.clearRect(0,0,s.w,s.h);

      var cell = s.w * 0.02860;
      var fs   = cell * 1.10;
      var x0   = s.w/2 - cell*(N-1)/2;
      var y0   = s.h/2 - cell*(N-1)/2;

      /* prune */
      while (rings.length && now - rings[0].t > LIFE) rings.shift();

      var speed = s.w * 1.20;          // px / s
      var band  = cell * 2.45;

      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = fs.toFixed(2) + 'px ' + MONO;
      ctx.lineJoin = 'round';

      for (var gy=0; gy<N; gy++){
        var py = y0 + gy*cell;
        for (var gx=0; gx<N; gx++){
          var px = x0 + gx*cell;
          var v = 0;
          for (var k=0;k<rings.length;k++){
            var R = rings[k];
            var age = (now - R.t)/1000;
            if (age < 0) continue;
            var rad = speed*age;
            var dx = px - R.x, dy = py - R.y;
            var d  = Math.sqrt(dx*dx+dy*dy);
            var q  = (d - rad)/band;
            if (q > 2.4 || q < -3.8) continue;
            if (q < 0) q *= 0.62;              // the wave drags a tail behind its front
            var env = Math.max(0, 1 - age/(LIFE/1000));
            v += Math.exp(-q*q) * Math.pow(env, 1.15);
          }
          if (v > 1) v = 1;

          var a = 0.82 + v*0.18;
          var col = 'rgba(' + INK + ',' + a.toFixed(3) + ')';
          var ch = plate[gy*N+gx];
          ctx.fillStyle = col;
          ctx.fillText(ch, px, py);
          if (v > 0.03){                       // the ring reads as extra weight, not just tone
            ctx.strokeStyle = col;
            ctx.lineWidth = fs * v * 0.105;
            ctx.strokeText(ch, px, py);
          }
        }
      }
    }

    return { s:s, draw:draw, reset:function(){ rings.length = 0; } };
  })();

  /* =========================================================
     05 / BALL — glyphs on a spinning sphere, far side shrunk away
     ========================================================= */
  var Ball = (function(){
    var cv = document.getElementById('ball');
    var s  = new Surface(cv);
    var CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789=?#§¶△◊×÷%@&*/<>+-$¥£ΑΒΓΔΕΖΗΘΛΞΠΣΦΨΩαβγδεζηθλμξπστυφχψω«»‹›";
    var N = 1900;
    var pts = [];
    (function(){
      var r = rng(77712345);
      for (var i=0;i<N;i++){
        /* uniform random on the sphere — a lattice would show its spiral arms */
        var y = 1 - 2*r();
        var rad = Math.sqrt(Math.max(0, 1 - y*y));
        var th = r() * Math.PI * 2;
        pts.push({
          x: Math.cos(th)*rad, y: y, z: Math.sin(th)*rad,
          c: CHARS.charAt(Math.floor(r()*CHARS.length)),
          back: 0        // timestamp at which it regrows
        });
      }
    })();

    var spin = 0, vel = 0.17, hover = false;
    var TILT = 0.17, ct = Math.cos(TILT), st = Math.sin(TILT);
    var parts = [];
    var proj = new Float32Array(N*4);   // x, y, scale, depth
    var RR = 0.3065, FS = 0.0265, CYOFF = 0.046;  // radius / glyph size / drop, as fractions of the card

    cv.addEventListener('pointerenter', function(){ hover = true; });
    cv.addEventListener('pointerleave', function(){ hover = false; });

    cv.addEventListener('pointerdown', function(e){
      var p = local(cv, e);
      var fs = s.w*FS;
      var now = performance.now();
      var hitR = s.w*0.055, hit = hitR*hitR;
      for (var i=0;i<N;i++){
        if (pts[i].back > now) continue;
        if (proj[i*4+3] < 0.72) continue;   // only the letters actually facing you
        var dx = proj[i*4] - p.x, dy = proj[i*4+1] - p.y;
        if (dx*dx + dy*dy > hit) continue;
        var d = Math.sqrt(dx*dx+dy*dy) || 1;
        pts[i].back = now + 1500 + Math.random()*260;
        parts.push({
          x: proj[i*4], y: proj[i*4+1],
          vx: (dx/d)*s.w*(0.10 + Math.random()*0.16) + (Math.random()-0.5)*s.w*0.05,
          vy: (dy/d)*s.w*0.08 - s.w*(0.04 + Math.random()*0.10),
          rot: 0, vr: (Math.random()-0.5)*5.5,
          size: fs*(0.85 + 0.15*proj[i*4+2]),   // reads as a whole letter once it is off the ball
          c: pts[i].c,
          t: now, life: 2100
        });
      }
      if (parts.length > 420) parts.splice(0, parts.length - 420);
    });

    function draw(now, dt){
      var ctx = s.ctx;
      ctx.clearRect(0,0,s.w,s.h);

      var target = hover ? 0.62 : 0.17;
      vel += (target - vel) * Math.min(1, dt/300);
      spin += vel * dt/1000;

      var cx = s.w/2, cy = s.h/2 + s.w*CYOFF;
      var R  = s.w*RR;
      var fs = s.w*FS;
      var cs = Math.cos(spin), sn = Math.sin(spin);

      var order = [];
      for (var i=0;i<N;i++){
        var p = pts[i];
        var x1 =  p.x*cs - p.z*sn;
        var z1 =  p.x*sn + p.z*cs;
        var y2 =  p.y*ct - z1*st;
        var z2 =  p.y*st + z1*ct;
        var d  = (z2 + 1) * 0.5;            // 0 = far side, 1 = nearest point
        var sc = 0.10 + 0.90*Math.pow(d, 1.8);
        var px = cx + x1*R;
        var py = cy + y2*R;
        proj[i*4] = px; proj[i*4+1] = py; proj[i*4+2] = sc; proj[i*4+3] = d;
        if (p.back > now) continue;
        order.push(i);
      }
      order.sort(function(a,b){ return proj[a*4+3] - proj[b*4+3]; });

      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      var lastFont = '';
      for (var k=0;k<order.length;k++){
        var j = order[k];
        var z2b = proj[j*4+3], scb = proj[j*4+2];
        var a = 0.55 + 0.45*Math.pow(z2b, 1.10);
        var grow = pts[j].back ? Math.min(1, (now - pts[j].back)/420) : 1;
        if (grow < 1) a *= grow;
        /* depth-sorted, so quantising the size keeps ctx.font churn low */
        var f = 'bold ' + (Math.round(fs*scb*4)/4) + 'px ' + MONO;
        if (f !== lastFont){ ctx.font = f; lastFont = f; }
        ctx.fillStyle = 'rgba(' + INK + ',' + a.toFixed(3) + ')';
        ctx.fillText(pts[j].c, proj[j*4], proj[j*4+1]);
      }

      /* knocked-loose letters */
      var g = s.w*0.80;
      for (var m=parts.length-1; m>=0; m--){
        var q = parts[m];
        var age = now - q.t;
        if (age > q.life || q.y > s.h + 40){ parts.splice(m,1); continue; }
        q.vy += g * dt/1000;
        q.x  += q.vx * dt/1000;
        q.y  += q.vy * dt/1000;
        q.rot += q.vr * dt/1000;
        var af = Math.max(0, 1 - age/q.life);
        ctx.save();
        ctx.translate(q.x, q.y);
        ctx.rotate(q.rot);
        ctx.font = 'bold ' + q.size.toFixed(2) + 'px ' + MONO;
        ctx.fillStyle = 'rgba(' + INK + ',' + (0.95*Math.pow(af,0.5)).toFixed(3) + ')';
        ctx.fillText(q.c, 0, 0);
        ctx.restore();
      }
    }

    return { s:s, draw:draw, reset:function(){ parts.length = 0; } };
  })();

  /* ---------- loop ---------- */
  var studies = [Write, Ripple, Ball];
  var prev = performance.now();

  function frame(now){
    var dt = Math.min(64, now - prev); prev = now;
    for (var i=0;i<studies.length;i++) studies[i].draw(now, dt);
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  function onResize(){
    for (var i=0;i<studies.length;i++){
      if (studies[i].s.resize() && studies[i].reset) studies[i].reset();
    }
  }
  window.addEventListener('resize', onResize);
  if (window.ResizeObserver){
    var ro = new ResizeObserver(onResize);
    ro.observe(document.querySelector('.stage'));
  }
  onResize();
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
