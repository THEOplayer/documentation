import React, { type JSX, useEffect, useRef, useState } from 'react';
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
    metadata: { title: string; subtitle: string };
  };
}

interface EventEntry {
  time: string;
  event: string;
  details: string;
}

const DEFAULT_CUSTOMER_KEY = '876a2328cc34e791190d855daf389567c96d1e86';
const DEFAULT_GATEWAY_URL = `https://${DEFAULT_CUSTOMER_KEY}.ts-testonly.conviva.com`;

const templates: StreamTemplate[] = [
  {
    id: 'hls-vod',
    label: 'HLS VOD (Big Buck Bunny)',
    assetName: 'Big Buck Bunny (HLS)',
    streamType: 'VOD',
    source: {
      sources: { src: 'https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny_corrected.m3u8', type: 'application/x-mpegurl' },
      poster: 'https://cdn.theoplayer.com/video/big_buck_bunny/poster.jpg',
      metadata: { title: 'Big Buck Bunny', subtitle: 'HLS • VOD' },
    },
  },
  {
    id: 'hls-live',
    label: 'HLS live (Unified Streaming)',
    assetName: 'Live stream (HLS)',
    streamType: 'LIVE',
    source: {
      sources: { src: 'https://demo.unified-streaming.com/k8s/live/stable/live.isml/.m3u8', type: 'application/x-mpegurl' },
      metadata: { title: 'Live stream', subtitle: 'HLS • LIVE' },
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
      metadata: { title: 'Big Buck Bunny', subtitle: 'DASH • VOD' },
    },
  },
  {
    id: 'dash-live',
    label: 'DASH live (Unified Streaming)',
    assetName: 'Live stream (DASH)',
    streamType: 'LIVE',
    source: {
      sources: { src: 'https://demo.unified-streaming.com/k8s/live/stable/live.isml/.mpd', type: 'application/dash+xml' },
      metadata: { title: 'Live stream', subtitle: 'DASH • LIVE' },
    },
  },
];

export default function ConvivaDemo(): JSX.Element {
  const exampleRef = useRef<ExampleController>(null);
  const logRef = useRef<HTMLDivElement>(null);
  const [templateId, setTemplateId] = useState(templates[0].id);
  const [customerKey, setCustomerKey] = useState('');
  const [gatewayUrl, setGatewayUrl] = useState('');
  const [events, setEvents] = useState<EventEntry[]>([]);

  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [events]);

  function loadStream(): void {
    const template = templates.find((entry) => entry.id === templateId);
    if (!template) return;
    exampleRef.current?.postMessage({
      type: 'load-stream',
      template: { assetName: template.assetName, streamType: template.streamType, source: template.source },
      // An empty input falls back to its placeholder value.
      customerKey: customerKey.trim() || DEFAULT_CUSTOMER_KEY,
      gatewayUrl: gatewayUrl.trim() || DEFAULT_GATEWAY_URL,
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
        <div className={styles.controlsColumn}>
          <label className={styles.formField}>
            <strong>Stream template</strong>
            <select className={styles.input} value={templateId} onChange={(event) => setTemplateId(event.target.value)}>
              {templates.map((template) => (
                <option key={template.id} value={template.id}>
                  {template.label}
                </option>
              ))}
            </select>
          </label>
          <label className={styles.formField}>
            <strong>Customer key</strong>
            <input
              type="text"
              className={styles.input}
              value={customerKey}
              placeholder={DEFAULT_CUSTOMER_KEY}
              onChange={(event) => setCustomerKey(event.target.value)}
            />
          </label>
          <label className={styles.formField}>
            <strong>Gateway URL</strong>
            <input
              type="text"
              className={styles.input}
              value={gatewayUrl}
              placeholder={DEFAULT_GATEWAY_URL}
              onChange={(event) => setGatewayUrl(event.target.value)}
            />
          </label>
          <button className="button button--primary" onClick={loadStream}>
            Load stream
          </button>
        </div>
        <div ref={logRef} className={`${styles.eventLog} ${styles.readoutScroll}`}>
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
