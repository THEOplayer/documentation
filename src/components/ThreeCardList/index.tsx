import React from 'react';
import clsx from 'clsx';
import type { Props as DocCardProps } from '@theme/DocCardList';
import type { PropSidebarItem } from '@docusaurus/plugin-content-docs';
import DocCard from '@theme/DocCard';

export interface Props extends DocCardProps {
  readonly items: PropSidebarItem[];
}

export default function ThreeCardList(props: Props) {
  const { items, className } = props;
  return (
    <section className={clsx('row', className)}>
      {items.map((item, index) => (
        <article key={index} className="col col--4 margin-bottom--lg">
          <DocCard item={item} />
        </article>
      ))}
    </section>
  );
}
