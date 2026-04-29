# Chapter 7 — Typography

The Frontend Field Guide is a reading site. People will land on it and read text — articles, glossary entries, error explanations. If the typography is uncomfortable, they leave. If it's comfortable, they stay and read.

Most beginners treat typography as the part where you "pick a font." It is more than that. The font is one of about ten decisions that determine how a page reads. The other nine — line height, line length, font size, font weight, color contrast, letter spacing, vertical rhythm, hierarchy, and pace — matter just as much. This chapter walks through the ones that pay off most.

---

## Picking a typeface

Browsers ship with default fonts (usually Times-or-similar serif, Arial-or-similar sans-serif, Courier-or-similar monospace). They are fine for prototypes. They are not what makes a site feel intentional.

Modern websites use *web fonts* — typefaces loaded from a font service or from the site's own assets. Google Fonts is the simplest place to start: a free library of typefaces with copy-paste setup instructions.

Go to **fonts.google.com**. Browse. Pick two typefaces: one serif for body text, one sans-serif for headings (or pick two serifs, or two sans-serifs — it's a stylistic choice). For the field guide, two reasonable picks are **Source Serif 4** for body and **Inter** for headings, but choose what reads well to you.

Once you've picked, click each typeface and select the weights you want — for body text you typically need Regular (400) and maybe Bold (700); for headings Bold or ExtraBold. Less is more — every weight you load adds to the page's load time.

Google Fonts gives you a `<link>` tag to paste into your HTML's `<head>`. The link looks something like:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Source+Serif+4:wght@400;700&display=swap" rel="stylesheet">
```

Add it to the `<head>` of every HTML page, just before the link to your `style.css`. (Order matters in some specific cases, but here either order works.)

Then in your CSS:

```css
body {
  font-family: "Source Serif 4", Georgia, serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: "Inter", system-ui, sans-serif;
}
```

The font-family value is a list of fonts in order of preference. The browser tries each in turn until it finds one that's loaded and available. The list always ends with a generic fallback (`serif`, `sans-serif`, `monospace`) so the browser has something to use even if every named font fails.

Save. Refresh. The site is now rendering in your chosen typefaces. The change is dramatic.

---

## Line height

Line height is the vertical space between lines of text. The default in most browsers is around 1.2 — too tight for comfortable reading. Books, magazines, and well-designed websites use line heights in the 1.4 to 1.7 range for body text.

You may have already set `line-height: 1.6` on the body in Chapter 3. That's a good starting value. For headings, smaller is usually better — `line-height: 1.2` looks tighter and more deliberate.

```css
body {
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
  line-height: 1.2;
}
```

Line heights are usually expressed without a unit (just a number). The number is a multiplier on the font size. `line-height: 1.6` means each line is 1.6 times as tall as the font size. Without a unit, the multiplier scales with the font size — heading text gets proportionally tight line heights even though the headings are larger.

---

## Line length

A line of text that's too wide is exhausting to read — the eye has to travel too far before finding the next line. A line that's too narrow is choppy. The sweet spot for body text is about 50–75 characters per line.

You can't set characters per line directly in CSS, but you can set a `max-width` on text containers in `ch` units, where `1ch` is roughly the width of the character "0":

```css
main {
  max-width: 65ch;
}
```

Or in pixels (less precise but simpler):

```css
main {
  max-width: 720px;
}
```

You may already have one of these from Chapter 3. The exact value depends on your font and font size. Set it, look at the page, adjust until lines feel right. There's no objectively correct number — there's only "comfortable" and "uncomfortable," and your eyes know the difference.

---

## Font size

The browser default is 16 pixels. That is reasonable for body text but too small for comfortable reading on large screens. Most modern websites use 17 or 18 pixels for body text on desktop, dropping to 16 on mobile.

We're not going to do responsive font sizing yet — that's Chapter 10. For now, set a comfortable default:

```css
body {
  font-size: 18px;
}
```

For headings, use a *type scale* — a set of related sizes that have a consistent ratio between them. A common scale is:

```css
h1 { font-size: 2.5rem; }  /* 40px if base is 16, or 45px if base is 18 */
h2 { font-size: 2rem; }    /* 32px / 36px */
h3 { font-size: 1.5rem; }  /* 24px / 27px */
h4 { font-size: 1.25rem; } /* 20px / 22.5px */
```

The unit `rem` is relative to the *root* element's font size (which is the html element's, defaulting to 16px). Using `rem` for headings means if you change the base font size, all the headings scale proportionally. That's almost always what you want.

---

## Hierarchy

Typography establishes hierarchy visually — what the user looks at first, what looks important, what's secondary. The big moves:

- **Size.** Larger text reads as more important. Headings bigger than body. The h1 bigger than the h2.
- **Weight.** Bold text reads as emphasized. Use bold for headings and key terms.
- **Color.** Slightly lighter text reads as less important. Use this for metadata, captions, footnotes.
- **Spacing.** More space around an element makes it feel more important. Headings need top margin to separate them from the previous content.

Subtle differences add up. A page where every element looks the same gives the eye nothing to grab onto. A page with clear hierarchy reads itself.

---

## Putting it together

Add this to `style.css`, replacing your current body and adding new rules:

```css
body {
  margin: 0;
  background-color: #fafaf7;
  color: #1a1a1a;
  font-family: "Source Serif 4", Georgia, serif;
  font-size: 18px;
  line-height: 1.6;

  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

h1, h2, h3, h4, h5, h6 {
  font-family: "Inter", system-ui, sans-serif;
  line-height: 1.2;
  margin-block: 1.5em 0.5em;
}

h1 { font-size: 2.5rem; }
h2 { font-size: 1.75rem; }
h3 { font-size: 1.25rem; }

p {
  margin-block: 0 1em;
}

main {
  max-width: 70ch;
  padding-inline: 24px;
  margin-inline: auto;
}
```

The `1em` and `1.5em` units are relative to the element's own font size. `margin-block: 1.5em 0.5em` on headings gives them more space above (relative to their own size) than below — this groups each heading with the content that follows it.

Save. Refresh.

The site reads like a real document now. The headings are clearly hierarchical. The body type is comfortable. Lines are the right length. Whatever else changes, this is the foundation that makes the site feel like a serious place to read.

---

## A small honest moment

I shipped sites with terrible typography for years before I started taking it seriously. Default browser fonts. Default line height. Default font size. Lines that ran the full width of the screen. Headings that were just slightly bigger than the body text.

The sites worked. People used them. But every time I reopened the projects to add a feature, I would notice how unpleasant they were to read, and I would procrastinate by avoiding them. I didn't connect the procrastination to the typography until much later. Bad typography raises the cost of touching your own code, even subconsciously.

Good typography is one of the cheapest investments you can make in a project. An hour of work. The site reads better forever after.

---

## *Typography is what turns a page into a thing people actually read.* <!-- SIGNATURE LINE -->

The site already had the right structure. It already had the right semantics. It already had real content. What it didn't have was the typographic care to make the content inviting. Now it does. Refresh and look. The site reads like something someone made on purpose.

---

## A small permission

You don't have to be a designer to do typography well. The decisions are: pick a typeface, pick a line height, pick a line length, pick a size scale. The decisions have a small set of right answers and a much larger set of wrong ones, and you can ask your eyes to tell you which is which by reading the page.

If you can't decide, copy the values above. They are reasonable. You can refine later.

---

## Try this

1. Pick your two typefaces from Google Fonts (or stick with the suggestions). Add the link tag to every HTML page.
2. Apply the rules above. Refresh.
3. Try `font-size: 17px` on the body, then `19px`. Pick what reads best on your screen.
4. Try a different sans-serif for headings — open Google Fonts and pick a different one. Swap it in. Compare. Pick what feels right.
5. Commit:
   ```
   git add .
   git commit -m "Typography: web fonts, line height, type scale"
   ```

In Chapter 8, we add color and identity.

---

## CHAPTER HANDOFF REPORT

**Chapter:** 7 — Typography
**Word count:** ~1,800
**Signature line:** *Typography is what turns a page into a thing people actually read.*

**Project milestone:** Web fonts loaded. Body typeface, heading typeface, type scale, line heights, line length all set deliberately.
**Files touched:** All HTML files (font link added). `style.css`.
**Concepts introduced:**
- Web fonts (Google Fonts as starting point)
- font-family with fallback stacks
- Line height as a unitless multiplier
- Line length and the `ch` unit
- Type scale using `rem` units
- The `em` unit (relative to element's own font size)
- Visual hierarchy through size, weight, color, spacing

**Items flagged for verification:** None.

**Honest-admission moment:** "I shipped sites with terrible typography for years..."
**Permission-giving moment:** "You don't have to be a designer to do typography well."

**STATUS:** Continuing.
