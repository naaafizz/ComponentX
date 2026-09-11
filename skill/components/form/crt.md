---
name: "CRT"
library: "ComponentX"
id: "crt"
type: "form"
quality: "showcase"
tags: ["animation", "background", "component", "layout", "shader", "text", "webgl"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · CRT

> **Type:** `form` · **Quality:** `showcase` · **ID:** `crt`
> **Path:** `components/form/crt.md`

**CRT** is a premium, production-ready component from the **ComponentX** library — engineered for form interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Showcase tier** — a high-impact, visually rich implementation — animated, 3D, or dependency-heavy by design.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `animation`, `background`, `layout` workflows.
- **Pattern coverage** — includes `shader`, `text`, `webgl` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **CRT** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
name: add-crt
description: "Build CRT from its verified authored source using Raw WebGL + Canvas 2D, including the complete renderer, interactions, and required assets. Use when Codex needs to implement, port, or adapt this effect without requiring the ComponentX package or reconstructing the visual from an approximation."
---

# Build CRT

## Description

One sharpened curved-glass CRT tube driving four screens: the Matrix-era boot terminal, a monochrome film leader, a noise-torn blue signal fault, and an 8-bit console title.

Recreate the authored behavior from the verified source, not from screenshots or the abbreviated orchestration sample in this skill. The implementation may live directly in the target project and does not require `@componentx/core`.

## Technologies

- React lifecycle host
- Raw WebGL CRT composite
- Offscreen Canvas 2D screen texture
- Hand-authored 5x7 pixel font
- Visibility-aware animation and adaptive backing resolution

## Verified source material

- `ZION-Construct-Initialization (1).html — complete CRT background`
- `src/shaders/crt/crtRenderer.ts`
- `src/shaders/crt/crtShaders.ts`
- `src/shaders/crt/crtScreens.ts`
- `src/shaders/crt/CrtBackground.tsx`

Source revision: `SHA-256 860a1eb1d4c9`

## Implementation steps

1. Open every verified source file listed above and identify the renderer, host lifecycle, styles, and assets before editing.
2. Size the backing store to the host at up to 1920 px and 2x device pixel ratio, and pin the scanline count and aperture-grille pitch to CSS size so the authored look survives the higher resolution.
3. Select the screen with the variant prop: the complete 19-row terminal log with its colors, layout math, cursor, reveal cadence, and blink state; a monotone film leader; a blue signal fault; or an 8-bit console title.
4. Give each screen the texture resolution it needs — full backing for type, a 320x180 nearest-filtered grid for pixel art — and upload only when that screen changes.
5. Compile one fragment shader whose curvature, chromatic offset, halation, scanline, grille, transport noise, rolling bar, vignette, flicker, monochrome, and grain stages are driven by the variant's uniform preset.
6. Apply brightness, opacity, and a hue/saturation grade to the completed host rather than editing the texture or GLSL.
7. Own texture, buffer, shader, observer, resize, frame, and disposal lifecycle.
8. Give the local component a sized, overflow-controlled parent and verify desktop, mobile, reduced-motion, and context-loss behavior.

Asset handling: This effect has no required external assets.

## Local component example

Import the copied local component rather than a package entrypoint:

```tsx
import { CrtBackground } from "./effects/crt/CrtBackground";
import "./effects/crt/styles.css";

export function Scene() {
  return <div className="effect-frame"><CrtBackground /></div>;
}
```

## Core renderer pattern

This excerpt documents orchestration only. Copy the exact shader, geometry, pass, and interaction code from the verified source files.

```tsx
<CrtBackground variant="nintendo" speed={1} motion={1} />

CRT_SCREENS[variant](textContext, width, height, seconds);
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textCanvas);
gl.drawArrays(gl.TRIANGLES, 0, 3);
```

## Behavior contract

- Runtime: Raw WebGL + Canvas 2D
- Passes: 2 — Canvas 2D screen texture + raw WebGL CRT composite
- Interaction: Selectable screen style plus customizable boot speed, CRT motion, hue, brightness, and opacity
- Assets: No external assets
- **renderer** (host): Raw WebGL + Canvas 2D
- **variants** (fixed): Terminal | Cinematic | Blue Screen | Nintendo
- **backing** (adaptive): ≤ 1920 px, ≤ 2 DPR
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
# CRT — Terminal — Complete source

Component: `CrtBackground`
Variant: **Terminal** (`terminal`)
Runtime: Raw WebGL + Canvas 2D
Source revision: `SHA-256 860a1eb1d4c9`

## Current configured usage

```tsx
import { CrtBackground } from "@componentx/threeui";
import "@componentx/threeui/style.css";

export function Scene() {
  return (
    <div className="shader-frame">
      <CrtBackground
        variant="terminal"
        speed={1.00}
        typeSpeed={1.00}
        motion={1.00}
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

This bundle contains all 5 required text source files. Preserve their paths and contents; none are excerpts.

### `src/shaders/crt/CrtBackground.tsx`

Role: component · 12 lines · 1947 bytes · SHA-256 `20932f2655319c5fc6c6b3c29c890149beec7e4850edc414f909ab24a0c95031`

```tsx
import { useEffect, useRef } from "react";
import { createCrtRenderer, crtStyle, CRT_DEFAULTS, CRT_VARIANTS, type CrtOptions } from "./crtRenderer";
import type { CrtVariant } from "./crtScreens";

export { CRT_VARIANTS };
export type { CrtVariant };
export type CrtBackgroundProps = Partial<CrtOptions> & { className?: string };
export function CrtBackground({ className = "", ...props }: CrtBackgroundProps) {
  const hostRef = useRef<HTMLDivElement>(null), canvasRef = useRef<HTMLCanvasElement>(null), optionsRef = useRef({ ...CRT_DEFAULTS, ...props }); optionsRef.current = { ...CRT_DEFAULTS, ...props };
  useEffect(() => { const host = hostRef.current, canvas = canvasRef.current; if (!host || !canvas) return undefined; const renderer = createCrtRenderer(host, canvas, () => optionsRef.current); let frame = 0, visible = true; const resize = () => { renderer.resize(); renderer.render(performance.now()); }, tick = (now: number) => { renderer.render(now); frame = visible && !document.hidden ? requestAnimationFrame(tick) : 0; }; const resizeObserver = new ResizeObserver(resize), intersection = new IntersectionObserver(([entry]) => { visible = entry?.isIntersecting ?? true; if (visible && !frame) frame = requestAnimationFrame(tick); if (!visible && frame) cancelAnimationFrame(frame), frame = 0; }); resizeObserver.observe(host); intersection.observe(host); resize(); frame = requestAnimationFrame(tick); return () => { if (frame) cancelAnimationFrame(frame); resizeObserver.disconnect(); intersection.disconnect(); renderer.dispose(); }; }, []);
  const options = optionsRef.current; return <div ref={hostRef} className={`threeui-background crt crt-${options.variant}${className ? ` ${className}` : ""}`} style={{ background: crtStyle(options.variant).background, opacity: options.opacity, filter: `hue-rotate(${options.hue}deg) saturate(${options.saturation}) brightness(${options.brightness})` }}><canvas ref={canvasRef} /></div>;
}
```

### `src/shaders/crt/crtRenderer.ts`

Role: renderer-source · 62 lines · 12561 bytes · SHA-256 `a3eb536e9c50eeb31832e7d6d25021c1535137e8ead5eb1b864e5a27c340af03`

```typescript
import { CRT_SCREENS, CRT_STYLES, type CrtStyle, type CrtVariant } from "./crtScreens";
import { CRT_FRAGMENT_SHADER, CRT_VERTEX_SHADER } from "./crtShaders";

export const CRT_VARIANTS = ["terminal", "cinematic", "blue-screen", "nintendo"] as const;
export type CrtOptions = { variant: CrtVariant; speed: number; typeSpeed: number; motion: number; brightness: number; opacity: number; hue: number; saturation: number };
export const CRT_DEFAULTS: CrtOptions = { variant: "terminal", speed: 1, typeSpeed: 1, motion: 1, brightness: 1, opacity: 1, hue: 0, saturation: 1 };
export const crtStyle = (variant: CrtVariant): CrtStyle => CRT_STYLES[variant] ?? CRT_STYLES.terminal;
type Segment = { t: string; c: "p" | "d" | "a" | "h" };
const segment = (text: string, color: Segment["c"] = "p"): Segment => ({ t: text, c: color }); const dots = (count: number) => "·".repeat(count);
const LOG: Segment[][] = [
  [segment("ZION MAINFRAME  v9.1.1"), segment("   (c) 2199 Nebuchadnezzar", "d")], [segment("CONSTRUCT Broadcast  Rev M  S/N NX-0101-0011", "d")], [],
  [segment("Hacking Matrix grid nodes "), segment(`${dots(14)} `, "d"), segment("OK", "a")], [segment("Neural Jack  0x000-0x0FF "), segment(`${dots(11)} `, "d"), segment("ONLINE "), segment("OK", "a")], [segment("Pinging agent signatures "), segment(`${dots(6)} `, "d"), segment("3 found")],
  [segment("nav0  OPERATOR UPLINK SECURE ", "d"), segment(`${dots(6)} `, "d"), segment("READY", "a")], [segment("vis0  CODE RAIN DECRYPT 256bit ", "d"), segment("READY", "a")], [segment("net0  HARDLINE CONNECTION MAX ", "d"), segment(`${dots(4)} `, "d"), segment("LINK", "a")], [segment("red0  RED PILL EXTRACTION ", "d"), segment(`${dots(4)} `, "d"), segment("READY", "a")],
  [segment("Mounting /dev/mind -> ROOT: "), segment(`${dots(6)} `, "d"), segment("OK", "a")], [segment("Loading weapon training program "), segment(`${dots(4)} `, "d"), segment("OK", "a")], [segment("Starting [ jmp spd str wpn ] "), segment(`${dots(4)} `, "d"), segment("OK", "a")], [segment("Locating the Oracle sector "), segment(`${dots(6)} `, "d"), segment("99.9%")], [],
  [segment("SYSTEM ANOMALY  "), segment("detected.", "h")], [segment("subject Thomas A. Anderson   status asleep ", "d"), segment("z", "d"), segment("Z", "d")], [], [segment("wake up: ")],
];
const COLORS = { p: { fill: "#8df0b4", glow: "rgba(28,236,132,0.95)" }, d: { fill: "#4f9a76", glow: "rgba(28,236,132,0.45)" }, a: { fill: "#ffba5e", glow: "rgba(255,150,52,0.95)" }, h: { fill: "#eafff3", glow: "rgba(120,255,190,0.95)" } };
const lineLength = (line: Segment[]) => line.reduce((total, item) => total + item.t.length, 0); const TOTAL = LOG.reduce((total, line) => total + lineLength(line), 0); const MAX_CHARS = Math.max(...LOG.map(lineLength));
/* backing-store ceiling: the composite is one triangle, so the cost that matters is
   the 2D screen redraw and its upload, not the fragment pass */
const MAX_BUFFER_WIDTH = 1920, MIN_BUFFER_WIDTH = 640, MAX_BUFFER_PIXELS = 2_400_000;
function compile(gl: WebGLRenderingContext, type: number, source: string) { const shader = gl.createShader(type); if (!shader) throw new Error("Unable to create CRT shader"); gl.shaderSource(shader, source); gl.compileShader(shader); if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(shader) ?? "CRT shader compilation failed"); return shader; }

export function createCrtRenderer(host: HTMLElement, canvas: HTMLCanvasElement, getOptions: () => CrtOptions) {
  const gl = canvas.getContext("webgl", { antialias: false, alpha: false, depth: false, premultipliedAlpha: false }); if (!gl) throw new Error("CRT requires WebGL"); const textCanvas = document.createElement("canvas"), textContext = textCanvas.getContext("2d"); if (!textContext) throw new Error("CRT text canvas unavailable");
  const vertex = compile(gl, gl.VERTEX_SHADER, CRT_VERTEX_SHADER), fragment = compile(gl, gl.FRAGMENT_SHADER, CRT_FRAGMENT_SHADER), program = gl.createProgram(); if (!program) throw new Error("Unable to create CRT program"); gl.attachShader(program, vertex); gl.attachShader(program, fragment); gl.linkProgram(program); if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(program) ?? "CRT link failed"); gl.useProgram(program);
  const buffer = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buffer); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW); const position = gl.getAttribLocation(program, "aPos"); gl.enableVertexAttribArray(position); gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
  const uniform = (name: string) => gl.getUniformLocation(program, name);
  const uTexture = uniform("uTex"), uResolution = uniform("uRes"), uTime = uniform("uTime"), uMotion = uniform("uMotion"), uCurve = uniform("uCurve"), uScan = uniform("uScan"), uScanDepth = uniform("uScanDepth"), uTriad = uniform("uTriad"), uGrille = uniform("uGrille"), uChroma = uniform("uChroma"), uBar = uniform("uBar"), uFlicker = uniform("uFlicker"), uGrain = uniform("uGrain"), uNoise = uniform("uNoise"), uVignette = uniform("uVignette"), uMono = uniform("uMono"), uGain = uniform("uGain"), uHalo = uniform("uHalo"), uSheen = uniform("uSheen"), uRoom = uniform("uRoom");
  const texture = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, texture); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE); gl.uniform1i(uTexture, 0);
  let width = 1, height = 1, cssWidth = 1, cssHeight = 1, fontSize = 14, lineHeight = 20, startY = 0, charWidth = 8, caretX = 0, caretY = 0, typed = 0, done = false, textDirty = true, lastTextAt = 0, lastReveal = -1, lastBlink = -1, variant: CrtVariant = "terminal", style = crtStyle(variant); const startedAt = performance.now();
  const applyStyle = () => { gl.useProgram(program); gl.uniform2f(uCurve, style.curve[0], style.curve[1]); gl.uniform1f(uScanDepth, style.scanDepth); gl.uniform1f(uGrille, style.grille); gl.uniform1f(uChroma, style.chroma); gl.uniform1f(uBar, style.bar); gl.uniform1f(uFlicker, style.flicker); gl.uniform1f(uGrain, style.grain); gl.uniform1f(uNoise, style.noise); gl.uniform1f(uVignette, style.vignette); gl.uniform1f(uMono, style.mono); gl.uniform1f(uGain, style.gain); gl.uniform1f(uHalo, style.halo); gl.uniform3f(uSheen, style.sheen[0], style.sheen[1], style.sheen[2]); gl.uniform3f(uRoom, style.room[0], style.room[1], style.room[2]); const filter = style.filtering === "nearest" ? gl.NEAREST : gl.LINEAR; gl.bindTexture(gl.TEXTURE_2D, texture); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filter); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filter); };
  const layout = () => { startY = height * 0.135; lineHeight = height * 0.74 / LOG.length; fontSize = Math.max(5, Math.min(lineHeight * 0.8, width * 0.88 / (Math.max(MAX_CHARS, 1) * 0.62))); textContext.font = `600 ${fontSize.toFixed(2)}px ui-monospace, "SF Mono", "JetBrains Mono", Menlo, Consolas, monospace`; charWidth = textContext.measureText("M").width || fontSize * 0.6; };
  const setStyle = (key: Segment["c"], glow: boolean) => { const color = COLORS[key]; textContext.fillStyle = color.fill; textContext.shadowColor = glow ? color.glow : "transparent"; textContext.shadowBlur = glow ? fontSize * 0.38 : 0; };
  /* two passes per glyph: a soft phosphor halo, then the same glyph re-filled with
     the shadow off so the stroke core stays crisp at any backing resolution */
  const drawScreen = (reveal: number) => { textContext.setTransform(1, 0, 0, 1, 0, 0); textContext.fillStyle = "#03100a"; textContext.fillRect(0, 0, width, height); textContext.textAlign = "left"; textContext.textBaseline = "top"; textContext.font = `600 ${fontSize.toFixed(2)}px ui-monospace, "SF Mono", "JetBrains Mono", Menlo, Consolas, monospace`; let remaining = reveal, y = startY; caretX = Math.floor((width - MAX_CHARS * charWidth) / 2); caretY = startY;
    for (const line of LOG) { const length = lineLength(line), visible = reveal === Infinity ? Infinity : Math.min(remaining, length); let x = Math.floor((width - MAX_CHARS * charWidth) / 2), drawn = 0; for (const item of line) { let text = item.t; if (visible !== Infinity) { const left = visible - drawn; if (left <= 0) break; if (left < text.length) text = text.slice(0, left); } if (text.length) { setStyle(item.c, true); textContext.fillText(text, x, y); setStyle(item.c, false); textContext.fillText(text, x, y); x += charWidth * text.length; } drawn += item.t.length; if (visible !== Infinity && drawn >= visible) break; } caretX = x; caretY = y; if (visible !== Infinity) remaining -= visible; y += lineHeight; if (visible !== Infinity && remaining <= 0) break; }
  };
  const drawCursor = () => { textContext.shadowColor = COLORS.p.glow; textContext.shadowBlur = fontSize * 0.42; textContext.fillStyle = "#bdf8d2"; textContext.fillRect(caretX, caretY + fontSize * 0.06, Math.max(charWidth * 0.92, 4), fontSize * 0.96); textContext.shadowBlur = 0; textContext.fillRect(caretX, caretY + fontSize * 0.06, Math.max(charWidth * 0.92, 4), fontSize * 0.96); };
  const uploadTexture = () => { gl.bindTexture(gl.TEXTURE_2D, texture); gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true); gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textCanvas); gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false); textDirty = false; };
  const resize = () => { const bounds = host.getBoundingClientRect(); cssWidth = Math.max(1, bounds.width); cssHeight = Math.max(1, bounds.height); const density = Math.min(typeof window === "undefined" ? 1 : window.devicePixelRatio || 1, 2); let nextWidth = Math.max(MIN_BUFFER_WIDTH, Math.round(Math.min(cssWidth * density, MAX_BUFFER_WIDTH))), nextHeight = Math.max(1, Math.round(nextWidth * cssHeight / cssWidth)); if (nextWidth * nextHeight > MAX_BUFFER_PIXELS) { const fit = Math.sqrt(MAX_BUFFER_PIXELS / (nextWidth * nextHeight)); nextWidth = Math.round(nextWidth * fit); nextHeight = Math.round(nextHeight * fit); }
    const surface = style.surface, screenWidth = surface.mode === "fixed" ? surface.width : surface.mode === "cap" ? Math.min(nextWidth, surface.width) : nextWidth, screenHeight = surface.mode === "fixed" ? surface.height : Math.max(1, Math.round(screenWidth * nextHeight / nextWidth));
    if (canvas.width !== nextWidth || canvas.height !== nextHeight) { canvas.width = nextWidth; canvas.height = nextHeight; }
    if (textCanvas.width !== screenWidth || textCanvas.height !== screenHeight) { textCanvas.width = screenWidth; textCanvas.height = screenHeight; width = screenWidth; height = screenHeight; layout(); lastReveal = -1; lastBlink = -1; lastTextAt = 0; textDirty = true; }
    gl.useProgram(program); gl.viewport(0, 0, nextWidth, nextHeight); gl.uniform2f(uResolution, nextWidth, nextHeight); gl.uniform1f(uScan, Math.max(120, Math.min(cssHeight * style.scanDensity, 900))); gl.uniform1f(uTriad, Math.max(2, style.triadCss * nextWidth / cssWidth)); };
  const maybeRedrawText = (now: number) => { const reveal = done ? Infinity : Math.floor(typed), blink = Math.floor((now - startedAt) / 420) % 2 === 0 ? 1 : 0, due = !done ? now - lastTextAt > 42 : blink !== lastBlink; if (reveal === lastReveal && blink === lastBlink && !due) return; if (!done && now - lastTextAt <= 42 && reveal === lastReveal && blink === lastBlink) return; drawScreen(reveal); if (blink) drawCursor(); lastTextAt = now; lastReveal = reveal; lastBlink = blink; textDirty = true; };
  applyStyle();
  return {
    resize,
    render(now: number) {
      const options = getOptions(), requested = CRT_STYLES[options.variant] ? options.variant : "terminal";
      if (requested !== variant) { variant = requested; style = crtStyle(variant); applyStyle(); typed = 0; done = false; lastReveal = -1; lastBlink = -1; lastTextAt = 0; resize(); }
      const seconds = (now - startedAt) * 0.001 * options.speed;
      if (variant === "terminal") { if (!done) { typed += 4.4 * options.typeSpeed; if (typed >= TOTAL) { typed = TOTAL; done = true; } } maybeRedrawText(now); }
      else if (now - lastTextAt >= style.redrawMs || textDirty) { CRT_SCREENS[variant](textContext, width, height, seconds); lastTextAt = now; textDirty = true; }
      if (textDirty) uploadTexture();
      gl.useProgram(program); gl.uniform1f(uTime, seconds); gl.uniform1f(uMotion, options.motion); gl.drawArrays(gl.TRIANGLES, 0, 3);
    },
    dispose() { gl.deleteBuffer(buffer); gl.deleteTexture(texture); gl.deleteProgram(program); gl.deleteShader(vertex); gl.deleteShader(fragment); },
  };
}
```

### `src/shaders/crt/crtShaders.ts`

Role: shader-source · 115 lines · 3800 bytes · SHA-256 `cf3a7c747d1cac495c705529954e2491ad885489ddd5110724f8f4b3553f1592`

```typescript
export const CRT_VERTEX_SHADER = "attribute vec2 aPos;\nvoid main(){ gl_Position = vec4(aPos,0.0,1.0); }";

export const CRT_FRAGMENT_SHADER = `precision highp float;
uniform sampler2D uTex;
uniform vec2 uRes;
uniform float uTime;
uniform float uMotion;
uniform vec2 uCurve;
uniform float uScan;
uniform float uScanDepth;
uniform float uTriad;
uniform float uGrille;
uniform float uChroma;
uniform float uBar;
uniform float uFlicker;
uniform float uGrain;
uniform float uNoise;
uniform float uVignette;
uniform float uMono;
uniform float uGain;
uniform float uHalo;
uniform vec3 uSheen;
uniform vec3 uRoom;

float hash(vec2 p){ p=fract(p*vec2(123.34,456.21)); p+=dot(p,p+45.32); return fract(p.x*p.y); }

vec2 curve(vec2 uv){
  uv = uv*2.0-1.0;
  vec2 o = uv.yx*uv.yx;
  uv += uv * o * uCurve;
  uv = uv*0.5+0.5;
  return uv;
}

void main(){
  vec2 fuv = gl_FragCoord.xy / uRes;
  vec2 uv = curve(fuv);
  float t = uTime;

  /* analogue transport faults: per-row jitter, a rolling dropout band, and the
     head-switching scramble along the bottom edge of the raster */
  float band = 0.0;
  if (uNoise > 0.001){
    float row = floor(uv.y * 190.0);
    float gate = step(0.905, hash(vec2(row, floor(t*15.0))));
    uv.x += (hash(vec2(row*1.7, floor(t*15.0)+7.0)) - 0.5) * 0.052 * gate * uNoise;
    float pos = fract(uv.y * 0.8 - t * 0.17);
    band = smoothstep(0.075, 0.0, pos);
    uv.x += band * (hash(vec2(floor(uv.y*260.0), floor(t*26.0))) - 0.5) * 0.030 * uNoise;
    float head = smoothstep(0.030, 0.0, uv.y);
    uv.x += head * (hash(vec2(floor(uv.y*520.0), floor(t*22.0))) - 0.32) * 0.075 * uNoise;
    band = max(band, head);
  }

  vec2 inb = step(vec2(0.0), uv) * step(uv, vec2(1.0));
  float inside = inb.x*inb.y;
  vec2 ed = min(uv, 1.0-uv);
  inside *= smoothstep(0.0,0.020, min(ed.x,ed.y));

  vec2 dir = uv-0.5;
  float d2 = dot(dir,dir);
  vec2 ao = dir * (0.0010 + 0.0075*d2) * uChroma;
  vec3 col;
  col.r = texture2D(uTex, uv + ao).r;
  col.g = texture2D(uTex, uv).g;
  col.b = texture2D(uTex, uv - ao).b;

  /* phosphor halation: a wide cheap tap ring so bright glyphs bloom into the
     glass instead of relying on the text canvas alone */
  if (uHalo > 0.001){
    float s = 0.0038;
    vec3 wide = texture2D(uTex, uv + vec2( s, 0.0)).rgb
              + texture2D(uTex, uv + vec2(-s, 0.0)).rgb
              + texture2D(uTex, uv + vec2(0.0,  s)).rgb
              + texture2D(uTex, uv + vec2(0.0, -s)).rgb
              + texture2D(uTex, uv + vec2( s,  s)*0.72).rgb
              + texture2D(uTex, uv + vec2(-s, -s)*0.72).rgb;
    col += wide * (uHalo / 6.0);
  }

  float sl = sin(uv.y*3.14159265*uScan + t*4.0*uMotion);
  col *= mix(1.0 - uScanDepth, 1.0, sl*sl);

  float gx = gl_FragCoord.x * (6.2831853/max(uTriad, 1.0));
  vec3 grille = (1.0-uGrille) + uGrille*cos(gx + vec3(0.0,2.094,4.188));
  col *= mix(vec3(1.0), grille, step(0.001, uGrille));
  col *= uGain;

  float bar = fract(uv.y*0.5 - t*0.07*uMotion);
  bar = smoothstep(0.0,0.05,bar)*smoothstep(0.18,0.05,bar);
  col += bar*uBar*uMotion;

  float sheen = smoothstep(0.55,0.0, distance(uv, vec2(0.50,0.15)));
  col += sheen*0.030*uSheen;

  float vig = smoothstep(0.98,0.30, length((uv-0.5)*vec2(1.05,1.0)));
  col *= mix(1.0-uVignette, 1.0, vig);
  col *= 1.0 - uFlicker*uMotion*sin(t*8.0);

  if (uNoise > 0.001){
    float st = hash(fuv*uRes*0.5 + vec2(floor(t*24.0), floor(t*24.0)*1.7));
    col += (st-0.5)*0.135*uNoise;
    col += band*0.085*uNoise;
  }
  col += (hash(fuv + fract(t*0.37)) - 0.5)*uGrain;

  float luma = dot(col, vec3(0.2126,0.7152,0.0722));
  col = mix(col, vec3(luma), uMono);

  float spill = smoothstep(0.85,0.18, length(fuv-0.5))*0.05;
  vec3 room = uRoom + uSheen*spill*0.42;
  col = mix(room, col, inside);
  col = max(col, uRoom*0.34);
  gl_FragColor = vec4(col,1.0);
}`;
```

### `src/shaders/crt/crtScreens.ts`

Role: variant-renderer-source · 396 lines · 22165 bytes · SHA-256 `e545922e0d3afa19b9d01840d0ea684c56d0799714f9cf77a4712921bfec7adb`

```typescript
/* Screen painters for the CRT variants. Each one draws a complete picture into an
   offscreen 2D canvas that the WebGL pass then curves, scans, and grades. The
   authored ZION terminal stays in crtRenderer.ts; these are the added styles. */

export type CrtVariant = "terminal" | "cinematic" | "blue-screen" | "nintendo";

export type ScreenSurface =
  | { mode: "buffer" }
  | { mode: "cap"; width: number }
  | { mode: "fixed"; width: number; height: number };

export type CrtStyle = {
  curve: readonly [number, number];
  scanDensity: number;
  scanDepth: number;
  triadCss: number;
  grille: number;
  chroma: number;
  bar: number;
  flicker: number;
  grain: number;
  noise: number;
  vignette: number;
  mono: number;
  gain: number;
  halo: number;
  sheen: readonly [number, number, number];
  room: readonly [number, number, number];
  background: string;
  filtering: "linear" | "nearest";
  surface: ScreenSurface;
  redrawMs: number;
};

export const CRT_STYLES: Record<CrtVariant, CrtStyle> = {
  terminal: {
    curve: [0.115, 0.165], scanDensity: 0.44, scanDepth: 0.30, triadCss: 3.2, grille: 0.34, chroma: 1,
    bar: 0.045, flicker: 0.028, grain: 0.022, noise: 0, vignette: 0.58, mono: 0, gain: 1.34, halo: 0.10,
    sheen: [0.55, 1.0, 0.78], room: [0.012, 0.03, 0.022], background: "#03100a",
    filtering: "linear", surface: { mode: "buffer" }, redrawMs: 0,
  },
  cinematic: {
    curve: [0.085, 0.125], scanDensity: 0.40, scanDepth: 0.22, triadCss: 3.6, grille: 0.14, chroma: 0.7,
    bar: 0.022, flicker: 0.020, grain: 0.055, noise: 0, vignette: 0.74, mono: 1, gain: 1.16, halo: 0.20,
    sheen: [0.86, 0.90, 1.0], room: [0.016, 0.016, 0.018], background: "#07070a",
    filtering: "linear", surface: { mode: "cap", width: 1280 }, redrawMs: 33,
  },
  "blue-screen": {
    curve: [0.130, 0.180], scanDensity: 0.46, scanDepth: 0.34, triadCss: 3.0, grille: 0.30, chroma: 1.9,
    bar: 0.055, flicker: 0.042, grain: 0.038, noise: 1, vignette: 0.60, mono: 0, gain: 1.22, halo: 0.16,
    sheen: [0.62, 0.76, 1.0], room: [0.014, 0.020, 0.046], background: "#050a24",
    filtering: "linear", surface: { mode: "cap", width: 1600 }, redrawMs: 96,
  },
  nintendo: {
    curve: [0.070, 0.100], scanDensity: 0.34, scanDepth: 0.26, triadCss: 3.4, grille: 0.20, chroma: 0.55,
    bar: 0.018, flicker: 0.014, grain: 0.014, noise: 0, vignette: 0.46, mono: 0, gain: 1.20, halo: 0.06,
    sheen: [0.72, 0.84, 1.0], room: [0.020, 0.024, 0.040], background: "#0a1030",
    filtering: "nearest", surface: { mode: "fixed", width: 320, height: 180 }, redrawMs: 16,
  },
};

export type ScreenPainter = (context: CanvasRenderingContext2D, width: number, height: number, time: number) => void;

const MONO_STACK = 'ui-monospace, "SF Mono", "JetBrains Mono", Menlo, Consolas, monospace';
const GROTESQUE_STACK = '"Helvetica Neue", "Inter", Helvetica, Arial, sans-serif';
const pad = (value: number, size = 2) => String(Math.floor(value)).padStart(size, "0");

/* ---------------------------------------------------------------- cinematic */

const CINEMATIC_CYCLE = 8;
const CINEMATIC_CHROME = [
  { text: "PICTURE START", corner: "tl" }, { text: "MONO · ACADEMY", corner: "bl" }, { text: "REEL 02 OF 04", corner: "br" },
] as const;

function registrationMark(context: CanvasRenderingContext2D, x: number, y: number, size: number) {
  context.beginPath(); context.moveTo(x - size, y); context.lineTo(x + size, y); context.moveTo(x, y - size); context.lineTo(x, y + size); context.stroke();
  context.beginPath(); context.arc(x, y, size * 0.52, 0, Math.PI * 2); context.stroke();
}

const paintCinematic: ScreenPainter = (context, width, height, time) => {
  const bar = height * 0.112, top = bar, bottom = height - bar, frameHeight = bottom - top;
  const cx = width / 2, cy = top + frameHeight / 2, radius = frameHeight * 0.325;
  const phase = ((time % CINEMATIC_CYCLE) + CINEMATIC_CYCLE) % CINEMATIC_CYCLE, counting = phase < 7;
  const label = Math.max(2, 9 - Math.ceil(phase || 0.0001));

  const wash = context.createLinearGradient(0, top, 0, bottom);
  wash.addColorStop(0, "#101013"); wash.addColorStop(0.55, "#08080a"); wash.addColorStop(1, "#0d0d10");
  context.setTransform(1, 0, 0, 1, 0, 0); context.fillStyle = wash; context.fillRect(0, 0, width, height);

  /* the running film edge: perforations scroll past on both sides of the frame */
  context.fillStyle = "rgba(236,236,240,0.20)";
  const pitch = frameHeight / 9, offset = (time * pitch * 2.4) % pitch, perfWidth = width * 0.011, perfHeight = pitch * 0.34;
  for (let y = top - pitch + offset; y < bottom + pitch; y += pitch) {
    context.fillRect(width * 0.022, y, perfWidth, perfHeight);
    context.fillRect(width - width * 0.022 - perfWidth, y, perfWidth, perfHeight);
  }

  context.strokeStyle = "rgba(238,238,244,0.16)"; context.lineWidth = Math.max(1, height * 0.0016);
  context.beginPath(); context.moveTo(cx, top); context.lineTo(cx, bottom); context.moveTo(width * 0.06, cy); context.lineTo(width * 0.94, cy); context.stroke();

  context.strokeStyle = "rgba(238,238,244,0.30)";
  for (const corner of ["tl", "tr", "bl", "br"] as const) {
    const x = corner.endsWith("l") ? width * 0.085 : width * 0.915, y = corner.startsWith("t") ? top + frameHeight * 0.16 : bottom - frameHeight * 0.16;
    registrationMark(context, x, y, height * 0.024);
  }

  if (counting) {
    context.strokeStyle = "rgba(240,240,246,0.42)"; context.lineWidth = Math.max(1.4, height * 0.0032);
    context.beginPath(); context.arc(cx, cy, radius, 0, Math.PI * 2); context.stroke();
    context.strokeStyle = "rgba(240,240,246,0.22)";
    context.beginPath(); context.arc(cx, cy, radius * 0.845, 0, Math.PI * 2); context.stroke();

    const sweep = (phase % 1) * Math.PI * 2, start = -Math.PI / 2;
    context.fillStyle = "rgba(244,244,250,0.085)";
    context.beginPath(); context.moveTo(cx, cy); context.arc(cx, cy, radius, start, start + sweep); context.closePath(); context.fill();
    context.strokeStyle = "rgba(248,248,252,0.70)"; context.lineWidth = Math.max(1.2, height * 0.0026);
    context.beginPath(); context.moveTo(cx, cy); context.lineTo(cx + Math.cos(start + sweep) * radius, cy + Math.sin(start + sweep) * radius); context.stroke();

    context.strokeStyle = "rgba(238,238,244,0.34)"; context.lineWidth = Math.max(1, height * 0.0020);
    for (let tick = 0; tick < 12; tick += 1) {
      const angle = start + (tick / 12) * Math.PI * 2, inner = tick % 3 === 0 ? radius * 1.055 : radius * 1.028;
      context.beginPath(); context.moveTo(cx + Math.cos(angle) * inner, cy + Math.sin(angle) * inner); context.lineTo(cx + Math.cos(angle) * radius * 1.10, cy + Math.sin(angle) * radius * 1.10); context.stroke();
    }

    context.textAlign = "center"; context.textBaseline = "middle";
    context.shadowColor = "rgba(255,255,255,0.55)"; context.shadowBlur = height * 0.030;
    context.fillStyle = "#f6f6fa"; context.font = `700 ${(radius * 1.28).toFixed(2)}px ${GROTESQUE_STACK}`;
    context.fillText(String(label), cx, cy + radius * 0.02);
    context.shadowBlur = 0;
  } else {
    const flash = Math.max(0, 1 - (phase - 7) / 0.10);
    if (flash > 0) { context.fillStyle = `rgba(250,250,252,${(flash * 0.62).toFixed(3)})`; context.fillRect(0, top, width, frameHeight); }
    context.textAlign = "center"; context.textBaseline = "middle";
    context.fillStyle = "rgba(244,244,248,0.92)";
    const size = height * 0.052;
    context.font = `500 ${size.toFixed(2)}px ${MONO_STACK}`;
    const title = "T H E   L O N G   Q U I E T";
    context.shadowColor = "rgba(255,255,255,0.45)"; context.shadowBlur = height * 0.020;
    /* clear of the horizontal crosshair, which otherwise rules through the baseline */
    context.fillText(title, cx, cy - size * 0.78);
    context.shadowBlur = 0;
    context.font = `400 ${(size * 0.42).toFixed(2)}px ${MONO_STACK}`;
    context.fillStyle = "rgba(232,232,238,0.60)";
    context.fillText("S C E N E   1 4   ·   T A K E   0 3", cx, cy + size * 0.62);
  }

  const chromeSize = height * 0.0255;
  context.font = `500 ${chromeSize.toFixed(2)}px ${MONO_STACK}`; context.textBaseline = "middle"; context.fillStyle = "rgba(226,226,232,0.66)";
  for (const item of CINEMATIC_CHROME) {
    context.textAlign = item.corner.endsWith("l") ? "left" : "right";
    const x = item.corner.endsWith("l") ? width * 0.055 : width * 0.945;
    context.fillText(item.text, x, item.corner.startsWith("t") ? top + frameHeight * 0.055 : bottom - frameHeight * 0.055);
  }
  const frames = Math.floor(time * 24);
  context.textAlign = "right";
  context.fillStyle = "rgba(240,240,246,0.82)";
  context.fillText(`01:${pad((frames / 1440) % 60)}:${pad((frames / 24) % 60)}:${pad(frames % 24)}`, width * 0.945, top + frameHeight * 0.055);

  context.fillStyle = "#000"; context.fillRect(0, 0, width, bar); context.fillRect(0, bottom, width, bar + 1);
};

/* -------------------------------------------------------------- blue screen */

type BlueLine = { text: string; tone?: "head" | "dim" | "bright" };
const BLUE_LINES: BlueLine[] = [
  { text: "SIGNAL HALTED", tone: "head" }, { text: "" },
  { text: "A fault was detected in the video subsystem and the raster" },
  { text: "driver was stopped to prevent damage to the display." }, { text: "" },
  { text: "*  If this screen appears again, power the unit down and let" },
  { text: "   the flyback transformer discharge before restarting." }, { text: "" },
  { text: "*  Horizontal deflection module HD-04 reported a bad sync" },
  { text: "   pulse on line 312 of field 2." }, { text: "" },
  { text: "Technical information:", tone: "bright" }, { text: "" },
  { text: "***  STOP: 0x0000CA7E  (0x0F13D0C0, 0x00000002, 0xC0000005)" },
  { text: "***  RASTER.SYS  -  address 8C1FA00E  base at 8C1F0000" }, { text: "" },
];

const paintBlueScreen: ScreenPainter = (context, width, height, time) => {
  const wash = context.createLinearGradient(0, 0, 0, height);
  wash.addColorStop(0, "#212ec0"); wash.addColorStop(0.62, "#1a22a4"); wash.addColorStop(1, "#141a86");
  context.setTransform(1, 0, 0, 1, 0, 0); context.fillStyle = wash; context.fillRect(0, 0, width, height);

  /* the panel is sized off the line budget so the whole fault report clears the
     curved edges of the tube at any aspect */
  const columns = 62, total = BLUE_LINES.length + 4;
  const size = Math.min((height * 0.88) / (total * 1.44), (width * 0.82) / (columns * 0.60));
  context.font = `600 ${size.toFixed(2)}px ${MONO_STACK}`;
  const advance = context.measureText("M").width || size * 0.6, lineHeight = size * 1.44;
  const blockWidth = advance * columns, left = Math.round((width - blockWidth) / 2);
  const startY = Math.round((height - total * lineHeight) / 2);
  context.textBaseline = "top"; context.textAlign = "left";

  const head = BLUE_LINES[0].text, headWidth = advance * (head.length + 4);
  context.fillStyle = "#e9ecff";
  context.fillRect(Math.round((width - headWidth) / 2), startY - size * 0.20, headWidth, lineHeight);
  context.fillStyle = "#161d92";
  context.fillText(head, Math.round((width - headWidth) / 2) + advance * 2, startY);

  context.shadowColor = "rgba(196,214,255,0.55)"; context.shadowBlur = size * 0.30;
  let y = startY + lineHeight;
  for (const line of BLUE_LINES.slice(1)) {
    if (line.text) {
      context.fillStyle = line.tone === "bright" ? "#ffffff" : line.tone === "dim" ? "#aab6f0" : "#dfe5ff";
      context.fillText(line.text, left, y);
    }
    y += lineHeight;
  }

  const dump = Math.min(100, Math.floor((((time % 12) + 12) % 12) * 22));
  context.fillStyle = "#dfe5ff";
  context.fillText(dump >= 100 ? "Dump of video memory complete." : `Beginning dump of video memory: ${pad(dump, 2)}%`, left, y);
  y += lineHeight * 2;
  const prompt = "Press any key to restart the deflection stage ";
  context.fillText(prompt, left, y);
  if (Math.floor(time * 2) % 2 === 0) context.fillRect(left + advance * prompt.length, y + size * 0.08, advance * 0.9, size * 0.96);
  context.shadowBlur = 0;
};

/* ----------------------------------------------------------------- nintendo */

const GLYPHS: Record<string, string> = {
  "0": ".###.#...##..###.#.###..##...#.###.", "1": "..#...##....#....#....#....#...###.", "2": ".###.#...#....#...#...#...#...#####",
  "3": "####.....#....#.###.....#....#####.", "4": "#..#.#..#.#..#.#####...#....#....#.", "5": "######....####.....#....##...#.###.",
  "6": ".###.#....#....####.#...##...#.###.", "7": "#####....#...#...#...#....#....#...", "8": ".###.#...##...#.###.#...##...#.###.",
  "9": ".###.#...##...#.####....#....#.###.", A: ".###.#...##...#######...##...##...#", B: "####.#...##...#####.#...##...#####.",
  C: ".#####....#....#....#....#.....####", D: "####.#...##...##...##...##...#####.", E: "######....#....####.#....#....#####",
  F: "######....#....####.#....#....#....", G: ".#####....#....#..###...##...#.####", H: "#...##...##...#######...##...##...#",
  I: "#####..#....#....#....#....#..#####", J: "....#....#....#....##...##...#.###.", K: "#...##..#.#.#..##...#.#..#..#.#...#",
  L: "#....#....#....#....#....#....#####", M: "#...###.###.#.##...##...##...##...#", N: "#...###..##.#.##..###...##...##...#",
  O: ".###.#...##...##...##...##...#.###.", P: "####.#...##...#####.#....#....#....", Q: ".###.#...##...##...##.#.##..#..##.#",
  R: "####.#...##...#####.#.#..#..#.#...#", S: ".#####....#.....###.....#....#####.", T: "#####..#....#....#....#....#....#..",
  U: "#...##...##...##...##...##...#.###.", V: "#...##...##...##...##...#.#.#...#..", W: "#...##...##...##...##.#.###.###...#",
  X: "#...##...#.#.#...#...#.#.#...##...#", Y: "#...##...#.#.#...#....#....#....#..", Z: "#####....#...#...#...#...#....#####",
  " ": "...................................", "-": "...............#####...............", ".": "..........................##...##..",
  ":": "......##...##........##...##.......", "!": "..#....#....#....#....#.........#..", "?": ".###.#...#....#..##...#.........#..",
  "(": "..##..#....#....#....#....#.....##.", ")": ".##.....#....#....#....#....#..##..", "/": "....#....#...#...#...#...#....#....",
  "*": ".....#.#.#.###.#####.###.#.#.#.....", "'": "..#....#...........................",
};

const GLYPH_WIDTH = 5, GLYPH_HEIGHT = 7;

function pixelTextWidth(text: string, scale: number) {
  return text.length ? (text.length * (GLYPH_WIDTH + 1) - 1) * scale : 0;
}

function drawPixelText(context: CanvasRenderingContext2D, text: string, x: number, y: number, scale: number, color: string) {
  context.fillStyle = color;
  let cursor = x;
  for (const character of text.toUpperCase()) {
    const rows = GLYPHS[character];
    if (rows) {
      for (let row = 0; row < GLYPH_HEIGHT; row += 1) {
        for (let column = 0; column < GLYPH_WIDTH; column += 1) {
          if (rows[row * GLYPH_WIDTH + column] === "#") context.fillRect(cursor + column * scale, y + row * scale, scale, scale);
        }
      }
    }
    cursor += (GLYPH_WIDTH + 1) * scale;
  }
}

const RUNNER_PALETTE: Record<string, string> = { "1": "#1a1028", "2": "#e0402c", "3": "#f4f4f4", "4": "#2ec4e8", "5": "#22304a" };
const RUNNER_HEAD = [
  "....111111....", "...13333331...", "..1333333331..", "..1355555531..", "..1355555531..", "..1333333331..", "...13333331...", "....111111....",
  "...12222221...", ".122222222221.", ".124444444421.", ".122222222221.", "..1222222221..",
];
const RUNNER_LEGS: Record<string, string[]> = {
  a: ["...122..221...", "...122..221...", "..1111..1111.."],
  b: ["..122....221..", ".122......221.", "1111......1111"],
  jump: ["..122....221..", ".1221....1221.", ".111......111."],
};

function drawRunner(context: CanvasRenderingContext2D, x: number, y: number, pose: keyof typeof RUNNER_LEGS, flip: boolean) {
  const rows = [...RUNNER_HEAD, ...RUNNER_LEGS[pose]];
  for (let row = 0; row < rows.length; row += 1) {
    const line = rows[row];
    for (let column = 0; column < line.length; column += 1) {
      const color = RUNNER_PALETTE[line[column]];
      if (color) { context.fillStyle = color; context.fillRect(x + (flip ? line.length - 1 - column : column), y + row, 1, 1); }
    }
  }
}

function drawCloud(context: CanvasRenderingContext2D, x: number, y: number, scale: number) {
  context.fillStyle = "#f4f8ff";
  const puffs: readonly (readonly [number, number, number, number])[] = [[0, 4, 22, 6], [4, 1, 14, 4], [11, 2, 12, 5], [2, 8, 20, 3]];
  for (const [dx, dy, w, h] of puffs) context.fillRect(Math.round(x + dx * scale), Math.round(y + dy * scale), Math.round(w * scale), Math.round(h * scale));
}

function drawHill(context: CanvasRenderingContext2D, x: number, baseY: number, size: number, color: string) {
  context.fillStyle = color;
  for (let step = 0; step < size; step += 1) {
    const width = (size - step) * 4;
    context.fillRect(Math.round(x - width / 2), baseY - (step + 1) * 3, width, 3);
  }
}

/* one 320x180 title screen, laid out so the wordmark, credit, prompt, crates, and
   the runner's jump arc each own a horizontal band and never overlap */
const NINTENDO_CYCLE = 10;
const CRATE_X = [118, 208], GROUND_ROW = 154, JUMP_SPAN = 50, JUMP_LIFT = 22;

function drawCrate(context: CanvasRenderingContext2D, x: number, y: number) {
  context.fillStyle = "#20140c"; context.fillRect(x, y, 16, 16);
  context.fillStyle = "#d8902c"; context.fillRect(x + 1, y + 1, 14, 14);
  context.fillStyle = "#f0c060"; context.fillRect(x + 1, y + 1, 14, 3);
  context.fillStyle = "#8a5414"; context.fillRect(x + 1, y + 11, 14, 3);
  context.fillStyle = "#20140c";
  context.fillRect(x + 6, y + 5, 4, 2); context.fillRect(x + 5, y + 7, 6, 2); context.fillRect(x + 6, y + 9, 4, 2);
}

function drawGem(context: CanvasRenderingContext2D, x: number, y: number, spin: number) {
  const gemWidth = [8, 6, 2, 6][spin], half = gemWidth / 2, inset = gemWidth > 3 ? 1 : 0;
  context.fillStyle = "#20140c";
  context.fillRect(x - half - 1, y + 1, gemWidth + 2, 8); context.fillRect(x - half, y - 1, gemWidth, 12);
  context.fillStyle = "#ffe070";
  context.fillRect(x - half, y + 1, gemWidth, 8); context.fillRect(x - half + inset, y, gemWidth - inset * 2, 10);
  context.fillStyle = "#fff8c8"; context.fillRect(x - half + inset, y + 2, Math.max(1, half - inset), 4);
}

const paintNintendo: ScreenPainter = (context, width, height, time) => {
  const groundY = GROUND_ROW, phase = ((time % NINTENDO_CYCLE) + NINTENDO_CYCLE) % NINTENDO_CYCLE;

  const sky = context.createLinearGradient(0, 0, 0, groundY);
  sky.addColorStop(0, "#2440b8"); sky.addColorStop(0.55, "#5c94fc"); sky.addColorStop(1, "#9ecbff");
  context.setTransform(1, 0, 0, 1, 0, 0); context.fillStyle = sky; context.fillRect(0, 0, width, height);

  for (let star = 0; star < 22; star += 1) {
    const x = (star * 61) % width, y = 2 + ((star * 29) % 16);
    context.fillStyle = (star + Math.floor(time * 3)) % 5 === 0 ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.30)";
    context.fillRect(x, y, 1, 1);
  }

  /* clouds sit in the sky band above the wordmark, never behind its counters */
  for (const [speed, cloudY, scale] of [[6, 18, 1.25], [3.5, 32, 0.85]] as const) {
    const span = width + 80;
    for (let copy = 0; copy < 3; copy += 1) drawCloud(context, (((time * speed) + (copy * span) / 3) % span) - 50, cloudY + (copy % 2) * 5, scale);
  }

  drawHill(context, 48, groundY, 9, "#2f7a3a");
  drawHill(context, 268, groundY, 11, "#2f7a3a");
  drawHill(context, 160, groundY, 6, "#3e9a48");

  context.fillStyle = "#3ca03c"; context.fillRect(0, groundY, width, 4);
  context.fillStyle = "#2c7a2c"; context.fillRect(0, groundY + 4, width, 2);
  context.fillStyle = "#a05a28"; context.fillRect(0, groundY + 6, width, height - groundY - 6);
  context.fillStyle = "#7c4018";
  for (let y = groundY + 6; y < height; y += 6) {
    context.fillRect(0, y, width, 1);
    for (let x = (y % 12 === 0 ? 0 : 6); x < width; x += 12) context.fillRect(x, y, 1, 6);
  }

  const spin = Math.floor(time * 8) % 4, bob = [0, 1, 1, 0][Math.floor(time * 6) % 4];
  for (const crateX of CRATE_X) { drawCrate(context, crateX, groundY - 16); drawGem(context, crateX + 8, groundY - 32 - bob, spin); }

  const runX = Math.round(-24 + ((phase / NINTENDO_CYCLE) * (width + 60)));
  let lift = 0;
  for (const crateX of CRATE_X) {
    const progress = (runX - (crateX - 28)) / JUMP_SPAN;
    if (progress > 0 && progress < 1) lift = Math.max(lift, Math.sin(progress * Math.PI) * JUMP_LIFT);
  }
  const pose = lift > 0.5 ? "jump" : Math.floor(time * 9) % 2 === 0 ? "a" : "b";
  context.fillStyle = "rgba(20,16,10,0.20)"; context.fillRect(runX + 2, groundY - 1, 10, 2);
  drawRunner(context, runX, groundY - 16 - Math.round(lift), pose, false);

  for (const [text, x] of [["PLAYER-1", 10], ["GEMS 0" + (2 + Math.floor(phase / 4)), 96], ["WORLD 1-1", 174], ["TIME " + pad(Math.max(0, 384 - Math.floor(time * 2)) % 1000, 3), 254]] as const) {
    drawPixelText(context, String(text), Number(x), 7, 1, "#141428");
    drawPixelText(context, String(text), Number(x), 6, 1, "#ffffff");
  }

  const title = "RASTER RUN", titleWidth = pixelTextWidth(title, 3), titleX = Math.round((width - titleWidth) / 2);
  drawPixelText(context, title, titleX + 3, 53, 3, "#141028");
  drawPixelText(context, title, titleX, 50, 3, "#f8e038");
  /* a highlight band sweeps the wordmark the way an attract-mode title does */
  const sweepX = titleX + ((time * 130) % (titleWidth + 110)) - 55;
  context.save();
  context.beginPath(); context.rect(sweepX, 50, 24, 21); context.clip();
  drawPixelText(context, title, titleX, 50, 3, "#fffce0");
  context.restore();

  const credit = "(C) 1987 THREEUI", creditX = Math.round((width - pixelTextWidth(credit, 1)) / 2);
  drawPixelText(context, credit, creditX, 79, 1, "#0e1430");
  drawPixelText(context, credit, creditX, 78, 1, "#dfe8ff");

  if (Math.floor(time * 1.6) % 2 === 0) {
    const start = "PUSH START", startX = Math.round((width - pixelTextWidth(start, 2)) / 2);
    drawPixelText(context, start, startX + 2, 100, 2, "#141028");
    drawPixelText(context, start, startX, 98, 2, "#ffffff");
  }
};

export const CRT_SCREENS: Record<Exclude<CrtVariant, "terminal">, ScreenPainter> = {
  cinematic: paintCinematic,
  "blue-screen": paintBlueScreen,
  nintendo: paintNintendo,
};
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
