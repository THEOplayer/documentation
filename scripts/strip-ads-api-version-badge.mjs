import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

// The docs site already shows a documentation version badge; strip the API version badge from
// the generated reference intro page so it does not render a second, conflicting "Version" badge.
const INFO_PAGE = resolve('ads/api/reference/optiview-ads-api.info.mdx');
const BADGE_PATTERN = /^<span className={["']theme-doc-version-badge[^\n]*<\/span>\n+/m;

const content = await readFile(INFO_PAGE, 'utf8');

if (!BADGE_PATTERN.test(content)) {
  console.log(`No API version badge found in ${INFO_PAGE}`);
} else {
  await writeFile(INFO_PAGE, content.replace(BADGE_PATTERN, ''));
  console.log(`Stripped the API version badge from ${INFO_PAGE}`);
}
