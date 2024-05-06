import React from 'react';
import { useActiveDocContext } from '@docusaurus/plugin-content-docs/client';
import { useLayoutDocsSidebar } from '@docusaurus/theme-common/internal';
import { useLocation } from '@docusaurus/router';
import DropdownNavbarItem, { type Props as DropdownNavbarItemProps } from '@theme/NavbarItem/DropdownNavbarItem';
import type { Props as DefaultNavbarItemProps } from '@theme/NavbarItem/DefaultNavbarItem';
import type { LinkLikeNavbarItemProps } from '@theme/NavbarItem';
import { type PlatformName, useLastPlatformByPluginId } from '@site/src/contexts/lastPlatform';

export interface PlatformDropdownItemProps extends DefaultNavbarItemProps {
  readonly platform: PlatformName;
}

export interface Props extends Omit<DropdownNavbarItemProps, 'items'> {
  readonly dropdownActiveClassDisabled?: boolean;
  readonly dropdownItemsBefore?: LinkLikeNavbarItemProps[];
  readonly dropdownItemsAfter?: LinkLikeNavbarItemProps[];
  readonly docsPluginId?: string;
  readonly items: PlatformDropdownItemProps[];
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
  ...props
}: Props): JSX.Element {
  const { search, hash } = useLocation();
  const activeDocContext = useActiveDocContext(docsPluginId);
  const { lastPlatformName, saveLastPlatform } = useLastPlatformByPluginId(docsPluginId);
  const platformLinks = items.map(({ platform, ...props }): LinkLikeNavbarItemProps => {
    // TODO Try to match current doc between sidebars
    // const versionDoc = activeDocContext.alternateDocVersions[version.name] ?? getVersionMainDoc(version);
    const sidebarLink = useLayoutDocsSidebar(platform, docsPluginId).link;
    return {
      ...props,
      type: 'default',
      // preserve ?search#hash suffix on version switches
      to: `${sidebarLink.path}${search}${hash}`,
      isActive: () => platform === lastPlatformName,
      onClick: () => saveLastPlatform(platform),
    };
  });
  const dropdownItems = [...(dropdownItemsBefore ?? []), ...platformLinks, ...(dropdownItemsAfter ?? [])];

  return (
    <DropdownNavbarItem
      {...props}
      mobile={mobile}
      label={label}
      to={undefined}
      items={dropdownItems}
      isActive={dropdownActiveClassDisabled ? () => false : undefined}
    />
  );
}
