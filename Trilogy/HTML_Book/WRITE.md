# WRITE.md — HTML Book
## *What You Need to Know Before React and AI: HTML*

The locked spec for Book 2 (HTML), the first volume of the trilogy. Inherits from `Trilogy/TRILOGY.md` and `Trilogy/voice-anchor.md`. This document is what the writer follows chapter by chapter.

---

## 1. Identity

**Title:** *What You Need to Know Before React and AI: HTML*
**Author:** Elkanah Donkor
**Audience:** the reader from Book 1 — bootcamp grads, self-taught learners, returners. Total beginner to HTML on day one.
**Length target:** ~25,000 words across 13 chapters.
**Output the reader walks away with:** a public website, deployed to GitHub Pages, that is the HTML scaffold of *The Frontend Field Guide*. It is unstyled. It is accessible. It is real.

---

## 2. Voice

See `Trilogy/voice-anchor.md` and `Coding_Book/voice-anchor.md`. Mentor, candid, second person. The technical-writing rules in the trilogy voice anchor apply throughout this book.

---

## 3. The shared project, restated

The reader is building **The Frontend Field Guide** — a public reference site for new self-taught web developers. Same site for every reader. Same pages, same content, same features.

Pages the HTML book ships:

- `index.html` — Home
- `about.html` — About
- `path.html` — A structured "path" of foundational articles (with linked sub-pages or anchored sections)
- `glossary.html` — Glossary of web/dev terms
- `errors.html` — Common errors reference
- `tools.html` — Curated tools/resources list
- `contact.html` — Contact form (visual only — no JS yet)

Content for these pages is provided in this book chapter by chapter. The reader is never blocked on what to write.

---

## 4. Chapter anatomy template

Each chapter follows the Book 1 anatomy with technical adjustments:

1. **Opening hook** — a real moment, scene, or question. Often the bad-feeling moment the reader is in right now.
2. **Reframe** — the small shift the chapter is built on.
3. **Body — 2 to 3 sections.** Each section: explain *why*, show the code in a named file, run it, name what changed.
4. **Try this** — concrete project work the reader does tonight. The site moves forward by one step at the end of every chapter.
5. **Signature line** — italicized, single sentence near the turn.
6. **Honest-admission moment** — somewhere in the chapter, named explicitly.
7. **Permission-giving moment** — somewhere in the chapter, named explicitly.

Each chapter ends with a `## CHAPTER HANDOFF REPORT` block, same template as Book 1.

---

## 5. Recurring devices

- **The 2025 desk.** A small recurring scene of a reader at a laptop, typing the thing the chapter just taught.
- **"Open the browser, refresh, look."** The reader is told, repeatedly, to switch contexts and watch.
- **The before/after pair.** Used when refactoring or improving markup.
- **The "this is the part that confused me for months."** Used when introducing something genuinely tricky.
- **The "you don't need to know yet" caveat.** Used sparingly when bracketing future material.
- **Site-progress callout.** Each chapter ends with a one-line statement of what the site now has that it didn't have at the start of the chapter.

---

## 6. Full chapter spec

Word counts are targets, not contracts. Project milestone is what the reader's site has at the end of the chapter.

### Chapter 0 — Why You Are Reading This (Introduction)

- **File:** `chapter-00-introduction.md`
- **Words:** ~1,600
- **Core idea:** HTML is structure. The reader spends one whole book on something that has no visual output, on purpose. By the end, they have a real, deployed, accessible website at a real URL.
- **Sections:**
  - The book in one sentence.
  - What you'll have at the end.
  - Why the site is unstyled until Book 3.
  - How to use this book (companion repo, "Try this" closers, Git from chapter 1).
- **Try-this closer:** Open your editor. Make a folder called `frontend-field-guide`. We'll do the rest in Chapter 1.
- **Signature line target:** *HTML is the shape of the page. You learn the shape first.*
- **Notes:** No code in this chapter. Voice-only. Sets the frame.

### Chapter 1 — The First File

- **File:** `chapter-01-first-file.md`
- **Words:** ~2,100
- **Core idea:** A web page is a text file. The browser is a text-file reader with strong opinions. The reader writes their first HTML, opens it in the browser, and commits it.
- **Sections:**
  - What an HTML file actually is. (A `.txt` with a different extension and a few rules.)
  - Your editor (VS Code recommended; any editor works).
  - The smallest HTML file that shows something.
  - Opening it in the browser.
  - **Git intro.** `git init`. `git add`. `git commit`. `git push` to a fresh GitHub repo named `frontend-field-guide`.
- **Project milestone:** A folder, an `index.html` that says *Hello, world,* a Git repo on GitHub.
- **Try-this closer:** Push your first commit. The repo exists. From now on, every save in this book ends with a commit.
- **Signature line target:** *The first commit is the moment you stop being someone who is going to learn this and start being someone who is.*
- **Notes:** Git is introduced as practice, not as a topic. Don't lecture about VCS.

### Chapter 2 — The Anatomy of a Document

- **File:** `chapter-02-anatomy.md`
- **Words:** ~2,200
- **Core idea:** Every HTML document has the same skeleton, and ignoring it is the source of half a beginner's bugs.
- **Sections:**
  - `<!DOCTYPE html>` — the historical reason it exists, why you still need it.
  - `<html>`, `<head>`, `<body>` — what each is for.
  - `<meta charset>`, `<meta viewport>` — non-negotiable.
  - `<title>` — what the browser tab shows; what search engines read.
  - The first real homepage scaffold for the project.
- **Project milestone:** `index.html` has the full document anatomy and a real `<title>`.
- **Try-this closer:** Add the same scaffold to a new file `about.html`. Commit.
- **Signature line target:** *Every page on the web starts with the same skeleton. Internalize it once and you never have to think about it again.*

### Chapter 3 — Text on a Page

- **File:** `chapter-03-text.md`
- **Words:** ~2,500
- **Core idea:** The most common HTML elements are also the most important. Headings, paragraphs, lists, emphasis, quotes — used well, they read like a real document with no styling at all.
- **Sections:**
  - Headings (`<h1>`–`<h6>`) and the hierarchy of meaning.
  - Paragraphs (`<p>`) and why every paragraph wants to be its own tag.
  - Lists (`<ul>`, `<ol>`, `<li>`).
  - Emphasis (`<em>`, `<strong>`) and the difference from `<i>` and `<b>`.
  - Quotes (`<blockquote>`, `<q>`, `<cite>`).
  - Real content for the homepage hero and the first article on the path page.
- **Project milestone:** Homepage has real text content. The path page has its first article.
- **Try-this closer:** Mark up the second article (provided). Push.
- **Signature line target:** *Plain HTML, with nothing else, is already a readable document. That is not an accident.*

### Chapter 4 — Links and Navigation

- **File:** `chapter-04-links-nav.md`
- **Words:** ~2,000
- **Core idea:** The web is links. Most beginners learn `<a href>` and stop. The chapter teaches the rest: relative vs. absolute, anchor links, opening in new tabs (and when not to), the structure of a multi-page site.
- **Sections:**
  - The anchor element in detail.
  - Relative paths vs. absolute URLs.
  - Linking to a section of the same page (`href="#section-id"`).
  - The site nav: a `<nav>` block at the top of every page, linking to all the others.
  - When to use `target="_blank"` and the security gotcha (`rel="noopener"`).
- **Project milestone:** Every page has a working top nav. The reader can click between Home, About, Path, Glossary, Errors, Tools, Contact.
- **Try-this closer:** Add an anchor link inside the path page that jumps to a specific article.
- **Signature line target:** *A link is the smallest unit of the web. Used right, it is also the most powerful.*

### Chapter 5 — Images and Media

- **File:** `chapter-05-images.md`
- **Words:** ~1,800
- **Core idea:** Images are simple to insert and surprisingly easy to get wrong. The chapter covers `<img>`, `alt` text as a hard rule (not a suggestion), and the basics of `srcset` for screens that vary.
- **Sections:**
  - The `<img>` element.
  - `alt` text and why it is non-optional. (Accessibility moment.)
  - File formats: SVG, PNG, JPG, WebP — when to use which.
  - `srcset` and `sizes` — basics.
  - Where images live in the project (the `assets/` folder).
- **Project milestone:** A logo placeholder appears on every page. The path page articles can include images.
- **Try-this closer:** Add the provided field-guide logo SVG to the header. Push.
- **Signature line target:** *The `alt` attribute is not for screen readers. It is for the moment the image fails to load — which happens to everyone.*

### Chapter 6 — Semantic Structure

- **File:** `chapter-06-semantic.md`
- **Words:** ~2,600
- **Core idea:** This is the chapter that distinguishes someone who has learned HTML from someone who has typed HTML. `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>` — and why they matter.
- **Sections:**
  - What "semantic" actually means in HTML.
  - The landmark elements, in detail.
  - When `<section>` vs. `<article>` vs. `<div>`.
  - Refactor: the homepage built so far, moved from div-soup to semantic landmarks.
  - Why this affects search, accessibility, and (later) CSS layout.
- **Project milestone:** Every page is refactored to use semantic landmarks. No `<div>` where a real element belongs.
- **Try-this closer:** Apply the same refactor to the About and Path pages. Push.
- **Signature line target:** *A `<div>` is a confession that you have not yet decided what the thing is.*
- **Notes:** This is the tentpole chapter of the book. Spend the words.

### Chapter 7 — Forms

- **File:** `chapter-07-forms.md`
- **Words:** ~2,300
- **Core idea:** Forms are how the web takes input. The reader builds a working contact form's markup — buttons, inputs, labels, validation attributes — without any JavaScript.
- **Sections:**
  - The `<form>` element. `action` and `method` (and what they mean before there's a backend).
  - Inputs and their types: `text`, `email`, `tel`, `textarea`, `submit`.
  - The `<label>` element and why every input needs one.
  - HTML5 validation attributes: `required`, `minlength`, `pattern`, `type="email"`.
  - The accessibility chapter is coming, but already: labels are not optional.
- **Project milestone:** The Contact page has a working form (visually; it doesn't submit anywhere yet — that's intentional).
- **Try-this closer:** Try submitting the form. Watch the browser's built-in validation kick in. Push.
- **Signature line target:** *A form without labels is a maze. A form with labels is a tool.*

### Chapter 8 — Tables, When Tabular

- **File:** `chapter-08-tables.md`
- **Words:** ~1,500
- **Core idea:** Tables are for data, not for layout. The chapter shows the reader the right time to use a table (the tools/resources page is a real example) and the wrong times (everything else).
- **Sections:**
  - The history briefly: why "tables for layout" is a banned phrase.
  - When to use a table: data with rows and columns of equivalent meaning.
  - The elements: `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`, `<caption>`.
  - The tools page as a working table.
- **Project milestone:** The Tools page has a real table.
- **Try-this closer:** Add three more rows of provided tools to the table. Push.
- **Signature line target:** *Use a table when you have a table. Don't use one to push pixels around.*

### Chapter 9 — Accessibility

- **File:** `chapter-09-accessibility.md`
- **Words:** ~2,300
- **Core idea:** Accessibility is not a chapter. It is the whole book. This chapter consolidates the accessibility moves the reader has been making since Chapter 2 and adds the rest.
- **Sections:**
  - What accessibility is and who it is for (everyone, including the reader).
  - Heading order — never skip levels.
  - `alt` text — already covered, reinforced.
  - Form labels — already covered, reinforced.
  - Landmarks — already covered, reinforced.
  - When to reach for ARIA, and why most of the time you shouldn't.
  - Running an accessibility audit on the site so far. (Browser DevTools' built-in audit.)
- **Project milestone:** The site passes a basic accessibility audit. The reader has run the audit and seen the result.
- **Try-this closer:** Fix any issue the audit found. Push.
- **Signature line target:** *Accessible HTML is not a feature you add at the end. It is HTML written correctly the first time.*

### Chapter 10 — Reading the Browser

- **File:** `chapter-10-devtools.md`
- **Words:** ~2,100
- **Core idea:** The browser is the runtime. The reader is taught how to inspect, validate, and debug what they have built — skills that will matter for the rest of their career.
- **Sections:**
  - Opening DevTools (Chrome, Firefox).
  - The Elements panel — reading the DOM the browser actually built.
  - The Console — reading errors and warnings.
  - The HTML validator (the W3C one and the in-browser equivalents).
  - Common HTML errors and what they actually mean. The "common errors" page on the site is born here — the reader marks up the very errors they have just learned to read.
- **Project milestone:** The Errors page has its first three real entries.
- **Try-this closer:** Add two errors *you personally hit* to the Errors page. Push. (One of the few places personal content lives, and it's encouraged.)
- **Signature line target:** *The browser is not hiding anything. You just have to know where to look.*

### Chapter 11 — Shipping It

- **File:** `chapter-11-shipping.md`
- **Words:** ~2,000
- **Core idea:** Code that lives only on your laptop is not a website. The reader deploys to GitHub Pages and gets a real public URL.
- **Sections:**
  - Why GitHub Pages.
  - Configuring Pages on the repo.
  - The first deploy.
  - What happens when something is broken in production. (The reader will hit this. We prepare them.)
  - Custom domain — optional, but the steps are here.
  - Adding the live URL to the README. The README itself.
- **Project milestone:** The site is live at `https://[username].github.io/frontend-field-guide/`. Every reader has a public URL by the end of this chapter.
- **Try-this closer:** Send the URL to one person. Anyone. The site exists for other people now.
- **Signature line target:** *A site you cannot send a link to is not a site. You just shipped one.*
- **Notes:** This is the emotional high point of the book. Treat it like one.

### Chapter 12 — Where to Next

- **File:** `chapter-99-closing.md`
- **Words:** ~900
- **Core idea:** The HTML book is over. The site is real. It is also, deliberately, ugly. The CSS book is what makes it not ugly. Hand off.
- **Sections:**
  - What you have right now (a list).
  - What you do not yet have (the list of things CSS will fix).
  - One paragraph of the same warm, mentor-tone close as Book 1.
- **Try-this closer:** None — this is the closing.
- **Signature line target:** None — closing exempt by spec.
- **Notes:** Mirror the warmth of Book 1's closing.

---

## 7. Code conventions

- All HTML in the book uses two-space indentation.
- Element and attribute names lowercase. No XHTML-era self-closing tags (`<br />`) — modern HTML5 (`<br>`).
- Filenames lowercase, hyphenated.
- Every snippet sits inside a clearly named file with the path stated. Snippets that show only a fragment must say which part of the file the fragment goes in.
- No CSS. No JavaScript. Not in the snippets, not in the project, not even as a teaser. The book is HTML only.

---

## 8. Companion repo

The repo `frontend-field-guide` lives on the reader's GitHub account.

- Branch `main` is the deployed branch.
- A reference repo (under the author's GitHub) contains starter files and a `chapter-XX` tag for each chapter's checkpoint state. The reader can `git diff` against the reference if they get stuck.
- Each chapter's "Try this" closer specifies what should be committed at the end of that chapter.

---

## 9. Banned words and phrases

Inherited from Book 1 + the trilogy voice anchor. The full list, here for the writer's quick reference:

- **From Book 1:** *leverage, robust, delve, navigate the landscape, seamless, "Now," sentence-opener.*
- **Technical additions:** *simply, just (as a softener), obviously, clearly, of course, as you might expect, we can see that, don't worry about this for now, beyond the scope of this book, industry-standard, best practice, powerful, modern, intuitive, elegant.*

---

## 10. Quality checklist (per chapter, before declaring done)

- [ ] Every snippet is in a named file with a clear location.
- [ ] Every non-trivial snippet has a *why* before it.
- [ ] At least one moment where the reader is told to run something and watch.
- [ ] Honest-admission moment present.
- [ ] Permission-giving moment present.
- [ ] One signature line.
- [ ] Try-this closer points to concrete project work.
- [ ] Site-progress callout: the reader's site is concretely further than at the start of the chapter.
- [ ] No banned words.
- [ ] If two readers read this in parallel, they end with the same thing on their screens.

---

## 11. Chapter handoff report template

Each chapter ends with a `## CHAPTER HANDOFF REPORT` block:

```
**Chapter:** N — [Title]
**Word count:** ~[number]
**Signature line:** *[the line]*

**Project milestone:** [what the site now has]
**Files touched:** [list]
**Concepts introduced:** [bullet list]
**Items flagged for verification:** [or "None"]
**Honest-admission moment:** [quote]
**Permission-giving moment:** [quote]

**STATUS:** [Continuing / Complete]
```

---

## 12. Writing order

Sequential, Chapter 0 → Chapter 12. Do not skip ahead. Each chapter assumes the project state at the end of the previous chapter.

After every chapter:

1. Update `Trilogy/HTML_Book/ledger.md` with concepts, examples, and signature line.
2. Run the quality checklist.
3. Internal cold-eyes pass for voice and banned words.
4. Commit.

---

## 13. Word count table

| # | Title | Target |
|---|---|---|
| 0 | Why You Are Reading This | 1,600 |
| 1 | The First File | 2,100 |
| 2 | The Anatomy of a Document | 2,200 |
| 3 | Text on a Page | 2,500 |
| 4 | Links and Navigation | 2,000 |
| 5 | Images and Media | 1,800 |
| 6 | Semantic Structure | 2,600 |
| 7 | Forms | 2,300 |
| 8 | Tables, When Tabular | 1,500 |
| 9 | Accessibility | 2,300 |
| 10 | Reading the Browser | 2,100 |
| 11 | Shipping It | 2,000 |
| 12 | Where to Next | 900 |
| | **Total** | **~25,900** |
