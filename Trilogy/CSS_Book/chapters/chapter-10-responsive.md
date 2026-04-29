# Chapter 10 — Responsive Design

The site is laid out beautifully — on the screen you happen to have. Open it on a phone and the layout breaks. The horizontal nav crowds, the two-column path layout squishes, the typography is too large for the small screen.

Responsive design is the practice of building one site that works at any screen size. Not three sites — one for desktop, one for tablet, one for mobile. One site, with rules that adapt the layout to whatever screen the user has.

This chapter introduces the small set of techniques that make a site genuinely responsive: media queries, the mobile-first principle, and a few CSS units that scale naturally.

---

## Mobile-first

The principle is: write your CSS for the smallest screen first, then add rules to enhance it on larger screens.

This sounds backwards if you build on a laptop. It's the right way around because:

1. Phones are the most constrained context. Designing for them forces you to keep the essential and cut the optional. If it works on a phone, it works elsewhere.
2. Phones are how most users access the web. Building for desktop first and bolting on mobile second produces sites that feel like the mobile version is an afterthought, because it is.
3. CSS is easier to add than to undo. Adding rules at larger sizes is straightforward. Trying to disable desktop rules on mobile is fragile.

For the field guide, the existing styles already work decently on small screens (because we used Flexbox and Grid, which are responsive by nature). What needs adjustment is the two-column path layout and a few sizing decisions.

---

## Media queries

A *media query* is a CSS rule that only applies when the screen meets certain conditions. The most common condition is screen width.

```css
@media (min-width: 768px) {
  /* Rules in here apply only when the viewport is 768px wide or wider. */
}
```

Anything you put inside the curly braces takes effect only at that screen size or larger. On smaller screens, the rules are ignored.

The standard mobile-first pattern:

```css
/* Default rules — apply on all screens, including mobile */
.path-layout {
  display: block;
}

/* Larger-screen rules — apply on tablets and up */
@media (min-width: 768px) {
  .path-layout {
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 40px;
  }
}
```

On phones, `.path-layout` is `display: block` — children stack vertically. On tablets and up, it becomes a grid with two columns. One CSS file, two layouts, the right one for the screen.

---

## Picking breakpoints

A *breakpoint* is the screen width at which a media query kicks in. Beginners agonize over which breakpoints to use. There's no universal right answer, but the common starting points are:

- **480px** — for differentiating small phones from larger phones (rarely needed).
- **768px** — for tablets and where most desktop layouts begin to make sense.
- **1024px** — for larger tablets and small laptops.
- **1280px** — for larger laptops and desktops.

You don't need all of these. Many sites use just one breakpoint at 768px (mobile vs. everything-else). Others use two — 768px and 1280px. Pick the smallest set of breakpoints your design needs and add more only when a real layout problem requires it.

The honest rule: pick breakpoints based on *content,* not devices. Look at your site at every width by dragging the browser window narrower and wider. Where does the layout start to feel cramped or stretched? That's where you need a breakpoint, regardless of what device that width corresponds to.

---

## Making the field guide responsive

Open `style.css`. Find your `.path-layout` rule from Chapter 6. Wrap it in a media query and add a default for small screens:

```css
.path-layout {
  display: block;
}

.path-toc {
  margin-block-end: 40px;
}

@media (min-width: 768px) {
  .path-layout {
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 40px;
  }

  .path-toc {
    position: sticky;
    top: 80px;
    align-self: start;
    margin-block-end: 0;
  }
}
```

On phones, the TOC stacks above the articles with a 40px gap. On tablets and up, it becomes a sidebar.

The header probably needs adjustment on small screens too. Right now the nav has seven items in a row, which is too many for most phones. A common pattern is to let the nav wrap onto multiple lines on small screens:

```css
nav ul {
  display: flex;
  gap: 24px;
  list-style: none;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
}
```

`flex-wrap: wrap` lets flex items move to a new line when they don't fit. On a wide screen, the nav stays on one line. On a phone, it wraps onto two or three lines. Not the most elegant solution — production sites often use a "hamburger menu" that hides the nav behind a toggle — but the toggle requires JavaScript, which is the next book. For now, wrap is fine.

For the heading sizes, smaller screens benefit from smaller headings:

```css
h1 { font-size: 2rem; }
h2 { font-size: 1.5rem; }
h3 { font-size: 1.125rem; }

@media (min-width: 768px) {
  h1 { font-size: 2.5rem; }
  h2 { font-size: 1.75rem; }
  h3 { font-size: 1.25rem; }
}
```

---

## Fluid sizing with `clamp`

There's a more modern alternative to media queries for sizing things — the `clamp()` function. `clamp(min, preferred, max)` returns the preferred value, clamped to never go below the min or above the max.

```css
h1 {
  font-size: clamp(2rem, 5vw, 2.5rem);
}
```

That says: the heading is 5% of the viewport width (`5vw`), but never smaller than 2rem and never larger than 2.5rem. On small screens, the size scales down naturally. On large screens, it caps. No media query needed.

Clamp is the modern way to handle font sizes that should scale fluidly. You can use it for spacing, widths, and other values too.

For the field guide, you could replace the heading sizes above with:

```css
h1 { font-size: clamp(1.75rem, 4vw, 2.5rem); }
h2 { font-size: clamp(1.5rem, 3vw, 1.75rem); }
h3 { font-size: clamp(1.125rem, 2vw, 1.25rem); }
```

Refresh and resize the browser. The headings scale smoothly. There's no jump at 768px. The site responds to size continuously.

---

## A small honest moment

The first responsive site I built had eight breakpoints. I had a rule for 320px, 480px, 568px, 768px, 1024px, 1200px, 1440px, and 1600px. I had specific tweaks for each. The CSS file was a mess of overlapping rules. Every change in one breakpoint required checking the others.

The rewrite reduced it to two breakpoints. The site looked the same. The CSS was a third the length. Maintenance was no longer a punishment.

The lesson: more breakpoints is not better. Two well-placed ones cover most sites. Add more only when content genuinely requires it.

---

## *Mobile-first is not about phones. It is about admitting you do not know what device the user is on.* <!-- SIGNATURE LINE -->

You don't know if your user is on a 320px phone, a 1080p laptop, or a 4K monitor. You don't know if they're holding the phone vertically or horizontally. You don't know if their screen is partly covered by another app. The mobile-first practice — start small, enhance up — is the practice of designing for *any* screen, not for the screen on your desk.

---

## A small permission

You don't need to test every device. Modern browser DevTools include a *responsive mode* — Chrome's is in DevTools, the icon that looks like a phone next to a tablet — that lets you simulate different screen sizes. Use it. It's not a perfect substitute for real device testing, but it catches 90% of issues without needing physical devices.

Test on whatever phone you have, plus the responsive mode for sizes you don't have. That's enough.

---

## Try this

1. Apply the media queries and clamp examples above. Refresh.
2. Open Chrome DevTools. Click the responsive mode icon. Set the viewport to 375x667 (iPhone size). Browse your site.
3. Set the viewport to 1440x900 (laptop). Browse again.
4. Drag the responsive mode width slowly from narrow to wide. Watch the layout adapt continuously.
5. Open the live site on your actual phone (you can find the URL in your bio, or just type it in). Confirm it works the same.
6. Commit:
   ```
   git add .
   git commit -m "Responsive: media queries, clamp, mobile-first layout"
   ```

In Chapter 11, we do a final visual pass — small touches that make the site feel finished — and then merge the redesign branch into main.

---

## CHAPTER HANDOFF REPORT

**Chapter:** 10 — Responsive Design
**Word count:** ~1,800
**Signature line:** *Mobile-first is not about phones. It is about admitting you do not know what device the user is on.*

**Project milestone:** Site is responsive. Path layout adapts at 768px. Headings scale fluidly. Nav wraps on small screens.
**Files touched:** `style.css`.
**Concepts introduced:**
- Mobile-first principle and rationale
- Media queries with `min-width`
- Common breakpoints and choosing based on content
- `flex-wrap`
- The `clamp()` function for fluid sizing
- Viewport units (`vw`)
- DevTools responsive mode

**Items flagged for verification:** None.

**Honest-admission moment:** "The first responsive site I built had eight breakpoints..."
**Permission-giving moment:** "You don't need to test every device."

**STATUS:** Continuing.
