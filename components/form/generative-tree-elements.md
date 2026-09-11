---
name: "Generative Tree — Elements"
library: "ComponentX"
id: "generative-tree-elements"
type: "form"
quality: "showcase"
tags: ["animation", "background", "component", "data", "layout", "shader", "text", "webgl"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Generative Tree — Elements

> **Type:** `form` · **Quality:** `showcase` · **ID:** `generative-tree-elements`
> **Path:** `components/form/generative-tree-elements.md`

**Generative Tree — Elements** is a premium, production-ready component from the **ComponentX** library — engineered for form interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Showcase tier** — a high-impact, visually rich implementation — animated, 3D, or dependency-heavy by design.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `animation`, `background`, `data` workflows.
- **Pattern coverage** — includes `layout`, `shader`, `text` workflows.
- **Pattern coverage** — includes `webgl` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Generative Tree — Elements** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
name: add-elements
description: "Build Elements from its verified authored source using Raw WebGL2 + Canvas 2D, including the complete renderer, interactions, and required assets. Use when Codex needs to implement, port, or adapt this effect without requiring the ComponentX package or reconstructing the visual from an approximation."
---

# Build Elements

## Description

Water, lightning, fire, condensation, and a painterly generative tree collected as one elemental family across WebGL2 and Canvas 2D.

Recreate the authored behavior from the verified source, not from screenshots or the abbreviated orchestration sample in this skill. The implementation may live directly in the target project and does not require `@componentx/core`.

## Technologies

- React variant host
- Three focused raw WebGL2 Elemental Marks panels
- Painterly Canvas 2D Generative Tree
- Existing transparent Canvas 2D Condensation renderer
- Allow-scripts-only source sandbox
- Lazy-loaded variant boundaries

## Verified source material

- `elemental-marks.html — complete water, lightning, and fire source`
- `src/shaders/elements/sources/elemental-marks.html`
- `src/shaders/elements/ElementsBackground.tsx`
- `src/shaders/elements/ElementsCollection.tsx`
- `generative-tree.html — complete authored Canvas 2D renderer`
- `src/shaders/elements/sources/generative-tree.html`
- `src/shaders/elements/GenerativeTree.tsx`
- `src/shaders/condensation/condensationRenderer.ts`
- `src/shaders/condensation/CondensationBackground.tsx`

Source revision: `SHA-256 7a6871fe99fa`

## Implementation steps

1. Open every verified source file listed above and identify the renderer, host lifecycle, styles, and assets before editing.
2. Keep ElementsCollection as the public entry point and select water, lightning, fire, condensation, or generative-tree with the variant prop.
3. Package the complete Elemental Marks HTML byte-for-byte, focus one authored panel, and apply the documented higher-resolution scale and detail refinements only in the React presentation adapter while preserving its mark paths and pointer behavior.
4. Lazy-load Condensation through its existing renderer and Generative Tree through its byte-exact Canvas 2D sandbox so each lifecycle remains independent.
5. Expose the shared speed, size, particles, opacity, and palette controls for WebGL2 marks and Generative Tree while keeping Condensation's speed, drops, and opacity controls.
6. Mount only the selected family component and preserve sandbox, visibility, reduced-motion, resize, pointer, and cleanup lifecycles.
7. Give the local component a sized, overflow-controlled parent and verify desktop, mobile, reduced-motion, and context-loss behavior.

Asset handling: This effect has no required external assets.

## Local component example

Import the copied local component rather than a package entrypoint:

```tsx
import { ElementsCollection } from "./effects/elements/ElementsCollection";
import "./effects/elements/styles.css";

export function Scene() {
  return <div className="effect-frame"><ElementsCollection /></div>;
}
```

## Core renderer pattern

This excerpt documents orchestration only. Copy the exact shader, geometry, pass, and interaction code from the verified source files.

```tsx
<ElementsCollection variant="lightning" speed={1.1} particleAmount={1.2} />
```

## Behavior contract

- Runtime: Raw WebGL2 + Canvas 2D
- Passes: 1 selected composition — up to 3 WebGL2 passes or 1 Canvas 2D pass
- Interaction: Variant selection, pointer-reactive marks and tree wind, speed, scale, particles, palette, and opacity
- Assets: Three embedded vector brand paths; no external binary assets
- **renderer** (host): Sandboxed WebGL2 or Canvas 2D
- **variants** (fixed): Water + Lightning + Fire + Condensation + Generative Tree
- **source** (fixed): Complete authored Elemental Marks + Generative Tree documents
- **assets** (embedded): Three vector mark paths; no external tree assets

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
# Elements — Generative Tree — Complete source

Component: `ElementsCollection`
Variant: **Generative Tree** (`generative-tree`)
Runtime: Raw WebGL2 + Canvas 2D
Source revision: `SHA-256 7a6871fe99fa`

## Current configured usage

```tsx
import { ElementsCollection } from "@componentx/threeui";
import "@componentx/threeui/style.css";

export function Scene() {
  return (
    <div className="shader-frame">
      <ElementsCollection
        variant="generative-tree"
        speed={1.00}
        size={1.00}
        particleAmount={1.00}
        hue={0}
        saturation={1.00}
        brightness={1.00}
        opacity={1.00}
      />
    </div>
  );
}
```

## Required assets

No binary assets are required.

## Full implementation source

This bundle contains all 3 required text source files. Preserve their paths and contents; none are excerpts.

### `src/shaders/elements/GenerativeTree.tsx`

Role: component · 174 lines · 6354 bytes · SHA-256 `bb6bf95154f38e7a9772eef6fe2aa89ff72284a13345d56e66fba234894c2127`

```tsx
import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from "react";

import generativeTreeSource from "./sources/generative-tree.html?raw";

export type GenerativeTreeProps = {
  speed?: number;
  size?: number;
  particleAmount?: number;
  opacity?: number;
  hue?: number;
  saturation?: number;
  brightness?: number;
  className?: string;
  style?: CSSProperties;
};

export const GENERATIVE_TREE_DEFAULTS = {
  speed: 1,
  size: 1,
  particleAmount: 1,
  opacity: 1,
  hue: 0,
  saturation: 1,
  brightness: 1,
} as const;

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(maximum, Math.max(minimum, value));
}

function buildFocusedDocument(size: number, particleAmount: number) {
  const particleCount = Math.max(0, Math.round(50 * clamp(particleAmount, 0, 2)));
  const treePadding = 1 / clamp(size, 0.65, 1.5);
  const focusStyles = `<style data-generative-tree-focus>
html, body, canvas { width: 100%; height: 100%; margin: 0; overflow: hidden; background: #0a0a0a; }
.label { display: none !important; }
</style>`;
  const controls = `<script data-generative-tree-controls>
(function () {
  var nativeFrame = window.requestAnimationFrame.bind(window);
  var clock = { last: null, time: null };
  window.__GENERATIVE_TREE_CONTROLS = { speed: 1, paused: false };
  window.requestAnimationFrame = function (callback) {
    return nativeFrame(function (realTime) {
      var state = window.__GENERATIVE_TREE_CONTROLS;
      if (clock.last === null) {
        clock.last = realTime;
        clock.time = realTime;
      } else {
        if (!state.paused) clock.time += (realTime - clock.last) * state.speed;
        clock.last = realTime;
      }
      callback(clock.time);
    });
  };
  window.addEventListener('message', function (event) {
    if (!event.data || event.data.type !== 'generative-tree-controls') return;
    var next = event.data.controls || {};
    if (Number.isFinite(next.speed)) {
      window.__GENERATIVE_TREE_CONTROLS.speed = Math.max(0, Math.min(3, next.speed));
    }
    window.__GENERATIVE_TREE_CONTROLS.paused = Boolean(next.paused);
  });
})();
</script>`;

  return generativeTreeSource
    .replace(/<script[^>]+cloudflareinsights\.com[^>]*><\/script>/gi, "")
    .replace("</head>", `${focusStyles}${controls}</head>`)
    .replace("const PARTICLE_COUNT = 50;", `const PARTICLE_COUNT = ${particleCount};`)
    .replace(
      "const _pad = parseFloat(new URLSearchParams(location.search).get('p')) || 1;",
      `const _pad = ${treePadding.toFixed(4)};`,
    )
    .replace(
      "function frame(time) {\n    // Decay shake",
      "function frame(time) {\n    if (window.__GENERATIVE_TREE_CONTROLS.paused) { requestAnimationFrame(frame); return; }\n\n    // Decay shake",
    )
    .replace(
      "b.growthProgress = Math.min(1, b.growthProgress + b.growthSpeed);",
      "b.growthProgress = Math.min(1, b.growthProgress + b.growthSpeed * window.__GENERATIVE_TREE_CONTROLS.speed);",
    )
    .replace("holdTimer++;", "holdTimer += window.__GENERATIVE_TREE_CONTROLS.speed;")
    .replace("fadeTimer++;", "fadeTimer += window.__GENERATIVE_TREE_CONTROLS.speed;")
    .replace("waitTimer++;", "waitTimer += window.__GENERATIVE_TREE_CONTROLS.speed;")
    // A remounted srcDoc can execute before the iframe receives its layout size.
    // Wait one or more frames so the first tree is never generated from a 0x0 viewport.
    .replace(
      "  createTree();\n  requestAnimationFrame(frame);",
      `  function startTreeWhenSized() {
    resize();
    if (W <= 0 || H <= 0) {
      requestAnimationFrame(startTreeWhenSized);
      return;
    }
    createTree();
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(startTreeWhenSized);`,
    );
}

export function GenerativeTree({
  speed = GENERATIVE_TREE_DEFAULTS.speed,
  size = GENERATIVE_TREE_DEFAULTS.size,
  particleAmount = GENERATIVE_TREE_DEFAULTS.particleAmount,
  opacity = GENERATIVE_TREE_DEFAULTS.opacity,
  hue = GENERATIVE_TREE_DEFAULTS.hue,
  saturation = GENERATIVE_TREE_DEFAULTS.saturation,
  brightness = GENERATIVE_TREE_DEFAULTS.brightness,
  className = "",
  style,
}: GenerativeTreeProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [hostVisible, setHostVisible] = useState(true);
  const [documentVisible, setDocumentVisible] = useState(() => typeof document === "undefined" || !document.hidden);
  const safeSpeed = clamp(speed, 0, 3);
  const paused = !hostVisible || !documentVisible || safeSpeed === 0;
  const source = useMemo(() => buildFocusedDocument(size, particleAmount), [particleAmount, size]);

  const postControls = useCallback(() => {
    iframeRef.current?.contentWindow?.postMessage({
      type: "generative-tree-controls",
      controls: { speed: safeSpeed, paused },
    }, "*");
  }, [paused, safeSpeed]);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe || typeof IntersectionObserver === "undefined") return undefined;
    const observer = new IntersectionObserver(([entry]) => setHostVisible(entry?.isIntersecting ?? true));
    observer.observe(iframe);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return undefined;
    const update = () => setDocumentVisible(!document.hidden);
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);

  useEffect(() => {
    postControls();
  }, [postControls, source]);

  return (
    <div
      className={`threeui-background generative-tree${className ? ` ${className}` : ""}`}
      style={{ background: "#0a0a0a", pointerEvents: "auto", ...style }}
    >
      <iframe
        ref={iframeRef}
        title="Generative Tree background"
        srcDoc={source}
        sandbox="allow-scripts"
        onLoad={postControls}
        aria-hidden="true"
        tabIndex={-1}
        style={{
          position: "absolute",
          inset: 0,
          display: "block",
          width: "100%",
          height: "100%",
          border: 0,
          background: "#0a0a0a",
          opacity: clamp(opacity, 0.05, 1),
          filter: `hue-rotate(${clamp(hue, -180, 180)}deg) saturate(${clamp(saturation, 0, 2)}) brightness(${clamp(brightness, 0.35, 1.8)})`,
        }}
      />
    </div>
  );
}
```

### `src/shaders/elements/sources/generative-tree.html`

Role: canonical-source · 598 lines · 20247 bytes · SHA-256 `8ea51733bddf5cc44df338ef9af3a21633d62daa92c17fde5faa2fcab90fa0ef`

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Generative Branching Tree</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: 100%; height: 100%; overflow: hidden; background: #0a0a0a; }
  canvas { display: block; width: 100vw; height: 100vh; }
  .label {
    position: fixed;
    top: 20px;
    left: 24px;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: rgba(200, 149, 108, 0.5);
    z-index: 10;
    pointer-events: none;
    user-select: none;
  }
</style>
</head>
<body>
<div class="label">04 / Generative Tree</div>
<canvas id="canvas"></canvas>
<script>
(function() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  let W, H;

  // --- Utilities ---
  function lerp(a, b, t) { return a + (b - a) * t; }
  function rand(lo, hi) { return Math.random() * (hi - lo) + lo; }
  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }
  function smoothstep(a, b, t) {
    t = Math.max(0, Math.min(1, (t - a) / (b - a)));
    return t * t * (3 - 2 * t);
  }

  // --- Configuration ---
  let MAX_DEPTH = 10;
  let GROWTH_SPEED_BASE = 0.006;
  const HOLD_DURATION = 400;
  const FADE_DURATION = 180;
  const WAIT_DURATION = 80;

  // --- Pre-rendered particle sprite (soft dot) ---
  let particleSprite;
  function initParticleSprite() {
    particleSprite = document.createElement('canvas');
    particleSprite.width = 32;
    particleSprite.height = 32;
    const pctx = particleSprite.getContext('2d');
    const g = pctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    g.addColorStop(0, 'rgba(230, 200, 155, 1)');
    g.addColorStop(0.3, 'rgba(215, 175, 130, 0.5)');
    g.addColorStop(1, 'rgba(200, 150, 100, 0)');
    pctx.fillStyle = g;
    pctx.fillRect(0, 0, 32, 32);
  }

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
    initParticleSprite();
  }
  window.addEventListener('resize', resize);
  resize();

  // --- Particle system ---
  const PARTICLE_COUNT = 50;
  let particles = [];

  function createParticle(fullRandom) {
    return {
      x: rand(W * 0.15, W * 0.85),
      y: fullRandom ? rand(H * 0.1, H * 0.9) : rand(H * 0.5, H),
      vx: rand(-0.12, 0.12),
      vy: rand(-0.35, -0.06),
      size: rand(0.6, 2.2),
      alpha: rand(0.04, 0.2),
      phase: rand(0, Math.PI * 2),
      freq: rand(0.0004, 0.0015),
      life: fullRandom ? rand(0, 1) : 0,
      lifeSpeed: rand(0.0006, 0.0025),
    };
  }

  function initParticles() {
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(createParticle(true));
    }
  }

  function updateParticles(time) {
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx + Math.sin(time * p.freq + p.phase) * 0.25;
      p.y += p.vy;
      p.life += p.lifeSpeed;
      if (p.life > 1 || p.y < -10 || p.x < -10 || p.x > W + 10) {
        particles[i] = createParticle(false);
      }
    }
  }

  function drawParticles(drawCtx, globalAlpha) {
    for (const p of particles) {
      const lifeFade = p.life < 0.15 ? p.life / 0.15
                     : p.life > 0.8 ? (1 - p.life) / 0.2
                     : 1;
      const a = p.alpha * lifeFade * globalAlpha;
      if (a < 0.004) continue;
      const s = p.size * 3;
      drawCtx.globalAlpha = a;
      drawCtx.drawImage(particleSprite, p.x - s, p.y - s, s * 2, s * 2);
    }
    drawCtx.globalAlpha = 1;
  }

  // --- Color palette (warm sienna → amber → golden at tips) ---
  const PALETTE = [
    { r: 78, g: 45, b: 14 },    // deep sienna
    { r: 125, g: 76, b: 28 },   // warm bark
    { r: 172, g: 118, b: 50 },  // rich amber
    { r: 205, g: 158, b: 82 },  // warm gold
    { r: 218, g: 182, b: 108 }, // golden
    { r: 215, g: 195, b: 135 }, // warm golden-cream at tips
  ];

  function colorForDepth(depth, hueShift) {
    const t = depth / MAX_DEPTH;
    const idx = t * (PALETTE.length - 1);
    const i0 = Math.floor(idx);
    const i1 = Math.min(PALETTE.length - 1, i0 + 1);
    const f = idx - i0;
    let r = lerp(PALETTE[i0].r, PALETTE[i1].r, f);
    let g = lerp(PALETTE[i0].g, PALETTE[i1].g, f);
    let b = lerp(PALETTE[i0].b, PALETTE[i1].b, f);

    // Per-branch hue variation (stronger at outer depths)
    // hueShift -1..1: negative = olive/green shift, positive = warm rose shift
    if (hueShift !== undefined) {
      const strength = t * t * 22;
      r += hueShift * strength * 1.0;   // positive = rosier
      g += hueShift * strength * -0.5;  // positive = less green
      b += hueShift * strength * -0.15; // keep blue minimal
    }

    return { r, g, b };
  }

  // --- Branch data ---
  let allBranches = [];
  let treeAlpha = 1;
  let treeState = 'growing';
  let holdTimer = 0, fadeTimer = 0, waitTimer = 0;
  const _pad = parseFloat(new URLSearchParams(location.search).get('p')) || 1;

  function createTree() {
    allBranches = [];

    const trunkLen = H * rand(0.23, 0.28) / _pad;
    const trunkThick = Math.max(8, W * 0.015) / _pad;
    const trunkAngle = -Math.PI / 2 + rand(-0.05, 0.05);

    const approxTreeH = trunkLen * 3.5;
    const baseY = _pad > 1 ? (H + approxTreeH) / 2 : H + trunkThick * 0.5;

    allBranches.push({
      x0: W / 2 + rand(-W * 0.03, W * 0.03),
      y0: baseY,
      angle: trunkAngle,
      length: trunkLen,
      thickness: trunkThick,
      depth: 0,
      growthProgress: 0,
      growthSpeed: GROWTH_SPEED_BASE * rand(0.9, 1.1),
      children: [],
      spawned: false,
      swayPhase: rand(0, Math.PI * 2),
      swayAmp: 0.0008,
      curvature: rand(-0.015, 0.015),
      colorShift: rand(-8, 8),
      hueShift: 0,
      parent: null,
      // Pre-computed stroke variation for painterly rendering
      strokeSeeds: [rand(-1,1), rand(-1,1), rand(-1,1), rand(-1,1), rand(-1,1)],
      tipDots: [],
    });

    treeState = 'growing';
    holdTimer = fadeTimer = waitTimer = 0;
    treeAlpha = 1;
    initParticles();
  }

  function spawnChildren(parent) {
    if (parent.depth >= MAX_DEPTH) return;

    let numChildren;
    if (parent.depth < 1) numChildren = 2 + (Math.random() < 0.35 ? 1 : 0);
    else if (parent.depth < 3) numChildren = 2 + (Math.random() < 0.4 ? 1 : 0);
    else numChildren = Math.random() < 0.25 ? 3 : 2;

    // Progressive pruning: more aggressive at outer depths for airy canopy
    const pruneChance = parent.depth <= 3 ? 0 : parent.depth <= 5 ? 0.1 : parent.depth <= 7 ? 0.22 : 0.35;
    if (Math.random() < pruneChance) numChildren = Math.max(1, numChildren - 1);

    const spread = parent.depth < 2 ? rand(0.32, 0.48) : rand(0.38, 0.6);

    for (let i = 0; i < numChildren; i++) {
      let angleOffset;
      if (numChildren === 1) {
        angleOffset = rand(-0.25, 0.25);
      } else if (numChildren === 2) {
        angleOffset = (i === 0 ? -1 : 1) * rand(0.18, spread);
      } else {
        angleOffset = (i - 1) * spread + rand(-0.1, 0.1);
      }

      const childAngle = parent.angle + angleOffset;
      const lengthFactor = rand(0.58, 0.76);
      const thickFactor = rand(0.48, 0.67);

      const ep = getBranchEnd(parent, 1, 0);

      // Pre-compute tip dots for terminal branches only
      const tipDots = [];
      const childDepth = parent.depth + 1;
      if (childDepth >= MAX_DEPTH) {
        const count = Math.random() < 0.4 ? 2 : 1;
        for (let d = 0; d < count; d++) {
          tipDots.push({
            ox: rand(-2, 2),
            oy: rand(-2, 2),
            size: rand(0.8, 1.6),
            alpha: rand(0.08, 0.2),
          });
        }
      }

      const child = {
        x0: ep.x,
        y0: ep.y,
        angle: childAngle,
        length: parent.length * lengthFactor,
        thickness: Math.max(0.4, parent.thickness * thickFactor),
        depth: childDepth,
        growthProgress: 0,
        growthSpeed: GROWTH_SPEED_BASE * rand(1.0, 1.5) * (1 + parent.depth * 0.1),
        children: [],
        spawned: false,
        swayPhase: rand(0, Math.PI * 2),
        swayAmp: 0.0018 * (parent.depth + 1) * rand(0.7, 1.3),
        curvature: rand(-0.04, 0.04) * (1 + parent.depth * 0.12),
        colorShift: rand(-12, 12),
        hueShift: Math.max(-1, Math.min(1, parent.hueShift + rand(-0.35, 0.35))),
        parent: parent,
        strokeSeeds: [rand(-1,1), rand(-1,1), rand(-1,1), rand(-1,1), rand(-1,1)],
        tipDots: tipDots,
      };

      parent.children.push(child);
      allBranches.push(child);
    }
  }

  // --- Sway (multi-frequency wind + mouse wind + shake) ---
  function getSwayAngle(branch, time) {
    let total = 0;
    let b = branch;
    let depth = 0;
    while (b) {
      const a = b.swayAmp;
      total += Math.sin(time * 0.0005 + b.swayPhase) * a;
      total += Math.sin(time * 0.0003 + b.swayPhase * 1.7) * a * 0.6;
      total += Math.sin(time * 0.00012 + b.swayPhase * 0.4) * a * 0.35;
      depth++;
      b = b.parent;
    }
    // Mouse wind: deeper branches bend more
    if (mouseActive) {
      total += windForce * 0.04 * depth;
    }
    // Shake: rapid oscillation that decays
    if (shakeAmount > 0.01) {
      total += Math.sin(time * 0.015 + branch.swayPhase * 3) * shakeAmount * 0.06 * depth;
    }
    return total;
  }

  function getBranchEnd(branch, progress, time) {
    const sway = getSwayAngle(branch, time);
    const angle = branch.angle + sway;
    const len = branch.length * progress;
    const perpX = -Math.sin(angle);
    const perpY = Math.cos(angle);
    const curveOff = branch.curvature * len;
    return {
      x: branch.x0 + Math.cos(angle) * len + perpX * curveOff,
      y: branch.y0 + Math.sin(angle) * len + perpY * curveOff,
    };
  }

  function recalcPositions(time) {
    for (const b of allBranches) {
      if (b.parent) {
        const pe = getBranchEnd(b.parent, 1, time);
        b.x0 = pe.x;
        b.y0 = pe.y;
      }
    }
  }

  function updateBranches(time) {
    let allDone = true;
    for (const b of allBranches) {
      if (b.growthProgress < 1) {
        b.growthProgress = Math.min(1, b.growthProgress + b.growthSpeed);
        allDone = false;
      }
      // Overlapping growth: spawn children at 65%
      if (b.growthProgress >= 0.65 && !b.spawned) {
        b.spawned = true;
        spawnChildren(b);
      }
    }
    return allDone;
  }

  // --- Branch drawing (multi-stroke painterly) ---
  function drawBranch(drawCtx, b, time) {
    if (b.growthProgress <= 0) return;

    const sway = getSwayAngle(b, time);
    const angle = b.angle + sway;
    const progress = easeOutCubic(b.growthProgress);
    const len = b.length * progress;

    const x1 = b.x0;
    const y1 = b.y0;

    // Perpendicular direction
    const perpX = -Math.sin(angle);
    const perpY = Math.cos(angle);

    // Cubic bezier control points with natural curvature
    const curveOff = b.curvature * len * 1.4;
    const cpx1 = x1 + Math.cos(angle) * len * 0.33 + perpX * curveOff * 0.4;
    const cpy1 = y1 + Math.sin(angle) * len * 0.33 + perpY * curveOff * 0.4;
    const cpx2 = x1 + Math.cos(angle) * len * 0.66 + perpX * curveOff * 0.85;
    const cpy2 = y1 + Math.sin(angle) * len * 0.66 + perpY * curveOff * 0.85;
    const x2 = x1 + Math.cos(angle) * len + perpX * curveOff * 0.7;
    const y2 = y1 + Math.sin(angle) * len + perpY * curveOff * 0.7;

    const col = colorForDepth(b.depth, b.hueShift);
    // Alpha falloff at outer depths for graceful canopy edge
    const depthT = b.depth / MAX_DEPTH;
    const baseAlpha = b.depth <= 1 ? 0.95
                    : b.depth <= 5 ? lerp(0.92, 0.7, depthT)
                    : lerp(0.7, 0.35, (depthT - 0.5) * 2);

    // Determine stroke count by depth for performance
    const strokeCount = b.depth < 3 ? 5 : (b.depth < 6 ? 3 : 2);
    const thickBase = b.thickness;
    const thickTaper = lerp(thickBase, thickBase * 0.3, progress);

    for (let s = 0; s < strokeCount; s++) {
      // Deterministic offset from pre-computed seeds
      const seed = b.strokeSeeds[s] || 0;
      const normalizedS = strokeCount > 1 ? (s / (strokeCount - 1) - 0.5) : 0;

      // Perpendicular offset for multi-stroke spread
      const offsetAmt = normalizedS * thickBase * 0.35 + seed * thickBase * 0.08;
      const ox = perpX * offsetAmt;
      const oy = perpY * offsetAmt;

      // Color variation per stroke (darker on one side, lighter on other)
      const shift = normalizedS * 22 + b.colorShift * 0.3;
      const r = Math.max(0, Math.min(255, col.r + shift));
      const g = Math.max(0, Math.min(255, col.g + shift * 0.65));
      const bb = Math.max(0, Math.min(255, col.b + shift * 0.4));

      // Core stroke is full opacity, flanking strokes are softer
      const isCore = s === Math.floor(strokeCount / 2);
      const alpha = baseAlpha * (isCore ? 1.0 : 0.5);
      const thick = thickTaper * (isCore ? 1.0 : lerp(0.65, 0.45, Math.abs(normalizedS)));

      drawCtx.beginPath();
      drawCtx.moveTo(x1 + ox, y1 + oy);
      drawCtx.bezierCurveTo(
        cpx1 + ox, cpy1 + oy,
        cpx2 + ox, cpy2 + oy,
        x2 + ox, y2 + oy
      );
      drawCtx.strokeStyle = `rgba(${r | 0}, ${g | 0}, ${bb | 0}, ${alpha})`;
      drawCtx.lineWidth = thick;
      drawCtx.lineCap = 'round';
      drawCtx.stroke();
    }

    // Soft ambient glow on mid-to-deep branches
    if (b.depth >= 4 && b.depth < MAX_DEPTH - 1 && b.growthProgress > 0.8) {
      const glowAlpha = smoothstep(0.8, 1.0, b.growthProgress) * 0.06 * (b.depth / MAX_DEPTH);
      const glowR = Math.max(4, thickBase * 2);
      const grd = drawCtx.createRadialGradient(x2, y2, 0, x2, y2, glowR);
      grd.addColorStop(0, `rgba(${Math.min(255,col.r+30)|0}, ${Math.min(255,col.g+20)|0}, ${Math.min(255,col.b+15)|0}, ${glowAlpha})`);
      grd.addColorStop(0.5, `rgba(${col.r|0}, ${col.g|0}, ${col.b|0}, ${glowAlpha * 0.25})`);
      grd.addColorStop(1, `rgba(${col.r|0}, ${col.g|0}, ${col.b|0}, 0)`);
      drawCtx.fillStyle = grd;
      drawCtx.beginPath();
      drawCtx.arc(x2, y2, glowR, 0, Math.PI * 2);
      drawCtx.fill();
    }

    // Delicate luminous tips (inherit branch color)
    if (b.tipDots.length > 0 && b.growthProgress > 0.92) {
      const tipFade = smoothstep(0.92, 1.0, b.growthProgress);
      // Brighten the branch color for the tip glow
      const tr = Math.min(255, col.r * 1.3 + 30);
      const tg2 = Math.min(255, col.g * 1.3 + 25);
      const tb = Math.min(255, col.b * 1.2 + 20);
      for (const dot of b.tipDots) {
        const dx = x2 + dot.ox;
        const dy = y2 + dot.oy;
        const da = tipFade * dot.alpha;
        const ds = dot.size;

        const tg = drawCtx.createRadialGradient(dx, dy, 0, dx, dy, ds * 2);
        tg.addColorStop(0, `rgba(${tr|0}, ${tg2|0}, ${tb|0}, ${da * 0.6})`);
        tg.addColorStop(0.5, `rgba(${col.r|0}, ${col.g|0}, ${col.b|0}, ${da * 0.15})`);
        tg.addColorStop(1, `rgba(${col.r|0}, ${col.g|0}, ${col.b|0}, 0)`);
        drawCtx.fillStyle = tg;
        drawCtx.beginPath();
        drawCtx.arc(dx, dy, ds * 2, 0, Math.PI * 2);
        drawCtx.fill();
      }
    }
  }

  // --- Scene ---
  function drawScene(time) {
    ctx.clearRect(0, 0, W, H);

    // Background
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, W, H);

    // Ambient canopy glow (warm halo behind tree crown)
    if (treeAlpha > 0.05) {
      const cx = W / 2, cy = H * 0.38;
      const canopyGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, H * 0.42);
      canopyGlow.addColorStop(0, `rgba(60, 36, 12, ${0.2 * treeAlpha})`);
      canopyGlow.addColorStop(0.5, `rgba(35, 20, 8, ${0.08 * treeAlpha})`);
      canopyGlow.addColorStop(1, 'rgba(10, 10, 10, 0)');
      ctx.fillStyle = canopyGlow;
      ctx.fillRect(0, 0, W, H);
    }

    // Ground glow
    if (treeAlpha > 0.05) {
      const groundGrad = ctx.createRadialGradient(W / 2, H, 0, W / 2, H, H * 0.3);
      groundGrad.addColorStop(0, `rgba(70, 42, 12, ${0.1 * treeAlpha})`);
      groundGrad.addColorStop(1, 'rgba(10, 10, 10, 0)');
      ctx.fillStyle = groundGrad;
      ctx.fillRect(0, H * 0.55, W, H * 0.45);
    }

    recalcPositions(time);

    // Draw branches
    ctx.save();
    ctx.globalAlpha = treeAlpha;
    for (const b of allBranches) {
      drawBranch(ctx, b, time);
    }
    ctx.restore();

    // Particles
    updateParticles(time);
    ctx.save();
    drawParticles(ctx, treeAlpha);
    ctx.restore();

    // Vignette
    const vigGrad = ctx.createRadialGradient(W / 2, H / 2, W * 0.3, W / 2, H / 2, W * 0.78);
    vigGrad.addColorStop(0, 'rgba(10, 10, 10, 0)');
    vigGrad.addColorStop(1, 'rgba(4, 4, 4, 0.3)');
    ctx.fillStyle = vigGrad;
    ctx.fillRect(0, 0, W, H);
  }

  // --- State machine ---
  function frame(time) {
    // Decay shake
    if (shakeAmount > 0.01) shakeAmount *= 0.95;
    else shakeAmount = 0;

    switch (treeState) {
      case 'growing': {
        const done = updateBranches(time);
        drawScene(time);
        if (done) {
          treeState = 'holding';
          holdTimer = 0;
        }
        break;
      }
      case 'holding': {
        drawScene(time);
        holdTimer++;
        if (holdTimer >= HOLD_DURATION) {
          treeState = 'fading';
          fadeTimer = 0;
        }
        break;
      }
      case 'fading': {
        fadeTimer++;
        treeAlpha = Math.max(0, 1 - fadeTimer / FADE_DURATION);
        drawScene(time);
        if (fadeTimer >= FADE_DURATION) {
          treeState = 'waiting';
          waitTimer = 0;
        }
        break;
      }
      case 'waiting': {
        ctx.clearRect(0, 0, W, H);
        ctx.fillStyle = '#0a0a0a';
        ctx.fillRect(0, 0, W, H);
        waitTimer++;
        if (waitTimer >= WAIT_DURATION) {
          createTree();
        }
        break;
      }
    }
    if (running) requestAnimationFrame(frame);
  }

  // --- Visibility pause ---
  let running = true;
  function startLoop() {
    if (!running) { running = true; requestAnimationFrame(frame); }
  }

  document.addEventListener('visibilitychange', function() {
    if (document.hidden) { running = false; }
    else startLoop();
  });

  // Mouse: move to push the tree with wind, click to shake it
  var mouseX = W / 2, mouseY = H / 2, mouseActive = false;
  var windForce = 0; // -1 to 1, based on mouse x relative to tree
  var shakeAmount = 0;

  canvas.addEventListener('mousemove', function(e) {
    mouseX = e.clientX; mouseY = e.clientY; mouseActive = true;
    windForce = (mouseX - W / 2) / (W / 2); // -1 left, +1 right
  });
  canvas.addEventListener('mouseleave', function() { mouseActive = false; windForce = 0; });
  canvas.addEventListener('click', function() { shakeAmount = 1.0; });
  canvas.addEventListener('touchstart', function(e) {
    e.preventDefault(); mouseActive = true;
    mouseX = e.touches[0].clientX; mouseY = e.touches[0].clientY;
    windForce = (mouseX - W / 2) / (W / 2);
    shakeAmount = 1.0;
  }, { passive: false });
  canvas.addEventListener('touchmove', function(e) {
    e.preventDefault(); mouseX = e.touches[0].clientX; mouseY = e.touches[0].clientY;
    windForce = (mouseX - W / 2) / (W / 2);
  }, { passive: false });
  canvas.addEventListener('touchend', function() { mouseActive = false; windForce = 0; });

  createTree();
  requestAnimationFrame(frame);

  window.addEventListener('message', function(e) {
    if (e.data && e.data.type === 'param') {
      switch (e.data.name) {
        case 'GROWTH_SPEED_BASE': GROWTH_SPEED_BASE = e.data.value; break;
        case 'MAX_DEPTH': MAX_DEPTH = Math.round(e.data.value); break;
      }
    }
  });
})();
</script>
<script defer src="https://static.cloudflareinsights.com/beacon.min.js/v8c78df7c7c0f484497ecbca7046644da1771523124516" integrity="sha512-8DS7rgIrAmghBFwoOTujcf6D9rXvH8xm8JQ1Ja01h9QX8EzXldiszufYa4IFfKdLUKTTrnSFXLDkUEOTrZQ8Qg==" data-cf-beacon='{"version":"2024.11.0","token":"216c03e5eb1b42998a91f716785010f9","r":1,"server_timing":{"name":{"cfCacheStatus":true,"cfEdge":true,"cfExtPri":true,"cfL4":true,"cfOrigin":true,"cfSpeedBrain":true},"location_startswith":null}}' crossorigin="anonymous"></script>
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
