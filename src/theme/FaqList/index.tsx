import React, { type ComponentProps, type ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import type { PropSidebarItemLink } from '@docusaurus/plugin-content-docs';
import { filterDocCardListItems, useCurrentSidebarSiblings, useDoc } from '@docusaurus/plugin-content-docs/client';
import type { Props } from '@theme/DocCardList';
import DocCard from '@theme/DocCard';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

function FaqListForCurrentSidebarCategory({ className }: Props) {
  const doc = useDoc();
  const items = useCurrentSidebarSiblings();
  const filteredItems = items
    // Hide the current doc page from list
    .filter((item) => !(item.type === 'link' && item.docId === doc.metadata.id));
  return <FaqList items={filteredItems} className={className} />;
}

function isValidItem(item: ComponentProps<typeof DocCard>['item']): boolean {
  return item.type === 'link';
}

function FaqListItem({ item }: { item: PropSidebarItemLink }) {
  return (
    <li className={clsx(styles.faqListItem, item.className)}>
      <Link href={item.href}>{item.label}</Link>
    </li>
  );
}

export default function FaqList(props: Props): ReactNode {
  const { items, className } = props;
  if (!items) {
    return <FaqListForCurrentSidebarCategory {...props} />;
  }

  const filteredItems = filterDocCardListItems(items).filter(isValidItem);
  const grouped = Object.groupBy(filteredItems, ({ customProps }) => (customProps?.faqCategory as string) ?? 'Questions');

  return Object.keys(grouped).map((key) => (
    <>
      <Heading as="h2" className={clsx('text--truncate', styles.faqTitle)} title={key}>
        {key}
      </Heading>

      <ul className={clsx(styles.faqList, className)}>
        {grouped[key].map((item, index) => (
          <FaqListItem key={index} item={item as PropSidebarItemLink} />
        ))}
      </ul>
    </>
  ));
}
