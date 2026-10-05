import React, { type JSX, useRef, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Example, { type ExampleController } from '@site/src/components/Example';
import styles from '../shared.module.css';

interface NetworkEntry {
  kind: 'Request' | 'Response';
  time: string;
  method?: string;
  status?: string;
  type?: string;
  subType?: string;
  url: string;
  contentType?: string;
  contentLength?: string;
}

type Filter = 'all' | 'Request' | 'Response';

export default function NetworkApiDemo(): JSX.Element {
  const exampleRef = useRef<ExampleController>(null);
  const [entries, setEntries] = useState<NetworkEntry[]>([]);
  const [filter, setFilter] = useState<Filter>('all');
  const [paused, setPaused] = useState(false);
  const [reverse, setReverse] = useState(true);
  const pausedRef = useRef(false);
  pausedRef.current = paused;

  const filtered = entries.filter((entry) => filter === 'all' || entry.kind === filter);

  return (
    <>
      <Example
        ref={exampleRef}
        src={useBaseUrl('/theoplayer/v11/examples/network-api/demo.html')}
        onMessage={(message) => {
          if (message.type === 'network-entry' && message.entry && !pausedRef.current) {
            setEntries((current) => [message.entry as NetworkEntry, ...current].slice(0, 200));
          }
        }}
      />
      <div className={styles.panel}>
        <div className={styles.controls}>
          <h3 className={styles.panelTitle}>Network log</h3>
          <div className="button-group">
            {(['all', 'Request', 'Response'] as Filter[]).map((value) => (
              <button
                key={value}
                className={`button button--sm ${filter === value ? 'button--primary' : 'button--secondary'}`}
                aria-pressed={filter === value}
                onClick={() => setFilter(value)}
              >
                {value === 'all' ? 'All' : `${value}s`}
              </button>
            ))}
          </div>
          <button className="button button--secondary button--sm" onClick={() => setPaused((current) => !current)} aria-pressed={paused}>
            {paused ? 'Resume log' : 'Pause log'}
          </button>
          <button className="button button--secondary button--sm" onClick={() => setEntries([])}>
            Clear
          </button>
          <label className={styles.checkboxField}>
            <input
              type="checkbox"
              checked={reverse}
              onChange={(event) => {
                setReverse(event.target.checked);
                exampleRef.current?.postMessage({ type: 'network-reverse', enabled: event.target.checked });
              }}
            />
            Reverse subtitle text (response interceptor)
          </label>
        </div>
        <div className={`${styles.eventLog} ${styles.readoutScroll}`}>
          {filtered.length === 0 ? (
            <span className={styles.eventLogEmpty}>No requests logged yet. Play the video to see network traffic.</span>
          ) : (
            filtered.map((entry, index) => (
              <div key={`${entry.time}-${index}`} className={styles.eventLogRow}>
                <span>{entry.time}</span>
                <span>{entry.kind}</span>
                <span>
                  {entry.kind === 'Request' ? entry.method : entry.status} {entry.type}
                  {entry.subType && entry.subType !== '—' ? `/${entry.subType}` : ''}
                </span>
                <span className={styles.networkUrl}>{entry.url}</span>
                <span>
                  {entry.contentType} · {entry.contentLength}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
