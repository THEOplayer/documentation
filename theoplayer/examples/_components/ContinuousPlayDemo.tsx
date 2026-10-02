import React, { type JSX, useRef, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Example, { type ExampleController } from '@site/src/components/Example';
import styles from '../shared.module.css';

interface ContinuousPlayState {
  saved: number | null;
  restoredFrom: number | null;
  currentTime: number;
}

function formatTime(value: number | null): string {
  if (value === null || !Number.isFinite(value)) return '—';
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60);
  return `${minutes}:${String(seconds).padStart(2, '0')}`;
}

export default function ContinuousPlayDemo(): JSX.Element {
  const exampleRef = useRef<ExampleController>(null);
  const [playerKey, setPlayerKey] = useState(0);
  const [state, setState] = useState<ContinuousPlayState>({ saved: null, restoredFrom: null, currentTime: 0 });

  return (
    <>
      <Example
        key={playerKey}
        ref={exampleRef}
        src={useBaseUrl('/theoplayer/v11/examples/continuous-play/demo.html')}
        onMessage={(message) => {
          if (message.type === 'continuous-play') {
            setState({
              saved: typeof message.saved === 'number' ? message.saved : null,
              restoredFrom: typeof message.restoredFrom === 'number' ? message.restoredFrom : null,
              currentTime: typeof message.currentTime === 'number' ? message.currentTime : 0,
            });
          }
        }}
      />
      <div className={styles.panel}>
        <h3 className={styles.panelTitle}>Saved position</h3>
        <div className={styles.controls}>
          <button className="button button--primary button--sm" onClick={() => setPlayerKey((key) => key + 1)}>
            Reload player
          </button>
          <button className="button button--secondary button--sm" onClick={() => exampleRef.current?.postMessage({ type: 'clear-saved-position' })}>
            Clear saved position
          </button>
        </div>
        <table className={styles.readout}>
          <tbody>
            <tr>
              <th>Saved</th>
              <td>{formatTime(state.saved)}</td>
            </tr>
            <tr>
              <th>Restored from</th>
              <td>{formatTime(state.restoredFrom)}</td>
            </tr>
            <tr>
              <th>Current playhead</th>
              <td>{formatTime(state.currentTime)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
