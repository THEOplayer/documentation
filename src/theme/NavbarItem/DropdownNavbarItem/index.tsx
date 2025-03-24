import React, { type ReactNode } from 'react';
import DropdownNavbarItem from '@theme-original/NavbarItem/DropdownNavbarItem';
import type DropdownNavbarItemType from '@theme/NavbarItem/DropdownNavbarItem';
import type { WrapperProps } from '@docusaurus/types';

type Props = WrapperProps<typeof DropdownNavbarItemType>;

export default function DropdownNavbarItemWrapper(props: Props): ReactNode {
  return (
    <>
      <DropdownNavbarItem {...props} />
    </>
  );
}
