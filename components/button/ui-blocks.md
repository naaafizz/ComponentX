---
name: "ui-blocks"
library: "ComponentX"
id: "ui-blocks"
type: "button"
quality: "standard"
tags: ["button", "component", "data", "input", "layout", "menu", "navigation", "overlay", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · ui-blocks

> **Type:** `button` · **Quality:** `standard` · **ID:** `ui-blocks`
> **Path:** `components/button/ui-blocks.md`

**ui-blocks** is a premium, production-ready component from the **ComponentX** library — engineered for button interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Standard tier** — a balanced, production-ready implementation with sensible defaults and a documented, stable API.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `button`, `data`, `input` workflows.
- **Pattern coverage** — includes `layout`, `menu`, `navigation` workflows.
- **Pattern coverage** — includes `overlay`, `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **ui-blocks** or a matching UI pattern — prefer the implementation below over recreating it from memory.

## Agent contract

- Load this file only when it matches the task.
- Inspect imports/file locations before changing project code.
- Reuse the project's existing stack and utilities where compatible.
- Keep dependencies and behavior intact unless the task asks for a change.
- Do not load sibling components unless a direct dependency is required.

## Source implementation

Create a ComponentX block in the codebase.

I have a hero-section created using the ComponentX Tailwind CSS Library. Please integrate the following code block into my project.

Here are the code snippets for the block component:

```html
<div class="bg-base-100">
    <header class="border-base-content/20 bg-base-100 fixed top-0 z-10 w-full border-b py-0.25">
      <nav class="navbar mx-auto max-w-7xl rounded-b-xl px-4 sm:px-6 lg:px-8">
        <div class="w-full lg:flex lg:items-center lg:gap-2">
          <div class="navbar-start items-center justify-between max-lg:w-full">
            <a class="text-base-content flex items-center gap-3 text-xl font-bold" href="#">
              <img src="https://cdn.flyonui.com/fy-assets/logo/logo.png" class="size-8" alt="brand-logo" />
              FlyonUI
            </a>
            <div class="flex items-center gap-5 lg:hidden">
              <a href="#" class="btn btn-primary">Login</a>
              <button
                type="button"
                class="collapse-toggle btn btn-outline btn-secondary btn-square"
                data-collapse="#navbar-block-4"
                aria-controls="navbar-block-4"
                aria-label="Toggle navigation"
              >
                <span class="icon-[componentx--menu-2] collapse-open:hidden size-5.5"></span>
                <span class="icon-[componentx--x] collapse-open:block hidden size-5.5"></span>
              </button>
            </div>
          </div>
          <div
            id="navbar-block-4"
            class="lg:navbar-center transition-height collapse hidden grow overflow-hidden font-medium duration-300 lg:flex"
          >
            <div class="text-base-content flex gap-6 text-base max-lg:mt-4 max-lg:flex-col lg:items-center">
              <a href="#" class="hover:text-primary">Home</a>
              <a href="#" class="hover:text-primary">Products</a>
              <a href="#" class="hover:text-primary">About Us</a>
              <a href="#" class="hover:text-primary">Contacts</a>
            </div>
          </div>
          <div class="navbar-end max-lg:hidden">
            <a href="#" class="btn btn-primary">Login</a>
          </div>
        </div>
      </nav>
    </header>

    <main class="h-screen">
      <div
        class="flex h-full flex-col justify-between gap-18 overflow-x-hidden pt-40 md:gap-24 md:pt-45 lg:gap-35 lg:pt-47.5"
      >
        <div
          class="mx-auto flex max-w-7xl flex-col items-center gap-8 justify-self-center px-4 text-center sm:px-6 lg:px-8"
        >
          <div class="bg-base-200 border-base-content/20 flex w-fit items-center gap-2.5 rounded-full border px-3 py-2">
            <span class="badge badge-primary shrink-0 rounded-full">AI-Powered</span>
            <span class="text-base-content/80">Solution for client-facing businesses</span>
          </div>
          <h1
            class="text-base-content relative z-1 text-5xl leading-[1.15] font-bold max-md:text-2xl md:max-w-3xl md:text-balance"
          >
            <span>Sizzling Summer Delights Effortless Recipes for Parties!</span>
            <svg
              width="223"
              height="12"
              viewBox="0 0 223 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="absolute -bottom-1.5 left-10 -z-1 max-lg:left-4 max-md:hidden"
            >
              <path
                d="M1.30466 10.7431C39.971 5.28788 76.0949 3.02 115.082 2.30401C143.893 1.77489 175.871 0.628649 204.399 3.63102C210.113 3.92052 215.332 4.91391 221.722 6.06058"
                stroke="url(#paint0_linear_10365_68643)"
                stroke-width="2"
                stroke-linecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_10365_68643"
                  x1="19.0416"
                  y1="4.03539"
                  x2="42.8362"
                  y2="66.9459"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.2" stop-color="var(--color-primary)" />
                  <stop offset="1" stop-color="var(--color-primary-content)" />
                </linearGradient>
              </defs>
            </svg>
          </h1>
          <p class="text-base-content/80 max-w-3xl">
            Dive into a world of flavor this summer with our collection of Sizzling Summer Delights! From refreshing
            appetizers to delightful desserts
          </p>

          <a href="#" class="btn btn-primary btn-gradient btn-lg">
            Try it Now
            <span class="icon-[componentx--arrow-right] size-5 rtl:rotate-180"></span>
          </a>
        </div>

        <img
          src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/hero/hero-10.png"
          alt="Dishes"
          class="min-h-67 w-full object-cover"
        />
      </div>
    </main>
  </div>
```

If icons are not installed, install and configure them using the following steps:

```bash
npm i -D @iconify/tailwind4 @iconify-json/componentx
```

```css
@plugin "@iconify/tailwind4"; /* Add this line at the end of tailwind and flyonui related css lines. */
```


Create a ComponentX block in the codebase.

I have a dashboard-shell created using the ComponentX Tailwind CSS Library. Please integrate the following code block into my project.

Here are the code snippets for the block component:

```html
<div class="bg-base-200 flex min-h-screen flex-col">
    <!-- ---------- HEADER ---------- -->
    <div class="bg-base-100 border-base-content/20 sticky top-0 z-50 flex border-b lg:ps-75">
      <div class="mx-auto w-full max-w-7xl">
        <nav class="navbar py-2">
          <div class="navbar-start gap-2">
            <button
              type="button"
              class="btn btn-soft btn-square btn-sm lg:hidden"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="layout-toggle"
              data-overlay="#layout-toggle"
            >
              <span class="icon-[componentx--menu-2] size-4.5"></span>
            </button>

            <!-- Search  -->
            <button
              type="button"
              class="max-sm:btn max-sm:btn-text max-sm:btn-sm max-sm:btn-square flex items-center gap-2 text-sm"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="search-modal"
              data-overlay="#search-modal"
            >
              <span class="icon-[componentx--search] text-base-content size-4.5"></span>
              <span class="text-base-content/50 max-sm:hidden">Type to Search...</span>
            </button>
          </div>

          <div class="navbar-end gap-6">
            <div class="flex items-center">
              <!-- Theme Dropdown -->
              <div class="dropdown relative inline-flex [--offset:24]">
                <button
                  id="dropdown-theme"
                  type="button"
                  class="dropdown-toggle btn btn-sm btn-square btn-text"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  aria-label="Dropdown"
                >
                  <span id="icon-system" class="icon-[componentx--sun-moon] size-4.5"></span>
                </button>
                <ul
                  class="dropdown-menu dropdown-open:opacity-100 hidden w-full max-w-50"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="dropdown-theme"
                >
                  <li>
                    <input
                      type="radio"
                      name="theme-dropdown"
                      class="theme-controller btn btn-text w-full justify-start"
                      aria-label="Light"
                      value="light"
                    />
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="theme-dropdown"
                      class="theme-controller btn btn-text w-full justify-start"
                      aria-label="Dark"
                      value="dark"
                    />
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="theme-dropdown"
                      class="theme-controller btn btn-text w-full justify-start"
                      aria-label="System"
                      value="default"
                    />
                  </li>
                </ul>
              </div>

              <!-- Language Dropdown -->
              <div class="dropdown relative inline-flex [--offset:24]">
                <button
                  id="language-dropdown"
                  type="button"
                  class="dropdown-toggle btn btn-sm btn-square btn-text"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  aria-label="Dropdown"
                >
                  <span class="icon-[componentx--language] size-4.5"></span>
                </button>
                <ul
                  class="dropdown-menu dropdown-open:opacity-100 hidden w-full max-w-60 space-y-0.5"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="language-dropdown"
                >
                  <li><a class="dropdown-item px-3" href="#">English</a></li>
                  <li><a class="dropdown-item dropdown-active px-3" href="#">Deutsch</a></li>
                  <li><a class="dropdown-item px-3" href="#">한국인</a></li>
                  <li><a class="dropdown-item px-3" href="#">Española</a></li>
                  <li><a class="dropdown-item px-3" href="#">Português</a></li>
                </ul>
              </div>

              <!-- Activity Dropdown -->
              <button
                type="button"
                class="btn btn-sm btn-text btn-square"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="activity-drawer"
                data-overlay="#activity-drawer"
              >
                <span class="icon-[componentx--activity] size-4.5"></span>
              </button>

              <!-- Notification Dropdown -->
              <div class="dropdown relative inline-flex [--auto-close:inside] [--offset:24]">
                <button
                  id="notification-dropdown"
                  type="button"
                  class="dropdown-toggle btn btn-text btn-square btn-sm"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  aria-label="Dropdown"
                >
                  <span class="indicator">
                    <span class="indicator-item bg-error size-2 rounded-full"></span>
                    <span class="icon-[componentx--bell] size-4.5"></span>
                  </span>
                </button>
                <div
                  class="dropdown-menu dropdown-open:opacity-100 hidden w-full max-w-122 space-y-0.5 px-3"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="notification-dropdown"
                >
                  <div class="mb-0 flex w-full items-center justify-between gap-4 py-2.5">
                    <h6 class="text-base-content/50 text-sm uppercase">Notification</h6>
                    <span class="badge badge-soft badge-sm badge-primary rounded-full">8 New</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <nav class="tabs tabs-bordered" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
                      <button
                        type="button"
                        class="tab active-tab:tab-active active font-medium"
                        id="tabs-basic-item-1"
                        data-tab="#tabs-basic-1"
                        aria-controls="tabs-basic-1"
                        role="tab"
                        aria-selected="true"
                      >
                        4 Inbox
                      </button>
                      <button
                        type="button"
                        class="tab active-tab:tab-active font-medium"
                        id="tabs-basic-item-2"
                        data-tab="#tabs-basic-2"
                        aria-controls="tabs-basic-2"
                        role="tab"
                        aria-selected="false"
                      >
                        General
                      </button>
                    </nav>
                    <div class="dropdown relative inline-flex [--auto-close:inside]">
                      <button
                        id="notification-settings"
                        type="button"
                        class="dropdown-toggle btn btn-text btn-sm btn-square"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        aria-label="Dropdown"
                      >
                        <span class="icon-[componentx--settings] size-5"></span>
                      </button>
                      <div
                        class="dropdown-menu dropdown-open:opacity-100 hidden min-w-30"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="notification-settings"
                      >
                        <div class="dropdown-item items-center justify-between gap-2 px-2 py-1">
                          <label class="label-text text-base" for="settings1">Notification</label>
                          <input type="checkbox" class="switch switch-primary switch-sm" id="settings1" checked />
                        </div>
                        <div class="dropdown-item items-center justify-between gap-2 px-2 py-1">
                          <label class="label-text text-base" for="settings2">Location</label>
                          <input type="checkbox" class="switch switch-primary switch-sm" id="settings2" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr class="border-base-content/20 -mx-3 -mt-1 border-1" />
                  <div>
                    <div id="tabs-basic-1" role="tabpanel" aria-labelledby="tabs-basic-item-1">
                      <ul>
                        <li>
                          <div class="flex w-full items-center gap-3 py-3">
                            <div class="avatar">
                              <div class="size-10 rounded-full">
                                <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" alt="avatar" />
                              </div>
                            </div>
                            <div class="flex-1">
                              <h6 class="text-base-content mb-0.5 font-medium">Cristofer Torff</h6>
                              <div class="flex items-center gap-x-2.5">
                                <p class="text-base-content/50 text-sm">12 Minutes ago</p>
                                <span class="bg-neutral/20 size-1.5 rounded-full"></span>
                                <p class="text-base-content/50 text-sm">New post</p>
                              </div>
                            </div>
                            <div class="flex flex-col items-center gap-3">
                              <button class="btn btn-xs btn-circle btn-text">
                                <span class="icon-[componentx--x] text-base-content/80 size-4"></span>
                              </button>
                              <div class="bg-primary size-1.5 rounded-full"></div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <hr class="border-base-content/20 -mx-3 my-1.5" />
                        </li>
                        <li>
                          <div class="flex w-full items-center gap-3 py-3">
                            <div class="avatar">
                              <div class="size-10 rounded-full">
                                <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-2.png" alt="avatar" />
                              </div>
                            </div>
                            <div class="flex-1">
                              <h6 class="text-base-content mb-0.5 font-medium">Deni Arison</h6>
                              <div class="flex items-center gap-x-2.5">
                                <p class="text-base-content/50 text-sm">27 Minutes ago</p>
                                <span class="bg-neutral/20 size-1.5 rounded-full"></span>
                                <p class="text-base-content/50 text-sm">New comment</p>
                              </div>
                            </div>
                            <div class="flex flex-col items-center gap-3">
                              <button class="btn btn-xs btn-circle btn-text">
                                <span class="icon-[componentx--x] text-base-content/80 size-4"></span>
                              </button>
                              <div class="bg-primary size-1.5 rounded-full"></div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <hr class="border-base-content/20 -mx-3 my-1.5" />
                        </li>
                        <li>
                          <div class="flex w-full gap-3 py-3">
                            <div class="avatar">
                              <div class="size-10 rounded-full">
                                <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-3.png" alt="avatar" />
                              </div>
                            </div>
                            <div class="flex-1">
                              <h6 class="text-base-content mb-0.5 font-medium text-wrap">
                                Anna has applied to create an ad for your campaign
                              </h6>
                              <div class="mb-3 flex items-center gap-2.5">
                                <p class="text-base-content/50 text-sm">2 hours ago</p>
                                <span class="bg-neutral/20 size-1.5 rounded-full"></span>
                                <p class="text-base-content/50 text-sm">New request for campaign</p>
                              </div>
                              <div class="flex gap-4">
                                <button class="btn btn-sm">Decline</button>
                                <button class="btn btn-sm btn-primary">Accept</button>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <hr class="border-base-content/20 -mx-3 my-1.5" />
                        </li>
                        <li>
                          <div class="flex w-full gap-3 py-3">
                            <div class="avatar">
                              <div class="size-10 rounded-full">
                                <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-4.png" alt="avatar" />
                              </div>
                            </div>
                            <div class="flex-1">
                              <h6 class="text-base-content mb-0.5 line-clamp-1 font-medium">Jason attached the file</h6>
                              <div class="mb-3 flex items-center gap-2.5">
                                <p class="text-base-content/50 text-sm">6 hours ago</p>
                                <span class="bg-neutral/20 size-1.5 rounded-full"></span>
                                <p class="text-base-content/50 text-sm">Attached files</p>
                              </div>
                              <div class="flex items-center gap-2 py-1">
                                <span class="icon-[componentx--link] size-4"></span>
                                <p class="link link-hover">Work examples.com</p>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div id="tabs-basic-2" class="hidden" role="tabpanel" aria-labelledby="tabs-basic-item-2">
                      <ul class="space-y-0.5">
                        <li>
                          <div class="flex w-full items-center gap-3 py-3">
                            <div class="avatar">
                              <div class="w-10 rounded-full">
                                <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-5.png" alt="avatar" />
                              </div>
                            </div>
                            <div class="flex-1">
                              <h6 class="text-base-content mb-0.5 font-medium">New Update Available</h6>
                              <div class="flex items-center gap-2.5">
                                <p class="text-base-content/50 text-sm">1 hour ago</p>
                                <span class="bg-neutral/20 size-1.5 rounded-full"></span>
                                <p class="text-base-content/50 text-sm">Click to update</p>
                              </div>
                            </div>
                            <div class="flex flex-col items-center gap-3">
                              <button class="btn btn-xs btn-circle btn-text">
                                <span class="icon-[componentx--x] text-base-content/80 size-4"></span>
                              </button>
                              <div class="bg-primary size-1.5 rounded-full"></div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <hr class="border-base-content/20 -mx-3 my-1.5" />
                        </li>
                        <li>
                          <div class="flex w-full items-center gap-3 py-3">
                            <div class="avatar">
                              <div class="w-10 rounded-full">
                                <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-6.png" alt="avatar" />
                              </div>
                            </div>
                            <div class="flex-1">
                              <h6 class="text-base-content mb-0.5 font-medium">Privacy Policy Update</h6>
                              <div class="flex items-center gap-2.5">
                                <p class="text-base-content/50 text-sm">3 hours ago</p>
                                <span class="bg-neutral/20 size-1.5 rounded-full"></span>
                                <p class="text-base-content/50 text-sm">Review terms</p>
                              </div>
                            </div>
                            <div class="flex flex-col items-center gap-3">
                              <button class="btn btn-xs btn-circle btn-text">
                                <span class="icon-[componentx--x] text-base-content/80 size-4"></span>
                              </button>
                              <div class="bg-primary size-1.5 rounded-full"></div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <hr class="border-base-content/20 -mx-3 my-1.5" />
                        </li>
                        <li>
                          <div class="flex w-full items-center gap-3 py-3">
                            <div class="avatar">
                              <div class="w-10 rounded-full">
                                <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-7.png" alt="avatar" />
                              </div>
                            </div>
                            <div class="flex-1">
                              <h6 class="text-base-content mb-0.5 font-medium">Account Security Alert</h6>
                              <div class="flex items-center gap-2.5">
                                <p class="text-base-content/50 text-sm">5 hours ago</p>
                                <span class="bg-neutral/20 size-1.5 rounded-full"></span>
                                <p class="text-base-content/50 text-sm">Check activity</p>
                              </div>
                            </div>
                            <div class="flex flex-col items-center gap-3">
                              <button class="btn btn-xs btn-circle btn-text">
                                <span class="icon-[componentx--x] text-base-content/80 size-4"></span>
                              </button>
                              <div class="bg-primary size-1.5 rounded-full"></div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Profile Dropdown -->
            <div class="dropdown relative inline-flex [--offset:21]">
              <button
                id="profile-dropdown"
                type="button"
                class="dropdown-toggle avatar"
                aria-haspopup="menu"
                aria-expanded="false"
                aria-label="Dropdown"
              >
                <span class="rounded-field size-9.5">
                  <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-6.png" alt="User Avatar" />
                </span>
              </button>
              <ul
                class="dropdown-menu dropdown-open:opacity-100 hidden w-full max-w-75 space-y-0.5"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="profile-dropdown"
              >
                <li class="dropdown-header mb-1 gap-4 px-5 pt-4.5 pb-3.5">
                  <div class="avatar avatar-online-top">
                    <div class="w-10 rounded-full">
                      <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-6.png" alt="avatar" />
                    </div>
                  </div>
                  <div>
                    <h6 class="text-base-content mb-0.5 font-semibold">Mitchell Johnson</h6>
                    <p class="text-base-content/80 font-medium">Influencer</p>
                  </div>
                </li>
                <li>
                  <a class="dropdown-item px-3" href="#">
                    <span class="icon-[componentx--user] size-5"></span>
                    My account
                  </a>
                </li>
                <li>
                  <a class="dropdown-item px-3" href="#">
                    <span class="icon-[componentx--settings] size-5"></span>
                    Setting
                  </a>
                </li>
                <li>
                  <a class="dropdown-item px-3" href="#">
                    <span class="icon-[componentx--credit-card] size-5"></span>
                    Billing
                  </a>
                </li>
                <li>
                  <hr class="border-base-content/20 -mx-2 my-1" />
                </li>
                <li>
                  <a class="dropdown-item px-3" href="#">
                    <span class="icon-[componentx--users] size-5"></span>
                    Manage team
                  </a>
                </li>
                <li>
                  <a class="dropdown-item px-3" href="#">
                    <span class="icon-[componentx--edit] size-5"></span>
                    Customisation
                  </a>
                </li>
                <li class="mb-1">
                  <a class="dropdown-item px-3" href="#">
                    <span class="icon-[componentx--circle-plus] size-5"></span>
                    Add team account
                  </a>
                </li>
                <li class="dropdown-footer p-2 pt-1">
                  <a class="btn btn-text btn-error btn-block h-11 justify-start px-3 font-normal" href="#">
                    <span class="icon-[componentx--logout] size-5"></span>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>

    <!-- Search Dropdown Content  -->
    <div
      id="search-modal"
      class="overlay modal overlay-open:opacity-100 overlay-open:duration-300 modal-middle hidden"
      role="dialog"
      tabindex="-1"
    >
      <div class="modal-dialog w-full max-w-145">
        <div class="modal-content overflow-auto shadow-none">
          <!-- SearchBox -->
          <div class="modal-header border-base-content/20 border-b-1 px-3 py-2">
            <div class="input no-focus border-0 px-0">
              <span class="icon-[componentx--search] text-base-content/80 my-auto me-2 size-5 shrink-0"></span>
              <input type="search" class="grow" placeholder="Search here..." id="kbdInput" />
              <label class="sr-only" for="kbdInput">Search</label>
            </div>
          </div>

          <nav class="tabs tabs-bordered py-2" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
            <button
              type="button"
              class="tab active-tab:tab-active active w-full font-medium"
              id="search-tabs-item-1"
              data-tab="#search-tabs-1"
              aria-controls="search-tabs-1"
              role="tab"
              aria-selected="true"
            >
              All
            </button>
            <button
              type="button"
              class="tab active-tab:tab-active w-full font-medium"
              id="search-tabs-item-2"
              data-tab="#search-tabs-2"
              aria-controls="search-tabs-2"
              role="tab"
              aria-selected="false"
            >
              Pages
            </button>
            <button
              type="button"
              class="tab active-tab:tab-active w-full font-medium"
              id="search-tabs-item-3"
              data-tab="#search-tabs-3"
              aria-controls="search-tabs-3"
              role="tab"
              aria-selected="false"
            >
              Integration
            </button>
            <button
              type="button"
              class="tab active-tab:tab-active w-full font-medium"
              id="search-tabs-item-4"
              data-tab="#search-tabs-4"
              aria-controls="search-tabs-4"
              role="tab"
              aria-selected="false"
            >
              Users
            </button>
          </nav>
          <!-- SearchBox Modal Body -->
          <div class="max-h-90 overflow-y-auto lg:max-h-121">
            <!-- SearchBox All Modal Body -->
            <div id="search-tabs-1" role="tabpanel" aria-labelledby="search-tabs-item-1">
              <!-- Pages Section -->
              <div class="modal-body">
                <div class="text-base-content/50 mb-1.5 text-sm uppercase">Pages</div>
                <ul class="space-y-1.5">
                  <li>
                    <a class="hover:bg-base-200 rounded-field flex items-center gap-2 px-1 py-1.5" href="#">
                      <span class="icon-[componentx--users] size-6 shrink-0"></span>
                      <h6 class="font-medium">Marketing UI Page</h6>
                    </a>
                  </li>
                  <li>
                    <a class="hover:bg-base-200 rounded-field flex items-center gap-2 px-1 py-1.5" href="#">
                      <span class="icon-[componentx--shopping-cart] size-6 shrink-0"></span>
                      <h6 class="font-medium">e-commerce UI Page</h6>
                    </a>
                  </li>
                  <li>
                    <a class="hover:bg-base-200 rounded-field flex items-center gap-2 px-1 py-1.5" href="#">
                      <span class="icon-[componentx--device-desktop-analytics] size-6 shrink-0"></span>
                      <h6 class="font-medium">Dashboard UI Page</h6>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="divider"></div>
              <!-- Interaction Section -->
              <div class="modal-body">
                <div class="text-base-content/50 mb-1.5 text-sm uppercase">Interaction</div>
                <ul class="space-y-1.5">
                  <li>
                    <a
                      class="hover:bg-base-200 rounded-field flex justify-between gap-2 px-1 py-1.5 max-sm:flex-col sm:items-center"
                      href="#"
                    >
                      <div class="flex items-center gap-3">
                        <div class="avatar avatar-placeholder">
                          <div class="bg-base-200 size-9.5 rounded-full">
                            <img
                              src="https://cdn.flyonui.com/fy-assets/blocks/dashboard-app/dashboard-modals/jira.png"
                              alt="jira"
                              class="size-6"
                            />
                          </div>
                        </div>
                        <div>
                          <h6 class="font-medium">Jira</h6>
                          <p class="text-base-content/50 text-sm">Project management</p>
                        </div>
                      </div>
                      <div class="avatar-group -space-x-3">
                        <div class="avatar">
                          <div class="size-8">
                            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-10.png" alt="avatar" />
                          </div>
                        </div>
                        <div class="avatar">
                          <div class="size-8">
                            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-12.png" alt="avatar" />
                          </div>
                        </div>
                        <div class="avatar">
                          <div class="size-8">
                            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-6.png" alt="avatar" />
                          </div>
                        </div>
                        <div class="avatar avatar-placeholder">
                          <div class="bg-neutral text-neutral-content size-8">
                            <span>+3</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      class="hover:bg-base-200 rounded-field flex justify-between gap-2 px-1 py-1.5 max-sm:flex-col sm:items-center"
                      href="#"
                    >
                      <div class="flex items-center gap-3">
                        <div class="avatar avatar-placeholder">
                          <div class="bg-base-200 size-9.5 rounded-full">
                            <img
                              src="https://cdn.flyonui.com/fy-assets/blocks/dashboard-app/dashboard-modals/inferno.png"
                              alt="inferno"
                              class="size-6"
                            />
                          </div>
                        </div>
                        <div>
                          <h6 class="font-medium">Inferno</h6>
                          <p class="text-base-content/50 text-sm">Real-time photo sharing app</p>
                        </div>
                      </div>
                      <div class="avatar-group -space-x-3">
                        <div class="avatar">
                          <div class="size-8">
                            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-5.png" alt="avatar" />
                          </div>
                        </div>
                        <div class="avatar">
                          <div class="size-8">
                            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-13.png" alt="avatar" />
                          </div>
                        </div>
                        <div class="avatar">
                          <div class="size-8">
                            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-7.png" alt="avatar" />
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="divider"></div>
              <!-- User Section -->
              <div class="modal-body">
                <div class="text-base-content/50 mb-1.5 text-sm uppercase">User</div>
                <ul class="space-y-1.5">
                  <li>
                    <div class="hover:bg-base-200 rounded-field flex items-center justify-between gap-2 px-1 py-1.5">
                      <a href="#" class="flex grow items-center gap-3">
                        <div class="avatar">
                          <div class="size-9.5 rounded-full">
                            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-7.png" alt="Amelle Laurent" />
                          </div>
                        </div>
                        <div>
                          <h6 class="font-medium">Amelle Laurent</h6>
                          <p class="text-base-content/50 text-sm">Amelle@hotmail.com</p>
                        </div>
                      </a>
                      <div class="flex items-center gap-2 max-sm:hidden">
                        <span class="badge badge-success badge-soft rounded-full">In office</span>
                        <div class="dropdown relative inline-flex [--placement:bottom-end]">
                          <button
                            id="user-dropdown1"
                            type="button"
                            class="dropdown-toggle btn btn-text text-base-content btn-circle btn-xs"
                            aria-haspopup="menu"
                            aria-expanded="false"
                            aria-label="Dropdown"
                          >
                            <span class="icon-[componentx--dots-vertical] size-4.5"></span>
                          </button>
                          <ul
                            class="dropdown-menu dropdown-open:opacity-100 menu-sm hidden p-1"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="user-dropdown1"
                          >
                            <li><button class="dropdown-item px-2" type="button">View More</button></li>
                            <li><button class="dropdown-item px-2" type="button">Delete</button></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="hover:bg-base-200 rounded-field flex items-center justify-between gap-2 px-1 py-1.5">
                      <a href="#" class="flex grow items-center gap-3">
                        <div class="avatar">
                          <div class="size-9.5 rounded-full">
                            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-3.png" alt="Maria Donin" />
                          </div>
                        </div>
                        <div>
                          <h6 class="font-medium">Maria Donin</h6>
                          <p class="text-base-content/50 text-sm">Maria@hotmail.com</p>
                        </div>
                      </a>
                      <div class="flex items-center gap-2 max-sm:hidden">
                        <span class="badge badge-error badge-soft rounded-full">On leave</span>
                        <div class="dropdown relative inline-flex [--placement:bottom-end]">
                          <button
                            id="user-dropdown2"
                            type="button"
                            class="dropdown-toggle btn btn-text text-base-content btn-circle btn-xs"
                            aria-haspopup="menu"
                            aria-expanded="false"
                            aria-label="Dropdown"
                          >
                            <span class="icon-[componentx--dots-vertical] size-4.5"></span>
                          </button>
                          <ul
                            class="dropdown-menu dropdown-open:opacity-100 menu-sm hidden p-1"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="user-dropdown2"
                          >
                            <li><button class="dropdown-item px-2" type="button">View More</button></li>
                            <li><button class="dropdown-item px-2" type="button">Delete</button></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <!-- SearchBox Pages Modal Body -->
            <div id="search-tabs-2" class="hidden" role="tabpanel" aria-labelledby="search-tabs-item-2">
              <div class="modal-body">
                <ul class="space-y-1.5">
                  <li>
                    <a class="hover:bg-base-200 rounded-field flex items-center gap-2 px-1 py-1.5" href="#">
                      <span class="icon-[componentx--users] size-6 shrink-0"></span>
                      <h6 class="font-medium">Marketing UI Page</h6>
                    </a>
                  </li>
                  <li>
                    <a class="hover:bg-base-200 rounded-field flex items-center gap-2 px-1 py-1.5" href="#">
                      <span class="icon-[componentx--shopping-cart] size-6 shrink-0"></span>
                      <h6 class="font-medium">e-commerce UI Page</h6>
                    </a>
                  </li>
                  <li>
                    <a class="hover:bg-base-200 rounded-field flex items-center gap-2 px-1 py-1.5" href="#">
                      <span class="icon-[componentx--device-desktop-analytics] size-6 shrink-0"></span>
                      <h6 class="font-medium">Dashboard UI Page</h6>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <!-- SearchBox Integration Modal Body -->
            <div id="search-tabs-3" class="hidden" role="tabpanel" aria-labelledby="search-tabs-item-3">
              <div class="modal-body">
                <ul class="space-y-1.5">
                  <li>
                    <a
                      class="hover:bg-base-200 rounded-field flex justify-between gap-2 px-1 py-1.5 max-sm:flex-col sm:items-center"
                      href="#"
                    >
                      <div class="flex items-center gap-3">
                        <div class="avatar avatar-placeholder">
                          <div class="bg-base-200 size-9.5 rounded-full">
                            <img
                              src="https://cdn.flyonui.com/fy-assets/blocks/dashboard-app/dashboard-modals/jira.png"
                              alt="jira"
                              class="size-6"
                            />
                          </div>
                        </div>
                        <div>
                          <h6 class="font-medium">Jira</h6>
                          <p class="text-base-content/50 text-sm">Project management</p>
                        </div>
                      </div>
                      <div class="avatar-group -space-x-3">
                        <div class="avatar">
                          <div class="size-8">
                            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-10.png" alt="avatar" />
                          </div>
                        </div>
                        <div class="avatar">
                          <div class="size-8">
                            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-12.png" alt="avatar" />
                          </div>
                        </div>
                        <div class="avatar">
                          <div class="size-8">
                            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-6.png" alt="avatar" />
                          </div>
                        </div>
                        <div class="avatar avatar-placeholder">
                          <div class="bg-neutral text-neutral-content size-8">
                            <span>+3</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      class="hover:bg-base-200 rounded-field flex justify-between gap-2 px-1 py-1.5 max-sm:flex-col sm:items-center"
                      href="#"
                    >
                      <div class="flex items-center gap-3">
                        <div class="avatar avatar-placeholder">
                          <div class="bg-base-200 size-9.5 rounded-full">
                            <img
                              src="https://cdn.flyonui.com/fy-assets/blocks/dashboard-app/dashboard-modals/inferno.png"
                              alt="inferno"
                              class="size-6"
                            />
                          </div>
                        </div>
                        <div>
                          <h6 class="font-medium">Inferno</h6>
                          <p class="text-base-content/50 text-sm">Real-time photo sharing app</p>
                        </div>
                      </div>
                      <div class="avatar-group -space-x-3">
                        <div class="avatar">
                          <div class="size-8">
                            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-5.png" alt="avatar" />
                          </div>
                        </div>
                        <div class="avatar">
                          <div class="size-8">
                            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-13.png" alt="avatar" />
                          </div>
                        </div>
                        <div class="avatar">
                          <div class="size-8">
                            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-7.png" alt="avatar" />
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <!-- SearchBox Users Modal Body -->
            <div id="search-tabs-4" class="hidden" role="tabpanel" aria-labelledby="search-tabs-item-4">
              <div class="modal-body">
                <ul class="space-y-1.5">
                  <li>
                    <div class="hover:bg-base-200 rounded-field flex items-center justify-between gap-2 px-1 py-1.5">
                      <a href="#" class="flex items-center gap-3">
                        <div class="avatar">
                          <div class="size-9.5 rounded-full">
                            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-7.png" alt="Amelle Laurent" />
                          </div>
                        </div>
                        <div>
                          <h6 class="font-medium">Amelle Laurent</h6>
                          <p class="text-base-content/50 text-sm">Amelle@hotmail.com</p>
                        </div>
                      </a>
                      <div class="flex items-center gap-2">
                        <span class="badge badge-success badge-soft rounded-full">In office</span>
                        <div class="dropdown relative inline-flex [--placement:bottom-end] max-sm:hidden">
                          <button
                            id="user-dropdown3"
                            type="button"
                            class="dropdown-toggle btn btn-text text-base-content btn-circle btn-xs"
                            aria-haspopup="menu"
                            aria-expanded="false"
                            aria-label="Dropdown"
                          >
                            <span class="icon-[componentx--dots-vertical] size-4.5"></span>
                          </button>
                          <ul
                            class="dropdown-menu dropdown-open:opacity-100 menu-sm hidden p-1"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="user-dropdown3"
                          >
                            <li><button class="dropdown-item px-2">View More</button></li>
                            <li><button class="dropdown-item px-2">Delete</button></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="hover:bg-base-200 rounded-field flex items-center justify-between gap-2 px-1 py-1.5">
                      <a href="#" class="flex items-center gap-3">
                        <div class="avatar">
                          <div class="size-9.5 rounded-full">
                            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-3.png" alt="Maria Donin" />
                          </div>
                        </div>
                        <div>
                          <h6 class="font-medium">Maria Donin</h6>
                          <p class="text-base-content/50 text-sm">Maria@hotmail.com</p>
                        </div>
                      </a>
                      <div class="flex items-center gap-2">
                        <span class="badge badge-error badge-soft rounded-full">On leave</span>
                        <div class="dropdown relative inline-flex [--placement:bottom-end] max-sm:hidden">
                          <button
                            id="user-dropdown4"
                            type="button"
                            class="dropdown-toggle btn btn-text text-base-content btn-circle btn-xs"
                            aria-haspopup="menu"
                            aria-expanded="false"
                            aria-label="Dropdown"
                          >
                            <span class="icon-[componentx--dots-vertical] size-4.5"></span>
                          </button>
                          <ul
                            class="dropdown-menu dropdown-open:opacity-100 menu-sm hidden p-1"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="user-dropdown4"
                          >
                            <li><button class="dropdown-item px-2" type="button">View More</button></li>
                            <li><button class="dropdown-item px-2" type="button">Delete</button></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- Footer Commands -->
          <div class="modal-footer border-base-content/20 text-base-content/50 gap-4 border-t-1 py-4 max-sm:hidden">
            <div class="flex grow items-center gap-2 text-sm">
              <kbd class="kbd kbd-sm">esc</kbd>
              <span>To close</span>
            </div>
            <div class="flex items-center gap-2 text-sm">
              <kbd class="kbd kbd-sm p-0"><span class="icon-[componentx--arrow-back] size-4"></span></kbd>
              <span>To Select</span>
            </div>
            <div class="flex items-center gap-2 text-sm">
              <kbd class="kbd kbd-sm p-0"><span class="icon-[componentx--arrow-up] size-4"></span></kbd>
              <kbd class="kbd kbd-sm p-0"><span class="icon-[componentx--arrow-down] size-4"></span></kbd>
              <span>To Navigate</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Activity Drawer Content  -->
    <div
      id="activity-drawer"
      class="overlay overlay-open:translate-x-0 drawer drawer-end hidden sm:max-w-104"
      role="dialog"
      tabindex="-1"
    >
      <div class="drawer-header border-base-content/20 border-b p-4">
        <h3 class="drawer-title text-base font-semibold">Activity</h3>
        <button type="button" class="btn btn-text btn-circle btn-xs" aria-label="Close" data-overlay="#activity-drawer">
          <span class="icon-[componentx--x] size-4"></span>
        </button>
      </div>
      <div class="drawer-body p-0">
        <ul class="space-y-0">
          <!-- Joe Lincoln Activity -->
          <li class="flex items-start gap-4 p-4">
            <div class="avatar">
              <div class="size-8 rounded-full">
                <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" alt="avatar" />
              </div>
            </div>
            <div class="flex-1">
              <div class="mb-1">
                <span class="text-base-content font-semibold">joe Lincoln</span>
                <span class="text-base-content text-sm">mentioned you in last trends topic</span>
              </div>
              <p class="text-base-content/50 mb-3 text-sm">18 Mins ago</p>

              <div class="bg-base-200 rounded-box border-base-content/20 border px-4 py-2.5">
                <p class="text-base-content mb-4 text-sm font-medium">
                  @Flyonui For an expert opinion, check out what Mike has to say on this topic!
                </p>
                <div class="input input-sm">
                  <input type="text" class="grow" placeholder="Reply" id="flyonuiReply" />
                  <span class="icon-[componentx--photo] text-base-content/80 my-auto ms-2 size-4 shrink-0"></span>
                </div>
              </div>
            </div>
          </li>

          <li><div class="divider"></div></li>

          <!-- Sofia -->
          <li class="flex items-start gap-4 p-4">
            <div class="avatar">
              <div class="size-8 rounded-full">
                <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-2.png" alt="Sofia" />
              </div>
            </div>
            <div class="flex-1">
              <div class="mb-1">
                <span class="text-base-content font-semibold">Sofia</span>
                <span class="text-base-content text-sm">requested feedback on her design.</span>
              </div>
              <p class="text-base-content/50 text-sm">1 Hour ago</p>
            </div>
          </li>

          <li><div class="divider"></div></li>

          <!-- Jane Perez File Review -->
          <li class="flex items-start gap-4 p-4">
            <div class="avatar">
              <div class="size-8 rounded-full">
                <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-3.png" alt="Jane Perez" />
              </div>
            </div>
            <div class="flex-1">
              <div class="mb-1">
                <span class="text-base-content font-semibold">Jane Perez</span>
                <span class="text-base-content text-sm">invites you to review a file.</span>
              </div>
              <p class="text-base-content/50 mb-2.5 text-sm">3 Hours ago</p>
              <span class="badge badge-soft badge-lg">
                <span class="icon-[componentx--file-type-pdf] text-error"></span>
                invoices.pdf
              </span>
            </div>
          </li>

          <li><div class="divider"></div></li>

          <!-- Liam -->
          <li class="flex items-start gap-4 p-4">
            <div class="avatar">
              <div class="size-8 rounded-full">
                <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-11.png" alt="Liam" />
              </div>
            </div>
            <div class="flex-1">
              <div class="mb-1">
                <span class="text-base-content font-semibold">Liam</span>
                <span class="text-base-content text-sm">has shared a project update.</span>
              </div>
              <p class="text-base-content/50 text-sm">5 Hours ago</p>
            </div>
          </li>

          <li><div class="divider"></div></li>

          <!-- Tyler Hero Design Project -->
          <li class="flex items-start gap-4 p-4">
            <div class="avatar">
              <div class="size-8 rounded-full">
                <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-9.png" alt="Tyler Hero" />
              </div>
            </div>
            <div class="flex-1">
              <div class="mb-1">
                <span class="text-base-content font-semibold">Tyler Hero</span>
                <span class="text-base-content text-sm">wants to view your design project</span>
              </div>
              <p class="text-base-content/50 mb-3 text-sm">18 Mins ago</p>

              <div class="bg-base-200 rounded-box border-base-content/20 flex items-center gap-4 border px-4 py-2.5">
                <div class="avatar avatar-placeholder">
                  <div class="bg-base-100 text-primary rounded-box size-8 p-2">
                    <img
                      src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/brand-logo/figma-icon.png"
                      alt="avatar"
                    />
                  </div>
                </div>
                <span class="text-sm font-medium">Launcher-UIkit.fig</span>
              </div>
            </div>
          </li>

          <li><div class="divider"></div></li>

          <!-- Denial Invite -->
          <li class="flex items-start gap-4 p-4">
            <div class="avatar">
              <div class="size-8 rounded-full">
                <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-4.png" alt="Denial" />
              </div>
            </div>
            <div class="flex-1">
              <div class="mb-1">
                <span class="text-base-content font-semibold">Denial</span>
                <span class="text-base-content text-sm">Invite from invite link</span>
              </div>
              <p class="text-base-content/50 text-sm">3 Hours ago</p>
            </div>
          </li>

          <li><div class="divider"></div></li>

          <!-- Leslie Alexander Tags -->
          <li class="flex items-start gap-4 p-4">
            <div class="avatar">
              <div class="size-8 rounded-full">
                <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-5.png" alt="Leslie Alexander" />
              </div>
            </div>
            <div class="flex-1">
              <div class="mb-1">
                <span class="text-base-content font-semibold">Leslie Alexander</span>
                <span class="text-base-content text-sm">new tags to Web Redesign</span>
              </div>
              <p class="text-base-content/50 mb-3 text-sm">18 Mins ago</p>

              <div class="flex gap-2.5">
                <span class="badge badge-soft badge-primary badge-sm">Client - Request</span>
                <span class="badge badge-soft badge-warning badge-sm">Figma</span>
                <span class="badge badge-soft badge-info badge-sm">Redesign</span>
              </div>
            </div>
          </li>

          <li><div class="divider"></div></li>

          <!-- Miya File Review -->
          <li class="flex items-start gap-4 p-4">
            <div class="avatar">
              <div class="size-8 rounded-full">
                <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-6.png" alt="Miya" />
              </div>
            </div>
            <div class="flex-1">
              <div class="mb-1">
                <span class="text-base-content font-semibold">Miya</span>
                <span class="text-base-content text-sm">invites you to review a file.</span>
              </div>
              <p class="text-base-content/50 text-sm">10 Hours ago</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- ---------- END HEADER ---------- -->

    <!-- ---------- MAIN SIDEBAR ---------- -->
    <aside
      id="layout-toggle"
      class="overlay overlay-open:translate-x-0 drawer drawer-start inset-y-0 start-0 hidden h-full [--auto-close:lg] sm:w-75 lg:z-50 lg:block lg:translate-x-0 lg:shadow-none"
      aria-label="Sidebar"
      tabindex="-1"
    >
      <div class="drawer-body border-base-content/20 h-full border-e p-0">
        <div class="flex h-full max-h-full flex-col">
          <button
            type="button"
            class="btn btn-text btn-circle btn-sm absolute end-3 top-3 lg:hidden"
            aria-label="Close"
            data-overlay="#layout-toggle"
          >
            <span class="icon-[componentx--x] size-5"></span>
          </button>
          <div class="text-base-content border-base-content/20 flex flex-col items-center gap-4 border-b px-4 py-6">
            <div class="avatar">
              <div class="size-17 rounded-full">
                <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-6.png" alt="avatar" />
              </div>
            </div>
            <div class="text-center">
              <h3 class="text-base-content text-lg font-semibold">Mitchell Johnson</h3>
              <p class="text-base-content/80">flyonui@mitchell</p>
            </div>
            <div class="flex gap-3">
              <a href="#" class="link size-4.5" aria-label="Facebook Link">
                <span class="icon-[componentx--brand-facebook] size-4.5"></span>
              </a>
              <a href="#" class="link size-4.5" aria-label="Instagram Link">
                <span class="icon-[componentx--brand-instagram] size-4.5"></span>
              </a>
              <a href="#" class="link size-4.5" aria-label="X Link">
                <span class="icon-[componentx--brand-twitter] size-4.5"></span>
              </a>
              <a href="#" class="link size-4.5" aria-label="Github Link">
                <span class="icon-[componentx--brand-github] size-4.5"></span>
              </a>
            </div>
          </div>
          <div class="h-full overflow-y-auto">
            <ul class="menu menu-sm gap-1 px-4">
              <!-- Dashboard -->
              <li class="mt-2.5">
                <a href="#" class="px-2">
                  <span class="icon-[componentx--dashboard] size-4.5"></span>
                  <span class="grow">Dashboard</span>
                  <span class="badge badge-sm badge-primary rounded-full">2</span>
                </a>
              </li>
              <li class="text-base-content/50 mt-2.5 p-2 text-xs uppercase">Pages</li>
              <!-- Content Performance -->
              <li>
                <a href="#" class="px-2">
                  <span class="icon-[componentx--file-invoice] size-4.5"></span>
                  Content Performance
                </a>
              </li>
              <!-- Audience Insights -->
              <li>
                <a href="#" class="px-2">
                  <span class="icon-[componentx--users] size-4.5"></span>
                  Audience Insights
                </a>
              </li>
              <!-- Engagement Metrics -->
              <li>
                <a href="#" class="menu-active px-2">
                  <span class="icon-[componentx--chart-pie-2] size-4.5"></span>
                  Engagement Metrics
                </a>
              </li>
              <!-- Hashtag Performance -->
              <li>
                <a href="#" class="px-2">
                  <span class="icon-[componentx--hash] size-4.5"></span>
                  <span class="grow">Hashtag Performance</span>
                  <span class="badge badge-sm badge-success rounded-full">3</span>
                </a>
              </li>
              <!-- Competitor Analysis -->
              <li>
                <a href="#" class="px-2">
                  <span class="icon-[componentx--arrows-left-right] size-4.5"></span>
                  Competitor Analysis
                </a>
              </li>
              <!-- Campaign Tracking -->
              <li>
                <a href="#" class="px-2">
                  <span class="icon-[componentx--clock] size-4.5"></span>
                  Campaign Tracking
                </a>
              </li>
              <!-- Sentiment Analysis -->
              <li>
                <a href="#" class="px-2">
                  <span class="icon-[componentx--file-digit] size-4.5"></span>
                  Sentiment Analysis
                </a>
              </li>
              <!-- Influencer -->
              <li>
                <a href="#" class="px-2">
                  <span class="icon-[componentx--crown] size-4.5"></span>
                  Influencer
                </a>
              </li>

              <li class="text-base-content/50 mt-2.5 p-2 text-xs uppercase">Supporting Features</li>
              <!-- Real-Time Monitoring -->
              <li>
                <a href="#" class="px-2">
                  <span class="icon-[componentx--heart-rate-monitor] size-4.5"></span>
                  Real-Time Monitoring
                </a>
              </li>
              <!-- Scheduled Posts & Calendar -->
              <li>
                <a href="#" class="px-2">
                  <span class="icon-[componentx--calendar-stats] size-4.5"></span>
                  Scheduled Posts & Calendar
                </a>
              </li>
              <!-- Reports & Export -->
              <li>
                <a href="#" class="px-2">
                  <span class="icon-[componentx--arrow-back-up] size-4.5"></span>
                  Reports & Export
                </a>
              </li>
              <!-- Settings & Integrations -->
              <li>
                <a href="#" class="px-2">
                  <span class="icon-[componentx--settings] size-4.5"></span>
                  Settings & Integrations
                </a>
              </li>
              <!-- Management -->
              <li>
                <a href="#" class="px-2">
                  <span class="icon-[componentx--users] size-4.5"></span>
                  Management
                </a>
              </li>
            </ul>
          </div>
          <div class="mt-auto flex gap-3 p-4">
            <span class="text-primary">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#a)">
                  <mask
                    id="b"
                    style="mask-type:luminance"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="32"
                    height="32"
                  >
                    <path d="M24 0H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8V8a8 8 0 0 0-8-8" fill="#fff" />
                  </mask>
                  <g mask="url(#b)">
                    <path
                      d="M24 0H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8V8a8 8 0 0 0-8-8"
                      fill="currentColor"
                    />
                    <path d="M24 0H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8V8a8 8 0 0 0-8-8" fill="url(#c)" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="m22.258 20.467-5.55-6.839a1 1 0 0 0-1.568.02l-5.023 6.521a1 1 0 0 1-.793.39H7.17a1 1 0 0 1-.78-1.626l8.748-10.919a1 1 0 0 1 1.556-.006l9.125 11.198a1 1 0 0 1-.775 1.631h-2.01a1 1 0 0 1-.776-.37m-5.59-1.484 2.59 2.953c.567.646.108 1.659-.751 1.659h-4.922a1 1 0 0 1-.785-1.62l2.331-2.953a1 1 0 0 1 1.537-.04"
                      fill="url(#d)"
                    />
                  </g>
                  <path
                    d="M24 .666H8A7.333 7.333 0 0 0 .667 8v16A7.333 7.333 0 0 0 8 31.333h16A7.333 7.333 0 0 0 31.334 24V8A7.333 7.333 0 0 0 24 .666Z"
                    stroke="url(#e)"
                    stroke-width="2"
                  />
                </g>
                <defs>
                  <linearGradient id="c" x1="29" y1="2" x2="3" y2="29.5" gradientUnits="userSpaceOnUse">
                    <stop stop-opacity="0" />
                    <stop offset="1" stop-opacity=".38" />
                  </linearGradient>
                  <linearGradient id="d" x1="16.107" y1="7.64" x2="16.107" y2="23.595" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#fff" />
                    <stop offset="1" stop-color="#fff" stop-opacity=".6" />
                  </linearGradient>
                  <linearGradient id="e" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#fff" stop-opacity=".28" />
                    <stop offset="1" stop-color="#fff" stop-opacity=".04" />
                  </linearGradient>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h32v32H0z" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <div>
              <span class="text-base-content block text-xl font-bold">Social Media</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
    <!-- ---------- END MAIN SIDEBAR ---------- -->

    <div class="flex grow flex-col lg:ps-75">
      <!-- ---------- MAIN CONTENT ---------- -->
      <main class="mx-auto w-full max-w-7xl flex-1 space-y-6 p-6">
        <!-- Stats -->
        <div class="shadow-base-300/10 rounded-box bg-base-100 flex gap-4 p-6 shadow-md max-xl:flex-col">
          <div class="flex flex-1 gap-4 max-sm:flex-col">
            <div class="flex flex-1 flex-col gap-4">
              <div class="text-base-content flex items-center gap-2">
                <div class="avatar avatar-placeholder">
                  <div class="bg-base-200 rounded-field size-9">
                    <span class="icon-[componentx--eye] size-5"></span>
                  </div>
                </div>
                <h5 class="text-lg font-medium">Pageviews</h5>
              </div>
              <div>
                <div class="text-base-content text-xl font-semibold">17,356</div>
                <div class="flex items-center gap-2 text-sm font-semibold">
                  <span class="text-success inline-flex items-center gap-1">
                    <span class="icon-[componentx--arrow-up] size-4"></span>
                    25.6%
                  </span>
                  <span class="text-base-content/50 font-medium">EPC: 308.20</span>
                </div>
              </div>
            </div>
            <div class="divider sm:divider-horizontal"></div>
            <div class="flex flex-1 flex-col gap-4">
              <div class="text-base-content flex items-center gap-2">
                <div class="avatar avatar-placeholder">
                  <div class="bg-base-200 rounded-field size-9">
                    <span class="icon-[componentx--mouse] size-6"></span>
                  </div>
                </div>
                <h5 class="text-lg font-medium">Click</h5>
              </div>
              <div>
                <div class="text-base-content text-xl font-semibold">2,784</div>
                <div class="flex items-center gap-2 text-sm font-semibold">
                  <span class="text-error inline-flex items-center gap-1">
                    <span class="icon-[componentx--arrow-down] size-4"></span>
                    25.6%
                  </span>
                  <span class="text-base-content/50 font-medium">Related Value: 77,359</span>
                </div>
              </div>
            </div>
          </div>
          <div class="divider xl:divider-horizontal"></div>
          <div class="flex flex-1 gap-4 max-sm:flex-col">
            <div class="flex flex-1 flex-col gap-4">
              <div class="text-base-content flex items-center gap-2">
                <div class="avatar avatar-placeholder">
                  <div class="bg-base-200 rounded-field size-9">
                    <span class="icon-[componentx--chart-bar] size-6"></span>
                  </div>
                </div>
                <h5 class="text-lg font-medium">Commission</h5>
              </div>
              <div>
                <div class="text-base-content text-xl font-semibold">$1,658</div>
                <div class="flex items-center gap-2 text-sm font-semibold">
                  <span class="text-success inline-flex items-center gap-1">
                    <span class="icon-[componentx--arrow-up] size-4"></span>
                    25.6%
                  </span>
                  <span class="text-base-content/50 font-medium">Related Value: 77,359</span>
                </div>
              </div>
            </div>
            <div class="divider sm:divider-horizontal"></div>
            <div class="flex flex-1 flex-col gap-4">
              <div class="text-base-content flex items-center gap-2">
                <div class="avatar avatar-placeholder">
                  <div class="bg-base-200 rounded-field size-9">
                    <span class="icon-[componentx--currency-dollar] size-6"></span>
                  </div>
                </div>
                <h5 class="text-lg font-medium">Sales</h5>
              </div>
              <div>
                <div class="text-base-content text-xl font-semibold">$8,759</div>
                <div class="flex items-center gap-2 text-sm font-semibold">
                  <span class="text-success inline-flex items-center gap-1">
                    <span class="icon-[componentx--arrow-up] size-4"></span>
                    25.6%
                  </span>
                  <span class="text-base-content/50 font-medium">Related Value: 13.85</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="grid gap-6 xl:grid-cols-3">
          <div class="flex flex-col gap-6 md:flex-row xl:flex-col">
            <!-- Meeting Schedules -->
            <div class="card shadow-base-300/10 grow shadow-md">
              <div class="card-header flex items-center justify-between gap-2">
                <h4 class="card-title text-xl">Meeting Schedules</h4>
                <div class="dropdown relative inline-flex">
                  <button
                    id="dropdown-meeting-schedules"
                    type="button"
                    class="dropdown-toggle btn btn-text text-base-content/50 btn-circle btn-sm"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    aria-label="Dropdown"
                  >
                    <span class="icon-[componentx--dots-vertical] size-5.5"></span>
                  </button>
                  <ul
                    class="dropdown-menu dropdown-open:opacity-100 hidden"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="dropdown-meeting-schedules"
                  >
                    <li><a class="dropdown-item" href="#">Last 28 Days</a></li>
                    <li><a class="dropdown-item" href="#">Last Month</a></li>
                    <li><a class="dropdown-item" href="#">Last Year</a></li>
                  </ul>
                </div>
              </div>
              <div class="card-body">
                <ul class="flex h-full flex-col justify-between gap-6">
                  <li>
                    <div class="flex items-center gap-3">
                      <div class="avatar">
                        <div class="rounded-field size-10">
                          <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" alt="avatar" />
                        </div>
                      </div>

                      <div class="grow">
                        <h6 class="text-base-content mb-px font-medium">Call with woods</h6>
                        <div class="text-base-content/50 flex items-center gap-1 text-sm">
                          <span class="icon-[componentx--calendar] size-4.5"></span>
                          <span>1 Jul | 08:20-10:20</span>
                        </div>
                      </div>
                      <span class="badge badge-primary badge-soft">Business</span>
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center gap-3">
                      <div class="avatar">
                        <div class="rounded-field size-10">
                          <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-2.png" alt="avatar" />
                        </div>
                      </div>

                      <div class="grow">
                        <h6 class="text-base-content mb-px font-medium">Conference call</h6>
                        <div class="text-base-content/50 flex items-center gap-1 text-sm">
                          <span class="icon-[componentx--calendar] size-4.5"></span>
                          <span>22 Jul | 02:00-3:30</span>
                        </div>
                      </div>
                      <span class="badge badge-warning badge-soft">Dinner</span>
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center gap-3">
                      <div class="avatar">
                        <div class="rounded-field size-10">
                          <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-3.png" alt="avatar" />
                        </div>
                      </div>

                      <div class="grow">
                        <h6 class="text-base-content mb-px font-medium">Meeting with John</h6>
                        <div class="text-base-content/50 flex items-center gap-1 text-sm">
                          <span class="icon-[componentx--calendar] size-4.5"></span>
                          <span>22 Jul | 11:15-12:15</span>
                        </div>
                      </div>
                      <span class="badge badge-neutral badge-soft">Meetup</span>
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center gap-3">
                      <div class="avatar">
                        <div class="rounded-field size-10">
                          <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-4.png" alt="avatar" />
                        </div>
                      </div>

                      <div class="grow">
                        <h6 class="text-base-content mb-px font-medium">Meeting with Sara</h6>
                        <div class="text-base-content/50 flex items-center gap-1 text-sm">
                          <span class="icon-[componentx--calendar] size-4.5"></span>
                          <span>23 Jul | 07:30-08:30</span>
                        </div>
                      </div>
                      <span class="badge badge-error badge-soft">Dinner</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Students By Countries -->
            <div class="card shadow-base-300/10 shadow-md">
              <div class="card-header flex items-start justify-between gap-2">
                <div>
                  <h4 class="card-title text-lg">Student by Countries</h4>
                  <span class="text-base-content/50 text-sm">Monthly Sales Overview</span>
                </div>
                <div class="dropdown relative inline-flex">
                  <button
                    id="dropdown-students-by-countries"
                    type="button"
                    class="dropdown-toggle btn btn-text text-base-content/50 btn-circle btn-sm"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    aria-label="Dropdown"
                  >
                    <span class="icon-[componentx--dots-vertical] size-5.5"></span>
                  </button>
                  <ul
                    class="dropdown-menu dropdown-open:opacity-100 hidden"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="dropdown-students-by-countries"
                  >
                    <li><a class="dropdown-item" href="#">Last 28 Days</a></li>
                    <li><a class="dropdown-item" href="#">Last Month</a></li>
                    <li><a class="dropdown-item" href="#">Last Year</a></li>
                  </ul>
                </div>
              </div>
              <div class="card-body">
                <ul class="flex h-full flex-col justify-between gap-6">
                  <li>
                    <div class="flex items-center gap-3">
                      <div class="avatar">
                        <div class="size-10 rounded-full">
                          <img
                            src="https://cdn.flyonui.com/fy-assets/blocks/dashboard-app/widgets/united-states.png"
                            alt="united states flag"
                          />
                        </div>
                      </div>

                      <div class="grow">
                        <div class="flex items-center gap-2.5">
                          <h6 class="text-base-content font-semibold">164k</h6>
                          <div class="text-error flex items-center">
                            <span class="icon-[componentx--chevron-down] size-4"></span>
                            <p class="text-sm">7.0%</p>
                          </div>
                        </div>
                        <p class="text-base-content/50 text-sm">USA</p>
                      </div>

                      <div>
                        <span class="text-base-content font-medium">452k</span>
                        <span class="text-base-content/50 text-sm">/new</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="flex items-center gap-3">
                      <div class="avatar">
                        <div class="size-10 rounded-full">
                          <img
                            src="https://cdn.flyonui.com/fy-assets/blocks/dashboard-app/widgets/canada.png"
                            alt="canada flag"
                          />
                        </div>
                      </div>

                      <div class="grow">
                        <div class="flex items-center gap-2.5">
                          <h6 class="text-base-content font-semibold">112k</h6>
                          <div class="text-success flex items-center">
                            <span class="icon-[componentx--chevron-up] size-4"></span>
                            <p class="text-sm">6.3%</p>
                          </div>
                        </div>
                        <p class="text-base-content/50 text-sm">Canada</p>
                      </div>

                      <div>
                        <span class="text-base-content font-medium">227k</span>
                        <span class="text-base-content/50 text-sm">/new</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="flex items-center gap-3">
                      <div class="avatar">
                        <div class="size-10 rounded-full">
                          <img
                            src="https://cdn.flyonui.com/fy-assets/blocks/dashboard-app/widgets/australia.png"
                            alt="australia flag"
                          />
                        </div>
                      </div>

                      <div class="grow">
                        <div class="flex items-center gap-2.5">
                          <h6 class="text-base-content font-semibold">88k</h6>
                          <div class="text-success flex items-center">
                            <span class="icon-[componentx--chevron-up] size-4"></span>
                            <p class="text-sm">5.0%</p>
                          </div>
                        </div>
                        <p class="text-base-content/50 text-sm">Australia</p>
                      </div>

                      <div>
                        <span class="text-base-content font-medium">186k</span>
                        <span class="text-base-content/50 text-sm">/new</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Sales Metrics -->
          <div class="card shadow-base-300/10 shadow-md xl:col-span-2">
            <div class="card-body gap-6">
              <div class="flex w-full items-start gap-6 max-md:flex-col">
                <div class="flex grow flex-col gap-7.5 max-md:w-full">
                  <h2 class="card-title text-xl">Sales Metrics</h2>

                  <!-- Company Info -->
                  <div class="flex items-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
                      <g clip-path="url(#clip0_17222_216976)">
                        <mask
                          id="mask0_17222_216976"
                          style="mask-type:luminance"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="48"
                          height="49"
                        >
                          <path
                            d="M36 0.5H12C5.37258 0.5 0 5.87258 0 12.5V36.5C0 43.1274 5.37258 48.5 12 48.5H36C42.6274 48.5 48 43.1274 48 36.5V12.5C48 5.87258 42.6274 0.5 36 0.5Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask0_17222_216976)">
                          <path
                            d="M36 0.5H12C5.37258 0.5 0 5.87258 0 12.5V36.5C0 43.1274 5.37258 48.5 12 48.5H36C42.6274 48.5 48 43.1274 48 36.5V12.5C48 5.87258 42.6274 0.5 36 0.5Z"
                            fill="url(#paint0_linear_17222_216976)"
                          />
                          <path
                            d="M23.0687 28.5625C23.4559 28.072 24.1937 28.0526 24.6058 28.5224L29.6155 34.2334C30.1819 34.8796 29.723 35.8924 28.8636 35.8925H19.346C18.5105 35.8925 18.0431 34.9282 18.5609 34.2724L23.0687 28.5625ZM23.0941 12.039C23.4922 11.5421 24.2474 11.5386 24.6497 12.0322L39.3939 30.124C39.9262 30.7773 39.4612 31.7558 38.6185 31.7558H34.3128C34.0114 31.7558 33.7263 31.6198 33.5364 31.3857L24.6644 20.4511C24.2577 19.9499 23.49 19.9595 23.096 20.4707L15.0247 30.9482C14.8355 31.1939 14.5428 31.3377 14.2327 31.3379H9.71319C8.87436 31.3378 8.40841 30.3675 8.93292 29.7129L23.0941 12.039Z"
                            fill="url(#paint1_linear_17222_216976)"
                          />
                        </g>
                        <path
                          d="M36.0002 1.49945H12.0002C5.92511 1.49945 1.00024 6.42432 1.00024 12.4995V36.4995C1.00024 42.5746 5.92511 47.4995 12.0002 47.4995H36.0002C42.0754 47.4995 47.0002 42.5746 47.0002 36.4995V12.4995C47.0002 6.42432 42.0754 1.49945 36.0002 1.49945Z"
                          stroke="url(#paint2_linear_17222_216976)"
                          stroke-width="2"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_17222_216976"
                          x1="42.75"
                          y1="4.25"
                          x2="6"
                          y2="46.25"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="var(--color-primary)" />
                          <stop offset="1" stop-color="color-mix(in oklab, var(--color-primary) 80%, #000)" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_17222_216976"
                          x1="24.1659"
                          y1="11.6641"
                          x2="24.1659"
                          y2="35.8925"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="white" />
                          <stop offset="1" stop-color="white" stop-opacity="0.6" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_17222_216976"
                          x1="24.0002"
                          y1="0.49945"
                          x2="24.0002"
                          y2="48.4995"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="white" stop-opacity="0.28" />
                          <stop offset="1" stop-color="white" stop-opacity="0.04" />
                        </linearGradient>
                        <clipPath id="clip0_17222_216976">
                          <rect width="48" height="48" fill="white" transform="translate(0 0.5)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <div>
                      <h3 class="text-base-content text-xl font-medium">Flyonui Company</h3>
                      <p class="text-base-content/80">flyonui@company.com</p>
                    </div>
                  </div>

                  <!-- Company Info -->
                  <div class="grid gap-4 sm:grid-cols-2">
                    <div class="border-base-content/20 rounded-box flex gap-4 border px-4 py-3">
                      <div class="avatar avatar-placeholder">
                        <div class="bg-warning/20 text-warning rounded-field size-11.5">
                          <span class="icon-[componentx--trending-up] size-6"></span>
                        </div>
                      </div>
                      <div class="flex flex-col">
                        <span class="text-base-content/50 text-sm font-medium">Sales trend</span>
                        <span class="text-base-content text-lg font-semibold">$ 11,548</span>
                      </div>
                    </div>
                    <div class="border-base-content/20 rounded-box flex gap-4 border px-4 py-3">
                      <div class="avatar avatar-placeholder">
                        <div class="text-success bg-success/20 rounded-field size-11.5">
                          <span class="icon-[componentx--chart-bar] size-6"></span>
                        </div>
                      </div>
                      <div class="flex flex-col">
                        <span class="text-base-content/50 text-sm font-medium">Total Profit</span>
                        <span class="text-base-content text-lg font-semibold">$1735</span>
                      </div>
                    </div>
                    <div class="border-base-content/20 rounded-box flex gap-4 border px-4 py-3">
                      <div class="avatar avatar-placeholder">
                        <div class="text-primary bg-primary/20 rounded-field size-11.5">
                          <span class="icon-[componentx--discount-2] size-6"></span>
                        </div>
                      </div>
                      <div class="flex flex-col">
                        <span class="text-base-content/50 text-sm font-medium">Discounts</span>
                        <span class="text-base-content text-lg font-semibold">$ 14,987</span>
                      </div>
                    </div>
                    <div class="border-base-content/20 rounded-box flex gap-4 border px-4 py-3">
                      <div class="avatar avatar-placeholder">
                        <div class="text-accent bg-accent/20 rounded-field size-11.5">
                          <span class="icon-[componentx--wallet] size-6"></span>
                        </div>
                      </div>
                      <div class="flex flex-col">
                        <span class="text-base-content/50 text-sm font-medium">Refunds</span>
                        <span class="text-base-content text-lg font-semibold">$3248</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Revenue Goal Section -->
                <div class="bg-base-200 item-center rounded-box flex justify-center max-md:w-full">
                  <div class="bg-base-200 rounded-box space-y-4 p-4">
                    <h3 class="text-base-content text-xl font-medium">Revenue Goal</h3>
                    <!-- Radial Progress -->
                    <div id="revenue-chart" class="w-full"></div>
                    <div class="flex items-center justify-between gap-6">
                      <span class="text-base-content/80 text-lg">Plan Completed</span>
                      <span class="text-base-content text-2xl font-medium">56%</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Bottom Section -->
              <div class="border-base-content/20 rounded-box flex gap-8 border p-6 max-md:flex-col">
                <!-- Sales Plan -->
                <div class="space-y-4">
                  <h3 class="card-title">Sales Plan</h3>
                  <div class="text-base-content text-7xl font-medium">54%</div>
                  <p class="text-base-content/50 text-lg">Percentage profit from total sales</p>
                </div>

                <!-- Cohort Analysis -->
                <div class="space-y-6">
                  <h3 class="text-base-content text-xl font-medium">Cohart analysis indicators</h3>
                  <p class="text-base-content/50">
                    Cohort analysis thoroughly analyzes the behaviour and engagement patterns of a group of users who
                    joined a product or service at the same time, tracking their actions and retention over a certain
                    period for deeper insights.
                  </p>

                  <!-- Statistics Icons -->
                  <div class="text-base-content flex gap-6 max-sm:flex-col sm:items-center">
                    <div class="flex items-center gap-2">
                      <span class="icon-[componentx--chart-infographic] size-6"></span>
                      <span class="text-lg font-medium">Open Statistics</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="icon-[componentx--percentage] size-6"></span>
                      <span class="text-lg font-medium">Percentage Change</span>
                    </div>
                  </div>

                  <div class="progress rounded-field h-7 *:rounded-none">
                    <div class="progress-bar progress-primary w-full"></div>
                    <div class="progress-bar bg-primary/50 w-3/4"></div>
                    <div class="progress-bar bg-primary/30 w-2/4"></div>
                    <div class="progress-bar bg-primary/10 w-1/4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Payment Status Table -->
        <div
          id="users-dashboard"
          class="bg-base-100 --prevent-on-load-init shadow-base-300/10 rounded-box col-span-12 flex h-fit flex-col shadow-md xl:col-span-8"
          data-datatable='{
            "pageLength": 5,
            "pagingOptions": {
              "pageBtnClasses": "btn btn-soft btn-square"
            },
            "selecting": true,
            "rowSelectingOptions": {
              "selectAllSelector": "#select-all-users",
              "individualSelector": ".select-single-user"
            },
            "language": {
                "zeroRecords": "<div class=\"py-10 px-5 flex flex-col justify-center items-center text-center\"><span class=\"icon-[componentx--search] shrink-0 size-6 text-base-content\"></span><div class=\"max-w-sm mx-auto\"><p class=\"mt-2 text-sm text-base-content/80\">No search results</p></div></div>"
              }
          }'
        >
          <div class="border-base-content/25 border-b p-6">
            <h2 class="text-base-content text-xl font-semibold">Payment Status</h2>
          </div>
          <div class="overflow-x-auto">
            <div class="inline-block min-w-full align-middle">
              <div class="overflow-hidden">
                <table class="datatables-users table min-w-full">
                  <thead class="bg-base-200 text-base">
                    <tr>
                      <th scope="col" class="--exclude-from-ordering w-3.5">
                        <div class="flex h-5 items-center">
                          <input id="select-all-users" type="checkbox" class="checkbox checkbox-sm" />
                          <label for="select-all-users" class="sr-only">Checkbox</label>
                        </div>
                      </th>
                      <th scope="col" class="group w-fit">
                        <div class="flex items-center justify-between">
                          USER
                          <span class="icon-[componentx--chevron-up] datatable-ordering-asc:block hidden"></span>
                          <span class="icon-[componentx--chevron-down] datatable-ordering-desc:block hidden"></span>
                        </div>
                      </th>
                      <th scope="col" class="group w-fit ps-0">
                        <div class="border-base-content/20 flex items-center justify-between border-s-2 ps-5">
                          ROLE
                          <span class="icon-[componentx--chevron-up] datatable-ordering-asc:block hidden"></span>
                          <span class="icon-[componentx--chevron-down] datatable-ordering-desc:block hidden"></span>
                        </div>
                      </th>
                      <th scope="col" class="group w-fit ps-0">
                        <div class="border-base-content/20 flex items-center justify-between border-s-2 ps-5">
                          PLAN
                          <span class="icon-[componentx--chevron-up] datatable-ordering-asc:block hidden"></span>
                          <span class="icon-[componentx--chevron-down] datatable-ordering-desc:block hidden"></span>
                        </div>
                      </th>
                      <th scope="col" class="group w-fit ps-0">
                        <div class="border-base-content/20 flex items-center justify-between border-s-2 ps-5">
                          STATUS
                          <span class="icon-[componentx--chevron-up] datatable-ordering-asc:block hidden"></span>
                          <span class="icon-[componentx--chevron-down] datatable-ordering-desc:block hidden"></span>
                        </div>
                      </th>
                      <th scope="col" class="--exclude-from-ordering ps-0">
                        <span class="border-base-content/20 border-s-2 ps-4">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="text-base">
                    <tr>
                      <td class="w-3.5">
                        <div class="flex h-5 items-center">
                          <input
                            id="table-filter-1"
                            type="checkbox"
                            class="checkbox checkbox-sm select-single-user"
                            data-datatable-row-selecting-individual=""
                          />
                          <label for="table-filter-1" class="sr-only">Checkbox</label>
                        </div>
                      </td>
                      <td>
                        <div class="flex items-center gap-4">
                          <div class="avatar">
                            <div class="size-8.5 rounded-full">
                              <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" alt="avatar" />
                            </div>
                          </div>
                          <div>
                            <div class="text-base-content font-medium">Jordan Stevenson</div>
                            <div class="text-base-content/80 text-sm">jordan.stevenson</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="flex items-center gap-4">
                          <span class="icon-[componentx--crown] text-primary size-6"></span>
                          <p>Admin</p>
                        </div>
                      </td>
                      <td>Enterprise</td>
                      <td><span class="badge badge-soft badge-warning">Pending</span></td>
                      <td>
                        <div class="flex items-center">
                          <button class="delete-record btn btn-circle btn-text" aria-label="Action button">
                            <span class="icon-[componentx--trash] size-5"></span>
                          </button>
                          <button class="btn btn-circle btn-text" aria-label="Action button">
                            <span class="icon-[componentx--eye] size-5"></span>
                          </button>
                          <div class="dropdown relative inline-flex">
                            <button
                              type="button"
                              class="dropdown-toggle btn btn-circle btn-text"
                              aria-haspopup="menu"
                              aria-expanded="false"
                              aria-label="Dropdown"
                            >
                              <span class="icon-[componentx--dots-vertical] size-5"></span>
                            </button>
                            <ul
                              class="dropdown-menu dropdown-open:opacity-100 hidden w-auto p-1"
                              role="menu"
                              aria-orientation="vertical"
                            >
                              <li><a class="dropdown-item cursor-pointer px-2 py-1.5 text-sm" href="#">Edit</a></li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="w-3.5">
                        <div class="flex h-5 items-center">
                          <input
                            id="table-filter-2"
                            type="checkbox"
                            class="checkbox checkbox-sm select-single-user"
                            data-datatable-row-selecting-individual=""
                          />
                          <label for="table-filter-2" class="sr-only">Checkbox</label>
                        </div>
                      </td>
                      <td>
                        <div class="flex items-center gap-4">
                          <div class="avatar">
                            <div class="size-8.5 rounded-full">
                              <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-2.png" alt="avatar" />
                            </div>
                          </div>
                          <div>
                            <div class="text-base-content font-medium">Olivia Thompson</div>
                            <div class="text-base-content/80 text-sm">olivia.thompson</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="flex items-center gap-4">
                          <span class="icon-[componentx--user] text-success size-6"></span>
                          <p>Subscriber</p>
                        </div>
                      </td>
                      <td>Company</td>
                      <td><span class="badge badge-soft badge-success">Active</span></td>
                      <td>
                        <div class="flex items-center">
                          <button class="delete-record btn btn-circle btn-text" aria-label="Action button">
                            <span class="icon-[componentx--trash] size-5"></span>
                          </button>
                          <button class="btn btn-circle btn-text" aria-label="Action button">
                            <span class="icon-[componentx--eye] size-5"></span>
                          </button>
                          <div class="dropdown relative inline-flex">
                            <button
                              type="button"
                              class="dropdown-toggle btn btn-circle btn-text"
                              aria-haspopup="menu"
                              aria-expanded="false"
                              aria-label="Dropdown"
                            >
                              <span class="icon-[componentx--dots-vertical] size-5"></span>
                            </button>
                            <ul
                              class="dropdown-menu dropdown-open:opacity-100 hidden w-auto p-1"
                              role="menu"
                              aria-orientation="vertical"
                            >
                              <li><a class="dropdown-item cursor-pointer px-2 py-1.5 text-sm" href="#">Edit</a></li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="w-3.5">
                        <div class="flex h-5 items-center">
                          <input
                            id="table-filter-3"
                            type="checkbox"
                            class="checkbox checkbox-sm select-single-user"
                            data-datatable-row-selecting-individual=""
                          />
                          <label for="table-filter-3" class="sr-only">Checkbox</label>
                        </div>
                      </td>
                      <td>
                        <div class="flex items-center gap-4">
                          <div class="avatar">
                            <div class="size-8.5 rounded-full">
                              <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-3.png" alt="avatar" />
                            </div>
                          </div>
                          <div>
                            <div class="text-base-content font-medium">Ethan Parker</div>
                            <div class="text-base-content/80 text-sm">ethan.parker</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="flex items-center gap-4">
                          <span class="icon-[componentx--device-laptop] text-error size-6"></span>
                          <p>Author</p>
                        </div>
                      </td>
                      <td>Team</td>
                      <td><span class="badge badge-soft badge-secondary">Incomplate</span></td>
                      <td>
                        <div class="flex items-center">
                          <button class="delete-record btn btn-circle btn-text" aria-label="Action button">
                            <span class="icon-[componentx--trash] size-5"></span>
                          </button>
                          <button class="btn btn-circle btn-text" aria-label="Action button">
                            <span class="icon-[componentx--eye] size-5"></span>
                          </button>
                          <div class="dropdown relative inline-flex">
                            <button
                              type="button"
                              class="dropdown-toggle btn btn-circle btn-text"
                              aria-haspopup="menu"
                              aria-expanded="false"
                              aria-label="Dropdown"
                            >
                              <span class="icon-[componentx--dots-vertical] size-5"></span>
                            </button>
                            <ul
                              class="dropdown-menu dropdown-open:opacity-100 hidden w-auto p-1"
                              role="menu"
                              aria-orientation="vertical"
                            >
                              <li><a class="dropdown-item cursor-pointer px-2 py-1.5 text-sm" href="#">Edit</a></li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="w-3.5">
                        <div class="flex h-5 items-center">
                          <input
                            id="table-filter-4"
                            type="checkbox"
                            class="checkbox checkbox-sm select-single-user"
                            data-datatable-row-selecting-individual=""
                          />
                          <label for="table-filter-4" class="sr-only">Checkbox</label>
                        </div>
                      </td>
                      <td>
                        <div class="flex items-center gap-4">
                          <div class="avatar">
                            <div class="size-8.5 rounded-full">
                              <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-4.png" alt="avatar" />
                            </div>
                          </div>
                          <div>
                            <div class="text-base-content font-medium">Ava Green</div>
                            <div class="text-base-content/80 text-sm">ava.green</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="flex items-center gap-4">
                          <span class="icon-[componentx--screen-share] text-info size-6"></span>
                          <p>Maintainer</p>
                        </div>
                      </td>
                      <td>Enterprise</td>
                      <td><span class="badge badge-soft badge-success">Active</span></td>
                      <td>
                        <div class="flex items-center">
                          <button class="delete-record btn btn-circle btn-text" aria-label="Action button">
                            <span class="icon-[componentx--trash] size-5"></span>
                          </button>
                          <button class="btn btn-circle btn-text" aria-label="Action button">
                            <span class="icon-[componentx--eye] size-5"></span>
                          </button>
                          <div class="dropdown relative inline-flex">
                            <button
                              type="button"
                              class="dropdown-toggle btn btn-circle btn-text"
                              aria-haspopup="menu"
                              aria-expanded="false"
                              aria-label="Dropdown"
                            >
                              <span class="icon-[componentx--dots-vertical] size-5"></span>
                            </button>
                            <ul
                              class="dropdown-menu dropdown-open:opacity-100 hidden w-auto p-1"
                              role="menu"
                              aria-orientation="vertical"
                            >
                              <li><a class="dropdown-item cursor-pointer px-2 py-1.5 text-sm" href="#">Edit</a></li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="w-3.5">
                        <div class="flex h-5 items-center">
                          <input
                            id="table-filter-5"
                            type="checkbox"
                            class="checkbox checkbox-sm select-single-user"
                            data-datatable-row-selecting-individual=""
                          />
                          <label for="table-filter-5" class="sr-only">Checkbox</label>
                        </div>
                      </td>
                      <td>
                        <div class="flex items-center gap-4">
                          <div class="avatar">
                            <div class="size-8.5 rounded-full">
                              <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-5.png" alt="avatar" />
                            </div>
                          </div>
                          <div>
                            <div class="text-base-content font-medium">Liam Walker</div>
                            <div class="text-base-content/80 text-sm">liam.walker</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="flex items-center gap-4">
                          <span class="icon-[componentx--edit] text-warning size-6"></span>
                          <p>Editor</p>
                        </div>
                      </td>
                      <td>Company</td>
                      <td><span class="badge badge-soft badge-error">Failed</span></td>
                      <td>
                        <div class="flex items-center">
                          <button class="delete-record btn btn-circle btn-text" aria-label="Action button">
                            <span class="icon-[componentx--trash] size-5"></span>
                          </button>
                          <button class="btn btn-circle btn-text" aria-label="Action button">
                            <span class="icon-[componentx--eye] size-5"></span>
                          </button>
                          <div class="dropdown relative inline-flex">
                            <button
                              type="button"
                              class="dropdown-toggle btn btn-circle btn-text"
                              aria-haspopup="menu"
                              aria-expanded="false"
                              aria-label="Dropdown"
                            >
                              <span class="icon-[componentx--dots-vertical] size-5"></span>
                            </button>
                            <ul
                              class="dropdown-menu dropdown-open:opacity-100 hidden w-auto p-1"
                              role="menu"
                              aria-orientation="vertical"
                            >
                              <li><a class="dropdown-item cursor-pointer px-2 py-1.5 text-sm" href="#">Edit</a></li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="w-3.5">
                        <div class="flex h-5 items-center">
                          <input
                            id="table-filter-6"
                            type="checkbox"
                            class="checkbox checkbox-sm select-single-user"
                            data-datatable-row-selecting-individual=""
                          />
                          <label for="table-filter-6" class="sr-only">Checkbox</label>
                        </div>
                      </td>
                      <td>
                        <div class="flex items-center gap-4">
                          <div class="avatar">
                            <div class="size-8.5 rounded-full">
                              <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-6.png" alt="avatar" />
                            </div>
                          </div>
                          <div>
                            <div class="text-base-content font-medium">Isla Adams</div>
                            <div class="text-base-content/80 text-sm">isla.adams</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="flex items-center gap-4">
                          <span class="icon-[componentx--device-laptop] text-error size-6"></span>
                          <p>Author</p>
                        </div>
                      </td>
                      <td>Team</td>
                      <td><span class="badge badge-soft badge-success">Active</span></td>
                      <td>
                        <div class="flex items-center">
                          <button class="delete-record btn btn-circle btn-text" aria-label="Action button">
                            <span class="icon-[componentx--trash] size-5"></span>
                          </button>
                          <button class="btn btn-circle btn-text" aria-label="Action button">
                            <span class="icon-[componentx--eye] size-5"></span>
                          </button>
                          <div class="dropdown relative inline-flex">
                            <button
                              type="button"
                              class="dropdown-toggle btn btn-circle btn-text"
                              aria-haspopup="menu"
                              aria-expanded="false"
                              aria-label="Dropdown"
                            >
                              <span class="icon-[componentx--dots-vertical] size-5"></span>
                            </button>
                            <ul
                              class="dropdown-menu dropdown-open:opacity-100 hidden w-auto p-1"
                              role="menu"
                              aria-orientation="vertical"
                            >
                              <li><a class="dropdown-item cursor-pointer px-2 py-1.5 text-sm" href="#">Edit</a></li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="w-3.5">
                        <div class="flex h-5 items-center">
                          <input
                            id="table-filter-7"
                            type="checkbox"
                            class="checkbox checkbox-sm select-single-user"
                            data-datatable-row-selecting-individual=""
                          />
                          <label for="table-filter-7" class="sr-only">Checkbox</label>
                        </div>
                      </td>
                      <td>
                        <div class="flex items-center gap-4">
                          <div class="avatar">
                            <div class="size-8.5 rounded-full">
                              <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-7.png" alt="avatar" />
                            </div>
                          </div>
                          <div>
                            <div class="text-base-content font-medium">Mason Clark</div>
                            <div class="text-base-content/80 text-sm">mason.clark</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="flex items-center gap-4">
                          <span class="icon-[componentx--user] text-success size-6"></span>
                          <p>Subscriber</p>
                        </div>
                      </td>
                      <td>Company</td>
                      <td><span class="badge badge-soft badge-warning">Pending</span></td>
                      <td>
                        <div class="flex items-center">
                          <button class="delete-record btn btn-circle btn-text" aria-label="Action button">
                            <span class="icon-[componentx--trash] size-5"></span>
                          </button>
                          <button class="btn btn-circle btn-text" aria-label="Action button">
                            <span class="icon-[componentx--eye] size-5"></span>
                          </button>
                          <div class="dropdown relative inline-flex">
                            <button
                              type="button"
                              class="dropdown-toggle btn btn-circle btn-text"
                              aria-haspopup="menu"
                              aria-expanded="false"
                              aria-label="Dropdown"
                            >
                              <span class="icon-[componentx--dots-vertical] size-5"></span>
                            </button>
                            <ul
                              class="dropdown-menu dropdown-open:opacity-100 hidden w-auto p-1"
                              role="menu"
                              aria-orientation="vertical"
                            >
                              <li><a class="dropdown-item cursor-pointer px-2 py-1.5 text-sm" href="#">Edit</a></li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="w-3.5">
                        <div class="flex h-5 items-center">
                          <input
                            id="table-filter-8"
                            type="checkbox"
                            class="checkbox checkbox-sm select-single-user"
                            data-datatable-row-selecting-individual=""
                          />
                          <label for="table-filter-8" class="sr-only">Checkbox</label>
                        </div>
                      </td>
                      <td>
                        <div class="flex items-center gap-4">
                          <div class="avatar">
                            <div class="size-8.5 rounded-full">
                              <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-8.png" alt="avatar" />
                            </div>
                          </div>
                          <div>
                            <div class="text-base-content font-medium">Lucas Scott</div>
                            <div class="text-base-content/80 text-sm">lucas.scott</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="flex items-center gap-4">
                          <span class="icon-[componentx--screen-share] text-info size-6"></span>
                          <p>Maintainer</p>
                        </div>
                      </td>
                      <td>Team</td>
                      <td><span class="badge badge-soft badge-success">Active</span></td>
                      <td>
                        <div class="flex items-center">
                          <button class="delete-record btn btn-circle btn-text" aria-label="Action button">
                            <span class="icon-[componentx--trash] size-5"></span>
                          </button>
                          <button class="btn btn-circle btn-text" aria-label="Action button">
                            <span class="icon-[componentx--eye] size-5"></span>
                          </button>
                          <div class="dropdown relative inline-flex">
                            <button
                              type="button"
                              class="dropdown-toggle btn btn-circle btn-text"
                              aria-haspopup="menu"
                              aria-expanded="false"
                              aria-label="Dropdown"
                            >
                              <span class="icon-[componentx--dots-vertical] size-5"></span>
                            </button>
                            <ul
                              class="dropdown-menu dropdown-open:opacity-100 hidden w-auto p-1"
                              role="menu"
                              aria-orientation="vertical"
                            >
                              <li><a class="dropdown-item cursor-pointer px-2 py-1.5 text-sm" href="#">Edit</a></li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="w-3.5">
                        <div class="flex h-5 items-center">
                          <input
                            id="table-filter-9"
                            type="checkbox"
                            class="checkbox checkbox-sm select-single-user"
                            data-datatable-row-selecting-individual=""
                          />
                          <label for="table-filter-9" class="sr-only">Checkbox</label>
                        </div>
                      </td>
                      <td>
                        <div class="flex items-center gap-4">
                          <div class="avatar">
                            <div class="size-8.5 rounded-full">
                              <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-9.png" alt="avatar" />
                            </div>
                          </div>
                          <div>
                            <div class="text-base-content font-medium">Mia Taylor</div>
                            <div class="text-base-content/80 text-sm">mia.taylor</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="flex items-center gap-4">
                          <span class="icon-[componentx--edit] text-warning size-6"></span>
                          <p>Editor</p>
                        </div>
                      </td>
                      <td>Enterprise</td>
                      <td><span class="badge badge-soft badge-warning">Pending</span></td>
                      <td>
                        <div class="flex items-center">
                          <button class="delete-record btn btn-circle btn-text" aria-label="Action button">
                            <span class="icon-[componentx--trash] size-5"></span>
                          </button>
                          <button class="btn btn-circle btn-text" aria-label="Action button">
                            <span class="icon-[componentx--eye] size-5"></span>
                          </button>
                          <div class="dropdown relative inline-flex">
                            <button
                              type="button"
                              class="dropdown-toggle btn btn-circle btn-text"
                              aria-haspopup="menu"
                              aria-expanded="false"
                              aria-label="Dropdown"
                            >
                              <span class="icon-[componentx--dots-vertical] size-5"></span>
                            </button>
                            <ul
                              class="dropdown-menu dropdown-open:opacity-100 hidden w-auto p-1"
                              role="menu"
                              aria-orientation="vertical"
                            >
                              <li><a class="dropdown-item cursor-pointer px-2 py-1.5 text-sm" href="#">Edit</a></li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="w-3.5">
                        <div class="flex h-5 items-center">
                          <input
                            id="table-filter-10"
                            type="checkbox"
                            class="checkbox checkbox-sm select-single-user"
                            data-datatable-row-selecting-individual=""
                          />
                          <label for="table-filter-10" class="sr-only">Checkbox</label>
                        </div>
                      </td>
                      <td>
                        <div class="flex items-center gap-4">
                          <div class="avatar">
                            <div class="size-8.5 rounded-full">
                              <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-10.png" alt="avatar" />
                            </div>
                          </div>
                          <div>
                            <div class="text-base-content font-medium">Noah King</div>
                            <div class="text-base-content/80 text-sm">noah.king</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="flex items-center gap-4">
                          <span class="icon-[componentx--device-laptop] text-error size-6"></span>
                          <p>Author</p>
                        </div>
                      </td>
                      <td>Team</td>
                      <td><span class="badge badge-soft badge-success">Active</span></td>
                      <td>
                        <div class="flex items-center">
                          <button class="delete-record btn btn-circle btn-text" aria-label="Action button">
                            <span class="icon-[componentx--trash] size-5"></span>
                          </button>
                          <button class="btn btn-circle btn-text" aria-label="Action button">
                            <span class="icon-[componentx--eye] size-5"></span>
                          </button>
                          <div class="dropdown relative inline-flex">
                            <button
                              type="button"
                              class="dropdown-toggle btn btn-circle btn-text"
                              aria-haspopup="menu"
                              aria-expanded="false"
                              aria-label="Dropdown"
                            >
                              <span class="icon-[componentx--dots-vertical] size-5"></span>
                            </button>
                            <ul
                              class="dropdown-menu dropdown-open:opacity-100 hidden w-auto p-1"
                              role="menu"
                              aria-orientation="vertical"
                            >
                              <li><a class="dropdown-item cursor-pointer px-2 py-1.5 text-sm" href="#">Edit</a></li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="w-3.5">
                        <div class="flex h-5 items-center">
                          <input
                            id="table-filter-11"
                            type="checkbox"
                            class="checkbox checkbox-sm select-single-user"
                            data-datatable-row-selecting-individual=""
                          />
                          <label for="table-filter-11" class="sr-only">Checkbox</label>
                        </div>
                      </td>
                      <td>
                        <div class="flex items-center gap-4">
                          <div class="avatar">
                            <div class="size-8.5 rounded-full">
                              <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-11.png" alt="avatar" />
                            </div>
                          </div>
                          <div>
                            <div class="text-base-content font-medium">Mia Lewis</div>
                            <div class="text-base-content/80 text-sm">mia.lewis</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="flex items-center gap-4">
                          <span class="icon-[componentx--crown] text-primary size-6"></span>
                          <p>Admin</p>
                        </div>
                      </td>
                      <td>Enterprise</td>
                      <td><span class="badge badge-soft badge-warning">Pending</span></td>
                      <td>
                        <div class="flex items-center">
                          <button class="delete-record btn btn-circle btn-text" aria-label="Action button">
                            <span class="icon-[componentx--trash] size-5"></span>
                          </button>
                          <button class="btn btn-circle btn-text" aria-label="Action button">
                            <span class="icon-[componentx--eye] size-5"></span>
                          </button>
                          <div class="dropdown relative inline-flex">
                            <button
                              type="button"
                              class="dropdown-toggle btn btn-circle btn-text"
                              aria-haspopup="menu"
                              aria-expanded="false"
                              aria-label="Dropdown"
                            >
                              <span class="icon-[componentx--dots-vertical] size-5"></span>
                            </button>
                            <ul
                              class="dropdown-menu dropdown-open:opacity-100 hidden w-auto p-1"
                              role="menu"
                              aria-orientation="vertical"
                            >
                              <li><a class="dropdown-item cursor-pointer px-2 py-1.5 text-sm" href="#">Edit</a></li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="w-3.5">
                        <div class="flex h-5 items-center">
                          <input
                            id="table-filter-12"
                            type="checkbox"
                            class="checkbox checkbox-sm select-single-user"
                            data-datatable-row-selecting-individual=""
                          />
                          <label for="table-filter-12" class="sr-only">Checkbox</label>
                        </div>
                      </td>
                      <td>
                        <div class="flex items-center gap-4">
                          <div class="avatar">
                            <div class="size-8.5 rounded-full">
                              <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-12.png" alt="avatar" />
                            </div>
                          </div>
                          <div>
                            <div class="text-base-content font-medium">Harper Taylor</div>
                            <div class="text-base-content/80 text-sm">harper.taylor</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="flex items-center gap-4">
                          <span class="icon-[componentx--user] text-success size-6"></span>
                          <p>Subscriber</p>
                        </div>
                      </td>
                      <td>Company</td>
                      <td><span class="badge badge-soft badge-success">Active</span></td>
                      <td>
                        <div class="flex items-center">
                          <button class="delete-record btn btn-circle btn-text" aria-label="Action button">
                            <span class="icon-[componentx--trash] size-5"></span>
                          </button>
                          <button class="btn btn-circle btn-text" aria-label="Action button">
                            <span class="icon-[componentx--eye] size-5"></span>
                          </button>
                          <div class="dropdown relative inline-flex">
                            <button
                              type="button"
                              class="dropdown-toggle btn btn-circle btn-text"
                              aria-haspopup="menu"
                              aria-expanded="false"
                              aria-label="Dropdown"
                            >
                              <span class="icon-[componentx--dots-vertical] size-5"></span>
                            </button>
                            <ul
                              class="dropdown-menu dropdown-open:opacity-100 hidden w-auto p-1"
                              role="menu"
                              aria-orientation="vertical"
                            >
                              <li><a class="dropdown-item cursor-pointer px-2 py-1.5 text-sm" href="#">Edit</a></li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="w-3.5">
                        <div class="flex h-5 items-center">
                          <input
                            id="table-filter-13"
                            type="checkbox"
                            class="checkbox checkbox-sm select-single-user"
                            data-datatable-row-selecting-individual=""
                          />
                          <label for="table-filter-13" class="sr-only">Checkbox</label>
                        </div>
                      </td>
                      <td>
                        <div class="flex items-center gap-4">
                          <div class="avatar">
                            <div class="size-8.5 rounded-full">
                              <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-13.png" alt="avatar" />
                            </div>
                          </div>
                          <div>
                            <div class="text-base-content font-medium">Sophie Harris</div>
                            <div class="text-base-content/80 text-sm">sophie.harris</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="flex items-center gap-4">
                          <span class="icon-[componentx--device-laptop] text-error size-6"></span>
                          <p>Author</p>
                        </div>
                      </td>
                      <td>Team</td>
                      <td><span class="badge badge-soft badge-secondary">Incomplate</span></td>
                      <td>
                        <div class="flex items-center">
                          <button class="delete-record btn btn-circle btn-text" aria-label="Action button">
                            <span class="icon-[componentx--trash] size-5"></span>
                          </button>
                          <button class="btn btn-circle btn-text" aria-label="Action button">
                            <span class="icon-[componentx--eye] size-5"></span>
                          </button>
                          <div class="dropdown relative inline-flex">
                            <button
                              type="button"
                              class="dropdown-toggle btn btn-circle btn-text"
                              aria-haspopup="menu"
                              aria-expanded="false"
                              aria-label="Dropdown"
                            >
                              <span class="icon-[componentx--dots-vertical] size-5"></span>
                            </button>
                            <ul
                              class="dropdown-menu dropdown-open:opacity-100 hidden w-auto p-1"
                              role="menu"
                              aria-orientation="vertical"
                            >
                              <li><a class="dropdown-item cursor-pointer px-2 py-1.5 text-sm" href="#">Edit</a></li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="w-3.5">
                        <div class="flex h-5 items-center">
                          <input
                            id="table-filter-14"
                            type="checkbox"
                            class="checkbox checkbox-sm select-single-user"
                            data-datatable-row-selecting-individual=""
                          />
                          <label for="table-filter-14" class="sr-only">Checkbox</label>
                        </div>
                      </td>
                      <td>
                        <div class="flex items-center gap-4">
                          <div class="avatar">
                            <div class="size-8.5 rounded-full">
                              <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-14.png" alt="avatar" />
                            </div>
                          </div>
                          <div>
                            <div class="text-base-content font-medium">Ethan Wilson</div>
                            <div class="text-base-content/80 text-sm">ethan.wilson</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="flex items-center gap-4">
                          <span class="icon-[componentx--screen-share] text-info size-6"></span>
                          <p>Maintainer</p>
                        </div>
                      </td>
                      <td>Company</td>
                      <td><span class="badge badge-soft badge-success">Active</span></td>
                      <td>
                        <div class="flex items-center">
                          <button class="delete-record btn btn-circle btn-text" aria-label="Action button">
                            <span class="icon-[componentx--trash] size-5"></span>
                          </button>
                          <button class="btn btn-circle btn-text" aria-label="Action button">
                            <span class="icon-[componentx--eye] size-5"></span>
                          </button>
                          <div class="dropdown relative inline-flex">
                            <button
                              type="button"
                              class="dropdown-toggle btn btn-circle btn-text"
                              aria-haspopup="menu"
                              aria-expanded="false"
                              aria-label="Dropdown"
                            >
                              <span class="icon-[componentx--dots-vertical] size-5"></span>
                            </button>
                            <ul
                              class="dropdown-menu dropdown-open:opacity-100 hidden w-auto p-1"
                              role="menu"
                              aria-orientation="vertical"
                            >
                              <li><a class="dropdown-item cursor-pointer px-2 py-1.5 text-sm" href="#">Edit</a></li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="w-3.5">
                        <div class="flex h-5 items-center">
                          <input
                            id="table-filter-15"
                            type="checkbox"
                            class="checkbox checkbox-sm select-single-user"
                            data-datatable-row-selecting-individual=""
                          />
                          <label for="table-filter-15" class="sr-only">Checkbox</label>
                        </div>
                      </td>
                      <td>
                        <div class="flex items-center gap-4">
                          <div class="avatar">
                            <div class="size-8.5 rounded-full">
                              <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-15.png" alt="avatar" />
                            </div>
                          </div>
                          <div>
                            <div class="text-base-content font-medium">Alexander Scott</div>
                            <div class="text-base-content/80 text-sm">alexander.scott</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="flex items-center gap-4">
                          <span class="icon-[componentx--edit] text-warning size-6"></span>
                          <p>Editor</p>
                        </div>
                      </td>
                      <td>Team</td>
                      <td><span class="badge badge-soft badge-error">Failed</span></td>
                      <td>
                        <div class="flex items-center">
                          <button class="delete-record btn btn-circle btn-text" aria-label="Action button">
                            <span class="icon-[componentx--trash] size-5"></span>
                          </button>
                          <button class="btn btn-circle btn-text" aria-label="Action button">
                            <span class="icon-[componentx--eye] size-5"></span>
                          </button>
                          <div class="dropdown relative inline-flex">
                            <button
                              type="button"
                              class="dropdown-toggle btn btn-circle btn-text"
                              aria-haspopup="menu"
                              aria-expanded="false"
                              aria-label="Dropdown"
                            >
                              <span class="icon-[componentx--dots-vertical] size-5"></span>
                            </button>
                            <ul
                              class="dropdown-menu dropdown-open:opacity-100 hidden w-auto p-1"
                              role="menu"
                              aria-orientation="vertical"
                            >
                              <li><a class="dropdown-item cursor-pointer px-2 py-1.5 text-sm" href="#">Edit</a></li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="w-3.5">
                        <div class="flex h-5 items-center">
                          <input
                            id="table-filter-16"
                            type="checkbox"
                            class="checkbox checkbox-sm select-single-user"
                            data-datatable-row-selecting-individual=""
                          />
                          <label for="table-filter-16" class="sr-only">Checkbox</label>
                        </div>
                      </td>
                      <td>
                        <div class="flex items-center gap-4">
                          <div class="avatar">
                            <div class="size-8.5 rounded-full">
                              <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-16.png" alt="avatar" />
                            </div>
                          </div>
                          <div>
                            <div class="text-base-content font-medium">Zoe Morgan</div>
                            <div class="text-base-content/80 text-sm">zoe.morgan</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="flex items-center gap-4">
                          <span class="icon-[componentx--device-laptop] text-error size-6"></span>
                          <p>Author</p>
                        </div>
                      </td>
                      <td>Enterprise</td>
                      <td><span class="badge badge-soft badge-success">Active</span></td>
                      <td>
                        <div class="flex items-center">
                          <button class="delete-record btn btn-circle btn-text" aria-label="Action button">
                            <span class="icon-[componentx--trash] size-5"></span>
                          </button>
                          <button class="btn btn-circle btn-text" aria-label="Action button">
                            <span class="icon-[componentx--eye] size-5"></span>
                          </button>
                          <div class="dropdown relative inline-flex">
                            <button
                              type="button"
                              class="dropdown-toggle btn btn-circle btn-text"
                              aria-haspopup="menu"
                              aria-expanded="false"
                              aria-label="Dropdown"
                            >
                              <span class="icon-[componentx--dots-vertical] size-5"></span>
                            </button>
                            <ul
                              class="dropdown-menu dropdown-open:opacity-100 hidden w-auto p-1"
                              role="menu"
                              aria-orientation="vertical"
                            >
                              <li><a class="dropdown-item cursor-pointer px-2 py-1.5 text-sm" href="#">Edit</a></li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="w-3.5">
                        <div class="flex h-5 items-center">
                          <input
                            id="table-filter-17"
                            type="checkbox"
                            class="checkbox checkbox-sm select-single-user"
                            data-datatable-row-selecting-individual=""
                          />
                          <label for="table-filter-17" class="sr-only">Checkbox</label>
                        </div>
                      </td>
                      <td>
                        <div class="flex items-center gap-4">
                          <div class="avatar">
                            <div class="size-8.5 rounded-full">
                              <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-17.png" alt="avatar" />
                            </div>
                          </div>
                          <div>
                            <div class="text-base-content font-medium">Scarlett Davis</div>
                            <div class="text-base-content/80 text-sm">scarlett.davis</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="flex items-center gap-4">
                          <span class="icon-[componentx--edit] text-warning size-6"></span>
                          <p>Editor</p>
                        </div>
                      </td>
                      <td>Company</td>
                      <td><span class="badge badge-soft badge-secondary">Incomplate</span></td>
                      <td>
                        <div class="flex items-center">
                          <button class="delete-record btn btn-circle btn-text" aria-label="Action button">
                            <span class="icon-[componentx--trash] size-5"></span>
                          </button>
                          <button class="btn btn-circle btn-text" aria-label="Action button">
                            <span class="icon-[componentx--eye] size-5"></span>
                          </button>
                          <div class="dropdown relative inline-flex">
                            <button
                              type="button"
                              class="dropdown-toggle btn btn-circle btn-text"
                              aria-haspopup="menu"
                              aria-expanded="false"
                              aria-label="Dropdown"
                            >
                              <span class="icon-[componentx--dots-vertical] size-5"></span>
                            </button>
                            <ul
                              class="dropdown-menu dropdown-open:opacity-100 hidden w-auto p-1"
                              role="menu"
                              aria-orientation="vertical"
                            >
                              <li><a class="dropdown-item cursor-pointer px-2 py-1.5 text-sm" href="#">Edit</a></li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div
            class="border-base-content/25 flex items-center justify-between gap-3 border-t px-6 py-3 max-md:flex-col max-md:justify-center"
          >
            <div class="text-base-content/50" data-datatable-info="">
              Showing
              <span data-datatable-info-from="1"></span>
              to
              <span data-datatable-info-to="30"></span>
              of
              <span data-datatable-info-length="50"></span>
              entries
            </div>
            <div class="flex hidden items-center space-x-1" data-datatable-paging="">
              <button type="button" class="btn btn-soft btn-square" data-datatable-paging-prev="">
                <span class="icon-[componentx--chevrons-left] size-5.5 rtl:rotate-180"></span>
                <span class="sr-only">Previous</span>
              </button>
              <div
                class="[&>.active]:text-bg-soft-primary flex items-center space-x-1"
                data-datatable-paging-pages=""
              ></div>
              <button type="button" class="btn btn-soft btn-square" data-datatable-paging-next="">
                <span class="sr-only">Next</span>
                <span class="icon-[componentx--chevrons-right] size-5.5 rtl:rotate-180"></span>
              </button>
            </div>
          </div>
        </div>
      </main>
      <!-- ---------- END MAIN CONTENT ---------- -->

      <!-- ---------- FOOTER CONTENT ---------- -->
      <footer class="mx-auto w-full max-w-7xl px-6 py-3.5 text-sm">
        <div class="flex items-center justify-between gap-3 max-lg:flex-col">
          <p class="text-base-content text-center">
            &copy;2025
            <a href="" class="text-primary">FlyonUI</a>
            , Made With ❤️ for a better web.
          </p>
          <div class="justify-enter flex items-center gap-4 max-sm:flex-col">
            <a href="#" class="link link-primary link-animated font-normal" aria-label="License">License</a>
            <a href="#" class="link link-primary link-animated font-normal" aria-label="More Themes">More Themes</a>
            <a href="#" class="link link-primary link-animated font-normal" aria-label="Documentation">Documentation</a>
            <a href="#" class="link link-primary link-animated font-normal" aria-label="Support">Support</a>
          </div>
        </div>
      </footer>
      <!-- ---------- END FOOTER CONTENT ---------- -->
    </div>
  </div>
```

```css
<link rel="stylesheet" href="./node_modules/apexcharts/dist/apexcharts.css" />
  @import "flyonui/src/vendor/apexcharts.css"
  @import "flyonui/src/vendor/datatables.css"
[data-theme="dark"]
  li:not(.menu-title, .menu-disabled)
  > :not(ul, .menu-title, .collapse, .accordion-content, .btn).menu-active {
  background-color: var(--color-primary);
  color: var(--color-primary-content);
}

[data-theme="black"]
  li:not(.menu-title, .menu-disabled)
  > :not(ul, .menu-title, .collapse, .accordion-content, .btn).menu-active {
  background-color: var(--color-primary);
  color: var(--color-primary-content);
}

[data-theme="luxury"]
  li:not(.menu-title, .menu-disabled)
  > :not(ul, .menu-title, .collapse, .accordion-content, .btn).menu-active {
  background-color: var(--color-primary);
  color: var(--color-primary-content);
}
```

```js
<script src="./node_modules/jquery/dist/jquery.min.js"></script>
  <script src="./node_modules/datatables.net/js/dataTables.min.js"></script>
  <script src="./node_modules/apexcharts/dist/apexcharts.min.js"></script>
  <script src="./node_modules/lodash/lodash.min.js"></script>
  <script src="./node_modules/flyonui/dist/helper-apexcharts.js"></script>
<script>
    window.addEventListener("load", () => {
      ;(function () {
        // Revenue Goal Radial Chart
        buildChart("#revenue-chart", () => ({
          chart: {
            height: 182,
            width: 182,
            type: "donut",
            offsetX: 10,
            parentHeightOffset: 0
          },
          labels: ["Discount", "Profit", "Sale"],
          series: [14987, 1735, 11548],
          colors: ["var(--color-primary)", "var(--color-success)", "var(--color-warning)"],
          stroke: {
            width: 4,
            colors: ["var(--color-base-200)"]
          },
          dataLabels: {
            enabled: false
          },
          legend: {
            show: false
          },
          grid: {
            show: false
          },
          states: {
            hover: {
              filter: { type: "none" }
            },
            active: {
              filter: { type: "none" }
            }
          },
          plotOptions: {
            pie: {
              expandOnClick: false,

              donut: {
                size: "83%",
                background: "transparent",
                labels: {
                  show: true,
                  value: {
                    fontSize: "1.5rem",
                    fontFamily: "Inter, ui-sans-serif",
                    fontWeight: 700,
                    color: "var(--color-base-content)",
                    offsetY: -17,
                    formatter: function (val) {
                      return "$" + parseInt(val)
                    }
                  },
                  name: {
                    offsetY: 17,
                    fontFamily: "Inter, ui-sans-serif"
                  },
                  total: {
                    show: true,
                    fontSize: "14px",
                    color: "var(--color-base-content)",
                    fontWeight: 500,
                    label: "Total Profit",
                    formatter: function (w) {
                      return "$1735"
                    }
                  }
                }
              }
            }
          }
        }))
      })()

      // Datatable
      // Delete record
      const { dataTable } = new HSDataTable("#users-dashboard")

      const userTable = document.querySelector(".datatables-users")

      const tableBody = userTable?.querySelector("tbody")
      if (tableBody) {
        tableBody.addEventListener("click", function (event) {
          if (event.target.parentElement.classList.contains("delete-record")) {
            deleteRecord(event)
          }
        })
      }

      function deleteRecord(event) {
        let row = event.target.parentElement.closest("tr")

        if (row) {
          dataTable.row(row).remove().draw()
        }
      }
    })
  </script>
```

Third-Party Description:
Use this Tailwind CSS Dashboard Shell block to allow users to view engagement, sales, subscriptions, and payment metrics with graphs and progress indicators in a clean layout.<br/>This block integrates a third-party library. For setup and usage details, please see the <a href='https://ComponentX.com/docs/third-party-plugins/datatables/#setup' class='link link-primary font-normal'>Datatables</a> and <a href='https://ComponentX.com/docs/third-party-plugins/apex-charts/#setup' class='link link-primary font-normal'>Apex Charts</a>. 

Instructions on the third-party components:
- Kindly inform me that the packages mentioned in the third-party description must be installed by me and have to configure them in my project myself. Provide me the links to the packages mentioned in the third-party description.

If icons are not installed, install and configure them using the following steps:

```bash
npm i -D @iconify/tailwind4 @iconify-json/componentx
```

```css
@plugin "@iconify/tailwind4"; /* Add this line at the end of tailwind and flyonui related css lines. */
```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
