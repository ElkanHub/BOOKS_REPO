# Chapter 8 — Working with Forms

The contact form has been on the site since the HTML book. It looks like a form. It validates input. It does not do anything when submitted — clicking "Send" reloads the page and the data goes nowhere.

This chapter changes that. We'll listen for the submit event, prevent the default reload, read the user's input, and show them a confirmation message. We won't actually send an email — that requires a backend, which is a different layer of the stack — but the form's behavior will be real.

---

## The submit event

Form elements fire a `submit` event when the user submits them. The default behavior is to send the data to the URL in the form's `action` attribute and reload the page. To take over with JavaScript, you call `preventDefault` on the event:

```javascript
const form = document.querySelector("#contact-form");

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Form was submitted");
});
```

(For this to work, give your form an id in the HTML — `<form id="contact-form" ...>`. Update the contact page accordingly.)

With `preventDefault`, the browser stops its default action. The page doesn't reload. The form stays put. Your handler gets to do whatever it wants instead.

---

## Reading the form data

Two ways. The simple way: select each field individually.

```javascript
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const subject = document.querySelector("#subject").value;
  const message = document.querySelector("#message").value;

  console.log({ name, email, subject, message });
});
```

`.value` is the property that holds the current value of any input or textarea. Reading it gives you what the user typed.

The cleaner way: `FormData`. The FormData constructor takes a form element and gives you an object with every named field's value:

```javascript
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  console.log(data);
});
```

`Object.fromEntries(formData)` converts the FormData into a plain object — `{ name: "...", email: "...", subject: "...", message: "..." }`. This is one of those small modern JS conveniences that makes form handling pleasant.

Use FormData when you have more than two or three fields. Use individual selectors for tiny forms or when you only need one specific value.

---

## Showing a confirmation

After capturing the data, give the user feedback. The simplest approach: replace the form with a thank-you message.

In the HTML, the form is inside a container — let's say `<div id="form-container">`. After successful submission, replace the container's content:

```javascript
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  console.log("Form submitted:", data);

  const container = document.querySelector("#form-container");
  container.innerHTML = `
    <h2>Thanks, ${data.name}.</h2>
    <p>We received your message about "${data.subject}." We'll be in touch.</p>
  `;
});
```

Save. Open the contact page. Fill out the form. Click Send. The form disappears and the thank-you message appears in its place. The data is still in the Console (we logged it), but for the user, the experience feels complete.

(If you'd rather not replace the whole form, you could append a confirmation message above it and clear the inputs:

```javascript
form.reset();  // clears all fields
```

The choice is yours. For the field guide, replacement is cleaner.)

---

## A note on `innerHTML` and security

We used `innerHTML` above to insert HTML content into the page. That's appropriate when the content is hard-coded in your script — like the thank-you message. **Never use `innerHTML` with content that comes from user input** without sanitizing it first.

Why: if `data.name` contained `<script>alert("xss")</script>`, setting `innerHTML` would execute that script. This is the *XSS attack* class — cross-site scripting — and it's a real vulnerability.

For the field guide, the form is local-only. The user can't attack themselves. But the habit matters: when in doubt, use `textContent` (which always inserts plain text and never executes script), not `innerHTML`.

In the example above, we're inserting `${data.name}` and `${data.subject}` via innerHTML. To be safe, you could rewrite:

```javascript
const heading = document.createElement("h2");
heading.textContent = `Thanks, ${data.name}.`;

const para = document.createElement("p");
para.textContent = `We received your message about "${data.subject}." We'll be in touch.`;

container.innerHTML = "";
container.appendChild(heading);
container.appendChild(para);
```

More verbose. Safer. For production code that handles user input, this is the pattern. For our local-only form, the innerHTML version is fine, but knowing the alternative is important.

---

## Validation

The form already has HTML5 validation (required, email type, min length) from the HTML book. Those rules run before the submit event fires — if validation fails, the browser blocks submission and `submit` never reaches your handler.

You can add JavaScript validation on top, for cases HTML5 can't handle. For example, requiring the message to mention a specific keyword, or formatting a phone number. The pattern:

```javascript
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  if (data.message.length < 10) {
    alert("Message must be at least 10 characters.");
    return;
  }

  // ...continue with submission
});
```

For the field guide, HTML5 validation is enough. Keep it that way unless you have a specific reason to add more.

---

## *Forms are how the user gives you data. Handling them well is half of frontend work.* <!-- SIGNATURE LINE -->

Almost every interactive web feature involves a form somewhere. Login forms. Search forms. Comment forms. Settings panels. The pattern is the same every time: listen for submit, prevent default, read the data, do something with it, give the user feedback.

---

## Try this

1. Add an `id` to your form (`<form id="contact-form" ...>`). Wrap the form in a `<div id="form-container">`.
2. Add the JavaScript handler above. Test it. Fill out the form, click Send, watch the thank-you message replace the form.
3. Add the form-reset alternative: instead of replacing, clear the form and show a small confirmation message above it.
4. Commit:
   ```
   git add .
   git commit -m "Working contact form with confirmation"
   ```

Chapter 9: fetch and the network. We'll add a small piece of dynamic content to the home page.

---

## CHAPTER HANDOFF REPORT

**Chapter:** 8 — Working with Forms
**Word count:** ~1,700
**Signature line:** *Forms are how the user gives you data. Handling them well is half of frontend work.*

**Project milestone:** Contact form actually does something. User sees confirmation on submit.
**Concepts introduced:** the submit event, `preventDefault`, reading `.value`, `FormData`, `Object.fromEntries`, `form.reset()`, innerHTML vs textContent for security, HTML5 vs JS validation.

**STATUS:** Continuing.
