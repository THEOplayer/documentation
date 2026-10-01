import React, { type JSX, useRef, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Example, { type ExampleController } from '@site/src/components/Example';
import styles from '../shared.module.css';

type MediaType = 'auto' | 'hls' | 'dash';

interface SwitchRecord {
  source: string;
  ttff: number | null;
  sinceSourceChange: number | null;
  muted: boolean;
  error: string | null;
}

const presets = [
  {
    label: 'Big Buck Bunny',
    src: 'https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny_metadata.m3u8',
    mediaType: 'hls',
  },
  {
    label: 'Frame counter 60 fps',
    src: 'https://cdn.theoplayer.com/video/framecounter/framecounter_60fps/index.m3u8',
    mediaType: 'hls',
  },
  {
    label: 'Adult Swim',
    src: 'https://cdn.theoplayer.com/video/adultswim2/clip.m3u8',
    mediaType: 'hls',
  },
];

function formatMilliseconds(value: number | null): string {
  return value === null || !Number.isFinite(value) ? '—' : `${value.toFixed(0)} ms`;
}

export default function FastSourceSwitchingDemo(): JSX.Element {
  const exampleRef = useRef<ExampleController>(null);
  const [customUrl, setCustomUrl] = useState('');
  const [mediaType, setMediaType] = useState<MediaType>('auto');
  const [history, setHistory] = useState<SwitchRecord[]>([]);
  const latest = history[0];

  function loadSource(src: string, label: string, type: MediaType): void {
    exampleRef.current?.postMessage({ type: 'switch-source', src, label, mediaType: type });
  }

  return (
    <>
      <Example
        ref={exampleRef}
        src={useBaseUrl('/theoplayer/v11/examples/fast-source-switching/demo.html')}
        onMessage={(message) => {
          if (message.type === 'switch-measurements' && Array.isArray(message.history)) {
            setHistory(message.history as SwitchRecord[]);
          }
        }}
      />
      <div className={styles.panel}>
        <h3 className={styles.panelTitle}>Presets</h3>
        <div className={styles.controls}>
          <div className="button-group">
            {presets.map((preset) => (
              <button
                key={preset.label}
                className="button button--secondary button--sm"
                onClick={() => loadSource(preset.src, preset.label, preset.mediaType as MediaType)}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>
        <h3 className={styles.panelTitle}>Custom stream</h3>
        <div className={styles.controls}>
          <label>
            URL
            <input className={styles.input} type="url" value={customUrl} onChange={(event) => setCustomUrl(event.target.value)} />
          </label>
          <label>
            Type
            <select className={styles.input} value={mediaType} onChange={(event) => setMediaType(event.target.value as MediaType)}>
              <option value="auto">Auto</option>
              <option value="hls">HLS</option>
              <option value="dash">DASH</option>
            </select>
          </label>
          <button
            className="button button--primary button--sm"
            disabled={!customUrl.trim()}
            onClick={() => loadSource(customUrl.trim(), 'Custom stream', mediaType)}
          >
            Load
          </button>
        </div>
        <h3 className={styles.panelTitle}>Latest TTFF</h3>
        <p>
          {latest ? `${latest.source}: ${formatMilliseconds(latest.ttff)}${latest.muted ? ' (muted)' : ''}` : 'Waiting for the first measurement.'}
        </p>
        {latest?.error && <p role="alert">Error: {latest.error}</p>}
        <h3 className={styles.panelTitle}>Recent switches</h3>
        <table className={`${styles.readout} ${styles.fastSourceReadout}`}>
          <thead>
            <tr>
              <th>Source</th>
              <th>TTFF</th>
              <th>Since source</th>
              <th>Muted</th>
            </tr>
          </thead>
          <tbody>
            {history.length === 0 ? (
              <tr>
                <td colSpan={4}>No completed switches.</td>
              </tr>
            ) : (
              history.map((record, index) => (
                <tr key={`${record.source}-${index}`}>
                  <td>{record.source}</td>
                  <td>{formatMilliseconds(record.ttff)}</td>
                  <td>{formatMilliseconds(record.sinceSourceChange)}</td>
                  <td>{record.muted ? 'Yes' : 'No'}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
