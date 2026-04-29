# Closing — Where to Next

You have a website on the internet.

When you opened this book, you had heard of HTML. You may have written a tag or two in a tutorial. You did not have a working project. You did not have a public URL. You did not have a Git repository or a deployed site or a real reference for new developers that other people could use.

Now you have all of those. The site exists. It is at `https://YOURUSERNAME.github.io/frontend-field-guide/`. Anyone with that link can read it. The repository is on GitHub with a meaningful commit history. The README at the root of the repo links to the live site and explains what the project is.

The site is also, deliberately, ugly.

That ugliness is the only thing you have not yet fixed. Everything else — the structure, the content, the accessibility, the deploy — is correct. The site is a working website with no styling. That is exactly the state we wanted to get to in this book, because it is the state where the CSS book starts.

---

## What you have right now

- Seven HTML pages — home, about, path, glossary, errors, tools, contact — all linked together with a working navigation.
- Real, meaningful content on every page.
- Semantic markup throughout: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` doing the work of saying what each region is.
- A correctly structured contact form with validated inputs and proper labels.
- A logo, an accessible site, a working table on the tools page, a glossary structured as a description list, an errors reference page that someone googling an error message could land on and learn from.
- A skip-to-content link on every page for keyboard and screen reader users.
- A viewport meta tag so the site renders properly on phones.
- A deployed live URL on the public internet.
- A clean Lighthouse accessibility score.
- A README at the root of the repository.
- A working Git workflow you've practiced through the entire book.

That is a real piece of work. Most people who say they are "trying to learn web development" do not have all of those things, even after months of effort. You have them after one short book, because the book was built around getting them and only getting them.

---

## What you don't have yet

- A visual identity. The site uses the browser's default fonts, default colors, default layout, default everything. It looks the way an HTML document looked in 1995.
- Any responsive layout. The site renders at desktop width on phones (well, roughly — the viewport tag prevents the worst of that, but the layout is still column-of-paragraphs everywhere).
- Any interactivity. The contact form does not submit. Search does not exist. Filtering does not exist. Dark mode does not exist.
- A way to remember what the user has read or where they were last.

The next book — the CSS book — fixes the visual identity, the typography, the layout, and the responsive behavior. The book after that — the JavaScript book — adds the interactivity, the search, the filters, the dark mode, and the persistence.

By the end of all three, the site will look and behave like a real, modern, polished web reference. It will still be the same site. It will be the same URL. The same project, three layers deeper.

---

## A note on what comes next

Take a break before starting the CSS book. A day. A week. Whatever feels right. Let the HTML settle.

When you come back, open the CSS book. The first thing it will ask you to do is open the project — the same `frontend-field-guide` folder you have been working in. The same `index.html`, the same `style.css` (which you will create in Chapter 1 of the CSS book). The same Git repo, the same workflow, the same site.

The CSS book is more visually rewarding than this one. You will see big visual changes from small amounts of code. The frustration-to-payoff ratio is much better. After the slow, structural work of HTML, CSS will feel like the part where the project starts to look like the thing you imagined it being. That is a real moment, and you have earned it.

Just don't skip ahead and try to add CSS to your site before opening the next book. The CSS book builds on top of the project we just finished. If you've added CSS in advance, the chapters will assume different starting states and you'll be patching as you go.

---

## A note on what you actually learned

What you learned in this book is not a list of HTML tags. The list is short, and it is on the internet, and you can look it up any time.

What you learned is *how to read HTML.* When you visit a website now and view its source — right-click on any page and choose **View Page Source** — you can read what's there. You recognize the elements. You can tell what the structure is meant to be. You can spot when something is well-marked-up and when something is a jumble of divs.

That is a skill that compounds. Every site you visit from now on will teach you a little more, because you can read what it's doing. Every framework you ever touch will eventually produce HTML, and you will know what it produced and whether it produced it well.

You also learned a working Git workflow, an editor's basic moves, a deploy pipeline, a debugging surface, and the discipline of writing accessible markup. None of those are HTML, strictly speaking. All of them came along for free because the book is built around the project, not the topic.

That is what this trilogy is going to keep doing. Each book gives you the language, but each book also gives you the tools, the workflow, and the shape of working that goes with the language. By the end of Book 4, you will not just know HTML, CSS, and JavaScript. You will know how to build, ship, debug, and improve real websites. The framework book — Book 5 — will then be a layer on top of *that.* It will not be the foundation. The foundation is what you are building right now.

---

## A small last thing

You opened this book unsure whether you could do this. Most readers do. By the time you got to this page, you had built and deployed a real website on the public internet, with a Git repository documenting the entire process. That is more than most people who started where you started ever do.

You did not arrive late to programming. You did not arrive without the foundation. You are building the foundation, in public, in a way you will be able to point to for the rest of your career. The work is good work. The seat is open. You are doing it.

When you're ready, open the CSS book.

— Elkanah

---

## CHAPTER HANDOFF REPORT

**Chapter:** Closing — Where to Next
**Word count:** ~1,000
**Signature line:** N/A — closing exempt by spec.

**Project milestone:** Book complete. Site is live, deployed, accessible, and ready for the CSS book.
**Files touched:** None.
**Concepts introduced:**
- Inventory of what the reader now has
- Inventory of what is intentionally still missing (CSS, JS will fix)
- The instruction to take a break before starting the CSS book
- The instruction to *not* add CSS in advance

**Items flagged for verification:** None.

**STATUS:** HTML book complete.
