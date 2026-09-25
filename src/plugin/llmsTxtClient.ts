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
  // The plugin is not loaded in archive builds
  const pluginData = usePluginData('llms-txt') as LlmsTxtGlobalData | undefined;
  const excludeRoutes = pluginData?.excludeRoutes;
  const excludeRoutesRegExp = useMemo(() => (excludeRoutes ? new RegExp(excludeRoutes) : undefined), [excludeRoutes]);

  if (!pluginData || excludeRoutesRegExp?.test(pathname)) {
    return undefined;
  }
  return new URL(`${pathname.replace(/\/$/, '')}.md`, siteConfig.url).href;
}
