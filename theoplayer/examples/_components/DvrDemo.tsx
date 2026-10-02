import React, { type JSX, useRef, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Example, { type ExampleController } from '@site/src/components/Example';
import RangeBar, { type TimeRange } from './RangeBar';
import styles from '../shared.module.css';

interface DvrState {
  currentTime: number;
  duration: number;
  seekableStart: number | null;
  seekableEnd: number | null;
  seekableLength: number | null;
  behindLive: number | null;
  programDateTime: string | null;
  buffered: TimeRange[];
  seekable: TimeRange[];
}

const emptyState: DvrState = {
  currentTime: 0,
  duration: Number.POSITIVE_INFINITY,
  seekableStart: null,
  seekableEnd: null,
  seekableLength: null,
  behindLive: null,
  programDateTime: null,
  buffered: [],
  seekable: [],
};

function seconds(value: number | null): string {
  return value === null || !Number.isFinite(value) ? '—' : `${value.toFixed(1)} s`;
}

export default function DvrDemo(): JSX.Element {
  const exampleRef = useRef<ExampleController>(null);
  const [state, setState] = useState<DvrState>(emptyState);

  function seek(action: 'back' | 'forward' | 'start' | 'live'): void {
    exampleRef.current?.postMessage({ type: 'dvr-seek', action });
  }

  return (
    <>
      <Example
        ref={exampleRef}
        src={useBaseUrl('/theoplayer/v11/examples/dvr/demo.html')}
        onMessage={(message) => {
          if (message.type === 'dvr') {
            setState({ ...emptyState, ...message } as DvrState);
          }
        }}
      />
      <div className={styles.panel}>
        <h3 className={styles.panelTitle}>Seek controls</h3>
        <div className={styles.controls}>
          <div className="button-group">
            <button className="button button--secondary button--sm" onClick={() => seek('back')}>
              −30 s
            </button>
            <button className="button button--secondary button--sm" onClick={() => seek('forward')}>
              +30 s
            </button>
            <button className="button button--secondary button--sm" onClick={() => seek('start')}>
              Start of window
            </button>
            <button className="button button--primary button--sm" onClick={() => seek('live')}>
              Go live
            </button>
          </div>
        </div>
        <RangeBar
          label="Buffered"
          ranges={state.buffered}
          start={state.seekable[0]?.start ?? 0}
          end={state.seekable[state.seekable.length - 1]?.end ?? 0}
          color="#4c8bf5"
          currentTime={state.currentTime}
        />
        <RangeBar
          label="Seekable"
          ranges={state.seekable}
          start={state.seekable[0]?.start ?? 0}
          end={state.seekable[state.seekable.length - 1]?.end ?? 0}
          color="#f0ad4e"
          currentTime={state.currentTime}
        />
        <table className={styles.readout}>
          <tbody>
            <tr>
              <th>DVR window</th>
              <td>
                {seconds(state.seekableStart)}–{seconds(state.seekableEnd)} ({seconds(state.seekableLength)})
              </td>
            </tr>
            <tr>
              <th>Behind live</th>
              <td>{seconds(state.behindLive)}</td>
            </tr>
            <tr>
              <th>Current time</th>
              <td>{seconds(state.currentTime)}</td>
            </tr>
            <tr>
              <th>Program date/time</th>
              <td>{state.programDateTime ? new Date(state.programDateTime).toLocaleString() : '—'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
