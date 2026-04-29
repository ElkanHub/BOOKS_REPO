# Chapter 10 — Async, Properly

Chapter 9 used `async` and `await` to handle fetch without explaining the foundation underneath. This chapter goes back and explains it. By the end you'll have a real model of how asynchronous code works in JavaScript and why.

---

## The core problem async solves

JavaScript runs in the browser on a single thread. There's only one execution flow — JS can do one thing at a time. If you tell JS to do something that takes time (like fetching data from a server), the only options are:

1. **Block the thread** — the entire browser freezes until the operation completes. Click events stop firing, animations stop, the user sees a stuck page.
2. **Don't block** — start the operation, hand it off, keep running other code, and come back when the operation is done.

Browsers use option 2. Operations like fetch, timers (`setTimeout`), file reads, and DOM events are *asynchronous* — they start, the JS continues, and a callback runs later when the operation completes.

The mechanism the browser uses to coordinate this is called the *event loop.*

---

## The event loop, in plain language

When your script runs, the browser maintains a queue of tasks. Synchronous code runs first, top to bottom, exhausting the queue.

When you call `fetch`, it doesn't actually do the fetch on the JavaScript thread. It tells the browser, "do this fetch in the background, and add a task to the queue when it's done." Your JS keeps running.

When the fetch completes (the data arrives), the browser adds a task to the queue: *resume that promise's `.then` callback.* The next time the JS thread is free, the queue processes the task and your callback runs.

That's the loop. JS runs synchronous code until it can't. The browser does its async thing in parallel. When async work completes, callbacks queue up. JS runs them when it has time.

You don't usually need to think about this directly. But understanding the loop explains why some patterns work and others don't.

---

## Promises explained

A promise is an object that represents a future value. When you call `fetch`, the function returns a promise immediately, even before the network request finishes.

A promise has three possible states:

- **Pending** — the operation hasn't completed yet.
- **Fulfilled** — the operation succeeded with a value.
- **Rejected** — the operation failed with an error.

You attach handlers to a promise with `.then` (for fulfillment) and `.catch` (for rejection):

```javascript
fetch("data/tips.json")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

Each `.then` returns a new promise, which is why they can chain. If any step rejects, the chain skips ahead to the next `.catch`.

`async`/`await` is syntactic sugar over this. The two are equivalent:

```javascript
// Promise chain
fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data));

// async/await
async function load() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}
```

Same operation. The async/await version reads more like synchronous code, which is usually clearer.

---

## try/catch with await

Errors in async functions are caught with `try`/`catch`:

```javascript
async function load() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Load failed:", error);
    return null;
  }
}
```

Notice the `response.ok` check. `fetch` only rejects on network errors — if the server responds at all, even with a 404 or 500, fetch resolves successfully. You have to check the status yourself. `response.ok` is true for status codes in the 200–299 range.

If the response isn't ok, throw an error to push execution into the catch block.

---

## Don't await inside loops, usually

A subtle gotcha. If you have a list of URLs to fetch:

```javascript
// Slow — fetches one at a time
for (const url of urls) {
  const data = await fetch(url);
  // ...
}
```

The await pauses the loop on each iteration. The fetches run sequentially. If you have 10 URLs and each takes 200ms, you wait 2 seconds total.

The faster version uses `Promise.all`:

```javascript
const promises = urls.map((url) => fetch(url));
const responses = await Promise.all(promises);
```

`Promise.all` waits for all promises to resolve in parallel. The same 10 URLs all fetch at once, completing in roughly 200ms total instead of 2000ms.

Use sequential await when each operation depends on the previous. Use Promise.all when the operations are independent.

---

## A small honest moment

I avoided understanding promises for a long time. I copied async patterns from tutorials, made them work for my specific case, and moved on. When something didn't behave the way I expected, I had no model for figuring out why.

Eventually I sat down for an hour and read MDN's promise documentation. The mental model — *a promise is an eventual value; .then attaches handlers; await pauses for a promise to resolve* — clicked. Async code stopped being a magic incantation and became a pattern I could reason about. Bug-fix time on async problems dropped from "an afternoon" to "ten minutes."

The lesson: when something keeps confusing you, stop and read the foundation. The hour you spend now saves the same hour weekly forever after.

---

## *Asynchronous code is what your program does while it waits.* <!-- SIGNATURE LINE -->

Every modern web app has parts that wait — for the network, for timers, for user input, for animations. Async is how the language handles waiting without blocking. Internalize the model and async code becomes legible.

---

## A small permission

You don't need to write your own promises from scratch (using `new Promise(...)`) often. Most APIs that need to be async — fetch, timers, file APIs, library functions — already return promises. You consume them with `.then` or `await`. Creating promises by hand is for library authors.

---

## Try this

1. Update your tips function with proper error handling using `response.ok`:
   ```javascript
   async function showRandomTip() {
     const tipContainer = document.querySelector("#tip");
     if (!tipContainer) return;

     try {
       const response = await fetch("data/tips.json");
       if (!response.ok) {
         throw new Error(`HTTP ${response.status}`);
       }
       const tips = await response.json();
       const randomTip = tips[Math.floor(Math.random() * tips.length)];

       tipContainer.innerHTML = `
         <h3>Tip: ${randomTip.title}</h3>
         <p>${randomTip.body}</p>
       `;
     } catch (error) {
       console.error("Failed to load tip:", error);
       tipContainer.textContent = "Couldn't load a tip right now.";
     }
   }
   ```
2. Test the error path: temporarily change the fetch URL to something invalid (`data/missing.json`). Refresh. The fallback message should show. Change the URL back.
3. Commit:
   ```
   git add .
   git commit -m "Async error handling"
   ```

Chapter 11: localStorage — making preferences persist.

---

## CHAPTER HANDOFF REPORT

**Chapter:** 10 — Async, Properly
**Word count:** ~1,500
**Signature line:** *Asynchronous code is what your program does while it waits.*

**Concepts introduced:** the event loop, single-threaded JS, promise states (pending/fulfilled/rejected), `.then`/`.catch`, async/await as sugar, `response.ok`, `Promise.all` for parallelism.

**STATUS:** Continuing.
