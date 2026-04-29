# Chapter 2 — The Cascade, Specificity, and Inheritance

The "C" in CSS stands for *Cascading.* It is the most important word in the name and the one most beginners ignore.

The cascade is the system the browser uses to decide which CSS rule wins when more than one rule applies to the same element. Almost every confusing CSS bug you will ever encounter — *I set the color to red, why is it still blue?* — is a cascade problem. Spend forty minutes on this chapter and the next three years of your CSS work get easier.

---

## The problem the cascade solves

You have a webpage. The browser has its own default styles for every element (paragraphs have a margin, links are blue and underlined, headings are bold). On top of that, you write your own styles. On top of *that,* a user might have their own preferences — high contrast, larger fonts, a custom theme.

For any given element, multiple rules might want to set the same property. The browser default says links are blue. Your CSS says links are dark green. The user's setting says links are bright yellow. Which color wins?

The cascade is the algorithm that decides. It has three main inputs: **origin** (whose rule it is), **specificity** (how specific the selector is), and **order** (which rule comes last in the source). We'll look at each.

---

## Origin

Every CSS rule comes from one of three places:

1. **The browser's built-in stylesheet.** This is what makes paragraphs have margins by default, links blue, headings bold.
2. **The user's stylesheet.** Modern browsers let users customize colors and font sizes; some users do this for accessibility reasons.
3. **Your stylesheet** — the one in `style.css` you wrote.

In general, the user's stylesheet wins over yours, and yours wins over the browser's. The browser's defaults are the lowest priority — they fill in only the gaps you haven't filled in yourself.

You will not interact with user stylesheets directly in this book. The thing to remember: when you set a property on an element, you are overriding the browser's default for that property on that element. You are *adding* a rule to the cascade.

---

## Specificity

When two rules from your own stylesheet apply to the same element, specificity decides which wins. More specific selectors beat less specific ones.

Specificity is a number with three parts, written like `a, b, c`. Higher numbers win.

- An ID selector (`#main-content`) contributes to the first part.
- A class selector (`.nav-link`) or attribute selector (`[type="email"]`) or pseudo-class (`:hover`) contributes to the second part.
- An element selector (`p`, `a`, `img`) or pseudo-element (`::before`) contributes to the third part.

Some examples:

| Selector | Specificity |
|---|---|
| `p` | 0, 0, 1 |
| `a` | 0, 0, 1 |
| `nav a` | 0, 0, 2 |
| `.nav-link` | 0, 1, 0 |
| `nav a.nav-link` | 0, 1, 2 |
| `#main-content p` | 1, 0, 1 |

A class selector beats any number of element selectors. An ID selector beats any number of class selectors. Specificity is hierarchical, not additive — `0, 1, 0` beats `0, 0, 999`.

The practical takeaway: if your CSS rule isn't applying, check whether another rule with a more specific selector is overriding it.

---

## Order (when specificity ties)

If two rules have the same specificity and apply to the same element, the rule that comes *later* in the source wins.

```css
p {
  color: red;
}

p {
  color: blue;
}
```

Both rules have specificity `0, 0, 1`. They tie. The second one wins because it comes later. Paragraphs are blue.

This is why the order of rules in your CSS file matters. Most stylesheets are organized roughly from general to specific — base styles for elements at the top, then component-specific styles below. Later rules naturally win because they're more specific in the file's logic too.

---

## Inheritance

Some CSS properties inherit from parent to child. Some don't.

`color`, `font-family`, `font-size`, `line-height`, and a handful of other typography-related properties inherit. If you set `color: blue` on the body, every element inside the body that doesn't have its own color set will be blue. Headings, paragraphs, links (links are a partial exception — they have their own browser default that overrides inheritance), all of it.

Most other properties — `background-color`, `border`, `margin`, `padding`, `width`, `height`, `display` — do not inherit. Setting `background-color: yellow` on the body gives the body a yellow background; it does not give every paragraph its own yellow background.

This split is intentional. Properties that affect text inheritance make sense at scale (you don't want to set the font on every element individually). Properties that affect layout don't inherit, because applying them to every element would create chaos.

You don't need to memorize the lists. The patterns are intuitive: if it's about text, it probably inherits. If it's about boxes, it probably doesn't. Look up the exceptions when they bite you.

---

## Trying it out

Open `style.css`. Replace what's there with this:

```css
body {
  background-color: #fafaf7;
  color: #1a1a1a;
  font-family: Georgia, serif;
}

p {
  color: #444;
}

.intro {
  color: #1a1a1a;
}
```

Save. Now we need an element with the class `intro` to test the third rule. Open `index.html`. Find the first `<p>` after the `<h1>` — the introductory paragraph that says *"A small, practical reference..."*. Add the class:

```html
<p class="intro">A small, practical reference for people who are learning to build for the web...</p>
```

Save. Refresh.

Notice that paragraph is darker than the others. The body rule sets the color to `#1a1a1a` (very dark, near black). The `p` rule overrides that to `#444` (medium gray). The `.intro` rule overrides *that* back to `#1a1a1a`, but only for the one paragraph with the `intro` class.

That is the cascade in action. The class selector (specificity `0, 1, 0`) beats the element selector (specificity `0, 0, 1`), even though the element selector comes later in the file. Specificity wins over order.

---

## When the cascade is biting you

The single most useful debugging move in CSS: open DevTools, click on the element that's behaving weirdly, look at the Styles panel on the right side of the Elements tab. The Styles panel shows you, for the selected element, every CSS rule that applies, in order of specificity. Rules that are overridden by more specific rules are crossed out. You can see at a glance which rule is winning and which are losing.

If you set a property on an element and it's not showing up, open the Styles panel for that element. Find your rule. If your property is crossed out, something else is overriding it — and the Styles panel tells you what. The fix is usually one of: increase your selector's specificity, or change the order, or remove the conflicting rule.

This single DevTools panel will save you hours over the next year. Use it every time CSS surprises you.

---

## A small honest moment

I spent the first six months of writing CSS not understanding the cascade. I would set a color and the color wouldn't apply, and I would respond by *making the rule louder* — slapping `!important` on the end, writing more specific selectors, copying the rule three times. The page would eventually do what I wanted, in a fragile way that broke if I touched anything else.

The fix was twenty minutes of reading about specificity and the Styles panel in DevTools. After that, every "why isn't this working" moment became a thirty-second investigation instead of a ten-minute thrash.

`!important` should not appear in your CSS unless you have a specific, defensible reason — usually overriding a third-party stylesheet you can't change. If you find yourself writing it, the fix is almost always to understand which rule is winning and adjust selectors accordingly.

---

## *The cascade is not a bug. It is the language doing what it was designed to do — gracefully.* <!-- SIGNATURE LINE -->

CSS is *cascading* on purpose. The cascade is what lets the browser fill in defaults, lets you override them where you want, and lets users override yours where they need to. The result is a system where every element gets a complete set of styles even if you only specify a few — and where multiple stylesheets can compose without explicit coordination.

It feels like chaos when you don't understand it. It feels like the right kind of system once you do.

---

## A small permission

You will not always know, just by looking at your CSS, which rule is going to win. That is fine. Open DevTools. Check the Styles panel. The browser is the authoritative source of truth — your job is to read what the browser is telling you, not to predict it perfectly in your head.

The mental model is helpful. The DevTools verification is faster.

---

## Try this

1. In `style.css`, add a fourth rule:
   ```css
   nav a {
     color: #1a1a1a;
   }
   ```
   Refresh. Notice the nav links are now darker than other links on the page. The `nav a` selector is more specific than `a` alone, so it wins for links inside the nav.

2. Add a class to one of the nav links and a rule to override the color back:
   ```css
   .active-link {
     color: #b34a00;
   }
   ```
   And on `index.html`, on the Home link in the nav (you can do this on every page's nav — add it to the link that points to the *current* page on each page):
   ```html
   <li><a href="index.html" class="active-link">Home</a></li>
   ```

3. Refresh. The Home link is now in the brand color. The class selector beats the `nav a` selector.

4. Open DevTools, click on the Home link in the Elements panel. Look at the Styles panel. You should see all three rules — `body`, `nav a`, `.active-link` — and watch the cascade play out, with the more specific rule winning.

5. Commit:
   ```
   git add .
   git commit -m "Practice cascade with nav and active-link styles"
   git push
   ```

In Chapter 3, we'll look at the box model — what every element on the page actually is, dimensionally.

---

## CHAPTER HANDOFF REPORT

**Chapter:** 2 — The Cascade, Specificity, and Inheritance
**Word count:** ~2,000
**Signature line:** *The cascade is not a bug. It is the language doing what it was designed to do — gracefully.*

**Project milestone:** Cascade explored with deliberate experiments. Active-link styling demonstrates specificity in practice.
**Files touched:** `style.css`, all HTML pages (active-link class added).
**Concepts introduced:**
- Origin: browser/user/author stylesheets
- Specificity: ID, class, element levels
- Order as tiebreaker
- Inheritance: which properties inherit, which don't
- The Styles panel in DevTools as the truth
- Why `!important` is almost always wrong

**Items flagged for verification:** None.

**Honest-admission moment:** "I spent the first six months of writing CSS not understanding the cascade..."
**Permission-giving moment:** "You will not always know, just by looking at your CSS, which rule is going to win. That is fine."

**STATUS:** Continuing.
