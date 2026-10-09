import type { JSX } from 'react';
import type { Props as DocCardListProps } from '@theme/DocCardList';
import { useCurrentSidebarCategory } from '@docusaurus/plugin-content-docs/client';
import type { HeadingType } from '@theme/Heading';
import SearchableDocCardGroups, { isCategory } from '../DocCardListSearch';

export interface Props extends Omit<DocCardListProps, 'items'> {
  headingLevel?: HeadingType;
  searchable?: boolean;
  searchPlaceholder?: string;
}

export default function SubcategoryDocCardList({ headingLevel = 'h2', searchable = false, searchPlaceholder, ...props }: Props): JSX.Element {
  const category = useCurrentSidebarCategory();
  const groups = category.items.filter(isCategory).map((subcategory) => ({
    label: subcategory.label,
    items: subcategory.items,
  }));
  return (
    <SearchableDocCardGroups groups={groups} headingLevel={headingLevel} searchable={searchable} searchPlaceholder={searchPlaceholder} {...props} />
  );
}
