# Chapter 4 — Links and Navigation

Right now your site has three pages — `index.html`, `about.html`, and `path.html` — sitting in the same folder, with no way to get from one to another except by typing filenames into your browser's address bar. That is not how the web works. The web is hyperlinked. Pages point at other pages, the user clicks, the browser follows. That is the whole reason the web exists.

This chapter is about the anchor element — `<a>` — and the small set of patterns that make a multi-page site feel like a real site. By the end of the chapter, every page will have a working navigation across the top, and you will be able to click from anywhere to anywhere.

---

## The anchor element

The link is one element with one critical attribute.

```html
<a href="about.html">About</a>
```

That is a link. The element is `<a>` (for *anchor,* the term from when web pages were thought of as documents and links were anchors that pointed at other anchors). The `href` attribute (for *hypertext reference*) holds the destination — the place the link points to. The text between the opening and closing tags is what the user sees and clicks.

When the user clicks the link, the browser navigates to whatever is in the `href`. If the destination is another file in your project, the browser loads that file. If it's a URL on a different site, the browser navigates there. The mechanism is the same in both cases.

Three forms of `href` you will use constantly. Each has its place.

---

## Relative paths

A relative path points to a file *relative to the current page.* It does not name a domain. It does not start with `http://`. It just names a file or folder, and the browser figures out the rest.

```html
<a href="about.html">About</a>
```

Reading from `index.html`, the browser looks in the same folder for a file called `about.html`. If your site is at `https://yoursite.com/` and the user is on `https://yoursite.com/index.html`, this link goes to `https://yoursite.com/about.html`.

If you have files in subfolders, you can navigate into them:

```html
<a href="articles/first-article.html">First Article</a>
```

That goes into the `articles/` subfolder and finds `first-article.html` inside it.

You can navigate up out of a subfolder with `..`:

```html
<a href="../index.html">Home</a>
```

That goes up one folder, then to `index.html`. From a file inside `articles/`, this would take you back to the project root.

For now, all your files are in one folder, so all your relative links will be the simple form: just a filename.

---

## Absolute URLs

An absolute URL specifies the full destination including the protocol (`https://`) and the domain.

```html
<a href="https://developer.mozilla.org/">MDN</a>
```

Use absolute URLs for links to other websites. The browser is given the complete address and goes directly there.

You will accumulate a lot of these as the project grows. The tools page in particular will be a list of absolute URLs to external resources. The errors page may link out to documentation pages on MDN — the Mozilla Developer Network, which is the closest thing the web has to an authoritative reference for HTML, CSS, and JavaScript. Get used to its URL. You will spend more time there than you spend on Stack Overflow over the next few years.

---

## Anchor links (within the same page)

The third form jumps to a specific spot *within the current page.* This is what we call an *anchor link.*

```html
<a href="#what-is-html">What is HTML?</a>
```

The `#` (called a *hash* or a *fragment*) tells the browser, *don't navigate to a different page; just scroll to the element on this page that has the id `what-is-html`.*

For that to work, some element on the page needs to have an `id` attribute matching the value:

```html
<h2 id="what-is-html">What is HTML?</h2>
```

Now if a user clicks the anchor link, the browser scrolls down (or up) to that heading. The URL changes to include the fragment — `path.html#what-is-html` — and a user could bookmark or share that URL and land directly at the right section.

Anchor links are how tables of contents work. They are how documentation sites jump you to specific sub-topics. They are how a long page becomes navigable.

`id` attributes have one rule worth knowing: each id on a page must be unique. You can use the same id across different pages, but you cannot have two elements on the same page with the same id. The browser uses the id to find a single element to jump to; if two have the same id, only the first one is found.

Use lowercase, hyphenated values for ids, like `what-is-html` or `getting-started`. Spaces and uppercase letters are allowed in the spec but cause friction with everything else. Stay with the convention.

---

## The site nav

Every page on your site needs a navigation that lets the user get to every other page. That nav should look the same on every page — same items, same order. Users learn it in three seconds and then never have to think about it again.

The nav goes inside an element specifically designed for it: `<nav>`. We will go deeper on the `<nav>` element in Chapter 6 when we cover semantic structure. For now, just know it is the right wrapper for a site's main navigation. Inside the `<nav>`, the navigation is structured as an unordered list of links. Each item in the list is a link to one of the site's pages.

Open `index.html`. Inside the `<body>`, *above* the `<h1>`, add this:

```html
<nav>
  <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="path.html">Path</a></li>
    <li><a href="glossary.html">Glossary</a></li>
    <li><a href="errors.html">Errors</a></li>
    <li><a href="tools.html">Tools</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
</nav>
```

Some of those links point to files that don't exist yet — `glossary.html`, `errors.html`, `tools.html`, `contact.html`. We will create them in later chapters. The links will be broken until then. That is fine. The structure is correct, and the broken links will repair themselves as we add the files.

Save. Open `index.html` in the browser. You'll see the navigation as a vertical bulleted list of links above the main heading. The Home, About, and Path links work. The others give a "file not found" page when clicked. (We will see what those errors look like and how to read them properly in Chapter 10.)

Now copy the same `<nav>` block into `about.html` and into `path.html` — same place, just inside the `<body>`, above the `<h1>`. Every page should have the same nav. Save both files.

Open one of the pages and click around. Home → About → Path → Home. You can navigate between every page that exists. The site is now a *site,* not just a folder full of HTML files.

---

## A small honest moment

The first time I built a site like this, I copied the `<nav>` block into every page by hand and immediately wondered if there was a better way. The answer in 2026 is that there is — but not in this book. Tools that share common chunks across pages (templates, components, frameworks) are exactly what React, the topic of Book 5, is for. For now, you copy the nav into each new page you create. It is not elegant. It is also fine for a seven-page site, which is what we are building.

Resist the urge to learn templating right now. The discomfort of copying the same block of HTML across pages is part of what makes you appreciate, in Book 5, what frameworks are for. Without the discomfort, the framework looks like magic for no reason.

---

## Linking out, and the security gotcha

When you link to another website, you sometimes want the link to open in a new tab — for example, when linking to documentation that the user might want to read alongside your page rather than in place of it.

The attribute that does this is `target`:

```html
<a href="https://developer.mozilla.org/" target="_blank">MDN</a>
```

`target="_blank"` means *open this link in a new browsing context,* which most browsers translate to *open in a new tab.*

There is a small security caveat. When a link opens in a new tab using `target="_blank"`, the new page can — under some conditions in some older browsers — manipulate the original page through a quirk in how JavaScript exposes the link relationship. To prevent that, you add a `rel` attribute:

```html
<a href="https://developer.mozilla.org/" target="_blank" rel="noopener noreferrer">MDN</a>
```

`noopener` blocks the new page's access to the original. `noreferrer` additionally prevents the new page from knowing what page you came from.

Modern browsers default to safe behavior here even without the `rel` attribute, but adding it is a habit that costs you nothing and protects users on older setups. Whenever you write `target="_blank"`, write `rel="noopener noreferrer"` next to it. Make it muscle memory.

There is one more permission to give yourself: most links don't need `target="_blank"`. The default — opening in the same tab — is correct most of the time. Open new tabs only when there is a real reason. Forcing every link to open in a new tab is a small frustration that adds up over a long page. Defaults exist for a reason.

---

## An anchor link inside the path page

To finish the chapter, let's add an anchor link inside the path page. Right now the path page has two articles. As the site grows, it will have more, and a table of contents at the top will save the user from scrolling to find what they want.

Open `path.html`. Inside the body, just under the `<h1>`, add a small table of contents:

```html
<h2>Articles</h2>
<ol>
  <li><a href="#what-html-actually-is">What HTML actually is</a></li>
  <li><a href="#why-html-and-css-are-separate">Why HTML and CSS are separate</a></li>
</ol>
```

Now, on the headings of those articles, add the matching `id` attributes:

```html
<h2 id="what-html-actually-is">1. What HTML actually is</h2>
```

```html
<h2 id="why-html-and-css-are-separate">2. Why HTML and CSS are separate</h2>
```

Save. Open `path.html` in the browser. You should see the table of contents above the first article. Click one of the items. The browser scrolls (instantly, because the page is short) to the matching heading. Look at the address bar — it now ends in `#what-html-actually-is`. That fragment is part of the URL. You could share the URL and someone clicking it would land on the article directly.

That mechanism is how every long-form documentation page on the web works. It is also how people share a specific point in a long article, by copying the URL after they have clicked an anchor link.

---

## *A link is the smallest unit of the web. Used right, it is also the most powerful.* <!-- SIGNATURE LINE -->

Almost everything you'll build for the rest of your career is, at the bottom of the abstraction stack, a thing that produces or follows links. A search result is a list of links. A social media feed is a list of links. A documentation site is a tree of links. A web app is a network of links and forms. The link is the smallest unit because every other interaction can be modeled on top of it. The browser does the link forms well. We build everything else on that foundation.

You have just done one of the things that makes a website feel like a website. The next thing — the structural elements that turn a list of pages into a real document — is Chapter 6. Before that, in Chapter 5, we'll add images.

---

## Try this

1. Add a third article to the path page. Use this content:

   ```html
   <h2 id="what-css-does">3. What CSS does</h2>
   <p>CSS — Cascading Style Sheets — is the language used to describe how HTML should be presented. It controls colors, fonts, spacing, layout, and the responsiveness of a page across screen sizes.</p>
   <p>CSS does not change what is on the page. It changes how what's on the page looks. The HTML structure is the same; CSS is the rules for how to draw that structure on a screen.</p>
   <p>The next book in this trilogy is about CSS. By the end of it, this site will look like a real, presentable, modern website. For now, while you are still reading this book, the site will stay unstyled. That is intentional, not an oversight.</p>
   ```

2. Add a corresponding entry to the table of contents at the top of the page:
   ```html
   <li><a href="#what-css-does">What CSS does</a></li>
   ```

3. Save. Test the new anchor link in your browser.

4. Commit:
   ```
   git add path.html index.html about.html
   git commit -m "Add nav across pages and TOC on path page"
   git push
   ```

When that's done, the chapter is over. In Chapter 5, we'll add images and a logo to the site.

---

## CHAPTER HANDOFF REPORT

**Chapter:** 4 — Links and Navigation
**Word count:** ~2,050
**Signature line:** *A link is the smallest unit of the web. Used right, it is also the most powerful.*

**Project milestone:** Every existing page has the full site nav. Path page has a working table of contents using anchor links.
**Files touched:** `index.html`, `about.html`, `path.html`.
**Concepts introduced:**
- The `<a>` element and `href`
- Relative paths
- Absolute URLs
- Anchor links (`#fragment`) and matching `id` attributes
- The `<nav>` wrapper (briefly — full coverage in Ch.6)
- `target="_blank"` and the `rel="noopener noreferrer"` security companion
- Why links default to same-tab behavior

**Items flagged for verification:**
- [VERIFY:] MDN URL still https://developer.mozilla.org/ at print time.

**Honest-admission moment:** "The first time I built a site like this, I copied the `<nav>` block into every page by hand and immediately wondered if there was a better way."
**Permission-giving moment:** "Resist the urge to learn templating right now."

**STATUS:** Continuing.
