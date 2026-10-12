import React, { type JSX, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Example from '@site/src/components/Example';
import styles from '../shared.module.css';

export default function TheoLiveDemo(): JSX.Element {
  const [latency, setLatency] = useState<number | null>(null);

  return (
    <>
      <Example
        src={useBaseUrl('/theoplayer/v11/examples/theolive/demo.html')}
        onMessage={(message) => {
          if (message.type === 'latency') {
            setLatency(typeof message.latency === 'number' ? message.latency : null);
          }
        }}
      />
      <div className={styles.panel}>
        <table className={styles.readout}>
          <tbody>
            <tr>
              <th>player.latency.currentLatency</th>
              <td>{latency == null ? '—' : `${latency.toFixed(2)} s`}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
