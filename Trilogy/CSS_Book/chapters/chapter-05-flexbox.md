# Chapter 5 — Flexbox

The page so far is a vertical stack. Header on top, main below it, footer below that. Each of those contains content stacked vertically too. The browser is doing what it does by default — block elements one after another, top to bottom.

Most layouts need more than that. The navigation needs its links arranged horizontally, not vertically. The header needs the logo on one side and the nav on the other. The path page might want its table of contents alongside the article instead of above it. These are arrangement problems, and the modern tool for arrangement along a single axis is **Flexbox.**

This chapter is about the small handful of Flexbox properties that solve most of the layout problems you'll meet. Flexbox is bigger than what we cover here — there are more properties, more edge cases, more advanced patterns. We are going to learn the parts that pay off.

---

## What Flexbox is

Flexbox is a layout mode that, when applied to an element, lets you control how its *children* are arranged. The children become *flex items.* The parent — the one with `display: flex` — becomes the *flex container.*

The children are arranged along an axis. By default, the axis is horizontal: items are placed left to right. You can change it to vertical with `flex-direction: column`.

Inside that one-axis arrangement, you get to control: how items are spaced along the axis (`justify-content`), how they are aligned across the axis (`align-items`), how much they grow or shrink (`flex` properties on the items), and the gap between them (`gap`).

That's the whole concept. The properties are how you express it.

---

## Making the nav horizontal

Open `style.css`. Add this:

```css
nav ul {
  display: flex;
  gap: 24px;
  list-style: none;
  padding: 0;
  margin: 0;
}
```

Save. Refresh.

The nav is now horizontal. The list bullets are gone. The items are spaced 24 pixels apart.

What just happened. `display: flex` on the `<ul>` made it a flex container. Its children — the `<li>` items — are arranged left-to-right along the horizontal axis. `gap: 24px` puts a 24-pixel space between each pair of items. `list-style: none` removes the bullet markers. `padding: 0` and `margin: 0` reset the browser's default list spacing so the nav lines up cleanly.

Five new properties. The nav is laid out the way it should be.

---

## Header layout: logo on the left, nav on the right

Right now your header has the logo image followed by the nav, stacked vertically (because both are block-level by default). We want them side by side, with the logo on the left and the nav on the right.

Update your `header` rule:

```css
header {
  position: sticky;
  top: 0;
  background-color: #fafaf7;
  padding-block: 16px;
  border-bottom: 1px solid #ddd;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: space-between;
}
```

Refresh.

The logo is on the left. The nav is on the right. Both are vertically centered relative to the header. `display: flex` made the header a flex container; its children (the logo `<img>` and the `<nav>`) are now flex items.

`align-items: center` aligns items across the cross axis (the perpendicular one). When the main axis is horizontal, the cross axis is vertical, so this centers items vertically.

`justify-content: space-between` distributes items along the main axis, with the first item against the start, the last against the end, and any items in between evenly spaced. With two items, it pushes them to opposite ends.

This is one of the most common patterns in modern web design — header with brand on one side and navigation on the other. Three Flexbox properties did it.

---

## The four most useful flex properties

These four cover most of what you'll use Flexbox for.

**`display: flex`** turns an element into a flex container.

**`gap`** puts space between flex items. Use this instead of margins on items — it's cleaner and handles edges correctly.

**`justify-content`** controls spacing along the main axis. Common values:
- `flex-start` (default): items at the start.
- `flex-end`: items at the end.
- `center`: items in the middle.
- `space-between`: items spread to fill the space, edges flush.
- `space-around`: items spread with equal space around each.
- `space-evenly`: items spread with equal space between and at the edges.

**`align-items`** controls alignment along the cross axis. Common values:
- `stretch` (default): items fill the cross axis.
- `flex-start`: items at the start of the cross axis.
- `flex-end`: items at the end.
- `center`: items centered.
- `baseline`: text baselines align (useful for text of different sizes).

These four solve maybe 80% of layout problems you'll meet for the rest of your career. Memorizing them is a real win.

---

## flex-direction: column

By default, Flexbox arranges items horizontally. To arrange them vertically, set `flex-direction: column`:

```css
.card {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
```

When direction is column, the main axis becomes vertical. `justify-content` now controls vertical spacing, `align-items` now controls horizontal alignment. The names of the properties don't change — what they refer to does.

This is occasionally confusing. The fix is to think *main axis* and *cross axis,* not *horizontal* and *vertical.* The properties are about axes; the direction property tells the browser which way the main axis goes.

---

## A small honest moment

I learned Flexbox three times. The first time I read about it, I memorized property names without building anything, and forgot them in a week. The second time I built one navigation with it, copying from a tutorial, and again forgot the details when I needed them again. The third time, I built three layouts in a row, on real projects, with the documentation open — and the patterns finally stuck.

The lesson: Flexbox doesn't stick from reading. It sticks from doing. Build, look up what you forgot, build again. After three or four real layouts, the four properties above become reflexive. Until then, keep MDN open.

---

## *Flexbox is for arrangement along a single axis. That covers more layout problems than you'd think.* <!-- SIGNATURE LINE -->

Most layout work is one-dimensional — a row of things, a column of things, with control over alignment and spacing. Flexbox is the tool for that. The two-dimensional layout problems (a grid where rows and columns both matter) are what Grid is for, and that's the next chapter.

For now, you have a horizontal nav and a header that lays out the way modern sites lay out. Two of the most common UI patterns, both done with five lines of CSS apiece.

---

## A small permission

You will not understand every Flexbox property on first read. There's a `flex-grow` / `flex-shrink` / `flex-basis` family that controls how items size themselves, and an `align-self` property for individual items, and `flex-wrap` for handling overflow. They exist. Look them up when you need them. The four properties above are the ones to internalize first.

---

## Try this

1. Add the rules above. Refresh. Scroll the page. The header stays sticky, the nav is horizontal, the layout looks like a real header.
2. Try changing `justify-content: space-between` on the header to `justify-content: center`. The logo and nav both center together, with no gap to the edges. Try `justify-content: flex-end` — both push to the right. Try `justify-content: space-around`. Pick what looks best to you.
3. Try changing `gap: 24px` on the nav to `gap: 40px` or `gap: 16px`. Settle on what feels right.
4. Commit (still on the redesign branch):
   ```
   git add .
   git commit -m "Flexbox layout for nav and header"
   ```

Chapter 6 is Grid — the two-dimensional layout tool.

---

## CHAPTER HANDOFF REPORT

**Chapter:** 5 — Flexbox
**Word count:** ~1,650
**Signature line:** *Flexbox is for arrangement along a single axis. That covers more layout problems than you'd think.*

**Project milestone:** Nav is horizontal. Header has logo and nav side by side, vertically centered. Both done with Flexbox.
**Files touched:** `style.css`.
**Concepts introduced:**
- Flex container vs flex items
- Main axis vs cross axis
- The four most useful flex properties: `display: flex`, `gap`, `justify-content`, `align-items`
- `flex-direction` and how it changes axis meaning
- `list-style: none` for removing list bullets

**Items flagged for verification:** None.

**Honest-admission moment:** "I learned Flexbox three times..."
**Permission-giving moment:** "You will not understand every Flexbox property on first read."

**STATUS:** Continuing.
