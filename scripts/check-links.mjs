import assert from 'node:assert/strict';
import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../dist/', import.meta.url));

async function htmlFiles(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const filename = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await htmlFiles(filename));
    else if (entry.name.endsWith('.html')) files.push(filename);
  }
  return files;
}

const pages = new Map();
for (const filename of await htmlFiles(root)) {
  pages.set(filename, await readFile(filename, 'utf8'));
}
assert(pages.size > 0, 'Run pnpm build before checking links.');

const errors = [];
let checked = 0;
for (const [filename, html] of pages) {
  const source = path.relative(root, filename);
  const pageURL = new URL(source, 'https://site.test/');
  for (const match of html.matchAll(/\b(?:href|src)=["']([^"']+)["']/g)) {
    const href = match[1].replaceAll('&amp;', '&');
    const url = new URL(href, pageURL);
    if (url.origin !== pageURL.origin) continue;
    checked += 1;
    let target = path.join(root, decodeURIComponent(url.pathname));
    try {
      if ((await stat(target)).isDirectory()) target = path.join(target, 'index.html');
      assert((await stat(target)).isFile());
      if (url.hash && target.endsWith('.html')) {
        const content = pages.get(target) ?? await readFile(target, 'utf8');
        const ids = new Set([...content.matchAll(/\bid=["']([^"']+)["']/g)].map(match => match[1]));
        assert(ids.has(decodeURIComponent(url.hash.slice(1))), 'Missing anchor');
      }
    } catch {
      errors.push(`${source}: ${href}`);
    }
  }
}

assert.equal(errors.length, 0, `Broken internal references:\n${errors.join('\n')}`);
console.log(`Checked ${checked} internal references across ${pages.size} built pages.`);
