# Chapter 7 — Forms

A form is how a web page asks the user for information. Every login screen, every search box, every checkout, every comment box, every contact form is built on the same small set of HTML elements. Once you know how the elements work, you can build any form. Without that foundation, every form feels like a different problem to solve.

This chapter builds the contact form for *The Frontend Field Guide.* The form will be markup only — no JavaScript, no submission to anywhere, no email being sent. It will be a real form, structured correctly, ready for the next layers (CSS in Book 3 to make it look like a form, JavaScript in Book 4 to make it submit somewhere). The structural piece is what we do here, and what most beginners get wrong.

---

## The `<form>` element

A form is wrapped in a `<form>` element.

```html
<form action="/submit" method="post">
  ...inputs go here...
</form>
```

The form has two important attributes.

`action` is where the form data goes when the user submits. It can be a URL on your server, or it can be empty if you'll handle submission with JavaScript later. For now, set it to `#` — a placeholder that means "this page itself" — and we will replace it in Book 4 when we wire up actual submission.

`method` is the HTTP method used to send the data. Two values: `get` and `post`. For data that doesn't change anything (like a search query), use `get`. For data that *does* change something on the server (like submitting a contact message, creating an account, posting a comment), use `post`. Our contact form will use `post`. If those words don't fully click yet, that's fine — they will become concrete in the JavaScript book and again in Book 5. For now, just write the right method on the form.

```html
<form action="#" method="post">
  ...
</form>
```

That is the wrapper. Everything we add now goes inside it.

---

## Inputs

The most common element inside a form is `<input>`. It is self-closing — no closing tag — and it has a `type` attribute that determines what kind of input it is.

```html
<input type="text">
```

`type="text"` is the default — a single-line text field. The user can type anything in it.

`type="email"` is a single-line text field that the browser knows is for an email address. The browser validates the input as an email when the form is submitted, and on phones, the keyboard includes the `@` symbol prominently.

`type="tel"` is for phone numbers. On phones, the keyboard switches to a number pad.

`type="number"` is for numeric input. The browser only accepts numeric characters and offers up/down arrows to step through values.

`type="password"` is a single-line text field that hides what the user types.

`type="checkbox"` is a checkbox.

`type="radio"` is a radio button — one of a group of mutually exclusive options.

`type="submit"` is the button that submits the form when clicked.

There are more — `type="date"`, `type="color"`, `type="file"`, `type="range"` — and each one gives the browser hints about what kind of data is expected and how to help the user enter it. The browser does meaningful work on your behalf when you pick the right type. A `type="email"` field on a phone shows the user a different keyboard than a `type="text"` field. A `type="date"` field shows a date picker. Picking the right type is one of the easiest accessibility and usability wins in HTML.

---

## Names and ids

Every input that you want to send to the server needs a `name` attribute.

```html
<input type="email" name="email">
```

The `name` is the key under which this input's value will be sent. Without a name, the input's value is not included in the form submission. (This is a real bug beginners hit — they build a form, the form looks right, the user fills it out, the data is empty when it arrives. The cause is almost always a missing `name`.)

Most inputs also need an `id` attribute, for a different reason: so they can be linked to a label, which is the next thing we'll cover.

```html
<input type="email" name="email" id="email">
```

In simple cases, the `name` and `id` are the same word. They are different attributes for different purposes — `name` is for the form submission, `id` is for the label association — but they often share a value.

---

## Labels

This is the most important part of this chapter. *Every input needs a label.*

A label is the text that tells the user what the input is for. *Email.* *Name.* *Message.* The label is for sighted users (so they know what to type) and for screen reader users (so the screen reader can announce what the input is when it gets focus).

The element is `<label>`, and you connect it to the input with the `for` attribute, which matches the input's `id`:

```html
<label for="email">Email</label>
<input type="email" name="email" id="email">
```

The `for` attribute on the label points to the `id` of the input. Now the label and the input are programmatically linked. A screen reader announces *Email, edit text* when the input gets focus. Clicking the label puts the cursor in the input. Both are user-experience wins, both are free, and both come from one attribute.

There is a second way to associate a label with an input — by wrapping the input inside the label:

```html
<label>
  Email
  <input type="email" name="email" id="email">
</label>
```

This works too, and you don't need `for` and `id` to do it. Either approach is fine. The first form (with `for` and `id`) is the more common in modern code because it's easier to style and lay out. We will use that one.

The rule: *every input has a label.* Every single one. Placeholder text is not a label. Visual proximity is not a label. The presence of context is not a label. The label is a `<label>` element with a `for` that matches the input's `id`. Without that, the form does not pass any reasonable accessibility check, and screen reader users cannot use it.

---

## Textareas

For a multi-line text input — like the message field on a contact form — the element is `<textarea>`, not `<input>`.

```html
<label for="message">Message</label>
<textarea name="message" id="message" rows="6"></textarea>
```

Note that `<textarea>` *does* have a closing tag, even though there is no content between the tags by default. That is one of the small inconsistencies of HTML that you will eventually stop noticing.

The `rows` attribute hints at how many rows tall the textarea should be by default. The user can typically resize it. We'll style the textarea more deliberately in Book 3.

---

## Buttons

To submit the form, you need a submit button. There are two ways.

```html
<input type="submit" value="Send">
```

That is the older form. It is an input with `type="submit"`, and the `value` attribute is the text on the button.

```html
<button type="submit">Send</button>
```

That is the modern form. It is a `<button>` element with `type="submit"`, and the text inside the tags is the text on the button. The modern form is more flexible — you can put HTML inside it, like an icon — and is what we will use.

When the user clicks the submit button, the browser collects all the named inputs in the form and sends them to the URL in the form's `action` attribute, using the method specified.

A note on `<button>`: it has a `type` attribute that defaults to `"submit"` when inside a form. But you can also set `type="button"` for a button that does *not* submit (you'd handle clicks with JavaScript), or `type="reset"` for a button that resets all inputs to their default values. Default to `type="submit"` for the submit button, and be explicit about `type="button"` for any other buttons in a form. Implicit default behavior is the cause of more bugs than any explicit attribute.

---

## Validation attributes

HTML has built-in validation that runs before the form is submitted. If the user tries to submit an invalid form, the browser blocks the submission and shows the user an error message — no JavaScript needed.

`required` makes a field required:

```html
<input type="email" name="email" id="email" required>
```

`minlength` and `maxlength` set length bounds on text inputs:

```html
<textarea name="message" id="message" minlength="10" maxlength="2000"></textarea>
```

`pattern` accepts a regular expression that the value must match. (We will not introduce regular expressions in this book — they belong in the JavaScript book.)

`type="email"` and `type="number"` and `type="tel"` already imply some validation: an email type field rejects values that aren't email-shaped.

Use these. They are cheap, they work, and they prevent a class of user errors from ever reaching your server. *They are not a substitute for server-side validation* — anyone can disable them with browser DevTools, so the server still has to validate when the data arrives. But they are a substantial improvement to the user experience for the 99.9% of users who don't try to bypass them.

---

## Building the contact form

Make a new file in your project: `contact.html`. Use the same anatomy and the same `<header>`/`<nav>`/`<main>`/`<footer>` structure as your other pages. Inside `<main>`, put this:

```html
<h1>Contact</h1>
<p>If you have feedback, a correction, or a tool you think should be on the list, write to us.</p>

<form action="#" method="post">
  <div>
    <label for="name">Your name</label>
    <input type="text" name="name" id="name" required>
  </div>

  <div>
    <label for="email">Your email</label>
    <input type="email" name="email" id="email" required>
  </div>

  <div>
    <label for="subject">Subject</label>
    <input type="text" name="subject" id="subject" required>
  </div>

  <div>
    <label for="message">Message</label>
    <textarea name="message" id="message" rows="6" minlength="10" required></textarea>
  </div>

  <button type="submit">Send</button>
</form>
```

(The `<div>` wrappers around each label/input pair are there so that, in Book 3, we have a container we can style — they group each "field" visually. The wrappers are an example of a legitimate `<div>` use: structural grouping for layout, with no semantic meaning of its own.)

Save. Open `contact.html` in the browser.

The form is unstyled. The fields stack on top of each other. The button sits below them. It looks like a form from 1997. That is correct. We are not styling yet. What matters is that the structure is right and the form *works* — for whatever value of "works" applies to a form that doesn't submit anywhere.

---

## Try the form

Click into one of the fields. Notice the cursor blink. Type something into "Your name." Tab to the next field — the email field. Notice the cursor moves to it. Type something that's not an email — like *hello* — and click Send.

The browser blocks the submission. A small error message appears next to the email field, saying something like *Please include an '@' in the email address.* That is HTML's built-in validation, kicking in because the input's type is `email`.

Fix the email and try again. If the message field is empty, that one will block. Fill everything in. Click Send.

The browser tries to submit the form to `#`, which means *the current URL.* The page reloads. Nothing happens to the data, because there is nothing to handle it. That is fine — the form is markup-only for now. We are testing that the form is structured correctly.

---

## A small honest moment

The first form I built had no labels. I put placeholder text inside the inputs (`placeholder="Your name"`) and called it done. The form worked visually for me. I shipped it.

A user with a screen reader emailed me a week later. They had tried to fill out the form. The screen reader had announced *edit text, edit text, edit text* — three unlabeled fields. They had no way to know which was which. They had given up.

I had used placeholder text instead of labels because it looked cleaner — no extra text taking up space. I had not thought about the user who could not see the placeholder text. The fix took ten minutes. The lesson took longer to learn than the fix took to apply.

Placeholder text is a hint, not a label. Labels go above (or beside) the input, and they describe what the input is. Always.

---

## *A form without labels is a maze. A form with labels is a tool.* <!-- SIGNATURE LINE -->

The patterns in this chapter — `<form>` wrapping inputs, every input with a `name` and a label, the right input type for the data, validation attributes for cheap user-experience wins, a clear submit button — are the patterns behind every form on the web. The complicated forms you'll see (multi-step checkouts, dynamic forms that reveal fields based on previous answers, forms that auto-save) are all built on top of this foundation. Master the foundation and the rest is composition.

---

## A small permission

You will not remember every input type. There is no need to. The five or six common types — text, email, password, number, checkbox, submit — cover most forms. The rarer ones — date, color, range, file — you look up the moment you need them. The browser knows what to do with each one; you just need to know which one to ask for.

Forms have one more layer of complexity that we are deferring to later books: how the data actually gets to a server, how the server processes it, how the response gets back to the user. That is real work. It is also work for a different layer of the stack. For now, your form is structurally correct. The data has somewhere to go in the markup. The plumbing comes later.

---

## Try this

1. Add the contact link to your `index.html` if you haven't already (the nav from Chapter 4 should already include it).
2. Verify the form's nav link works — clicking *Contact* from any page should bring you to `contact.html`.
3. Fill out the form. Try submitting with empty fields, with an invalid email, and with a too-short message. See the validation in action.
4. Add this line to the contact page, just above the form:

   ```html
   <p>This form does not yet send anywhere — it is structural only. We will wire up actual submission in the JavaScript book.</p>
   ```

   Being honest with the user about the form's state is good practice, and removes the confusion when someone fills it out and nothing happens.

5. Commit:
   ```
   git add .
   git commit -m "Add contact page with structured form"
   git push
   ```

When that's done, the chapter is over. In Chapter 8 we'll build the tools page, which involves the one element this book has not yet introduced: the table.

---

## CHAPTER HANDOFF REPORT

**Chapter:** 7 — Forms
**Word count:** ~2,350
**Signature line:** *A form without labels is a maze. A form with labels is a tool.*

**Project milestone:** Contact page exists with a complete, structurally correct form. HTML5 validation works. Form does not submit anywhere yet (intentional).
**Files touched:** `contact.html` (new).
**Concepts introduced:**
- `<form>`, `action`, `method`
- `<input>` and the type attribute (text, email, tel, number, password, checkbox, radio, submit, plus pointers to others)
- `name` (for submission) vs `id` (for label association)
- `<label>` and `for`/id connection
- `<textarea>` and why it's separate from input
- `<button type="submit">` (modern form) vs `<input type="submit">` (older form)
- HTML5 validation attributes: `required`, `minlength`, `maxlength`, `pattern`, type-implied
- Why placeholder is not a label

**Items flagged for verification:** None.

**Honest-admission moment:** "The first form I built had no labels..." (extended scene about a screen reader user emailing back)
**Permission-giving moment:** "You will not remember every input type. There is no need to."

**STATUS:** Continuing.
