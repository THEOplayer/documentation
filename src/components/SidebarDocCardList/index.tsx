import type { JSX } from 'react';
import { useDoc, useDocsSidebar } from '@docusaurus/plugin-content-docs/client';
import type { Props as DocCardListProps } from '@theme/DocCardList';
import type { HeadingType } from '@theme/Heading';
import SearchableDocCardGroups, { isCategory } from '../DocCardListSearch';

export interface Props extends Omit<DocCardListProps, 'items'> {
  headingLevel?: HeadingType;
  searchable?: boolean;
  searchPlaceholder?: string;
}

export default function SidebarDocCardList({ headingLevel, searchable = false, searchPlaceholder, ...props }: Props): JSX.Element {
  const doc = useDoc();
  const sidebar = useDocsSidebar();
  const items = (sidebar?.items ?? [])
    // Hide the current doc page from list
    .filter((item) => !(item.type === 'link' && item.docId === doc.metadata.id));
  const groups = headingLevel ? items.filter(isCategory).map((subcategory) => ({ label: subcategory.label, items: subcategory.items })) : [{ items }];
  return (
    <SearchableDocCardGroups groups={groups} headingLevel={headingLevel} searchable={searchable} searchPlaceholder={searchPlaceholder} {...props} />
  );
}
