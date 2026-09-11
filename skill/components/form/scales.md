---
name: "Scales"
library: "ComponentX"
id: "scales"
type: "form"
quality: "standard"
tags: ["component", "image"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Scales

> **Type:** `form` · **Quality:** `standard` · **ID:** `scales`
> **Path:** `components/form/scales.md`

**Scales** is a premium, production-ready component from the **ComponentX** library — engineered for form interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `image` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Scales** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

File location: components/scales-with-image-demo.tsx

File content: import { Scales } from "@/components/ui/scales";

export default function ScalesWithImageDemo() {
  return (
    <div className="relative mx-auto flex w-full items-center justify-center overflow-hidden py-10 md:py-20">
      <div className="relative h-80 w-72 rounded-lg bg-gray-100 dark:bg-neutral-800/50">
        <div className="absolute -inset-y-[30%] -left-10 h-[160%] w-8 mask-t-from-90% mask-b-from-90%">
          <Scales size={8} className="rounded-lg" />
        </div>
        <div className="absolute -inset-y-[30%] -right-10 h-[160%] w-8 mask-t-from-90% mask-b-from-90%">
          <Scales size={8} className="rounded-lg" />
        </div>
        <div className="absolute -inset-x-[30%] -top-10 h-8 w-[160%] mask-r-from-90% mask-l-from-90%">
          <Scales size={8} className="rounded-lg" />
        </div>
        <div className="absolute -inset-x-[30%] -bottom-10 h-8 w-[160%] mask-r-from-90% mask-l-from-90%">
          <Scales size={8} className="rounded-lg" />
        </div>
        <div className="relative z-10 h-full w-full overflow-hidden rounded-none bg-white shadow-sm ring-1 shadow-black/10 ring-black/5 dark:bg-neutral-800">
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1288&auto=format&fit=crop"
            alt="Portrait"
            className="h-full w-full object-cover filter"
          />
        </div>
      </div>
    </div>
  );
}


File location: components/ui/scales.tsx

File content: import { cn } from "@/lib/utils";
import React from "react";

export interface ScalesProps {
  orientation?: "horizontal" | "vertical" | "diagonal";
  size?: number;
  className?: string;
  color?: string;
}

export const Scales = ({
  orientation = "diagonal",
  size = 10,
  className,
  color,
}: ScalesProps) => {
  const getGradientAngle = () => {
    switch (orientation) {
      case "horizontal":
        return "0deg";
      case "vertical":
        return "90deg";
      case "diagonal":
      default:
        return "315deg";
    }
  };

  return (
    <div
      className={cn(
        "absolute inset-0 h-full w-full overflow-hidden",
        "[--pattern-scales:var(--color-neutral-950)]/10",
        "dark:[--pattern-scales:var(--color-white)]/10",
        className,
      )}
      style={
        {
          "--scales-size": `${size}px`,
          "--scales-angle": getGradientAngle(),
          ...(color && { "--pattern-scales": color }),
        } as React.CSSProperties
      }
    >
      <div
        className="h-full w-full bg-[repeating-linear-gradient(var(--scales-angle),var(--pattern-scales)_0,var(--pattern-scales)_1px,transparent_0,transparent_50%)]"
        style={{
          backgroundSize: `var(--scales-size) var(--scales-size)`,
        }}
      />
    </div>
  );
};

export interface ScalesContainerProps extends ScalesProps {
  children?: React.ReactNode;
  containerClassName?: string;
}

export const ScalesContainer = ({
  children,
  orientation = "diagonal",
  size = 10,
  className,
  containerClassName,
  color,
}: ScalesContainerProps) => {
  return (
    <div className={cn("relative", containerClassName)}>
      <Scales
        orientation={orientation}
        size={size}
        className={className}
        color={color}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Scales;

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
