# Chapter 0 — Why You Are Reading This

If you finished the first book, you came out of it knowing what programming has become and roughly where you stand. You also came out of it with a problem. The diagnosis told you the foundation matters more than the framework. It did not give you the foundation. That is what this book and the two after it are for.

This is the first of three short books. HTML, then CSS, then JavaScript. By the end of the third, you will have a real, deployed website on the public internet — at a real URL you can send to anyone. That site is the same site every reader of this trilogy is building. Your version and your friend's version will be recognizably the same project, with small touches different between you. The point is to give you something concrete to point at, not to differentiate you in ways that don't matter yet.

The site is called *The Frontend Field Guide.* It is a small, useful reference for the next person walking the road you are walking now. You are not building it for yourself. You are building it for someone like you, six months behind. That is part of why the project works — it is real, it is for someone, and it has to actually function.

This first book gives the site its bones. By the end of it, every page exists. The site is on the internet. People can read it.

It is also, deliberately, ugly.

---

## What this book is, and what it isn't

This is not a textbook. There are good HTML textbooks. They are exhaustive, carefully indexed, and almost no one reads them end to end. This book is the opposite shape — it is short, opinionated, and built around a single project that gets a little further at the end of every chapter.

You will not learn every HTML element. You will learn the ones that matter, and you will learn them well enough to use them without thinking. You will learn the ones the project demands. When you finish the book, the others — the ones that didn't come up — will be a single search away and will make sense to you the moment you read about them, because you will have a place to put them.

The principle from Book 1 still holds here. *Build, don't study.* Every chapter ends with you doing something to the project. By the end of the chapter, your site has something it didn't have at the start. The site is the reason the chapter exists. Topics earn their place because the project demands them.

You will encounter tags and attributes that the book does not stop to explain in depth. That is on purpose. Most of the time, the explanation can wait until you have a specific reason to need it. When that reason comes, the explanation lands. Without it, the explanation rolls off.

If you have read other HTML resources before, you may have the impression that there is a lot to learn. There is not. There is a small, important core, and a long tail of edge cases. The core is what this book teaches. The long tail is what you will pick up over the next ten years, one piece at a time, as you need it.

---

## What you'll have at the end

By the time you finish the last chapter, the following is true:

You have a folder on your computer called `frontend-field-guide`. It contains seven HTML files: a homepage, an about page, a path page, a glossary, an errors page, a tools page, and a contact form. They are linked together. They have real content — not Lorem Ipsum. The content is provided in this book, chapter by chapter, and you mark it up as you go.

The folder is also a Git repository. You have been committing your work since Chapter 1. You have a public GitHub repo of the same name, and the repo has a meaningful commit history that shows your progress through the book.

The site is deployed to GitHub Pages at `https://[your-username].github.io/frontend-field-guide/`. Anyone with the link can read it. Search engines will eventually find it.

You can defend every line of HTML in the project. You know what each tag is for. You know why each attribute is there. You know what would break if you removed it.

You also know a few things you didn't expect to know, because they came up: how to use the browser's developer tools, how to read an error in the console, how to validate HTML, how to commit and push to GitHub, how to deploy a site, and how to add a custom domain if you want one.

That is the whole deliverable. There are no badges, no certificates, no quizzes. There is a website on the internet that didn't exist when you opened this book.

---

## Why the site stays unstyled until Book 3

The site you finish this book with will look like a document from 1995. Black text on a white background, blue underlined links, default fonts, no layout. It will not look like anything you would call modern.

That is the point.

HTML is structure. CSS is appearance. They do different jobs, and beginners who learn them mixed together come out unable to separate them in their heads. They reach for CSS to fix structural problems. They reach for HTML hacks to get visual effects. They build sites where the structure is broken and the appearance is duct-taped over the breakage.

The way to avoid this is to learn HTML alone, build a real site with no styling whatsoever, and live with the discomfort. The discomfort teaches. It teaches that a well-marked-up document is already legible without any styling. It teaches that the structure is doing real work even when you can't see it. It teaches that CSS is for *appearance,* not for fixing things HTML should have done correctly in the first place.

The next book — the CSS book — opens with a site that already exists, already works, already has real content, and is already deployed. All the CSS book has to do is make it look like something. That is the right shape of the work. It is also why the CSS book will be much more enjoyable than it would have been if you'd been styling as you went.

For now, when you look at your site and think *this looks bad,* the answer is *yes, on purpose, and it will stay that way until Book 3.* The thing you are building right now is not the visual. The thing you are building right now is what is underneath the visual. That part has to be right.

---

## How to use this book

Read each chapter at your computer, with your editor open. Every chapter has a "Try this" section at the end. Do it. Don't skip ahead. The next chapter assumes the previous one's project work is done.

When the book shows a code snippet, type it. Don't copy and paste. The friction of typing is part of the learning. Your fingers will remember what your eyes will not.

When the book tells you to open the browser and look at something, do it. Switching contexts — from the editor to the browser to the editor — is the rhythm of this work. If you are reading in bed without a laptop, you are not really reading.

There is a companion repository on GitHub. It contains starter files for each chapter and a checkpoint commit at the end of each chapter, so if you ever get lost, you can compare your version to the reference. You will not need it most of the time. But it is there.

A few of the chapters are short. A few are long. The length is whatever the chapter needed. Don't read it as a difficulty signal — short chapters can be the ones that change the most about how you think.

---

## A note on Git

You will start using Git in the next chapter. Not as a topic. As the way you save your work. Every time you finish a "Try this," you will commit. Every chapter ends with at least one commit pushed to GitHub.

If you have never used Git before, that is fine. The book introduces what you need at the moment you need it, and not before. By the end of this book you will use Git the way you use the save button in any other application. By the end of the trilogy you will use it the way working developers do.

The reason Git is here, and not deferred to a separate book, is that Git is part of the work. Pretending you can learn HTML without learning Git is the same kind of pretending Book 1 warned about. The two are tied together in the real world. We tie them together here.

---

## A small honest moment, before you begin

I will tell you something I had to figure out the long way. The first hundred lines of HTML you write are going to feel like nonsense. The angle brackets will look strange. You will forget which tags need closing and which don't. You will stare at a missing slash for ten minutes. You will reload the browser and see exactly the same page you saw before, because you forgot to save.

This is normal, and it does not mean you are not getting it. It means your hands have not yet learned the shape of the work. They will, faster than you expect. The first chapter will feel awkward. The fourth will not. By the time you get to the chapter on semantic structure — Chapter 6 — you will look back at the first chapter and the awkwardness will have disappeared without you noticing.

You did not arrive late to programming. You arrived on time, and now you are starting on the foundation, which is exactly where you should be starting. The seat is open. The work is good work. You are allowed to begin.

*HTML is the shape of the page. You learn the shape first.* <!-- SIGNATURE LINE -->

In Chapter 1, you'll create the folder, the first file, and your first commit. Read on.

---

## CHAPTER HANDOFF REPORT

**Chapter:** 0 — Why You Are Reading This
**Word count:** ~1,650
**Signature line:** *HTML is the shape of the page. You learn the shape first.*

**Project milestone:** No code yet. Frame is set.
**Files touched:** None.
**Concepts introduced:**
- The project (*The Frontend Field Guide*) and its shape
- Why the site stays unstyled until Book 3
- How to use the book (type, don't copy; do the Try-this; switch contexts)
- Git as practice, not topic
- The bad-feeling-of-the-first-hundred-lines acknowledgement

**Items flagged for verification:** None.

**Honest-admission moment:** "The first hundred lines of HTML you write are going to feel like nonsense."
**Permission-giving moment:** "You did not arrive late to programming. You arrived on time, and now you are starting on the foundation."

**STATUS:** Continuing.
