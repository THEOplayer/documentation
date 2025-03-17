import React, { ComponentProps, type ReactNode } from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';
import Link, { type Props as LinkProps } from '@docusaurus/Link';

export interface IconGridButtonProps extends LinkProps {
  children?: ReactNode;
}

export function IconGridButton({ className, children, ...props }: IconGridButtonProps) {
  return (
    <Link className={clsx(styles.iconGridButton)} {...props}>
      {children}
    </Link>
  );
}

export interface IconGridProps {
  className?: string;
  children?: ReactNode;
}

export function IconGrid({ className, ...props }: IconGridProps) {
  return <div className={clsx(styles.iconGrid)} {...props} />;
}
