const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'app', 'page.tsx');
const lines = fs.readFileSync(filePath, 'utf-8').split('\n');

// Helper to get lines (1-indexed)
const getLines = (start, end) => lines.slice(start - 1, end).join('\n');

const preamble = getLines(1, 601); // Up to end of Hero (S1)
// We will modify the hero CTA manually later, just keep it for now.

// The Story (S5) including preceding comment
const s5 = getLines(870, 928);

// Highlights (S3) including preceding comment
const s3 = getLines(695, 768);

// Gallery (S7) including preceding comment
const s7 = getLines(992, 1054);

// Explore Spaces (S4) including preceding comment
const s4 = getLines(769, 869);

// Experiences (S8) including preceding comment
const s8 = getLines(1055, 1150);

// Reviews (S6) including preceding comment
const s6 = getLines(929, 991);

// Location (S9) including preceding comment
const s9 = getLines(1151, 1225);

// The Rest of the file (Sticky Bar, Footer, Modals)
const postamble = getLines(1226, lines.length);

const newContent = [
  preamble,
  s5,
  s3,
  s7,
  s4,
  s8,
  s6,
  s9,
  postamble
].join('\n');

fs.writeFileSync(filePath, newContent);
console.log('Successfully reordered page.tsx sections.');
