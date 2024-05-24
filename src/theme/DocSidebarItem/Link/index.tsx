import React, { JSX } from 'react';
import Link from '@theme-original/DocSidebarItem/Link';
import type LinkType from '@theme/DocSidebarItem/Link';
import type { WrapperProps } from '@docusaurus/types';
import type { PropSidebarItemLink } from '@docusaurus/plugin-content-docs';
import { useLastPlatformMainLink } from '@site/src/contexts/lastPlatform';
import { useActivePluginAndVersion } from '@docusaurus/plugin-content-docs/client';

export interface Props extends WrapperProps<typeof LinkType> {
  item: PropSidebarItemLink & {
    customProps?: {
      /**
       * Whether this is a link back to main sidebar.
       */
      isBackLink?: boolean;
      [key: string]: unknown;
    };
  };
}

function BackLink({ item, ...props }: Props): JSX.Element {
  // Replace back link with last platform's main sidebar link (if available)
  const {
    activePlugin: { pluginId },
  } = useActivePluginAndVersion({ failfast: true });
  const href = useLastPlatformMainLink(pluginId) || item.href;
  return <Link item={{ ...item, href }} {...props} />;
}

export default function LinkWrapper({ item, ...props }: Props): JSX.Element {
  const isBackLink = item.customProps?.isBackLink;
  if (isBackLink) {
    return <BackLink item={item} {...props} />;
  } else {
    return <Link item={item} {...props} />;
  }
}
