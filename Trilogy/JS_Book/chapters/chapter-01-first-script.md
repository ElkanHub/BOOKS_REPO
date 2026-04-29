# Chapter 1 — Your First Script

JavaScript lives in a separate file, the same way CSS does, and the HTML pulls it in with a tag. The mechanics are similar. The differences matter.

This chapter is about creating the file, linking it from every page, writing the smallest piece of code that proves it works, and getting comfortable with the place JavaScript talks to you — the browser's Console.

---

## Creating `script.js`

In your `frontend-field-guide` folder, alongside `style.css`, make a new file called `script.js`. It is empty. That is the file you will spend this entire book working in.

---

## Linking the script

Add this line at the bottom of every HTML page in your project, just before the closing `</body>`:

```html
<script src="script.js" defer></script>
```

The `<script>` element loads a JavaScript file. The `src` attribute points to the file, the same way `href` does for stylesheets. The `defer` attribute tells the browser, *don't run this script until the HTML has been fully parsed.* Without `defer`, scripts that try to interact with the page can run before the elements they're looking for exist. With `defer`, the script always runs after the page is ready.

Save every HTML file. Refresh the site. Nothing visible changes — the script is empty, so there's nothing to do yet. But the connection is in place.

To verify: open DevTools, go to the Network tab, refresh. You should see `script.js` in the list of loaded resources. If you don't, the `<script>` tag is wrong; check the path.

---

## The Console

The Console tab in DevTools is where JavaScript errors show up, where warnings show up, and where you can run JavaScript directly. It is also where your code talks to you.

Open `script.js`. Type one line:

```javascript
console.log("Hello from the script.");
```

Save. Refresh the page. Open DevTools. Click the Console tab.

You see your message. The line ran the moment the page loaded. The script is alive.

`console.log` is a function. Functions in JavaScript are called by writing the function name, then parentheses, then any arguments inside the parentheses. `console.log` takes whatever you pass it and writes it to the Console. It is the most common debugging tool you will use for the rest of this book and the rest of your career.

You can pass anything to `console.log`:

```javascript
console.log("Hello");
console.log(42);
console.log(true);
console.log(["a", "b", "c"]);
console.log({ name: "Field Guide", year: 2026 });
```

Save and refresh. The Console shows each value, with formatting appropriate to its type. Strings are in quotes. Numbers are numbers. Arrays expand. Objects expand. The Console understands JavaScript values and shows them in useful ways.

This is the rhythm: write JavaScript, save, refresh, watch the Console. We'll repeat it hundreds of times.

---

## A small honest moment

The first piece of JavaScript I ever wrote was `alert("Hello");`. The `alert` function pops up a browser dialog with a message and a single button. It is the simplest way to make JS do something visible.

It is also obnoxious. Every refresh, a popup. Click OK. Refresh. Popup. Click OK. By the second hour I had switched to `console.log`. I have used `console.log` for everything ever since.

`alert`, `confirm`, and `prompt` exist. They block the page. They look like 1998. Don't use them in this book or in production. The Console is where output goes.

---

## The script is a sequence of statements

A JavaScript file is a list of statements. The browser reads them top to bottom and runs them. Each statement does something — declares a variable, calls a function, assigns a value, makes a decision.

Most statements end with a semicolon. JavaScript has *automatic semicolon insertion* — it'll add semicolons in some cases if you forget — but the rules for when ASI works are subtle, and the cost of missing one is a confusing bug. The book uses semicolons. You should too.

```javascript
const greeting = "Hello";
console.log(greeting);
const year = 2026;
console.log(year);
```

That is a four-statement script. It runs top to bottom. By the time the fourth line runs, `greeting` and `year` both exist as variables you defined.

---

## Running JavaScript directly in the Console

The Console isn't only an output panel. It is also a place you can run JavaScript on the fly.

Open the Console. Type:

```javascript
1 + 1
```

Press Enter. The Console shows `2`. JavaScript evaluated the expression and showed the result.

Try:

```javascript
"Hello, " + "world"
```

You see `'Hello, world'` — JavaScript concatenated the strings.

Try:

```javascript
const x = 10;
x * 5
```

You see `50`. Variables you define in the Console persist for the rest of the session. (Refresh the page and they're gone — the Console session resets.)

This is one of the most useful debugging tools available. When you're not sure what a piece of code does, run it directly in the Console. Watch the result. The mental model improves.

---

## A small permission

Your `script.js` will be empty for the rest of this chapter. The next several chapters introduce the language piece by piece. The script grows. The project doesn't visibly change until Chapter 6, when we start manipulating the DOM.

That delay is intentional. JavaScript has more foundations than HTML or CSS, and trying to build interactive features before knowing what a function is leads to copy-pasting code you don't understand. We'll resist that. By Chapter 6 you'll have everything you need to build interactive features confidently.

---

## *The Console is where your code talks to you.* <!-- SIGNATURE LINE -->

When you write JavaScript and something goes wrong, the Console tells you what. When you want to inspect a value mid-program, you `console.log` it and the Console shows you. When you want to try out an idea quickly, you type it into the Console. The panel is your partner.

If you're not in the habit of having DevTools open while you write JavaScript, get into it now. It will make every chapter from here on easier.

---

## Try this

1. Make sure `script.js` is linked from every HTML page (with `defer`).
2. Add a few `console.log` statements to the script. Log a string, a number, an array, an object. See how each one shows up in the Console.
3. Open the Console on a few different pages of your live site. The same script runs on every page (because it's linked from every page).
4. Try typing some expressions directly in the Console: `2 + 2`, `"hello".toUpperCase()`, `Math.random()`. Get used to it as a place to experiment.
5. Commit:
   ```
   git add .
   git commit -m "Link script.js from all pages, first console.log"
   git push
   ```

Chapter 2 is values and variables — the building blocks the rest of the language is made of.

---

## CHAPTER HANDOFF REPORT

**Chapter:** 1 — Your First Script
**Word count:** ~1,500
**Signature line:** *The Console is where your code talks to you.*

**Project milestone:** `script.js` exists, linked from all 7 pages with `defer`. First `console.log` statement runs on page load.
**Files touched:** `script.js` (new), all HTML files.
**Concepts introduced:**
- The `<script>` tag and the `defer` attribute
- The Console panel
- `console.log` as the primary output function
- Statements and semicolons
- Running JS directly in the Console

**Honest-admission moment:** "The first piece of JavaScript I ever wrote was `alert(\"Hello\");`..."
**Permission-giving moment:** "Your `script.js` will be empty for the rest of this chapter."

**STATUS:** Continuing.
