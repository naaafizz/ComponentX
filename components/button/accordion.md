---
name: "Accordion"
library: "ComponentX"
id: "accordion"
type: "button"
quality: "standard"
tags: ["button", "component", "data", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Accordion

> **Type:** `button` · **Quality:** `standard` · **ID:** `accordion`
> **Path:** `components/button/accordion.md`

**Accordion** is a premium, production-ready component from the **ComponentX** library — engineered for button interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `button`, `data`, `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Accordion** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
<div class="accordion divide-neutral/20 divide-y">
  <div class="accordion-item active" id="payment-basic">
    <button class="accordion-toggle inline-flex items-center gap-x-4 text-start" aria-controls="payment-basic-collapse" aria-expanded="true" >
      <span class="icon-[componentx--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0"></span>
      <span class="icon-[componentx--minus] accordion-item-active:block text-base-content size-4.5 hidden shrink-0"></span>
      When is payment taken for my order?
    </button>
    <div id="payment-basic-collapse" class="accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="payment-basic" role="region" >
      <div class="px-5 pb-4">
        <p class="text-base-content/80 font-normal">
          Payment is taken during the checkout process when you pay for your order. The order number that appears on the
          confirmation screen indicates payment has been successfully processed.
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item" id="delivery-basic">
    <button class="accordion-toggle inline-flex items-center gap-x-4 text-start" aria-controls="delivery-basic-collapse" aria-expanded="false" >
      <span class="icon-[componentx--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0"></span>
      <span class="icon-[componentx--minus] accordion-item-active:block text-base-content size-4.5 hidden shrink-0"></span>
      How would you ship my order?
    </button>
    <div id="delivery-basic-collapse" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="delivery-basic" role="region" >
      <div class="px-5 pb-4">
        <p class="text-base-content/80 font-normal">
          For large products, we deliver your product via a third party logistics company offering you the “room of
          choice” scheduled delivery service. For small products, we offer free parcel delivery.
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item" id="cancel-basic">
    <button class="accordion-toggle inline-flex items-center gap-x-4 text-start" aria-controls="cancel-basic-collapse" aria-expanded="false" >
      <span class="icon-[componentx--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0"></span>
      <span class="icon-[componentx--minus] accordion-item-active:block text-base-content size-4.5 hidden shrink-0"></span>
      Can I cancel my order?
    </button>
    <div id="cancel-basic-collapse" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="cancel-basic" role="region" >
      <div class="px-5 pb-4">
        <p class="text-base-content/80 font-normal">
          Scheduled delivery orders can be cancelled 72 hours prior to your selected delivery date for full refund.
        </p>
      </div>
    </div>
  </div>
</div>
```

I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="accordion divide-neutral/20 divide-y" data-accordion-always-open="">
  <div class="accordion-item active" id="payment-always">
    <button class="accordion-toggle inline-flex items-center gap-x-4 text-start" aria-controls="payment-always-collapse" aria-expanded="true">
      <span class="icon-[componentx--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0"></span>
      <span class="icon-[componentx--minus] accordion-item-active:block text-base-content size-4.5 hidden shrink-0"></span>
      When is payment taken for my order?
    </button>
    <div id="payment-always-collapse" class="accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="payment-always" role="region">
      <div class="px-5 pb-4">
        <p class="text-base-content/80 font-normal">
          Payment is taken during the checkout process when you pay for your order. The order number that appears on the
          confirmation screen indicates payment has been successfully processed.
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item" id="delivery-always">
    <button class="accordion-toggle inline-flex items-center gap-x-4 text-start" aria-controls="delivery-always-collapse" aria-expanded="false">
      <span class="icon-[componentx--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0"></span>
      <span class="icon-[componentx--minus] accordion-item-active:block text-base-content size-4.5 hidden shrink-0"></span>
      How would you ship my order?
    </button>
    <div id="delivery-always-collapse" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="delivery-always" role="region">
      <div class="px-5 pb-4">
        <p class="text-base-content/80 font-normal">
          For large products, we deliver your product via a third party logistics company offering you the “room of
          choice” scheduled delivery service. For small products, we offer free parcel delivery.
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item" id="cancel-always">
    <button class="accordion-toggle inline-flex items-center gap-x-4 text-start" aria-controls="cancel-always-collapse" aria-expanded="false">
      <span class="icon-[componentx--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0"></span>
      <span class="icon-[componentx--minus] accordion-item-active:block text-base-content size-4.5 hidden shrink-0"></span>
      Can I cancel my order?
    </button>
    <div id="cancel-alawys-collapse" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="cancel-alawys" role="region">
      <div class="px-5 pb-4">
        <p class="text-base-content/80 font-normal">
          Scheduled delivery orders can be cancelled 72 hours prior to your selected delivery date for full refund.
        </p>
      </div>
    </div>
  </div>
</div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="accordion">
  <div class="accordion-item active accordion-item-active:border accordion-item-active:rounded-box accordion-item-active:border-base-content/25" id="payment-border-active">
    <button class="accordion-toggle inline-flex items-center gap-x-4 text-start" aria-controls="payment-border-active-collapse" aria-expanded="true" aria-labelledby="payment-border-active-heading">
      <span class="icon-[componentx--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0"></span>
      <span class="icon-[componentx--minus] accordion-item-active:block text-base-content size-4.5 hidden shrink-0"></span>
      <span id="payment-border-active-heading">When is payment taken for my order?</span>
    </button>
    <div id="payment-border-active-collapse" class="accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="payment-border-active-heading" role="region">
      <div class="px-5 pb-4">
        <p class="text-base-content/80 font-normal">
          Payment is taken during the checkout process when you pay for your order. The order number that appears on the
          confirmation screen indicates payment has been successfully processed.
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item accordion-item-active:border accordion-item-active:rounded-box accordion-item-active:border-base-content/25" id="delivery-border-active">
    <button class="accordion-toggle inline-flex items-center gap-x-4 text-start" aria-controls="delivery-border-active-collapse" aria-expanded="false" aria-labelledby="delivery-border-active-heading">
      <span class="icon-[componentx--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0"></span>
      <span class="icon-[componentx--minus] accordion-item-active:block text-base-content size-4.5 hidden shrink-0"></span>
      <span id="delivery-border-active-heading">How would you ship my order?</span>
    </button>
    <div id="delivery-border-active-collapse" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="delivery-border-active-heading" role="region">
      <div class="px-5 pb-4">
        <p class="text-base-content/80 font-normal">
          For large products, we deliver your product via a third party logistics company offering you the “room of
          choice” scheduled delivery service. For small products, we offer free parcel delivery.
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item accordion-item-active:border accordion-item-active:rounded-box accordion-item-active:border-base-content/25" id="cancel-border-active">
    <button class="accordion-toggle inline-flex items-center gap-x-4 text-start" aria-controls="cancel-border-active-collapse" aria-expanded="false" aria-labelledby="cancel-border-active-heading">
      <span class="icon-[componentx--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0"></span>
      <span class="icon-[componentx--minus] accordion-item-active:block text-base-content size-4.5 hidden shrink-0"></span>
      <span id="cancel-border-active-heading">Can I cancel my order?</span>
    </button>
    <div id="cancel-border-active-collapse" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="cancel-border-active-heading" role="region">
      <div class="px-5 pb-4">
        <p class="text-base-content/80 font-normal">
          Scheduled delivery orders can be cancelled 72 hours prior to your selected delivery date for full refund.
        </p>
      </div>
    </div>
  </div>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="accordion accordion-shadow *:accordion-item-active:shadow-md">
  <div class="accordion-item active" id="payment-shadow">
    <button class="accordion-toggle inline-flex items-center gap-x-4 px-5 py-4 text-start" aria-controls="payment-shadow-collapse" aria-expanded="true">
      <span class="icon-[componentx--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0"></span>
      <span class="icon-[componentx--minus] accordion-item-active:block text-base-content size-4.5 hidden shrink-0"></span>
      When is payment taken for my order?
    </button>
    <div id="payment-shadow-collapse" class="accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="payment-shadow" role="region">
      <div class="px-5 pb-4">
        <p class="text-base-content/80 font-normal">
          Payment is taken during the checkout process when you pay for your order. The order number that appears on the
          confirmation screen indicates payment has been successfully processed.
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item" id="delivery-shadow">
    <button class="accordion-toggle inline-flex items-center gap-x-4 px-5 py-4 text-start" aria-controls="delivery-shadow-collapse" aria-expanded="false">
      <span class="icon-[componentx--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0"></span>
      <span class="icon-[componentx--minus] accordion-item-active:block text-base-content size-4.5 hidden shrink-0"></span>
      How would you ship my order?
    </button>
    <div id="delivery-shadow-collapse" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="delivery-shadow" role="region">
      <div class="px-5 pb-4">
        <p class="text-base-content/80 font-normal">
          For large products, we deliver your product via a third party logistics company offering you the “room of
          choice” scheduled delivery service. For small products, we offer free parcel delivery.
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item" id="cancel̉-shadow">
    <button class="accordion-toggle inline-flex items-center gap-x-4 px-5 py-4 text-start" aria-controls="cancel̉-shadow-collapse" aria-expanded="false">
      <span class="icon-[componentx--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0"></span>
      <span class="icon-[componentx--minus] accordion-item-active:block text-base-content size-4.5 hidden shrink-0"></span>
      Can I cancel my order?
    </button>
    <div id="cancel̉-shadow-collapse" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="cancel̉-shadow" role="region">
      <div class="px-5 pb-4">
        <p class="text-base-content/80 font-normal">
          Scheduled delivery orders can be cancelled 72 hours prior to your selected delivery date for full refund.
        </p>
      </div>
    </div>
  </div>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="accordion accordion-shadow *:accordion-item-active:shadow-md">
  <div class="accordion-item accordion-item-active:scale-[1.05] accordion-item-active:mb-3 active transition-transform ease-in duration-300 delay-[1ms]" id="payment-popout" >
    <button class="accordion-toggle inline-flex items-center gap-x-4 px-5 py-4 text-start" aria-controls="payment-popout-collapse" aria-expanded="true">
      <span class="icon-[componentx--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0"></span>
      <span class="icon-[componentx--minus] accordion-item-active:block text-base-content size-4.5 hidden shrink-0"></span>
      When is payment taken for my order?
    </button>
    <div id="payment-popout-collapse" class="accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="payment-popout" role="region">
      <div class="px-5 pb-4">
        <p class="text-base-content/80 font-normal">
          Payment is taken during the checkout process when you pay for your order. The order number that appears on the
          confirmation screen indicates payment has been successfully processed.
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item accordion-item-active:scale-[1.05] accordion-item-active:my-3 transition-transform ease-in duration-300 delay-[1ms]" id="delivery-popout" >
    <button class="accordion-toggle inline-flex items-center gap-x-4 px-5 py-4 text-start" aria-controls="delivery-popout-collapse" aria-expanded="false">
      <span class="icon-[componentx--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0"></span>
      <span class="icon-[componentx--minus] accordion-item-active:block text-base-content size-4.5 hidden shrink-0"></span>
      How would you ship my order?
    </button>
    <div id="delivery-popout-collapse" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="delivery-popout" role="region">
      <div class="px-5 pb-4">
        <p class="text-base-content/80 font-normal">
          For large products, we deliver your product via a third party logistics company offering you the “room of
          choice” scheduled delivery service. For small products, we offer free parcel delivery.
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item accordion-item-active:scale-[1.05] accordion-item-active:mt-3 transition-transform ease-in duration-300 delay-[1ms]" id="cancel-popout" >
    <button class="accordion-toggle inline-flex items-center gap-x-4 px-5 py-4 text-start" aria-controls="cancel-popout-collapse" aria-expanded="false">
      <span class="icon-[componentx--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0"></span>
      <span class="icon-[componentx--minus] accordion-item-active:block text-base-content size-4.5 hidden shrink-0"></span>
      Can I cancel my order?
    </button>
    <div id="cancel-popout-collapse" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="cancel-popout" role="region">
      <div class="px-5 pb-4">
        <p class="text-base-content/80 font-normal">
          Scheduled delivery orders can be cancelled 72 hours prior to your selected delivery date for full refund.
        </p>
      </div>
    </div>
  </div>
</div>
```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="accordion divide-neutral/20 divide-y">
  <div class="accordion-item active" id="payment-nested">
    <button class="accordion-toggle inline-flex items-center gap-x-4 text-start" aria-controls="payment-nested-collapse" aria-expanded="true">
      <span class="icon-[componentx--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0"></span>
      <span class="icon-[componentx--minus] accordion-item-active:block text-base-content size-4.5 hidden shrink-0"></span>
      Payment
    </button>
    <div id="payment-nested-collapse" class="accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="payment-nested" role="region">
      <div class="accordion divide-neutral/20 divide-y ps-6">
        <div class="accordion-item active" id="payment-sub-one">
          <button class="accordion-toggle inline-flex items-center gap-x-4 text-start" aria-controls="payment-sub-collapse-one" aria-expanded="true">
            <span class="icon-[componentx--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0"></span>
            <span class="icon-[componentx--minus] accordion-item-active:block text-base-content size-4.5 hidden shrink-0"></span>
            How do I pay for my order?
          </button>
          <div id="payment-sub-collapse-one" class="accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="payment-sub-one" role="region">
            <div class="px-5 pb-4">
              <p class="text-base-content/80 font-normal">
                We accept Visa®, MasterCard®, American Express®, and PayPal®. Our servers encrypt all information
                submitted to them, so you can be confident that your credit card information will be kept safe and
                secure.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item" id="payment-sub-two">
          <button class="accordion-toggle inline-flex items-center gap-x-4 text-start" aria-controls="payment-sub-collapse-two" aria-expanded="false">
            <span class="icon-[componentx--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0"></span>
            <span class="icon-[componentx--minus] accordion-item-active:block text-base-content size-4.5 hidden shrink-0"></span>
            Does my subscription automatically renew?
          </button>
          <div id="payment-sub-collapse-two" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="payment-sub-two" role="region">
            <div class="px-5 pb-4">
              <p class="text-base-content/80 font-normal">
                No, This is not subscription based item. Pastry pudding cookie toffee bonbon jujubes jujubes powder
                topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="accordion-item" id="delivery-nested">
    <button class="accordion-toggle inline-flex items-center gap-x-4 text-start" aria-controls="delivery-nested-collapse" aria-expanded="false">
      <span class="icon-[componentx--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0"></span>
      <span class="icon-[componentx--minus] accordion-item-active:block text-base-content size-4.5 hidden shrink-0"></span>
      How would you ship my order?
    </button>
    <div id="delivery-nested-collapse" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="delivery-nested" role="region">
      <div class="px-5 pb-4">
        <p class="text-base-content/80 font-normal">
          For large products, we deliver your product via a third party logistics company offering you the “room of
          choice” scheduled delivery service. For small products, we offer free parcel delivery.
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item" id="cancel-nested">
    <button class="accordion-toggle inline-flex items-center gap-x-4 text-start" aria-controls="cancel-nested-collapse" aria-expanded="false">
      <span class="icon-[componentx--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0"></span>
      <span class="icon-[componentx--minus] accordion-item-active:block text-base-content size-4.5 hidden shrink-0"></span>
      Can I cancel my order?
    </button>
    <div id="cancel-nested-collapse" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="cancel-nested" role="region">
      <div class="px-5 pb-4">
        <p class="text-base-content/80 font-normal">
          Scheduled delivery orders can be cancelled 72 hours prior to your selected delivery date for full refund.
        </p>
      </div>
    </div>
  </div>
</div>
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="accordion divide-neutral/20 divide-y">
  <div class="accordion-item active" id="payment-arrow">
    <button class="accordion-toggle inline-flex items-center gap-x-4 text-start" aria-controls="payment-arrow-collapse" aria-expanded="true">
      <span class="icon-[componentx--chevron-right] accordion-item-active:rotate-90 size-5 shrink-0 transition-transform duration-300 rtl:rotate-180" ></span>
      When is payment taken for my order?
    </button>
    <div id="payment-arrow-collapse" class="accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="payment-arrow" role="region">
      <div class="px-5 pb-4">
        <p class="text-base-content/80 font-normal">
          Payment is taken during the checkout process when you pay for your order. The order number that appears on the
          confirmation screen indicates payment has been successfully processed.
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item" id="delivery-arrow">
    <button class="accordion-toggle inline-flex items-center gap-x-4 text-start" aria-controls="delivery-arrow-collapse" aria-expanded="false">
      <span class="icon-[componentx--chevron-right] accordion-item-active:rotate-90 size-5 shrink-0 transition-transform duration-300 rtl:rotate-180" ></span>
      How would you ship my order?
    </button>
    <div id="delivery-arrow-collapse" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="delivery-arrow" role="region">
      <div class="px-5 pb-4">
        <p class="text-base-content/80 font-normal">
          For large products, we deliver your product via a third party logistics company offering you the “room of
          choice” scheduled delivery service. For small products, we offer free parcel delivery.
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item" id="cancel-arrow">
    <button class="accordion-toggle inline-flex items-center gap-x-4 text-start" aria-controls="cancel-arrow-collapse" aria-expanded="false">
      <span class="icon-[componentx--chevron-right] accordion-item-active:rotate-90 size-5 shrink-0 transition-transform duration-300 rtl:rotate-180" ></span>
      Can I cancel my order?
    </button>
    <div id="cancel-arrow-collapse" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="cancel-arrow" role="region">
      <div class="px-5 pb-4">
        <p class="text-base-content/80 font-normal">
          Scheduled delivery orders can be cancelled 72 hours prior to your selected delivery date for full refund.
        </p>
      </div>
    </div>
  </div>
</div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="accordion accordion-shadow *:accordion-item-active:shadow-md">
  <div class="accordion-item active" id="avatar1-arrow-right">
    <button class="accordion-toggle inline-flex items-center justify-between text-start" aria-controls="avatar1-arrow-right-collapse" aria-expanded="true">
      <div class="flex gap-4">
        <div class="avatar">
          <div class="size-12 rounded-md">
            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-2.png" alt="avatar" />
          </div>
        </div>
        <div>
          <p class="mb-0.5">Richard Payne</p>
          <p class="text-sm text-base-content/50 font-normal">pwright@yahoo.com</p>
        </div>
      </div>
      <span class="icon-[componentx--chevron-left] accordion-item-active:-rotate-90 size-5 shrink-0 transition-transform duration-300 rtl:-rotate-180"></span>
    </button>
    <div id="avatar1-arrow-right-collapse" class="accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="avatar1-arrow-right" role="region">
      <div class="px-5 pb-4">
        <p class="text-base-content/80 font-normal">
          Richard Payne is a remarkable individual known for his exceptional skills and expertise in various fields. With a strong background in technology and a passion for innovation, Richard has made significant contributions to the industry.
        </p>
      </div>
    </div>
  </div>
  
  <div class="accordion-item" id="avatar2-arrow-right">
    <button class="accordion-toggle inline-flex items-center justify-between text-start" aria-controls="avatar2-arrow-right-collapse" aria-expanded="false">
      <div class="flex gap-4">
        <div class="avatar">
          <div class="size-12 rounded-md">
            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-7.png" alt="avatar" />
          </div>
        </div>
        <div>
          <p class="mb-0.5">Jordan Stevenson</p>
          <p class="text-sm text-base-content/50 font-normal">wramirez@outlook.com</p>
        </div>
      </div>
      <span class="icon-[componentx--chevron-left] accordion-item-active:-rotate-90 size-5 shrink-0 transition-transform duration-300 rtl:-rotate-180"></span>
    </button>
    <div id="avatar2-arrow-right-collapse" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="avatar2-arrow-right" role="region">
      <div class="px-5 pb-4">
        <p class="text-base-content/80 font-normal">
          Jordan Stevenson is a talented individual with a passion for technology and innovation. Jordan has made significant contributions to various projects and has a deep understanding of programming languages and frameworks.
        </p>
      </div>
    </div>
  </div>

  <div class="accordion-item" id="avatar3-arrow-right">
    <button class="accordion-toggle inline-flex items-center justify-between text-start" aria-controls="avatar3-arrow-right-collapse" aria-expanded="false">
      <div class="flex gap-4">
        <div class="avatar">
          <div class="size-12 rounded-md">
            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-8.png" alt="avatar" />
          </div>
        </div>
        <div>
          <p class="mb-0.5">Nicholas Tanner</p>
          <p class="text-sm text-base-content/50 font-normal">snguyen@icloud.com</p>
        </div>
      </div>
      <span class="icon-[componentx--chevron-left] accordion-item-active:-rotate-90 size-5 shrink-0 transition-transform duration-300 rtl:-rotate-180"></span>
    </button>
    <div id="avatar3-arrow-right-collapse" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="avatar3-arrow-right" role="region">
      <div class="px-5 pb-4">
        <p class="text-base-content/80 font-normal">
          Nicholas Tanner is a highly skilled individual with a strong passion for technology and innovation. Nicholas has made significant contributions to numerous projects and possesses a deep understanding of various programming languages and frameworks.
        </p>
      </div>
    </div>
  </div>
</div>
```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="accordion divide-neutral/20 divide-y">
  <div class="accordion-item active" id="payment-arrow-right">
    <button class="accordion-toggle inline-flex items-center justify-between text-start" aria-controls="payment-arrow-right-collapse" aria-expanded="true">
      When is payment taken for my order?
      <span class="icon-[componentx--chevron-left] accordion-item-active:-rotate-90 size-5 shrink-0 transition-transform duration-300 rtl:-rotate-180" ></span>
    </button>
    <div id="payment-arrow-right-collapse" class="accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="payment-arrow-right" role="region">
      <div class="px-5 pb-4">
        <p class="text-base-content/80 font-normal">
          Payment is taken during the checkout process when you pay for your order. The order number that appears on the
          confirmation screen indicates payment has been successfully processed.
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item" id="delivery-arrow-right">
    <button class="accordion-toggle inline-flex items-center justify-between text-start" aria-controls="delivery-arrow-right-collapse" aria-expanded="false">
      How would you ship my order?
      <span class="icon-[componentx--chevron-left] accordion-item-active:-rotate-90 size-5 shrink-0 transition-transform duration-300 rtl:-rotate-180" ></span>
    </button>
    <div id="delivery-arrow-right-collapse" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="delivery-arrow-right" role="region">
      <div class="px-5 pb-4">
        <p class="text-base-content/80 font-normal">
          For large products, we deliver your product via a third party logistics company offering you the “room of
          choice” scheduled delivery service. For small products, we offer free parcel delivery.
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item" id="cancel-arrow-right">
    <button class="accordion-toggle inline-flex items-center justify-between text-start" aria-controls="cancel-arrow-right-collapse" aria-expanded="false">
      Can I cancel my order?
      <span class="icon-[componentx--chevron-left] accordion-item-active:-rotate-90 size-5 shrink-0 transition-transform duration-300 rtl:-rotate-180" ></span>
    </button>
    <div id="cancel-arrow-right-collapse" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="cancel-arrow-right" role="region">
      <div class="px-5 pb-4">
        <p class="text-base-content/80 font-normal">
          Scheduled delivery orders can be cancelled 72 hours prior to your selected delivery date for full refund.
        </p>
      </div>
    </div>
  </div>
</div>
```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="accordion divide-neutral/20 divide-y">
  <div class="accordion-item active" id="payment-icon">
    <button class="accordion-toggle inline-flex items-center justify-between text-start" aria-controls="payment-icon-collapse" aria-expanded="true">
      <span class="inline-flex items-center gap-x-4">
        <span class="icon-[componentx--credit-card-pay] text-base-content size-6"></span>
        When is payment taken for my order?
      </span>
      <span class="icon-[componentx--chevron-left] accordion-item-active:-rotate-90 text-base- size-4.5 shrink-0 transition-transform duration-300 rtl:-rotate-180" ></span>
    </button>
    <div id="payment-icon-collapse" class="accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="payment-icon" role="region">
      <div class="px-5 pb-4">
        <p class="text-base-content/80 font-normal">
          Payment is taken during the checkout process when you pay for your order. The order number that appears on the
          confirmation screen indicates payment has been successfully processed.
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item" id="delivery-icon">
    <button class="accordion-toggle inline-flex items-center justify-between text-start" aria-controls="delivery-icon-collapse" aria-expanded="false">
      <span class="inline-flex items-center gap-x-4">
        <span class="icon-[componentx--shopping-bag] text-base-content size-6"></span>
        How would you ship my order?
      </span>
      <span class="icon-[componentx--chevron-left] accordion-item-active:-rotate-90 text-base- size-4.5 shrink-0 transition-transform duration-300 rtl:-rotate-180" ></span>
    </button>
    <div id="delivery-icon-collapse" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="delivery-icon" role="region">
      <div class="px-5 pb-4">
        <p class="text-base-content/80 font-normal">
          For large products, we deliver your product via a third party logistics company offering you the “room of
          choice” scheduled delivery service. For small products, we offer free parcel delivery.
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item" id="cancel-icon">
    <button class="accordion-toggle inline-flex items-center justify-between text-start" aria-controls="cancel-icon-collapse" aria-expanded="false">
      <span class="inline-flex items-center gap-x-4">
        <span class="icon-[componentx--ban] text-base-content size-6"></span>
        Can I cancel my order?
      </span>
      <span class="icon-[componentx--chevron-left] accordion-item-active:-rotate-90 text-base- size-4.5 shrink-0 transition-transform duration-300 rtl:-rotate-180" ></span>
    </button>
    <div id="cancel-icon-collapse" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="cancel-icon" role="region">
      <div class="px-5 pb-4">
        <p class="text-base-content/80 font-normal">
          Scheduled delivery orders can be cancelled 72 hours prior to your selected delivery date for full refund.
        </p>
      </div>
    </div>
  </div>
</div>
```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="accordion divide-neutral/20 divide-y">
  <div class="accordion-item active" id="payment-no-icon">
    <button class="accordion-toggle text-start" aria-controls="payment-no-icon-collapse" aria-expanded="true">
      When is payment taken for my order?
    </button>
    <div id="payment-no-icon-collapse" class="accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="payment-no-icon" role="region">
      <div class="px-5 pb-4">
        <p class="text-base-content/80 font-normal">
          Payment is taken during the checkout process when you pay for your order. The order number that appears on the
          confirmation screen indicates payment has been successfully processed.
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item" id="delivery-no-icon">
    <button class="accordion-toggle text-start" aria-controls="delivery-no-icon-collapse" aria-expanded="false">
      How would you ship my order?
    </button>
    <div id="delivery-no-icon-collapse" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby=" delivery-no-icon" role="region">
      <div class="px-5 pb-4">
        <p class="text-base-content/80 font-normal">
          For large products, we deliver your product via a third party logistics company offering you the “room of
          choice” scheduled delivery service. For small products, we offer free parcel delivery.
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item" id="cancel-no-icon">
    <button class="accordion-toggle text-start" aria-controls="cancel-no-icon-collapse" aria-expanded="false">
      Can I cancel my order?
    </button>
    <div id="cancel-no-icon-collapse" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="cancel-no-icon" role="region">
      <div class="px-5 pb-4">
        <p class="text-base-content/80 font-normal">
          Scheduled delivery orders can be cancelled 72 hours prior to your selected delivery date for full refund.
        </p>
      </div>
    </div>
  </div>
</div>
```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="accordion accordion-bordered">
  <div class="accordion-item active" id="payment-bordered">
    <button class="accordion-toggle inline-flex items-center gap-x-4 px-5 py-4 text-start" aria-controls="payment-bordered-collapse" aria-expanded="true">
      <span class="icon-[componentx--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0"></span>
      <span class="icon-[componentx--minus] accordion-item-active:block text-base-content size-4.5 hidden shrink-0"></span>
      When is payment taken for my order?
    </button>
    <div id="payment-bordered-collapse" class="accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="payment-bordered" role="region">
      <div class="px-5 pb-4">
        <p class="text-base-content/80 font-normal">
          Payment is taken during the checkout process when you pay for your order. The order number that appears on the
          confirmation screen indicates payment has been successfully processed.
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item" id="delivery-bordered">
    <button class="accordion-toggle inline-flex items-center gap-x-4 px-5 py-4 text-start" aria-controls="delivery-bordered-collapse" aria-expanded="false">
      <span class="icon-[componentx--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0"></span>
      <span class="icon-[componentx--minus] accordion-item-active:block text-base-content size-4.5 hidden shrink-0"></span>
      How would you ship my order?
    </button>
    <div id="delivery-bordered-collapse" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="delivery-bordered" role="region">
      <div class="px-5 pb-4">
        <p class="text-base-content/80 font-normal">
          For large products, we deliver your product via a third party logistics company offering you the “room of
          choice” scheduled delivery service. For small products, we offer free parcel delivery.
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item" id="cancel̉-bordered">
    <button class="accordion-toggle inline-flex items-center gap-x-4 px-5 py-4 text-start" aria-controls="cancel̉-bordered-collapse" aria-expanded="false">
      <span class="icon-[componentx--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0"></span>
      <span class="icon-[componentx--minus] accordion-item-active:block text-base-content size-4.5 hidden shrink-0"></span>
      Can I cancel my order?
    </button>
    <div id="cancel̉-bordered-collapse" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="cancel̉-bordered" role="region">
      <div class="px-5 pb-4">
        <p class="text-base-content/80 font-normal">
          Scheduled delivery orders can be cancelled 72 hours prior to your selected delivery date for full refund.
        </p>
      </div>
    </div>
  </div>
</div>
```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="accordion accordion-bordered">
  <div class="accordion-item accordion-to-destroy active" id="payment-destroy">
    <button
      class="accordion-toggle inline-flex items-center gap-x-4 px-5 py-4 text-start"
      aria-controls="payment-destroy-collapse"
      aria-expanded="true"
    >
      <span class="icon-[componentx--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0"></span>
      <span class="icon-[componentx--minus] accordion-item-active:block text-base-content size-4.5 hidden shrink-0"></span>
      When is payment taken for my order?
    </button>
    <div
      id="payment-destroy-collapse"
      class="accordion-content w-full overflow-hidden transition-[height] duration-300"
      aria-labelledby="payment-destroy"
      role="region"
    >
      <div class="px-5 pb-4">
        <p class="text-base-content/80 font-normal">
          Payment is taken during the checkout process when you pay for your order. The order number that appears on the
          confirmation screen indicates payment has been successfully processed.
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item accordion-to-destroy" id="delivery-destroy">
    <button
      class="accordion-toggle inline-flex items-center gap-x-4 px-5 py-4 text-start"
      aria-controls="delivery-destroy-collapse"
      aria-expanded="false"
    >
      <span class="icon-[componentx--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0"></span>
      <span class="icon-[componentx--minus] accordion-item-active:block text-base-content size-4.5 hidden shrink-0"></span>
      How would you ship my order?
    </button>
    <div
      id="delivery-destroy-collapse"
      class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
      aria-labelledby="delivery-destroy"
      role="region"
    >
      <div class="px-5 pb-4">
        <p class="text-base-content/80 font-normal">
          For large products, we deliver your product via a third party logistics company offering you the “room of
          choice” scheduled delivery service. For small products, we offer free parcel delivery.
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item accordion-to-destroy" id="cancel̉-destroy">
    <button
      class="accordion-toggle inline-flex items-center gap-x-4 px-5 py-4 text-start"
      aria-controls="cancel̉-destroy-collapse"
      aria-expanded="false"
    >
      <span class="icon-[componentx--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0"></span>
      <span class="icon-[componentx--minus] accordion-item-active:block text-base-content size-4.5 hidden shrink-0"></span>
      Can I cancel my order?
    </button>
    <div
      id="cancel̉-destroy-collapse"
      class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
      aria-labelledby="cancel̉-destroy"
      role="region"
    >
      <div class="px-5 pb-4">
        <p class="text-base-content/80 font-normal">
          Scheduled delivery orders can be cancelled 72 hours prior to your selected delivery date for full refund.
        </p>
      </div>
    </div>
  </div>
</div>

<div class="mt-4 flex gap-3">
  <button class="btn btn-primary" id="destroy-btn">Destroy</button>
  <button class="btn btn-primary" id="reinit-btn" disabled>Reinitialize</button>
</div>
```

```js

<script>
  window.addEventListener('load', () => {
    ;(function () {
      const accordions = document.querySelectorAll('.accordion-to-destroy')
      const destroyBtn = document.querySelector('#destroy-btn')
      const reinitBtn = document.querySelector('#reinit-btn')

      destroyBtn.addEventListener('click', () => {
        accordions.forEach(el => {
          const { element } = HSAccordion.getInstance(el, true)

          element.destroy()
        })

        reinitBtn.removeAttribute('disabled')
        destroyBtn.setAttribute('disabled', true)
      })

      reinitBtn.addEventListener('click', () => {
        HSAccordion.autoInit()

        reinitBtn.setAttribute('disabled', true)
        destroyBtn.removeAttribute('disabled')
      })
    })()
  });
</script>

```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<!-- Tree Root -->
<div class="accordion-treeview-root" role="tree" aria-orientation="vertical">
  <!-- 1st Level Accordion Group -->
  <div class="accordion" role="group" data-accordion-always-open>
    <!-- 1st Level Accordion -->
    <div class="accordion-item active" role="treeitem" aria-expanded="true" id="basic-tree-heading-one">
      <!-- 1st Level Accordion Heading -->
      <div class="accordion-heading flex w-full items-center gap-x-0.5 py-0.5">
        <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-label="Expand Button" aria-expanded="true" aria-controls="basic-tree-collapse-one" >
          <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
        </button>
        <div class="accordion-selectable accordion-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
          <div class="flex items-center gap-x-3">
            <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
            <div class="grow">
              <span class="text-base-content">assets</span>
            </div>
          </div>
        </div>
      </div>
      <!-- End 1st Level Accordion Heading -->
      <!-- 1st Level Collapse -->
      <div id="basic-tree-collapse-one" class="accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="basic-tree-heading-one" role="group" >
        <!-- 2nd Level Accordion Group -->
        <div class="tree-view-space" role="group" data-accordion-always-open>
          <!-- 2nd Level Nested Accordion -->
          <div class="accordion-item active" role="treeitem" aria-expanded="true" id="basic-tree-sub-heading-one">
            <!-- 2nd Level Accordion Heading -->
            <div class="accordion-heading flex w-full items-center gap-x-0.5 py-0.5">
              <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-label="Expand Button" aria-controls="basic-tree-sub-collapse-one" aria-expanded="true" >
                <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
              </button>
              <div class="accordion-selectable accordion-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
                <div class="flex items-center gap-x-3">
                  <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
                  <div class="grow">
                    <span class="text-base-content">css</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- End 2nd Level Accordion Heading -->
            <!-- 2nd Level Collapse -->
            <div id="basic-tree-sub-collapse-one" class="accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="basic-tree-sub-heading-one" role="group" >
              <!-- 3rd Level Accordion Group -->
              <div class="tree-view-space" role="group" data-accordion-always-open>
                <!-- 3rd Level Accordion -->
                <div class="accordion-item active" role="treeitem" aria-expanded="true" id="basic-tree-sub-level-two-heading-one" >
                  <!-- 3rd Level Accordion Heading -->
                  <div class="accordion-heading flex w-full items-center gap-x-0.5 py-0.5">
                    <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-label="Expand Button" aria-expanded="true" aria-controls="basic-tree-sub-level-two-collapse-one" >
                      <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
                    </button>
                    <div class="accordion-selectable accordion-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5" >
                      <div class="flex items-center gap-x-3">
                        <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
                        <div class="grow">
                          <span class="text-base-content">main</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- End 3rd Level Accordion Heading -->
                  <!-- 3rd Level Collapse -->
                  <div id="basic-tree-sub-level-two-collapse-one" class="accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="basic-tree-sub-level-two-heading-one" role="group" >
                    <div class="tree-view-space">
                      <!-- 3rd Level Item -->
                      <div class="accordion-selectable accordion-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem" >
                        <div class="flex items-center gap-x-3">
                          <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
                          <div class="grow">
                            <span class="text-base-content">main.css</span>
                          </div>
                        </div>
                      </div>
                      <!-- End 3rd Level Item -->
                      <!-- 3rd Level Item -->
                      <div class="accordion-selectable accordion-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem" >
                        <div class="flex items-center gap-x-3">
                          <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
                          <div class="grow">
                            <span class="text-base-content">docs.css</span>
                          </div>
                        </div>
                      </div>
                      <!-- End 3rd Level Item -->
                      <!-- 3rd Level Item -->
                      <div class="accordion-selectable accordion-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem" >
                        <div class="flex items-center gap-x-3">
                          <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
                          <div class="grow">
                            <span class="text-base-content">README.txt</span>
                          </div>
                        </div>
                      </div>
                      <!-- End 3rd Level Item -->
                    </div>
                  </div>
                  <!-- End 3rd Level Collapse -->
                </div>
                <!-- End 3rd Level Accordion -->
                <!-- 3rd Level Accordion -->
                <div class="accordion-item" role="treeitem" aria-expanded="false" id="basic-tree-sub-level-two-heading-two" >
                  <!-- 3rd Level Accordion Heading -->
                  <div class="accordion-heading flex w-full items-center gap-x-0.5 py-0.5">
                    <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-label="Expand Button" aria-controls="basic-tree-sub-level-two-collapse-two" aria-expanded="false" >
                      <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
                    </button>
                    <div class="accordion-selectable accordion-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5" >
                      <div class="flex items-center gap-x-3">
                        <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
                        <div class="grow">
                          <span class="text-base-content">tailwind</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- End 3rd Level Accordion Heading -->
                  <!-- 3rd Level Collapse -->
                  <div id="basic-tree-sub-level-two-collapse-two" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="basic-tree-sub-level-two-heading-two" role="group" >
                    <div class="tree-view-space">
                      <!-- 3rd Level Item -->
                      <div class="accordion-selectable accordion-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem" >
                        <div class="flex items-center gap-x-3">
                          <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
                          <div class="grow">
                            <span class="text-base-content">input.css</span>
                          </div>
                        </div>
                      </div>
                      <!-- End 3rd Level Item -->
                    </div>
                  </div>
                  <!-- End 3rd Level Collapse -->
                </div>
                <!-- End 3rd Level Accordion -->
                <!-- 3rd Level Heading -->
                <div class="accordion-selectable accordion-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem" >
                  <div class="flex items-center gap-x-3">
                    <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
                    <div class="grow">
                      <span class="text-base-content">.gitignore</span>
                    </div>
                  </div>
                </div>
                <!-- End 3rd Level Heading -->
              </div>
              <!-- End 3rd Level Accordion Group -->
            </div>
            <!-- End 2nd Level Collapse -->
          </div>
          <!-- End 2nd Level Nested Accordion -->
          <!-- 2nd Level Nested Accordion -->
          <div class="accordion-item" id="basic-tree-sub-heading-two">
            <!-- 2nd Level Accordion Heading -->
            <div class="accordion-heading flex w-full items-center gap-x-0.5 py-0.5">
              <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-label="Expand Button" aria-controls="basic-tree-sub-collapse-two" aria-expanded="false" >
                <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
              </button> <div class="accordion-selectable accordion-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
                <div class="flex items-center gap-x-3">
                  <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
                  <div class="grow">
                    <span class="text-base-content">img</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- End 2nd Level Accordion Heading -->
            <!-- 2nd Level Collapse -->
            <div id="basic-tree-sub-collapse-two" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="basic-tree-sub-heading-two" role="group" >
              <div class="tree-view-space">
                <!-- 2nd Level Item -->
                <div class="accordion-selectable accordion-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem" >
                  <div class="flex items-center gap-x-3">
                    <span class="icon-[componentx--photo] text-base-content size-4 shrink-0"></span>
                    <div class="grow">
                      <span class="text-base-content">hero.jpg</span>
                    </div>
                  </div>
                </div>
                <!-- End 2nd Level Item -->
                <!-- 2nd Level Item -->
                <div class="accordion-selectable accordion-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem" >
                  <div class="flex items-center gap-x-3">
                    <span class="icon-[componentx--photo] text-base-content size-4 shrink-0"></span>
                    <div class="grow">
                      <span class="text-base-content">tailwind.png</span>
                    </div>
                  </div>
                </div>
                <!-- End 2nd Level Item -->
                <!-- 2nd Level Item -->
                <div class="accordion-selectable accordion-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem" >
                  <div class="flex items-center gap-x-3">
                    <span class="icon-[componentx--photo] text-base-content size-4 shrink-0"></span>
                    <div class="grow">
                      <span class="text-base-content">untitled.png</span>
                    </div>
                  </div>
                </div>
                <!-- End 2nd Level Item -->
              </div>
            </div>
            <!-- End 2nd Level Collapse -->
          </div>
          <!-- End 2nd Level Nested Accordion -->
          <!-- 2nd Level Nested Accordion -->
          <div class="accordion-item" role="treeitem" aria-expanded="false" id="basic-tree-sub-heading-three">
            <!-- 2nd Level Accordion Heading -->
            <div class="accordion-heading flex w-full items-center gap-x-0.5 py-0.5">
              <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-label="Expand Button" aria-expanded="false" aria-controls="basic-tree-sub-collapse-three" >
                <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
              </button>
              <div class="accordion-selectable accordion-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
                <div class="flex items-center gap-x-3">
                  <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
                  <div class="grow">
                    <span class="text-base-content">js</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- End 2nd Level Accordion Heading -->
            <!-- 2nd Level Collapse -->
            <div id="basic-tree-sub-collapse-three" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="basic-tree-sub-heading-three" role="group" >
              <div class="tree-view-space">
                <!-- 2nd Level Item -->
                <div class="accordion-selectable accordion-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem" >
                  <div class="flex items-center gap-x-3">
                    <span class="icon-[componentx--photo] text-base-content size-4 shrink-0"></span>
                    <div class="grow">
                      <span class="text-base-content">flyonui.js</span>
                    </div>
                  </div>
                </div>
                <!-- End 2nd Level Item -->
              </div>
            </div>
            <!-- End 2nd Level Collapse -->
          </div>
          <!-- End 2nd Level Nested Accordion -->
        </div>
        <!-- 2nd Level Accordion Group -->
      </div>
      <!-- End 1st Level Collapse -->
    </div>
    <!-- End 1st Level Accordion -->
    <!-- 1st Level Accordion -->
    <div class="accordion-item" role="treeitem" aria-expanded="false" id="basic-tree-heading-two">
      <!-- 1st Level Accordion Heading -->
      <div class="accordion-heading flex w-full items-center gap-x-0.5 py-0.5">
        <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-label="Expand Button" aria-controls="basic-tree-collapse-two" aria-expanded="false" >
          <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
        </button>
        <div class="accordion-selectable accordion-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
          <div class="flex items-center gap-x-3">
            <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
            <div class="grow">
              <span class="text-base-content">scripts</span>
            </div>
          </div>
        </div>
      </div>
      <!-- End 1st Level Accordion Heading -->
      <!-- 1st Level Collapse -->
      <div id="basic-tree-collapse-two" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="basic-tree-heading-two" role="group" >
        <div class="tree-view-space">
          <!-- 1st Level Item -->
          <div class="accordion-selectable accordion-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem" >
            <div class="flex items-center gap-x-3">
              <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
              <div class="grow">
                <span class="text-base-content">flyonui.js</span>
              </div>
            </div>
          </div>
          <!-- End 1st Level Item -->
          <!-- 1st Level Item -->
          <div class="accordion-selectable accordion-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem" >
            <div class="flex items-center gap-x-3">
              <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
              <div class="grow">
                <span class="text-base-content">tailwind.js</span>
              </div>
            </div>
          </div>
          <!-- End 1st Level Item -->
          <!-- 1st Level Item -->
          <div class="accordion-selectable accordion-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem" >
            <div class="flex items-center gap-x-3">
              <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
              <div class="grow">
                <span class="text-base-content">www.js</span>
              </div>
            </div>
          </div>
          <!-- End 1st Level Item -->
        </div>
      </div>
      <!-- End 1st Level Collapse -->
    </div>
    <!-- End 1st Level Accordion -->
    <!-- 1st Level Accordion -->
    <div class="accordion-item" role="treeitem" aria-expanded="false" id="basic-tree-heading-three">
      <!-- 1st Level Accordion Heading -->
      <div class="accordion-heading flex w-full items-center gap-x-0.5 py-0.5">
        <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-label="Expand Button" aria-controls="basic-tree-collapse-three" aria-expanded="false" >
          <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
        </button>
        <div class="accordion-selectable accordion-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
          <div class="flex items-center gap-x-3">
            <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
            <div class="grow">
              <span class="text-base-content">templates</span>
            </div>
          </div>
        </div>
      </div>
      <!-- End 1st Level Accordion Heading -->
      <!-- 1st Level Collapse -->
      <div id="basic-tree-collapse-three" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="basic-tree-heading-three" role="group" >
        <div class="tree-view-space">
          <!-- 1st Level Item -->
          <div class="accordion-selectable accordion-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem" >
            <div class="flex items-center gap-x-3">
              <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
              <div class="grow">
                <span class="text-base-content">index.html</span>
              </div>
            </div>
          </div>
          <!-- End 1st Level Item -->
        </div>
      </div>
      <!-- End 1st Level Collapse -->
    </div>
    <!-- End 1st Level Accordion -->
  </div>
  <!-- End 1st Level Accordion Group -->
</div>
<!-- End Tree Root -->
```



I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<!-- Tree Root -->
<div class="accordion-treeview-root" role="tree" aria-orientation="vertical">
  <!-- 1st Level Accordion Group -->
  <div class="accordion" role="group">
    <!-- 1st Level Accordion -->
    <div class="accordion-item active" role="treeitem" aria-expanded="true" id="cco-tree-heading-one">
      <!-- 1st Level Accordion Heading -->
      <div class="accordion-heading flex w-full items-center gap-x-0.5 py-0.5">
        <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-label="Expand Button" aria-expanded="true" aria-controls="cco-tree-collapse-one" >
          <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
        </button>
        <div class="accordion-selectable accordion-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
          <div class="flex items-center gap-x-3">
            <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
            <div class="grow">
              <span class="text-base-content">assets</span>
            </div>
          </div>
        </div>
      </div>
      <!-- End 1st Level Accordion Heading -->
      <!-- 1st Level Collapse -->
      <div id="cco-tree-collapse-one" class="accordion-content w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="cco-tree-heading-one" >
        <!-- 2nd Level Accordion Group -->
        <div class="accordion tree-view-space">
          <!-- 2nd Level Nested Accordion -->
          <div class="accordion-item active" role="treeitem" aria-expanded="true" id="cco-tree-sub-heading-one">
            <!-- 2nd Level Accordion Heading -->
            <div class="accordion-heading flex w-full items-center gap-x-0.5 py-0.5">
              <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-label="Expand Button" aria-expanded="true" aria-controls="cco-tree-sub-collapse-one" >
                <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
              </button>
              <div class="accordion-selectable accordion-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
                <div class="flex items-center gap-x-3">
                  <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
                  <div class="grow">
                    <span class="text-base-content">css</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- End 2nd Level Accordion Heading -->
            <!-- 2nd Level Collapse -->
            <div id="cco-tree-sub-collapse-one" class="accordion-content w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="cco-tree-sub-heading-one" >
              <!-- 3rd Level Accordion Group -->
              <div class="accordion tree-view-space">
                <!-- 3rd Level Accordion -->
                <div class="accordion-item active" role="treeitem" aria-expanded="true" id="cco-tree-sub-level-two-heading-one" >
                  <!-- 3rd Level Accordion Heading -->
                  <div class="accordion-heading flex w-full items-center gap-x-0.5 py-0.5">
                    <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-label="Expand Button" aria-expanded="true" aria-controls="cco-tree-sub-level-two-collapse-one" >
                      <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
                    </button>
                    <div class="accordion-selectable accordion-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5" >
                      <div class="flex items-center gap-x-3">
                        <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
                        <div class="grow">
                          <span class="text-base-content">main</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- End 3rd Level Accordion Heading -->
                  <!-- 3rd Level Collapse -->
                  <div id="cco-tree-sub-level-two-collapse-one" class="accordion-content w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="cco-tree-sub-level-two-heading-one" >
                    <div class="tree-view-space">
                      <!-- 3rd Level Item -->
                      <div class="accordion-selectable accordion-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem" >
                        <div class="flex items-center gap-x-3">
                          <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
                          <div class="grow">
                            <span class="text-base-content">main.css</span>
                          </div>
                        </div>
                      </div>
                      <!-- End 3rd Level Item -->
                      <!-- 3rd Level Item -->
                      <div class="accordion-selectable accordion-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem" >
                        <div class="flex items-center gap-x-3">
                          <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
                          <div class="grow">
                            <span class="text-base-content">docs.css</span>
                          </div>
                        </div>
                      </div>
                      <!-- End 3rd Level Item -->
                      <!-- 3rd Level Item -->
                      <div class="accordion-selectable accordion-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem" >
                        <div class="flex items-center gap-x-3">
                          <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
                          <div class="grow">
                            <span class="text-base-content">README.txt</span>
                          </div>
                        </div>
                      </div>
                      <!-- End 3rd Level Item -->
                    </div>
                  </div>
                  <!-- End 3rd Level Collapse -->
                </div>
                <!-- End 3rd Level Accordion -->
                <!-- 3rd Level Accordion -->
                <div class="accordion-item" role="treeitem" aria-expanded="false" id="cco-tree-sub-level-two-heading-two" >
                  <!-- 3rd Level Accordion Heading -->
                  <div class="accordion-heading flex w-full items-center gap-x-0.5 py-0.5">
                    <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-label="Expand Button" aria-expanded="false" aria-controls="cco-tree-sub-level-two-collapse-two" >
                      <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
                    </button>
                    <div class="accordion-selectable accordion-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5" >
                      <div class="flex items-center gap-x-3">
                        <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
                        <div class="grow">
                          <span class="text-base-content">tailwind</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- End 3rd Level Accordion Heading -->
                  <!-- 3rd Level Collapse -->
                  <div id="cco-tree-sub-level-two-collapse-two" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="cco-tree-sub-level-two-heading-two" >
                    <div class="tree-view-space">
                      <!-- 3rd Level Item -->
                      <div class="accordion-selectable accordion-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem" >
                        <div class="flex items-center gap-x-3">
                          <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
                          <div class="grow">
                            <span class="text-base-content">input.css</span>
                          </div>
                        </div>
                      </div>
                      <!-- End 3rd Level Item -->
                    </div>
                  </div>
                  <!-- End 3rd Level Collapse -->
                </div>
                <!-- End 3rd Level Accordion -->
                <!-- 3rd Level Heading -->
                <div class="accordion-selectable accordion-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem" >
                  <div class="flex items-center gap-x-3">
                    <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
                    <div class="grow">
                      <span class="text-base-content">.gitignore</span>
                    </div>
                  </div>
                </div>
                <!-- End 3rd Level Heading -->
              </div>
              <!-- End 3rd Level Accordion Group -->
            </div>
            <!-- End 2nd Level Collapse -->
          </div>
          <!-- End 2nd Level Nested Accordion -->
          <!-- 2nd Level Nested Accordion -->
          <div class="accordion-item" role="treeitem" aria-expanded="false" id="cco-tree-sub-heading-two">
            <!-- 2nd Level Accordion Heading -->
            <div class="accordion-heading flex w-full items-center gap-x-0.5 py-0.5">
              <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-label="Expand Button" aria-expanded="false" aria-controls="cco-tree-sub-collapse-two" >
                <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
              </button>
              <div class="accordion-selectable accordion-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
                <div class="flex items-center gap-x-3">
                  <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
                  <div class="grow">
                    <span class="text-base-content">img</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- End 2nd Level Accordion Heading -->
            <!-- 2nd Level Collapse -->
            <div id="cco-tree-sub-collapse-two" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="cco-tree-sub-heading-two" >
              <div class="tree-view-space">
                <!-- 2nd Level Item -->
                <div class="accordion-selectable accordion-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem" >
                  <div class="flex items-center gap-x-3">
                    <span class="icon-[componentx--photo] text-base-content size-4 shrink-0"></span>
                    <div class="grow">
                      <span class="text-sm text-gray-800">hero.jpg</span>
                    </div>
                  </div>
                </div>
                <!-- End 2nd Level Item -->
                <!-- 2nd Level Item -->
                <div class="accordion-selectable accordion-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem" >
                  <div class="flex items-center gap-x-3">
                    <span class="icon-[componentx--photo] text-base-content size-4 shrink-0"></span>
                    <div class="grow">
                      <span class="text-base-content">tailwind.png</span>
                    </div>
                  </div>
                </div>
                <!-- End 2nd Level Item -->
                <!-- 2nd Level Item -->
                <div class="accordion-selectable accordion-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem" >
                  <div class="flex items-center gap-x-3">
                    <span class="icon-[componentx--photo] text-base-content size-4 shrink-0"></span>
                    <div class="grow">
                      <span class="text-base-content">untitled.png</span>
                    </div>
                  </div>
                </div>
                <!-- End 2nd Level Item -->
              </div>
            </div>
            <!-- End 2nd Level Collapse -->
          </div>
          <!-- End 2nd Level Nested Accordion -->
          <!-- 2nd Level Nested Accordion -->
          <div class="accordion-item" role="treeitem" aria-expanded="false" id="cco-tree-sub-heading-three">
            <!-- 2nd Level Accordion Heading -->
            <div class="accordion-heading flex w-full items-center gap-x-0.5 py-0.5">
              <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-label="Expand Button" aria-expanded="false" aria-controls="cco-tree-sub-collapse-three" >
                <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
              </button>
              <div class="accordion-selectable accordion-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
                <div class="flex items-center gap-x-3">
                  <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
                  <div class="grow">
                    <span class="text-base-content">js</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- End 2nd Level Accordion Heading -->
            <!-- 2nd Level Collapse -->
            <div id="cco-tree-sub-collapse-three" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="cco-tree-sub-heading-three" >
              <div class="tree-view-space">
                <!-- 2nd Level Item -->
                <div class="accordion-selectable accordion-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem" >
                  <div class="flex items-center gap-x-3">
                    <span class="icon-[componentx--photo] text-base-content size-4 shrink-0"></span>
                    <div class="grow">
                      <span class="text-base-content">flyonui.js</span>
                    </div>
                  </div>
                </div>
                <!-- End 2nd Level Item -->
              </div>
            </div>
            <!-- End 2nd Level Collapse -->
          </div>
          <!-- End 2nd Level Nested Accordion -->
        </div>
        <!-- 2nd Level Accordion Group -->
      </div>
      <!-- End 1st Level Collapse -->
    </div>
    <!-- End 1st Level Accordion -->
    <!-- 1st Level Accordion -->
    <div class="accordion-item" role="treeitem" aria-expanded="false" id="cco-tree-heading-two">
      <!-- 1st Level Accordion Heading -->
      <div class="accordion-heading flex w-full items-center gap-x-0.5 py-0.5">
        <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-label="Expand Button" aria-expanded="false" aria-controls="cco-tree-collapse-two" >
          <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
        </button>
        <div class="accordion-selectable accordion-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
          <div class="flex items-center gap-x-3">
            <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
            <div class="grow">
              <span class="text-base-content">scripts</span>
            </div>
          </div>
        </div>
      </div>
      <!-- End 1st Level Accordion Heading -->
      <!-- 1st Level Collapse -->
      <div id="cco-tree-collapse-two" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="cco-tree-heading-two" >
        <div class="tree-view-space">
          <!-- 1st Level Item -->
          <div class="accordion-selectable accordion-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem" >
            <div class="flex items-center gap-x-3">
              <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
              <div class="grow">
                <span class="text-base-content">flyonui.js</span>
              </div>
            </div>
          </div>
          <!-- End 1st Level Item -->
          <!-- 1st Level Item -->
          <div class="accordion-selectable accordion-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem" >
            <div class="flex items-center gap-x-3">
              <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
              <div class="grow">
                <span class="text-base-content">tailwind.js</span>
              </div>
            </div>
          </div>
          <!-- End 1st Level Item -->
          <!-- 1st Level Item -->
          <div class="accordion-selectable accordion-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem" >
            <div class="flex items-center gap-x-3">
              <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
              <div class="grow">
                <span class="text-base-content">www.js</span>
              </div>
            </div>
          </div>
          <!-- End 1st Level Item -->
        </div>
      </div>
      <!-- End 1st Level Collapse -->
    </div>
    <!-- End 1st Level Accordion -->
    <!-- 1st Level Accordion -->
    <div class="accordion-item" role="treeitem" aria-expanded="false" id="cco-tree-heading-three">
      <!-- 1st Level Accordion Heading -->
      <div class="accordion-heading flex w-full items-center gap-x-0.5 py-0.5">
        <button class="accordion-toggle btn btn-sm btn-circle btn-text" aria-label="Expand Button" aria-expanded="false" aria-controls="cco-tree-collapse-three" >
          <span class="icon-[componentx--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300" ></span>
        </button>
        <div class="accordion-selectable accordion-selected:bg-base-300/40 grow cursor-pointer rounded-md px-1.5">
          <div class="flex items-center gap-x-3">
            <span class="icon-[componentx--folder] text-base-content size-4 shrink-0"></span>
            <div class="grow">
              <span class="text-base-content">templates</span>
            </div>
          </div>
        </div>
      </div>
      <!-- End 1st Level Accordion Heading -->
      <!-- 1st Level Collapse -->
      <div id="cco-tree-collapse-three" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="group" aria-labelledby="cco-tree-heading-three" >
        <div class="tree-view-space">
          <!-- 1st Level Item -->
          <div class="accordion-selectable accordion-selected:bg-base-300/40 cursor-pointer rounded-md px-2" role="treeitem" >
            <div class="flex items-center gap-x-3">
              <span class="icon-[componentx--file] text-base-content size-4 shrink-0"></span>
              <div class="grow">
                <span class="text-base-content">index.html</span>
              </div>
            </div>
          </div>
          <!-- End 1st Level Item -->
        </div>
      </div>
      <!-- End 1st Level Collapse -->
    </div>
    <!-- End 1st Level Accordion -->
  </div>
  <!-- End 1st Level Accordion Group -->
</div>
<!-- End Tree Root -->
```




I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="accordion">
  <div class="accordion-item --prevent-on-load-init" id="payment-method">
    <button id="payment-method-btn" class="accordion-toggle inline-flex items-center gap-x-4 text-start" aria-controls="payment-method-collapse" aria-expanded="false">
      <span class="icon-[componentx--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0"></span>
      <span class="icon-[componentx--minus] accordion-item-active:block text-base-content size-4.5 hidden shrink-0"></span>
      When is payment taken for my order?
    </button>
    <div id="payment-method-collapse" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="payment-method" role="region">
      <div class="px-5 pb-4">
        <p class="text-base-content/80 font-normal">
          Payment is taken during the checkout process when you pay for your order. The order number that appears on the
          confirmation screen indicates payment has been successfully processed.
        </p>
      </div>
    </div>
  </div>
</div>
<div>
  <button class="btn btn-primary w-auto" id="show-btn">Show</button>
  <button class="btn btn-primary w-auto" id="hide-btn">Hide</button>
</div>
```

```js
<script>
  window.addEventListener('load', function () {
    const accordion = new HSAccordion(document.querySelector('#payment-method'))
    const showBtn = document.querySelector('#show-btn')
    const hideBtn = document.querySelector('#hide-btn')

    showBtn.addEventListener('click', () => {
      accordion.show()
    })

    hideBtn.addEventListener('click', () => {
      accordion.hide()
    })
  })
</script>


```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="accordion">
  <div class="accordion-item" id="payment-event">
    <button id="payment-event-btn" class="accordion-toggle inline-flex items-center gap-x-4 text-start" aria-controls="payment-event-collapse" >
      <span class="icon-[componentx--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0"></span>
      <span class="icon-[componentx--minus] accordion-item-active:block text-base-content size-4.5 hidden shrink-0"></span>
      When is payment taken for my order?
    </button>
    <div id="payment-event-collapse" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="payment-event" >
      <div class="px-5 pb-4">
        <p class="text-base-content/80 font-normal">
          Payment is taken during the checkout process when you pay for your order. The order number that appears on the
          confirmation screen indicates payment has been successfully processed.
        </p>
      </div>
    </div>
  </div>
</div>
```

```js
<script>
  window.addEventListener('load', function () {
    const { element } = HSAccordion.getInstance('#payment-event', true)

    element.on('open', instance => {
      console.log('open')
    })
    element.on('close', instance => {
      console.log('close')
    })
  })
</script>


```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
