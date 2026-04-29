# Chapter 7 — Events

The DOM gives JavaScript a way to read and change the page. **Events** give it a way to respond to what the user does. Click. Type. Scroll. Submit. Hover. Resize. Every interaction the user has with the page generates an event, and JavaScript can listen for events and run code when they fire.

This is the chapter where the site stops being a script that runs once and starts being a program that responds. By the end, the site has its first real interaction: a working dark-mode toggle.

---

## Adding an event listener

The pattern is consistent: select an element, then call `addEventListener` on it. The method takes two arguments: the event name (a string) and a function to run when the event fires.

```javascript
const button = document.querySelector("button");

button.addEventListener("click", () => {
  console.log("Button clicked");
});
```

That code finds the first button on the page, then attaches a click listener. Whenever the user clicks the button, the function runs and logs to the Console.

The function is called a *handler* (or *callback*). It can be any function — an arrow function as above, a named function defined elsewhere, or an inline function declaration. All work.

---

## Common events

The events you'll use most:

- **`click`** — element is clicked.
- **`submit`** — form is submitted (we'll use this in Chapter 8).
- **`input`** — a form field's value has changed (fires on every keystroke for text inputs).
- **`change`** — a form field's value has changed *and* the user has moved away (lower-frequency than `input`).
- **`keydown`** / **`keyup`** — a key is pressed or released.
- **`mouseenter`** / **`mouseleave`** — the mouse enters or leaves an element.
- **`load`** — a resource has finished loading (used on `window` for "page is fully loaded," and on `<img>` for image loaded).
- **`DOMContentLoaded`** — the HTML has been parsed (don't usually need this if you're using `defer` on your script tag).

Each event name is a string passed to `addEventListener`. There are many more — MDN's event reference is the place to look up the rest.

---

## The event object

When an event fires, the browser passes an *event object* to your handler. It contains information about what happened.

```javascript
button.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.target);  // the element that fired the event
});
```

Useful properties on the event object:

- **`event.target`** — the element the event fired on.
- **`event.currentTarget`** — the element the listener is attached to (often the same as target).
- **`event.preventDefault()`** — cancels the default browser behavior. Important for form submission and link clicks when you want JavaScript to handle them instead of the browser.
- **`event.key`** — for keyboard events, the key that was pressed.

You don't always need the event object. Many handlers ignore it entirely:

```javascript
button.addEventListener("click", () => {
  console.log("clicked");
});
```

When you don't reference the event in the handler, you can leave it out of the parameter list.

---

## Building the dark-mode toggle

Now we'll do the first real feature. The CSS variables for dark mode were set up in the CSS book; we just need a toggle to flip the theme.

First, add a button to the HTML. In the header of every page, just inside `<header>` after the nav, add:

```html
<button id="theme-toggle" type="button">Toggle theme</button>
```

Or, if you'd rather have a more elegant control, you can style it later. For now, plain text is fine.

In your CSS, you should already have something like:

```css
:root {
  --color-bg: #fafaf7;
  --color-text: #1a1a1a;
}

[data-theme="dark"] {
  --color-bg: #1a1a1a;
  --color-text: #fafaf7;
}
```

(If you don't have the `[data-theme="dark"]` block, add it now. The selector `[data-theme="dark"]` matches any element with the attribute `data-theme="dark"`.)

In `script.js`, add:

```javascript
const themeToggle = document.querySelector("#theme-toggle");

themeToggle?.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
});
```

A few new things in there.

`document.documentElement` is the `<html>` element. We're setting the `data-theme` attribute on the entire document so the CSS variables in `[data-theme="dark"]` cascade through everything.

`themeToggle?.addEventListener` — that `?.` is the *optional chaining* operator. If `themeToggle` is null (because the button isn't on this page), the call is silently skipped instead of crashing. Useful when an element might not exist.

Save. Refresh. Click the toggle button. The page flips between light and dark themes.

The whole site is now interactive. One button. Six lines of JavaScript. A real feature.

(The change doesn't persist across page reloads yet — refresh the page and you're back to light mode. Persistence is Chapter 11.)

---

## A small honest moment

I once wrote a click handler that, on every click, added a *new* listener to the same button. The result was that the second click ran the handler twice. The third click ran it three times. By the tenth click, the page froze because thousands of handlers were running.

The bug: I had `addEventListener` inside a function that itself ran on click. Every click added another listener, on top of the existing ones.

The lesson: `addEventListener` adds. It doesn't replace. If you call it ten times with the same listener, you get ten listeners. Set up listeners once, on page load, in a place that runs once. Don't put `addEventListener` inside another handler unless you really mean to.

---

## *Events are the user's edge of your program.* <!-- SIGNATURE LINE -->

Everything the user does — clicks, types, scrolls, drags — fires events that your code can listen for. The pattern is always the same: pick the element, pick the event, write the handler. Once you have that, the surface of "things the user can do" stops being a wall and starts being a list of events to listen for.

---

## A small permission

You don't need to know every event type. The list is long. The ones above cover most interactive features. New ones come up; you look them up when you need them. The pattern — `addEventListener("event-name", handler)` — is always the same.

---

## Try this

1. Add the theme toggle button and the JavaScript above. Test it.
2. Add a `console.log` inside the handler so you can see in the Console which way you toggled:
   ```javascript
   console.log(`Switched to ${newTheme}`);
   ```
3. Add another listener — for example, a click on the page logo that scrolls smoothly to the top:
   ```javascript
   const logo = document.querySelector("header img");
   logo?.addEventListener("click", () => {
     window.scrollTo({ top: 0, behavior: "smooth" });
   });
   ```
4. Commit:
   ```
   git add .
   git commit -m "Events: addEventListener, dark-mode toggle"
   ```

Chapter 8 makes the contact form work.

---

## CHAPTER HANDOFF REPORT

**Chapter:** 7 — Events
**Word count:** ~1,700
**Signature line:** *Events are the user's edge of your program.*

**Project milestone:** Dark-mode toggle works (in-session).
**Files touched:** `script.js`. All HTML pages (toggle button added).
**Concepts introduced:** `addEventListener`, common event types, the event object, `preventDefault`, optional chaining (`?.`), `document.documentElement`, attribute manipulation for theming.

**Honest-admission moment:** "I once wrote a click handler that, on every click, added a new listener to the same button..."
**Permission-giving moment:** "You don't need to know every event type."

**STATUS:** Continuing.
