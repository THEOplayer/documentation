import React, { type ReactNode } from 'react';
import Head from '@docusaurus/Head';
import { useBreadcrumbsStructuredData } from '@site/src/util/structuredDataUtils';
import type { PropSidebarBreadcrumbsItem } from '@docusaurus/plugin-content-docs';

export interface Props {
  readonly breadcrumbs: PropSidebarBreadcrumbsItem[];
}

export default function DocBreadcrumbsStructuredData(props: Props): ReactNode {
  const structuredData = useBreadcrumbsStructuredData({
    breadcrumbs: props.breadcrumbs,
  });
  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Head>
  );
}
