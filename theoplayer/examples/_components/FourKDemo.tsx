import React, { type JSX, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Example from '@site/src/components/Example';
import styles from '../shared.module.css';
import { formatBandwidth, formatQuality, type QualityInfo } from './utils';

export default function FourKDemo(): JSX.Element {
  const [quality, setQuality] = useState<QualityInfo | undefined>(undefined);
  return (
    <>
      <Example
        src={useBaseUrl('/theoplayer/v11/examples/4k-streaming/demo.html')}
        onMessage={(message) => {
          if (message.type === 'activequality') setQuality(message.quality as QualityInfo | undefined);
        }}
      />
      <div className={styles.panel}>
        <table className={styles.readout}>
          <tbody>
            <tr>
              <th>Active video quality</th>
              <td>{quality ? formatQuality(quality) : 'Press play to start'}</td>
            </tr>
            <tr>
              <th>Frame rate</th>
              <td>{quality?.frameRate ? `${quality.frameRate} fps` : '-'}</td>
            </tr>
            <tr>
              <th>Bitrate</th>
              <td>{formatBandwidth(quality?.bandwidth)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
