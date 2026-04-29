# Chapter 9 — Accessibility

This chapter is not where accessibility starts. Accessibility started in Chapter 2, when you wrote `<html lang="en">` so screen readers would know what language to read your page in. It continued in Chapter 3, when you used heading levels to give the document an outline. In Chapter 5, when you wrote real `alt` text on every image. In Chapter 6, when you used `<header>`, `<nav>`, `<main>`, and `<footer>` so screen reader users could jump between landmarks. In Chapter 7, when you wrote a `<label>` for every input on the contact form.

You have been doing accessibility work for the entire book. This chapter is where we name it, fill in the few pieces still missing, and run a real audit on the site to see what we got right and what we got wrong.

---

## What accessibility actually is

Accessibility — often abbreviated *a11y* (the eleven letters between *a* and *y*) — is the practice of building things so that they work for as many people as possible. The "as many people as possible" includes people who can't see the screen, people who can't use a mouse, people who can't hear audio, people who have trouble reading, people who are colorblind, people who have limited motor control, people who are in a hurry, and people who are using a small screen on a slow connection in a noisy room.

That last group is most of us, most of the time. The reason accessibility matters for everyone is that the conditions under which someone uses your site are unpredictable. The user might be on a phone, in a moving vehicle, with a cracked screen, while distracted. They might have a speech-recognition setup. They might be using a screen reader because they're blind, or because they're driving, or because they prefer it.

A site that's accessible works for the worst case, which means it also works for everyone in between. A site that's not accessible secretly excludes a portion of its users — and "secretly" is the right word, because the developer doesn't see the exclusion happening, and the excluded users mostly leave without complaining.

Accessibility is one of the most concrete things web developers can do that has a real, measurable effect on real people. It is not a side concern. It is what professional web development looks like.

---

## What you've already done right

Before we look for issues, take inventory. Your site already has:

- A correctly declared language on every page.
- A meaningful `<title>` on every page.
- One `<h1>` per page, and a heading hierarchy that doesn't skip levels.
- Real `alt` text on every image.
- Semantic landmarks: `<header>`, `<nav>`, `<main>`, `<footer>` in the right places.
- A `<label>` for every form input, properly connected with `for` and `id`.
- The right input types (`type="email"` on the email field, etc.).
- Required-field validation built into the HTML.
- A table with a caption and proper `<th>` headers.

That is a lot. Most production sites do worse than that on day one of a project, and never circle back to fix it. Yours is correct from the markup outward because we built it that way deliberately, chapter by chapter.

What's left is a small set of refinements, and then an audit.

---

## Heading order, one more time

Open your three content pages — `index.html`, `about.html`, `path.html` — and look at the heading structure on each.

The homepage should have:

- `<h1>` *The Frontend Field Guide* — the page title.
- `<h2>` *What you'll find here*
- `<h2>` *Who this is for*

That is correct. One h1 at the top, h2s for each section.

The about page should have:

- `<h1>` *About*
- (any h2s for sub-topics, if you added them)

The path page should have:

- `<h1>` *The Path*
- `<h2>` for each article

That is also correct. The articles are at the same level — they're peers within the page — so they all use h2.

What would be wrong: an h3 inside a section that doesn't have an h2 above it. An h2 followed directly by an h4. A page with two h1s. If you have any of these, fix them now. Heading order is one of the things screen readers rely on most heavily.

---

## Skip-to-content links

There is one accessibility feature your site doesn't have yet, and it's worth adding because the cost is one line of HTML.

Imagine a screen reader user landing on your page. The page begins with a header that contains the logo and a navigation list with seven items. Without help, the user has to listen to all seven nav items before they reach the main content — on every single page. Every time they navigate to a new page, the same seven items, the same announcement, then the content.

The fix is a *skip link* — a link that appears at the very start of the page (before the header, even) and points directly to the main content.

```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```

For the link to work, the `<main>` element on each page needs an id matching the link's href:

```html
<main id="main-content">
  ...
</main>
```

Now a user can press Tab once when the page loads and land on the skip link, then press Enter to jump past the navigation and into the content.

Sighted users won't see this link in the visual flow once we style the page in Book 3 — there's a standard CSS pattern that hides the link until it gets keyboard focus. But the link is in the HTML, and keyboard users (including screen reader users) can use it.

Add the skip link to every page, just inside `<body>` and before `<header>`:

```html
<body>
  <a href="#main-content" class="skip-link">Skip to main content</a>
  <header>
    ...
  </header>
  <main id="main-content">
    ...
  </main>
  ...
</body>
```

Save. The skip link will look strange in the unstyled page — it'll be the first visible thing. That is fine. We'll hide it visually in Book 3.

---

## ARIA, only when necessary

You may have read or heard about *ARIA* — the Accessible Rich Internet Applications spec. ARIA is a set of attributes that you can add to HTML to give screen readers extra information. `aria-label`, `role`, `aria-describedby`, and so on.

Here is the most important rule about ARIA: *the right ARIA attribute is no ARIA attribute.* If you can use a native HTML element that does the right thing, do that instead. Native HTML has accessibility built in. ARIA is a way to retrofit accessibility onto markup that doesn't have it natively.

Examples:

- A `<button>` is a button. You don't need `role="button"` on a `<div>`.
- A `<nav>` is a navigation. You don't need `role="navigation"` on a `<div>`.
- An `<a href="...">` is a link. You don't need `role="link"` on a `<span>`.
- A `<label>` for an input is a label. You don't need `aria-label` on the input.

When *do* you need ARIA? When you are building something that doesn't have a native HTML equivalent — a custom dropdown component, a tab interface, a modal dialog. Those are advanced patterns. They will come up in Book 5. For now, the right answer is *use the native element,* and the native element does the right thing automatically.

A small exception: `aria-label` is occasionally useful on interactive elements that have no visible text. For example, a button that contains only an icon (which we won't have until we add SVG icons in CSS) needs an `aria-label` so screen readers can announce what the button does. You will hit this case eventually. When you do, you'll know what the attribute is for.

For this chapter, you are not adding ARIA. You are removing the temptation to.

---

## Running the audit

Time to see how your site does in a real audit.

Open `index.html` in Chrome. Press F12 to open DevTools. (On Mac: `Cmd+Opt+I`. On Windows: `F12` or `Ctrl+Shift+I`.)

The DevTools panel opens — usually at the bottom of the browser window. There are several tabs at the top. Find the one labeled **Lighthouse**. (If you don't see it, click the `>>` arrow to find it in the overflow.) Click it.

Lighthouse is a tool that audits the page for performance, accessibility, best practices, and SEO. Uncheck the boxes for *Performance,* *Best Practices,* *SEO,* and any others — leave only **Accessibility** checked. Click **Analyze page load** (the big blue button at the bottom).

Wait. The browser reloads the page and runs the audit. After about a minute, you get a score and a list of findings.

Your score should be high — somewhere in the 90s or 100. The exact number depends on your specific markup, but if you've been following the chapters, the score will be much higher than the average production website.

Below the score, Lighthouse lists any issues it found. Each issue has a description and, often, a link to documentation explaining the issue and how to fix it. Read each one. The issues might include things like:

- Missing background-foreground contrast on some text. (We can't fix this until we add colors in Book 3 — note it for later.)
- A missing `<title>` (shouldn't apply to your site).
- Form fields without labels (shouldn't apply).
- Images without alt text (shouldn't apply).
- Heading levels skipped (could happen — fix if it does).
- The document doesn't have a `<meta name="viewport">` tag.

That last one might surprise you. We added the charset meta tag in Chapter 2, but not the viewport meta tag. The viewport tag tells mobile browsers how to size the page on small screens. Without it, the page renders at desktop size on phones, scaled down — too small to read.

The fix is one line in the `<head>`:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

This says: *use the device's actual width as the viewport width, and don't zoom the page in or out by default.* It is essential for any site that will be viewed on a phone, which is most sites.

Add this line to the `<head>` of every HTML file in your project, right under the `<meta charset>` line. (In Book 3, we will rely on this in every CSS layout decision.)

Run the Lighthouse audit again. The viewport issue should be gone. Fix anything else the audit found, working through the list. Don't worry about every detail being perfect — focus on the ones that name a clear, specific issue.

---

## A small honest moment

The first Lighthouse audit I ran on my own site scored 73 out of 100 on accessibility. I had thought my site was pretty good. The audit found ten distinct issues — missing alt text, a button I had styled to look like a link without making it a real link, contrast that was too low to read, headings that skipped levels.

I fixed them. The score went to 98. The site was meaningfully more usable for everyone, not just the people the audit was technically aimed at. Lighthouse is not the final word on accessibility — there are issues it can't catch automatically — but it is an honest mirror, and it took me from "I think this is fine" to "I have a list of specific things to fix."

Run it on every site you build, every site you maintain, every site you join. Run it more than once. The first run shows you what you forgot. The fifth run shows you what you would have forgotten if you weren't looking.

---

## *Accessible HTML is not a feature you add at the end. It is HTML written correctly the first time.* <!-- SIGNATURE LINE -->

The reason this chapter exists is to consolidate what we've been doing all along, name it, and check it. There is no "accessibility chapter" because accessibility doesn't live in one place. It lives in every choice of element, every attribute, every label, every heading.

The reason the chapter is short relative to the topic is that, if you have followed the book, you have already done the work. The audit confirms it. The remaining bits — the skip link, the viewport tag, the discipline to keep checking — are small additions on top of a solid foundation.

---

## A small permission

You will, in your career, work on sites where the accessibility is bad and someone has to fix it. You will also work on sites where you write accessible code and someone else strips it out. You will work with designers who think accessibility is a constraint and with users who depend on it to use the web at all.

You don't have to win every argument about it. You do have to do your own work right. The bar is: when the markup leaves your hands, it is correct. What other people do downstream is downstream. Your work, by then, is honest.

---

## Try this

1. Run the Lighthouse audit on every page of your site — `index.html`, `about.html`, `path.html`, `contact.html`, `tools.html`. Note any issues.
2. Fix what you can. (Issues about contrast, color, or visual layout are deferred to Book 3.)
3. Add the skip link and the `id="main-content"` on every page.
4. Add the viewport meta tag to the `<head>` of every page.
5. Run the audits again. Confirm the score is improved.
6. Commit:
   ```
   git add .
   git commit -m "Accessibility pass: skip links, viewport tag, audit fixes"
   git push
   ```

When that's done, the chapter is over. In Chapter 10, we'll learn to read the browser — DevTools beyond Lighthouse, and the common errors you'll encounter from now on.

---

## CHAPTER HANDOFF REPORT

**Chapter:** 9 — Accessibility
**Word count:** ~2,350
**Signature line:** *Accessible HTML is not a feature you add at the end. It is HTML written correctly the first time.*

**Project milestone:** Skip-to-content links on every page. Viewport meta tags on every page. Site audited with Lighthouse and any structural issues fixed.
**Files touched:** All HTML files (`index.html`, `about.html`, `path.html`, `contact.html`, `tools.html`).
**Concepts introduced:**
- What accessibility (a11y) actually is
- Inventory of what the site does right already
- Heading-order discipline (reinforced)
- Skip-to-content links and how to implement them
- The "right ARIA is no ARIA" principle
- Lighthouse and how to run an audit
- The viewport meta tag

**Items flagged for verification:** None.

**Honest-admission moment:** "The first Lighthouse audit I ran on my own site scored 73 out of 100 on accessibility."
**Permission-giving moment:** "You don't have to win every argument about it. You do have to do your own work right."

**STATUS:** Continuing.
