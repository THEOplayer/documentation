import React, { type ReactNode } from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';
import Link, { type Props as LinkProps } from '@docusaurus/Link';

export interface IconGridButtonProps extends LinkProps {
  large?: boolean;
  children?: ReactNode;
}

export function IconGridButton({ className, large, children, ...props }: IconGridButtonProps) {
  return (
    <Link className={clsx(styles.iconGridButton, { [styles.large]: large }, className)} {...props}>
      {children}
    </Link>
  );
}

export interface IconGridProps {
  className?: string;
  children?: ReactNode;
}

export function IconGrid({ className, ...props }: IconGridProps) {
  return <div className={clsx(styles.iconGrid, className)} {...props} />;
}
