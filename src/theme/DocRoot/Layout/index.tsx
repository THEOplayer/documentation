import React, { type JSX, type ReactNode } from 'react';
import Layout from '@theme-original/DocRoot/Layout';
import type LayoutType from '@theme/DocRoot/Layout';
import type { WrapperProps } from '@docusaurus/types';
import { DocsSidebarProvider, useDocsVersion } from '@docusaurus/theme-common/internal';
import { useLastPlatform } from '@site/src/contexts/lastPlatform';
import { isDocSharedWithPlatform } from '@site/src/util/platform';
import { useActiveDocContext, useActivePlugin } from '@docusaurus/plugin-content-docs/client';

type Props = WrapperProps<typeof LayoutType>;

function PlatformSidebarProvider({ children }: { children: ReactNode }) {
  const { pluginId } = useActivePlugin({ failfast: true });
  const { activeDoc } = useActiveDocContext(pluginId);
  const versionMetadata = useDocsVersion();
  const { lastPlatformName } = useLastPlatform();

  // Override sidebar for certain docs that are shared across platforms
  if (isDocSharedWithPlatform(pluginId, activeDoc.id, lastPlatformName)) {
    return (
      <DocsSidebarProvider name={lastPlatformName} items={versionMetadata.docsSidebars[lastPlatformName]}>
        {children}
      </DocsSidebarProvider>
    );
  } else {
    return children;
  }
}

export default function LayoutWrapper(props: Props): JSX.Element {
  return (
    <PlatformSidebarProvider>
      <Layout {...props} />
    </PlatformSidebarProvider>
  );
}
