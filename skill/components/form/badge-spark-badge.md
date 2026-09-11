---
name: "Badge — Spark Badge"
library: "ComponentX"
id: "badge-spark-badge"
type: "form"
quality: "lightweight"
tags: ["animated", "animation", "component", "data", "loading", "shader", "text", "webgl"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Badge — Spark Badge

> **Type:** `form` · **Quality:** `lightweight` · **ID:** `badge-spark-badge`
> **Path:** `components/form/badge-spark-badge.md`

**Badge — Spark Badge** is a premium, production-ready component from the **ComponentX** library — engineered for form interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Lightweight tier** — a minimal footprint, a small dependency surface, and a clean implementation that drops into any project with zero friction.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `animated`, `animation`, `data` workflows.
- **Pattern coverage** — includes `loading`, `shader`, `text` workflows.
- **Pattern coverage** — includes `webgl` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Badge — Spark Badge** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
name: add-spark-badge
description: "Build Spark Badge from its verified authored source using Canvas 2D, including the complete renderer, interactions, and required assets. Use when Codex needs to implement, port, or adapt this effect without requiring the ComponentX package or reconstructing the visual from an approximation."
---

# Build Spark Badge

## Description

A luminous credential badge held together by curl-noise embers, carved typography, rain occlusion, waterline sparks, and an adaptive particle field.

Recreate the authored behavior from the verified source, not from screenshots or the abbreviated orchestration sample in this skill. The implementation may live directly in the target project and does not require `@componentx/core`.

## Technologies

- React iframe host
- Self-contained Canvas 2D document
- Deterministic curl-noise particle fields
- Rasterized badge, browser, iPhone, and Studio Display masks with three ordered render passes
- Intersection and document-visibility lifecycle

## Verified source material

- `spark-badge.html — complete self-contained Canvas 2D particle scene`
- `src/shaders/spark-badge/spark-badge.html`
- `src/shaders/spark-badge/SparkBadge.tsx`

Source revision: `SHA-256 a8eefdee0d87`

## Implementation steps

1. Open every verified source file listed above and identify the renderer, host lifecycle, styles, and assets before editing.
2. Keep the shared particle seeding, rain, waterline, load governor, and dissolve/reform cycle intact while switching only the authored figure mask.
3. Serve the document from a same-project public URL and load it in an allow-scripts-only sandbox.
4. Use the badge default or pass variant="browser", variant="iphone", or variant="studio-display" to select an alternate interface mask.
5. Fill the host with the iframe and keep pointer events disabled because the authored scene is ambient.
6. Unmount the iframe when the host is offscreen or the document is hidden, then recreate it when visible so the Canvas allocation and animation loop stop cleanly.
7. Give the local component a sized, overflow-controlled parent and verify desktop, mobile, reduced-motion, and context-loss behavior.

Asset handling: Copy the self-contained spark-badge.html document with all four authored figure masks to the public URL passed through sourceUrl.

## Local component example

Import the copied local component rather than a package entrypoint:

```tsx
import { SparkBadge } from "./effects/spark-badge/SparkBadge";
import "./effects/spark-badge/styles.css";

export function Scene() {
  return <div className="effect-frame"><SparkBadge variant="studio-display" sourceUrl="/spark-badge.html" /></div>;
}
```

## Core renderer pattern

This excerpt documents orchestration only. Copy the exact shader, geometry, pass, and interaction code from the verified source files.

```tsx
<SparkBadge variant="studio-display" sourceUrl="/spark-badge.html" />
```

## Behavior contract

- Runtime: Canvas 2D
- Passes: 3 — rear rain, figure embers + waterline, foreground rain
- Interaction: Live speed, spark, rain, turbulence, and spread controls over the ambient 17-second dissolve/reform cycle
- Assets: One self-contained authored HTML scene with badge, browser, iPhone, and Studio Display masks; no external assets
- **renderer** (host): Canvas 2D
- **particles** (adaptive): 17,600 + rain + water
- **passes** (fixed): 3
- **controls** (live): Speed + sparks + rain + turbulence + spread
- **motion** (adaptive): Visibility + reduced motion
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
# Spark Badge — Badge — Complete source

Component: `SparkBadge`
Variant: **Badge** (`badge`)
Runtime: Canvas 2D
Source revision: `SHA-256 a8eefdee0d87`

## Current configured usage

```tsx
import { SparkBadge } from "@componentx/threeui";
import "@componentx/threeui/style.css";

export function Scene() {
  return (
    <div className="shader-frame">
      <SparkBadge
        speed={1.00}
        particleAmount={1.00}
        rainAmount={1.00}
        turbulence={1.00}
        spread={1.00}
      />
    </div>
  );
}
```

## Required assets

No binary assets are required.

## Full implementation source

This bundle contains all 3 required text source files. Preserve their paths and contents; none are excerpts.

### `src/shaders/spark-badge/SparkBadge.tsx`

Role: component · 128 lines · 3960 bytes · SHA-256 `2968baef448957765473ccd031f4337d376dbace5e8ec5434d0a57299ffecdda`

```tsx
import { useCallback, useEffect, useRef, useState } from "react";

export type SparkBadgeVariant = "badge" | "browser" | "iphone" | "studio-display";

export type SparkBadgeProps = {
  className?: string;
  particleAmount?: number;
  rainAmount?: number;
  sourceUrl?: string;
  speed?: number;
  spread?: number;
  turbulence?: number;
  variant?: SparkBadgeVariant;
};

export const SPARK_BADGE_DEFAULTS = {
  speed: 1,
  particleAmount: 1,
  rainAmount: 1,
  turbulence: 1,
  spread: 1,
} as const;

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(maximum, Math.max(minimum, value));
}

function sourceForVariant(sourceUrl: string, variant: SparkBadgeVariant) {
  if (variant === "badge") return sourceUrl;
  const hashIndex = sourceUrl.indexOf("#");
  const path = hashIndex === -1 ? sourceUrl : sourceUrl.slice(0, hashIndex);
  const hash = hashIndex === -1 ? "" : sourceUrl.slice(hashIndex);
  return `${path}${path.includes("?") ? "&" : "?"}variant=${variant}${hash}`;
}

const VARIANT_TITLES: Record<SparkBadgeVariant, string> = {
  badge: "Animated credential badge in rain",
  browser: "Animated browser interface in rain",
  iphone: "Animated iPhone interface in rain",
  "studio-display": "Animated studio display workspace in rain",
};

export function SparkBadge({
  className = "",
  particleAmount = SPARK_BADGE_DEFAULTS.particleAmount,
  rainAmount = SPARK_BADGE_DEFAULTS.rainAmount,
  sourceUrl = "/spark-badge.html",
  speed = SPARK_BADGE_DEFAULTS.speed,
  spread = SPARK_BADGE_DEFAULTS.spread,
  turbulence = SPARK_BADGE_DEFAULTS.turbulence,
  variant = "badge",
}: SparkBadgeProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const hostRef = useRef<HTMLDivElement>(null);
  const intersectsRef = useRef(true);
  const [mounted, setMounted] = useState(true);
  const [ready, setReady] = useState(false);
  const frameSource = sourceForVariant(sourceUrl, variant);
  const safeSpeed = clamp(speed, 0, 2);
  const safeParticleAmount = clamp(particleAmount, 0.35, 1.4);
  const safeRainAmount = clamp(rainAmount, 0, 1.5);
  const safeTurbulence = clamp(turbulence, 0, 2);
  const safeSpread = clamp(spread, 0.5, 1.75);
  const postControls = useCallback(() => {
    iframeRef.current?.contentWindow?.postMessage({
      type: "spark-badge-controls",
      controls: {
        speed: safeSpeed,
        particleAmount: safeParticleAmount,
        rainAmount: safeRainAmount,
        turbulence: safeTurbulence,
        spread: safeSpread,
      },
    }, "*");
  }, [safeParticleAmount, safeRainAmount, safeSpeed, safeSpread, safeTurbulence]);

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

  useEffect(() => setReady(false), [frameSource]);

  useEffect(() => {
    postControls();
  }, [postControls]);

  return (
    <div
      ref={hostRef}
      className={`spark-badge${className ? ` ${className}` : ""}`}
      data-state={!mounted ? "paused" : ready ? "ready" : "loading"}
      data-variant={variant}
    >
      {mounted ? (
        <iframe
          ref={iframeRef}
          className={`spark-badge__frame${ready ? " is-ready" : ""}`}
          title={VARIANT_TITLES[variant]}
          src={frameSource}
          sandbox="allow-scripts"
          loading="eager"
          onLoad={() => {
            postControls();
            setReady(true);
          }}
        />
      ) : null}
    </div>
  );
}
```

### `src/shaders/spark-badge/spark-badge.html`

Role: scene-source · 912 lines · 38119 bytes · SHA-256 `a8eefdee0d87deefae9b8b8dac4d79c0ee41447578a78090cad9c956e33ccf90`

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>Spark Badge — credential in rain</title>
<link rel="icon" href="data:,">
<style>
  html,body{margin:0;height:100%;background:#000;overflow:hidden}
  body{-webkit-font-smoothing:antialiased}
  canvas{display:block;width:100vw;height:100vh;background:#000}
</style>
</head>
<body>
<canvas id="c"></canvas>
<script>
(() => {
'use strict';
const TAU = Math.PI * 2;
const params = new URLSearchParams(location.search);
const requestedVariant = params.get('variant');
const sceneVariant = requestedVariant === 'browser' || requestedVariant === 'iphone' || requestedVariant === 'studio-display' ? requestedVariant : 'badge';
const runtimeControls = {
  speed: 1,
  particleAmount: 1,
  rainAmount: 1,
  turbulence: 1,
  spread: 1
};
window.__sparkBadgeControls = runtimeControls;
const reflectControls = () => {
  document.documentElement.dataset.sparkControls = JSON.stringify(runtimeControls);
};
reflectControls();

/* ------------------------------------------------------------------ *
 *  rng + noise
 * ------------------------------------------------------------------ */
function mulberry32(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
const rnd = mulberry32(0x5EED12);

const NS = 256, NM = NS - 1;

// tileable smooth scalar field -> its curl, precomputed once
function makeCurlField(seed){
  const r = mulberry32(seed);
  let a = new Float32Array(NS*NS), b = new Float32Array(NS*NS);
  for (let i = 0; i < NS*NS; i++) a[i] = r();
  const R = 5;
  for (let p = 0; p < 3; p++){
    for (let y = 0; y < NS; y++){ const o = y*NS;
      for (let x = 0; x < NS; x++){ let s = 0; for (let k = -R; k <= R; k++) s += a[o + ((x+k)&NM)]; b[o+x] = s/(2*R+1); } }
    for (let x = 0; x < NS; x++){
      for (let y = 0; y < NS; y++){ let s = 0; for (let k = -R; k <= R; k++) s += b[(((y+k)&NM)*NS)+x]; a[y*NS+x] = s/(2*R+1); } }
  }
  let mn = Infinity, mx = -Infinity;
  for (let i = 0; i < NS*NS; i++){ if (a[i] < mn) mn = a[i]; if (a[i] > mx) mx = a[i]; }
  const sc = 2/(mx-mn);
  for (let i = 0; i < NS*NS; i++) a[i] = (a[i]-mn)*sc - 1;
  // curl of scalar potential: (dP/dy, -dP/dx), wide stencil keeps it smooth
  const cx = new Float32Array(NS*NS), cy = new Float32Array(NS*NS);
  const H = 2;
  let vmax = 0;
  for (let y = 0; y < NS; y++) for (let x = 0; x < NS; x++){
    const dy = a[(((y+H)&NM)*NS)+x] - a[(((y-H+NS)&NM)*NS)+x];
    const dx = a[y*NS+((x+H)&NM)]   - a[y*NS+((x-H+NS)&NM)];
    const i = y*NS+x; cx[i] = dy; cy[i] = -dx;
    const m = Math.abs(dy) + Math.abs(dx); if (m > vmax) vmax = m;
  }
  const inv = 1.9/vmax;
  for (let i = 0; i < NS*NS; i++){ cx[i] *= inv; cy[i] *= inv; }
  return {cx, cy};
}
const F1 = makeCurlField(0x1234), F2 = makeCurlField(0x9ABC);

const _cv = [0,0];
function curlSample(F, x, y, out){
  x *= NS; y *= NS;
  let x0 = Math.floor(x), y0 = Math.floor(y);
  const fx = x - x0, fy = y - y0;
  x0 &= NM; y0 &= NM;
  const x1 = (x0+1)&NM, y1 = (y0+1)&NM;
  const u = fx*fx*(3-2*fx), v = fy*fy*(3-2*fy);
  const i00 = y0*NS+x0, i01 = y0*NS+x1, i10 = y1*NS+x0, i11 = y1*NS+x1;
  const ax = F.cx[i00] + (F.cx[i01]-F.cx[i00])*u, bx = F.cx[i10] + (F.cx[i11]-F.cx[i10])*u;
  const ay = F.cy[i00] + (F.cy[i01]-F.cy[i00])*u, by = F.cy[i10] + (F.cy[i11]-F.cy[i10])*u;
  out[0] = ax + (bx-ax)*v;
  out[1] = ay + (by-ay)*v;
}
let CT = 0; // field clock
function curlAt(x, y, out){
  curlSample(F1, x*1.30 + CT*0.011, y*1.30 - CT*0.019, _cv);
  let ox = _cv[0], oy = _cv[1];
  curlSample(F2, x*3.05 - CT*0.026, y*3.05 + CT*0.015, _cv);
  out[0] = ox + _cv[0]*0.45;
  out[1] = oy + _cv[1]*0.45;
}

/* ------------------------------------------------------------------ *
 *  figure — authored in art space (0..1 square), rasterised to a mask
 * ------------------------------------------------------------------ */
const MW = 768;                      // mask width == one art unit
const AY0 = -0.55, AH = 1.55;        // slab covers art y from -0.55 to 1.00, so
const MH = Math.round(MW * AH);      // the lanyard has somewhere to exist above

/* Per-region emission: [ink, drift].
   ink   — share of the frame's light this edge gets.
   drift — how far its embers travel. The card and its printing stay pinned so
           the manufactured edges read razor-crisp; only the straps and the
           card's outer rim are allowed to plume.                            */
const EMPH = {
  base:   [1.00, 0.80],
  strap:  [1.35, 1.15], clip: [2.30, 0.42],
  card:   [1.95, 0.55], slot: [2.00, 0.20],
  rule:   [1.05, 0.15], word: [1.75, 0.17], edition: [1.80, 0.18],
  window: [1.70, 0.16], meta: [1.15, 0.15], name: [2.10, 0.18],
  tier:   [1.85, 0.17], qr:   [1.45, 0.20]
};
const B = 78;
const W2G = k => { const e = EMPH[k];
  const r = Math.max(0, Math.min(255, Math.round(e[0]*B)));
  const g = Math.max(0, Math.min(255, Math.round(e[1]*B)));
  return 'rgb('+r+','+g+',0)'; };

function buildMasks(){
  const solid = document.createElement('canvas'); solid.width = MW; solid.height = MH;
  const emph  = document.createElement('canvas'); emph.width  = MW; emph.height  = MH;
  const gm = solid.getContext('2d');
  const ge = emph.getContext('2d');
  ge.fillStyle = W2G('base'); ge.fillRect(0, 0, MW, MH);

  const S = MW;
  gm.translate(0, -AY0*S); ge.translate(0, -AY0*S);   // art y=0 sits AY0 down the slab
  const key = k => { const c = W2G(k); gm.fillStyle = '#fff'; gm.strokeStyle = '#fff'; ge.fillStyle = c; ge.strokeStyle = c; };
  const both = fn => { fn(gm); fn(ge); };

  // rounded rect in art units, built on one context
  const rr = (c, x0, y0, x1, y1, r) => {
    const X0=x0*S, Y0=y0*S, X1=x1*S, Y1=y1*S, R=r*S;
    c.beginPath();
    c.moveTo(X0+R, Y0);
    c.arcTo(X1,Y0, X1,Y1, R);
    c.arcTo(X1,Y1, X0,Y1, R);
    c.arcTo(X0,Y1, X0,Y0, R);
    c.arcTo(X0,Y0, X1,Y0, R);
    c.closePath();
  };
  const poly = (c, a) => {
    c.beginPath(); c.moveTo(a[0][0]*S, a[0][1]*S);
    for (let i = 1; i < a.length; i++) c.lineTo(a[i][0]*S, a[i][1]*S);
    c.closePath();
  };
  const SC = 1.12;                          // grown from the base so the card fills more frame
  const tilt = c => {
    c.save();
    c.translate(0.500*S, 0.862*S); c.scale(SC, SC); c.translate(-0.500*S, -0.862*S);
    c.translate(0.500*S, 0.300*S); c.rotate(-0.048); c.translate(-0.500*S, -0.300*S);
  };

  if (sceneVariant === 'browser') {
    /* ---- browser: one broad silhouette, with the same particle material ---- */
    key('card');
    both(c => { rr(c, 0.090, 0.240, 0.910, 0.820, 0.036); c.fill(); });
  } else if (sceneVariant === 'iphone') {
    /* ---- iPhone: portrait hardware, side controls, and a full-height screen ---- */
    key('clip');
    both(c => { rr(c, 0.304, 0.292, 0.324, 0.356, 0.009); c.fill(); });
    both(c => { rr(c, 0.304, 0.382, 0.324, 0.466, 0.009); c.fill(); });
    both(c => { rr(c, 0.676, 0.338, 0.696, 0.452, 0.009); c.fill(); });
    key('card');
    both(c => { rr(c, 0.318, 0.155, 0.682, 0.858, 0.066); c.fill(); });
  } else if (sceneVariant === 'studio-display') {
    /* ---- Studio Display: slim widescreen panel on an architectural stand ---- */
    key('clip');
    both(c => { poly(c, [[0.466,0.650],[0.534,0.650],[0.566,0.808],[0.434,0.808]]); c.fill(); });
    both(c => { rr(c, 0.338, 0.796, 0.662, 0.838, 0.021); c.fill(); });
    key('card');
    both(c => { rr(c, 0.100, 0.180, 0.900, 0.680, 0.032); c.fill(); });
  } else {
    /* ---- lanyard: two ribbons rising out of frame to the clip ---- */
    key('strap');
    both(c => { poly(c, [[-0.315,-0.55],[-0.236,-0.55],[0.500,0.208],[0.460,0.208]]); c.fill(); });
    both(c => { poly(c, [[ 1.236,-0.55],[ 1.315,-0.55],[0.540,0.208],[0.500,0.208]]); c.fill(); });

    /* ---- clip and card, both grown off the base ---- */
    key('clip');
    both(c => { tilt(c); rr(c, 0.4536, 0.248, 0.5464, 0.306, 0.010); c.fill(); c.restore(); });
    key('card');
    both(c => { tilt(c); rr(c, 0.312, 0.296, 0.688, 0.862, 0.024); c.fill(); c.restore(); });
  }

  // snapshot the un-carved silhouette for rain occlusion
  const occ = document.createElement('canvas'); occ.width = MW; occ.height = MH;
  occ.getContext('2d').drawImage(solid, 0, 0);

  /* ---- everything printed on the card is carved out of it, so its edges
         light up. The mask loses material; the weight map gets the same
         shape painted wide, so embers born there inherit the right pull. --- */
  gm.globalCompositeOperation = 'destination-out';
  gm.lineCap = 'round'; gm.lineJoin = 'round';
  ge.lineCap = 'round'; ge.lineJoin = 'round';

  const cutRR = (x0,y0,x1,y1,r,k) => {
    rr(gm,x0,y0,x1,y1,r); gm.fill();
    ge.fillStyle = W2G(k); ge.strokeStyle = W2G(k); ge.lineWidth = 0.019*S;
    rr(ge,x0,y0,x1,y1,r); ge.fill(); ge.stroke();
  };
  const frameRR = (x0,y0,x1,y1,r,w,k) => {
    gm.lineWidth = w*S; rr(gm,x0,y0,x1,y1,r); gm.stroke();
    ge.strokeStyle = W2G(k); ge.lineWidth = (w + 0.017)*S;
    rr(ge,x0,y0,x1,y1,r); ge.stroke();
  };
  const cutLine = (x0,y0,x1,y1,w,k) => {
    gm.lineWidth = w*S; gm.beginPath(); gm.moveTo(x0*S,y0*S); gm.lineTo(x1*S,y1*S); gm.stroke();
    ge.strokeStyle = W2G(k); ge.lineWidth = (w + 0.016)*S;
    ge.beginPath(); ge.moveTo(x0*S,y0*S); ge.lineTo(x1*S,y1*S); ge.stroke();
  };
  const cutCircle = (x,y,r,k) => {
    gm.beginPath(); gm.arc(x*S,y*S,r*S,0,TAU); gm.fill();
    ge.fillStyle = W2G(k); ge.strokeStyle = W2G(k); ge.lineWidth = 0.017*S;
    ge.beginPath(); ge.arc(x*S,y*S,r*S,0,TAU); ge.fill(); ge.stroke();
  };

  if (sceneVariant === 'browser') {
    /* ---- recognizable browser chrome and page modules, all carved from the
           same mask so every line is rebuilt by the original spark field. ---- */
    cutLine(0.090, 0.342, 0.910, 0.342, 0.0050, 'rule');
    cutCircle(0.138, 0.291, 0.011, 'edition');
    cutCircle(0.178, 0.291, 0.011, 'edition');
    cutCircle(0.218, 0.291, 0.011, 'edition');
    cutRR(0.284, 0.269, 0.785, 0.314, 0.022, 'word');
    cutCircle(0.319, 0.291, 0.006, 'meta');
    cutLine(0.334, 0.291, 0.531, 0.291, 0.0040, 'meta');
    cutCircle(0.848, 0.278, 0.0045, 'edition');
    cutCircle(0.848, 0.292, 0.0045, 'edition');
    cutCircle(0.848, 0.306, 0.0045, 'edition');

    frameRR(0.126, 0.382, 0.306, 0.769, 0.014, 0.0050, 'window');
    cutRR(0.156, 0.410, 0.196, 0.450, 0.010, 'name');
    cutLine(0.214, 0.424, 0.273, 0.424, 0.0045, 'meta');
    cutLine(0.214, 0.440, 0.254, 0.440, 0.0036, 'meta');
    for (const y of [0.492, 0.542, 0.592, 0.642]) {
      cutCircle(0.164, y, 0.007, 'edition');
      cutLine(0.185, y, 0.268, y, 0.0040, 'meta');
    }
    cutRR(0.151, 0.704, 0.280, 0.742, 0.019, 'tier');

    frameRR(0.342, 0.382, 0.874, 0.558, 0.014, 0.0050, 'window');
    cutRR(0.374, 0.414, 0.572, 0.449, 0.006, 'name');
    cutLine(0.374, 0.474, 0.678, 0.474, 0.0040, 'meta');
    cutLine(0.374, 0.494, 0.619, 0.494, 0.0040, 'meta');
    cutRR(0.374, 0.516, 0.486, 0.542, 0.013, 'tier');
    cutCircle(0.787, 0.468, 0.041, 'edition');
    cutLine(0.766, 0.468, 0.807, 0.468, 0.0042, 'word');
    cutLine(0.787, 0.447, 0.787, 0.489, 0.0042, 'word');

    for (const [x0,x1] of [[0.342,0.504],[0.527,0.689],[0.712,0.874]]) {
      frameRR(x0, 0.594, x1, 0.769, 0.014, 0.0048, 'window');
      cutRR(x0+0.024, 0.620, x1-0.024, 0.674, 0.008, 'edition');
      cutLine(x0+0.024, 0.706, x1-0.038, 0.706, 0.0040, 'meta');
      cutLine(x0+0.024, 0.729, x1-0.062, 0.729, 0.0038, 'meta');
    }

    gm.globalCompositeOperation = 'source-over';
    return { detail: solid, occ, emph };
  }

  if (sceneVariant === 'iphone') {
    /* ---- a modern iPhone screen: Dynamic Island, app header, feature card,
           icon grid, dock, and home indicator, all cut from one spark mask. ---- */
    frameRR(0.338, 0.176, 0.662, 0.837, 0.052, 0.0050, 'window');
    cutRR(0.426, 0.190, 0.574, 0.226, 0.018, 'word');
    cutLine(0.354, 0.210, 0.397, 0.210, 0.0038, 'meta');
    cutLine(0.607, 0.210, 0.626, 0.210, 0.0038, 'meta');
    cutCircle(0.642, 0.210, 0.0055, 'edition');

    cutCircle(0.371, 0.276, 0.013, 'edition');
    cutLine(0.404, 0.268, 0.526, 0.268, 0.0050, 'name');
    cutLine(0.404, 0.286, 0.485, 0.286, 0.0038, 'meta');
    cutCircle(0.626, 0.276, 0.014, 'edition');

    frameRR(0.356, 0.318, 0.644, 0.468, 0.024, 0.0050, 'window');
    cutRR(0.380, 0.344, 0.514, 0.374, 0.006, 'name');
    cutLine(0.380, 0.401, 0.536, 0.401, 0.0040, 'meta');
    cutLine(0.380, 0.423, 0.506, 0.423, 0.0038, 'meta');
    cutRR(0.380, 0.442, 0.466, 0.459, 0.0085, 'tier');
    cutCircle(0.585, 0.393, 0.034, 'edition');
    cutLine(0.568, 0.393, 0.602, 0.393, 0.0038, 'word');
    cutLine(0.585, 0.376, 0.585, 0.410, 0.0038, 'word');

    cutLine(0.356, 0.506, 0.494, 0.506, 0.0050, 'name');
    cutLine(0.356, 0.528, 0.606, 0.528, 0.0038, 'meta');
    for (const [x,y] of [[0.356,0.558],[0.454,0.558],[0.552,0.558],[0.356,0.652],[0.454,0.652],[0.552,0.652]]) {
      cutRR(x, y, x+0.072, y+0.064, 0.018, 'edition');
      cutLine(x+0.008, y+0.080, x+0.064, y+0.080, 0.0035, 'meta');
    }

    frameRR(0.350, 0.754, 0.650, 0.812, 0.029, 0.0048, 'window');
    for (const x of [0.390, 0.463, 0.537, 0.610]) cutCircle(x, 0.783, 0.015, 'tier');
    cutRR(0.445, 0.824, 0.555, 0.832, 0.004, 'word');

    gm.globalCompositeOperation = 'source-over';
    return { detail: solid, occ, emph };
  }

  if (sceneVariant === 'studio-display') {
    /* ---- a complete creative studio workspace inside the display: camera,
           command bar, tool rail, artboard, inspector, and edit timeline. ---- */
    frameRR(0.126, 0.208, 0.874, 0.648, 0.018, 0.0052, 'window');
    cutCircle(0.500, 0.194, 0.0065, 'edition');
    cutLine(0.126, 0.270, 0.874, 0.270, 0.0050, 'rule');
    cutCircle(0.156, 0.239, 0.0065, 'edition');
    cutCircle(0.178, 0.239, 0.0065, 'edition');
    cutRR(0.215, 0.226, 0.405, 0.250, 0.012, 'word');
    cutLine(0.230, 0.238, 0.324, 0.238, 0.0038, 'meta');
    cutRR(0.769, 0.224, 0.847, 0.252, 0.014, 'tier');

    frameRR(0.144, 0.290, 0.232, 0.626, 0.012, 0.0048, 'window');
    for (const y of [0.322, 0.372, 0.422, 0.472, 0.522, 0.572]) {
      cutCircle(0.171, y, 0.007, 'edition');
      cutLine(0.190, y, 0.213, y, 0.0038, 'meta');
    }

    frameRR(0.252, 0.290, 0.676, 0.528, 0.014, 0.0050, 'window');
    cutRR(0.280, 0.314, 0.430, 0.338, 0.005, 'name');
    cutLine(0.280, 0.358, 0.404, 0.358, 0.0038, 'meta');
    cutCircle(0.521, 0.409, 0.054, 'edition');
    cutLine(0.486, 0.409, 0.556, 0.409, 0.0040, 'word');
    cutLine(0.521, 0.374, 0.521, 0.444, 0.0040, 'word');
    frameRR(0.280, 0.472, 0.648, 0.503, 0.006, 0.0038, 'meta');
    cutLine(0.300, 0.487, 0.420, 0.487, 0.0034, 'meta');

    frameRR(0.696, 0.290, 0.856, 0.626, 0.012, 0.0048, 'window');
    cutRR(0.720, 0.316, 0.807, 0.337, 0.005, 'name');
    for (const y of [0.374, 0.424, 0.474, 0.524]) {
      cutLine(0.720, y, 0.822, y, 0.0038, 'meta');
      cutCircle(0.828, y, 0.006, 'edition');
    }
    cutRR(0.720, 0.560, 0.832, 0.592, 0.016, 'tier');

    frameRR(0.252, 0.548, 0.676, 0.626, 0.010, 0.0046, 'window');
    cutLine(0.274, 0.571, 0.652, 0.571, 0.0036, 'meta');
    cutLine(0.274, 0.600, 0.652, 0.600, 0.0036, 'meta');
    for (const x of [0.334, 0.414, 0.494, 0.574]) cutRR(x, 0.562, x+0.046, 0.610, 0.006, 'edition');
    cutLine(0.468, 0.552, 0.468, 0.622, 0.0042, 'word');

    gm.globalCompositeOperation = 'source-over';
    return { detail: solid, occ, emph };
  }

  tilt(gm); tilt(ge);

  cutRR(0.462, 0.316, 0.538, 0.334, 0.009, 'slot');        // punched lanyard slot

  cutRR(0.342, 0.356, 0.500, 0.386, 0.005, 'word');        // wordmark plate
  cutRR(0.576, 0.362, 0.658, 0.379, 0.004, 'edition');     // edition code
  cutLine(0.342, 0.402, 0.658, 0.402, 0.0045, 'rule');     // header rule

  frameRR(0.342, 0.420, 0.658, 0.600, 0.007, 0.005, 'window');   // portrait window

  cutLine(0.342, 0.626, 0.556, 0.626, 0.0040, 'meta');     // date / venue line
  cutRR(0.342, 0.648, 0.604, 0.690, 0.005, 'name');        // name plate
  cutLine(0.342, 0.708, 0.540, 0.708, 0.0040, 'meta');     // role line
  cutLine(0.342, 0.744, 0.658, 0.744, 0.0045, 'rule');     // divider
  cutRR(0.342, 0.764, 0.470, 0.802, 0.019, 'tier');        // access-tier pill
  cutLine(0.342, 0.822, 0.450, 0.822, 0.0038, 'meta');     // serial

  /* ---- data block ---- */
  (() => {
    const x0 = 0.540, y0 = 0.752, m = 0.0197;              // 6 modules across, 5 down
    frameRR(x0, y0, x0+m*6, y0+m*5, 0.004, 0.0038, 'qr');
    for (const [cxm, cym] of [[0,0],[4,0],[0,3]]){          // finder squares
      const fx0 = x0 + (cxm+0.35)*m, fy0 = y0 + (cym+0.35)*m;
      frameRR(fx0, fy0, fx0+m*1.3, fy0+m*1.3, 0.0018, 0.0034, 'qr');
    }
    const r = mulberry32(0x51DE);
    for (let gy = 0; gy < 5; gy++) for (let gx = 0; gx < 6; gx++){
      if ((gx < 2 && gy < 2) || (gx > 3 && gy < 2) || (gx < 2 && gy > 2)) continue;
      if (r() > 0.46) continue;
      const mx = x0 + (gx+0.28)*m, my = y0 + (gy+0.28)*m;
      cutRR(mx, my, mx+m*0.62, my+m*0.62, 0.0012, 'qr');
    }
  })();

  /* ---- the window carries the Codex wordmark. Small type dissolves at
         ember scale, so the letters use a compact authored single-line
         alphabet with enough room to stay legible through the particle pass. ---- */
  const GLYPH_WIDTHS = { C: 0.52, o: 0.44, d: 0.48, e: 0.44, x: 0.42 };
  const glyph = (ch, x, y, h) => {
    const w = h * GLYPH_WIDTHS[ch];
    ge.strokeStyle = W2G('edition');
    both(c => {
      c.beginPath();
      if (ch === 'C') {
        c.moveTo(x+w*0.91, y+h*0.14);
        c.bezierCurveTo(x+w*0.72, y-h*0.01, x+w*0.22, y-h*0.02, x+w*0.10, y+h*0.49);
        c.bezierCurveTo(x+w*0.00, y+h*0.94, x+w*0.55, y+h*1.10, x+w*0.93, y+h*0.84);
      } else if (ch === 'o') {
        c.ellipse(x+w*0.50, y+h*0.63, w*0.43, h*0.35, 0, 0, TAU);
      } else if (ch === 'd') {
        c.ellipse(x+w*0.42, y+h*0.64, w*0.35, h*0.34, 0, 0, TAU);
        c.moveTo(x+w*0.77, y);
        c.lineTo(x+w*0.77, y+h*0.98);
      } else if (ch === 'e') {
        c.moveTo(x+w*0.91, y+h*0.62);
        c.lineTo(x+w*0.10, y+h*0.62);
        c.bezierCurveTo(x+w*0.13, y+h*0.25, x+w*0.84, y+h*0.18, x+w*0.88, y+h*0.57);
        c.bezierCurveTo(x+w*0.94, y+h*0.94, x+w*0.32, y+h*1.08, x+w*0.12, y+h*0.82);
      } else if (ch === 'x') {
        c.moveTo(x+w*0.08, y+h*0.30);
        c.lineTo(x+w*0.92, y+h*0.98);
        c.moveTo(x+w*0.92, y+h*0.30);
        c.lineTo(x+w*0.08, y+h*0.98);
      }
      c.stroke();
    });
    return w;
  };
  (() => {
    const str = 'Codex', h = 0.087*S, gap = h*0.11, cx = 0.500*S, cy = 0.512*S;
    let tot = 0; for (const ch of str) tot += h*GLYPH_WIDTHS[ch] + gap; tot -= gap;
    gm.lineWidth = 0.0068*S; ge.lineWidth = 0.019*S;
    let x = cx - tot/2; const y = cy - h/2;
    for (const ch of str) x += glyph(ch, x, y, h) + gap;
  })();

  gm.restore(); ge.restore();
  gm.globalCompositeOperation = 'source-over';
  return { detail: solid, occ, emph };
}

/* ------------------------------------------------------------------ *
 *  emitters: silhouette edges of the mask, with outward normals
 * ------------------------------------------------------------------ */
function buildEmitters(maskCanvas, emphCanvas){
  const g = maskCanvas.getContext('2d');
  const d = g.getImageData(0, 0, MW, MH).data;
  const ed = emphCanvas.getContext('2d').getImageData(0, 0, MW, MH).data;
  let a = new Float32Array(MW*MH), b = new Float32Array(MW*MH);
  for (let i = 0; i < MW*MH; i++) a[i] = d[i*4+3]/255;
  const R = 2;                                    // soften so gradients are stable
  for (let p = 0; p < 2; p++){
    for (let y = 0; y < MH; y++){ const o = y*MW;
      for (let x = 0; x < MW; x++){ let s = 0, n = 0;
        for (let k = -R; k <= R; k++){ const xx = x+k; if (xx<0||xx>=MW) continue; s += a[o+xx]; n++; }
        b[o+x] = s/n; } }
    for (let x = 0; x < MW; x++){
      for (let y = 0; y < MH; y++){ let s = 0, n = 0;
        for (let k = -R; k <= R; k++){ const yy = y+k; if (yy<0||yy>=MH) continue; s += b[yy*MW+x]; n++; }
        a[y*MW+x] = s/n; } }
  }
  const ex = [], ey = [], enx = [], eny = [], ew = [], ee = [], edr = [];
  for (let y = 1; y < MH-1; y++) for (let x = 1; x < MW-1; x++){
    const i = y*MW+x;
    const gx = a[i+1] - a[i-1], gy = a[i+MW] - a[i-MW];
    const m = Math.hypot(gx, gy);
    if (m < 0.035) continue;
    const w = ed[i*4]/78, dr = ed[i*4+1]/78;    // region emphasis, sampled on the edge
    ex.push(x/MW); ey.push(y/MW + AY0);
    enx.push(-gx/m); eny.push(-gy/m);
    ew.push(m * w); ee.push(w); edr.push(dr);
  }
  // cdf for weighted sampling
  const n = ew.length, cdf = new Float32Array(n);
  let acc = 0;
  for (let i = 0; i < n; i++){ acc += ew[i]; cdf[i] = acc; }
  return {
    n, total: acc, cdf,
    x: Float32Array.from(ex), y: Float32Array.from(ey),
    nx: Float32Array.from(enx), ny: Float32Array.from(eny),
    e: Float32Array.from(ee), dr: Float32Array.from(edr),
    pick(){
      const t = rnd()*this.total;
      let lo = 0, hi = this.n-1;
      while (lo < hi){ const mid = (lo+hi)>>1; if (this.cdf[mid] < t) lo = mid+1; else hi = mid; }
      return lo;
    }
  };
}

/* ------------------------------------------------------------------ *
 *  stage
 * ------------------------------------------------------------------ */
const cv = document.getElementById('c');
const ctx = cv.getContext('2d', { alpha: false });
let VW = 0, VH = 0, DPR = 1, ART = { x:0, y:0, s:0 }, LW = 1, WATER = 0;

const WANG = 60 * Math.PI/180;
const WIND = { x: Math.cos(WANG), y: Math.sin(WANG) };

const MASKS = buildMasks();
const EM = buildEmitters(MASKS.detail, MASKS.emph);

/* ---- strand pools ----
   A spark is a moving particle drawn as its own motion blur: a short tick
   along its current heading. Slow embers around the figure read as flecks;
   fast rain reads as a long streak. Same renderer, different speeds.        */
const SEG = 0.0082;                 // segment length as a fraction of the stage
// Counts calibrated against the reference at a 900px stage. Marks scale with
// the stage, so the budget has to scale too or a retina display thins out.
const NF0 = 17600, NR0 = 300, NW0 = 460, REF_S = 900;
let NF = NF0, NR = NR0, NW = NW0;
let BASE_NF = NF0, BASE_NR = NR0, BASE_NW = NW0;
const CAP_F = 40000, CAP_R = 1400, CAP_W = 1600;

function applyParticleCounts(){
  NF = Math.min(CAP_F, Math.max(1, Math.round(BASE_NF * runtimeControls.particleAmount)));
  NR = Math.min(CAP_R, Math.max(0, Math.round(BASE_NR * runtimeControls.rainAmount)));
  NW = Math.min(CAP_W, Math.max(1, Math.round(BASE_NW * runtimeControls.particleAmount)));
}

addEventListener('message', event => {
  if (!event.data) return;
  if (event.data.type === 'spark-badge-step') {
    const d = Number.isFinite(event.data.delta) ? Math.max(0, Math.min(0.1, event.data.delta)) : 1/30;
    CT += d;
    cycle();
    stepRain(d); stepFur(d); stepWater(d);
    render();
    if (parent !== window) parent.postMessage({ type: 'spark-badge-stepped', frame: event.data.frame }, '*');
    return;
  }
  if (event.data.type !== 'spark-badge-controls') return;
  const next = event.data.controls || {};
  const set = (key, lo, hi) => {
    if (Number.isFinite(next[key])) runtimeControls[key] = Math.max(lo, Math.min(hi, next[key]));
  };
  set('speed', 0, 2);
  set('particleAmount', 0.35, 1.4);
  set('rainAmount', 0, 1.5);
  set('turbulence', 0, 2);
  set('spread', 0.5, 1.75);
  applyParticleCounts();
  reflectControls();
});

const mk = n => ({
  x: new Float32Array(n), y: new Float32Array(n),
  nx: new Float32Array(n), ny: new Float32Array(n),   // heading of the tick
  rx: new Float32Array(n), ry: new Float32Array(n),   // launch normal
  spd: new Float32Array(n),
  len: new Float32Array(n), br: new Float32Array(n),
  seed: new Float32Array(n), style: new Uint8Array(n),
  life: new Float32Array(n), max: new Float32Array(n),
  vx: new Float32Array(n), vy: new Float32Array(n),   // rain velocity
  pin: new Float32Array(n),                           // 0 = plumes freely, 1 = held on the contour
  age: new Float32Array(n),                           // seconds since spawn (rain fade-in)
  k: new Uint8Array(n)
});
const FUR = mk(CAP_F), RAIN = mk(CAP_R), WAT = mk(CAP_W);

const pickStyle = () => { const r = rnd(); return r < 0.46 ? 0 : (r < 0.78 ? 1 : 2); };
const stepsFor = (len, lo, hi) => Math.max(lo, Math.min(hi, Math.round(len/(SEG*ART.s))));

function pickHot(){                                   // rejection-sample toward the currently hot arcs
  let e = EM.pick();
  for (let t = 0; t < 3; t++){
    curlSample(F1, EM.x[e]*0.85 + CT*0.045, EM.y[e]*0.85 - CT*0.030, _cv);
    const h = _cv[0]*0.5 + 0.5;
    if (rnd() < h*h*1.15) break;
    e = EM.pick();
  }
  return e;
}

function spawnFur(i, seeded){
  const e = pickHot();
  const j = 0.0032 * ART.s;
  FUR.x[i] = ART.x + EM.x[e]*ART.s + (rnd()-0.5)*j;
  FUR.y[i] = ART.y + EM.y[e]*ART.s + (rnd()-0.5)*j;
  const em = EM.e[e], eb = Math.sqrt(em), dr = EM.dr[e];
  // pin = how strongly this edge holds its embers in place. A pinned ember
  // barely moves and lies along the contour tangent, so successive marks chain
  // into a thin bright line — that is how the reference draws the shield and
  // robe edges. An unpinned one launches outward and plumes into fur.
  const pin = Math.max(0, Math.min(1, 1 - dr/0.85));
  FUR.pin[i] = pin;
  const sp = (rnd() < 0.58 + pin*0.38)
    ? (rnd() < 0.5 ? -1 : 1) * (1.44 + (rnd()-0.5)*0.42*(1-pin*0.7))
    : (rnd()-0.5) * 1.15;
  const cs = Math.cos(sp), sn = Math.sin(sp);
  FUR.rx[i] = EM.nx[e]*cs - EM.ny[e]*sn;
  FUR.ry[i] = EM.nx[e]*sn + EM.ny[e]*cs;
  FUR.nx[i] = FUR.rx[i]; FUR.ny[i] = FUR.ry[i];
  FUR.spd[i] = ART.s * (0.010 + Math.pow(rnd(), 1.8)*0.098) * (0.24 + dr*0.90) * (1 - pin*0.90);
  // Embers stay flecks. Anything long enough to read as a line has to belong to
  // the rain and fall with it — stray long sparks at other angles break the read.
  FUR.len[i] = ART.s * (0.0022 + Math.pow(rnd(), 2.3)*0.0110) * (1 - pin*0.28);
  FUR.br[i] = (0.74 + rnd()*0.94) * eb * (1 + pin*0.30);
  FUR.max[i] = (0.17 + rnd()*0.74) * (1 - pin*0.55) * (0.75 + dr*0.42);
  FUR.k[i] = stepsFor(FUR.len[i], 1, 6);
  FUR.seed[i] = rnd()*1000;
  FUR.style[i] = pickStyle();
  FUR.life[i] = seeded ? rnd()*FUR.max[i] : FUR.max[i];
}
// Rain must fall *through* the frame: enter above the top edge, cross, exit past
// the bottom. Anything that dies of old age mid-air reads as flickering, not
// falling. Speed is set from the reference, which drifts 0.57 stage-widths/sec.
function spawnRain(i, seeded){
  const sp = ART.s * (0.40 + Math.pow(rnd(), 1.2)*0.46);
  RAIN.vx[i] = WIND.x*sp; RAIN.vy[i] = WIND.y*sp;
  const r = rnd();
  RAIN.len[i] = ART.s * (0.035 + Math.pow(r, 1.45)*0.150);
  RAIN.br[i] = 0.30 + Math.pow(rnd(), 1.3)*1.05;
  RAIN.k[i] = stepsFor(RAIN.len[i], 3, 14);
  RAIN.seed[i] = rnd()*1000;
  RAIN.style[i] = rnd() < 0.74 ? 0 : (rnd() < 0.6 ? 1 : 2);
  RAIN.pin[i] = rnd() < 0.24 ? 1 : 0;                 // 1 = falls in front of the figure
  if (seeded){
    RAIN.x[i] = rnd()*VW; RAIN.y[i] = rnd()*VH;       // fill the frame at boot
  } else {
    // enter along the top, offset left far enough that the slanted fall still
    // reaches the right-hand edge by the time it lands
    const skew = (WIND.x/WIND.y) * (VH + RAIN.len[i]);
    RAIN.x[i] = -skew + rnd()*(VW + skew);
    RAIN.y[i] = -RAIN.len[i]*WIND.y - rnd()*ART.s*0.25;
  }
  RAIN.age[i] = 0;
}
function waveAt(x){                                    // swell along the waterline
  curlSample(F2, x/ART.s*0.55 + CT*0.02, 0.31, _cv);
  return _cv[0] * 0.011 * ART.s;
}
function spawnWater(i, seeded){
  const yw = WATER;
  let x, y, br;
  const roll = rnd();
  if (roll < 0.34){                                   // the waterline seam itself
    x = rnd()*VW;
    y = yw + waveAt(x) + (rnd()-0.35)*0.013*ART.s;
    br = 0.58 + rnd()*0.90;
  } else if (roll < 0.68){                            // broken reflection of the figure
    const e = EM.pick();
    const ax = ART.x + EM.x[e]*ART.s, ay = ART.y + EM.y[e]*ART.s;
    x = ax + (rnd()-0.5)*0.05*ART.s;
    y = yw + waveAt(x) + (yw - ay)*0.34 + (rnd()-0.5)*0.014*ART.s;
    br = 0.28 + rnd()*0.62;
    if (y < yw + 0.004*ART.s || y > VH) { x = rnd()*VW; y = yw + rnd()*Math.max(1, VH-yw); }
  } else {                                            // ambient ripple
    x = rnd()*VW;
    y = yw + waveAt(x) + Math.pow(rnd(), 2.2)*Math.max(1, VH - yw);
    br = 0.24 + rnd()*0.66;
  }
  WAT.x[i] = x; WAT.y[i] = y;
  const dir = rnd() < 0.5 ? -1 : 1;
  WAT.nx[i] = dir; WAT.ny[i] = (rnd()-0.5)*0.10;
  WAT.len[i] = ART.s * (0.010 + Math.pow(rnd(), 2.0)*0.135);
  WAT.br[i] = br;
  WAT.k[i] = stepsFor(WAT.len[i], 2, 14);
  WAT.seed[i] = rnd()*1000;
  WAT.style[i] = rnd() < 0.30 ? 0 : (rnd() < 0.5 ? 1 : 2);
  WAT.max[i] = 0.6 + rnd()*1.6;
  WAT.life[i] = seeded ? rnd()*WAT.max[i] : WAT.max[i];
}

function layout(){
  DPR = Math.min(2, window.devicePixelRatio || 1);
  VW = Math.round(innerWidth * DPR); VH = Math.round(innerHeight * DPR);
  cv.width = VW; cv.height = VH;
  cv.style.width = innerWidth + 'px'; cv.style.height = innerHeight + 'px';
  // Anchor the waterline near the bottom of the viewport rather than centring
  // the art square, or a tall phone strands the figure above a dead expanse.
  const s = Math.min(VW, VH);
  ART = { x: (VW - s)/2, y: VH*0.87 - 0.888*s, s };
  WATER = ART.y + 0.888*s;
  LW = Math.max(0.85, s/1280 * 1.05);

  // Mark length AND line width both scale with the stage, so coverage only
  // needs a fractional boost — exponent fitted by measuring lit-pixel fraction
  // at 900@1 against 1440@2.
  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
  const D = clamp(Math.pow(s/REF_S, 0.55), 0.6, 1.9);
  BASE_NF = Math.min(CAP_F, Math.round(NF0 * D));
  BASE_NR = Math.min(CAP_R, Math.round(NR0 * D * clamp(VW*VH/(s*s), 0.6, 3.0)));   // sky area
  BASE_NW = Math.min(CAP_W, Math.round(NW0 * D * clamp(VW/s, 0.6, 3.0)));          // waterline width
  applyParticleCounts();

  for (let i = 0; i < CAP_F; i++) spawnFur(i, true);
  for (let i = 0; i < CAP_R; i++) spawnRain(i, true);
  for (let i = 0; i < CAP_W; i++) spawnWater(i, true);
}

/* ------------------------------------------------------------------ *
 *  draw
 * ------------------------------------------------------------------ */
const LEVELS = [0.19, 0.31, 0.47, 0.68, 0.97];
const DASHES = [[], [3.2, 3.4], [1.15, 4.6]];
const NB = LEVELS.length * DASHES.length;
const paths = new Array(NB);
const cur = new Float32Array(2);

function levelOf(a){
  if (a < 0.26) return 0;
  if (a < 0.39) return 1;
  if (a < 0.57) return 2;
  if (a < 0.82) return 3;
  return 4;
}
// stochastic on/off along the strand -> the dotted filament texture
function lit(seed, k){
  const v = Math.sin((seed + k*1.7) * 127.1) * 43758.5453;
  return (v - Math.floor(v)) > 0.28;
}

function emit(style, lvl, moved, x, y, px, py){
  const p = paths[style*LEVELS.length + lvl];
  if (moved) p.moveTo(px, py);
  p.lineTo(x, y);
}

let turb = 1, spread = 1;

function strand(P, i, mode){
  const K = P.k[i];
  let env;
  if (mode === 1){
    env = Math.min(1, P.age[i]*9);                     // ease in at the top, never fade out
  } else {
    const t = 1 - P.life[i]/P.max[i];                  // 0 -> 1 with age
    env = Math.min(1, t*9) * Math.min(1, (1-t)*3.4);
  }
  if (env <= 0.01) return;
  const style = P.style[i], seed = P.seed[i];
  const base = P.br[i] * env;
  const L = P.len[i] * (mode === 0 ? spread : 1), h = L/K;
  let x = P.x[i], y = P.y[i];
  const dirx = P.nx[i], diry = P.ny[i];
  let prevLvl = -1, moved = true;
  const ix = 1/ART.s;

  for (let k = 0; k < K; k++){
    const s = k/K;
    curlAt((x - ART.x)*ix, (y - ART.y)*ix, cur);
    let dx, dy;
    if (mode === 0){                                   // ember tick: holds its heading, curl bends it
      const c = (0.10 + s*0.42) * turb * (1 - P.pin[i]*0.85);
      dx = dirx + cur[0]*c;
      dy = diry + cur[1]*c;
    } else if (mode === 1){                            // rain: trails back up the wind
      const c = (0.05 + s*0.17) * turb;
      dx = -WIND.x + cur[0]*c;
      dy = -WIND.y + cur[1]*c;
    } else {                                           // water: skims horizontally
      dx = dirx + cur[0]*0.10;
      dy = diry*0.6 + cur[1]*0.045;
    }
    const m = Math.hypot(dx, dy) || 1;
    dx /= m; dy /= m;
    const nx2 = x + dx*h, ny2 = y + dy*h;

    const a = base * Math.pow(1-s, mode === 1 ? 0.75 : 0.95);
    if (a > 0.15 && lit(seed, k)){
      const lvl = levelOf(a);
      if (lvl !== prevLvl) moved = true;
      emit(style, lvl, moved, nx2, ny2, x, y);
      prevLvl = lvl; moved = false;
    } else {
      moved = true; prevLvl = -1;
    }
    x = nx2; y = ny2;
  }
}

let last = 0, acc = 0, frames = 0, slowRun = 0;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

function stepRain(d){
  for (let i = 0; i < NR; i++){
    RAIN.age[i] += d;
    RAIN.x[i] += RAIN.vx[i]*d; RAIN.y[i] += RAIN.vy[i]*d;
    // the streak trails back up-wind, so the tail is the last thing to leave
    const ty = RAIN.y[i] - RAIN.len[i]*WIND.y, tx = RAIN.x[i] - RAIN.len[i]*WIND.x;
    if (ty > VH || tx > VW) spawnRain(i, false);
  }
}
function stepFur(d){
  for (let i = 0; i < NF; i++){
    FUR.life[i] -= d;
    if (FUR.life[i] <= 0){ spawnFur(i, false); continue; }
    const age = 1 - FUR.life[i]/FUR.max[i];
    const pin = FUR.pin[i], free = 1 - pin;
    curlAt((FUR.x[i]-ART.x)/ART.s, (FUR.y[i]-ART.y)/ART.s, cur);
    const rad = (Math.pow(1-age, 1.5)*0.90*free + 0.62*pin) * 1.45;
    const c = (0.34 + age*1.25) * turb * (1 - pin*0.88);
    let dx = FUR.rx[i]*rad + WIND.x*0.50*free + cur[0]*c;
    let dy = FUR.ry[i]*rad + WIND.y*0.50*free + cur[1]*c;
    const m = Math.hypot(dx, dy) || 1; dx /= m; dy /= m;
    FUR.x[i] += dx*FUR.spd[i]*d; FUR.y[i] += dy*FUR.spd[i]*d;
    FUR.nx[i] = dx; FUR.ny[i] = dy;                 // the tick lies along the motion
  }
}
function stepWater(d){
  for (let i = 0; i < NW; i++){
    WAT.life[i] -= d;
    WAT.x[i] += WAT.nx[i]*ART.s*0.035*d;
    if (WAT.life[i] <= 0) spawnWater(i, false);
  }
}

function cycle(){                                      // slow dissolve / reform
  const cyc = 0.5 - 0.5*Math.cos(CT * TAU/17);
  turb   = (0.62 + cyc*0.78) * runtimeControls.turbulence;
  spread = (0.88 + cyc*0.44) * runtimeControls.spread;
}

// Freshly spawned embers all sit exactly on the contour, so an un-warmed first
// frame is a bare outline. Run the sim forward before anything is painted.
function prewarm(){
  const d = 1/30;                                     // ~1s of sim: past the longest ember life
  for (let n = 0; n < 30; n++){ CT += d; stepRain(d); stepFur(d); stepWater(d); }
  cycle();
}

function render(){
  ctx.globalCompositeOperation = 'source-over';
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, VW, VH);

  // rain behind the figure first, so the silhouette can be punched out of it
  for (let i = 0; i < NB; i++) paths[i] = new Path2D();
  for (let i = 0; i < NR; i++) if (!RAIN.pin[i]) strand(RAIN, i, 1);
  flush();

  ctx.save();
  ctx.globalCompositeOperation = 'destination-out';
  ctx.filter = 'blur(' + (ART.s*0.004).toFixed(2) + 'px)';
  ctx.drawImage(MASKS.occ, ART.x, ART.y + AY0*ART.s, ART.s, AH*ART.s);
  ctx.restore();
  ctx.filter = 'none';

  for (let i = 0; i < NB; i++) paths[i] = new Path2D();
  for (let i = 0; i < NF; i++) strand(FUR, i, 0);
  for (let i = 0; i < NW; i++) strand(WAT, i, 2);
  flush();

  // and the rest in front, so falling lines cross the figure too
  for (let i = 0; i < NB; i++) paths[i] = new Path2D();
  for (let i = 0; i < NR; i++) if (RAIN.pin[i]) strand(RAIN, i, 1);
  flush();
}

function frame(ts){
  requestAnimationFrame(frame);
  if (!last) last = ts;
  let dt = (ts - last)/1000; last = ts;
  if (dt > 0.1) dt = 0.1;
  const rate = runtimeControls.speed * (reduced ? 0.25 : 1);
  CT += dt * rate;
  cycle();

  const d = dt * rate;
  stepRain(d); stepFur(d); stepWater(d);
  render();

  // adaptive load governor
  frames++; acc += dt;
  if (frames >= 40){
    const avg = acc/frames; frames = 0; acc = 0;
    if (avg > 0.022){ slowRun++; if (slowRun >= 2){ NF = Math.max(1100, (NF*0.85)|0); NR = Math.max(240, (NR*0.9)|0); NW = Math.max(260, (NW*0.9)|0); slowRun = 0; } }
    else slowRun = 0;
  }
}

function flush(){
  ctx.globalCompositeOperation = 'lighter';           // sparks accumulate; dense edges burn to white
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = LW;
  ctx.lineCap = 'butt';
  for (let s = 0; s < DASHES.length; s++){
    ctx.setLineDash(DASHES[s].map(v => v*LW));
    for (let l = 0; l < LEVELS.length; l++){
      ctx.globalAlpha = LEVELS[l];
      ctx.stroke(paths[s*LEVELS.length + l]);
    }
  }
  ctx.setLineDash([]);
  ctx.globalAlpha = 1;
  ctx.globalCompositeOperation = 'source-over';
}

// Relayout on both signals: some hosts resize the viewport without ever firing
// a resize event, which would strand the canvas at its boot size.
let resizeT = 0, lastW = 0, lastH = 0;
function relayout(){
  clearTimeout(resizeT);
  resizeT = setTimeout(() => {
    if (!innerWidth || !innerHeight) return;
    if (innerWidth === lastW && innerHeight === lastH) return;
    lastW = innerWidth; lastH = innerHeight;
    layout(); prewarm(); render();
  }, 120);
}
addEventListener('resize', relayout);
new ResizeObserver(relayout).observe(document.documentElement);
layout();
lastW = innerWidth; lastH = innerHeight;

if (params.get('debug') === 'mask'){                  // silhouette check while authoring geometry
  ctx.fillStyle = '#000'; ctx.fillRect(0, 0, VW, VH);
  ctx.drawImage(MASKS.detail, ART.x, ART.y + AY0*ART.s, ART.s, AH*ART.s);
} else {
  // paint once up front — a backgrounded tab throttles rAF, and the page
  // should never be sitting on an empty canvas when it comes into view
  prewarm();
  render();
  requestAnimationFrame(frame);
}
window.__ready = true;
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
