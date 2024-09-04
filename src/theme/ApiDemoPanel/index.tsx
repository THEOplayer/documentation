import React from 'react';
import ApiDemoPanel from '@theme-original/ApiDemoPanel';
import type ApiDemoPanelType from '@theme/ApiDemoPanel';
import type { WrapperProps } from '@docusaurus/types';
import styles from './styles.module.css';

type Props = WrapperProps<typeof ApiDemoPanelType>;

export default function ApiDemoPanelWrapper(props: Props): JSX.Element {
  return (
    <div className={styles.apiDemoPanel}>
      <ApiDemoPanel {...props} />
    </div>
  );
}
