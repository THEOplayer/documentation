import React, { JSX } from 'react';
import DefaultNavbarItem, { type Props as DefaultNavbarItemProps } from '@theme/NavbarItem/DefaultNavbarItem';
import { useActiveDocContext } from '@docusaurus/plugin-content-docs/client';
import { useLastPlatformMainLink } from '@site/src/contexts/lastPlatform';

export interface Props extends DefaultNavbarItemProps {
  readonly docsPluginId: string;
}

/**
 * A navbar item for opening the last platform's sidebar.
 */
export default function PlatformSidebarNavbarItem({ docsPluginId, ...props }: Props): JSX.Element {
  const { activeDoc } = useActiveDocContext(docsPluginId);
  const sidebarLink = useLastPlatformMainLink(docsPluginId);
  if (!sidebarLink) {
    throw new Error(`PlatformSidebarNavbarItem: Doc plugin ID "${docsPluginId}" doesn't have anything to be linked to.`);
  }
  return <DefaultNavbarItem exact {...props} isActive={() => activeDoc !== undefined} to={sidebarLink} />;
}
