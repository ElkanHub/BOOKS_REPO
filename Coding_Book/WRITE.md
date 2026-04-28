# WRITE.md
## We Were Never Really Coding
### From Loops to Language Models — Twenty-Five Years That Rewrote What It Means to Be a Programmer

**Author:** Elkanah Donkor
**Signature line (epigraph & cover):** *Programming didn't get harder. It got deeper.*
**Genre:** Non-fiction — developer education / personal development for programmers
**Format:** Single volume
**Status:** Specification locked. Writing in progress.

---

## SECTION 1: BOOK IDENTITY

**Working title:** We Were Never Really Coding
**Subtitle:** From Loops to Language Models — Twenty-Five Years That Rewrote What It Means to Be a Programmer
**Author name (as published):** Elkanah Donkor
**Dedication:** *For my future self in Japan — the goal that means more than just a trip.*

**Book promise (the contract):**
After reading this book, the reader will understand what programming has actually become — and know how to learn it on its real terms, not the ones they inherited. They will leave with a clear path forward, identified instead of overwhelmed, and wanting more from the author.

**Transformation arc:**
- Reader **starts** the book feeling overwhelmed, behind, or quietly afraid that "real" programming has passed them by.
- Reader **ends** the book feeling identified, oriented, helped, and equipped — with specific next steps and a sense that the craft is more alive than they thought.

**Stance (this is the soul of the book):**
Anti-gatekeeping. Optimistic about where programming is going. Pragmatic — neither nostalgic nor hyped. The job changed; the way we teach hasn't caught up. This book closes that gap with honesty, warmth, and direction.

The title is a **liberating reframe**, not an accusation: *what we called coding was always pointing at something bigger, and now we can finally see it.*

---

## SECTION 2: READER PROFILE

**Primary reader:** The bootcamp graduate or new entrant.
- Age: 18–28
- Just finished a bootcamp, CS degree, or self-taught path
- Overwhelmed by the modern stack — frameworks, cloud, AI, tooling
- Doesn't know what to learn first, what to ignore, or whether they're "real" programmers
- Reading speed: medium. Will read this in 2–4 sittings.
- Reads on phone, Kindle, and during commutes / breaks.

**Secondary reader 1:** The 2000s/2010s programmer feeling left behind.
- Age: 30s–50s. Employed but anxious about AI and what "still counts."
- Wants to know what's still true and what to relearn.

**Secondary reader 2:** The self-taught hobbyist returning after years away.
- Lost the thread. Wants to be re-oriented without being condescended to.

**The reader's current reality:**
- Problem keeping them up: *"There's too much. I don't know if I'm learning the right things. I don't know if AI just made my career obsolete before it started."*
- What they've already tried: bootcamps, free courses, YouTube, tutorials. Most worked partially. None gave a coherent picture.
- What they believe about themselves right now: *"Maybe I'm too late. Maybe I'm not smart enough. Maybe everyone else gets it and I don't."*
- What they secretly want but won't admit: *To be told they belong. To be given a map. To be seen.*
- What they most need to hear, but will resist: *That the overwhelm isn't their fault — and that the craft is more accessible than they've been led to believe, but harder in different ways than they expected.*

**The reader must NEVER feel:**
- Talked down to.
- Like they're being sold to.
- Like the author is showing off.
- Like the path forward is gatekept behind hidden knowledge.
- Hopeless about AI making them obsolete.

---

## SECTION 3: VOICE SPECIFICATION

**Voice in three words:** candid, conversational, mentor-like.

**Tone scores (1 → 10):**
- Formal (1) → Casual (10): **8**
- Serious (1) → Playful (10): **5**
- Distant (1) → Intimate (10): **9**
- Complex (1) → Simple (10): **7**
- Prescriptive (1) → Exploratory (10): **5** (balanced — direct when giving advice, exploratory when explaining history)

**POV:** Second person ("you") throughout. Speaks directly to the reader. Mentor-to-mentee.

**Tonal references (calibration):**
- **Paul Graham essays** — plainspoken clarity, confident without arrogance, no throat-clearing.
- **Patrick McKenzie ("patio11") blog posts** — generous, specific, mentor-to-developer warmth, respects the reader's time.
- **Julia Evans / wizardzines** — demystifying, makes hard things feel approachable, never condescending.

The book should feel like **a smart friend who's been doing this for 20 years sitting across from you with coffee** — telling you what they wish someone had told them.

**Reading level:** Grade 8–9. Clear. Accessible. Not dumbed down.

**Tense:** Past tense for history. Present tense for now. Future tense sparingly.

**Banned words and phrases (do not use under any circumstance):**
- "In today's fast-paced world..."
- "It's important to note that..."
- "Game-changer," "paradigm shift," "revolutionary"
- "Whether you're a beginner or..."
- "Dive deep," "unpack," "delve"
- "Imagine this:" / "Picture this:"
- "At the end of the day"
- "Now, ..." as a sentence opener
- "Let's explore..."
- "In this chapter..." (banned chapter opening)
- "In conclusion..."
- "As we've discussed..." / "As we mentioned earlier..."
- Any sentence that summarizes the previous chapter
- Any sentence that previews the next chapter
- Em-dashes used as filler (use only when they earn their place — like this)
- Excessive hedging: "perhaps," "maybe," "it could be argued"
- AI tells: "navigate the landscape," "leverage," "robust," "seamless," "cutting-edge," "ever-evolving"

**Banned tones:**
- Preachy
- Self-congratulatory
- Cheerleader / hype
- Doom / catastrophizing
- Gatekeeping ("real programmers know...")
- Nostalgia-bait ("back in my day...")

**Required tone moves (use these often):**
- Direct address ("you")
- Specific examples (named tools, named years, named situations)
- Honest admissions ("I got this wrong for years")
- Permission-giving ("you don't have to...")
- Reframes ("it's not X, it's Y")

---

## SECTION 4: BOOK ARCHITECTURE

**Total word count target:** 38,000–42,000 words.
**Structure type:** Problem/Solution + Layered (3 parts).
**Chapter count:** 12 chapters + Introduction + Closing Note.
**Average chapter length:** 2,800–3,200 words.
**Reading time per chapter:** 15–20 minutes.

### Front matter
- Title page
- Copyright page (© 2026 Elkanah Donkor. All rights reserved.)
- Dedication: *For my future self in Japan — the goal that means more than just a trip.*
- Epigraph: *Programming didn't get harder. It got deeper.*
- Table of contents
- Introduction

### Back matter
- Closing Note ("Where to Next" — pulls reader to author's wider work)
- About the Author
- Acknowledgements (to be drafted by author)

### Three parts
- **Part 1 — DIAGNOSIS** (Ch. 1–4): What programming actually is now. Why you feel overwhelmed.
- **Part 2 — THE STORY** (Ch. 5–8): What changed, 2000 → today.
- **Part 3 — THE WAY FORWARD** (Ch. 9–12): How to learn it now.

---

## SECTION 5: CHAPTER ANATOMY (THE TEMPLATE)

Every chapter follows this structure. The agent must use this template exactly.

```
1. OPENING HOOK (250–400 words)
   - Drops the reader into the middle of a feeling, scene, or sharp claim.
   - NEVER begins with "In this chapter," a definition, a quote, or scene-setting.
   - The first sentence must make the reader unable to look away.

2. THE REFRAME (400–600 words)
   - States the chapter's core claim.
   - Names what the reader has been told vs. what is actually true.
   - This is where the chapter's argument becomes visible.

3. THE BODY (1,800–2,200 words, split into 2–3 sections)
   - Each section advances the argument with a specific example, story, or evidence.
   - Mandatory: at least one "2005-Programmer vs. 2025-Programmer" contrast somewhere in the body.
   - Mandatory: at least one moment of honest admission or permission-giving.
   - Specific names, years, tools, situations. No generic abstractions.

4. THE TURN (250–400 words)
   - The chapter pivots from explanation to implication.
   - "So what does this mean for you?"
   - The quotable signature line of the chapter lives here or in the closer.

5. THE CLOSER (200–300 words)
   - Lands on a single takeaway. Not a summary.
   - Ends with a "Try this:" — one specific, doable action (1–3 sentences).
   - The final sentence of the chapter must pull the reader forward — not summarize what was said.
```

**Total chapter target: 2,800–3,200 words.**

---

## SECTION 6: RECURRING DEVICES

Used across the whole book. Track usage in the ledger.

1. **The 2005-Programmer vs. The 2025-Programmer.** A recurring contrast pair. Same situation, two eras, two responses. Appears at least once in every chapter from Ch. 2 onward. Always concrete (names of tools, years, real workflows).

2. **"Try this:" closer.** Every chapter ends with one specific, doable action. Not homework. Leverage. 1–3 sentences max. Should feel like a senior dev handing the reader a tip.

3. **The signature quotable line.** Each chapter contains exactly **one** line designed to be screenshot-worthy. Sharp, short, true. The agent must mark it with a comment when writing: `<!-- SIGNATURE LINE -->` so the editor can verify.

4. **No code blocks unless they earn their place.** This is not a tutorial. Code appears only when nothing else can make the point — and only short snippets (max 5 lines).

5. **Honest admissions.** At least one moment per chapter where the author admits something — got it wrong, struggled with it, didn't know it for years. Never performative. Specific.

6. **Permission-giving moments.** At least one moment per chapter where the reader is explicitly told they don't have to do something the world told them they had to.

---

## SECTION 7: FULL CHAPTER PLAN

For each chapter: title, file name, word count, core idea, why it must exist, sections, the turn, the closer, and special instructions.

---

### **Introduction — The Map I Wish I'd Been Given**
**File:** `chapter-00-introduction.md`
**Word count:** 1,500–1,800
**Core idea:** Frame the contract with the reader. Name the overwhelm. Promise the map. Establish the mentor voice.
**Why it must exist:** Without this, the reader doesn't know whether to trust the author or the book's stance. This chapter does that work.
**Sections:**
1. Open with the feeling — the overwhelm of looking at a modern stack and not knowing where to start. (~400 words)
2. The reframe: this isn't your fault. The target moved. (~500 words)
3. What this book is and isn't. The promise. (~400 words)
4. Who I am, briefly, and why I wrote this. (~300 words)
**The turn:** *"You're not late. You're early — for what programming is becoming."*
**Closer:** Invitation to read in order or jump to Part 3 if they're impatient. End on: *"Either way — let's begin."*
**Special instructions:**
- Set the voice for the entire book. This is the voice anchor.
- Establish trust without showing off.
- Mention the signature line at least once: *Programming didn't get harder. It got deeper.*
- No "Try this:" closer in the intro.

---

### **PART 1 — DIAGNOSIS**

### **Ch. 1 — The Overwhelm Is Not Your Fault**
**File:** `chapter-01-overwhelm.md`
**Word count:** 2,800–3,200
**Core idea:** The feeling of being behind is a structural feature of the modern stack, not a personal failing. Name it precisely so it loses its power.
**Why it must exist:** The reader's first need is to feel seen. If we don't earn that in Ch. 1, the rest of the book is wasted.
**Sections:**
1. The 47-tab problem — opening the editor and not knowing what to learn next.
2. Why this generation feels behind in a way previous ones didn't.
3. The math of overwhelm — how much there actually is, and why no one can know it all anymore.
**The turn:** The overwhelm isn't a bug in you. It's a feature of the era. Stop treating it like a personal failing.
**Closer + Try this:** *"For one week, when you feel behind, write down what specifically you think you should know. By Friday, you'll see the list is unwinnable — and that's the point. Pick one thing from it. Ignore the rest."*
**Special instructions:**
- This chapter does emotional work, not technical work.
- The 2005 vs. 2025 contrast: the 2005 programmer learned 3 things deeply; the 2025 programmer is told to learn 30 things badly.
- Honest admission: author's own moment of overwhelm.

---

### **Ch. 2 — What "Coding" Actually Means Now**
**File:** `chapter-02-what-coding-means.md`
**Word count:** 2,800–3,200
**Core idea:** Coding is no longer typing syntax. It's directing systems. The reframe that makes the rest of the book click.
**Why it must exist:** Without this reframe, every later chapter is misread as nostalgia or hype. This is the conceptual hinge of the book.
**Sections:**
1. What coding looked like in 2005 — the keystroke as craft.
2. What coding looks like in 2025 — direction, judgment, taste.
3. What stayed the same — and why those things matter more than ever.
**The turn:** The keystroke was never the craft. *(SIGNATURE LINE FROM EARLIER IDEATION — but this book's signature is "Programming didn't get harder. It got deeper." — so this chapter's signature line should be a new one, e.g., "Coding is not what you type. It's what you decide.")*
**Closer + Try this:** *"Look at the last thing you built. Ask: what part of it was the typing, and what part was the deciding? The deciding is the work."*
**Special instructions:**
- Mandatory 2005 vs. 2025 contrast — make it physical (what was on screen, what was in their head).
- This chapter must convert the reader to the book's worldview.

---

### **Ch. 3 — The Stack You Can't See**
**File:** `chapter-03-stack-you-cant-see.md`
**Word count:** 2,800–3,200
**Core idea:** Every line of code today sits on 40+ years of accumulated abstraction. You're not learning to code — you're learning to operate on top of a tower someone else built.
**Why it must exist:** Explains why "the basics" debate is broken, and sets up Ch. 9's "learn the layer below" answer.
**Sections:**
1. A tour of one HTTP request — what's actually happening from keystroke to screen.
2. Why no one teaches the whole stack — and why no one needs to.
3. What "the basics" actually means now (and why the old definition is wrong).
**The turn:** You don't need to know the whole tower. You need to know where you stand on it.
**Closer + Try this:** *"Pick something you use every day — `npm install`, `git push`, a deploy pipeline. Spend 30 minutes today learning what it actually does. Just one."*

---

### **Ch. 4 — Why Tutorials Stopped Working**
**File:** `chapter-04-tutorials-broken.md`
**Word count:** 2,800–3,200
**Core idea:** The gap between tutorial-land and real work has never been wider. Finishing courses leaves you feeling like a fraud because the courses are training you for a job that doesn't exist.
**Why it must exist:** Names the specific betrayal the bootcamp grad has experienced. Earns deep trust.
**Sections:**
1. The tutorial promise vs. the first day on the job.
2. Why tutorials can't keep up — the structural reason.
3. What tutorials are actually good for (and what they're not).
**The turn:** Tutorials end where the real work begins. That's not a flaw in you for finishing them and still feeling lost.
**Closer + Try this:** *"Stop completing tutorials all the way to the end. As soon as you understand the pattern, close the tab and try to build the thing without it. The struggle is where the learning lives."*

---

### **PART 2 — THE STORY**

### **Ch. 5 — The World Before Frameworks (2000–2008)**
**File:** `chapter-05-before-frameworks.md`
**Word count:** 2,800–3,200
**Core idea:** When programmers really did write everything themselves. What that taught — and what it cost. We don't go back, but we should remember what was real.
**Why it must exist:** Establishes the historical baseline. Without it, "things changed" is empty.
**Sections:**
1. A day in the life of a 2003 web developer — raw PHP, hand-rolled SQL, FTP deploys.
2. What this taught — proximity to the machine, deep mental models.
3. What it cost — slow shipping, reinvented wheels, gatekeeping by tedium.
**The turn:** The 2003 programmer wasn't better than you. They were forced to learn things you can choose to learn — and that choice is harder than the force was.
**Closer + Try this:** *"Build one thing this month with no framework. Just the language and a text editor. You won't ship it, but you'll see what frameworks were hiding."*

---

### **Ch. 6 — The Framework Era (2008–2018)**
**File:** `chapter-06-framework-era.md`
**Word count:** 2,800–3,200
**Core idea:** Rails, jQuery, Node, React. Learning shifted from syntax to ecosystem. This is the first generation that stood on shoulders — and the trade-off is still being negotiated.
**Why it must exist:** Connects the "before" to the "now." Explains why the modern stack feels endless.
**Sections:**
1. Rails (2005) and the convention-over-configuration revolution.
2. The JavaScript explosion — Node, jQuery, the framework wars.
3. What the framework era gave us, and what it took.
**The turn:** Frameworks didn't make programming easier. They made it different — and the new skill is choosing them, not building them.
**Closer + Try this:** *"Look at your current stack. For each framework, ask: what would I do without it? If you don't know, you don't yet understand what it's doing for you."*

---

### **Ch. 7 — The Cloud and the Black Box (2015–2022)**
**File:** `chapter-07-cloud-black-box.md`
**Word count:** 2,800–3,200
**Core idea:** AWS, Docker, Kubernetes, serverless. You stopped touching the machine. What you gained: scale and speed. What got hidden: the machine itself.
**Why it must exist:** Most readers operate entirely above the cloud abstraction. They need to see what's underneath, even if they never touch it.
**Sections:**
1. From the bare server to the cloud console — the disappearance of the box.
2. What the cloud hides — and why that's mostly fine.
3. When the abstraction breaks (and you wish you'd looked underneath).
**The turn:** The cloud didn't make ops disappear. It made it invisible. Invisible isn't gone.
**Closer + Try this:** *"Read one bill from your cloud provider line by line. Each line is a thing running for you. Knowing what those things are is the new systems literacy."*

---

### **Ch. 8 — AI and the End of the Keystroke (2022–now)**
**File:** `chapter-08-ai-end-keystroke.md`
**Word count:** 2,800–3,200
**Core idea:** Copilot, Cursor, Claude. What programming becomes when typing is the cheap part. The shift is still in motion — and the people who understand it earliest will benefit most.
**Why it must exist:** This is the moment the reader is living through. The book has to address it head-on with neither hype nor doom.
**Sections:**
1. Before Copilot vs. after — what changed in the daily workflow.
2. What AI is good at, what it's bad at, and what it might never be good at.
3. The new shape of the work: from typing to directing.
**The turn:** AI didn't take your job. It changed what the job is. The people who refuse to use it will be replaced by people who do.
**Closer + Try this:** *"For one project this week, try writing it with AI as a junior pair-programmer. Direct, review, correct. Notice where you become the senior."*
**Special instructions:**
- This chapter must NOT be hype.
- Must NOT be doom.
- Must acknowledge the reader's anxiety honestly.
- Mention specific tools: Copilot, Cursor, Claude, ChatGPT — by name.

---

### **PART 3 — THE WAY FORWARD**

### **Ch. 9 — Learn the Layer Below**
**File:** `chapter-09-layer-below.md`
**Word count:** 2,800–3,200
**Core idea:** Wherever you operate, learn one layer down. Not the whole tower. Just the floor beneath your feet. This is the new fundamental.
**Why it must exist:** Gives the reader a single, durable principle for navigating any future change.
**Sections:**
1. Why "learn the basics" is broken advice in 2025.
2. The "one layer down" rule — what it means in practice.
3. Examples by domain — frontend, backend, data, ML.
**The turn:** You don't need to be a polymath. You need to be one floor smarter than your role demands. That's it.
**Closer + Try this:** *"Identify the layer you live on. Then identify the one below it. Spend 20 minutes a day on the layer below for the next month. Watch what happens to your competence."*

---

### **Ch. 10 — Build, Don't Study**
**File:** `chapter-10-build-dont-study.md`
**Word count:** 2,800–3,200
**Core idea:** Tutorial completion ≠ skill. Reps in real systems = skill. The new pedagogy is building things you don't know how to build yet.
**Why it must exist:** This is the practical method that the rest of the book has been earning the right to prescribe.
**Sections:**
1. The illusion of progress in tutorial-driven learning.
2. The build-first method — pick a project, then learn what it requires.
3. How to choose projects that teach (and how to avoid ones that don't).
**The turn:** Studying gives you the illusion of competence. Building gives you the reality.
**Closer + Try this:** *"Pick one thing you want to build that you don't yet know how to build. Start it tonight. Learn only what the thing demands. Stop when it's done."*

---

### **Ch. 11 — Use AI Like a Senior Engineer Uses a Junior**
**File:** `chapter-11-ai-leverage.md`
**Word count:** 2,800–3,200
**Core idea:** AI is not a magic answer machine. It's leverage with taste. The skill is direction, review, and judgment — the same skills a senior engineer uses managing a junior.
**Why it must exist:** The reader is already using AI but probably misusing it. This chapter teaches them to use it well.
**Sections:**
1. The two failure modes — taking AI's first answer, or refusing to use it at all.
2. How seniors use juniors — and what that teaches you about using AI.
3. Concrete patterns — what to ask, when to push back, when to ignore.
**The turn:** The skill isn't getting AI to write code for you. It's getting AI to write *the right* code for you — and that takes everything you'd have learned anyway.
**Closer + Try this:** *"Next time you ask AI for code, write the prompt as if you were briefing a junior. Specific. Constrained. Reviewable. See what changes."*

---

### **Ch. 12 — The Career You're Actually Building**
**File:** `chapter-12-career-2030.md`
**Word count:** 2,800–3,200
**Core idea:** The job in 2030 is programmer + architect + problem-solver + judge of systems. This is the best time in history to start. The deepening is the opportunity.
**Why it must exist:** Sends the reader off with vision, not anxiety. Ties the book's argument to their future.
**Sections:**
1. What the day-to-day will look like in 2030 — best guess, honestly framed.
2. The skills that compound vs. the skills that decay.
3. Why this generation has more leverage, not less — if they pick it up.
**The turn:** Programming didn't get harder. It got deeper. And depth rewards the patient.
**Closer + Try this:** *"Write down what you want your work to look like in five years. Not the title — the day. Then ask: what would you have to learn this year to be that person?"*
**Special instructions:**
- This chapter must echo the title and the signature line.
- End on hope without hype.

---

### **Closing Note — Where to Next**
**File:** `chapter-99-closing.md`
**Word count:** 600–900
**Core idea:** Pull the reader into the rest of the author's work. Moving, not salesy.
**Content:** Use the closing draft already approved (with `[TOPIC: future book/article 1]` and `[TOPIC: future book/article 2]` placeholders to be filled by author later).
**Special instructions:**
- This is the most personal piece in the book. Voice should be soft, direct, and warm.
- Sign off as: *— Elkanah*

---

## SECTION 8: AGENT WRITING RULES

### 8.1 — Universal rules (every chapter, no exceptions)

**Workflow rules:**
- Write **one chapter per session.** Never two.
- After writing the chapter, **STOP.** Do not begin the next chapter. Do not offer to begin the next chapter. Wait for explicit human approval.
- End every chapter file with the **chapter handoff report** (see template below).
- Before writing a single word, re-read: this WRITE.md, voice-anchor.md (if it exists), and ledger.md (if it exists).

**Structure rules:**
- Use the chapter template in Section 5 exactly. Do not skip components.
- Word count must be within ±10% of the target.
- File naming: exactly as specified in the chapter plan.
- Output in clean Markdown. Headings: `#` for chapter title, `##` for major sections.

**Prose rules:**
- Never begin a chapter with "In this chapter..."
- Never begin with a definition, a quote, or scene-setting weather/time-of-day.
- Never summarize the previous chapter.
- Never preview the next chapter.
- Avoid passive voice unless it's the right tool for the sentence.
- No bullet lists in the body prose. (Bullets allowed only in "Try this:" closers if absolutely necessary, and in the Introduction's contract section.)
- Vary sentence length. Short punches. Longer reflective sentences when earned.

**Content rules:**
- Every chapter must serve the book's promise (Section 1).
- Do not repeat ideas already covered in a prior chapter. Consult ledger.md before writing.
- Every abstract claim must be grounded in a concrete example.
- Examples must be specific: real tools, real years, real situations. No "imagine a developer who..." abstractions.
- Maintain second-person POV ("you") consistently.

**The fact/claim rule (CRITICAL):**
- Any statistic, quote, attributed claim, specific date of a tool's release, or named person's quote must be wrapped in `[VERIFY: ...]` for human sourcing.
- **Do not invent specifics.** If you don't know whether jQuery was released in 2006, write `[VERIFY: jQuery release year]` and continue.
- Better to flag five things for verification than to fabricate one.

**Voice consistency rules:**
- Re-read the voice-anchor.md (Ch. 1's first 3–4 paragraphs) before every chapter from Ch. 2 onward.
- Tone scores in Section 3 are binding.
- Banned words list is binding. Run a search before submitting.

**The honesty rule:**
- At least one moment per chapter where the author admits something — got it wrong, struggled, didn't understand something for years. Specific, not performative.

**The permission rule:**
- At least one moment per chapter where the reader is given explicit permission to ignore something they were told they had to do.

### 8.2 — Banned moves
- Coincidental insights with no source.
- Made-up statistics.
- Fake quotes attributed to real people.
- Generic "studies show..." claims.
- Listicles disguised as prose.
- Empty transitions ("Now that we've explored X, let's turn to Y...").
- Self-referential meta-commentary ("As an author, I want to...").
- Tutorial-style code walkthroughs.
- Closing summaries that restate what the chapter just said.

---

## SECTION 9: CHAPTER QUALITY CHECKLIST

The agent must run this before submitting any chapter. Report pass/fail per item at the end of the chapter file.

```
STRUCTURE:
[ ] Chapter opens without setup — drops straight into a feeling, scene, or claim
[ ] Opening hook is 250–400 words
[ ] The Reframe section is present and clearly states the chapter's claim
[ ] The Body has 2–3 sections with specific examples
[ ] The Turn pivots to implication for the reader
[ ] The Closer ends with a "Try this:" action (1–3 sentences)
[ ] Final sentence pulls the reader forward (does not summarize)
[ ] Word count within ±10% of target

VOICE:
[ ] Second person ("you") used throughout
[ ] Tone matches: candid, conversational, mentor-like
[ ] No banned words or phrases (search performed)
[ ] No banned tones (preachy, hype, nostalgia, gatekeeping)
[ ] Voice anchor consulted (for Ch. 2+)

CONTENT:
[ ] Chapter serves the book promise
[ ] At least one 2005 vs. 2025 contrast (Ch. 2+)
[ ] At least one honest admission
[ ] At least one permission-giving moment
[ ] Exactly one signature line, marked with `<!-- SIGNATURE LINE -->`
[ ] No ideas repeated from earlier chapters (ledger consulted)
[ ] All specific claims either verifiable or wrapped in [VERIFY: ...]

PROSE:
[ ] No bullet lists in body prose
[ ] No "In this chapter..." opening
[ ] No previous-chapter summary
[ ] No next-chapter preview
[ ] Sentence length varies
[ ] Code blocks (if any) earn their place — max 5 lines, only when nothing else works
```

---

## SECTION 10: CHAPTER HANDOFF REPORT (REQUIRED AT END OF EVERY CHAPTER FILE)

Every chapter file must end with this block, filled in:

```markdown
---

## CHAPTER HANDOFF REPORT

**Chapter:** [number and title]
**Word count:** [exact]
**Signature line:** [paste the line marked with <!-- SIGNATURE LINE -->]

**Quality checklist:**
[paste the full checklist with pass/fail for each item]

**Ideas introduced this chapter (for the ledger):**
- [bullet list]

**Examples / specific references used:**
- [bullet list — tools, years, names mentioned]

**Items flagged for human verification ([VERIFY:]):**
- [bullet list of every VERIFY tag in the chapter]

**Honest-admission moment:**
- [one-line description of where it lives]

**Permission-giving moment:**
- [one-line description of where it lives]

**Open questions for the editor:**
- [anything you were uncertain about]

**STATUS:** AWAITING APPROVAL. Will not begin next chapter until explicitly told to do so.
```

---

## SECTION 11: CHAPTER WRITING ORDER

1. **Introduction** — establishes the contract and the voice.
2. **Chapter 1** — locks in the voice. Most critical chapter to nail.
3. **Chapter 12** — knowing the ending sharpens everything in between.
4. **Chapters 2 → 11** in sequence.
5. **Closing Note** — last.

---

## SECTION 12: FILE NAMING CONVENTION

```
chapters/chapter-00-introduction.md
chapters/chapter-01-overwhelm.md
chapters/chapter-02-what-coding-means.md
chapters/chapter-03-stack-you-cant-see.md
chapters/chapter-04-tutorials-broken.md
chapters/chapter-05-before-frameworks.md
chapters/chapter-06-framework-era.md
chapters/chapter-07-cloud-black-box.md
chapters/chapter-08-ai-end-keystroke.md
chapters/chapter-09-layer-below.md
chapters/chapter-10-build-dont-study.md
chapters/chapter-11-ai-leverage.md
chapters/chapter-12-career-2030.md
chapters/chapter-99-closing.md
```

Supporting files (maintained by the editor):
```
WRITE.md                    — this file
voice-anchor.md             — created after Ch. 1 is approved
ledger.md                   — running ledger of ideas, examples, claims used
prompts/chapter-XX-prompt.md — exact prompt used to generate each chapter
```

---

## SECTION 13: WORD COUNT TABLE

| Component | Chapters | Words/Chapter | Total |
|---|---|---|---|
| Introduction | 1 | 1,650 | 1,650 |
| Part 1 (Ch. 1–4) | 4 | 3,000 | 12,000 |
| Part 2 (Ch. 5–8) | 4 | 3,000 | 12,000 |
| Part 3 (Ch. 9–12) | 4 | 3,000 | 12,000 |
| Closing Note | 1 | 750 | 750 |
| Front matter | — | — | ~300 |
| Back matter (About) | — | — | ~500 |
| **TOTAL** | **14** | — | **~39,200** |

---

## SECTION 14: POST-EDITING NOTES

After all chapters are written and approved, the editor (Claude Opus, in this project) runs:

1. **Voice consistency pass** — read all chapters in sequence. Flag any drift.
2. **Ledger reconciliation** — verify no idea is repeated, every promised callback lands.
3. **VERIFY pass** — author manually verifies every `[VERIFY: ...]` tag and replaces with sourced fact.
4. **Line edit** — cut every sentence that doesn't earn its place.
5. **Read-aloud pass** — every paragraph read aloud. Any awkwardness gets cut.
6. **Final formatting** — convert to .docx for Kindle / print, or .epub directly.

---

## SECTION 15: AUTHOR-ONLY METADATA (not for the writing agent)

**Closing draft (held here until [TOPIC] placeholders are filled):**

> If this book found you, it's because you were looking.
>
> You weren't lazy. You weren't behind. You were just told the wrong story about what programming is, and now you've heard a truer one.
>
> What I've written here is the start of something — not a finish line. The next book goes deeper into [TOPIC: future book/article 1]. The one after that into [TOPIC: future book/article 2]. And there will be more, because the path is long and the people walking it deserve company.
>
> If anything in these pages reached you — if you felt seen, or steadied, or pointed in a direction you didn't have before — come find the rest of the work. It's all written for the same reader. It's all written for you.
>
> Keep going. The world needs people who can build things, and it needs more of them than ever.
>
> — Elkanah

**Author bio (back matter):**
> Elkanah Donkor is a developer who writes for the next ones coming up — the way he wishes someone had written for him.

---

*WRITE.md v1.0 — locked specification.*
*Edits to this file require explicit author approval.*
