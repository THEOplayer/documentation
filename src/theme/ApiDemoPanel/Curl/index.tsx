import React from 'react';
import Curl from '@theme-original/ApiDemoPanel/Curl';
import type CurlType from '@theme/ApiDemoPanel/Curl';
import type { WrapperProps } from '@docusaurus/types';
type Props = WrapperProps<typeof CurlType>;

import styles from './styles.module.css';

export default function CurlWrapper(props: Props): JSX.Element {
  return (
    <div className={styles.curl}>
      <Curl {...props} />
    </div>
  );
}
