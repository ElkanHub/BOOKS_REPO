# Chapter 4 — Display, Flow, and Position

How do elements end up where they end up on the page? What's the rule the browser follows when it lays out one element after another?

The answer is *normal flow,* and it has two main modes: block and inline. Once you know the modes, you can read any layout. Once you can read it, you can change it.

This chapter covers the modes, the `display` property, and the four position values you'll actually use. It's also the chapter where we start working on a Git branch — the redesign branch — because the changes from here on are large enough that having a way to back out matters.

---

## Block and inline

Every HTML element is either a *block* element or an *inline* element by default.

**Block elements** start on a new line and take up the full width available. `<p>`, `<h1>` through `<h6>`, `<div>`, `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`, `<ul>`, `<ol>`, `<li>`, `<form>`. Stack them on top of each other. They each get their own row.

**Inline elements** sit alongside other content on the same line. `<a>`, `<span>`, `<strong>`, `<em>`, `<img>`. They flow with text — multiple inline elements can appear on the same line, and the line breaks naturally when it runs out of horizontal room.

You can change an element's display mode with the `display` property:

```css
li {
  display: inline;
}
```

That makes list items render inline — useful for horizontal navigation, which we'll do in Chapter 5.

`display: inline-block` is a hybrid — the element flows inline like an inline element, but you can set width, height, padding, and margin on all sides like a block element. Useful but less common in modern code, where Flexbox and Grid handle most layout.

`display: none` removes the element from the layout entirely. It is not visible and takes up no space. The element is still in the DOM (JavaScript can find it), but the browser doesn't render it.

---

## Working on a branch

Before we make bigger layout changes, switch to a Git branch. From your project root in the terminal:

```
git checkout -b redesign
```

That creates a new branch called `redesign` and switches you to it. Any commits you make from here on will be on the redesign branch, not on main. Your live site, which deploys from main, will keep showing the version from the end of the HTML book until you merge the redesign back in.

Why work on a branch? Because the next several chapters will change the site dramatically, and there's a chance you'll want to back out of a particular decision or restart cleanly. With a branch, you can experiment, commit freely, and merge into main only when you're happy with the whole thing.

You can switch between branches whenever you like:

```
git checkout main      (back to main)
git checkout redesign  (back to redesign)
```

For now, stay on redesign. We'll merge in Chapter 11.

---

## Position

The `position` property has five values. Four of them matter, and you'll use them in different situations.

**`position: static`** is the default. Every element has it unless you change it. Static elements are laid out in normal flow — block and inline as described above. The `top`, `right`, `bottom`, and `left` properties have no effect on static elements.

**`position: relative`** keeps the element in normal flow but lets you nudge it from its natural position with `top`, `right`, `bottom`, `left`. The original space is preserved — other elements lay out around the element as if it were still in its starting place. This is most useful as a *reference point* for absolutely positioned children.

**`position: absolute`** removes the element from normal flow entirely and positions it relative to the nearest positioned ancestor (an ancestor with `position: relative`, `absolute`, `fixed`, or `sticky`). If there is no positioned ancestor, the element is positioned relative to the viewport. Other elements lay out as if the absolute element didn't exist.

**`position: fixed`** removes the element from normal flow and positions it relative to the viewport. It stays in place as the user scrolls. Used for things like floating action buttons or fixed headers. Use sparingly — fixed elements can cover content on small screens.

**`position: sticky`** is a hybrid. The element stays in normal flow until the user scrolls past it, at which point it sticks to a position you specify (usually the top of the viewport). Modern browsers handle this natively. Useful for headers that should follow the user as they scroll a long page.

For the field guide, we'll use `position: sticky` on the page header. As the user scrolls down a long article on the path page, the header (with the nav) stays visible at the top.

---

## Sticky header

Add this to `style.css`:

```css
header {
  position: sticky;
  top: 0;
  background-color: #fafaf7;
  padding-block: 16px;
  border-bottom: 1px solid #ddd;
  z-index: 10;
}
```

`top: 0` says: stick to the top edge of the viewport. `z-index: 10` says: when the header overlaps other content (because it's sticky), make sure it appears in front. The background color and border give the header a visual identity so it doesn't feel like part of the content sliding underneath.

Save. Refresh. Scroll down on any of your pages. The header stays at the top. The content scrolls behind it. This is one of the most common modern UI patterns and it took six lines of CSS.

---

## A small honest moment

The first time I learned `position`, I tried to use `position: absolute` for everything. *Move this here, move that there, problem solved.* The result was a layout that worked exactly until I added or removed any content, at which point everything fell apart, because absolute positioning doesn't account for content size.

The right rule: use `static` (the default) most of the time. Use `relative` when you need a reference point or a small nudge. Use `absolute` for genuinely overlay-style elements (badges, tooltips, modals). Use `fixed` and `sticky` when you specifically want elements outside the normal flow.

Reach for normal flow first. The less position juggling you do, the more your layouts hold up to changes.

---

## *Position is the answer to "where does this element actually go." The four values are the four answers.* <!-- SIGNATURE LINE -->

Static for "in normal flow." Relative for "in normal flow with a small adjustment." Absolute for "out of flow, positioned to a parent." Fixed for "out of flow, attached to the viewport." Sticky for "in flow, then stuck."

Most of your layout work in the next chapters will not use position at all — it will use Flexbox and Grid, which handle alignment and arrangement without needing position tricks. That's a good thing. Position is for the cases the other tools don't handle.

---

## A small permission

You don't need to memorize the difference between absolute and relative on first reading. Most beginners get them confused for a while. The distinction becomes clear once you build something that uses both — usually a positioned-absolute child inside a positioned-relative parent.

Read this chapter once. Build the sticky header. Notice when normal flow does what you want and when it doesn't. The rest will fall into place as you encounter it.

---

## Try this

1. Make sure you're on the redesign branch (`git branch` shows your current branch).
2. Add the sticky header rules. Refresh. Scroll. Watch the header stay.
3. Try changing `top: 0` to `top: 10px`. Refresh. The header sticks ten pixels from the top instead of flush. Change it back.
4. Add `position: relative` to the body or main element if you want a reference point for any future absolute positioning. (Not required yet.)
5. Commit:
   ```
   git add .
   git commit -m "Add sticky header"
   ```
   No `git push` yet (or you can push the redesign branch — `git push -u origin redesign`).

In Chapter 5, we'll lay out the navigation horizontally with Flexbox.

---

## CHAPTER HANDOFF REPORT

**Chapter:** 4 — Display, Flow, and Position
**Word count:** ~1,800
**Signature line:** *Position is the answer to "where does this element actually go." The four values are the four answers.*

**Project milestone:** Working on a `redesign` branch. Header is sticky to the top of the viewport.
**Files touched:** `style.css`. Git branch created.
**Concepts introduced:**
- Block vs inline display modes
- The `display` property: block, inline, inline-block, none
- Git branching (`checkout -b`, switching, the rationale)
- The five `position` values: static, relative, absolute, fixed, sticky
- `z-index` (briefly)
- Sticky headers in practice

**Items flagged for verification:** None.

**Honest-admission moment:** "The first time I learned `position`, I tried to use `position: absolute` for everything..."
**Permission-giving moment:** "You don't need to memorize the difference between absolute and relative on first reading."

**STATUS:** Continuing.
