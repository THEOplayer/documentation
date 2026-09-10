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

  if (excludeRoutes !== '' && new RegExp(excludeRoutes).test(pathname)) {
    return undefined;
  }
  return new URL(`${pathname.replace(/\/$/, '')}.md`, siteConfig.url).href;
}
