---
name: "Squiggly Text"
library: "ComponentX"
id: "squiggly-text"
type: "text"
quality: "lightweight"
tags: ["text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Squiggly Text

> **Type:** `text` · **Quality:** `lightweight` · **ID:** `squiggly-text`
> **Path:** `components/text/squiggly-text.md`

**Squiggly Text** is a premium, production-ready component from the **ComponentX** library — engineered for text interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Lightweight tier** — a minimal footprint, a small dependency surface, and a clean implementation that drops into any project with zero friction.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Squiggly Text** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

File location: components/squiggly-text-demo.tsx

File content: "use client";
import React from "react";
import { SquigglyText } from "@/components/ui/squiggly-text";

export default function SquigglyTextDemo() {
  return (
    <div className="flex h-[40rem] w-full items-center justify-center">
      <h1 className="text-center text-5xl leading-tight font-bold text-neutral-900 md:text-7xl lg:text-8xl dark:text-neutral-100">
        How many{" "}
        <SquigglyText
          stepDuration={70}
          scale={[6, 9]}
          className="text-amber-500"
        >
          drinks
        </SquigglyText>{" "}
        <br />
        are <SquigglyText scale={5}>too many</SquigglyText> drinks?
      </h1>
    </div>
  );
}


File location: components/ui/squiggly-text.tsx

File content: "use client";

import React, { useId } from "react";
import { motion, useTime, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

export interface SquigglyTextProps {
  /**
   * The text (or any node) to wrap with the squiggly effect.
   */
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  /**
   * Number of distinct displacement frames to cycle through.
   * Higher = smoother wobble, more SVG filters in the DOM.
   * @default 5
   */
  steps?: number;
  /**
   * Time between filter swaps, in milliseconds.
   * Lower = more frantic; higher = lazier wave.
   * @default 80
   */
  stepDuration?: number;
  /**
   * Maximum displacement in px. Bigger = more squiggly.
   * Pass a single number for a constant scale, or a tuple to alternate
   * between two values per step (matches the original Lucas Bebber demo).
   * @default [6, 8]
   */
  scale?: number | [number, number];
  /**
   * Turbulence base frequency. Lower values produce longer, smoother waves;
   * higher values produce tighter, jitterier noise.
   * @default 0.02
   */
  baseFrequency?: number;
  /**
   * Number of turbulence octaves. Higher = more detailed noise.
   * @default 3
   */
  numOctaves?: number;
  /**
   * Render the wrapper as this element type.
   * @default "span"
   */
  as?: "span" | "div";
}

export function SquigglyText({
  children,
  steps = 5,
  stepDuration = 80,
  scale = [6, 8],
  baseFrequency = 0.02,
  numOctaves = 3,
  as = "span",
  className,
  style,
}: SquigglyTextProps) {
  const reactId = useId();
  // useId can produce ":" / "_" which aren't valid in CSS url(#…) refs.
  const safeId = reactId.replace(/[:_]/g, "");
  const filterId = (i: number) => `squiggly-${safeId}-${i}`;

  const filters = React.useMemo(
    () => Array.from({ length: steps }, (_, i) => `url(#${filterId(i)})`),
    // filterId is stable per render
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [steps, safeId],
  );

  const time = useTime();
  const filter = useTransform(
    time,
    (t) => filters[Math.floor(t / stepDuration) % filters.length],
  );

  const scaleAt = (i: number) =>
    Array.isArray(scale) ? scale[i % scale.length] : scale;

  const Wrapper = as === "div" ? motion.div : motion.span;

  return (
    <Wrapper
      style={{ filter, ...style }}
      className={cn("inline-block", className)}
    >
      <svg
        aria-hidden
        className="pointer-events-none absolute h-0 w-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {Array.from({ length: steps }).map((_, i) => (
            <filter id={filterId(i)} key={i}>
              <feTurbulence
                baseFrequency={baseFrequency}
                numOctaves={numOctaves}
                result="noise"
                seed={i}
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale={scaleAt(i)}
              />
            </filter>
          ))}
        </defs>
      </svg>
      {children}
    </Wrapper>
  );
}

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
