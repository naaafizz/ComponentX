---
name: "Sketchbook"
library: "ComponentX"
id: "sketchbook"
type: "navigation"
quality: "showcase"
tags: ["animation", "component", "image", "layout", "media", "navigation", "shader", "text", "webgl"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Sketchbook

> **Type:** `navigation` · **Quality:** `showcase` · **ID:** `sketchbook`
> **Path:** `components/navigation/sketchbook.md`

**Sketchbook** is a premium, production-ready component from the **ComponentX** library — engineered for navigation interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Showcase tier** — a high-impact, visually rich implementation — animated, 3D, or dependency-heavy by design.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `animation`, `image`, `layout` workflows.
- **Pattern coverage** — includes `media`, `navigation`, `shader` workflows.
- **Pattern coverage** — includes `text`, `webgl` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Sketchbook** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
name: add-meng-to-sketchbook-landing-page
description: "Build Sketchbook from its verified authored source using Full HTML + DOM/CSS + JavaScript, including the complete renderer, interactions, and required assets. Use when Codex needs to implement, port, or adapt this effect without requiring the ComponentX package or reconstructing the visual from an approximation."
---

# Build Sketchbook

## Description

A tactile personal portfolio built as a Singapore sketchbook, with nine illustrated plates, curled page turns, a draggable magnifying glass, zoom controls, a botanical paper atmosphere, and an editorial index.

Recreate the authored behavior from the verified source, not from screenshots or the abbreviated orchestration sample in this skill. The implementation may live directly in the target project and does not require `@componentx/core`.

## Technologies

- React iframe host
- Byte-exact complete authored HTML document
- Same-project local source URL
- Fourteen local paper, botanical, and Singapore illustration images plus three local Instrument Serif and Newsreader font files

## Verified source material

- `src/shaders/landing-pages/LandingPages.tsx`
- `src/shaders/landing-pages/pageTypography.ts`
- `src/shaders/landing-pages/pageRecipes.ts`
- `public/landing-pages/meng-to-sketchbook.html — byte-exact complete page`
- `public/landing-pages/meng-to-sketchbook/ — 17 local image and font assets`

Source revision: `SHA-256 e0330548b1ac`

## Implementation steps

1. Open every verified source file listed above and identify the renderer, host lifecycle, styles, and assets before editing.
2. Copy the complete Meng To Sketchbook HTML file byte-for-byte to /landing-pages/meng-to-sketchbook.html; do not extract, rewrite, shorten, or rebrand any section.
3. Preserve every embedded style, script, media payload, text string, interaction, responsive rule, and document-level lifecycle.
4. Keep every relative local asset at the exact path expected by the original document.
5. Load the local document in a full-size iframe whose permissions retain the authored forms, modals, downloads, popups, scripts, and same-origin resources.
6. Lazy-load only the React host bundle; do not import the complete HTML into the application JavaScript graph.
7. Give the local component a sized, overflow-controlled parent and verify desktop, mobile, reduced-motion, and context-loss behavior.

Asset handling: Copy meng-to-sketchbook.html byte-for-byte and keep all 17 files under meng-to-sketchbook/ at exactly that relative path. The page needs no network access.

## Local component example

Import the copied local component rather than a package entrypoint:

```tsx
import { MengToSketchbookLandingPage } from "./effects/meng-to-sketchbook-landing-page/MengToSketchbookLandingPage";
import "./effects/meng-to-sketchbook-landing-page/styles.css";

export function Scene() {
  return <div className="effect-frame"><MengToSketchbookLandingPage /></div>;
}
```

## Core renderer pattern

This excerpt documents orchestration only. Copy the exact shader, geometry, pass, and interaction code from the verified source files.

```tsx
<LandingPageFrame title="Meng To Sketchbook" sourceUrl="/landing-pages/meng-to-sketchbook.html" />
```

## Behavior contract

- Runtime: Full HTML + DOM/CSS + JavaScript
- Passes: 1 sandboxed full-document renderer
- Interaction: Original page turns, pointer tilt, draggable magnifier, zoom controls, navigation, scroll, keyboard, and responsive layout
- Assets: Fourteen local paper, botanical, and Singapore illustration images plus three local variable and display fonts
- **document** (fixed): Complete original meng-to-sketchbook.html, byte-for-byte
- **sourceUrl** (fixed): /landing-pages/meng-to-sketchbook.html
- **headingFont** (optional): Instrument Serif | Newsreader | Geist
- **bodyFont** (optional): Newsreader | Geist | Instrument Serif
- **headingWeight** (optional): 300 | 400 | 500 | 600
- **bodyWeight** (optional): 200 | 300 | 400 | 500 | 600
- **primaryColor** (optional): Hex color — page ink and its opacity tints; the warm earth accent remains authored
- **typography** (optional): Nameplate and plate-title scale + body scale + heading tracking
- **layout** (responsive): Original full landing page inside the preview frame
- **interaction** (original): Page turns + magnifier drag + zoom + pointer tilt + scroll + keyboard
- **assets** (local): 17 packaged files in public/landing-pages/meng-to-sketchbook/; no network request

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


# Sketchbook — Complete source

Component: `MengToSketchbookLandingPage`
Runtime: Full HTML + DOM/CSS + JavaScript
Source revision: `SHA-256 e0330548b1ac`

## Current configured usage

```tsx
import { MengToSketchbookLandingPage } from "@componentx/threeui";
import "@componentx/threeui/style.css";

export function Scene() {
  return (
    <div className="shader-frame">
      <MengToSketchbookLandingPage
        headingFont="instrument-serif"
        bodyFont="newsreader"
        headingWeight="400"
        bodyWeight="400"
        primaryColor="#2b2721"
        headingSize={30}
        bodySize={20}
        headingLetterSpacing={0.010}
      />
    </div>
  );
}
```

## Required assets

Binary assets cannot be represented as executable text. Copy each asset byte-for-byte from the ComponentX package and verify its hash:

| Path | MIME type | Bytes | SHA-256 |
| --- | --- | ---: | --- |
| `public/landing-pages/meng-to-sketchbook/bg-wash.jpg` | image/jpeg | 250415 | `3e8bbb177216bcb41ddc75cdaca38f732b9cd7ff4aaa409921623356072eb1f6` |
| `public/landing-pages/meng-to-sketchbook/bloom.png` | image/png | 239231 | `7786aef42d10f1fbeca055b3ed14f51a47cb2a390b360eae92119f046989943e` |
| `public/landing-pages/meng-to-sketchbook/botanic-gardens.png` | image/png | 822127 | `48ab10869e7afd4519cdc78d62625cd529bd3b2b5ff1c3c2789a8d721733da15` |
| `public/landing-pages/meng-to-sketchbook/botany-left.png` | image/png | 133820 | `b3ed9e8613ba8826a5e137a5f8ad4bd21b6e7a544bc25e6184891079eae0470c` |
| `public/landing-pages/meng-to-sketchbook/botany-right.png` | image/png | 376050 | `608025a35b8697b536e9ac668e51476c79072d1efb4a04316c068073f51cf655` |
| `public/landing-pages/meng-to-sketchbook/buddha-tooth.png` | image/png | 792335 | `cf73e3fffd80a4c81b18ac83dfdba266c9f5c51e6a66047068a39c2885bc388a` |
| `public/landing-pages/meng-to-sketchbook/divider.png` | image/png | 170548 | `ef8ed266a6ee6f2f6fb8f235657d9ea9e4d57af6d84e75e4e81373de9d3632bb` |
| `public/landing-pages/meng-to-sketchbook/gardens-by-the-bay.png` | image/png | 844878 | `cf1d629d6a72d8cd4a98158fac44e9093a12e55257b43adcdaa07ae3ffbad7d3` |
| `public/landing-pages/meng-to-sketchbook/instrument-serif-italic.woff2` | font/woff2 | 15684 | `6ee678c33f388dd7ba59700ebea635deb98821baafd817b09891f7927177f702` |
| `public/landing-pages/meng-to-sketchbook/instrument-serif.woff2` | font/woff2 | 15040 | `60c06664b5a95c7de6cc3e00d1f9034d78bd1e40b564016b241674449a067d4d` |
| `public/landing-pages/meng-to-sketchbook/joo-chiat.png` | image/png | 796739 | `a46701ba26b5ee31fc6484a12d908cb25d70baea92dec3013260c516e1157a0b` |
| `public/landing-pages/meng-to-sketchbook/lau-pa-sat.png` | image/png | 872602 | `bb020724a54e6dbf72c19bc2a8113393aae43408da2bcada4a62b53eeb3b0ddb` |
| `public/landing-pages/meng-to-sketchbook/marina-bay-sands.png` | image/png | 781481 | `c9cb4423072d69c4177833fa3f92923ce50ab7b395a257349793de3840b88608` |
| `public/landing-pages/meng-to-sketchbook/marina-bay-skyline.png` | image/png | 804832 | `1cebb237d910a1429ff4f17f78efac059094c001629a579b598843eb0bdf363f` |
| `public/landing-pages/meng-to-sketchbook/merlion.png` | image/png | 815697 | `bf5082288e212f62b2e15af766364d79e30050528a7ad48a020aa46d59d4666a` |
| `public/landing-pages/meng-to-sketchbook/newsreader.woff2` | font/woff2 | 131848 | `01817351be3edfc1714fe6d60ddea6a22a169a5ebd033b50c7f9495e5d9c386a` |
| `public/landing-pages/meng-to-sketchbook/singapore-river.png` | image/png | 744018 | `a3fc9cf2be0e3ce4b4630df6897d856ca49c6aca48f66a82e910367328bf667b` |

## Full implementation source

This bundle contains all 6 required text source files. Preserve their paths and contents; none are excerpts.

### `src/shaders/landing-pages/LandingPages.tsx`

Role: component · 915 lines · 40525 bytes · SHA-256 `4d379461ad00eb4de7900df312878035383de7e1ed4e13283b8143a2eea9d30a`

```tsx
import { useCallback, useMemo } from "react";

import {
  splitTypographyProps,
  usePageTypography,
  type PageTypographyProps,
} from "./pageTypography";
import { LandingPageFrame, type LandingPageProps } from "./LandingPageFrame";
export { LandingPageFrame, applyBackgroundPresentation } from "./LandingPageFrame";
export type { LandingPageFrameProps, LandingPageProps } from "./LandingPageFrame";
import {
  ANTHRA_A40_TYPOGRAPHY,
  ATTUNE_TYPOGRAPHY,
  AURELLO_TYPOGRAPHY,
  AXONIS_TYPOGRAPHY,
  BESTSELLERS_TYPOGRAPHY,
  BETAWISE_HERO_TYPOGRAPHY,
  BETAWISE_TYPOGRAPHY,
  COMPLETE_SHELF_TYPOGRAPHY,
  INKBOUND_TYPOGRAPHY,
  ECHO_VALE_TYPOGRAPHY,
  HALVORSEN_TYPOGRAPHY,
  KAGE_TYPOGRAPHY,
  KAIRO_TYPOGRAPHY,
  MK78_KEYBOARD_TYPOGRAPHY,
  MARA_VOSS_TYPOGRAPHY,
  NOEMA_N1_TYPOGRAPHY,
  RENDERLAB_TYPOGRAPHY,
  MENG_TO_SKETCHBOOK_TYPOGRAPHY,
  NOCTURNE_TYPOGRAPHY,
  SYLVA_TYPOGRAPHY,
  TIDECREST_TYPOGRAPHY,
  VOLTA_ATELIER_TYPOGRAPHY,
} from "./pageRecipes";
import innerGreenSource from "../sylva-living-world/sources/inner-green-3d.html?raw";
/* Only the seam is imported here: the packaged Tidecrest document and its
   rewrites sit behind a module the public build guard stubs. */
import { buildTidecrestDocument } from "../tidecrest-hero/tidecrestDocument.js";
/* Same seam for Meridian's three sibling bodies. */
import { buildMeridianDocument } from "../meridian-landing-page/meridianDocument.js";
/* Same seam for the ASCII field's three generated sibling scenes. */
import { buildAsciiFieldDocument } from "../ascii-field/asciiFieldDocuments.js";
/* And for the Betawise globe's four other worlds. */
import { buildBetawiseGlobeDocument } from "../betawise-globe/betawiseGlobeDocument.js";
import axonisArborSource from "../axonis-field/axonis-arbor.html?raw";
import axonisVortexSource from "../axonis-field/axonis-vortex.html?raw";
import axonisTideSource from "../axonis-field/axonis-tide.html?raw";
import axonisDuneSource from "../axonis-field/axonis-dune.html?raw";
import {
  NOCTURNE_TITLES,
  NOCTURNE_VARIANTS,
  buildNocturneDocument,
  type NocturneVariant,
} from "../nocturne-hero/NocturneScene";
import { buildSandboxedPageDocument } from "./sandboxedPageDocument";
import {
  MAPLE_AUTUMN_STYLE,
  SAKURA_SUNSET_STYLE,
  SEQUOIA_MIST_STYLE,
  applyMapleAutumnVariant,
  applySakuraSunsetVariant,
  applySequoiaMistVariant,
} from "../sylva-living-world/SylvaLivingWorldScene";

export function KageLandingPage(props: LandingPageProps & PageTypographyProps) {
  const [type, frame] = splitTypographyProps(props);
  const customization = usePageTypography(KAGE_TYPOGRAPHY, type);
  return <LandingPageFrame {...frame} customization={customization} title="Kage — Where stillness reveals the unseen" sourceUrl="/landing-pages/kage.html" />;
}

export function CompleteShelfLandingPage(props: LandingPageProps & PageTypographyProps) {
  const [type, frame] = splitTypographyProps(props);
  const customization = usePageTypography(COMPLETE_SHELF_TYPOGRAPHY, type);
  return <LandingPageFrame {...frame} customization={customization} title="Working Volumes — Seven Tools for Making" sourceUrl="/landing-pages/complete-shelf-v2.html" />;
}

export function BestsellersBookShowcase(props: LandingPageProps & PageTypographyProps) {
  const [type, frame] = splitTypographyProps(props);
  const customization = usePageTypography(BESTSELLERS_TYPOGRAPHY, type);
  return <LandingPageFrame {...frame} customization={customization} title="Field Manuals — Tools for Thought" sourceUrl="/landing-pages/bestsellers-book-showcase.html" />;
}

export function InkboundRiverStory(props: LandingPageProps & PageTypographyProps) {
  const [type, frame] = splitTypographyProps(props);
  const customization = usePageTypography(INKBOUND_TYPOGRAPHY, type);
  return <LandingPageFrame {...frame} customization={customization} title="The River Remembers — Inkbound" sourceUrl="/landing-pages/inkbound-river-story.html" />;
}

export function NoctilucaLandingPage(props: LandingPageProps) {
  return <LandingPageFrame {...props} title="Noctiluca — The dark is not empty" sourceUrl="/landing-pages/noctiluca.html" />;
}

export function AgentArcanaLandingPage(props: LandingPageProps) {
  return <LandingPageFrame {...props} title="Meng To — Agent Arcana" sourceUrl="/landing-pages/agent-arcana.html" />;
}

export const ASCII_FIELD_VARIANTS = ["vortex", "tide", "ridge", "canopy"] as const;
export type AsciiFieldVariant = (typeof ASCII_FIELD_VARIANTS)[number];

/* The vortex is the packaged page itself, loaded from its own URL. The other
   three are complete documents of their own, built by
   `scripts/build-ascii-scenes.mjs`: each carries the authored drawing system —
   the layer depth rig, the near/far light ramp, the shading-cloud and grain
   passes, the glyph-sampling pointer dust and its suction well — and replaces
   only what the field is made of, its palette and its sky. None of them carries
   any page chrome, so there is no copy to suppress. */
const ASCII_FIELD_TITLES: Record<AsciiFieldVariant, string> = {
  vortex: "Sable — ASCII vortex background",
  tide: "ASCII Tide — glyph swell background",
  ridge: "ASCII Ridge — glyph range background",
  canopy: "ASCII Canopy — glyph tree background",
};

export type AsciiPageTransitionHeroProps = LandingPageProps & {
  variant?: AsciiFieldVariant;
  presentation?: "page" | "background";
};

export function AsciiPageTransitionHero({ variant = "vortex", presentation = "background", ...props }: AsciiPageTransitionHeroProps) {
  const safeVariant = ASCII_FIELD_VARIANTS.includes(variant) ? variant : "vortex";
  return (
    <LandingPageFrame
      {...props}
      key={safeVariant}
      backgroundCanvasSelector={presentation === "background" ? "#vortex" : undefined}
      title={presentation === "page" && safeVariant === "vortex" ? "Sable — Agents should ship, not start over" : ASCII_FIELD_TITLES[safeVariant]}
      sourceUrl="/landing-pages/ascii-page-transition-v1.html"
      srcDoc={buildAsciiFieldDocument(safeVariant)}
    />
  );
}

export function AsciiPageTransitionPage(props: Omit<AsciiPageTransitionHeroProps, "presentation">) {
  return <AsciiPageTransitionHero {...props} presentation="page" />;
}

export function TrochilHero(props: LandingPageProps) {
  return <LandingPageFrame {...props} backgroundCanvasSelector="#gl" title="Trochil — particle field background" sourceUrl="/landing-pages/trochil-hero.html" />;
}

export function AttuneHero(props: LandingPageProps & PageTypographyProps) {
  const [type, frame] = splitTypographyProps(props);
  const customization = usePageTypography(ATTUNE_TYPOGRAPHY, type);
  return <LandingPageFrame {...frame} customization={customization} title="attune — Tuned to every visitor" sourceUrl="/landing-pages/attune-hero.html" />;
}

export const BETAWISE_GLOBE_VARIANTS = ["betawise", "moon", "mars", "saturn", "sun"] as const;
export type BetawiseGlobeVariant = (typeof BETAWISE_GLOBE_VARIANTS)[number];

const BETAWISE_GLOBE_TITLES: Record<BetawiseGlobeVariant, string> = {
  betawise: "Betawise — network globe background",
  moon: "Moon — mare and highland background",
  mars: "Mars — albedo and crater background",
  saturn: "Saturn — ring system background",
  sun: "Sun — granulation and prominence background",
};

/**
 * The packaged document ends its IIFE by publishing `window.__betawise`, whose
 * `set()` writes into the scene's own CFG block and re-runs its `apply()`. Every
 * slider below is one CFG key, so the controls drive the authored renderer
 * rather than a second copy of its numbers — and they work identically on the
 * byte-exact Earth document and on the four derived worlds.
 */
export type BetawiseGlobeSceneProps = {
  /** Obliquity, radians. Read live by the frame loop, so it never jumps. */
  tilt?: number;
  /** How far the dark half of the surface map is pulled down: 1 - CFG.SEA_DIM. */
  surfaceContrast?: number;
  /** CFG.RIM_LIGHT — the halo the limb lights on its own. */
  limbGlow?: number;
  /** CFG.EXPOSURE, the tonemap's shoulder. */
  exposure?: number;
  /** CFG.BLOOM, how much of the three-mip chain is summed back. */
  bloom?: number;
  /** CFG.DUST_GAIN — the star volume, or the corona on the Sun. */
  starGlow?: number;
  /** CFG.ARC_GAIN — Earth's routes, Saturn's rings, the Sun's prominences. */
  arcGlow?: number;
};

export type BetawiseLandingPageProps = LandingPageProps & PageTypographyProps & BetawiseGlobeSceneProps & {
  variant?: BetawiseGlobeVariant;
  presentation?: "page" | "background";
};

/** Lifts the scene sliders out so the rest can go on to the frame untouched. */
function splitBetawiseSceneProps<T extends BetawiseGlobeSceneProps>(
  { tilt, surfaceContrast, limbGlow, exposure, bloom, starGlow, arcGlow, ...rest }: T,
): [BetawiseGlobeSceneProps, Omit<T, keyof BetawiseGlobeSceneProps>] {
  return [{ tilt, surfaceContrast, limbGlow, exposure, bloom, starGlow, arcGlow }, rest];
}

/** `undefined` means "leave the document's own value alone". */
function betawiseSceneSettings(scene: BetawiseGlobeSceneProps) {
  const settings: Record<string, number> = {};
  if (scene.tilt !== undefined) settings.TILT_X = scene.tilt;
  if (scene.surfaceContrast !== undefined) settings.SEA_DIM = 1 - scene.surfaceContrast;
  if (scene.limbGlow !== undefined) settings.RIM_LIGHT = scene.limbGlow;
  if (scene.exposure !== undefined) settings.EXPOSURE = scene.exposure;
  if (scene.bloom !== undefined) settings.BLOOM = scene.bloom;
  if (scene.starGlow !== undefined) settings.DUST_GAIN = scene.starGlow;
  if (scene.arcGlow !== undefined) settings.ARC_GAIN = scene.arcGlow;
  return settings;
}

/**
 * Re-identified only when a value actually moves, so the frame effect re-runs on
 * a slider drag and on nothing else. `set()` writes CFG and calls the document's
 * own apply(); TILT_X needs neither, because the frame loop reads it live.
 */
function useSceneSettings(settings: Record<string, number>) {
  const signature = JSON.stringify(settings);
  return useCallback((element: HTMLIFrameElement) => {
    const scene = betawiseScene(element);
    const values = JSON.parse(signature) as Record<string, number>;
    if (scene && Object.keys(values).length > 0) scene.set(values);
  }, [signature]);
}

/** Reads the scene's published hook, which is absent until the frame has run. */
function betawiseScene(element: HTMLIFrameElement) {
  const view = element.contentWindow as { __betawise?: { set: (values: Record<string, number>) => void } } | null;
  return view?.__betawise;
}

/**
 * The authored page is served byte-for-byte for the base entry — the frame loads it
 * from its packaged URL, exactly as it did before the variants existed. The four
 * other worlds are derived: the same authored document with anchored rewrites applied
 * to its tuning block, the surface the stroke field samples, the star volume, and
 * what the arc and marker layers carry. The rewrites live in betawiseGlobeVariants.js
 * so the node test can assert every anchor against the packaged file rather than
 * against a copy of it.
 */
export function BetawiseLandingPage({ variant = "betawise", presentation = "background", ...props }: BetawiseLandingPageProps) {
  const safeVariant = BETAWISE_GLOBE_VARIANTS.includes(variant) ? variant : "betawise";
  const [type, rest] = splitTypographyProps(props);
  const customization = usePageTypography(BETAWISE_TYPOGRAPHY, type);
  const [scene, frame] = splitBetawiseSceneProps(rest);
  const srcDoc = useMemo(() => buildBetawiseGlobeDocument?.(safeVariant), [safeVariant]);
  const settings = betawiseSceneSettings(scene);
  const applyScene = useSceneSettings(settings);

  return (
    <LandingPageFrame
      {...frame}
      key={safeVariant}
      backgroundCanvasSelector={presentation === "background" ? "#gl" : undefined}
      applyScene={applyScene}
      backgroundVisualSelector={presentation === "background" ? ".veil" : undefined}
      customization={safeVariant === "betawise" ? customization : undefined}
      title={BETAWISE_GLOBE_TITLES[safeVariant]}
      sourceUrl="/landing-pages/betawise.html"
      srcDoc={srcDoc}
    />
  );
}

export function BetawiseGlobePage(props: Omit<BetawiseLandingPageProps, "presentation">) {
  return <BetawiseLandingPage {...props} presentation="page" />;
}

export function KairoLandingPage(props: LandingPageProps & PageTypographyProps) {
  const [type, frame] = splitTypographyProps(props);
  const customization = usePageTypography(KAIRO_TYPOGRAPHY, type);
  return <LandingPageFrame {...frame} customization={customization} title="KAIRO — Heat With Intent." sourceUrl="/landing-pages/kairo-culinary.html" />;
}

export function VoltaAtelierLandingPage(props: LandingPageProps & PageTypographyProps) {
  const [type, frame] = splitTypographyProps(props);
  const customization = usePageTypography(VOLTA_ATELIER_TYPOGRAPHY, type);
  return <LandingPageFrame {...frame} customization={customization} title="Volta Atelier — Creative Design & 3D Studio" sourceUrl="/landing-pages/volta-atelier.html" />;
}

export type BetawiseHeroProps = LandingPageProps & PageTypographyProps & { presentation?: "page" | "background" };

export function BetawiseHero({ presentation = "background", ...props }: BetawiseHeroProps) {
  const [type, frame] = splitTypographyProps(props);
  const customization = usePageTypography(BETAWISE_HERO_TYPOGRAPHY, type);
  return <LandingPageFrame {...frame} backgroundCanvasSelector={presentation === "background" ? "#gl" : undefined} backgroundVisualSelector={presentation === "background" ? "#veil" : undefined} customization={customization} title={presentation === "background" ? "Betawise — particle bust background" : "Betawise — Redefining Attribution with AI-Powered Data Precision"} sourceUrl="/landing-pages/betawise-hero.html" />;
}

export function BetawiseParticlePage(props: Omit<BetawiseHeroProps, "presentation">) {
  return <BetawiseHero {...props} presentation="page" />;
}

export const AXONIS_VARIANTS = ["signal-tree", "arbor", "vortex", "tide", "dune"] as const;
export type AxonisVariant = (typeof AXONIS_VARIANTS)[number];

/* The signal tree is the packaged page itself, loaded from its own URL so it
   stays byte-exact. The other four are complete documents of their own, built
   by `scripts/build-axonis-scenes.mjs`: each carries the authored drawing
   system — the GPU-extruded ribbons, the dual-filter bloom, the composite and
   its grain — and replaces the curve the strands follow, the palette and the
   sky. None of them carries any page chrome, so there is no copy to suppress. */
const AXONIS_DOCUMENTS: Record<Exclude<AxonisVariant, "signal-tree">, string> = {
  arbor: axonisArborSource,
  vortex: axonisVortexSource,
  tide: axonisTideSource,
  dune: axonisDuneSource,
};

const AXONIS_TITLES: Record<AxonisVariant, string> = {
  "signal-tree": "Axonis — signal tree background",
  arbor: "Axonis — canopy and root background",
  vortex: "Axonis — deep field funnel background",
  tide: "Axonis — open water background",
  dune: "Axonis — sand sea background",
};

export type AxonisLandingPageProps = LandingPageProps & PageTypographyProps & {
  variant?: AxonisVariant;
  presentation?: "page" | "background";
};

export function AxonisLandingPage({ variant = "signal-tree", presentation = "background", ...props }: AxonisLandingPageProps) {
  const safeVariant = AXONIS_VARIANTS.includes(variant) ? variant : "signal-tree";
  const [type, frame] = splitTypographyProps(props);
  const customization = usePageTypography(AXONIS_TYPOGRAPHY, type);
  return <LandingPageFrame {...frame} backgroundCanvasSelector={presentation === "background" ? "#scene" : undefined} key={safeVariant} customization={safeVariant === "signal-tree" ? customization : undefined} title={presentation === "page" && safeVariant === "signal-tree" ? "Axonis — Adaptive intelligence systems" : AXONIS_TITLES[safeVariant]} sourceUrl="/landing-pages/axonis.html" srcDoc={safeVariant === "signal-tree" ? undefined : AXONIS_DOCUMENTS[safeVariant]} />;
}

export function AxonisPage(props: Omit<AxonisLandingPageProps, "presentation">) {
  return <AxonisLandingPage {...props} presentation="page" />;
}

export function HalfwaveLandingPage(props: LandingPageProps) {
  return <LandingPageFrame {...props} title="Halfwave — analogue design studio" sourceUrl="/landing-pages/codescan.html" />;
}

// The Halfwave build re-authored as a solo motion designer's portfolio.
export type MiraSolvangLandingPageProps = LandingPageProps & { presentation?: "page" | "background" };

export function MiraSolvangLandingPage({ presentation = "background", ...props }: MiraSolvangLandingPageProps) {
  return <LandingPageFrame {...props} backgroundCanvasSelector={presentation === "background" ? "#gl" : undefined} title={presentation === "background" ? "Mira Solvang — monitor wall background" : "Mira Solvang — Motion Designer"} sourceUrl="/landing-pages/mira-solvang.html" />;
}

export function MiraSolvangPage(props: Omit<MiraSolvangLandingPageProps, "presentation">) {
  return <MiraSolvangLandingPage {...props} presentation="page" />;
}

export const TIDECREST_HERO_VARIANTS = ["tidecrest", "harbour-nights", "dune-reach", "river-hollow"] as const;
export type TidecrestHeroVariant = (typeof TIDECREST_HERO_VARIANTS)[number];

export type TidecrestHeroProps = LandingPageProps & PageTypographyProps & { variant?: TidecrestHeroVariant; presentation?: "page" | "background" };

const TIDECREST_HERO_BASE_URL = "/landing-pages/tidecrest-hero.html";

const TIDECREST_HERO_TITLES: Record<TidecrestHeroVariant, string> = {
  tidecrest: "Tidecrest — ridgeline field background",
  "harbour-nights": "Tidecrest — harbour nights background",
  "dune-reach": "Tidecrest — dune reach background",
  "river-hollow": "Tidecrest — river hollow background",
};

/**
 * The authored page is served byte-for-byte for the base entry — the frame loads it
 * from its packaged URL, exactly as it did before the variants existed. The three
 * re-dressings are derived: the same authored document with anchored rewrites applied
 * to the height field, the extra vertices folded into its terrain buffers, and the
 * four colours the whole scene is graded through. The rewrites live in
 * tidecrestVariants.js so the node test can assert every anchor against the packaged
 * file rather than against a copy of it.
 */
export function TidecrestHero({ variant = "tidecrest", presentation = "background", ...props }: TidecrestHeroProps) {
  const safeVariant = TIDECREST_HERO_VARIANTS.includes(variant) ? variant : "tidecrest";
  const [type, frame] = splitTypographyProps(props);
  const customization = usePageTypography(TIDECREST_TYPOGRAPHY, type);
  /* the optional call is not defensiveness: on the public site the builder is a
     stub, and the Pro entry it belongs to is never mounted there */
  const srcDoc = useMemo(() => {
    const source = buildTidecrestDocument?.(safeVariant);
    if (!source) return undefined;
    return buildSandboxedPageDocument(source, {
      presentation,
      canvasSelector: "#gl",
    });
  }, [presentation, safeVariant]);

  return (
    <LandingPageFrame
      {...frame}
      key={safeVariant}
      backgroundCanvasSelector={presentation === "background" ? "#gl" : undefined}
      customization={customization}
      title={TIDECREST_HERO_TITLES[safeVariant]}
      sourceUrl={TIDECREST_HERO_BASE_URL}
      srcDoc={srcDoc}
    />
  );
}

export function TidecrestPage(props: Omit<TidecrestHeroProps, "presentation">) {
  return <TidecrestHero {...props} presentation="page" />;
}

export function CentraLandingPage(props: LandingPageProps) {
  return <LandingPageFrame {...props} title="Centra — Intelligence In The Open" sourceUrl="/landing-pages/centra.html" />;
}

export const NOCTURNE_CONTROL_KEYS = [
  "objectScale",
  "floatMotion",
  "metalHighlight",
  "haloScale",
  "haloGlow",
  "planetScale",
  "sunAzimuth",
  "planetGlow",
  "surfaceRelief",
  "clouds",
  "cityLights",
  "atmosphere",
  "stars",
  "waterMotion",
  "pointerOrbit",
] as const;
export type NocturneControlKey = (typeof NOCTURNE_CONTROL_KEYS)[number];

export type NocturneHeroProps = LandingPageProps & PageTypographyProps &
  Partial<Record<NocturneControlKey, number>> & { variant?: NocturneVariant; presentation?: "page" | "background" };

/**
 * The authored page is lumen.html; the page it holds is Nocturne. This entry
 * serves its scene alone — the marketing layer is gone from the document rather
 * than hidden inside the frame — and each variant swaps the body in the sky and
 * the object over the water. The canvas selector is kept so the presentation
 * pass still owns the layer if anything else ever lands in the document.
 */
export function NocturneHero({
  variant = "midnight",
  presentation = "background",
  objectScale,
  floatMotion,
  metalHighlight,
  haloScale,
  haloGlow,
  planetScale,
  sunAzimuth,
  planetGlow,
  surfaceRelief,
  clouds,
  cityLights,
  atmosphere,
  stars,
  waterMotion,
  pointerOrbit,
  ...props
}: NocturneHeroProps) {
  const safeVariant = NOCTURNE_VARIANTS.includes(variant) ? variant : "midnight";
  const [type, frame] = splitTypographyProps(props);
  const customization = usePageTypography(NOCTURNE_TYPOGRAPHY, type);
  const srcDoc = useMemo(
    () => presentation === "page" && safeVariant === "midnight" ? undefined : buildNocturneDocument(safeVariant),
    [presentation, safeVariant],
  );
  const applyScene = useCallback((element: HTMLIFrameElement) => {
    const given = {
      objectScale,
      floatMotion,
      metalHighlight,
      haloScale,
      haloGlow,
      planetScale,
      sunAzimuth,
      planetGlow,
      surfaceRelief,
      clouds,
      cityLights,
      atmosphere,
      stars,
      waterMotion,
      pointerOrbit,
    };
    const values: Record<string, number> = {};
    for (const [key, value] of Object.entries(given)) {
      if (typeof value === "number" && Number.isFinite(value)) values[key] = value;
    }
    element.contentWindow?.postMessage({ type: "threeui-nocturne-controls", values }, "*");
  }, [
    atmosphere,
    cityLights,
    clouds,
    floatMotion,
    haloGlow,
    haloScale,
    metalHighlight,
    objectScale,
    planetGlow,
    planetScale,
    pointerOrbit,
    stars,
    sunAzimuth,
    surfaceRelief,
    waterMotion,
  ]);
  return (
    <LandingPageFrame
      {...frame}
      key={safeVariant}
      applyScene={applyScene}
      backgroundCanvasSelector={presentation === "background" ? "#gl" : undefined}
      customization={customization}
      title={NOCTURNE_TITLES[safeVariant]}
      sourceUrl="/landing-pages/lumen.html"
      srcDoc={srcDoc}
    />
  );
}

export function NocturnePage(props: Omit<NocturneHeroProps, "presentation">) {
  return <NocturneHero {...props} presentation="page" />;
}

export const MERIDIAN_VARIANTS = ["earth", "moon", "mars", "saturn"] as const;
export type MeridianVariant = (typeof MERIDIAN_VARIANTS)[number];

/** Every knob `window.__meridian` in ascend.html will accept, as a multiplier
    over what the page was authored with — so 1 is the scene, not the middle of
    a slider, and one control set fits all four bodies. */
export const MERIDIAN_CONTROL_KEYS = [
  "orbitSpeed",
  "pointerSway",
  "sunAzimuth",
  "haze",
  "halo",
  "exposure",
  "relief",
  "clouds",
  "stars",
  "rings",
] as const;
export type MeridianControlKey = (typeof MERIDIAN_CONTROL_KEYS)[number];

export type MeridianLandingPageProps = LandingPageProps &
  Partial<Record<MeridianControlKey, number>> & { variant?: MeridianVariant; presentation?: "page" | "background" };

const MERIDIAN_TITLES: Record<MeridianVariant, string> = {
  earth: "Meridian — orbital Earth background",
  moon: "Meridian — orbital Moon background",
  mars: "Meridian — orbital Mars background",
  saturn: "Meridian — orbital Saturn background",
};

/**
 * The authored file is named ascend.html; the page it holds is Meridian.
 *
 * Earth is served from that URL, exactly as it was before the other bodies
 * existed. The three siblings are derived: the same document with anchored
 * rewrites applied to what the surface shader builds its albedo out of, how
 * much air stands over it, and the colours the frame is graded through —
 * plus, for Saturn, a ring system and the shadow it lays across the disc. The
 * rewrites live in meridianVariants.js so the node test can assert every
 * anchor against the packaged file rather than against a copy of it.
 */
export function MeridianLandingPage({
  variant = "earth",
  presentation = "background",
  orbitSpeed,
  pointerSway,
  sunAzimuth,
  haze,
  halo,
  exposure,
  relief,
  clouds,
  stars,
  rings,
  ...props
}: MeridianLandingPageProps) {
  const safeVariant = MERIDIAN_VARIANTS.includes(variant) ? variant : "earth";
  /* the optional call is not defensiveness: on the public site the builder is a
     stub, and the Pro entry it belongs to is never mounted there */
  const srcDoc = useMemo(() => buildMeridianDocument?.(safeVariant, presentation), [presentation, safeVariant]);

  /* Rebuilt whenever a slider moves, which is what re-runs the frame effect.
     A knob left undefined never reaches the document, so the authored value
     stands rather than being overwritten by a slider's own default. The three
     that are not uniforms — orbit speed, pointer sway, sun azimuth — need no
     apply at all: the frame loop reads them every frame. */
  const applyScene = useCallback((element: HTMLIFrameElement) => {
    const given = { orbitSpeed, pointerSway, sunAzimuth, haze, halo, exposure, relief, clouds, stars, rings };
    const values: Record<string, number> = {};
    for (const [key, value] of Object.entries(given)) {
      if (typeof value === "number" && Number.isFinite(value)) values[key] = value;
    }
    if (Object.keys(values).length === 0) return;

    if (safeVariant === "earth") {
      const scene = (element.contentWindow as { __meridian?: { set: (values: Record<string, number>) => void } } | null)?.__meridian;
      scene?.set(values);
      return;
    }

    /* Derived documents use srcDoc and intentionally keep an opaque sandbox
       origin. Reaching into contentWindow throws there, so their control seam
       travels through the same isolated postMessage bridge as Nocturne. */
    element.contentWindow?.postMessage({ type: "threeui-meridian-controls", values }, "*");
  }, [clouds, exposure, halo, haze, orbitSpeed, pointerSway, relief, rings, safeVariant, stars, sunAzimuth]);

  return (
    <LandingPageFrame
      {...props}
      key={safeVariant}
      applyScene={applyScene}
      backgroundCanvasSelector={presentation === "background" ? "#scene" : undefined}
      backgroundVisualSelector={presentation === "background" ? "#veil" : undefined}
      title={MERIDIAN_TITLES[safeVariant]}
      sourceUrl="/landing-pages/ascend.html"
      srcDoc={srcDoc}
    />
  );
}

export function MeridianPage(props: Omit<MeridianLandingPageProps, "presentation">) {
  return <MeridianLandingPage {...props} presentation="page" />;
}

export function MengToSketchbookLandingPage(props: LandingPageProps & PageTypographyProps) {
  const [type, frame] = splitTypographyProps(props);
  const customization = usePageTypography(MENG_TO_SKETCHBOOK_TYPOGRAPHY, type);
  return <LandingPageFrame {...frame} customization={customization} title="Meng To — Singapore Sketchbook" sourceUrl="/landing-pages/meng-to-sketchbook.html" />;
}

export function SekiteiLandingPage(props: LandingPageProps) {
  return <LandingPageFrame {...props} title="Sekitei — One day in a dry garden" sourceUrl="/landing-pages/sekitei.html" />;
}

export function RenderLabLandingPage(props: LandingPageProps & PageTypographyProps) {
  const [type, frame] = splitTypographyProps(props);
  const customization = usePageTypography(RENDERLAB_TYPOGRAPHY, type);
  return <LandingPageFrame {...frame} customization={customization} title="RenderLab — Motion House" sourceUrl="/landing-pages/renderlab-motion-house.html" />;
}

export function EchoValeLandingPage(props: LandingPageProps & PageTypographyProps) {
  const [type, frame] = splitTypographyProps(props);
  const customization = usePageTypography(ECHO_VALE_TYPOGRAPHY, type);
  return <LandingPageFrame {...frame} customization={customization} title="Echo Vale — Follow the signal beneath the stone" sourceUrl="/landing-pages/echo-vale.html" />;
}

export function AurelloLandingPage(props: LandingPageProps & PageTypographyProps) {
  const [type, frame] = splitTypographyProps(props);
  const customization = usePageTypography(AURELLO_TYPOGRAPHY, type);
  return <LandingPageFrame {...frame} customization={customization} title="Aurello — Orange Spritz, Ready to Drink" sourceUrl="/landing-pages/aurello-beverage.html" />;
}

export function LampLandingPage(props: LandingPageProps) {
  return <LandingPageFrame {...props} title="Latent — We develop film slowly, by hand" sourceUrl="/landing-pages/lamp.html" />;
}

export function MaraVossLandingPage(props: LandingPageProps & PageTypographyProps) {
  const [type, frame] = splitTypographyProps(props);
  const customization = usePageTypography(MARA_VOSS_TYPOGRAPHY, type);
  return <LandingPageFrame {...frame} customization={customization} title="Mara Voss — An Archive of Vanishing Sounds" sourceUrl="/landing-pages/mara-voss.html" />;
}

export function Mk78KeyboardLandingPage(props: LandingPageProps & PageTypographyProps) {
  const [type, frame] = splitTypographyProps(props);
  const customization = usePageTypography(MK78_KEYBOARD_TYPOGRAPHY, type);
  return <LandingPageFrame {...frame} customization={customization} title="MK·78 — Every key. Every detail." sourceUrl="/landing-pages/mk78-keyboard.html" />;
}

export function NoemaN1LandingPage(props: LandingPageProps & PageTypographyProps) {
  const [type, frame] = splitTypographyProps(props);
  const customization = usePageTypography(NOEMA_N1_TYPOGRAPHY, type);
  return <LandingPageFrame {...frame} customization={customization} title="NOEMA N1 — A machine that listens" sourceUrl="/landing-pages/noema-n1.html" />;
}

export function AnthraA40LandingPage(props: LandingPageProps & PageTypographyProps) {
  const [type, frame] = splitTypographyProps(props);
  const customization = usePageTypography(ANTHRA_A40_TYPOGRAPHY, type);
  return <LandingPageFrame {...frame} customization={customization} title="Anthra A-40 — The titanium automatic" sourceUrl="/landing-pages/anthra-a40.html" />;
}

export function AstralAtlasLandingPage(props: LandingPageProps) {
  return <LandingPageFrame {...props} title="Astral Atlas — Singular Objects in Orbit" sourceUrl="/landing-pages/astral-atlas.html" />;
}

export function MugenLandingPage(props: LandingPageProps) {
  return <LandingPageFrame {...props} title="MUGEN — The Gate Remembers" sourceUrl="/landing-pages/mugen.html" />;
}

export function NodalLandingPage(props: LandingPageProps) {
  return <LandingPageFrame {...props} title="NODAL — Series A 40mm T1.9" sourceUrl="/landing-pages/nodal.html" />;
}

export function Kestrel65LandingPage(props: LandingPageProps) {
  return <LandingPageFrame {...props} title="Kestrel 65" sourceUrl="/landing-pages/kestrel-65.html" />;
}

export function OscillaM1LandingPage(props: LandingPageProps) {
  return <LandingPageFrame {...props} title="OSCILLA M-1 — Blender-baked synthesiser" sourceUrl="/landing-pages/oscilla-m1.html" />;
}

// Halvorsen is Understory's layout and hand scene recut as a dark monotone
// portfolio; the 3D pipeline is unchanged, only the page tone around it.
export function HalvorsenLandingPage(props: LandingPageProps & PageTypographyProps) {
  const [type, frame] = splitTypographyProps(props);
  const customization = usePageTypography(HALVORSEN_TYPOGRAPHY, type);
  return <LandingPageFrame {...frame} customization={customization} title="halvorsen — Interfaces built to disappear" sourceUrl="/landing-pages/halvorsen.html" />;
}

export function SublevelStudioLandingPage(props: LandingPageProps) {
  return <LandingPageFrame {...props} title="sublevel.studio — We build the stuff people remember" sourceUrl="/landing-pages/sublevel-studio.html" />;
}

// The authored file is named cogniwave.html; the page it holds is Understory.
export function UnderstoryLandingPage(props: LandingPageProps) {
  return <LandingPageFrame {...props} title="understory — What grows here grows slowly" sourceUrl="/landing-pages/cogniwave.html" />;
}

export const SYLVA_HERO_VARIANTS = ["living-green", "sakura-sunset", "maple-autumn", "sequoia-mist"] as const;
export type SylvaHeroVariant = (typeof SYLVA_HERO_VARIANTS)[number];

export type SylvaHeroProps = LandingPageProps & PageTypographyProps & { variant?: SylvaHeroVariant };

const SYLVA_HERO_BASE_URL = "/landing-pages/inner-green-3d.html";

/**
 * The authored page is served byte-for-byte for Living Green. Sakura Sunset is derived:
 * the same authored document with the owner's authored Sakura Sunset scene transformation
 * applied — reused from SylvaLivingWorldScene rather than reimplemented here, so the two
 * entries can never drift apart. A <base> is injected because a srcdoc frame would otherwise
 * resolve the authored relative asset paths against the app origin instead of /landing-pages/.
 */
const SYLVA_HERO_ASSET_DIR = "inner-green-assets/";
const SYLVA_HERO_ASSET_BASE = `${SYLVA_HERO_BASE_URL.replace(/[^/]+$/, "")}${SYLVA_HERO_ASSET_DIR}`;

/**
 * Page chrome for the derived variants. Each one puts a different field behind
 * the page — dusk plum under Sakura, cold slate under Maple — so the dock is
 * retoned to sit in that light, and the two native controls get the frosted
 * backdrop a flat field no longer gives them for free.
 *
 * The authored page documents why its dock carries no backdrop-filter: over a
 * canvas that repaints every frame the backdrop is re-sampled and re-blurred
 * every frame, which measured ~20 fps off the whole page. That reasoning still
 * holds for a bar the width of the nav, so the dock keeps its translucent panel
 * and only its colour changes. The buttons are small and already clipped to
 * their own silhouette, so the blur is bounded to those two shapes.
 */
type SylvaHeroChromeTone = {
  edge: string;
  lift: string;
  panel: string;
  drop: string;
  nearPanel: string;
  mark: string;
  markInk: string;
  plate: string;
};

const SYLVA_HERO_CHROME_TONES: Record<Exclude<SylvaHeroVariant, "living-green">, SylvaHeroChromeTone> = {
  "sakura-sunset": {
    edge: "255, 236, 243",
    lift: "255, 240, 246",
    panel: "48, 33, 43",
    drop: "20, 10, 18",
    nearPanel: "53, 35, 46",
    mark: "#f3e9ee",
    markInk: "#33222c",
    plate: "58, 40, 51",
  },
  "maple-autumn": {
    edge: "228, 240, 246",
    lift: "232, 244, 250",
    panel: "33, 41, 47",
    drop: "8, 14, 18",
    nearPanel: "37, 46, 53",
    mark: "#e8eff2",
    markInk: "#23303a",
    plate: "34, 46, 54",
  },
  /* The fog field is the one pale ground of the four, so this dock is the one
     that has to hold its own against light rather than sit in the dark. */
  "sequoia-mist": {
    edge: "236, 244, 232",
    lift: "238, 246, 232",
    panel: "38, 48, 40",
    drop: "16, 24, 18",
    nearPanel: "43, 54, 44",
    mark: "#eef3e8",
    markInk: "#26302a",
    plate: "48, 60, 50",
  },
};

function sylvaHeroChromeStyle(tone: SylvaHeroChromeTone) {
  return `<style data-threeui-sylva-hero-chrome>
/* ── nav: the authored glass, retoned to the field behind it ────────────── */
.dock {
  border-color: rgba(${tone.edge}, 0.13) !important;
  background:
    linear-gradient(180deg, rgba(${tone.lift}, 0.06), rgba(${tone.lift}, 0) 42%),
    rgba(${tone.panel}, 0.76) !important;
  box-shadow: 0 calc(8 * var(--u)) calc(22 * var(--u)) rgba(${tone.drop}, 0.34),
              inset 0 1px rgba(${tone.lift}, 0.07) !important;
}

.dock-item[data-near="true"] {
  border-color: rgba(${tone.edge}, 0.20) !important;
  background: rgba(${tone.nearPanel}, 0.94) !important;
  box-shadow: 0 calc(7 * var(--u)) calc(16 * var(--u)) rgba(${tone.drop}, 0.32) !important;
}

.dock-mark {
  background: ${tone.mark} !important;
  border-color: ${tone.mark} !important;
  color: ${tone.markInk} !important;
}

.dock-mark[data-near="true"] {
  background: #fff !important;
  border-color: #fff !important;
  color: ${tone.markInk} !important;
}

.dock-item--enter { background: rgba(${tone.lift}, 0.085) !important; }

/* ── the two native controls ────────────────────────────────────────────
   The frosted plate cannot go on the clip elements themselves: their clip is
   cut to the button's whole bloom, so the blur would read as a slab twice the
   button's size. It cannot go inside them either — clip-path makes a backdrop
   root, so a child's backdrop-filter would have nothing behind it to sample.

   So each plate is its own layer outside the reveal clip, sized one unit past
   the native 202 x 60 Explore control and the 88-unit Play control. The small
   overshoot lets the frost meet the button edge instead of stopping inside it. */
.pill-glass {
  position: absolute;
  z-index: 4;
  left: calc(644 * var(--u));
  top: calc(360 * var(--u));
  width: calc(204 * var(--u));
  height: calc(62 * var(--u));
  margin: calc(-31 * var(--u)) 0 0 calc(-102 * var(--u));
  border-radius: 999px;
  pointer-events: none;
  -webkit-backdrop-filter: blur(calc(13 * var(--u))) saturate(1.16);
  backdrop-filter: blur(calc(13 * var(--u))) saturate(1.16);
  background: rgba(${tone.plate}, 0.22);
}

.play-wrap::before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 50%;
  top: 50%;
  width: calc(90 * var(--u));
  height: calc(90 * var(--u));
  margin: calc(-45 * var(--u)) 0 0 calc(-45 * var(--u));
  border-radius: 50%;
  -webkit-backdrop-filter: blur(calc(13 * var(--u))) saturate(1.16);
  backdrop-filter: blur(calc(13 * var(--u))) saturate(1.16);
  background: rgba(${tone.plate}, 0.22);
}
</style>`;
}

const SYLVA_HERO_SCENES: Record<Exclude<SylvaHeroVariant, "living-green">, {
  style: string;
  apply: (source: string) => string;
}> = {
  "sakura-sunset": { style: SAKURA_SUNSET_STYLE, apply: applySakuraSunsetVariant },
  "maple-autumn": { style: MAPLE_AUTUMN_STYLE, apply: applyMapleAutumnVariant },
  "sequoia-mist": { style: SEQUOIA_MIST_STYLE, apply: applySequoiaMistVariant },
};

export function buildSylvaHeroDocument(variant: Exclude<SylvaHeroVariant, "living-green">) {
  const scene = SYLVA_HERO_SCENES[variant];
  // The authored relative asset paths are rewritten to absolute ones rather than steered with
  // <base>: a srcdoc frame's preload scanner resolves against the parent document and ignores
  // <base>, so it would speculatively 404 on every asset before the real parse corrected it.
  const rooted = innerGreenSource
    .replaceAll(SYLVA_HERO_ASSET_DIR, SYLVA_HERO_ASSET_BASE)
    .replace("</head>", `${scene.style}${sylvaHeroChromeStyle(SYLVA_HERO_CHROME_TONES[variant])}</head>`)
    // The Explore button's frosted plate has to be a sibling of its clip rather
    // than a child, so it is one added element rather than a CSS-only change.
    .replace(
      '<div class="pill-clip">',
      '<span class="pill-glass" aria-hidden="true"></span>\n    <div class="pill-clip">',
    );
  if (!rooted.includes("pill-glass")) throw new Error("Sylva hero chrome no longer matches the authored page.");
  return scene.apply(rooted);
}

const SYLVA_HERO_TITLES: Record<SylvaHeroVariant, string> = {
  "living-green": "Sylva — Into the living world",
  "sakura-sunset": "Sylva — Sakura Sunset",
  "maple-autumn": "Sylva — Maple Autumn",
  "sequoia-mist": "Sylva — Sequoia Mist",
};

export function SylvaHero({ variant = "living-green", ...props }: SylvaHeroProps) {
  const safeVariant = SYLVA_HERO_VARIANTS.includes(variant) ? variant : "living-green";
  const [type, frame] = splitTypographyProps(props);
  const customization = usePageTypography(SYLVA_TYPOGRAPHY, type);
  const srcDoc = useMemo(
    () => (safeVariant === "living-green" ? undefined : buildSylvaHeroDocument(safeVariant)),
    [safeVariant],
  );

  return (
    <LandingPageFrame
      {...frame}
      key={safeVariant}
      customization={customization}
      title={SYLVA_HERO_TITLES[safeVariant]}
      sourceUrl={SYLVA_HERO_BASE_URL}
      srcDoc={srcDoc}
    />
  );
}
```

### `src/shaders/landing-pages/pageTypography.ts`

Role: controls-source · 377 lines · 15028 bytes · SHA-256 `809cc65797d531cd3b3ca5a56815d55d24b3ee8d293e4e4bad6fdfe6c83244cc`

```typescript
import { useMemo } from "react";

/* ═══════════════════════════════════════════════════════════════════════
   Typography and colour controls for the packaged landing pages.

   Every page here is a complete authored document served byte-for-byte
   inside a sandboxed frame, so nothing may be rewritten on the way in.
   The controls work the only way that leaves the document untouched: one
   stylesheet appended to the frame's own <head> once it has loaded, which
   restates the page's own selectors with the chosen values.

   At their defaults every override restates exactly what the page already
   says, so a prop-less render paints the authored page and nothing else —
   the same contract Trochil's controls hold.

   Fonts are the one thing a stylesheet cannot conjure. Each page keeps its
   authored face as the first option and its default, and the three shared
   alternatives are only fetched from Google Fonts once one of them is
   actually chosen. So a page that ships self-contained stays request-free
   until the moment you ask it for a face it does not carry.
   ═══════════════════════════════════════════════════════════════════════ */

export type PageFont = {
  value: string;
  label: string;
  stack: string;
  /** Google Fonts css2 family spec. Absent for a face the page already carries. */
  google?: string;
};

/** The three shared alternatives, offered by every page in this family. */
export const INSTRUMENT_SERIF: PageFont = {
  value: "instrument-serif",
  label: "Instrument Serif",
  stack: '"Instrument Serif", Georgia, serif',
  google: "Instrument+Serif",
};

export const NEWSREADER: PageFont = {
  value: "newsreader",
  label: "Newsreader",
  stack: '"Newsreader", Georgia, serif',
  google: "Newsreader:wght@200..700",
};

export const GEIST: PageFont = {
  value: "geist",
  label: "Geist",
  stack: '"Geist", system-ui, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif',
  google: "Geist:wght@100..900",
};

export type PageTypographyProps = {
  headingFont?: string;
  bodyFont?: string;
  headingWeight?: string;
  bodyWeight?: string;
  primaryColor?: string;
  headingSize?: number;
  bodySize?: number;
  headingLetterSpacing?: number;
};

/** Resolved, clamped values plus the colour helpers a recipe writes its CSS with. */
export type PageTypography = {
  heading: string;
  body: string;
  headingWeight: string;
  bodyWeight: string;
  primary: string;
  headingSize: number;
  bodySize: number;
  headingLetterSpacing: number;
  /**
   * Move one of the page's authored colours by the same shift the primary
   * took. Keeps a palette's internal relationships — a lighter tint stays
   * the lighter tint — instead of flattening every accent onto one hex.
   */
  retone: (hex: string) => string;
  /** The same shift applied to an authored `rgb()` / `rgba()` string, alpha kept. */
  retoneRgba: (color: string) => string;
  /**
   * A filter that carries an authored colour onto the primary, for the parts
   * of a page painted in WebGL where no CSS variable can reach.
   * Returns "none" while the primary is untouched.
   */
  filter: (baseHex?: string) => string;
};

export type PageInlineStyleOverride = {
  selector: string;
  styles: Readonly<Record<string, string>>;
};

export type PageTypographyRecipe = {
  headingFonts: readonly PageFont[];
  bodyFonts: readonly PageFont[];
  /** Offered weights, in slider order, and the one the page is authored at. */
  headingWeights: readonly string[];
  headingWeight: string;
  bodyWeights: readonly string[];
  bodyWeight: string;
  /** The page's authored primary, and the base every retone and filter is measured from. */
  primaryColor: `#${string}`;
  /** [min, default, max] */
  headingSize: readonly [number, number, number];
  bodySize: readonly [number, number, number];
  headingLetterSpacing: readonly [number, number, number];
  css: (type: PageTypography) => string;
  inlineStyles?: (type: PageTypography) => readonly PageInlineStyleOverride[];
};

export type LandingPageCustomization = {
  css: string;
  /** Set only when a chosen face has to be fetched. */
  fontHref?: string;
  /**
   * Used only by preserved pages whose authored typography lives in element
   * style attributes. Appended CSS cannot outrank those attributes without
   * priority overrides, so these values are applied to the loaded DOM while the
   * packaged HTML file itself remains byte-exact.
   */
  inlineStyles?: readonly PageInlineStyleOverride[];
};

/* ── colour ──────────────────────────────────────────────────────────── */

type Hsl = { h: number; s: number; l: number };

const clamp01 = (value: number) => Math.min(1, Math.max(0, value));

function normalizeHex(value: string | undefined, fallback: string) {
  if (typeof value !== "string") return fallback;
  const match = value.trim().match(/^#([\da-f]{3}|[\da-f]{6})$/i);
  if (!match) return fallback;
  const digits = match[1].toLowerCase();
  return `#${digits.length === 3 ? digits.replace(/./g, (d) => d + d) : digits}`;
}

function hexToHsl(hex: string): Hsl {
  const [red, green, blue] = [1, 3, 5].map((index) => Number.parseInt(hex.slice(index, index + 2), 16) / 255);
  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  const l = (max + min) / 2;
  const delta = max - min;
  if (delta === 0) return { h: 0, s: 0, l };
  const s = delta / (1 - Math.abs(2 * l - 1));
  const base = max === red
    ? ((green - blue) / delta) % 6
    : max === green ? (blue - red) / delta + 2 : (red - green) / delta + 4;
  return { h: (base * 60 + 360) % 360, s, l };
}

function hslToRgb({ h, s, l }: Hsl) {
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  const [r, g, b] = h < 60 ? [c, x, 0]
    : h < 120 ? [x, c, 0]
    : h < 180 ? [0, c, x]
    : h < 240 ? [0, x, c]
    : h < 300 ? [x, 0, c]
    : [c, 0, x];
  return [r + m, g + m, b + m].map((channel) => Math.round(clamp01(channel) * 255));
}

function hslToHex(hsl: Hsl) {
  return `#${hslToRgb(hsl).map((channel) => channel.toString(16).padStart(2, "0")).join("")}`;
}

/**
 * The shift from the page's authored primary to the chosen one, as a hue
 * rotation and a saturation / lightness ratio. Ratios rather than offsets so
 * a palette keeps its shape: a soft tint stays proportionally soft.
 */
function colorShift(base: string, target: string) {
  const from = hexToHsl(base);
  const to = hexToHsl(target);
  return {
    hue: to.h - from.h,
    saturation: from.s > 0.01 ? Math.min(3, to.s / from.s) : 1,
    lightness: from.l > 0.01 ? Math.min(3, to.l / from.l) : 1,
  };
}

/* ── options ─────────────────────────────────────────────────────────── */

function selectFont(value: string | undefined, options: readonly PageFont[]) {
  return options.find((option) => option.value === value) ?? options[0];
}

function selectWeight(value: string | undefined, options: readonly string[], fallback: string) {
  return options.includes(value as string) ? (value as string) : fallback;
}

function clampRange(value: number | undefined, [min, fallback, max]: readonly [number, number, number]) {
  return Number.isFinite(value) ? Math.min(max, Math.max(min, value as number)) : fallback;
}

function fontHrefFor(fonts: readonly PageFont[]) {
  const families = [...new Set(fonts.map((font) => font.google).filter((family): family is string => Boolean(family)))];
  if (!families.length) return undefined;
  return `https://fonts.googleapis.com/css2?${families.map((family) => `family=${family}`).join("&")}&display=swap`;
}

/**
 * Peel the eight control props off a page's props so the rest can go straight
 * to the frame. Keeps each page component down to the two lines that differ.
 */
export function splitTypographyProps<T extends PageTypographyProps>(props: T) {
  const { headingFont, bodyFont, headingWeight, bodyWeight, primaryColor, headingSize, bodySize, headingLetterSpacing, ...rest } = props;
  const type: PageTypographyProps = {
    headingFont,
    bodyFont,
    headingWeight,
    bodyWeight,
    primaryColor,
    headingSize,
    bodySize,
    headingLetterSpacing,
  };
  return [type, rest as Omit<T, keyof PageTypographyProps>] as const;
}

/* ── the hook every page in this family uses ─────────────────────────── */

export function usePageTypography(recipe: PageTypographyRecipe, props: PageTypographyProps): LandingPageCustomization {
  const { headingFont, bodyFont, headingWeight, bodyWeight, primaryColor, headingSize, bodySize, headingLetterSpacing } = props;

  return useMemo(() => {
    const heading = selectFont(headingFont, recipe.headingFonts);
    const body = selectFont(bodyFont, recipe.bodyFonts);
    const primary = normalizeHex(primaryColor, recipe.primaryColor);
    const untouched = primary === recipe.primaryColor;
    const shift = colorShift(recipe.primaryColor, primary);

    const retone = (hex: string) => {
      if (untouched) return hex;
      const source = hexToHsl(normalizeHex(hex, hex));
      return hslToHex({
        h: (source.h + shift.hue + 360) % 360,
        s: clamp01(source.s * shift.saturation),
        l: clamp01(source.l * shift.lightness),
      });
    };

    const retoneRgba = (color: string) => {
      if (untouched) return color;
      const match = color.match(/^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)\s*(?:[,/]\s*([\d.]+%?)\s*)?\)$/i);
      if (!match) return color;
      const hex = `#${[match[1], match[2], match[3]]
        .map((channel) => Math.round(Number(channel)).toString(16).padStart(2, "0"))
        .join("")}`;
      const [red, green, blue] = [1, 3, 5].map((index) => Number.parseInt(retone(hex).slice(index, index + 2), 16));
      return match[4] === undefined
        ? `rgb(${red}, ${green}, ${blue})`
        : `rgba(${red}, ${green}, ${blue}, ${match[4]})`;
    };

    const filter = (baseHex: string = recipe.primaryColor) => {
      if (untouched) return "none";
      const local = colorShift(baseHex, retone(baseHex));
      return [
        `hue-rotate(${local.hue.toFixed(2)}deg)`,
        `saturate(${Math.max(0, local.saturation).toFixed(3)})`,
        `brightness(${Math.min(2, Math.max(0.2, local.lightness)).toFixed(3)})`,
      ].join(" ");
    };

    const type: PageTypography = {
      heading: heading.stack,
      body: body.stack,
      headingWeight: selectWeight(headingWeight, recipe.headingWeights, recipe.headingWeight),
      bodyWeight: selectWeight(bodyWeight, recipe.bodyWeights, recipe.bodyWeight),
      primary,
      headingSize: clampRange(headingSize, recipe.headingSize),
      bodySize: clampRange(bodySize, recipe.bodySize),
      headingLetterSpacing: clampRange(headingLetterSpacing, recipe.headingLetterSpacing),
      retone,
      retoneRgba,
      filter,
    };

    return { css: recipe.css(type), fontHref: fontHrefFor([heading, body]), inlineStyles: recipe.inlineStyles?.(type) };
  }, [recipe, headingFont, bodyFont, headingWeight, bodyWeight, primaryColor, headingSize, bodySize, headingLetterSpacing]);
}

/* ── injection ───────────────────────────────────────────────────────── */

const STYLE_ID = "threeui-page-typography";
const FONT_LINK_ID = "threeui-page-typography-fonts";
const MESSAGE_TYPE = "threeui-page-customization";

/**
 * Opaque srcDoc frames cannot expose contentDocument to React. This bridge is
 * appended only to the derived srcDoc string and applies the same live style
 * contract from inside the sandbox, leaving the packaged HTML file untouched.
 */
export const PAGE_CUSTOMIZATION_BRIDGE = `<script>
window.addEventListener("message", function (event) {
  var detail = event.data;
  if (!detail || detail.type !== "${MESSAGE_TYPE}") return;
  var head = document.head;
  if (!head) return;

  var link = document.getElementById("${FONT_LINK_ID}");
  if (detail.fontHref) {
    if (!link) {
      link = document.createElement("link");
      link.id = "${FONT_LINK_ID}";
      link.rel = "stylesheet";
      head.appendChild(link);
    }
    if (link.getAttribute("href") !== detail.fontHref) link.href = detail.fontHref;
  } else if (link) {
    link.remove();
  }

  var style = document.getElementById("${STYLE_ID}");
  if (!detail.css) {
    if (style) style.remove();
    return;
  }
  if (!style) {
    style = document.createElement("style");
    style.id = "${STYLE_ID}";
  }
  if (style.textContent !== detail.css) style.textContent = detail.css;
  head.appendChild(style);
});
</script>`;

export function postPageCustomization(frame: HTMLIFrameElement | null, customization?: LandingPageCustomization) {
  frame?.contentWindow?.postMessage({
    type: MESSAGE_TYPE,
    css: customization?.css ?? "",
    fontHref: customization?.fontHref,
  }, "*");
}

/**
 * Appended to the frame's own head rather than written into the document, so
 * the packaged file stays byte-exact. Re-appending on every update keeps the
 * sheet last in the head, which is what lets it win against the page's own
 * rules at equal specificity without a single !important.
 */
export function applyPageCustomization(frame: HTMLIFrameElement | null, customization?: LandingPageCustomization) {
  const frameDocument = frame?.contentDocument;
  if (!frameDocument?.head) return;

  const existingLink = frameDocument.getElementById(FONT_LINK_ID) as HTMLLinkElement | null;
  if (customization?.fontHref) {
    const link = existingLink ?? frameDocument.createElement("link");
    link.id = FONT_LINK_ID;
    link.rel = "stylesheet";
    if (link.getAttribute("href") !== customization.fontHref) link.href = customization.fontHref;
    if (!existingLink) frameDocument.head.append(link);
  } else {
    existingLink?.remove();
  }

  if (!customization?.css) {
    frameDocument.getElementById(STYLE_ID)?.remove();
    return;
  }

  const style = (frameDocument.getElementById(STYLE_ID) as HTMLStyleElement | null) ?? frameDocument.createElement("style");
  style.id = STYLE_ID;
  if (style.textContent !== customization.css) style.textContent = customization.css;
  frameDocument.head.append(style);

  for (const override of customization.inlineStyles ?? []) {
    for (const element of frameDocument.querySelectorAll<HTMLElement>(override.selector)) {
      for (const [property, value] of Object.entries(override.styles)) element.style.setProperty(property, value);
    }
  }
}
```

### `src/shaders/landing-pages/pageRecipes.ts`

Role: controls-source · 1679 lines · 74927 bytes · SHA-256 `c9d9849cc255bac2d1d938d088c50917f84916f1c516d2bbb27fcfd803523233`

```typescript
import {
  GEIST,
  INSTRUMENT_SERIF,
  NEWSREADER,
  type PageFont,
  type PageInlineStyleOverride,
  type PageTypographyRecipe,
} from "./pageTypography";

/* ═══════════════════════════════════════════════════════════════════════
   One recipe per packaged page.

   Each recipe restates the page's own typographic decisions as its defaults,
   so the override sheet is a no-op until something is actually moved. Where a
   page sizes its type with clamp(), the control drives the clamp's ceiling
   and the authored floor and preferred term are left alone — the page keeps
   responding to width exactly as written. Where a page scales off a design
   unit, the control is expressed in that unit. Sizes that ride along with the
   heading or body — a second heading scale, a tightened line-height, a
   narrow-screen step-down — are carried at their authored ratio rather than
   pinned, so the page's internal proportions survive being retuned.
   ═══════════════════════════════════════════════════════════════════════ */

/** Trim float noise from a ratio so the emitted CSS stays readable. */
const n = (value: number) => Number(value.toFixed(3));
const px = (value: number) => `${n(value)}px`;
/** An authored unit-scaled size, kept on the page's own --u. */
const unit = (value: number) => `calc(${n(value)} * var(--u))`;

function withAlpha(hex: string, alpha: number) {
  const [red, green, blue] = [1, 3, 5].map((index) => Number.parseInt(hex.slice(index, index + 2), 16));
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

/* ── the authored faces ──────────────────────────────────────────────── */

const ONEST: PageFont = {
  value: "onest",
  label: "Onest",
  stack: "'Onest', system-ui, -apple-system, 'Helvetica Neue', sans-serif",
};

const LEXEND: PageFont = {
  value: "lexend",
  label: "Lexend",
  stack: "'Lexend', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

const OUTFIT: PageFont = {
  value: "outfit",
  label: "Outfit",
  stack: "Outfit, 'Outfit Fallback', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
};

const SPACE_GROTESK: PageFont = {
  value: "space-grotesk",
  label: "Space Grotesk",
  stack: '"Space Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif',
};

const QUESTRIAL: PageFont = {
  value: "questrial",
  label: "Questrial",
  stack: '"Questrial", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
};

const ANTHRA_DISPLAY: PageFont = {
  value: "avenir-next",
  label: "Avenir Next",
  stack: "'Avenir Next', 'Futura', 'Century Gothic', 'Helvetica Neue', Arial, sans-serif",
};

const ANTHRA_UI: PageFont = {
  value: "avenir-next",
  label: "Avenir Next",
  stack: "'Avenir Next', 'Helvetica Neue', Arial, sans-serif",
};

/** attune embeds both of its faces, so neither one needs fetching. */
const INSTRUMENT_EMBEDDED: PageFont = {
  value: "instrument-serif",
  label: "Instrument Serif",
  stack: "'InstrumentEmb', 'Instrument Serif', Georgia, serif",
};

const INTER_EMBEDDED: PageFont = {
  value: "inter",
  label: "Inter",
  stack: "'InterEmb', Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

const IOWAN_OLD_STYLE: PageFont = {
  value: "iowan-old-style",
  label: "Iowan Old Style",
  stack: '"Iowan Old Style", Baskerville, "Times New Roman", serif',
};

const INTER_LOADED: PageFont = {
  value: "inter",
  label: "Inter",
  stack: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
};

const GEIST_LOADED: PageFont = {
  value: "geist",
  label: "Geist",
  stack: "Geist, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
};

const INSTRUMENT_SERIF_LOADED: PageFont = {
  value: "instrument-serif",
  label: "Instrument Serif",
  stack: '"Instrument Serif", Georgia, "Times New Roman", serif',
};

/** Sketchbook packages Newsreader as a local variable face. */
const NEWSREADER_LOADED: PageFont = {
  value: "newsreader",
  label: "Newsreader",
  stack: '"Newsreader", Georgia, "Times New Roman", serif',
};

const FIGTREE: PageFont = {
  value: "figtree",
  label: "Figtree",
  stack: 'Figtree, system-ui, -apple-system, "Segoe UI", sans-serif',
};

const HANKEN_GROTESK: PageFont = {
  value: "hanken-grotesk",
  label: "Hanken Grotesk",
  stack: '"Hanken Grotesk", system-ui, -apple-system, "Segoe UI", sans-serif',
};

const MULISH: PageFont = {
  value: "mulish",
  label: "Mulish",
  stack: "Mulish, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

const DM_SANS: PageFont = {
  value: "dm-sans",
  label: "DM Sans",
  stack: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

const ROBOTO_FLEX_LOADED: PageFont = {
  value: "roboto-flex",
  label: "Roboto Flex",
  stack: '"Roboto Flex", "Roboto Condensed", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
};

/* ── Anima ────────────────────────────────────────────────────────────────
   The opening statement is the adjustable heading while the colossal Anima
   wordmark keeps its authored viewport scale and spacing. The same chosen
   face and weight still carry across both so the composition stays coherent.
   The accent retunes the interface marks and the point field follows through
   a canvas filter when the authored near-white is moved. */
export const ANIMA_TYPOGRAPHY: PageTypographyRecipe = {
  headingFonts: [GEIST_LOADED, INSTRUMENT_SERIF, NEWSREADER],
  bodyFonts: [GEIST_LOADED, NEWSREADER, INSTRUMENT_SERIF],
  headingWeights: ["400", "500", "600"],
  headingWeight: "400",
  bodyWeights: ["400", "500", "600"],
  bodyWeight: "400",
  primaryColor: "#ededf0",
  headingSize: [38, 62, 88],
  bodySize: [12, 15.6, 22],
  headingLetterSpacing: [-0.08, -0.022, 0.1],
  css: (type) => `
:root {
  --sans: ${type.body};
  --accent: ${type.primary};
  --accent-soft: ${type.retone("#9c9ca4")};
}
body { font-family: ${type.body}; font-weight: ${type.bodyWeight}; }
.lede, .wordmark {
  font-family: ${type.heading};
  font-weight: ${type.headingWeight};
}
.lede {
  font-size: ${px(type.headingSize)};
  line-height: ${px((type.headingSize * 70) / 62)};
  letter-spacing: ${type.headingLetterSpacing}em;
}
.sub { font-size: ${px(type.bodySize)}; font-weight: ${type.bodyWeight}; }
.brand .mark path { stroke: ${type.primary}; }
.brand .mark circle { fill: ${type.retone("#9c9ca4")}; }
#gl { filter: ${type.filter()}; }
@media (max-width: 1180px) {
  .lede { font-size: ${px((type.headingSize * 50) / 62)}; line-height: ${px((type.headingSize * 57) / 62)}; }
}
@media (max-width: 900px) {
  .lede { font-size: ${px((type.headingSize * 42) / 62)}; line-height: ${px((type.headingSize * 49) / 62)}; }
}
@media (max-width: 600px) {
  .lede {
    font-size: ${px((type.headingSize * 33) / 62)};
    line-height: ${px((type.headingSize * 40) / 62)};
    letter-spacing: ${n(type.headingLetterSpacing + 0.004)}em;
  }
  .sub { font-size: ${px((type.bodySize * 13.8) / 15.6)}; }
}
`,
};

/* ── Aster Halftone Bloom ─────────────────────────────────────────────────
   Aster's statement uses the ceiling of an authored clamp and the lede rides
   a second responsive custom property. Its signature colour lives entirely
   in the WebGL rose, so the primary control reaches the scene as a filter and
   leaves the neutral glass interface unchanged at the authored default. */
export const ASTER_HALFTONE_TYPOGRAPHY: PageTypographyRecipe = {
  headingFonts: [ROBOTO_FLEX_LOADED, INSTRUMENT_SERIF, NEWSREADER, GEIST],
  bodyFonts: [ROBOTO_FLEX_LOADED, GEIST, NEWSREADER, INSTRUMENT_SERIF],
  headingWeights: ["300", "400", "500", "600", "700"],
  headingWeight: "400",
  bodyWeights: ["300", "400", "500", "600"],
  bodyWeight: "400",
  primaryColor: "#ff570e",
  headingSize: [64, 140, 176],
  bodySize: [14, 21, 30],
  headingLetterSpacing: [-0.08, 0, 0.12],
  css: (type) => `
:root {
  --font: ${type.body};
  --body: clamp(16px, 1.17vw, ${px(type.bodySize)});
}
body { font-family: ${type.body}; font-weight: ${type.bodyWeight}; }
h1 {
  font-family: ${type.heading};
  font-size: clamp(38px, 7vw, ${px(type.headingSize)});
  font-weight: ${type.headingWeight};
  font-variation-settings: "wdth" 73, "wght" ${type.headingWeight}, "opsz" 30;
  letter-spacing: ${type.headingLetterSpacing}em;
}
.lede, .ghost { font-weight: ${type.bodyWeight}; }
#gl { filter: ${type.filter()}; }
@media (max-width: 780px) {
  h1 { font-size: clamp(34px, 9.4vw, ${px((type.headingSize * 66) / 140)}); }
}
`,
};

/* ── Skyfield ─────────────────────────────────────────────────────────────
   The opening headline and final descent statement share one responsive
   display scale. Mid-journey labels retain their compact authored sizing,
   while the lede follows the body control. The lime control carries through
   the HUD, scan rail, CTAs, and the terrain scene itself. */
export const SKYFIELD_TYPOGRAPHY: PageTypographyRecipe = {
  headingFonts: [GEIST_LOADED, INSTRUMENT_SERIF, NEWSREADER],
  bodyFonts: [GEIST_LOADED, NEWSREADER, INSTRUMENT_SERIF],
  headingWeights: ["400", "500", "600"],
  headingWeight: "500",
  bodyWeights: ["400", "500", "600"],
  bodyWeight: "400",
  primaryColor: "#c6f19d",
  headingSize: [42, 74, 104],
  bodySize: [12, 15.5, 22],
  headingLetterSpacing: [-0.08, -0.05, 0.08],
  css: (type) => `
:root {
  --sans: ${type.body};
  --lime: ${type.primary};
  --lime-hot: ${type.retone("#a8e063")};
}
body { font-family: ${type.body}; font-weight: ${type.bodyWeight}; }
h1, h1 .ln b, #outro h2 {
  font-family: ${type.heading};
  font-weight: ${type.headingWeight};
}
h1 {
  font-size: clamp(30px, 5.05vw, ${px(type.headingSize)});
  letter-spacing: ${type.headingLetterSpacing}em;
}
#outro h2 {
  font-size: clamp(28px, 4.3vw, ${px((type.headingSize * 62) / 74)});
  letter-spacing: ${n(type.headingLetterSpacing + 0.005)}em;
}
.lede { font-size: clamp(13px, 1.06vw, ${px(type.bodySize)}); font-weight: ${type.bodyWeight}; }
#gl { filter: ${type.filter()}; }
@media (max-width: 820px) {
  h1 {
    font-size: clamp(27px, 8.4vw, ${px((type.headingSize * 46) / 74)});
    letter-spacing: ${n(type.headingLetterSpacing + 0.008)}em;
  }
  #outro h2 { font-size: clamp(26px, 7.6vw, ${px((type.headingSize * 44) / 74)}); }
  .lede { font-size: ${px((type.bodySize * 13) / 15.5)}; }
}
`,
};

const INTER_TIGHT: PageFont = {
  value: "inter-tight",
  label: "Inter Tight",
  stack: "'Inter Tight', sans-serif",
};

const DM_MONO: PageFont = {
  value: "dm-mono",
  label: "DM Mono",
  stack: "'DM Mono', monospace",
};

const SYSTEM_UI: PageFont = {
  value: "system-ui",
  label: "System UI",
  stack: "ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
};

const BIG_SHOULDERS_DISPLAY: PageFont = {
  value: "big-shoulders-display",
  label: "Big Shoulders Display",
  stack: "'Big Shoulders Display', sans-serif",
};

const BEBAS_NEUE: PageFont = {
  value: "bebas-neue",
  label: "Bebas Neue",
  stack: "'Bebas Neue', sans-serif",
};

const IMPACT: PageFont = {
  value: "impact",
  label: "Impact",
  stack: "Impact, 'Arial Narrow', sans-serif",
};

const ARCHIVO: PageFont = {
  value: "archivo",
  label: "Archivo",
  stack: "Archivo, 'Helvetica Neue', Helvetica, Arial, sans-serif",
};

const JETBRAINS_MONO: PageFont = {
  value: "jetbrains-mono",
  label: "JetBrains Mono",
  stack: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
};

const UNBOUNDED: PageFont = {
  value: "unbounded",
  label: "Unbounded",
  stack: "'Unbounded', sans-serif",
};

const MANROPE: PageFont = {
  value: "manrope",
  label: "Manrope",
  stack: "'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

/* ── Kage ────────────────────────────────────────────────────────────────
   Two display scales, .h-hero and .h-sec, both clamped. The control drives
   the hero ceiling and the section ceiling follows at its authored 60/46.
   Headings carrying .jp are left out: that class selects the Japanese face,
   and it would lose the cascade to a bare element selector. */
export const KAGE_TYPOGRAPHY: PageTypographyRecipe = {
  headingFonts: [ONEST, INSTRUMENT_SERIF, NEWSREADER, GEIST],
  bodyFonts: [ONEST, GEIST, NEWSREADER, INSTRUMENT_SERIF],
  headingWeights: ["400", "500", "600", "700"],
  headingWeight: "400",
  bodyWeights: ["300", "400", "500", "600"],
  bodyWeight: "300",
  primaryColor: "#e0231c",
  headingSize: [30, 46, 72],
  bodySize: [13, 17, 24],
  headingLetterSpacing: [-0.06, -0.012, 0.12],
  css: (type) => `
:root {
  --vermilion: ${type.primary};
  --ember: ${type.retone("#ff5a3c")};
}
body { font-family: ${type.body}; }
body, .body, .body-lg, .num { font-weight: ${type.bodyWeight}; }
h1:not(.jp), h2:not(.jp), h3:not(.jp), .display:not(.jp) {
  font-family: ${type.heading};
  font-weight: ${type.headingWeight};
}
.display { letter-spacing: ${type.headingLetterSpacing}em; }
.h-hero { font-size: clamp(26px, 3.05vw, ${px(type.headingSize)}); }
.h-sec { font-size: clamp(30px, 4vw, ${px((type.headingSize * 60) / 46)}); }
.body-lg { font-size: clamp(14px, 1.02vw, ${px(type.bodySize)}); }
.body { font-size: ${px(Math.max(11, type.bodySize - 3))}; }
`,
};

/* ── Sylva ───────────────────────────────────────────────────────────────
   The world behind the copy already has four authored dressings, so the
   colour control here is the ink rather than the scene: it moves the hero
   type and the two tints the page derives from it, and leaves the moss to
   the variants. Sizes ride the page's own --u design unit. */
export const SYLVA_TYPOGRAPHY: PageTypographyRecipe = {
  headingFonts: [LEXEND, INSTRUMENT_SERIF, NEWSREADER, GEIST],
  bodyFonts: [LEXEND, GEIST, NEWSREADER, INSTRUMENT_SERIF],
  headingWeights: ["200", "300", "400", "500", "600"],
  headingWeight: "300",
  bodyWeights: ["200", "300", "400", "500"],
  bodyWeight: "300",
  primaryColor: "#ffffff",
  headingSize: [40, 63, 92],
  bodySize: [12, 16.5, 24],
  headingLetterSpacing: [-0.06, -0.006, 0.12],
  css: (type) => `
:root {
  --ink: ${type.primary};
  --ink-soft: ${withAlpha(type.primary, 0.62)};
  --ink-faint: ${withAlpha(type.primary, 0.44)};
}
body { font-family: ${type.body}; font-weight: ${type.bodyWeight}; }
.headline, .ghost {
  font-family: ${type.heading};
}
.headline {
  font-weight: ${type.headingWeight};
  font-size: ${unit(type.headingSize)};
  line-height: ${unit((type.headingSize * 65) / 63)};
  letter-spacing: ${type.headingLetterSpacing}em;
}
.lede {
  font-weight: ${type.bodyWeight};
  font-size: ${unit(type.bodySize)};
  line-height: ${unit((type.bodySize * 22) / 16.5)};
}
@media (max-width: 900px) {
  .headline {
    font-size: ${unit((type.headingSize * 62) / 63)};
    line-height: ${unit((type.headingSize * 66) / 63)};
  }
  .lede {
    font-size: ${unit((type.bodySize * 19) / 16.5)};
    line-height: ${unit((type.bodySize * 27) / 16.5)};
  }
}
`,
};

/* ── Meng To Sketchbook ─────────────────────────────────────────────────
   The page's hierarchy is intentionally quiet: its display scale is the
   nameplate and plate titles, while the biography anchors the body scale.
   The recipe keeps those authored ratios together and leaves the paintings,
   paper wash, shadows, and page-curl lighting untouched. */
export const MENG_TO_SKETCHBOOK_TYPOGRAPHY: PageTypographyRecipe = {
  headingFonts: [INSTRUMENT_SERIF_LOADED, NEWSREADER_LOADED, GEIST],
  bodyFonts: [NEWSREADER_LOADED, GEIST, INSTRUMENT_SERIF_LOADED],
  headingWeights: ["300", "400", "500", "600"],
  headingWeight: "400",
  bodyWeights: ["200", "300", "400", "500", "600"],
  bodyWeight: "400",
  primaryColor: "#2b2721",
  headingSize: [20, 30, 48],
  bodySize: [14, 20, 30],
  headingLetterSpacing: [-0.06, 0.01, 0.12],
  css: (type) => `
:root {
  --ink: ${type.primary};
  --ink-soft: ${withAlpha(type.primary, 0.58)};
  --ink-faint: ${withAlpha(type.primary, 0.36)};
  --hairline: ${withAlpha(type.primary, 0.14)};
  --display: ${type.heading};
  --font: ${type.body};
}
body { font-family: ${type.body}; font-weight: ${type.bodyWeight}; }
.top .name, .plate .t { font-family: ${type.heading}; font-weight: ${type.headingWeight}; }
.top .name {
  font-size: clamp(${px((type.headingSize * 24) / 30)}, calc(${n(type.headingSize / 30)} * 2.4vw), ${px(type.headingSize)});
  letter-spacing: ${type.headingLetterSpacing}em;
}
.plate .t {
  font-size: clamp(${px((type.headingSize * 19) / 30)}, calc(${n(type.headingSize / 30)} * 2.1vw), ${px((type.headingSize * 26) / 30)});
  letter-spacing: ${n(type.headingLetterSpacing - 0.01)}em;
}
.top nav { font-size: ${px((type.bodySize * 15) / 20)}; font-weight: ${type.bodyWeight === "400" ? "300" : type.bodyWeight}; }
.hero-kicker { font-size: ${px((type.bodySize * 12) / 20)}; font-weight: ${type.bodyWeight}; }
.sb-caption { font-size: ${px((type.bodySize * 13) / 20)}; }
.sb-hint, .section-label, .zoom-read { font-size: ${px((type.bodySize * 11) / 20)}; }
.bio {
  font-size: clamp(${px((type.bodySize * 17) / 20)}, calc(${n(type.bodySize / 20)} * 1.7vw), ${px(type.bodySize)});
  font-weight: ${type.bodyWeight === "400" ? "300" : type.bodyWeight};
}
.plate .n { font-size: ${px((type.bodySize * 12) / 20)}; }
.plate .p { font-size: ${px((type.bodySize * 12.5) / 20)}; }
.foot { font-size: ${px((type.bodySize * 11.5) / 20)}; }
::selection { background: ${withAlpha(type.primary, 0.85)}; }
.bio-link { text-decoration-color: ${withAlpha(type.primary, 0.28)}; }
@media (max-width: 640px) {
  .top .name { font-size: ${px((type.headingSize * 20) / 30)}; }
  .top nav { font-size: ${px((type.bodySize * 13) / 20)}; }
  .hero-kicker { font-size: ${px((type.bodySize * 10.5) / 20)}; }
  .sb-hint { font-size: ${px((type.bodySize * 9.5) / 20)}; }
}
`,
};

/* ── Echo Vale ─────────────────────────────────────────────────────────
   Unbounded carries the page's display hierarchy while Manrope handles the
   long-form field notes. The heading control follows the 6.7rem hero cap and
   scales every other display size and responsive clamp at the authored ratio.
   Echo's ember is also the WebGL point colour, so the canvas receives the same
   colour shift as the CSS accents instead of leaving a red particle layer
   behind when the palette changes. */
export const ECHO_VALE_TYPOGRAPHY: PageTypographyRecipe = {
  headingFonts: [UNBOUNDED, INSTRUMENT_SERIF, NEWSREADER, GEIST],
  bodyFonts: [MANROPE, GEIST, NEWSREADER, INSTRUMENT_SERIF],
  headingWeights: ["300", "400", "500", "600"],
  headingWeight: "500",
  bodyWeights: ["300", "400", "500", "600"],
  bodyWeight: "400",
  primaryColor: "#e44b3c",
  headingSize: [56, 107.2, 144],
  bodySize: [12, 16, 24],
  headingLetterSpacing: [-0.1, -0.07, 0.06],
  css: (type) => `
:root { --ember: ${type.primary}; }
body {
  font-family: ${type.body};
  font-size: ${px(type.bodySize)};
  font-weight: ${type.bodyWeight};
}
.display,
.loader-count,
.hero-copy h1,
.hero-foot-item b,
.intro h2,
.section-head h2,
.feature-card h3,
.show-step h3,
.show-step .step-no,
.gallery-head h2,
.gallery-meta h3,
.timeline-item h3,
.price-card h3,
.price,
.quote:first-child blockquote,
.faq-title h2,
.faq-question span:first-child,
.cta h2,
.nav-links a {
  font-family: ${type.heading};
}
.hero-copy h1,
.intro h2,
.section-head h2,
.feature-card h3,
.show-step h3,
.show-step .step-no,
.gallery-head h2,
.gallery-meta h3,
.timeline-item h3,
.price-card h3,
.price,
.faq-title h2,
.faq-question span:first-child,
.cta h2 {
  font-weight: ${type.headingWeight};
}
.hero-copy h1 {
  font-size: clamp(${px((type.headingSize * 2.7) / 6.7)}, calc(${n(type.headingSize / 107.2)} * 5.75vw), ${px(type.headingSize)});
  letter-spacing: ${type.headingLetterSpacing}em;
}
.intro h2 {
  font-size: clamp(${px((type.headingSize * 3) / 6.7)}, calc(${n(type.headingSize / 107.2)} * 7.2vw), ${px((type.headingSize * 8) / 6.7)});
  letter-spacing: ${type.headingLetterSpacing}em;
}
.section-head h2 {
  font-size: clamp(${px((type.headingSize * 2.4) / 6.7)}, calc(${n(type.headingSize / 107.2)} * 5vw), ${px((type.headingSize * 5.7) / 6.7)});
  letter-spacing: ${n(type.headingLetterSpacing + 0.005)}em;
}
.show-step h3 {
  font-size: clamp(${px((type.headingSize * 2.1) / 6.7)}, calc(${n(type.headingSize / 107.2)} * 3.7vw), ${px((type.headingSize * 4.6) / 6.7)});
  letter-spacing: ${n(type.headingLetterSpacing + 0.01)}em;
}
.gallery-head h2 {
  font-size: clamp(${px((type.headingSize * 3) / 6.7)}, calc(${n(type.headingSize / 107.2)} * 6vw), ${px((type.headingSize * 7) / 6.7)});
  letter-spacing: ${type.headingLetterSpacing}em;
}
.price-card h3 {
  font-size: clamp(${px((type.headingSize * 2) / 6.7)}, calc(${n(type.headingSize / 107.2)} * 3vw), ${px((type.headingSize * 3.3) / 6.7)});
  letter-spacing: ${n(type.headingLetterSpacing + 0.01)}em;
}
.price {
  font-size: clamp(${px((type.headingSize * 3.8) / 6.7)}, calc(${n(type.headingSize / 107.2)} * 6vw), ${px((type.headingSize * 7.2) / 6.7)});
  letter-spacing: ${n(type.headingLetterSpacing - 0.01)}em;
}
.faq-title h2 {
  font-size: clamp(${px((type.headingSize * 3) / 6.7)}, calc(${n(type.headingSize / 107.2)} * 5vw), ${px((type.headingSize * 5.8) / 6.7)});
  letter-spacing: ${type.headingLetterSpacing}em;
}
.cta h2 {
  font-size: clamp(${px((type.headingSize * 3.1) / 6.7)}, calc(${n(type.headingSize / 107.2)} * 8.2vw), ${px((type.headingSize * 9.6) / 6.7)});
  letter-spacing: ${n(type.headingLetterSpacing - 0.01)}em;
}
.feature-card h3,
.gallery-meta h3 { letter-spacing: ${n(type.headingLetterSpacing + 0.03)}em; }
.timeline-item h3 { letter-spacing: ${n(type.headingLetterSpacing + 0.07)}em; }
.faq-question span:first-child { letter-spacing: ${n(type.headingLetterSpacing + 0.04)}em; }
.quote:first-child blockquote { letter-spacing: ${n(type.headingLetterSpacing + 0.015)}em; }
.hero-copy p {
  font-size: clamp(${px(type.bodySize * 0.8)}, calc(${n(type.bodySize / 16)} * 1vw), ${px(type.bodySize)});
}
.feature-card p { font-size: ${px(type.bodySize * 0.85)}; }
.timeline-item p, .footer-brand p { font-size: ${px(type.bodySize * 0.8)}; }
.price-list li { font-size: ${px(type.bodySize * 0.82)}; }
.footer-col a { font-size: ${px(type.bodySize * 0.79)}; }
.show-step .step-no { color: ${type.retone("#b53b31")}; }
#webgl { filter: ${type.filter()}; }
.feature-card:nth-child(2) .feature-symbol::after {
  box-shadow: 0 0 25px ${withAlpha(type.primary, 0.35)};
}
.timeline-item::before { box-shadow: 0 0 24px ${withAlpha(type.primary, 0.7)}; }
.hero-peek figure.active {
  box-shadow: 0 0 0 1px ${withAlpha(type.primary, 0.28)}, 0 16px 42px rgba(0, 0, 0, 0.32);
}
.hero-peek figure.active::before { box-shadow: 0 0 14px ${withAlpha(type.primary, 0.8)}; }
@media (max-width: 900px) {
  .hero-copy h1 {
    font-size: clamp(${px((type.headingSize * 2.55) / 6.7)}, calc(${n(type.headingSize / 107.2)} * 10vw), ${px((type.headingSize * 5.5) / 6.7)});
  }
}
`,
};

/* ── Anthra A-40 ─────────────────────────────────
   The display and UI stacks are both authored from Avenir Next, while the
   large cover mark and compact section headings use separate responsive
   scales. The colour control owns the brass interface accent only; the
   procedural titanium watch and its four material finishes stay authored. */
export const ANTHRA_A40_TYPOGRAPHY: PageTypographyRecipe = {
  headingFonts: [ANTHRA_DISPLAY, INSTRUMENT_SERIF, NEWSREADER, GEIST],
  bodyFonts: [ANTHRA_UI, GEIST, NEWSREADER, INSTRUMENT_SERIF],
  headingWeights: ["300", "400", "500", "600", "700"],
  headingWeight: "500",
  bodyWeights: ["300", "400", "500", "600"],
  bodyWeight: "400",
  primaryColor: "#c2a26a",
  headingSize: [34, 52, 76],
  bodySize: [13, 18, 24],
  headingLetterSpacing: [-0.08, -0.01, 0.08],
  css: (type) => `
:root {
  --display: ${type.heading};
  --ui: ${type.body};
  --brass: ${type.primary};
}
body { font-family: ${type.body}; font-weight: ${type.bodyWeight}; }
.plate h1, .plate h2 {
  font-family: ${type.heading};
  font-weight: ${type.headingWeight};
  letter-spacing: ${type.headingLetterSpacing}em;
}
.plate .mark {
  font-family: ${type.heading};
  font-weight: ${Math.min(900, Number(type.headingWeight) + 100)};
}
.plate h1.mark { font-size: calc(${n(type.headingSize / 52)} * 11vw); }
.plate h2:not(.mark) {
  font-size: clamp(30px, calc(${n(type.headingSize / 52)} * 3.1vw), ${px(type.headingSize)});
}
.lead {
  font-family: ${type.body};
  font-weight: ${type.bodyWeight};
  font-size: clamp(15px, calc(${n(type.bodySize / 18)} * 1vw), ${px(type.bodySize)});
}
@media (max-width: 900px) {
  .plate h1.mark { font-size: calc(${n(type.headingSize / 52)} * 22vw); }
  .plate h2:not(.mark) { font-size: calc(${n(type.headingSize / 52)} * 7.4vw); }
  .lead { font-size: ${px((type.bodySize * 15) / 18)}; }
}
`,
};

/* ── NOEMA N1 ───────────────────────────────────────────────────────────
   NOEMA's display face and compact body copy are authored in Inter Tight;
   DM Mono remains reserved for telemetry and labels. The heading slider
   carries the page's different responsive heading ceilings at their authored
   ratios, while the violet interface accent stays separate from the robot's
   WebGL materials. */
export const NOEMA_N1_TYPOGRAPHY: PageTypographyRecipe = {
  headingFonts: [INTER_TIGHT, INSTRUMENT_SERIF, NEWSREADER, GEIST],
  bodyFonts: [INTER_TIGHT, GEIST, NEWSREADER, INSTRUMENT_SERIF],
  headingWeights: ["300", "400", "500", "600", "700"],
  headingWeight: "400",
  bodyWeights: ["400", "500", "600", "700"],
  bodyWeight: "500",
  primaryColor: "#6c4cf1",
  headingSize: [34, 50, 76],
  bodySize: [12, 15, 22],
  headingLetterSpacing: [-0.07, -0.028, 0.08],
  css: (type) => `
:root {
  --disp: ${type.heading};
  --vio: ${type.primary};
  --vio-soft: ${withAlpha(type.primary, 0.14)};
}
body, button, input { font-family: ${type.body}; font-weight: ${type.bodyWeight}; }
h1, h2, h3 {
  font-family: ${type.heading};
  font-weight: ${type.headingWeight};
  letter-spacing: ${type.headingLetterSpacing}em;
}
.hero .line h1 { font-size: clamp(26px, 2.6vw, ${px((type.headingSize * 40) / 50)}); }
.beat h2, .knoll .cap h2 { font-size: clamp(26px, 3vw, ${px((type.headingSize * 44) / 50)}); }
.sheethead h2 { font-size: clamp(34px, 5vw, ${px((type.headingSize * 74) / 50)}); }
.inside .nm h2 { font-size: clamp(42px, 6.6vw, ${px((type.headingSize * 110) / 50)}); }
.grip h2 { font-size: clamp(28px, 3.4vw, ${px((type.headingSize * 48) / 50)}); }
.reelsec h2, .reserve h2 { font-size: clamp(28px, 3.6vw, ${px(type.headingSize)}); }
.beat p, .inside .nm p, .inside .stack p {
  font-size: ${px(type.bodySize)};
  font-weight: ${type.bodyWeight};
}
.grip p.lead, .reserve .price { font-size: ${px((type.bodySize * 15.5) / 15)}; }
`,
};

/* ── MK·78 Keyboard ─────────────────────────────────────────────────────
   The product story is authored entirely in the platform UI stack. Its
   oversized hero, chapter headings, and end card use distinct ceilings, so
   the heading control scales those ceilings together and leaves the keyboard
   legends and mono telemetry at their intentionally tiny sizes. */
export const MK78_KEYBOARD_TYPOGRAPHY: PageTypographyRecipe = {
  headingFonts: [SYSTEM_UI, INSTRUMENT_SERIF, NEWSREADER, GEIST],
  bodyFonts: [SYSTEM_UI, GEIST, NEWSREADER, INSTRUMENT_SERIF],
  headingWeights: ["400", "500", "600", "650", "700"],
  headingWeight: "650",
  bodyWeights: ["300", "400", "500", "600"],
  bodyWeight: "400",
  primaryColor: "#f4581c",
  headingSize: [40, 60, 88],
  bodySize: [13, 16.5, 23],
  headingLetterSpacing: [-0.07, -0.03, 0.06],
  css: (type) => `
:root { --acc: ${type.primary}; }
body, button { font-family: ${type.body}; font-weight: ${type.bodyWeight}; }
h1, h2, h3 {
  font-family: ${type.heading};
  font-weight: ${type.headingWeight};
  letter-spacing: ${type.headingLetterSpacing}em;
}
#hero h1 { font-size: clamp(58px, 11.5vw, ${px((type.headingSize * 178) / 60)}); }
#statement h2 { font-size: clamp(26px, 3.6vw, ${px((type.headingSize * 48) / 60)}); }
#craft .copy h2, #lineage .lcopy h2 { font-size: clamp(26px, 3vw, ${px((type.headingSize * 38) / 60)}); }
.fhead h2 { font-size: clamp(30px, 4.2vw, ${px((type.headingSize * 54) / 60)}); }
.vgrid h2 { font-size: clamp(30px, 3.6vw, ${px((type.headingSize * 50) / 60)}); }
#finish h2 { font-size: clamp(34px, 4.6vw, ${px(type.headingSize)}); }
#end > h2 { font-size: clamp(38px, 5.4vw, ${px((type.headingSize * 72) / 60)}); }
#hero .sub { font-size: clamp(15px, 1.6vw, ${px((type.bodySize * 19) / 16.5)}); }
#craft .copy p { font-size: ${px((type.bodySize * 16) / 16.5)}; }
#lineage .lcopy p { font-size: ${px((type.bodySize * 15.5) / 16.5)}; }
.fhead p, .vgrid p { font-size: ${px(type.bodySize)}; }
`,
};

/* ── Mara Voss ──────────────────────────────────────────────────────────
   The archive uses Big Shoulders Display for its condensed editorial voice
   and Inter for long reading. The 5.2rem chapter ceiling is the shared scale
   anchor; larger hero, silence, and footer moments follow at their authored
   ratios. Ember is the active signal colour, leaving violet and amber status
   semantics untouched. */
export const MARA_VOSS_TYPOGRAPHY: PageTypographyRecipe = {
  headingFonts: [BIG_SHOULDERS_DISPLAY, INSTRUMENT_SERIF, NEWSREADER, GEIST],
  bodyFonts: [INTER_LOADED, GEIST, NEWSREADER, INSTRUMENT_SERIF],
  headingWeights: ["400", "500", "600", "700", "800"],
  headingWeight: "600",
  bodyWeights: ["300", "400", "500", "600"],
  bodyWeight: "300",
  primaryColor: "#d4552b",
  headingSize: [56, 83.2, 124],
  bodySize: [14, 17.6, 24],
  headingLetterSpacing: [-0.04, 0.02, 0.1],
  css: (type) => `
:root {
  --font-display: ${type.heading};
  --font-body: ${type.body};
  --ember: ${type.primary};
}
body { font-family: ${type.body}; font-weight: ${type.bodyWeight}; }
.bio-title, .rec-statement, .method-title { font-weight: ${type.headingWeight}; }
.bio-title, .rec-statement, .method-title, .cat-title, .silence-title, .footer-title {
  letter-spacing: ${type.headingLetterSpacing}em;
}
.hero-title { font-size: clamp(5rem, 17vw, ${px((type.headingSize * 256) / 83.2)}); letter-spacing: ${n(type.headingLetterSpacing + 0.01)}em; }
.bio-title, .cat-title, .method-title { font-size: clamp(2.6rem, 5.5vw, ${px(type.headingSize)}); }
.rec-statement { font-size: clamp(2.4rem, 6vw, ${px((type.headingSize * 86.4) / 83.2)}); }
.beat-line { font-size: clamp(2.4rem, 5.5vw, ${px((type.headingSize * 80) / 83.2)}); }
.silence-title { font-size: clamp(2.8rem, 7vw, ${px((type.headingSize * 112) / 83.2)}); }
.footer-title { font-size: clamp(3.2rem, 10vw, ${px((type.headingSize * 152) / 83.2)}); }
.bio-text { font-size: clamp(1rem, 1.35vw, ${px((type.bodySize * 18.4) / 17.6)}); font-weight: ${type.bodyWeight}; }
.method-body { font-size: clamp(.98rem, 1.3vw, ${px(type.bodySize)}); font-weight: ${type.bodyWeight}; }
.idx-note { font-size: clamp(.78rem, .92vw, ${px((type.bodySize * 15.36) / 17.6)}); }
.log-text { font-size: clamp(.86rem, 1vw, ${px((type.bodySize * 16) / 17.6)}); }
`,
};

/* ── Aurello ────────────────────────────────────────────────────────────
   Bebas Neue supplies the tall campaign voice while DM Sans carries the
   utility copy. A 145px chapter heading anchors the many oversized scales;
   the slab-serif product name remains a deliberate brand contrast. The red,
   ink, and wine CSS tones move as one palette without filtering the 3D can. */
export const AURELLO_TYPOGRAPHY: PageTypographyRecipe = {
  headingFonts: [BEBAS_NEUE, INSTRUMENT_SERIF, NEWSREADER, GEIST],
  bodyFonts: [DM_SANS, GEIST, NEWSREADER, INSTRUMENT_SERIF],
  headingWeights: ["300", "400", "500", "600", "700"],
  headingWeight: "400",
  bodyWeights: ["300", "400", "500", "600"],
  bodyWeight: "400",
  primaryColor: "#f04a24",
  headingSize: [92, 145, 210],
  bodySize: [14, 18, 25],
  headingLetterSpacing: [-0.06, 0, 0.08],
  css: (type) => `
:root {
  --red: ${type.primary};
  --ink: ${type.retone("#c92f19")};
  --wine: ${type.retone("#731f17")};
}
body, button, input { font-family: ${type.body}; font-weight: ${type.bodyWeight}; }
.hero h1 span:first-child, .intro h2, .social h2, .gas h2, .eyebrow,
.products h2, .card h3, .contact h2, .ingredients h2, .faq h2,
.footer-cta, .intro-lens-reveal__copy h2, .visual-frame__copy h2,
.range-intro h2, .flavor-copy h3, .flavor-selector__heading h2,
.flavor-selector__detail h3, .can-collection__intro h2, .can-product-card h3 {
  font-family: ${type.heading};
  font-weight: ${type.headingWeight};
}
.intro h2 { font-size: clamp(62px, 9vw, ${px((type.headingSize * 150) / 145)}); }
.social h2 { font-size: clamp(38px, 4.5vw, ${px((type.headingSize * 76) / 145)}); }
.gas h2 { font-size: clamp(76px, 10vw, ${px((type.headingSize * 160) / 145)}); }
.products h2, .can-collection__intro h2 { font-size: clamp(76px, 11vw, ${px((type.headingSize * 175) / 145)}); }
.contact h2 { font-size: clamp(72px, 8vw, ${px((type.headingSize * 138) / 145)}); }
.faq h2, .footer-cta, .intro-lens-reveal__copy h2, .visual-frame__copy h2, .range-intro h2 {
  font-size: clamp(62px, 8.7vw, ${px(type.headingSize)});
  letter-spacing: ${type.headingLetterSpacing}em;
}
.flavor-selector__heading h2 { font-size: clamp(54px, 6vw, ${px((type.headingSize * 100) / 145)}); }
.flavor-selector__detail h3 { font-size: clamp(50px, 5.8vw, ${px((type.headingSize * 92) / 145)}); }
.intro p { font-size: clamp(17px, 1.4vw, ${px((type.bodySize * 24) / 18)}); }
.products-intro > p:last-child, .ingredients-head p, .faq-intro > p, .can-collection__intro p:last-child {
  font-size: ${px(type.bodySize)};
  font-weight: ${type.bodyWeight};
}
`,
};

/* ── RenderLab ──────────────────────────────────────────────────────────
   RenderLab is a preserved single-file export with most display typography
   authored directly in style attributes. The inline map below restates those
   exact values at the defaults, then gives the same controls as the stylesheet
   recipes without overpowering the authored cascade. The variable Roboto Flex pressure
   wordmark remains its own authored interaction. */
export const RENDERLAB_TYPOGRAPHY: PageTypographyRecipe = {
  headingFonts: [IMPACT, INSTRUMENT_SERIF, NEWSREADER, GEIST],
  bodyFonts: [INTER_LOADED, GEIST, NEWSREADER, INSTRUMENT_SERIF],
  headingWeights: ["300", "400", "500", "600", "700"],
  headingWeight: "500",
  bodyWeights: ["300", "400", "500", "600"],
  bodyWeight: "400",
  primaryColor: "#02ff6f",
  headingSize: [128, 192, 280],
  bodySize: [12, 14, 20],
  headingLetterSpacing: [-0.09, -0.05, 0.04],
  css: (type) => `
.renderlab-site-header nav > a { font-family: ${type.body}; font-weight: ${type.bodyWeight}; }
`,
  inlineStyles: (type): readonly PageInlineStyleOverride[] => [
    { selector: "body", styles: { "font-family": type.body, "font-size": px(type.bodySize), "font-weight": type.bodyWeight, "--acid": type.primary } },
    { selector: '[style*="font-family:Impact"]', styles: { "font-family": type.heading } },
    { selector: '[style*="font-family:Impact"][style*="font-weight:500"]', styles: { "font-weight": type.headingWeight } },
    { selector: '[style*="font-family:Impact"][style*="font-size:clamp(3.5rem,8vw,8rem)"]', styles: { "font-size": `clamp(3.5rem, 8vw, ${px((type.headingSize * 128) / 192)})` } },
    { selector: '[style*="font-family:Impact"][style*="font-size:clamp(8rem,20vw,12rem)"]', styles: { "font-size": `clamp(8rem, 20vw, ${px(type.headingSize)})` } },
    { selector: '[style*="font-family:Impact"][style*="font-size:clamp(6rem,13vw,13rem)"]', styles: { "font-size": `clamp(6rem, 13vw, ${px((type.headingSize * 208) / 192)})` } },
    { selector: '[style*="font-family:Impact"][style*="font-size:clamp(5rem,14vw,15rem)"]', styles: { "font-size": `clamp(5rem, 14vw, ${px((type.headingSize * 240) / 192)})` } },
    { selector: '[style*="font-family:Impact"][style*="font-size:clamp(4.8rem,11vw,12rem)"]', styles: { "font-size": `clamp(4.8rem, 11vw, ${px(type.headingSize)})` } },
    { selector: '[style*="font-family:Impact"][style*="font-size:clamp(8rem,22vw,24rem)"]', styles: { "font-size": `clamp(8rem, 22vw, ${px(type.headingSize * 2)})` } },
    { selector: '[style*="font-family:Impact"][style*="font-size:clamp(3rem,8vw,8rem)"]', styles: { "font-size": `clamp(3rem, 8vw, ${px((type.headingSize * 128) / 192)})` } },
    { selector: '[style*="font-family:Impact"][style*="letter-spacing:-.05em"]', styles: { "letter-spacing": `${type.headingLetterSpacing}em` } },
    { selector: '[style*="font-family:Impact"][style*="letter-spacing:-.055em"]', styles: { "letter-spacing": `${n(type.headingLetterSpacing - 0.005)}em` } },
    { selector: '[style*="font-family:Impact"][style*="letter-spacing:-.08em"]', styles: { "letter-spacing": `${n(type.headingLetterSpacing - 0.03)}em` } },
    { selector: '[style*="font-family:Impact"][style*="letter-spacing:-.035em"]', styles: { "letter-spacing": `${n(type.headingLetterSpacing + 0.015)}em` } },
    { selector: '[style*="font-family:Impact"][style*="letter-spacing:-.04em"]', styles: { "letter-spacing": `${n(type.headingLetterSpacing + 0.01)}em` } },
  ],
};

/* ── Volta Atelier ──────────────────────────────────────────────────────
   Volta already centralizes both families and its three signal colours in
   custom properties. The main scale follows the 184px hero ceiling; every
   named display and mono scale keeps its authored proportion beneath it. */
export const VOLTA_ATELIER_TYPOGRAPHY: PageTypographyRecipe = {
  headingFonts: [ARCHIVO, INSTRUMENT_SERIF, NEWSREADER, GEIST],
  bodyFonts: [JETBRAINS_MONO, GEIST, NEWSREADER, INSTRUMENT_SERIF],
  headingWeights: ["500", "600", "700", "800", "900"],
  headingWeight: "800",
  bodyWeights: ["300", "400", "500", "600", "700"],
  bodyWeight: "400",
  primaryColor: "#fb3732",
  headingSize: [120, 184, 260],
  bodySize: [10, 13, 20],
  headingLetterSpacing: [-0.09, -0.045, 0.04],
  css: (type) => `
:root {
  --font-display: ${type.heading};
  --font-mono: ${type.body};
  --signal: ${type.primary};
  --amber: ${type.retone("#ffa31a")};
  --volt: ${type.retone("#3b49e4")};
}
body { font-family: var(--font-mono); font-weight: ${type.bodyWeight}; }
h1, h2, h3, h4, .d-mega, .d-xl, .d-lg, .d-md, .d-sm { font-weight: ${type.headingWeight}; }
.d-mega {
  font-size: clamp(3.4rem, 13.2vw, ${px(type.headingSize)});
  letter-spacing: ${type.headingLetterSpacing}em;
}
.d-xl { font-size: clamp(2.4rem, 7.6vw, ${px((type.headingSize * 96) / 184)}); }
.d-lg { font-size: clamp(1.9rem, 4.4vw, ${px((type.headingSize * 54.4) / 184)}); }
.d-md { font-size: clamp(1.35rem, 2.3vw, ${px((type.headingSize * 30.4) / 184)}); }
.d-sm { font-size: clamp(1.05rem, 1.5vw, ${px((type.headingSize * 20) / 184)}); }
.mono-xs { font-size: clamp(9.5px, .72vw, ${px((type.bodySize * 11) / 13)}); font-weight: ${type.bodyWeight}; }
.mono-sm { font-size: clamp(11px, .86vw, ${px(type.bodySize)}); font-weight: ${type.bodyWeight}; }
.mono-md { font-size: clamp(13px, 1.12vw, ${px((type.bodySize * 16) / 13)}); font-weight: ${type.bodyWeight}; }
`,
};

/* ── Kairo ──────────────────────────────────────────────────────────────
   Kairo uses one Manrope family for its display, body, and compact labels,
   keeping Noto Sans JP for Japanese glyphs. The hero is the 192px reference
   scale; the chapter and finale sizes retain their authored proportions. */
export const KAIRO_TYPOGRAPHY: PageTypographyRecipe = {
  headingFonts: [MANROPE, INSTRUMENT_SERIF, NEWSREADER, GEIST],
  bodyFonts: [MANROPE, GEIST, NEWSREADER, INSTRUMENT_SERIF],
  headingWeights: ["500", "600", "700", "800"],
  headingWeight: "800",
  bodyWeights: ["300", "400", "500", "600"],
  bodyWeight: "400",
  primaryColor: "#b4261a",
  headingSize: [112, 192, 280],
  bodySize: [12, 16, 24],
  headingLetterSpacing: [-0.1, -0.06, 0.02],
  css: (type) => `
:root {
  --red: ${type.primary};
  --bright: ${type.retone("#c8392a")};
  --sans: ${type.body};
  --serif: ${type.heading};
  --mono: ${type.bodyWeight} ${px(type.bodySize * 0.72)}/1.5 ${type.body};
}
body { font-family: ${type.body}; font-size: ${px(type.bodySize)}; font-weight: ${type.bodyWeight}; }
.hero__title {
  font-family: ${type.heading};
  font-weight: ${type.headingWeight};
  font-size: clamp(5.4rem, 12vw, ${px(type.headingSize)});
  letter-spacing: ${type.headingLetterSpacing}em;
}
h2.split {
  font-family: ${type.heading};
  font-weight: ${Math.max(300, Number(type.headingWeight) - 100)};
  font-size: clamp(3.4rem, 6.6vw, ${px(type.headingSize * 0.6)});
  letter-spacing: ${n(type.headingLetterSpacing + 0.015)}em;
}
.ingredients h2.split { font-size: clamp(3rem, 5.8vw, ${px((type.headingSize * 102.4) / 192)}); }
.recipes h2.split { font-size: clamp(3rem, 5.6vw, ${px((type.headingSize * 99.2) / 192)}); }
.finale h2.split {
  font-size: clamp(4.2rem, 9.5vw, ${px((type.headingSize * 160) / 192)});
  letter-spacing: ${type.headingLetterSpacing}em;
}
h2 em, h3 em, .serif { font-family: ${type.heading}; font-weight: ${Math.max(300, Number(type.headingWeight) - 500)}; }
.body-copy { font-size: clamp(1.02rem, 1.2vw, ${px(type.bodySize * 1.2)}); }
.flame-layer, .ascii-layer, .gallery__layer { filter: ${type.filter()}; }
`,
};

/* ── Inkbound River Story ───────────────────────────────────────────────
   Inkbound's English narrative is Iowan Old Style while its navigation and
   Japanese calligraphy keep their authored faces. The display control follows
   the 166px opening title and carries the later chapter scales with it. */
export const INKBOUND_TYPOGRAPHY: PageTypographyRecipe = {
  headingFonts: [IOWAN_OLD_STYLE, INSTRUMENT_SERIF, NEWSREADER, GEIST],
  bodyFonts: [IOWAN_OLD_STYLE, GEIST, NEWSREADER, INSTRUMENT_SERIF],
  headingWeights: ["300", "400", "500", "600", "700"],
  headingWeight: "400",
  bodyWeights: ["300", "400", "500", "600"],
  bodyWeight: "400",
  primaryColor: "#b34f3e",
  headingSize: [96, 166, 240],
  bodySize: [14, 21, 30],
  headingLetterSpacing: [-0.1, -0.062, 0.02],
  css: (type) => `
:root {
  --display: ${type.heading};
  --seal: ${type.primary};
  --seal-dark: ${type.retone("#8d372c")};
}
body { font-family: ${type.body}; font-weight: ${type.bodyWeight}; }
.red-moon { background-color: ${type.retone("#ad4a3b")}; }
.hero-title, .chapter-title, .epilogue-title {
  font-family: ${type.heading};
  font-weight: ${type.headingWeight};
}
.hero-title {
  font-size: clamp(64px, 11vw, ${px(type.headingSize)});
  letter-spacing: ${type.headingLetterSpacing}em;
}
.chapter-title {
  font-size: clamp(40px, 4.8vw, ${px((type.headingSize * 76) / 166)});
  letter-spacing: ${n(type.headingLetterSpacing + 0.016)}em;
}
.epilogue-title {
  font-size: clamp(58px, 9vw, ${px((type.headingSize * 138) / 166)});
  letter-spacing: ${n(type.headingLetterSpacing + 0.002)}em;
}
.hero-deck, .chapter-body, .epilogue-body { font-family: ${type.body}; font-weight: ${type.bodyWeight}; }
.hero-deck { font-size: clamp(15px, 1.35vw, ${px(type.bodySize)}); }
.chapter-body { font-size: clamp(14px, 1.08vw, ${px((type.bodySize * 18) / 21)}); }
.epilogue-body { font-size: clamp(14px, 1.2vw, ${px((type.bodySize * 19) / 21)}); }
@media (max-width: 760px) {
  .hero-title { font-size: clamp(56px, 19vw, ${px((type.headingSize * 82) / 166)}); }
  .hero-deck { font-size: ${px((type.bodySize * 15) / 21)}; }
  .chapter-title { font-size: clamp(38px, 12vw, ${px((type.headingSize * 58) / 166)}); }
  .epilogue-title { font-size: clamp(54px, 18vw, ${px((type.headingSize * 78) / 166)}); }
}
@media (max-height: 650px) and (min-width: 761px) {
  .hero-title { font-size: clamp(64px, 10vw, ${px((type.headingSize * 112) / 166)}); }
}
`,
};

/* ── Halvorsen ────────────────────────────────────────────────────────
   Outfit is embedded as the page's single variable face, with the display
   hierarchy distinguished by scale rather than a second family. The colour
   control retints the bone-white interface ramp while leaving the marble and
   planting in the Three.js hands untouched. Desktop and narrow-screen sizes
   continue to follow the authored 96px display scale and its vw breakpoints. */
export const HALVORSEN_TYPOGRAPHY: PageTypographyRecipe = {
  headingFonts: [OUTFIT, INSTRUMENT_SERIF, NEWSREADER, GEIST],
  bodyFonts: [OUTFIT, GEIST, NEWSREADER, INSTRUMENT_SERIF],
  headingWeights: ["200", "300", "400", "500", "600"],
  headingWeight: "400",
  bodyWeights: ["200", "300", "400", "500", "600"],
  bodyWeight: "400",
  primaryColor: "#ecebe7",
  headingSize: [56, 96, 136],
  bodySize: [12, 17, 24],
  headingLetterSpacing: [-0.08, -0.031, 0.08],
  css: (type) => `
:root {
  --ink: ${type.primary};
  --ink-soft: ${type.retone("#c3c1bb")};
  --muted: ${type.retone("#85837d")};
  --muted-dim: ${type.retone("#6a6964")};
  --pill-ink: ${type.retone("#c6c3bc")};
  --font: ${type.body};
}
body { font-family: ${type.body}; font-weight: ${type.bodyWeight}; }
h1, h2, h3, .foot-mark {
  font-family: ${type.heading};
  font-weight: ${type.headingWeight};
}
h1 {
  font-size: ${px(type.headingSize)};
  letter-spacing: ${type.headingLetterSpacing}em;
}
h2 {
  font-size: ${px((type.headingSize * 63) / 96)};
  letter-spacing: ${n(type.headingLetterSpacing + 0.003)}em;
}
.foot-mark {
  font-size: ${px((type.headingSize * 64) / 96)};
  letter-spacing: ${n(type.headingLetterSpacing + 0.001)}em;
}
.card h3 {
  font-size: ${px((type.headingSize * 24) / 96)};
  letter-spacing: ${n(type.headingLetterSpacing + 0.011)}em;
}
.acc h3, .stat h3, .tcard h3 {
  font-size: ${px((type.headingSize * 22) / 96)};
  letter-spacing: ${n(type.headingLetterSpacing + 0.011)}em;
}
.hero-side p, .pill, .btn { font-size: ${px(type.bodySize)}; }
.nav ul a { font-size: ${px((type.bodySize * 18) / 17)}; }
.btn-ghost, .link-quiet, .btn-wide { font-size: ${px((type.bodySize * 16) / 17)}; }
.card p, .btn-out, .tcard .more, .foot-cols a, .foot-cols span {
  font-size: ${px((type.bodySize * 14) / 17)};
}
.acc p, .stories .sub p, .tcard p { font-size: ${px((type.bodySize * 13.5) / 17)}; }
.eyebrow, .acc-num, .foot-bottom { font-size: ${px((type.bodySize * 13) / 17)}; }
@media (max-width: 1280px) {
  h1 { font-size: calc(${n(type.headingSize / 96)} * 7.2vw); }
  h2, .foot-mark { font-size: calc(${n(type.headingSize / 96)} * 4.9vw); }
}
@media (max-width: 1024px) {
  h1 { font-size: calc(${n(type.headingSize / 96)} * 8.4vw); }
}
@media (max-width: 640px) {
  h1 { font-size: calc(${n(type.headingSize / 96)} * 10.4vw); }
  h2, .foot-mark { font-size: calc(${n(type.headingSize / 96)} * 8.4vw); }
}
`,
};

/* ── Betawise Hero ───────────────────────────────────────────────────────
   Fixed pixel type with three narrow-screen steps, all carried at their
   authored ratio. The signature blue lives in the point cloud rather than in
   any CSS variable, so the colour control reaches it through the canvas. */
export const BETAWISE_HERO_TYPOGRAPHY: PageTypographyRecipe = {
  headingFonts: [OUTFIT, INSTRUMENT_SERIF, NEWSREADER, GEIST],
  bodyFonts: [OUTFIT, GEIST, NEWSREADER, INSTRUMENT_SERIF],
  headingWeights: ["400", "500", "600", "700"],
  headingWeight: "500",
  bodyWeights: ["300", "400", "500", "600"],
  bodyWeight: "400",
  primaryColor: "#1278ff",
  headingSize: [32, 48.8, 76],
  bodySize: [12, 15.9, 24],
  headingLetterSpacing: [-0.06, 0.006, 0.12],
  css: (type) => `
body { font-family: ${type.body}; }
h1 {
  font-family: ${type.heading};
  font-weight: ${type.headingWeight};
  font-size: ${px(type.headingSize)};
  line-height: ${px((type.headingSize * 53) / 48.8)};
  letter-spacing: ${type.headingLetterSpacing}em;
}
.sub {
  font-family: ${type.body};
  font-weight: ${type.bodyWeight};
  font-size: ${px(type.bodySize)};
}
#gl { filter: ${type.filter()}; }
@media (max-width: 1180px) {
  h1 {
    font-size: ${px((type.headingSize * 42) / 48.8)};
    line-height: ${px((type.headingSize * 46) / 48.8)};
  }
}
@media (max-width: 900px) {
  h1 {
    font-size: ${px((type.headingSize * 34) / 48.8)};
    line-height: ${px((type.headingSize * 38) / 48.8)};
  }
  .sub { font-size: ${px((type.bodySize * 14) / 15.9)}; }
}
@media (max-width: 520px) {
  h1 {
    font-size: ${px((type.headingSize * 27) / 48.8)};
    line-height: ${px((type.headingSize * 31) / 48.8)};
    letter-spacing: ${n(type.headingLetterSpacing - 0.021)}em;
  }
  .sub { font-size: ${px((type.bodySize * 12.6) / 15.9)}; }
}
`,
};

/* ── Axonis ──────────────────────────────────────────────────────────────
   The hero is the wordmark, sized in vw so the composition holds at any
   width, so the heading control drives --wm in vw and the tracking rides it
   as a fraction of that size — which is what keeps the page's own optical
   centring, computed from --ls, correct at every setting. The authored 320
   weight is kept as an option because Space Grotesk is a variable face and
   the composition is drawn at it. */
export const AXONIS_TYPOGRAPHY: PageTypographyRecipe = {
  headingFonts: [SPACE_GROTESK, INSTRUMENT_SERIF, NEWSREADER, GEIST],
  bodyFonts: [SPACE_GROTESK, GEIST, NEWSREADER, INSTRUMENT_SERIF],
  headingWeights: ["320", "400", "500", "600", "700"],
  headingWeight: "320",
  bodyWeights: ["400", "500", "600", "700"],
  bodyWeight: "400",
  primaryColor: "#ff6427",
  headingSize: [14, 25, 34],
  bodySize: [15, 22, 30],
  headingLetterSpacing: [-0.02, 0.112, 0.2],
  css: (type) => `
:root {
  --orange: ${type.primary};
  --orange-soft: ${type.retone("#ffad78")};
  --font: ${type.body};
  --wm: ${n(type.headingSize)}vw;
  --wmw: ${type.headingWeight};
  --ls: calc(${n(type.headingLetterSpacing)} * var(--wm));
}
body { font-weight: ${type.bodyWeight}; }
.wordmark { font-family: ${type.heading}; }
.wordmark span {
  background: linear-gradient(180deg,
    ${type.retoneRgba("rgba(255,100,39,0)")} 4%,
    ${type.retoneRgba("rgba(255,100,39,.22)")} 34%,
    ${type.retone("#ff6b2d")} 84%);
  -webkit-background-clip: text;
  background-clip: text;
}
.lede {
  font-size: ${px(type.bodySize)};
  line-height: ${px((type.bodySize * 36) / 22)};
  background: linear-gradient(90deg, #fff7f0 4%, ${type.retoneRgba("rgba(255,173,120,.68)")} 98%);
  -webkit-background-clip: text;
  background-clip: text;
}
.sub {
  font-size: ${px((type.bodySize * 15.7) / 22)};
  line-height: ${px((type.bodySize * 24) / 22)};
}
#scene { filter: ${type.filter()}; }
@media (max-width: 1180px) {
  .lede {
    font-size: ${px((type.bodySize * 21) / 22)};
    line-height: ${px((type.bodySize * 33) / 22)};
  }
}
@media (max-width: 900px) {
  .lede {
    font-size: ${px((type.bodySize * 19) / 22)};
    line-height: ${px((type.bodySize * 30) / 22)};
  }
}
`,
};

/* ── attune ──────────────────────────────────────────────────────────────
   Both faces are embedded in the document, so the authored pair costs no
   request and Instrument Serif is already the heading default. The ghost
   wordmark follows the h1 at its authored 320/66 scale and its own tighter
   tracking. The colour control moves the whole warm palette the page derives
   from --accent; the planet is the subject rather than the brand, so it is
   left alone. */
export const ATTUNE_TYPOGRAPHY: PageTypographyRecipe = {
  headingFonts: [INSTRUMENT_EMBEDDED, NEWSREADER, GEIST],
  bodyFonts: [INTER_EMBEDDED, GEIST, NEWSREADER, INSTRUMENT_SERIF],
  headingWeights: ["400", "500", "600", "700"],
  headingWeight: "400",
  bodyWeights: ["300", "400", "500", "600", "700"],
  bodyWeight: "400",
  primaryColor: "#ff7a14",
  headingSize: [40, 66, 96],
  bodySize: [12, 16, 22],
  headingLetterSpacing: [-0.06, -0.02, 0.12],
  css: (type) => `
:root {
  --accent: ${type.primary};
  --accent-hi: ${type.retone("#ffa347")};
  --accent-lo: ${type.retone("#f2610a")};
  --hair-warm: ${type.retoneRgba("rgba(255,138,40,.34)")};
}
body { font-family: ${type.body}; font-weight: ${type.bodyWeight}; }
h1, #bigword {
  font-family: ${type.heading};
  font-weight: ${type.headingWeight};
}
h1 {
  font-size: clamp(35px, 4.4vw, ${px(type.headingSize)});
  letter-spacing: ${type.headingLetterSpacing}em;
}
#bigword {
  font-size: clamp(104px, 19vw, ${px((type.headingSize * 320) / 66)});
  letter-spacing: ${n(type.headingLetterSpacing - 0.015)}em;
}
.sub {
  font-weight: ${type.bodyWeight};
  font-size: clamp(13px, 1.08vw, ${px(type.bodySize)});
}
`,
};

/* ── Betawise ────────────────────────────────────────────────────────────
   Sized on the page's own --u, which is already a viewport clamp, so the
   control moves the design-unit count and the responsive behaviour is
   untouched. As with the hero, the signature blue is in the globe rather
   than in CSS, so the colour control reaches it through the canvas. */
export const BETAWISE_TYPOGRAPHY: PageTypographyRecipe = {
  headingFonts: [QUESTRIAL, INSTRUMENT_SERIF, NEWSREADER, GEIST],
  bodyFonts: [QUESTRIAL, GEIST, NEWSREADER, INSTRUMENT_SERIF],
  headingWeights: ["400", "500", "600", "700"],
  headingWeight: "400",
  bodyWeights: ["400", "500", "600", "700"],
  bodyWeight: "400",
  primaryColor: "#1a4dff",
  headingSize: [26, 40.4, 60],
  bodySize: [9, 12.66, 20],
  headingLetterSpacing: [-0.06, -0.01, 0.12],
  css: (type) => `
body { font-family: ${type.body}; font-weight: ${type.bodyWeight}; }
h1 {
  font-family: ${type.heading};
  font-weight: ${type.headingWeight};
  font-size: ${unit(type.headingSize)};
  line-height: ${unit((type.headingSize * 42.5) / 40.4)};
  letter-spacing: ${type.headingLetterSpacing}em;
}
.sub {
  font-weight: ${type.bodyWeight};
  font-size: ${unit(type.bodySize)};
}
#gl { filter: ${type.filter()}; }
@media (max-width: 760px) {
  h1 {
    font-size: clamp(25px, 6.9vw, ${px((type.headingSize * 35) / 40.4)});
    line-height: 1.1;
    letter-spacing: ${n(type.headingLetterSpacing - 0.002)}em;
  }
  .sub { font-size: clamp(13px, 3.4vw, ${px((type.bodySize * 16) / 12.66)}); }
}
`,
};

/* ── Complete Shelf ─────────────────────────────────────────────────────
   The visible shelf title is the selected volume, not the oversized vestigial
   word behind the scene. Detail type follows it at the authored 107.2 / 60
   ratio while the compact editorial labels stay on the page's mono face. */
export const COMPLETE_SHELF_TYPOGRAPHY: PageTypographyRecipe = {
  headingFonts: [IOWAN_OLD_STYLE, INSTRUMENT_SERIF, NEWSREADER, GEIST],
  bodyFonts: [INTER_LOADED, GEIST, NEWSREADER, INSTRUMENT_SERIF],
  headingWeights: ["400", "500", "600"],
  headingWeight: "400",
  bodyWeights: ["400", "500", "600"],
  bodyWeight: "400",
  primaryColor: "#c87046",
  headingSize: [32, 60, 88],
  bodySize: [10, 12, 18],
  headingLetterSpacing: [-0.1, -0.055, 0.08],
  css: (type) => `
:root { --accent: ${type.primary}; }
body { font-family: ${type.body}; font-weight: ${type.bodyWeight}; }
.selection__title, .detail-title, .editorial-identity strong, .page-status strong {
  font-family: ${type.heading};
  font-weight: ${type.headingWeight};
}
.selection__title {
  font-size: clamp(32px, 3.4vw, ${px(type.headingSize)});
  letter-spacing: ${type.headingLetterSpacing}em;
}
.detail-title {
  font-size: clamp(56px, 6.3vw, ${px((type.headingSize * 107.2) / 60)});
  letter-spacing: ${n(type.headingLetterSpacing - 0.01)}em;
}
.selection__note { font-size: ${px(type.bodySize)}; font-weight: ${type.bodyWeight}; }
.detail-deck { font-family: ${type.body}; font-weight: ${type.bodyWeight}; }
@media (max-width: 880px) {
  .selection__title { font-size: clamp(32px, 9vw, ${px((type.headingSize * 56) / 60)}); }
  .detail-title { font-size: clamp(48px, 14vw, ${px((type.headingSize * 80) / 60)}); }
}
@media (max-width: 560px) {
  .selection__title { font-size: ${px((type.headingSize * 32) / 60)}; }
}
`,
};

/* ── Bestsellers ───────────────────────────────────────────────────────────
   The giant italic collection word is the composition's heading. The detail
   title and its mobile ceiling retain their authored proportions. */
export const BESTSELLERS_TYPOGRAPHY: PageTypographyRecipe = {
  headingFonts: [IOWAN_OLD_STYLE, INSTRUMENT_SERIF, NEWSREADER, GEIST],
  bodyFonts: [IOWAN_OLD_STYLE, GEIST, NEWSREADER, INSTRUMENT_SERIF],
  headingWeights: ["400", "500", "600", "700"],
  headingWeight: "500",
  bodyWeights: ["400", "500", "600", "700"],
  bodyWeight: "400",
  primaryColor: "#c3a47b",
  headingSize: [184, 325, 420],
  bodySize: [12, 17, 24],
  headingLetterSpacing: [-0.12, -0.085, 0.08],
  css: (type) => `
:root {
  --pink: ${type.primary};
  --pink-bright: ${type.retone("#dbc39c")};
  --periwinkle: ${type.retone("#b7976c")};
}
body { font-family: ${type.body}; font-weight: ${type.bodyWeight}; }
.brand, .hero-word, .detail-title, .cover-title {
  font-family: ${type.heading};
  font-weight: ${type.headingWeight};
}
.hero-word {
  font-size: clamp(184px, 22vw, ${px(type.headingSize)});
  letter-spacing: ${type.headingLetterSpacing}em;
}
.detail-title {
  font-size: clamp(52px, 5.7vw, ${px((type.headingSize * 82) / 325)});
  letter-spacing: ${n(type.headingLetterSpacing + 0.03)}em;
}
.detail-description { font-size: clamp(12px, 1.28vw, ${px(type.bodySize)}); font-weight: ${type.bodyWeight}; }
@media (max-width: 900px) {
  .hero-word { font-size: clamp(128px, 28vw, ${px((type.headingSize * 230) / 325)}); }
  .detail-title { font-size: clamp(48px, 10vw, ${px((type.headingSize * 70) / 325)}); }
}
@media (max-width: 560px) {
  .hero-word { font-size: calc(${n(type.headingSize / 325)} * 38vw); }
}
`,
};

/* ── Cortexa ───────────────────────────────────────────────────────────────
   The two corner display blocks share a scale at desktop and diverge at the
   authored breakpoints. Their ratios are repeated so moving the control does
   not flatten the layout into one fixed size. */
export const CORTEXA_TYPOGRAPHY: PageTypographyRecipe = {
  headingFonts: [INSTRUMENT_SERIF_LOADED, NEWSREADER, GEIST_LOADED],
  bodyFonts: [GEIST_LOADED, NEWSREADER, INSTRUMENT_SERIF_LOADED],
  headingWeights: ["300", "400", "500", "600"],
  headingWeight: "400",
  bodyWeights: ["300", "400", "500", "600"],
  bodyWeight: "400",
  primaryColor: "#7f97ba",
  headingSize: [36, 60, 88],
  bodySize: [12, 15, 21],
  headingLetterSpacing: [-0.08, -0.004, 0.1],
  css: (type) => `
:root { --dim: ${type.primary}; --dim-2: ${type.retone("#6d86a8")}; }
body { font-family: ${type.body}; font-weight: ${type.bodyWeight}; }
h1, .bigtag, .brand span { font-family: ${type.heading}; font-weight: ${type.headingWeight}; }
h1, .bigtag {
  font-size: ${px(type.headingSize)};
  line-height: ${px((type.headingSize * 63) / 60)};
  letter-spacing: ${type.headingLetterSpacing}em;
}
.lede, .facts { font-size: ${px(type.bodySize)}; font-weight: ${type.bodyWeight}; }
#gl { filter: ${type.filter()}; }
@media (max-width: 1280px) {
  h1, .bigtag { font-size: ${px((type.headingSize * 50) / 60)}; line-height: ${px((type.headingSize * 53) / 60)}; }
}
@media (max-width: 1120px) {
  h1 { font-size: ${px((type.headingSize * 44) / 60)}; line-height: ${px((type.headingSize * 47) / 60)}; }
  .bigtag { font-size: ${px((type.headingSize * 40) / 60)}; line-height: ${px((type.headingSize * 43) / 60)}; }
}
@media (max-width: 820px) {
  h1 { font-size: ${px((type.headingSize * 36) / 60)}; line-height: ${px((type.headingSize * 39) / 60)}; }
  .bigtag { font-size: ${px((type.headingSize * 31) / 60)}; line-height: ${px((type.headingSize * 34) / 60)}; }
  .lede, .facts { font-size: ${px((type.bodySize * 14) / 15)}; }
}
@media (max-width: 620px) {
  h1 { font-size: ${px((type.headingSize * 31) / 60)}; line-height: ${px((type.headingSize * 34) / 60)}; }
  .bigtag { font-size: ${px((type.headingSize * 25) / 60)}; line-height: ${px((type.headingSize * 28) / 60)}; }
  .lede { font-size: ${px((type.bodySize * 13.5) / 15)}; }
}
@media (max-height: 720px) and (min-width: 820px) {
  h1 { font-size: ${px((type.headingSize * 42) / 60)}; line-height: ${px((type.headingSize * 45) / 60)}; }
  .bigtag { font-size: ${px((type.headingSize * 30) / 60)}; line-height: ${px((type.headingSize * 33) / 60)}; }
  .lede, .facts { font-size: ${px((type.bodySize * 13.5) / 15)}; }
}
@media (max-height: 560px) {
  h1 { font-size: ${px((type.headingSize * 34) / 60)}; line-height: ${px((type.headingSize * 37) / 60)}; }
  .bigtag { font-size: ${px((type.headingSize * 25) / 60)}; line-height: ${px((type.headingSize * 28) / 60)}; }
  .lede, .facts { font-size: ${px((type.bodySize * 13) / 15)}; }
}
`,
};

/* ── Cathode ─────────────────────────────────────────────────────────────────
   Cathode already expresses both main sizes as clamps, so the controls only
   replace their ceilings and keep the authored responsive floor and slope. */
export const CATHODE_TYPOGRAPHY: PageTypographyRecipe = {
  headingFonts: [INTER_LOADED, INSTRUMENT_SERIF, NEWSREADER, GEIST],
  bodyFonts: [INTER_LOADED, GEIST, NEWSREADER, INSTRUMENT_SERIF],
  headingWeights: ["300", "400", "500", "600"],
  headingWeight: "400",
  bodyWeights: ["300", "400", "500", "600"],
  bodyWeight: "400",
  primaryColor: "#f1f1f1",
  headingSize: [40, 64, 92],
  bodySize: [14, 19, 26],
  headingLetterSpacing: [-0.08, -0.016, 0.1],
  css: (type) => `
body { font-family: ${type.body}; font-weight: ${type.bodyWeight}; }
.title { font-family: ${type.heading}; font-weight: ${type.headingWeight}; color: ${type.primary}; }
.title {
  font-size: clamp(30px, 4.35vw, ${px(type.headingSize)});
  letter-spacing: ${type.headingLetterSpacing}em;
}
.lede { font-size: clamp(14px, 1.22vw, ${px(type.bodySize)}); font-weight: ${type.bodyWeight}; }
.cta { background: ${type.primary}; }
`,
};

/* ── Cadence ───────────────────────────────────────────────────────────────
   The page has many secondary scales; the control follows its opening 84px
   statement and 16px explanatory copy, while the signature blue retunes the
   blue cards and the three authored WebGL canvases together. */
export const CADENCE_TYPOGRAPHY: PageTypographyRecipe = {
  headingFonts: [GEIST_LOADED, INSTRUMENT_SERIF, NEWSREADER],
  bodyFonts: [GEIST_LOADED, NEWSREADER, INSTRUMENT_SERIF],
  headingWeights: ["300", "400", "500", "600", "700"],
  headingWeight: "400",
  bodyWeights: ["300", "400", "500", "600"],
  bodyWeight: "400",
  primaryColor: "#1e3e86",
  headingSize: [48, 84, 116],
  bodySize: [12, 16, 24],
  headingLetterSpacing: [-0.08, -0.031, 0.08],
  css: (type) => `
:root { --blue: ${type.primary}; --blue-hot: ${type.retone("#a6d2ff")}; }
body { font-family: ${type.body}; font-weight: ${type.bodyWeight}; }
.h1, .statement, .sc-head h2, .pf-title, .chain .t1, .chain .t2, .whatis h2, .f-head h2 {
  font-family: ${type.heading};
  font-weight: ${type.headingWeight};
}
/* The page sizes .h1 fluidly at every width, so the override has to restate a
   clamp rather than a flat px — a flat value here would pin the heading at its
   widest size right down to 1101px and undo the page's own scaling. Each term
   is the page's own number scaled by headingSize / 84, its authored default. */
.h1 {
  font-size: clamp(${px((type.headingSize * 46) / 84)}, calc(${n(type.headingSize / 84)} * 6.05vw), ${px(type.headingSize)});
  letter-spacing: ${type.headingLetterSpacing}em;
}
.hero-right p { font-size: ${px(type.bodySize)}; font-weight: ${type.bodyWeight}; }
.hero canvas, .chain canvas, .f-stage canvas { filter: ${type.filter()}; }
@media (max-width: 900px) {
  .h1 {
    font-size: clamp(${px((type.headingSize * 40) / 84)}, calc(${n(type.headingSize / 84)} * 8.4vw), ${px((type.headingSize * 76) / 84)});
    letter-spacing: ${n(type.headingLetterSpacing + 0.003)}em;
  }
}
@media (max-width: 720px) {
  .h1 { font-size: clamp(${px((type.headingSize * 34) / 84)}, calc(${n(type.headingSize / 84)} * 10.4vw), ${px((type.headingSize * 60) / 84)}); }
}
`,
};

/* ── Vella Bank ────────────────────────────────────────────────────────────
   Vella's display line mixes three authored weights. The heading control
   moves the light base while keeping those two emphasis steps intact, so its
   default remains the original 300 / 500 / 600 composition. The amber card
   and moss companion card share one palette shift with the WebGL stack. */
export const VELLA_BANK_TYPOGRAPHY: PageTypographyRecipe = {
  headingFonts: [FIGTREE, INSTRUMENT_SERIF, NEWSREADER, GEIST],
  bodyFonts: [FIGTREE, GEIST, NEWSREADER, INSTRUMENT_SERIF],
  headingWeights: ["300", "400", "500", "600", "700"],
  headingWeight: "300",
  bodyWeights: ["300", "400", "500", "600"],
  bodyWeight: "400",
  primaryColor: "#dd8940",
  headingSize: [44, 76, 104],
  bodySize: [13, 17.1, 24],
  headingLetterSpacing: [-0.08, -0.038, 0.08],
  css: (type) => {
    const baseWeight = Number(type.headingWeight);
    return `
:root { --amber: ${type.primary}; --moss: ${type.retone("#93a476")}; }
body { font-family: ${type.body}; font-weight: ${type.bodyWeight}; }
h1 {
  font-family: ${type.heading};
  font-size: clamp(31px, 5.3vw, ${px(type.headingSize)});
  letter-spacing: ${type.headingLetterSpacing}em;
  font-weight: ${type.headingWeight};
}
h1 .w5 { font-weight: ${Math.min(900, baseWeight + 200)}; }
h1 .w6 { font-weight: ${Math.min(900, baseWeight + 300)}; }
.lede {
  font-family: ${type.body};
  font-size: clamp(13.5px, 1.19vw, ${px(type.bodySize)});
  font-weight: ${type.bodyWeight};
}
#cardsCanvas { filter: ${type.filter()}; }
`;
  },
};

/* ── Tidecrest ─────────────────────────────────────────────────────────────
   Tidecrest already exposes internal typography presets. These props sit
   above them and use the default preset's raw reference-frame units. */
export const TIDECREST_TYPOGRAPHY: PageTypographyRecipe = {
  headingFonts: [FIGTREE, INSTRUMENT_SERIF, NEWSREADER, GEIST],
  bodyFonts: [HANKEN_GROTESK, GEIST, NEWSREADER, INSTRUMENT_SERIF],
  headingWeights: ["300", "400", "500", "600"],
  headingWeight: "300",
  bodyWeights: ["300", "400", "500", "600"],
  bodyWeight: "400",
  primaryColor: "#ffffff",
  headingSize: [30, 46, 72],
  bodySize: [10, 12.8, 20],
  headingLetterSpacing: [-0.1, -0.04, 0.1],
  css: (type) => `
:root {
  --ink: ${type.primary};
  --muted: ${withAlpha(type.primary, 0.6)};
  --nav: ${withAlpha(type.primary, 0.74)};
}
body { font-family: ${type.body}; font-weight: ${type.bodyWeight}; }
h1 {
  font-family: ${type.heading};
  font-size: calc(${n(type.headingSize)} * var(--s) * var(--type-scale));
  line-height: calc(${n((type.headingSize * 50) / 46)} * var(--s) * var(--type-scale));
  font-weight: ${type.headingWeight};
  letter-spacing: ${type.headingLetterSpacing}em;
}
.sub {
  font-family: ${type.body};
  font-size: calc(${n(type.bodySize)} * var(--s) * var(--type-scale));
  font-weight: ${type.bodyWeight};
}
@media (max-width: 760px) {
  h1 {
    font-size: calc(${n((type.headingSize * 36) / 46)} * var(--s));
    line-height: calc(${n((type.headingSize * 40) / 46)} * var(--s));
  }
  .sub { font-size: calc(${n((type.bodySize * 13.5) / 12.8)} * var(--s)); }
}
`,
};

/* ── Nocturne ────────────────────────────────────────────────────────────
   The blue secondary ink is the authored accent; the sea and card are moved
   through the same colour shift only after the control leaves its default. */
export const NOCTURNE_TYPOGRAPHY: PageTypographyRecipe = {
  headingFonts: [MULISH, INSTRUMENT_SERIF, NEWSREADER, GEIST],
  bodyFonts: [MULISH, GEIST, NEWSREADER, INSTRUMENT_SERIF],
  headingWeights: ["300", "400", "600"],
  headingWeight: "300",
  bodyWeights: ["300", "400", "600"],
  bodyWeight: "600",
  primaryColor: "#8ea6cc",
  headingSize: [36, 58.4, 84],
  bodySize: [12, 15.7, 22],
  headingLetterSpacing: [-0.08, 0, 0.1],
  css: (type) => `
:root { --ink-dim: ${type.primary}; --ink-dimmer: ${type.retone("#7d94b8")}; }
body { font-family: ${type.body}; }
h1, .bigtag { font-family: ${type.heading}; font-weight: ${type.headingWeight}; letter-spacing: ${type.headingLetterSpacing}em; }
h1 { font-size: ${px(type.headingSize)}; line-height: ${px((type.headingSize * 60) / 58.4)}; }
.bigtag { font-size: ${px((type.headingSize * 58.5) / 58.4)}; line-height: ${px((type.headingSize * 60) / 58.4)}; }
.lede, .facts { font-family: ${type.body}; font-size: ${px(type.bodySize)}; font-weight: ${type.bodyWeight}; }
#gl { filter: ${type.filter()}; }
@media (max-width: 1180px) {
  h1 { font-size: ${px((type.headingSize * 46) / 58.4)}; line-height: ${px((type.headingSize * 50) / 58.4)}; }
  .bigtag { font-size: ${px((type.headingSize * 40) / 58.4)}; line-height: ${px((type.headingSize * 45) / 58.4)}; }
}
@media (max-width: 820px) {
  h1 { font-size: ${px((type.headingSize * 38) / 58.4)}; line-height: ${px((type.headingSize * 42) / 58.4)}; }
  .bigtag { font-size: ${px((type.headingSize * 32) / 58.4)}; line-height: ${px((type.headingSize * 36) / 58.4)}; }
  .lede, .facts { font-size: ${px((type.bodySize * 14.5) / 15.7)}; }
}
@media (max-width: 620px) {
  h1 { font-size: ${px((type.headingSize * 31) / 58.4)}; line-height: ${px((type.headingSize * 35) / 58.4)}; }
  .bigtag { font-size: ${px((type.headingSize * 25) / 58.4)}; line-height: ${px((type.headingSize * 29) / 58.4)}; }
  .lede { font-size: ${px((type.bodySize * 14) / 15.7)}; }
}
@media (max-width: 620px) and (max-height: 820px) {
  .lede { font-size: ${px((type.bodySize * 13.5) / 15.7)}; }
  .bigtag { font-size: ${px((type.headingSize * 23) / 58.4)}; line-height: ${px((type.headingSize * 27) / 58.4)}; }
}
@media (max-height: 860px) and (min-width: 760px) {
  h1 { font-size: ${px((type.headingSize * 40) / 58.4)}; line-height: ${px((type.headingSize * 44) / 58.4)}; }
  .bigtag { font-size: ${px((type.headingSize * 28) / 58.4)}; line-height: ${px((type.headingSize * 32) / 58.4)}; }
  .lede, .facts { font-size: ${px((type.bodySize * 14.5) / 15.7)}; }
}
@media (max-height: 560px) {
  h1 { font-size: ${px((type.headingSize * 32) / 58.4)}; line-height: ${px((type.headingSize * 36) / 58.4)}; }
  .bigtag { font-size: ${px((type.headingSize * 26) / 58.4)}; line-height: ${px((type.headingSize * 30) / 58.4)}; }
  .lede, .facts { font-size: ${px((type.bodySize * 13.5) / 15.7)}; }
}
`,
};

/* ── Veyra ─────────────────────────────────────────────────────────────────────
   Veyra embeds DM Sans. Its violet CTA ramp is the brand colour, and the
   scene follows the same shift without changing at the authored default. */
export const VEYRA_TYPOGRAPHY: PageTypographyRecipe = {
  headingFonts: [DM_SANS, INSTRUMENT_SERIF, NEWSREADER, GEIST],
  bodyFonts: [DM_SANS, GEIST, NEWSREADER, INSTRUMENT_SERIF],
  headingWeights: ["300", "400", "500", "600", "700"],
  headingWeight: "400",
  bodyWeights: ["300", "400", "500", "600"],
  bodyWeight: "400",
  primaryColor: "#2a00ad",
  headingSize: [40, 64, 92],
  bodySize: [12, 16.5, 24],
  headingLetterSpacing: [-0.08, -0.0205, 0.1],
  css: (type) => `
body { font-family: ${type.body}; font-weight: ${type.bodyWeight}; }
h1, h1 em { font-family: ${type.heading}; font-weight: ${type.headingWeight}; }
h1 {
  font-size: clamp(40px, 4.34vw, ${px(type.headingSize)});
  letter-spacing: ${type.headingLetterSpacing}em;
}
.lede { font-size: ${px(type.bodySize)}; font-weight: ${type.bodyWeight}; }
.cta {
  background: linear-gradient(97deg, ${type.retone("#07071c")} 0%, ${type.retone("#0f0341")} 42%, ${type.retone("#1e0090")} 78%, ${type.primary} 100%);
}
#gl { filter: ${type.filter()}; }
@media (max-width: 860px) {
  h1 { font-size: clamp(32px, 7.6vw, ${px((type.headingSize * 48) / 64)}); }
  .lede { font-size: ${px((type.bodySize * 15.4) / 16.5)}; }
}
`,
};
```

### `src/shaders/landing-pages/LandingPageFrame.tsx`

Role: frame-component · 177 lines · 6756 bytes · SHA-256 `61de2cc50888aac4ac5557420b07fa47ed3543bb57c1e0055fafdefa53dbaa78`

```tsx
import { useEffect, useRef, useState, type CSSProperties } from "react";

import {
  applyPageCustomization,
  postPageCustomization,
  type LandingPageCustomization,
} from "./pageTypography";

export type LandingPageFrameProps = {
  /**
   * CSS selector for the authored visual layer when a complete page is reused
   * as a scene-only Background. The document stays untouched on disk; its UI
   * is suppressed only inside this catalog frame.
   */
  backgroundCanvasSelector?: string;
  /** Extra authored atmosphere layers (scrims, veils, vignettes) to retain. */
  backgroundVisualSelector?: string;
  className?: string;
  /** Loaded directly when the packaged document is byte-exact. */
  sourceUrl: string;
  /** Set only for derived variants; the frame renders this instead of fetching sourceUrl. */
  srcDoc?: string;
  style?: CSSProperties;
  title: string;
  /**
   * Typography and colour overrides, appended to the loaded document's own
   * head. The packaged file is never rewritten, so it stays byte-exact.
   */
  customization?: LandingPageCustomization;
  /**
   * Runs against the live frame on every load and whenever the callback's own
   * identity changes, which is how a page that exposes a scene API of its own
   * receives slider values. Memoize it on the values it reads.
   */
  applyScene?: (frame: HTMLIFrameElement) => void;
};

export type LandingPageProps = Omit<
  LandingPageFrameProps,
  "sourceUrl" | "title" | "customization" | "backgroundCanvasSelector" | "backgroundVisualSelector"
>;

const URL_FRAME_SANDBOX = "allow-downloads allow-forms allow-modals allow-popups allow-same-origin allow-scripts";
const SRCDOC_FRAME_SANDBOX = "allow-downloads allow-forms allow-modals allow-popups allow-scripts";

const BACKGROUND_PRESENTATION_STYLE_ID = "threeui-background-presentation";

export function applyBackgroundPresentation(
  frame: HTMLIFrameElement | null,
  backgroundCanvasSelector?: string,
  backgroundVisualSelector?: string,
) {
  const document = frame?.contentDocument;
  if (!document) return;

  document.getElementById(BACKGROUND_PRESENTATION_STYLE_ID)?.remove();
  document.querySelectorAll("[data-threeui-background-layer]").forEach((element) => {
    element.removeAttribute("data-threeui-background-layer");
    element.removeAttribute("data-threeui-background-fill");
  });

  if (!backgroundCanvasSelector) {
    document.documentElement.removeAttribute("data-threeui-presentation");
    return;
  }

  const canvas = document.querySelector<HTMLElement>(backgroundCanvasSelector);
  if (!canvas) return;

  canvas.setAttribute("data-threeui-background-layer", "");
  canvas.setAttribute("data-threeui-background-fill", "");
  if (backgroundVisualSelector) {
    document.querySelectorAll<HTMLElement>(backgroundVisualSelector).forEach((element) => {
      element.setAttribute("data-threeui-background-layer", "");
    });
  }

  document.documentElement.setAttribute("data-threeui-presentation", "background");
  const presentationStyle = document.createElement("style");
  presentationStyle.id = BACKGROUND_PRESENTATION_STYLE_ID;
  presentationStyle.textContent = `
    html[data-threeui-presentation="background"],
    html[data-threeui-presentation="background"] body {
      width: 100% !important;
      height: 100% !important;
      min-height: 100% !important;
      overflow: hidden !important;
    }
    html[data-threeui-presentation="background"] body * {
      visibility: hidden !important;
      pointer-events: none !important;
    }
    html[data-threeui-presentation="background"] [data-threeui-background-layer],
    html[data-threeui-presentation="background"] [data-threeui-background-layer] * {
      visibility: visible !important;
    }
    html[data-threeui-presentation="background"] [data-threeui-background-fill] {
      position: fixed !important;
      inset: 0 !important;
      width: 100vw !important;
      height: 100vh !important;
      max-width: none !important;
      max-height: none !important;
      margin: 0 !important;
      transform: none !important;
    }
  `;
  document.head.appendChild(presentationStyle);

  // The original renderer may have measured a split hero or section-sized
  // canvas. Re-run its authored resize path after the layer becomes full-frame.
  frame.contentWindow?.requestAnimationFrame(() => {
    frame.contentWindow?.dispatchEvent(new Event("resize"));
  });
}

export function LandingPageFrame({
  applyScene,
  backgroundCanvasSelector,
  backgroundVisualSelector,
  className = "",
  customization,
  sourceUrl,
  srcDoc,
  style,
  title,
}: LandingPageFrameProps) {
  const [ready, setReady] = useState(false);
  const frameRef = useRef<HTMLIFrameElement>(null);

  // Re-applied on every change; the load handler covers the first paint and
  // any navigation the page does inside its own frame.
  useEffect(() => {
    applyPageCustomization(frameRef.current, customization);
    postPageCustomization(frameRef.current, customization);
    applyBackgroundPresentation(frameRef.current, backgroundCanvasSelector, backgroundVisualSelector);
    if (frameRef.current) applyScene?.(frameRef.current);
  }, [applyScene, backgroundCanvasSelector, backgroundVisualSelector, customization]);

  return (
    <div
      className={`threeui-background landing-page-frame${className ? ` ${className}` : ""}`}
      data-state={ready ? "ready" : "loading"}
      style={{ position: "relative", overflow: "hidden", background: "#080808", pointerEvents: "auto", ...style }}
    >
      <iframe
        ref={frameRef}
        title={title}
        {...(srcDoc ? { srcDoc } : { src: sourceUrl })}
        sandbox={srcDoc ? SRCDOC_FRAME_SANDBOX : URL_FRAME_SANDBOX}
        loading="eager"
        onLoad={(event) => {
          applyPageCustomization(event.currentTarget, customization);
          postPageCustomization(event.currentTarget, customization);
          applyBackgroundPresentation(event.currentTarget, backgroundCanvasSelector, backgroundVisualSelector);
          applyScene?.(event.currentTarget);
          setReady(true);
        }}
        style={{
          position: "absolute",
          inset: 0,
          display: "block",
          width: "100%",
          height: "100%",
          border: 0,
          background: "#080808",
          // A background presentation begins life as the complete source page.
          // Keep that page visually sealed until onLoad has installed the
          // scene-only CSS, otherwise its authored navigation/copy can flash for
          // one paint before the canvas is isolated.
          opacity: backgroundCanvasSelector && !ready ? 0 : 1,
          pointerEvents: backgroundCanvasSelector && !ready ? "none" : "auto",
        }}
      />
    </div>
  );
}
```

### `public/landing-pages/meng-to-sketchbook.html`

Role: canonical-source · 1037 lines · 45528 bytes · SHA-256 `e0330548b1ac905cf1b81698163ffa29f8a3a8c39b8d39f9b71ba5b9255b6dd1`

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Meng To</title>
<meta name="description" content="designer, creator, AI educator — Singapore">
<style>
@font-face{font-family:'Instrument Serif';font-style:normal;font-weight:400;font-display:block;
  src:url(meng-to-sketchbook/instrument-serif.woff2) format('woff2')}
@font-face{font-family:'Instrument Serif';font-style:italic;font-weight:400;font-display:block;
  src:url(meng-to-sketchbook/instrument-serif-italic.woff2) format('woff2')}
@font-face{font-family:'Newsreader';font-style:normal;font-weight:200 600;font-display:swap;
  src:url(meng-to-sketchbook/newsreader.woff2) format('woff2')}

:root{
  --paper:#ece7dc;
  --ink:#2b2721;
  --ink-soft:rgba(43,39,33,.58);
  --ink-faint:rgba(43,39,33,.36);
  --hairline:rgba(43,39,33,.14);
  --earth:#9a6a3e;
  --display:'Instrument Serif',"New York",Georgia,'Times New Roman',serif;
  --font:'Newsreader',"New York",Georgia,'Times New Roman',serif;
  --track-caps:.24em;
  --track-nav:.06em;
}
*{box-sizing:border-box}
html,body{margin:0;padding:0}
html{-webkit-text-size-adjust:100%}
body{
  font-family:var(--font);font-weight:400;background:var(--paper);color:var(--ink);
  -webkit-font-smoothing:antialiased;overflow-x:hidden;
}
a{color:inherit;text-decoration:none}
button{font:inherit}
::selection{background:rgba(43,39,33,.85);color:var(--paper)}

/* the painted ground the whole page sits on */
.wash{
  position:fixed;inset:0;z-index:-2;pointer-events:none;
  background:url(meng-to-sketchbook/bg-wash.jpg) center top / cover no-repeat;
  opacity:.85;
}
.wash:after{
  content:"";position:absolute;inset:0;
  background:linear-gradient(180deg,rgba(236,231,220,.25) 0%,rgba(236,231,220,.72) 58%,var(--paper) 88%);
}

/* ---------------- top bar ---------------- */
.top{
  position:fixed;top:0;left:0;right:0;z-index:500;
  display:flex;flex-direction:column;align-items:center;gap:11px;
  padding-inline:clamp(16px,4vw,48px);padding-block:18px 64px;pointer-events:none;text-align:center;
}
.top>*{pointer-events:auto}
.top:before{
  content:"";position:absolute;inset:0;z-index:-1;
  background:linear-gradient(180deg,rgba(240,236,226,.94),rgba(240,236,226,.7) 48%,rgba(240,236,226,0));
  -webkit-backdrop-filter:blur(14px) saturate(.95);backdrop-filter:blur(14px) saturate(.95);
  -webkit-mask-image:linear-gradient(180deg,#000 46%,transparent);
  mask-image:linear-gradient(180deg,#000 46%,transparent);
}
.top .name{
  font-family:var(--display);font-size:clamp(24px,2.4vw,30px);letter-spacing:.01em;
  white-space:nowrap;line-height:1;
}
.top nav{
  display:flex;gap:clamp(14px,2vw,26px);font-size:15px;align-items:center;
  letter-spacing:var(--track-nav);font-weight:300;
}
.top nav a{color:var(--ink-soft);transition:color .2s}
.top nav a:hover,.top nav a[aria-current]{color:var(--ink)}
.top nav .top-socials{
  display:flex;align-items:center;gap:13px;margin-left:2px;padding-left:clamp(12px,1.6vw,20px);
  border-left:1px solid var(--hairline);
}
.icon-btn{display:inline-flex;align-items:center;justify-content:center;padding:4px;color:var(--ink-soft);transition:color .2s}
.icon-btn:hover{color:var(--ink)}
.top .icon-btn svg{width:16px;height:16px;display:block}
@media (max-width:640px){
  .top{padding-inline:12px;padding-block:13px 50px;gap:8px}
  .top .name{font-size:20px}
  .top nav{gap:11px;font-size:13px}
  .top nav .top-socials{gap:9px;padding-left:10px}
  .top .icon-btn{padding:2px}
  .top .icon-btn svg{width:14px;height:14px}
}

/* ---------------- hero ---------------- */
.hero{
  position:relative;display:grid;justify-items:center;align-content:center;
  min-height:100svh;overflow-anchor:none;
  padding:clamp(112px,13svh,152px) 0 clamp(72px,10svh,120px);
}
.botany{
  position:absolute;bottom:0;width:clamp(120px,15vw,250px);opacity:.5;
  pointer-events:none;user-select:none;z-index:0;
}
.botany.l{left:clamp(-40px,-1vw,0px);bottom:2%}
.botany.r{right:clamp(-30px,0vw,10px);bottom:-2%;width:clamp(100px,12vw,200px)}
@media (max-width:900px){.botany{display:none}}

.hero-kicker{
  font-size:12px;font-weight:400;letter-spacing:var(--track-caps);text-align:center;
  color:var(--ink-soft);margin:0 0 clamp(22px,3.4vh,40px);text-transform:uppercase;
}
.hero-down{
  position:absolute;bottom:30px;left:50%;transform:translateX(-50%);border:0;background:transparent;
  padding:10px 14px;color:var(--ink);cursor:pointer;-webkit-tap-highlight-color:transparent;
  animation:cue-breathe 2.6s ease-in-out infinite;z-index:3;
}
.hero-down:hover{animation:none;opacity:1}
@keyframes cue-breathe{0%,100%{opacity:.15}50%{opacity:.7}}
@media (prefers-reduced-motion:reduce){.hero-down{animation:none;opacity:.5}}

/* ---------------- sketchbook ---------------- */
.hero,.hero *{-webkit-user-select:none;-moz-user-select:none;user-select:none}
.hero img{-webkit-user-drag:none;user-drag:none}
.sb-wrap{display:grid;justify-items:center;gap:20px;width:100%;position:relative;z-index:2}
.sb-stage{
  display:flex;align-items:center;justify-content:center;width:100%;
  position:relative;
  touch-action:pan-y;
}
.sb-arrow{
  flex:none;display:inline-flex;align-items:center;justify-content:center;padding:6px 2px;
  border:0;background:transparent;color:var(--ink-faint);cursor:pointer;transition:color .2s;
  -webkit-tap-highlight-color:transparent;z-index:8;
}
.sb-arrow:hover{color:var(--ink)}

/* The box is the book's own untransformed frame: the loupe lives here, on
   the desk, while only .sb-tilt leans and scales underneath it. */
.sb-3d{
  position:relative;flex:1 1;min-width:0;max-width:900px;
  perspective:1750px;perspective-origin:50% 46%;
}
.sb-tilt{
  position:relative;
  transform-style:preserve-3d;
  transform:rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) scale(var(--zoom,1));
  will-change:transform;
}
.sb-book{position:relative;width:100%;aspect-ratio:1760/1240;transform-style:preserve-3d;z-index:1}

/* The book sits on a surface, so its shadow is a soft pool underneath —
   no box, no filter on the artwork, nothing with an edge of its own.
   Both blobs fade to zero well inside their own bounds, and both ease
   off while a leaf is in the air. */
.sb-cast{position:absolute;pointer-events:none;z-index:0}
.sb-cast.ambient{
  left:5%;right:5%;top:27%;bottom:2%;
  background:radial-gradient(50% 50% at 50% 58%,
    rgba(58,44,26,.34) 0%,rgba(58,44,26,.19) 40%,rgba(58,44,26,0) 74%);
  filter:blur(26px);
  opacity:calc(1 - var(--shade,0) * .42);
}
.sb-cast.contact{
  left:9%;right:9%;top:62%;bottom:10%;
  background:radial-gradient(50% 44% at 50% 42%,
    rgba(44,32,14,.40) 0%,rgba(44,32,14,.17) 48%,rgba(44,32,14,0) 78%);
  filter:blur(11px);
  opacity:calc(1 - var(--shade,0) * .5);
}
.sb-cast.hair{
  left:12%;right:12%;top:70%;bottom:17%;
  background:radial-gradient(50% 52% at 50% 40%,
    rgba(40,28,10,.34) 0%,rgba(40,28,10,0) 76%);
  filter:blur(4px);
  opacity:calc(1 - var(--shade,0) * .62);
}
.sb-full{position:absolute;inset:0}
.sb-full img{width:100%;height:auto;display:block}
.sb-half{position:absolute;top:0;bottom:0;width:50%;overflow-x:clip;overflow-y:visible}
.sb-half.left{left:0}
.sb-half.right{left:50%}
.sb-half-img{width:200%;max-width:none;height:auto;display:block}
.sb-half-img.right{margin-left:-100%}
/* the shadow the lifting leaf throws onto the page beneath it */
.gutter-shade{
  position:absolute;top:var(--pg,21.8%);bottom:var(--pg,21.8%);width:46%;
  pointer-events:none;opacity:calc(var(--shade,0) * .62);
  -webkit-mask-image:linear-gradient(180deg,transparent 0,#000 5.2%,#000 94.8%,transparent 100%);
  mask-image:linear-gradient(180deg,transparent 0,#000 5.2%,#000 94.8%,transparent 100%);
}
.gutter-shade.left{right:0;background:linear-gradient(270deg,rgba(52,38,20,.30),rgba(52,38,20,0) 82%)}
.gutter-shade.right{left:0;background:linear-gradient(90deg,rgba(52,38,20,.24),rgba(52,38,20,0) 82%)}

/* ---- the turning leaf: nested strips forming a curved surface ---- */
.curl{
  position:absolute;top:0;height:100%;
  width:calc(var(--bw,0px) * var(--span));
  transform-style:preserve-3d;z-index:6;
}
.curl.next{left:50%;transform-origin:left center;transform:rotateY(calc(-1 * var(--tt,0deg)))}
.curl.prev{right:50%;transform-origin:right center;transform:rotateY(var(--tt,0deg))}
.strip{
  position:absolute;top:0;height:100%;
  width:calc(var(--bw,0px) * var(--span) / var(--n));
  transform-style:preserve-3d;
}
.curl.next .strip{transform-origin:left center}
.curl.prev .strip{transform-origin:right center}
.curl.next>.strip{left:0}
.curl.prev>.strip{right:0;left:auto}
.curl.next .strip .strip{left:100%;transform:rotateY(var(--td,0deg))}
.curl.prev .strip .strip{right:100%;transform:rotateY(calc(-1 * var(--td,0deg)))}
.face{
  position:absolute;top:0;bottom:0;left:0;right:-1.1px;
  backface-visibility:hidden;-webkit-backface-visibility:hidden;
  background-repeat:no-repeat;background-size:var(--bw,0px) auto;
}
.face.back{transform:rotateY(180deg)}
.face .sh,.face .gl{
  -webkit-mask-image:linear-gradient(180deg,transparent 0,#000 5.2%,#000 94.8%,transparent 100%);
  mask-image:linear-gradient(180deg,transparent 0,#000 5.2%,#000 94.8%,transparent 100%);
}
.strip.edge .face .sh,.strip.edge .face .gl{
  -webkit-mask-image:linear-gradient(180deg,transparent 0,#000 9%,#000 91%,transparent 100%),var(--hf);
  mask-image:linear-gradient(180deg,transparent 0,#000 9%,#000 91%,transparent 100%),var(--hf);
  -webkit-mask-composite:source-in;mask-composite:intersect;
}
.curl.next .strip.edge .face.front,.curl.prev .strip.edge .face.back{
  --hf:linear-gradient(90deg,#000 0 22%,transparent 96%);
}
.curl.next .strip.edge .face.back,.curl.prev .strip.edge .face.front{
  --hf:linear-gradient(270deg,#000 0 22%,transparent 96%);
}
.face .sh{position:absolute;left:0;right:0;top:var(--pg,21.8%);bottom:var(--pg,21.8%);pointer-events:none}
.curl.next .face.front .sh,.curl.prev .face.back .sh{
  background:linear-gradient(90deg,rgba(58,43,20,var(--a1,0)),rgba(58,43,20,var(--a2,0)));
}
.curl.next .face.back .sh,.curl.prev .face.front .sh{
  background:linear-gradient(90deg,rgba(58,43,20,var(--a2,0)),rgba(58,43,20,var(--a1,0)));
}
.face .gl{
  position:absolute;left:0;right:0;top:var(--pg,21.8%);bottom:var(--pg,21.8%);
  pointer-events:none;background:#fffaf0;
  opacity:calc(var(--shade,0) * var(--lit,1) * var(--lit,1) * .20);
}

/* ---- the loupe: a real magnifier lying on the page.  Pick it up and
       drag it across the book; it stays where you put it. ---- */
.loupe{
  position:absolute;left:0;top:0;
  width:var(--lr,270px);height:var(--lr,270px);
  pointer-events:none;z-index:80;opacity:0;
  transition:opacity .25s ease;
  will-change:transform;
}
.loupe.on{opacity:1}
.loupe.held .ring{cursor:grabbing}
.loupe .ring{
  position:absolute;inset:0;border-radius:50%;
  pointer-events:auto;cursor:grab;
  padding:calc(var(--lr,270px) * .058);
  box-shadow:
    0 1px 2px rgba(58,44,26,.30),
    0 10px 18px rgba(58,44,26,.24),
    0 26px 40px rgba(58,44,26,.20),
    0 48px 66px rgba(58,44,26,.13);
}
/* the bezel is an annulus, so the glass really is see-through */
.loupe .ring:before{
  content:"";position:absolute;inset:0;border-radius:50%;pointer-events:none;
  background:linear-gradient(146deg,
    #fdf7e9 0%,#e6d7b4 14%,#b69d70 32%,#7d6740 50%,
    #cdbb92 66%,#f4ead3 80%,#9b8459 100%);
  box-shadow:
    inset 0 1px 1px rgba(255,255,255,.8),
    inset 0 -2px 3px rgba(70,52,26,.5);
  -webkit-mask-image:radial-gradient(circle closest-side at 50% 50%,transparent 0 88.2%,#000 89.8% 100%);
  mask-image:radial-gradient(circle closest-side at 50% 50%,transparent 0 88.2%,#000 89.8% 100%);
}
/* the handle, drawn before the bezel so the ring covers its inner end */
.loupe .grip{
  position:absolute;left:50%;top:50%;
  width:calc(var(--lr,270px) * .74);height:calc(var(--lr,270px) * .125);
  transform-origin:0 50%;
  transform:rotate(40deg) translate(calc(var(--lr,270px) * .33),-50%);
  border-radius:calc(var(--lr,270px) * .06);
  pointer-events:auto;cursor:grab;
  background:
    linear-gradient(180deg,rgba(255,255,255,.46) 0 13%,rgba(255,255,255,0) 44%,
                    rgba(0,0,0,.26) 100%),
    linear-gradient(90deg,#d9bd82 0 14%,#a9884e 14% 20%,#6d4c2b 20% 62%,
                    #5a3d22 62% 92%,#7a563180 92% 100%);
  box-shadow:0 8px 15px rgba(58,44,26,.26),0 18px 26px rgba(58,44,26,.14);
}
.lens{
  position:relative;display:block;width:100%;height:100%;border-radius:50%;
  background-repeat:no-repeat;overflow:hidden;
  box-shadow:
    inset 0 0 0 1px rgba(52,40,22,.55),
    inset 0 4px 12px rgba(40,30,14,.28),
    inset 0 -7px 16px rgba(255,250,240,.14);
}
.lens .mag{display:none}
/* A second copy of the book, sitting beside the glass outside the tilt, and
   scaled about whichever page point the glass is currently over. */
.zoomwrap{
  position:absolute;inset:0;overflow:hidden;pointer-events:none;z-index:2;
  opacity:0;
}
.zoominner{position:absolute;inset:0;transform-origin:0 0}
.lens:before,.lens:after{content:"";position:absolute;inset:0;border-radius:50%;pointer-events:none}
.lens:before{z-index:1}
.lens:after{z-index:2}
/* the glass bends and darkens toward its rim, with a faint colour fringe */
.lens:before{
  background:radial-gradient(circle at 50% 50%,
    rgba(0,0,0,0) 54%,rgba(58,44,26,.10) 76%,rgba(46,34,16,.34) 100%);
  box-shadow:
    inset 0 0 0 2px rgba(130,162,196,.26),
    inset 0 0 0 4px rgba(206,158,112,.15);
}
/* the dome: one broad specular and a tight crescent opposite it */
.lens:after{
  background:
    radial-gradient(36% 26% at 29% 19%,rgba(255,255,255,.30),rgba(255,255,255,0) 76%),
    radial-gradient(24% 16% at 74% 86%,rgba(255,255,255,.12),rgba(255,255,255,0) 80%),
    linear-gradient(150deg,rgba(255,255,255,.06) 0 18%,rgba(255,255,255,0) 42%);
}

/* ---- controls ---- */
.sb-tools{
  display:flex;align-items:center;gap:6px;
  border:1px solid var(--hairline);border-radius:999px;
  padding:5px 7px;background:rgba(250,246,238,.62);
  -webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);
}
.tool{
  width:28px;height:28px;display:inline-flex;align-items:center;justify-content:center;
  border:0;border-radius:50%;background:transparent;color:var(--ink-soft);
  cursor:pointer;transition:background-color .18s ease,color .18s ease;
}
.tool:hover{background:rgba(255,252,244,.9);color:var(--ink)}
.tool[aria-pressed="true"]{background:rgba(154,106,62,.16);color:var(--earth)}
.tool:disabled{opacity:.32;cursor:default;background:transparent}
.tool svg{width:15px;height:15px;display:block}
.tool-sep{width:1px;height:17px;background:var(--hairline);margin:0 2px}
.zoom-read{
  font-size:11px;letter-spacing:.1em;color:var(--ink-faint);
  min-width:40px;text-align:center;font-variant-numeric:tabular-nums;
}
@media (pointer:coarse){.loupe{display:none}}

.sb-zone{position:absolute;top:0;bottom:0;border:0;background:transparent;cursor:grab;z-index:60;-webkit-tap-highlight-color:transparent}
.sb-zone:active{cursor:grabbing}
.sb-prev{left:0;width:50%}
.sb-next{right:0;width:50%}

.sb-captions{display:grid;justify-items:center}
.sb-captions>*{grid-area:1/1;margin:0}
.sb-caption{font-size:13px;letter-spacing:var(--track-caps);text-transform:uppercase;color:var(--ink-soft);
  animation:sb-cap-in .5s ease both}
.sb-caption.live{animation:none}
@keyframes sb-cap-in{0%{opacity:0}}
@keyframes sb-cap-out{to{opacity:0}}
.sb-hint{
  margin:0;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-faint);
  transition:opacity .4s ease;
}
.sb-hint.gone{opacity:0}
.sb-wrap.intro .sb-full img,.sb-wrap.intro .sb-half-img{filter:url(#sb-mblur-1)}
.sb-wrap.intro.b2 .sb-full img,.sb-wrap.intro.b2 .sb-half-img{filter:url(#sb-mblur-2)}
.sb-wrap.intro .sb-caption{animation:none}
.sb-wrap.intro .sb-caption.cap-out{display:none}
@media (max-width:640px){
  .hero-kicker{font-size:10.5px;letter-spacing:.16em}
  .sb-wrap{width:100vw;margin-inline:calc(50% - 50vw)}
  .sb-arrow{position:absolute;top:50%;transform:translateY(-50%);z-index:70;padding:12px 6px}
  .sb-arrow.left{left:2px}
  .sb-arrow.right{right:2px}
  .sb-3d{max-width:none}
  .sb-hint{font-size:9.5px;letter-spacing:.1em;padding:0 16px;text-align:center}
}

/* ---------------- painted rules + sections ---------------- */
.rule{
  display:block;width:min(1080px,86vw);margin:clamp(30px,6vh,64px) auto;
  height:clamp(26px,4vw,46px);
  background:url(meng-to-sketchbook/divider.png) center / 100% auto no-repeat;
  opacity:.5;
}
.rule.short{width:min(420px,52vw);opacity:.4}
.section-label{
  font-size:11px;letter-spacing:var(--track-caps);text-transform:uppercase;
  color:var(--ink-faint);margin:0 0 18px;
}
.about{
  position:relative;max-width:1080px;margin:0 auto;
  padding:0 clamp(20px,5vw,48px);
  display:grid;grid-template-columns:minmax(0,1fr) auto;gap:clamp(24px,5vw,60px);align-items:start;
}
.bio{font-size:clamp(17px,1.7vw,20px);line-height:1.74;letter-spacing:.005em;margin:0;font-weight:300;max-width:56ch}
.bio-link{color:var(--ink);text-decoration:underline;text-decoration-color:rgba(43,39,33,.28);
  text-underline-offset:4px;transition:text-decoration-color .2s}
.bio-link:hover{text-decoration-color:var(--ink)}
.bloom{width:clamp(150px,17vw,260px);opacity:.9;user-select:none;align-self:center}
@media (max-width:760px){
  .about{grid-template-columns:1fr}
  .bloom{width:170px;justify-self:center}
}

.plates{max-width:1080px;margin:0 auto;padding:0 clamp(20px,5vw,48px)}
.plate-list{list-style:none;margin:0;padding:0;border-top:1px solid var(--hairline)}
.plate{
  display:grid;grid-template-columns:3.4em minmax(0,1fr) auto;gap:18px;align-items:baseline;
  width:100%;padding:15px 4px;border:0;border-bottom:1px solid var(--hairline);
  background:transparent;text-align:left;cursor:pointer;color:inherit;
  transition:background-color .22s ease,padding-left .22s ease;
}
.plate:hover,.plate[aria-current="true"]{background:rgba(255,252,244,.5);padding-left:12px}
.plate .n{font-size:12px;color:var(--ink-faint);letter-spacing:var(--track-nav)}
.plate .t{font-family:var(--display);font-size:clamp(19px,2.1vw,26px)}
.plate .p{font-size:12.5px;color:var(--ink-faint);letter-spacing:.08em;text-transform:uppercase;text-align:right}
.plate[aria-current="true"] .p{color:var(--earth)}

.foot{font-size:11.5px;letter-spacing:var(--track-caps);text-transform:uppercase;
  color:var(--ink-faint);text-align:center;padding-bottom:44px}
</style>
</head>
<body>
<div class="wash" aria-hidden="true"></div>
<main class="page home">

  <header class="top">
    <a class="name" href="#">Meng To</a>
    <nav>
      <a href="#plates">Journal</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
      <div class="top-socials">
        <a href="#" class="icon-btn" aria-label="X"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.7 2.6h3.3l-7.2 8.2 8.5 11.2h-6.7l-5.2-6.9-6 6.9H1.1l7.7-8.8L.7 2.6h6.9l4.7 6.3 5.4-6.3Zm-1.2 17.5h1.8L7.6 4.4H5.7l10.8 15.7Z"/></svg></a>
        <a href="#" class="icon-btn" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.9 3.5a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2ZM3.1 9.3h3.6v11.6H3.1V9.3Zm6 0h3.4v1.6h.05c.48-.9 1.65-1.85 3.4-1.85 3.63 0 4.3 2.35 4.3 5.4v6.45h-3.6v-5.72c0-1.36-.02-3.12-1.92-3.12-1.92 0-2.22 1.48-2.22 3.02v5.82H9.1V9.3Z"/></svg></a>
        <a href="#" class="icon-btn" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="2.6" y="2.6" width="18.8" height="18.8" rx="5.4"/><circle cx="12" cy="12" r="4.4"/><circle cx="17.6" cy="6.4" r="1.15" fill="currentColor" stroke="none"/></svg></a>
        <a href="#contact" class="icon-btn" aria-label="Email"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="2.4" y="4.6" width="19.2" height="14.8" rx="2.4"/><path d="m3.2 6.4 8.8 6.6 8.8-6.6"/></svg></a>
      </div>
    </nav>
  </header>

  <section id="sketchbook" class="hero">
    <img class="botany l" src="meng-to-sketchbook/botany-left.png" alt="" aria-hidden="true">
    <img class="botany r" src="meng-to-sketchbook/botany-right.png" alt="" aria-hidden="true">

    <p class="hero-kicker">Designer / Creator / AI Educator / Founder @ Singapore</p>

    <div class="sb-wrap" id="sbWrap">
      <svg width="0" height="0" style="position:absolute" aria-hidden="true">
        <filter id="sb-mblur-1"><feGaussianBlur stdDeviation="5 0"/></filter>
        <filter id="sb-mblur-2"><feGaussianBlur stdDeviation="14 0"/></filter>
      </svg>
      <div class="sb-stage" id="sbStage">
        <button class="sb-arrow left" id="sbLeft" aria-label="previous page">
          <svg viewBox="0 0 14 44" width="14" height="44" fill="none" aria-hidden="true"><polyline points="11,3 3,22 11,41" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <div class="sb-3d" id="sb3d">
          <div class="sb-tilt" id="sbTilt">
            <div class="sb-cast ambient" aria-hidden="true"></div>
            <div class="sb-cast contact" aria-hidden="true"></div>
            <div class="sb-cast hair" aria-hidden="true"></div>
            <div class="sb-book" id="sbBook"></div>
          </div>
          <div class="zoomwrap" id="zoomWrap" aria-hidden="true"><div class="zoominner" id="zoomInner"></div></div>
          <div class="loupe" id="loupe"><span class="grip"></span><span class="ring"><span class="lens" id="loupeLens"><span class="mag" id="loupeMag"></span></span></span></div>
        </div>
        <button class="sb-arrow right" id="sbRight" aria-label="next page">
          <svg viewBox="0 0 14 44" width="14" height="44" fill="none" aria-hidden="true"><polyline points="3,3 11,22 3,41" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
      </div>
      <div class="sb-captions" id="sbCaptions"></div>
      <div class="sb-tools" role="group" aria-label="view controls">
        <button class="tool" id="zOut" aria-label="zoom out"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="8.6" cy="8.6" r="5.6"/><path d="M12.8 12.8 17.4 17.4M6.2 8.6h4.8"/></svg></button>
        <span class="zoom-read" id="zRead">100%</span>
        <button class="tool" id="zIn" aria-label="zoom in"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="8.6" cy="8.6" r="5.6"/><path d="M12.8 12.8 17.4 17.4M6.2 8.6h4.8M8.6 6.2v4.8"/></svg></button>
        <span class="tool-sep" aria-hidden="true"></span>
        <button class="tool" id="loupeBtn" aria-label="magnifier" aria-pressed="true"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="8.8" cy="8.8" r="5.8"/><path d="M13 13l4.4 4.4"/><path d="M6.4 7.2a3.2 3.2 0 0 1 2.4-1.4" opacity=".55"/></svg></button>
      </div>
      <p class="sb-hint" id="sbHint">Drag the page to turn · Drag the glass across it</p>
    </div>

    <button class="hero-down" id="heroDown" aria-label="scroll to about">
      <svg viewBox="0 0 44 22" width="34" height="17" fill="none" aria-hidden="true">
        <polyline points="3,3 22,11 41,3" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
        <polyline points="3,11 22,19 41,11" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </section>

  <div class="rule" aria-hidden="true"></div>

  <section id="about" class="about">
    <div>
      <p class="section-label">About</p>
      <p class="bio">Meng To is a designer, creator, and AI educator based in Singapore. He is the founder of <a class="bio-link" href="#">Design+Code</a>, where for over a decade he has taught designers and developers to build real apps — from Sketch and Xcode through SwiftUI, and now the AI tools that let one person ship what used to take a team. His work lives on the seam between craft and code: teaching designers to build, and builders to see. This sketchbook is the other half of that — the city looked at slowly, in <a class="bio-link" href="#">ink and a little colour</a>: shophouse shutters, hawker tents, the bay at dusk.</p>
    </div>
    <img class="bloom" src="meng-to-sketchbook/bloom.png" alt="" aria-hidden="true">
  </section>

  <div class="rule short" aria-hidden="true"></div>

  <section id="plates" class="plates">
    <p class="section-label">Plates</p>
    <ol class="plate-list" id="plateList"></ol>
  </section>

  <div class="rule short" aria-hidden="true"></div>
  <p class="foot" id="contact">Singapore · Sketchbook · <a href="#" class="bio-link">hello@mengto.com</a></p>
</main>

<script>
/* =====================================================================
   Meng To — sketchbook hero.
   Spreads are transparent PNGs of an open sketchbook generated with
   Higgsfield.  The leaf that turns is a real curved surface: a chain of
   nested strips whose tangent sweeps through an arc, so the page bends
   the way paper bends instead of pivoting like a flat door.
   ===================================================================== */
const Q=new URLSearchParams(location.search);
const DIR='meng-to-sketchbook/';
const PAGES=[
  {file:'marina-bay-sands.png',   title:'Marina Bay Sands',          place:'Bayfront'},
  {file:'gardens-by-the-bay.png', title:'Gardens by the Bay',        place:'Supertree Grove'},
  {file:'merlion.png',            title:'The Merlion',               place:'Merlion Park'},
  {file:'buddha-tooth.png',       title:'Buddha Tooth Relic Temple', place:'Chinatown'},
  {file:'joo-chiat.png',          title:'Joo Chiat Shophouses',      place:'Katong'},
  {file:'lau-pa-sat.png',         title:'Lau Pa Sat',                place:'Raffles Quay'},
  {file:'marina-bay-skyline.png', title:'Marina Bay Skyline',        place:'The Bay'},
  {file:'singapore-river.png',    title:'Singapore River',           place:'Boat Quay'},
  {file:'botanic-gardens.png',    title:'Botanic Gardens',           place:'Tanglin'}
];
PAGES.forEach(p=>p.url=DIR+p.file);
const M=PAGES.length, LAND=6;

const wrap=document.getElementById('sbWrap');
const stage=document.getElementById('sbStage');
const sb3d=document.getElementById('sb3d');
const book=document.getElementById('sbBook');
const capBox=document.getElementById('sbCaptions');
const hint=document.getElementById('sbHint');
const REDUCED=matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ------------------------------------------------ the turning leaf */
const N=18;            /* strips — enough for a smooth curve          */
const SPAN=0.449;      /* gutter → outer page edge, as a fraction     */
const BETA=0.60;       /* peak curl of the arc, radians              */
let idx=0, turn=null;  /* turn = {dir, from, to, t}                   */
let strips=[];         /* the chain, kept for per-frame lighting       */

function el(t,c){const e=document.createElement(t);if(c)e.className=c;return e}
function imgEl(i,side){
  const im=new Image();im.className='sb-half-img '+side;
  im.draggable=false;im.alt='';im.src=PAGES[i].url;return im;
}

function halfEl(pos,i){
  const d=el('div','sb-half '+pos);
  d.appendChild(imgEl(i,pos));
  d.appendChild(el('div','gutter-shade '+pos));
  return d;
}
/* build the strip chain once per turn; background offsets are pure
   geometry, so they never need touching again while it animates */
function buildCurl(dir,from,to){
  strips=[];
  const c=el('div','curl '+dir);
  c.style.setProperty('--n',N);
  c.style.setProperty('--span',SPAN);
  let host=c;
  for(let i=0;i<N;i++){
    const s=el('div','strip');
    s.style.setProperty('--i',i);
    const gut='calc(var(--bw) * 0.5)';
    const sw='calc(var(--bw) * '+SPAN+' / '+N+')';
    const A='calc(-1 * ('+gut+' + '+i+' * '+sw+'))';         /* faces the from-page  */
    const B='calc('+(i+1)+' * '+sw+' - '+gut+')';            /* faces the to-page    */
    const f=el('div','face front'), b=el('div','face back');
    const dress=(e,url,px)=>{
      e.style.backgroundImage='url('+url+')';
      e.style.backgroundPositionX=px;
    };
    dress(f,PAGES[from].url, dir==='next'?A:B);
    dress(b,PAGES[to].url,   dir==='next'?B:A);
    f.appendChild(el('div','sh'));f.appendChild(el('div','gl'));
    b.appendChild(el('div','sh'));b.appendChild(el('div','gl'));
    s.appendChild(f);s.appendChild(b);
    if(i===N-1)s.classList.add('edge');
    host.appendChild(s);host=s;
    strips.push(s);
  }
  return c;
}
function applyTurn(t){
  const th=Math.PI*t;                       /* how far the leaf has swung */
  const beta=BETA*Math.sin(Math.PI*t);      /* it is flat at both ends    */
  const D=180/Math.PI;
  const tt=th+beta, td=2*beta/N;
  sb3d.style.setProperty('--tt',(tt*D).toFixed(2)+'deg');
  sb3d.style.setProperty('--td',(td*D).toFixed(3)+'deg');
  sb3d.style.setProperty('--shade',Math.sin(Math.PI*t).toFixed(3));
  fadeCaption(t);
  for(let i=0;i<strips.length;i++){
    const l1=Math.abs(Math.cos(tt-i*td));        /* facing at this strip's near edge */
    const l2=Math.abs(Math.cos(tt-(i+1)*td));    /* ...and at its far edge           */
    const st=strips[i].style;
    st.setProperty('--lit',l1.toFixed(3));
    st.setProperty('--a1',((1-l1)*.62).toFixed(3));
    st.setProperty('--a2',((1-l2)*.62).toFixed(3));
  }
}
function paint(){
  book.textContent='';
  if(!turn){
    const f=el('div','sb-full');
    const im=new Image();im.src=PAGES[idx].url;im.alt=PAGES[idx].title;
    im.draggable=false;
    f.appendChild(im);book.appendChild(f);
    sb3d.style.setProperty('--shade','0');
  }else{
    const next=turn.dir==='next';
    book.appendChild(halfEl('left', next?turn.from:turn.to));
    book.appendChild(halfEl('right',next?turn.to:turn.from));
    book.appendChild(buildCurl(turn.dir,turn.from,turn.to));
    applyTurn(turn.t);
  }
  const a=el('button','sb-zone sb-prev'),b=el('button','sb-zone sb-next');
  a.setAttribute('aria-label','previous page');b.setAttribute('aria-label','next page');
  book.appendChild(a);book.appendChild(b);
  layout();
  caption();
  marks();
  if(typeof syncZoomLayer==='function')syncZoomLayer();
  if(typeof placeLoupe==='function')placeLoupe();
}
function caption(){
  capBox.textContent='';
  capOut=capIn=null;
  if(turn){
    capOut=el('p','sb-caption live');capOut.textContent=PAGES[turn.from].title;capBox.appendChild(capOut);
    capIn=el('p','sb-caption live');capIn.textContent=PAGES[turn.to].title;capBox.appendChild(capIn);
    fadeCaption(turn.t);
  }else{
    const p=el('p','sb-caption');p.textContent=PAGES[idx].title;capBox.appendChild(p);
  }
}
let capOut=null,capIn=null;
function fadeCaption(t){
  if(!capOut||!capIn)return;
  /* the old title is gone before the new one arrives, so they never
     sit on top of each other mid-drag */
  const out=1-Math.max(0,Math.min(1,(t-0.10)/0.28));
  const inn=Math.max(0,Math.min(1,(t-0.56)/0.30));
  capOut.style.opacity=out.toFixed(3);
  capIn.style.opacity=inn.toFixed(3);
}
function layout(){
  sb3d.style.setProperty('--bw',book.clientWidth+'px');
}
addEventListener('resize',layout);

/* ------------------------------------------------------ spring loop */
let spring=null;
function animateTo(target,onDone,stiff,damp){
  spring={kind:'spring',v:0,target:target,done:onDone,k:stiff||150,c:damp||22};
  kick();
}
/* the riffle wants a fixed tempo, not a spring settling time */
function tweenTo(target,dur,onDone){
  spring={kind:'tween',from:turn?turn.t:0,target:target,dur:dur,e:0,done:onDone};
  kick();
}
let raf=null,last=0;
function tick(now){
  raf=null;
  const dt=Math.min(0.032,(now-last)/1000||0.016);last=now;
  if(spring&&turn){
    const s=spring;
    if(s.kind==='tween'){
      s.e+=dt;
      const k=Math.min(1,s.e/s.dur);
      turn.t=s.from+(s.target-s.from)*k;
      applyTurn(turn.t);
      if(k>=1){spring=null;const d=s.done;d&&d();}
    }else{
      const x=turn.t-s.target;
      s.v+= (-s.k*x - s.c*s.v)*dt;
      turn.t+=s.v*dt;
      if(Math.abs(turn.t-s.target)<0.002&&Math.abs(s.v)<0.02){
        turn.t=s.target;spring=null;
        applyTurn(turn.t);
        const d=s.done;d&&d();
      }else applyTurn(turn.t);
    }
  }
  viewSpring();
  const lmoved=loupeEase();
  /* kick() may already have queued the next frame from a done-callback */
  if((spring||viewActive||lmoved)&&raf===null) raf=requestAnimationFrame(tick);
}
function kick(){ if(raf===null){last=performance.now();raf=requestAnimationFrame(tick);} }

/* ------------------------------------------- tilt + zoom of the book */
const TILT_X=4.5, TILT_Y=7;      /* degrees — deliberately restrained   */
const ZOOM_MIN=0.9, ZOOM_MAX=1.5;
const view={rx:0,ry:0,z:1, trx:0,try_:0,tz:1};
let viewActive=false;
let lastZ=1;
function applyView(){
  sb3d.style.setProperty('--rx',view.rx.toFixed(2)+'deg');
  sb3d.style.setProperty('--ry',view.ry.toFixed(2)+'deg');
  sb3d.style.setProperty('--zoom',view.z.toFixed(3));
  /* the glass stays put, but the page under it has moved */
  if(view.z!==lastZ){lastZ=view.z;if(typeof placeLoupe==='function')placeLoupe();}
}
function viewSpring(){
  const e=0.14;
  let moved=false;
  for(const [k,t] of [['rx','trx'],['ry','try_'],['z','tz']]){
    const d=view[t]-view[k];
    if(Math.abs(d)>0.0006){view[k]+=d*e;moved=true;}
    else view[k]=view[t];
  }
  if(moved)applyView();
  viewActive=moved;
  return moved;
}
function setView(rx,ry,z){
  view.trx=Math.max(-TILT_X,Math.min(TILT_X,rx));
  view.try_=Math.max(-TILT_Y,Math.min(TILT_Y,ry));
  view.tz=Math.max(ZOOM_MIN,Math.min(ZOOM_MAX,z));
  viewActive=true;kick();
  if(typeof syncZoom==='function')syncZoom();
}
/* the book leans toward the cursor — no dragging, and never far */
function tiltTo(cx,cy){
  if(drag)return;                       /* hold still while a page is being turned */
  const r=book.getBoundingClientRect();
  if(!r.width)return;
  const nx=Math.max(-1,Math.min(1,(cx-(r.left+r.width/2))/(r.width*0.62)));
  const ny=Math.max(-1,Math.min(1,(cy-(r.top+r.height/2))/(r.height*0.9)));
  setView(-ny*TILT_X, nx*TILT_Y, view.tz);
}
addEventListener('pointermove',e=>{
  if(e.pointerType==='touch')return;
  tiltTo(e.clientX,e.clientY);
},{passive:true});
addEventListener('pointerout',e=>{if(!e.relatedTarget)setView(0,0,view.tz)});
addEventListener('blur',()=>setView(0,0,view.tz));
/* the wheel belongs to the page — zoom is on the toolbar, or a double click
   to come back to 100% */
stage.addEventListener('dblclick',()=>setView(view.trx,view.try_,1));

/* ------------------------------------------------------- pointer work */
let drag=null;
function bookRect(){return book.getBoundingClientRect()}
function hideHint(){hint.classList.add('gone')}

stage.addEventListener('pointerdown',e=>{
  if(e.button!==0)return;
  e.preventDefault();                     /* no text selection, no image drag */
  const onBook=e.target.closest('.sb-zone');
  stage.setPointerCapture(e.pointerId);
  hideHint();
  if(!onBook||introOn)return;
  const r=bookRect();
  const dir=(e.clientX-r.left)/r.width>0.5?'next':'prev';
  startTurn(dir,0);
  drag={dir:dir,x0:e.clientX,w:r.width,moved:0,vel:0,tPrev:performance.now()};
});
stage.addEventListener('pointermove',e=>{
  if(!drag)return;
  const dx=e.clientX-drag.x0;
  drag.moved=Math.max(drag.moved,Math.abs(dx));
  const raw=(drag.dir==='next'? -dx : dx)/(drag.w*0.62);
  const t=Math.max(0,Math.min(1,raw));
  const now=performance.now();
  drag.vel=(t-(turn?turn.t:0))/Math.max(0.001,(now-drag.tPrev)/1000);
  drag.tPrev=now;
  if(turn){turn.t=t;applyTurn(t);}
});
function endDrag(e){
  if(!drag)return;
  const d=drag;drag=null;
  if(!turn)return;
  if(d.moved<6){                              /* a tap, not a drag */
    commit();return;
  }
  const go = turn.t>0.42 || d.vel>1.1;
  if(go)commit(); else cancel();
}
stage.addEventListener('dragstart',e=>e.preventDefault());
stage.addEventListener('selectstart',e=>e.preventDefault());
stage.addEventListener('pointerup',endDrag);
stage.addEventListener('pointercancel',endDrag);

/* ------------------------------------------------------ turn control */
function startTurn(dir,t){
  spring=null;
  if(turn){idx=turn.to;turn=null;}      /* settle anything still in flight */
  if(typeof shoveLoupe==='function')shoveLoupe(dir);
  const from=idx;
  turn={dir:dir,from:from,to:dir==='next'?(from+1)%M:(from-1+M)%M,t:t||0};
  paint();
}
function commit(){
  if(!turn)return;
  if(REDUCED){idx=turn.to;turn=null;paint();return;}
  animateTo(1,()=>{idx=turn.to;turn=null;paint();},170,26);
  kick();
}
function cancel(){
  if(!turn)return;
  animateTo(0,()=>{turn=null;paint();},150,24);
  kick();
}
function step(dir){
  if(introOn)endIntro();
  if(turn){ /* finish whatever is in flight first */ idx=turn.to;turn=null; }
  startTurn(dir,0);commit();
}
function goTo(i){
  if(introOn)endIntro();
  if(i===idx)return;
  if(turn){idx=turn.to;turn=null;}
  const fwd=(i-idx+M)%M, back=(idx-i+M)%M;
  if(Math.min(fwd,back)===1){step(fwd===1?'next':'prev');return;}
  idx=i;paint();
}
document.getElementById('sbLeft').onclick=()=>step('prev');
document.getElementById('sbRight').onclick=()=>step('next');
addEventListener('keydown',e=>{
  if(e.key!=='ArrowLeft'&&e.key!=='ArrowRight')return;
  if(e.metaKey||e.ctrlKey||e.altKey)return;
  const t=e.target;
  if(t&&(t.tagName==='INPUT'||t.tagName==='TEXTAREA'||t.isContentEditable))return;
  e.preventDefault();hideHint();
  step(e.key==='ArrowRight'?'next':'prev');
});
document.getElementById('heroDown').onclick=()=>{
  document.getElementById('about').scrollIntoView({behavior:'smooth',block:'start'});
};

/* --------------------------------------------------- loupe + controls */
const loupe=document.getElementById('loupe');
const lens=document.getElementById('loupeLens');
const mag=document.getElementById('loupeMag');
const zRead=document.getElementById('zRead');
const loupeBtn=document.getElementById('loupeBtn');
const zInBtn=document.getElementById('zIn'), zOutBtn=document.getElementById('zOut');
const MAG=2.3;
const DESK=getComputedStyle(document.documentElement).getPropertyValue('--paper').trim()||'#ece7dc';
let loupeOn=true, lx=null, ly=null, lgrab=null, lTarget=null;

function loupeSize(){return Math.round(Math.max(165,Math.min(262,book.clientWidth*0.235)));}
/* the loupe's own coordinate space: stage pixels in live mode (it sits
   outside the book's transform), book pixels otherwise */
function bookBox(){
  return {x:0,y:0,w:book.clientWidth,h:book.clientHeight};
}
/* park it on the desk at the lower right, half off the book */
function restLoupe(){
  const b=bookBox();
  lx=b.x+b.w*0.88; ly=b.y+b.h*0.855;
  placeLoupe();
}
/* The glass sits above the tilt, in the book's untransformed pixels, so the
   lean of the page never nudges it.  What the tilt does change is which part
   of the paper is under the glass, and only the scale matters enough to
   correct for: the book is drawn about its own centre. */
const zoomWrap=document.getElementById('zoomWrap');
const zoomInner=document.getElementById('zoomInner');
/* mirror whatever the book is currently showing into the magnified copy */
function syncZoomLayer(){
  zoomInner.textContent='';
  for(const c of book.children){
    if(c.classList.contains('sb-zone'))continue;      /* hit targets need no copy */
    zoomInner.appendChild(c.cloneNode(true));
  }
}
function placeLoupe(){
  if(lx===null)return;
  const B=bookBox(), bw=B.w, bh=B.h;
  if(!bw)return;
  const R=loupeSize()/2, bez=R*2*0.058;
  loupe.style.setProperty('--lr',R*2+'px');
  loupe.style.transform='translate3d('+(lx-R).toFixed(1)+'px,'+(ly-R).toFixed(1)+'px,0)';
  if(loupeOn)loupe.classList.add('on');

  /* where the paper's edges actually land once the book is scaled */
  const z=view.z, cx=bw/2, cy=bh/2;
  const x0=cx+(bw*.051-cx)*z, x1=cx+(bw*.949-cx)*z;
  const y0=cy+(bh*.218-cy)*z, y1=cy+(bh*.782-cy)*z;
  /* How far the glass's own centre is inside the paper.  The copy fades out
     as it wanders off the sheet, so you are left looking through plain
     glass rather than at a sliver of page on flat desk. */
  const nx=Math.max(x0,Math.min(lx,x1));
  const ny=Math.max(y0,Math.min(ly,y1));
  const inside=(lx>x0&&lx<x1&&ly>y0&&ly<y1)
    ? Math.min(lx-x0, x1-lx, ly-y0, y1-ly)
    : -Math.hypot(lx-nx,ly-ny);
  const k=Math.max(0,Math.min(1,(inside+R*0.30)/(R*0.55)));

  zoomWrap.style.opacity=(loupeOn?k:0).toFixed(3);
  if(k<=0.002)return;
  const r=(R-bez).toFixed(1);
  const mask='radial-gradient(circle '+r+'px at '+lx.toFixed(1)+'px '+ly.toFixed(1)+'px,'
    +'#000 calc(100% - 1px),transparent 100%)';
  zoomWrap.style.webkitMaskImage=mask;
  zoomWrap.style.maskImage=mask;
  /* the page point beneath the glass, magnified about that same spot so the
     lens keeps showing MAG times whatever is on screen */
  const px=cx+(lx-cx)/z, py=cy+(ly-cy)/z, s=MAG*z;
  zoomInner.style.transform='translate('+(lx-px*s).toFixed(1)+'px,'+(ly-py*s).toFixed(1)+'px) '
    +'scale('+s.toFixed(4)+')';
}
/* the leaf shoves the glass aside as it sweeps past */
function shoveLoupe(dir){
  if(!loupeOn||lx===null||lgrab)return;
  const b=bookBox();
  /* which page point the glass covers, once the book's scale is undone */
  const nx=(b.w/2+(lx-b.x-b.w/2)/view.z)/b.w, ny=(b.h/2+(ly-b.y-b.h/2)/view.z)/b.h;
  if(nx<0.02||nx>0.98||ny<0.17||ny>0.83)return;      /* already clear of the page */
  lTarget={x:b.x+b.w*(dir==='next'?0.12:0.88), y:b.y+b.h*0.855};
  kick();
}
function loupeEase(){
  if(!lTarget)return false;
  if(lgrab){lTarget=null;return false;}
  const dx=lTarget.x-lx, dy=lTarget.y-ly;
  if(Math.abs(dx)<0.5&&Math.abs(dy)<0.5){lx=lTarget.x;ly=lTarget.y;lTarget=null;placeLoupe();return false;}
  lx+=dx*0.17;ly+=dy*0.17;placeLoupe();
  return true;
}
loupe.addEventListener('pointerdown',e=>{
  if(!loupeOn||e.button!==0)return;
  e.preventDefault();e.stopPropagation();     /* never starts a page turn */
  lTarget=null;
  lgrab={cx:e.clientX,cy:e.clientY,lx0:lx,ly0:ly};
  loupe.classList.add('held');
  loupe.setPointerCapture(e.pointerId);
  hideHint();
});
loupe.addEventListener('pointermove',e=>{
  if(!lgrab)return;
  const b=bookBox(), R=loupeSize()/2;
  /* the glass carries none of the book's transform, so the cursor maps 1:1 */
  lx=Math.max(b.x-R*0.7,Math.min(b.x+b.w+R*0.7, lgrab.lx0+(e.clientX-lgrab.cx)));
  ly=Math.max(b.y-R*0.7,Math.min(b.y+b.h+R*1.0, lgrab.ly0+(e.clientY-lgrab.cy)));
  placeLoupe();
});
function dropLoupe(){lgrab=null;loupe.classList.remove('held');}
loupe.addEventListener('pointerup',dropLoupe);
loupe.addEventListener('pointercancel',dropLoupe);
loupeBtn.onclick=()=>{
  loupeOn=!loupeOn;
  loupeBtn.setAttribute('aria-pressed',String(loupeOn));
  loupe.classList.toggle('on',loupeOn);
  if(loupeOn&&lx===null)restLoupe();
};
addEventListener('resize',()=>{lx=null;restLoupe();});

function syncZoom(){
  zRead.textContent=Math.round(view.tz*100)+'%';
  zOutBtn.disabled=view.tz<=ZOOM_MIN+0.001;
  zInBtn.disabled=view.tz>=ZOOM_MAX-0.001;
}
zInBtn.onclick=()=>{setView(view.trx,view.try_,view.tz*1.16);hideHint();};
zOutBtn.onclick=()=>{setView(view.trx,view.try_,view.tz/1.16);hideHint();};

/* --------------------------------------------------------- the index */
const plateList=document.getElementById('plateList');
PAGES.forEach((p,i)=>{
  const li=el('li');
  const b=el('button','plate');
  b.innerHTML='<span class="n">'+String(i+1).padStart(2,'0')+'</span>'+
              '<span class="t"></span><span class="p"></span>';
  b.querySelector('.t').textContent=p.title;
  b.querySelector('.p').textContent=p.place;
  b.onclick=()=>{goTo(i);document.getElementById('sketchbook').scrollIntoView({behavior:'smooth',block:'center'});};
  li.appendChild(b);plateList.appendChild(li);
});
function marks(){
  const cur=turn?turn.to:idx;
  plateList.querySelectorAll('.plate').forEach((b,i)=>b.setAttribute('aria-current',i===cur?'true':'false'));
}

/* ---------------------------------------------------------- the riffle */
let riffle=null,riffleAt=0,introOn=false;
function endIntro(){
  introOn=false;wrap.classList.remove('intro','b2');
}
function riffleStep(){
  const s=riffle[riffleAt];
  wrap.classList.toggle('b2',s.bell>0.55);
  startTurn('next',0);
  tweenTo(1,s.dur,()=>{
    idx=turn.to;turn=null;
    riffleAt++;
    if(introOn&&riffleAt<riffle.length){paint();riffleStep();}
    else{endIntro();paint();}
  });
}
function startIntro(){
  const coarse=matchMedia('(max-width: 640px), (pointer: coarse)').matches;
  if(coarse||REDUCED||Q.has('nointro')){idx=LAND;paint();return;}
  const steps=M+LAND;
  riffle=[];
  for(let r=0;r<steps;r++){
    const bell=Math.sin(Math.PI*(r/(steps-1)));
    riffle.push({bell:bell,dur:0.26-0.19*bell});
  }
  riffleAt=0;introOn=true;wrap.classList.add('intro');
  riffleStep();
}

/* ------------------------------------------------------------- boot */
(async function boot(){
  idx=Q.has('shot')?(parseInt(Q.get('shot'),10)||0)%M:0;
  paint();applyView();
  await Promise.all(PAGES.map(p=>{
    const im=new Image();im.src=p.url;
    return im.decode?im.decode().catch(()=>{}):new Promise(r=>{im.onload=im.onerror=r});
  }));
  if(document.fonts&&document.fonts.ready)await document.fonts.ready.catch(()=>{});
  syncZoom();restLoupe();
  document.body.dataset.ready='1';
  if(Q.has('shot')){
    if(Q.has('t')){startTurn(Q.get('dir')||'next',parseFloat(Q.get('t')));}
    return;
  }
  setTimeout(startIntro,220);
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
