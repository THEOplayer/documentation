import React from 'react';
import Link from '@docusaurus/Link';
import type { Props } from '@theme/MDXComponents/A';
import { useDoc } from '@docusaurus/theme-common/internal';
import { hasProtocol } from '@docusaurus/isInternalUrl';

export default function MDXA({ href, ...props }: Props): JSX.Element {
  const { metadata } = useDoc();
  if (metadata.id.startsWith('external') && !isAbsoluteUrl(href) && !isMarkdownUrl(href)) {
    // External documentation may contain relative URLs to non-Markdown files.
    // Turn them into absolute URLs to GitHub instead.
    const absoluteHref = new URL(href, metadata.editUrl).href;
    return <Link href={absoluteHref} {...props} />;
  }
  return <Link href={href} {...props} />;
}

function isAbsoluteUrl(href: string) {
  // Examples:
  // * /docs/theoplayer/getting-started/
  // * https://www.theoplayer.com/docs/
  return href.startsWith('/') || hasProtocol(href);
}

function isMarkdownUrl(href: string) {
  return /\.mdx?$/.test(href);
}
