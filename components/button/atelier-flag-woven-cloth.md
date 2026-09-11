---
name: "Atelier Flag — Woven Cloth"
library: "ComponentX"
id: "atelier-flag-woven-cloth"
type: "button"
quality: "showcase"
tags: ["animation", "background", "button", "component", "loading", "shader", "text", "webgl"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Atelier Flag — Woven Cloth

> **Type:** `button` · **Quality:** `showcase` · **ID:** `atelier-flag-woven-cloth`
> **Path:** `components/button/atelier-flag-woven-cloth.md`

**Atelier Flag — Woven Cloth** is a premium, production-ready component from the **ComponentX** library — engineered for button interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Showcase tier** — a high-impact, visually rich implementation — animated, 3D, or dependency-heavy by design.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `animation`, `background`, `button` workflows.
- **Pattern coverage** — includes `loading`, `shader`, `text` workflows.
- **Pattern coverage** — includes `webgl` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Atelier Flag — Woven Cloth** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
name: add-woven-cloth
description: "Build Woven Cloth from its verified authored source using Three.js r160, including the complete renderer, interactions, and required assets. Use when Codex needs to implement, port, or adapt this effect without requiring the ComponentX package or reconstructing the visual from an approximation."
---

# Build Woven Cloth

## Description

A Three.js woven-cloth simulation with Woven Cloth typography printed into its procedural textile so every letter deforms with the fabric, and three companion cloths woven around the same Verlet sheet.

Recreate the authored behavior from the verified source, not from screenshots or the abbreviated orchestration sample in this skill. The implementation may live directly in the target project and does not require `@componentx/core`.

## Technologies

- React component with a sandboxed `srcDoc` effect boundary
- Three.js r160 woven-cloth scene with canvas-texture typography copied from the byte-exact Neuform export
- A post-load focus adapter that keeps only the authored shader, button, canvas, or visual targets visible
- Optional outer-frame hue, saturation, and brightness grading with source-exact defaults

## Verified source material

- `src/shaders/woven-cloth/WovenCloth.tsx`
- `src/shaders/neuform-isolated/NeuformCraftEffects.tsx`
- `src/shaders/neuform-isolated/sources/lumina-weavers-cloth.html`
- `src/shaders/woven-cloth/woven-cloth-iridescent.html`
- `src/shaders/woven-cloth/woven-cloth-atelier.html`
- `src/shaders/woven-cloth/woven-cloth-washi.html`

Source revision: `SHA-256 9bfd56ef7579`

## Implementation steps

1. Open every verified source file listed above and identify the renderer, host lifecycle, styles, and assets before editing.
2. Copy the complete canonical HTML source byte-for-byte so its shader strings, materials, DOM, timing, and initialization order remain auditable.
3. After the source load event, retain only the fixed cloth viewport; do not rewrite the renderer or approximate the composition.
4. Force retained background targets to the sandbox viewport and center retained buttons without changing their internal pointer or shader state.
5. Dispatch one resize event after reparenting so the exact source renderer recalculates its backing resolution.
6. Apply optional hue, saturation, and brightness only to the outer iframe; omit the filter at 0/1/1 so source color remains exact.
7. Keep the sandbox isolated with `allow-scripts` only; removing the iframe must release its document, listeners, frames, and graphics contexts together.
8. Give the local component a sized, overflow-controlled parent and verify desktop, mobile, reduced-motion, and context-loss behavior.

Asset handling: This effect has no required external assets.

## Local component example

Import the copied local component rather than a package entrypoint:

```tsx
import { WovenCloth } from "./effects/woven-cloth/WovenCloth";
import "./effects/woven-cloth/styles.css";

export function Scene() {
  return <div className="effect-frame"><WovenCloth /></div>;
}
```

## Core renderer pattern

This excerpt documents orchestration only. Copy the exact shader, geometry, pass, and interaction code from the verified source files.

```tsx
const focusedSource = canonicalHtml
  .replace("</head>", focusStyles + "</head>")
  .replace("</body>", focusAfterLoadScript + "</body>");

return <iframe title="Focused source effect" srcDoc={focusedSource} sandbox="allow-scripts" />;
```

## Behavior contract

- Runtime: Three.js r160
- Passes: 1 Three.js cloth scene pass per variant, plus a bright-pass bloom on the iridescent silk
- Interaction: Variant selection; typography deforms with the authored textile motion + optional final-frame palette
- Assets: No owned binary assets
- **source** (fixed): Exact Neuform HTML for the base cloth
- **variant** (optional): Woven Cloth | Iridescent Silk | Atelier Flag | Washi Noren
- **companions** (original): Three first-party documents; the packaged export is untouched
- **focus** (host): Effect-only sandbox
- **palette** (optional): Final-frame grade
- **assets** (fixed): No owned binary assets

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
# Woven Cloth — Atelier Flag — Complete source

Component: `WovenCloth`
Variant: **Atelier Flag** (`atelier`)
Runtime: Three.js r160
Source revision: `SHA-256 9bfd56ef7579`

## Current configured usage

```tsx
import { WovenCloth } from "@componentx/threeui";
import "@componentx/threeui/style.css";

export function Scene() {
  return (
    <div className="shader-frame">
      <WovenCloth
        variant="atelier"
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

This bundle contains all 7 required text source files. Preserve their paths and contents; none are excerpts.

### `src/shaders/woven-cloth/WovenCloth.tsx`

Role: component · 94 lines · 2993 bytes · SHA-256 `5a89ff035bdf33dbc642d2916b56dbe94e89cb0af184474c139ffbfe5a720550`

```tsx
import { useMemo } from "react";

import {
  NEUFORM_CRAFT_DEFAULTS,
  WovenCloth as WovenClothSource,
  type NeuformCraftEffectProps,
} from "../neuform-isolated/NeuformCraftEffects";
import atelierSource from "./woven-cloth-atelier.html?raw";
import iridescentSource from "./woven-cloth-iridescent.html?raw";
import washiSource from "./woven-cloth-washi.html?raw";

export const WOVEN_CLOTH_VARIANTS = ["woven-cloth", "iridescent", "atelier", "washi"] as const;
export type WovenClothVariant = (typeof WOVEN_CLOTH_VARIANTS)[number];

export type WovenClothProps = NeuformCraftEffectProps & {
  variant?: WovenClothVariant;
};

/* "woven-cloth" is the packaged Neuform export, rendered by its own isolated
   host so the authored document stays exactly as supplied. The other three are
   complete first-party documents: each keeps the parent's Verlet sheet and its
   habit of printing the wordmark into the textile, and rebuilds the material,
   the construction and the light around a different cloth. */
type CompanionDefinition = {
  title: string;
  background: string;
  source: string;
};

const COMPANIONS: Record<Exclude<WovenClothVariant, "woven-cloth">, CompanionDefinition> = {
  iridescent: {
    title: "Woven Cloth iridescent silk",
    background: "#05060d",
    source: iridescentSource,
  },
  atelier: {
    title: "Woven Cloth atelier flag",
    background: "#12100d",
    source: atelierSource,
  },
  washi: {
    title: "Woven Cloth washi noren",
    background: "#0d0a07",
    source: washiSource,
  },
};

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(maximum, Math.max(minimum, value));
}

function CompanionCloth({
  definition,
  hue = NEUFORM_CRAFT_DEFAULTS.hue,
  saturation = NEUFORM_CRAFT_DEFAULTS.saturation,
  brightness = NEUFORM_CRAFT_DEFAULTS.brightness,
  className,
  style,
}: NeuformCraftEffectProps & { definition: CompanionDefinition }) {
  const safeHue = clamp(hue, -180, 180);
  const safeSaturation = clamp(saturation, 0, 2);
  const safeBrightness = clamp(brightness, 0.35, 1.65);
  const filter = safeHue === 0 && safeSaturation === 1 && safeBrightness === 1
    ? undefined
    : `hue-rotate(${safeHue}deg) saturate(${safeSaturation}) brightness(${safeBrightness})`;

  return (
    <iframe
      className={className}
      title={definition.title}
      srcDoc={definition.source}
      sandbox="allow-scripts"
      loading="eager"
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        border: 0,
        background: definition.background,
        filter,
        ...style,
      }}
    />
  );
}

export function WovenCloth({ variant = "woven-cloth", ...props }: WovenClothProps) {
  const definition = useMemo(
    () => (variant === "woven-cloth" ? undefined : COMPANIONS[variant] ?? undefined),
    [variant],
  );
  if (!definition) return <WovenClothSource {...props} />;
  return <CompanionCloth {...props} key={variant} definition={definition} />;
}
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

### `src/shaders/neuform-isolated/sources/lumina-weavers-cloth.html`

Role: canonical-source · 370 lines · 17470 bytes · SHA-256 `9bfd56ef7579a92cb6385b3e93866bc3ff54fa4489a0febb9809b720e2946fb6`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <title>Lumina Weavers · Kinetic Textiles, Kyoto</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js"></script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
</head>
<body class="text-[#e8dcc4] overflow-hidden antialiased selection:bg-[#b02330] selection:text-white font-serif" style="background: radial-gradient(120% 100% at 50% 30%, #2a1113 0%, #1a0a0c 55%, #0f0607 100%); height: 100dvh; width: 100vw;">

    <!-- Aura Asset Background -->
    <div class="fixed inset-0 pointer-events-none z-0 bg-cover bg-center opacity-[0.15] mix-blend-screen" style="background-image: url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_1600w.jpg');"></div>

    <!-- Stage / Background -->
    <div class="fixed inset-0 overflow-hidden z-0">
        <canvas id="cloth" class="absolute inset-0 w-full h-full block pointer-events-none"></canvas>
        <div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(90% 80% at 50% 46%, transparent 55%, rgba(10,5,6,.72) 100%);"></div>
    </div>

    <!-- UI Overlay -->
    <div class="absolute inset-0 z-10 flex flex-col p-6 md:p-12 pointer-events-none font-sans">
        
        <!-- Header -->
        <header class="flex justify-between items-center w-full pointer-events-auto">
            <div class="overflow-hidden">
                <div class="reveal-item opacity-0 translate-y-8 text-xs tracking-[0.28em] uppercase text-[#b99a8f] font-medium">
                    Est. 2024 · Kyoto, Japan
                </div>
            </div>
            <nav class="hidden md:flex gap-8">
                <div class="overflow-hidden">
                    <a href="#library" class="reveal-item block opacity-0 translate-y-8 text-xs tracking-widest uppercase text-[#e8dcc4]/80 hover:text-white transition-colors duration-300">Material Library</a>
                </div>
                <div class="overflow-hidden">
                    <a href="#trade" class="reveal-item block opacity-0 translate-y-8 text-xs tracking-widest uppercase text-[#e8dcc4]/80 hover:text-white transition-colors duration-300">Partnerships</a>
                </div>
                <div class="overflow-hidden">
                    <a href="#mill" class="reveal-item block opacity-0 translate-y-8 text-xs tracking-widest uppercase text-[#e8dcc4]/80 hover:text-white transition-colors duration-300">The Studio</a>
                </div>
            </nav>
        </header>

        <!-- Footer / Content -->
        <div class="mt-auto flex flex-col sm:flex-row justify-between items-start sm:items-end gap-8 pointer-events-auto w-full">
            
            <div class="max-w-md space-y-6">
                <div>
                    <p class="word-reveal text-sm md:text-base leading-relaxed text-[#e8dcc4]/90">
                        <strong class="text-white font-semibold block mb-1 text-base md:text-lg tracking-tight font-serif">Kinetic textiles, rendered to order.</strong>
                        Every meter is simulated on bespoke kinetic engines. Digital threads, authentic physics, designed for infinite virtual environments.
                    </p>
                </div>
                
                <div class="overflow-hidden pt-2">
                    <div class="reveal-item opacity-0 translate-y-8 inline-block rounded-sm p-[1px] bg-gradient-to-b from-white/30 via-[#e03848]/30 to-[#7c1622]/10 shadow-[0_10px_30px_rgba(124,22,34,0.4)] transition-transform duration-300 hover:-translate-y-0.5 group">
                        <a href="#commission" class="flex items-center gap-3 bg-[#b02330] group-hover:bg-[#961c27] text-white px-6 py-3 rounded-[1px] text-sm font-semibold tracking-wide transition-colors relative overflow-hidden">
                            <span class="relative z-10">Commission a textile</span>
                            <iconify-icon icon="solar:arrow-right-linear" width="18" class="relative z-10 transition-transform group-hover:translate-x-1"></iconify-icon>
                            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                        </a>
                    </div>
                </div>
            </div>

            <div class="text-left sm:text-right mt-8 sm:mt-0">
                <div class="word-reveal text-xs tracking-[0.24em] uppercase text-[#b99a8f] leading-[1.9] font-medium">
                    Vector &amp; matrix<br>
                    No. 42 azure thread<br>
                    Node 7 · Grid 2024
                </div>
            </div>

        </div>
    </div>

    <script>
        // --- GSAP Animation ---
        document.addEventListener("DOMContentLoaded", () => {
            gsap.registerPlugin(ScrollTrigger);
            
            // Standard reveals
            gsap.to(".reveal-item", {
                y: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.1,
                ease: "power3.out",
                delay: 0.2
            });

            // Masked Word Reveal implementation
            document.querySelectorAll('.word-reveal').forEach(node => {
                function wrapWords(el) {
                    const childNodes = Array.from(el.childNodes);
                    childNodes.forEach(child => {
                        if (child.nodeType === 3) {
                            const words = child.nodeValue.split(/(\s+)/);
                            const fragment = document.createDocumentFragment();
                            words.forEach(word => {
                                if (word.trim().length > 0) {
                                    const wrapper = document.createElement('span');
                                    wrapper.className = 'inline-flex overflow-hidden pb-1 -mb-1';
                                    const inner = document.createElement('span');
                                    inner.className = 'word-anim translate-y-[110%] opacity-0 inline-block';
                                    inner.textContent = word;
                                    wrapper.appendChild(inner);
                                    fragment.appendChild(wrapper);
                                } else {
                                    fragment.appendChild(document.createTextNode(word));
                                }
                            });
                            el.replaceChild(fragment, child);
                        } else if (child.nodeType === 1) {
                            wrapWords(child);
                        }
                    });
                }
                wrapWords(node);

                // ScrollTrigger staggered reveal
                gsap.to(node.querySelectorAll('.word-anim'), {
                    y: 0,
                    opacity: 1,
                    duration: 0.9,
                    stagger: 0.02,
                    ease: "power4.out",
                    delay: 0.3,
                    scrollTrigger: {
                        trigger: node,
                        start: "top 95%",
                    }
                });
            });
        });

        // --- Three.js Cloth Simulation ---
        (() => {
            const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
            const canvas = document.getElementById('cloth');
            if (!window.THREE) return;

            // Generate Woven Texture
            function makeClothTexture() {
                const W = 1280, H = 800;
                const c = document.createElement('canvas'); 
                c.width = W; 
                c.height = H;
                const x = c.getContext('2d');
                
                // Ivory ground gradient
                const g = x.createLinearGradient(0, 0, 0, H);
                g.addColorStop(0, '#efe6d4'); 
                g.addColorStop(0.5, '#e9dfca'); 
                g.addColorStop(1, '#e3d7bf');
                x.fillStyle = g; 
                x.fillRect(0, 0, W, H);

                // Crimson hem border
                x.strokeStyle = '#a5202c'; 
                x.lineWidth = 10;
                x.strokeRect(46, 46, W-92, H-92);
                x.lineWidth = 3; 
                x.strokeStyle = '#7c1622';
                x.strokeRect(66, 66, W-132, H-132);

                // Typography
                x.fillStyle = '#a5202c';
                x.font = 'bold 78px Georgia, "Times New Roman", serif';
                x.textAlign = 'center'; 
                x.textBaseline = 'middle';
                x.fillText('L W', W/2, 190);
                
                x.font = 'normal 20px "Helvetica Neue", Arial, sans-serif';
                x.fillStyle = '#7c1622';
                x.fillText('· KYOTO ·', W/2, 246);

                x.fillStyle = '#9e1e2a';
                x.font = 'bold 118px Georgia, "Times New Roman", serif';
                x.fillText('LUMINA', W/2, 400);
                x.fillText('WEAVERS', W/2, 520);

                x.fillStyle = '#7c1622';
                x.font = '600 30px "Helvetica Neue", Arial, sans-serif';
                x.fillText('K I N E T I C   T E X T I L E S   ·   2 0 2 4', W/2, 626);

                // Weave overlay (Thread grid)
                x.globalAlpha = 1;
                for(let yy=0; yy<H; yy+=3){
                    x.strokeStyle = 'rgba(60,30,20,0.05)'; 
                    x.lineWidth = 1;
                    x.beginPath(); x.moveTo(0,yy+.5); x.lineTo(W,yy+.5); x.stroke();
                }
                for(let xx=0; xx<W; xx+=3){
                    x.strokeStyle = 'rgba(255,250,235,0.06)'; 
                    x.lineWidth = 1;
                    x.beginPath(); x.moveTo(xx+.5,0); x.lineTo(xx+.5,H); x.stroke();
                }

                // Fabric Slub Noise
                const id = x.getImageData(0, 0, W, H), d = id.data;
                for(let i=0; i<d.length; i+=4){
                    const n = (Math.random()*2-1)*10;
                    d[i]+=n; d[i+1]+=n; d[i+2]+=n;
                }
                x.putImageData(id, 0, 0);

                const tex = new THREE.CanvasTexture(c);
                tex.anisotropy = 4; 
                tex.colorSpace = THREE.SRGBColorSpace;
                return tex;
            }

            // Scene Setup
            const scene = new THREE.Scene();
            const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            let camera;

            const BW = 4.4, BH = 2.75; 
            const GX = 40, GY = 26;
            const geo = new THREE.PlaneGeometry(BW, BH, GX, GY);
            const mat = new THREE.MeshPhongMaterial({
                map: makeClothTexture(), 
                side: THREE.DoubleSide,
                shininess: 6, 
                specular: 0x2a1410, 
                color: 0xffffff
            });
            const mesh = new THREE.Mesh(geo, mat); 
            scene.add(mesh);

            // Lighting
            scene.add(new THREE.AmbientLight(0xffe9d0, 0.62));
            const key = new THREE.DirectionalLight(0xfff0dc, 1.15); 
            key.position.set(-3, 3.5, 3.2); 
            scene.add(key);
            const rim = new THREE.DirectionalLight(0xb02330, 0.42); 
            rim.position.set(3, -1.5, 2.0); 
            scene.add(rim);

            // Verlet Physics Data
            const pos = geo.attributes.position;
            const N = (GX + 1) * (GY + 1);
            const cur = new Float32Array(N * 3), prev = new Float32Array(N * 3), rest = new Float32Array(N * 3);
            const pinned = new Uint8Array(N);
            
            for(let i=0; i<N; i++){
                const ax = pos.getX(i), ay = pos.getY(i), az = 0;
                cur[i*3] = prev[i*3] = rest[i*3] = ax;
                cur[i*3+1] = prev[i*3+1] = rest[i*3+1] = ay;
                cur[i*3+2] = prev[i*3+2] = rest[i*3+2] = az;
            }
            
            for(let ix=0; ix<=GX; ix++){ pinned[ix] = 1; }
            const idx = (ix, iy) => ix + iy * (GX + 1);

            const restH = BW / GX, restV = BH / GY;
            const GRAV = -3.1, DAMP = 0.985, DT = 0.016;

            function wind(ix, iy, t) {
                const cx = ix / GX, cy = iy / GY;
                const travel = t * 1.7 - cy * 4.2;
                const gust = 0.6 + 0.42 * Math.sin(t * 0.6) + 0.18 * Math.sin(t * 1.9 + 1.3);
                const amp = 4.3 * cy;
                const fz = (Math.sin(travel + cx * 3.3) + 0.5 * Math.sin(travel * 1.7 + cx * 6.0)) * amp * gust;
                const fx = Math.sin(t * 0.9 + cy * 2.2) * 0.6 * cy;
                const fy = -0.4 * cy;
                return [fx, fy, fz];
            }

            function step(t) {
                for(let iy=0; iy<=GY; iy++){
                    for(let ix=0; ix<=GX; ix++){
                        const i = idx(ix, iy);
                        if(pinned[i]) continue;
                        const [fx, fy, fz] = wind(ix, iy, t);
                        for(let k=0; k<3; k++){
                            const j = i * 3 + k;
                            const a = (k===0 ? fx : k===1 ? (fy+GRAV) : fz);
                            const v = (cur[j] - prev[j]) * DAMP;
                            prev[j] = cur[j];
                            cur[j] = cur[j] + v + a * DT * DT;
                        }
                    }
                }
                
                for(let it=0; it<3; it++){
                    for(let iy=0; iy<=GY; iy++){
                        for(let ix=0; ix<GX; ix++){ solve(idx(ix,iy), idx(ix+1,iy), restH); }
                    }
                    for(let iy=0; iy<GY; iy++){
                        for(let ix=0; ix<=GX; ix++){ solve(idx(ix,iy), idx(ix,iy+1), restV); }
                    }
                }
                
                for(let ix=0; ix<=GX; ix++){
                    const i = ix;
                    cur[i*3] = rest[i*3]; cur[i*3+1] = rest[i*3+1]; cur[i*3+2] = rest[i*3+2];
                    prev[i*3] = rest[i*3]; prev[i*3+1] = rest[i*3+1]; prev[i*3+2] = rest[i*3+2];
                }
            }

            function solve(a, b, rl) {
                const ax = cur[a*3], ay = cur[a*3+1], az = cur[a*3+2];
                const bx = cur[b*3], by = cur[b*3+1], bz = cur[b*3+2];
                let dx = bx - ax, dy = by - ay, dz = bz - az;
                const d = Math.sqrt(dx*dx + dy*dy + dz*dz) || 1e-6;
                const diff = (d - rl) / d * 0.5;
                dx *= diff; dy *= diff; dz *= diff;
                
                const pa = pinned[a], pb = pinned[b];
                if(!pa && !pb){ 
                    cur[a*3]+=dx; cur[a*3+1]+=dy; cur[a*3+2]+=dz; 
                    cur[b*3]-=dx; cur[b*3+1]-=dy; cur[b*3+2]-=dz; 
                }
                else if(pa && !pb){ cur[b*3]-=dx*2; cur[b*3+1]-=dy*2; cur[b*3+2]-=dz*2; }
                else if(!pa && pb){ cur[a*3]+=dx*2; cur[a*3+1]+=dy*2; cur[a*3+2]+=dz*2; }
            }

            function commit() {
                for(let i=0; i<N; i++){ pos.setXYZ(i, cur[i*3], cur[i*3+1], cur[i*3+2]); }
                pos.needsUpdate = true;
                geo.computeVertexNormals();
            }

            function fit() {
                const w = window.innerWidth, h = window.innerHeight;
                renderer.setSize(w, h, false);
                const aspect = w / h;
                camera = new THREE.PerspectiveCamera(42, aspect, 0.1, 100);
                const vFit = (BH/2) / Math.tan(42 * Math.PI / 360);
                const hFit = (BW/2) / Math.tan(42 * Math.PI / 360) / aspect;
                camera.position.set(0, 0.05, Math.max(vFit, hFit) * 1.16 + 0.4);
                camera.lookAt(0, 0, 0);
            }
            
            window.addEventListener('resize', fit); 
            fit();

            let running = false, raf = 0, t = 0;
            function loop() {
                if(!running) return;
                t += DT; 
                step(t); 
                commit();
                renderer.render(scene, camera);
                raf = requestAnimationFrame(loop);
            }
            
            function start() { if(running)return; running=true; raf=requestAnimationFrame(loop); }
            function stop() { running=false; cancelAnimationFrame(raf); }

            if(reduce) {
                for(let s=0; s<220; s++) step(s*DT);
                commit(); 
                renderer.render(scene, camera);
            } else {
                for(let s=0; s<40; s++) step(s*DT);
                t = 40 * DT;
                start();
                document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());
            }
        })();
    </script>
</body>
</html>
```

### `src/shaders/woven-cloth/woven-cloth-iridescent.html`

Role: variant-source · 551 lines · 21728 bytes · SHA-256 `e3b14adac39dfef04ed0bb0df99e86a1aa0aaf7cea4f8ecc4d5e0931b48bee7b`

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<title>Woven Cloth · Iridescent Silk</title>
<script src="https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js"></script>
<style>
  html, body { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; background: #05060d; }
  #cloth { display: block; width: 100%; height: 100%; }
  #vignette {
    position: fixed; inset: 0; pointer-events: none;
    background: radial-gradient(78% 70% at 50% 44%, transparent 46%, rgba(3,4,10,.78) 100%);
  }
</style>
</head>
<body>
<canvas id="cloth"></canvas>
<div id="vignette"></div>
<script>
(() => {
  const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
  const canvas = document.getElementById('cloth');
  if (!window.THREE) return;

  /* ---------------------------------------------------------------- maps --
     Everything the silk needs is drawn once into 2D canvases: a satin weave
     height field, the wordmark woven into it as raised warp floats, and a
     smooth film-thickness field that makes the interference colour travel. */

  const TW = 1600, TH = 1000;

  function surface(w, h) {
    const c = document.createElement('canvas');
    c.width = w; c.height = h;
    return { canvas: c, ctx: c.getContext('2d', { willReadFrequently: true }) };
  }

  // Wordmark drawn once as a white-on-black coverage mask.
  function makeWordmarkMask() {
    const s = surface(TW, TH), x = s.ctx;
    x.fillStyle = '#000'; x.fillRect(0, 0, TW, TH);
    x.fillStyle = '#fff';
    x.textAlign = 'center'; x.textBaseline = 'middle';
    x.font = 'bold 96px Georgia, "Times New Roman", serif';
    x.fillText('W C', TW / 2, 208);
    x.font = '700 30px "Helvetica Neue", Arial, sans-serif';
    x.fillText('· A T E L I E R ·', TW / 2, 278);
    x.font = 'bold 150px Georgia, "Times New Roman", serif';
    x.fillText('WOVEN', TW / 2, 452);
    x.fillText('CLOTH', TW / 2, 600);
    x.font = '700 38px "Helvetica Neue", Arial, sans-serif';
    x.fillText('I R I D E S C E N T   S I L K', TW / 2, 718);
    // Hairline frame, woven as a raised rib rather than printed.
    x.strokeStyle = '#fff'; x.lineWidth = 7;
    x.strokeRect(64, 64, TW - 128, TH - 128);
    x.lineWidth = 3;
    x.strokeRect(92, 92, TW - 184, TH - 184);
    return x.getImageData(0, 0, TW, TH).data;
  }

  // Five-harness satin: long warp floats broken by a scattered binding point.
  function weaveHeight(x, y) {
    const p = 8;
    const cx = Math.floor(x / p), cy = Math.floor(y / p);
    const u = (x % p) / p, v = (y % p) / p;
    const binding = ((cx * 2 + cy) % 5) === 0;
    const profile = (t) => Math.sin(t * Math.PI);
    let h = binding ? profile(v) * 0.9 : profile(u);
    // Slubs: a few threads run thicker than their neighbours.
    h += Math.sin(cx * 12.9898) * Math.sin(cx * 4.1414 + 2.3) * 0.16;
    h += Math.sin(cy * 7.233 + 1.7) * 0.06;
    return h;
  }

  function valueNoise(seed) {
    const G = 64, grid = new Float32Array(G * G);
    let s = seed;
    const rnd = () => (s = (s * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff;
    for (let i = 0; i < G * G; i++) grid[i] = rnd();
    const smooth = (t) => t * t * (3 - 2 * t);
    return (u, v) => {
      const fx = u * G, fy = v * G;
      const ix = Math.floor(fx), iy = Math.floor(fy);
      const tx = smooth(fx - ix), ty = smooth(fy - iy);
      const at = (a, b) => grid[((b % G) + G) % G * G + ((a % G) + G) % G];
      const a = at(ix, iy), b = at(ix + 1, iy), c = at(ix, iy + 1), d = at(ix + 1, iy + 1);
      return (a + (b - a) * tx) + ((c + (d - c) * tx) - (a + (b - a) * tx)) * ty;
    };
  }

  const mask = makeWordmarkMask();

  // One pass builds the height field; albedo, normal and roughness share it.
  const height = new Float32Array(TW * TH);
  for (let y = 0; y < TH; y++) {
    for (let x = 0; x < TW; x++) {
      const i = y * TW + x;
      const m = mask[i * 4] / 255;
      // Inside a letter the warp floats ride higher and longer.
      height[i] = weaveHeight(x, y) * (1 - m * 0.30) + m * 1.15;
    }
  }

  function blurHeight(passes) {
    const tmp = new Float32Array(TW * TH);
    for (let n = 0; n < passes; n++) {
      for (let y = 0; y < TH; y++) {
        const row = y * TW;
        for (let x = 0; x < TW; x++) {
          const a = height[row + (x > 0 ? x - 1 : x)];
          const b = height[row + x];
          const c = height[row + (x < TW - 1 ? x + 1 : x)];
          tmp[row + x] = (a + b + b + c) * 0.25;
        }
      }
      for (let x = 0; x < TW; x++) {
        for (let y = 0; y < TH; y++) {
          const a = tmp[(y > 0 ? y - 1 : y) * TW + x];
          const b = tmp[y * TW + x];
          const c = tmp[(y < TH - 1 ? y + 1 : y) * TW + x];
          height[y * TW + x] = (a + b + b + c) * 0.25;
        }
      }
    }
  }

  function makeNormalTexture(strength) {
    const s = surface(TW, TH);
    const img = s.ctx.createImageData(TW, TH), d = img.data;
    for (let y = 0; y < TH; y++) {
      const yp = y > 0 ? y - 1 : y, yn = y < TH - 1 ? y + 1 : y;
      for (let x = 0; x < TW; x++) {
        const xp = x > 0 ? x - 1 : x, xn = x < TW - 1 ? x + 1 : x;
        const dx = (height[y * TW + xp] - height[y * TW + xn]) * strength;
        const dy = (height[yp * TW + x] - height[yn * TW + x]) * strength;
        const len = Math.sqrt(dx * dx + dy * dy + 1);
        const o = (y * TW + x) * 4;
        d[o] = (dx / len * 0.5 + 0.5) * 255;
        d[o + 1] = (dy / len * 0.5 + 0.5) * 255;
        d[o + 2] = (1 / len * 0.5 + 0.5) * 255;
        d[o + 3] = 255;
      }
    }
    s.ctx.putImageData(img, 0, 0);
    return new THREE.CanvasTexture(s.canvas);
  }

  function makeAlbedoTexture() {
    const s = surface(TW, TH), x = s.ctx;
    const g = x.createLinearGradient(0, 0, TW * 0.35, TH);
    g.addColorStop(0, '#161033');
    g.addColorStop(0.45, '#0d1030');
    g.addColorStop(1, '#100b26');
    x.fillStyle = g; x.fillRect(0, 0, TW, TH);
    const img = x.getImageData(0, 0, TW, TH), d = img.data;
    for (let i = 0; i < TW * TH; i++) {
      const m = mask[i * 4] / 255;
      const shade = 0.88 + height[i] * 0.10;
      const o = i * 4;
      d[o] = Math.min(255, d[o] * shade + m * 96);
      d[o + 1] = Math.min(255, d[o + 1] * shade + m * 78);
      d[o + 2] = Math.min(255, d[o + 2] * shade + m * 118);
    }
    x.putImageData(img, 0, 0);
    const tex = new THREE.CanvasTexture(s.canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  // Satin floats inside the letters read glossier than the matte ground.
  function makeRoughnessTexture() {
    const s = surface(TW, TH), x = s.ctx;
    const img = x.createImageData(TW, TH), d = img.data;
    const grain = valueNoise(9271);
    for (let y = 0; y < TH; y++) {
      for (let xx = 0; xx < TW; xx++) {
        const i = y * TW + xx;
        const m = mask[i * 4] / 255;
        const n = grain(xx / TW * 5, y / TH * 5);
        let r = 0.30 - height[i] * 0.07 + n * 0.09 - m * 0.16;
        r = Math.max(0.04, Math.min(0.8, r));
        const o = i * 4;
        d[o] = d[o + 1] = d[o + 2] = r * 255; d[o + 3] = 255;
      }
    }
    x.putImageData(img, 0, 0);
    return new THREE.CanvasTexture(s.canvas);
  }

  // Film thickness drives the interference hue; broad and smooth so the
  // colour sweeps across the folds instead of flickering per-thread.
  function makeThicknessTexture() {
    const W = 512, H = 320, s = surface(W, H), x = s.ctx;
    const img = x.createImageData(W, H), d = img.data;
    const a = valueNoise(4471), b = valueNoise(88231);
    for (let y = 0; y < H; y++) {
      for (let xx = 0; xx < W; xx++) {
        const u = xx / W, v = y / H;
        const n = a(u * 3.4, v * 2.4) * 0.58 + b(u * 8.5, v * 5.6) * 0.42;
        const o = (y * W + xx) * 4;
        const sweep = 0.5 + 0.42 * Math.sin(u * Math.PI * 2 - v * 1.15);
        const t = Math.max(0, Math.min(1, sweep + (n - 0.5) * 0.26));
        d[o] = d[o + 1] = d[o + 2] = t * 255; d[o + 3] = 255;
      }
    }
    x.putImageData(img, 0, 0);
    return new THREE.CanvasTexture(s.canvas);
  }

  /* ------------------------------------------------------- environment --
     A small studio painted into an equirectangular canvas: three softboxes
     of different colour temperature, which is what the iridescent film has
     to break apart into colour. */
  function makeStudioEnvironment(renderer) {
    const W = 1024, H = 512, s = surface(W, H), x = s.ctx;
    const g = x.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, '#0a0c1c');
    g.addColorStop(0.5, '#05060e');
    g.addColorStop(1, '#02030a');
    x.fillStyle = g; x.fillRect(0, 0, W, H);

    const box = (cx, cy, w, h, color, alpha) => {
      const grad = x.createRadialGradient(cx, cy, 0, cx, cy, Math.max(w, h));
      grad.addColorStop(0, color);
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      x.globalAlpha = alpha;
      x.fillStyle = grad;
      x.save(); x.translate(cx, cy); x.scale(w / Math.max(w, h), h / Math.max(w, h));
      x.beginPath(); x.arc(0, 0, Math.max(w, h), 0, Math.PI * 2); x.fill();
      x.restore();
      x.globalAlpha = 1;
    };

    box(W * 0.24, H * 0.20, 300, 120, '#fff3e2', 1);      // warm key overhead
    box(W * 0.74, H * 0.34, 230, 190, '#7fd8ff', 0.95);   // cool side fill
    box(W * 0.52, H * 0.86, 340, 130, '#ff5fa8', 0.55);   // magenta bounce
    box(W * 0.02, H * 0.55, 160, 220, '#9d7bff', 0.5);    // violet rim

    const tex = new THREE.CanvasTexture(s.canvas);
    tex.mapping = THREE.EquirectangularReflectionMapping;
    tex.colorSpace = THREE.SRGBColorSpace;
    const pmrem = new THREE.PMREMGenerator(renderer);
    pmrem.compileEquirectangularShader();
    const env = pmrem.fromEquirectangular(tex).texture;
    pmrem.dispose();
    tex.dispose();
    return env;
  }

  function makeBackdropTexture() {
    const W = 512, H = 320, s = surface(W, H), x = s.ctx;
    x.fillStyle = '#04050c'; x.fillRect(0, 0, W, H);
    const g = x.createRadialGradient(W * 0.5, H * 0.42, 0, W * 0.5, H * 0.42, W * 0.62);
    g.addColorStop(0, 'rgba(58,42,120,0.85)');
    g.addColorStop(0.45, 'rgba(22,20,58,0.55)');
    g.addColorStop(1, 'rgba(3,4,11,0)');
    x.fillStyle = g; x.fillRect(0, 0, W, H);
    const tex = new THREE.CanvasTexture(s.canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  /* ------------------------------------------------------------- scene -- */
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.48;

  const maxAniso = renderer.capabilities.getMaxAnisotropy();
  const scene = new THREE.Scene();
  scene.background = makeBackdropTexture();
  scene.environment = makeStudioEnvironment(renderer);

  const BW = 4.7, BH = 2.8;
  const GX = 56, GY = 40;
  const geo = new THREE.PlaneGeometry(BW, BH, GX, GY);

  const albedo = makeAlbedoTexture();
  blurHeight(2);
  const normalMap = makeNormalTexture(2.4);
  const roughnessMap = makeRoughnessTexture();
  const thicknessMap = makeThicknessTexture();
  thicknessMap.wrapS = THREE.RepeatWrapping;
  [albedo, normalMap, roughnessMap, thicknessMap].forEach((t) => { t.anisotropy = maxAniso; });

  const mat = new THREE.MeshPhysicalMaterial({
    map: albedo,
    normalMap,
    normalScale: new THREE.Vector2(0.24, 0.24),
    roughnessMap,
    roughness: 1.0,
    metalness: 0.45,
    side: THREE.DoubleSide,
    envMapIntensity: 2.6,
    iridescence: 1.0,
    iridescenceIOR: 2.2,
    iridescenceThicknessRange: [300, 820],
    iridescenceThicknessMap: thicknessMap,
    sheen: 0.3,
    sheenColor: new THREE.Color('#a9d9ff'),
    sheenRoughness: 0.32,
  });

  const mesh = new THREE.Mesh(geo, mat);
  scene.add(mesh);

  scene.add(new THREE.AmbientLight(0x3b3676, 0.55));
  const key = new THREE.DirectionalLight(0xffeede, 2.1);
  key.position.set(-3.1, 3.2, 3.4); scene.add(key);
  const rimCool = new THREE.DirectionalLight(0x3fbcff, 2.9);
  rimCool.position.set(3.6, 0.6, 2.2); scene.add(rimCool);
  const rimWarm = new THREE.DirectionalLight(0xff3d8e, 2.4);
  rimWarm.position.set(0.4, -2.6, 1.6); scene.add(rimWarm);
  const fill = new THREE.DirectionalLight(0x9d7bff, 1.6);
  fill.position.set(-3.2, -1.0, 2.6); scene.add(fill);

  /* ----------------------------------------------------------- physics --
     The parent's Verlet sheet, run finer and slower so the specular travels
     over the folds instead of chattering. The pinned top row is driven on a
     shallow standing wave, which is what sets the vertical folds. */
  const pos = geo.attributes.position;
  const N = (GX + 1) * (GY + 1);
  const cur = new Float32Array(N * 3), prev = new Float32Array(N * 3), rest = new Float32Array(N * 3);
  const pinned = new Uint8Array(N);

  for (let i = 0; i < N; i++) {
    const ax = pos.getX(i), ay = pos.getY(i);
    cur[i * 3] = prev[i * 3] = rest[i * 3] = ax;
    cur[i * 3 + 1] = prev[i * 3 + 1] = rest[i * 3 + 1] = ay;
    cur[i * 3 + 2] = prev[i * 3 + 2] = rest[i * 3 + 2] = 0;
  }
  for (let ix = 0; ix <= GX; ix++) pinned[ix] = 1;

  const idx = (ix, iy) => ix + iy * (GX + 1);
  const restH = BW / GX, restV = BH / GY;
  const GRAV = -2.15, DAMP = 0.989, DT = 0.016;

  function wind(ix, iy, t) {
    const cx = ix / GX, cy = iy / GY;
    const travel = t * 1.15 - cy * 3.4;
    const gust = 0.52 + 0.34 * Math.sin(t * 0.44) + 0.16 * Math.sin(t * 1.31 + 1.1);
    const amp = 2.15 * cy;
    const fz = (Math.sin(travel + cx * 2.6) + 0.46 * Math.sin(travel * 1.55 + cx * 5.1)) * amp * gust;
    const fx = Math.sin(t * 0.6 + cy * 1.9) * 0.9 * cy * (cx - 0.5);
    return [fx, -0.3 * cy, fz];
  }

  // Standing folds: the rail the silk hangs from breathes in and out.
  function railZ(ix, t) {
    const cx = ix / GX;
    return Math.sin(cx * Math.PI * 3.0 + t * 0.22) * 0.15
         + Math.sin(cx * Math.PI * 5.0 - t * 0.15) * 0.05;
  }

  function solve(a, b, rl) {
    const ax = cur[a * 3], ay = cur[a * 3 + 1], az = cur[a * 3 + 2];
    let dx = cur[b * 3] - ax, dy = cur[b * 3 + 1] - ay, dz = cur[b * 3 + 2] - az;
    const d = Math.sqrt(dx * dx + dy * dy + dz * dz) || 1e-6;
    const diff = (d - rl) / d * 0.5;
    dx *= diff; dy *= diff; dz *= diff;
    const pa = pinned[a], pb = pinned[b];
    if (!pa && !pb) {
      cur[a * 3] += dx; cur[a * 3 + 1] += dy; cur[a * 3 + 2] += dz;
      cur[b * 3] -= dx; cur[b * 3 + 1] -= dy; cur[b * 3 + 2] -= dz;
    } else if (pa && !pb) { cur[b * 3] -= dx * 2; cur[b * 3 + 1] -= dy * 2; cur[b * 3 + 2] -= dz * 2; }
    else if (!pa && pb) { cur[a * 3] += dx * 2; cur[a * 3 + 1] += dy * 2; cur[a * 3 + 2] += dz * 2; }
  }

  function step(t) {
    for (let iy = 0; iy <= GY; iy++) {
      for (let ix = 0; ix <= GX; ix++) {
        const i = idx(ix, iy);
        if (pinned[i]) continue;
        const f = wind(ix, iy, t);
        for (let k = 0; k < 3; k++) {
          const j = i * 3 + k;
          const a = k === 0 ? f[0] : k === 1 ? f[1] + GRAV : f[2];
          const v = (cur[j] - prev[j]) * DAMP;
          prev[j] = cur[j];
          cur[j] = cur[j] + v + a * DT * DT;
        }
      }
    }
    for (let it = 0; it < 4; it++) {
      for (let iy = 0; iy <= GY; iy++) for (let ix = 0; ix < GX; ix++) solve(idx(ix, iy), idx(ix + 1, iy), restH);
      for (let iy = 0; iy < GY; iy++) for (let ix = 0; ix <= GX; ix++) solve(idx(ix, iy), idx(ix, iy + 1), restV);
    }
    for (let ix = 0; ix <= GX; ix++) {
      const i = ix, z = railZ(ix, t);
      cur[i * 3] = prev[i * 3] = rest[i * 3];
      cur[i * 3 + 1] = prev[i * 3 + 1] = rest[i * 3 + 1];
      cur[i * 3 + 2] = prev[i * 3 + 2] = z;
    }
  }

  function commit() {
    for (let i = 0; i < N; i++) pos.setXYZ(i, cur[i * 3], cur[i * 3 + 1], cur[i * 3 + 2]);
    pos.needsUpdate = true;
    geo.computeVertexNormals();
  }

  /* -------------------------------------------------------------- bloom --
     Scene into a half-float target, a bright pass at quarter resolution,
     two separable blurs, then one composite that tone-maps to the screen. */
  const rtScene = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, samples: 4 });
  const rtA = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType });
  const rtB = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType });
  [rtScene, rtA, rtB].forEach((rt) => {
    rt.texture.minFilter = THREE.LinearFilter;
    rt.texture.magFilter = THREE.LinearFilter;
    rt.texture.generateMipmaps = false;
  });

  const quadGeo = new THREE.PlaneGeometry(2, 2);
  const quadCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const quadScene = new THREE.Scene();
  const quad = new THREE.Mesh(quadGeo, null);
  quadScene.add(quad);

  const VERT = 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }';

  const brightMat = new THREE.ShaderMaterial({
    uniforms: { tDiffuse: { value: null }, threshold: { value: 0.72 } },
    vertexShader: VERT,
    fragmentShader: [
      'uniform sampler2D tDiffuse; uniform float threshold; varying vec2 vUv;',
      'void main(){',
      '  vec3 c = texture2D(tDiffuse, vUv).rgb;',
      '  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));',
      '  float k = max(l - threshold, 0.0) / max(l, 1e-4);',
      '  gl_FragColor = vec4(c * k, 1.0);',
      '}',
    ].join('\n'),
  });

  const blurMat = new THREE.ShaderMaterial({
    uniforms: { tDiffuse: { value: null }, direction: { value: new THREE.Vector2(1, 0) } },
    vertexShader: VERT,
    fragmentShader: [
      'uniform sampler2D tDiffuse; uniform vec2 direction; varying vec2 vUv;',
      'void main(){',
      '  vec3 sum = texture2D(tDiffuse, vUv).rgb * 0.2270270270;',
      '  sum += texture2D(tDiffuse, vUv + direction * 1.3846153846).rgb * 0.3162162162;',
      '  sum += texture2D(tDiffuse, vUv - direction * 1.3846153846).rgb * 0.3162162162;',
      '  sum += texture2D(tDiffuse, vUv + direction * 3.2307692308).rgb * 0.0702702703;',
      '  sum += texture2D(tDiffuse, vUv - direction * 3.2307692308).rgb * 0.0702702703;',
      '  gl_FragColor = vec4(sum, 1.0);',
      '}',
    ].join('\n'),
  });

  const compositeMat = new THREE.ShaderMaterial({
    uniforms: { tDiffuse: { value: null }, tBloom: { value: null }, strength: { value: 0.62 } },
    vertexShader: VERT,
    fragmentShader: [
      'uniform sampler2D tDiffuse; uniform sampler2D tBloom; uniform float strength; varying vec2 vUv;',
      'void main(){',
      '  vec3 base = texture2D(tDiffuse, vUv).rgb;',
      '  vec3 glow = texture2D(tBloom, vUv).rgb;',
      '  gl_FragColor = vec4(base + glow * strength, 1.0);',
      '  #include <tonemapping_fragment>',
      '  #include <colorspace_fragment>',
      '}',
    ].join('\n'),
  });

  function blit(material, target) {
    quad.material = material;
    renderer.setRenderTarget(target);
    renderer.render(quadScene, quadCam);
  }

  /* --------------------------------------------------------------- fit -- */
  let camera, cw = 1, ch = 1;
  function fit() {
    cw = window.innerWidth; ch = window.innerHeight;
    renderer.setSize(cw, ch, false);
    const dpr = renderer.getPixelRatio();
    const pw = Math.max(2, Math.floor(cw * dpr)), ph = Math.max(2, Math.floor(ch * dpr));
    rtScene.setSize(pw, ph);
    rtA.setSize(Math.max(2, pw >> 2), Math.max(2, ph >> 2));
    rtB.setSize(Math.max(2, pw >> 2), Math.max(2, ph >> 2));
    const aspect = cw / ch;
    camera = new THREE.PerspectiveCamera(40, aspect, 0.1, 100);
    const vFit = (BH / 2) / Math.tan(40 * Math.PI / 360);
    const hFit = (BW / 2) / Math.tan(40 * Math.PI / 360) / aspect;
    camera.position.set(0, 0.02, Math.max(vFit, hFit) * 0.98 + 0.24);
    camera.lookAt(0, -0.04, 0);
  }
  window.addEventListener('resize', fit);
  fit();

  function draw(t) {
    thicknessMap.offset.x = (t * 0.028) % 1;
    // Slow parallax so the highlight sweeps rather than sits.
    const base = camera.position.z;
    camera.position.x = Math.sin(t * 0.13) * 0.30;
    camera.position.y = 0.02 + Math.sin(t * 0.17 + 1.4) * 0.12;
    camera.position.z = base;
    camera.lookAt(0, -0.04, 0);

    renderer.setRenderTarget(rtScene);
    renderer.clear();
    renderer.render(scene, camera);

    brightMat.uniforms.tDiffuse.value = rtScene.texture;
    blit(brightMat, rtA);
    blurMat.uniforms.tDiffuse.value = rtA.texture;
    blurMat.uniforms.direction.value.set(1 / rtA.width, 0);
    blit(blurMat, rtB);
    blurMat.uniforms.tDiffuse.value = rtB.texture;
    blurMat.uniforms.direction.value.set(0, 1 / rtA.height);
    blit(blurMat, rtA);

    compositeMat.uniforms.tDiffuse.value = rtScene.texture;
    compositeMat.uniforms.tBloom.value = rtA.texture;
    renderer.setRenderTarget(null);
    blit(compositeMat, null);
  }

  let running = false, raf = 0, t = 0;
  function loop() {
    if (!running) return;
    t += DT;
    step(t); commit(); draw(t);
    raf = requestAnimationFrame(loop);
  }
  function start() { if (running) return; running = true; raf = requestAnimationFrame(loop); }
  function stop() { running = false; cancelAnimationFrame(raf); }

  // Deterministic capture hook — render one frame at an exact time.
  window.__seek = (time) => {
    const target = Math.max(0, time);
    if (target < t) { t = 0; for (let i = 0; i < N * 3; i++) { cur[i] = rest[i]; prev[i] = rest[i]; } }
    while (t < target - DT * 0.5) { t += DT; step(t); }
    commit(); draw(t);
  };

  for (let s = 0; s < 150; s++) step(s * DT);
  t = 150 * DT;
  if (reduce) {
    commit(); draw(t);
  } else {
    start();
    document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));
  }
})();
</script>
</body>
</html>
```

### `src/shaders/woven-cloth/woven-cloth-atelier.html`

Role: variant-source · 487 lines · 18979 bytes · SHA-256 `f9be15756ff385db9cd3b7082b139d10b84a4eba0b3c4f19749b305570a7191f`

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<title>Woven Cloth · Atelier Flag</title>
<script src="https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js"></script>
<style>
  html, body { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; background: #12100d; }
  #cloth { display: block; width: 100%; height: 100%; }
  #vignette {
    position: fixed; inset: 0; pointer-events: none;
    background: radial-gradient(84% 76% at 46% 42%, transparent 50%, rgba(14,12,10,.72) 100%);
  }
</style>
</head>
<body>
<canvas id="cloth"></canvas>
<div id="vignette"></div>
<script>
(() => {
  const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
  const canvas = document.getElementById('cloth');
  if (!window.THREE) return;

  const TW = 1600, TH = 1030;

  // Cut-and-sew geometry, in texture pixels. Everything the flag is made of
  // — hoist band, panel seams, hems, topstitching — is laid out from here.
  const HOIST = 122;          // heading tape down the pinned edge
  const FLY_HEM = 48;         // doubled hem at the flying edge
  const EDGE_HEM = 36;        // top and bottom hems
  const SEAM_Y = [TH / 3, (TH * 2) / 3];
  const SEAM_H = 24;

  function surface(w, h) {
    const c = document.createElement('canvas');
    c.width = w; c.height = h;
    return { canvas: c, ctx: c.getContext('2d', { willReadFrequently: true }) };
  }

  function alpha(ctx) { return ctx.getImageData(0, 0, TW, TH).data; }

  // --- masks ---------------------------------------------------------------
  // Construction: the raised cloth of the band, the felled seams, the hems.
  function makeStructureMask() {
    const s = surface(TW, TH), x = s.ctx;
    x.fillStyle = '#000'; x.fillRect(0, 0, TW, TH);
    x.fillStyle = '#fff';
    x.fillRect(0, 0, HOIST, TH);
    x.fillRect(TW - FLY_HEM, 0, FLY_HEM, TH);
    x.fillRect(0, 0, TW, EDGE_HEM);
    x.fillRect(0, TH - EDGE_HEM, TW, EDGE_HEM);
    SEAM_Y.forEach((y) => x.fillRect(HOIST, y - SEAM_H / 2, TW - HOIST - FLY_HEM, SEAM_H));
    return alpha(x);
  }

  // Topstitching: every seam and hem gets its own run of thread.
  function makeStitchMask() {
    const s = surface(TW, TH), x = s.ctx;
    x.fillStyle = '#000'; x.fillRect(0, 0, TW, TH);
    x.strokeStyle = '#fff';
    x.lineWidth = 4;
    x.setLineDash([15, 11]);
    x.lineCap = 'butt';
    const run = (x0, y0, x1, y1) => { x.beginPath(); x.moveTo(x0, y0); x.lineTo(x1, y1); x.stroke(); };

    run(16, 0, 16, TH);                 // hoist tape, inner and outer rows
    run(HOIST - 16, 0, HOIST - 16, TH);
    run(TW - FLY_HEM + 16, 0, TW - FLY_HEM + 16, TH);
    run(HOIST, EDGE_HEM - 13, TW - FLY_HEM, EDGE_HEM - 13);
    run(HOIST, TH - EDGE_HEM + 13, TW - FLY_HEM, TH - EDGE_HEM + 13);
    SEAM_Y.forEach((y) => {
      run(HOIST, y - SEAM_H / 2 + 5, TW - FLY_HEM, y - SEAM_H / 2 + 5);
      run(HOIST, y + SEAM_H / 2 - 5, TW - FLY_HEM, y + SEAM_H / 2 - 5);
    });

    // The sewn-on woven label, tacked down on all four sides.
    x.setLineDash([11, 9]);
    x.lineWidth = 3.5;
    x.strokeRect(TW - 470, TH - 214, 300, 104);
    x.setLineDash([]);
    return alpha(x);
  }

  // Everything printed: the house lockup, the composition line, the label.
  function makeInkMask() {
    const s = surface(TW, TH), x = s.ctx;
    x.fillStyle = '#000'; x.fillRect(0, 0, TW, TH);
    x.fillStyle = '#fff';
    x.textAlign = 'center'; x.textBaseline = 'middle';
    const cx = HOIST + (TW - HOIST - FLY_HEM) / 2;

    x.font = '700 30px "Helvetica Neue", Arial, sans-serif';
    x.fillText('A T E L I E R   ·   N O .   4 2', cx, TH * 0.235);

    x.font = 'bold 152px Georgia, "Times New Roman", serif';
    x.fillText('WOVEN', cx, TH * 0.395);
    x.fillText('CLOTH', cx, TH * 0.555);

    x.fillRect(cx - 250, TH * 0.645, 500, 4);

    x.font = '600 28px "Helvetica Neue", Arial, sans-serif';
    x.fillText('100% LINEN  ·  WARP 40s  ·  WEFT 40s  ·  CUT AND SEWN TO ORDER', cx, TH * 0.705);

    // Woven label content.
    x.font = 'bold 40px Georgia, "Times New Roman", serif';
    x.fillText('W C', TW - 320, TH - 184);
    x.font = '600 19px "Helvetica Neue", Arial, sans-serif';
    x.fillText('THREE PANEL · FLAT FELLED', TW - 320, TH - 144);
    return alpha(x);
  }

  const structure = makeStructureMask();
  const stitch = makeStitchMask();
  const ink = makeInkMask();

  // Plain linen weave — square, matte, slightly irregular in the thread.
  function weaveHeight(x, y) {
    const p = 7;
    const cx = Math.floor(x / p), cy = Math.floor(y / p);
    const u = (x % p) / p, v = (y % p) / p;
    const warpUp = ((cx + cy) % 2) === 0;
    const h = warpUp ? Math.sin(u * Math.PI) : Math.sin(v * Math.PI);
    return h + Math.sin(cx * 12.9898) * Math.sin(cy * 4.1414 + 1.9) * 0.22;
  }

  const height = new Float32Array(TW * TH);
  for (let y = 0; y < TH; y++) {
    for (let x = 0; x < TW; x++) {
      const i = y * TW + x;
      const st = structure[i * 4] / 255;
      const th = stitch[i * 4] / 255;
      height[i] = weaveHeight(x, y) + st * 1.5 + th * 3.4 + (ink[i * 4] / 255) * 0.22;
    }
  }

  function blurHeight(passes) {
    const tmp = new Float32Array(TW * TH);
    for (let n = 0; n < passes; n++) {
      for (let y = 0; y < TH; y++) {
        const row = y * TW;
        for (let x = 0; x < TW; x++) {
          const a = height[row + (x > 0 ? x - 1 : x)], b = height[row + x];
          const c = height[row + (x < TW - 1 ? x + 1 : x)];
          tmp[row + x] = (a + b + b + c) * 0.25;
        }
      }
      for (let x = 0; x < TW; x++) {
        for (let y = 0; y < TH; y++) {
          const a = tmp[(y > 0 ? y - 1 : y) * TW + x], b = tmp[y * TW + x];
          const c = tmp[(y < TH - 1 ? y + 1 : y) * TW + x];
          height[y * TW + x] = (a + b + b + c) * 0.25;
        }
      }
    }
  }

  function makeAlbedoTexture() {
    const s = surface(TW, TH), x = s.ctx;
    // Three panels, each cut from its own dye lot.
    const lots = ['#ded2b8', '#d8ccb1', '#e2d6bd'];
    for (let k = 0; k < 3; k++) {
      x.fillStyle = lots[k];
      x.fillRect(0, (TH / 3) * k, TW, TH / 3 + 1);
    }
    const img = x.getImageData(0, 0, TW, TH), d = img.data;
    const INK = [33, 48, 77], TAPE = [26, 37, 72], THREAD = [242, 234, 218];
    for (let i = 0; i < TW * TH; i++) {
      const px = i % TW;
      const st = structure[i * 4] / 255;
      const th = stitch[i * 4] / 255;
      const ik = ink[i * 4] / 255;
      const o = i * 4;
      const shade = 0.86 + height[i] * 0.14;
      let r = d[o] * shade, g = d[o + 1] * shade, b = d[o + 2] * shade;
      // The heading tape is indigo canvas; the seams and hems only darken.
      if (px < HOIST) {
        r += (TAPE[0] - r) * 0.94; g += (TAPE[1] - g) * 0.94; b += (TAPE[2] - b) * 0.94;
      } else if (st > 0) {
        r *= 1 - st * 0.17; g *= 1 - st * 0.17; b *= 1 - st * 0.15;
      }
      if (ik > 0 && px >= HOIST) {
        r += (INK[0] - r) * ik; g += (INK[1] - g) * ik; b += (INK[2] - b) * ik;
      }
      if (th > 0) {
        r += (THREAD[0] - r) * th * 0.92; g += (THREAD[1] - g) * th * 0.92; b += (THREAD[2] - b) * th * 0.92;
      }
      d[o] = r; d[o + 1] = g; d[o + 2] = b;
    }
    x.putImageData(img, 0, 0);
    const tex = new THREE.CanvasTexture(s.canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  // Mercerised topstitch thread is the only glossy thing on the flag.
  function makeRoughnessTexture() {
    const s = surface(TW, TH), x = s.ctx;
    const img = x.createImageData(TW, TH), d = img.data;
    for (let i = 0; i < TW * TH; i++) {
      const th = stitch[i * 4] / 255;
      const ik = ink[i * 4] / 255;
      let r = 0.86 - height[i] * 0.05 - th * 0.42 - ik * 0.12;
      r = Math.max(0.18, Math.min(0.98, r));
      const o = i * 4;
      d[o] = d[o + 1] = d[o + 2] = r * 255; d[o + 3] = 255;
    }
    x.putImageData(img, 0, 0);
    return new THREE.CanvasTexture(s.canvas);
  }

  function makeNormalTexture(strength) {
    const s = surface(TW, TH);
    const img = s.ctx.createImageData(TW, TH), d = img.data;
    for (let y = 0; y < TH; y++) {
      const yp = y > 0 ? y - 1 : y, yn = y < TH - 1 ? y + 1 : y;
      for (let x = 0; x < TW; x++) {
        const xp = x > 0 ? x - 1 : x, xn = x < TW - 1 ? x + 1 : x;
        const dx = (height[y * TW + xp] - height[y * TW + xn]) * strength;
        const dy = (height[yp * TW + x] - height[yn * TW + x]) * strength;
        const len = Math.sqrt(dx * dx + dy * dy + 1);
        const o = (y * TW + x) * 4;
        d[o] = (dx / len * 0.5 + 0.5) * 255;
        d[o + 1] = (dy / len * 0.5 + 0.5) * 255;
        d[o + 2] = (1 / len * 0.5 + 0.5) * 255;
        d[o + 3] = 255;
      }
    }
    s.ctx.putImageData(img, 0, 0);
    return new THREE.CanvasTexture(s.canvas);
  }

  // A photographer's seamless: warm sweep behind, softbox above, bounce left.
  function makeStudioEnvironment(renderer) {
    const W = 1024, H = 512, s = surface(W, H), x = s.ctx;
    const g = x.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, '#2a2620');
    g.addColorStop(0.46, '#1a1713');
    g.addColorStop(1, '#0d0b09');
    x.fillStyle = g; x.fillRect(0, 0, W, H);
    const box = (cx, cy, rw, rh, color, a) => {
      const grad = x.createRadialGradient(cx, cy, 0, cx, cy, Math.max(rw, rh));
      grad.addColorStop(0, color); grad.addColorStop(1, 'rgba(0,0,0,0)');
      x.globalAlpha = a; x.fillStyle = grad;
      x.save(); x.translate(cx, cy); x.scale(rw / Math.max(rw, rh), rh / Math.max(rw, rh));
      x.beginPath(); x.arc(0, 0, Math.max(rw, rh), 0, Math.PI * 2); x.fill(); x.restore();
      x.globalAlpha = 1;
    };
    box(W * 0.30, H * 0.14, 340, 130, '#fffaf0', 1);
    box(W * 0.78, H * 0.40, 220, 200, '#c8d8ea', 0.55);
    box(W * 0.06, H * 0.62, 200, 240, '#e8d3ac', 0.5);
    const tex = new THREE.CanvasTexture(s.canvas);
    tex.mapping = THREE.EquirectangularReflectionMapping;
    tex.colorSpace = THREE.SRGBColorSpace;
    const pmrem = new THREE.PMREMGenerator(renderer);
    pmrem.compileEquirectangularShader();
    const env = pmrem.fromEquirectangular(tex).texture;
    pmrem.dispose(); tex.dispose();
    return env;
  }

  function makeBackdropTexture() {
    const W = 512, H = 320, s = surface(W, H), x = s.ctx;
    x.fillStyle = '#100e0b'; x.fillRect(0, 0, W, H);
    const g = x.createRadialGradient(W * 0.44, H * 0.36, 0, W * 0.44, H * 0.36, W * 0.60);
    g.addColorStop(0, 'rgba(96,84,66,0.95)');
    g.addColorStop(0.5, 'rgba(44,38,30,0.6)');
    g.addColorStop(1, 'rgba(13,11,9,0)');
    x.fillStyle = g; x.fillRect(0, 0, W, H);
    const tex = new THREE.CanvasTexture(s.canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  /* ------------------------------------------------------------- scene -- */
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.16;

  const maxAniso = renderer.capabilities.getMaxAnisotropy();
  const scene = new THREE.Scene();
  scene.background = makeBackdropTexture();
  scene.environment = makeStudioEnvironment(renderer);

  const BW = 5.0, BH = 2.9;
  const GX = 52, GY = 34;
  const geo = new THREE.PlaneGeometry(BW, BH, GX, GY);

  const albedo = makeAlbedoTexture();
  blurHeight(1);
  const normalMap = makeNormalTexture(2.6);
  const roughnessMap = makeRoughnessTexture();
  [albedo, normalMap, roughnessMap].forEach((t) => { t.anisotropy = maxAniso; });

  const mat = new THREE.MeshPhysicalMaterial({
    map: albedo,
    normalMap,
    normalScale: new THREE.Vector2(0.55, 0.55),
    roughnessMap,
    roughness: 1.0,
    metalness: 0.0,
    side: THREE.DoubleSide,
    envMapIntensity: 1.15,
    sheen: 0.6,
    sheenColor: new THREE.Color('#f3e6cd'),
    sheenRoughness: 0.62,
  });

  const flag = new THREE.Mesh(geo, mat);
  const rig = new THREE.Group();
  rig.add(flag);
  scene.add(rig);

  /* ---------------------------------------------------------- hardware -- */
  const brass = new THREE.MeshStandardMaterial({ color: 0xb98f47, metalness: 1.0, roughness: 0.32 });
  const steel = new THREE.MeshStandardMaterial({ color: 0x8d8f95, metalness: 1.0, roughness: 0.28 });

  const HOIST_X = -BW / 2;
  const GROMMET_V = [0.09, 0.5, 0.91];       // down the hoist, in 0..1 of BH
  const grommets = GROMMET_V.map((v) => {
    const g = new THREE.Mesh(new THREE.TorusGeometry(0.055, 0.021, 12, 28), brass);
    g.position.set(HOIST_X + 0.05, BH / 2 - v * BH, 0);
    rig.add(g);
    return g;
  });

  const mast = new THREE.Mesh(
    new THREE.CylinderGeometry(0.035, 0.042, BH * 1.5, 18),
    steel,
  );
  mast.position.set(HOIST_X - 0.16, -BH * 0.12, -0.04);
  rig.add(mast);
  const finial = new THREE.Mesh(new THREE.SphereGeometry(0.072, 20, 14), brass);
  finial.position.set(HOIST_X - 0.16, -BH * 0.12 + BH * 0.75 + 0.05, -0.04);
  rig.add(finial);

  // The clips that carry the hoist grommets on the mast.
  grommets.forEach((g) => {
    const clip = new THREE.Mesh(new THREE.TorusGeometry(0.048, 0.011, 10, 22), steel);
    clip.position.set(HOIST_X - 0.11, g.position.y, -0.02);
    clip.rotation.y = Math.PI / 2.4;
    rig.add(clip);
  });

  /* ------------------------------------------------------------ lights -- */
  scene.add(new THREE.HemisphereLight(0xcadcf2, 0x4a3d2c, 0.75));
  const key = new THREE.DirectionalLight(0xfff4e0, 2.5);
  key.position.set(2.6, 3.4, 3.0); scene.add(key);
  const bounce = new THREE.DirectionalLight(0xe6cfa4, 0.85);
  bounce.position.set(-3.4, -1.6, 2.0); scene.add(bounce);
  const back = new THREE.DirectionalLight(0xfff0d8, 1.5);
  back.position.set(-1.6, 1.4, -3.2); scene.add(back);

  /* ----------------------------------------------------------- physics --
     Pinned down the hoist instead of along the top, so the wave travels out
     to the fly and the free corners snap the way a flown flag does. */
  const pos = geo.attributes.position;
  const N = (GX + 1) * (GY + 1);
  const cur = new Float32Array(N * 3), prev = new Float32Array(N * 3), rest = new Float32Array(N * 3);
  const pinned = new Uint8Array(N);
  const idx = (ix, iy) => ix + iy * (GX + 1);

  for (let i = 0; i < N; i++) {
    const ax = pos.getX(i), ay = pos.getY(i);
    cur[i * 3] = prev[i * 3] = rest[i * 3] = ax;
    cur[i * 3 + 1] = prev[i * 3 + 1] = rest[i * 3 + 1] = ay;
    cur[i * 3 + 2] = prev[i * 3 + 2] = rest[i * 3 + 2] = 0;
  }
  for (let iy = 0; iy <= GY; iy++) pinned[idx(0, iy)] = 1;

  const restH = BW / GX, restV = BH / GY;
  const GRAV = -0.22, DAMP = 0.986, DT = 0.016;

  function wind(ix, iy, t) {
    const cx = ix / GX, cy = iy / GY;
    // Amplitude grows with distance from the hoist: the fly end does the work,
    // while a steady outward pull keeps the flag flown rather than limp.
    const reach = cx * (0.35 + 0.65 * cx);
    const gust = 0.78 + 0.26 * Math.sin(t * 0.53) + 0.14 * Math.sin(t * 1.47 + 0.9);
    const travel = t * 4.2 - cx * 6.6;
    const fz = (Math.sin(travel) + 0.38 * Math.sin(travel * 1.9 + cy * 2.6)) * 3.4 * reach * gust;
    const fy = Math.sin(travel * 0.8 + 1.2) * 0.85 * reach;
    const fx = 2.6 * reach * gust;
    return [fx, fy, fz];
  }

  function solve(a, b, rl) {
    const ax = cur[a * 3], ay = cur[a * 3 + 1], az = cur[a * 3 + 2];
    let dx = cur[b * 3] - ax, dy = cur[b * 3 + 1] - ay, dz = cur[b * 3 + 2] - az;
    const d = Math.sqrt(dx * dx + dy * dy + dz * dz) || 1e-6;
    const diff = (d - rl) / d * 0.5;
    dx *= diff; dy *= diff; dz *= diff;
    const pa = pinned[a], pb = pinned[b];
    if (!pa && !pb) {
      cur[a * 3] += dx; cur[a * 3 + 1] += dy; cur[a * 3 + 2] += dz;
      cur[b * 3] -= dx; cur[b * 3 + 1] -= dy; cur[b * 3 + 2] -= dz;
    } else if (pa && !pb) { cur[b * 3] -= dx * 2; cur[b * 3 + 1] -= dy * 2; cur[b * 3 + 2] -= dz * 2; }
    else if (!pa && pb) { cur[a * 3] += dx * 2; cur[a * 3 + 1] += dy * 2; cur[a * 3 + 2] += dz * 2; }
  }

  function step(t) {
    for (let iy = 0; iy <= GY; iy++) {
      for (let ix = 0; ix <= GX; ix++) {
        const i = idx(ix, iy);
        if (pinned[i]) continue;
        const f = wind(ix, iy, t);
        for (let k = 0; k < 3; k++) {
          const j = i * 3 + k;
          const a = k === 0 ? f[0] : k === 1 ? f[1] + GRAV : f[2];
          const v = (cur[j] - prev[j]) * DAMP;
          prev[j] = cur[j];
          cur[j] = cur[j] + v + a * DT * DT;
        }
      }
    }
    for (let it = 0; it < 4; it++) {
      for (let iy = 0; iy <= GY; iy++) for (let ix = 0; ix < GX; ix++) solve(idx(ix, iy), idx(ix + 1, iy), restH);
      for (let iy = 0; iy < GY; iy++) for (let ix = 0; ix <= GX; ix++) solve(idx(ix, iy), idx(ix, iy + 1), restV);
    }
    // The heading tape is sewn to a rigid edge; hold it exactly.
    for (let iy = 0; iy <= GY; iy++) {
      const i = idx(0, iy);
      for (let k = 0; k < 3; k++) { cur[i * 3 + k] = rest[i * 3 + k]; prev[i * 3 + k] = rest[i * 3 + k]; }
    }
  }

  function commit() {
    for (let i = 0; i < N; i++) pos.setXYZ(i, cur[i * 3], cur[i * 3 + 1], cur[i * 3 + 2]);
    pos.needsUpdate = true;
    geo.computeVertexNormals();
  }

  /* --------------------------------------------------------------- fit -- */
  let camera;
  function fit() {
    const w = window.innerWidth, h = window.innerHeight;
    renderer.setSize(w, h, false);
    const aspect = w / h;
    camera = new THREE.PerspectiveCamera(40, aspect, 0.1, 100);
    const vFit = (BH * 1.12 / 2) / Math.tan(40 * Math.PI / 360);
    const hFit = ((BW + 1.0) / 2) / Math.tan(40 * Math.PI / 360) / aspect;
    camera.position.set(0.10, 0.06, Math.max(vFit, hFit) * 1.13 + 0.30);
    camera.lookAt(0.10, 0.0, 0);
  }
  window.addEventListener('resize', fit);
  fit();

  function draw(t) {
    // The mast leans a few degrees so the flag is never seen dead flat.
    rig.rotation.y = -0.16 + Math.sin(t * 0.11) * 0.045;
    rig.rotation.z = Math.sin(t * 0.08 + 0.7) * 0.012;
    camera.position.y = 0.06 + Math.sin(t * 0.15) * 0.06;
    camera.lookAt(0.10, 0.0, 0);
    renderer.render(scene, camera);
  }

  let running = false, raf = 0, t = 0;
  function loop() {
    if (!running) return;
    t += DT;
    step(t); commit(); draw(t);
    raf = requestAnimationFrame(loop);
  }
  function start() { if (running) return; running = true; raf = requestAnimationFrame(loop); }
  function stop() { running = false; cancelAnimationFrame(raf); }

  window.__seek = (time) => {
    const target = Math.max(0, time);
    if (target < t) { t = 0; for (let i = 0; i < N * 3; i++) { cur[i] = rest[i]; prev[i] = rest[i]; } }
    while (t < target - DT * 0.5) { t += DT; step(t); }
    commit(); draw(t);
  };

  for (let s = 0; s < 160; s++) step(s * DT);
  t = 160 * DT;
  if (reduce) {
    commit(); draw(t);
  } else {
    start();
    document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));
  }
})();
</script>
</body>
</html>
```

### `src/shaders/woven-cloth/woven-cloth-washi.html`

Role: variant-source · 481 lines · 18332 bytes · SHA-256 `00e5971f139e5427e56a062c12d7e8e3590938b9a400753693b360d1e4d1a5c1`

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<title>Woven Cloth · Washi Noren</title>
<script src="https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js"></script>
<style>
  html, body { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; background: #0d0a07; }
  #cloth { display: block; width: 100%; height: 100%; }
  #vignette {
    position: fixed; inset: 0; pointer-events: none;
    background: radial-gradient(80% 74% at 50% 44%, transparent 46%, rgba(10,7,5,.80) 100%);
  }
</style>
</head>
<body>
<canvas id="cloth"></canvas>
<div id="vignette"></div>
<script>
(() => {
  const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
  const canvas = document.getElementById('cloth');
  if (!window.THREE) return;

  const TW = 1500, TH = 980;
  const PANELS = 3;
  const BAND = 0.15;            // the uncut sleeve the rod runs through
  const SLIT_U = [1 / 3, 2 / 3];

  // A small deterministic generator, so the paper's fibres and torn edge are
  // the same every load — the deckle has to match the alpha mask exactly.
  function rng(seed) {
    let s = seed >>> 0;
    return () => {
      s ^= s << 13; s >>>= 0;
      s ^= s >> 17;
      s ^= s << 5; s >>>= 0;
      return s / 4294967296;
    };
  }

  function surface(w, h) {
    const c = document.createElement('canvas');
    c.width = w; c.height = h;
    return { canvas: c, ctx: c.getContext('2d', { willReadFrequently: true }) };
  }

  /* ------------------------------------------------------------- deckle --
     One torn profile, sampled by both the alpha mask and the shading, so the
     edge reads as a genuine hand-made sheet rather than a cropped rectangle. */
  const deckleRand = rng(20260826);
  const deckleLow = new Float32Array(TW);
  {
    const control = [];
    for (let i = 0; i <= 24; i++) control.push(deckleRand());
    for (let x = 0; x < TW; x++) {
      const f = (x / TW) * 24;
      const i = Math.floor(f), t = f - i;
      const smooth = t * t * (3 - 2 * t);
      const a = control[i], b = control[Math.min(24, i + 1)];
      const base = a + (b - a) * smooth;
      const fine = Math.sin(x * 0.19) * 0.16 + Math.sin(x * 0.061 + 1.7) * 0.24;
      deckleLow[x] = TH - 14 - (base * 26 + fine * 12);
    }
  }

  function makeAlphaMask() {
    const s = surface(TW, TH), x = s.ctx;
    x.fillStyle = '#fff'; x.fillRect(0, 0, TW, TH);
    x.fillStyle = '#000';

    // Slits between the panels, stopping short of the sleeve.
    const slitW = 22, bandPx = TH * BAND;
    SLIT_U.forEach((u) => x.fillRect(u * TW - slitW / 2, bandPx, slitW, TH - bandPx));

    // Torn lower edge.
    x.beginPath();
    x.moveTo(0, TH);
    for (let px = 0; px < TW; px++) x.lineTo(px, deckleLow[px]);
    x.lineTo(TW, TH);
    x.closePath();
    x.fill();

    // Softly feathered outer edges, as a couched sheet dries.
    const side = rng(771);
    for (let e = 0; e < 2; e++) {
      x.beginPath();
      x.moveTo(e ? TW : 0, 0);
      for (let py = 0; py <= TH; py += 6) {
        const w = 6 + side() * 9;
        x.lineTo(e ? TW - w : w, py);
      }
      x.lineTo(e ? TW : 0, TH);
      x.closePath();
      x.fill();
    }
    return s;
  }

  /* ---------------------------------------------------------- the cloth --
     Indigo-dyed kozo: vat unevenness, long fibres, the laid and chain lines
     the papermaking screen leaves, and a resist-dyed crest and lettering. */
  function drawWeaveCrest(x, cx, cy, R) {
    const cells = 6, step = (R * 1.86) / cells, origin = -R * 0.93;
    x.save();
    x.beginPath(); x.arc(cx, cy, R * 0.86, 0, Math.PI * 2); x.clip();
    x.fillStyle = '#f3ece0';
    for (let a = 0; a < cells; a++) {
      for (let b = 0; b < cells; b++) {
        if ((a + b) % 2) continue;
        x.fillRect(cx + origin + a * step, cy + origin + b * step, step + 0.5, step + 0.5);
      }
    }
    x.restore();
    x.strokeStyle = '#f3ece0';
    x.lineWidth = R * 0.10;
    x.beginPath(); x.arc(cx, cy, R * 0.96, 0, Math.PI * 2); x.stroke();
  }

  function verticalWord(x, word, cx, top, size, step) {
    x.font = 'bold ' + size + 'px Georgia, "Times New Roman", serif';
    x.textAlign = 'center'; x.textBaseline = 'middle';
    for (let i = 0; i < word.length; i++) x.fillText(word[i], cx, top + i * step);
  }

  function makeClothCanvas() {
    const s = surface(TW, TH), x = s.ctx;

    // Indigo vat: deeper where the cloth was dipped longest.
    const g = x.createLinearGradient(0, 0, 0, TH);
    g.addColorStop(0, '#284a6c');
    g.addColorStop(0.42, '#203d5e');
    g.addColorStop(1, '#17304e');
    x.fillStyle = g; x.fillRect(0, 0, TW, TH);

    const cloud = rng(4471);
    for (let i = 0; i < 26; i++) {
      const cx = cloud() * TW, cy = cloud() * TH, r = 120 + cloud() * 320;
      const light = cloud() > 0.5;
      const rg = x.createRadialGradient(cx, cy, 0, cx, cy, r);
      rg.addColorStop(0, light ? 'rgba(96,132,168,0.13)' : 'rgba(9,22,40,0.16)');
      rg.addColorStop(1, 'rgba(0,0,0,0)');
      x.fillStyle = rg; x.fillRect(cx - r, cy - r, r * 2, r * 2);
    }

    // Laid lines from the bamboo screen, then the heavier chain lines.
    x.strokeStyle = 'rgba(180,205,228,0.045)';
    x.lineWidth = 1;
    for (let px = 0; px < TW; px += 4) { x.beginPath(); x.moveTo(px + 0.5, 0); x.lineTo(px + 0.5, TH); x.stroke(); }
    x.strokeStyle = 'rgba(196,218,238,0.10)';
    x.lineWidth = 2;
    for (let py = 26; py < TH; py += 38) { x.beginPath(); x.moveTo(0, py + 0.5); x.lineTo(TW, py + 0.5); x.stroke(); }

    // Kozo fibres: long, mostly aligned, a few standing proud of the sheet.
    const fib = rng(90210);
    for (let i = 0; i < 2200; i++) {
      const fx = fib() * TW, fy = fib() * TH;
      const len = 30 + fib() * 150;
      const ang = (fib() - 0.5) * 0.9 + (fib() > 0.82 ? Math.PI / 2 : 0);
      const bow = (fib() - 0.5) * 26;
      const pale = fib();
      x.strokeStyle = pale > 0.3
        ? 'rgba(214,232,247,' + (0.022 + fib() * 0.048) + ')'
        : 'rgba(10,20,36,' + (0.04 + fib() * 0.07) + ')';
      x.lineWidth = 0.7 + fib() * 1.9;
      x.beginPath();
      x.moveTo(fx, fy);
      x.quadraticCurveTo(
        fx + Math.cos(ang) * len * 0.5 + bow, fy + Math.sin(ang) * len * 0.5 - bow,
        fx + Math.cos(ang) * len, fy + Math.sin(ang) * len,
      );
      x.stroke();
    }

    // Katazome: a resist-dyed frame inside each panel.
    const panelW = TW / PANELS;
    x.strokeStyle = 'rgba(243,236,224,0.72)';
    for (let k = 0; k < PANELS; k++) {
      const x0 = k * panelW + 34, w = panelW - 68;
      x.lineWidth = 5;
      x.strokeRect(x0, TH * BAND + 34, w, TH - TH * BAND - 118);
      x.lineWidth = 2;
      x.strokeRect(x0 + 13, TH * BAND + 47, w - 26, TH - TH * BAND - 144);
    }

    // The sleeve the rod runs through, and its shadow on the cloth below.
    x.fillStyle = 'rgba(8,18,34,0.30)';
    x.fillRect(0, 0, TW, TH * BAND);
    const sh = x.createLinearGradient(0, TH * BAND, 0, TH * BAND + 54);
    sh.addColorStop(0, 'rgba(6,14,28,0.42)');
    sh.addColorStop(1, 'rgba(6,14,28,0)');
    x.fillStyle = sh; x.fillRect(0, TH * BAND, TW, 54);
    x.strokeStyle = 'rgba(243,236,224,0.5)';
    x.lineWidth = 2.5;
    x.beginPath(); x.moveTo(0, TH * BAND); x.lineTo(TW, TH * BAND); x.stroke();

    x.fillStyle = '#f3ece0';
    verticalWord(x, 'WOVEN', panelW * 0.5, TH * 0.34, 96, 116);
    drawWeaveCrest(x, panelW * 1.5, TH * 0.53, 158);
    verticalWord(x, 'CLOTH', panelW * 2.5, TH * 0.34, 96, 116);

    // Vermilion seal, stamped at the foot of the centre panel.
    const S = 96, sx = panelW * 1.5 - S / 2, sy = TH * 0.828;
    x.fillStyle = '#a8342a';
    x.fillRect(sx, sy, S, S);
    x.strokeStyle = '#f3ece0';
    x.lineWidth = 4;
    x.strokeRect(sx + 11, sy + 11, S - 22, S - 22);
    x.fillStyle = '#f3ece0';
    for (let k = 0; k < 3; k++) x.fillRect(sx + 23 + k * 18, sy + 23, 8, S - 46);
    x.fillRect(sx + 23, sy + 38, S - 46, 8);
    x.fillRect(sx + 23, sy + 60, S - 46, 8);

    return s;
  }

  function makeWoodTexture() {
    const W = 512, H = 96, s = surface(W, H), x = s.ctx;
    const g = x.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, '#a1764a');
    g.addColorStop(0.45, '#7d5533');
    g.addColorStop(1, '#563820');
    x.fillStyle = g; x.fillRect(0, 0, W, H);
    const grain = rng(3312);
    for (let i = 0; i < 160; i++) {
      const y = grain() * H;
      x.strokeStyle = 'rgba(28,17,8,' + (0.05 + grain() * 0.16) + ')';
      x.lineWidth = 0.6 + grain() * 1.8;
      x.beginPath();
      x.moveTo(0, y);
      for (let px = 0; px <= W; px += 32) x.lineTo(px, y + Math.sin(px * 0.02 + i) * 2.4);
      x.stroke();
    }
    const tex = new THREE.CanvasTexture(s.canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.wrapS = THREE.RepeatWrapping;
    tex.repeat.set(3, 1);
    return tex;
  }

  // A shoji screen behind the noren gives the paper something to glow with.
  function makeShojiTexture() {
    const W = 768, H = 512, s = surface(W, H), x = s.ctx;
    x.fillStyle = '#1a1109'; x.fillRect(0, 0, W, H);
    const glow = x.createRadialGradient(W * 0.5, H * 0.44, 0, W * 0.5, H * 0.44, W * 0.52);
    glow.addColorStop(0, '#ffdda4');
    glow.addColorStop(0.40, '#a97c42');
    glow.addColorStop(0.76, '#341d0c');
    glow.addColorStop(1, '#150d06');
    x.fillStyle = glow; x.fillRect(0, 0, W, H);
    // Kumiko lattice, softened so it stays a suggestion behind the cloth.
    if ('filter' in x) x.filter = 'blur(7px)';
    x.strokeStyle = 'rgba(46,28,13,0.20)';
    x.lineWidth = 3;
    for (let px = 54; px < W; px += 128) { x.beginPath(); x.moveTo(px, 0); x.lineTo(px, H); x.stroke(); }
    for (let py = 46; py < H; py += 118) { x.beginPath(); x.moveTo(0, py); x.lineTo(W, py); x.stroke(); }
    if ('filter' in x) x.filter = 'none';
    const tex = new THREE.CanvasTexture(s.canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  /* ------------------------------------------------------------- scene -- */
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.22;

  const maxAniso = renderer.capabilities.getMaxAnisotropy();
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0c0906);

  const shoji = new THREE.Mesh(
    new THREE.PlaneGeometry(13, 8.4),
    new THREE.MeshBasicMaterial({ map: makeShojiTexture() }),
  );
  shoji.position.set(0, 0, -2.4);
  scene.add(shoji);

  const BW = 4.4, BH = 2.9;
  const GX = 60, GY = 40;
  const geo = new THREE.PlaneGeometry(BW, BH, GX, GY);

  const clothCanvas = makeClothCanvas();
  const albedo = new THREE.CanvasTexture(clothCanvas.canvas);
  albedo.colorSpace = THREE.SRGBColorSpace;
  const alphaMap = new THREE.CanvasTexture(makeAlphaMask().canvas);
  [albedo, alphaMap].forEach((t) => { t.anisotropy = maxAniso; });

  const mat = new THREE.MeshPhysicalMaterial({
    map: albedo,
    alphaMap,
    alphaTest: 0.5,
    transparent: false,
    side: THREE.DoubleSide,
    roughness: 0.92,
    metalness: 0.0,
    transmission: 0.82,
    thickness: 0.10,
    ior: 1.36,
    attenuationColor: new THREE.Color('#9dc0dd'),
    attenuationDistance: 3.0,
    sheen: 0.9,
    sheenColor: new THREE.Color('#d8e6f2'),
    sheenRoughness: 0.85,
  });

  const noren = new THREE.Mesh(geo, mat);
  scene.add(noren);

  /* ------------------------------------------------------------ fittings */
  const wood = new THREE.MeshStandardMaterial({ map: makeWoodTexture(), roughness: 0.66, metalness: 0.0 });
  const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.062, 0.062, BW + 0.9, 20), wood);
  rod.rotation.z = Math.PI / 2;
  rod.position.set(0, BH / 2 + 0.045, 0.02);
  scene.add(rod);
  [-1, 1].forEach((side) => {
    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.082, 18, 12), wood);
    cap.position.set(side * (BW + 0.9) / 2, BH / 2 + 0.045, 0.02);
    scene.add(cap);
    const cord = new THREE.Mesh(new THREE.CylinderGeometry(0.011, 0.011, 3.4, 8),
      new THREE.MeshStandardMaterial({ color: 0x2a2018, roughness: 0.9 }));
    cord.position.set(side * (BW + 0.72) / 2, BH / 2 + 1.75, 0.02);
    scene.add(cord);
  });

  /* ------------------------------------------------------------ lights -- */
  scene.add(new THREE.AmbientLight(0x4a3a28, 0.8));
  const lantern = new THREE.DirectionalLight(0xffd9a0, 3.6);   // through the shoji
  lantern.position.set(-0.4, 0.9, -3.2); scene.add(lantern);
  const key = new THREE.DirectionalLight(0xffe9cc, 2.1);
  key.position.set(-2.6, 2.4, 2.6); scene.add(key);
  const fill = new THREE.DirectionalLight(0x94b6d8, 0.5);
  fill.position.set(3.0, -1.0, 2.0); scene.add(fill);

  /* ----------------------------------------------------------- physics --
     One sheet, but the horizontal links are cut below the sleeve at each
     slit, so the three panels hang and sway as their own pieces of cloth. */
  const pos = geo.attributes.position;
  const N = (GX + 1) * (GY + 1);
  const cur = new Float32Array(N * 3), prev = new Float32Array(N * 3), rest = new Float32Array(N * 3);
  const pinned = new Uint8Array(N);
  const idx = (ix, iy) => ix + iy * (GX + 1);

  for (let i = 0; i < N; i++) {
    const ax = pos.getX(i), ay = pos.getY(i);
    cur[i * 3] = prev[i * 3] = rest[i * 3] = ax;
    cur[i * 3 + 1] = prev[i * 3 + 1] = rest[i * 3 + 1] = ay;
    cur[i * 3 + 2] = prev[i * 3 + 2] = rest[i * 3 + 2] = 0;
  }
  for (let ix = 0; ix <= GX; ix++) pinned[ix] = 1;

  const BAND_ROWS = Math.round(GY * BAND);
  const SLIT_IX = SLIT_U.map((u) => Math.round(u * GX));
  const panelOf = (ix) => (ix < SLIT_IX[0] ? 0 : ix < SLIT_IX[1] ? 1 : 2);
  const linked = (ix, iy) => !(iy > BAND_ROWS && SLIT_IX.indexOf(ix + 1) !== -1);

  const restH = BW / GX, restV = BH / GY;
  const restD = Math.sqrt(restH * restH + restV * restV);
  const GRAV = -1.65, DAMP = 0.986, DT = 0.016;

  function wind(ix, iy, t) {
    const cx = ix / GX, cy = iy / GY;
    // An indoor draft: each panel catches it on its own beat.
    const ph = panelOf(ix) * 2.1;
    const gust = 0.40 + 0.28 * Math.sin(t * 0.37 + ph * 0.6) + 0.15 * Math.sin(t * 0.93 + ph);
    const travel = t * 1.2 - cy * 2.2 + ph;
    const amp = 1.5 * cy;
    const fz = (Math.sin(travel) + 0.35 * Math.sin(travel * 1.8 + cx * 3.4)) * amp * gust;
    const fx = Math.sin(t * 0.44 + ph) * 0.20 * cy;
    return [fx, -0.18 * cy, fz];
  }

  function solve(a, b, rl) {
    const ax = cur[a * 3], ay = cur[a * 3 + 1], az = cur[a * 3 + 2];
    let dx = cur[b * 3] - ax, dy = cur[b * 3 + 1] - ay, dz = cur[b * 3 + 2] - az;
    const d = Math.sqrt(dx * dx + dy * dy + dz * dz) || 1e-6;
    const diff = (d - rl) / d * 0.5;
    dx *= diff; dy *= diff; dz *= diff;
    const pa = pinned[a], pb = pinned[b];
    if (!pa && !pb) {
      cur[a * 3] += dx; cur[a * 3 + 1] += dy; cur[a * 3 + 2] += dz;
      cur[b * 3] -= dx; cur[b * 3 + 1] -= dy; cur[b * 3 + 2] -= dz;
    } else if (pa && !pb) { cur[b * 3] -= dx * 2; cur[b * 3 + 1] -= dy * 2; cur[b * 3 + 2] -= dz * 2; }
    else if (!pa && pb) { cur[a * 3] += dx * 2; cur[a * 3 + 1] += dy * 2; cur[a * 3 + 2] += dz * 2; }
  }

  function step(t) {
    for (let iy = 0; iy <= GY; iy++) {
      for (let ix = 0; ix <= GX; ix++) {
        const i = idx(ix, iy);
        if (pinned[i]) continue;
        const f = wind(ix, iy, t);
        for (let k = 0; k < 3; k++) {
          const j = i * 3 + k;
          const a = k === 0 ? f[0] : k === 1 ? f[1] + GRAV : f[2];
          const v = (cur[j] - prev[j]) * DAMP;
          prev[j] = cur[j];
          cur[j] = cur[j] + v + a * DT * DT;
        }
      }
    }
    for (let it = 0; it < 3; it++) {
      for (let iy = 0; iy <= GY; iy++) {
        for (let ix = 0; ix < GX; ix++) if (linked(ix, iy)) solve(idx(ix, iy), idx(ix + 1, iy), restH);
      }
      for (let iy = 0; iy < GY; iy++) {
        for (let ix = 0; ix <= GX; ix++) solve(idx(ix, iy), idx(ix, iy + 1), restV);
      }
      for (let iy = 0; iy < GY; iy++) {
        for (let ix = 0; ix < GX; ix++) {
          if (!linked(ix, iy) || !linked(ix, iy + 1)) continue;
          solve(idx(ix, iy), idx(ix + 1, iy + 1), restD);
          solve(idx(ix + 1, iy), idx(ix, iy + 1), restD);
        }
      }
    }
    for (let ix = 0; ix <= GX; ix++) {
      const i = ix;
      for (let k = 0; k < 3; k++) { cur[i * 3 + k] = rest[i * 3 + k]; prev[i * 3 + k] = rest[i * 3 + k]; }
    }
  }

  function commit() {
    for (let i = 0; i < N; i++) pos.setXYZ(i, cur[i * 3], cur[i * 3 + 1], cur[i * 3 + 2]);
    pos.needsUpdate = true;
    geo.computeVertexNormals();
  }

  /* --------------------------------------------------------------- fit -- */
  let camera;
  function fit() {
    const w = window.innerWidth, h = window.innerHeight;
    renderer.setSize(w, h, false);
    const aspect = w / h;
    camera = new THREE.PerspectiveCamera(38, aspect, 0.1, 100);
    const vFit = (BH * 1.12 / 2) / Math.tan(38 * Math.PI / 360);
    const hFit = ((BW + 1.2) / 2) / Math.tan(38 * Math.PI / 360) / aspect;
    camera.position.set(0, 0.06, Math.max(vFit, hFit) * 1.02 + 0.3);
    camera.lookAt(0, -0.02, 0);
  }
  window.addEventListener('resize', fit);
  fit();

  function draw(t) {
    camera.position.x = Math.sin(t * 0.1) * 0.20;
    camera.position.y = 0.06 + Math.sin(t * 0.14 + 1.1) * 0.07;
    camera.lookAt(0, -0.02, 0);
    renderer.render(scene, camera);
  }

  let running = false, raf = 0, t = 0;
  function loop() {
    if (!running) return;
    t += DT;
    step(t); commit(); draw(t);
    raf = requestAnimationFrame(loop);
  }
  function start() { if (running) return; running = true; raf = requestAnimationFrame(loop); }
  function stop() { running = false; cancelAnimationFrame(raf); }

  window.__seek = (time) => {
    const target = Math.max(0, time);
    if (target < t) { t = 0; for (let i = 0; i < N * 3; i++) { cur[i] = rest[i]; prev[i] = rest[i]; } }
    while (t < target - DT * 0.5) { t += DT; step(t); }
    commit(); draw(t);
  };

  for (let s = 0; s < 180; s++) step(s * DT);
  t = 180 * DT;
  if (reduce) {
    commit(); draw(t);
  } else {
    start();
    document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));
  }
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
