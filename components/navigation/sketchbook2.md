---
name: "Sketchbook2"
library: "ComponentX"
id: "sketchbook2"
type: "navigation"
quality: "showcase"
tags: ["3d", "animation", "component", "data", "image", "loading", "navigation", "shader", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Sketchbook2

> **Type:** `navigation` · **Quality:** `showcase` · **ID:** `sketchbook2`
> **Path:** `components/navigation/sketchbook2.md`

**Sketchbook2** is a premium, production-ready component from the **ComponentX** library — engineered for navigation interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Showcase tier** — a high-impact, visually rich implementation — animated, 3D, or dependency-heavy by design.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `3d`, `animation`, `data` workflows.
- **Pattern coverage** — includes `image`, `loading`, `navigation` workflows.
- **Pattern coverage** — includes `shader`, `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Sketchbook2** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
name: add-sketchbook
description: "Build Sketchbook from its verified authored source using DOM + CSS 3D, including the complete renderer, interactions, and required assets. Use when Codex needs to implement, port, or adapt this effect without requiring the ComponentX package or reconstructing the visual from an approximation."
---

# Build Sketchbook

## Description

The exact Singapore paper sketchbook with nested-strip page curls, direct dragging, tilt, zoom, a movable magnifying glass, and its complete authored plate set.

Recreate the authored behavior from the verified source, not from screenshots or the abbreviated orchestration sample in this skill. The implementation may live directly in the target project and does not require `@componentx/core`.

## Technologies

- Semantic HTML, JavaScript, and CSS 3D transforms
- Eighteen nested strips per turning leaf for the page curl
- Pointer drag/tap, keyboard navigation, cursor tilt, zoom, draggable loupe, intro riffle, and reduced motion
- Fourteen exact artworks and three exact local font files
- Optional sandboxed `srcDoc` iframe for strict style and event isolation

## Verified source material

- `sketchbook/index.html — complete interaction source`
- `sketchbook/* — 14 artworks and 3 owned font files`
- `src/shaders/sketchbook/sketchbookDocument.js`
- `src/shaders/sketchbook/Sketchbook.tsx`

Source revision: `3938bc8def563f89ed587e52ac35ddc056c0a5f0`

## Implementation steps

1. Open every verified source file listed above and identify the renderer, host lifecycle, styles, and assets before editing.
2. Copy the complete authored document and all 17 local assets without renaming or recompressing them.
3. Preserve the page/spread model and build every turning leaf from the exact 18-strip nested transform structure.
4. Keep direct dragging, tap turns, arrows, keyboard controls, tilt, zoom, loupe movement, intro riffle, and coarse-pointer behavior together.
5. Resolve image and font URLs from one configurable asset base before loading the document.
6. Honor reduced motion, clean up listeners and animation frames, and verify every spread and asset path.
7. Give the local component a sized, overflow-controlled parent and verify desktop, mobile, reduced-motion, and context-loss behavior.

Asset handling: Copy all 14 artworks and three fonts under the configured asset base URL.

## Local component example

Import the copied local component rather than a package entrypoint:

```tsx
import { Sketchbook } from "./effects/sketchbook/Sketchbook";
import "./effects/sketchbook/styles.css";

export function Scene() {
  return <div className="effect-frame"><Sketchbook assetBaseUrl="/sketchbook/" /></div>;
}
```

## Core renderer pattern

This excerpt documents orchestration only. Copy the exact shader, geometry, pass, and interaction code from the verified source files.

```tsx
const documentSource = createSketchbookDocument("/sketchbook/");
return (
  <iframe
    title="Interactive Singapore sketchbook"
    srcDoc={documentSource}
    sandbox="allow-scripts"
  />
);
```

## Behavior contract

- Runtime: DOM + CSS 3D
- Passes: 18 nested CSS 3D strips per turning leaf
- Interaction: Drag or tap pages, arrows, keyboard, cursor tilt, zoom, and draggable loupe
- Assets: 14 exact artworks + 3 exact local font files
- **renderer** (host): DOM + CSS 3D
- **pageCurl** (fixed): 18 nested strips
- **interaction** (pointer): Drag + zoom + loupe
- **motion** (adaptive): Reduced-motion aware
- **assetBaseUrl** (string): /sketchbook/
- **assets** (fixed): 17 exact local files

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

Component: `Sketchbook`
Runtime: DOM + CSS 3D
Source revision: `3938bc8def563f89ed587e52ac35ddc056c0a5f0`

## Current configured usage

```tsx
import { Sketchbook } from "@componentx/threeui";
import "@componentx/threeui/style.css";

export function Scene() {
  return (
    <div className="shader-frame">
      <Sketchbook assetBaseUrl="/sketchbook/" />
    </div>
  );
}
```

## Required assets

Binary assets cannot be represented as executable text. Copy each asset byte-for-byte from the ComponentX package and verify its hash:

| Path | MIME type | Bytes | SHA-256 |
| --- | --- | ---: | --- |
| `public/sketchbook/bg-wash.jpg` | image/jpeg | 250415 | `3e8bbb177216bcb41ddc75cdaca38f732b9cd7ff4aaa409921623356072eb1f6` |
| `public/sketchbook/bloom.png` | image/png | 239231 | `7786aef42d10f1fbeca055b3ed14f51a47cb2a390b360eae92119f046989943e` |
| `public/sketchbook/botanic-gardens.png` | image/png | 822127 | `48ab10869e7afd4519cdc78d62625cd529bd3b2b5ff1c3c2789a8d721733da15` |
| `public/sketchbook/botany-left.png` | image/png | 133820 | `b3ed9e8613ba8826a5e137a5f8ad4bd21b6e7a544bc25e6184891079eae0470c` |
| `public/sketchbook/botany-right.png` | image/png | 376050 | `608025a35b8697b536e9ac668e51476c79072d1efb4a04316c068073f51cf655` |
| `public/sketchbook/buddha-tooth.png` | image/png | 792335 | `cf73e3fffd80a4c81b18ac83dfdba266c9f5c51e6a66047068a39c2885bc388a` |
| `public/sketchbook/divider.png` | image/png | 170548 | `ef8ed266a6ee6f2f6fb8f235657d9ea9e4d57af6d84e75e4e81373de9d3632bb` |
| `public/sketchbook/gardens-by-the-bay.png` | image/png | 844878 | `cf1d629d6a72d8cd4a98158fac44e9093a12e55257b43adcdaa07ae3ffbad7d3` |
| `public/sketchbook/instrument-serif-italic.woff2` | font/woff2 | 15684 | `6ee678c33f388dd7ba59700ebea635deb98821baafd817b09891f7927177f702` |
| `public/sketchbook/instrument-serif.woff2` | font/woff2 | 15040 | `60c06664b5a95c7de6cc3e00d1f9034d78bd1e40b564016b241674449a067d4d` |
| `public/sketchbook/joo-chiat.png` | image/png | 796739 | `a46701ba26b5ee31fc6484a12d908cb25d70baea92dec3013260c516e1157a0b` |
| `public/sketchbook/lau-pa-sat.png` | image/png | 872602 | `bb020724a54e6dbf72c19bc2a8113393aae43408da2bcada4a62b53eeb3b0ddb` |
| `public/sketchbook/marina-bay-sands.png` | image/png | 781481 | `c9cb4423072d69c4177833fa3f92923ce50ab7b395a257349793de3840b88608` |
| `public/sketchbook/marina-bay-skyline.png` | image/png | 804832 | `1cebb237d910a1429ff4f17f78efac059094c001629a579b598843eb0bdf363f` |
| `public/sketchbook/merlion.png` | image/png | 815697 | `bf5082288e212f62b2e15af766364d79e30050528a7ad48a020aa46d59d4666a` |
| `public/sketchbook/newsreader.woff2` | font/woff2 | 131848 | `01817351be3edfc1714fe6d60ddea6a22a169a5ebd033b50c7f9495e5d9c386a` |
| `public/sketchbook/singapore-river.png` | image/png | 744018 | `a3fc9cf2be0e3ce4b4630df6897d856ca49c6aca48f66a82e910367328bf667b` |

## Full implementation source

This bundle contains all 3 required text source files. Preserve their paths and contents; none are excerpts.

### `src/shaders/sketchbook/Sketchbook.tsx`

Role: component · 28 lines · 844 bytes · SHA-256 `17847ea51bdebcc2cedd5f920d1d45188f307c3579387cb5309fa8b6e5c404af`

```tsx
import { useMemo, useState } from "react";
import { createSketchbookDocument } from "./sketchbookDocument.js";

export type SketchbookProps = {
  assetBaseUrl?: string;
  className?: string;
};

export function Sketchbook({
  assetBaseUrl = "/sketchbook/",
  className = "",
}: SketchbookProps) {
  const [ready, setReady] = useState(false);
  const documentSource = useMemo(() => createSketchbookDocument(assetBaseUrl), [assetBaseUrl]);

  return (
    <div className={`sketchbook${className ? ` ${className}` : ""}`} data-state={ready ? "ready" : "loading"}>
      <iframe
        className={`sketchbook__frame${ready ? " is-ready" : ""}`}
        title="Interactive Singapore sketchbook"
        srcDoc={documentSource}
        sandbox="allow-scripts"
        loading="eager"
        onLoad={() => setReady(true)}
      />
    </div>
  );
}
```

### `src/shaders/sketchbook/sketchbookDocument.js`

Role: renderer-source · 12 lines · 49383 bytes · SHA-256 `256ab28edfde9ed198ff86d8923437620833696f25e354c2ee5d77c60835df61`

```javascript
/* This file is generated from the exact committed Sketchbook HTML. Do not edit by hand. */
/* Canonical source: /Users/mengto/Downloads/Projects/sketchbook/index.html */
/* Canonical source SHA-256: 2a97f4cc4f8cd521e37bd0f407a211ec62c97a4b337fa416de4424e50aa596d7 */
export const CANONICAL_SKETCHBOOK_HTML = "<!doctype html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<title>Meng To</title>\n<meta name=\"description\" content=\"designer, creator, AI educator — Singapore\">\n<style>\n@font-face{font-family:'Instrument Serif';font-style:normal;font-weight:400;font-display:block;\n  src:url(sketchbook/instrument-serif.woff2) format('woff2')}\n@font-face{font-family:'Instrument Serif';font-style:italic;font-weight:400;font-display:block;\n  src:url(sketchbook/instrument-serif-italic.woff2) format('woff2')}\n@font-face{font-family:'Newsreader';font-style:normal;font-weight:200 600;font-display:swap;\n  src:url(sketchbook/newsreader.woff2) format('woff2')}\n\n:root{\n  --paper:#ece7dc;\n  --ink:#2b2721;\n  --ink-soft:rgba(43,39,33,.58);\n  --ink-faint:rgba(43,39,33,.36);\n  --hairline:rgba(43,39,33,.14);\n  --earth:#9a6a3e;\n  --display:'Instrument Serif',\"New York\",Georgia,'Times New Roman',serif;\n  --font:'Newsreader',\"New York\",Georgia,'Times New Roman',serif;\n  --track-caps:.24em;\n  --track-nav:.06em;\n}\n*{box-sizing:border-box}\nhtml,body{margin:0;padding:0}\nhtml{-webkit-text-size-adjust:100%}\nbody{\n  font-family:var(--font);font-weight:400;background:var(--paper);color:var(--ink);\n  -webkit-font-smoothing:antialiased;overflow-x:hidden;\n}\na{color:inherit;text-decoration:none}\nbutton{font:inherit}\n::selection{background:rgba(43,39,33,.85);color:var(--paper)}\n\n/* the painted ground the whole page sits on */\n.wash{\n  position:fixed;inset:0;z-index:-2;pointer-events:none;\n  background:url(sketchbook/bg-wash.jpg) center top / cover no-repeat;\n  opacity:.85;\n}\n.wash:after{\n  content:\"\";position:absolute;inset:0;\n  background:linear-gradient(180deg,rgba(236,231,220,.25) 0%,rgba(236,231,220,.72) 58%,var(--paper) 88%);\n}\n\n/* ---------------- top bar ---------------- */\n.top{\n  position:fixed;top:0;left:0;right:0;z-index:500;\n  display:flex;flex-direction:column;align-items:center;gap:11px;\n  padding-inline:clamp(16px,4vw,48px);padding-block:18px 64px;pointer-events:none;text-align:center;\n}\n.top>*{pointer-events:auto}\n.top:before{\n  content:\"\";position:absolute;inset:0;z-index:-1;\n  background:linear-gradient(180deg,rgba(240,236,226,.94),rgba(240,236,226,.7) 48%,rgba(240,236,226,0));\n  -webkit-backdrop-filter:blur(14px) saturate(.95);backdrop-filter:blur(14px) saturate(.95);\n  -webkit-mask-image:linear-gradient(180deg,#000 46%,transparent);\n  mask-image:linear-gradient(180deg,#000 46%,transparent);\n}\n.top .name{\n  font-family:var(--display);font-size:clamp(24px,2.4vw,30px);letter-spacing:.01em;\n  white-space:nowrap;line-height:1;\n}\n.top nav{\n  display:flex;gap:clamp(14px,2vw,26px);font-size:15px;align-items:center;\n  letter-spacing:var(--track-nav);font-weight:300;\n}\n.top nav a{color:var(--ink-soft);transition:color .2s}\n.top nav a:hover,.top nav a[aria-current]{color:var(--ink)}\n.top nav .top-socials{\n  display:flex;align-items:center;gap:13px;margin-left:2px;padding-left:clamp(12px,1.6vw,20px);\n  border-left:1px solid var(--hairline);\n}\n.icon-btn{display:inline-flex;align-items:center;justify-content:center;padding:4px;color:var(--ink-soft);transition:color .2s}\n.icon-btn:hover{color:var(--ink)}\n.top .icon-btn svg{width:16px;height:16px;display:block}\n@media (max-width:640px){\n  .top{padding-inline:12px;padding-block:13px 50px;gap:8px}\n  .top .name{font-size:20px}\n  .top nav{gap:11px;font-size:13px}\n  .top nav .top-socials{gap:9px;padding-left:10px}\n  .top .icon-btn{padding:2px}\n  .top .icon-btn svg{width:14px;height:14px}\n}\n\n/* ---------------- hero ---------------- */\n.hero{\n  position:relative;display:grid;justify-items:center;align-content:center;\n  min-height:100svh;overflow-anchor:none;\n  padding:clamp(112px,13svh,152px) 0 clamp(72px,10svh,120px);\n}\n.botany{\n  position:absolute;bottom:0;width:clamp(120px,15vw,250px);opacity:.5;\n  pointer-events:none;user-select:none;z-index:0;\n}\n.botany.l{left:clamp(-40px,-1vw,0px);bottom:2%}\n.botany.r{right:clamp(-30px,0vw,10px);bottom:-2%;width:clamp(100px,12vw,200px)}\n@media (max-width:900px){.botany{display:none}}\n\n.hero-kicker{\n  font-size:12px;font-weight:400;letter-spacing:var(--track-caps);text-align:center;\n  color:var(--ink-soft);margin:0 0 clamp(22px,3.4vh,40px);text-transform:uppercase;\n}\n.hero-down{\n  position:absolute;bottom:30px;left:50%;transform:translateX(-50%);border:0;background:transparent;\n  padding:10px 14px;color:var(--ink);cursor:pointer;-webkit-tap-highlight-color:transparent;\n  animation:cue-breathe 2.6s ease-in-out infinite;z-index:3;\n}\n.hero-down:hover{animation:none;opacity:1}\n@keyframes cue-breathe{0%,100%{opacity:.15}50%{opacity:.7}}\n@media (prefers-reduced-motion:reduce){.hero-down{animation:none;opacity:.5}}\n\n/* ---------------- sketchbook ---------------- */\n.hero,.hero *{-webkit-user-select:none;-moz-user-select:none;user-select:none}\n.hero img{-webkit-user-drag:none;user-drag:none}\n.sb-wrap{display:grid;justify-items:center;gap:20px;width:100%;position:relative;z-index:2}\n.sb-stage{\n  display:flex;align-items:center;justify-content:center;width:100%;\n  position:relative;\n  touch-action:pan-y;\n}\n.sb-arrow{\n  flex:none;display:inline-flex;align-items:center;justify-content:center;padding:6px 2px;\n  border:0;background:transparent;color:var(--ink-faint);cursor:pointer;transition:color .2s;\n  -webkit-tap-highlight-color:transparent;z-index:8;\n}\n.sb-arrow:hover{color:var(--ink)}\n\n/* The box is the book's own untransformed frame: the loupe lives here, on\n   the desk, while only .sb-tilt leans and scales underneath it. */\n.sb-3d{\n  position:relative;flex:1 1;min-width:0;max-width:900px;\n  perspective:1750px;perspective-origin:50% 46%;\n}\n.sb-tilt{\n  position:relative;\n  transform-style:preserve-3d;\n  transform:rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) scale(var(--zoom,1));\n  will-change:transform;\n}\n.sb-book{position:relative;width:100%;aspect-ratio:1760/1240;transform-style:preserve-3d;z-index:1}\n\n/* The book sits on a surface, so its shadow is a soft pool underneath —\n   no box, no filter on the artwork, nothing with an edge of its own.\n   Both blobs fade to zero well inside their own bounds, and both ease\n   off while a leaf is in the air. */\n.sb-cast{position:absolute;pointer-events:none;z-index:0}\n.sb-cast.ambient{\n  left:5%;right:5%;top:27%;bottom:2%;\n  background:radial-gradient(50% 50% at 50% 58%,\n    rgba(58,44,26,.34) 0%,rgba(58,44,26,.19) 40%,rgba(58,44,26,0) 74%);\n  filter:blur(26px);\n  opacity:calc(1 - var(--shade,0) * .42);\n}\n.sb-cast.contact{\n  left:9%;right:9%;top:62%;bottom:10%;\n  background:radial-gradient(50% 44% at 50% 42%,\n    rgba(44,32,14,.40) 0%,rgba(44,32,14,.17) 48%,rgba(44,32,14,0) 78%);\n  filter:blur(11px);\n  opacity:calc(1 - var(--shade,0) * .5);\n}\n.sb-cast.hair{\n  left:12%;right:12%;top:70%;bottom:17%;\n  background:radial-gradient(50% 52% at 50% 40%,\n    rgba(40,28,10,.34) 0%,rgba(40,28,10,0) 76%);\n  filter:blur(4px);\n  opacity:calc(1 - var(--shade,0) * .62);\n}\n.sb-full{position:absolute;inset:0}\n.sb-full img{width:100%;height:auto;display:block}\n.sb-half{position:absolute;top:0;bottom:0;width:50%;overflow-x:clip;overflow-y:visible}\n.sb-half.left{left:0}\n.sb-half.right{left:50%}\n.sb-half-img{width:200%;max-width:none;height:auto;display:block}\n.sb-half-img.right{margin-left:-100%}\n/* the shadow the lifting leaf throws onto the page beneath it */\n.gutter-shade{\n  position:absolute;top:var(--pg,21.8%);bottom:var(--pg,21.8%);width:46%;\n  pointer-events:none;opacity:calc(var(--shade,0) * .62);\n  -webkit-mask-image:linear-gradient(180deg,transparent 0,#000 5.2%,#000 94.8%,transparent 100%);\n  mask-image:linear-gradient(180deg,transparent 0,#000 5.2%,#000 94.8%,transparent 100%);\n}\n.gutter-shade.left{right:0;background:linear-gradient(270deg,rgba(52,38,20,.30),rgba(52,38,20,0) 82%)}\n.gutter-shade.right{left:0;background:linear-gradient(90deg,rgba(52,38,20,.24),rgba(52,38,20,0) 82%)}\n\n/* ---- the turning leaf: nested strips forming a curved surface ---- */\n.curl{\n  position:absolute;top:0;height:100%;\n  width:calc(var(--bw,0px) * var(--span));\n  transform-style:preserve-3d;z-index:6;\n}\n.curl.next{left:50%;transform-origin:left center;transform:rotateY(calc(-1 * var(--tt,0deg)))}\n.curl.prev{right:50%;transform-origin:right center;transform:rotateY(var(--tt,0deg))}\n.strip{\n  position:absolute;top:0;height:100%;\n  width:calc(var(--bw,0px) * var(--span) / var(--n));\n  transform-style:preserve-3d;\n}\n.curl.next .strip{transform-origin:left center}\n.curl.prev .strip{transform-origin:right center}\n.curl.next>.strip{left:0}\n.curl.prev>.strip{right:0;left:auto}\n.curl.next .strip .strip{left:100%;transform:rotateY(var(--td,0deg))}\n.curl.prev .strip .strip{right:100%;transform:rotateY(calc(-1 * var(--td,0deg)))}\n.face{\n  position:absolute;top:0;bottom:0;left:0;right:-1.1px;\n  backface-visibility:hidden;-webkit-backface-visibility:hidden;\n  background-repeat:no-repeat;background-size:var(--bw,0px) auto;\n}\n.face.back{transform:rotateY(180deg)}\n.face .sh,.face .gl{\n  -webkit-mask-image:linear-gradient(180deg,transparent 0,#000 5.2%,#000 94.8%,transparent 100%);\n  mask-image:linear-gradient(180deg,transparent 0,#000 5.2%,#000 94.8%,transparent 100%);\n}\n.strip.edge .face .sh,.strip.edge .face .gl{\n  -webkit-mask-image:linear-gradient(180deg,transparent 0,#000 9%,#000 91%,transparent 100%),var(--hf);\n  mask-image:linear-gradient(180deg,transparent 0,#000 9%,#000 91%,transparent 100%),var(--hf);\n  -webkit-mask-composite:source-in;mask-composite:intersect;\n}\n.curl.next .strip.edge .face.front,.curl.prev .strip.edge .face.back{\n  --hf:linear-gradient(90deg,#000 0 22%,transparent 96%);\n}\n.curl.next .strip.edge .face.back,.curl.prev .strip.edge .face.front{\n  --hf:linear-gradient(270deg,#000 0 22%,transparent 96%);\n}\n.face .sh{position:absolute;left:0;right:0;top:var(--pg,21.8%);bottom:var(--pg,21.8%);pointer-events:none}\n.curl.next .face.front .sh,.curl.prev .face.back .sh{\n  background:linear-gradient(90deg,rgba(58,43,20,var(--a1,0)),rgba(58,43,20,var(--a2,0)));\n}\n.curl.next .face.back .sh,.curl.prev .face.front .sh{\n  background:linear-gradient(90deg,rgba(58,43,20,var(--a2,0)),rgba(58,43,20,var(--a1,0)));\n}\n.face .gl{\n  position:absolute;left:0;right:0;top:var(--pg,21.8%);bottom:var(--pg,21.8%);\n  pointer-events:none;background:#fffaf0;\n  opacity:calc(var(--shade,0) * var(--lit,1) * var(--lit,1) * .20);\n}\n\n/* ---- the loupe: a real magnifier lying on the page.  Pick it up and\n       drag it across the book; it stays where you put it. ---- */\n.loupe{\n  position:absolute;left:0;top:0;\n  width:var(--lr,270px);height:var(--lr,270px);\n  pointer-events:none;z-index:80;opacity:0;\n  transition:opacity .25s ease;\n  will-change:transform;\n}\n.loupe.on{opacity:1}\n.loupe.held .ring{cursor:grabbing}\n.loupe .ring{\n  position:absolute;inset:0;border-radius:50%;\n  pointer-events:auto;cursor:grab;\n  padding:calc(var(--lr,270px) * .058);\n  box-shadow:\n    0 1px 2px rgba(58,44,26,.30),\n    0 10px 18px rgba(58,44,26,.24),\n    0 26px 40px rgba(58,44,26,.20),\n    0 48px 66px rgba(58,44,26,.13);\n}\n/* the bezel is an annulus, so the glass really is see-through */\n.loupe .ring:before{\n  content:\"\";position:absolute;inset:0;border-radius:50%;pointer-events:none;\n  background:linear-gradient(146deg,\n    #fdf7e9 0%,#e6d7b4 14%,#b69d70 32%,#7d6740 50%,\n    #cdbb92 66%,#f4ead3 80%,#9b8459 100%);\n  box-shadow:\n    inset 0 1px 1px rgba(255,255,255,.8),\n    inset 0 -2px 3px rgba(70,52,26,.5);\n  -webkit-mask-image:radial-gradient(circle closest-side at 50% 50%,transparent 0 88.2%,#000 89.8% 100%);\n  mask-image:radial-gradient(circle closest-side at 50% 50%,transparent 0 88.2%,#000 89.8% 100%);\n}\n/* the handle, drawn before the bezel so the ring covers its inner end */\n.loupe .grip{\n  position:absolute;left:50%;top:50%;\n  width:calc(var(--lr,270px) * .74);height:calc(var(--lr,270px) * .125);\n  transform-origin:0 50%;\n  transform:rotate(40deg) translate(calc(var(--lr,270px) * .33),-50%);\n  border-radius:calc(var(--lr,270px) * .06);\n  pointer-events:auto;cursor:grab;\n  background:\n    linear-gradient(180deg,rgba(255,255,255,.46) 0 13%,rgba(255,255,255,0) 44%,\n                    rgba(0,0,0,.26) 100%),\n    linear-gradient(90deg,#d9bd82 0 14%,#a9884e 14% 20%,#6d4c2b 20% 62%,\n                    #5a3d22 62% 92%,#7a563180 92% 100%);\n  box-shadow:0 8px 15px rgba(58,44,26,.26),0 18px 26px rgba(58,44,26,.14);\n}\n.lens{\n  position:relative;display:block;width:100%;height:100%;border-radius:50%;\n  background-repeat:no-repeat;overflow:hidden;\n  box-shadow:\n    inset 0 0 0 1px rgba(52,40,22,.55),\n    inset 0 4px 12px rgba(40,30,14,.28),\n    inset 0 -7px 16px rgba(255,250,240,.14);\n}\n.lens .mag{display:none}\n/* A second copy of the book, sitting beside the glass outside the tilt, and\n   scaled about whichever page point the glass is currently over. */\n.zoomwrap{\n  position:absolute;inset:0;overflow:hidden;pointer-events:none;z-index:2;\n  opacity:0;\n}\n.zoominner{position:absolute;inset:0;transform-origin:0 0}\n.lens:before,.lens:after{content:\"\";position:absolute;inset:0;border-radius:50%;pointer-events:none}\n.lens:before{z-index:1}\n.lens:after{z-index:2}\n/* the glass bends and darkens toward its rim, with a faint colour fringe */\n.lens:before{\n  background:radial-gradient(circle at 50% 50%,\n    rgba(0,0,0,0) 54%,rgba(58,44,26,.10) 76%,rgba(46,34,16,.34) 100%);\n  box-shadow:\n    inset 0 0 0 2px rgba(130,162,196,.26),\n    inset 0 0 0 4px rgba(206,158,112,.15);\n}\n/* the dome: one broad specular and a tight crescent opposite it */\n.lens:after{\n  background:\n    radial-gradient(36% 26% at 29% 19%,rgba(255,255,255,.30),rgba(255,255,255,0) 76%),\n    radial-gradient(24% 16% at 74% 86%,rgba(255,255,255,.12),rgba(255,255,255,0) 80%),\n    linear-gradient(150deg,rgba(255,255,255,.06) 0 18%,rgba(255,255,255,0) 42%);\n}\n\n/* ---- controls ---- */\n.sb-tools{\n  display:flex;align-items:center;gap:6px;\n  border:1px solid var(--hairline);border-radius:999px;\n  padding:5px 7px;background:rgba(250,246,238,.62);\n  -webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);\n}\n.tool{\n  width:28px;height:28px;display:inline-flex;align-items:center;justify-content:center;\n  border:0;border-radius:50%;background:transparent;color:var(--ink-soft);\n  cursor:pointer;transition:background-color .18s ease,color .18s ease;\n}\n.tool:hover{background:rgba(255,252,244,.9);color:var(--ink)}\n.tool[aria-pressed=\"true\"]{background:rgba(154,106,62,.16);color:var(--earth)}\n.tool:disabled{opacity:.32;cursor:default;background:transparent}\n.tool svg{width:15px;height:15px;display:block}\n.tool-sep{width:1px;height:17px;background:var(--hairline);margin:0 2px}\n.zoom-read{\n  font-size:11px;letter-spacing:.1em;color:var(--ink-faint);\n  min-width:40px;text-align:center;font-variant-numeric:tabular-nums;\n}\n@media (pointer:coarse){.loupe{display:none}}\n\n.sb-zone{position:absolute;top:0;bottom:0;border:0;background:transparent;cursor:grab;z-index:60;-webkit-tap-highlight-color:transparent}\n.sb-zone:active{cursor:grabbing}\n.sb-prev{left:0;width:50%}\n.sb-next{right:0;width:50%}\n\n.sb-captions{display:grid;justify-items:center}\n.sb-captions>*{grid-area:1/1;margin:0}\n.sb-caption{font-size:13px;letter-spacing:var(--track-caps);text-transform:uppercase;color:var(--ink-soft);\n  animation:sb-cap-in .5s ease both}\n.sb-caption.live{animation:none}\n@keyframes sb-cap-in{0%{opacity:0}}\n@keyframes sb-cap-out{to{opacity:0}}\n.sb-hint{\n  margin:0;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-faint);\n  transition:opacity .4s ease;\n}\n.sb-hint.gone{opacity:0}\n.sb-wrap.intro .sb-full img,.sb-wrap.intro .sb-half-img{filter:url(#sb-mblur-1)}\n.sb-wrap.intro.b2 .sb-full img,.sb-wrap.intro.b2 .sb-half-img{filter:url(#sb-mblur-2)}\n.sb-wrap.intro .sb-caption{animation:none}\n.sb-wrap.intro .sb-caption.cap-out{display:none}\n@media (max-width:640px){\n  .hero-kicker{font-size:10.5px;letter-spacing:.16em}\n  .sb-wrap{width:100vw;margin-inline:calc(50% - 50vw)}\n  .sb-arrow{position:absolute;top:50%;transform:translateY(-50%);z-index:70;padding:12px 6px}\n  .sb-arrow.left{left:2px}\n  .sb-arrow.right{right:2px}\n  .sb-3d{max-width:none}\n  .sb-hint{font-size:9.5px;letter-spacing:.1em;padding:0 16px;text-align:center}\n}\n\n/* ---------------- painted rules + sections ---------------- */\n.rule{\n  display:block;width:min(1080px,86vw);margin:clamp(30px,6vh,64px) auto;\n  height:clamp(26px,4vw,46px);\n  background:url(sketchbook/divider.png) center / 100% auto no-repeat;\n  opacity:.5;\n}\n.rule.short{width:min(420px,52vw);opacity:.4}\n.section-label{\n  font-size:11px;letter-spacing:var(--track-caps);text-transform:uppercase;\n  color:var(--ink-faint);margin:0 0 18px;\n}\n.about{\n  position:relative;max-width:1080px;margin:0 auto;\n  padding:0 clamp(20px,5vw,48px);\n  display:grid;grid-template-columns:minmax(0,1fr) auto;gap:clamp(24px,5vw,60px);align-items:start;\n}\n.bio{font-size:clamp(17px,1.7vw,20px);line-height:1.74;letter-spacing:.005em;margin:0;font-weight:300;max-width:56ch}\n.bio-link{color:var(--ink);text-decoration:underline;text-decoration-color:rgba(43,39,33,.28);\n  text-underline-offset:4px;transition:text-decoration-color .2s}\n.bio-link:hover{text-decoration-color:var(--ink)}\n.bloom{width:clamp(150px,17vw,260px);opacity:.9;user-select:none;align-self:center}\n@media (max-width:760px){\n  .about{grid-template-columns:1fr}\n  .bloom{width:170px;justify-self:center}\n}\n\n.contact{max-width:1080px;margin:0 auto;padding:0 clamp(20px,5vw,48px)}\n.contact-social{\n  margin:20px 0 0;display:flex;flex-wrap:wrap;gap:22px;\n  font-size:12px;letter-spacing:var(--track-caps);text-transform:uppercase;\n}\n.about .bio + .bio{margin-top:1.1em}\n\n.plates{max-width:1080px;margin:0 auto;padding:0 clamp(20px,5vw,48px)}\n.plate-list{list-style:none;margin:0;padding:0;border-top:1px solid var(--hairline)}\n.plate{\n  display:grid;grid-template-columns:3.4em minmax(0,1fr) auto;gap:18px;align-items:baseline;\n  width:100%;padding:15px 4px;border:0;border-bottom:1px solid var(--hairline);\n  background:transparent;text-align:left;cursor:pointer;color:inherit;\n  transition:background-color .22s ease,padding-left .22s ease;\n}\n.plate:hover,.plate[aria-current=\"true\"]{background:rgba(255,252,244,.5);padding-left:12px}\n.plate .n{font-size:12px;color:var(--ink-faint);letter-spacing:var(--track-nav)}\n.plate .t{font-family:var(--display);font-size:clamp(19px,2.1vw,26px)}\n.plate .p{font-size:12.5px;color:var(--ink-faint);letter-spacing:.08em;text-transform:uppercase;text-align:right}\n.plate[aria-current=\"true\"] .p{color:var(--earth)}\n\n.foot{font-size:11.5px;letter-spacing:var(--track-caps);text-transform:uppercase;\n  color:var(--ink-faint);text-align:center;margin-top:clamp(48px,7vh,84px);padding-bottom:44px}\n</style>\n</head>\n<body>\n<div class=\"wash\" aria-hidden=\"true\"></div>\n<main class=\"page home\">\n\n  <header class=\"top\">\n    <a class=\"name\" href=\"#\">Meng To</a>\n    <nav>\n      <a href=\"#plates\">Journal</a>\n      <a href=\"#about\">About</a>\n      <a href=\"#contact\">Contact</a>\n      <div class=\"top-socials\">\n        <a href=\"https://x.com/MengTo\" target=\"_blank\" rel=\"me noopener\" class=\"icon-btn\" aria-label=\"X\"><svg viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M17.7 2.6h3.3l-7.2 8.2 8.5 11.2h-6.7l-5.2-6.9-6 6.9H1.1l7.7-8.8L.7 2.6h6.9l4.7 6.3 5.4-6.3Zm-1.2 17.5h1.8L7.6 4.4H5.7l10.8 15.7Z\"/></svg></a>\n        <a href=\"https://www.linkedin.com/in/mengto\" target=\"_blank\" rel=\"me noopener\" class=\"icon-btn\" aria-label=\"LinkedIn\"><svg viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M4.9 3.5a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2ZM3.1 9.3h3.6v11.6H3.1V9.3Zm6 0h3.4v1.6h.05c.48-.9 1.65-1.85 3.4-1.85 3.63 0 4.3 2.35 4.3 5.4v6.45h-3.6v-5.72c0-1.36-.02-3.12-1.92-3.12-1.92 0-2.22 1.48-2.22 3.02v5.82H9.1V9.3Z\"/></svg></a>\n        <a href=\"https://www.instagram.com/mengto\" target=\"_blank\" rel=\"me noopener\" class=\"icon-btn\" aria-label=\"Instagram\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" aria-hidden=\"true\"><rect x=\"2.6\" y=\"2.6\" width=\"18.8\" height=\"18.8\" rx=\"5.4\"/><circle cx=\"12\" cy=\"12\" r=\"4.4\"/><circle cx=\"17.6\" cy=\"6.4\" r=\"1.15\" fill=\"currentColor\" stroke=\"none\"/></svg></a>\n        <a href=\"mailto:meng@componentx.dev\" class=\"icon-btn\" aria-label=\"Email\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" aria-hidden=\"true\"><rect x=\"2.4\" y=\"4.6\" width=\"19.2\" height=\"14.8\" rx=\"2.4\"/><path d=\"m3.2 6.4 8.8 6.6 8.8-6.6\"/></svg></a>\n      </div>\n    </nav>\n  </header>\n\n  <section id=\"sketchbook\" class=\"hero\">\n    <img class=\"botany l\" src=\"sketchbook/botany-left.png\" alt=\"\" aria-hidden=\"true\">\n    <img class=\"botany r\" src=\"sketchbook/botany-right.png\" alt=\"\" aria-hidden=\"true\">\n\n    <p class=\"hero-kicker\">Designer / Creator / AI Educator / Founder @ Singapore</p>\n\n    <div class=\"sb-wrap\" id=\"sbWrap\">\n      <svg width=\"0\" height=\"0\" style=\"position:absolute\" aria-hidden=\"true\">\n        <filter id=\"sb-mblur-1\"><feGaussianBlur stdDeviation=\"5 0\"/></filter>\n        <filter id=\"sb-mblur-2\"><feGaussianBlur stdDeviation=\"14 0\"/></filter>\n      </svg>\n      <div class=\"sb-stage\" id=\"sbStage\">\n        <button class=\"sb-arrow left\" id=\"sbLeft\" aria-label=\"previous page\">\n          <svg viewBox=\"0 0 14 44\" width=\"14\" height=\"44\" fill=\"none\" aria-hidden=\"true\"><polyline points=\"11,3 3,22 11,41\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n        </button>\n        <div class=\"sb-3d\" id=\"sb3d\">\n          <div class=\"sb-tilt\" id=\"sbTilt\">\n            <div class=\"sb-cast ambient\" aria-hidden=\"true\"></div>\n            <div class=\"sb-cast contact\" aria-hidden=\"true\"></div>\n            <div class=\"sb-cast hair\" aria-hidden=\"true\"></div>\n            <div class=\"sb-book\" id=\"sbBook\"></div>\n          </div>\n          <div class=\"zoomwrap\" id=\"zoomWrap\" aria-hidden=\"true\"><div class=\"zoominner\" id=\"zoomInner\"></div></div>\n          <div class=\"loupe\" id=\"loupe\"><span class=\"grip\"></span><span class=\"ring\"><span class=\"lens\" id=\"loupeLens\"><span class=\"mag\" id=\"loupeMag\"></span></span></span></div>\n        </div>\n        <button class=\"sb-arrow right\" id=\"sbRight\" aria-label=\"next page\">\n          <svg viewBox=\"0 0 14 44\" width=\"14\" height=\"44\" fill=\"none\" aria-hidden=\"true\"><polyline points=\"3,3 11,22 3,41\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n        </button>\n      </div>\n      <div class=\"sb-captions\" id=\"sbCaptions\"></div>\n      <div class=\"sb-tools\" role=\"group\" aria-label=\"view controls\">\n        <button class=\"tool\" id=\"zOut\" aria-label=\"zoom out\"><svg viewBox=\"0 0 20 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"><circle cx=\"8.6\" cy=\"8.6\" r=\"5.6\"/><path d=\"M12.8 12.8 17.4 17.4M6.2 8.6h4.8\"/></svg></button>\n        <span class=\"zoom-read\" id=\"zRead\">100%</span>\n        <button class=\"tool\" id=\"zIn\" aria-label=\"zoom in\"><svg viewBox=\"0 0 20 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"><circle cx=\"8.6\" cy=\"8.6\" r=\"5.6\"/><path d=\"M12.8 12.8 17.4 17.4M6.2 8.6h4.8M8.6 6.2v4.8\"/></svg></button>\n        <span class=\"tool-sep\" aria-hidden=\"true\"></span>\n        <button class=\"tool\" id=\"loupeBtn\" aria-label=\"magnifier\" aria-pressed=\"true\"><svg viewBox=\"0 0 20 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"><circle cx=\"8.8\" cy=\"8.8\" r=\"5.8\"/><path d=\"M13 13l4.4 4.4\"/><path d=\"M6.4 7.2a3.2 3.2 0 0 1 2.4-1.4\" opacity=\".55\"/></svg></button>\n      </div>\n      <p class=\"sb-hint\" id=\"sbHint\">Drag the page to turn · Drag the glass across it</p>\n    </div>\n\n    <button class=\"hero-down\" id=\"heroDown\" aria-label=\"scroll to about\">\n      <svg viewBox=\"0 0 44 22\" width=\"34\" height=\"17\" fill=\"none\" aria-hidden=\"true\">\n        <polyline points=\"3,3 22,11 41,3\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n        <polyline points=\"3,11 22,19 41,11\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n      </svg>\n    </button>\n  </section>\n\n  <div class=\"rule\" aria-hidden=\"true\"></div>\n\n  <section id=\"about\" class=\"about\">\n    <div>\n      <p class=\"section-label\">About</p>\n      <p class=\"bio\">Meng To is a designer and teacher in Singapore. He founded <a class=\"bio-link\" href=\"https://componentx.dev\" target=\"_blank\" rel=\"noopener\">Design+Code</a>, where he teaches designers code and developers design, and builds <a class=\"bio-link\" href=\"https://aura.build\" target=\"_blank\" rel=\"noopener\">Aura</a> and <a class=\"bio-link\" href=\"https://dreamcut.ai\" target=\"_blank\" rel=\"noopener\">DreamCut</a>.</p>\n      <p class=\"bio\">This sketchbook is the slower half of that. The city looked at properly, in ink and a little colour: shophouse shutters, hawker tents, the bay at dusk.</p>\n    </div>\n    <img class=\"bloom\" src=\"sketchbook/bloom.png\" alt=\"\" aria-hidden=\"true\">\n  </section>\n\n  <div class=\"rule short\" aria-hidden=\"true\"></div>\n\n  <section id=\"plates\" class=\"plates\">\n    <p class=\"section-label\">Plates</p>\n    <ol class=\"plate-list\" id=\"plateList\"></ol>\n  </section>\n\n  <div class=\"rule short\" aria-hidden=\"true\"></div>\n\n  <section id=\"contact\" class=\"contact\">\n    <p class=\"section-label\">Contact</p>\n    <p class=\"bio\">Write to me at <a class=\"bio-link\" href=\"mailto:meng@componentx.dev\">meng@componentx.dev</a>. I read everything, and I answer most of it.</p>\n    <p class=\"contact-social\">\n      <a class=\"bio-link\" href=\"https://x.com/MengTo\" target=\"_blank\" rel=\"me noopener\">X</a>\n      <a class=\"bio-link\" href=\"https://www.linkedin.com/in/mengto\" target=\"_blank\" rel=\"me noopener\">LinkedIn</a>\n      <a class=\"bio-link\" href=\"https://www.instagram.com/mengto\" target=\"_blank\" rel=\"me noopener\">Instagram</a>\n    </p>\n  </section>\n\n  <p class=\"foot\">Singapore · Sketchbook</p>\n</main>\n\n<script>\n/* =====================================================================\n   Meng To — sketchbook hero.\n   Spreads are transparent PNGs of an open sketchbook generated with\n   Higgsfield.  The leaf that turns is a real curved surface: a chain of\n   nested strips whose tangent sweeps through an arc, so the page bends\n   the way paper bends instead of pivoting like a flat door.\n   ===================================================================== */\nconst Q=new URLSearchParams(location.search);\nconst DIR='sketchbook/';\nconst PAGES=[\n  {file:'marina-bay-sands.png',   title:'Marina Bay Sands',          place:'Bayfront'},\n  {file:'gardens-by-the-bay.png', title:'Gardens by the Bay',        place:'Supertree Grove'},\n  {file:'merlion.png',            title:'The Merlion',               place:'Merlion Park'},\n  {file:'buddha-tooth.png',       title:'Buddha Tooth Relic Temple', place:'Chinatown'},\n  {file:'joo-chiat.png',          title:'Joo Chiat Shophouses',      place:'Katong'},\n  {file:'lau-pa-sat.png',         title:'Lau Pa Sat',                place:'Raffles Quay'},\n  {file:'marina-bay-skyline.png', title:'Marina Bay Skyline',        place:'The Bay'},\n  {file:'singapore-river.png',    title:'Singapore River',           place:'Boat Quay'},\n  {file:'botanic-gardens.png',    title:'Botanic Gardens',           place:'Tanglin'}\n];\nPAGES.forEach(p=>p.url=DIR+p.file);\nconst M=PAGES.length, LAND=6;\n\nconst wrap=document.getElementById('sbWrap');\nconst stage=document.getElementById('sbStage');\nconst sb3d=document.getElementById('sb3d');\nconst book=document.getElementById('sbBook');\nconst capBox=document.getElementById('sbCaptions');\nconst hint=document.getElementById('sbHint');\nconst REDUCED=matchMedia('(prefers-reduced-motion: reduce)').matches;\n\n/* ------------------------------------------------ the turning leaf */\nconst N=18;            /* strips — enough for a smooth curve          */\nconst SPAN=0.449;      /* gutter → outer page edge, as a fraction     */\nconst BETA=0.60;       /* peak curl of the arc, radians              */\nlet idx=0, turn=null;  /* turn = {dir, from, to, t}                   */\nlet strips=[];         /* the chain, kept for per-frame lighting       */\n\nfunction el(t,c){const e=document.createElement(t);if(c)e.className=c;return e}\nfunction imgEl(i,side){\n  const im=new Image();im.className='sb-half-img '+side;\n  im.draggable=false;im.alt='';im.src=PAGES[i].url;return im;\n}\n\nfunction halfEl(pos,i){\n  const d=el('div','sb-half '+pos);\n  d.appendChild(imgEl(i,pos));\n  d.appendChild(el('div','gutter-shade '+pos));\n  return d;\n}\n/* build the strip chain once per turn; background offsets are pure\n   geometry, so they never need touching again while it animates */\nfunction buildCurl(dir,from,to){\n  strips=[];\n  const c=el('div','curl '+dir);\n  c.style.setProperty('--n',N);\n  c.style.setProperty('--span',SPAN);\n  let host=c;\n  for(let i=0;i<N;i++){\n    const s=el('div','strip');\n    s.style.setProperty('--i',i);\n    const gut='calc(var(--bw) * 0.5)';\n    const sw='calc(var(--bw) * '+SPAN+' / '+N+')';\n    const A='calc(-1 * ('+gut+' + '+i+' * '+sw+'))';         /* faces the from-page  */\n    const B='calc('+(i+1)+' * '+sw+' - '+gut+')';            /* faces the to-page    */\n    const f=el('div','face front'), b=el('div','face back');\n    const dress=(e,url,px)=>{\n      e.style.backgroundImage='url('+url+')';\n      e.style.backgroundPositionX=px;\n    };\n    dress(f,PAGES[from].url, dir==='next'?A:B);\n    dress(b,PAGES[to].url,   dir==='next'?B:A);\n    f.appendChild(el('div','sh'));f.appendChild(el('div','gl'));\n    b.appendChild(el('div','sh'));b.appendChild(el('div','gl'));\n    s.appendChild(f);s.appendChild(b);\n    if(i===N-1)s.classList.add('edge');\n    host.appendChild(s);host=s;\n    strips.push(s);\n  }\n  return c;\n}\nfunction applyTurn(t){\n  const th=Math.PI*t;                       /* how far the leaf has swung */\n  const beta=BETA*Math.sin(Math.PI*t);      /* it is flat at both ends    */\n  const D=180/Math.PI;\n  const tt=th+beta, td=2*beta/N;\n  sb3d.style.setProperty('--tt',(tt*D).toFixed(2)+'deg');\n  sb3d.style.setProperty('--td',(td*D).toFixed(3)+'deg');\n  sb3d.style.setProperty('--shade',Math.sin(Math.PI*t).toFixed(3));\n  fadeCaption(t);\n  for(let i=0;i<strips.length;i++){\n    const l1=Math.abs(Math.cos(tt-i*td));        /* facing at this strip's near edge */\n    const l2=Math.abs(Math.cos(tt-(i+1)*td));    /* ...and at its far edge           */\n    const st=strips[i].style;\n    st.setProperty('--lit',l1.toFixed(3));\n    st.setProperty('--a1',((1-l1)*.62).toFixed(3));\n    st.setProperty('--a2',((1-l2)*.62).toFixed(3));\n  }\n}\nfunction paint(){\n  book.textContent='';\n  if(!turn){\n    const f=el('div','sb-full');\n    const im=new Image();im.src=PAGES[idx].url;im.alt=PAGES[idx].title;\n    im.draggable=false;\n    f.appendChild(im);book.appendChild(f);\n    sb3d.style.setProperty('--shade','0');\n  }else{\n    const next=turn.dir==='next';\n    book.appendChild(halfEl('left', next?turn.from:turn.to));\n    book.appendChild(halfEl('right',next?turn.to:turn.from));\n    book.appendChild(buildCurl(turn.dir,turn.from,turn.to));\n    applyTurn(turn.t);\n  }\n  const a=el('button','sb-zone sb-prev'),b=el('button','sb-zone sb-next');\n  a.setAttribute('aria-label','previous page');b.setAttribute('aria-label','next page');\n  book.appendChild(a);book.appendChild(b);\n  layout();\n  caption();\n  marks();\n  if(typeof syncZoomLayer==='function')syncZoomLayer();\n  if(typeof placeLoupe==='function')placeLoupe();\n}\nfunction caption(){\n  capBox.textContent='';\n  capOut=capIn=null;\n  if(turn){\n    capOut=el('p','sb-caption live');capOut.textContent=PAGES[turn.from].title;capBox.appendChild(capOut);\n    capIn=el('p','sb-caption live');capIn.textContent=PAGES[turn.to].title;capBox.appendChild(capIn);\n    fadeCaption(turn.t);\n  }else{\n    const p=el('p','sb-caption');p.textContent=PAGES[idx].title;capBox.appendChild(p);\n  }\n}\nlet capOut=null,capIn=null;\nfunction fadeCaption(t){\n  if(!capOut||!capIn)return;\n  /* the old title is gone before the new one arrives, so they never\n     sit on top of each other mid-drag */\n  const out=1-Math.max(0,Math.min(1,(t-0.10)/0.28));\n  const inn=Math.max(0,Math.min(1,(t-0.56)/0.30));\n  capOut.style.opacity=out.toFixed(3);\n  capIn.style.opacity=inn.toFixed(3);\n}\nfunction layout(){\n  sb3d.style.setProperty('--bw',book.clientWidth+'px');\n}\naddEventListener('resize',layout);\n\n/* ------------------------------------------------------ spring loop */\nlet spring=null;\nfunction animateTo(target,onDone,stiff,damp){\n  spring={kind:'spring',v:0,target:target,done:onDone,k:stiff||150,c:damp||22};\n  kick();\n}\n/* the riffle wants a fixed tempo, not a spring settling time */\nfunction tweenTo(target,dur,onDone){\n  spring={kind:'tween',from:turn?turn.t:0,target:target,dur:dur,e:0,done:onDone};\n  kick();\n}\nlet raf=null,last=0;\nfunction tick(now){\n  raf=null;\n  const dt=Math.min(0.032,(now-last)/1000||0.016);last=now;\n  if(spring&&turn){\n    const s=spring;\n    if(s.kind==='tween'){\n      s.e+=dt;\n      const k=Math.min(1,s.e/s.dur);\n      turn.t=s.from+(s.target-s.from)*k;\n      applyTurn(turn.t);\n      if(k>=1){spring=null;const d=s.done;d&&d();}\n    }else{\n      const x=turn.t-s.target;\n      s.v+= (-s.k*x - s.c*s.v)*dt;\n      turn.t+=s.v*dt;\n      if(Math.abs(turn.t-s.target)<0.002&&Math.abs(s.v)<0.02){\n        turn.t=s.target;spring=null;\n        applyTurn(turn.t);\n        const d=s.done;d&&d();\n      }else applyTurn(turn.t);\n    }\n  }\n  viewSpring();\n  const lmoved=loupeEase();\n  /* kick() may already have queued the next frame from a done-callback */\n  if((spring||viewActive||lmoved)&&raf===null) raf=requestAnimationFrame(tick);\n}\nfunction kick(){ if(raf===null){last=performance.now();raf=requestAnimationFrame(tick);} }\n\n/* ------------------------------------------- tilt + zoom of the book */\nconst TILT_X=4.5, TILT_Y=7;      /* degrees — deliberately restrained   */\nconst ZOOM_MIN=0.9, ZOOM_MAX=1.5;\nconst view={rx:0,ry:0,z:1, trx:0,try_:0,tz:1};\nlet viewActive=false;\nlet lastZ=1;\nfunction applyView(){\n  sb3d.style.setProperty('--rx',view.rx.toFixed(2)+'deg');\n  sb3d.style.setProperty('--ry',view.ry.toFixed(2)+'deg');\n  sb3d.style.setProperty('--zoom',view.z.toFixed(3));\n  /* the glass stays put, but the page under it has moved */\n  if(view.z!==lastZ){lastZ=view.z;if(typeof placeLoupe==='function')placeLoupe();}\n}\nfunction viewSpring(){\n  const e=0.14;\n  let moved=false;\n  for(const [k,t] of [['rx','trx'],['ry','try_'],['z','tz']]){\n    const d=view[t]-view[k];\n    if(Math.abs(d)>0.0006){view[k]+=d*e;moved=true;}\n    else view[k]=view[t];\n  }\n  if(moved)applyView();\n  viewActive=moved;\n  return moved;\n}\nfunction setView(rx,ry,z){\n  view.trx=Math.max(-TILT_X,Math.min(TILT_X,rx));\n  view.try_=Math.max(-TILT_Y,Math.min(TILT_Y,ry));\n  view.tz=Math.max(ZOOM_MIN,Math.min(ZOOM_MAX,z));\n  viewActive=true;kick();\n  if(typeof syncZoom==='function')syncZoom();\n}\n/* the book leans toward the cursor — no dragging, and never far */\nfunction tiltTo(cx,cy){\n  if(drag)return;                       /* hold still while a page is being turned */\n  const r=book.getBoundingClientRect();\n  if(!r.width)return;\n  const nx=Math.max(-1,Math.min(1,(cx-(r.left+r.width/2))/(r.width*0.62)));\n  const ny=Math.max(-1,Math.min(1,(cy-(r.top+r.height/2))/(r.height*0.9)));\n  setView(-ny*TILT_X, nx*TILT_Y, view.tz);\n}\naddEventListener('pointermove',e=>{\n  if(e.pointerType==='touch')return;\n  tiltTo(e.clientX,e.clientY);\n},{passive:true});\naddEventListener('pointerout',e=>{if(!e.relatedTarget)setView(0,0,view.tz)});\naddEventListener('blur',()=>setView(0,0,view.tz));\n/* the wheel belongs to the page — zoom is on the toolbar, or a double click\n   to come back to 100% */\nstage.addEventListener('dblclick',()=>setView(view.trx,view.try_,1));\n\n/* ------------------------------------------------------- pointer work */\nlet drag=null;\nfunction bookRect(){return book.getBoundingClientRect()}\nfunction hideHint(){hint.classList.add('gone')}\n\nstage.addEventListener('pointerdown',e=>{\n  if(e.button!==0)return;\n  e.preventDefault();                     /* no text selection, no image drag */\n  const onBook=e.target.closest('.sb-zone');\n  stage.setPointerCapture(e.pointerId);\n  hideHint();\n  if(!onBook||introOn)return;\n  const r=bookRect();\n  const dir=(e.clientX-r.left)/r.width>0.5?'next':'prev';\n  startTurn(dir,0);\n  drag={dir:dir,x0:e.clientX,w:r.width,moved:0,vel:0,tPrev:performance.now()};\n});\nstage.addEventListener('pointermove',e=>{\n  if(!drag)return;\n  const dx=e.clientX-drag.x0;\n  drag.moved=Math.max(drag.moved,Math.abs(dx));\n  const raw=(drag.dir==='next'? -dx : dx)/(drag.w*0.62);\n  const t=Math.max(0,Math.min(1,raw));\n  const now=performance.now();\n  drag.vel=(t-(turn?turn.t:0))/Math.max(0.001,(now-drag.tPrev)/1000);\n  drag.tPrev=now;\n  if(turn){turn.t=t;applyTurn(t);}\n});\nfunction endDrag(e){\n  if(!drag)return;\n  const d=drag;drag=null;\n  if(!turn)return;\n  if(d.moved<6){                              /* a tap, not a drag */\n    commit();return;\n  }\n  const go = turn.t>0.42 || d.vel>1.1;\n  if(go)commit(); else cancel();\n}\nstage.addEventListener('dragstart',e=>e.preventDefault());\nstage.addEventListener('selectstart',e=>e.preventDefault());\nstage.addEventListener('pointerup',endDrag);\nstage.addEventListener('pointercancel',endDrag);\n\n/* ------------------------------------------------------ turn control */\nfunction startTurn(dir,t){\n  spring=null;\n  if(turn){idx=turn.to;turn=null;}      /* settle anything still in flight */\n  if(typeof shoveLoupe==='function')shoveLoupe(dir);\n  const from=idx;\n  turn={dir:dir,from:from,to:dir==='next'?(from+1)%M:(from-1+M)%M,t:t||0};\n  paint();\n}\nfunction commit(){\n  if(!turn)return;\n  if(REDUCED){idx=turn.to;turn=null;paint();return;}\n  animateTo(1,()=>{idx=turn.to;turn=null;paint();},170,26);\n  kick();\n}\nfunction cancel(){\n  if(!turn)return;\n  animateTo(0,()=>{turn=null;paint();},150,24);\n  kick();\n}\nfunction step(dir){\n  if(introOn)endIntro();\n  if(turn){ /* finish whatever is in flight first */ idx=turn.to;turn=null; }\n  startTurn(dir,0);commit();\n}\nfunction goTo(i){\n  if(introOn)endIntro();\n  if(i===idx)return;\n  if(turn){idx=turn.to;turn=null;}\n  const fwd=(i-idx+M)%M, back=(idx-i+M)%M;\n  if(Math.min(fwd,back)===1){step(fwd===1?'next':'prev');return;}\n  idx=i;paint();\n}\ndocument.getElementById('sbLeft').onclick=()=>step('prev');\ndocument.getElementById('sbRight').onclick=()=>step('next');\naddEventListener('keydown',e=>{\n  if(e.key!=='ArrowLeft'&&e.key!=='ArrowRight')return;\n  if(e.metaKey||e.ctrlKey||e.altKey)return;\n  const t=e.target;\n  if(t&&(t.tagName==='INPUT'||t.tagName==='TEXTAREA'||t.isContentEditable))return;\n  e.preventDefault();hideHint();\n  step(e.key==='ArrowRight'?'next':'prev');\n});\ndocument.getElementById('heroDown').onclick=()=>{\n  document.getElementById('about').scrollIntoView({behavior:'smooth',block:'start'});\n};\n\n/* --------------------------------------------------- loupe + controls */\nconst loupe=document.getElementById('loupe');\nconst lens=document.getElementById('loupeLens');\nconst mag=document.getElementById('loupeMag');\nconst zRead=document.getElementById('zRead');\nconst loupeBtn=document.getElementById('loupeBtn');\nconst zInBtn=document.getElementById('zIn'), zOutBtn=document.getElementById('zOut');\nconst MAG=2.3;\nconst DESK=getComputedStyle(document.documentElement).getPropertyValue('--paper').trim()||'#ece7dc';\nlet loupeOn=true, lx=null, ly=null, lgrab=null, lTarget=null;\n\nfunction loupeSize(){return Math.round(Math.max(165,Math.min(262,book.clientWidth*0.235)));}\n/* the loupe's own coordinate space: stage pixels in live mode (it sits\n   outside the book's transform), book pixels otherwise */\nfunction bookBox(){\n  return {x:0,y:0,w:book.clientWidth,h:book.clientHeight};\n}\n/* park it on the desk at the lower right, half off the book */\nfunction restLoupe(){\n  const b=bookBox();\n  lx=b.x+b.w*0.88; ly=b.y+b.h*0.855;\n  placeLoupe();\n}\n/* The glass sits above the tilt, in the book's untransformed pixels, so the\n   lean of the page never nudges it.  What the tilt does change is which part\n   of the paper is under the glass, and only the scale matters enough to\n   correct for: the book is drawn about its own centre. */\nconst zoomWrap=document.getElementById('zoomWrap');\nconst zoomInner=document.getElementById('zoomInner');\n/* mirror whatever the book is currently showing into the magnified copy */\nfunction syncZoomLayer(){\n  zoomInner.textContent='';\n  for(const c of book.children){\n    if(c.classList.contains('sb-zone'))continue;      /* hit targets need no copy */\n    zoomInner.appendChild(c.cloneNode(true));\n  }\n}\nfunction placeLoupe(){\n  if(lx===null)return;\n  const B=bookBox(), bw=B.w, bh=B.h;\n  if(!bw)return;\n  const R=loupeSize()/2, bez=R*2*0.058;\n  loupe.style.setProperty('--lr',R*2+'px');\n  loupe.style.transform='translate3d('+(lx-R).toFixed(1)+'px,'+(ly-R).toFixed(1)+'px,0)';\n  if(loupeOn)loupe.classList.add('on');\n\n  /* where the paper's edges actually land once the book is scaled */\n  const z=view.z, cx=bw/2, cy=bh/2;\n  const x0=cx+(bw*.051-cx)*z, x1=cx+(bw*.949-cx)*z;\n  const y0=cy+(bh*.218-cy)*z, y1=cy+(bh*.782-cy)*z;\n  /* How far the glass's own centre is inside the paper.  The copy fades out\n     as it wanders off the sheet, so you are left looking through plain\n     glass rather than at a sliver of page on flat desk. */\n  const nx=Math.max(x0,Math.min(lx,x1));\n  const ny=Math.max(y0,Math.min(ly,y1));\n  const inside=(lx>x0&&lx<x1&&ly>y0&&ly<y1)\n    ? Math.min(lx-x0, x1-lx, ly-y0, y1-ly)\n    : -Math.hypot(lx-nx,ly-ny);\n  const k=Math.max(0,Math.min(1,(inside+R*0.30)/(R*0.55)));\n\n  zoomWrap.style.opacity=(loupeOn?k:0).toFixed(3);\n  if(k<=0.002)return;\n  const r=(R-bez).toFixed(1);\n  const mask='radial-gradient(circle '+r+'px at '+lx.toFixed(1)+'px '+ly.toFixed(1)+'px,'\n    +'#000 calc(100% - 1px),transparent 100%)';\n  zoomWrap.style.webkitMaskImage=mask;\n  zoomWrap.style.maskImage=mask;\n  /* the page point beneath the glass, magnified about that same spot so the\n     lens keeps showing MAG times whatever is on screen */\n  const px=cx+(lx-cx)/z, py=cy+(ly-cy)/z, s=MAG*z;\n  zoomInner.style.transform='translate('+(lx-px*s).toFixed(1)+'px,'+(ly-py*s).toFixed(1)+'px) '\n    +'scale('+s.toFixed(4)+')';\n}\n/* the leaf shoves the glass aside as it sweeps past */\nfunction shoveLoupe(dir){\n  if(!loupeOn||lx===null||lgrab)return;\n  const b=bookBox();\n  /* which page point the glass covers, once the book's scale is undone */\n  const nx=(b.w/2+(lx-b.x-b.w/2)/view.z)/b.w, ny=(b.h/2+(ly-b.y-b.h/2)/view.z)/b.h;\n  if(nx<0.02||nx>0.98||ny<0.17||ny>0.83)return;      /* already clear of the page */\n  lTarget={x:b.x+b.w*(dir==='next'?0.12:0.88), y:b.y+b.h*0.855};\n  kick();\n}\nfunction loupeEase(){\n  if(!lTarget)return false;\n  if(lgrab){lTarget=null;return false;}\n  const dx=lTarget.x-lx, dy=lTarget.y-ly;\n  if(Math.abs(dx)<0.5&&Math.abs(dy)<0.5){lx=lTarget.x;ly=lTarget.y;lTarget=null;placeLoupe();return false;}\n  lx+=dx*0.17;ly+=dy*0.17;placeLoupe();\n  return true;\n}\nloupe.addEventListener('pointerdown',e=>{\n  if(!loupeOn||e.button!==0)return;\n  e.preventDefault();e.stopPropagation();     /* never starts a page turn */\n  lTarget=null;\n  lgrab={cx:e.clientX,cy:e.clientY,lx0:lx,ly0:ly};\n  loupe.classList.add('held');\n  loupe.setPointerCapture(e.pointerId);\n  hideHint();\n});\nloupe.addEventListener('pointermove',e=>{\n  if(!lgrab)return;\n  const b=bookBox(), R=loupeSize()/2;\n  /* the glass carries none of the book's transform, so the cursor maps 1:1 */\n  lx=Math.max(b.x-R*0.7,Math.min(b.x+b.w+R*0.7, lgrab.lx0+(e.clientX-lgrab.cx)));\n  ly=Math.max(b.y-R*0.7,Math.min(b.y+b.h+R*1.0, lgrab.ly0+(e.clientY-lgrab.cy)));\n  placeLoupe();\n});\nfunction dropLoupe(){lgrab=null;loupe.classList.remove('held');}\nloupe.addEventListener('pointerup',dropLoupe);\nloupe.addEventListener('pointercancel',dropLoupe);\nloupeBtn.onclick=()=>{\n  loupeOn=!loupeOn;\n  loupeBtn.setAttribute('aria-pressed',String(loupeOn));\n  loupe.classList.toggle('on',loupeOn);\n  if(loupeOn&&lx===null)restLoupe();\n};\naddEventListener('resize',()=>{lx=null;restLoupe();});\n\nfunction syncZoom(){\n  zRead.textContent=Math.round(view.tz*100)+'%';\n  zOutBtn.disabled=view.tz<=ZOOM_MIN+0.001;\n  zInBtn.disabled=view.tz>=ZOOM_MAX-0.001;\n}\nzInBtn.onclick=()=>{setView(view.trx,view.try_,view.tz*1.16);hideHint();};\nzOutBtn.onclick=()=>{setView(view.trx,view.try_,view.tz/1.16);hideHint();};\n\n/* --------------------------------------------------------- the index */\nconst plateList=document.getElementById('plateList');\nPAGES.forEach((p,i)=>{\n  const li=el('li');\n  const b=el('button','plate');\n  b.innerHTML='<span class=\"n\">'+String(i+1).padStart(2,'0')+'</span>'+\n              '<span class=\"t\"></span><span class=\"p\"></span>';\n  b.querySelector('.t').textContent=p.title;\n  b.querySelector('.p').textContent=p.place;\n  b.onclick=()=>{goTo(i);document.getElementById('sketchbook').scrollIntoView({behavior:'smooth',block:'center'});};\n  li.appendChild(b);plateList.appendChild(li);\n});\nfunction marks(){\n  const cur=turn?turn.to:idx;\n  plateList.querySelectorAll('.plate').forEach((b,i)=>b.setAttribute('aria-current',i===cur?'true':'false'));\n}\n\n/* ---------------------------------------------------------- the riffle */\nlet riffle=null,riffleAt=0,introOn=false;\nfunction endIntro(){\n  introOn=false;wrap.classList.remove('intro','b2');\n}\nfunction riffleStep(){\n  const s=riffle[riffleAt];\n  wrap.classList.toggle('b2',s.bell>0.55);\n  startTurn('next',0);\n  tweenTo(1,s.dur,()=>{\n    idx=turn.to;turn=null;\n    riffleAt++;\n    if(introOn&&riffleAt<riffle.length){paint();riffleStep();}\n    else{endIntro();paint();}\n  });\n}\nfunction startIntro(){\n  const coarse=matchMedia('(max-width: 640px), (pointer: coarse)').matches;\n  if(coarse||REDUCED||Q.has('nointro')){idx=LAND;paint();return;}\n  const steps=M+LAND;\n  riffle=[];\n  for(let r=0;r<steps;r++){\n    const bell=Math.sin(Math.PI*(r/(steps-1)));\n    riffle.push({bell:bell,dur:0.26-0.19*bell});\n  }\n  riffleAt=0;introOn=true;wrap.classList.add('intro');\n  riffleStep();\n}\n\n/* ------------------------------------------------------------- boot */\n(async function boot(){\n  idx=Q.has('shot')?(parseInt(Q.get('shot'),10)||0)%M:0;\n  paint();applyView();\n  await Promise.all(PAGES.map(p=>{\n    const im=new Image();im.src=p.url;\n    return im.decode?im.decode().catch(()=>{}):new Promise(r=>{im.onload=im.onerror=r});\n  }));\n  if(document.fonts&&document.fonts.ready)await document.fonts.ready.catch(()=>{});\n  syncZoom();restLoupe();\n  document.body.dataset.ready='1';\n  if(Q.has('shot')){\n    if(Q.has('t')){startTurn(Q.get('dir')||'next',parseFloat(Q.get('t')));}\n    return;\n  }\n  setTimeout(startIntro,220);\n})();\n</script>\n</body>\n</html>\n";

const HOST_STYLE = "<style id=\"threeui-sketchbook-host\">\nhtml,body,.page{width:100%;height:100%;min-height:0;overflow:hidden}\nbody>.wash{display:block}\n.page>.top,.page>.rule,.page>.about,.page>.plates,.page>.contact,.page>.foot{display:none!important}\n#sketchbook{width:100%;height:100%;min-height:0;padding:12px 0 10px;align-content:center}\n#sketchbook>.botany,#sketchbook>.hero-kicker,#sketchbook>.hero-down{display:none!important}\n#sketchbook .sb-wrap{gap:8px}\n#sketchbook .sb-3d{max-width:min(900px,92vw)}\n#sketchbook .sb-captions{min-height:18px}\n@media(max-width:640px){#sketchbook{padding:4px 0}#sketchbook .sb-wrap{gap:5px}#sketchbook .sb-3d{max-width:100vw}}\n</style>";

export function createSketchbookDocument(assetBaseUrl = "/sketchbook/") {
  const base = assetBaseUrl.endsWith("/") ? assetBaseUrl : `${assetBaseUrl}/`;
  const withAssets = CANONICAL_SKETCHBOOK_HTML.replaceAll("sketchbook/", base);
  return withAssets.replace("</head>", `${HOST_STYLE}</head>`);
}
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
