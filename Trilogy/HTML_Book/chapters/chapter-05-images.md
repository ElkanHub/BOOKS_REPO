# Chapter 5 — Images and Media

Until now your site has been pure text. Adding an image is one of the smallest changes you can make to a page that has the largest visual effect. It is also the easiest place to write code that is technically correct and quietly broken — that loads on your machine but not on someone else's, that works in a browser but is invisible to a screen reader, that displays fine on your laptop but blurs on someone's phone.

This chapter is about doing it right the first time.

---

## The `<img>` element

Images use the `<img>` tag. It is self-closing — no closing form. The image's source goes in the `src` attribute. The image's alternative text goes in the `alt` attribute.

```html
<img src="logo.svg" alt="The Frontend Field Guide logo">
```

That's it. Two attributes, both required for any image you put on a page.

The `src` is the path to the image file, following the same rules as `href` for links. A relative path looks for a file in your project. An absolute URL goes to an image on the web. Most of your images will be in your project, in a folder you create for them.

Make a new folder inside `frontend-field-guide` called `assets`. This is where every image, font, and downloadable file in the project will live. Create the folder, but leave it empty for the moment. We'll put a file in it shortly.

---

## `alt` text is not optional

The `alt` attribute is for the alternative text — the text that represents the image when the image cannot be seen.

This sounds like an accessibility feature for users with screen readers, and it is. But it is also for everyone in three other situations: when the image fails to load (which happens to everyone, on a bad connection, or when a CDN goes down), when the image takes a long time to load (the alt text appears in its place while loading), and when the page is being read by a search engine that cannot see images.

Beginners sometimes treat `alt` as a checkbox to tick — they put any text in there to satisfy the requirement. *Image of a logo.* *Picture.* *Photo.* These are not useful. They tell the screen reader user nothing they didn't already know.

The rule for writing `alt` text is to imagine someone reading the page out loud over the phone. What would you say to communicate what this image is and why it's on the page? That is the alt text.

```html
<!-- Bad -->
<img src="logo.svg" alt="logo">

<!-- Good -->
<img src="logo.svg" alt="The Frontend Field Guide logo">
```

```html
<!-- Bad -->
<img src="screenshot.png" alt="screenshot">

<!-- Good -->
<img src="screenshot.png" alt="A screenshot of the Chrome browser DevTools panel, showing the Elements tab with HTML source highlighted.">
```

There is one exception: if an image is purely decorative — if removing it would not change the meaning of the page at all — the `alt` attribute should be present but empty:

```html
<img src="decorative-line.svg" alt="">
```

The empty alt tells screen readers to skip the image entirely. Without the attribute, the screen reader might read the filename, which is almost always worse than nothing. Empty alt is a deliberate signal: *this is decoration, not content.*

You will not have many decorative images. Most images on your site will be there for a reason. But knowing the exception is part of using the tool correctly.

---

## File formats: when to use which

There are four image formats you will use in 2026. Each is good at different things.

**SVG** — Scalable Vector Graphics. SVG files describe images mathematically (lines, curves, fills) rather than as a grid of pixels. The result is an image that scales to any size without losing sharpness. Use SVG for logos, icons, and any illustration that has clean geometric shapes. The file is a text file — you can open it in your editor and read it. SVG files are usually small and always sharp. They are the right choice for the field guide's logo.

**PNG** — Portable Network Graphics. PNG files are pixel-based and support transparency. Use PNG for screenshots, for images with sharp edges (like UI elements), and for any image where transparency matters. PNG files are larger than the alternatives below, so don't use them for photos.

**JPG** (also written **JPEG**) — Joint Photographic Experts Group format. JPG is a pixel format optimized for photographs. It compresses much better than PNG for images with smooth color gradients (skin, sky, landscapes). JPG does not support transparency. Use it for photos, never for screenshots or icons.

**WebP** — A newer format from Google that compresses better than both PNG and JPG, with optional transparency. Modern browsers all support it. Use WebP when file size matters — typically for photos and large illustrations on a page where many images live together.

The short version, for the field guide:

| What you have | Use |
|---|---|
| The logo or an icon | SVG |
| A screenshot of the browser | PNG |
| A photo | JPG (or WebP for smaller files) |
| Anything large where size matters | WebP |

You do not need to know how to make these files. You will save them from design tools or download them from the web. The job here is recognizing which kind you are looking at and using it correctly.

---

## Adding the field guide's logo

The companion repository contains a logo file you can use — a simple SVG that says *FFG* in a circle. Download `logo.svg` from the companion repo's `chapter-05/assets/` folder, and save it to your own `assets/` folder.

(If you don't have the companion repo set up — that's fine. You can use any small SVG you have, or you can skip the actual file and just put a placeholder filename. The point is the markup, not the specific image. We will fix the filename later.)

Open `index.html`. At the top of the body, *above* the existing `<nav>`, add:

```html
<img src="assets/logo.svg" alt="The Frontend Field Guide logo">
```

Save. Refresh the browser.

The logo appears at the top of the page, above the navigation. It is at its natural size, sitting on its own line. We will resize and reposition it in the CSS book; for now, it just needs to be there.

Add the same line to the top of the body in `about.html` and `path.html`. Every page should have the logo.

---

## A small honest moment

The first time I added an image to a page, I forgot to put the file in the project folder. I had typed the `src` attribute, the markup looked right, the page loaded — and the image was a broken-icon placeholder. I spent ten minutes inspecting my markup, certain there was a typo, before I checked whether the file was actually where I said it was.

Image bugs are almost always one of three things. The file isn't where the `src` says it is. The filename is misspelled (case-sensitive on some systems). Or the file extension is wrong — you have a `.png` and you wrote `.jpg`. When an image doesn't show, check those three first, in order. The fix is usually a one-character change.

---

## `srcset` and `sizes` — the basics

A laptop screen and a phone screen have very different pixel densities. An image that looks crisp on a laptop can look blurry on a high-density phone. An image that's the right size for a phone can be wastefully large on a laptop.

The HTML solution to this is `srcset`. You provide multiple versions of the same image at different sizes, and tell the browser which to use when. The browser picks the right one for the device.

```html
<img
  src="hero.jpg"
  srcset="hero-small.jpg 400w, hero-medium.jpg 800w, hero-large.jpg 1600w"
  sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1600px"
  alt="A photograph of a desk with a laptop, a notebook, and a cup of coffee.">
```

That is more complicated than what you have written so far, and it is fine to read it through once and not fully understand it. You will not need it for the field guide right now. The site has very few images, and they are SVGs, which scale infinitely without needing multiple versions. We are mentioning `srcset` because it exists, because you will see it in real-world code, and because once you understand the pattern, the rest of the syntax is just lookup.

The pattern: `srcset` lists the available image versions. `sizes` describes how big the image will be displayed at different screen widths. The browser does the math and picks the version that's the right resolution for the user's device. When you start using high-resolution photos in a real project, you'll come back to this.

---

## *The `alt` attribute is not for screen readers. It is for the moment the image fails to load — which happens to everyone.* <!-- SIGNATURE LINE -->

Make accessibility a habit by writing alt text the same way you write any other content on the page. Don't tack it on. Don't apologize for it. Don't write a different sentence in the alt than you would have written if the image were broken. The goal is for the page to be useful to anyone, on any device, in any condition. Alt text is one of the cheapest ways to get there.

---

## A small permission

You do not need to know every image format ever invented. There are formats from the 90s — GIF, BMP — that you will see occasionally and not need to use. There are formats specific to design tools — PSD, AI — that are not for the web at all. The four formats above (SVG, PNG, JPG, WebP) cover essentially everything you will need to put on a webpage in this decade.

If you encounter a format you don't know, the right move is to look up what it's for. The wrong move is to assume you should already know it. Most working developers couldn't tell you the difference between, say, JPEG and JPEG 2000. The depth is not the point. The breadth — knowing what to reach for, and when — is.

---

## Try this

1. Make sure the logo image (or your placeholder) is in your `assets/` folder.
2. Add the `<img>` tag to the top of the body in `index.html`, `about.html`, and `path.html`.
3. Open each page in the browser. The logo should appear above the navigation on each.
4. Right-click the logo in the browser and choose **Inspect** (or press F12). The DevTools panel opens. We'll spend a whole chapter on DevTools later. For now, just notice that the browser shows your `<img>` element, exactly as you typed it. The browser is not transforming your markup. The markup is the program.
5. Commit:
   ```
   git add .
   git commit -m "Add logo to all pages"
   git push
   ```

   The `git add .` command stages every changed file in the project. Useful when you've changed several files at once.

When that's done, the chapter is over. Chapter 6 is the most important chapter in this book — semantic structure. It is the one that turns *pages with HTML on them* into *real documents.*

---

## CHAPTER HANDOFF REPORT

**Chapter:** 5 — Images and Media
**Word count:** ~1,850
**Signature line:** *The `alt` attribute is not for screen readers. It is for the moment the image fails to load — which happens to everyone.*

**Project milestone:** Logo (or placeholder) on every page. `assets/` folder created.
**Files touched:** `index.html`, `about.html`, `path.html`. `assets/logo.svg` (new).
**Concepts introduced:**
- The `<img>` element, `src`, `alt`
- Why alt text is non-optional
- The empty-alt convention for decorative images
- File formats: SVG, PNG, JPG, WebP — when to use which
- Common image bugs (missing file, misspelled filename, wrong extension)
- `srcset` / `sizes` (introduced, deferred for full use)
- `git add .` shortcut

**Items flagged for verification:** None.

**Honest-admission moment:** "The first time I added an image to a page, I forgot to put the file in the project folder."
**Permission-giving moment:** "You do not need to know every image format ever invented."

**STATUS:** Continuing.
