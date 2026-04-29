# Chapter 4 — Functions

A function is a named piece of code that you can run, with inputs, that produces an output. Functions are how you organize a program. Without them, every line of code lives at the top level, and the same logic gets repeated everywhere it's needed. With functions, you write a piece of behavior once, name it, and call it whenever you need it.

This chapter is the most important chapter in the first half of the book. Get functions solid and the rest of JavaScript fits together.

---

## Function declarations

The classic syntax:

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

const message = greet("Elkanah");
console.log(message);  // "Hello, Elkanah!"
```

`function` is the keyword. `greet` is the function's name. `(name)` is the *parameter list* — the inputs the function accepts. The block in curly braces is the *body* — the code that runs when the function is called.

`return` is what the function gives back. The value to the right of `return` is the function's *return value.* If there's no `return`, the function returns `undefined`.

To *call* (or *invoke*) a function, you write its name followed by parentheses with any arguments:

```javascript
greet("Elkanah");        // returns "Hello, Elkanah!"
greet("World");          // returns "Hello, World!"
```

The names `parameter` and `argument` get used interchangeably, but technically:
- The names in the function definition are *parameters.*
- The values you pass when calling are *arguments.*

The function takes the arguments and binds them to the parameters for the duration of the call.

---

## Arrow functions

A shorter syntax for functions:

```javascript
const greet = (name) => {
  return `Hello, ${name}!`;
};
```

For functions whose body is a single expression, you can shorten further — drop the curly braces and the `return` keyword:

```javascript
const greet = (name) => `Hello, ${name}!`;
```

For functions with exactly one parameter, you can also drop the parentheses around the parameter:

```javascript
const greet = name => `Hello, ${name}!`;
```

The above three are all equivalent — pick whichever feels clearest in context. The book uses the verbose form (curly braces, explicit return) when the function does more than one thing, and the shorter form when it's a one-liner.

Arrow functions and function declarations have a few subtle differences (mainly around `this`, which we won't reach in this book). For most uses, they are interchangeable. Use arrow functions for short callbacks (which we'll see in Chapter 5). Use function declarations for top-level functions where the name should be hoisted to the top of the file.

---

## Multiple parameters and default values

Functions can take multiple parameters:

```javascript
function add(a, b) {
  return a + b;
}

add(3, 5);  // 8
```

Parameters can have default values:

```javascript
function greet(name = "friend") {
  return `Hello, ${name}!`;
}

greet();         // "Hello, friend!"
greet("Eli");    // "Hello, Eli!"
```

If the caller doesn't pass an argument, the parameter takes the default. Defaults are useful for optional inputs.

---

## Functions as values

Here's the part that surprises people coming from other languages. In JavaScript, functions *are* values. They can be:

- Assigned to variables.
- Passed as arguments to other functions.
- Returned from other functions.
- Stored in arrays and objects.

```javascript
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

const operations = [add, subtract];

for (const op of operations) {
  console.log(op(10, 3));
}
```

That logs `13` (from add) and `7` (from subtract). The functions themselves are stored in the array; the loop calls each one.

The pattern of passing a function as an argument is called a *callback,* and it's everywhere in JavaScript:

```javascript
function doTwice(callback) {
  callback();
  callback();
}

doTwice(() => console.log("hello"));
// logs "hello" twice
```

You'll see callbacks constantly when we get to events (Chapter 7), array methods (Chapter 5), and async code (Chapter 9).

---

## Pure functions and side effects

A function is *pure* if it always returns the same output for the same input, and it doesn't change anything outside itself. Pure functions are easy to reason about. They are easy to test. They are predictable.

```javascript
// Pure
function add(a, b) {
  return a + b;
}

// Not pure — modifies a variable outside the function
let total = 0;
function addToTotal(x) {
  total = total + x;
  return total;
}
```

The second function has a *side effect* — it changes `total`, which lives outside it. Side effects aren't bad on their own; some functions need them (logging to the console is a side effect; updating the DOM is a side effect; saving to localStorage is a side effect). The rule is: *be deliberate.* When a function has side effects, the name should usually make that obvious. Functions whose name doesn't suggest a side effect should be pure.

---

## A small honest moment

I was writing JavaScript for a year before I understood that functions are values. I treated functions as a special syntactic thing — *a function is a thing you define and call,* not *a function is a value you can pass around.* When I tried to read code that passed functions as arguments, it looked like magic.

The fix was internalizing: a function is just a value. It happens to be a value you can call by adding parentheses. But before you call it, it's just a thing — same as a string or a number, except its content is code instead of data.

Once that clicks, callbacks stop being weird. Array methods stop being weird. Half the language stops being weird.

---

## *A function is a name for a thing your program does.* <!-- SIGNATURE LINE -->

The naming matters. A well-named function is self-documenting — you read the call and you know what it does. A badly named function is a mystery the reader has to investigate. *Don't make readers investigate.*

Good function names: `formatDate`, `findUser`, `calculateTotal`, `togglePreference`. They start with verbs. They describe the action.

Bad function names: `data`, `process`, `handle`, `doStuff`. They describe nothing.

---

## A small permission

You'll write small, specific functions a lot, especially as you split a script into modular pieces. Don't be precious about function size. A two-line function with a clear name is often better than five lines inlined in a longer function. Functions are cheap.

Don't worry about the more advanced parts of functions (closures, `this`, recursion) yet. They're real. They will come up. The basics — parameters, returns, calling, passing as values — are what you need now.

---

## Try this

1. Add to `script.js`:
   ```javascript
   function formatTitle(title, year) {
     return `${title} (${year})`;
   }

   const display = formatTitle("The Frontend Field Guide", 2026);
   console.log(display);

   const square = (n) => n * n;
   console.log(square(5));
   console.log(square(12));
   ```
2. Save, refresh, check the Console.
3. Write a function `greetUser(name, timeOfDay)` that returns `"Good morning, [name]"`, `"Good afternoon, [name]"`, or `"Good evening, [name]"` based on the time. Use the control flow from Chapter 3.
4. Commit:
   ```
   git add .
   git commit -m "Functions: declarations, arrow functions, parameters, callbacks"
   ```

Chapter 5: arrays and objects.

---

## CHAPTER HANDOFF REPORT

**Chapter:** 4 — Functions
**Word count:** ~1,800
**Signature line:** *A function is a name for a thing your program does.*

**Concepts introduced:** function declarations, arrow functions (3 forms), parameters & arguments, return values, default parameters, functions as values, callbacks, side effects, naming conventions.

**Honest-admission moment:** "I was writing JavaScript for a year before I understood that functions are values."
**Permission-giving moment:** "Don't worry about the more advanced parts of functions yet."

**STATUS:** Continuing.
