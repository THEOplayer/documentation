import React, { type JSX, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Example from '@site/src/components/Example';
import styles from '../shared.module.css';

interface AirPlayState {
  supported: boolean;
  state: string;
  casting: boolean;
}

export default function AirPlayDemo(): JSX.Element {
  const [state, setState] = useState<AirPlayState | undefined>(undefined);
  return (
    <>
      <Example
        src={useBaseUrl('/theoplayer/v11/examples/airplay/demo.html')}
        onMessage={(message) => {
          if (message.type === 'airplay') setState(message as unknown as AirPlayState);
        }}
      />
      <div className={styles.panel}>
        <table className={styles.readout}>
          <tbody>
            <tr>
              <th>
                <code>player.cast.airplay.state</code>
              </th>
              <td>{state?.state ?? '-'}</td>
            </tr>
            <tr>
              <th>
                <code>player.cast.airplay.casting</code>
              </th>
              <td>{state ? String(state.casting) : '-'}</td>
            </tr>
          </tbody>
        </table>
        {state && state.state === 'unavailable' && (
          <p>AirPlay is not available in this browser. Open this page in Safari on a Mac, iPhone or iPad.</p>
        )}
      </div>
    </>
  );
}
