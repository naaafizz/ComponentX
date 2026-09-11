---
name: "Loaders"
library: "ComponentX"
id: "loaders"
type: "loader"
quality: "lightweight"
tags: ["loading"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Loaders

> **Type:** `loader` · **Quality:** `lightweight` · **ID:** `loaders`
> **Path:** `components/loader/loaders.md`

**Loaders** is a premium, production-ready component from the **ComponentX** library — engineered for loader interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Lightweight tier** — a minimal footprint, a small dependency surface, and a clean implementation that drops into any project with zero friction.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `loading` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Loaders** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

File location: components/loader-one-demo.tsx

File content: import React from "react";
import { LoaderOne } from "@/components/ui/loader";

export default function LoaderOneDemo() {
  return <LoaderOne />;
}

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
