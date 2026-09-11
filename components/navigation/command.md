---
name: "Command"
library: "ComponentX"
id: "command"
type: "navigation"
quality: "standard"
tags: ["component", "input", "menu", "navigation", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Command

> **Type:** `navigation` · **Quality:** `standard` · **ID:** `command`
> **Path:** `components/navigation/command.md`

**Command** is a premium, production-ready component from the **ComponentX** library — engineered for navigation interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `input`, `menu`, `navigation` workflows.
- **Pattern coverage** — includes `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Command** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

---
title: React Command Components
description: A fast, composable, and unstyled command menu for React. Used for creating powerful command palettes, search interfaces, and navigation menus.
---

import CommandDialogPreview from "@/components/preview/command/command-dialog-preview";
import CommandMenuPreview from "@/components/preview/command/command-menu-preview";
import CommandPreview from "@/components/preview/command/command-preview";
import CommandSearchPreview from "@/components/preview/command/command-search-preview";
import { getFileContent } from "@/utils/get-file-content";
import { Accordion, Accordions } from "componentx-ui/components/accordion";

# Command

React Command components are used to build fast, composable, and accessible command menus. They are essential for creating command palettes, search dialogs, and navigation shortcuts that improve user productivity.

This Command component is built with React and React Aria Components, ensuring high accessibility and smooth keyboard navigation. It supports filtering, grouping, keyboard shortcuts, and can be easily integrated into modal dialogs.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/command/command-preview.tsx"
  )}
>
  <CommandPreview />
</ComponentPreview>

## Anatomy

Import the component and pass the required props.

```tsx
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut
} from "@/components/componentx/core/command";

export function CommandDemo() {
  return (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Calendar className="mr-2 h-4 w-4" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <Smile className="mr-2 h-4 w-4" />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <Calculator className="mr-2 h-4 w-4" />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
```

## Examples

### Dialog

The `CommandDialog` component allows you to wrap the command menu in a modal dialog.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/command/command-dialog-preview.tsx"
  )}
>
  <CommandDialogPreview />
</ComponentPreview>

### Complex Menu

An example of a more complex command menu with icons, descriptions, and grouped actions. Note the use of `textValue` for filtering.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/command/command-menu-preview.tsx"
  )}
>
  <CommandMenuPreview />
</ComponentPreview>

### File Search

A search-centric example focused on finding files and folders with metadata.

<ComponentPreview
  codeSnippet={getFileContent(
    "/src/components/preview/command/command-search-preview.tsx"
  )}
>
  <CommandSearchPreview />
</ComponentPreview>

## API Reference

### Command

The root component of the command menu.

| Prop           | Type       | Default | Description                                                                       |
| :------------- | :--------- | :------ | :-------------------------------------------------------------------------------- |
| `className`    | `string`   | -       | Additional CSS classes to apply to the command menu.                              |
| `filter`       | `function` | -       | Custom filter function for items. Defaults to `contains` with `base` sensitivity. |
| `label`        | `string`   | -       | Accessible label for the command menu.                                            |
| `shouldFilter` | `boolean`  | `true`  | Whether the command menu should filter items.                                     |

See [useFilter](https://react-aria.adobe.com/useFilter) for more information on filtration.

### CommandInput

The search input field for the command menu.

| Prop          | Type      | Default | Description                                           |
| :------------ | :-------- | :------ | :---------------------------------------------------- |
| `className`   | `string`  | -       | Additional CSS classes to apply to the command input. |
| `placeholder` | `string`  | -       | Placeholder text for the input.                       |
| `disabled`    | `boolean` | `false` | Disables interaction with the input.                  |

### CommandList

The container for the command items. It automatically detects and renders `CommandEmpty` if no results are found.

| Prop               | Type                   | Default | Description                                          |
| :----------------- | :--------------------- | :------ | :--------------------------------------------------- |
| `className`        | `string`               | -       | Additional CSS classes to apply to the command list. |
| `renderEmptyState` | `(items) => ReactNode` | -       | Custom render function for the empty state.          |

### CommandDialog

A command menu wrapped in a modal dialog.

| Prop           | Type       | Default | Description                                          |
| :------------- | :--------- | :------ | :--------------------------------------------------- |
| `className`    | `string`   | -       | Additional CSS classes to apply to the command menu. |
| `isOpen`       | `boolean`  | -       | Controls the open state of the dialog.               |
| `onOpenChange` | `function` | -       | Event handler called when the open state changes.    |

**NOTE:** `CommandDialog` includes built-in keyboard shortcuts: `⌘J` (Mac) or `Ctrl+J` (Windows/Linux) to open, and `Escape` to close.

### CommandEmpty

Displays a message when no search results are found.

| Prop        | Type     | Default | Description                                          |
| :---------- | :------- | :------ | :--------------------------------------------------- |
| `className` | `string` | -       | Additional CSS classes to apply to the command menu. |

### CommandGroup

Groups related command items under a heading.

| Prop        | Type        | Default | Description                                           |
| :---------- | :---------- | :------ | :---------------------------------------------------- |
| `heading`   | `ReactNode` | -       | Optional heading for the group.                       |
| `className` | `string`    | -       | Additional CSS classes to apply to the command group. |

### CommandItem

An individual item in the command menu.

| Prop        | Type       | Default | Description                                                                                                           |
| :---------- | :--------- | :------ | :-------------------------------------------------------------------------------------------------------------------- |
| `className` | `string`   | -       | Additional CSS classes to apply to the command item.                                                                  |
| `disabled`  | `boolean`  | `false` | Disables the item.                                                                                                    |
| `onSelect`  | `function` | -       | Event handler called when the item is selected.                                                                       |
| `value`     | `string`   | -       | Unique value for the item.                                                                                            |
| `textValue` | `string`   | -       | **[Required]** The text representation used for filtering when children contain complex elements (icons, spans, etc). |

### CommandShortcut

Displays a keyboard shortcut hint for a command item.

| Prop        | Type     | Default | Description                                          |
| :---------- | :------- | :------ | :--------------------------------------------------- |
| `className` | `string` | -       | Additional CSS classes to apply to the command menu. |

### CommandSeparator

A visual divider between items or groups.

| Prop        | Type     | Default | Description                                          |
| :---------- | :------- | :------ | :--------------------------------------------------- |
| `className` | `string` | -       | Additional CSS classes to apply to the command menu. |

## Accessibility

- **Keyboard support:** Users can navigate between items using the `Arrow` keys and select an item using `Enter`.
- **Search and filtering:** As users type, the list updates to show matching results.
- **Focus management:** Focus moves from the input to the list and between items, making it usable with the keyboard.
- **Dialog behavior:** When used with `CommandDialog`, users can open it with shortcuts such as `Ctrl + J` or `Cmd + J`, and close it with `Escape`.
- **Screen reader support:** Use clear labels and text for items so screen readers can announce commands and groups properly.

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
