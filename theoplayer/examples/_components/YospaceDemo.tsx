import React, { type JSX, useRef, useState } from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Example, { type ExampleController } from '@site/src/components/Example';
import styles from '../shared.module.css';

const streams = [
  { id: 'hls', label: 'HLS live' },
  { id: 'hlsPause', label: 'HLS live-pause' },
  { id: 'dash', label: 'DASH live-pause' },
] as const;

interface EventEntry {
  time: string;
  event: string;
  details: string;
}

interface AdBreak {
  ads: number;
  timeOffset: number;
}

export default function YospaceDemo(): JSX.Element {
  const exampleRef = useRef<ExampleController>(null);
  const [stream, setStream] = useState<string>('hls');
  const [loading, setLoading] = useState(true);
  const [adBreak, setAdBreak] = useState<AdBreak | null>(null);
  const [events, setEvents] = useState<EventEntry[]>([]);

  return (
    <>
      <Example
        ref={exampleRef}
        src={useBaseUrl('/theoplayer/v11/examples/yospace/demo.html')}
        onMessage={(message) => {
          if (message.type === 'yospace-stream') {
            setStream(message.stream as string);
            setLoading(message.loading as boolean);
          } else if (message.type === 'yospace-adbreak') {
            setAdBreak(message.adBreak as AdBreak | null);
          } else if (message.type === 'yospace-events') {
            setEvents(message.events as EventEntry[]);
          }
        }}
      />
      <div className={styles.panel}>
        <div className={styles.controls}>
          <div className="button-group" role="group" aria-label="Yospace stream">
            {streams.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                aria-pressed={id === stream}
                disabled={loading}
                className={clsx('button button--sm', id === stream ? 'button--primary' : 'button--secondary')}
                onClick={() => exampleRef.current?.postMessage({ type: 'yospace-stream', stream: id })}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        <p className={styles.panelTitle} aria-live="polite">
          Current ad break: {adBreak ? `${adBreak.ads} ad(s), at ${adBreak.timeOffset} s` : 'none'}
        </p>
        <div className={`${styles.eventLog} ${styles.readoutScroll}`} aria-label="Ad event log">
          {events.length === 0 ? (
            <span className={styles.eventLogEmpty}>No events reported yet.</span>
          ) : (
            events.map((entry, index) => (
              <div key={`${entry.time}-${index}`} className={styles.eventLogRow}>
                <span>{entry.time}</span>
                <span>{entry.event}</span>
                <span>{entry.details}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
