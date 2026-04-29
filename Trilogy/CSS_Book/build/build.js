// build.js — CSS book .docx assembly. See HTML_Book/build/build.js for full comments.

const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, AlignmentType, PageBreak,
  Header, Footer, PageNumber, convertInchesToTwip, LineRuleType,
} = require('docx');

const ROOT = path.resolve(__dirname, '..');
const CHAPTERS_DIR = path.join(ROOT, 'chapters');
const OUTPUT = path.join(ROOT, 'What You Need to Know Before React and AI - CSS.docx');

const FONT_BODY = 'Garamond';
const FONT_HEAD = 'Garamond';
const FONT_CODE = 'Consolas';

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

const BOOK_TITLE = 'What You Need to Know Before React and AI';
const BOOK_SUBTITLE = 'CSS';
const AUTHOR = 'Elkanah Donkor';

const MANIFEST = [
  { file: 'chapter-00-introduction.md', label: 'Introduction', chapter: false },
  { file: 'chapter-01-first-stylesheet.md', label: 'Chapter 1', chapter: true },
  { file: 'chapter-02-cascade.md', label: 'Chapter 2', chapter: true },
  { file: 'chapter-03-box-model.md', label: 'Chapter 3', chapter: true },
  { file: 'chapter-04-display-flow.md', label: 'Chapter 4', chapter: true },
  { file: 'chapter-05-flexbox.md', label: 'Chapter 5', chapter: true },
  { file: 'chapter-06-grid.md', label: 'Chapter 6', chapter: true },
  { file: 'chapter-07-typography.md', label: 'Chapter 7', chapter: true },
  { file: 'chapter-08-color.md', label: 'Chapter 8', chapter: true },
  { file: 'chapter-09-custom-properties.md', label: 'Chapter 9', chapter: true },
  { file: 'chapter-10-responsive.md', label: 'Chapter 10', chapter: true },
  { file: 'chapter-11-visual-pass.md', label: 'Chapter 11', chapter: true },
  { file: 'chapter-99-closing.md', label: 'Closing', chapter: false },
];

function loadChapter(file) {
  const raw = fs.readFileSync(path.join(CHAPTERS_DIR, file), 'utf8');
  const cutIdx = raw.indexOf('## CHAPTER HANDOFF REPORT');
  const body = (cutIdx >= 0) ? raw.slice(0, cutIdx) : raw;
  return body.replace(/<!--[\s\S]*?-->/g, '').trim();
}

function blockize(md) {
  const lines = md.split(/\r?\n/);
  const blocks = [];
  let buf = [];
  let inCode = false;
  let codeBuf = [];
  const flushPara = () => {
    if (buf.length) {
      blocks.push({ type: 'p', text: buf.join(' ').trim() });
      buf = [];
    }
  };
  for (const rawLine of lines) {
    const line = rawLine.replace(/\s+$/, '');
    if (line.startsWith('```')) {
      if (inCode) {
        blocks.push({ type: 'code', text: codeBuf.join('\n') });
        codeBuf = [];
        inCode = false;
      } else {
        flushPara();
        inCode = true;
      }
      continue;
    }
    if (inCode) { codeBuf.push(rawLine); continue; }
    if (line === '') { flushPara(); continue; }
    if (line.startsWith('# ')) { flushPara(); blocks.push({ type: 'h1', text: line.slice(2).trim() }); continue; }
    if (line.startsWith('## ')) { flushPara(); blocks.push({ type: 'h2', text: line.slice(3).trim() }); continue; }
    if (line.startsWith('### ')) { flushPara(); blocks.push({ type: 'h3', text: line.slice(4).trim() }); continue; }
    if (/^---+\s*$/.test(line)) { flushPara(); blocks.push({ type: 'hr' }); continue; }
    if (line.startsWith('|')) { flushPara(); blocks.push({ type: 'p', text: line }); continue; }
    if (/^\s*[-*]\s+/.test(line)) { flushPara(); blocks.push({ type: 'li', text: line.replace(/^\s*[-*]\s+/, '') }); continue; }
    if (/^\s*\d+\.\s+/.test(line)) { flushPara(); blocks.push({ type: 'li-num', text: line.replace(/^\s*\d+\.\s+/, '') }); continue; }
    buf.push(line);
  }
  flushPara();
  return blocks;
}

function inlineRuns(text, baseStyle = {}) {
  const runs = [];
  const re = /(\*\*[^*]+\*\*)|(\*[^*]+\*)|(`[^`]+`)/g;
  let lastIndex = 0;
  let m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > lastIndex) runs.push(new TextRun({ ...baseStyle, text: text.slice(lastIndex, m.index) }));
    if (m[1]) runs.push(new TextRun({ ...baseStyle, text: m[1].slice(2, -2), bold: true }));
    else if (m[2]) runs.push(new TextRun({ ...baseStyle, text: m[2].slice(1, -1), italics: true }));
    else if (m[3]) runs.push(new TextRun({ ...baseStyle, text: m[3].slice(1, -1), font: FONT_CODE }));
    lastIndex = re.lastIndex;
  }
  if (lastIndex < text.length) runs.push(new TextRun({ ...baseStyle, text: text.slice(lastIndex) }));
  if (runs.length === 0) runs.push(new TextRun({ ...baseStyle, text: '' }));
  return runs;
}

function bodyParagraph(text, { firstOfSection = false } = {}) {
  return new Paragraph({
    alignment: AlignmentType.JUSTIFIED,
    spacing: { line: 320, lineRule: LineRuleType.AUTO },
    indent: firstOfSection ? { firstLine: 0 } : { firstLine: convertInchesToTwip(0.25) },
    children: inlineRuns(text, { font: FONT_BODY, size: 22 }),
  });
}

function listItem(text) {
  return new Paragraph({
    alignment: AlignmentType.LEFT,
    spacing: { line: 320, lineRule: LineRuleType.AUTO, after: 80 },
    indent: { left: convertInchesToTwip(0.4), hanging: convertInchesToTwip(0.2) },
    children: [
      new TextRun({ font: FONT_BODY, size: 22, text: '• ' }),
      ...inlineRuns(text, { font: FONT_BODY, size: 22 }),
    ],
  });
}

function codeBlock(text) {
  return text.split('\n').map(line => new Paragraph({
    alignment: AlignmentType.LEFT,
    spacing: { line: 280, lineRule: LineRuleType.AUTO },
    indent: { left: convertInchesToTwip(0.3) },
    children: [new TextRun({ text: line || ' ', font: FONT_CODE, size: 18 })],
  }));
}

function sectionHead(text) {
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 360, after: 240 },
    children: [new TextRun({ text, bold: true, font: FONT_HEAD, size: 24 })],
  });
}

function subSectionHead(text) {
  return new Paragraph({
    alignment: AlignmentType.LEFT,
    spacing: { before: 240, after: 120 },
    children: [new TextRun({ text, bold: true, font: FONT_HEAD, size: 22 })],
  });
}

function ornament() {
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 240, after: 240 },
    children: [new TextRun({ text: '✦ ✦ ✦', font: FONT_BODY, size: 22 })],
  });
}

function pageBreak() { return new Paragraph({ children: [new PageBreak()] }); }
function blank(n = 1) { return Array.from({ length: n }, () => new Paragraph({ children: [new TextRun({ text: '', font: FONT_BODY, size: 22 })] })); }

function titlePage() {
  return [
    ...blank(8),
    new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: BOOK_TITLE, bold: true, font: FONT_HEAD, size: 44 })] }),
    ...blank(2),
    new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: BOOK_SUBTITLE, italics: true, font: FONT_HEAD, size: 36 })] }),
    ...blank(8),
    new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: AUTHOR, font: FONT_HEAD, size: 28 })] }),
    pageBreak(),
  ];
}

function copyrightPage() {
  const items = [
    `Copyright © 2026 ${AUTHOR}.`,
    'All rights reserved.',
    '',
    'Book 3 of the trilogy "What You Need to Know Before React and AI."',
    'Companion to "We Were Never Really Coding."',
    '',
    'First edition, 2026.',
    '',
    'Set in Garamond.',
  ];
  return [
    ...blank(14),
    ...items.map(t => new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { line: 280, lineRule: LineRuleType.AUTO, after: 80 },
      children: [new TextRun({ text: t, font: FONT_BODY, size: 18 })],
    })),
    pageBreak(),
  ];
}

function tableOfContents() {
  const heading = new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 480 },
    children: [new TextRun({ text: 'Contents', bold: true, font: FONT_HEAD, size: 32 })],
  });
  const entries = MANIFEST.map(e =>
    new Paragraph({
      spacing: { line: 360, lineRule: LineRuleType.AUTO, after: 60 },
      children: [new TextRun({ text: e.label, font: FONT_BODY, size: 22 })],
    })
  );
  return [...blank(2), heading, ...entries, pageBreak()];
}

function chapterOpen(label, title) {
  return [
    ...blank(6),
    new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: label.toUpperCase(), font: FONT_HEAD, size: 22, characterSpacing: 60 })] }),
    ...blank(2),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 480 }, children: [new TextRun({ text: title, bold: true, font: FONT_HEAD, size: 36 })] }),
  ];
}

function renderChapterBody(blocks) {
  const out = [];
  let firstOfSection = true;
  let h1seen = false;
  let chapterTitle = '';
  for (const b of blocks) {
    if (b.type === 'h1') {
      if (!h1seen) { chapterTitle = b.text; h1seen = true; continue; }
      out.push(sectionHead(b.text)); firstOfSection = true; continue;
    }
    if (b.type === 'h2') { out.push(sectionHead(b.text)); firstOfSection = true; continue; }
    if (b.type === 'h3') { out.push(subSectionHead(b.text)); firstOfSection = true; continue; }
    if (b.type === 'hr') { out.push(ornament()); firstOfSection = true; continue; }
    if (b.type === 'code') { out.push(...codeBlock(b.text)); firstOfSection = true; continue; }
    if (b.type === 'li' || b.type === 'li-num') { out.push(listItem(b.text)); firstOfSection = true; continue; }
    if (b.type === 'p') { out.push(bodyParagraph(b.text, { firstOfSection })); firstOfSection = false; continue; }
  }
  return { paragraphs: out, title: chapterTitle };
}

function buildBodyChildren() {
  const children = [];
  for (const m of MANIFEST) {
    const md = loadChapter(m.file);
    const blocks = blockize(md);
    const { paragraphs, title } = renderChapterBody(blocks);
    children.push(pageBreak());
    children.push(...chapterOpen(m.label, title));
    children.push(...paragraphs);
  }
  return children;
}

(async () => {
  const headerEl = new Header({
    children: [new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [new TextRun({ text: `${BOOK_TITLE} — ${BOOK_SUBTITLE}`, italics: true, font: FONT_HEAD, size: 18 })],
    })],
  });
  const footerEl = new Footer({
    children: [new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [new TextRun({ children: [PageNumber.CURRENT], font: FONT_HEAD, size: 18 })],
    })],
  });

  const doc = new Document({
    creator: AUTHOR,
    title: `${BOOK_TITLE}: ${BOOK_SUBTITLE}`,
    styles: { default: { document: { run: { font: FONT_BODY, size: 22 } } } },
    sections: [{
      properties: { page: { size: { width: PAGE.width, height: PAGE.height }, margin: PAGE.margins } },
      headers: { default: headerEl },
      footers: { default: footerEl },
      children: [...titlePage(), ...copyrightPage(), ...tableOfContents(), ...buildBodyChildren()],
    }],
  });

  const buf = await Packer.toBuffer(doc);
  fs.writeFileSync(OUTPUT, buf);
  console.log(`Wrote ${OUTPUT}`);
  console.log(`Size: ${(buf.length / 1024).toFixed(1)} KB`);
})();
