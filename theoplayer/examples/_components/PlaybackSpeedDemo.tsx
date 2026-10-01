import React, { type JSX, useRef, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import Example, { type ExampleController } from '@site/src/components/Example';
import styles from '../shared.module.css';

const rates = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 2, 4];

export default function PlaybackSpeedDemo(): JSX.Element {
  const exampleRef = useRef<ExampleController>(null);
  const [playbackRate, setPlaybackRate] = useState(1);
  return (
    <>
      <Example
        ref={exampleRef}
        src={useBaseUrl('/theoplayer/v11/examples/playback-speed/demo.html')}
        onMessage={(message) => {
          if (message.type === 'ratechange') setPlaybackRate(message.playbackRate as number);
        }}
      />
      <div className={styles.panel}>
        <div className={styles.controls}>
          <div className="button-group">
            {rates.map((rate) => (
              <button
                key={rate}
                className={clsx('button button--sm', rate === playbackRate ? 'button--primary' : 'button--secondary')}
                onClick={() => exampleRef.current?.postMessage({ type: 'playback-rate', playbackRate: rate })}
              >
                {rate}×
              </button>
            ))}
          </div>
        </div>
        <table className={styles.readout}>
          <tbody>
            <tr>
              <th>
                <code>player.playbackRate</code>
              </th>
              <td>{playbackRate}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
