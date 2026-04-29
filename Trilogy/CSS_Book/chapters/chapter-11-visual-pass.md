# Chapter 11 — A Visual Pass

The site works. It is laid out, typed, colored, and responsive. It is also not yet *finished* — finished is the polish layer, the small touches that take a site from working to feeling intentional. This chapter is that pass.

We'll cover the small handful of details that make the difference: form styling, hover and focus states, transitions, the table styling, and a few utility classes for visual rhythm. None of this is much code. All of it adds up.

We'll also merge the `redesign` branch back into `main` and deploy the redesigned site.

---

## Styling the form

The contact form is currently raw browser defaults — gray inputs, default button styling, no breathing room. Add this:

```css
input,
textarea {
  width: 100%;
  padding: var(--space-2) var(--space-3);
  font-family: inherit;
  font-size: 1rem;
  color: var(--color-text);
  background-color: white;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  margin-block-start: var(--space-1);
}

input:focus,
textarea:focus {
  outline: 2px solid var(--color-brand);
  outline-offset: 1px;
  border-color: var(--color-brand);
}

label {
  display: block;
  margin-block-start: var(--space-3);
  font-weight: 600;
}

button[type="submit"] {
  margin-block-start: var(--space-4);
  padding: var(--space-2) var(--space-4);
  background-color: var(--color-brand);
  color: white;
  border: none;
  border-radius: 4px;
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: var(--color-brand-dark);
}
```

A few things to notice.

`font-family: inherit` on inputs is important. Browsers default form controls to a system font that doesn't match the rest of the page. Inheriting from the parent makes inputs use the body font. This single line solves "why does my form look different from the rest of the site."

`outline: 2px solid var(--color-brand)` on focus replaces the browser's default focus ring (which is often a barely-visible blue dotted line) with a clear, brand-colored ring. *Never remove the focus outline without replacing it.* Keyboard users — and people relying on assistive tech — depend on the outline to know where focus is. The default is often ugly; the fix is to style it better, not remove it.

`cursor: pointer` on the button changes the mouse cursor to the pointing hand when hovering over the button, signaling it's clickable.

Refresh the contact page. The form looks like a real form now.

---

## Styling the table

The tools page table needs borders and padding to be readable:

```css
table {
  width: 100%;
  border-collapse: collapse;
  margin-block: var(--space-4);
}

th, td {
  text-align: left;
  padding: var(--space-2) var(--space-3);
  border-bottom: 1px solid var(--color-border);
}

th {
  font-family: var(--font-heading);
  font-weight: 600;
  background-color: var(--color-border);
}

caption {
  text-align: left;
  font-style: italic;
  color: var(--color-muted);
  margin-block-end: var(--space-2);
}
```

`border-collapse: collapse` makes adjacent cell borders share — without it, you get double borders between cells.

Refresh the tools page. The table reads cleanly with subtle row separators.

---

## Hover, focus, and transitions

Links, buttons, and other interactive elements should give visual feedback when the user hovers or focuses them. A small color change. A slight underline shift. It tells the user *this is interactive.*

We've already done basic hover styles. Adding a transition makes them feel less abrupt:

```css
a, button {
  transition: color 0.15s ease, background-color 0.15s ease;
}
```

When the color or background-color of a link or button changes, the change happens over 150 milliseconds rather than instantly. Subtle, but noticeable in the right way.

Don't transition every property. `transition: all` is a tempting shortcut and a performance trap — it animates properties you don't expect, including some that are expensive to animate. Pick the specific properties.

---

## Focus styles for everything

Make sure every interactive element has a visible focus state. Links, buttons, form fields, anything a keyboard user might tab to.

```css
a:focus-visible,
button:focus-visible {
  outline: 2px solid var(--color-brand);
  outline-offset: 2px;
}
```

`:focus-visible` is a smarter version of `:focus`. It only matches when the focus came from the keyboard — not from a mouse click. This means mouse users don't see focus rings (which can feel intrusive after every click), but keyboard users still do.

---

## The skip link, finally styled

In the HTML book we added a skip-to-content link on every page. It's been visible at the top of every page since then. It's time to hide it from sighted users (it shows up only when keyboard-focused):

```css
.skip-link {
  position: absolute;
  top: -40px;
  left: 8px;
  padding: var(--space-2) var(--space-3);
  background-color: var(--color-brand);
  color: white;
  z-index: 100;
  transition: top 0.2s;
}

.skip-link:focus {
  top: 8px;
}
```

The link sits at `top: -40px` by default — out of view above the viewport. When focused (by keyboard tab), it transitions to `top: 8px` — visible at the top-left of the page. Sighted mouse users never see it. Keyboard users get it on the first tab.

---

## Merging the redesign

The redesign is ready. Time to merge it back into main.

In your terminal:

```
git status
```

Make sure everything is committed. If anything's uncommitted, commit it now.

```
git checkout main
```

Switches to the main branch. The site is back to its end-of-HTML-book state — unstyled.

```
git merge redesign
```

Merges the redesign branch into main. Git replays all the redesign commits onto main. Now main has everything you did in this book.

```
git push
```

Pushes main to GitHub. Within a minute or two, GitHub Pages rebuilds the site. The live URL now shows the redesigned site.

You can keep the redesign branch around or delete it. Most people delete branches once they're merged — the work is in main, the branch is just history.

```
git branch -d redesign
```

The `-d` flag deletes the branch (only allowed if the branch has been merged). The redesign branch is gone. Main has everything.

---

## A small honest moment

I have shipped sites where the polish layer was missing. The layout was right, the typography was right, the colors were right — but interactive elements had no hover state, focus rings were defaults or missing, transitions were instant. The sites *worked.* They felt like demos.

The polish pass is what separates "demo" from "product." It is also the cheapest part — you've already done the structural work; the polish is small additions on top. Skipping it because it's "just details" is missing that the details are the *product.*

---

## *The difference between "done" and "polished" is twenty small details that took a day. Take the day.* <!-- SIGNATURE LINE -->

The work is finished. The site exists, it's deployed, it's polished. You have something to point to.

---

## Try this

1. Apply all the rules above. Refresh and verify on every page.
2. Tab through one of your pages with the keyboard. Watch focus rings appear. Watch the skip link slide into view on first tab.
3. Hover over links and buttons. Notice the smooth color transitions.
4. Run Lighthouse on the live site one more time. The accessibility score should still be high. The performance should be reasonable.
5. Take a screenshot of the live site. Save it next to the unstyled screenshot from the HTML book. Compare them. This is what one CSS book does.
6. Merge the redesign branch:
   ```
   git checkout main
   git merge redesign
   git push
   git branch -d redesign
   ```
7. Open the live URL. The site is now redesigned, in production, available to everyone.

---

## CHAPTER HANDOFF REPORT

**Chapter:** 11 — A Visual Pass
**Word count:** ~1,700
**Signature line:** *The difference between "done" and "polished" is twenty small details that took a day. Take the day.*

**Project milestone:** Form styled. Table styled. Hover/focus/transitions throughout. Skip link properly hidden until focus. Redesign branch merged into main. Live site updated.
**Files touched:** `style.css`. Git: branch merged.
**Concepts introduced:**
- Form styling (`font-family: inherit`, focus rings, button styling)
- Table styling (`border-collapse`, padding, separators)
- Transitions (specific properties, not `all`)
- `:focus-visible` (vs `:focus`)
- The skip-link reveal pattern
- Git merge workflow

**Items flagged for verification:** None.

**Honest-admission moment:** "I have shipped sites where the polish layer was missing..."
**Permission-giving moment:** Implicit in "the polish is small additions on top."

**STATUS:** Continuing.
