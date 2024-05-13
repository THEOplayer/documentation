import React, { JSX, useEffect, useMemo } from 'react';
import Layout from '@theme-original/DocRoot/Layout';
import type LayoutType from '@theme/DocRoot/Layout';
import type { WrapperProps } from '@docusaurus/types';
import { DocsSidebarProvider, useDocsSidebar, useDocsVersion } from '@docusaurus/theme-common/internal';
import { useLastPlatform } from '@site/src/contexts/lastPlatform';
import { isPlatformName, isDocSharedWithPlatform } from '@site/src/util/platform';
import { useActiveDocContext, useActivePlugin } from '@docusaurus/plugin-content-docs/client';

type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): JSX.Element {
  const { pluginId } = useActivePlugin({ failfast: true });
  const { activeDoc } = useActiveDocContext(pluginId);
  const docSidebar = useDocsSidebar();
  const versionMetadata = useDocsVersion();
  const { lastPlatformName, saveLastPlatform } = useLastPlatform();

  // Override sidebar for certain docs that are shared across platforms
  const sidebar = useMemo(() => {
      const platformName = lastPlatformName || 'web';
    if (isDocSharedWithPlatform(pluginId, activeDoc.id, platformName)) {
      return { name: platformName, items: versionMetadata.docsSidebars[platformName] };
    } else {
      return docSidebar;
    }
  }, [pluginId, activeDoc.id, docSidebar, lastPlatformName, versionMetadata]);

  // Store current sidebar if it's a platform sidebar
  useEffect(() => {
    if (sidebar && isPlatformName(sidebar.name)) {
      saveLastPlatform(sidebar.name);
    }
  }, [saveLastPlatform, sidebar?.name]);

  return (
    <DocsSidebarProvider name={sidebar.name} items={sidebar.items}>
      <Layout {...props} />
    </DocsSidebarProvider>
  );
}
