# Chapter 11 — Persistence with localStorage

Right now, every time the user reloads the site, the dark-mode preference resets. Every interactive choice they make is forgotten on refresh. Real applications remember things between visits. The simplest tool for remembering things in a browser is **localStorage.**

---

## What localStorage is

localStorage is a small box of key-value pairs the browser keeps for each site. The box is per-origin (domain) and per-browser. Data stays in the box across page reloads, browser restarts, and even shutting down the computer. The user can clear it (through browser settings), but otherwise it persists.

The values are always strings. If you want to store something else (a number, a boolean, an object), you have to convert it to a string first and parse it back when you read it.

---

## The basic API

Three main methods:

```javascript
localStorage.setItem("theme", "dark");          // store
const theme = localStorage.getItem("theme");    // read
localStorage.removeItem("theme");                // delete
```

`getItem` returns null if the key doesn't exist.

You can also clear everything at once:

```javascript
localStorage.clear();
```

That's almost the entire API. Three methods, plus a fourth.

---

## Storing objects with JSON

Since localStorage only stores strings, you stringify objects on the way in and parse on the way out:

```javascript
const settings = { theme: "dark", fontSize: 18 };

localStorage.setItem("settings", JSON.stringify(settings));

const loaded = JSON.parse(localStorage.getItem("settings"));
console.log(loaded.theme);      // "dark"
console.log(loaded.fontSize);   // 18
```

`JSON.stringify` converts a JS object to a JSON string. `JSON.parse` does the reverse. They are the standard way to round-trip structured data through string-only storage.

A small gotcha: `JSON.parse(null)` throws an error. `JSON.parse(undefined)` does too. Always check the value first:

```javascript
const stored = localStorage.getItem("settings");
const settings = stored ? JSON.parse(stored) : { theme: "light" };
```

---

## Persisting the dark-mode preference

Update the theme toggle handler in `script.js`:

```javascript
const themeToggle = document.querySelector("#theme-toggle");

// On page load: apply the saved preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
}

themeToggle?.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});
```

Two changes: on page load, read the saved theme and apply it. On toggle, write the new theme to storage.

Save. Refresh. Toggle to dark. Refresh again. The page stays dark. Refresh again — still dark. Toggle back. Refresh. Stays light. The preference is now real — the site remembers.

This is the moment the site stops being a document and starts being an application. Stateful interactions across sessions are what make web apps web apps.

---

## Reading-progress on the path page

A second feature using localStorage. On the path page, track which articles the user has read by clicking a button at the end of each article. Reading progress persists across visits.

In the path page HTML, after each article, add:

```html
<button class="mark-read" type="button" data-article-id="what-html-actually-is">Mark as read</button>
```

(Use the same id as the article's id attribute.)

In the JS:

```javascript
function loadReadArticles() {
  const stored = localStorage.getItem("readArticles");
  return stored ? JSON.parse(stored) : [];
}

function saveReadArticles(ids) {
  localStorage.setItem("readArticles", JSON.stringify(ids));
}

function applyReadStates() {
  const readIds = loadReadArticles();
  document.querySelectorAll(".mark-read").forEach((button) => {
    const id = button.dataset.articleId;
    if (readIds.includes(id)) {
      button.textContent = "Read ✓";
      button.disabled = true;
    }
  });
}

document.querySelectorAll(".mark-read").forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.dataset.articleId;
    const readIds = loadReadArticles();
    if (!readIds.includes(id)) {
      readIds.push(id);
      saveReadArticles(readIds);
    }
    button.textContent = "Read ✓";
    button.disabled = true;
  });
});

applyReadStates();
```

`button.dataset.articleId` reads the `data-article-id` HTML attribute. (Any attribute starting with `data-` is automatically exposed on the element's `dataset` property in camelCase — `data-article-id` becomes `dataset.articleId`.)

Save. Open the path page. Click "Mark as read" on an article. The button changes to "Read ✓". Refresh. The button still says "Read ✓". The user's progress is remembered.

---

## What localStorage isn't for

localStorage has limits. The browser typically allows about 5–10MB per origin. Reading and writing are synchronous (they block the thread), so don't store huge amounts of data. The data is plain-text accessible to anyone with browser access — never store anything secret.

For larger data, browser APIs offer IndexedDB (more complex, async). For data that needs to sync across devices, you need a server. localStorage is for small, local, non-sensitive preferences and state.

---

## A small honest moment

I once built a site that stored a user's entire shopping cart in localStorage. The site was offline-friendly and worked great — until users updated their browser, which cleared the data, and they thought the site had lost their carts. Real complaints came in.

The lesson: localStorage is *local.* It's not synced. It's not backed up. If a user clears it, it's gone. For anything users would be upset about losing, store it on a server too. Use localStorage as a convenience layer, not as the source of truth.

---

## *localStorage is a small box your code can keep things in.* <!-- SIGNATURE LINE -->

Use it for preferences, for in-progress work, for things the user expects to persist on this device. Don't use it for things you can't afford to lose.

---

## Try this

1. Apply the theme persistence and the reading-progress code.
2. Test thoroughly. Toggle, refresh, mark articles, refresh, see them remembered.
3. Open DevTools, go to the Application tab, find Local Storage in the sidebar, click your site. You can see the actual stored values. Try clearing them and see what the site does on refresh.
4. Commit:
   ```
   git add .
   git commit -m "Persistence: dark-mode + reading progress"
   ```

Chapter 12: organizing the code into modules.

---

## CHAPTER HANDOFF REPORT

**Chapter:** 11 — Persistence with localStorage
**Word count:** ~1,500
**Signature line:** *localStorage is a small box your code can keep things in.*

**Project milestone:** Dark mode persists across reloads. Path page tracks read articles.
**Concepts introduced:** localStorage API (setItem/getItem/removeItem/clear), JSON.stringify/parse for objects, dataset attributes, what localStorage isn't for.

**STATUS:** Continuing.
