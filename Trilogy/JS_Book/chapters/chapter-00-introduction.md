# Chapter 0 — Why You Are Reading This

You finished the HTML book and the CSS book. Your `frontend-field-guide` site is structured, styled, responsive, and live. People can read it. It looks like a real reference site.

It also doesn't *do* anything.

Click around the site. Try the search box — there isn't one. Try filtering the glossary — you can't. Try toggling dark mode — the CSS is ready for it, but nothing flips the switch. Try sending a contact form — it submits to nowhere and the page reloads. The site is a document. It is not yet an application.

This book is the one where it becomes an application. By the end, the site has search, filters, dark mode that persists, glossary popovers, a working contact form, and a small piece of dynamic content fetched from a real API. The site stays the same site, at the same URL. What changes is one new file — `script.js` — and what the browser does with it.

---

## What JavaScript actually is

JavaScript is the third language of the web, alongside HTML and CSS. HTML structures the content. CSS styles it. JavaScript adds behavior — anything that responds to the user, anything that changes after the page first loads, anything that talks to a server, anything that remembers state across visits.

JavaScript runs *in the browser.* It runs after the HTML has been parsed and the CSS has been applied. It can read what's on the page, change what's on the page, listen for things the user does (clicks, typing, scrolling), and talk to other servers across the network.

There is also a version of JavaScript that runs *outside* the browser, on servers — that's Node.js, and it's a separate world. We are not learning Node in this book. We are learning the JavaScript that lives in the browser, because that's what your project needs and what every framework eventually compiles down to.

---

## What you'll have at the end

- A site with real interactive features: client-side search across glossary terms, filters on the errors page, a dark mode toggle that persists across visits.
- A working contact form that captures the user's input and confirms receipt (we won't send actual emails — that requires a backend — but the form behavior is real).
- A small piece of dynamic content on the home page (a "tip of the day" or similar, fetched from a free public API or a JSON file).
- Glossary terms that show their definitions on hover/click without leaving the page.
- A reading-progress indicator on the path page that remembers where you stopped.
- A modular `script.js` (split into a few smaller files by the end) — the start of how real JS projects are organized.

By the end, the site is interactive in the ways modern websites are interactive. Anyone landing on it would not be able to tell — without inspecting the code — that it was hand-written from scratch by someone who didn't know HTML when they started.

---

## What's different about this book

JavaScript is a bigger language than HTML or CSS. There is more syntax. There are more concepts. The cost of skipping foundations is higher — JS errors are noisier and weirder than CSS errors, and a JS bug can break the whole page in ways an HTML or CSS bug usually can't.

This book is therefore the longest of the three, and the chapters are denser. The first half is foundational — the language itself, with small examples that don't yet touch the project. The second half applies what we've built to the project, chapter by chapter, until the site is interactive.

You should expect to spend more time on this book than on either of the previous two. Not because it's harder, but because there's more of it, and the parts depend on each other in tighter ways. Take the chapters at the pace they ask for. Don't skim Chapter 4 thinking you'll come back to it — Chapter 6 won't make sense without it.

---

## How this book is organized

Chapters 1–5 cover the language itself: variables, control flow, functions, arrays, objects. Small, focused, mostly self-contained. The project barely changes.

Chapter 6 introduces the DOM — the bridge between JavaScript and the page. From this chapter onward, the project starts to move.

Chapters 7–11 build the interactive features one at a time: events, forms, fetching data, async, localStorage. Each chapter ends with the site doing something it couldn't do before.

Chapter 12 reorganizes the code into modules — the way real JS projects are structured.

Chapter 13 is about reading code, because reading code is a skill, and most beginners hit a wall there. The chapter exists because it filled the biggest gap in my own learning, late.

The closing is short.

---

## A small permission

You will not become a JavaScript expert by reading this book. The language has more depth than any single book covers. What this book gives you is enough JavaScript to build the project, plus the foundations you need to read modern code without panic. That's enough to take you into the React + AI book that follows.

You will also not memorize every method, every API, every syntax variation. Nobody does. The skill is in knowing the patterns, recognizing when you need a tool, and being comfortable looking up the rest. We are aiming for that shape of competence, not for memorization.

If at any point a chapter feels overwhelming, slow down. Read it twice. Type the examples instead of skimming them. The cost of going slowly is hours. The cost of going too fast and not absorbing the foundation is months of debugging code that doesn't make sense.

---

## Open the project

Before reading Chapter 1, open your `frontend-field-guide` folder in VS Code. Open the live site. Click around. Notice everything that doesn't yet do something — every form, every link to a section that should jump, every place where you wish the site responded. Each of those will become real over the next thirteen chapters.

When you're ready, read Chapter 1. We'll create the script file and link it from every page.

*JavaScript is what makes a website do things.* <!-- SIGNATURE LINE -->

---

## CHAPTER HANDOFF REPORT

**Chapter:** 0 — Why You Are Reading This
**Word count:** ~1,200
**Signature line:** *JavaScript is what makes a website do things.*

**Project milestone:** None. Frame is set.
**Files touched:** None.
**Concepts introduced:**
- JS as the behavior layer
- Browser JS vs Node (we're doing browser only)
- What the reader will have at the end
- Book structure
- Pace expectations

**Honest-admission moment:** Implicit in "JS errors are noisier and weirder than CSS errors..."
**Permission-giving moment:** "If at any point a chapter feels overwhelming, slow down."

**STATUS:** Continuing.
