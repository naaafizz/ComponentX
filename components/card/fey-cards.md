---
name: "Fey Cards"
library: "ComponentX"
id: "fey-cards"
type: "card"
quality: "advanced"
tags: ["card", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Fey Cards

> **Type:** `card` · **Quality:** `advanced` · **ID:** `fey-cards`
> **Path:** `components/card/fey-cards.md`

**Fey Cards** is a premium, production-ready component from the **ComponentX** library — engineered for card interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Advanced tier** — richer composition and interaction, engineered for complex layouts while keeping the public surface tight.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `card`, `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Fey Cards** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion, type Variants } from "motion/react";

const CARD_SPACING = 32;

type HeroCard = {
  activeSrc: string;
  left: string;
  showIdleSwap?: boolean;
  className?: string;
};

const HERO_CARDS: HeroCard[] = [
  {
    activeSrc: "https://assets.ComponentX.com/labs/1.webp",
    left: "left-[32px]",
  },
  {
    activeSrc: "https://assets.ComponentX.com/labs/2.webp",
    left: "left-[64px]",
  },
  {
    activeSrc: "https://assets.ComponentX.com/labs/3.webp",
    left: "left-[96px]",
  },
  {
    activeSrc: "https://assets.ComponentX.com/labs/4.webp",
    left: "left-[128px]",
  },
  {
    activeSrc: "https://assets.ComponentX.com/labs/5.webp",
    left: "left-[160px]",
    showIdleSwap: false,
    className: "transition-opacity duration-300",
  },
];

type SpringConfig = {
  type: "spring";
  bounce?: number;
  visualDuration?: number;
  stiffness?: number;
  damping?: number;
  mass?: number;
};

const defaultSpring: SpringConfig = {
  type: "spring",
  visualDuration: 0.5,
  bounce: 0.2,
};

export interface FeyCardsProps {
  spring?: SpringConfig;
  shiftDistance?: number;
  swapDuration?: number;
  entranceStagger?: number;
}

export const controls = {
  spring: defaultSpring,
  shiftDistance: [60, 0, 200, 5],
  swapDuration: [0.5, 0, 2, 0.05],
  entranceStagger: [0.1, 0, 0.5, 0.01],
};

export const FeyCards = ({
  spring = defaultSpring,
  shiftDistance = 60,
  swapDuration = 0.5,
  entranceStagger = 0.2,
}: FeyCardsProps = {}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isHovered = activeIndex !== null;
  const swapStyle = { transitionDuration: `${swapDuration}s` };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: entranceStagger,
        staggerDirection: -1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: (offset: number) => ({ x: offset }),
    visible: { x: 0, transition: spring },
  };

  return (
    <div className="flex h-dvh w-full items-center justify-center bg-black">
      <div>
        <motion.h1
          key="solid"
          initial={{ opacity: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          className={cn(
            "absolute top-1/2 left-1/2 z-50 mx-auto w-fit -translate-x-1/2 -translate-y-1/2 text-center text-xl font-bold tracking-tight whitespace-nowrap md:text-5xl",
            "bg-clip-text py-4 text-transparent transition-all duration-500",
            "bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_30%,rgba(255,255,255,0)_60%,rgba(255,255,255,0.2)_80%,white_100%)]",
          )}
        >
          Inspired by the pros. Made for you.
        </motion.h1>
        <motion.h1
          key="gradient"
          initial={{ opacity: 0 }}
          animate={{
            opacity: isHovered ? 0 : 1,
          }}
          className={cn(
            "absolute top-1/2 left-1/2 z-50 mx-auto w-fit -translate-x-1/2 -translate-y-1/2 text-center text-xl font-bold tracking-tight whitespace-nowrap md:text-5xl",
            "bg-clip-text py-4 text-transparent transition-all duration-500",
            "bg-[linear-gradient(to_right,white,white)]",
          )}
        >
          Inspired by the pros. Made for you.
        </motion.h1>
        <motion.div
          className="relative flex h-120 w-96 mask-b-from-10%"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <img
            src="https://assets.ComponentX.com/labs/main.webp"
            alt="Hero"
            width={1000}
            height={1000}
            className="absolute inset-y-0 left-0 h-120 w-40 object-contain"
          />

          {HERO_CARDS.map((card, index) => {
            const shouldShift = activeIndex !== null && index > activeIndex;
            const isActive = activeIndex === index;
            const entranceOffset = -index * CARD_SPACING;
            return (
              <motion.div
                key={card.activeSrc}
                className={`group absolute -bottom-2 ${card.left} z-20 h-120 w-40 cursor-pointer ${card.className ?? ""}`}
                variants={cardVariants}
                custom={entranceOffset}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                onClick={() =>
                  setActiveIndex((current) =>
                    current === index ? null : index,
                  )
                }
              >
                <motion.div
                  className="relative h-full w-full"
                  animate={{ x: shouldShift ? shiftDistance : 0 }}
                  transition={spring}
                >
                  {card.showIdleSwap !== false ? (
                    <>
                      <img
                        src={card.activeSrc}
                        alt="Hero"
                        width={1000}
                        height={1000}
                        style={swapStyle}
                        className={cn(
                          "absolute inset-0 aspect-9/16 h-full w-full object-contain opacity-0 transition-opacity group-hover:opacity-100",
                          isActive && "opacity-100",
                        )}
                      />
                      <img
                        src="https://assets.ComponentX.com/labs/idle.webp"
                        alt="Hero idle"
                        width={1000}
                        height={1000}
                        style={swapStyle}
                        className={cn(
                          "absolute inset-0 aspect-9/16 h-full w-full object-contain opacity-100 transition-opacity group-hover:opacity-0",
                          isActive && "opacity-0",
                        )}
                      />
                      <div className="absolute top-8 left-2 z-50 h-full w-4 bg-black blur-md" />
                    </>
                  ) : (
                    <img
                      src={card.activeSrc}
                      alt="Hero"
                      width={1000}
                      height={1000}
                      style={swapStyle}
                      className="absolute inset-0 aspect-9/16 h-full w-full object-contain transition-opacity"
                    />
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default FeyCards;

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
