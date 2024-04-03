import React, { ComponentProps, type ReactNode } from 'react';

export interface Props extends ComponentProps<'th'> {
  // Support lowercase colspan and rowspan props
  colspan?: number;
  rowspan?: number;
}

export default function MDXTh({ colspan, rowspan, ...props }: Props): ReactNode | undefined {
  return <th colSpan={colspan} rowSpan={rowspan} {...props} />;
}
