# TRILOGY.md — The HTML / CSS / JavaScript Trilogy

The through-line spec for the three books that follow *We Were Never Really Coding*. This document is the binding reference for all three; per-book `WRITE.md` files live inside each book folder and inherit from this one.

---

## What the trilogy is

Three streamlined guides, written for the same reader, that build the foundation of web development before they touch React, AI tooling, or any modern framework:

1. **HTML Book** — *What You Need to Know Before React and AI: HTML*
2. **CSS Book** — *What You Need to Know Before React and AI: CSS*
3. **JavaScript Book** — *What You Need to Know Before React and AI: JavaScript*

Not textbooks. Not exhaustive references. Just enough — the right things, explained well, with the *why* behind them — so the reader can move on to React and AI without holes underneath them.

---

## Who it's for

The reader from Book 1: bootcamp grads, self-taught learners, returners who feel left behind. They have just been told that programming has changed and that the foundation matters more than the framework. The trilogy is the foundation, delivered in the smallest viable form.

**Day-1 assumption:** total beginner to HTML. Has used a browser. Has heard of HTML/CSS/JS as terms. Has never written a tag.

**Reader's emotional starting point:** wary, a little behind, not sure they belong. Same as Book 1's reader, one chapter later in their life.

---

## Voice

Same as Book 1. Mentor, candid, second person. Honest about what's hard. Permission-giving. Specific over abstract — real elements, real properties, real bug messages. The voice anchor passages from `Coding_Book/voice-anchor.md` carry forward.

For technical writing, the voice extends with these rules:

- *"Type this and watch what happens"* over *"you can imagine that…"*
- Explain the *why* before the *how*. Code that appears without a reason for existing is forbidden.
- Honest-admission moment per chapter (same as Book 1). Often takes the form of "this is the part that confused me for months."
- Permission-giving moment per chapter. Often: "you do not need to memorize this."
- One signature line per chapter.

**Banned words from Book 1 still banned:** *leverage, robust, delve, navigate the landscape, seamless,* and the *"Now,"* sentence-opener.

**Additional banned tells for technical writing:**
- "Simply" (it's never simple to a beginner)
- "Just" as a softener for hard things ("just add a div…")
- "Obviously," "clearly," "of course"
- "We can see that…" (passive narration of the screen)
- "As you might expect" (when the reader cannot)

---

## The shared project

Every reader of the trilogy builds the **same project**, layer by layer. Two readers' versions are recognizably the same site — same pages, same features, same content. Color and typography choices may vary in the CSS book; the project's identity does not fork.

**Locked name:** *The Frontend Field Guide.*
**Companion GitHub repo:** `frontend-field-guide`.

**What it is:** A public reference site for new self-taught web developers. The reader builds it for *the next person walking the same road as them*. Real-world impact: their friends and the next cohort actually use it. Showcase: a live URL, comparable peer-to-peer.

**The pages (same for every reader):**

- Home + About
- A structured "path" of foundational articles (content provided in the books)
- A glossary of web/dev terms
- A common-errors reference (real error messages with explanations)
- A small curated tools/resources list
- Contact

**The arc across the trilogy:**

| Book | What ships at the end |
|---|---|
| HTML | All pages exist with semantic markup. Site is readable, navigable, and **deployed to GitHub Pages at a real URL.** |
| CSS | Site has a real visual identity: typography, color, layout, responsive behavior across screen sizes. |
| JavaScript | Site is interactive: client-side search, filter, dark mode, glossary popovers, save-progress state in `localStorage`. |

End of the planned **Book 5 (React + AI)**: the same project becomes a single-page app with an AI Q&A layer and AI-suggested learning paths, built on the codebase they finished here.

The project's content (articles, glossary entries, error explanations) is **provided inside the books** as part of the exercises. The reader is never blocked by a content question. They mark up real, meaningful content in the HTML book; style real content in the CSS book; make real content interactive in the JS book.

**The "minute differences" between reader versions:**

- Color palette and font choices (CSS book).
- A handful of personal entries the reader is encouraged to add (an extra glossary term, a bug *they* hit).
- The wording of the About page.

Everything else is identical.

---

## What each book covers, and what it defers

The order of topics inside each book is driven by **what the project demands next**, not by the textbook order of the technology. If specificity is the cost of skipping topics, that's the deal.

### HTML Book — target ~25,000 words

**Covers:**

- What HTML actually is, and why "structure, not appearance" is the most important thing to internalize
- Document anatomy: `<!DOCTYPE>`, `<head>`, meta tags, charset, viewport, title — the things that affect everything later
- The minimal element set: headings, paragraphs, links, lists, images, blockquotes
- Semantic structure: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>` — and *when* to use which
- Tables (only when tabular), forms (enough to be useful)
- Accessibility from day one — alt text, labels, landmark elements, heading order — because retrofitting is harder than starting right
- Where HTML ends and CSS/JS begin, so the reader knows what each tool is *for*
- **Git/GitHub thread:** `git init`, `add`, `commit`, `push` at the first working file. GitHub Pages deploy at the last chapter.

**Defers to the CSS book:** anything visual. The reader sees an unstyled site for the entire HTML book. The discomfort is intentional — it teaches that HTML is structure, not appearance.

**Defers to the JS book:** any interactivity beyond `<a>` navigation.

**Reader at the end:** has a deployed, accessible, semantically marked-up website at a public URL. It looks plain. It works.

### CSS Book — target ~25,000 words

**Covers:**

- What CSS actually is, the cascade, specificity, inheritance — the parts that bite you when you don't know them
- The box model, display modes, normal flow, and `position` — in the order the reader will encounter them in the project
- Flexbox and Grid — the parts that matter, not every property
- Typography for readability (the project is a reading site, so typography is doing real work)
- Color, identity, and contrast (with accessibility tied in, not bolted on)
- Responsive design with real breakpoints, not hand-waving
- Custom properties (CSS variables) as the modern foundation
- A clear taxonomy: things CSS does, vs. things people reach for JS to do but shouldn't
- **Git/GitHub thread:** branches. The reader does the redesign on a feature branch, merges when happy. First time they see Git as collaboration tooling, not just save-history.

**Defers:** preprocessors (Sass, PostCSS) — out of scope. CSS-in-JS — Book 5 territory. Animation beyond what the project's interactions demand.

**Reader at the end:** the site has a real visual identity. They can defend every CSS choice they made.

### JavaScript Book — target ~30,000 words

Slightly larger than the other two because JavaScript is genuinely bigger and the cost of skipping foundational pieces is higher.

**Covers:**

- The JS that lives in a browser. Not Node, not the server.
- Values, types, control flow, functions, arrays, objects — concise, with examples drawn from the project
- The DOM: what it is, how to read it, how to change it
- Events and event handling
- `fetch` and the network
- Asynchronous code: the real shape of promises and `async`/`await` — enough that the reader can read modern code without confusion
- `localStorage` for persistence
- ES modules
- A chapter on **reading other people's code**, because that's the gap most beginners hit and nobody teaches
- **Git/GitHub thread:** issues, pull requests (even self-PRs as a discipline), and one small GitHub Action (deploy or link-check). Sets up the collaborative habits the React book will assume.

**Defers:** TypeScript (Book 5). Bundlers and tooling (Book 5). Node and server-side (later, separate). Frameworks (Book 5).

**Reader at the end:** fluent in browser JavaScript. Site is interactive. Ready to start React without confusion about what JS is doing vs. what React is doing.

---

## Code conventions

- Snippets appear inline in the books, formatted as code blocks.
- A **companion GitHub repo** carries: starter files per chapter, per-chapter checkpoint commits, and a final-state branch the reader can diff against.
- Every "Try this" closer points to a specific, concrete action the reader can take *tonight* — same pattern as Book 1's chapter closers.
- File paths in the books always use forward slashes and are relative to the project root.

---

## Git and GitHub thread

Git and GitHub are not a parallel curriculum. They are the way the reader works, introduced at the smallest moment the project demands them.

| Milestone | Skill introduced |
|---|---|
| HTML book, early chapter (first working file) | `init`, `add`, `commit`, `push` to a new GitHub repo |
| HTML book, last chapter | GitHub Pages deploy → public URL |
| CSS book, early chapter | Branches, switching, merging |
| CSS book, mid | Resolving a small merge conflict (in the project, not abstractly) |
| JS book, early | Issues — for tracking what's left, not bureaucratically |
| JS book, mid | Pull requests against your own repo as a discipline |
| JS book, late | One GitHub Action — a deploy or a link-check |

---

## What the reader has at the end of the trilogy

- A **live, deployed, working website** at a public URL
- A real GitHub repo with real commit history and a meaningful README
- A demonstrable understanding of what HTML, CSS, and JS each *are* — not just how to type them
- The capacity to read modern frontend code and recognize what's framework magic vs. what's underlying language
- A project they can show in interviews, sitting next to peers' versions of the same project, comparable on craft

---

## Comparison to Book 1

| | Book 1 | Trilogy |
|---|---|---|
| Form | Narrative, no code | Technical, code-forward |
| Voice | Mentor | Mentor (kept) |
| Length | ~37,000 words | ~25–30k per book |
| Output | Diagnosis + prescription | A shipped public site |
| Reader at end | Knows what to do | Has done it |

---

## Folder structure

```
E:/Projects/BOOKS/
├── Coding_Book/                  (Book 1 — done)
└── Trilogy/
    ├── TRILOGY.md                (this file)
    ├── voice-anchor.md           (extends Book 1's voice anchor)
    ├── HTML_Book/
    │   ├── WRITE.md
    │   ├── ledger.md
    │   ├── chapters/
    │   └── build/
    ├── CSS_Book/
    │   └── (same shape)
    └── JS_Book/
        └── (same shape)
```

The companion code repository for the project lives separately on GitHub and is not part of this folder.

---

## Status

- ✓ Project name locked: *The Frontend Field Guide*.
- ✓ Companion repo name locked: `frontend-field-guide`.
- ✓ Folder structure locked.
- ✓ Voice anchor drafted (`Trilogy/voice-anchor.md`).
- ✓ HTML Book `WRITE.md` drafted (`Trilogy/HTML_Book/WRITE.md`).
- → Next: begin Chapter 0 of the HTML book.
