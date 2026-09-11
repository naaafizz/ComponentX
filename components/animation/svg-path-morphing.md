---
name: "SVG Path Morphing"
library: "ComponentX"
id: "svg-path-morphing"
type: "animation"
quality: "standard"
tags: ["animation", "button", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · SVG Path Morphing

> **Type:** `animation` · **Quality:** `standard` · **ID:** `svg-path-morphing`
> **Path:** `components/animation/svg-path-morphing.md`

**SVG Path Morphing** is a premium, production-ready component from the **ComponentX** library — engineered for animation interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `animation`, `button`, `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **SVG Path Morphing** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

"use client";

import { useState } from "react";
import { motion } from "motion/react";

// Both icons are built from two 4-point shapes (M, L, L, L, Z) so the path
// command structure stays identical and motion can interpolate `d` smoothly.
// The play triangle is split down its vertical midline into two quadrilaterals,
// so each pause bar morphs into one half of the triangle.
const PAUSE = {
  left: "M5 5L9 5L9 19L5 19Z",
  right: "M15 5L19 5L19 19L15 19Z",
} as const;

const PLAY = {
  // top-left, top-mid, bottom-mid, bottom-left
  left: "M7 5L13 8.5L13 15.5L7 19Z",
  // top-mid, apex, apex, bottom-mid (two corners collapse to the apex)
  right: "M13 8.5L19 12L19 12L13 15.5Z",
} as const;

type SpringConfig = {
  type: "spring";
  stiffness?: number;
  damping?: number;
  mass?: number;
  bounce?: number;
  visualDuration?: number;
};

export type SvgPathMorphingProps = {
  size?: number;
  strokeWidth?: number;
  startPlaying?: boolean;
  spring?: SpringConfig;
  className?: string;
};

const DEFAULT_SPRING: SpringConfig = {
  type: "spring",
  stiffness: 260,
  damping: 26,
  mass: 0.9,
};

export function SvgPathMorphing({
  size = 100,
  strokeWidth = 1.5,
  startPlaying = false,
  spring = DEFAULT_SPRING,
  className,
}: SvgPathMorphingProps) {
  const [isPlaying, setIsPlaying] = useState(startPlaying);
  const target = isPlaying ? PLAY : PAUSE;

  return (
    <button
      type="button"
      onClick={() => setIsPlaying((prev) => !prev)}
      aria-label={isPlaying ? "Pause" : "Play"}
      className={`group text-black dark:text-white ${className ?? ""}`}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <motion.path
          animate={{ d: target.left }}
          transition={spring}
          initial={false}
        />
        <motion.path
          animate={{ d: target.right }}
          transition={spring}
          initial={false}
        />
      </svg>
    </button>
  );
}

export const controls = {
  size: [100, 16, 120, 2],
  strokeWidth: [1.5, 0, 4, 0.5],
  startPlaying: false,
  spring: { type: "spring", stiffness: 260, damping: 26, mass: 0.9 },
};

export default function SvgPathMorphingDemo(props: SvgPathMorphingProps) {
  return (
    <div className="flex h-dvh w-full items-center justify-center bg-white dark:bg-black">
      <SvgPathMorphing {...props} />
    </div>
  );
}

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
