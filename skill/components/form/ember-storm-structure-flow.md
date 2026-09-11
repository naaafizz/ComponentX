---
name: "Ember Storm — Structure Flow"
library: "ComponentX"
id: "ember-storm-structure-flow"
type: "form"
quality: "showcase"
tags: ["animated", "animation", "background", "component", "data", "shader", "text", "webgl"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Ember Storm — Structure Flow

> **Type:** `form` · **Quality:** `showcase` · **ID:** `ember-storm-structure-flow`
> **Path:** `components/form/ember-storm-structure-flow.md`

**Ember Storm — Structure Flow** is a premium, production-ready component from the **ComponentX** library — engineered for form interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Showcase tier** — a high-impact, visually rich implementation — animated, 3D, or dependency-heavy by design.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `animated`, `animation`, `background` workflows.
- **Pattern coverage** — includes `data`, `shader`, `text` workflows.
- **Pattern coverage** — includes `webgl` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Ember Storm — Structure Flow** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
name: add-structure-flow
description: "Build Structure Flow from its verified authored source using Three.js r128–r160, including the complete renderer, interactions, and required assets. Use when Codex needs to implement, port, or adapt this effect without requiring the ComponentX package or reconstructing the visual from an approximation."
---

# Build Structure Flow

## Description

Thirteen authored Three.js field studies collected as one family, spanning particle domes, horizons, orbital systems, matrices, topology, fluid fields, embers, and vortexes.

Recreate the authored behavior from the verified source, not from screenshots or the abbreviated orchestration sample in this skill. The implementation may live directly in the target project and does not require `@componentx/core`.

## Technologies

- React typed variant host
- Thirteen authored Three.js r128-r160 field renderers
- Point clouds, ShaderMaterials, topology scenes, fluid fields, embers, and post-process bloom
- Lazy-loaded renderer-specific lifecycles and controls

## Verified source material

- `src/shaders/structure-flow/StructureFlowCollection.tsx`
- `Axiom-Structure-Flow (2).html — Three.js background`
- `src/shaders/structure-flow/structureFlowRenderer.ts`
- `src/shaders/structure-flow/StructureFlowBackground.tsx`
- `src/shaders/emerald-horizon/EmeraldHorizonBackground.tsx`
- `src/shaders/orbital-sphere/OrbitalSphereBackground.tsx`
- `src/shaders/dot-matrix/DotMatrixBackground.tsx`
- `src/shaders/neuform-isolated/NeuformIsolatedEffects.tsx`
- `src/shaders/neuform-isolated/NeuformCraftEffects.tsx`
- `src/shaders/neuform-isolated/NeuformBatchEffects.tsx`

Source revision: `SHA-256 40eb5bac81e3`

## Implementation steps

1. Open every verified source file listed above and identify the renderer, host lifecycle, styles, and assets before editing.
2. Use StructureFlowCollection as the family entry point and select the exact authored renderer with the variant prop.
3. Keep Structure Flow, Emerald Horizon, Orbital Sphere, Dot Matrix, Expanse Field, Logic Core, Dimensional Field, Data Field, Topology Field, Nebula, Fluid Field, Ember Storm, and Flux Vortex as independent scenes rather than blending them into one renderer.
4. Preserve the source-exact Three.js revision, geometry, shaders, camera, palette, motion, and pointer behavior for every variant.
5. Expose each renderer's own controls at the variant boundary and lazy-load only the selected implementation.
6. Retain every source renderer's resize, visibility, animation-frame, context, and disposal lifecycle.
7. Give the local component a sized, overflow-controlled parent and verify desktop, mobile, reduced-motion, and context-loss behavior.

Asset handling: This effect has no required external assets.

## Local component example

Import the copied local component rather than a package entrypoint:

```tsx
import { StructureFlowCollection } from "./effects/structure-flow/StructureFlowCollection";
import "./effects/structure-flow/styles.css";

export function Scene() {
  return <div className="effect-frame"><StructureFlowCollection variant="emerald-horizon" /></div>;
}
```

## Core renderer pattern

This excerpt documents orchestration only. Copy the exact shader, geometry, pass, and interaction code from the verified source files.

```tsx
<StructureFlowCollection variant="flux-vortex" speed={1} density={1} />
```

## Behavior contract

- Runtime: Three.js r128–r160
- Passes: 1–2 Three.js scene, point-cloud, or ShaderMaterial passes
- Interaction: Variant-specific pointer, motion, geometry, opacity, mask, and palette controls
- Assets: No external assets
- **renderer** (variant): Three.js r128–r160
- **variants** (fixed): 13 field studies
- **controls** (adaptive): Renderer-specific
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
# Structure Flow — Ember Storm — Complete source

Component: `StructureFlowCollection`
Variant: **Ember Storm** (`ember-storm`)
Runtime: Three.js r128–r160
Source revision: `SHA-256 40eb5bac81e3`

## Current configured usage

```tsx
import { StructureFlowCollection } from "@componentx/threeui";
import "@componentx/threeui/style.css";

export function Scene() {
  return (
    <div className="shader-frame">
      <StructureFlowCollection
        variant="ember-storm"
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

### `src/shaders/neuform-isolated/NeuformCraftEffects.tsx`

Role: component · 268 lines · 10720 bytes · SHA-256 `0a1680c3c119dba8c61d946322afa0b64d36dfd80956fb5e7c3fd017d7bfa450`

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

### `src/shaders/neuform-isolated/sources/aeonix-ember-storm.html`

Role: canonical-source · 466 lines · 29441 bytes · SHA-256 `e3badd0308b52fb19e2d958f940cafe5d8ed00b7920c1d1a402da1f54dbbbe99`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AEONIX — Compute scaled in the void</title>
    
    <!-- Fonts: Thinner weights as requested (Syncopate 600 instead of 700, Space Grotesk 400/500/600, Inter 400/500) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Space+Grotesk:wght@400;500;600&family=Syncopate:wght@400;600&display=swap" rel="stylesheet">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'system-ui', 'sans-serif'],
                        display: ['Space Grotesk', 'sans-serif'],
                        brand: ['Syncopate', 'sans-serif'],
                    },
                    colors: {
                        ink: '#080503',
                        ash: { DEFAULT: '#d2c3b4', dim: '#8c7d6f', faint: '#5d5249' },
                        ember: { DEFAULT: '#ff5a1e', hot: '#ff8a3a', gold: '#ffcf86' },
                        crimson: '#c11d12',
                    }
                }
            }
        }
    </script>
    
    <!-- Iconify -->
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
</head>
<body class="bg-ink font-sans text-ash overflow-hidden relative h-screen w-screen selection:bg-ember/30 selection:text-white">

    <!-- Deep Forge Ground Layer -->
    <div class="ground fixed inset-0 z-0 pointer-events-none" 
         style="background: radial-gradient(60% 60% at 60% 47%, rgba(255,80,24,0.30) 0%, rgba(200,40,12,0.10) 30%, rgba(8,5,3,0) 58%), radial-gradient(120% 90% at 14% 116%, rgba(255,90,26,0.22) 0%, rgba(8,5,3,0) 52%), radial-gradient(140% 130% at 50% 50%, rgba(20,10,6,0) 38%, rgba(4,2,1,0.74) 100%), linear-gradient(180deg,#0b0604 0%,#080403 100%);">
    </div>

    <!-- Aura Asset Image Layer -->
    <div class="fixed inset-0 z-[1] pointer-events-none opacity-[0.12] mix-blend-screen bg-cover bg-center" 
         style="background-image: url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_3840w.jpg');">
    </div>

    <!-- Breathing Core Overlay -->
    <div class="core fixed z-[1] left-[50%] lg:left-[60%] top-[38%] lg:top-[47%] w-[50vmax] lg:w-[34vmax] h-[50vmax] lg:h-[34vmax] -translate-x-1/2 -translate-y-1/2 pointer-events-none mix-blend-screen will-change-transform"
         style="background: radial-gradient(circle,rgba(255,150,70,0.42) 0%,rgba(255,70,20,0.16) 28%,rgba(190,30,10,0.05) 48%,rgba(8,5,3,0) 66%);">
    </div>

    <!-- Rotating Ember Ring -->
    <div class="ring fixed z-[1] left-[50%] lg:left-[60%] top-[38%] lg:top-[47%] w-[45vmax] lg:w-[30vmax] h-[45vmax] lg:h-[30vmax] -translate-x-1/2 -translate-y-1/2 pointer-events-none mix-blend-screen rounded-full will-change-transform opacity-0"
         style="background: conic-gradient(from 0deg,rgba(255,120,40,0) 0deg,rgba(255,140,55,0.18) 60deg,rgba(255,90,30,0) 130deg,rgba(255,150,70,0.12) 220deg,rgba(255,90,30,0) 300deg,rgba(255,120,40,0) 360deg); -webkit-mask: radial-gradient(circle,transparent 60%,#000 61%,#000 70%,transparent 72%); mask: radial-gradient(circle,transparent 60%,#000 61%,#000 70%,transparent 72%);">
    </div>

    <!-- WebGL Canvas for Particle Storm -->
    <canvas id="gl" class="fixed inset-0 z-[2] w-full h-full block pointer-events-none mix-blend-screen"></canvas>

    <!-- Grain Texture Overlay -->
    <div class="grain fixed inset-0 z-[3] pointer-events-none opacity-5"
         style="background-image: url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E&quot;);">
    </div>

    <!-- Readability Scrim -->
    <div class="scrim fixed inset-0 z-[3] pointer-events-none bg-gradient-to-b lg:bg-gradient-to-r from-ink/90 lg:from-ink/85 via-ink/40 lg:via-ink/55 to-ink/65 lg:to-transparent"
         style="background: linear-gradient(100deg,rgba(6,3,2,0.86) 0%,rgba(6,3,2,0.55) 28%,rgba(6,3,2,0) 56%);">
    </div>

    <!-- Frame Ticks (Crosshairs) -->
    <span class="frame-tick absolute z-[4] w-3.5 h-3.5 border border-ember/20 pointer-events-none opacity-0 top-[18px] left-[18px] border-r-0 border-b-0"></span>
    <span class="frame-tick absolute z-[4] w-3.5 h-3.5 border border-ember/20 pointer-events-none opacity-0 top-[18px] right-[18px] border-l-0 border-b-0"></span>
    <span class="frame-tick absolute z-[4] w-3.5 h-3.5 border border-ember/20 pointer-events-none opacity-0 bottom-[18px] left-[18px] border-r-0 border-t-0"></span>
    <span class="frame-tick absolute z-[4] w-3.5 h-3.5 border border-ember/20 pointer-events-none opacity-0 bottom-[18px] right-[18px] border-l-0 border-t-0"></span>

    <!-- Floating HUD Readout -->
    <div class="coretemp hidden lg:block fixed z-[4] right-[clamp(20px,9vw,140px)] top-[clamp(96px,21vh,200px)] text-right pointer-events-none opacity-0">
        <div class="k font-display text-[10px] tracking-[0.28em] uppercase text-ash-faint mb-1.5 flex items-center gap-2 justify-end">
            <span class="pip w-1.5 h-1.5 rounded-full bg-ember-hot" style="box-shadow: 0 0 10px 1px #ff5a1e;"></span>
            Core temp
        </div>
        <div class="v font-brand font-semibold text-[clamp(26px,3vw,40px)] leading-[0.9] text-[#fff2e2] tracking-[0.01em]">
            <span data-count="82" data-dec="0">0</span><small class="font-display text-[0.42em] text-ember-hot tracking-[0.06em] ml-1 font-medium">°C</small>
        </div>
    </div>

    <!-- Main UI Shell -->
    <div class="shell relative z-[4] h-dvh h-screen flex flex-col w-full max-w-[1320px] mx-auto px-5 lg:px-[52px]">
        
        <!-- Navigation -->
        <nav class="pt-[clamp(20px,3.2vh,30px)]">
            <div class="nav-row flex items-center justify-between gap-5">
                <div class="brand flex items-center opacity-0">
                    <span class="wordmark font-brand font-semibold text-[15px] lg:text-[18px] tracking-[0.24em] lg:tracking-[0.30em] text-[#fff4e8] uppercase pl-[0.04em]">Aeonix</span>
                </div>
                <div class="nav-links hidden lg:flex items-center gap-[30px]">
                    <a href="#" class="text-[12.5px] tracking-[0.02em] text-ash-dim hover:text-[#fff1e2] relative transition-colors duration-300 opacity-0 after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-ember-hot after:transition-all hover:after:w-full">Platform</a>
                    <a href="#" class="text-[12.5px] tracking-[0.02em] text-ash-dim hover:text-[#fff1e2] relative transition-colors duration-300 opacity-0 after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-ember-hot after:transition-all hover:after:w-full">Infrastructure</a>
                    <a href="#" class="text-[12.5px] tracking-[0.02em] text-ash-dim hover:text-[#fff1e2] relative transition-colors duration-300 opacity-0 after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-ember-hot after:transition-all hover:after:w-full">Models</a>
                    <a href="#" class="text-[12.5px] tracking-[0.02em] text-ash-dim hover:text-[#fff1e2] relative transition-colors duration-300 opacity-0 after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-ember-hot after:transition-all hover:after:w-full">Security</a>
                    <a href="#" class="text-[12.5px] tracking-[0.02em] text-ash-dim hover:text-[#fff1e2] relative transition-colors duration-300 opacity-0 after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-ember-hot after:transition-all hover:after:w-full">Contact</a>
                </div>
                <a href="#" class="nav-cta inline-flex items-center gap-[9px] text-[12.5px] font-medium tracking-[0.02em] text-[#1a0a04] px-[17px] py-2.5 rounded-full whitespace-nowrap opacity-0 transition-all duration-300 hover:-translate-y-[1px]"
                   style="background: linear-gradient(180deg,#ffcf86,#ff7a2a); box-shadow: 0 4px 22px -6px rgba(255,100,40,0.7);">
                    <b class="w-1.5 h-1.5 rounded-full bg-[#3a1202] inline-block"></b>Deploy cluster
                </a>
            </div>
        </nav>

        <!-- Main Content -->
        <main class="flex-1 flex items-end pb-5 lg:pb-[clamp(28px,5vh,58px)] min-h-0">
            <div class="grid w-full grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] gap-6 lg:gap-[clamp(28px,5vw,72px)] items-end">
                
                <div class="lead max-w-[780px]">
                    <div class="eyebrow flex items-center gap-3.5 mb-[clamp(18px,3vh,30px)]">
                        <span class="rule h-px w-0" style="background: linear-gradient(90deg, #ff5a1e, rgba(255,120,50,0));"></span>
                        <span class="tag font-display text-[11px] tracking-[0.3em] uppercase text-ember-hot whitespace-nowrap opacity-0">Hyperscale Compute</span>
                        <span class="ver text-[11px] tracking-[0.18em] text-ash-faint opacity-0">/ cluster v2.4</span>
                    </div>
                    
                    <h1 class="font-display font-medium text-[clamp(34px,12vw,52px)] lg:text-[clamp(40px,7.4vw,100px)] leading-[0.95] tracking-tight text-[#fff6ec] text-balance">
                        <span class="block">
                            <span class="inline-block overflow-hidden"><span class="word-reveal inline-block will-change-transform pr-2 lg:pr-3">Compute</span></span>
                            <span class="inline-block overflow-hidden"><span class="word-reveal inline-block will-change-transform">scaled</span></span>
                        </span>
                        <span class="block">
                            <span class="inline-block overflow-hidden"><span class="word-reveal inline-block will-change-transform pr-2 lg:pr-3">in</span></span>
                            <span class="inline-block overflow-hidden"><span class="word-reveal inline-block will-change-transform pr-2 lg:pr-3">the</span></span>
                            <span class="inline-block overflow-hidden"><span class="word-reveal inline-block will-change-transform grad bg-clip-text text-transparent" style="background-image: linear-gradient(96deg,#ff7a2a 0%,#ffcf86 46%,#ff4d18 100%);">void.</span></span>
                        </span>
                    </h1>
                    
                    <p class="sub mt-[clamp(14px,3vh,26px)] max-w-[500px] text-[clamp(14px,1.15vw,16px)] leading-[1.62] text-ash-dim opacity-0">
                        <b class="text-[#ead9c8] font-medium">Aeonix</b> orchestrates the hyperscale infrastructure where neural networks are 
                        trained, deployed, and monitored under controlled precision. Distributed compute, 
                        live latency mapping, and parameter tuning traced down to the tensor.
                    </p>
                    
                    <div class="actions flex items-center gap-4 mt-[clamp(18px,3.6vh,36px)] flex-wrap">
                        <a href="#" class="btn btn-prime inline-flex items-center gap-2.5 rounded-full px-6 py-[13px] text-[13.5px] font-medium tracking-[0.01em] text-[#1a0a04] transition-all duration-300 hover:-translate-y-0.5 group"
                           style="background: linear-gradient(180deg,#ffcf86,#ff7322); box-shadow: 0 8px 30px -8px rgba(255,100,40,0.65);">
                            Start a cluster
                            <iconify-icon icon="solar:arrow-right-linear" class="text-lg transition-transform duration-300 group-hover:translate-x-1" style="stroke-width: 1.5;"></iconify-icon>
                        </a>
                        
                        <!-- Gradient Border Treatment -->
                        <div class="relative p-[1px] rounded-full bg-gradient-to-b from-ember/40 to-transparent group hover:from-ember/70 transition-colors duration-300 opacity-0 btn-ghost-wrap">
                            <a href="#" class="btn btn-ghost flex items-center gap-2.5 rounded-full px-6 py-[13px] text-[13.5px] font-medium tracking-[0.01em] text-ash bg-ink transition-colors duration-300 hover:text-[#fff1e2]">
                                Model registry
                            </a>
                        </div>
                    </div>
                </div>

                <aside class="rail relative w-full lg:w-[236px] flex flex-col grid grid-cols-2 lg:flex gap-x-[18px] gap-y-1.5 lg:gap-0 lg:pl-[22px] pt-[18px] lg:pt-0">
                    <!-- Gradient Border Treatments -->
                    <div class="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/20 via-white/5 to-transparent hidden lg:block"></div>
                    <div class="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-white/20 via-white/5 to-transparent lg:hidden"></div>
                    
                    <div class="rail-head col-span-2 lg:col-span-1 flex items-center gap-2 mb-0.5 lg:mb-[18px] opacity-0">
                        <span class="dot w-1.5 h-1.5 rounded-full bg-ember-hot" style="box-shadow: 0 0 9px 1px #ff5a1e;"></span>
                        <span class="lbl font-display text-[10.5px] tracking-[0.26em] uppercase text-ash-faint">Cluster telemetry</span>
                    </div>
                    
                    <div class="metric py-2 lg:py-[13px] border-b-0 lg:border-b border-white/5 opacity-0">
                        <div class="k text-[10.5px] tracking-[0.16em] uppercase text-ash-faint mb-1.5">Peak latency</div>
                        <div class="v font-display text-[25px] font-medium text-[#fff2e2] leading-none flex items-baseline gap-1">
                            <span data-count="12" data-dec="0">0</span><small class="text-[12px] text-ember-hot font-medium tracking-[0.02em]">ms</small>
                        </div>
                    </div>
                    
                    <div class="metric py-2 lg:py-[13px] border-b-0 lg:border-b border-white/5 opacity-0">
                        <div class="k text-[10.5px] tracking-[0.16em] uppercase text-ash-faint mb-1.5">Daily requests</div>
                        <div class="v font-display text-[25px] font-medium text-[#fff2e2] leading-none flex items-baseline gap-1">
                            <span data-count="4.2" data-dec="1">0.0</span><small class="text-[12px] text-ember-hot font-medium tracking-[0.02em]">B</small>
                        </div>
                    </div>
                    
                    <div class="metric py-2 lg:py-[13px] border-b-0 lg:border-b border-white/5 opacity-0">
                        <div class="k text-[10.5px] tracking-[0.16em] uppercase text-ash-faint mb-1.5">Active nodes</div>
                        <div class="v font-display text-[25px] font-medium text-[#fff2e2] leading-none flex items-baseline gap-1">
                            <span data-count="1024" data-dec="0">0</span>
                        </div>
                    </div>
                    
                    <div class="metric py-2 lg:py-[13px] opacity-0">
                        <div class="k text-[10.5px] tracking-[0.16em] uppercase text-ash-faint mb-1.5">Uptime</div>
                        <div class="v font-display text-[25px] font-medium text-[#fff2e2] leading-none flex items-baseline gap-1">
                            <span data-count="99.99" data-dec="2">0.00</span><small class="text-[12px] text-ember-hot font-medium tracking-[0.02em]">%</small>
                        </div>
                    </div>
                    
                    <div class="meter hidden lg:block mt-[18px] opacity-0 col-span-2">
                        <div class="mlbl flex justify-between text-[10px] tracking-[0.14em] uppercase text-ash-faint mb-2">
                            <span>Compute load</span><span>stable</span>
                        </div>
                        <div class="bars flex gap-[3px] h-[30px] items-end" id="bars">
                            <!-- Bars injected by JS -->
                        </div>
                    </div>
                </aside>
            </div>
        </main>

        <!-- Footer Status -->
        <footer class="pb-[clamp(16px,2.6vh,24px)]">
            <div class="status relative flex items-center justify-between gap-[18px] pt-[14px] opacity-0">
                <!-- Gradient Border Treatment -->
                <div class="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-white/20 via-white/5 to-transparent"></div>
                
                <div class="left flex items-center gap-5 flex-wrap">
                    <span class="pill flex items-center gap-2 text-[11px] tracking-[0.04em] text-ash-dim">
                        <span class="gd w-1.5 h-1.5 rounded-full bg-[#ffb347]" style="box-shadow: 0 0 8px 1px rgba(255,150,60,0.7);"></span>
                        All clusters nominal
                    </span>
                    <span class="pill flex items-center gap-2 text-[11px] tracking-[0.04em] text-ash-dim">
                        3 regions · edge + hyperscale
                    </span>
                </div>
                <div class="right hidden md:block font-display text-[11px] tracking-[0.18em] uppercase text-ash-faint whitespace-nowrap">
                    Trained by data, proven by scale
                </div>
            </div>
        </footer>
    </div>

    <!-- Scripts -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/0.160.0/three.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
    
    <script>
        const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        gsap.registerPlugin(ScrollTrigger);

        /* ============ EMBER STORM VORTEX (WebGL / Three.js) ============ */
        (function(){
            const canvas = document.getElementById('gl');
            if(!window.THREE) return;
            const RES = 0.5;
            let renderer;
            try{
                renderer = new THREE.WebGLRenderer({canvas, antialias:false, alpha:true, powerPreference:'high-performance'});
            }catch(e){ return; }
            renderer.setPixelRatio(1);
            renderer.setClearColor(0x000000, 0);

            const scene = new THREE.Scene();
            const camera = new THREE.OrthographicCamera(-1,1,1,-1,0,1);

            const COUNT = 12000;
            const seeds = new Float32Array(COUNT);
            const angs  = new Float32Array(COUNT);
            const rads  = new Float32Array(COUNT);
            for(let i=0;i<COUNT;i++){
                seeds[i] = Math.random();
                angs[i]  = Math.random()*Math.PI*2.0;
                rads[i]  = Math.sqrt(Math.random());
            }
            const geo = new THREE.BufferGeometry();
            geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(COUNT*3), 3));
            geo.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1));
            geo.setAttribute('aAng',  new THREE.BufferAttribute(angs, 1));
            geo.setAttribute('aRad',  new THREE.BufferAttribute(rads, 1));

            const uniforms = {
                uTime:   { value: 0 },
                uScale:  { value: 1 },
                uAspect: { value: 1.6 },
            };

            const mat = new THREE.ShaderMaterial({
                uniforms,
                transparent:true,
                depthTest:false,
                depthWrite:false,
                blending:THREE.AdditiveBlending,
                vertexShader:`
                    attribute float aSeed;
                    attribute float aAng;
                    attribute float aRad;
                    uniform float uTime;
                    uniform float uScale;
                    uniform float uAspect;
                    varying float vHeat;
                    varying float vFlick;
                    varying float vCore;
                    float hash(float n){ return fract(sin(n*12.9898)*43758.5453); }
                    void main(){
                        float life = hash(aSeed*7.31);
                        float u = fract(uTime*(0.045 + life*0.06) + aSeed);
                        float rmax = 0.58 + aRad*0.48;
                        float r = max(rmax*(1.0 - u*0.82), 0.018);
                        float omega = (0.55 + life*0.55) / (r*0.9 + 0.12);
                        float spiral = (rmax - r)*5.2;
                        float theta = aAng + uTime*omega*0.34 + spiral;
                        float t1 = sin(theta*3.0 + aSeed*10.0 + uTime*0.8);
                        float t2 = sin(r*9.0 - uTime*1.1 + aSeed*4.0);
                        r += t1*0.022 + t2*0.016;
                        float cx = 0.20, cy = 0.06;
                        float x = cx + (cos(theta)*r)/uAspect;
                        float y = cy + sin(theta)*r;
                        y += u*0.11 + sin(uTime*5.0 + aSeed*30.0)*0.006;
                        x += sin(uTime*3.3 + aSeed*22.0)*0.004/uAspect;

                        vCore  = 1.0 - smoothstep(0.0, 0.17, r);
                        vHeat  = clamp(pow(1.0-u, 1.3) * (0.5 + 0.5*(1.0-r)), 0.0, 1.0);
                        vFlick = 0.55 + 0.45*sin(uTime*9.0 + aSeed*40.0);
                        float sz = (0.7 + hash(aSeed*12.3)*2.7) * (0.45 + vHeat*1.55 + vCore*1.4);
                        gl_Position = vec4(x, y, 0.0, 1.0);
                        gl_PointSize = sz * uScale;
                    }
                `,
                fragmentShader:`
                    precision mediump float;
                    varying float vHeat;
                    varying float vFlick;
                    varying float vCore;
                    void main(){
                        vec2 p = gl_PointCoord*2.0 - 1.0;
                        float d = dot(p,p);
                        if(d>1.0) discard;
                        float core = (1.0-d); core *= core;
                        vec3 crimson = vec3(0.72,0.10,0.03);
                        vec3 amber   = vec3(1.0,0.55,0.12);
                        vec3 white   = vec3(1.0,0.93,0.78);
                        vec3 c = mix(crimson, amber, vHeat);
                        c = mix(c, white, vCore*0.85);
                        float a = core*(0.28 + 0.85*vHeat)*vFlick + core*vCore*0.55;
                        gl_FragColor = vec4(c*(1.0 + vHeat*0.5 + vCore*0.7), a);
                    }
                `
            });

            const points = new THREE.Points(geo, mat);
            points.frustumCulled = false;
            scene.add(points);

            function resize(){
                const w = window.innerWidth, h = window.innerHeight;
                renderer.setSize(Math.round(w*RES), Math.round(h*RES), false);
                canvas.style.width = w+'px';
                canvas.style.height = h+'px';
                uniforms.uAspect.value = Math.max(0.6, w/h);
                uniforms.uScale.value = Math.max(0.6, (h*RES)/900);
            }
            resize();
            window.addEventListener('resize', resize);

            let raf=0, running=true, last=performance.now();
            function frame(now){
                if(!running) return;
                const dt = Math.min(0.05,(now-last)/1000); last=now;
                uniforms.uTime.value += dt;
                renderer.render(scene,camera);
                raf=requestAnimationFrame(frame);
            }
            if(REDUCED){
                uniforms.uTime.value = 9.1;
                renderer.render(scene,camera);
            } else {
                raf=requestAnimationFrame(frame);
            }
            document.addEventListener('visibilitychange',()=>{
                if(document.hidden){ running=false; cancelAnimationFrame(raf); }
                else if(!REDUCED){ running=true; last=performance.now(); raf=requestAnimationFrame(frame); }
            });
        })();

        /* ============ LIVING COMPUTATIONAL-LOAD METER ============ */
        (function(){
            const host = document.getElementById('bars');
            if(!host) return;
            const N=22, bars=[];
            for(let i=0;i<N;i++){ 
                const b=document.createElement('i'); 
                b.className = "flex-1 rounded-sm opacity-85 origin-bottom";
                b.style.background = "linear-gradient(180deg, #ffcf86, #c11d12)";
                b.style.transform = "scaleY(0.3)";
                host.appendChild(b); 
                bars.push(b); 
            }
            if(REDUCED){ bars.forEach((b,i)=>b.style.transform='scaleY('+(0.35+Math.abs(Math.sin(i*0.7))*0.55).toFixed(2)+')'); return; }
            let t=0, acc=0, prev=performance.now();
            function tick(now){
                acc += now-prev; prev=now;
                if(acc>=110){
                    acc=0; t+=0.18;
                    for(let i=0;i<N;i++){
                        const v = 0.30 + 0.55*Math.abs(Math.sin(t + i*0.55) * Math.cos(t*0.6 - i*0.3));
                        bars[i].style.transform = 'scaleY('+v.toFixed(2)+')';
                    }
                }
                requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
        })();

        /* ============ COUNT-UP TELEMETRY ============ */
        function runCounters(){
            document.querySelectorAll('[data-count]').forEach(el=>{
                const target=parseFloat(el.dataset.count), dec=parseInt(el.dataset.dec||'0');
                if(REDUCED){ el.textContent=target.toFixed(dec); return; }
                const t0=performance.now(), dur=1500;
                function step(t){
                    const p=Math.min(1,(t-t0)/dur);
                    const e=1-Math.pow(1-p,3);
                    el.textContent=(target*e).toFixed(dec);
                    if(p<1) requestAnimationFrame(step);
                }
                requestAnimationFrame(step);
            });
        }

        /* ============ ENTRANCE CHOREOGRAPHY ============ */
        (function(){
            if(REDUCED || !window.gsap){
                document.querySelectorAll('.brand,.nav-links a,.nav-cta,.eyebrow .tag,.eyebrow .ver,.sub,.rail-head,.metric,.meter,.status,.frame-tick,.coretemp,.ring,.btn-prime,.btn-ghost-wrap')
                    .forEach(e=>{e.style.opacity=1; e.style.transform='none'});
                document.querySelectorAll('.word-reveal').forEach(e=>e.style.transform='none');
                document.querySelector('.eyebrow .rule').style.width='34px';
                runCounters();
                return;
            }
            
            const tl = gsap.timeline({defaults:{ease:'power3.out'}});
            tl.to('.frame-tick',{opacity:1,duration:.4,stagger:.05},0);
            tl.fromTo('.brand',{y:-12,opacity:0},{y:0,opacity:1,duration:.6},.1);
            
            // Masked staggered word reveal hooked to ScrollTrigger
            gsap.fromTo('.word-reveal', 
                {yPercent:115},
                {yPercent:0, duration:.9, ease:'power4.out', stagger:.08, scrollTrigger: { trigger: 'h1', start: "top 95%" }}
            );
            
            tl.to('.eyebrow .rule',{width:34,duration:.5},.3)
              .fromTo('.eyebrow .tag',{x:-10,opacity:0},{x:0,opacity:1,duration:.45},.42)
              .to('.eyebrow .ver',{opacity:1,duration:.45},.55);
              
            tl.fromTo('.nav-links a',{y:-8,opacity:0},{y:0,opacity:1,duration:.5,stagger:.06},.45)
              .fromTo('.nav-cta',{scale:.8,opacity:0},{scale:1,opacity:1,duration:.5,ease:'back.out(2)'},.5);
              
            tl.to('.ring',{opacity:1,duration:1.0},.4);
            tl.fromTo('.coretemp',{opacity:0,x:18},{opacity:1,x:0,duration:.7},.6);
            tl.fromTo('.sub',{opacity:0,y:14,filter:'blur(6px)'},{opacity:1,y:0,filter:'blur(0px)',duration:.7},.72);
            
            tl.fromTo(['.btn-prime','.btn-ghost-wrap'],{opacity:0,y:16},{opacity:1,y:0,duration:.55,stagger:.09},.84);
            
            tl.to('.rail-head',{opacity:1,duration:.45},.55)
              .fromTo('.metric',{x:18,opacity:0},{x:0,opacity:1,duration:.5,stagger:.09,onStart:runCounters},.62)
              .to('.meter',{opacity:1,duration:.45},1.0);
              
            tl.fromTo('.status',{y:10,opacity:0},{y:0,opacity:1,duration:.55},.95);

            // Ambient breathing animations
            gsap.to('.core',{filter:'brightness(1.35)',duration:2.4,repeat:-1,yoyo:true,ease:'sine.inOut'});
            gsap.to('.ring',{rotation:360,duration:46,repeat:-1,ease:'none',transformOrigin:'50% 50%'});
            gsap.to('.rail-head .dot',{opacity:.35,duration:.9,repeat:-1,yoyo:true,ease:'sine.inOut'});
            gsap.to('.coretemp .pip',{opacity:.3,duration:.7,repeat:-1,yoyo:true,ease:'sine.inOut'});
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
