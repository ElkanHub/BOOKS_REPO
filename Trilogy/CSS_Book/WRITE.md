# WRITE.md — CSS Book
## *What You Need to Know Before React and AI: CSS*

The locked spec for Book 3 (CSS), the second volume of the trilogy. Inherits from `Trilogy/TRILOGY.md` and `Trilogy/voice-anchor.md`.

---

## 1. Identity

**Title:** *What You Need to Know Before React and AI: CSS*
**Author:** Elkanah Donkor
**Audience:** the same reader, one book on. They have finished the HTML book and have a deployed, unstyled `frontend-field-guide` site. The CSS book makes that site presentable.
**Length target:** ~25,000 words across 12 chapters.
**Output the reader walks away with:** the same site, now visually presentable — typography, color, layout, responsive behavior, identity.

---

## 2. Voice

Same as Book 1 and the HTML book. Mentor, candid, second person. Voice extensions in `Trilogy/voice-anchor.md` apply throughout.

---

## 3. Project state at the start of this book

The reader's `frontend-field-guide` project has:
- 7 HTML pages, semantic, accessible, deployed.
- A Git repo with meaningful history.
- A live URL on GitHub Pages.
- No CSS at all.

This book adds **one new file** to the project: `style.css`. That single file is where every CSS change lives. By the end, the file is a few hundred lines long and the site looks polished.

---

## 4. Chapter anatomy template

Same as the HTML book — opening hook, reframe, body in 2–3 sections, Try-this closer, signature line, honest-admission and permission-giving moments, handoff report.

---

## 5. Recurring devices

- **Before/after pairs.** The reader sees the unstyled state and the styled state, repeatedly.
- **"Refresh and look."** Beat after every change.
- **The 1995 → 2026 contrast.** Each chapter visibly moves the site forward in time.
- **Branches in Git.** Starting in Chapter 4, the reader does the redesign on a feature branch. Real Git workflow comes alive.

---

## 6. Full chapter spec

### Chapter 0 — Why You Are Reading This (Introduction)
- **File:** `chapter-00-introduction.md`
- **Words:** ~1,400
- **Core idea:** CSS is appearance, not structure. The discipline of separating them. What the reader will have at the end (a polished site at the same URL).
- **Try-this closer:** Look at your live site one more time, in its 1995 state. We're about to change that.
- **Signature line:** *CSS is the difference between a document on a screen and a website.*

### Chapter 1 — The First Stylesheet
- **File:** `chapter-01-first-stylesheet.md`
- **Words:** ~2,100
- **Core idea:** Creating `style.css`, linking it from every page, the basic shape of a CSS rule. First color change.
- **Project milestone:** `style.css` exists, linked from all 7 pages. Body has a different background color and font.
- **Signature line:** *Every CSS rule is selector, property, value. The whole language is built on that one shape.*

### Chapter 2 — The Cascade, Specificity, and Inheritance
- **File:** `chapter-02-cascade.md`
- **Words:** ~2,300
- **Core idea:** The "C" in CSS. How the browser decides which rule wins when multiple rules apply. Why this is the source of half a beginner's frustration.
- **Project milestone:** Reader has explored cascade with deliberate experiments.
- **Signature line:** *The cascade is not a bug. It is the language doing what it was designed to do — gracefully.*

### Chapter 3 — The Box Model
- **File:** `chapter-03-box-model.md`
- **Words:** ~2,200
- **Core idea:** Every element on the page is a box. Box has content, padding, border, margin. `box-sizing: border-box` and why it should be the default for everything.
- **Project milestone:** Reader has used DevTools to see boxes; site has consistent margins and padding.
- **Signature line:** *Once you see the box, you cannot unsee it. CSS is the language of boxes.*

### Chapter 4 — Display, Flow, and Position
- **File:** `chapter-04-display-flow.md`
- **Words:** ~2,300
- **Core idea:** Block vs inline vs inline-block. Normal flow. `position: static / relative / absolute / fixed / sticky`.
- **Project milestone:** Header is sticky at the top of the page. Footer is positioned correctly.
- **Special:** **Git branching introduced here.** Reader checks out a `redesign` branch for the rest of the book.
- **Signature line:** *Position is the answer to "where does this element actually go." The four values are the four answers.*

### Chapter 5 — Flexbox
- **File:** `chapter-05-flexbox.md`
- **Words:** ~2,400
- **Core idea:** The first real layout tool. The properties that matter: `display: flex`, `gap`, `justify-content`, `align-items`, `flex-direction`. Used to lay out the navigation horizontally.
- **Project milestone:** Nav is horizontal. Header is laid out with logo and nav side by side.
- **Signature line:** *Flexbox is for arrangement along a single axis. That covers more layout problems than you'd think.*

### Chapter 6 — Grid
- **File:** `chapter-06-grid.md`
- **Words:** ~2,300
- **Core idea:** Two-dimensional layout. The properties that matter: `display: grid`, `grid-template-columns`, `gap`, named areas. Used for the page layout overall.
- **Project milestone:** Page has a real grid layout — content centered with breathing room.
- **Signature line:** *Grid is for two-axis layout. The day you stop reaching for floats is the day you start writing modern CSS.*

### Chapter 7 — Typography
- **File:** `chapter-07-typography.md`
- **Words:** ~2,400
- **Core idea:** The site is a reading site. Typography is doing real work. `font-family`, `line-height`, `font-size` scale, web fonts (Google Fonts as starting point), readable line length.
- **Project milestone:** Site has a real typeface, comfortable line height, max-width on text.
- **Signature line:** *Typography is what turns a page into a thing people actually read.*

### Chapter 8 — Color and Identity
- **File:** `chapter-08-color.md`
- **Words:** ~2,200
- **Core idea:** Color systems, the few colors a small site actually needs, contrast for accessibility. Reader picks a small palette (this is one of the legitimate "minute differences" between readers).
- **Project milestone:** Site has a brand color and consistent text/link colors.
- **Signature line:** *Five colors, used consistently, beat fifty colors used randomly.*

### Chapter 9 — Custom Properties (CSS Variables)
- **File:** `chapter-09-custom-properties.md`
- **Words:** ~1,900
- **Core idea:** `--variable: value;` — define once, use everywhere. The modern way to avoid repetition. Sets the foundation for theming and dark mode (which JS book will activate).
- **Project milestone:** Color and typography values centralized in `:root` variables.
- **Signature line:** *A CSS variable is a name for a value. That name lets you change the value once and have it change everywhere.*

### Chapter 10 — Responsive Design
- **File:** `chapter-10-responsive.md`
- **Words:** ~2,300
- **Core idea:** The site needs to work on phones. Media queries. Mobile-first. Real breakpoints based on content, not devices. Fluid typography.
- **Project milestone:** Site is genuinely responsive — works on a phone, tablet, laptop, desktop.
- **Signature line:** *Mobile-first is not about phones. It is about admitting you do not know what device the user is on.*

### Chapter 11 — A Visual Pass
- **File:** `chapter-11-visual-pass.md`
- **Words:** ~1,800
- **Core idea:** A pass of polish — small touches that make a site feel finished. Hover states, transitions, focus rings, the form's visual identity, the table's borders.
- **Project milestone:** Site looks done. Reader merges the redesign branch into main and pushes; the live site updates.
- **Signature line:** *The difference between "done" and "polished" is twenty small details that took a day. Take the day.*

### Chapter 12 — Where to Next (Closing)
- **File:** `chapter-99-closing.md`
- **Words:** ~700
- **Core idea:** CSS book over. Site is presentable. JavaScript book makes it interactive.
- **Notes:** Same warm closing tone as Book 1's closing.

---

## 7. Code conventions

- All CSS uses 2-space indentation.
- Lowercase property names. Values lowercase except when they shouldn't be (font-family names with capitals).
- One declaration per line.
- Trailing semicolons on every declaration.
- Comments are sparing. CSS comments use `/* */`.
- Custom properties (variables) defined in `:root` at the top of the file.

---

## 8. Git workflow

- Chapter 4 introduces branching. Reader checks out a branch called `redesign` and works on it for chapters 4–11.
- Chapter 11 ends with merging `redesign` back into `main` and deploying.
- Each chapter still ends with a commit (on the `redesign` branch from Chapter 4 onward).

---

## 9. Banned words

Same list as the HTML book. See `Trilogy/voice-anchor.md`.

---

## 10. Word count table

| # | Title | Target |
|---|---|---|
| 0 | Why You Are Reading This | 1,400 |
| 1 | The First Stylesheet | 2,100 |
| 2 | The Cascade, Specificity, and Inheritance | 2,300 |
| 3 | The Box Model | 2,200 |
| 4 | Display, Flow, and Position | 2,300 |
| 5 | Flexbox | 2,400 |
| 6 | Grid | 2,300 |
| 7 | Typography | 2,400 |
| 8 | Color and Identity | 2,200 |
| 9 | Custom Properties (CSS Variables) | 1,900 |
| 10 | Responsive Design | 2,300 |
| 11 | A Visual Pass | 1,800 |
| 12 | Where to Next | 700 |
| | **Total** | **~26,300** |
