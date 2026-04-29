# Chapter 3 — Control Flow

A program without control flow runs every line in order, every time, and does the same thing. A program with control flow makes decisions. *If this, do that. While there are still items left, keep going. For each user, send a message.* The decisions are what turn a script into something useful.

---

## if / else

The most common decision structure:

```javascript
const hour = 14;

if (hour < 12) {
  console.log("Good morning");
} else if (hour < 18) {
  console.log("Good afternoon");
} else {
  console.log("Good evening");
}
```

The condition inside the parentheses must evaluate to a boolean (or to a value JavaScript can coerce to a boolean — more on that in a moment). If true, the block runs. If false, the next branch is tried.

You can have any number of `else if` branches. The `else` at the end is optional — only include it if you want a fallback for "none of the above."

---

## Truthiness

JavaScript will coerce non-boolean values to boolean when used in a condition. The values that coerce to `false` are called *falsy:*

- `false`
- `0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

Everything else is *truthy.* This includes any non-empty string, any non-zero number, any object, any array (even an empty one).

```javascript
if (someValue) {
  // runs if someValue is truthy
}
```

This pattern is everywhere in JavaScript:

```javascript
const name = "";

if (name) {
  console.log(`Hello, ${name}`);
} else {
  console.log("No name provided");
}
```

The empty string is falsy, so the else branch runs. Use this pattern when you want to do something only if a value is "set" — not null, not undefined, not empty.

---

## The ternary operator

For simple if/else assignments, JavaScript has a compact one-line form:

```javascript
const greeting = hour < 12 ? "Good morning" : "Good day";
```

Read it as: *"if hour is less than 12, then 'Good morning,' otherwise 'Good day.'"*

The ternary is great for short conditions that produce a value. Don't nest them — nested ternaries quickly become unreadable. If the logic gets complex, use a regular if/else.

---

## Loops

Loops repeat code. JavaScript has several looping forms; the two you'll use most:

**`for` of** — iterates over the items of an array:

```javascript
const colors = ["red", "green", "blue"];

for (const color of colors) {
  console.log(color);
}
```

That logs each color in turn. `for...of` is the modern, clean way to iterate. Use it whenever you want to do something to each item in a list.

**`while`** — repeats while a condition is true:

```javascript
let count = 0;

while (count < 5) {
  console.log(count);
  count = count + 1;
}
```

That logs `0` through `4`, then stops. The condition is checked at the top of each iteration. When it's false, the loop exits.

`while` is useful when you don't know in advance how many iterations you'll need. *Keep going until something happens* is the natural fit.

There is also a classic `for` loop:

```javascript
for (let i = 0; i < 5; i = i + 1) {
  console.log(i);
}
```

You'll see this in older code. It's still valid. In modern code, `for...of` covers most of what classic `for` does, more readably. Use the classic form only when you specifically need the index, and even then, prefer the array methods we'll cover in Chapter 5.

---

## break and continue

Inside a loop, `break` exits the loop immediately. `continue` skips the rest of the current iteration and goes to the next one.

```javascript
for (const item of items) {
  if (item === null) continue;       // skip nulls
  if (item === "stop") break;         // exit on "stop"
  console.log(item);
}
```

These are useful when a loop has special cases. Don't overuse them — most loops don't need them.

---

## A small honest moment

The first programming language I learned didn't have falsy/truthy values, only booleans. When I came to JavaScript, I would write conditions like:

```javascript
if (name !== "" && name !== null && name !== undefined) {
  // ...
}
```

I was being explicit because I didn't trust the language. Then I realized JavaScript already does this implicitly:

```javascript
if (name) {
  // ...
}
```

Both produce the same result. The second is shorter, idiomatic, and what other JS developers expect to read. Trusting the language's idioms is worth doing once you understand them.

---

## *Control flow is your program saying "in this case, do this; otherwise, do that."* <!-- SIGNATURE LINE -->

That's the whole concept. Every if, every loop, every conditional return is a place your program is making a choice. Programs with clear control flow are easy to read. Programs with tangled control flow — deeply nested ifs, loops within loops, scattered breaks and continues — are bug factories.

The skill is keeping conditions simple, keeping loops short, and breaking complex logic into separate functions (which is Chapter 4).

---

## A small permission

You will write loops you don't need at first. You'll write `for` loops to do things that JavaScript has built-in array methods for. That's fine. The loops work. As you learn the array methods in Chapter 5, you'll naturally start replacing manual loops with cleaner alternatives. Until then, loops are correct and readable.

---

## Try this

1. Add this to `script.js`:
   ```javascript
   const themes = ["light", "dark"];
   const userPreference = "dark";

   for (const theme of themes) {
     if (theme === userPreference) {
       console.log(`User prefers ${theme}`);
     }
   }
   ```
2. Save and refresh. Check the Console.
3. Try changing `userPreference` to `"light"`, then to `"sepia"`. See what happens in each case.
4. Commit:
   ```
   git add .
   git commit -m "Control flow: if, ternary, loops"
   ```

Chapter 4: functions.

---

## CHAPTER HANDOFF REPORT

**Chapter:** 3 — Control Flow
**Word count:** ~1,400
**Signature line:** *Control flow is your program saying "in this case, do this; otherwise, do that."*

**Concepts introduced:** if/else/else if; truthiness and falsy values; ternary; `for...of`; `while`; classic `for`; `break`/`continue`.

**STATUS:** Continuing.
