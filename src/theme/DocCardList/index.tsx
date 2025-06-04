import React, { type ComponentProps, type ReactNode } from 'react';
import clsx from 'clsx';
import { filterDocCardListItems, useCurrentSidebarSiblings, useDoc } from '@docusaurus/plugin-content-docs/client';
import type { Props } from '@theme/DocCardList';
import DocCard from '@theme/DocCard';
import styles from './styles.module.css';

function DocCardListForCurrentSidebarCategory({ className }: Props) {
  const doc = useDoc();
  const items = useCurrentSidebarSiblings();
  const filteredItems = items
    // Hide the current doc page from list
    .filter((item) => !(item.type === 'link' && item.docId === doc.metadata.id));
  return <DocCardList items={filteredItems} className={className} />;
}

function isValidItem(item: ComponentProps<typeof DocCard>['item']): boolean {
  return item.type === 'link' || item.type === 'category';
}

function DocCardListItem({ item }: { item: ComponentProps<typeof DocCard>['item'] }) {
  return (
    <article className={clsx(styles.docCardListItem, 'col col--6')}>
      <DocCard item={item} />
    </article>
  );
}

export default function DocCardList(props: Props): ReactNode {
  const { items, className } = props;
  if (!items) {
    return <DocCardListForCurrentSidebarCategory {...props} />;
  }
  const filteredItems = filterDocCardListItems(items).filter(isValidItem);
  return (
    <section className={clsx('row', className)}>
      {filteredItems.map((item, index) => (
        <DocCardListItem key={index} item={item} />
      ))}
    </section>
  );
}
