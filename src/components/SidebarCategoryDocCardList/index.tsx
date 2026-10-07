import type { JSX } from 'react';
import type { Props as DocCardListProps } from '@theme/DocCardList';
import { useDocsSidebar } from '@docusaurus/plugin-content-docs/client';
import type { HeadingType } from '@theme/Heading';
import SearchableDocCardGroups, { isCategory } from '../DocCardListSearch';

export interface Props extends Omit<DocCardListProps, 'items'> {
  headingLevel?: HeadingType;
  searchable?: boolean;
  searchPlaceholder?: string;
}

export default function SidebarCategoryDocCardList({ headingLevel = 'h2', searchable = false, searchPlaceholder, ...props }: Props): JSX.Element {
  const sidebar = useDocsSidebar();
  const groups = (sidebar?.items.filter(isCategory) ?? []).map((category) => ({
    label: category.label,
    items: category.items,
  }));
  return (
    <SearchableDocCardGroups groups={groups} headingLevel={headingLevel} searchable={searchable} searchPlaceholder={searchPlaceholder} {...props} />
  );
}
