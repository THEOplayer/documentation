import { useMemo } from 'react';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { usePluginData } from '@docusaurus/useGlobalData';

export interface LlmsTxtGlobalData {
  excludeRoutes: string;
}

export function useMarkdownUrl(): string | undefined {
  const { pathname } = useLocation();
  const { siteConfig } = useDocusaurusContext();
  const { excludeRoutes } = usePluginData('llms-txt') as LlmsTxtGlobalData;
  const excludeRoutesRegExp = useMemo(() => (excludeRoutes === '' ? undefined : new RegExp(excludeRoutes)), [excludeRoutes]);

  if (excludeRoutesRegExp?.test(pathname)) {
    return undefined;
  }
  return new URL(`${pathname.replace(/\/$/, '')}.md`, siteConfig.url).href;
}
