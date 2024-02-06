import React from 'react';
import DocsVersionDropdownNavbarItem from '@theme-original/NavbarItem/DocsVersionDropdownNavbarItem';
import type { Props } from '@theme/NavbarItem/DocsVersionDropdownNavbarItem';
import { useActiveDocContext } from '@docusaurus/plugin-content-docs/client';

/**
 * @see https://github.com/facebook/react-native-website/blob/2a880c5bb7ce29455b66a2f9510ad4e314430f42/website/src/theme/NavbarItem/DocsVersionDropdownNavbarItem.js
 */
export default function DocsVersionDropdownNavbarItemWrapper(props: Props) {
  // (CUSTOM) Hide version dropdown on non-versioned pages
  const activeDocContext = useActiveDocContext(props.docsPluginId);
  if (!activeDocContext.activeDoc) {
    return null;
  }

  return <DocsVersionDropdownNavbarItem {...props} />;
}
