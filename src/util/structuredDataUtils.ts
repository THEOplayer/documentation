import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import type { PropSidebarBreadcrumbsItem } from '@docusaurus/plugin-content-docs';
import type { WithContext, BreadcrumbList } from 'schema-dts';

// Original: https://github.com/facebook/docusaurus/blob/abd04a2b7104ff988701b558d43a82c0f4680618/packages/docusaurus-plugin-content-docs/src/client/structuredDataUtils.ts
export function useBreadcrumbsStructuredData({ breadcrumbs }: { breadcrumbs: PropSidebarBreadcrumbsItem[] }): WithContext<BreadcrumbList> {
  const { siteConfig } = useDocusaurusContext();
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs
      // We filter breadcrumb items without links, they are not allowed
      // See also https://github.com/facebook/docusaurus/issues/9319#issuecomment-2643560845
      .filter((breadcrumb) => breadcrumb.href)
      .map((breadcrumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: breadcrumb.label,
        item: `${siteConfig.url}${breadcrumb.href}`,
      })),
  };
}
