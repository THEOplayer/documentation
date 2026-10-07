import React, { type JSX, useRef, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Example, { type ExampleController } from '@site/src/components/Example';
import styles from '../shared.module.css';

interface StreamTemplate {
  id: string;
  label: string;
  assetName: string;
  streamType: 'VOD' | 'LIVE';
  source: {
    sources: { src: string; type: string };
    poster?: string;
    metadata: { title: string };
  };
}

interface EventEntry {
  time: string;
  event: string;
  details: string;
}

const templates: StreamTemplate[] = [
  {
    id: 'hls-vod',
    label: 'HLS VOD (Big Buck Bunny)',
    assetName: 'Big Buck Bunny (HLS)',
    streamType: 'VOD',
    source: {
      sources: { src: 'https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny_corrected.m3u8', type: 'application/x-mpegurl' },
      poster: 'https://cdn.theoplayer.com/video/big_buck_bunny/poster.jpg',
      metadata: { title: 'Big Buck Bunny' },
    },
  },
  {
    id: 'hls-live',
    label: 'HLS live (Unified Streaming)',
    assetName: 'Live stream (HLS)',
    streamType: 'LIVE',
    source: {
      sources: { src: 'https://demo.unified-streaming.com/k8s/live/stable/live.isml/.m3u8', type: 'application/x-mpegurl' },
      metadata: { title: 'Live stream' },
    },
  },
  {
    id: 'dash-vod',
    label: 'DASH VOD (Big Buck Bunny)',
    assetName: 'Big Buck Bunny (DASH)',
    streamType: 'VOD',
    source: {
      sources: { src: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd', type: 'application/dash+xml' },
      poster: 'https://cdn.theoplayer.com/video/big_buck_bunny/poster.jpg',
      metadata: { title: 'Big Buck Bunny' },
    },
  },
  {
    id: 'dash-live',
    label: 'DASH live (Unified Streaming)',
    assetName: 'Live stream (DASH)',
    streamType: 'LIVE',
    source: {
      sources: { src: 'https://demo.unified-streaming.com/k8s/live/stable/live.isml/.mpd', type: 'application/dash+xml' },
      metadata: { title: 'Live stream' },
    },
  },
];

export default function ConvivaDemo(): JSX.Element {
  const exampleRef = useRef<ExampleController>(null);
  const [templateId, setTemplateId] = useState(templates[0].id);
  const [events, setEvents] = useState<EventEntry[]>([]);

  function selectTemplate(id: string): void {
    setTemplateId(id);
    const template = templates.find((entry) => entry.id === id);
    if (!template) return;
    setEvents([]);
    exampleRef.current?.postMessage({
      type: 'load-source',
      stream: { assetName: template.assetName, streamType: template.streamType, source: template.source },
    });
  }

  return (
    <>
      <Example
        ref={exampleRef}
        src={useBaseUrl('/theoplayer/v11/examples/conviva/demo.html')}
        onMessage={(message) => {
          if (message.type === 'conviva-events' && Array.isArray(message.events)) {
            setEvents(message.events as EventEntry[]);
          }
        }}
      />
      <div className={styles.panel}>
        <div className={styles.controls}>
          <strong>Stream templates</strong>
          <div className="button-group">
            {templates.map((template) => (
              <button
                key={template.id}
                className={`button button--sm ${templateId === template.id ? 'button--primary' : 'button--secondary'}`}
                aria-pressed={templateId === template.id}
                onClick={() => selectTemplate(template.id)}
              >
                {template.label}
              </button>
            ))}
          </div>
        </div>
        <div className={`${styles.eventLog} ${styles.readoutScroll}`}>
          {events.length === 0 ? (
            <span className={styles.eventLogEmpty}>No events reported yet.</span>
          ) : (
            events.map((entry, index) => (
              <div key={`${entry.time}-${index}`} className={styles.eventLogRow}>
                <span>{entry.time}</span>
                <span>{entry.event}</span>
                <span>{entry.details || '—'}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
