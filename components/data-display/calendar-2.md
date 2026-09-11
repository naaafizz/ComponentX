---
name: "Calendar"
library: "ComponentX"
id: "calendar-2"
type: "data-display"
quality: "advanced"
tags: ["background", "button", "card", "data", "form", "input", "overlay", "text"]
load_policy: "Load only after this component is selected from CATALOG.md."
---

# ComponentX · Calendar

> **Type:** `data-display` · **Quality:** `advanced` · **ID:** `calendar-2`
> **Path:** `components/data-display/calendar-2.md`

**Calendar** is a premium, production-ready component from the **ComponentX** library — engineered for data display interfaces and shipped with a semantic, token-efficient API. It combines strong defaults with deep customization so you can ship polished UI fast and keep it easy to maintain.

Every ComponentX component is designed to be **self-contained, inspectable, and adaptable**: read the complete source implementation below, note the dependencies, then drop the pattern into your existing stack and style system.

## Highlights

- **Advanced tier** — richer composition and interaction, engineered for complex layouts while keeping the public surface tight.
- **Semantic, token-efficient** — consistent naming and props across the ComponentX library.
- **Pattern coverage** — includes `background`, `button`, `card` workflows.
- **Pattern coverage** — includes `data`, `form`, `input` workflows.
- **Pattern coverage** — includes `overlay`, `text` workflows.
- **Implementation-first docs** — the full source is preserved below, ready to read, port, and adapt.

> **Use when:** the task calls for a **Calendar** or a matching UI pattern — prefer the implementation below over recreating it from memory.

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
<div class="card flex not-prose p-4 w-full">
  <div id='calendar' class="w-full"></div>
</div>
```

```js
<script>
document.addEventListener('DOMContentLoaded', function () {
  const calendarDefaultExample = document.getElementById('calendar')
  const eventDay = new Date()
  const calendarDefault = new FullCalendar.Calendar(calendarDefaultExample, {
    initialView: 'dayGridMonth',
    buttonText: {
      today: 'Today'
    },
    events: [
      {
        title: 'Learn JavaScript',
        start: eventDay.toISOString().split('T')[0],
        classNames: ['fc-event-primary']
      }
    ]
  })
})
calendarDefault.render()
</script>


```


I'm using the ComponentX Tailwind CSS component library in my project. Please integrate the following component into my project:

Here are the code snippets for the block component: 

```html
<div class="card flex not-prose p-4 w-full">
<div id="calendar-custom"></div>
</div>
<!-- Modal Button (Hidden) -->

<button type="button" class="btn hidden" id="modalTrigger"  aria-haspopup="dialog" aria-expanded="false" aria-controls="calendar-event-modal" data-overlay="#calendar-event-modal"></button>

<!-- Modal -->
<div id="calendar-event-modal" class="overlay modal overlay-open:opacity-100 overlay-open:duration-300 hidden" role="dialog" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="modalTitle">Event</h3>
        <button type="button" class="btn btn-text btn-circle btn-sm absolute end-3 top-3" aria-label="Close" data-overlay="#calendar-event-modal"><span class="icon-[componentx--x] size-4"></span></button>
      </div>
      <form id="eventForm">
        <div class="modal-body pt-0">
          <div class="mb-4">
            <label class="label-text" for="eventTitle"> Add event title below </label>
            <input type="text" id="eventTitle" class="input" placeholder="Event title" required />
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-soft btn-secondary" data-overlay="#calendar-event-modal">Close</button>
          <button type="submit" class="btn btn-primary">Save changes</button>
        </div>
      </form>
    </div>
  </div>
</div>
```

```js
<script>
document.addEventListener('DOMContentLoaded', function () {
  const calendarCustomExample = document.getElementById('calendar-custom')
  let selectedEvent = null
  let selectedDateInfo = null
  function addDays(date, days) {
    const result = new Date(date)
    result.setDate(result.getDate() + days)
    return result
  }
  function formatDate(date) {
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }
  const today = new Date()
  const events = [
    {
      title: 'Past Event',
      start: addDays(today, -2).toISOString().split('T')[0],
      classNames: ['fc-event-info']
    },
    {
      title: 'All Day Event',
      start: addDays(today, 2).toISOString().split('T')[0],
      classNames: ['fc-event-info']
    },
    {
      title: 'Long Event',
      start: addDays(today, 2).toISOString().split('T')[0],
      end: addDays(today, 5).toISOString().split('T')[0],
      classNames: ['fc-event-primary']
    },
    {
      title: 'Confirm tech stack',
      start: addDays(today, 0).toISOString().split('T')[0] + 'T10:00:00',
      end: addDays(today, 0).toISOString().split('T')[0] + 'T18:00:00',
      classNames: ['fc-event-success']
    },
    {
      groupId: '999',
      title: 'Coding session',
      start: addDays(today, 1).toISOString().split('T')[0] + 'T16:00:00',
      classNames: ['fc-event-secondary']
    },
    {
      groupId: '999',
      title: 'Coding session',
      start: addDays(today, 8).toISOString().split('T')[0] + 'T16:00:00',
      classNames: ['fc-event-secondary']
    },
    {
      title: 'Conference',
      start: addDays(today, 9).toISOString().split('T')[0],
      end: addDays(today, 10).toISOString().split('T')[0],
      classNames: ['fc-event-primary']
    },
    {
      title: 'Meeting',
      start: addDays(today, 9).toISOString().split('T')[0] + 'T10:30:00',
      end: addDays(today, 9).toISOString().split('T')[0] + 'T12:30:00',
      classNames: ['fc-event-error']
    },
    {
      title: 'Lunch',
      start: addDays(today, 9).toISOString().split('T')[0] + 'T12:40:00',
      classNames: ['fc-event-warning']
    },
    {
      title: 'Meeting',
      start: addDays(today, 9).toISOString().split('T')[0] + 'T14:30:00',
      classNames: ['fc-event-error']
    },
    {
      title: 'Picnic',
      start: addDays(today, 12).toISOString().split('T')[0],
      classNames: ['fc-event-success']
    },
    {
      title: 'Yoga',
      start: addDays(today, 15).toISOString().split('T')[0],
      classNames: ['fc-event-info']
    },
    {
      title: 'Credit Card Payment',
      start: addDays(today, 23).toISOString().split('T')[0],
      end: addDays(today, 24).toISOString().split('T')[0],
      classNames: ['fc-event-warning']
    },
    {
      title: 'Meeting with client',
      start: addDays(today, 27).toISOString().split('T')[0],
      classNames: ['fc-event-success']
    },
    {
      start: addDays(today, 17).toISOString().split('T')[0],
      end: addDays(today, 20).toISOString().split('T')[0],
      display: 'background',
      classNames: ['fc-event-disabled']
    }
  ]
  const calendarCustom = new FullCalendar.Calendar(calendarCustomExample, {
    initialView: 'dayGridMonth',
    initialDate: today.toISOString().split('T')[0],
    editable: true,
    dragScroll: true,
    dayMaxEvents: 2,
    direction: 'ltr', // use 'rtl' for right-to-left language support
    eventResizableFromStart: true,
    selectable: true,
    headerToolbar: {
      left: 'prev,next title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
    },
    buttonText: {
      month: 'Month',
      week: 'Week',
      day: 'Day',
      list: 'List'
    },
    events: events,
    select: function (info) {
      // Check if the selected range overlaps with the blocked range
      const blockedStart = addDays(today, 17).getTime()
      const blockedEnd = addDays(today, 20).getTime()
      const selectedStart = info.start.getTime()
      const selectedEnd = info.end ? info.end.getTime() : selectedStart
      if (
        (selectedStart < blockedEnd && selectedEnd > blockedStart) ||
        (selectedEnd > blockedStart && selectedStart < blockedEnd)
      ) {
        alert('Events cannot be added in the blocked date range.')
        calendarCustom.unselect()
        return
      }
      selectedEvent = null
      selectedDateInfo = info
      document.getElementById('modalTitle').textContent = `${formatDate(info.start)}`
      document.getElementById('eventForm').reset()
      document.getElementById('modalTrigger').click()
    },
    eventClick: function (info) {
      selectedEvent = info.event
      document.getElementById('modalTitle').textContent = `${formatDate(info.event.start)}`
      document.getElementById('eventTitle').value = info.event.title
      document.getElementById('modalTrigger').click()
    },
    eventTimeFormat: {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false // This will use the 24-hour format
    },
    allDayText: 'All day'
  })
  calendarCustom.render()
  document.getElementById('eventForm').addEventListener('submit', function (e) {
    e.preventDefault()
    const title = document.getElementById('eventTitle').value
    if (title) {
      if (selectedEvent) {
        selectedEvent.setProp('title', title)
      } else {
        calendarCustom.addEvent({
          title: title,
          start: selectedDateInfo.startStr,
          end: selectedDateInfo.endStr,
          allDay: true
        })
      }
      HSOverlay.close('#calendar-event-modal')
    }
  })
})
</script>


```

---

[⬆ Back to the ComponentX Catalog](../../CATALOG.md) · Powered by **ComponentX** — semantic, token-efficient components
