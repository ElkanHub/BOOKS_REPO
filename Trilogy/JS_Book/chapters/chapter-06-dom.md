# Chapter 6 — The DOM

The browser, when it loads your HTML, doesn't keep the HTML around as text. It parses the HTML and builds an in-memory tree of objects representing the page's structure. That tree is the **DOM** — the Document Object Model.

JavaScript's job, when it runs in the browser, is to read and modify the DOM. The browser, separately, takes the DOM and renders it on the screen. When you change the DOM with JavaScript, the browser sees the change and re-renders.

That mental model is the most important thing in this chapter. JavaScript does not change the HTML file. It changes the DOM. The DOM, on first load, is built *from* the HTML file — but they're not the same thing afterward.

---

## Selecting elements

The starting point for almost every DOM operation is finding elements. The methods are on the global `document` object.

**`querySelector`** returns the first element matching a CSS selector:

```javascript
const heading = document.querySelector("h1");
const main = document.querySelector("main");
const firstNavLink = document.querySelector("nav a");
```

The selector syntax is the same as CSS. `h1` matches the first h1. `main` matches the first main. `nav a` matches the first link inside any nav. `.intro` matches the first element with class `intro`. `#main-content` matches the element with id `main-content`.

If no element matches, `querySelector` returns `null`. Always be aware of this — the next line might try to use the result and crash if there was no match.

**`querySelectorAll`** returns *all* matching elements as a NodeList (similar to an array):

```javascript
const allLinks = document.querySelectorAll("a");
const navLinks = document.querySelectorAll("nav a");
```

You can iterate over a NodeList with `forEach`:

```javascript
navLinks.forEach((link) => {
  console.log(link.textContent);
});
```

These two methods — `querySelector` and `querySelectorAll` — cover almost all selecting you'll do. There are older methods (`getElementById`, `getElementsByClassName`) that still work but aren't as flexible. Stick with the query methods.

---

## Reading from elements

Once you have an element, you can read its properties.

**`textContent`** is the text inside an element (and its descendants), as a single string:

```javascript
const heading = document.querySelector("h1");
console.log(heading.textContent);  // "The Frontend Field Guide"
```

**`innerHTML`** is the HTML inside the element, as a string. Be careful — innerHTML can be a security risk if you ever set it from user input. For reading, it's fine.

**`getAttribute`** reads an attribute:

```javascript
const link = document.querySelector("nav a");
console.log(link.getAttribute("href"));  // "index.html"
```

For common attributes, you can also access them as properties: `link.href`, `link.id`, `link.className`. For custom data attributes, use `getAttribute` or the `dataset` property.

---

## Changing elements

The same properties that read also write.

```javascript
heading.textContent = "Welcome to the Field Guide";
```

That changes what the heading shows. Refresh the browser — wait, no. The change is in the DOM, not in the HTML file. If you reload the page, the original HTML is read fresh and the change is gone. JavaScript modifications to the DOM are session-only unless you save them somewhere (localStorage, a server). We'll cover saving in Chapter 11.

**`classList`** is the API for working with classes:

```javascript
const button = document.querySelector("button");

button.classList.add("active");
button.classList.remove("disabled");
button.classList.toggle("expanded");  // adds if missing, removes if present
button.classList.contains("active");   // returns boolean
```

`classList.toggle` is especially useful — one method for "flip this class on or off."

---

## A small DOM-manipulation experiment

Let's verify it all works. Open `script.js`. Replace its contents with:

```javascript
const heading = document.querySelector("h1");

if (heading) {
  console.log(`Heading text: ${heading.textContent}`);

  // Append a small note to the heading
  heading.textContent = `${heading.textContent} ✨`;
}
```

Save. Refresh `index.html`. Look at the page. The heading now ends with a small star.

The star is added every time you load the page (because the JavaScript runs on every load). The HTML file is unchanged — view source on the page (Ctrl+U or Cmd+Option+U) and you'll see the original heading. The DOM has the star; the source doesn't. That's the distinction.

---

## Creating elements

You can create new elements and add them to the DOM:

```javascript
const newPara = document.createElement("p");
newPara.textContent = "This paragraph was added by JavaScript.";

const main = document.querySelector("main");
main.appendChild(newPara);
```

`createElement` makes a new element (not yet in the DOM). `appendChild` adds it as a child of an existing element. After these two lines, the page has a new paragraph at the end of the main content.

`prepend` and `prepend` work similarly but add to the beginning of the children. `insertBefore` inserts an element before another specific element.

---

## Removing elements

```javascript
const oldPara = document.querySelector(".to-remove");
if (oldPara) {
  oldPara.remove();
}
```

`element.remove()` removes the element from the DOM entirely. After this, the element is gone from the page.

---

## A small honest moment

The first time I ran JavaScript that modified the DOM, I refreshed the page expecting the changes to persist. They didn't. I didn't understand why. I spent twenty minutes thinking I was doing something wrong, when actually I was just confused about the relationship between the HTML file and the DOM.

The clarifying realization: the HTML file is the *initial state.* The DOM is the *current state.* JavaScript changes the current state. The initial state is reloaded on every page load. If you want changes to persist across reloads, you have to save them somewhere persistent — that's Chapter 11.

---

## *The DOM is the page after the browser has read the HTML. JavaScript talks to the DOM.* <!-- SIGNATURE LINE -->

This is the bridge between the static structure you wrote in the HTML book and the dynamic behavior we're adding now. From this chapter on, every interactive feature on the site will boil down to: select elements, read or change them, listen for events.

---

## A small permission

You don't need to memorize every DOM method. There are many. The ones we covered — `querySelector`, `querySelectorAll`, `textContent`, `classList`, `createElement`, `appendChild`, `remove` — handle most of what you'll do. The rest you look up when you need them.

When you encounter unfamiliar DOM code in someone else's project, MDN has every method documented. Read it. The next time you see the same method, it'll be familiar.

---

## Try this

1. Apply the small experiment above. Confirm the star appears.
2. Try changing it: instead of adding a star, change the heading to a different message. Refresh and watch.
3. Add this to the script:
   ```javascript
   const navLinks = document.querySelectorAll("nav a");
   console.log(`Found ${navLinks.length} nav links`);

   navLinks.forEach((link) => {
     console.log(link.textContent, "→", link.getAttribute("href"));
   });
   ```
   Refresh and check the Console. You should see all your nav links logged with their destinations.
4. Commit:
   ```
   git add .
   git commit -m "DOM: querySelector, reading, modifying, creating elements"
   ```

Chapter 7: events — making the page respond to the user.

---

## CHAPTER HANDOFF REPORT

**Chapter:** 6 — The DOM
**Word count:** ~1,800
**Signature line:** *The DOM is the page after the browser has read the HTML. JavaScript talks to the DOM.*

**Project milestone:** First DOM manipulation. Reader has changed text on the page from JavaScript.
**Files touched:** `script.js`.
**Concepts introduced:** the DOM as a tree, `querySelector`, `querySelectorAll`, `textContent`, `innerHTML`, `getAttribute`, `classList`, `createElement`, `appendChild`, `remove`. The HTML-vs-DOM distinction.

**Honest-admission moment:** "The first time I ran JavaScript that modified the DOM, I refreshed the page expecting the changes to persist..."
**Permission-giving moment:** "You don't need to memorize every DOM method."

**STATUS:** Continuing.
