import React, { type JSX, memo } from 'react';
import DocSidebarItems from '@theme-original/DocSidebarItems';
import type DocSidebarItemsType from '@theme/DocSidebarItems';
import type { WrapperProps } from '@docusaurus/types';
import { useActivePluginAndVersion } from '@docusaurus/plugin-content-docs/client';
import { getPlatformsByVersion } from '@site/src/util/platform';
import PlatformSelect from '@site/src/components/PlatformSelect';
import DocSidebarItem from '@theme/DocSidebarItem';

type Props = WrapperProps<typeof DocSidebarItemsType>;

function DocSidebarHeader(): JSX.Element | null {
  const {
    activePlugin: { pluginId },
    activeVersion: { name: versionName },
  } = useActivePluginAndVersion({ failfast: true });
  const platforms = getPlatformsByVersion(pluginId, versionName);
  if (!platforms.length) {
    return null;
  }
  return (
    <>
      <PlatformSelect docsPluginId={pluginId} version={versionName} />
      <DocSidebarItemSeparator />
    </>
  );
}

function DocSidebarItemSeparator(): JSX.Element {
  return <DocSidebarItem item={{ type: 'html', value: '<hr>' }} activePath="" level={1} index={0} />;
}

function DocSidebarItemsWrapper(props: Props): JSX.Element {
  return (
    <>
      {props.level === 1 && <DocSidebarHeader />}
      <DocSidebarItems {...props} />
    </>
  );
}

// Optimize sidebar at each "level"
export default memo(DocSidebarItemsWrapper);
