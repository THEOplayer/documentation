import React from 'react';
import DocSidebarItems from '@theme-original/DocSidebarItems';
import type DocSidebarItemsType from '@theme/DocSidebarItems';
import type { WrapperProps } from '@docusaurus/types';
import { useActivePluginAndVersion } from '@docusaurus/plugin-content-docs/client';
import PlatformSelect from '@site/src/components/PlatformSelect';
import DocSidebarItem from '@theme/DocSidebarItem';

type Props = WrapperProps<typeof DocSidebarItemsType>;

function DocSidebarPlatformSelect() {
  const {
    activePlugin: { pluginId },
  } = useActivePluginAndVersion({ failfast: true });
  return <PlatformSelect docsPluginId={pluginId} />;
}

function DocSidebarItemSeparator() {
  return <DocSidebarItem item={{ type: 'html', value: '<hr>' }} activePath="" level={1} index={0} />;
}

export default function DocSidebarItemsWrapper(props: Props): JSX.Element {
  return (
    <>
      {props.level === 1 && (
        <>
          <DocSidebarPlatformSelect />
          <DocSidebarItemSeparator />
        </>
      )}
      <DocSidebarItems {...props} />
    </>
  );
}
