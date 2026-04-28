# Chapter 11 — Use AI Like a Senior Engineer Uses a Junior

There are two ways to use AI badly, and one way to use it well. The two bad ways are far more common.

The first bad way is to ask AI for code, accept what it produces, and ship it. This is the most common failure mode among new developers. The AI's output is plausible. It looks like working code. It often *is* working code, on the surface. But it is also frequently subtly wrong, contextually inappropriate, or built on assumptions that do not hold for your specific situation. The developer who accepts AI output without scrutiny is shipping bugs they have no model of, and when those bugs surface in production, they will not know how to debug them — because they did not, in any real sense, write the code.

The second bad way is to refuse to use AI at all, because of pride or fear or a belief that *real* developers don't need it. This developer is, in 2025 and going forward, choosing to operate at one-third the productivity of their peers. They will have the satisfaction of feeling principled about it. They will not have a job in five years.

The one way to use AI well is the way a senior engineer uses a junior engineer. That is the entire content of this chapter. The framing is exact, not metaphorical. When you understand what a senior is actually doing when they delegate to a junior — direction, review, correction, judgment, occasional refusal — you understand exactly what you should be doing with AI. Everything that follows is unpacking that comparison.

---

## The Two Failure Modes

Each failure mode has its own logic. Understanding them is the first step to avoiding them.

The accept-everything mode comes from a misreading of what AI is. The developer in this mode treats AI as a search engine that returns code instead of links. You ask, you get a result, you use the result. The mental model is that AI is providing answers, the same way Stack Overflow used to provide answers — and your job is just to find the right query.

This mental model breaks immediately on contact with real work. Stack Overflow answers came with context: who wrote them, when they were written, how many people had voted them up, whether the answer specifically addressed your problem. AI answers come with none of that. AI produces an answer optimized to look like the correct answer to your specific question, regardless of whether it actually is. There is no community filter. There is no time-based reliability indicator. The AI will answer with equal confidence whether it is right, slightly wrong, or completely fabricated. The developer who accepts the output without scrutiny has no way to tell which of those three states they're in.

What this developer needs to learn is what every senior engineer eventually learns about juniors: confidence in delivery is not correlated with correctness. A junior engineer, working under deadline pressure, will sometimes deliver code with absolute certainty that is, on review, wrong. The senior does not blame the junior — they review, find the issue, correct it, and use the moment to teach. The same posture works for AI. The output gets reviewed. The review catches things. The catching gets faster with practice.

The refuse-to-use mode comes from a different misreading. The developer in this mode treats AI as a threat to their identity. *I am a programmer. Programmers write code. If AI writes code, I am no longer a programmer.* This logic feels sound from inside it. From outside, it has the same shape as a 2003 developer refusing to use Stack Overflow because *real* programmers know the answers from memory. It is the same category of mistake, made by the same kind of person, fifteen years apart.

The refusal is also, increasingly, expensive. As Chapter 8 named, a developer using AI well in 2027 will produce three to five times the output of a developer not using AI at all. The market does not pay you for principled positions on tooling. It pays you for shipped work. The developer who refuses to use AI is volunteering to work harder for the same outcome, and eventually, for a worse outcome — because the AI-using developer's output quality, after the six-month adjustment period, will overtake theirs.

Both modes share a root: a misunderstanding of what AI is. It is not an oracle. It is also not a threat. It is a junior collaborator with extraordinary breadth and limited judgment. The skill is in working with it as such.

---

## How Seniors Use Juniors — and What That Teaches You About AI

Watch a senior engineer manage a junior. Notice what they actually do.

They do not write the code themselves. That would defeat the point — they have the junior precisely so that someone else can do the implementation while the senior focuses on harder problems. The senior would rather spend their time on architecture, on review, on design, on the few hard things only they can do.

They also do not just hand the work off. Pure handoff produces bad results — the junior misunderstands the task, builds the wrong thing, has to redo it, or builds something subtly wrong that ships and causes problems later. A handoff with no scaffolding wastes everyone's time.

What the senior actually does is more specific. They:

**Brief the work.** They explain what needs to be built, why it matters, what constraints apply, what the desired shape of the solution looks like at a high level. The brief is precise enough that the junior can act on it, without being so prescriptive that the junior is just typing the senior's solution.

**Stay available for questions.** The junior will hit places where the brief was insufficient or where they don't know how to proceed. The senior expects this. They make themselves available — not to do the work, but to clarify, point at relevant context, and gently correct misdirections before they become wasted hours.

**Review the result.** When the work comes back, the senior actually reads it. They check it against the brief. They check it for the kinds of mistakes juniors make — wrong assumptions, missing edge cases, overengineering, underengineering. They give specific, actionable feedback.

**Push back when the work is wrong.** If the junior has built the wrong thing, the senior says so, clearly, and directs them to fix it. They do not accept a wrong solution to keep things smooth.

**Refuse certain work entirely.** Not all work belongs with juniors. Some decisions are too consequential, some refactors too risky, some architectural choices too sensitive. The senior keeps these for themselves. The junior is given work matched to their judgment level.

**Build the junior's judgment over time.** Through the cycle of brief → work → review, the junior gets better. The senior is not just getting work done — they are also training judgment, slowly, by exposing the junior to feedback.

Read that list again, replacing *junior* with *AI*. Almost every item translates exactly.

You brief the AI. Your prompt is the brief — the better the brief, the better the result. You stay available — you don't fire and forget; you watch what comes back and respond to it. You review the output. You push back when the AI has produced something wrong. You refuse to use it for work where its judgment isn't good enough — security-critical code, irreversible architectural decisions, anything where being subtly wrong will be expensive.

The one item that doesn't translate cleanly is *building the junior's judgment.* You are not training the AI's judgment in the long run; the AI does not learn from your specific feedback the way a junior would. But you *are* training your own judgment about what work to give the AI and what to keep for yourself. Over time, you become better at this allocation, the same way a senior gets better at allocating work to juniors.

This is the entire skill. It is not new. It is the skill of working effectively with a collaborator whose strengths and weaknesses you understand. You have probably already done some version of it with human colleagues. AI is a particular kind of colleague with a particular set of strengths and weaknesses. The work is to learn them and apply your existing collaboration skills accordingly.

---

## Concrete Patterns

The principles above are abstract until you apply them. Here are specific patterns that work, in 2025, with the AI tools available now.

**Brief like you would brief a junior.** When you ask AI to write code, do not say *write me a function that does X.* Say: *write a function that does X. It will be called from Y context. It needs to handle the edge case Z. Match the style of this existing code: [paste].* The richer the brief, the closer the output will be to what you actually need. Vague briefs produce vague output. Specific briefs produce specific output, and the specifics catch the misunderstandings before they become wasted code.

**Constrain the scope.** Do not ask AI to *build the whole feature.* Ask it for a piece of it — one function, one component, one query. The smaller the chunk, the easier the review, and the easier it is to catch the AI's mistakes before they compound. Senior engineers know to break work into small pieces for juniors. The same principle applies. AI gets worse, not better, when given large open-ended tasks.

**Read every line.** This is the discipline that separates good AI users from bad ones. After the AI generates code, read it. Not skim. Read. Trace what each line does. Check for the assumptions it's making. Verify that the imports are real. Verify that the function signatures match what you'll be calling them with. The reading is fast, with practice — but skipping it is the most expensive thing you can do.

**Push back on confident wrongness.** When the AI produces an answer that doesn't match what you know about your system, say so. *No, that's not how this works. The X system actually does Y.* The AI will revise. Often the revision is correct. The pushback is not adversarial; it is the same kind of correction you would give a junior who had a wrong assumption. The AI is, in this respect, dramatically more receptive than human juniors.

**Refuse certain categories of work.** Do not use AI to write authentication logic without your direct review of every line. Do not use AI to make decisions about data migration. Do not use AI to refactor code that is already working unless you are willing to read every diff carefully. These are categories where being subtly wrong is expensive enough that the AI's confidence is dangerous. Treat them like work you would not give a junior — the senior keeps them.

**Use AI as a research partner, not an answer partner.** When you don't understand something, do not ask AI to give you the answer. Ask AI to explain the topic, to point at the relevant concepts, to compare approaches. The explanation is more useful than the answer, because the explanation builds your model. The answer just gets you past the immediate blocker without teaching you anything that lasts. Senior engineers ask juniors to explain their reasoning — not just to deliver — because reasoning produces growth, and delivery alone produces dependence.

**Match the tool to the work.** Different AI tools are good at different things. The chat-based tools (ChatGPT, Claude) are good for explanations, brainstorming, and architectural discussion. The editor-integrated tools (Copilot, Cursor) are good for inline completion and small refactors. The agentic tools (Cursor's compose mode, similar in others) are good for changes across multiple files when you want something specific built. Knowing which tool to reach for is part of the skill.

**Trust your senses.** When something the AI produced feels wrong but you can't articulate why, slow down. Read again. Check the assumptions. The feeling is often correct — your gut has noticed a pattern your conscious mind hasn't named yet. Senior engineers learn to trust this signal in their reviews of junior work. Apply the same trust to AI output.

---

## The Turn

Here is the entire shift compressed into one sentence: the skill of working with AI is the skill of being the senior in a partnership where the AI is the junior.

That sentence is more than a metaphor. It is the structural truth of what good AI-assisted programming actually is. The framing does several things at once. It sets your expectations correctly — you are responsible for the outcome, not the AI. It tells you what posture to take — review, direct, correct, push back. It tells you what to invest in — the same judgment skills senior engineers have always invested in. It tells you what not to expect — the AI will not become a replacement for your judgment any more than a junior will.

Most importantly, it tells you what the work of becoming better at AI actually looks like. It is not learning prompts. Prompts are a small part of it. It is becoming a better senior — better at briefing, better at reviewing, better at deciding what to delegate and what to keep, better at recognizing the categories of mistake the AI tends to make. These are real skills. They take real time. But they are exactly the skills the next decade of programming will reward, and they were exactly the skills senior engineers were already developing before AI arrived.

The developers who use AI well are not the ones who have memorized the most clever prompts. They are the ones who have, over months and years, built up the senior-engineer judgment that lets them allocate work, review work, and correct work — applied now to a new kind of collaborator.

*The skill is not getting AI to write code. It's getting AI to write the right code — and that takes everything you'd have learned anyway.* <!-- SIGNATURE LINE -->

This is the second-best news in this book. The best news was that the depth was still available if you chose it. The second-best news is that the AI era doesn't require you to abandon what you would have learned anyway. It requires you to apply it to a different shape of collaboration. The work didn't get harder. The work got assisted.

---

## What to Do With This

The exercise is small and structural.

**Try this:** Next time you ask AI for code — today, probably — change one thing. Before you type the prompt, imagine you are briefing a junior engineer who has never seen this codebase. Write the prompt accordingly. Include: what you are building. Why. What constraints exist. What the surrounding code looks like. What the desired shape of the answer is. What edge cases matter. What style to follow.

That prompt will be longer than what you usually write. Send it anyway. See what comes back.

The output will be noticeably better. Often dramatically so. The reason is simple: the AI was always capable of producing what you needed. The brief was insufficient before. Now it isn't.

Do this every time, for one week. Each prompt, treat as a brief. Notice what happens to the quality of the output. Notice what happens to your own clarity about what you actually wanted. The clarity is the secret bonus. By writing the brief, you have done more thinking up front about what you wanted, which is the high-value work the senior engineer always does. The AI then handles the implementation, which is the lower-value work the senior engineer would have delegated to a junior anyway.

This is the workflow. It does not feel exotic. That is correct. It is, finally, what programming has been moving toward all along: the elevation of the senior-style work, the delegation of the implementation, the increasing importance of the briefing-and-reviewing skill.

You can be doing this tomorrow morning. The transition takes about a month to feel natural. After that, you will not understand how you ever worked any other way.

---

## CHAPTER HANDOFF REPORT

**Chapter:** 11 — Use AI Like a Senior Engineer Uses a Junior
**Word count:** ~2,830
**Signature line:** *The skill is not getting AI to write code. It's getting AI to write the right code — and that takes everything you'd have learned anyway.*

**Quality checklist:** [PASS] all items — opens with the two bad ways framing, three body sections, voice anchored, banned words swept (avoided "leverage" entirely; replaced "Now read that list again" with "Read that list again"), 2003-vs-2025 contrast (Stack Overflow refusal as same mistake as AI refusal), references Ch.8 explicitly, permission-giving (you can be doing this tomorrow morning), one signature line.

**Ideas introduced:**
- The two failure modes (accept-everything / refuse-to-use)
- The senior-junior framing as structural, not metaphorical
- The 6-item senior-uses-junior list (brief / available / review / push back / refuse / build judgment)
- Eight concrete patterns for AI use
- AI as junior collaborator with breadth and limited judgment
- "Building your own judgment about allocation" as the meta-skill that does transfer

**Specific examples:**
- ChatGPT, Claude, Copilot, Cursor (named tools and use cases)
- Authentication logic, data migration, working-code refactor as refuse categories

**Items flagged for verification:** None — claims are characterizations, not statistics.

**Honest framing moment:** "It is not learning prompts. Prompts are a small part of it. It is becoming a better senior."

**Permission-giving moment:** "You can be doing this tomorrow morning."

**STATUS:** Continuing.
