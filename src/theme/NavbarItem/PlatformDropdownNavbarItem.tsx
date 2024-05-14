import React, { JSX, ReactNode } from 'react';
import { useActiveDocContext } from '@docusaurus/plugin-content-docs/client';
import { useDocsVersionCandidates } from '@docusaurus/theme-common/internal';
import { useLocation } from '@docusaurus/router';
import DropdownNavbarItem, { type Props as DropdownNavbarItemProps } from '@theme/NavbarItem/DropdownNavbarItem';
import type { LinkLikeNavbarItemProps } from '@theme/NavbarItem';
import { useLastPlatformByPluginId } from '@site/src/contexts/lastPlatform';
import { getPlatforms, isDocSharedWithPlatform } from '@site/src/util/platform';
import { findSidebarInVersions } from '@site/src/util/sidebar';
import Icon from '@site/src/components/Icon';
import styles from './styles.module.css';

export interface PlatformDropdownItemProps {
  readonly label?: ReactNode;
  readonly icon?: string;
}

export interface Props extends Omit<DropdownNavbarItemProps, 'items'> {
  readonly dropdownActiveClassDisabled?: boolean;
  readonly dropdownItemsBefore?: LinkLikeNavbarItemProps[];
  readonly dropdownItemsAfter?: LinkLikeNavbarItemProps[];
  readonly docsPluginId?: string;
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
  href,
  ...props
}: Props): JSX.Element {
  const { search, hash } = useLocation();
  const { activeDoc } = useActiveDocContext(docsPluginId);
  const versionCandidates = useDocsVersionCandidates(docsPluginId);
  const { lastPlatformName, saveLastPlatform } = useLastPlatformByPluginId(docsPluginId);
  const platforms = getPlatforms(docsPluginId);
  const platformLinks = platforms.map(({ platform, label, icon }): LinkLikeNavbarItemProps => {
    const sidebar = findSidebarInVersions(platform, versionCandidates);
    const isDocInSidebar = activeDoc ? isDocSharedWithPlatform(docsPluginId, activeDoc.id, platform) : false;
    const sidebarLink = isDocInSidebar ? activeDoc.path : sidebar.link.path;
    return {
      ...props,
      type: 'default',
      className: styles.platformDropdownItem,
      label: <PlatformDropdownItem label={label} icon={icon} />,
      // preserve ?search#hash suffix on version switches
      to: `${sidebarLink}${search}${hash}`,
      isActive: () => platform === lastPlatformName,
      onClick: () => saveLastPlatform(platform),
    };
  });
  const dropdownItems = [...(dropdownItemsBefore ?? []), ...platformLinks, ...(dropdownItemsAfter ?? [])];
  const dropdownTo = mobile && platforms.length > 1 ? undefined : href;

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
