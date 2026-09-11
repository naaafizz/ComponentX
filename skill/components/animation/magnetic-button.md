---
name: "Magnetic Button"
library: "ComponentX"
id: "magnetic-button"
type: "animation"
quality: "showcase"
tags: ["animation", "button", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Magnetic Button

> **Type:** `animation` · **Quality:** `showcase` · **ID:** `magnetic-button`
> **Path:** `components/animation/magnetic-button.md`

**Magnetic Button** is a premium, production-ready component from the **ComponentX** library — engineered for animation interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Showcase tier** — a high-impact, visually rich implementation — animated, 3D, or dependency-heavy by design.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `animation`, `button`, `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Magnetic Button** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

File location: components/magnetic-button-demo.tsx

File content: "use client";
import React from "react";
import { MagneticButton } from "@/components/ui/magnetic-button";

export default function MagneticButtonDemo() {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div className="flex h-[40rem] w-full items-center justify-center">
      <MagneticButton>
        <button
          onClick={handleClick}
          className="cursor-pointer rounded-lg bg-linear-to-b from-blue-500 to-blue-700 px-4 py-2 font-medium text-white ring-1 ring-white/20 ring-offset-1 ring-offset-blue-500 transition-transform duration-150 ring-inset active:scale-98"
        >
          Follow @mannupaaji
        </button>
      </MagneticButton>
    </div>
  );
}


File location: components/ui/magnetic-button.tsx

File content: "use client";

import React, { useRef, useState } from "react";
import { motion } from "motion/react";

export const MagneticButton = ({
  children,
  strength = 0.8,
  maxDistance = 100,
}: {
  children: React.ReactNode;
  strength?: number;
  maxDistance?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const { clientX, clientY } = e;

    let x = (clientX - (left + width / 2)) * strength;
    let y = (clientY - (top + height / 2)) * strength;

    const distance = Math.hypot(x, y);
    if (distance > maxDistance) {
      const scale = maxDistance / distance;
      x *= scale;
      y *= scale;
    }

    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const hasMoved = position.x !== 0 || position.y !== 0;
  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="cursor-pointer rounded-lg border border-dashed transition-colors duration-150 [--show-color:var(--color-blue-500)]"
      style={{
        borderColor: hasMoved ? "var(--show-color)" : "transparent",
        backgroundColor: hasMoved
          ? "color-mix(in srgb,var(--show-color) 20%, transparent)"
          : "transparent",
      }}
    >
      <motion.div
        ref={ref}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 25, mass: 0.1 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
