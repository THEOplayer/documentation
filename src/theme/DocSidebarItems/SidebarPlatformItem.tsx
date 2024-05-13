import React from 'react';
import DocSidebarItem from '@theme/DocSidebarItem';
import { useLastPlatform } from '@site/src/contexts/lastPlatform';
import { getPlatformLabel } from '@site/src/util/platform';
import { useActivePluginAndVersion } from '@docusaurus/plugin-content-docs/client';
import styles from './styles.module.css';

export default function SidebarPlatformItem() {
  const {
    activePlugin: { pluginId },
  } = useActivePluginAndVersion({ failfast: true });
  const { lastPlatformName } = useLastPlatform();
  const platformLabel = getPlatformLabel(pluginId, lastPlatformName || 'web');
  return (
    platformLabel && (
      <DocSidebarItem
        item={{
          type: 'html',
          value: platformLabel,
          defaultStyle: true,
          className: styles.sidebarPlatformLabel,
        }}
        index={0}
        level={1}
        activePath=""
      />
    )
  );
}
