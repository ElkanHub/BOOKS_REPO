# Chapter 3 — Text on a Page

Most of what's on the web is text. The framework you'll learn next year is text. The articles you read every day are text. The documentation you'll be searching for the rest of your career is text. Even the parts of the web that aren't obviously text — the buttons, the menus, the forms — have text inside them, doing the actual work of telling the user what they are.

HTML's text elements are the most-used part of the language. You will type more `<p>` tags in your career than any other tag, by a wide margin. This chapter is about the small set of elements that handle words on a page, and about using them well enough that a plain unstyled HTML document is already readable.

We are also going to add the first real content to your project — the homepage's body and the first article on the path page. By the end of this chapter, your site will have something to read.

---

## Headings

You have already used `<h1>`. There are six heading levels: `<h1>` through `<h6>`. They are not just six different sizes. They are six levels of *importance,* and the browser shows the importance through size by default.

```html
<h1>The most important heading on the page.</h1>
<h2>The next level down. Section title.</h2>
<h3>A subsection inside that section.</h3>
<h4>Used rarely.</h4>
<h5>Used very rarely.</h5>
<h6>Used almost never.</h6>
```

The rule of headings is the rule of outlines. If you imagine your page as a document with a table of contents, the `<h1>` is the title of the document. The `<h2>` elements are the chapter titles. The `<h3>` elements are the sub-sections within each chapter. And so on down.

Two pieces of guidance that will save you trouble for years.

**Use one `<h1>` per page.** It's the title of that page. The homepage's `<h1>` says *The Frontend Field Guide.* The about page's says *About.* The glossary's will say *Glossary.* One per page, no more.

**Don't skip levels.** If you have an `<h1>`, the next level down is `<h2>`, not `<h3>`. If you have an `<h2>`, the next level down inside it is `<h3>`, not `<h4>`. Skipping levels — going from `<h1>` straight to `<h3>`, for example — confuses screen readers and search engines. They use the heading order to build a mental map of your page. If the order has gaps, the map has gaps.

A common beginner reflex is to pick a heading by how big or small they want the text to look. *I want this to be a little smaller than the title, so I'll use `<h3>`.* Don't. Pick the heading by what it *means.* If it's a section title under your main title, it's an `<h2>`, regardless of how big or small you wanted it to look. The visual size is CSS's job, in Book 3. Right now you are picking semantics, not appearance.

---

## Paragraphs

Every paragraph is its own `<p>` element. Not two paragraphs in one tag separated by a blank line. Not paragraphs separated by `<br>` tags. Each paragraph in its own `<p>`.

```html
<p>The Frontend Field Guide is a reference for people learning to build for the web. It is short on purpose. It is opinionated on purpose.</p>
<p>This site is the project that the trilogy of books builds together. By the end of the third book, the site is real and the reader has shipped it.</p>
```

The browser handles spacing between paragraphs for you. The blank line between them in the HTML source is for your eyes — the browser ignores whitespace between block elements. What the browser cares about is the elements themselves, and `<p>` says *this is a paragraph,* with all that implies.

If you find yourself wanting to put a line break in the middle of a paragraph — to force a new line without starting a new paragraph — you can use `<br>`. It is a self-closing tag. It does not have a closing form.

```html
<p>Roses are red,<br>
violets are blue,<br>
this is a place<br>
where line breaks make sense.</p>
```

`<br>` should be rare. If you are using a lot of them, you almost always actually want separate paragraphs, or a list, or some other element. The legitimate uses of `<br>` are for things like addresses, poetry, and lyrics — places where the line break is part of the content's meaning.

---

## Lists

Two kinds of lists, plus the items inside them.

`<ul>` is an **unordered list** — a bulleted list. Use it when the items don't have an inherent order: a list of features, a list of links, a list of names.

`<ol>` is an **ordered list** — a numbered list. Use it when the order matters: a list of steps, a ranking, a sequence.

Inside either kind of list, each item is wrapped in `<li>` — a list item.

```html
<ul>
  <li>Home</li>
  <li>About</li>
  <li>Path</li>
  <li>Glossary</li>
  <li>Errors</li>
  <li>Tools</li>
  <li>Contact</li>
</ul>
```

That is your future site nav, listed out. By Chapter 4 you'll wrap each item in an `<a>` to make it a clickable link, but the structure is correct now.

Order matters in `<ol>`:

```html
<ol>
  <li>Open your editor.</li>
  <li>Make a new file.</li>
  <li>Save it.</li>
  <li>Open it in the browser.</li>
</ol>
```

You can nest lists — put a `<ul>` inside a `<li>` of another list. The nested list becomes a sub-bullet group. This is the right way to model hierarchical content. Don't use indentation tricks; use real nesting.

There is a third kind of list — the **description list,** `<dl>` — which we will use heavily for the glossary in Chapter 5. It pairs terms with their definitions:

```html
<dl>
  <dt>HTML</dt>
  <dd>Hypertext Markup Language. The language used to structure content on the web.</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets. The language used to style content on the web.</dd>
</dl>
```

`<dt>` is the term being defined. `<dd>` is the definition. We will return to this in Chapter 5 when we build the glossary page properly. Mentioning it now so you know it exists.

---

## Emphasis: `<em>`, `<strong>`, and the not-quite-right pair

A common confusion. Let's settle it.

`<em>` is for emphasis. The browser will, by default, italicize the text inside it.

`<strong>` is for strong importance. The browser will, by default, bold the text inside it.

```html
<p>This is <em>emphasized</em> text.</p>
<p>This is <strong>strongly important</strong> text.</p>
```

There are two other tags you will see, especially in older code: `<i>` and `<b>`.

`<i>` is for italic text whose italic is *not* emphasis — for example, a foreign word, a ship's name, a book title. *The Frontend Field Guide* is a book title, and would be `<i>The Frontend Field Guide</i>`. The italic is conventional, not emphatic.

`<b>` is for bold text whose bold is *not* importance — for example, a key term being introduced, the name of a product, the lede of a paragraph. The bold is conventional, not weighty.

In practice, beginners use `<em>` and `<strong>` for nearly all italic and bold needs. That's fine. The distinction is meaningful but rarely the one that breaks a page. The reason to know it exists is so that when you see `<i>` or `<b>` in someone else's code, you know it's not a mistake — they had a specific reason.

---

## Quotations

Two elements for quoting.

`<blockquote>` is for a quotation that stands on its own as a block — a long quote, a pull quote, a quoted paragraph from somewhere else.

```html
<blockquote>
  <p>Programming didn't get harder. It got deeper.</p>
</blockquote>
```

Note the `<p>` inside the `<blockquote>`. A blockquote is a container for quoted content; the content inside still needs its own structural tags.

`<q>` is for an inline quotation — a quoted phrase inside another sentence. The browser adds quotation marks for you, in the appropriate style for the page's language.

```html
<p>The chapter ends with the line, <q>HTML is the shape of the page</q>.</p>
```

`<q>` is a tag you will use less often than `<blockquote>`. Most inline quotations get written with regular quotation marks in the text — `"like this"` — rather than with a tag. Both are fine. Use whichever fits the context.

If you want to credit the source of a quotation, use `<cite>` for the source's name. It usually appears immediately after the blockquote.

```html
<blockquote>
  <p>Programming didn't get harder. It got deeper.</p>
</blockquote>
<p>— <cite>We Were Never Really Coding</cite></p>
```

---

## Honest moment: the names are a mess

Here's the thing nobody tells you when they teach this. Some of the names of HTML elements are bad. They are abbreviations from a different decade — `<p>` for paragraph, `<a>` for anchor, `<ul>` for unordered list, `<dl>` for description list. They are not memorable. They are not consistent. The first time I tried to memorize them, I couldn't.

The reason they are abbreviations is that early HTML was hand-typed, often in slow text editors over slow connections, and short tag names saved keystrokes. We are not in that world anymore. But the names are baked in. Changing them would break the entire web.

You do not need to memorize them by sitting down with flashcards. You will use them, look them up when you forget, use them again, and after about three weeks, you will stop looking them up. The repetition does the work. Don't fight the mess. Just keep typing.

---

## Adding the homepage's real content

We are going to give the homepage a proper introduction. Open `index.html`. Replace what's inside the `<body>` with this:

```html
<h1>The Frontend Field Guide</h1>
<p>A small, practical reference for people who are learning to build for the web. Written for the next person walking the road we are walking now.</p>

<h2>What you'll find here</h2>
<p>This site collects the things we wish we had known when we started. The pages are short. The advice is direct. None of it is the only way to do something — it is the way that worked for us.</p>

<ul>
  <li>A path of foundational articles, in the order they made sense to us.</li>
  <li>A glossary of terms, defined in plain language.</li>
  <li>A list of common errors and what they actually mean.</li>
  <li>A short, opinionated list of tools that paid off.</li>
</ul>

<h2>Who this is for</h2>
<p>If you are new to building for the web, or you took a break and are coming back, this site is for you. It is not exhaustive. It is not the only thing you should ever read. It is a place to start, written by people who started recently enough to remember what it felt like.</p>

<p><strong>Start with the path.</strong> If you don't know where else to go, that's where to go.</p>
```

Save. Open `index.html` in the browser (or refresh if it's already open).

Look at it. Plain black text on a plain white background. The headings are bigger than the paragraphs. The bullet list has bullets. The bold is bold. There is no styling at all, and yet the page is readable. Someone could land on it right now and understand what the site is about.

That is what HTML's text elements give you for free. Use them well, and a document is legible before you have written a single line of CSS.

---

## Adding the first article on the path page

Make a new file in the project folder: `path.html`. Use the same anatomy you used for `about.html`. Then put this inside the body:

```html
<h1>The Path</h1>
<p>A short, ordered set of articles for someone new to building for the web. Read them in order. They build on each other.</p>

<h2>1. What HTML actually is</h2>
<p>HTML stands for Hypertext Markup Language. It is the language used to give structure to content on the web — to say <em>this is a heading,</em> <em>this is a paragraph,</em> <em>this is a link.</em></p>

<p>HTML is not code in the way that JavaScript is code. There is no execution. There are no instructions to run. There is content, with annotations around it that a browser knows how to display.</p>

<p>The browser opens an HTML file. It reads the markup. It builds a representation of the page in memory. It draws that representation on the screen. That is the whole transaction. Frameworks come and go; this transaction has been the same since 1993.</p>

<h2>What's next</h2>
<p>The next article on this path is about CSS — the language used to make HTML look like something. We'll get there once the site has more content to style.</p>
```

Save. Open `path.html` in the browser. Read it. Notice that with no styling, no images, no layout, the article is already readable.

That is the experience of well-marked-up plain HTML. *Plain HTML, with nothing else, is already a readable document. That is not an accident.* <!-- SIGNATURE LINE -->

The fact that this works is a deliberate design decision in the language. The browser's defaults are not arbitrary. They are tuned so that, with the right elements in the right places, a page is functional out of the box. CSS is not the thing that makes a page work; CSS is the thing that makes a page look how *you* want it to. The work has already been done, before any styling, by the markup.

---

## A small permission

You may, while reading this chapter, have noticed that the elements aren't very many. There are about a dozen common text-related elements in HTML. The same dozen, used well, handle ninety-five percent of the prose on the web.

If that feels like less than you expected, that's the point. HTML's text vocabulary is small. The skill is not in knowing many elements. The skill is in picking the right one for the meaning you want to convey. That skill compounds. Every time you ask yourself *is this a heading or a paragraph? a list or a sequence of paragraphs? emphasis or strong importance?* you are building the muscle that makes you good at HTML.

You don't need to be perfect at this yet. You will pick the wrong tag sometimes. You will fix it later when you notice. That is the entire learning curve, in one sentence.

---

## Try this

1. Add a second article to the path page, after the existing one. Use this content:

   ```html
   <h2>2. Why HTML and CSS are separate</h2>
   <p>Beginners often want to learn HTML and CSS at the same time. There is a good reason not to.</p>
   <p>HTML is the structure of the page. CSS is the appearance. They do different jobs. When you learn them mixed together, your instinct becomes to fix structural problems with appearance hacks, or to reach for HTML tricks to get visual effects. The result is code that is hard to read and harder to change.</p>
   <p>Learn HTML alone. Build something real. Live with the discomfort of a site that looks like 1995. Then add CSS, and watch what it does to the structure underneath.</p>
   ```

2. Make sure the heading hierarchy is correct: `<h1>` for the page title, `<h2>` for each article title.
3. Save.
4. Commit and push:
   ```
   git add path.html index.html
   git commit -m "Add real text content to home and path pages"
   git push
   ```
5. Refresh your GitHub page. Click into `path.html` to see it on GitHub. Click into `index.html` too.

When that's done, the chapter is over. In Chapter 4, we'll connect everything together with links and a real navigation across the site.

---

## CHAPTER HANDOFF REPORT

**Chapter:** 3 — Text on a Page
**Word count:** ~2,550
**Signature line:** *Plain HTML, with nothing else, is already a readable document. That is not an accident.*

**Project milestone:** Real content on home and path pages. First article on path. Heading hierarchy correct. About page from Ch.2 still in place.
**Files touched:** `index.html`, `path.html` (new).
**Concepts introduced:**
- Heading hierarchy (`<h1>`–`<h6>`), one h1 per page, no level-skipping
- Paragraphs (`<p>`) and the rule of one paragraph per element
- `<br>` and when (rarely) to use it
- Unordered, ordered, and description lists (`<ul>`, `<ol>`, `<dl>`)
- `<em>` vs. `<strong>` vs. `<i>` vs. `<b>`
- `<blockquote>`, `<q>`, `<cite>`

**Items flagged for verification:** None.

**Honest-admission moment:** "Some of the names of HTML elements are bad."
**Permission-giving moment:** "You don't need to be perfect at this yet. You will pick the wrong tag sometimes. You will fix it later when you notice."

**STATUS:** Continuing.
