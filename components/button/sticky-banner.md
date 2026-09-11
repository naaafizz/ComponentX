---
name: "Sticky Banner"
library: "ComponentX"
id: "sticky-banner"
type: "button"
quality: "standard"
tags: ["button", "component", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Sticky Banner

> **Type:** `button` · **Quality:** `standard` · **ID:** `sticky-banner`
> **Path:** `components/button/sticky-banner.md`

**Sticky Banner** is a premium, production-ready component from the **ComponentX** library — engineered for button interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `button`, `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Sticky Banner** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

File location: components/sticky-banner-demo.tsx

File content: import { StickyBanner } from "@/components/ui/sticky-banner";

export default function StickyBannerDemo() {
  return (
    <div className="relative flex h-[60vh] w-full flex-col overflow-y-auto">
      <StickyBanner className="bg-gradient-to-b from-blue-500 to-blue-600">
        <p className="mx-0 max-w-[90%] text-white drop-shadow-md">
          Announcing $10M seed funding from project mayhem ventures.{" "}
          <a href="#" className="transition duration-200 hover:underline">
            Read announcement
          </a>
        </p>
      </StickyBanner>
      <DummyContent />
    </div>
  );
}

const DummyContent = () => {
  return (
    <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 py-8">
      <div className="h-96 w-full animate-pulse rounded-lg bg-neutral-100 dark:bg-neutral-800" />
      <div className="h-96 w-full animate-pulse rounded-lg bg-neutral-100 dark:bg-neutral-800" />
      <div className="h-96 w-full animate-pulse rounded-lg bg-neutral-100 dark:bg-neutral-800" />
    </div>
  );
};


File location: components/ui/sticky-banner.tsx

File content: "use client";
import React, { SVGProps, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyBanner = ({
  className,
  children,
  hideOnScroll = false,
}: {
  className?: string;
  children: React.ReactNode;
  hideOnScroll?: boolean;
}) => {
  const [open, setOpen] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log(latest);
    if (hideOnScroll && latest > 40) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  });

  return (
    <motion.div
      className={cn(
        "sticky inset-x-0 top-0 z-40 flex min-h-14 w-full items-center justify-center bg-transparent px-4 py-1",
        className,
      )}
      initial={{
        y: -100,
        opacity: 0,
      }}
      animate={{
        y: open ? 0 : -100,
        opacity: open ? 1 : 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      {children}

      <motion.button
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
        }}
        className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <CloseIcon className="h-5 w-5 text-white" />
      </motion.button>
    </motion.div>
  );
};

const CloseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
};

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
