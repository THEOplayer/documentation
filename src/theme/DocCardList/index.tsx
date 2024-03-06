import React from 'react';
import clsx from 'clsx';
import { filterDocCardListItems, useCurrentSidebarCategory } from '@docusaurus/theme-common';
import type { PropSidebarItem } from '@docusaurus/plugin-content-docs';
import type { Props } from '@theme/DocCardList';
import DocCard from '@theme/DocCard';

function DocCardListForCurrentSidebarCategory({ className }: Props) {
  const category = useCurrentSidebarCategory();
  return <DocCardList items={category.items} className={className} />;
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
