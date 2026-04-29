# Chapter 9 — Fetch and the Network

Up to now, all the data in your scripts has been hard-coded — you typed it directly into JavaScript. Most real applications get their data from somewhere else: a server, an API, a JSON file. The function that retrieves data over the network is **`fetch`.**

This chapter adds a small piece of dynamic content to the home page — a "tip of the day" or similar — fetched from a JSON file in the project. It's enough to introduce fetch, JSON, and the basics of asynchronous code. The next chapter goes deeper on async.

---

## What fetch does

`fetch` is a function built into the browser. Give it a URL; it retrieves whatever is at that URL. Most commonly, what's at the URL is JSON — a structured-text format that JavaScript can parse into objects and arrays.

```javascript
fetch("data/tips.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
```

That code does three things:

1. `fetch("data/tips.json")` — request the file at that URL.
2. `.then((response) => response.json())` — when the response arrives, parse it as JSON.
3. `.then((data) => { ... })` — when the parsing finishes, log the result.

The `.then` calls handle the asynchronous part. `fetch` doesn't return the data immediately — it returns a *promise.* A promise is JavaScript's way of saying *I will give you this value eventually.* You handle the eventual value with `.then`.

---

## Modern syntax: async/await

The promise chain above works, but JavaScript has a cleaner syntax for handling promises: `async` and `await`.

```javascript
async function loadTips() {
  const response = await fetch("data/tips.json");
  const data = await response.json();
  console.log(data);
}

loadTips();
```

Same outcome, more readable. The `async` keyword on the function declaration says *this function returns a promise.* `await` says *pause here until this promise resolves, then continue with the value.* The code reads top to bottom like synchronous code, even though it isn't.

Use `async`/`await` for new code. The `.then` chains are still around — you'll see them in older code — but `async`/`await` is the modern default.

---

## Setting up the data

For the field guide, we don't have a real backend yet. We can fake one with a JSON file in the project.

Make a folder in your project called `data`. Inside it, create `tips.json`:

```json
[
  {
    "title": "Read the error message",
    "body": "Most beginner debugging is reading the error message in the Console and following what it says."
  },
  {
    "title": "Save before refreshing",
    "body": "The browser shows what's on disk. The editor shows what you typed. Save before you refresh."
  },
  {
    "title": "One commit per change",
    "body": "Small commits make history readable. Don't bundle ten unrelated changes into one commit."
  },
  {
    "title": "Use the Console",
    "body": "When something doesn't work, the Console usually tells you what. Open it before you guess."
  }
]
```

That is a JSON array of objects. Each object has a `title` and a `body`. Save the file.

JSON looks a lot like JavaScript object/array syntax, with two differences: keys must be in double quotes, and there are no trailing commas. If you write malformed JSON, fetch will fail to parse it.

---

## Loading and displaying a tip

Update `script.js`. Add this code (it should run on page load, alongside everything else):

```javascript
async function showRandomTip() {
  const tipContainer = document.querySelector("#tip");
  if (!tipContainer) return;  // not on this page

  try {
    const response = await fetch("data/tips.json");
    const tips = await response.json();
    const randomTip = tips[Math.floor(Math.random() * tips.length)];

    tipContainer.innerHTML = `
      <h3>Tip: ${randomTip.title}</h3>
      <p>${randomTip.body}</p>
    `;
  } catch (error) {
    console.error("Failed to load tip:", error);
    tipContainer.textContent = "Couldn't load a tip.";
  }
}

showRandomTip();
```

Add a placeholder element in `index.html` where the tip will appear — somewhere in main, perhaps after the introductory section:

```html
<aside id="tip">Loading a tip…</aside>
```

Save everything. Refresh the home page. After a brief moment (the fetch is fast on local files), a random tip appears. Refresh again. A different tip might appear. The content is dynamic — it isn't in the HTML file; it's loaded from the JSON file at runtime.

---

## What the `try`/`catch` does

`try`/`catch` is JavaScript's error handling. The code inside `try` runs normally. If it throws an error, the code inside `catch` runs with the error available as a variable. After the catch, execution continues.

For fetch, errors can happen for several reasons: the URL is wrong, the file is missing, the JSON is malformed, the network is offline. Wrapping the fetch in `try`/`catch` means the page doesn't break catastrophically — instead, you log the error and show a fallback message.

Always wrap fetches in `try`/`catch` (or use `.catch()` on the promise chain). Network operations can fail. The code should handle the failure gracefully.

---

## Same-origin and CORS

A note that will save you confusion later. When you fetch a URL from a different domain than your page, the browser may block the request unless the other server explicitly allows it (via Cross-Origin Resource Sharing — CORS — headers). Your local files served from GitHub Pages are same-origin, so fetching `data/tips.json` works without trouble.

If you ever try to fetch from a public API and get a CORS error in the Console, the issue isn't your code — it's that the API you're hitting hasn't enabled CORS for your origin. The fix is usually to find an API that does support it, or (in a real app) to proxy through your own backend.

---

## A small honest moment

The first time I used fetch, I didn't understand promises and tried to use the result immediately:

```javascript
const data = fetch("data/tips.json");
console.log(data);  // [object Promise], not the data
```

I logged the promise, not the resolved value, and was confused for an hour. The promise was the *eventual* value, not the value yet. Once I understood that fetch returns a promise — and that you have to wait for the promise to resolve before using the value — async code stopped being mysterious.

---

## *Fetch is the function that talks to the rest of the internet.* <!-- SIGNATURE LINE -->

Almost every web application sooner or later needs to load data from somewhere. Fetch is how. The shape — request, await, parse, use — is consistent across every API you'll ever hit. Once you know the pattern, you can hit any modern web API with the same five lines of code.

---

## Try this

1. Set up the JSON file and the script. Test it. Refresh several times to see different tips.
2. Add a button below the tip that loads a new one without refreshing the page:
   ```html
   <button id="new-tip" type="button">New tip</button>
   ```
   Then in the JS:
   ```javascript
   document.querySelector("#new-tip")?.addEventListener("click", showRandomTip);
   ```
3. Commit:
   ```
   git add .
   git commit -m "Fetch and dynamic tips"
   ```

Chapter 10 goes deeper on async — the real shape of promises and the event loop.

---

## CHAPTER HANDOFF REPORT

**Chapter:** 9 — Fetch and the Network
**Word count:** ~1,800
**Signature line:** *Fetch is the function that talks to the rest of the internet.*

**Project milestone:** Home page has a dynamic "tip of the day" loaded from a JSON file.
**Concepts introduced:** `fetch`, promises (briefly), `async`/`await`, `response.json()`, `try`/`catch`, same-origin/CORS basics, JSON syntax.

**STATUS:** Continuing.
