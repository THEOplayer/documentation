import React, { type ReactNode } from 'react';
import NotFoundContent from '@theme-original/NotFound/Content';
import type NotFoundContentType from '@theme/NotFound/Content';
import type { WrapperProps } from '@docusaurus/types';
import { Redirect, useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import redirectsMillicast from '@site/redirectsMillicast.json';
import redirectsAds from '@site/redirectsAds.json';
import redirectsTHEOPlayer from '@site/redirectsTHEOPlayer.json';

type Props = WrapperProps<typeof NotFoundContentType>;

interface RedirectRule {
  from: string | string[];
  to: string;
}

const redirects: RedirectRule[] = [...redirectsMillicast, ...redirectsAds, ...redirectsTHEOPlayer];

const normalize = (path: string): string => (path.endsWith('/') ? path : `${path}/`);

/**
 * Client-side counterpart of the `@docusaurus/plugin-client-redirects` configuration.
 * That plugin only emits static redirect pages, which are bypassed by SPA navigation
 * (e.g. following a stale Algolia search result), so old paths are also resolved here.
 */
function findRedirect(pathname: string): string | undefined {
  const path = normalize(pathname);
  const rule = redirects.find(({ from }) => (Array.isArray(from) ? from.some((f) => normalize(f) === path) : normalize(from) === path));
  if (rule) {
    return rule.to;
  }
  // Keep in sync with `createRedirects` in docusaurus.config.ts (inverted: old path -> existing path).
  if (path.startsWith('/theoplayer/how-to-guides/miscellaneous/verizon-media/')) {
    return path.replace('/theoplayer/how-to-guides/miscellaneous/verizon-media/', '/theoplayer/how-to-guides/web/uplynk/');
  }
  if (path.startsWith('/theolive/api/')) {
    return path.replace('/theolive/api/', '/theolive/v1/api/');
  }
  if (path === '/theolive/contribution/sei-messages/') {
    return '/theolive/channel/metadata-insertion/';
  }
  return undefined;
}

export default function NotFoundContentWrapper(props: Props): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  const { pathname, search, hash } = useLocation();
  const baseUrl = siteConfig.baseUrl;
  const pathWithoutBase = pathname.startsWith(baseUrl) ? `/${pathname.slice(baseUrl.length)}` : pathname;
  const to = findRedirect(pathWithoutBase);
  if (to) {
    return <Redirect to={`${baseUrl.replace(/\/$/, '')}${to}${search}${hash}`} />;
  }
  return <NotFoundContent {...props} />;
}
