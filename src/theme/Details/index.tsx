import React, { type ReactNode, useRef, useState } from 'react';
import clsx from 'clsx';
import type { Props } from '@theme/Details';
import styles from './styles.module.css';

function isInSummary(node: HTMLElement | null): boolean {
  if (!node) {
    return false;
  }
  return node.tagName === 'SUMMARY' || isInSummary(node.parentElement);
}

function hasParent(node: HTMLElement | null, parent: HTMLElement): boolean {
  if (!node) {
    return false;
  }
  return node === parent || hasParent(node.parentElement, parent);
}

// Should we have a custom details/summary comp in Infima instead of reusing
// alert classes?
const InfimaClasses = 'alert alert--info';

export default function Details({ summary, className, children, ...props }: Props): ReactNode {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const summaryElement = React.isValidElement(summary) ? summary : <summary>{summary ?? 'Details'}</summary>;
  const [open, setOpen] = useState(props.open);

  return (
    <details
      {...props}
      ref={detailsRef}
      open={open}
      className={clsx(InfimaClasses, styles.details, className)}
      onMouseDown={(e) => {
        const target = e.target as HTMLElement;
        // Prevent a double-click to highlight summary text
        if (isInSummary(target) && e.detail > 1) {
          e.preventDefault();
        }
      }}
      onClick={(e) => {
        e.stopPropagation(); // For isolation of multiple nested details/summary
        const target = e.target as HTMLElement;
        const shouldToggle = isInSummary(target) && hasParent(target, detailsRef.current!);
        if (!shouldToggle) {
          return;
        }
        e.preventDefault();
        setOpen(!open);
      }}
      onToggle={() => {
        setOpen(detailsRef.current!.open);
      }}
    >
      {summaryElement}
      <div className={styles.collapsibleContent}>{children}</div>
    </details>
  );
}
