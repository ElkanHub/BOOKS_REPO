# Chapter 11 — Shipping It

A site that exists only on your laptop is not a site. It is a folder of files that look like a site if you double-click them. The web has a real meaning to the word *site,* and it includes "available at a URL anyone with a browser can reach."

This chapter is about getting your project from your laptop to a URL. By the end of it, your site will be live on the public internet. Anyone you send the link to can read it. Search engines will eventually find it. The site exists for other people, not just for you.

We're going to use **GitHub Pages** — a feature of GitHub that hosts static websites for free, directly from a Git repository. You already have a GitHub repository. The site is already there. You just have to flip a switch.

---

## Why GitHub Pages

There are dozens of ways to host a website in 2026. Netlify, Vercel, Cloudflare Pages, S3, your own server, a hundred others. They are all good. We are using GitHub Pages because it has three properties that matter for this book:

1. It is free.
2. It is integrated with the GitHub repository you already have, so the deploy is one configuration change.
3. It is static-only, which fits exactly what we are doing — serving HTML files, no backend, no server-side processing. A static host is the simplest hosting model that exists, and it teaches you what hosting actually is without burying you in configuration.

There is nothing wrong with the other options. You can move to one of them later. The GitHub Pages deploy will take you ninety seconds and will work. That is the thing we want for this chapter.

---

## Configuring Pages on the repo

Go to your repository on GitHub in a browser. The URL is `https://github.com/YOURUSERNAME/frontend-field-guide`.

Click the **Settings** tab at the top of the repository page. (Settings is at the right end of the row of tabs that starts with Code, Issues, Pull requests, and so on.)

In the Settings page, find the **Pages** option in the left sidebar. Click it.

You see a panel for configuring GitHub Pages. The first thing it asks for is the *source.* The source is *where* GitHub Pages should look for the files to publish. There are two parts: the **branch** and the **folder.**

For branch, choose `main` — the branch you have been pushing to. For folder, choose `/ (root)` — meaning *publish the files at the top level of the repository,* which is where your `index.html` lives.

Click **Save.**

GitHub starts building your site. The Pages panel updates with a message saying *Your site is live at https://YOURUSERNAME.github.io/frontend-field-guide/.* (The first build can take a minute or two. If the link doesn't work immediately, wait sixty seconds and refresh.)

Click the link. The site loads. It is the same site you have been building, now at a real URL.

---

## What just happened

GitHub looked at the contents of the `main` branch of your repository, copied those files to its own web servers, and started serving them at `YOURUSERNAME.github.io/frontend-field-guide/`. There is no "build step" — your files are HTML, the browser knows how to display HTML, GitHub serves the HTML directly. The browser does the rest.

This is what *static hosting* means. The server's job is to send files when asked. The browser does all the work of turning the files into a page. You did all the work of creating the files. The hosting is, mechanically, a simple lookup.

When you make changes from now on, the deploy process is automatic. Edit a file. Save. Commit. Push. GitHub notices the push and rebuilds the site. Within about a minute, the live URL shows the updated version.

That cycle — *edit, commit, push, see it live* — is the daily workflow of a developer. You are doing it now.

---

## A small honest moment

The first time I deployed a site, I refreshed the live URL and saw an old version. I did not know about caching at the level of the CDN (the network of servers that serves the site). I assumed the deploy had failed. I redeployed three times. I checked GitHub's status page. I tweeted at GitHub support.

The actual issue was that GitHub's CDN had cached the old version, and it took about two minutes to update. The site had been deployed correctly the first time. I just hadn't waited.

If you deploy and the live site doesn't show your latest changes, wait a minute. Wait another minute. Hard reload (Ctrl+Shift+R, Cmd+Shift+R). Open the site in an incognito window. The chances that the deploy itself failed are small; the chances that you're looking at a cached old version are large. Patience first, panic later.

---

## When something is broken in production

Things will break in production. Not always, but often enough that you should expect it.

A common one: an image that loaded fine on your laptop is broken on the live site. The cause is almost always case sensitivity. Your file is `Logo.svg` (capital L). Your `<img src>` says `logo.svg` (lowercase). On macOS, the file system is case-insensitive — both work locally. On the Linux servers GitHub uses, the file system is case-sensitive — only the exact case works. The image is missing on the live site even though it works on your machine.

The fix is to rename the file or change the `src` so they match exactly, in the same case. From now on, use lowercase filenames everywhere. Make it a habit. The bug class disappears.

Another one: a path that works locally because both files happen to be in the same folder, but breaks on the live site because the URL structure is different. If you wrote `<a href="about.html">About</a>` from a file in the project root, that's fine — the browser navigates to `yoursite.com/about.html`. If you accidentally wrote `<a href="/about.html">` (with a leading slash), the browser navigates to `yoursite.com/about.html` *if your site is at the root of the domain* — but if your site is at `yoursite.com/frontend-field-guide/`, the leading slash sends the browser to the wrong place. Either link works locally; only one works in production.

For this project, the rule is: use relative paths (no leading slash). Your links like `href="about.html"` and `src="assets/logo.svg"` will work both locally and on GitHub Pages.

A third common production-only issue: the favicon. The favicon is the small icon that appears in the browser tab next to the page title. By default, browsers look for a file called `favicon.ico` at the root of the site. If you don't have one, the browser shows a generic placeholder, and the Console may log a 404 for the missing favicon. This is not breaking anything. But if you want a real favicon, drop a `favicon.ico` (or a `favicon.svg`) into the project root and add a `<link>` to it in the `<head>`:

```html
<link rel="icon" type="image/svg+xml" href="favicon.svg">
```

For now, skip this. The 404 in the Console is harmless.

---

## A custom domain (optional)

The default URL for your site is `YOURUSERNAME.github.io/frontend-field-guide/`. That is fine. Many real projects live at github.io URLs forever.

If you want a custom domain — like `frontendfieldguide.com` — you can attach one to your GitHub Pages site. The full process:

1. Buy the domain from a domain registrar. (Namecheap, Cloudflare Registrar, and Google Domains are all reasonable. Costs are around $10–$15 per year for a `.com`.)
2. In your GitHub repository's Pages settings, enter the custom domain. GitHub provides instructions for the DNS records you need to add.
3. In the registrar's DNS settings, add the records GitHub gave you.
4. Wait. DNS changes take anywhere from a few minutes to a few hours to propagate.
5. Once GitHub confirms the domain is configured, enable HTTPS. GitHub provisions a free certificate automatically.

If that process feels like more work than you want to do right now, skip it. The github.io URL is a real URL. You can deploy first, add a domain later, never add one — all are reasonable choices.

---

## The README

Now that the site has a public URL, the GitHub repository should make it easy for someone landing there to find the link to the site. That's what the README is for.

The README is a file at the top level of the repository called `README.md`. The `.md` extension is for *Markdown,* a lightweight formatting syntax. GitHub renders the README on the repository's home page.

Make a new file in your project root: `README.md`. Type this:

```markdown
# The Frontend Field Guide

A small, opinionated reference for new self-taught web developers.

Built as the project for the trilogy *What You Need to Know Before React and AI* (HTML, CSS, JavaScript).

## Live site

https://YOURUSERNAME.github.io/frontend-field-guide/

## What this is

The site is a public reference covering:

- A path of foundational articles for someone new to web development.
- A glossary of common terms.
- A reference of common errors and what they mean.
- A short list of recommended tools.

## Status

HTML book — complete. Site is structurally complete, deployed, and unstyled.
CSS book — pending.
JavaScript book — pending.

## Built by

[Your name here]
```

Replace `YOURUSERNAME` with your actual GitHub username, and `Your name here` with your name.

Save. Commit. Push.

```
git add README.md
git commit -m "Add README"
git push
```

Refresh your repository on GitHub. The README now appears below the file list, formatted as a real document. The link to the live site is right there at the top.

You now have: a deployed website, a public repository, a README that links to the site, and a meaningful commit history. That is a portfolio piece. Not a fancy one. A real one.

---

## *A site you cannot send a link to is not a site. You just shipped one.* <!-- SIGNATURE LINE -->

This is the moment. The site exists for other people now. You can text the link to a friend. You can put it in your bio. You can include it in a job application. You can show it to your sibling and they can read it on their phone.

The visual is plain. The CSS book makes it not plain. The functionality is static. The JavaScript book makes it interactive. But the site exists. It works. It is reachable. Those three things are not given. Many developers ship things that don't reach the third.

You have done the thing.

---

## A small permission

You do not need to optimize this site further before moving on. There is no analytics to add. There is no SEO sitemap to generate. There is no contact form backend to wire up. The site, in its current state, is sufficient. The CSS book will improve it. The JavaScript book will improve it again.

If you want to skip ahead and add a custom domain, or a favicon, or analytics — that's fine. None of those are required. You earned the right to call this part done.

The next chapter, the closing, is short. Read it now or read it tomorrow.

---

## Try this

1. Send the URL of your site to one person. Anyone. A friend, a family member, a peer who is also walking this road. Just one person.
2. Watch them open it. (Or get a text back saying they did.)
3. Open the site yourself, on your phone. Notice that it works. The text is too small because we haven't added the responsive layout yet — the CSS book will fix that. But the navigation works, the links work, the form works.
4. Take a screenshot of the live site. Save it somewhere — your desktop, a folder, anywhere. This is your before-CSS state. In Book 3, you'll take an after-CSS screenshot and compare them.
5. Final commit:
   ```
   git add .
   git commit -m "HTML book complete; site live"
   git push
   ```

When that's done, the chapter is over. Read the closing.

---

## CHAPTER HANDOFF REPORT

**Chapter:** 11 — Shipping It
**Word count:** ~2,150
**Signature line:** *A site you cannot send a link to is not a site. You just shipped one.*

**Project milestone:** Site is deployed to GitHub Pages at a real URL. README in place at repo root. Reader has sent the URL to at least one person.
**Files touched:** `README.md` (new). All HTML files unchanged.
**Concepts introduced:**
- GitHub Pages and why we chose it
- Configuring Pages from repo settings
- Static hosting as a concept
- The edit-commit-push-deploy cycle
- Common production-only bugs (case sensitivity, leading-slash paths, favicon 404s)
- Custom domain (introduced, optional)
- The README and its role in a public repo

**Items flagged for verification:** None.

**Honest-admission moment:** "The first time I deployed a site, I refreshed the live URL and saw an old version. I did not know about caching..."
**Permission-giving moment:** "You do not need to optimize this site further before moving on... You earned the right to call this part done."

**STATUS:** Continuing.
