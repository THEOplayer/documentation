import type { Element, ElementContent, Root as HastRoot } from 'hast';
import type { Definition, Link, Root as MdastRoot } from 'mdast';
import type { Plugin } from 'unified';
import { SKIP, visit } from 'unist-util-visit';

function classNames(node: Element): string[] {
  const { className } = node.properties;
  return Array.isArray(className) ? className.map(String) : [];
}

function hasClass(node: Element, name: string): boolean {
  return classNames(node).includes(name);
}

function textContent(node: ElementContent): string {
  if (node.type === 'text') return node.value;
  if (node.type === 'element') return node.children.map(textContent).join('');
  return '';
}

function element(tagName: string, children: ElementContent[], className: string[] = []): Element {
  return { type: 'element', tagName, properties: className.length > 0 ? { className } : {}, children };
}

function label(text: string): Element {
  return element('p', [element('strong', [{ type: 'text', value: text }])]);
}

function findAll(node: Element, predicate: (child: Element) => boolean, stopAtMatch: boolean): Element[] {
  const matches: Element[] = [];
  for (const child of node.children) {
    if (child.type !== 'element') continue;
    if (predicate(child)) {
      matches.push(child);
      if (stopAtMatch) continue;
    }
    matches.push(...findAll(child, predicate, stopAtMatch));
  }
  return matches;
}

/**
 * Prism renders every line as a `div.token-line` full of styled spans, which rehype-remark
 * turns into a paragraph per line. Collapse it back into a single `code` child with a
 * `language-*` class so it becomes a fenced code block.
 */
function flattenCodeBlock(pre: Element): void {
  const language = classNames(pre).find((name) => name.startsWith('language-'));
  const lines = findAll(pre, (child) => hasClass(child, 'token-line'), true);
  const code = lines.length > 0 ? lines.map(textContent).join('\n') : textContent(pre);
  pre.children = [element('code', [{ type: 'text', value: code }], language ? [language] : [])];
}

function admonitionToBlockquote(admonition: Element): Element {
  const heading = findAll(admonition, (child) => classNames(child).some((name) => name.startsWith('admonitionHeading')), true)[0];
  const content = findAll(admonition, (child) => classNames(child).some((name) => name.startsWith('admonitionContent')), true)[0];
  const title = heading ? textContent(heading).trim() : '';
  const children: ElementContent[] = content ? content.children : admonition.children;
  return element('blockquote', title ? [label(title.charAt(0).toUpperCase() + title.slice(1)), ...children] : children);
}

function isTabList(node: Element): boolean {
  return node.tagName === 'ul' && node.properties.role === 'tablist';
}

/**
 * Tabs render the labels as one list and all panels (including hidden ones) below it.
 * Move each label in front of its panel so the Markdown keeps them together.
 */
function inlineTabs(tabs: Element): void {
  const tabList = findAll(tabs, isTabList, true)[0];
  const labels = tabList ? tabList.children.filter((child): child is Element => child.type === 'element').map(textContent) : [];
  const panels = findAll(tabs, (child) => child.properties.role === 'tabpanel', true);
  panels.forEach((panel, index) => {
    const title = labels[index]?.trim();
    if (title) panel.children.unshift(label(title));
  });
  visit(tabs, 'element', (node, index, parent) => {
    if (!parent || index === undefined || node !== tabList) return;
    parent.children.splice(index, 1);
    return [SKIP, index];
  });
}

/**
 * Cleans up Docusaurus-specific HTML before the llms.txt plugin converts it to Markdown.
 */
export const rehypeDocusaurusMarkdown: Plugin<[], HastRoot> = () => {
  return (tree: HastRoot) => {
    visit(tree, (node, index, parent) => {
      if (!parent || index === undefined) return;
      if (node.type === 'comment') {
        parent.children.splice(index, 1);
        return index;
      }
      if (node.type !== 'element') return;
      if (node.tagName === 'a' && hasClass(node, 'hash-link')) {
        parent.children.splice(index, 1);
        return index;
      }
      if (node.tagName === 'pre' && hasClass(node, 'prism-code')) {
        flattenCodeBlock(node);
        return SKIP;
      }
      if (hasClass(node, 'theme-admonition')) {
        parent.children[index] = admonitionToBlockquote(node);
        return index;
      }
      if (hasClass(node, 'tabs-container') || hasClass(node, 'openapi-tabs__container')) {
        inlineTabs(node);
        node.properties = {};
      }
    });
  };
};

export interface AbsoluteLinksOptions {
  siteUrl: string;
  baseUrl: string;
}

/**
 * The llms.txt plugin prefixes internal links with the site URL, but the hrefs in the built
 * HTML already contain the base URL, so it ends up duplicated (`/docs/docs/...`). It also
 * appends `.md` after the trailing slash of a route (`/route/.md`).
 */
export function remarkAbsoluteLinks({ siteUrl, baseUrl }: AbsoluteLinksOptions): Plugin<[], MdastRoot> {
  const duplicatedBaseUrl = siteUrl + baseUrl.replace(/^\//, '');
  return () => (tree: MdastRoot) => {
    visit(tree, ['link', 'definition'], (node) => {
      const target = node as Link | Definition;
      target.url = target.url.replace(duplicatedBaseUrl, siteUrl).replace(/\/\.md(?=[?#]|$)/, '.md');
    });
  };
}
