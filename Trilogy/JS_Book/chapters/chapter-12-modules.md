# Chapter 12 — ES Modules

Your `script.js` file is now a few hundred lines long. It does theme management, contact-form handling, fetching tips, reading-progress tracking, and event wiring. Different concerns are mixed together. If you wanted to find the form-handling code, you'd have to scroll past everything else.

Real projects split JavaScript into multiple files, each focused on one concern. **ES Modules** are the modern way JavaScript handles this split.

---

## What modules are

A *module* is a JavaScript file. The file can export values (variables, functions, classes), and other modules can import them. Each module has its own scope — variables you declare in a module aren't visible to other modules unless you explicitly export them.

This is different from how the script tag worked in the HTML book. In a regular script, every variable was global; you could declare something in one file and use it in another without imports. That works for tiny projects and gets terrible quickly. Modules give every file its own boundary.

---

## Switching to module mode

To use modules, change your `<script>` tag in HTML to add `type="module"`:

```html
<script src="script.js" type="module"></script>
```

(The `defer` attribute is implicit on module scripts — they always defer.)

Update every page's script tag. Save. Refresh. The script still runs, but the file is now a module. You can now use `import` and `export` inside it.

---

## The basic syntax

Make a new file: `theme.js` in your project root. Move the theme-related code there:

```javascript
// theme.js
export function initTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  }
}

export function setupThemeToggle() {
  const toggle = document.querySelector("#theme-toggle");
  toggle?.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
}
```

The `export` keyword in front of a function declaration marks it as importable. You can export functions, variables (`export const ...`), or classes.

Now in `script.js`, import what you need:

```javascript
// script.js
import { initTheme, setupThemeToggle } from "./theme.js";

initTheme();
setupThemeToggle();
```

The `import` statement at the top of a module brings in named exports from another module. The path uses `./` to indicate "in the same folder" and includes the `.js` extension (in browsers; some tools omit it).

Save. Refresh. The theme toggle still works. The code is now in two files instead of one.

---

## Named exports vs default exports

There are two flavors of export.

**Named exports** are the kind we just used:

```javascript
export function helper() { ... }
export const SETTINGS = { ... };
```

You import them with curly braces and matching names:

```javascript
import { helper, SETTINGS } from "./util.js";
```

You can have many named exports per module.

**Default exports** are for the *one main thing* a module exports:

```javascript
// tip.js
export default async function showRandomTip() {
  // ...
}
```

You import them without curly braces and with whatever name you choose:

```javascript
import showRandomTip from "./tip.js";
```

A module can have at most one default export, plus any number of named exports.

In practice: use named exports unless the module has one obvious main thing. Named exports keep imports explicit.

---

## Splitting the field guide's script

A reasonable split for the project:

- `script.js` — entry point. Imports and calls everything.
- `theme.js` — theme management.
- `tip.js` — random tip loading.
- `form.js` — contact form handling.
- `progress.js` — reading-progress tracking on the path page.

Each file is focused. Each is independently understandable.

A sketched `script.js`:

```javascript
import { initTheme, setupThemeToggle } from "./theme.js";
import { showRandomTip, setupNewTipButton } from "./tip.js";
import { setupContactForm } from "./form.js";
import { setupReadingProgress } from "./progress.js";

initTheme();
setupThemeToggle();
showRandomTip();
setupNewTipButton();
setupContactForm();
setupReadingProgress();
```

Each function is a clear unit of work, exported from a clear file. New developer joins the project? They look at `script.js`, see the list of imports, know what the site does at a glance.

---

## A small honest moment

I avoided modules for years because they added "complexity" — multiple files instead of one. The breaking point was a project where the single script.js file had grown to 2,000 lines and every change broke something unrelated. I split it into modules over a weekend. The mental load of working on the project dropped immediately.

The lesson: a single big file feels simpler than multiple small ones until the big file gets too big to hold in your head. Then it's worse than the multiple files would have been from the start. Split early. Modules are not complexity — they're structure.

---

## *Modules are how you stop having one giant file.* <!-- SIGNATURE LINE -->

The site is small enough that one file works. The trilogy is preparing you for projects that aren't small. Knowing how to split a script into modules — and when to do it — is what separates a beginner project from a maintainable one.

---

## A small permission

You don't have to refactor the entire script into modules right now if you don't want to. The single-file version works. But for the rest of your career, you'll be working in modular codebases. Doing one refactor here, end-to-end, is worth it for the practice.

If you do refactor: small steps. Move one feature to its own module, test, commit. Then the next. Don't do all five at once and find out at the end which one broke.

---

## Try this

1. Convert your site to use `type="module"` script tags.
2. Move at least one feature (start with theme) into its own module file.
3. Update `script.js` to import and call the function from the new file.
4. Test thoroughly. The site should work identically.
5. Commit:
   ```
   git add .
   git commit -m "Refactor to ES modules: theme module"
   ```
6. (Optional) Continue with more modules — tip.js, form.js, progress.js. Each as a separate commit.

Chapter 13 — the chapter on reading other people's code — is the last real chapter.

---

## CHAPTER HANDOFF REPORT

**Chapter:** 12 — ES Modules
**Word count:** ~1,500
**Signature line:** *Modules are how you stop having one giant file.*

**Project milestone:** Code organized into modules (at minimum, theme module split out).
**Concepts introduced:** modules and module scope, `<script type="module">`, `import`/`export`, named vs default exports, refactoring strategy.

**STATUS:** Continuing.
