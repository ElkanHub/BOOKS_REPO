# Chapter 9 — Custom Properties (CSS Variables)

Right now your stylesheet repeats values. The brand color `#b34a00` appears in three or four places. The background color `#fafaf7` appears in two. Every place a value is repeated is a place you have to remember to update if you ever change it.

CSS Variables — formally called *custom properties* — fix this. You define a value once, give it a name, and use the name everywhere. Change the value in one place; every use updates. It is the single biggest maintainability win in modern CSS, and it costs you ten lines of code to set up.

---

## Defining a variable

Custom properties are declared with names that start with `--`:

```css
:root {
  --color-bg: #fafaf7;
  --color-text: #1a1a1a;
  --color-brand: #b34a00;
  --color-muted: #666666;
  --color-border: #e5e3dd;
}
```

`:root` is a selector that matches the root of the document — in HTML, that's the `<html>` element. Defining variables on `:root` makes them available everywhere on the page, because every element is a descendant of root.

You use a variable with the `var()` function:

```css
body {
  background-color: var(--color-bg);
  color: var(--color-text);
}
```

That's it. Define on `:root`, use with `var()`. The browser substitutes the value at the point the property is applied.

---

## Refactoring the site to use variables

Rewrite the top of your `style.css`:

```css
:root {
  /* Colors */
  --color-bg: #fafaf7;
  --color-text: #1a1a1a;
  --color-brand: #b34a00;
  --color-brand-dark: #8a3800;
  --color-muted: #666666;
  --color-border: #e5e3dd;

  /* Typography */
  --font-body: "Source Serif 4", Georgia, serif;
  --font-heading: "Inter", system-ui, sans-serif;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 16px;
  --space-4: 24px;
  --space-5: 40px;
  --space-6: 64px;

  /* Layout */
  --max-content: 70ch;
  --header-height: 80px;
}
```

Then go through the rest of your CSS and replace literal values with variable references. For example:

```css
body {
  background-color: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-body);
  ...
}

a {
  color: var(--color-brand);
}

a:visited {
  color: var(--color-brand-dark);
}

header {
  border-bottom: 1px solid var(--color-border);
  padding-block: var(--space-3);
}

main {
  max-width: var(--max-content);
}

nav ul {
  gap: var(--space-4);
}
```

Save. Refresh. The site looks identical. The values are the same. What changed is that they're all centralized.

---

## Why this matters

Three reasons.

**Maintenance.** When you decide your brand color isn't quite right, you change `--color-brand` once. Every place the brand color was used updates. Without variables, you'd be doing find-and-replace across the file and hoping you got every instance.

**Consistency.** When new code needs a color, you reach for `var(--color-brand)`, not a fresh hex code. Your palette stays a palette. Color drift — the slow accumulation of slightly-different versions of a color — doesn't happen.

**Theming.** Variables can be redefined at any level of the cascade. A child element can override a variable, and everything inside it that uses the variable picks up the new value. This is how dark mode works in modern CSS:

```css
:root {
  --color-bg: #fafaf7;
  --color-text: #1a1a1a;
}

[data-theme="dark"] {
  --color-bg: #1a1a1a;
  --color-text: #fafaf7;
}
```

A small JavaScript change (which we'll do in the JS book) flips an attribute on the body, and the entire site changes theme. Without variables, dark mode would mean rewriting every color rule.

---

## A small honest moment

I resisted CSS variables for about a year after they shipped, because I was used to Sass variables (a similar feature in the Sass preprocessor). I assumed CSS variables were the inferior version of something I already had. I kept using Sass.

Then I needed dark mode for a site, and Sass variables couldn't do it — Sass variables are resolved at build time, before the browser sees them, so they can't change based on user state. CSS variables can. I refactored the project to use CSS variables and got dark mode in twenty minutes. I have used them ever since.

The lesson, as with most CSS: when something new ships and looks like it duplicates something old, check what makes it different. Often the new thing has a property the old thing didn't, and that property turns out to be the whole point.

---

## *A CSS variable is a name for a value. That name lets you change the value once and have it change everywhere.* <!-- SIGNATURE LINE -->

That's the whole concept. Define on `:root`. Use with `var()`. Refactor as you need to. The benefit grows with the project — for a small site, the gain is mostly tidiness; for a large site, variables are the difference between a maintainable codebase and a brittle one.

---

## A small permission

You don't need to put every value in a variable. Variables pay off for values used in multiple places. A one-off value that appears once doesn't need a name. Make a variable when you find yourself typing the same value twice. Don't pre-create dozens of variables for values you might use later — they clutter the file and most won't get used.

The right level of variable use is "as much as the project rewards." Start with colors, fonts, and a few common spacing values. Add more when you find yourself repeating a value or wanting to tune one in multiple places.

---

## Try this

1. Refactor the top of your `style.css` to define the variables shown above. Adjust values to match your color palette and any other choices you've made.
2. Go through the rest of the file and replace literal values with `var()` calls. Don't try to do every value at once — focus on colors, fonts, and the spacing values you reuse. One-off values can stay literal.
3. Save. Refresh. Confirm the site looks unchanged.
4. Now experiment. Change `--color-brand` to a different color. Refresh. Notice how every link, hover state, and brand-colored element updates simultaneously. Change it back, or pick a new color you like more.
5. Commit:
   ```
   git add .
   git commit -m "Refactor to CSS custom properties"
   ```

In Chapter 10, we'll make the site responsive — work properly on phones, tablets, and big monitors.

---

## CHAPTER HANDOFF REPORT

**Chapter:** 9 — Custom Properties (CSS Variables)
**Word count:** ~1,400
**Signature line:** *A CSS variable is a name for a value. That name lets you change the value once and have it change everywhere.*

**Project milestone:** Stylesheet refactored. Colors, fonts, and spacing values centralized in `:root`. Site looks identical, code is meaningfully more maintainable.
**Files touched:** `style.css`.
**Concepts introduced:**
- Custom property declaration syntax (`--name: value`)
- The `:root` selector
- The `var()` function
- Why variables matter (maintenance, consistency, theming)
- Variable cascading and how dark mode will eventually work

**Items flagged for verification:** None.

**Honest-admission moment:** "I resisted CSS variables for about a year after they shipped..."
**Permission-giving moment:** "You don't need to put every value in a variable."

**STATUS:** Continuing.
