# WRITE.md — JavaScript Book
## *What You Need to Know Before React and AI: JavaScript*

The locked spec for Book 4 (JavaScript), the third volume of the trilogy. Inherits from `Trilogy/TRILOGY.md` and `Trilogy/voice-anchor.md`.

---

## 1. Identity

**Title:** *What You Need to Know Before React and AI: JavaScript*
**Author:** Elkanah Donkor
**Audience:** the same reader, two books on. The site is structured (HTML book) and styled (CSS book). The JavaScript book makes it interactive.
**Length target:** ~28,000 words across 14 chapters.
**Output the reader walks away with:** the same site, now with search, filters, dark mode, glossary popovers, persistence, and a working contact form.

---

## 2. Voice

Same as Book 1 and the previous trilogy books.

---

## 3. Project state at the start

The site has 7 HTML pages, semantic, styled, responsive, deployed.
This book adds **one new file** to the project: `script.js`. By the end, the file is around 200–300 lines and the site is genuinely interactive.

---

## 4. Chapter spec

### Chapter 0 — Why You Are Reading This (Introduction)
- **File:** `chapter-00-introduction.md`
- **Words:** ~1,400
- **Core idea:** JS is behavior. Browser JS specifically. We are not learning Node. We are not learning a framework. We are learning the language so the next book (React/AI) makes sense.
- **Signature line:** *JavaScript is what makes a website do things.*

### Chapter 1 — Your First Script
- **File:** `chapter-01-first-script.md`
- **Words:** ~1,800
- **Core idea:** Creating `script.js`, linking it from HTML, the basic shape, `console.log`.
- **Signature line:** *The Console is where your code talks to you.*

### Chapter 2 — Values and Variables
- **File:** `chapter-02-values.md`
- **Words:** ~2,000
- **Core idea:** Strings, numbers, booleans, null, undefined. `let`, `const`, why you basically never use `var`.
- **Signature line:** *A variable is a name for a value, and the value is what your program is actually about.*

### Chapter 3 — Control Flow
- **File:** `chapter-03-control-flow.md`
- **Words:** ~2,000
- **Core idea:** `if`/`else`, `===` (and why not `==`), basic comparisons, ternary, `for` and `while` loops in their modern uses.
- **Signature line:** *Control flow is your program saying "in this case, do this; otherwise, do that."*

### Chapter 4 — Functions
- **File:** `chapter-04-functions.md`
- **Words:** ~2,200
- **Core idea:** Function declarations, arrow functions, parameters, return values. Why functions matter.
- **Signature line:** *A function is a name for a thing your program does.*

### Chapter 5 — Arrays and Objects
- **File:** `chapter-05-arrays-objects.md`
- **Words:** ~2,300
- **Core idea:** Two collection types. Arrays for ordered lists, objects for keyed records. The methods you'll use: `map`, `filter`, `forEach`, `find`. Object access patterns.
- **Signature line:** *Most of the data in your code is in arrays or objects. Knowing the methods is the work.*

### Chapter 6 — The DOM
- **File:** `chapter-06-dom.md`
- **Words:** ~2,400
- **Core idea:** The DOM as the browser's in-memory tree. `querySelector`, `textContent`, `classList`. The mental model of "JS reads/changes the DOM, the browser renders the DOM."
- **Signature line:** *The DOM is the page after the browser has read the HTML. JavaScript talks to the DOM.*

### Chapter 7 — Events
- **File:** `chapter-07-events.md`
- **Words:** ~2,200
- **Core idea:** `addEventListener`, common events (click, input, submit, keydown). The handler function. Event objects briefly.
- **Project milestone:** First real interaction — dark-mode toggle.
- **Signature line:** *Events are the user's edge of your program.*

### Chapter 8 — Working with Forms
- **File:** `chapter-08-forms.md`
- **Words:** ~2,000
- **Core idea:** `submit` event, `preventDefault`, reading values, the `FormData` object briefly.
- **Project milestone:** Contact form actually does something — for now, logs the data and shows a confirmation message.
- **Signature line:** *Forms are how the user gives you data. Handling them well is half of frontend work.*

### Chapter 9 — Fetch and the Network
- **File:** `chapter-09-fetch.md`
- **Words:** ~2,200
- **Core idea:** Promises in their cleanest form, `async`/`await`, `fetch`, JSON. We'll use a small public API to fetch real data.
- **Signature line:** *Fetch is the function that talks to the rest of the internet.*

### Chapter 10 — Async, Properly
- **File:** `chapter-10-async.md`
- **Words:** ~2,200
- **Core idea:** Why async exists, the JS event loop in plain language, error handling with `try`/`catch`. Cleaner than Chapter 9.
- **Signature line:** *Asynchronous code is what your program does while it waits.*

### Chapter 11 — Persistence with localStorage
- **File:** `chapter-11-localstorage.md`
- **Words:** ~1,800
- **Core idea:** Storing data on the user's device. JSON.stringify / parse. The dark-mode preference now persists. Reading progress on the path page persists.
- **Signature line:** *localStorage is a small box your code can keep things in.*

### Chapter 12 — ES Modules
- **File:** `chapter-12-modules.md`
- **Words:** ~1,800
- **Core idea:** `import` / `export`, `<script type="module">`. Splitting the JS file into a few smaller files for maintainability.
- **Signature line:** *Modules are how you stop having one giant file.*

### Chapter 13 — Reading Other People's Code
- **File:** `chapter-13-reading-code.md`
- **Words:** ~2,200
- **Core idea:** The chapter that fills the biggest gap most beginners have. How to read unfamiliar code. Where to start. What to read first. What to skip on first pass.
- **Signature line:** *Reading code is a skill. It is not the same skill as writing code, and you will use it more.*

### Chapter 14 — Closing
- **File:** `chapter-99-closing.md`
- **Words:** ~800
- **Core idea:** Trilogy over. Site shipped. Where to next (Book 5: React + AI).

---

## 5. Project milestones across the book

| Chapter | Site gains |
|---|---|
| 1 | Linked script, "hello" in console |
| 6 | DOM-manipulation experiment |
| 7 | Dark mode toggle (in-session) |
| 8 | Contact form submission feedback |
| 9 | A featured "today" item from a public API (or static JSON) |
| 11 | Dark mode persists; reading progress persists |
| 12 | Code organized into modules |

---

## 6. Banned words and conventions

Same as previous books.

Code style: `const` by default, `let` when reassignment is needed, never `var`. Arrow functions for short callbacks. Function declarations for top-level functions. No semicolons-vs-no-semicolons debate — use semicolons (consistent with Book 1's prose style and most production codebases).

---

## 7. Word count table

| # | Title | Target |
|---|---|---|
| 0 | Why You Are Reading This | 1,400 |
| 1 | Your First Script | 1,800 |
| 2 | Values and Variables | 2,000 |
| 3 | Control Flow | 2,000 |
| 4 | Functions | 2,200 |
| 5 | Arrays and Objects | 2,300 |
| 6 | The DOM | 2,400 |
| 7 | Events | 2,200 |
| 8 | Working with Forms | 2,000 |
| 9 | Fetch and the Network | 2,200 |
| 10 | Async, Properly | 2,200 |
| 11 | Persistence with localStorage | 1,800 |
| 12 | ES Modules | 1,800 |
| 13 | Reading Other People's Code | 2,200 |
| 14 | Closing | 800 |
| | **Total** | **~29,300** |
