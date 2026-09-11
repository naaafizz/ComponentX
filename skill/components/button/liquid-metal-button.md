---
name: "Liquid Metal Button"
library: "ComponentX"
id: "liquid-metal-button"
type: "button"
quality: "showcase"
tags: ["animation", "background", "button", "data", "shader", "text", "webgl"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Liquid Metal Button

> **Type:** `button` · **Quality:** `showcase` · **ID:** `liquid-metal-button`
> **Path:** `components/button/liquid-metal-button.md`

**Liquid Metal Button** is a premium, production-ready component from the **ComponentX** library — engineered for button interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Showcase tier** — a high-impact, visually rich implementation — animated, 3D, or dependency-heavy by design.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `animation`, `background`, `button` workflows.
- **Pattern coverage** — includes `data`, `shader`, `text` workflows.
- **Pattern coverage** — includes `webgl` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Liquid Metal Button** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
name: add-liquid-metal-button
description: "Build Liquid Metal Button from its verified authored source using Raw WebGL 2 + DOM/CSS, including the complete renderer, interactions, and required assets. Use when Codex needs to implement, port, or adapt this effect without requiring the ComponentX package or reconstructing the visual from an approximation."
---

# Build Liquid Metal Button

## Description

A prismatic liquid-metal control in Sign up pill, Liquid Orb, and configurable Play Circle variants, with pointer-following bloom and press ripples.

Recreate the authored behavior from the verified source, not from screenshots or the abbreviated orchestration sample in this skill. The implementation may live directly in the target project and does not require `@componentx/core`.

## Technologies

- React and TypeScript visibility-aware sandbox host
- Exact self-contained raw WebGL2, DOM, and CSS document imported as source text
- Semantic native button with authored hover, focus, pressed, and keyboard states
- Multipass spectral metal, crisp rim, adaptive softening, multi-radius bloom, and composite pipeline
- Configurable circular play variant with live finish, diameter, stroke, and accessible-label controls
- Pointer-dragged liquid field, faceted press ripples, capped DPR, and reduced-motion freezing

## Verified source material

- `src/shaders/liquid-metal-button/liquid-metal-button.html`
- `src/shaders/liquid-metal-button/LiquidMetalButton.tsx`

Source revision: `SHA-256 76624e881a3a`

## Implementation steps

1. Open every verified source file listed above and identify the renderer, host lifecycle, styles, and assets before editing.
2. Keep the complete authored HTML byte-for-byte; do not rewrite its shaders, framebuffer graph, CSS plate, button semantics, interaction state, or tuning hooks.
3. Import the canonical document as a raw string and mount it through an `allow-scripts`-only srcDoc iframe so its WebGL2 and DOM event scopes remain isolated.
4. Select the authored Sign up pill with `variant="pill"`, the compact Liquid Orb with `variant="circle"`, or the configurable play control with `variant="play"`.
5. Let the source-owned CSS size the pill responsively, keep the orb at 56–72px, and let the renderer cap backing resolution at 2× device pixel ratio.
6. Select the play variant to map equal width and height into the same pill SDF, then update diameter, rim width, colored or monotone finish, and the icon-only control's accessible name through the iframe message adapter without remounting it.
7. Retain pointer hover and drag, pointer and keyboard ripple launches, focus-visible styling, and the source-owned reduced-motion clock freeze.
8. Unmount the iframe when the host is offscreen or the document is hidden so its WebGL context, buffers, framebuffers, listeners, and animation loop are released together.
9. Give the local component a sized, overflow-controlled parent and verify desktop, mobile, reduced-motion, and context-loss behavior.

Asset handling: This effect has no required external assets.

## Local component example

Import the copied local component rather than a package entrypoint:

```tsx
import { LiquidMetalButton } from "./effects/liquid-metal-button/LiquidMetalButton";
import "./effects/liquid-metal-button/styles.css";

export function Scene() {
  return <div className="effect-frame"><LiquidMetalButton /></div>;
}
```

## Core renderer pattern

This excerpt documents orchestration only. Copy the exact shader, geometry, pass, and interaction code from the verified source files.

```tsx
<LiquidMetalButton variant="play" rendering="colored" diameter={88} strokeWidth={3} text="Play" />
```

## Behavior contract

- Runtime: Raw WebGL 2 + DOM/CSS
- Passes: Up to 20 — metal, crisp rim, adaptive softening, multi-radius bloom, and composite
- Interaction: Hover, focus, pointer-dragged metal, faceted press ripples, and Enter/Space activation
- Assets: 1 exact authored HTML scene with remote Inter stylesheet and system-font fallback
- **renderer** (sandbox): Raw WebGL 2 + DOM/CSS
- **control** (semantic): Native button
- **variants** (fixed): Sign up Pill + Liquid Orb + configurable Play Circle
- **geometry** (optional): 72–160 px circle + 1–8 px stroke
- **appearance** (optional): Colored | monotone
- **content** (optional): Custom accessible name
- **metal** (fixed): Spectral dispersion field
- **post** (adaptive): Softening + bloom
- **interaction** (pointer): Hover + drag + ripple
- **pixelRatio** (adaptive): ≤ 2
- **motion** (adaptive): Reduced-motion freeze
- **assets** (external): Inter stylesheet + fallback

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
# Liquid Metal Button — Play Circle — Complete source

Component: `LiquidMetalButton`
Variant: **Play Circle** (`play-circle`)
Runtime: Raw WebGL 2 + DOM/CSS
Source revision: `SHA-256 76624e881a3a`

## Current configured usage

```tsx
import { LiquidMetalButton } from "@componentx/threeui";
import "@componentx/threeui/style.css";

export function Scene() {
  return (
    <div className="shader-frame">
      <LiquidMetalButton
        variant="play"
        rendering="colored"
        diameter={88}
        strokeWidth={3.0}
        text="Play"
      />
    </div>
  );
}
```

## Required assets

No binary assets are required.

## Full implementation source

This bundle contains all 3 required text source files. Preserve their paths and contents; none are excerpts.

### `src/shaders/liquid-metal-button/LiquidMetalButton.tsx`

Role: component · 266 lines · 8973 bytes · SHA-256 `89b940bab445f17fafb444a7833b3c785d24c86a28156d8ad231e18de9503e11`

```tsx
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import liquidMetalButtonSource from "./liquid-metal-button.html?raw";

export type LiquidMetalButtonVariant = "pill" | "circle" | "play";

export type LiquidMetalButtonProps = {
  variant?: LiquidMetalButtonVariant;
  className?: string;
  rendering?: "colored" | "monotone";
  diameter?: number;
  strokeWidth?: number;
  text?: string;
  embedded?: boolean;
  onClick?: () => void;
};

const LIQUID_METAL_BUTTON_BRIDGE = `
<script id="liquid-metal-button-bridge">
  window.addEventListener('message', event => {
    if(event.source !== parent) return;
    const config = event.data && event.data.liquidMetalButton;
    if(!config) return;
    const text = typeof config.text === 'string' ? config.text.slice(0, 24) : '';
    const label = btn.querySelector('.lbl');
    if(label) label.textContent = text;
    btn.setAttribute('aria-label', text || 'Button');
    if(Number.isFinite(config.pillWidthUnits)) {
      stage.style.setProperty('--bw', 'calc(' + config.pillWidthUnits + ' * var(--u))');
    }
    document.body.style.background = config.embedded ? '#0e0f12' : '';
    stage.style.position = config.embedded ? 'absolute' : '';
    stage.style.top = config.embedded ? '50%' : '';
    stage.style.left = config.embedded ? '50%' : '';
    stage.style.transform = config.embedded ? 'translate(-50%, -50%)' : '';
  });

  btn.addEventListener('click', () => {
    parent.postMessage({ liquidMetalButton: { type: 'activate' } }, '*');
  });
</script>`;

const CIRCLE_RUNTIME_STYLE = `
<style id="liquid-metal-circle-variant">
  body[data-shape="circle"] .stage {
    --h: clamp(56px, 10vmin, 72px);
    --bw: var(--h);
  }

  body[data-shape="circle"] .btn {
    gap: 0;
  }

  body[data-shape="circle"] .btn .ico {
    width: 28%;
    height: 28%;
  }

  body[data-shape="circle"] .btn .lbl {
    display: none;
  }
</style>`;

function sourceForVariant(variant: Exclude<LiquidMetalButtonVariant, "play">) {
  if (variant === "pill") {
    return liquidMetalButtonSource.replace("</body>", `${LIQUID_METAL_BUTTON_BRIDGE}\n</body>`);
  }

  return liquidMetalButtonSource
    .replace("</head>", `${CIRCLE_RUNTIME_STYLE}\n</head>`)
    .replace("<body>", '<body data-shape="circle">')
    .replace(
      '<button class="btn" id="btn" type="button">',
      '<button class="btn" id="btn" type="button" aria-label="Add">',
    )
    .replace("</body>", `${LIQUID_METAL_BUTTON_BRIDGE}\n</body>`);
}

const liquidMetalPlayButtonSource = liquidMetalButtonSource
  .replace(
    "--bw: calc(1407 * var(--u));",
    "--bw: var(--h);",
  )
  .replace(
    "</style>",
    `
  /* Circular play-button adapter. The renderer and interaction graph stay
     source-exact; only geometry, finish, outline, and accessible naming vary. */
  body{position:relative}
  .stage{
    --h:88px;
    position:absolute;top:50%;left:50%;
    transform:translate(-50%,-50%);
  }
  #fx{filter:none}
  .btn{flex-direction:column;gap:0}
  .btn:focus-visible{outline:2px solid rgba(255,255,255,.68);outline-offset:4px}
  .btn .ico{
    width:calc(var(--h) * .25);height:calc(var(--h) * .25);
    transform:translateX(calc(var(--h) * .018));
  }
</style>`,
  )
  .replace(
    `<button class="btn" id="btn" type="button">
    <svg class="ico" viewBox="0 0 115 115" aria-hidden="true">
      <g stroke="currentColor" stroke-width="17" stroke-linecap="round">
        <path d="M57.5 8.5 V106.5"/>
        <path d="M8.5 57.5 H106.5"/>
      </g>
    </svg>
    <span class="lbl">Sign up</span>
  </button>`,
    `<button class="btn" id="btn" type="button" aria-label="Play">
    <svg class="ico" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="currentColor" d="M15.5 10.75a2.2 2.2 0 0 1 3.32-1.9l18.04 13.25a2.35 2.35 0 0 1 0 3.8L18.82 39.15a2.2 2.2 0 0 1-3.32-1.9v-26.5Z"/>
    </svg>
  </button>`,
  )
  .replace(
    "let needResize = true;",
    "let needResize = true;\nlet playStrokeWidth = 3;",
  )
  .replace(
    "const bw = Math.max(1.5, 3.2 * (BH/516));      // stroke half-width, device px",
    "const bw = Math.max(0.5 * DPR, playStrokeWidth * DPR * 0.5); // configurable stroke half-width, device px",
  )
  .replace(
    "window.__seek   = v => { clock = v; drawn = null; };",
    `window.__seek   = v => { clock = v; drawn = null; };

window.addEventListener('message', event => {
  if(event.source !== parent) return;
  const config = event.data && event.data.liquidMetalPlayButton;
  if(!config) return;
  const diameter = Math.min(160, Math.max(72, Number(config.diameter) || 88));
  const strokeWidth = Math.min(8, Math.max(1, Number(config.strokeWidth) || 3));
  const text = typeof config.text === 'string' ? config.text.slice(0, 24) : 'Play';
  stage.style.setProperty('--h', diameter + 'px');
  playStrokeWidth = strokeWidth;
  btn.setAttribute('aria-label', text.trim() || 'Play');
  cv.style.filter = config.rendering === 'monotone' ? 'grayscale(1) contrast(1.04)' : 'none';
  needResize = true;
  drawn = null;
});`,
  )
  .replace("</body>", `${LIQUID_METAL_BUTTON_BRIDGE}\n</body>`);

function clamp(value: number, min: number, max: number, fallback: number) {
  return Number.isFinite(value) ? Math.min(max, Math.max(min, value)) : fallback;
}

export function LiquidMetalButton({
  className = "",
  variant = "pill",
  rendering = "colored",
  diameter = 88,
  strokeWidth = 3,
  text,
  embedded = false,
  onClick,
}: LiquidMetalButtonProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLIFrameElement>(null);
  const intersectsRef = useRef(true);
  const [mounted, setMounted] = useState(true);
  const [ready, setReady] = useState(false);
  const safeVariant: LiquidMetalButtonVariant =
    variant === "circle" || variant === "play" ? variant : "pill";
  const isPlayButton = safeVariant === "play";
  const safeText = String(text ?? (safeVariant === "pill" ? "Sign up" : safeVariant === "circle" ? "Add" : "Play"))
    .slice(0, 24);
  const pillWidthUnits = safeVariant === "pill"
    ? Math.min(3000, Math.max(1407, 820 + safeText.length * 94))
    : undefined;
  const source = useMemo(
    () => isPlayButton ? liquidMetalPlayButtonSource : sourceForVariant(safeVariant),
    [isPlayButton, safeVariant],
  );
  const playConfig = {
    diameter: clamp(diameter, 72, 160, 88),
    strokeWidth: clamp(strokeWidth, 1, 8, 3),
    rendering,
    text: safeText,
  } as const;

  const syncButtonConfig = useCallback(() => {
    frameRef.current?.contentWindow?.postMessage({
      liquidMetalButton: { text: safeText, pillWidthUnits, embedded },
    }, "*");
  }, [embedded, pillWidthUnits, safeText]);

  const syncPlayConfig = useCallback(() => {
    if (!isPlayButton) return;
    frameRef.current?.contentWindow?.postMessage({ liquidMetalPlayButton: playConfig }, "*");
  }, [isPlayButton, playConfig.diameter, playConfig.rendering, playConfig.strokeWidth, playConfig.text]);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const sync = () => setMounted(intersectsRef.current && document.visibilityState !== "hidden");
    const observer = new IntersectionObserver(([entry]) => {
      intersectsRef.current = entry.isIntersecting;
      sync();
    }, { rootMargin: "80px" });

    observer.observe(host);
    document.addEventListener("visibilitychange", sync);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  useEffect(() => {
    if (!mounted) setReady(false);
  }, [mounted]);

  useEffect(() => {
    if (!ready) return;
    syncButtonConfig();
    syncPlayConfig();
  }, [ready, syncButtonConfig, syncPlayConfig]);

  useEffect(() => {
    if (!onClick) return undefined;
    const receiveMessage = (event: MessageEvent) => {
      if (event.source !== frameRef.current?.contentWindow) return;
      if (event.data?.liquidMetalButton?.type !== "activate") return;
      onClick();
    };
    window.addEventListener("message", receiveMessage);
    return () => window.removeEventListener("message", receiveMessage);
  }, [onClick]);

  return (
    <div
      ref={hostRef}
      className={`liquid-metal-button${className ? ` ${className}` : ""}`}
      data-state={!mounted ? "paused" : ready ? "ready" : "loading"}
      data-variant={safeVariant}
    >
      {mounted ? (
        <iframe
          key={safeVariant}
          ref={frameRef}
          className={`liquid-metal-button__frame${ready ? " is-ready" : ""}`}
          title={safeVariant === "circle"
            ? "Interactive liquid metal circle button"
            : isPlayButton
              ? "Interactive liquid metal play button"
              : "Interactive liquid metal button"}
          srcDoc={source}
          sandbox="allow-scripts"
          loading="eager"
          onLoad={() => {
            setReady(true);
            syncButtonConfig();
            syncPlayConfig();
          }}
        />
      ) : null}
    </div>
  );
}
```

### `src/shaders/liquid-metal-button/liquid-metal-button.html`

Role: canonical-source · 895 lines · 38589 bytes · SHA-256 `76624e881a3aecbd79b473d9c51f53c7157d47052abd0f9dc28fefd223b0a819`

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Liquid Metal Button</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,100..900&display=swap" rel="stylesheet">
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  html,body{height:100%}
  body{
    /* A shadow needs something to fall on: a soft ambient pool lifts the
       ground just off black so the button reads as sitting above it. */
    background:
      radial-gradient(46vmax 32vmax at 50% 47%,
        #191b21 0%, #0e0f13 34%, #050506 62%, #000 88%) #000;
    display:grid;place-items:center;
    overflow:hidden;
    font-family:"Inter",-apple-system,BlinkMacSystemFont,"Helvetica Neue",Arial,sans-serif;
    font-optical-sizing:auto;
    -webkit-font-smoothing:antialiased;
  }

  /* Everything is expressed in the reference's own units (the pill measured
     1407 x 516 there), scaled off one ergonomic knob: the button height. */
  .stage{
    --h: 52px;                            /* a normal control height */
    --u: calc(var(--h) / 516);
    --bw: calc(1407 * var(--u));
    --bh: var(--h);
    /* The canvas is the stage, so this has to clear the bloom's full reach
       (~4 sigma) or the halo gets cut off against a visible rectangle. */
    --pad: calc(900 * var(--u));
    position:relative;
    width:calc(var(--bw) + 2 * var(--pad));
    height:calc(var(--bh) + 2 * var(--pad));
    display:grid;place-items:center;
    touch-action:manipulation;
  }

  /* the button's own solid body, and the shadow it casts on the pool */
  .plate{
    position:absolute;
    width:var(--bw);height:var(--bh);
    border-radius:999px;
    background:#0b0c0e;
    box-shadow:
      0 calc(var(--h) * 0.10) calc(var(--h) * 0.22) rgba(0,0,0,.72),
      0 calc(var(--h) * 0.30) calc(var(--h) * 0.66) rgba(0,0,0,.62),
      0 calc(var(--h) * 0.62) calc(var(--h) * 1.30) rgba(0,0,0,.42);
    transition:box-shadow .38s cubic-bezier(.22,.61,.36,1),
               background .38s cubic-bezier(.22,.61,.36,1);
  }
  /* deepen it while the metal is lit, so the bright face keeps its edge */
  body.hot .plate{
    background:#08090a;
    box-shadow:
      0 calc(var(--h) * 0.12) calc(var(--h) * 0.26) rgba(0,0,0,.80),
      0 calc(var(--h) * 0.40) calc(var(--h) * 0.86) rgba(0,0,0,.72),
      0 calc(var(--h) * 0.86) calc(var(--h) * 1.80) rgba(0,0,0,.55);
  }

  #fx{position:absolute;inset:0;width:100%;height:100%;display:block}

  .btn{
    position:relative;
    width:var(--bw);height:var(--bh);
    border:0;background:none;padding:0;
    border-radius:999px;
    display:flex;align-items:center;justify-content:center;
    gap:calc(88 * var(--u));
    color:#fff;
    font-family:inherit;
    font-weight:500;
    font-size:calc(207 * var(--u));
    line-height:1;
    letter-spacing:0;
    cursor:pointer;
    -webkit-tap-highlight-color:transparent;
    outline:none;
  }
  .btn:focus-visible{outline:calc(4 * var(--u)) solid rgba(255,255,255,.55);outline-offset:calc(10 * var(--u))}
  .btn .ico{
    width:calc(115 * var(--u));height:calc(115 * var(--u));
    display:block;flex:none;overflow:visible;
  }
  /* descenders pull the flex box up — nudge back so the cap box, not the
     em box, is what sits centred on the pill (measured, not guessed) */
  .btn .lbl{display:block;transform:translateY(calc(2 * var(--u)))}

  /* pressed: the button settles onto the surface, so the shadow tightens */
  body.press .plate{
    background:#070809;
    box-shadow:
      0 calc(var(--h) * 0.05) calc(var(--h) * 0.13) rgba(0,0,0,.82),
      0 calc(var(--h) * 0.16) calc(var(--h) * 0.40) rgba(0,0,0,.70),
      0 calc(var(--h) * 0.34) calc(var(--h) * 0.80) rgba(0,0,0,.50);
    transition-duration:.10s;
  }
</style>
</head>
<body>
<div class="stage" id="stage">
  <div class="plate" aria-hidden="true"></div>
  <canvas id="fx"></canvas>

  <button class="btn" id="btn" type="button">
    <svg class="ico" viewBox="0 0 115 115" aria-hidden="true">
      <g stroke="currentColor" stroke-width="17" stroke-linecap="round">
        <path d="M57.5 8.5 V106.5"/>
        <path d="M8.5 57.5 H106.5"/>
      </g>
    </svg>
    <span class="lbl">Sign up</span>
  </button>
</div>

<script>
/* =====================================================================
   Liquid metal — a dispersion shader.

   A scalar field V is painted through a soft plateau: dark below it, blown
   white inside, dark above.  The plateau is evaluated once per spectral
   wavelength at a slightly different height in V, so the plateau's lower
   edge fringes warm (red turns on first) and its upper edge fringes cool
   (red turns off first).  Fringe width falls out as dispersion / |grad V|,
   which is why the same shader gives razor-thin rainbow lines where the
   field is pinched and huge navy-to-cyan washes where it is not.

   V itself is built as a family of parallel curves — one swooping valley
   repeated up the button, at a density that varies along its length — so
   the ribbons stay laminar rather than turbulent.  See the shader body.
   ===================================================================== */

const VERT = `#version 300 es
in vec2 position; void main(){ gl_Position = vec4(position,0.,1.); }`;

const HEAD = `#version 300 es
precision highp float;
out vec4 o;

uniform vec2  uC;        // pill centre, device px
uniform vec2  uHalf;     // pill half-extent, device px
uniform float uT;        // seconds
uniform float uHover;    // 0..1
uniform float uPress;    // 0..1, eased
uniform vec4  uRip[3];   // xy centre (button heights, +y down), z start, w live
uniform vec4  uRipK;     // speed, ring width, decay, amplitude
uniform vec4  uRipK2;    // facet depth, facet count, crest sharpness, emission
uniform vec4  uPtr;      // xy trailing cursor, z strength, w normalised speed
uniform vec4  uPtrK;     // radius, base amplitude, speed amplitude, rim lift

#define PI 3.14159265

float sdPill(vec2 p, vec2 b, float r){
  vec2 q = abs(p) - b + r;
  return min(max(q.x,q.y),0.) + length(max(q,0.)) - r;
}

/* Expanding ring from each press, in button-height units.  Three slots so a
   quick double-tap overlaps instead of cutting the first one off.

   Two things keep it from reading as a water ripple: the wavefront is
   faceted rather than circular — its radius is modulated by angle, and the
   facets rotate as it travels — and the crest profile is a cusp rather than
   a gaussian, so it lands as a crease in sheet metal instead of a soft swell. */
float ripple(vec2 p, float t){
  float sum = 0.;
  for(int i = 0; i < 3; i++){
    if(uRip[i].w < 0.5) continue;
    float age = t - uRip[i].z;
    if(age < 0. || age > 4.) continue;
    vec2  rp = p - uRip[i].xy;
    float facet = 1. + uRipK2.x * cos(uRipK2.y * atan(rp.y, rp.x) + age * 2.1 + float(i) * 2.4);
    float x = (length(rp) - age * uRipK.x * facet) / uRipK.y;
    sum += exp(-pow(abs(x) + 1e-4, uRipK2.z)) * exp(-age * uRipK.z);
  }
  return sum;
}

/* A soft well under the cursor.  It lags behind the real pointer and swells
   with speed, so moving across the button drags the metal rather than sliding
   a static blob over it. */
float pointerW(vec2 p){
  if(uPtr.z < 0.001) return 0.;
  float d = length(p - uPtr.xy) / uPtrK.x;
  return exp(-d*d) * uPtr.z;
}
/* Displacing the sample point, not the field value, is what makes this read as
   liquid: the bands bulge and stretch around the cursor like a lens instead of
   just getting brighter under it. */
vec2 pointerWarp(vec2 p){
  float w = pointerW(p);
  if(w <= 0.) return vec2(0.);
  return normalize(p - uPtr.xy + vec2(1e-5)) * w * (uPtrK.y + uPtrK.z * uPtr.w);
}
`;

/* ---- the travelling rim, in its own pass so the blur below never touches it */
const FRAG_RIM = HEAD + `
uniform float uBw;       // stroke half-width, device px
uniform float uE[8];     // base, hot, chroma-across, chroma-along, speed,
                         // topBias, press lift, ripple lift

/* Arc-length position around the pill, 0..1, starting at the right-hand
   extreme and running counter-clockwise.  Straight runs and caps are measured
   in real length so a highlight travels at a constant speed all the way
   round instead of stalling on the caps. */
float perim(vec2 d, float a, float r){
  float P = 4.*a + 2.*PI*r;
  float s;
  if(d.x >= a){                                   // right cap
    float th = atan(d.y, d.x - a); if(th < 0.) th += 2.*PI;
    s = (th <= PI*0.5) ? r*th : P - r*(2.*PI - th);
  } else if(d.x <= -a){                           // left cap
    float th = atan(d.y, d.x + a); if(th < 0.) th += 2.*PI;
    s = r*PI*0.5 + 2.*a + r*(th - PI*0.5);
  } else if(d.y >= 0.){                           // top run
    s = r*PI*0.5 + (a - d.x);
  } else {                                        // bottom run
    s = r*PI*1.5 + 2.*a + (d.x + a);
  }
  return s / P;
}
// periodic bump, so a highlight wraps cleanly at s = 0
float pb(float u, float w){ u = fract(u); float x = min(u, 1.-u); return exp(-(x*x)/(w*w)); }

// travelling brightness around the rim — three lobes at different speeds and
// widths, which never quite re-align, so the light keeps re-pooling
float rimHot(float s, float t){
  float v = uE[0];
  v += 0.62 * pb(s - t*uE[4],             0.075);
  v += 0.44 * pb(s + t*uE[4]*0.63 + 0.41, 0.135);
  v += 0.30 * pb(s - t*uE[4]*0.34 + 0.73, 0.200);
  return v;
}
// soft band riding the pill edge, offset per channel to fringe across the stroke
float rimBand(float sd, float off){ return 1. - smoothstep(0., uBw*1.05, abs(sd + uBw*0.55 + off)); }

void main(){
  vec2  d  = gl_FragCoord.xy - uC;
  float sd = sdPill(d, uHalf, uHalf.y);
  if(sd > uBw*2.5 || sd < -uBw*3.5){ o = vec4(0.); return; }

  /* Each channel is offset both *across* the stroke and *along* it, so the rim
     fringes red-outside / cyan-inside and its hue also drifts as a highlight
     slides past — the two together are what read as metal rather than as a
     moving white dot. */
  float a = max(uHalf.x - uHalf.y, 0.);
  float s = perim(d, a, uHalf.y);
  float top = mix(1., 0.5 + 0.5 * (d.y / uHalf.y), uE[5]);

  // pressing lifts the whole outline, and each ripple flares it again as the
  // ring sweeps past — so the rim reports the press twice, once as a step and
  // once as a wave running round the edge
  // …and the stretch of outline nearest the cursor picks up a little too
  vec2  p   = vec2(d.x, -d.y) / (uHalf.y * 2.);
  float lift = 1. + uPress * uE[6] + ripple(p, uT) * uE[7]
             + pointerW(p) * uPtrK.w;

  o = vec4(vec3(
    rimBand(sd,  uE[2]) * rimHot(s + uE[3], uT),
    rimBand(sd,  0.   ) * rimHot(s,         uT),
    rimBand(sd, -uE[2]) * rimHot(s - uE[3], uT)
  ) * uE[1] * top * lift, 1.);
}`;

const FRAG_SCENE = HEAD + `
uniform float uP[21];    // tunables

float h21(vec2 p){
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float vn(vec2 p){
  vec2 i = floor(p), f = fract(p);
  f = f*f*(3.-2.*f);
  float a = h21(i), b = h21(i+vec2(1,0)), c = h21(i+vec2(0,1)), d = h21(i+vec2(1,1));
  return mix(mix(a,b,f.x), mix(c,d,f.x), f.y) * 2. - 1.;
}
// normalised to roughly -1..1; low gain keeps the first octave dominant, which
// is what keeps the ribbons big and smooth instead of turbulent
float fbm(vec2 p, float g){
  float s = 0., a = 1., n = 0.;
  for(int i=0;i<4;i++){ s += a*vn(p); n += a; p = p*2.03 + 11.7; a *= g; }
  return s / n;
}
float fbm(vec2 p){ return fbm(p, 0.5); }

/* p is in button-height units, +y down, origin at the pill centre.

   The bands in the reference are a *family of parallel curves*: one swooping
   valley repeated up the button, dense where the light is pinched and pulled
   wide open where it is not.  So the field is built that way explicitly —

       V = (y - valley(x)) * density(x)

   — rather than hoping 2-D noise happens to produce it.  Level sets of V are
   all vertical translates of the same valley curve, which is what makes the
   ribbons laminar and near-parallel; a density that varies along x is what makes
   them crowd into razor fringes at one end and open into a broad wash at the
   other.  A soft plateau over V then paints them, sampled once per
   wavelength at slightly offset heights, so every edge opens into a prism of
   width dispersion / |grad V|.                                             */

// smooth 1-D wiggle that drifts slowly with time
float wig(float x, float t, float seed){
  return vn(vec2(x,          t*0.150 + seed)) * 0.60
       + vn(vec2(x*2.07 + 4., t*0.105 + seed)) * 0.27
       + vn(vec2(x*4.30 - 7., t*0.080 + seed)) * 0.13;
}

float valleyAt(vec2 p, float t){ return wig(p.x*uP[0], t, 0.0) * uP[1]; }
float densAt  (vec2 p, float t){ return uP[2] * exp(uP[3] * wig(p.x*uP[4] + 9.0, t, 2.7)); }

float surface(vec2 p, float t){
  float V = (p.y - valleyAt(p,t)) * densAt(p,t);
  V += uP[5] * fbm(p*vec2(0.8, 1.7)*uP[6] + vec2(t*0.05, -t*0.03), uP[17]);
  return V - uP[7];
}
// One plateau per unit of V — so the density is literally bands per button height.
// A plateau rather than a step is what puts warm on the low edge and cool on
// the high edge of every ribbon.
float tone(float v){
  float u = fract(v);
  float e = uP[9], W = uP[10] * 0.5;
  return smoothstep(0.5-W-e, 0.5-W, u) * (1. - smoothstep(0.5+W, 0.5+W+e, u));
}
vec3 spec(float t){ return clamp(vec3(1.5) - abs(4.*t - vec3(3.,2.,1.)), 0., 1.); }

void main(){
  vec2  d  = gl_FragCoord.xy - uC;
  float sd = sdPill(d, uHalf, uHalf.y);
  float pill = 1. - smoothstep(-1., 1., sd);
  float S = uHalf.y * 2.;                 // button height, device px
  float t = uT;

  // rgb is premultiplied by the mask and alpha carries it, so the blur that
  // follows can normalise and keep a clean edge instead of a dark vignette
  if(uHover <= 0.0015 || pill <= 0.0015){ o = vec4(0., 0., 0., pill); return; }

  vec2  p = vec2(d.x, -d.y) / S;          // gl_FragCoord is y-up
  vec2  q = p + pointerWarp(p);           // the cursor drags the sheet

  // self-refraction: bend the lookup along the field's own slope, which piles
  // iso-lines up into folds instead of leaving them evenly spaced
  float h0 = surface(q, t);
  vec2  gp = vec2(dFdx(h0), -dFdy(h0)) * S;          // grad in p-units
  float V  = surface(q - gp * uP[8] / max(uP[2], .001), t);

  // gradient-aligned filaments: fast variation across the iso-lines, slow
  // along them, so the fine detail reads as drawn-out fibres of light
  vec2  gd = normalize(gp + vec2(1e-5));
  V += uP[13] * fbm(vec2(dot(q,gd)*uP[14], dot(q, vec2(-gd.y,gd.x))*uP[14]*0.04) + vec2(0., t*0.06));

  // press ripple: displacing the field rather than adding light means the
  // bands themselves bow outwards as the ring passes, which is what sells it
  // as a disturbance *in* the metal instead of a decal over it
  float rip  = ripple(p, t);
  float well = pointerW(p);
  V += rip * uRipK.w;

  // Real dispersion is not linear in wavelength — the blue end bends far more
  // than the red (Cauchy).  Skewing the sample offsets the same way is what
  // gives the reference its broad cool wash against a tight warm edge.
  const int N = 21;
  float mid = 1. - pow(0.5, uP[12]);
  vec3 col = vec3(0.), wsum = vec3(0.);
  for(int i=0;i<N;i++){
    float k = float(i)/float(N-1);
    vec3  w = spec(k);
    col  += w * tone(V + ((1. - pow(1. - k, uP[12])) - mid) * uP[11]);
    wsum += w;
  }
  col /= wsum;
  col = pow(col, vec3(uP[15]));

  // light envelope — the ribbons only exist where the sheet is lit, and the
  // dark upper region is bounded by the same valley curve the bands follow
  float lit = smoothstep(uP[18], uP[19], q.y - valleyAt(q, t));
  lit *= mix(1., lit, 0.55);                     // deepen the unlit crescent
  col *= uP[16] * lit;

  // the crest runs hotter, and carries a little light of its own so it stays
  // legible through the softening blur and across the unlit part of the pill
  col = col * (1. + rip * 1.15 + well * 0.60);

  o = vec4(col * pill * uHover, pill);
}`;

/* Downsample; optionally adding a second source (used to fold the rim into
   the bloom input).  Alpha rides along so the metal's coverage mask survives
   the blur chain. */
const FRAG_DOWN = `#version 300 es
precision highp float;
out vec4 o;
uniform sampler2D uTex, uTex2;
uniform vec2 uDstTexel;   // 1 / destination size  (maps dest fragCoord -> uv)
uniform vec2 uSrcTexel;   // 1 / source size       (tap spacing)
uniform float uAdd;       // 1 to include uTex2
void main(){
  vec2 uv = gl_FragCoord.xy * uDstTexel;
  // Taps sit a quarter of a *destination* texel out, so for a 2x reduction
  // they land exactly on the four source texel centres.  Spacing them by a
  // whole source texel instead — as this did originally — skips every other
  // pixel, and any fine detail in the field folds down into low-frequency
  // moiré that no amount of subsequent blurring can remove.
  vec2 e = uDstTexel * 0.25;
  vec4 s = texture(uTex, uv + vec2(-e.x,-e.y)) + texture(uTex, uv + vec2( e.x,-e.y))
         + texture(uTex, uv + vec2(-e.x, e.y)) + texture(uTex, uv + vec2( e.x, e.y));
  s *= 0.25;
  if(uAdd > 0.5){
    vec4 r = texture(uTex2, uv + vec2(-e.x,-e.y)) + texture(uTex2, uv + vec2( e.x,-e.y))
           + texture(uTex2, uv + vec2(-e.x, e.y)) + texture(uTex2, uv + vec2( e.x, e.y));
    s.rgb += r.rgb * 0.25;
  }
  o = s;
}`;

const FRAG_BLUR = `#version 300 es
precision highp float;
out vec4 o;
uniform sampler2D uTex; uniform vec2 uTexel; uniform vec2 uDir; uniform float uR;
void main(){
  vec2 uv = gl_FragCoord.xy * uTexel;
  vec2 st = uTexel * uDir * uR;
  vec4 s = texture(uTex, uv) * 0.1964;
  s += (texture(uTex, uv + st*1.4118) + texture(uTex, uv - st*1.4118)) * 0.2969;
  s += (texture(uTex, uv + st*3.2941) + texture(uTex, uv - st*3.2941)) * 0.0944;
  s += (texture(uTex, uv + st*5.1765) + texture(uTex, uv - st*5.1765)) * 0.0104;
  o = s;
}`;

const FRAG_COMP = HEAD + `
uniform sampler2D uSoft, uRim, uGlow;
uniform vec2  uRes;
uniform float uGlowGain, uGlowIn, uOccl, uDim, uPunch;

void main(){
  vec2 uv = gl_FragCoord.xy / uRes;
  vec3 glow = texture(uGlow, uv).rgb;

  vec2  d    = gl_FragCoord.xy - uC;
  float sd   = sdPill(d, uHalf, uHalf.y);
  float pill = 1. - smoothstep(-1., 1., sd);

  // normalised blur: dividing by the blurred coverage keeps the softened metal
  // full strength right up to the edge instead of fading into the mask
  vec4 m = texture(uSoft, uv);

  // Scrim, applied *after* the blur: knock the metal back through the middle
  // where the label sits, leaving the top and bottom at full brightness.  Doing
  // this before the blur would smear the protection away at high blur values.
  float veil = 1. - smoothstep(0.46, 0.88, abs(d.y) / uHalf.y);

  // Blurring flattens the tonal range into a wash; putting the contrast back
  // with a power curve — after the blur, so it costs no smoothness — is what
  // makes it read as poured metal rather than a soft glow.  Highlights keep
  // their level while the mid-tones drop away.
  vec3 metal = pow(max(m.rgb / max(m.a, 1e-3), 0.), vec3(uPunch));

  vec3 core = metal * pill * mix(1., uDim, veil) + texture(uRim, uv).rgb;

  // The ripple's own light is added here, after the blur, so the crease stays
  // a hard line.  Its displacement of the field still rides inside the
  // softened metal — the sheet bows, and the crest glints along the fold.
  float rip = ripple(vec2(d.x, -d.y) / (uHalf.y * 2.), uT);
  core += vec3(rip * rip) * uRipK2.w * pill * mix(1., 0.42, veil);

  // The button occludes its own bloom over the patch where its shadow falls,
  // so the drop shadow keeps its contrast even when the face is blown out.
  float sdSh = sdPill(d + vec2(0., uHalf.y * 0.62), uHalf * 0.94, uHalf.y * 0.94);
  float occl = uOccl * exp(-max(sdSh, 0.) / (uHalf.y * 0.75));

  // Bloom spills mostly outward; a little of it is allowed back inside so the
  // hot rim bleeds onto the face, as it does on the reference component.
  vec3 rgb = core + glow * uGlowGain * mix(1., uGlowIn, pill) * (1. - occl * (1. - pill));

  // premultiplied — the page's ambient pool and the button's drop shadow are
  // CSS underneath, and this layer adds light on top of them
  float a = clamp(max(rgb.r, max(rgb.g, rgb.b)), 0., 1.);
  o = vec4(min(rgb, vec3(1.)), a);
}`;

/* --------------------------------------------------------------- */
const cv = document.getElementById('fx');
const gl = cv.getContext('webgl2', {alpha:true, antialias:false, premultipliedAlpha:true, powerPreference:'high-performance'});
const stage = document.getElementById('stage');
const btn   = document.getElementById('btn');
const plate = document.querySelector('.plate');

// the metal field — uP[0..20]
const P = window.__P = {
  valFreq:   0.50,   // 0  x-frequency of the valley curve
  valAmp:    0.55,   // 1  valley depth, in button heights (bounded so the
                     //    ribbon can never drift entirely off the pill)
  dens:      2.40,   // 2  band density — bands per button height
  densVar:   2.20,   // 3  how much the density swings along x (exponential)
  densFreq:  0.32,   // 4  x-frequency of the density variation
  wobAmp:    0.12,   // 5  organic 2-D wobble, in field units
  wobFreq:   1.60,   // 6  its frequency
  lift:      0.05,   // 7  phase offset of the band family
  refract:   0.18,   // 8  self-refraction — folds the iso-lines
  edge:      0.04,   // 9  softness of the plateau edges
  width:     0.46,   // 10 plateau width, as a fraction of one band period
  disp:      0.30,   // 11 spectral dispersion, in band periods
  skew:      1.50,   // 12 dispersion skew — >1 spreads the blue end
  // The filaments were 20 cycles per button height — finer than the softening
  // buffer can carry, so they aliased into stripes instead of reading as
  // fibres.  At this blur they contribute nothing but that, so they are off.
  fineAmp:   0.0,    // 13 filament amplitude
  fineFreq:  9.0,    // 14 filament frequency across the iso-lines
  gamma:     1.00,   // 15 tone gamma
  gain:      1.90,   // 16 overall gain
  octGain:   0.32,   // 17 fbm octave gain — low keeps the wobble big
  litLo:    -0.26,   // 18 distance below the valley where light begins
  litHi:     0.10,   // 19 …and where it is full
  dim:       0.44    // 20 how far the metal is knocked back under the label
};
const PKEYS = Object.keys(P);

// the animated rim — uE[0..5]
const E = window.__E = {
  base:   0.20,      // 0 floor brightness, so the whole outline stays drawn
  hot:    0.82,      // 1 gain on the travelling highlights
  chromA: 0.42,      // 2 chromatic offset across the stroke, device px
  chromS: 0.030,     // 3 chromatic offset along the perimeter, in laps
  speed:  0.070,     // 4 laps per second of the leading highlight
  top:    0.35,      // 5 how much the rim stays biased to the top edge
  press:  0.85,      // 6 how far the outline brightens while held
  ripple: 1.60       // 7 extra flare as a ripple crest crosses the outline
};
const EKEYS = Object.keys(E);

// composite / JS-side only
const C = window.__C = {
  glow:   1.95,      // outer-glow gain
  glowR:  1.30,      // outer-glow radius
  glowIn: 0.30,      // how much bloom is allowed back inside the pill
  occl:   0.62,      // how much the drop shadow eats the bloom beneath it
  soften: 0.24,      // blur on the metal, in button heights — the "molten" knob
  punch:  1.50       // contrast curve on the softened metal; 1 = off
};

// disturbances — all distances in button heights, times in seconds
const R = window.__R = {
  // press ripple
  speed:  1.85,      // how fast the ring expands
  width:  0.20,      // ring thickness
  decay:  1.35,      // e-fold fade
  amp:    1.35,      // how far it displaces the metal field
  facet:  0.18,      // depth of the faceting on the wavefront
  lobes:  6.0,       // how many facets
  sharp:  1.15,      // crest profile: 2 = gaussian swell, ~1 = hard crease
  emit:   0.45,      // light the crest carries of its own
  // cursor well
  ptrRad:  0.55,     // radius of the well
  ptrAmp:  0.32,     // how far the sheet is dragged when the cursor is still
  ptrFast: 0.40,     // extra drag at full speed
  ptrRim:  0.80,     // how much the nearest rim brightens
  ptrLag:  0.0016,   // trail: fraction of the gap left after 1s (lower = snappier)
  ptrVref: 4.5       // cursor speed, in button heights/sec, that counts as "fast"
};

if(!gl){
  document.body.innerHTML = '<p style="color:#888;font:14px system-ui">WebGL2 is required for this page.</p>';
} else {

function sh(type, src){
  const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s);
  if(!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s) + '\n' + src);
  return s;
}
function prog(fs){
  const p = gl.createProgram();
  gl.attachShader(p, sh(gl.VERTEX_SHADER, VERT));
  gl.attachShader(p, sh(gl.FRAGMENT_SHADER, fs));
  gl.bindAttribLocation(p, 0, 'position');
  gl.linkProgram(p);
  if(!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(p));
  const u = {};
  const n = gl.getProgramParameter(p, gl.ACTIVE_UNIFORMS);
  for(let i=0;i<n;i++){ const info = gl.getActiveUniform(p,i); u[info.name.replace('[0]','')] = gl.getUniformLocation(p, info.name); }
  return {p, u};
}
const pScene = prog(FRAG_SCENE), pRim = prog(FRAG_RIM),
      pDown  = prog(FRAG_DOWN),  pBlur = prog(FRAG_BLUR), pComp = prog(FRAG_COMP);

const vao = gl.createVertexArray(); gl.bindVertexArray(vao);
const vbo = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 3,-1, -1,3]), gl.STATIC_DRAW);
gl.enableVertexAttribArray(0); gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

const hasFloat = !!gl.getExtension('EXT_color_buffer_half_float');
function makeTarget(){
  const tex = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  const fbo = gl.createFramebuffer();
  gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
  return {tex, fbo, w:0, h:0};
}
function sizeTarget(t, w, h){
  if(t.w === w && t.h === h) return;
  t.w = w; t.h = h;
  gl.bindTexture(gl.TEXTURE_2D, t.tex);
  if(hasFloat) gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA16F, w, h, 0, gl.RGBA, gl.HALF_FLOAT, null);
  else         gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA8,   w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
}
const T_core = makeTarget(), T_rim = makeTarget(),   // full res
      T_s1   = makeTarget(), T_s2  = makeTarget(),   // half res: metal softening
      T_a    = makeTarget(), T_b   = makeTarget();   // 1/DOWN: bloom

let W = 0, H = 0, DPR = 1, BW = 0, BH = 0, CX = 0, CY = 0;
// The bloom buffer is downsampled to keep the button ~129 texels tall at any
// size, so one set of blur radii gives a glow of the same *relative* extent
// whether this renders at 52px or as a hero.
let DOWN = 4;
const GLOW_TEX = 129;
let needResize = true;

function resize(){
  const r  = stage.getBoundingClientRect();
  const br = btn.getBoundingClientRect();
  DPR = Math.min(window.devicePixelRatio || 1, 2);
  const w = Math.max(2, Math.round(r.width  * DPR));
  const h = Math.max(2, Math.round(r.height * DPR));
  if(w !== W || h !== H){ W = w; H = h; cv.width = W; cv.height = H; }
  BW = br.width  * DPR; BH = br.height * DPR;
  CX = (br.left - r.left) * DPR + BW/2;
  CY = H - ((br.top - r.top) * DPR + BH/2);     // gl_FragCoord is y-up
  sizeTarget(T_core, W, H); sizeTarget(T_rim, W, H);
  const hw = Math.max(2, Math.ceil(W/2)), hh = Math.max(2, Math.ceil(H/2));
  sizeTarget(T_s1, hw, hh); sizeTarget(T_s2, hw, hh);
  DOWN = Math.max(1, Math.min(4, Math.round(BH / GLOW_TEX)));
  const dw = Math.max(2, Math.ceil(W/DOWN)), dh = Math.max(2, Math.ceil(H/DOWN));
  sizeTarget(T_a, dw, dh); sizeTarget(T_b, dw, dh);
  needResize = false;
}
new ResizeObserver(() => { needResize = true; }).observe(stage);

function drawTo(t){
  gl.bindFramebuffer(gl.FRAMEBUFFER, t ? t.fbo : null);
  gl.viewport(0, 0, t ? t.w : W, t ? t.h : H);
  gl.drawArrays(gl.TRIANGLES, 0, 3);
}

const uArr = new Float32Array(PKEYS.length);
const eArr = new Float32Array(EKEYS.length);
let hover = 0, hoverTarget = 0, clock = 0, last = performance.now();

// three ripple slots, reused round-robin so rapid taps overlap
const RIP = [0,1,2].map(() => ({x:0, y:0, t:-99, on:0}));
const ripArr = new Float32Array(12);
let ripNext = 0, press = 0, pressTarget = 0;

// the cursor well: a target the metal chases, plus how fast it is being moved
const ptr = {x:0, y:0}, ptrS = {x:0, y:0};
let ptrAmt = 0, ptrSpeed = 0;

function addRipple(x, y){
  const r = RIP[ripNext];
  ripNext = (ripNext + 1) % RIP.length;
  r.x = x; r.y = y; r.t = clock; r.on = 1;
}
// pointer position -> button-height units from the pill centre, +y down
function localPt(e){
  const b = btn.getBoundingClientRect(), s = b.height;
  return [(e.clientX - (b.left + b.width/2)) / s,
          (e.clientY - (b.top  + b.height/2)) / s];
}

const calm = matchMedia('(prefers-reduced-motion: reduce)');
let drawn = null;                  // signature of the last frame actually drawn

function frame(now){
  const dtRaw = (now - last) / 1000; last = now;
  const dt = Math.min(dtRaw, 1/20);
  if(!calm.matches) clock += dt;

  // asymmetric ease: quick to bloom, a touch quicker to die
  const k = hoverTarget > hover ? 1 - Math.pow(0.0012, dt) : 1 - Math.pow(0.00012, dt);
  hover += (hoverTarget - hover) * k;
  if(Math.abs(hoverTarget - hover) < 0.0008) hover = hoverTarget;

  // press snaps on and lets go slowly
  const pk = pressTarget > press ? 1 - Math.pow(1e-9, dt) : 1 - Math.pow(0.004, dt);
  press += (pressTarget - press) * pk;
  if(Math.abs(pressTarget - press) < 0.002) press = pressTarget;

  for(let i = 0; i < RIP.length; i++){
    const r = RIP[i];
    if(r.on && clock - r.t > 4) r.on = 0;
    ripArr[i*4] = r.x; ripArr[i*4+1] = r.y; ripArr[i*4+2] = r.t; ripArr[i*4+3] = r.on;
  }
  const ripLive = RIP.some(r => r.on);

  // the well trails the cursor and swells with how fast it is being dragged
  const lag = 1 - Math.pow(R.ptrLag, dt);
  const dx = (ptr.x - ptrS.x) * lag, dy = (ptr.y - ptrS.y) * lag;
  ptrS.x += dx; ptrS.y += dy;
  const inst = Math.min(Math.hypot(dx, dy) / Math.max(dt, 1e-3) / R.ptrVref, 1);
  ptrSpeed += (inst - ptrSpeed) * (1 - Math.pow(inst > ptrSpeed ? 0.001 : 0.02, dt));
  const wantWell = (on.over || on.press) ? 1 : 0;
  ptrAmt += (wantWell - ptrAmt) * (1 - Math.pow(0.004, dt));
  if(Math.abs(wantWell - ptrAmt) < 0.002) ptrAmt = wantWell;

  if(needResize) resize();

  // The rim keeps travelling even at rest, so the only truly static case is
  // reduced motion with nothing in flight.
  const sig = (calm.matches && !ripLive && ptrAmt < 0.002)
    ? `${hover}|${press}|${W}|${H}` : null;
  if(sig !== null && sig === drawn){ requestAnimationFrame(frame); return; }
  drawn = sig;

  for(let i = 0; i < uArr.length; i++) uArr[i] = P[PKEYS[i]];
  for(let i = 0; i < eArr.length; i++) eArr[i] = E[EKEYS[i]];
  const bw = Math.max(1.5, 3.2 * (BH/516));      // stroke half-width, device px

  // 1. metal + travelling rim, masked to the pill
  gl.useProgram(pScene.p);
  gl.uniform2f(pScene.u.uC, CX, CY);
  gl.uniform2f(pScene.u.uHalf, BW/2, BH/2);
  gl.uniform1f(pScene.u.uT, clock);
  gl.uniform1f(pScene.u.uHover, hover);
  gl.uniform1f(pScene.u.uPress, press);
  gl.uniform4fv(pScene.u.uRip, ripArr);
  gl.uniform4f(pScene.u.uRipK, R.speed, R.width, R.decay, R.amp);
  gl.uniform4f(pScene.u.uRipK2, R.facet, R.lobes, R.sharp, R.emit);
  gl.uniform4f(pScene.u.uPtr, ptrS.x, ptrS.y, ptrAmt, ptrSpeed);
  gl.uniform4f(pScene.u.uPtrK, R.ptrRad, R.ptrAmp, R.ptrFast, R.ptrRim);
  gl.uniform1fv(pScene.u.uP, uArr);
  drawTo(T_core);

  // 2. rim, kept out of the softening blur so the outline stays razor thin
  gl.useProgram(pRim.p);
  gl.uniform2f(pRim.u.uC, CX, CY);
  gl.uniform2f(pRim.u.uHalf, BW/2, BH/2);
  gl.uniform1f(pRim.u.uT, clock);
  gl.uniform1f(pRim.u.uBw, bw);
  gl.uniform1f(pRim.u.uPress, press);
  gl.uniform4fv(pRim.u.uRip, ripArr);
  gl.uniform4f(pRim.u.uRipK, R.speed, R.width, R.decay, R.amp);
  gl.uniform4f(pRim.u.uRipK2, R.facet, R.lobes, R.sharp, R.emit);
  gl.uniform4f(pRim.u.uPtr, ptrS.x, ptrS.y, ptrAmt, ptrSpeed);
  gl.uniform4f(pRim.u.uPtrK, R.ptrRad, R.ptrAmp, R.ptrFast, R.ptrRim);
  gl.uniform1fv(pRim.u.uE, eArr);
  drawTo(T_rim);

  // 3. soften the metal — half-res box down, then a separable gaussian.  This
  //    is what turns the prismatic ribbons molten rather than etched.
  gl.useProgram(pDown.p);
  gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, T_core.tex);
  gl.uniform1i(pDown.u.uTex, 0);
  gl.uniform1f(pDown.u.uAdd, 0);
  gl.uniform2f(pDown.u.uDstTexel, 1/T_s1.w, 1/T_s1.h);
  gl.uniform2f(pDown.u.uSrcTexel, 1/W, 1/H);
  drawTo(T_s1);

  gl.useProgram(pBlur.p);
  gl.uniform1i(pBlur.u.uTex, 0);
  gl.uniform2f(pBlur.u.uTexel, 1/T_s1.w, 1/T_s1.h);
  // Target sigma in half-res texels, tied to the button so it scales with any
  // size.  One very wide 9-tap pass leaves visible comb ghosts — the taps end
  // up further apart than the sigma they are meant to describe — so the blur
  // is split into passes whose radii add in quadrature.
  const sigTex = C.soften * (BH * 0.5) * 0.95;
  if(sigTex > 0.1){
    const iters = Math.min(4, Math.max(1, Math.ceil(sigTex / 3.0)));
    gl.uniform1f(pBlur.u.uR, sigTex / Math.sqrt(iters) / 1.95);
    for(let i = 0; i < iters; i++){
      gl.bindTexture(gl.TEXTURE_2D, T_s1.tex); gl.uniform2f(pBlur.u.uDir, 1, 0); drawTo(T_s2);
      gl.bindTexture(gl.TEXTURE_2D, T_s2.tex); gl.uniform2f(pBlur.u.uDir, 0, 1); drawTo(T_s1);
    }
  }

  // 4. bloom, fed by the softened metal plus the crisp rim
  gl.useProgram(pDown.p);
  gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, T_s1.tex);
  gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, T_rim.tex);
  gl.uniform1i(pDown.u.uTex, 0);
  gl.uniform1i(pDown.u.uTex2, 1);
  gl.uniform1f(pDown.u.uAdd, 1);
  gl.uniform2f(pDown.u.uDstTexel, 1/T_a.w, 1/T_a.h);
  gl.uniform2f(pDown.u.uSrcTexel, 1/T_s1.w, 1/T_s1.h);
  drawTo(T_a);

  gl.useProgram(pBlur.p);
  gl.activeTexture(gl.TEXTURE0);
  gl.uniform1i(pBlur.u.uTex, 0);
  gl.uniform2f(pBlur.u.uTexel, 1/T_a.w, 1/T_a.h);
  const rs = C.glowR * (BH / DOWN) / GLOW_TEX;
  for(const r of [1.0, 2.3, 5.2, 9.0].map(v => v * rs)){
    gl.uniform1f(pBlur.u.uR, r);
    gl.bindTexture(gl.TEXTURE_2D, T_a.tex); gl.uniform2f(pBlur.u.uDir, 1, 0); drawTo(T_b);
    gl.bindTexture(gl.TEXTURE_2D, T_b.tex); gl.uniform2f(pBlur.u.uDir, 0, 1); drawTo(T_a);
  }

  // 5. composite
  gl.useProgram(pComp.p);
  gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, T_s1.tex);  gl.uniform1i(pComp.u.uSoft, 0);
  gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, T_rim.tex); gl.uniform1i(pComp.u.uRim, 1);
  gl.activeTexture(gl.TEXTURE2); gl.bindTexture(gl.TEXTURE_2D, T_a.tex);   gl.uniform1i(pComp.u.uGlow, 2);
  gl.uniform2f(pComp.u.uRes, W, H);
  gl.uniform2f(pComp.u.uC, CX, CY);
  gl.uniform2f(pComp.u.uHalf, BW/2, BH/2);
  gl.uniform1f(pComp.u.uT, clock);
  gl.uniform4fv(pComp.u.uRip, ripArr);
  gl.uniform4f(pComp.u.uRipK, R.speed, R.width, R.decay, R.amp);
  gl.uniform4f(pComp.u.uRipK2, R.facet, R.lobes, R.sharp, R.emit);
  gl.uniform1f(pComp.u.uGlowGain, C.glow);
  gl.uniform1f(pComp.u.uGlowIn, C.glowIn);
  gl.uniform1f(pComp.u.uOccl, C.occl);
  gl.uniform1f(pComp.u.uDim, P.dim);
  gl.uniform1f(pComp.u.uPunch, C.punch);
  drawTo(null);

  requestAnimationFrame(frame);
}

/* ---------------- interaction ----------------
   Hover, press and focus all light the metal; press additionally throws a
   ripple from wherever it landed.  Works for mouse, touch and keyboard. */
const on = {over:false, press:false, focus:false};
const sync = () => {
  hoverTarget = (on.over || on.press || on.focus) ? 1 : 0;
  pressTarget = on.press ? 1 : 0;
  document.body.classList.toggle('hot', hoverTarget > 0.5);
  document.body.classList.toggle('press', on.press);
};

btn.addEventListener('pointerenter', e => {
  if(e.pointerType !== 'mouse') return;
  // land the well where the cursor actually entered, not where it last was
  [ptr.x, ptr.y] = localPt(e);
  ptrS.x = ptr.x; ptrS.y = ptr.y; ptrSpeed = 0;
  on.over = true; sync();
});
btn.addEventListener('pointerleave', e => { if(e.pointerType === 'mouse'){ on.over = false; sync(); } });

// the cursor drags the metal; tracked on the window so a press can slide off
// the button, but only measured while the button is actually engaged
window.addEventListener('pointermove', e => {
  if(!on.over && !on.press) return;
  [ptr.x, ptr.y] = localPt(e);
}, {passive:true});

btn.addEventListener('pointerdown', e => {
  [ptr.x, ptr.y] = localPt(e);
  on.press = true; sync();
  addRipple(ptr.x, ptr.y);
});
window.addEventListener('pointerup',     () => { on.press = false; sync(); });
window.addEventListener('pointercancel', () => { on.press = false; sync(); });
// only keyboard focus keeps it lit — a mouse click shouldn't leave the button
// glowing after the pointer has moved away
btn.addEventListener('focus', () => {
  on.focus = btn.matches(':focus-visible'); sync();
});
btn.addEventListener('blur', () => { on.focus = false; sync(); });

// keyboard activation gets the same treatment, rippling from the centre
btn.addEventListener('keydown', e => {
  if(e.key !== 'Enter' && e.key !== ' ' || e.repeat) return;
  on.press = true; sync(); addRipple(0, 0);
});
btn.addEventListener('keyup', e => {
  if(e.key !== 'Enter' && e.key !== ' ') return;
  on.press = false; sync();
});

resize();
requestAnimationFrame(frame);

// tiny console hooks for tuning
window.__set = (o = {}, e = {}, c = {}, r = {}) => {
  Object.assign(P, o); Object.assign(E, e); Object.assign(C, c); Object.assign(R, r);
  drawn = null;
};
window.__hover  = v => { on.over = !!v; sync(); };
window.__press  = v => { on.press = !!v; sync(); if(v) addRipple(0, 0); };
window.__ripple = (x = 0, y = 0) => addRipple(x, y);
window.__seek   = v => { clock = v; drawn = null; };
}
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
