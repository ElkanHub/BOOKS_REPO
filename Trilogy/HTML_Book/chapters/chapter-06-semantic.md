# Chapter 6 — Semantic Structure

This is the chapter that separates someone who has typed HTML from someone who has *learned* HTML.

You can build everything you have built so far using nothing but `<div>` tags. A div is a generic container with no meaning. You can wrap anything in it. The browser will display the content. The page will render. From the user's point of view, watching the visual surface, the page will look the same.

But it will not be the same. A page built from divs is a page that the browser, the screen reader, the search engine, and every other consumer of the page has to guess at. They look at the markup and they see *box, box, box, box.* They have no idea which box is the navigation, which is the main content, which is the footer, which is a side note. The information is not in the markup. The information is in the visual layout, which is information that only sighted human users can extract.

The semantic elements are the markup that says what each box *is.* `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`. Use them right and the page is legible to everyone — to screen readers, to search engines, to your future self reading your own code in a year, to a teammate who joins the project tomorrow. Use them wrong and the page becomes a guessing game.

This chapter is about using them right. By the end, you will refactor every page in your project. The visual will not change. The meaning will become explicit.

---

## What "semantic" actually means

Semantic markup is markup that describes the *meaning* of the content, not just its appearance. A heading is semantic — `<h1>` says *this is the most important heading on the page.* A paragraph is semantic — `<p>` says *this is a paragraph.* A link is semantic — `<a>` says *this is hypertext that points somewhere.*

The opposite is **non-semantic** markup, which describes only the structure or the appearance, with no information about meaning. The two non-semantic elements you'll see most are `<div>` (a block-level container — its name is short for *division,* meaning a division of the page) and `<span>` (an inline container — its name is meaningful only as the opposite of *block*).

Both `<div>` and `<span>` have a job. They are useful. But their job is *not* to describe meaning — they are placeholders for cases where no semantic element fits. They should be the last resort, not the first reach. A page where every box is a `<div>` is a page where the markup gives up on saying what anything is.

The semantic elements introduced in HTML5 (the version of HTML that has been current since 2014) cover the majority of the meaningful regions of a typical webpage. Learning them takes one chapter. Using them well takes a few weeks of practice. The payoff lasts your career.

---

## The landmark elements

There are seven core semantic elements you will use constantly. They are sometimes called *landmark elements* because they are the major regions a screen reader will let the user jump to directly. Together they form the structural skeleton of a typical page.

### `<header>`

The header is the top region of a page or a section. On the field guide, the page header will contain the logo and the navigation. (Note that *page header* is different from *heading* like `<h1>`. The header element is a region; the heading element is the title text inside it.)

A page can have one main header. A section, article, or aside can also have its own header. The element is reusable — what makes it the *page* header is its position and what's inside it.

```html
<header>
  <img src="assets/logo.svg" alt="The Frontend Field Guide logo">
  <nav>...</nav>
</header>
```

### `<nav>`

The nav element wraps a group of navigation links. The most prominent use is the site's main navigation — the row of links that appears at the top of every page, letting the user move between sections.

You can have more than one nav element on a page if there is more than one navigation. For example, a page might have a main site nav at the top and a "table of contents" nav at the start of the article. Both are nav elements.

What is not a nav element is *every* group of links on a page. A list of links inside a paragraph is not a nav. A footer's set of "related links" might be, or might not be, depending on whether they are navigation. If they're a list of legal/social links, you can argue either way. If you're not sure, ask: *if a screen reader user wanted to jump to the navigation, would this be one of the things they're looking for?* If yes, it's a nav. If no, it's just a list.

### `<main>`

The main element wraps the central content of the page — the part that is unique to *this* page, as opposed to the parts that are shared across all pages (header, nav, footer).

A page should have exactly one `<main>`. Everything that is the actual content of this specific page goes inside it. The `<h1>` of the page goes inside it. The article or articles that make up the page go inside it.

```html
<main>
  <h1>The Frontend Field Guide</h1>
  <p>...</p>
</main>
```

### `<footer>`

The footer is the bottom region of a page or a section. On a typical website, the page footer contains things like copyright information, legal links, contact info, and small links to less-prominent parts of the site.

Like header, the footer can be reused — a section or article can have its own footer for its own end matter (the publication date of an article, for example).

```html
<footer>
  <p>The Frontend Field Guide. A small project by people who were beginners not long ago.</p>
</footer>
```

### `<section>` and `<article>`

These are the two semantic elements that beginners get confused about most. The distinction matters, and it is worth getting right.

An **article** is a piece of content that makes sense on its own, independent of the rest of the page. A blog post is an article. A news story is an article. A product description is an article. If you could imagine taking the content out of the page and showing it on a different page or in an RSS feed, and it would still be a complete, self-contained thing, it is an article.

A **section** is a thematic grouping of content that belongs to a larger whole. A chapter inside a book is a section. A "Features" section of a product page is a section. The "About" section of a homepage is a section. Sections need their context — they are part of something, not stand-alone.

The clearest test: ask whether the content has its own heading. Both sections and articles should have a heading. Then ask whether the content would make sense by itself outside the page. If yes, article. If no, section.

```html
<article>
  <h2>What HTML actually is</h2>
  <p>HTML stands for Hypertext Markup Language...</p>
</article>
```

Each article on the path page is an `<article>`. The articles are self-contained pieces of content. They have their own headings. You could imagine moving one to a different page, or sharing it as a standalone, and it would still work.

By contrast:

```html
<section>
  <h2>What you'll find here</h2>
  <p>This site collects the things we wish we had known...</p>
</section>
```

The "What you'll find here" block on the homepage is a section. It is a thematic part of the homepage, and it doesn't make sense outside that page. It has a heading. It belongs in the structure. But it is not its own self-contained thing.

When in doubt, use section. Article is the more specific case; section is the general one.

### `<aside>`

The aside element is for content that is *related* to the surrounding content but is not the main flow. Think of it as a sidebar. A pull quote in the margin of an article is an aside. A "related links" box at the end of a section is an aside. A box of supplementary information that the reader can skip without losing the thread is an aside.

We will probably not need an `<aside>` until later in the project. Mentioning it because it is one of the seven landmarks and you will see it in other people's code.

---

## When to fall back to `<div>` and `<span>`

Not every container is semantic. Sometimes you need a wrapper purely to group elements together for styling or layout — a wrapper that has no inherent meaning, just a structural role.

That is what `<div>` is for. `<div>` is the right element when:

- You need to group elements for layout in CSS.
- The grouping has no semantic meaning — it is purely for visual arrangement.
- None of the semantic elements describe what this group is.

`<span>` is the inline equivalent. Use it for wrapping a few words or a phrase inside text when you need to apply CSS or JavaScript to that specific phrase, and there is no semantic element that fits.

The rule of thumb: try to pick a semantic element first. If none fits — and *only* if none fits — use a div or span. *A `<div>` is a confession that you have not yet decided what the thing is.* <!-- SIGNATURE LINE -->

That is not a complaint about divs. It is a description. Sometimes you have not yet decided, and that is fine — you reach for the generic container, and you move on. Just notice every time you reach for one. Often, on second thought, there *is* a semantic element that fits.

---

## Refactoring the homepage

Time to apply this. Open `index.html`. Right now the body looks something like this (simplified):

```html
<body>
  <img src="assets/logo.svg" alt="...">
  <nav>...</nav>
  <h1>The Frontend Field Guide</h1>
  <p>...</p>
  <h2>What you'll find here</h2>
  <p>...</p>
  <ul>...</ul>
  <h2>Who this is for</h2>
  <p>...</p>
  <p><strong>Start with the path.</strong>...</p>
</body>
```

That works, but it has no semantic structure. Every block of content is sitting at the same level, with no indication of which is the page title and intro, which is the main content, which is the navigation. Let's refactor.

Replace the body with this:

```html
<body>
  <header>
    <img src="assets/logo.svg" alt="The Frontend Field Guide logo">
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
  </header>

  <main>
    <h1>The Frontend Field Guide</h1>
    <p>A small, practical reference for people who are learning to build for the web. Written for the next person walking the road we are walking now.</p>

    <section>
      <h2>What you'll find here</h2>
      <p>This site collects the things we wish we had known when we started. The pages are short. The advice is direct. None of it is the only way to do something — it is the way that worked for us.</p>

      <ul>
        <li>A path of foundational articles, in the order they made sense to us.</li>
        <li>A glossary of terms, defined in plain language.</li>
        <li>A list of common errors and what they actually mean.</li>
        <li>A short, opinionated list of tools that paid off.</li>
      </ul>
    </section>

    <section>
      <h2>Who this is for</h2>
      <p>If you are new to building for the web, or you took a break and are coming back, this site is for you. It is not exhaustive. It is not the only thing you should ever read. It is a place to start, written by people who started recently enough to remember what it felt like.</p>

      <p><strong>Start with the path.</strong> If you don't know where else to go, that's where to go.</p>
    </section>
  </main>

  <footer>
    <p>The Frontend Field Guide. A small project by people who were beginners not long ago.</p>
  </footer>
</body>
```

Save. Open `index.html` in the browser.

It looks identical to before. The visual is unchanged. The HTML is now correctly structured.

That last sentence is the whole point of this chapter. The browser displayed the page either way, but the markup is now meaningful. A screen reader can offer the user a list of landmarks. A search engine can identify the main content. Future you, reading this code, can see the structure at a glance.

This is what semantic HTML buys you. Free, invisible, but real.

---

## A small honest moment

I avoided semantic elements for the first six months of writing HTML. I knew they existed. I had read about them. But every tutorial I followed was using `<div>` for everything, and the visual output was the same, so I followed along.

Then I built a real site for someone who used a screen reader. They opened it. The screen reader said *image, image, link, link, link, link, link, link, heading, paragraph, paragraph, list, paragraph, paragraph, paragraph.* It was unusable. There was no way to skip past the navigation. There was no way to know where the main content started. The user had to listen to every link in the nav, every time, to get to the content.

I refactored the site that night. The screen reader, on the new version, said *banner, navigation, main, contentinfo* — those are the names screen readers use for header, nav, main, and footer — and the user could jump straight to whichever they wanted. Same visual. Completely different experience.

That is when the difference between semantic and non-semantic markup stopped being abstract for me. Doing this right is not a cosmetic choice. It is the difference between a website that works for everyone and one that secretly excludes some people.

---

## A small permission

You will not always pick the right semantic element on the first try. The distinction between `<section>` and `<article>` is genuinely fuzzy in some cases. The decision of when something is a `<nav>` versus just a list of links has gray areas. Senior developers disagree about specific cases.

The answer is: pick one, with a reason. If you can articulate why a particular block is a section and not an article, you have already done better than most code on the web. Perfect is not the goal. *Thoughtful* is the goal. Ten thoughtful decisions later, your work is meaningfully better than work that didn't try.

When you are wrong, you fix it. The site is yours; the markup is yours; the refactor is one commit. Don't freeze waiting for certainty. Keep moving.

---

## Try this

1. Refactor `about.html` the same way. Wrap the existing content in `<header>`, `<main>`, `<footer>`. The main content of the about page is one paragraph (or a few) — it doesn't need separate `<section>` elements unless you want to group sub-topics. Use your judgment.

2. Refactor `path.html` the same way. The main content has multiple articles — wrap each one in `<article>`. The table of contents at the top can go in a `<section>` of its own (or, if you want to be fancy, a second `<nav>` since it is navigation). Either is defensible.

3. Save all three files.

4. Open each page in the browser. They should look identical to before. The markup is structurally different. The page is the same.

5. Commit:
   ```
   git add .
   git commit -m "Refactor pages with semantic elements"
   git push
   ```

When that's done, the chapter is over. In Chapter 7, we will build the contact page's form.

---

## CHAPTER HANDOFF REPORT

**Chapter:** 6 — Semantic Structure
**Word count:** ~2,650
**Signature line:** *A `<div>` is a confession that you have not yet decided what the thing is.*

**Project milestone:** All three existing pages refactored to use semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`). Visual output unchanged.
**Files touched:** `index.html`, `about.html`, `path.html`.
**Concepts introduced:**
- What "semantic" means in HTML
- The seven landmark elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- `<section>` vs `<article>` — the standalone test
- When to fall back to `<div>` and `<span>`
- Why semantic markup matters for screen readers, search engines, and future readers of the code

**Items flagged for verification:** None.

**Honest-admission moment:** "I avoided semantic elements for the first six months of writing HTML." (extended scene about screen reader experience)
**Permission-giving moment:** "You will not always pick the right semantic element on the first try... Perfect is not the goal. *Thoughtful* is the goal."

**STATUS:** Continuing.
