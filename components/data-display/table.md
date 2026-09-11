---
name: "Table"
library: "ComponentX"
id: "table"
type: "data-display"
quality: "advanced"
tags: ["data", "layout", "navigation", "table", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Table

> **Type:** `data-display` · **Quality:** `advanced` · **ID:** `table`
> **Path:** `components/data-display/table.md`

**Table** is a premium, production-ready component from the **ComponentX** library — engineered for data display interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Advanced tier** — richer composition and interaction, engineered for complex layouts while keeping the public surface tight.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `data`, `layout`, `navigation` workflows.
- **Pattern coverage** — includes `table`, `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Table** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
title: React Table Components
description: A React table component for displaying structured data in rows and columns. Used to present tabular data in a clear, easy-to-scan layout.
---

import TableFullBleedPreview from "@/components/preview/table/table-full-bleed-preview";
import TableOrderHistoryPreview from "@/components/preview/table/table-order-history-preview";
import TablePreview from "@/components/preview/table/table-preview";
import TableRecentOrdersPreview from "@/components/preview/table/table-recent-orders-preview";
import TableTransactionsPreview from "@/components/preview/table/table-transactions-preview";
import { getFileContent } from "@/utils/get-file-content";
import { Accordion, Accordions } from "componentx-ui/components/accordion";

# Table

React Table components are used to display structured data in rows and columns. They are commonly used for lists, reports, dashboards, admin panels, and data-heavy interfaces where content needs to be easy to scan and compare.

This Table component is built with React and styled using Tailwind CSS. It provides composable table parts, responsive horizontal scrolling, and flexible styling while keeping native table semantics.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/table/table-preview.tsx"
  )}
>
  <TablePreview />
</ComponentPreview>

## Anatomy

Import the table parts and compose them to build the layout.

```tsx
import {
  TableRoot,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell
} from "@/components/componentx/core/table";

const TablePreview = () => (
  <TableRoot>
    <TableHeader>
      <TableRow>
        <TableHead />
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell />
      </TableRow>
    </TableBody>
  </TableRoot>
);

export default TablePreview;
```

## Usage

```tsx
import {
  TableRoot,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell
} from "@/components/componentx/core/table";

export default function TableExample() {
  return (
    <TableRoot>
      <TableHeader>
        <TableRow>
          <TableHead>Header</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Cell</TableCell>
        </TableRow>
      </TableBody>
    </TableRoot>
  );
}
```

## Examples

### Full Bleed

The `fullBleed` prop removes rounded corners and side borders, making the table span the full width of its container. This is useful for edge-to-edge layouts.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/table/table-full-bleed-preview.tsx"
  )}
>
  <TableFullBleedPreview />
</ComponentPreview>

### Recent Orders

A dashboard widget style table for displaying recent orders with product thumbnails and "See All" navigation.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/table/table-recent-orders-preview.tsx"
  )}
>
  <TableRecentOrdersPreview />
</ComponentPreview>

### Order History

An order history table that displays order status with color-coded badges and includes a sorting interface.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/table/table-order-history-preview.tsx"
  )}
>
  <TableOrderHistoryPreview />
</ComponentPreview>

### Transactions

A financial transactions table including category icons, price formatting, and status indicators.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/table/table-transactions-preview.tsx"
  )}
>
  <TableTransactionsPreview />
</ComponentPreview>

## API Reference

### TableRoot

Wraps the entire table and manages layout and overflow behavior. Extends `native` table element props.

| Prop        | Type      | Default | Description                                    |
| ----------- | --------- | ------- | ---------------------------------------------- |
| `fullBleed` | `boolean` | `false` | Remove rounded corners for edge-to-edge layout |
| `className` | `string`  | -       | Additional CSS classes                         |

### TableHeader

The table header container. Extends `thead` element props.

| Prop        | Type     | Description            |
| ----------- | -------- | ---------------------- |
| `className` | `string` | Additional CSS classes |

### TableBody

The table body container. Extends `tbody` element props.

| Prop        | Type     | Description            |
| ----------- | -------- | ---------------------- |
| `className` | `string` | Additional CSS classes |

### TableHead

A table header cell. Extends `th` element props.

| Prop        | Type     | Description            |
| ----------- | -------- | ---------------------- |
| `className` | `string` | Additional CSS classes |

### TableRow

A table row. Extends `tr` element props.

| Prop        | Type     | Description            |
| ----------- | -------- | ---------------------- |
| `className` | `string` | Additional CSS classes |

### TableCell

A table data cell. Extends `td` element props.

| Prop        | Type     | Description            |
| ----------- | -------- | ---------------------- |
| `className` | `string` | Additional CSS classes |

## Accessibility

- Uses native table elements (`table`, `thead`, `tbody`, `tr`, `th`, `td`)
- Header cells use `<th>` for proper screen reader context
- Left-aligned text for better readability
- Horizontal scroll container for responsive behavior
- Supports all standard table HTML attributes

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
