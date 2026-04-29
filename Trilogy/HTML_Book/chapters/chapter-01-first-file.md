# Chapter 1 — The First File

Open your laptop. Open your file manager. Make a folder somewhere you'll find it later — your Documents, your Desktop, a Projects folder you already use. Call the folder `frontend-field-guide`. All lowercase, hyphens between the words, no spaces. The name matters because GitHub will use it later, and the conventions of the web don't like spaces in folder names.

That folder is your project for the next three books. Everything we build, every chapter from now on, lives inside it.

Now you need a tool to write code in. If you don't already have one, install **Visual Studio Code**. It's free, it's the editor most working web developers use in 2026, and the rest of this book assumes you have it open. Other editors will work too — Sublime Text, Zed, Notepad++ on Windows — but the screenshots and instructions assume VS Code. If you use something else, the ideas translate directly; only the menu paths change.

Open VS Code. Use **File → Open Folder…** and select your `frontend-field-guide` folder. The editor opens with that folder as the workspace. The left sidebar shows the folder. It is empty. We are going to fix that.

---

## Your first HTML file

In VS Code, click the small "new file" icon at the top of the sidebar — it appears when you hover over the folder name. Name the file `index.html`. Press enter.

The file opens. It is empty.

Type this — don't paste, type — into the file:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>The Frontend Field Guide</title>
  </head>
  <body>
    <h1>The Frontend Field Guide</h1>
    <p>A reference for new self-taught web developers.</p>
  </body>
</html>
```

Save the file. (`Ctrl+S` on Windows, `Cmd+S` on Mac. Get used to that shortcut. You will use it more than any other shortcut for the rest of your career.)

We will explain what every line of that file means in Chapter 2. For now, we want to see it work.

Open your file manager again. Find the `frontend-field-guide` folder. Inside it, you will see `index.html`. Double-click it.

Your default browser opens. The browser shows a page with a big bold heading that says *The Frontend Field Guide* and a paragraph underneath it.

You wrote a webpage. It is on your computer. The browser is showing it. That is the entire surface of the web — files like the one you just typed, served by a computer somewhere, opened by a browser somewhere else. Today the computer is yours and the browser is yours. By Chapter 11, the computer will be GitHub's and the browser will be anyone's.

---

## What just happened

You wrote a text file. The text file had a `.html` extension. The browser, when handed a file with that extension, treats the contents as HTML — Hypertext Markup Language — and turns the markup into a visual page.

That is the whole transaction. There is no compiler. There is no build step. There is no framework. The text you typed is the program, and the browser is the runtime.

This is the part of the web that has not changed since 1993. Frameworks come and go. JavaScript libraries come and go. The way a browser opens an HTML file and turns it into a page is the same operation it has always been. Everything else in this trilogy — every framework, every tool, every AI thing you will ever use — eventually produces an HTML file like the one you just made, and a browser opens it.

You did the thing once, by hand. From now on, when you read about a tool that "produces HTML," you will know exactly what that means, because you produced HTML.

---

## A small confession

The first time I wrote an HTML file, I forgot to save it before opening it in the browser. I saw an empty page. I thought I had typed something wrong. I checked the file in my editor. The code looked right. I refreshed the browser. Still empty. I re-typed the whole thing. I saved this time. Refreshed. The page appeared.

This is the most common beginner bug in the world. *Save the file before refreshing the browser.* The browser only knows what is on disk. The editor knows what you typed. Until you save, those two are different things. When you change a file, the workflow is always: save in the editor, then refresh in the browser. It will become muscle memory by the end of this chapter.

---

## Git: the second file you need

Now the part of this chapter that has nothing to do with HTML, and is just as important.

You need to start using Git. Not as a topic to learn separately. As the way you save your work, starting now.

Git is a tool that records the history of changes to a folder. You tell it, "this is where the project starts," and from then on, every time you reach a stopping point, you tell it, "save what's changed since last time, with this short description of what I did." It keeps the full history. You can go back to any point. You can see every change you ever made. You can show that history to anyone — to a teammate, to an interviewer, to a future version of yourself.

GitHub is a website that hosts Git repositories. When you push your project to GitHub, you are uploading a copy of the project's full history to a public (or private) place where you and others can see it. We will use GitHub for two things: as a backup, and later, as the place that hosts your live site.

If you don't have Git installed, install it now. Go to **git-scm.com** and follow the instructions for your operating system. On Mac, you may have it already — open Terminal and type `git --version`. If a version number prints, you have it. On Windows, the installer adds something called Git Bash, which is what you'll use.

If you don't have a GitHub account, create one at **github.com**. Choose a username you would be okay with showing on a job application, because it will appear in your project's URL.

Once both are installed and you have an account, open a terminal in your project folder. In VS Code, this is **Terminal → New Terminal** from the top menu. The terminal opens at the bottom of the editor, already pointed at the project folder.

Type these commands one at a time. After each one, the terminal will print something. That is normal. Read what it says. Most of the time it is confirmation that the command worked.

```
git init
```

This creates a hidden folder called `.git` inside your project. That folder is where Git stores the history. You will never need to open it. Don't delete it.

```
git add index.html
```

This tells Git, "I want the next save to include the changes I made to `index.html`." (Git calls this *staging* a file. The vocabulary is its own learning curve. We will only use the verbs you actually need.)

```
git commit -m "First HTML file"
```

This creates the save. The `-m` flag attaches a short message describing what changed — in this case, "First HTML file." That message is what you will see if you ever look back at the project's history.

You have made your first commit. The project now has a history. The history has one entry.

---

## Pushing to GitHub

Now you put it on GitHub.

Go to **github.com** in your browser. Click the **+** icon at the top right and choose **New repository**. Name it `frontend-field-guide` — exactly the same as your folder. Set it to **Public**. Do *not* check any of the options to add a README, a `.gitignore`, or a license — we want an empty repo, because we already have files locally and we are going to push them up.

Click **Create repository**. GitHub shows you a page with a few sets of instructions on it. Find the section labeled "…or push an existing repository from the command line." It looks something like this:

```
git remote add origin https://github.com/YOURUSERNAME/frontend-field-guide.git
git branch -M main
git push -u origin main
```

Copy those three lines. Paste them into your terminal in VS Code. Run them.

The first line tells Git, "this folder has a counterpart on GitHub at this URL — call that counterpart `origin`." The second renames your default branch to `main`. The third uploads everything you have committed so far to GitHub.

The first time you push, your terminal may ask you to log in. On modern Git, this happens through your browser — a window pops open, you sign in to GitHub, you confirm, and the terminal continues. If something else happens, the error message will tell you what to do. The most common case is that you need to set up a personal access token; GitHub's documentation walks you through that, and the message in the terminal links to it.

Once the push completes, refresh the GitHub page in your browser. Your repository now has one file in it: `index.html`. Click it. GitHub shows you the source. Above the file, you can see the commit message: *First HTML file.*

Your work is on the internet. The history of how you got here is on the internet. The repo will be there tomorrow, and next week, and a year from now, even if your laptop dies.

---

## A small permission

You do not need to learn every Git command before you can use Git. Most working developers use about five commands a day, and four of them are the ones you have just used. You will pick up the rest one at a time as you need them. We will introduce two or three more in this trilogy, at the moments they are useful. The rest is internet research, no different from anything else you will look up over the next ten years.

If the terminal feels uncomfortable — if the black screen and the blinking cursor feel like a foreign language — that's normal. It will stop feeling that way faster than you expect. The terminal does only what you tell it to, and you only need to tell it a small set of things. We will keep it small.

---

## What you have right now

A folder on your computer with one HTML file in it.
A Git repository tracking that folder.
A public GitHub repository hosting the same project.
A history with one commit.

That is more than most people who are "trying to learn web development" have when they finish their third tutorial.

*The first commit is the moment you stop being someone who is going to learn this and start being someone who is.* <!-- SIGNATURE LINE -->

---

## Try this

1. Make a small change to `index.html`. Add a second paragraph below the first one — anything you like. *"This is the start of my Frontend Field Guide,"* or your own words.
2. Save the file.
3. In the terminal, type:
   ```
   git add index.html
   git commit -m "Add second paragraph to homepage"
   git push
   ```
4. Refresh the GitHub page. You should see two commits in the history now, and the second paragraph in the file.

That cycle — change, save, refresh, add, commit, push — is the cycle for the rest of this book and the rest of the trilogy. Get the rhythm down now and the work will feel familiar by Chapter 4.

When you've done it, close the editor. The chapter is over. In Chapter 2, we will go through every line of the HTML you wrote and explain why each one is there.

---

## CHAPTER HANDOFF REPORT

**Chapter:** 1 — The First File
**Word count:** ~2,150
**Signature line:** *The first commit is the moment you stop being someone who is going to learn this and start being someone who is.*

**Project milestone:** Folder created, `index.html` written and rendered in browser, Git initialized, GitHub repo created, first push complete.
**Files touched:** `index.html`
**Concepts introduced:**
- The project folder and naming convention
- VS Code as recommended editor
- A minimal HTML file
- Save → refresh workflow
- `git init` / `add` / `commit -m` / `push`
- GitHub repo creation and push from existing local repo

**Items flagged for verification:**
- [VERIFY:] git-scm.com and github.com URLs (still correct as of writing).

**Honest-admission moment:** "The first time I wrote an HTML file, I forgot to save it before opening it in the browser."
**Permission-giving moment:** "You do not need to learn every Git command before you can use Git."

**STATUS:** Continuing.
