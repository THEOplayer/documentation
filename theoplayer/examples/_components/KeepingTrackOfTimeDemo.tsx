import React, { type JSX, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Example from '@site/src/components/Example';
import RangeBar, { type TimeRange } from './RangeBar';
import styles from '../shared.module.css';

interface TimeState {
  currentTime: number;
  duration: number;
  paused: boolean;
  played: TimeRange[];
  buffered: TimeRange[];
  seekable: TimeRange[];
}

const emptyState: TimeState = { currentTime: 0, duration: 0, paused: true, played: [], buffered: [], seekable: [] };

function formatTime(value: number): string {
  if (!Number.isFinite(value)) return '—';
  const minutes = Math.floor(value / 60);
  const seconds = (value % 60).toFixed(1).padStart(4, '0');
  return `${minutes}:${seconds}`;
}

export default function KeepingTrackOfTimeDemo(): JSX.Element {
  const [state, setState] = useState<TimeState>(emptyState);

  return (
    <>
      <Example
        src={useBaseUrl('/theoplayer/v11/examples/keeping-track-of-time/demo.html')}
        onMessage={(message) => {
          if (message.type === 'time-ranges') {
            setState({
              currentTime: typeof message.currentTime === 'number' ? message.currentTime : 0,
              duration: typeof message.duration === 'number' ? message.duration : 0,
              paused: message.paused !== false,
              played: Array.isArray(message.played) ? (message.played as TimeRange[]) : [],
              buffered: Array.isArray(message.buffered) ? (message.buffered as TimeRange[]) : [],
              seekable: Array.isArray(message.seekable) ? (message.seekable as TimeRange[]) : [],
            });
          }
        }}
      />
      <div className={styles.panel}>
        <table className={styles.readout}>
          <tbody>
            <tr>
              <th>Current time</th>
              <td>{formatTime(state.currentTime)}</td>
            </tr>
            <tr>
              <th>Duration</th>
              <td>{formatTime(state.duration)}</td>
            </tr>
            <tr>
              <th>Paused</th>
              <td>{state.paused ? 'Yes' : 'No'}</td>
            </tr>
          </tbody>
        </table>
        <RangeBar label="Played" ranges={state.played} start={0} end={state.duration} color="#2e8b57" />
        <RangeBar label="Buffered" ranges={state.buffered} start={0} end={state.duration} color="#4c8bf5" />
        <RangeBar label="Seekable" ranges={state.seekable} start={0} end={state.duration} color="#f0ad4e" />
      </div>
    </>
  );
}
