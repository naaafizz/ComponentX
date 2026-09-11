---
name: "3D Marquee"
library: "ComponentX"
id: "3d-marquee"
type: "3d"
quality: "showcase"
tags: ["3d", "animated", "background", "card", "form", "image", "input", "layout", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · 3D Marquee

> **Type:** `3d` · **Quality:** `showcase` · **ID:** `3d-marquee`
> **Path:** `components/3d/3d-marquee.md`

**3D Marquee** is a premium, production-ready component from the **ComponentX** library — engineered for 3D interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Showcase tier** — a high-impact, visually rich implementation — animated, 3D, or dependency-heavy by design.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `3d`, `animated`, `background` workflows.
- **Pattern coverage** — includes `card`, `form`, `image` workflows.
- **Pattern coverage** — includes `input`, `layout`, `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **3D Marquee** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

File location: components/3d-marquee-demo.tsx

File content: "use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export default function ThreeDMarqueeDemo() {
  const images = [
    "https://assets.ComponentX.com/cloudinary_bkp/3d-card.png",
    "https://assets.ComponentX.com/animated-modal.png",
    "https://assets.ComponentX.com/animated-testimonials.webp",
    "https://assets.ComponentX.com/cloudinary_bkp/Tooltip_luwy44.png",
    "https://assets.ComponentX.com/github-globe.png",
    "https://assets.ComponentX.com/glare-card.png",
    "https://assets.ComponentX.com/layout-grid.png",
    "https://assets.ComponentX.com/flip-text.png",
    "https://assets.ComponentX.com/hero-highlight.png",
    "https://assets.ComponentX.com/carousel.webp",
    "https://assets.ComponentX.com/placeholders-and-vanish-input.png",
    "https://assets.ComponentX.com/shooting-stars-and-stars-background.png",
    "https://assets.ComponentX.com/signup-form.png",
    "https://assets.ComponentX.com/cloudinary_bkp/stars_sxle3d.png",
    "https://assets.ComponentX.com/spotlight-new.webp",
    "https://assets.ComponentX.com/cloudinary_bkp/Spotlight_ar5jpr.png",
    "https://assets.ComponentX.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
    "https://assets.ComponentX.com/tabs.png",
    "https://assets.ComponentX.com/cloudinary_bkp/Tracing_Beam_npujte.png",
    "https://assets.ComponentX.com/cloudinary_bkp/typewriter-effect.png",
    "https://assets.ComponentX.com/glowing-effect.webp",
    "https://assets.ComponentX.com/hover-border-gradient.png",
    "https://assets.ComponentX.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
    "https://assets.ComponentX.com/cloudinary_bkp/Lamp_hlq3ln.png",
    "https://assets.ComponentX.com/macbook-scroll.png",
    "https://assets.ComponentX.com/cloudinary_bkp/Meteors_fye3ys.png",
    "https://assets.ComponentX.com/cloudinary_bkp/Moving_Border_yn78lv.png",
    "https://assets.ComponentX.com/multi-step-loader.png",
    "https://assets.ComponentX.com/vortex.png",
    "https://assets.ComponentX.com/wobble-card.png",
    "https://assets.ComponentX.com/world-map.webp",
  ];
  return (
    <div className="mx-auto my-10 max-w-7xl rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
      <ThreeDMarquee images={images} />
    </div>
  );
}


File location: components/ui/3d-marquee.tsx

File content: "use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
export const ThreeDMarquee = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  // Split the images array into 4 equal parts
  const chunkSize = Math.ceil(images.length / 4);
  const chunks = Array.from({ length: 4 }, (_, colIndex) => {
    const start = colIndex * chunkSize;
    return images.slice(start, start + chunkSize);
  });
  return (
    <div
      className={cn(
        "mx-auto block h-[600px] overflow-hidden rounded-2xl max-sm:h-100",
        className,
      )}
    >
      <div className="flex size-full items-center justify-center">
        <div className="size-[1720px] shrink-0 scale-50 sm:scale-75 lg:scale-100">
          <div
            style={{
              transform: "rotateX(55deg) rotateY(0deg) rotateZ(-45deg)",
            }}
            className="relative top-96 right-[50%] grid size-full origin-top-left grid-cols-4 gap-8 transform-3d"
          >
            {chunks.map((subarray, colIndex) => (
              <motion.div
                animate={{ y: colIndex % 2 === 0 ? 100 : -100 }}
                transition={{
                  duration: colIndex % 2 === 0 ? 10 : 15,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                key={colIndex + "marquee"}
                className="flex flex-col items-start gap-8"
              >
                <GridLineVertical className="-left-4" offset="80px" />
                {subarray.map((image, imageIndex) => (
                  <div className="relative" key={imageIndex + image}>
                    <GridLineHorizontal className="-top-4" offset="20px" />
                    <motion.img
                      whileHover={{
                        y: -10,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                      key={imageIndex + image}
                      src={image}
                      alt={`Image ${imageIndex + 1}`}
                      className="aspect-[970/700] rounded-lg object-cover ring ring-gray-950/5 hover:shadow-2xl"
                      width={970}
                      height={700}
                    />
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const GridLineHorizontal = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "1px",
          "--width": "5px",
          "--fade-stop": "90%",
          "--offset": offset || "200px", //-100px if you want to keep the line inside
          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "absolute left-[calc(var(--offset)/2*-1)] h-[var(--height)] w-[calc(100%+var(--offset))]",
        "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className,
      )}
    ></div>
  );
};

const GridLineVertical = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "5px",
          "--width": "1px",
          "--fade-stop": "90%",
          "--offset": offset || "150px", //-100px if you want to keep the line inside
          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)]",
        "bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className,
      )}
    ></div>
  );
};

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
