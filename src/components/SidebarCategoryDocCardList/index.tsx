import { Fragment } from 'react';
import DocCardList, { type Props as DocCardListProps } from '@theme/DocCardList';
import { useDocsSidebar } from '@docusaurus/plugin-content-docs/client';
import { PropSidebarItem, PropSidebarItemCategory } from '@docusaurus/plugin-content-docs';
import Heading, { type HeadingType } from '@theme/Heading';

export interface Props extends Omit<DocCardListProps, 'items'> {
  headingLevel?: HeadingType;
}

function isCategory(item: PropSidebarItem): item is PropSidebarItemCategory {
  return item.type === 'category';
}

export default function SidebarCategoryDocCardList({ headingLevel, ...props }: Props) {
  const sidebar = useDocsSidebar();
  const categories = sidebar.items.filter(isCategory);
  return categories.map((category) => (
    <Fragment key={category.label}>
      <Heading as={headingLevel ?? 'h2'}>{category.label}</Heading>
      <DocCardList items={category.items} {...props} />
    </Fragment>
  ));
}
