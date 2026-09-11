---
name: "Advance Range Slider"
library: "ComponentX"
id: "advance-range-slider"
type: "form"
quality: "standard"
tags: ["data", "form"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Advance Range Slider

> **Type:** `form` · **Quality:** `standard` · **ID:** `advance-range-slider`
> **Path:** `components/form/advance-range-slider.md`

**Advance Range Slider** is a premium, production-ready component from the **ComponentX** library — engineered for form interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `data`, `form` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Advance Range Slider** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<label class="sr-only">Example</label>

<div
  data-range-slider='{
  "start": 50,
  "connect": "lower",
  "range": {
    "min": 0,
    "max": 100
  },
  "cssClasses": {
    "target": "relative h-2 rounded-full bg-neutral/10",
    "base": "size-full relative z-1",
    "origin": "absolute top-0 end-0 rtl:start-0 size-full origin-[0_0] rounded-full",
    "handle": "absolute top-1/2 end-0 rtl:start-0 size-4 bg-base-100 border-[3px] border-primary rounded-full translate-x-2/4 -translate-y-2/4 hover:cursor-grab active:cursor-grabbing hover:ring-2 ring-primary active:ring-[3px]",
    "connects": "relative z-0 w-full h-2 rtl:rounded-e-full rtl:rounded-s-none rounded-s-full overflow-hidden",
    "connect": "absolute top-0 end-0 rtl:start-0 z-1 size-full bg-primary origin-[0_0]",
    "touchArea": "absolute -top-1 -bottom-1 -start-1 -end-1"
  }
}'
></div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div>
  <label class="sr-only">Example</label>

  <div
    data-range-slider='{
    "start": 50,
    "connect": "lower",
    "range": {
      "min": 0,
      "max": 100
    },
    "cssClasses": {
      "target": "relative h-2 rounded-full bg-neutral/10",
      "base": "size-full relative z-1",
      "origin": "absolute top-0 end-0 rtl:start-0 size-full origin-[0_0] rounded-full",
      "handle": "absolute top-1/2 end-0 rtl:start-0 size-4 bg-base-100 border-[3px] border-primary rounded-full translate-x-2/4 -translate-y-2/4 hover:cursor-grab active:cursor-grabbing hover:ring-2 ring-primary active:ring-[3px]",
      "connects": "relative z-0 w-full h-2 rtl:rounded-e-full rtl:rounded-s-none rounded-s-full overflow-hidden",
      "connect": "absolute top-0 end-0 rtl:start-0 z-1 size-full bg-primary origin-[0_0]",
      "touchArea": "absolute -top-1 -bottom-1 -start-1 -end-1"
    }
  }'>
  </div>
</div>

<div>
  <label class="sr-only">Example</label>

  <div
    data-range-slider='{
    "start": 50,
    "connect": "lower",
    "range": {
      "min": 0,
      "max": 100
    },
    "cssClasses": {
      "target": "relative h-2 rounded-full bg-neutral/10",
      "base": "size-full relative z-1",
      "origin": "absolute top-0 end-0 rtl:start-0 size-full origin-[0_0] rounded-full",
      "handle": "absolute top-1/2 end-0 rtl:start-0 size-4 bg-base-100 border-[3px] border-secondary rounded-full translate-x-2/4 -translate-y-2/4 hover:cursor-grab active:cursor-grabbing hover:ring-2 ring-secondary active:ring-[3px]",
      "connects": "relative z-0 w-full h-2 rtl:rounded-e-full rtl:rounded-s-none rounded-s-full overflow-hidden",
      "connect": "absolute top-0 end-0 rtl:start-0 z-1 size-full bg-secondary origin-[0_0]",
      "touchArea": "absolute -top-1 -bottom-1 -start-1 -end-1"
    }
  }'>
  </div>
</div>

<div>
  <label class="sr-only">Example</label>

  <div
    data-range-slider='{
    "start": 50,
    "connect": "lower",
    "range": {
      "min": 0,
      "max": 100
    },
    "cssClasses": {
      "target": "relative h-2 rounded-full bg-neutral/10",
      "base": "size-full relative z-1",
      "origin": "absolute top-0 end-0 rtl:start-0 size-full origin-[0_0] rounded-full",
      "handle": "absolute top-1/2 end-0 rtl:start-0 size-4 bg-base-100 border-[3px] border-info rounded-full translate-x-2/4 -translate-y-2/4 hover:cursor-grab active:cursor-grabbing hover:ring-2 ring-info active:ring-[3px]",
      "connects": "relative z-0 w-full h-2 rtl:rounded-e-full rtl:rounded-s-none rounded-s-full overflow-hidden",
      "connect": "absolute top-0 end-0 rtl:start-0 z-1 size-full bg-info origin-[0_0]",
      "touchArea": "absolute -top-1 -bottom-1 -start-1 -end-1"
    }
  }'>
  </div>
</div>

<div>
  <label class="sr-only">Example</label>

  <div
    data-range-slider='{
    "start": 50,
    "connect": "lower",
    "range": {
      "min": 0,
      "max": 100
    },
    "cssClasses": {
      "target": "relative h-2 rounded-full bg-neutral/10",
      "base": "size-full relative z-1",
      "origin": "absolute top-0 end-0 rtl:start-0 size-full origin-[0_0] rounded-full",
     "handle": "absolute top-1/2 end-0 rtl:start-0 size-4 bg-base-100 border-[3px] border-success rounded-full translate-x-2/4 -translate-y-2/4 hover:cursor-grab active:cursor-grabbing hover:ring-2 ring-success active:ring-[3px]",
      "connects": "relative z-0 w-full h-2 rtl:rounded-e-full rtl:rounded-s-none rounded-s-full overflow-hidden",
      "connect": "absolute top-0 end-0 rtl:start-0 z-1 size-full bg-success origin-[0_0]",
      "touchArea": "absolute -top-1 -bottom-1 -start-1 -end-1"
    }
  }'>
  </div>
</div>
<div>
  <label class="sr-only">Example</label>

  <div
    data-range-slider='{
    "start": 50,
    "connect": "lower",
    "range": {
      "min": 0,
      "max": 100
    },
    "cssClasses": {
      "target": "relative h-2 rounded-full bg-neutral/10",
      "base": "size-full relative z-1",
      "origin": "absolute top-0 end-0 rtl:start-0 size-full origin-[0_0] rounded-full",
      "handle": "absolute top-1/2 end-0 rtl:start-0 size-4 bg-base-100 border-[3px] border-warning rounded-full translate-x-2/4 -translate-y-2/4 hover:cursor-grab active:cursor-grabbing hover:ring-2 ring-warning active:ring-[3px]",
      "connects": "relative z-0 w-full h-2 rtl:rounded-e-full rtl:rounded-s-none rounded-s-full overflow-hidden",
      "connect": "absolute top-0 end-0 rtl:start-0 z-1 size-full bg-warning origin-[0_0]",
      "touchArea": "absolute -top-1 -bottom-1 -start-1 -end-1"
    }
  }'>
  </div>
</div>
<div>
  <label class="sr-only">Example</label>

  <div
    data-range-slider='{
    "start": 50,
    "connect": "lower",
    "range": {
      "min": 0,
      "max": 100
    },
    "cssClasses": {
      "target": "relative h-2 rounded-full bg-neutral/10",
      "base": "size-full relative z-1",
      "origin": "absolute top-0 end-0 rtl:start-0 size-full origin-[0_0] rounded-full",
      "handle": "absolute top-1/2 end-0 rtl:start-0 size-4 bg-base-100 border-[3px] border-error rounded-full translate-x-2/4 -translate-y-2/4 hover:cursor-grab active:cursor-grabbing hover:ring-2 ring-error active:ring-[3px]",
      "connects": "relative z-0 w-full h-2 rtl:rounded-e-full rtl:rounded-s-none rounded-s-full overflow-hidden",
      "connect": "absolute top-0 end-0 rtl:start-0 z-1 size-full bg-error origin-[0_0]",
      "touchArea": "absolute -top-1 -bottom-1 -start-1 -end-1"
    }
  }'>
  </div>
</div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div>
  <label class="sr-only">Example</label>

  <div
    data-range-slider='{
    "start": 50,
    "connect": "lower",
    "range": {
      "min": 0,
      "max": 100
    },
    "cssClasses": {
      "target": "relative h-1 rounded-full bg-neutral/10",
      "base": "size-full relative z-1",
      "origin": "absolute top-0 end-0 rtl:start-0 size-full origin-[0_0] rounded-full",
      "handle": "absolute top-1/2 end-0 rtl:start-0 size-2.5 bg-base-100 border-[2.5px] border-primary rounded-full translate-x-2/4 -translate-y-2/4 hover:cursor-grab active:cursor-grabbing hover:ring-2 ring-primary active:ring-[3px]",
      "connects": "relative z-0 w-full h-1 rtl:rounded-e-full rtl:rounded-s-none rounded-s-full overflow-hidden",
      "connect": "absolute top-0 end-0 rtl:start-0 z-1 size-full bg-primary origin-[0_0]",
      "touchArea": "absolute -top-1 -bottom-1 -start-1 -end-1"
    }
  }'>
  </div>
</div>

<div>
  <label class="sr-only">Example</label>

  <div
    data-range-slider='{
    "start": 50,
    "connect": "lower",
    "range": {
      "min": 0,
      "max": 100
    },
    "cssClasses": {
      "target": "relative h-1.5 rounded-full bg-neutral/10",
      "base": "size-full relative z-1",
      "origin": "absolute top-0 end-0 rtl:start-0 size-full origin-[0_0] rounded-full",
      "handle": "absolute top-1/2 end-0 rtl:start-0 size-3 bg-base-100 border-[2.5px] border-primary rounded-full translate-x-2/4 -translate-y-2/4 hover:cursor-grab active:cursor-grabbing hover:ring-2 ring-primary active:ring-[3px]",
      "connects": "relative z-0 w-full h-1.5 rtl:rounded-e-full rtl:rounded-s-none rounded-s-full overflow-hidden",
      "connect": "absolute top-0 end-0 rtl:start-0 z-1 size-full bg-primary origin-[0_0]",
      "touchArea": "absolute -top-1 -bottom-1 -start-1 -end-1"
    }
  }'>
  </div>
</div>

<div>
  <label class="sr-only">Example</label>

  <div
    data-range-slider='{
    "start": 50,
    "connect": "lower",
    "range": {
      "min": 0,
      "max": 100
    },
    "cssClasses": {
      "target": "relative h-2 rounded-full bg-neutral/10",
      "base": "size-full relative z-1",
      "origin": "absolute top-0 end-0 rtl:start-0 size-full origin-[0_0] rounded-full",
      "handle": "absolute top-1/2 end-0 rtl:start-0 size-4 bg-base-100 border-[3px] border-primary rounded-full translate-x-2/4 -translate-y-2/4 hover:cursor-grab active:cursor-grabbing hover:ring-2 ring-primary active:ring-[3px]",
      "connects": "relative z-0 w-full h-2 rtl:rounded-e-full rtl:rounded-s-none rounded-s-full overflow-hidden",
      "connect": "absolute top-0 end-0 rtl:start-0 z-1 size-full bg-primary origin-[0_0]",
      "touchArea": "absolute -top-1 -bottom-1 -start-1 -end-1"
    }
  }'>
  </div>
</div>

<div>
  <label class="sr-only">Example</label>

  <div
    data-range-slider='{
    "start": 50,
    "connect": "lower",
    "range": {
      "min": 0,
      "max": 100
    },
    "cssClasses": {
      "target": "relative h-3 rounded-full bg-neutral/10",
      "base": "size-full relative z-1",
      "origin": "absolute top-0 end-0 rtl:start-0 size-full origin-[0_0] rounded-full",
     "handle": "absolute top-1/2 end-0 rtl:start-0 size-6 bg-base-100 border-4 border-primary rounded-full translate-x-2/4 -translate-y-2/4 hover:cursor-grab active:cursor-grabbing hover:ring-2 ring-primary active:ring-[3px]",
      "connects": "relative z-0 w-full h-3 rtl:rounded-e-full rtl:rounded-s-none rounded-s-full overflow-hidden",
      "connect": "absolute top-0 end-0 rtl:start-0 z-1 size-full bg-primary origin-[0_0]",
      "touchArea": "absolute -top-1 -bottom-1 -start-1 -end-1"
    }
  }'>
  </div>
</div>
```






I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<label class="sr-only">Example</label>

<div
  data-range-slider='{
  "start": [25, 75],
  "orientation": "vertical",
  "range": {
    "min": 0,
    "max": 100
  },
  "connect": true,
  "cssClasses": {
    "target": "relative h-40 w-2 rounded-full bg-neutral/10",
      "base": "size-full relative z-1 h-full",
      "origin": "absolute start-0 top-0 size-full origin-[0_0] rounded-full",
      "handle": "absolute left-1/2 top-0 size-4 bg-base-100 border-[3px] border-primary rounded-full -translate-x-2/4 -translate-y-2/4 hover:cursor-grab active:cursor-grabbing hover:ring-2 ring-primary active:ring-[3px]",
      "connects": "relative z-0 h-full w-2 overflow-hidden",
      "connect": "absolute bottom-0 z-1 size-full bg-primary origin-[0_0]",
      "touchArea": "absolute -top-1 -bottom-1 -start-1 -end-1"
  }
}'
></div>
```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<label class="sr-only">Vertical Slider Example</label>

<div
  data-range-slider='{
  "start": 50,
  "connect": "upper",
  "orientation": "vertical",
  "range": {
    "min": 0,
    "max": 100
  },
  "cssClasses": {
    "target": "relative h-40 w-2 rounded-full bg-neutral/10",
    "base": "size-full relative z-1 h-full",
    "origin": "absolute start-0 top-0 size-full origin-[0_0] rounded-full",
    "handle": "absolute left-1/2 top-0 size-4 bg-base-100 border-[3px] border-primary rounded-full -translate-x-2/4 -translate-y-2/4 hover:cursor-grab active:cursor-grabbing hover:ring-2 ring-primary active:ring-[3px]",
    "connects": "relative z-0 h-full w-2 rounded-b-full overflow-hidden",
    "connect": "absolute bottom-0 z-1 size-full bg-primary origin-[0_0]",
    "touchArea": "absolute -top-1 -bottom-1 -start-1 -end-1"
  }
}'
></div>
```





I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<label class="sr-only">Example</label>

<div
  data-range-slider='{
  "start": 50,
  "disabled": true,
  "connect": "lower",
  "range": {
    "min": 0,
    "max": 100
  },
  "cssClasses": {
    "target": "relative h-2 rounded-full bg-neutral/10 range-slider-disabled:pointer-events-none range-slider-disabled:opacity-50",
    "base": "size-full relative z-1",
    "origin": "absolute top-0 end-0 rtl:start-0 size-full origin-[0_0] rounded-full",
    "handle": "absolute top-1/2 end-0 rtl:start-0 size-4 bg-base-100 border-[3px] border-primary rounded-full translate-x-2/4 -translate-y-2/4 hover:cursor-grab active:cursor-grabbing hover:ring-2 ring-primary active:ring-[3px]",
    "connects": "relative z-0 w-full h-2 rtl:rounded-e-full rtl:rounded-s-none rounded-s-full overflow-hidden",
    "connect": "absolute top-0 end-0 rtl:start-0 z-1 size-full bg-primary origin-[0_0]",
    "touchArea": "absolute -top-1 -bottom-1 -start-1 -end-1"
  }
}'
></div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<label class="sr-only">Example</label>

<div
  data-range-slider='{
  "start": 50,
  "connect": "lower",
  "range": {
    "min": 0,
    "max": 100
  },
  "direction": "rtl",
  "cssClasses": {
    "target": "relative h-2 rounded-full bg-neutral/10",
    "base": "size-full relative z-1",
    "origin": "absolute top-0 end-0 rtl:start-0 size-full origin-[0_0] rounded-full",
    "handle": "absolute top-1/2 end-0 rtl:start-0 size-4 bg-base-100 border-[3px] border-primary rounded-full translate-x-2/4 -translate-y-2/4 hover:cursor-grab active:cursor-grabbing hover:ring-2 ring-primary active:ring-[3px]",
    "connects": "relative z-0 w-full h-2 rtl:rounded-s-full rtl:rounded-e-none rounded-e-full overflow-hidden",
    "connect": "absolute top-0 end-0 rtl:start-0 z-1 size-full bg-primary origin-[0_0]",
    "touchArea": "absolute -top-1 -bottom-1 -start-1 -end-1"
  }
}'
></div>
```





I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<label class="sr-only">Example</label>

<div
  class="sm:mt-7 mt-10"
  data-range-slider='{
  "start": 32,
  "connect": "lower",
  "range": {
    "min": 0,
    "max": 100
  },
  "tooltips": true,
  "formatter": "integer",
  "cssClasses": {
    "target": "relative h-2 rounded-full bg-neutral/10 range-slider-disabled:pointer-events-none range-slider-disabled:opacity-50",
    "base": "size-full relative z-1",
    "origin": "absolute top-0 end-0 rtl:start-0 size-full origin-[0_0] rounded-full",
    "handle": "absolute top-1/2 end-0 rtl:start-0 size-4 bg-base-100 border-[3px] border-primary rounded-full translate-x-2/4 -translate-y-2/4 hover:cursor-grab active:cursor-grabbing hover:ring-2 ring-primary active:ring-[3px]",
    "connects": "relative z-0 w-full h-2 rtl:rounded-e-full rtl:rounded-s-none rounded-s-full overflow-hidden",
    "connect": "absolute top-0 end-0 rtl:start-0 z-1 size-full bg-primary origin-[0_0]",
    "touchArea": "absolute -top-1 -bottom-1 -start-1 -end-1",
    "tooltip": "bg-neutral text-sm text-neutral-content shadow-base-300/20 py-1 px-2 rounded-selector mb-3 absolute bottom-full start-2/4 -translate-x-2/4 rtl:translate-x-2/4 shadow-md"
  }
}'
></div>
```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<label class="sr-only">Example</label>

<div
  data-range-slider='{
  "start": [35, 85],
  "range": {
    "min": 0,
    "max": 100
  },
  "connect": true,
  "cssClasses": {
    "target": "relative h-2 rounded-full bg-neutral/10 range-slider-disabled:pointer-events-none range-slider-disabled:opacity-50",
    "base": "size-full relative z-1",
    "origin": "absolute top-0 end-0 rtl:start-0 size-full origin-[0_0] rounded-full",
    "handle": "absolute top-1/2 end-0 rtl:start-0 size-4 bg-base-100 border-[3px] border-primary rounded-full translate-x-2/4 -translate-y-2/4 hover:cursor-grab active:cursor-grabbing hover:ring-2 ring-primary active:ring-[3px]",
    "connects": "relative z-0 w-full h-2 overflow-hidden",
    "connect": "absolute top-0 end-0 rtl:start-0 z-1 size-full bg-primary origin-[0_0]",
    "touchArea": "absolute -top-1 -bottom-1 -start-1 -end-1"
  }
}'
></div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<label class="sr-only">Example</label>

<div
  class="sm:mt-7 mt-10"
  data-range-slider='{
  "start": [15, 65],
  "range": {
    "min": 0,
    "max": 100
  },
  "connect": true,
  "tooltips": true,
  "formatter": "integer",
  "cssClasses": {
    "target": "relative h-2 rounded-full bg-neutral/10 range-slider-disabled:pointer-events-none range-slider-disabled:opacity-50",
    "base": "size-full relative z-1",
    "origin": "absolute top-0 end-0 rtl:start-0 size-full origin-[0_0] rounded-full",
    "handle": "absolute top-1/2 end-0 rtl:start-0 size-4 bg-base-100 border-[3px] border-primary rounded-full translate-x-2/4 -translate-y-2/4 hover:cursor-grab active:cursor-grabbing hover:ring-2 ring-primary active:ring-[3px]",
    "connects": "relative z-0 w-full h-2 overflow-hidden",
    "connect": "absolute top-0 end-0 rtl:start-0 z-1 size-full bg-primary origin-[0_0]",
    "touchArea": "absolute -top-1 -bottom-1 -start-1 -end-1",
    "tooltip": "bg-neutral text-sm text-neutral-content shadow-base-300/20 py-1 px-2 rounded-selector mb-3 absolute bottom-full start-2/4 -translate-x-2/4 rtl:translate-x-2/4 shadow-md"
  }
}'
></div>
```





I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<label class="sr-only">Example</label>

<div
  class="sm:my-7 my-10 "
  data-range-slider='{
  "start": [110, 430],
  "range": {
    "min": 0,
    "max": 500
  },
  "connect": true,
  "pips": {
    "mode": "values",
    "values": [0, 125, 250, 375, 500],
    "density": 20
  },
  "tooltips": true,
  "formatter": "integer",
  "cssClasses": {
    "target": "relative h-2 rounded-full bg-neutral/10 range-slider-disabled:pointer-events-none range-slider-disabled:opacity-50",
    "base": "size-full relative z-1",
    "origin": "absolute top-0 end-0 rtl:start-0 size-full origin-[0_0] rounded-full",
    "handle": "absolute top-1/2 end-0 rtl:start-0 size-4 bg-base-100 border-[3px] border-primary rounded-full translate-x-2/4 -translate-y-2/4 hover:cursor-grab active:cursor-grabbing hover:ring-2 ring-primary active:ring-[3px]",
    "connects": "relative z-0 w-full h-2 overflow-hidden",
    "connect": "absolute top-0 end-0 rtl:start-0 z-1 size-full bg-primary origin-[0_0]",
    "touchArea": "absolute -top-1 -bottom-1 -start-1 -end-1",
    "tooltip": "bg-neutral text-sm text-neutral-content shadow-base-300/20 py-1 px-2 rounded-selector mb-3 absolute bottom-full start-2/4 -translate-x-2/4 rtl:translate-x-2/4 shadow-md",
    "pips": "relative w-full h-7 mt-3",
    "value": "absolute top-4 -translate-x-2/4 text-sm text-base-content/80",
    "marker": "absolute h-4 border-s border-base-content/25"
  }
}'
></div>
```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<label class="sr-only">Example</label>

<div
  class="sm:my-7 my-10 "
  data-range-slider='{
  "start": [70, 260],
  "range": {
    "min": 0,
    "max": 500
  },
  "connect": true,
  "pips": {
    "mode": "count",
    "values": 5
  },
  "tooltips": true,
  "formatter": {
    "type": "integer",
    "prefix": "$"
  },
  "cssClasses": {
    "target": "relative h-2 rounded-full bg-neutral/10 range-slider-disabled:pointer-events-none range-slider-disabled:opacity-50",
    "base": "size-full relative z-1",
    "origin": "absolute top-0 end-0 rtl:start-0 size-full origin-[0_0] rounded-full",
    "handle": "absolute top-1/2 end-0 rtl:start-0 size-4 bg-base-100 border-[3px] border-primary rounded-full translate-x-2/4 -translate-y-2/4 hover:cursor-grab active:cursor-grabbing hover:ring-2 ring-primary active:ring-[3px]",
    "connects": "relative z-0 w-full h-2 overflow-hidden",
    "connect": "absolute top-0 end-0 rtl:start-0 z-1 size-full bg-primary origin-[0_0]",
    "touchArea": "absolute -top-1 -bottom-1 -start-1 -end-1",
    "tooltip": "bg-neutral text-sm text-neutral-content shadow-base-300/20 py-1 px-2 rounded-selector mb-3 absolute bottom-full start-2/4 -translate-x-2/4 rtl:translate-x-2/4 shadow-md",
    "pips": "relative w-full h-7 mt-3",
    "value": "absolute top-4 -translate-x-2/4 text-sm text-base-content/80",
    "marker": "absolute border-s border-base-content/25",
    "markerNormal": "h-2",
    "markerLarge": "h-4"
  }
}'
></div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<label class="sr-only">Example</label>

<div
  id="range-element"
  class="--prevent-on-load-init sm:mt-7 mt-10"
  data-range-slider='{
  "start": 302,
  "connect": "lower",
  "range": {
    "min": 0,
    "max": 1000
  },
  "tooltips": true,
  "formatter": "integer",
  "cssClasses": {
    "target": "relative h-2 rounded-full bg-neutral/10 range-slider-disabled:pointer-events-none range-slider-disabled:opacity-50",
    "base": "size-full relative z-1",
    "origin": "absolute top-0 end-0 rtl:start-0 size-full origin-[0_0] rounded-full",
    "handle": "absolute top-1/2 end-0 rtl:start-0 size-4 bg-base-100 border-[3px] border-primary rounded-full translate-x-2/4 -translate-y-2/4 hover:cursor-grab active:cursor-grabbing hover:ring-2 ring-primary active:ring-[3px]",
    "connects": "relative z-0 w-full h-2 rtl:rounded-e-full rtl:rounded-s-none rounded-s-full overflow-hidden",
    "connect": "absolute top-0 end-0 rtl:start-0 z-1 size-full bg-primary origin-[0_0]",
    "touchArea": "absolute -top-1 -bottom-1 -start-1 -end-1",
    "tooltip": "bg-neutral text-sm text-neutral-content shadow-base-300/20 py-1 px-2 rounded-selector mb-3 absolute bottom-full start-2/4 -translate-x-2/4 rtl:translate-x-2/4 shadow-md"
  }
}'
></div>

<div class="mt-5 text-sm font-medium">
  Value:
  <span id="range-element-target" class="text-primary">750</span>
</div>
```

```js

<script>
  window.addEventListener('load', function () {
    const range = document.querySelector('#range-element')
    const rangeInstance = new HSRangeSlider(range)
    const target = document.querySelector('#range-element-target')

    range.noUiSlider.on('update', values => (target.innerText = rangeInstance.formattedValue))
  })
</script>


```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="mb-5 flex w-full justify-center">
  <div class="flex items-center text-sm rtl:flex-row-reverse">
    <div id="range-elements-min-target" class="min-w-16 text-center">310</div>
    -
    <div id="range-elements-max-target" class="min-w-16 text-center">635</div>
  </div>
</div>
<label class="sr-only">Example range</label>
<div
  id="range-multi-elements"
  class="--prevent-on-load-init"
  data-range-slider='{
  "start": [310, 635],
  "range": {
    "min": 0,
    "max": 1000
  },
  "formatter": {
    "type": "integer",
    "prefix": "$"
  },
  "connect": true,
  "cssClasses": {
    "target": "relative h-2 rounded-full bg-neutral/10 range-slider-disabled:pointer-events-none range-slider-disabled:opacity-50",
    "base": "size-full relative z-1",
    "origin": "absolute top-0 end-0 rtl:start-0 size-full origin-[0_0] rounded-full",
    "handle": "absolute top-1/2 end-0 rtl:start-0 size-4 bg-base-100 border-[3px] border-primary rounded-full translate-x-2/4 -translate-y-2/4 hover:cursor-grab active:cursor-grabbing hover:ring-2 ring-primary active:ring-[3px]",
    "connects": "relative z-0 w-full h-2 overflow-hidden",
    "connect": "absolute top-0 end-0 rtl:start-0 z-1 size-full bg-primary origin-[0_0]",
    "touchArea": "absolute -top-1 -bottom-1 -start-1 -end-1"
  }
}'
></div>
```

```js

<script>
  window.addEventListener('load', function () {
    const rangeMulti = document.querySelector('#range-multi-elements')
    const rangeMultiInstance = new HSRangeSlider(rangeMulti)
    const min = document.querySelector('#range-elements-min-target')
    const max = document.querySelector('#range-elements-max-target')

    rangeMulti.noUiSlider.on('update', values => {
      min.innerText = rangeMultiInstance.formattedValue[0]
      max.innerText = rangeMultiInstance.formattedValue[1]
    })
  })
</script>


```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="mb-5 flex w-full justify-center">
  <div class="flex items-center text-sm rtl:flex-row-reverse">
    <div id="thousands-separators-and-decimal-points-min-target" class="min-w-36 text-center">130</div>
    -
    <div id="thousands-separators-and-decimal-points-max-target" class="min-w-36 text-center">610</div>
  </div>
</div>
<label class="sr-only">Example range</label>
<div
  id="thousands-separators-and-decimal-points"
  class="--prevent-on-load-init"
  data-range-slider='{
  "start": [1300000, 6100000],
  "range": {
    "min": 0,
    "max": 10000000
  },
  "connect": true,
  "formatter": {
    "prefix": "USD ",
    "type": "thousandsSeparatorAndDecimalPoints"
  },
  "cssClasses": {
    "target": "relative h-2 rounded-full bg-neutral/10 range-slider-disabled:pointer-events-none range-slider-disabled:opacity-50",
    "base": "size-full relative z-1",
    "origin": "absolute top-0 end-0 rtl:start-0 size-full origin-[0_0] rounded-full",
    "handle": "absolute top-1/2 end-0 rtl:start-0 size-4 bg-base-100 border-[3px] border-primary rounded-full translate-x-2/4 -translate-y-2/4 hover:cursor-grab active:cursor-grabbing hover:ring-2 ring-primary active:ring-[3px]",
    "connects": "relative z-0 w-full h-2 overflow-hidden",
    "connect": "absolute top-0 end-0 rtl:start-0 z-1 size-full bg-primary origin-[0_0]",
    "touchArea": "absolute -top-1 -bottom-1 -start-1 -end-1"
  }
}'
></div>
```

```js

<script>
  window.addEventListener('load', function () {
    const rangeSeparator = document.querySelector('#thousands-separators-and-decimal-points')
    const rangeSeparatorInstance = new HSRangeSlider(rangeSeparator)
    const minSeparator = document.querySelector('#thousands-separators-and-decimal-points-min-target')
    const maxSeparator = document.querySelector('#thousands-separators-and-decimal-points-max-target')

    rangeSeparator.noUiSlider.on('update', values => {
      minSeparator.innerText = rangeSeparatorInstance.formattedValue[0]
      maxSeparator.innerText = rangeSeparatorInstance.formattedValue[1]
    })
  })
</script>


```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<label class="sr-only">Example</label>

<div
  id="range-input-element"
  class="--prevent-on-load-init sm:mt-7 mt-10"
  data-range-slider='{
  "start": 505,
  "connect": "lower",
  "range": {
    "min": 0,
    "max": 1000
  },
  "tooltips": true,
  "formatter": "integer",
  "cssClasses": {
    "target": "relative h-2 rounded-full bg-neutral/10 range-slider-disabled:pointer-events-none range-slider-disabled:opacity-50",
    "base": "size-full relative z-1",
    "origin": "absolute top-0 end-0 rtl:start-0 size-full origin-[0_0] rounded-full",
    "handle": "absolute top-1/2 end-0 rtl:start-0 size-4 bg-base-100 border-[3px] border-primary rounded-full translate-x-2/4 -translate-y-2/4 hover:cursor-grab active:cursor-grabbing hover:ring-2 ring-primary active:ring-[3px]",
    "connects": "relative z-0 w-full h-2 rtl:rounded-e-full rtl:rounded-s-none rounded-s-full overflow-hidden",
    "connect": "absolute top-0 end-0 rtl:start-0 z-1 size-full bg-primary origin-[0_0]",
    "touchArea": "absolute -top-1 -bottom-1 -start-1 -end-1",
    "tooltip": "bg-neutral text-sm text-neutral-content shadow-base-300/20 py-1 px-2 rounded-selector mb-3 absolute bottom-full start-2/4 -translate-x-2/4 rtl:translate-x-2/4 shadow-md"
  }
}'
></div>

<div class="mt-5 max-w-xs">
  <input id="range-input-target" class="input" type="text" value="505" />
</div>
```

```js

<script>
  window.addEventListener('load', function () {
    const rangeInput = document.querySelector('#range-input-element')
    const rangeInputInstance = new HSRangeSlider(rangeInput)
    const targetInput = document.querySelector('#range-input-target')

    rangeInput.noUiSlider.on('update', values => (targetInput.value = rangeInputInstance.formattedValue))
    targetInput.addEventListener(
      'input',
      _.debounce(evt => rangeInputInstance.el.noUiSlider.set(evt.target.value)),
      200
    )
  })
</script>


```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<label class="sr-only">Example range</label>

<div
  id="range-multi-inputs"
  class="--prevent-on-load-init sm:mt-7 mt-10"
  data-range-slider='{
  "start": [150, 650],
  "range": {
    "min": 0,
    "max": 1000
  },
  "connect": true,
  "tooltips": true,
  "formatter": "integer",
  "cssClasses": {
    "target": "relative h-2 rounded-full bg-neutral/10 range-slider-disabled:pointer-events-none range-slider-disabled:opacity-50",
    "base": "size-full relative z-1",
    "origin": "absolute top-0 end-0 rtl:start-0 size-full origin-[0_0] rounded-full",
    "handle": "absolute top-1/2 end-0 rtl:start-0 size-4 bg-base-100 border-[3px] border-primary rounded-full translate-x-2/4 -translate-y-2/4 hover:cursor-grab active:cursor-grabbing hover:ring-2 ring-primary active:ring-[3px]",
    "connects": "relative z-0 w-full h-2 overflow-hidden",
    "connect": "absolute top-0 end-0 rtl:start-0 z-1 size-full bg-primary origin-[0_0]",
    "touchArea": "absolute -top-1 -bottom-1 -start-1 -end-1",
    "tooltip": "bg-neutral text-sm text-neutral-content shadow-base-300/20 py-1 px-2 rounded-selector mb-3 absolute bottom-full start-2/4 -translate-x-2/4 rtl:translate-x-2/4 shadow-md"
  }
}'
></div>

<div class="mt-5 flex flex-row space-x-4 rtl:flex-row-reverse">
  <div class="basis-1/2">
    <label for="inputs-min-target" class="mb-2 block text-sm font-medium">Min price:</label>
    <input id="inputs-min-target" class="input" type="number" value="150" />
  </div>
  <div class="basis-1/2">
    <label for="inputs-max-target" class="mb-2 block text-sm font-medium">Max price:</label>
    <input id="inputs-max-target" class="input" type="number" value="650" />
  </div>
</div>
```

```js

<script>
  window.addEventListener('load', function () {
    const rangeMultiple = document.querySelector('#range-multi-inputs')
    const rangeMultipleInstance = new HSRangeSlider(rangeMultiple)
    const minValue = document.querySelector('#inputs-min-target')
    const maxValue = document.querySelector('#inputs-max-target')

    rangeMultiple.noUiSlider.on('update', values => {
      minValue.value = rangeMultipleInstance.formattedValue[0]
      maxValue.value = rangeMultipleInstance.formattedValue[1]
    })
    minValue.addEventListener(
      'input',
      _.debounce(evt => rangeMultipleInstance.el.noUiSlider.set([evt.target.value, maxValue.value]), 200)
    )
    maxValue.addEventListener(
      'input',
      _.debounce(evt => rangeMultipleInstance.el.noUiSlider.set([minValue.value, evt.target.value]), 200)
    )
  })
</script>


```





I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<label class="sr-only">Example range</label>

<div class="relative" dir="ltr">
  <div id="range-chart-background"></div>
  <div class="absolute start-0 top-0 size-full overflow-hidden">
    <div id="range-chart-foreground"></div>
  </div>
</div>
<div
  id="range-charts"
  class="--prevent-on-load-init mt-4"
  data-range-slider='{
  "start": [130, 520],
  "range": {
    "min": 0,
    "max": 1000
  },
  "connect": true,
  "formatter": "integer",
  "cssClasses": {
    "target": "relative h-2 rounded-full bg-neutral/10 range-slider-disabled:pointer-events-none range-slider-disabled:opacity-50",
    "base": "size-full relative z-1",
    "origin": "absolute top-0 end-0 rtl:start-0 size-full origin-[0_0] rounded-full",
    "handle": "absolute top-1/2 end-0 rtl:start-0 size-4 bg-base-100 border-[3px] border-primary rounded-full translate-x-2/4 -translate-y-2/4 hover:cursor-grab active:cursor-grabbing hover:ring-2 ring-primary active:ring-[3px]",
    "connects": "relative z-0 w-full h-2 overflow-hidden",
    "connect": "absolute top-0 end-0 rtl:start-0 z-1 size-full bg-primary origin-[0_0]",
    "touchArea": "absolute -top-1 -bottom-1 -start-1 -end-1"
  }
}'
></div>

<div class="mt-5">
  <div class="mb-2 text-sm font-medium">Custom range:</div>
  <div class="flex flex-row gap-4">
    <div class="basis-1/2">
      <input id="range-charts-inputs-min-target" class="input" type="number" value="130" />
    </div>
    <div class="basis-1/2">
      <input id="range-charts-inputs-max-target" class="input" type="number" value="520" />
    </div>
  </div>
</div>
```

```js

<script>
window.addEventListener('load', () => {
  ;(function () {
    const updateForegroundChart = (foregroundParent, foreground, values) => {
      const from = (100 * values[0]) / 1000
      const to = (100 * values[1]) / 1000
      const width = 100 - (from + (100 - to))

      foregroundParent.style.left = `${from}%`
      foregroundParent.style.width = `${width}%`
      foreground.style.width = `${foregroundParent.parentElement.clientWidth}px`
      foreground.style.marginLeft = `${-((foregroundParent.parentElement.clientWidth / 100) * from)}px`
    }

    const range = document.querySelector('#range-charts')
    const rangeInstance = new HSRangeSlider(range)
    const min = document.querySelector('#range-charts-inputs-min-target')
    const max = document.querySelector('#range-charts-inputs-max-target')
    const foreground = document.querySelector('#range-chart-foreground')
    const foregroundParent = foreground.parentElement
    // Backgound chart
    buildChart('#range-chart-background', () => ({
      series: [
        {
          name: 'Sales',
          data: [
            0, 20, 24, 45, 47, 50, 60, 70, 80, 75, 65, 55, 50, 40, 30, 30, 35, 45, 50, 60, 70, 80, 75, 65, 55, 50, 40,
            35, 40
          ]
        }
      ],
      chart: {
        height: 150,
        type: 'area',
        sparkline: {
          enabled: true
        }
      },
      colors: ['color-mix(in oklab, var(--color-base-content) 5%, transparent)'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          gradientToColors: ['color-mix(in oklab, var(--color-base-300) 20%, transparent)'],
          opacityTo: 0.3,
          stops: [0, 90, 100]
        }
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      xaxis: {
        type: 'category',
        crosshairs: {
          show: false
        }
      },
      states: {
        hover: {
          filter: {
            type: 'none'
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none'
          }
        }
      },
      tooltip: {
        enabled: false
      }
    }))
    // Foreground chart
    buildChart('#range-chart-foreground', () => ({
      series: [
        {
          name: 'Sales',
          data: [
            0, 20, 24, 45, 47, 50, 60, 70, 80, 75, 65, 55, 50, 40, 30, 30, 35, 45, 50, 60, 70, 80, 75, 65, 55, 50, 40,
            35, 40
          ]
        }
      ],
      chart: {
        height: 150,
        type: 'area',
        sparkline: {
          enabled: true
        }
      },
      colors: ['var(--color-primary)'],
      stroke: {
        curve: 'smooth',
        width: 2
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          gradientToColors: ['var(--color-base-100)'],
          opacityTo: 0.3,
          stops: [0, 90, 100]
        }
      },
      grid: {
        borderColor: 'color-mix(in oklab, var(--color-base-200) 40%, transparent)'
      },
      xaxis: {
        type: 'category',
        crosshairs: {
          show: false
        }
      },
      states: {
        hover: {
          filter: {
            type: 'none'
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none'
          }
        }
      },
      tooltip: {
        enabled: false
      }
    }))

    range.noUiSlider.on('update', values => {
      min.value = rangeInstance.formattedValue[0]
      max.value = rangeInstance.formattedValue[1]

      updateForegroundChart(foregroundParent, foreground, values)
    })

    min.addEventListener(
      'input',
      _.debounce(evt => rangeInstance.el.noUiSlider.set([evt.target.value, max.value]), 200)
    )
    max.addEventListener(
      'input',
      _.debounce(evt => rangeInstance.el.noUiSlider.set([min.value, evt.target.value]), 200)
    )

    window.addEventListener('resize', () => updateForegroundChart(foregroundParent, foreground, range.noUiSlider.get()))
  })()
})
</script>


```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<button type="button" class="btn btn-primary" aria-haspopup="dialog" aria-expanded="false" aria-controls="range-with-chart-modal" data-overlay="#range-with-chart-modal" >
  Open modal
</button>

<div id="range-with-chart-modal" class="overlay modal overlay-open:opacity-100 overlay-open:duration-300 hidden" role="dialog" tabindex="-1">
  <div class="modal-dialog modal-dialog-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title">Dialog Title</h3>
        <button
          type="button"
          class="btn btn-text btn-circle btn-sm absolute end-3 top-3"
          aria-label="Close"
          data-overlay="#range-with-chart-modal"
        >
          <span class="icon-[componentx--x] size-4"></span>
        </button>
      </div>
      <div class="modal-body">
        <label class="sr-only">Example range</label>
        <div class="relative" dir="ltr">
          <div id="range-chart-background-modal"></div>
          <div class="absolute start-0 top-0 size-full overflow-hidden">
            <div id="range-chart-foreground-modal"></div>
          </div>
        </div>
        <div
          id="range-charts-with-modal"
          class="--prevent-on-load-init mt-4"
          data-range-slider='{
          "start": [290, 680],
          "range": {
            "min": 0,
            "max": 1000
          },
          "connect": true,
          "formatter": "integer",
          "cssClasses": {
            "target": "relative h-2 rounded-full bg-neutral/10 range-slider-disabled:pointer-events-none range-slider-disabled:opacity-50",
            "base": "size-full relative z-[1]",
            "origin": "absolute top-0 end-0 rtl:start-0 size-full origin-[0_0] rounded-full",
            "handle": "absolute top-1/2 end-0 rtl:start-0 size-4 bg-base-100 border-[3px] border-primary rounded-full translate-x-2/4 -translate-y-2/4 hover:cursor-grab active:cursor-grabbing hover:ring-2 ring-primary active:ring-[3px]",
            "connects": "relative z-0 w-full h-2 overflow-hidden",
            "connect": "absolute top-0 end-0 rtl:start-0 z-1 size-full bg-primary origin-[0_0]",
            "touchArea": "absolute -top-1 -bottom-1 -start-1 -end-1"
          }
        }'
        ></div>
        <div class="mt-5">
          <div class="mb-2 text-sm font-medium">Custom range:</div>
          <div class="flex flex-row gap-4">
            <div class="basis-1/2">
              <input id="range-charts-inputs-min-target-modal" class="input" type="number" value="290" />
            </div>
            <div class="basis-1/2">
              <input id="range-charts-inputs-max-target-modal" class="input" type="number" value="680" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

```js

<script>
window.addEventListener('load', () => {
  ;(function () {
    const updateForegroundChart = (foregroundParent, foreground, values) => {
      const from = (100 * values[0]) / 1000
      const to = (100 * values[1]) / 1000
      const width = 100 - (from + (100 - to))

      foregroundParent.style.left = `${from}%`
      foregroundParent.style.width = `${width}%`
      foreground.style.width = `${foregroundParent.parentElement.clientWidth}px`
      foreground.style.marginLeft = `${-((foregroundParent.parentElement.clientWidth / 100) * from)}px`
    }

    const range = document.querySelector('#range-charts-with-modal')
    const rangeInstance = new HSRangeSlider(range)
    const min = document.querySelector('#range-charts-inputs-min-target-modal')
    const max = document.querySelector('#range-charts-inputs-max-target-modal')
    const foreground = document.querySelector('#range-chart-foreground-modal')
    const foregroundParent = foreground.parentElement
    // Backgound chart
    buildChart('#range-chart-background-modal', () => ({
      series: [
        {
          name: 'Sales',
          data: [
            0, 20, 24, 45, 47, 50, 60, 70, 80, 75, 65, 55, 50, 40, 30, 30, 35, 45, 50, 60, 70, 80, 75, 65, 55, 50, 40,
            35, 40
          ]
        }
      ],
      chart: {
        height: 150,
        type: 'area',
        sparkline: {
          enabled: true
        }
      },

      colors: ['color-mix(in oklab, var(--color-base-content) 5%, transparent)'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          gradientToColors: ['color-mix(in oklab, var(--color-base-300) 20%, transparent)'],
          opacityTo: 0.3,
          stops: [0, 90, 100]
        }
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      xaxis: {
        type: 'category',
        crosshairs: {
          show: false
        }
      },
      states: {
        hover: {
          filter: {
            type: 'none'
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none'
          }
        }
      },
      tooltip: {
        enabled: false
      }
    }))
    // Foreground chart
    buildChart('#range-chart-foreground-modal', () => ({
      series: [
        {
          name: 'Sales',
          data: [
            0, 20, 24, 45, 47, 50, 60, 70, 80, 75, 65, 55, 50, 40, 30, 30, 35, 45, 50, 60, 70, 80, 75, 65, 55, 50, 40,
            35, 40
          ]
        }
      ],
      chart: {
        height: 150,
        type: 'area',
        sparkline: {
          enabled: true
        }
      },
      colors: ['var(--color-primary)'],
      stroke: {
        curve: 'smooth',
        width: 2
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          gradientToColors: ['var(--color-base-100)'],
          opacityTo: 0.3,
          stops: [0, 90, 100]
        }
      },
      grid: {
        borderColor: 'color-mix(in oklab, var(--color-base-200) 40%, transparent)'
      },
      xaxis: {
        type: 'category',
        crosshairs: {
          show: false
        }
      },
      states: {
        hover: {
          filter: {
            type: 'none'
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none'
          }
        }
      },
      tooltip: {
        enabled: false
      }
    }))

    range.noUiSlider.on('update', values => {
      min.value = rangeInstance.formattedValue[0]
      max.value = rangeInstance.formattedValue[1]

      updateForegroundChart(foregroundParent, foreground, values)
    })

    min.addEventListener(
      'input',
      _.debounce(evt => rangeInstance.el.noUiSlider.set([evt.target.value, max.value]), 200)
    )
    max.addEventListener(
      'input',
      _.debounce(evt => rangeInstance.el.noUiSlider.set([min.value, evt.target.value]), 200)
    )

    window.addEventListener('resize', () => updateForegroundChart(foregroundParent, foreground, range.noUiSlider.get()))

    // Please add it for the popup to work correctly.
    const popup = HSOverlay.getInstance('#range-with-chart-modal', true)

    popup.element.on('open', () => updateForegroundChart(foregroundParent, foreground, range.noUiSlider.get()))
  })()
})
</script>


```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<label class="sr-only">Example</label>

<div
  id="range-slider-to-destroy"
  data-range-slider='{
  "start": [25, 75],
  "range": {
    "min": 0,
    "max": 100
  },
  "connect": true,
  "cssClasses": {
    "target": "relative h-2 rounded-full bg-neutral/10 range-slider-disabled:pointer-events-none range-slider-disabled:opacity-50",
    "base": "size-full relative z-1",
    "origin": "absolute top-0 end-0 rtl:start-0 size-full origin-[0_0] rounded-full",
    "handle": "absolute top-1/2 end-0 rtl:start-0 size-4 bg-base-100 border-[3px] border-primary rounded-full translate-x-2/4 -translate-y-2/4 hover:cursor-grab active:cursor-grabbing hover:ring-2 ring-primary active:ring-[3px]",
    "connects": "relative z-0 w-full h-2 overflow-hidden",
    "connect": "absolute top-0 end-0 rtl:start-0 z-1 size-full bg-primary origin-[0_0]",
    "touchArea": "absolute -top-1 -bottom-1 -start-1 -end-1"
  }
}'
></div>

<div class="mt-4 flex gap-3">
  <button class="btn btn-primary" id="destroy-btn">Destroy</button>
  <button class="btn btn-primary" id="reinit-btn" disabled>Reinitialize</button>
</div>
```

```js
<script>
  window.addEventListener('load', () => {
    // Destroy and reinit variables
  const slider = document.querySelector('#range-slider-to-destroy')
  const destroyBtn = document.querySelector('#destroy-btn')
  const reinitBtn = document.querySelector('#reinit-btn')

  // Destroy usage
  destroyBtn.addEventListener('click', () => {
    const { element } = HSRangeSlider.getInstance(slider, true)

    element.destroy()

    destroyBtn.setAttribute('disabled', 'disabled')
    reinitBtn.removeAttribute('disabled')
  })

  // Reinit usage
  reinitBtn.addEventListener('click', () => {
    HSRangeSlider.autoInit()

    reinitBtn.setAttribute('disabled', 'disabled')
    destroyBtn.removeAttribute('disabled')
  })
  })
</script>

```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<label class="sr-only">Example</label>

<div
  data-range-slider='{
  "start": 50,
  "connect": "lower",
  "behaviour": "tap",
  "range": {
    "min": 0,
    "max": 100
  },
  "cssClasses": {
    "target": "relative h-2 rounded-full bg-neutral/10",
    "base": "size-full relative z-1",
    "origin": "absolute top-0 end-0 rtl:start-0 size-full origin-[0_0] rounded-full",
    "handle": "absolute top-1/2 end-0 rtl:start-0 size-4 bg-base-100 border-[3px] border-primary rounded-full translate-x-2/4 -translate-y-2/4 hover:cursor-grab active:cursor-grabbing hover:ring-2 ring-primary active:ring-[3px]",
    "connects": "relative z-0 w-full h-2 rtl:rounded-e-full rtl:rounded-s-none rounded-s-full overflow-hidden",
    "connect": "absolute top-0 end-0 rtl:start-0 z-1 size-full bg-primary origin-[0_0]",
    "touchArea": "absolute -top-1 -bottom-1 -start-1 -end-1"
  }
}'
></div>
```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<label class="sr-only">Example</label>

<div data-range-slider='{
  "start": [25, 75],
  "behaviour": "drag",
  "range": {
    "min": 0,
    "max": 100
  },
  "connect": true,
  "cssClasses": {
    "target": "relative h-2 rounded-full bg-neutral/10 range-slider-disabled:pointer-events-none range-slider-disabled:opacity-50",
    "base": "size-full relative z-1",
    "origin": "absolute top-0 end-0 rtl:start-0 size-full origin-[0_0] rounded-full",
    "handle": "absolute top-1/2 end-0 rtl:start-0 size-4 bg-base-100 border-[3px] border-primary rounded-full translate-x-2/4 -translate-y-2/4 hover:cursor-grab active:cursor-grabbing hover:ring-2 ring-primary active:ring-[3px]",
    "connects": "relative z-0 w-full h-2 overflow-hidden",
    "connect": "absolute top-0 end-0 rtl:start-0 z-1 size-full bg-primary origin-[0_0]",
    "touchArea": "absolute -top-1 -bottom-1 -start-1 -end-1"
  }
}'></div>
```





I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<label class="sr-only">Example</label>

<div
  data-range-slider='{
  "start": [30, 60],
  "behaviour": "drag-fixed",
  "range": {
    "min": 0,
    "max": 100
  },
  "connect": true,
  "cssClasses": {
    "target": "relative h-2 rounded-full bg-neutral/10 range-slider-disabled:pointer-events-none range-slider-disabled:opacity-50",
    "base": "size-full relative z-1",
    "origin": "absolute top-0 end-0 rtl:start-0 size-full origin-[0_0] rounded-full",
    "handle": "absolute top-1/2 end-0 rtl:start-0 size-4 bg-base-100 border-[3px] border-primary rounded-full translate-x-2/4 -translate-y-2/4 hover:cursor-grab active:cursor-grabbing hover:ring-2 ring-primary active:ring-[3px]",
    "connects": "relative z-0 w-full h-2 overflow-hidden",
    "connect": "absolute top-0 end-0 rtl:start-0 z-1 size-full bg-primary origin-[0_0]",
    "touchArea": "absolute -top-1 -bottom-1 -start-1 -end-1"
  }
}'
></div>
```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<label class="sr-only">Example</label>

<div
  id="range-hover-element"
  data-range-slider='{
  "start": 500,
  "behaviour": "hover-snap",
  "connect": "lower",
  "range": {
    "min": 0,
    "max": 1000
  },
  "cssClasses": {
    "target": "relative h-2 rounded-full bg-neutral/10 range-slider-disabled:pointer-events-none range-slider-disabled:opacity-50",
    "base": "size-full relative z-1",
    "origin": "absolute top-0 end-0 rtl:start-0 size-full origin-[0_0] rounded-full",
    "handle": "absolute top-1/2 end-0 rtl:start-0 size-4 bg-base-100 border-[3px] border-primary rounded-full translate-x-2/4 -translate-y-2/4 hover:cursor-grab active:cursor-grabbing hover:ring-2 ring-primary active:ring-[3px]",
    "connects": "relative z-0 w-full h-2 rtl:rounded-e-full rtl:rounded-s-none rounded-s-full overflow-hidden",
    "connect": "absolute top-0 end-0 rtl:start-0 z-1 size-full bg-primary origin-[0_0]",
    "touchArea": "absolute -top-1 -bottom-1 -start-1 -end-1"
  }
}'
></div>

<div class="mt-5 text-sm font-medium">
  Value:
  <span id="range-hover-element-target" class="text-primary">500</span>
</div>
```

```js

<script>
  window.addEventListener('load', function () {
    const rangeHover = document.querySelector('#range-hover-element')
    const rangeHoverTarget = document.querySelector('#range-hover-element-target')

    rangeHover.noUiSlider.on('hover', values => (rangeHoverTarget.innerText = values))
  })
</script>


```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
