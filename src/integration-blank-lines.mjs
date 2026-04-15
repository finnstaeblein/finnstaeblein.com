import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';

/**
 * Astro integration: preprocess markdown files to preserve blank lines.
 * Temporarily replaces multiple consecutive blank lines with <br> spacers
 * before Astro's content pipeline processes them, then restores originals.
 */
export default function blankLinesIntegration() {
  const originals = new Map();
  let restored = false;

  function processBody(body) {
    return body.replace(/\n{3,}/g, (match) => {
      const newlines = match.split('\n').length - 1;
      const extraBlanks = newlines - 1;
      return '\n\n' + '<br>\n'.repeat(extraBlanks) + '\n';
    });
  }

  function processFiles() {
    // Process notes
    const dir = resolve('src/content/notes');
    try {
      for (const file of readdirSync(dir)) {
        if (!file.endsWith('.md')) continue;
        const path = join(dir, file);
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

    // Process thoughts
    try {
      const path = resolve('src/content/thoughts.md');
      const original = readFileSync(path, 'utf8');
      const processed = processBody(original);
      if (processed !== original) {
        originals.set(path, original);
        writeFileSync(path, processed);
      }
    } catch {}
  }

  function restoreFiles() {
    if (restored) return;
    restored = true;
    for (const [path, original] of originals) {
      try { writeFileSync(path, original); } catch {}
    }
    originals.clear();
  }

  return {
    name: 'blank-lines',
    hooks: {
      'astro:config:setup': () => {
        processFiles();
        // Safety nets for restoration
        process.on('exit', restoreFiles);
        process.on('SIGINT', () => { restoreFiles(); process.exit(130); });
        process.on('SIGTERM', () => { restoreFiles(); process.exit(143); });
      },
      'astro:build:done': () => {
        restoreFiles();
      },
    },
  };
}
