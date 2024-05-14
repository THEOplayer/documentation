import React, { JSX, ReactNode } from 'react';
import { type GlobalSidebar, type GlobalVersion, useActiveDocContext } from '@docusaurus/plugin-content-docs/client';
import { useDocsVersionCandidates } from '@docusaurus/theme-common/internal';
import { useLocation } from '@docusaurus/router';
import DropdownNavbarItem, { type Props as DropdownNavbarItemProps } from '@theme/NavbarItem/DropdownNavbarItem';
import type { Props as DefaultNavbarItemProps } from '@theme/NavbarItem/DefaultNavbarItem';
import type { LinkLikeNavbarItemProps } from '@theme/NavbarItem';
import { useLastPlatformByPluginId } from '@site/src/contexts/lastPlatform';
import { getPlatformLabel, isDocSharedWithPlatform, PlatformName } from '@site/src/util/platform';
import Icon from '@site/src/theme/DocCard/Icon';
import styles from './styles.module.css';

export interface PlatformDropdownItemProps {
  readonly label?: ReactNode;
  readonly icon?: string;
}

export interface PlatformDropdownNavbarItemProps extends DefaultNavbarItemProps, PlatformDropdownItemProps {
  readonly platform: PlatformName;
}

export interface Props extends Omit<DropdownNavbarItemProps, 'items'> {
  readonly dropdownActiveClassDisabled?: boolean;
  readonly dropdownItemsBefore?: LinkLikeNavbarItemProps[];
  readonly dropdownItemsAfter?: LinkLikeNavbarItemProps[];
  readonly docsPluginId?: string;
  readonly items: PlatformDropdownNavbarItemProps[];
  readonly href?: string;
}

function PlatformDropdownItem({ label, icon }: PlatformDropdownItemProps): JSX.Element {
  return (
    <>
      <Icon className={styles.platformDropdownIcon} icon={icon} defaultIcon="" />
      <span className={styles.platformDropdownItemContent}>{label}</span>
    </>
  );
}

/**
 * A navbar dropdown item for switching between platforms within the same doc version.
 */
export default function PlatformDropdownNavbarItem({
  mobile,
  label,
  docsPluginId,
  dropdownActiveClassDisabled,
  dropdownItemsBefore,
  dropdownItemsAfter,
  items,
  href,
  ...props
}: Props): JSX.Element {
  const { search, hash } = useLocation();
  const { activeDoc } = useActiveDocContext(docsPluginId);
  const versionCandidates = useDocsVersionCandidates(docsPluginId);
  const { lastPlatformName, saveLastPlatform } = useLastPlatformByPluginId(docsPluginId);
  const platformLinks = items.map(({ platform, label, icon, ...props }): LinkLikeNavbarItemProps => {
    const sidebar = findSidebarInVersions(platform, versionCandidates);
    const isDocInSidebar = activeDoc ? isDocSharedWithPlatform(docsPluginId, activeDoc.id, platform) : false;
    const sidebarLink = isDocInSidebar ? activeDoc.path : sidebar.link.path;
    const platformLabel = getPlatformLabel(docsPluginId, platform);
    return {
      ...props,
      type: 'default',
      className: styles.platformDropdownItem,
      label: <PlatformDropdownItem label={label || platformLabel} icon={icon} />,
      // preserve ?search#hash suffix on version switches
      to: `${sidebarLink}${search}${hash}`,
      isActive: () => platform === lastPlatformName,
      onClick: () => saveLastPlatform(platform),
    };
  });
  const dropdownItems = [...(dropdownItemsBefore ?? []), ...platformLinks, ...(dropdownItemsAfter ?? [])];
  const dropdownTo = mobile && items.length > 1 ? undefined : href;

  return (
    <DropdownNavbarItem
      {...props}
      mobile={mobile}
      label={label}
      to={dropdownTo}
      items={dropdownItems}
      isActive={dropdownActiveClassDisabled ? () => false : undefined}
    />
  );
}

function findSidebarInVersions(sidebarName: string, versionCandidates: GlobalVersion[]): GlobalSidebar {
  for (const version of versionCandidates) {
    const sidebar = version.sidebars[sidebarName];
    if (sidebar) {
      return sidebar;
    }
  }
}
