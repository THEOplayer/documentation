import React, { type ReactNode } from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';

export interface IconGridButtonProps {
  className?: string;
  large?: boolean;
  children?: ReactNode;
}

export function IconGridButton({ className, large, children, ...props }: IconGridButtonProps) {
  return (
    <div className={clsx(styles.iconGridButton, { [styles.large]: large }, className)} {...props}>
      {children}
    </div>
  );
}

export interface IconGridProps {
  className?: string;
  children?: ReactNode;
}

export function IconGrid({ className, ...props }: IconGridProps) {
  return <div className={clsx(styles.iconGrid, className)} {...props} />;
}
