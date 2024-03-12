import React, { useMemo } from 'react';
import DocVersionBanner from '@theme-original/DocVersionBanner';
import type { Props } from '@theme/DocVersionBanner';
import type { DocusaurusContext } from '@docusaurus/types';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Context } from '@docusaurus/core/lib/client/docusaurusContext';
import { useActivePlugin } from '@docusaurus/plugin-content-docs/client';

function getProductNameByPluginId(pluginId: string): string {
  switch (pluginId) {
    // Keep these in sync with @docusaurus/plugin-content-docs plugin IDs in Docusaurus config
    case 'theoplayer':
      return 'THEOplayer';
    case 'open-video-ui':
      return 'Open Video UI';
    default:
      throw new Error(`Unknown plugin ID for DocVersionBanner: "${pluginId}"`);
  }
}

export default function DocVersionBannerWrapper(props: Props) {
  const originalContext: DocusaurusContext = useDocusaurusContext();
  const { pluginId } = useActivePlugin({ failfast: true });
  // <DocVersionBanner> uses siteConfig.title from the DocusaurusContext in its message,
  // but we want to show the product name instead (derived from the current doc plugin ID).
  // HACK: create a new context and replace the title with the product name.
  const context: DocusaurusContext = useMemo(
    () => ({
      ...originalContext,
      siteConfig: {
        ...originalContext.siteConfig,
        title: getProductNameByPluginId(pluginId),
      },
    }),
    [originalContext, pluginId]
  );
  return (
    <Context.Provider value={context}>
      <DocVersionBanner {...props} />
    </Context.Provider>
  );
}
