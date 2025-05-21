import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import type { Props } from '@theme/Details';

import styles from './styles.module.css';

// Should we have a custom details/summary comp in Infima instead of reusing
// alert classes?
const InfimaClasses = 'alert alert--info';

export default function Details({ summary, className, children, ...props }: Props): ReactNode {
  const summaryElement = React.isValidElement(summary) ? summary : <summary>{summary ?? 'Details'}</summary>;

  return (
    <details {...props} className={clsx(InfimaClasses, styles.details, className)}>
      {summaryElement}
      <div className={styles.collapsibleContent}>{children}</div>
    </details>
  );
}
