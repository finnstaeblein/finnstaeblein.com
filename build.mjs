/**
 * Build wrapper: preprocesses markdown files to preserve blank lines,
 * runs the Astro build, then restores the originals.
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { execSync } from 'node:child_process';

const originals = new Map();
const listItemPattern = /^(\s*[-*+]|\s*\d+\.)\s/;

function processBody(body) {
  return body.replace(/\n{3,}/g, (match, offset) => {
    const before = body.lastIndexOf('\n', offset - 1);
    const lineBefore = body.slice(before + 1, offset).trim();
    const afterEnd = offset + match.length;
    const lineAfterEnd = body.indexOf('\n', afterEnd);
    const lineAfter = body.slice(afterEnd, lineAfterEnd === -1 ? undefined : lineAfterEnd).trim();

    if (listItemPattern.test(lineAfter) || listItemPattern.test(lineBefore)) {
      return match;
    }

    const newlines = match.split('\n').length - 1;
    const extraBlanks = newlines - 1;
    return '\n\n' + '<br>\n'.repeat(extraBlanks) + '\n';
  });
}

// 1. Preprocess notes
const notesDir = resolve('src/content/notes');
try {
  for (const file of readdirSync(notesDir)) {
    if (!file.endsWith('.md')) continue;
    const path = join(notesDir, file);
    const original = readFileSync(path, 'utf8');

    const fmMatch = original.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/);
    if (!fmMatch) continue;

    const frontmatter = fmMatch[0];
    const body = original.slice(frontmatter.length);
    const processed = processBody(body);

    if (processed !== body) {
      originals.set(path, original);
      writeFileSync(path, frontmatter + processed);
    }
  }
} catch {}

// Preprocess thoughts
try {
  const path = resolve('src/content/thoughts.md');
  const original = readFileSync(path, 'utf8');
  const processed = processBody(original);
  if (processed !== original) {
    originals.set(path, original);
    writeFileSync(path, processed);
  }
} catch {}

// 2. Run Astro build
let exitCode = 0;
try {
  execSync('npx astro build', { stdio: 'inherit' });
} catch (e) {
  exitCode = e.status || 1;
}

// 3. Restore originals (always runs)
for (const [path, original] of originals) {
  writeFileSync(path, original);
}

process.exit(exitCode);
