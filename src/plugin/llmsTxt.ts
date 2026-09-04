import fs from 'node:fs/promises';
import path from 'node:path';
import type { LoadContext, Plugin } from '@docusaurus/types';
import { normalizeUrl } from '@docusaurus/utils';
import llmsTxtPlugin, { type PluginOptions as LlmsTxtPluginOptions } from '@signalwire/docusaurus-plugin-llms-txt';
import { rehypeDocusaurusMarkdown, remarkAbsoluteLinks } from './llmsTxtMarkdown';

export interface Product {
  /** First path segment of the product's docs, e.g. `theoplayer` for `/docs/theoplayer/**`. */
  slug: string;
  title: string;
  description: string;
}

export interface Options {
  llmsTxt: LlmsTxtPluginOptions;
  products: Product[];
}

interface Entry {
  title: string;
  url: string;
  description: string | undefined;
  /** Path of the Markdown file relative to the build directory, e.g. `theoplayer/getting-started.md`. */
  markdownPath: string;
}

const ENTRY_LINE = /^- \[(.+?)\]\((\S+?)\)(?:: (.*))?$/;
const MAX_DESCRIPTION_LENGTH = 200;

/**
 * Descriptions come from each page's `<meta name="description">`. Pages without a `description` front matter field
 * get a Docusaurus excerpt instead, which may be a heading (`# Introduction`), the page title, a markup fragment
 * (`<DocCardList`) or a whole paragraph; keep only what reads as a short summary.
 */
function cleanDescription(title: string, description: string | undefined): string | undefined {
  if (!description || description.startsWith('#') || description.startsWith('<')) return undefined;
  const text = description.replace(/<[^>]+>/g, '').trim();
  if (text === '' || text.toLowerCase() === title.toLowerCase()) return undefined;
  if (text.length <= MAX_DESCRIPTION_LENGTH) return text;
  const sentenceEnd = text.lastIndexOf('. ', MAX_DESCRIPTION_LENGTH);
  if (sentenceEnd >= MAX_DESCRIPTION_LENGTH / 4) return text.slice(0, sentenceEnd + 1);
  const wordEnd = text.lastIndexOf(' ', MAX_DESCRIPTION_LENGTH);
  return `${text.slice(0, wordEnd > 0 ? wordEnd : MAX_DESCRIPTION_LENGTH).replace(/[,;:]$/, '')}…`;
}

function parseEntries(llmsTxt: string, siteUrl: string): Entry[] {
  const entries: Entry[] = [];
  for (const line of llmsTxt.split('\n')) {
    const match = ENTRY_LINE.exec(line);
    if (!match || !match[2].startsWith(siteUrl)) continue;
    entries.push({
      title: match[1],
      url: match[2],
      description: cleanDescription(match[1], match[3]),
      markdownPath: match[2].slice(siteUrl.length),
    });
  }
  return entries;
}

function formatEntry({ title, url, description }: Entry): string {
  return description ? `- [${title}](${url}): ${description}\n` : `- [${title}](${url})\n`;
}

function header(title: string, description: string | undefined): string {
  return description ? `# ${title}\n\n> ${description}\n\n` : `# ${title}\n\n`;
}

const OVERVIEW_SECTION = 'Overview';

function isVersionSection(section: string): boolean {
  return /^v\d+$/.test(section);
}

function compareSections(a: string, b: string): number {
  if (a === OVERVIEW_SECTION || b === OVERVIEW_SECTION) return a === OVERVIEW_SECTION ? -1 : 1;
  if (isVersionSection(a) !== isVersionSection(b)) return isVersionSection(a) ? 1 : -1;
  return a.localeCompare(b);
}

/**
 * Groups the product's pages by their first sub-directory (e.g. `getting-started`, `how-to-guides`).
 * Pages directly below the product go into an "Overview" section first; older versions (`v10`, `v1`) go last.
 */
function productIndex(product: Product, entries: Entry[]): string {
  const sections = new Map<string, Entry[]>();
  for (const entry of entries) {
    const segments = entry.markdownPath.split('/');
    const section = segments.length > 2 ? segments[1] : OVERVIEW_SECTION;
    sections.set(section, [...(sections.get(section) ?? []), entry]);
  }
  let content = header(product.title, product.description);
  for (const [section, sectionEntries] of [...sections].sort(([a], [b]) => compareSections(a, b))) {
    content += `## ${section}\n\n${sectionEntries.map(formatEntry).join('')}\n`;
  }
  return content;
}

async function productContent(outDir: string, entries: Entry[]): Promise<string> {
  const pages = await Promise.all(entries.map((entry) => fs.readFile(path.join(outDir, entry.markdownPath), 'utf8')));
  return pages.map((page) => `${page.trim()}\n\n---\n\n`).join('');
}

async function writeProductFiles(outDir: string, siteUrl: string, { llmsTxt, products }: Options, siteConfig: LoadContext['siteConfig']) {
  const rootLlmsTxtPath = path.join(outDir, 'llms.txt');
  const entries = parseEntries(await fs.readFile(rootLlmsTxtPath, 'utf8'), siteUrl);
  const slugs = new Set(entries.map((entry) => entry.markdownPath.split('/')[0].replace(/\.md$/, '')));
  const unknownSlugs = [...slugs].filter((slug) => !products.some((product) => product.slug === slug));
  if (unknownSlugs.length > 0) {
    throw new Error(`[llms-txt] No product configured for ${unknownSlugs.join(', ')}; add it to the "products" option of the llms-txt plugin.`);
  }

  const rootHeader = header(llmsTxt.siteTitle ?? siteConfig.title, llmsTxt.siteDescription ?? siteConfig.tagline);
  let rootIndex = rootHeader;
  let rootFull = rootHeader;
  for (const product of products) {
    const productEntries = entries.filter(({ markdownPath }) => markdownPath === `${product.slug}.md` || markdownPath.startsWith(`${product.slug}/`));
    if (productEntries.length === 0) continue;

    const content = await productContent(outDir, productEntries);
    const productUrl = normalizeUrl([siteUrl, product.slug]);
    await fs.mkdir(path.join(outDir, product.slug), { recursive: true });
    await fs.writeFile(path.join(outDir, product.slug, 'llms.txt'), productIndex(product, productEntries));
    await fs.writeFile(path.join(outDir, product.slug, 'llms-full.txt'), header(product.title, product.description) + content);

    rootIndex += `## ${product.title}\n\n${product.description}\n\n`;
    rootIndex += `- [${product.title} documentation index](${productUrl}/llms.txt): Links to every ${product.title} page as Markdown\n`;
    rootIndex += `- [${product.title} full documentation](${productUrl}/llms-full.txt): All ${product.title} pages in a single file\n`;
    rootIndex += productEntries
      .filter(({ markdownPath }) => markdownPath === `${product.slug}.md`)
      .map(formatEntry)
      .join('');
    rootIndex += '\n';
    rootFull += content;
  }
  await fs.writeFile(rootLlmsTxtPath, rootIndex);
  await fs.writeFile(path.join(outDir, 'llms-full.txt'), rootFull);
}

/**
 * Wraps `@signalwire/docusaurus-plugin-llms-txt` so that its output can be post-processed in the
 * same `postBuild` step: Docusaurus runs the `postBuild` hooks of all plugins in parallel, so a
 * separate plugin could not rely on the generated Markdown being present yet.
 */
export default function llmsTxt(context: LoadContext, options: Options): Plugin<void> {
  const { siteConfig } = context;
  const siteUrl = normalizeUrl([siteConfig.url, siteConfig.baseUrl]);
  const inner = llmsTxtPlugin(context, {
    ...options.llmsTxt,
    content: {
      ...options.llmsTxt.content,
      enableLlmsFullTxt: false,
      beforeDefaultRehypePlugins: [rehypeDocusaurusMarkdown],
      remarkPlugins: [remarkAbsoluteLinks({ siteUrl, baseUrl: siteConfig.baseUrl })],
    },
  });
  return {
    name: 'llms-txt',
    async postBuild(props) {
      await inner.postBuild?.(props);
      await writeProductFiles(props.outDir, siteUrl, options, siteConfig);
    },
  };
}
