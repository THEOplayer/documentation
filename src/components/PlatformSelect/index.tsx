import React, { JSX } from 'react';
import Select, { Item, SelectProps } from '@site/src/components/Select';
import { getPlatforms, isDocSharedWithPlatform } from '@site/src/util/platform';
import { useLastPlatformByPluginId } from '@site/src/contexts/lastPlatform';
import Icon from '@site/src/components/Icon';
import styles from './styles.module.css';
import { useActiveDocContext } from '@docusaurus/plugin-content-docs/client';
import { useDocsVersionCandidates } from '@docusaurus/theme-common/internal';
import { findSidebarInVersions } from '@site/src/util/sidebar';
import { useLocation } from '@docusaurus/router';
import clsx from 'clsx';

interface PlatformSelectProps extends Omit<SelectProps<any>, 'items' | 'children'> {
  docsPluginId: string;
}

/**
 * A dropdown to change the current platform.
 */
export default function PlatformSelect({ docsPluginId, className, ...props }: PlatformSelectProps): JSX.Element {
  const { search, hash } = useLocation();
  const { activeDoc } = useActiveDocContext(docsPluginId);
  const versionCandidates = useDocsVersionCandidates(docsPluginId);
  const { lastPlatformName } = useLastPlatformByPluginId(docsPluginId);
  const platforms = getPlatforms(docsPluginId);
  return (
    <Select
      {...props}
      items={platforms}
      selectedKey={lastPlatformName}
      className={clsx(styles.platformSelect, className)}
      valueChildren={({ selectedItem }) => {
        const { label, shortLabel, icon } = selectedItem ?? platforms[0];
        return (
          <div className={clsx(styles.platformValue)}>
            <Icon className={styles.platformIcon} icon={icon} defaultIcon="" />
            <span className={styles.platformLabel}>{shortLabel ?? label}</span>
          </div>
        );
      }}
      // dependencies for the children callback
      dependencies={[docsPluginId, activeDoc, versionCandidates, search, hash]}
    >
      {(desc) => {
        const { platform, label, icon } = desc;
        const sidebar = findSidebarInVersions(platform, versionCandidates);
        const isDocInSidebar = activeDoc ? isDocSharedWithPlatform(docsPluginId, activeDoc.id, platform) : false;
        const sidebarLink = isDocInSidebar ? activeDoc.path : sidebar.link.path;
        return (
          <Item
            id={platform}
            key={platform}
            value={desc}
            textValue={label}
            // preserve ?search#hash suffix
            href={`${sidebarLink}${search}${hash}`}
            // update current platform when navigating
            routerOptions={{ platform: platform }}
          >
            <div className={styles.platformItem}>
              <Icon className={styles.platformIcon} icon={icon} defaultIcon="" />
              <span className={styles.platformLabel}>{label}</span>
            </div>
          </Item>
        );
      }}
    </Select>
  );
}
