import React from 'react';
import DocSidebarItems from '@theme-original/DocSidebarItems';
import type DocSidebarItemsType from '@theme/DocSidebarItems';
import type { WrapperProps } from '@docusaurus/types';
import SidebarPlatformItem from './SidebarPlatformItem';

type Props = WrapperProps<typeof DocSidebarItemsType>;

export default function DocSidebarItemsWrapper(props: Props): JSX.Element {
  return (
    <>
      {props.level === 1 && <SidebarPlatformItem />}
      <DocSidebarItems {...props} />
    </>
  );
}
