# Chapter 5 — Arrays and Objects

Most of the data your code works with lives in arrays or objects. A list of users. A configuration record. The items in a navigation. The fields in a form. The articles on a path page. Every collection of related values you'll ever pass around is, in JavaScript, one of these two shapes.

This chapter covers both, plus the methods that turn them from "data containers" into the working surface of your program.

---

## Arrays

An array is an ordered list of values:

```javascript
const colors = ["red", "green", "blue"];
const numbers = [1, 2, 3, 4, 5];
const mixed = ["hello", 42, true, null];
```

Items in an array can be any type — strings, numbers, booleans, other arrays, objects, functions. JavaScript doesn't enforce that all items have the same type, though in practice most arrays do.

Access items by their *index,* starting from zero:

```javascript
const colors = ["red", "green", "blue"];

console.log(colors[0]);  // "red"
console.log(colors[1]);  // "green"
console.log(colors[2]);  // "blue"
console.log(colors[3]);  // undefined (no item at index 3)
```

The array's length:

```javascript
colors.length  // 3
```

Length is one more than the highest index. An array with 3 items has indexes 0, 1, 2 and length 3.

---

## Modifying arrays

Add to the end:

```javascript
colors.push("yellow");
console.log(colors);  // ["red", "green", "blue", "yellow"]
```

Remove from the end:

```javascript
const last = colors.pop();
// last is "yellow", colors is ["red", "green", "blue"]
```

Add to the beginning, remove from the beginning: `unshift` and `shift`. You'll use these less often than push and pop.

---

## The array methods that matter

The most useful array methods are higher-order — they take a function as an argument and apply it to each item. These three are the workhorses:

**`forEach`** runs a function for each item:

```javascript
colors.forEach((color) => {
  console.log(color);
});
```

That logs each color. Use forEach for side effects (logging, modifying the DOM, etc.). It returns nothing — `forEach` is for *doing,* not for *transforming.*

**`map`** transforms each item, returning a new array:

```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((n) => n * 2);
console.log(doubled);  // [2, 4, 6, 8]
```

`map` is for transforming a list into a new list of the same length. It's used constantly when you want to build one collection from another. The original array is untouched.

**`filter`** keeps only items that pass a test:

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter((n) => n % 2 === 0);
console.log(evens);  // [2, 4, 6]
```

`filter` is for narrowing a list. The function should return a boolean — true to keep, false to drop.

These three — forEach, map, filter — replace probably 80% of the loops you'd otherwise write. Get comfortable with them.

A few more worth knowing:

**`find`** returns the first item that matches a condition:

```javascript
const users = [{ id: 1, name: "Eli" }, { id: 2, name: "Mei" }];
const user = users.find((u) => u.id === 2);
console.log(user);  // { id: 2, name: "Mei" }
```

**`includes`** checks if a value is in the array:

```javascript
colors.includes("red");    // true
colors.includes("orange"); // false
```

**`indexOf`** returns the index of a value (or -1 if not found):

```javascript
colors.indexOf("green");  // 1
```

---

## Objects

An object is a collection of key-value pairs:

```javascript
const user = {
  name: "Elkanah",
  age: 30,
  isActive: true
};
```

The keys are strings (you can write them without quotes if they're valid identifiers — `name`, not `"name"`). The values can be any type.

Access values by key:

```javascript
console.log(user.name);     // "Elkanah"
console.log(user["name"]);  // also "Elkanah"
```

The dot syntax (`user.name`) is more common. The bracket syntax (`user["name"]`) is necessary when the key has special characters or is stored in a variable:

```javascript
const key = "name";
console.log(user[key]);  // "Elkanah"
```

Set values:

```javascript
user.email = "eli@example.com";   // adds a new key
user.age = 31;                     // updates an existing key
```

Check if a key exists:

```javascript
"email" in user  // true
"phone" in user  // false
```

---

## Nested data

Objects can contain arrays. Arrays can contain objects. Objects can contain other objects.

```javascript
const article = {
  title: "What HTML actually is",
  tags: ["html", "foundation"],
  author: {
    name: "Elkanah",
    email: "eli@example.com"
  }
};

console.log(article.title);              // "What HTML actually is"
console.log(article.tags[0]);            // "html"
console.log(article.author.name);        // "Elkanah"
```

Most real-world data is nested. Practice walking through nested structures with dot/bracket access until it feels natural.

---

## Destructuring

A shortcut for pulling values out of objects and arrays:

```javascript
const user = { name: "Elkanah", age: 30 };
const { name, age } = user;

console.log(name);  // "Elkanah"
console.log(age);   // 30
```

Same with arrays:

```javascript
const colors = ["red", "green", "blue"];
const [first, second] = colors;

console.log(first);   // "red"
console.log(second);  // "green"
```

Destructuring is everywhere in modern JavaScript. It's especially useful when functions take object parameters or return arrays.

---

## A small honest moment

The first time I tried to filter an array, I wrote a manual loop:

```javascript
const evens = [];
for (let i = 0; i < numbers.length; i = i + 1) {
  if (numbers[i] % 2 === 0) {
    evens.push(numbers[i]);
  }
}
```

It worked. It was also seven lines for what `numbers.filter((n) => n % 2 === 0)` does in one. Once I learned `filter`, the loop version started looking like noise. The clearer code was the better code.

The lesson: when a built-in method does what you want, use it. Manual loops are a fallback for cases the methods don't handle.

---

## *Most of the data in your code is in arrays or objects. Knowing the methods is the work.* <!-- SIGNATURE LINE -->

You don't need to memorize every array method. The list is long. Memorize the four or five that come up constantly — `forEach`, `map`, `filter`, `find`, `includes` — and look up the rest when you need them. MDN has a complete list, and the lookups become faster as the patterns get familiar.

---

## A small permission

The first time you try to chain methods (like `numbers.filter(...).map(...).forEach(...)`), you'll feel clever and the code will be hard to read. Don't go overboard. Two chained methods is fine. Three is borderline. Four means the code wants to be split into named pieces. Readability over cleverness.

---

## Try this

1. Add to `script.js`:
   ```javascript
   const articles = [
     { id: 1, title: "What HTML actually is", tag: "html" },
     { id: 2, title: "Why HTML and CSS are separate", tag: "html" },
     { id: 3, title: "What CSS does", tag: "css" }
   ];

   const titles = articles.map((article) => article.title);
   console.log(titles);

   const cssArticles = articles.filter((article) => article.tag === "css");
   console.log(cssArticles);

   articles.forEach((article) => {
     console.log(`#${article.id}: ${article.title}`);
   });
   ```
2. Save and refresh. Check the Console.
3. Try writing a function `findArticle(id)` that uses `.find()` to return the article with that id.
4. Commit:
   ```
   git add .
   git commit -m "Arrays and objects, with map/filter/forEach"
   ```

Chapter 6: the DOM. From here on, the project starts to move.

---

## CHAPTER HANDOFF REPORT

**Chapter:** 5 — Arrays and Objects
**Word count:** ~1,700
**Signature line:** *Most of the data in your code is in arrays or objects. Knowing the methods is the work.*

**Concepts introduced:** array literal syntax, indexes, length, push/pop, the higher-order array methods (forEach, map, filter, find, includes, indexOf), object literals, dot vs bracket access, nested data, destructuring.

**STATUS:** Continuing.
