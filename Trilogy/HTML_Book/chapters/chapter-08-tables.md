# Chapter 8 — Tables, When Tabular

A short chapter on a small element family, with one strong opinion attached.

The opinion is the easy part: *use tables for data, not for layout.* If the content has rows and columns, where each row represents a record and each column represents a kind of information about that record, it's a table. If the content is "stuff arranged in a grid for visual reasons," it is not — and CSS is the right tool for laying that out, which we'll cover in the CSS book.

This rule sounds simple in 2026. It was not simple in 2003. The web spent about a decade with HTML tables doing the job that CSS Grid does today, and the consequence was a generation of websites whose markup was a tangle of nested tables with the actual content buried deep inside. We are past that. Tables today are for tabular data, which is what they were designed for. We will build the tools page using a table, because the tools page is genuinely tabular.

---

## A simple table

A table has three core elements.

`<table>` wraps the whole table.

`<tr>` (table row) wraps each row.

`<td>` (table data) wraps each cell within a row.

```html
<table>
  <tr>
    <td>VS Code</td>
    <td>Editor</td>
    <td>Free</td>
  </tr>
  <tr>
    <td>Chrome DevTools</td>
    <td>Debugging</td>
    <td>Built into Chrome</td>
  </tr>
</table>
```

That is the minimum: a table with two rows of three cells each. The browser draws it as a grid. There are no borders by default in 2026, but the cells line up horizontally, and that is what makes it a table.

You will almost always want more structure than that. The next two elements give it.

---

## Heading rows

A real table has a header row at the top that names each column. The header cells use `<th>` (table header) instead of `<td>`. The browser displays them in bold by default, and screen readers announce them differently — they treat header cells as the labels for the data cells in the same column.

```html
<table>
  <tr>
    <th>Tool</th>
    <th>Purpose</th>
    <th>Cost</th>
  </tr>
  <tr>
    <td>VS Code</td>
    <td>Editor</td>
    <td>Free</td>
  </tr>
  <tr>
    <td>Chrome DevTools</td>
    <td>Debugging</td>
    <td>Built into Chrome</td>
  </tr>
</table>
```

The first row is the headers. Each subsequent row is data. A screen reader, reading "VS Code," knows that "Tool" is its column header, and announces it as such. A user can navigate the table by row or by column, with the headers giving each cell its meaning.

---

## Grouping rows: `<thead>`, `<tbody>`, `<tfoot>`

For larger tables, you can wrap the header row in `<thead>` and the data rows in `<tbody>`. Some tables also have a `<tfoot>` for a summary row at the bottom (totals, for example).

```html
<table>
  <thead>
    <tr>
      <th>Tool</th>
      <th>Purpose</th>
      <th>Cost</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>VS Code</td>
      <td>Editor</td>
      <td>Free</td>
    </tr>
    <tr>
      <td>Chrome DevTools</td>
      <td>Debugging</td>
      <td>Built into Chrome</td>
    </tr>
  </tbody>
</table>
```

For small tables, this is overkill. For tables that might be styled differently in different parts (a header row that should look distinct from data rows) or that have many rows, the grouping makes the markup easier to read and easier to style. Use it when it helps; skip it when it doesn't.

---

## Captions

A table can have a `<caption>` element as its first child, giving the table a title.

```html
<table>
  <caption>Tools we recommend for new web developers</caption>
  <thead>
    ...
  </thead>
</table>
```

The caption is rendered above the table by default and is announced by screen readers as the table's title. It is more useful than a separate heading above the table because it is *part of* the table — the connection is explicit in the markup. Use captions when the table needs a name. Skip them when surrounding context makes the table's purpose obvious.

---

## A small honest moment

I wrote tables wrong for years, even after I knew the rule. I would put `<td>` everywhere — even in the header row — because `<td>` was easier to remember than `<th>`. Then I would try to make the header row look bold by using `<strong>` inside each cell.

That worked visually. It was wrong semantically. A screen reader user got no header announcement at all, because there was no `<th>` for it to recognize as a header. The `<strong>` inside `<td>` was bold styling, which the screen reader rendered as emphasis on the words — not as *this is a header.* The user heard a slightly emphasized "Tool" followed by a slightly emphasized "Purpose," and had no idea they were column labels.

The fix was a global find-and-replace from `<td>` to `<th>` in the first row. It took ten seconds. Knowing to do it took longer.

The point: the right element exists. Use it. The shortcut never works as well as it looks like it works.

---

## Building the tools page

Make a new file: `tools.html`. Use the same anatomy as the others — full document scaffold, header with logo and nav, main wrapping the content, footer at the bottom.

Inside `<main>`, put this:

```html
<h1>Tools</h1>
<p>A short, opinionated list of the tools we use day to day. Not exhaustive. Just what has paid off.</p>

<table>
  <caption>Tools we recommend for new web developers</caption>
  <thead>
    <tr>
      <th>Tool</th>
      <th>What it's for</th>
      <th>Cost</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>VS Code</td>
      <td>Code editor. Where you write everything.</td>
      <td>Free</td>
    </tr>
    <tr>
      <td>Chrome DevTools</td>
      <td>Inspecting your site, reading errors, testing changes.</td>
      <td>Free (built into Chrome)</td>
    </tr>
    <tr>
      <td>Git</td>
      <td>Tracking your changes, sharing your work, going back when you break things.</td>
      <td>Free</td>
    </tr>
    <tr>
      <td>GitHub</td>
      <td>Hosting your code. Hosting your live site (via GitHub Pages).</td>
      <td>Free for public repos</td>
    </tr>
    <tr>
      <td>MDN Web Docs</td>
      <td>Reference for HTML, CSS, and JavaScript. The first place to look up anything.</td>
      <td>Free</td>
    </tr>
  </tbody>
</table>
```

Save. Open `tools.html` in the browser.

You see a plain table — no borders, no zebra-striping, no styling — with a caption above it, headers in bold, and the rows of data underneath. The browser's defaults are not pretty, but they are correct. The table reads top-to-bottom, the caption labels what it is, and the markup is structured to be useful to anyone reading it.

The CSS book will turn this into a presentable table — borders where they help, padding inside cells, alternating row colors if we want them. The JavaScript book may add filtering or sorting. The work for the HTML book is what we have just done: structure a real table, with the right elements, for real data.

---

## When *not* to use a table

A few examples where beginners reach for `<table>` and shouldn't.

A two-column layout — content on the left, sidebar on the right — is not a table. The columns aren't rows of data. They are visual layout. Use CSS (Grid or Flexbox, in the CSS book).

A three-column "feature" section on a homepage — three boxes side by side describing three things — is not a table. The boxes aren't tabular. Use CSS.

A grid of product images in a shop is not a table. The grid is a visual arrangement, not a structure where each row is a record. Use a list of products, laid out with CSS.

A pricing comparison is sometimes a table, sometimes not. If the columns are pricing tiers and the rows are features (so each row is a feature, and each cell tells you whether that feature is in that tier), that is genuinely tabular and a table is correct. If the columns are pricing tiers and each tier is just a card with a list of bullets, that is not a table — the rows aren't records, they're just stacked content inside each card.

The test, repeated: *each row is a record of the same kind, and each column is a kind of information about each record.* If that fits, table. If not, lay it out with CSS.

---

## *Use a table when you have a table. Don't use one to push pixels around.* <!-- SIGNATURE LINE -->

This is a one-element chapter on purpose. Tables are simple. The rule is simple. The error mode — using tables for layout — is the one thing that ruins them, and the rule above prevents it. Move on.

---

## A small permission

You may write entire websites without ever needing a table. Many production websites have zero tables in them. The pages of a marketing site, a blog, or a documentation site rarely contain tabular data. That is normal.

When you do need a table, you have one now, and you know how to build it. Don't go looking for excuses to use the elements you've just learned. Reach for them when the data calls for them. That is the right relationship to have with every element in HTML.

---

## Try this

1. Add three more rows to your tools table. Pick three tools that have been useful to you so far in this book — for example, your operating system's terminal, your file manager, your browser. Add a row for each, with a one-line description and "Free" or appropriate cost.

   This is one of the small differences between your version of the field guide and another reader's. The core five tools are the same for everyone. The rows you add are yours.

2. Save.

3. Add a link to the tools page in your nav (if it isn't already from Chapter 4 — it should be).

4. Commit:
   ```
   git add .
   git commit -m "Add tools page with recommendations table"
   git push
   ```

When that's done, the chapter is over. In Chapter 9, we'll do an accessibility pass on everything we have built so far.

---

## CHAPTER HANDOFF REPORT

**Chapter:** 8 — Tables, When Tabular
**Word count:** ~1,550
**Signature line:** *Use a table when you have a table. Don't use one to push pixels around.*

**Project milestone:** Tools page exists with a structured table including caption, thead, tbody, and five rows of recommended tools.
**Files touched:** `tools.html` (new).
**Concepts introduced:**
- `<table>`, `<tr>`, `<td>`
- `<th>` and the difference from `<td>` (semantic + screen-reader implications)
- `<thead>`, `<tbody>`, `<tfoot>`
- `<caption>` for table titles
- The "tables for data, not layout" rule
- The test for whether content is tabular

**Items flagged for verification:** None.

**Honest-admission moment:** "I wrote tables wrong for years, even after I knew the rule. I would put `<td>` everywhere..."
**Permission-giving moment:** "You may write entire websites without ever needing a table. Many production websites have zero tables in them."

**STATUS:** Continuing.
