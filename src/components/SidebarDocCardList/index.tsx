import { Fragment } from 'react';
import { useDoc, useDocsSidebar } from '@docusaurus/plugin-content-docs/client';
import DocCardList, { type Props as DocCardListProps } from '@theme/DocCardList';
import { PropSidebarItem, PropSidebarItemCategory } from '@docusaurus/plugin-content-docs';
import Heading, { type HeadingType } from '@theme/Heading';

export interface Props extends Omit<DocCardListProps, 'items'> {
  headingLevel?: HeadingType;
}

function isCategory(item: PropSidebarItem): item is PropSidebarItemCategory {
  return item.type === 'category';
}

export default function SidebarDocCardList({ headingLevel, ...props }: Props) {
  const doc = useDoc();
  const sidebar = useDocsSidebar();
  const items = sidebar.items
    // Hide the current doc page from list
    .filter((item) => !(item.type === 'link' && item.docId === doc.metadata.id));
  if (headingLevel) {
    const subcategories = items.filter(isCategory);
    return subcategories.map((subcategory) => (
      <Fragment key={subcategory.label}>
        <Heading as={headingLevel}>{subcategory.label}</Heading>
        <DocCardList items={subcategory.items} {...props} />
      </Fragment>
    ));
  }
  return <DocCardList items={items} {...props} />;
}
