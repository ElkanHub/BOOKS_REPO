// build.js — assembles all chapter markdown files into a single .docx manuscript
// formatted for trade-paperback non-fiction (6"×9", serif body, justified, page numbers).

const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel,
  AlignmentType, PageBreak, Header, Footer, PageNumber,
  LevelFormat, convertInchesToTwip, LineRuleType,
  TabStopType, TabStopPosition,
} = require('docx');

// ───────────────────── Constants ─────────────────────

const ROOT = path.resolve(__dirname, '..');
const CHAPTERS_DIR = path.join(ROOT, 'chapters');
const OUTPUT = path.join(ROOT, 'We Were Never Really Coding.docx');

const FONT_BODY = 'Garamond';
const FONT_HEAD = 'Garamond';

// 6"×9" trim with comfortable margins for paperback
const PAGE = {
  width: convertInchesToTwip(6),
  height: convertInchesToTwip(9),
  margins: {
    top: convertInchesToTwip(0.75),
    bottom: convertInchesToTwip(0.75),
    left: convertInchesToTwip(0.75),
    right: convertInchesToTwip(0.75),
    header: convertInchesToTwip(0.4),
    footer: convertInchesToTwip(0.4),
  },
};

const BOOK_TITLE = 'We Were Never Really Coding';
const BOOK_SUBTITLE = 'From Loops to Language Models — Twenty-Five Years That Rewrote What It Means to Be a Programmer';
const AUTHOR = 'Elkanah Donkor';

// ───────────────────── Chapter manifest ─────────────────────

// Order matches the manuscript spine. Each entry: filename + part it belongs to.
const MANIFEST = [
  { file: 'chapter-00-introduction.md',          part: null,         label: 'Introduction',  chapter: false },
  { file: 'chapter-01-overwhelm.md',             part: 'PART ONE',   label: 'Chapter 1',     chapter: true  },
  { file: 'chapter-02-what-coding-means.md',     part: null,         label: 'Chapter 2',     chapter: true  },
  { file: 'chapter-03-stack-you-cant-see.md',    part: null,         label: 'Chapter 3',     chapter: true  },
  { file: 'chapter-04-tutorials-broken.md',      part: null,         label: 'Chapter 4',     chapter: true  },
  { file: 'chapter-05-before-frameworks.md',     part: 'PART TWO',   label: 'Chapter 5',     chapter: true  },
  { file: 'chapter-06-framework-era.md',         part: null,         label: 'Chapter 6',     chapter: true  },
  { file: 'chapter-07-cloud-black-box.md',       part: null,         label: 'Chapter 7',     chapter: true  },
  { file: 'chapter-08-ai-end-keystroke.md',      part: null,         label: 'Chapter 8',     chapter: true  },
  { file: 'chapter-09-layer-below.md',           part: 'PART THREE', label: 'Chapter 9',     chapter: true  },
  { file: 'chapter-10-build-dont-study.md',      part: null,         label: 'Chapter 10',    chapter: true  },
  { file: 'chapter-11-ai-leverage.md',           part: null,         label: 'Chapter 11',    chapter: true  },
  { file: 'chapter-12-career-2030.md',           part: null,         label: 'Chapter 12',    chapter: true  },
  { file: 'chapter-99-closing.md',               part: null,         label: 'Closing Note',  chapter: false },
];

const PART_SUBTITLES = {
  'PART ONE':   'Diagnosis',
  'PART TWO':   'The Story',
  'PART THREE': 'The Way Forward',
};

// ───────────────────── Markdown parsing ─────────────────────

function loadChapter(file) {
  const raw = fs.readFileSync(path.join(CHAPTERS_DIR, file), 'utf8');
  // Strip the chapter handoff report and everything after it.
  const cutIdx = raw.indexOf('## CHAPTER HANDOFF REPORT');
  const body = (cutIdx >= 0) ? raw.slice(0, cutIdx) : raw;
  // Strip HTML comments (e.g. <!-- SIGNATURE LINE -->).
  return body.replace(/<!--[\s\S]*?-->/g, '').trim();
}

// Split a chapter's markdown into blocks: {type: 'h1'|'h2'|'hr'|'p', text}.
function blockize(md) {
  const lines = md.split(/\r?\n/);
  const blocks = [];
  let buf = [];
  const flushPara = () => {
    if (buf.length) {
      blocks.push({ type: 'p', text: buf.join(' ').trim() });
      buf = [];
    }
  };
  for (const rawLine of lines) {
    const line = rawLine.trimEnd();
    if (line === '') { flushPara(); continue; }
    if (line.startsWith('# ')) {
      flushPara();
      blocks.push({ type: 'h1', text: line.slice(2).trim() });
      continue;
    }
    if (line.startsWith('## ')) {
      flushPara();
      blocks.push({ type: 'h2', text: line.slice(3).trim() });
      continue;
    }
    if (/^---+\s*$/.test(line)) {
      flushPara();
      blocks.push({ type: 'hr' });
      continue;
    }
    buf.push(line);
  }
  flushPara();
  return blocks;
}

// Inline tokenizer: produce TextRun[] from a paragraph string.
// Supports **bold**, *italic*, `code`. Order-aware — handles nesting minimally.
function inlineRuns(text, baseStyle = {}) {
  // Tokenize by alternating regex on the strongest delimiters first.
  // We'll use a regex that matches any of the three formattings or plain text.
  const runs = [];
  const re = /(\*\*[^*]+\*\*)|(\*[^*]+\*)|(`[^`]+`)/g;
  let lastIndex = 0;
  let m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > lastIndex) {
      runs.push(new TextRun({ ...baseStyle, text: text.slice(lastIndex, m.index) }));
    }
    if (m[1]) {
      runs.push(new TextRun({ ...baseStyle, text: m[1].slice(2, -2), bold: true }));
    } else if (m[2]) {
      runs.push(new TextRun({ ...baseStyle, text: m[2].slice(1, -1), italics: true }));
    } else if (m[3]) {
      runs.push(new TextRun({ ...baseStyle, text: m[3].slice(1, -1), font: 'Consolas' }));
    }
    lastIndex = re.lastIndex;
  }
  if (lastIndex < text.length) {
    runs.push(new TextRun({ ...baseStyle, text: text.slice(lastIndex) }));
  }
  if (runs.length === 0) {
    runs.push(new TextRun({ ...baseStyle, text: '' }));
  }
  return runs;
}

// Body paragraph with first-line indent and justified alignment.
// We'll suppress the indent on the first paragraph of a section using the `firstOfSection` flag.
function bodyParagraph(text, { firstOfSection = false } = {}) {
  return new Paragraph({
    alignment: AlignmentType.JUSTIFIED,
    spacing: { line: 320, lineRule: LineRuleType.AUTO, before: 0, after: 0 },
    indent: firstOfSection ? { firstLine: 0 } : { firstLine: convertInchesToTwip(0.25) },
    children: inlineRuns(text, { font: FONT_BODY, size: 22 }),  // 11pt
  });
}

// Section subhead (## within a chapter): centered, bold, small caps feel.
function sectionHead(text) {
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 360, after: 240 },
    children: [new TextRun({
      text: text,
      bold: true,
      font: FONT_HEAD,
      size: 24,  // 12pt
    })],
  });
}

// Scene-break ornament for `---` in source.
function ornament() {
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 240, after: 240 },
    children: [new TextRun({
      text: '✦ ✦ ✦',
      font: FONT_BODY,
      size: 22,
    })],
  });
}

// Page break helper as its own paragraph.
function pageBreak() {
  return new Paragraph({ children: [new PageBreak()] });
}

// ───────────────────── Front matter ─────────────────────

function blank(lines = 1, size = 22) {
  return Array.from({ length: lines }, () => new Paragraph({
    children: [new TextRun({ text: '', font: FONT_BODY, size })],
  }));
}

function titlePage() {
  return [
    ...blank(8),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [new TextRun({
        text: BOOK_TITLE,
        bold: true,
        font: FONT_HEAD,
        size: 56,  // 28pt
      })],
    }),
    ...blank(2),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { line: 280, lineRule: LineRuleType.AUTO },
      children: [new TextRun({
        text: BOOK_SUBTITLE,
        italics: true,
        font: FONT_HEAD,
        size: 24,  // 12pt
      })],
    }),
    ...blank(8),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [new TextRun({
        text: AUTHOR,
        font: FONT_HEAD,
        size: 32,  // 16pt
      })],
    }),
    pageBreak(),
  ];
}

function copyrightPage() {
  const items = [
    `Copyright © 2026 ${AUTHOR}.`,
    'All rights reserved.',
    '',
    'No part of this book may be reproduced, distributed, or transmitted in any form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior written permission of the author, except in the case of brief quotations embodied in critical reviews and certain other noncommercial uses permitted by copyright law.',
    '',
    'This book is a work of professional reflection. Names, situations, and composite scenes used as illustrations are intended to be representative of common developer experiences and do not refer to specific individuals or events.',
    '',
    `First edition, 2026.`,
    '',
    'Set in Garamond.',
  ];
  const paras = [
    ...blank(14),
    ...items.map(t => new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { line: 280, lineRule: LineRuleType.AUTO, after: 80 },
      children: [new TextRun({ text: t, font: FONT_BODY, size: 18 })],
    })),
    pageBreak(),
  ];
  return paras;
}

function dedicationPage() {
  return [
    ...blank(12),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [new TextRun({
        text: 'For my future self in Japan —',
        italics: true,
        font: FONT_BODY,
        size: 24,
      })],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 120 },
      children: [new TextRun({
        text: 'the goal that means more than just a trip.',
        italics: true,
        font: FONT_BODY,
        size: 24,
      })],
    }),
    pageBreak(),
  ];
}

function epigraphPage() {
  return [
    ...blank(14),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [new TextRun({
        text: 'Programming didn’t get harder.',
        italics: true,
        font: FONT_BODY,
        size: 26,
      })],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 80 },
      children: [new TextRun({
        text: 'It got deeper.',
        italics: true,
        font: FONT_BODY,
        size: 26,
      })],
    }),
    pageBreak(),
  ];
}

// Manual TOC with right-aligned page-number leaders.
// Page numbers are placeholders — author should regenerate in Word once final pagination is set.
function tableOfContents() {
  const tocEntries = [
    { label: 'Introduction — The Map I Wish I’d Been Given',                    indent: false },
    { label: 'PART ONE — Diagnosis',                                            indent: false, header: true },
    { label: '1. The Overwhelm Is Not Your Fault',                                   indent: true },
    { label: '2. What “Coding” Actually Means Now',                        indent: true },
    { label: '3. The Stack You Can’t See',                                      indent: true },
    { label: '4. Why Tutorials Stopped Working',                                     indent: true },
    { label: 'PART TWO — The Story',                                            indent: false, header: true },
    { label: '5. The World Before Frameworks (2000–2008)',                      indent: true },
    { label: '6. The Framework Era (2008–2018)',                                indent: true },
    { label: '7. The Cloud and the Black Box (2015–2022)',                      indent: true },
    { label: '8. AI and the End of the Keystroke (2022–now)',                   indent: true },
    { label: 'PART THREE — The Way Forward',                                    indent: false, header: true },
    { label: '9. Learn the Layer Below',                                             indent: true },
    { label: '10. Build, Don’t Study',                                          indent: true },
    { label: '11. Use AI Like a Senior Engineer Uses a Junior',                      indent: true },
    { label: '12. The Career You’re Actually Building',                         indent: true },
    { label: 'Closing Note — Where to Next',                                         indent: false },
    { label: 'About the Author',                                                     indent: false },
  ];

  const heading = new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 480 },
    children: [new TextRun({ text: 'Contents', bold: true, font: FONT_HEAD, size: 32 })],
  });

  const rows = tocEntries.map(e => new Paragraph({
    spacing: { line: 360, lineRule: LineRuleType.AUTO, after: e.header ? 120 : 60, before: e.header ? 200 : 0 },
    indent: e.indent ? { left: convertInchesToTwip(0.3) } : undefined,
    children: [
      new TextRun({
        text: e.label,
        font: FONT_BODY,
        size: 22,
        bold: !!e.header,
        italics: !!e.header,
      }),
    ],
  }));

  return [...blank(2), heading, ...rows, pageBreak()];
}

// ───────────────────── Body assembly ─────────────────────

// Render a part-divider page: huge "PART ONE" and a subtitle.
function partDivider(partLabel) {
  const subtitle = PART_SUBTITLES[partLabel] || '';
  return [
    ...blank(10),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [new TextRun({
        text: partLabel,
        bold: true,
        font: FONT_HEAD,
        size: 48,
        characterSpacing: 80,
      })],
    }),
    ...blank(1),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [new TextRun({
        text: subtitle,
        italics: true,
        font: FONT_HEAD,
        size: 28,
      })],
    }),
    pageBreak(),
  ];
}

// Render a chapter open: "Chapter N" small label + chapter title big.
// `h1Text` is the original H1 from the markdown like "Chapter 5 — The World Before Frameworks (2000–2008)".
// We split on " — " to produce the label and the title.
function chapterOpen(h1Text) {
  const sepIndex = h1Text.indexOf(' — ');  // em dash
  const sepIndexAlt = h1Text.indexOf(' - ');
  let label = '';
  let title = h1Text;
  if (sepIndex >= 0) {
    label = h1Text.slice(0, sepIndex).trim();
    title = h1Text.slice(sepIndex + 3).trim();
  } else if (sepIndexAlt >= 0) {
    label = h1Text.slice(0, sepIndexAlt).trim();
    title = h1Text.slice(sepIndexAlt + 3).trim();
  }
  const out = [...blank(4)];
  if (label) {
    out.push(new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 200 },
      children: [new TextRun({
        text: label.toUpperCase(),
        font: FONT_HEAD,
        size: 22,
        characterSpacing: 60,
      })],
    }));
  }
  out.push(new Paragraph({
    heading: HeadingLevel.HEADING_1,
    alignment: AlignmentType.CENTER,
    spacing: { after: 480 },
    children: [new TextRun({
      text: title,
      bold: true,
      font: FONT_HEAD,
      size: 36,
    })],
  }));
  return out;
}

// Render a chapter (excluding the H1 which we already rendered via chapterOpen).
function renderChapterBody(blocks) {
  const out = [];
  let firstOfSection = true;
  let sawAnySection = false;
  for (const b of blocks) {
    if (b.type === 'h1') continue; // already rendered
    if (b.type === 'h2') {
      out.push(sectionHead(b.text));
      firstOfSection = true;
      sawAnySection = true;
      continue;
    }
    if (b.type === 'hr') {
      // If we haven't yet hit any H2, the --- after the lead-in is a structural break;
      // suppress the ornament in that case to avoid clutter near the chapter open.
      if (sawAnySection) {
        out.push(ornament());
        firstOfSection = true;
      }
      continue;
    }
    if (b.type === 'p') {
      out.push(bodyParagraph(b.text, { firstOfSection }));
      firstOfSection = false;
      continue;
    }
  }
  return out;
}

// About the Author page — back matter.
function aboutTheAuthor() {
  return [
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 720, after: 480 },
      children: [new TextRun({ text: 'About the Author', bold: true, font: FONT_HEAD, size: 32 })],
    }),
    new Paragraph({
      alignment: AlignmentType.JUSTIFIED,
      spacing: { line: 320, lineRule: LineRuleType.AUTO, after: 200 },
      children: [new TextRun({
        text: 'Elkanah Donkor is a developer who writes for the next ones coming up — the way he wishes someone had written for him.',
        font: FONT_BODY,
        size: 22,
      })],
    }),
    new Paragraph({
      alignment: AlignmentType.JUSTIFIED,
      spacing: { line: 320, lineRule: LineRuleType.AUTO, after: 200 },
      children: [new TextRun({
        text: '[ AUTHOR BIO — additional paragraphs to be added by the author. Suggested content: how you got into programming, the work you do now, what you write about, and where readers can follow you. ]',
        italics: true,
        font: FONT_BODY,
        size: 22,
      })],
    }),
    pageBreak(),
  ];
}

// Acknowledgements placeholder.
function acknowledgements() {
  return [
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 720, after: 480 },
      children: [new TextRun({ text: 'Acknowledgements', bold: true, font: FONT_HEAD, size: 32 })],
    }),
    new Paragraph({
      alignment: AlignmentType.JUSTIFIED,
      spacing: { line: 320, lineRule: LineRuleType.AUTO },
      children: [new TextRun({
        text: '[ ACKNOWLEDGEMENTS — to be drafted by the author. Typical sections: people who read early drafts, mentors, family, and anyone whose work shaped the thinking in these pages. ]',
        italics: true,
        font: FONT_BODY,
        size: 22,
      })],
    }),
  ];
}

// ───────────────────── Document assembly ─────────────────────

function buildBodyChildren() {
  const children = [];

  // Front matter (no page numbers; we'll handle that via section setup)
  children.push(...titlePage());
  children.push(...copyrightPage());
  children.push(...dedicationPage());
  children.push(...epigraphPage());
  children.push(...tableOfContents());

  // Body
  for (const item of MANIFEST) {
    if (item.part) {
      children.push(...partDivider(item.part));
    }
    const md = loadChapter(item.file);
    const blocks = blockize(md);
    const h1 = blocks.find(b => b.type === 'h1');
    if (h1) {
      children.push(...chapterOpen(h1.text));
    }
    children.push(...renderChapterBody(blocks));
    children.push(pageBreak());
  }

  // Back matter
  children.push(...aboutTheAuthor());
  children.push(...acknowledgements());

  return children;
}

// ───────────────────── Headers / footers ─────────────────────

const headerPara = new Paragraph({
  alignment: AlignmentType.CENTER,
  children: [new TextRun({
    text: BOOK_TITLE,
    italics: true,
    font: FONT_HEAD,
    size: 18,
  })],
});

const footerPara = new Paragraph({
  alignment: AlignmentType.CENTER,
  children: [new TextRun({
    children: [PageNumber.CURRENT],
    font: FONT_HEAD,
    size: 18,
  })],
});

// ───────────────────── Build & save ─────────────────────

const doc = new Document({
  creator: AUTHOR,
  title: BOOK_TITLE,
  description: BOOK_SUBTITLE,
  styles: {
    default: {
      document: {
        run: { font: FONT_BODY, size: 22 },
        paragraph: { spacing: { line: 320, lineRule: LineRuleType.AUTO } },
      },
    },
  },
  sections: [{
    properties: {
      page: {
        size: { width: PAGE.width, height: PAGE.height },
        margin: PAGE.margins,
      },
    },
    headers: { default: new Header({ children: [headerPara] }) },
    footers: { default: new Footer({ children: [footerPara] }) },
    children: buildBodyChildren(),
  }],
});

(async () => {
  const buf = await Packer.toBuffer(doc);
  fs.writeFileSync(OUTPUT, buf);
  const stats = fs.statSync(OUTPUT);
  console.log(`Wrote ${OUTPUT}`);
  console.log(`Size: ${(stats.size / 1024).toFixed(1)} KB`);
})();
