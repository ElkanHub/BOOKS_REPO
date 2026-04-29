# Chapter 8 — Color and Identity

A site has color whether you choose it or not. The browser defaults give you white, black, and blue links. Those defaults are perfectly readable. They are also invisible — they belong to the browser, not to your project.

This chapter is about giving your site a small color identity. Not a brand kit. Not a design system. A small, opinionated palette of about five colors, used consistently, that makes the site feel like it belongs to one place. That is the bar.

This is also one of the legitimate places where readers' versions of the field guide will diverge slightly. The structure is the same. The features are the same. The five colors are yours.

---

## How CSS colors work

CSS supports several color formats. The ones you'll see most:

**Hex codes:** `#1a1a1a`. Six hex digits — two for red, two for green, two for blue. `#000000` is black, `#ffffff` is white. Three-digit shortcuts (`#fff`) work for colors where each pair is the same digit doubled.

**RGB:** `rgb(26, 26, 26)`. Three numbers from 0 to 255 — red, green, blue. Same colors as hex, different syntax.

**RGB with alpha:** `rgb(26, 26, 26, 0.5)`. The fourth number is opacity, from 0 (transparent) to 1 (fully opaque). Useful for overlays.

**HSL:** `hsl(0, 0%, 10%)`. Hue (0–360), saturation (0–100%), lightness (0–100%). HSL is friendlier for color tweaking — *I want this color but darker* is "lower the lightness," not "do RGB math."

**Named colors:** `red`, `blue`, `tomato`, `dodgerblue`. About 140 of them. Useful for prototypes, less so for design.

For consistency in production code, pick one format and stay with it. We'll use hex for this book because it's the most common in modern CSS and the easiest to copy from design tools.

---

## Picking a palette

A small site needs about five colors:

1. **Background** — the dominant color of the page. Almost always near-white or very light.
2. **Text** — the dominant color of body text. Almost always near-black or very dark.
3. **Brand / accent** — the color that says *this site.* Used for links, buttons, headings if you want that style. One color, used everywhere it appears.
4. **Muted text** — for secondary information (timestamps, captions, less-important text). A lighter version of the text color.
5. **Border / subtle background** — for separators, card backgrounds, table borders. A very light gray.

That's the whole palette. Five values. You can grow this later if a project needs it. Most don't.

For the field guide, here's a starting palette (you can change it):

```css
/* Background */
#fafaf7   /* warm off-white */

/* Text */
#1a1a1a   /* near-black */

/* Brand */
#b34a00   /* warm orange */

/* Muted text */
#666666   /* medium gray */

/* Border / subtle */
#e5e3dd   /* warmer light gray */
```

Five colors. They sit together because they share a temperature (warm) and a sense of restraint (no neon). If you want a different feel — cooler, brighter, more contrast — change them. Pick what fits.

---

## Applying the palette

Update `style.css`. Find your existing rules and adjust the colors:

```css
body {
  background-color: #fafaf7;
  color: #1a1a1a;
}

a {
  color: #b34a00;
}

a:hover {
  text-decoration: underline;
  text-underline-offset: 0.2em;
}

a:visited {
  color: #8a3800;
}

header {
  border-bottom: 1px solid #e5e3dd;
}

nav a {
  color: #1a1a1a;
  text-decoration: none;
}

nav a:hover {
  color: #b34a00;
}

.muted {
  color: #666666;
}
```

A few new things in there.

`a:hover` is a *pseudo-class* — a selector that matches an element in a particular state. `:hover` matches when the user's cursor is over the element. The browser applies the rule only while the user hovers. When they move away, the original style returns.

`a:visited` matches links the user has already visited. The browser tracks this in their history. The default styling for visited links is purple, which is jarring on most sites. Override it to a slightly darker version of your brand color so visited links feel related but distinct.

`text-decoration: none` removes the underline from a link. Default link styling underlines all links. For nav links, the underline reads as visual clutter; the position of the link in the nav already tells the user it's clickable. For body text links, keep the underline — the underline is what tells a reader inside a paragraph that a phrase is clickable.

`text-underline-offset: 0.2em` controls how far below the text the underline appears. Default underlines often touch the descenders of letters (the parts of g, p, q that hang below the baseline), which looks crowded. A small offset gives the underline breathing room.

Save. Refresh. Hover over a link. Watch the underline appear and the color shift. Click around. Watch visited links pick up the visited color. The site feels significantly more deliberate now.

---

## Contrast and accessibility

Color choices have an accessibility dimension. Text needs enough contrast against its background that people with low vision can read it. The Web Content Accessibility Guidelines (WCAG) specify minimum contrast ratios — 4.5:1 for body text, 3:1 for large text.

You don't need to memorize ratios or do math. Use a contrast checker. **WebAIM's contrast checker** at *webaim.org/resources/contrastchecker/* lets you paste in two hex codes and get an instant result.

Run your background color and text color through it. The result should be "passes" for both AA (the minimum) and AAA (the higher tier) for normal text. If it doesn't, darken the text or lighten the background.

Run the brand color and the background. This is what link text on the body background looks like. It should pass at least AA for normal text. If it doesn't, adjust the brand color until it does.

Run muted text and background. This often fails at AAA but should pass AA. If muted text is too light to read, darken it.

Lighthouse, which we used in Chapter 9 of the HTML book, will catch contrast failures automatically when you run the audit. Run it again now that you've added colors.

---

## A small honest moment

I picked colors emotionally for years — colors I "liked," colors that "felt right" — without ever checking contrast. About a third of the time, the colors I liked failed contrast checks. The pages were genuinely hard for some users to read, and I had no idea, because the colors looked fine *to me.*

The lesson: your eyes are not a contrast checker. Tools are. Run the tools. Adjust until you pass. The visual difference between "looks fine to me" and "passes WCAG AA" is usually small — a few hex digits — and the practical difference between "fails" and "passes" is large.

---

## *Five colors, used consistently, beat fifty colors used randomly.* <!-- SIGNATURE LINE -->

The temptation as a beginner is to add more colors when something doesn't feel quite right — *maybe a green here, a different orange there.* Resist. Most "the design feels off" problems are layout problems, not color problems. The fix is more often spacing or typography, not another color.

Constrain yourself to five. Use them everywhere. The discipline pays off in coherence.

---

## A small permission

You can change the palette later. Easily. We're going to centralize these values in CSS variables in the next chapter, which means you'll be able to swap colors by changing one or two lines. Don't agonize over your first picks. Pick something. Use it. Refine in a week.

---

## Try this

1. Pick your five colors. Use the palette above as a starting point or substitute your own.
2. Apply them to your CSS. Refresh.
3. Run the WebAIM contrast checker on each text/background combination. Adjust until everything passes.
4. Run Lighthouse on a few pages. Confirm the accessibility score is still high.
5. Commit:
   ```
   git add .
   git commit -m "Color palette: background, text, brand, muted, border"
   ```

In Chapter 9, we'll move all these values into CSS variables so changing them is a one-line swap.

---

## CHAPTER HANDOFF REPORT

**Chapter:** 8 — Color and Identity
**Word count:** ~1,650
**Signature line:** *Five colors, used consistently, beat fifty colors used randomly.*

**Project milestone:** Five-color palette applied site-wide. Link styles distinct (default, hover, visited). Nav links styled. Contrast verified.
**Files touched:** `style.css`.
**Concepts introduced:**
- CSS color formats (hex, RGB, RGBA, HSL, named)
- The five-color minimum palette
- Pseudo-classes: `:hover`, `:visited`
- `text-decoration: none` and `text-underline-offset`
- WCAG contrast ratios and the WebAIM checker

**Items flagged for verification:**
- [VERIFY:] webaim.org/resources/contrastchecker/ URL still correct.

**Honest-admission moment:** "I picked colors emotionally for years..."
**Permission-giving moment:** "You can change the palette later. Easily."

**STATUS:** Continuing.
