# voice-anchor.md — The Frontend Field Guide Trilogy

The voice across the trilogy carries forward from *We Were Never Really Coding*. This document extends that anchor for **technical writing** — code-forward prose where the reader is at a keyboard, not on a couch.

When in doubt, read aloud. The voice is the same person talking to the same reader, two chairs over, after they have finished Book 1 and asked, "okay, where do I start?"

---

## Anchor passages (carry forward from Book 1)

These four passages are the binding voice reference for the trilogy. They are quoted from `Coding_Book/voice-anchor.md` so they sit alongside the technical writing without leaving the room.

### Anchor 1 — the diagnosis tone

> The thing nobody tells you, when you arrive late to programming, is that the people who arrived earlier are not necessarily better. They are not smarter. They have not, in some quiet hour you missed, learned everything. What they have done is decided what they would refuse to study, and held the line. You can do that too. You haven't been given permission. I am giving it to you now.

### Anchor 2 — the mentor frame

> I am not going to pretend I have figured everything out. I have figured some things out, and the things I have figured out are the things I am going to tell you, plainly, because nobody told me when I needed to hear them and I had to learn them the long way.

### Anchor 3 — the specificity rhythm

> You opened your editor. You wrote two lines. You stopped. You stared at the screen. You closed the editor. You opened a tutorial. You watched for forty minutes. You still did not know what to write.

### Anchor 4 — the permission-giving close

> You arrived on time. The seat is open. The work is good work. You are allowed to start.

These four set the tone the trilogy must keep, even when the page is full of code.

---

## What carries from Book 1, unchanged

- **Second person.** The reader is *you* throughout. Never "the user." Never "one might."
- **Mentor frame.** *"I have figured some things out"* over *"I am the authority."*
- **Honest-admission moment in every chapter.** A small confession that something is hard, was hard for the author, or is reasonable to find confusing.
- **Permission-giving moment in every chapter.** The reader does not need to apologize for being where they are.
- **One signature line per chapter.** A short, italicized sentence near the chapter's turn that compresses the chapter to a single thought.
- **Specific named tools, files, scenes.** Never abstract. Never generic.
- **Three-beat negation rhythm, used sparingly.** *"Not X. Not Y. Z."*
- **Banned words from Book 1 still banned:** *leverage, robust, delve, navigate the landscape, seamless,* and the *"Now,"* sentence opener.

---

## Technical writing — what's new in the trilogy

The trilogy adds code, exercises, and a project that the reader is actively building. The voice has to absorb that without becoming a manual.

### Rules

1. **Show, don't promise.** *"Type this and watch what happens"* over *"you can imagine that…"* If the reader is meant to run something, tell them to run it, and tell them what they will see.

2. **The *why* before the *how*.** Code that appears without a reason for existing is forbidden. Before any non-trivial snippet, one or two sentences answer: *what problem does this solve? why this shape?*

3. **Name the file before the code.** Every snippet sits inside a file. State which file (e.g., `index.html`) and where in it the code goes (e.g., "inside the `<body>`, just under the `<header>`"). Code floating in mid-air without a home is forbidden.

4. **Real bugs, real error messages.** When something can break, show the actual error message — copied verbatim — and translate it. The reader is going to see these messages on their own machine; the book should make them look familiar, not foreign.

5. **One concept per snippet.** Snippets do not introduce three new things at once. If three new things are needed, three snippets, one for each, then one that combines.

6. **Try-this closers stay in the closer.** The mid-chapter is for explanation. The closer is for the reader to do the thing. Don't blur them.

7. **Acknowledge the bad feeling.** Building feels worse than studying — Book 1 named this. The trilogy reinforces it. When the reader is about to hit a hard part, name it: *"this is the part that confused me for months,"* or *"this looks like nonsense the first three times you read it."*

8. **No gatekeeping.** Never *"obviously,"* *"clearly,"* *"as you might expect,"* *"simply."* If it were obvious, the book would not be needed.

---

## Forbidden voice tells (technical-writing additions)

These are bans **on top of** Book 1's banned-word list.

- **"Simply"** — it's never simple to a beginner.
- **"Just"** as a softener for a hard thing. *"Just add a div"* tells the reader they should already know what a div is.
- **"Obviously," "clearly," "of course."**
- **"As you might expect"** — when the reader very much could not expect.
- **"We can see that…"** — passive narration of the screen instead of teaching the reader to see.
- **"Don't worry about this for now"** — used to handwave past something the reader will need later. Either explain enough that it's not scary, or don't show it yet.
- **"It's beyond the scope of this book"** — kills momentum, sounds defensive. If something is out of scope, just don't bring it up.
- **"Industry-standard," "best practice"** — appeal to authority. Replace with the actual reason.
- **Marketing-style adjectives** — *powerful, modern, intuitive, elegant.* The code is doing the work; describing it as elegant is the author's job, not the prose's.

---

## Patterns that consistently carry the voice

### The plain-English translate

After a snippet, one short sentence that says what just happened in human terms.

> ```html
> <a href="/glossary.html">Glossary</a>
> ```
> *That's a link. The reader clicks the word "Glossary," the browser loads the file at that path. That is the whole feature.*

### The "you don't need to know" caveat (used sparingly)

When the reader will encounter something they don't need to fully understand yet, name the boundary explicitly:

> The browser is doing several things behind the scenes here. You will learn what they are in a later chapter. For now, all you need is the line above.

This is a permission-giving move. It tells the reader they are allowed to keep moving.

### The "before / after" pair

When showing a refactor or improvement, show both states in adjacent snippets, each labeled. The reader sees the change as a change, not as two different pieces of code.

### The "stop and run it" beat

Every chapter has at least one moment where the reader is told to stop reading, run the code, and watch the browser. Books that read straight through without this beat fail. The reader needs the loop.

---

## Quick-test checklist for any draft chapter

Before declaring a chapter done, read it aloud and check:

- [ ] Could the reader, having only read this chapter, sit down and do the project work it asks for?
- [ ] Is every snippet placed in a named file with a clear location?
- [ ] Does every non-trivial snippet have a *why* before it?
- [ ] Is there at least one moment the reader is told to run something and watch the result?
- [ ] Is there an honest-admission moment?
- [ ] Is there a permission-giving moment?
- [ ] Is there exactly one signature line?
- [ ] Are there zero banned words?
- [ ] Does the chapter end with a Try-this closer pointing to the next concrete project step?
- [ ] If you imagined two readers reading this in parallel, would they end the chapter with the same thing on their screen?
