import React from 'react';
import clsx from 'clsx';
import type { Props } from '@theme/DocCardList';
import DocCard from '@theme/DocCard';

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
