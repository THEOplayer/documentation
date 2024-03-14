import React from 'react';
import clsx from 'clsx';
import { filterDocCardListItems, useCurrentSidebarCategory } from '@docusaurus/theme-common';
import type { PropSidebarItem } from '@docusaurus/plugin-content-docs';
import { useDoc } from '@docusaurus/theme-common/internal';
import type { Props } from '@theme/DocCardList';
import DocCard from '@theme/DocCard';

function DocCardListForCurrentSidebarCategory({ className }: Props) {
  const doc = useDoc();
  const category = useCurrentSidebarCategory();
  const filteredItems = category.items
    // Hide the current doc page from list
    .filter((item) => !(item.type === 'link' && item.docId === doc.metadata.id));
  return <DocCardList items={filteredItems} className={className} />;
}

function isIndexLink(item: PropSidebarItem): boolean {
  return item.type === 'link' && item.docId && item.docId.endsWith('/index');
}

export default function DocCardList(props: Props) {
  const { items, className } = props;
  if (!items) {
    return <DocCardListForCurrentSidebarCategory {...props} />;
  }
  const filteredItems = filterDocCardListItems(items)
    // Remove link to index page
    .filter((item) => !isIndexLink(item));
  return (
    <section className={clsx('row', className)}>
      {filteredItems.map((item, index) => (
        <article key={index} className="col col--6 margin-bottom--lg">
          <DocCard item={item} />
        </article>
      ))}
    </section>
  );
}
