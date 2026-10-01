import React, { type JSX, useRef, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Example, { type ExampleController } from '@site/src/components/Example';
import styles from '../shared.module.css';

interface FrameState {
  frame: number;
  currentTime: number;
  frameRate: number;
  paused: boolean;
}

export default function FrameAccurateSeekingDemo(): JSX.Element {
  const exampleRef = useRef<ExampleController>(null);
  const [state, setState] = useState<FrameState | undefined>(undefined);
  const [targetFrame, setTargetFrame] = useState('240');

  const send = (action: 'previous' | 'next' | 'goto', frame?: number) => {
    exampleRef.current?.postMessage({ type: 'frame', action, frame });
  };

  return (
    <>
      <Example
        ref={exampleRef}
        src={useBaseUrl('/theoplayer/v11/examples/frame-accurate-seeking/demo.html')}
        onMessage={(message) => {
          if (message.type === 'frame') setState(message as unknown as FrameState);
        }}
      />
      <div className={styles.panel}>
        <div className={styles.controls}>
          <button className="button button--secondary button--sm" onClick={() => send('previous')}>
            Previous frame
          </button>
          <button className="button button--secondary button--sm" onClick={() => send('next')}>
            Next frame
          </button>
          <form
            className={styles.controls}
            style={{ marginBottom: 0 }}
            onSubmit={(e) => {
              e.preventDefault();
              send('goto', Math.max(0, Math.floor(Number(targetFrame) || 0)));
            }}
          >
            <label>
              Frame:
              <input className={styles.input} type="number" min="0" step="1" value={targetFrame} onChange={(e) => setTargetFrame(e.target.value)} />
            </label>
            <button className="button button--primary button--sm" type="submit">
              Go to frame
            </button>
          </form>
        </div>
        <table className={styles.readout}>
          <tbody>
            <tr>
              <th>Current frame</th>
              <td>{state ? state.frame : '-'}</td>
            </tr>
            <tr>
              <th>Current time</th>
              <td>{state ? `${state.currentTime.toFixed(3)} s` : '-'}</td>
            </tr>
            <tr>
              <th>Frame rate</th>
              <td>{state ? `${state.frameRate} fps` : '-'}</td>
            </tr>
            <tr>
              <th>Status</th>
              <td>{state ? (state.paused ? 'paused' : 'playing') : '-'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
