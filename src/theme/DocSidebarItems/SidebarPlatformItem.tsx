import React from 'react';
import DocSidebarItem from '@theme/DocSidebarItem';
import { useLastPlatform } from '@site/src/contexts/lastPlatform';
import { getPlatformByName } from '@site/src/util/platform';
import { useActivePluginAndVersion } from '@docusaurus/plugin-content-docs/client';
import styles from './styles.module.css';

export default function SidebarPlatformItem() {
  const {
    activePlugin: { pluginId },
  } = useActivePluginAndVersion({ failfast: true });
  const { lastPlatformName } = useLastPlatform();
  const platform = getPlatformByName(pluginId, lastPlatformName || 'web');
  return (
    platform && (
      <DocSidebarItem
        item={{
          type: 'html',
          value: platform.label,
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
