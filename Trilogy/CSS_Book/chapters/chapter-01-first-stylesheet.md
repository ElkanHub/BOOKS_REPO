# Chapter 1 — The First Stylesheet

CSS lives in a separate file. A file that the HTML asks the browser to load, and the browser then applies to the page. The mechanics of that connection — making the file, linking it from the HTML, and writing the first rules — are what this chapter is about.

We're going to write maybe ten lines of CSS in this chapter. The purpose is not to do a lot. The purpose is to set up the file structure correctly, learn the basic shape of a CSS rule, and watch the page actually change for the first time.

---

## Creating `style.css`

Open the `frontend-field-guide` folder in VS Code. At the root of the folder — the same level as your HTML files — make a new file called `style.css`. The file is empty.

That is the file you will spend the rest of this book working in. Every visual choice on the site lives there. By the end of the book, the file will be a few hundred lines long. For now, it is empty.

---

## Linking the stylesheet

The HTML doesn't know about the CSS file unless you tell it. You tell it with a `<link>` tag inside the `<head>` of every HTML page. The link tag is self-closing. It has three attributes that matter.

```html
<link rel="stylesheet" href="style.css">
```

`rel="stylesheet"` tells the browser, *the thing at this URL is a stylesheet.* `href="style.css"` is the path to the file, following the same rules as link href and image src. There is no closing tag.

Open `index.html`. Find the `<head>`. Add the link tag right before the closing `</head>`:

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Frontend Field Guide</title>
  <link rel="stylesheet" href="style.css">
</head>
```

Save. Add the same line to the head of every other HTML page in your project: `about.html`, `path.html`, `glossary.html`, `errors.html`, `tools.html`, `contact.html`. All seven pages need the link. Save each file.

Refresh the browser. The page looks exactly the same as before, because the stylesheet is empty. Open DevTools and check the Network tab — refresh the page with the Network tab open and you should see `style.css` in the list of resources the browser loaded. If you don't, the link is wrong; check the path and the spelling.

The connection works. We can now write rules in `style.css` and watch the browser apply them.

---

## The shape of a CSS rule

Every CSS rule has the same three pieces. Selector, property, value.

```css
selector {
  property: value;
}
```

The **selector** is the part that picks out which elements the rule applies to. The simplest selector is just the name of an element — `body`, `p`, `h1`, `a`, `img`. Whatever you put before the curly brace, the rule applies to.

The **property** is what aspect of those elements you want to change — `color`, `background-color`, `font-size`, `margin`. CSS has a few hundred properties. We will use maybe forty of them in this book. The rest you'll meet as you need them.

The **value** is what you want that property to be — `red`, `16px`, `1.5`, `Helvetica`. The valid values depend on the property. Some properties take colors. Some take lengths. Some take keywords like `block` or `inline`.

A complete rule:

```css
body {
  background-color: white;
  color: black;
}
```

That rule says: *for every `<body>` element on the page, set the background color to white and the text color to black.* Both of those are already the browser's defaults, so the rule wouldn't change anything visible. We're starting with something closer to the defaults so you can see the syntax before we change anything dramatic.

A few syntax rules worth internalizing now.

The selector goes before the curly brace. The property and value go inside the curly braces, separated by a colon. Each declaration ends with a semicolon. The semicolon on the last declaration in a rule is technically optional, but always include it — when you add a new declaration later, you'll forget to add the semicolon to the old last line, and the resulting bug is unpleasant.

Whitespace doesn't matter to the browser. The CSS could be on one line or many. Use the formatting above — one declaration per line, two-space indent inside the rule, a blank line between rules — because it's what other developers will recognize when they read your code.

---

## Your first real change

Open `style.css`. Type this:

```css
body {
  background-color: #fafaf7;
  color: #1a1a1a;
  font-family: Georgia, serif;
}
```

Save.

Refresh the browser.

The page changes. The background is a soft off-white instead of pure white. The text is a slightly softer black. The font is Georgia — a serif font that comes pre-installed on virtually every computer — instead of the browser's default sans-serif Times-or-similar.

It is not a dramatic change. It is also unmistakably *not* the unstyled version. You wrote three lines, the browser applied them, the page is different.

Walk through what just happened. The browser loaded `index.html`, saw the `<link>` to `style.css`, fetched and parsed the CSS file. It found one rule: `body { ... }`. It looked at the page, found the `<body>` element, and applied the three declarations. Everything inside the body inherited the color and font, because color and font properties cascade down by default. The background only affected the body itself, because background does not inherit.

The mechanism is consistent. You write rules. The browser applies them. The page changes.

---

## Comments

You can leave notes inside a CSS file using comments. The syntax is `/* ... */`:

```css
/* This rule sets the global font and colors for the site. */
body {
  background-color: #fafaf7;
  color: #1a1a1a;
  font-family: Georgia, serif;
}
```

Comments are ignored by the browser. They are for the human reading the file. Use them sparingly — most CSS doesn't need explaining if the property names are clear and the structure is logical. Reserve comments for genuinely non-obvious choices.

A common bad comment:

```css
/* Set color to red */
.error {
  color: red;
}
```

That comment doesn't add anything the property name doesn't already say. Skip it.

A useful comment:

```css
/* Slightly off-white to reduce eye strain compared to pure white */
body {
  background-color: #fafaf7;
}
```

That tells future-you (or a teammate) *why* the value isn't `white`. The reasoning is the part worth saving.

---

## A small honest moment

The first time I linked a stylesheet, I forgot to put `rel="stylesheet"` in the link tag. The browser fetched the file but did nothing with it, because without the `rel` attribute, the browser doesn't know what the file is for. I spent twenty minutes editing the CSS, refreshing the page, watching nothing happen, and concluding that CSS just didn't work.

If you write CSS and the page doesn't change, the first thing to check is the link. Open DevTools, look at the Elements panel, find the `<link>` in the `<head>`. Make sure `rel="stylesheet"` is there. Make sure the `href` points to a file that exists. Make sure the file is in the right place. Most "CSS isn't working" problems are link problems.

---

## *Every CSS rule is selector, property, value. The whole language is built on that one shape.* <!-- SIGNATURE LINE -->

That is the whole syntactic foundation of CSS. Every chapter from now on adds new selectors, new properties, new values — but the shape of a rule never changes. Once you have the shape, you have the language. The depth comes from learning what selectors and properties are available and what they do. The structure is what you just wrote.

---

## A small permission

If you have read about CSS before, you may have heard of CSS preprocessors — Sass, LESS, PostCSS. Or CSS-in-JS, or styled-components, or Tailwind. These are all real tools, used in real projects, and you will encounter them eventually.

We are not using any of them in this book. We are using plain CSS, in a `.css` file, linked the way it has been linked since the late 1990s. The reason is that everything else builds on top of plain CSS. If you understand plain CSS, the rest are layers you can learn when you need them — and you will recognize, when you encounter them, what they are doing under the hood. If you skip plain CSS and learn Tailwind first, you will be able to ship things, but you won't actually know CSS, and the moment you have to debug something Tailwind didn't anticipate, you'll be stuck.

Plain CSS is the foundation. We're laying the foundation. The tools are layers on top.

---

## Try this

1. Make sure the `<link>` tag is in every HTML page in your project.
2. Open the live site (after deploying — but you don't need to deploy yet; just check locally).
3. In `style.css`, change the background color to something else. Try `#fffaf0` (a creamy off-white) or `#f0f4f7` (a cool blue-gray) or any other color you want to experiment with.
4. Refresh and look. Try a few different values.
5. Settle on a background color you like for now. We'll revisit color choice deliberately in Chapter 8 — you don't have to commit to anything.
6. Commit:
   ```
   git add .
   git commit -m "Add stylesheet link to all pages; first three CSS rules"
   git push
   ```

When that's done, the chapter is over. In Chapter 2 we'll look at what happens when more than one rule applies to the same element — the cascade, and why it matters.

---

## CHAPTER HANDOFF REPORT

**Chapter:** 1 — The First Stylesheet
**Word count:** ~2,000
**Signature line:** *Every CSS rule is selector, property, value. The whole language is built on that one shape.*

**Project milestone:** `style.css` exists. Linked from all 7 HTML pages. First three declarations applied (background color, text color, font family).
**Files touched:** `style.css` (new), all HTML files (link added).
**Concepts introduced:**
- The `<link rel="stylesheet">` tag
- The shape of a CSS rule (selector, property, value)
- Element selectors (just the tag name)
- Properties: `background-color`, `color`, `font-family`
- CSS comments
- Verifying the stylesheet is loaded (Network tab in DevTools)

**Items flagged for verification:** None.

**Honest-admission moment:** "The first time I linked a stylesheet, I forgot to put `rel='stylesheet'`..."
**Permission-giving moment:** "Plain CSS is the foundation. We're laying the foundation. The tools are layers on top."

**STATUS:** Continuing.
