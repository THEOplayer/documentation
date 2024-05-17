import React, { type JSX } from 'react';
import DocSidebarItems from '@theme-original/DocSidebarItems';
import type DocSidebarItemsType from '@theme/DocSidebarItems';
import type { WrapperProps } from '@docusaurus/types';
import { useActivePluginAndVersion } from '@docusaurus/plugin-content-docs/client';
import { getPlatforms } from '@site/src/util/platform';
import PlatformSelect from '@site/src/components/PlatformSelect';
import DocSidebarItem from '@theme/DocSidebarItem';

type Props = WrapperProps<typeof DocSidebarItemsType>;

function DocSidebarHeader(): JSX.Element | null {
  const {
    activePlugin: { pluginId },
  } = useActivePluginAndVersion({ failfast: true });
  const platforms = getPlatforms(pluginId);
  if (!platforms.length) {
    return null;
  }
  return (
    <>
      <PlatformSelect docsPluginId={pluginId} />
      <DocSidebarItemSeparator />
    </>
  );
}

function DocSidebarItemSeparator(): JSX.Element {
  return <DocSidebarItem item={{ type: 'html', value: '<hr>' }} activePath="" level={1} index={0} />;
}

export default function DocSidebarItemsWrapper(props: Props): JSX.Element {
  return (
    <>
      {props.level === 1 && <DocSidebarHeader />}
      <DocSidebarItems {...props} />
    </>
  );
}
