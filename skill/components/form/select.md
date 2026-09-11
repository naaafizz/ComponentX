---
name: "Select"
library: "ComponentX"
id: "select"
type: "form"
quality: "standard"
tags: ["form", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Select

> **Type:** `form` · **Quality:** `standard` · **ID:** `select`
> **Path:** `components/form/select.md`

**Select** is a premium, production-ready component from the **ComponentX** library — engineered for form interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `form`, `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Select** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
<select class="select max-w-sm appearance-none" aria-label="select">
  <option disabled selected>Pick your favorite Movie</option>
  <option>The Godfather</option>
  <option>The Shawshank Redemption</option>
  <option>Pulp Fiction</option>
  <option>The Dark Knight</option>
  <option>Schindler's List</option>
</select>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="w-96">
  <label class="label-text" for="favorite-simpson">Pick your favorite Movie</label>
  <select class="select" id="favorite-simpson">
    <option>The Godfather</option>
    <option>The Shawshank Redemption</option>
    <option>Pulp Fiction</option>
    <option>The Dark Knight</option>
    <option>Schindler's List</option>
  </select>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="select-floating w-96">
  <select class="select" aria-label="Select floating label" id="selectFloating">
    <option>The Godfather</option>
    <option>The Shawshank Redemption</option>
    <option>Pulp Fiction</option>
    <option>The Dark Knight</option>
    <option>Schindler's List</option>
  </select>
  <label class="select-floating-label" for="selectFloating">Pick your favorite Movie</label>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<select class="select select-xs max-w-sm" aria-label="select">
  <option disabled selected>Pick your favorite Movie</option>
  <option>The Godfather</option>
  <option>The Shawshank Redemption</option>
  <option>Pulp Fiction</option>
  <option>The Dark Knight</option>
  <option>Schindler's List</option>
</select>

<select class="select select-sm max-w-sm" aria-label="select">
  <option disabled selected>Pick your favorite Movie</option>
  <option>The Godfather</option>
  <option>The Shawshank Redemption</option>
  <option>Pulp Fiction</option>
  <option>The Dark Knight</option>
  <option>Schindler's List</option>
</select>

<select class="select max-w-sm" aria-label="select">
  <option disabled selected>Pick your favorite Movie</option>
  <option>The Godfather</option>
  <option>The Shawshank Redemption</option>
  <option>Pulp Fiction</option>
  <option>The Dark Knight</option>
  <option>Schindler's List</option>
</select>

<select class="select select-lg max-w-sm" aria-label="select">
  <option disabled selected>Pick your favorite Movie</option>
  <option>The Godfather</option>
  <option>The Shawshank Redemption</option>
  <option>Pulp Fiction</option>
  <option>The Dark Knight</option>
  <option>Schindler's List</option>
</select>

<select class="select select-xl max-w-sm" aria-label="select">
  <option disabled selected>Pick your favorite Movie</option>
  <option>The Godfather</option>
  <option>The Shawshank Redemption</option>
  <option>Pulp Fiction</option>
  <option>The Dark Knight</option>
  <option>Schindler's List</option>
</select>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="select-floating max-w-sm">
  <select class="select select-xs" id="selectFloatingExtraSmall" aria-label="floating label">
    <option>The Godfather</option>
    <option>The Shawshank Redemption</option>
    <option>Pulp Fiction</option>
    <option>The Dark Knight</option>
    <option>Schindler's List</option>
  </select>
  <label class="select-floating-label" for="selectFloatingExtraSmall">Pick your favorite Movie</label>
</div>

<div class="select-floating max-w-sm">
  <select class="select select-sm" id="selectFloatingSmall" aria-label="floating label">
    <option>The Godfather</option>
    <option>The Shawshank Redemption</option>
    <option>Pulp Fiction</option>
    <option>The Dark Knight</option>
    <option>Schindler's List</option>
  </select>
  <label class="select-floating-label" for="selectFloatingSmall">Pick your favorite Movie</label>
</div>

<div class="select-floating max-w-sm">
  <select class="select" id="selectFloatingDefault" aria-label="floating label">
    <option>The Godfather</option>
    <option>The Shawshank Redemption</option>
    <option>Pulp Fiction</option>
    <option>The Dark Knight</option>
    <option>Schindler's List</option>
  </select>
  <label class="select-floating-label" for="selectFloatingDefault">Pick your favorite Movie</label>
</div>

<div class="select-floating max-w-sm">
  <select class="select select-lg" id="selectFloatingLarge" aria-label="floating label">
    <option>The Godfather</option>
    <option>The Shawshank Redemption</option>
    <option>Pulp Fiction</option>
    <option>The Dark Knight</option>
    <option>Schindler's List</option>
  </select>
  <label class="select-floating-label" for="selectFloatingLarge">Pick your favorite Movie</label>
</div>

<div class="select-floating max-w-sm">
  <select class="select select-xl" id="selectFloatingExtraLarge" aria-label="floating label">
    <option>The Godfather</option>
    <option>The Shawshank Redemption</option>
    <option>Pulp Fiction</option>
    <option>The Dark Knight</option>
    <option>Schindler's List</option>
  </select>
  <label class="select-floating-label" for="selectFloatingExtraLarge">Pick your favorite Movie</label>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="w-96 select">
 <span class="icon-[componentx--movie] text-base-content/80 my-auto size-5 shrink-0"></span>
  <label class="sr-only" for="favorite-simpson">Pick your favorite Movie</label>
  <select id="favorite-simpson">
    <option>The Godfather</option>
    <option>The Shawshank Redemption</option>
    <option>Pulp Fiction</option>
    <option>The Dark Knight</option>
    <option>Schindler's List</option>
  </select>
</div>

<div class="select max-w-sm">
  <span class="icon-[componentx--movie] text-base-content/80 my-auto size-5 shrink-0"></span>
  <div class="select-floating">
    <select aria-label="Select floating label" id="selectFloating">
      <option>The Godfather</option>
      <option>The Shawshank Redemption</option>
      <option>Pulp Fiction</option>
      <option>The Dark Knight</option>
      <option>Schindler's List</option>
    </select>
    <label class="select-floating-label" for="selectFloating">Pick your favorite Movie</label>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="max-w-sm">
  <label class="label-text" for="selectStateSuccessDefault"> Full Name </label>
  <select class="select is-valid" id="selectStateSuccessDefault">
    <option>The Godfather</option>
    <option>The Shawshank Redemption</option>
    <option>Pulp Fiction</option>
    <option>The Dark Knight</option>
    <option>Schindler's List</option>
  </select>
  <span class="helper-text">Helper text</span>
</div>

<div class="select-floating max-w-sm">
  <select class="select is-valid " id="selectStateSuccessFloating">
    <option>The Godfather</option>
    <option>The Shawshank Redemption</option>
    <option>Pulp Fiction</option>
    <option>The Dark Knight</option>
    <option>Schindler's List</option>
  </select>
  <label class="select-floating-label" for="selectStateSuccessFloating">Pick your favorite Movie</label>
  <span class="helper-text">Helper text</span>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="max-w-sm">
  <label class="label-text" for="selectStateErrorDefault"> Full Name </label>
  <select class="select is-invalid" id="selectStateErrorDefault">
    <option>The Godfather</option>
    <option>The Shawshank Redemption</option>
    <option>Pulp Fiction</option>
    <option>The Dark Knight</option>
    <option>Schindler's List</option>
  </select>
  <span class="helper-text">Helper text</span>
</div>

<div class="select-floating max-w-sm">
  <select class="select is-invalid" id="selectStateErrorFloating">
    <option>The Godfather</option>
    <option>The Shawshank Redemption</option>
    <option>Pulp Fiction</option>
    <option>The Dark Knight</option>
    <option>Schindler's List</option>
  </select>
  <label class="select-floating-label" for="selectStateErrorFloating">Pick your favorite Movie</label>
  <span class="helper-text ps-3">Helper text</span>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<select class="select max-w-sm rounded-full" aria-label="Pilled select">
  <option disabled selected>Pick your favorite Movie</option>
  <option>The Godfather</option>
  <option>The Shawshank Redemption</option>
  <option>Pulp Fiction</option>
  <option>The Dark Knight</option>
  <option>Schindler's List</option>
</select>

<div class="select-floating max-w-sm">
  <select class="select rounded-full" id="selectFloatingPilled" aria-label="Pilled select">
    <option>The Godfather</option>
    <option>The Shawshank Redemption</option>
    <option>Pulp Fiction</option>
    <option>The Dark Knight</option>
    <option>Schindler's List</option>
  </select>
  <label class="select-floating-label" for="selectFloatingPilled">Pick your favorite Movie</label>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="w-96">
  <label class="label-text" for="selectHelperText"> Pick your favorite Movie </label>
  <select class="select" id="selectHelperText">
    <option>The Godfather</option>
    <option>The Shawshank Redemption</option>
    <option>Pulp Fiction</option>
    <option>The Dark Knight</option>
    <option>Schindler's List</option>
  </select>
  <span class="helper-text">Helper text</span>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="w-96">
  <div class="label-text sr-only" for="selectHiddenLabel"> Pick your favorite Movie </div>
  <select class="select" id="selectHiddenLabel">
    <option>The Godfather</option>
    <option>The Shawshank Redemption</option>
    <option>Pulp Fiction</option>
    <option>The Dark Knight</option>
    <option>Schindler's List</option>
  </select>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<select class="select max-w-sm" aria-label="Disabled select" disabled>
  <option disabled selected>Pick your favorite Movie</option>
  <option>The Godfather</option>
  <option>The Shawshank Redemption</option>
  <option>Pulp Fiction</option>
  <option>The Dark Knight</option>
  <option>Schindler's List</option>
</select>

<div class="select-floating max-w-sm">
  <select class="select" id="selectDisabledFloating" aria-label="Disabled select" disabled>
    <option>The Godfather</option>
    <option>The Shawshank Redemption</option>
    <option>Pulp Fiction</option>
    <option>The Dark Knight</option>
    <option>Schindler's List</option>
  </select>
  <label class="select-floating-label" for="selectDisabledFloating">Pick your favorite Movie</label>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="flex flex-col max-w-sm">
  <label for="exampleDataList" class="label-text">Datalist example</label>
  <input class="input" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
  <datalist id="datalistOptions">
    <option value="San Francisco"></option>
    <option value="New York"></option>
    <option value="Seattle"></option>
    <option value="Los Angeles"></option>
    <option value="Chicago"></option>
  </datalist>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="max-w-sm">
  <label class="label-text" for="fav-movies">Pick your favorite Movies:</label>
  <select multiple class="select h-auto" size="4" name="fav-movies" id="fav-movies">
    <option>The Godfather</option>
    <option>The Shawshank Redemption</option>
    <option>Pulp Fiction</option>
    <option>The Dark Knight</option>
    <option>Schindler's List</option>
  </select>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="w-96">
  <label class="label-text" for="technologies">Choose a technology:</label>
  <select class="select" name="technologies" id="technologies">
    <optgroup label="Frontend Technologies">
      <option value="html">HTML</option>
      <option value="css">CSS</option>
      <option value="javascript">JavaScript</option>
    </optgroup>
    <optgroup label="Backend Technologies">
      <option value="nodejs">Node.js</option>
      <option value="python">Python</option>
      <option value="java">Java</option>
    </optgroup>
  </select>
</div>
```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
