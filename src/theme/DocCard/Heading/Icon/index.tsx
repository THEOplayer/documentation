import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import Icon from '@site/src/components/Icon';
import { ThemeClassNames } from '@docusaurus/theme-common';
import type { Props } from '@theme/DocCard/Heading/Icon';

import styles from './styles.module.css';

interface SidebarItemCustomProps {
  icon?: string;
}

export default function DocCardHeadingIcon({ item, icon }: Props): ReactNode {
  const customIcon = (item.customProps as SidebarItemCustomProps)?.icon;
  if (customIcon) {
    return <Icon icon={customIcon} defaultIcon="" className={clsx(ThemeClassNames.docs.docCard.icon, styles.cardTitleIcon)} />;
  } else {
    return <span className={clsx(ThemeClassNames.docs.docCard.icon, styles.cardTitleIcon)}>{icon}</span>;
  }
}
