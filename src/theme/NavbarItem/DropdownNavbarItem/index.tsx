import React, { type ReactNode } from 'react';
import DropdownNavbarItem from '@theme-original/NavbarItem/DropdownNavbarItem';
import type DropdownNavbarItemType from '@theme/NavbarItem/DropdownNavbarItem';
import type { WrapperProps } from '@docusaurus/types';
import { type LinkLikeNavbarItemProps } from '@theme/NavbarItem';
import { isRegexpStringMatch } from '@docusaurus/theme-common';
import { isSamePath, useLocalPathname } from '@docusaurus/theme-common/internal';
import clsx from 'clsx';

type Props = WrapperProps<typeof DropdownNavbarItemType>;

function isItemActive(item: LinkLikeNavbarItemProps, localPathname: string): boolean {
  if (isSamePath(item.to, localPathname)) {
    return true;
  }
  if (isRegexpStringMatch(item.activeBaseRegex, localPathname)) {
    return true;
  }
  if (item.activeBasePath && localPathname.startsWith(item.activeBasePath)) {
    return true;
  }
  return false;
}

function containsActiveItems(items: readonly LinkLikeNavbarItemProps[], localPathname: string): boolean {
  return items.some((item) => isItemActive(item, localPathname));
}

export default function DropdownNavbarItemWrapper({ className, ...props }: Props): ReactNode {
  const localPathname = useLocalPathname();
  const containsActive = containsActiveItems(props.items, localPathname);

  return <DropdownNavbarItem className={clsx(className, { ['dropdown--active']: containsActive })} {...props} />;
}
