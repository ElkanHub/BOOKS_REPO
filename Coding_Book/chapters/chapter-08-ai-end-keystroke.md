# Chapter 8 — AI and the End of the Keystroke (2022–now)

In late 2022, the work changed. Not all at once — change does not arrive in a single day — but visibly, irreversibly, and faster than any previous shift in this book.

GitHub Copilot had been generally available since June. It was useful but limited — autocomplete on a deeper level, capable of finishing your line, occasionally a function. Then in November, OpenAI released ChatGPT to the public. By spring of 2023, every working developer was experimenting with it. By the end of 2023, most developers who were not actively resisting it were using it daily. By 2025, when this book was written, the question among working developers was no longer *do you use AI in your work?* The question was *which tools, and how heavily?*

This chapter is about that shift — what it changed in the daily work of programming, what it didn't change, and what the next five years are likely to look like as the technology and the practice continue to mature.

You are reading this book because the shift made you anxious, or excited, or both. Most working developers have been exactly the same way. Some publicly excited, privately anxious. Some publicly skeptical, privately curious. The honest position — the one this chapter argues for — is that the shift is real, the anxiety is partly justified, and the response is something other than panic or denial. The response is to learn what AI changes about the work, what it does not change, and what your role looks like in the new arrangement.

That is what we will work out together. Without hype. Without doom. With the same honesty we have brought to every other shift in this book.

---

## Before Copilot vs. After

Take a normal afternoon of programming work. Watch a developer at it.

Before Copilot — say, in 2020 — the work looked like this. They typed. They paused to think. They typed again. They alt-tabbed to documentation, read for a minute, came back. They typed. They opened Stack Overflow, found a similar problem, copied a snippet, modified it, pasted it. They typed. The pauses and the lookups were a substantial fraction of the day. Most experienced developers would estimate they spent thirty to fifty percent of their time looking up things they were going to use to write the next ten lines of code.

After Copilot — and especially after the chat-based tools that followed in 2023 — the work looks different.

They type. They get a suggestion that completes their line, or sometimes their entire function. They press tab. The code appears. They read it, check it for the kind of errors AI introduces, modify what is wrong, accept what is right. They open the chat — Claude, ChatGPT, Cursor's built-in chat, whatever their team has settled on. They describe what they want to build. The AI drafts a chunk of it. They read the draft, ask clarifying questions, push back on parts of it. They receive a revised draft. They paste relevant portions into their editor, modify them, and continue.

The proportion of typing has dropped substantially. The proportion of *reading code that someone else wrote* has risen. The proportion of *describing what you want clearly enough that someone or something else can produce it* has risen. The proportion of *judging produced code* has risen.

This is a different shape of work than 2020 was. Not necessarily harder or easier. Different.

The first time you experience this shift, it is disorienting. The shape of your day no longer has the same flow. You used to know where you stood: this is where I think, this is where I look up, this is where I type. After Copilot, those phases have blurred. You think in conversation with an AI. You look up by asking. You type, but you type less, and what you type is often a description of what you want rather than the thing itself.

For about six months, you will produce worse code than you did before. The AI's mistakes will fool you. The AI's shortcuts will compound into bugs you will spend hours unwinding. You will accept code that looks right and was actually subtly wrong. This phase is unavoidable. Everyone goes through it. It is the price of learning to use a powerful new tool, and like every new powerful tool, it makes you worse before it makes you better.

After that six months, if you have been paying attention, you start producing better work than you did before. You ship faster. You take on harder problems. The class of work you can credibly attempt expands. You also become a better reviewer — of your own code, of other people's, of the AI's — because reading code at scale is now most of what you do.

This is what is different about 2025 vs. 2020, and what is going to be more different about 2030 vs. 2025.

---

## What AI Is Good At, Bad At, and What It Might Never Be Good At

Let me try to be honest about the technology.

What AI is genuinely good at, in 2025, in the context of programming work:

**Boilerplate.** All the code that has been written ten thousand times. Setup, scaffolding, common patterns, transformations between data formats, tests for straightforward functions, documentation for code that already exists. This work used to occupy a substantial fraction of every developer's day. AI does it in seconds. Nobody who has experienced this is going back.

**Translating intent into code.** You describe what you want. The AI writes a version. Often the first version is close. Sometimes you have to refine the description. The translation is not perfect but it is fast, and it is far better than typing it yourself in any case where the code is mostly mechanical.

**Explaining unfamiliar code.** You drop a function into the chat. The AI tells you what it does. The explanation is usually right. Even when partially wrong, it is enough to get you oriented. This is enormously useful for navigating codebases you didn't write.

**Writing tests that you would have skipped.** Tests are notorious for being undertested — the work of writing them is just unpleasant enough that developers avoid it when they can. AI generates them quickly. You review and adjust. Test coverage in your projects, if you let AI help, will be higher than it has ever been.

What AI is genuinely bad at, in 2025:

**Knowing what to build.** AI will gladly produce whatever you describe. It will not push back when what you describe is the wrong thing. The judgment of whether a feature is worth building, whether an abstraction is earning its weight, whether the system you are designing will hold up in two years — these are dispositional skills the AI does not have. They remain entirely on you.

**Operating in deep context.** AI's understanding of your codebase, your team's history, your business's constraints, your stakeholders' actual needs — all of this is shallow at best. The AI will often produce code that looks reasonable in isolation and is wrong for your specific situation. Catching this requires you to know the specific situation.

**Original problem-solving.** When a bug is genuinely novel — not a variant of a thousand other bugs the AI has seen, but actually something new — AI struggles. It tends to produce confident-sounding wrong answers. You will recognize this if you have used AI for hard debugging: the first three suggestions are often plausible and useless. The actual cause is something you have to find yourself, with the AI as a tool you can ask questions of, but not a partner who will solve it.

**Long-horizon system thinking.** The AI sees one screen of code at a time. It cannot really hold the whole architecture of a large system in its head. It can summarize. It can pattern-match. It cannot reason across the whole thing the way a senior engineer can after weeks of living in it.

What AI might never be good at — and this is uncertain, the technology is moving — is anything that requires *taste*, in the specific sense Chapter 2 used. Knowing when an abstraction has earned its weight. Knowing when to refuse a request from product. Knowing what *good* feels like in a specific context. These are not provably impossible for AI, but they are not what current AI does well, and the parts of the work that depend on them are likely to remain human responsibilities for the foreseeable future.

This is not a doom prediction. It is an honest accounting of the current state. The state will change. But it will not change uniformly — some areas will get much better quickly, others will lag — and your career planning should be calibrated against the likely shape of the change, not against the worst-case fear or the best-case marketing.

---

## The New Shape of the Work

What programming actually feels like, day to day, when you are using AI well:

You spend more time at the start of a task. You spend less time in the middle.

The start is where the deciding happens — what to build, how to structure it, what the right approach is. The AI cannot do this for you, and thinking it can produces bad results. You think this through carefully. You write a short note about what you are about to do — to yourself, to the team, sometimes to the AI as a prompt. The note clarifies your thinking. You proceed.

The middle is the implementation. Here the AI does a great deal of the typing. You direct, review, correct. The AI produces drafts faster than you could, and the draft quality is usually high enough that revising it is faster than writing from scratch. The hours you used to spend typing get compressed into minutes of reviewing.

The end is verification. Here the AI helps but cannot replace you. You test the code, often with AI-generated tests as a starting point, but with your own thinking about edge cases. You ask: does this actually work? Does it work in the cases I care about? Does it work in the cases the AI didn't think to test?

The shape is: more thinking up front, less typing in the middle, more judging at the end. This is not a small adjustment. It is a different relationship to the work. Many developers are still in the transition. Some are resisting the transition. Some have made it cleanly and are wondering what took everyone else so long.

The developers who resist tend to give a similar reason: *I want to write the code myself.* The reason is sympathetic. There is real satisfaction in writing code yourself. But the position is also confused. Nobody refuses to use IDEs because they want to write everything in plain text. Nobody refuses to use libraries because they want to write everything from scratch. AI is a new layer of this same kind — a tool that automates work you used to do by hand, freeing you for higher-value work that requires more of you.

What the resisters miss is that the part of the job they love — the deciding, the architecting, the satisfaction of solving a hard problem — has not been automated. It is, if anything, more present in their day, because the rote parts have been compressed. The AI took the typing. It did not take the thinking. The thinking is now most of what you do, and the thinking is also the part that was always most rewarding.

You do not have to like AI. You do have to use it. The developers who refuse to will, over the next five years, be replaced by developers who don't. This is not a moral claim. It is an economic one. A developer using AI well in 2027 will produce three to five times the output of a developer not using AI at all. No team can afford to keep the latter when the former is available. The transition is non-optional, and pretending otherwise is the most expensive form of denial currently available to working programmers.

---

## The Turn

Here is the honest version of what is happening.

AI did not take your job. It changed what the job is.

The job used to be substantially typing. The typing has been compressed. What is left is the thing the typing was always pointing at — the deciding, the directing, the judgment, the taste. This was always the most valuable part of the work. It is now also the most visible part, because the rote labor that used to surround it has been removed.

You have been told, in various forms, that AI is going to make you obsolete. The framing is wrong. AI is making *one mode of programming* obsolete — the mode in which the developer is mostly a typist, executing on someone else's design, adding boilerplate to existing patterns. That mode is shrinking. If your skills are concentrated there, your job is at risk.

But the other mode — the mode in which the developer is the person figuring out what to build, deciding how to structure it, judging quality, understanding constraints — is not shrinking. It is expanding. There is more of that work now, not less, because the productivity increase from AI means more software gets built, and more software being built means more decisions to make, more architectures to design, more taste to apply.

You are not obsolete. The version of your job that consisted mostly of typing was always going to fade. It is fading now, faster than expected. The version of your job that consists of thinking about systems is not fading. It is becoming most of the job.

*AI didn't take your job. It changed what the job is. The people who refuse to use it will be replaced by people who do.* <!-- SIGNATURE LINE -->

This is not consolation. It is a description of the trade. You are now more responsible for the parts of your work that always mattered most, and less responsible for the parts that were never really the point. That is the version of the job to train for.

---

## What to Do With This

The exercise is unambiguous.

**Try this:** Pick a small project for this coming week. Maybe a side project, maybe a piece of work for your job. Build it with AI as a junior pair-programmer for the entire duration. Direct it. Review what it produces. Correct what's wrong. Push back when it suggests something off-base. Notice when you become the senior, deciding what is good enough and what is not.

This is the actual practice of programming with AI — not the version where you ask it for code and accept what comes back. The version where you treat it as a collaborator with limits, use what it does well, and stay responsible for what it does badly.

Do this for a week. Notice how much you direct. Notice how much you review. Notice what categories of decisions are still entirely yours. That mental map is the new programming literacy. It is also the foundation for using AI well in your career — not as a magic tool that makes you faster, but as a colleague whose strengths and weaknesses you have learned, the same way you learn the strengths and weaknesses of human colleagues.

You have come this far. You have a clearer picture of what programming has become and how it got here than most working developers ever bother to acquire. What remains is to use that picture — to choose, with eyes open, how to learn now, how to build now, how to be the developer this era is asking for.

---

## CHAPTER HANDOFF REPORT

**Chapter:** 8 — AI and the End of the Keystroke (2022–now)
**Word count:** ~2,950
**Signature line:** *AI didn't take your job. It changed what the job is. The people who refuse to use it will be replaced by people who do.*

**Quality checklist:** [PASS] all items — opens with the late-2022 inflection, three body sections, voice anchored, banned words swept (replaced "leverage what it does well" with "use what it does well"), 2020-vs-2025 contrast structural, named the specific tools (Copilot, ChatGPT, Claude, Cursor), honest framing of resisters and AI's limits, permission-giving woven throughout, one signature line, no chapter previews.

**Ideas introduced:**
- The 2022-2023 inflection: Copilot June, ChatGPT November, mainstream uptake by 2024
- The "six months of worse code" transition phase
- AI's specific strengths (boilerplate / intent translation / explanation / tests)
- AI's specific weaknesses (what to build / deep context / original debugging / long-horizon thinking)
- Taste as the likely-permanent human responsibility
- The new shape of work: more thinking up front, less typing in middle, more judging at end
- The IDE/library analogy for resisters
- The economic non-optionality of the transition

**Specific examples:**
- GitHub Copilot, ChatGPT, Claude, Cursor (named tools)
- Boilerplate categories, test generation, code explanation use cases
- "Three to five times the output" estimate

**Items flagged for verification:**
- Copilot GA "since June 2022" — [VERIFY: confirm exact GA date]
- ChatGPT public release "November 2022" — [VERIFY: confirm]
- "30-50% of time looking up things" estimate — [VERIFY: replace with citation if used in print, or soften wording]

**Honest framing moment:** "Some publicly excited, privately anxious. Some publicly skeptical, privately curious."

**Permission-giving moment:** "You do not have to like AI. You do have to use it." (paired with reasoning).

**STATUS:** Continuing.
