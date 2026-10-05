import React, { type JSX, useRef, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Example, { type ExampleController } from '@site/src/components/Example';
import RangeBar, { type TimeRange } from './RangeBar';
import styles from '../shared.module.css';

type Preload = 'none' | 'metadata' | 'auto';

interface PreloadState {
  preload: string;
  readyState: number;
  duration: number;
  currentTime: number;
  buffered: TimeRange[];
  bufferedAhead: number;
}

const readyStateNames = ['HAVE_NOTHING', 'HAVE_METADATA', 'HAVE_CURRENT_DATA', 'HAVE_FUTURE_DATA', 'HAVE_ENOUGH_DATA'];

export default function PreloadDemo(): JSX.Element {
  const exampleRef = useRef<ExampleController>(null);
  const [preload, setPreload] = useState<Preload>('auto');
  const [state, setState] = useState<PreloadState>({
    preload: 'auto',
    readyState: 0,
    duration: NaN,
    currentTime: 0,
    buffered: [],
    bufferedAhead: 0,
  });

  function selectPreload(value: Preload): void {
    setPreload(value);
    exampleRef.current?.postMessage({ type: 'set-preload', preload: value });
  }

  const end = Number.isFinite(state.duration) ? state.duration : Math.max(1, ...state.buffered.map((r) => r.end));

  return (
    <>
      <Example
        ref={exampleRef}
        src={useBaseUrl('/theoplayer/v11/examples/preload/demo.html')}
        onMessage={(message) => {
          if (message.type === 'preload-state') {
            setState({
              preload: typeof message.preload === 'string' ? message.preload : '',
              readyState: typeof message.readyState === 'number' ? message.readyState : 0,
              duration: typeof message.duration === 'number' ? message.duration : NaN,
              currentTime: typeof message.currentTime === 'number' ? message.currentTime : 0,
              buffered: Array.isArray(message.buffered) ? (message.buffered as TimeRange[]) : [],
              bufferedAhead: typeof message.bufferedAhead === 'number' ? message.bufferedAhead : 0,
            });
          }
        }}
      />
      <div className={styles.panel}>
        <div className={styles.controls}>
          <strong>Preload</strong>
          <div className="button-group">
            {(['none', 'metadata', 'auto'] as Preload[]).map((value) => (
              <button
                key={value}
                className={`button button--sm ${preload === value ? 'button--primary' : 'button--secondary'}`}
                aria-pressed={preload === value}
                onClick={() => selectPreload(value)}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
        <RangeBar label="Buffered" ranges={state.buffered} start={0} end={end} color="var(--ifm-color-primary)" currentTime={state.currentTime} />
        <table className={styles.readout}>
          <tbody>
            <tr>
              <th>player.preload</th>
              <td>{state.preload || '—'}</td>
            </tr>
            <tr>
              <th>readyState</th>
              <td>{readyStateNames[state.readyState] ?? state.readyState}</td>
            </tr>
            <tr>
              <th>Buffered ahead</th>
              <td>{state.bufferedAhead.toFixed(1)} s</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
