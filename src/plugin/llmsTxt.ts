import fs from 'node:fs/promises';
import path from 'node:path';
import type { LoadContext, Plugin } from '@docusaurus/types';
import { normalizeUrl } from '@docusaurus/utils';
import llmsTxtPlugin, { type PluginOptions as LlmsTxtPluginOptions } from '@signalwire/docusaurus-plugin-llms-txt';
import { rehypeDocusaurusMarkdown, remarkAbsoluteLinks } from './llmsTxtMarkdown';
import { locateDocs, type DocLocation } from './llmsTxtSidebars';

export interface Product {
  /** First path segment of the product's docs, e.g. `theoplayer` for `/docs/theoplayer/**`. */
  slug: string;
  title: string;
  description: string;
  /**
   * Titles of the sidebars that each document a single platform, keyed by sidebar ID.
   * Pages that appear in exactly one of these sidebars are listed under that title;
   * pages shared between sidebars are listed under their sidebar category only.
   */
  platformSidebars?: Record<string, string>;
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

interface Section {
  title: string;
  rank: number;
  order: number;
  entries: Entry[];
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
  const text = description
    .replace(/<[^>]+>/g, '')
    .replace(/\s*``/g, '')
    .trim();
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

/**
 * Section of the product index for a page, based on where the page appears in the sidebars.
 * Ranks order the sections: overview, one platform, shared between platforms; older versions last.
 */
function sectionFor(product: Product, location: DocLocation | undefined): Pick<Section, 'title' | 'rank' | 'order'> {
  if (!location) return { title: OVERVIEW_SECTION, rank: 0, order: Infinity };
  const { version, placements } = location;
  const versionSuffix = version.isLast ? '' : ` (${version.label})`;
  const versionRank = version.isLast ? 0 : 3;
  const [first] = placements;
  if (!first) return { title: OVERVIEW_SECTION + versionSuffix, rank: versionRank, order: Infinity };
  const shared = placements.length > 1;
  const platform = shared ? undefined : product.platformSidebars?.[first.sidebarId];
  const title = platform ? `${platform}: ${first.category ?? OVERVIEW_SECTION}` : (first.category ?? OVERVIEW_SECTION);
  return { title: title + versionSuffix, rank: versionRank + (shared ? 2 : 1), order: first.order };
}

/**
 * Groups the product's pages like the sidebars do: one section per top-level sidebar category, prefixed with the
 * platform for per-platform sidebars. Pages that are not in any sidebar go into the "Overview" section, after the
 * product's landing page. Within a section, pages keep their sidebar order.
 */
function productSections(product: Product, entries: Entry[], locations: Map<string, DocLocation>): Section[] {
  const sections = new Map<string, Section>();
  const entryOrder = new Map<Entry, number>();
  for (const entry of entries) {
    const routePath = entry.markdownPath.replace(/\.md$/, '');
    const { title, rank, order } = sectionFor(product, locations.get(routePath));
    entryOrder.set(entry, routePath === product.slug ? -1 : order);
    const section = sections.get(title) ?? { title, rank, order, entries: [] };
    section.rank = Math.min(section.rank, rank);
    section.order = Math.min(section.order, order);
    section.entries.push(entry);
    sections.set(title, section);
  }
  for (const section of sections.values()) {
    section.entries.sort((a, b) => entryOrder.get(a)! - entryOrder.get(b)!);
  }
  return [...sections.values()].sort((a, b) => a.rank - b.rank || a.order - b.order);
}

function productIndex(product: Product, sections: Section[]): string {
  let content = header(product.title, product.description);
  for (const section of sections) {
    content += `## ${section.title}\n\n${section.entries.map(formatEntry).join('')}\n`;
  }
  return content;
}

async function productContent(outDir: string, sections: Section[]): Promise<string> {
  const entries = sections.flatMap((section) => section.entries);
  const pages = await Promise.all(entries.map((entry) => fs.readFile(path.join(outDir, entry.markdownPath), 'utf8')));
  return pages.map((page) => `${page.trim()}\n\n---\n\n`).join('');
}

async function writeProductFiles(
  outDir: string,
  siteUrl: string,
  { llmsTxt, products }: Options,
  siteConfig: LoadContext['siteConfig'],
  locations: Map<string, DocLocation>
) {
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

    const sections = productSections(product, productEntries, locations);
    const content = await productContent(outDir, sections);
    const productUrl = normalizeUrl([siteUrl, product.slug]);
    await fs.mkdir(path.join(outDir, product.slug), { recursive: true });
    await fs.writeFile(path.join(outDir, product.slug, 'llms.txt'), productIndex(product, sections));
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
      const locations = locateDocs(props.plugins, siteConfig.baseUrl);
      await writeProductFiles(props.outDir, siteUrl, options, siteConfig, locations);
    },
  };
}
