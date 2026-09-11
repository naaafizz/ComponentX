---
name: "Stat"
library: "ComponentX"
id: "stat"
type: "data-display"
quality: "advanced"
tags: ["button", "card", "data", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Stat

> **Type:** `data-display` · **Quality:** `advanced` · **ID:** `stat`
> **Path:** `components/data-display/stat.md`

**Stat** is a premium, production-ready component from the **ComponentX** library — engineered for data display interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Advanced tier** — richer composition and interaction, engineered for complex layouts while keeping the public surface tight.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `button`, `card`, `data` workflows.
- **Pattern coverage** — includes `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Stat** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
<div class="stats">
  <div class="stat">
    <div class="stat-title">Total Emails Sent</div>
    <div class="stat-value">76,250</div>
    <div class="stat-desc">18% more than last month</div>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="stats">
  <div class="stat">
    <div class="stat-figure">
      <div class="avatar">
        <div class="size-12 rounded-full">
          <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" alt="User Avatar" />
        </div>
      </div>
    </div>
    <div class="stat-title">Total page views</div>
    <div class="stat-value">89,400</div>
    <div class="stat-desc">21% ↗︎ than last month</div>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="stats">
  <div class="stat">
    <div class="stat-figure text-base-content size-8">
      <span class="icon-[componentx--world] size-8"></span>
    </div>
    <div class="stat-title">Website Traffic</div>
    <div class="stat-value">32K</div>
    <div class="stat-desc">5% ↗︎ than last week</div>
  </div>

  <div class="stat">
    <div class="stat-figure text-base-content size-8">
      <span class="icon-[componentx--users-group] size-8"></span>
    </div>
    <div class="stat-title">New Signups</div>
    <div class="stat-value">1.2K</div>
    <div class="stat-desc">12% increase this month</div>
  </div>

  <div class="stat">
    <div class="stat-figure size-12">
      <div class="avatar">
        <div class="size-12 rounded-full">
          <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-2.png" alt="User Avatar"/>
        </div>
      </div>
    </div>
    <div class="stat-value text-success">95%</div>
    <div class="stat-title">Customer Retention</div>
    <div class="stat-desc">Steady over last quarter</div>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="stats">
  <div class="stat place-items-center">
    <div class="stat-title">Total Sales</div>
    <div class="stat-value">52K</div>
    <div class="stat-desc">From Jan 1st to Feb 1st</div>
  </div>

  <div class="stat place-items-center">
    <div class="stat-title">Active Customers</div>
    <div class="stat-value">8,350</div>
    <div class="stat-desc">↗︎ 150 (1.8%)</div>
  </div>

  <div class="stat place-items-center">
    <div class="stat-title">New Signups</div>
    <div class="stat-value">2,400</div>
    <div class="stat-desc">↘︎ 180 (7%)</div>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="stats stats-vertical">
  <div class="stat">
    <div class="stat-title">Total Invoices</div>
    <div class="stat-value">5,780</div>
    <div class="stat-desc">From Jan 1st to Feb 1st</div>
  </div>

  <div class="stat">
    <div class="stat-title">Paid Invoices</div>
    <div class="stat-value">4,320</div>
    <div class="stat-desc">↗︎ 120 (3%)</div>
  </div>

  <div class="stat">
    <div class="stat-title">Pending Invoices</div>
    <div class="stat-value">1,460</div>
    <div class="stat-desc">↘︎ 80 (5%)</div>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="stats max-sm:stats-vertical">
  <div class="stat">
    <div class="stat-title">Emails Sent</div>
    <div class="stat-value">58K</div>
    <div class="stat-desc">Jan 1st to Feb 1st</div>
  </div>

  <div class="stat">
    <div class="stat-title">New Subscribers</div>
    <div class="stat-value">3,600</div>
    <div class="stat-desc">↗︎ 450 (14%)</div>
  </div>

  <div class="stat">
    <div class="stat-title">Unsubscribes</div>
    <div class="stat-value">850</div>
    <div class="stat-desc">↘︎ 65 (7%)</div>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="stats max-sm:w-full">
  <div class="stat">
    <div class="avatar avatar-placeholder">
      <div class="bg-success/20 text-success size-10 rounded-full">
        <span class="icon-[componentx--package] size-6"></span>
      </div>
    </div>
    <div class="stat-value mb-1">Order</div>
    <div class="stat-title">7,500 of 10,000 orders</div>
    <div class="progress bg-success/10 h-2" role="progressbar" aria-label="Order Progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar progress-success w-3/4"></div>
    </div>
  </div>
</div>

<div class="stats max-sm:w-full">
  <div class="stat">
    <div class="avatar avatar-placeholder">
      <div class="bg-warning/20 text-warning size-10 rounded-full">
        <span class="icon-[componentx--cash] size-6"></span>
      </div>
    </div>
    <div class="stat-value mb-1">Revenue</div>
    <div class="stat-title">$45,000 of $100,000</div>
    <div class="progress bg-warning/10 h-2" role="progressbar" aria-label="Revenue Progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar progress-warning w-2/5"></div>
    </div>
  </div>
</div>

<div class="stats max-sm:w-full">
  <div class="stat">
    <div class="avatar avatar-placeholder">
      <div class="bg-error/20 text-error size-10 rounded-full">
        <span class="icon-[componentx--credit-card] size-6"></span>
      </div>
    </div>
    <div class="stat-value mb-1">Invoice</div>
    <div class="stat-title">$18,200 of $25,000</div>
    <div class="progress bg-error/10 h-2" role="progressbar" aria-label="Invoice Progressbar" aria-valuenow="73" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar progress-error w-[73%]"></div>
    </div>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="stats max-md:stats-vertical">
  <div class="stat">
    <div class="stat-title">Subscription Plan</div>
    <div class="stat-value">Premium</div>
    <div class="stat-actions">
      <button class="btn btn-sm btn-primary btn-gradient">Upgrade Plan</button>
    </div>
  </div>

  <div class="stat">
    <div class="stat-title">Next Billing Date</div>
    <div class="stat-value">Oct 15, 2024</div>
    <div class="stat-actions flex flex-wrap gap-2">
      <button class="btn btn-sm btn-soft">View Details</button>
      <button class="btn btn-sm btn-warning btn-soft">Change Payment Method</button>
    </div>
  </div>
</div>
```
I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="stats stats-border shadow-none">
  <div class="stat">
    <div class="stat-title">Total Invoices</div>
    <div class="stat-value">5,780</div>
    <div class="stat-desc">From Jan 1st - Feb 1st</div>
  </div>

  <div class="stat">
    <div class="stat-title">Paid Invoices</div>
    <div class="stat-value">4,320</div>
    <div class="stat-desc">↗︎ 120 (3%)</div>
  </div>

  <div class="stat">
    <div class="stat-title">Pending Invoices</div>
    <div class="stat-value">1,460</div>
    <div class="stat-desc">↘︎ 80 (5%)</div>
  </div>
</div>
```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
