import React, { ComponentProps, type ReactNode } from 'react';

export interface Props extends ComponentProps<'td'> {
  // Support lowercase colspan and rowspan props
  colspan?: number;
  rowspan?: number;
}

export default function MDXTd({ colspan, rowspan, ...props }: Props): ReactNode | undefined {
  return <td colSpan={colspan} rowSpan={rowspan} {...props} />;
}
