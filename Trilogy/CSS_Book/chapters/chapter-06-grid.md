# Chapter 6 — Grid

Flexbox handles arrangement along one axis. CSS Grid handles arrangement along two — rows and columns simultaneously. They are not competitors; they are complementary. Most pages use both: Grid for the page-level layout, Flexbox for arranging items within sections.

This chapter is about the parts of Grid you'll actually use. Like Flexbox, Grid has more properties than we'll cover. We are learning the patterns that pay off.

---

## What Grid is

Grid is a layout mode where you define columns and rows on a container, and place children into the resulting cells. You get to decide:

- How many columns and rows the grid has.
- How wide each column is and how tall each row is.
- The gap between cells.
- Where each child goes (which row, which column, how many cells it spans).

Children of a grid container automatically flow into the cells in source order, unless you tell them otherwise.

---

## Making the page a grid

Right now your body has padding and a centered main. That works, but as the site gets more complex, a real grid layout for the page is cleaner.

Replace your body rule with this:

```css
body {
  margin: 0;
  background-color: #fafaf7;
  color: #1a1a1a;
  font-family: Georgia, serif;
  line-height: 1.6;

  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
```

Save. Refresh.

The body is now a grid with three rows. The first row holds the header. The middle row holds the main content. The third row holds the footer. `grid-template-rows: auto 1fr auto` says: *the first row is as tall as its content; the middle row takes whatever space is left (`1fr` means one fraction of remaining space); the third row is as tall as its content.*

`min-height: 100vh` makes the body at least as tall as the viewport. Combined with the `1fr` middle row, this means the footer always sits at the bottom of the screen, even on pages with little content. (Without this, the footer would float up to wherever the content ends.)

---

## A two-column layout for the path page

The path page has a table of contents and a list of articles. On wider screens, those should sit side by side — TOC on the left, articles on the right. On narrow screens (phones), they should stack vertically.

We'll do the responsive part in Chapter 10. For now, let's set up the desktop layout.

Open `path.html`. Wrap the TOC and the articles in a single container with two children:

```html
<main id="main-content">
  <h1>The Path</h1>

  <div class="path-layout">
    <nav class="path-toc">
      <h2>Articles</h2>
      <ol>
        <li><a href="#what-html-actually-is">What HTML actually is</a></li>
        <li><a href="#why-html-and-css-are-separate">Why HTML and CSS are separate</a></li>
        <li><a href="#what-css-does">What CSS does</a></li>
      </ol>
    </nav>

    <div class="path-articles">
      <article id="what-html-actually-is">...</article>
      <article id="why-html-and-css-are-separate">...</article>
      <article id="what-css-does">...</article>
    </div>
  </div>
</main>
```

(I've used `<div>` for the wrappers. The wrapping is for layout — there's no semantic meaning to the grouping itself. That is exactly what `<div>` is for.)

Now in CSS:

```css
.path-layout {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 40px;
}

.path-toc {
  position: sticky;
  top: 80px;
  align-self: start;
}
```

Save. Refresh `path.html`.

The TOC is on the left in a 220-pixel-wide column. The articles are on the right in the remaining space. There's a 40-pixel gap between them. The TOC sticks to the top of the viewport (80 pixels down to clear the sticky header) as the user scrolls.

`align-self: start` keeps the sticky TOC aligned to the top of its grid cell rather than stretching to fill the cell — without this, sticky positioning gets confused by Grid's default behavior of stretching items.

---

## The properties you'll use most

A few patterns you'll reach for repeatedly.

**`grid-template-columns: 1fr 1fr 1fr`** — three equal columns. The unit `fr` is *fraction* — each column gets one fraction of available space. Ratios work too: `1fr 2fr` is two columns where the second is twice as wide as the first.

**`grid-template-columns: repeat(3, 1fr)`** — same thing, less typing. `repeat(N, value)` repeats the value N times.

**`grid-template-columns: 200px 1fr`** — fixed first column, flexible second. Useful for sidebar layouts.

**`grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))`** — a magic incantation that creates as many equally-sized columns as fit, with each column at least 240 pixels wide. As the screen narrows, columns drop off; as it widens, more appear. This is the modern way to do responsive card grids.

**`gap: 20px`** — space between cells.

**`gap: 20px 40px`** — different row and column gaps (row first, column second).

That's a small vocabulary, but it covers most page-level and component-level grid layouts.

---

## A small honest moment

I avoided Grid for two years after it became widely supported. I had Flexbox, and I had figured out how to make Flexbox do everything I needed, and Grid felt like a separate concept I didn't have time to learn.

Then I had to build a layout that needed real two-dimensional control — a dashboard with cells of different sizes spanning different numbers of rows and columns. With Flexbox, the math was punishing. With Grid, it was three properties. I converted the layout in twenty minutes. I have used Grid for page-level layout ever since.

The lesson: Flexbox is right for one-dimensional problems. Grid is right for two-dimensional problems. Trying to use one for the other works but it is harder than it needs to be. Pick the right tool.

---

## *Grid is for two-axis layout. The day you stop reaching for floats is the day you start writing modern CSS.* <!-- SIGNATURE LINE -->

You may have read about `float` in older CSS resources. Float was the way layouts were done in 2010. It is still in the language; it works; you can use it. You should not, except for one specific purpose (wrapping text around an image inside a paragraph). Every other layout problem has a better solution in Grid or Flexbox. Float-based layouts are a class of legacy CSS that you will encounter in old codebases and not write yourself.

---

## A small permission

You don't need to know every Grid property. There is `grid-template-areas`, `grid-auto-flow`, `grid-column-start`, `grid-row-end`, and a long tail. They have their uses. The vocabulary above handles the cases you'll meet most. Look up the rest when you need them, with a specific layout problem in front of you.

---

## Try this

1. Add the body grid rules. Refresh. Notice the footer sits at the bottom of the viewport even on short pages.
2. Add the path-layout grid rules and update `path.html` with the wrapper structure. Refresh `path.html`. Scroll. Watch the TOC stick.
3. Try changing `grid-template-columns: 220px 1fr` to `300px 1fr`. Refresh. The TOC column is wider. Pick what looks balanced.
4. Commit:
   ```
   git add .
   git commit -m "Grid layout for body and path page"
   ```

In Chapter 7, we'll do typography — the part where the site starts feeling like a polished reading experience.

---

## CHAPTER HANDOFF REPORT

**Chapter:** 6 — Grid
**Word count:** ~1,650
**Signature line:** *Grid is for two-axis layout. The day you stop reaching for floats is the day you start writing modern CSS.*

**Project milestone:** Body uses a grid for the page (header / main / footer rows). Path page uses a two-column grid for TOC + articles, with sticky TOC.
**Files touched:** `style.css`, `path.html`.
**Concepts introduced:**
- Grid container vs grid items
- `grid-template-columns` / `grid-template-rows`
- The `fr` unit
- `repeat()` and `repeat(auto-fit, minmax(...))`
- `gap` for grid (same property as Flexbox)
- `align-self` for individual grid items
- `min-height: 100vh` for full-viewport pages
- When to use Grid vs Flexbox

**Items flagged for verification:** None.

**Honest-admission moment:** "I avoided Grid for two years after it became widely supported..."
**Permission-giving moment:** "You don't need to know every Grid property."

**STATUS:** Continuing.
