# Chapter 2 — Values and Variables

Every piece of JavaScript code is, ultimately, doing things with values. Adding numbers. Comparing strings. Checking whether a flag is true. Reading an item from a list. The values come in a small handful of types, and a *variable* is a name you give a value so you can use it later.

This chapter is the small but unavoidable foundation. Get it solid and the rest of the language sits on top of it.

---

## The basic value types

JavaScript has a small set of built-in types. The five you'll use constantly:

**String** — text. Written in quotes (single or double; either is fine, just pick one and be consistent):

```javascript
"hello"
'hello'
"The Frontend Field Guide"
```

**Number** — numeric values, both integers and decimals:

```javascript
0
42
3.14
-7
```

JavaScript has only one number type — there's no separate integer and float, the way some other languages have. Just numbers.

**Boolean** — true or false. Two values, no more:

```javascript
true
false
```

**null** — explicit absence of a value. Written as the keyword `null`. You use this when you want to represent "this should be empty on purpose."

**undefined** — implicit absence. The default state of a variable that has been declared but not assigned. JavaScript also returns `undefined` from functions that don't return anything.

There are two more types worth knowing about even before we use them:

**Array** — an ordered list of values. Written in square brackets: `["red", "green", "blue"]`. We'll cover arrays in Chapter 5.

**Object** — a collection of named values (key-value pairs). Written in curly braces: `{ name: "Field Guide", year: 2026 }`. We'll cover objects in Chapter 5 too.

That's it. Everything you do in JavaScript is some combination of these types.

---

## Declaring variables

A variable is a name attached to a value. JavaScript has three keywords for declaring variables:

```javascript
const greeting = "hello";
let count = 0;
var name = "Elkanah";  // don't use this
```

The differences matter.

`const` declares a variable that cannot be reassigned. Once you set it, that's the value:

```javascript
const PI = 3.14;
PI = 4;  // ERROR: Assignment to constant variable.
```

`let` declares a variable that can be reassigned:

```javascript
let count = 0;
count = count + 1;  // fine
count = 2;          // also fine
```

`var` is the older keyword from before the language had `const` and `let`. It works, but its scoping rules have surprises that beginners trip over for years. **Don't use it.** Modern JavaScript code uses `const` and `let` exclusively.

The rule of thumb: **use `const` by default. Use `let` only when you actually need to reassign.** Most variables you create won't need reassignment. `const` everywhere makes your intent clearer and prevents accidental reassignment bugs.

---

## What "cannot be reassigned" means with const

`const` prevents reassignment of the variable itself. It does *not* prevent the value from being changed if the value is a mutable type (array, object).

```javascript
const numbers = [1, 2, 3];
numbers.push(4);          // fine — modifying the array
console.log(numbers);     // [1, 2, 3, 4]

numbers = [5, 6, 7];      // ERROR — reassigning the variable
```

The first operation modifies the array that `numbers` points to. The second tries to point `numbers` at a different array — that's reassignment, which `const` prevents.

This distinction surprises beginners. The mental model: `const` locks the box, not the contents.

---

## Naming variables

A few rules:

- Variable names can contain letters, digits, underscores, and `$`.
- They cannot start with a digit.
- They are case-sensitive: `count` and `Count` are different variables.

A few conventions:

- Use camelCase: `userName`, `fieldGuideTitle`, `currentYear`.
- Constants you use throughout your program (like a URL or a configuration value) are sometimes written in UPPER_SNAKE_CASE: `API_URL`, `MAX_RETRIES`.
- Boolean variables are usually named with a leading `is`, `has`, or `should`: `isLoggedIn`, `hasErrors`, `shouldRedirect`.
- Names should describe what the value *is,* not what type it is. `count` over `numberOfThings`. `users` over `usersArray`.

Bad: `x`, `data`, `temp`, `var1`. These tell the reader nothing.

Good: `userCount`, `articleTitle`, `isDarkMode`. These tell the reader what you're working with.

---

## Operators

Operators combine and transform values. The ones you'll use most:

**Arithmetic:**

```javascript
2 + 3       // 5
10 - 4      // 6
3 * 5       // 15
20 / 4      // 5
17 % 5      // 2 (the remainder)
```

**String concatenation** — the `+` operator joins strings:

```javascript
"Hello, " + "world"        // "Hello, world"
"You have " + 5 + " items" // "You have 5 items"
```

**Template literals** are usually cleaner. Use backticks (\`) instead of quotes, and `${...}` to insert values:

```javascript
const name = "Elkanah";
const greeting = `Hello, ${name}!`;
console.log(greeting);  // "Hello, Elkanah!"
```

Template literals also let you write strings across multiple lines:

```javascript
const longText = `Line one
Line two
Line three`;
```

Use template literals over `+` concatenation. The code reads better.

**Comparison** — produces a boolean:

```javascript
5 === 5     // true (strictly equal)
5 === "5"   // false (different types)
5 !== 6     // true
10 > 5      // true
10 >= 10    // true
3 < 5       // true
```

Always use `===` and `!==` for equality. The looser `==` and `!=` perform type coercion (converting types to make values comparable), and the rules are bizarre. `5 == "5"` is true. `0 == false` is true. `null == undefined` is true. Avoid the pit. Stick to `===`.

**Logical:**

```javascript
true && false   // false (AND — both must be true)
true || false   // true (OR — either can be true)
!true           // false (NOT)
```

These come up constantly when checking conditions.

---

## A small honest moment

When I started JavaScript, I used `var` everywhere because that's what the tutorials I was reading still used. The tutorials were old. JavaScript had moved on. I learned `let` and `const` years later than I should have, and had to rewrite muscle memory I had built up.

The lesson: when learning a language, the date of the resource matters. JavaScript has changed substantially since 2015, and tutorials older than that often teach patterns that are no longer the right defaults. If a resource is using `var`, it's probably old enough to be using other outdated patterns too. Look for resources from the last few years.

---

## *A variable is a name for a value, and the value is what your program is actually about.* <!-- SIGNATURE LINE -->

The variable is the handle. The value is the thing. Most beginner JavaScript bugs come from confusion about which is which — assigning a value to a variable expecting it to update the original, or expecting two variables that happen to point at the same object to behave like independent copies.

The mental model that helps: a variable is a sticky note pointing at a value. You can move the sticky note. You can modify the value if it's mutable. Don't conflate the two operations.

---

## A small permission

You don't need to remember every operator on first read. The arithmetic ones are obvious. Comparison and logical operators come up constantly and you'll memorize them by use. Template literals are worth practicing — they pay off the most often.

Don't worry yet about edge cases like `NaN`, `Infinity`, or the weird parts of `==`. They exist. They will bite you eventually. We'll handle them when they do.

---

## Try this

1. Open `script.js`. Replace its contents with:
   ```javascript
   const siteName = "The Frontend Field Guide";
   const yearStarted = 2026;
   const isPublic = true;

   console.log(siteName);
   console.log(yearStarted);
   console.log(isPublic);

   const summary = `${siteName} (started ${yearStarted}). Public: ${isPublic}.`;
   console.log(summary);
   ```
2. Save. Refresh. Open the Console. Verify each value shows up.
3. Try changing `const` to `let` for one variable. Add a line that reassigns it. Confirm it works.
4. Try reassigning a `const`. Confirm the error appears.
5. Commit:
   ```
   git add .
   git commit -m "Variables and basic value types"
   git push
   ```

Chapter 3 is control flow — making your program decide what to do.

---

## CHAPTER HANDOFF REPORT

**Chapter:** 2 — Values and Variables
**Word count:** ~1,800
**Signature line:** *A variable is a name for a value, and the value is what your program is actually about.*

**Project milestone:** First real JavaScript values defined and logged.
**Files touched:** `script.js`.
**Concepts introduced:**
- Value types: string, number, boolean, null, undefined (arrays/objects mentioned, deferred)
- `const`, `let`, why not `var`
- `const` locks the variable, not the value
- Variable naming conventions
- Arithmetic, string, comparison, logical operators
- Template literals
- Why `===` over `==`

**Honest-admission moment:** "When I started JavaScript, I used `var` everywhere because that's what the tutorials..."
**Permission-giving moment:** "You don't need to remember every operator on first read."

**STATUS:** Continuing.
