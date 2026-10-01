import React, { type JSX, useRef, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Example, { type ExampleController } from '@site/src/components/Example';
import styles from '../shared.module.css';

type Format = 'hls' | 'dash';
type Availability = 'vod' | 'live';
type PresetName = 'vod-hls' | 'vod-dash' | 'live-hls' | 'live-dash';

interface DaiForm {
  preset: PresetName;
  format: Format;
  availability: Availability;
  contentSourceID: string;
  videoID: string;
  assetKey: string;
  apiKey: string;
}

interface AdBreak {
  timeOffset: number | null;
  maxDuration: number | null;
  adCount: number;
}

interface DaiEvent {
  wallClock: string;
  playerTime: number | null;
  event: string;
  details: string;
}

interface DaiState {
  adBreaks: AdBreak[];
  events: DaiEvent[];
}

interface DaiTime {
  streamTime: number | null;
  contentTime: number | null;
}

const presets: Record<PresetName, DaiForm> = {
  'vod-hls': {
    preset: 'vod-hls',
    format: 'hls',
    availability: 'vod',
    contentSourceID: '2548831',
    videoID: 'tears-of-steel',
    assetKey: '',
    apiKey: '',
  },
  'vod-dash': {
    preset: 'vod-dash',
    format: 'dash',
    availability: 'vod',
    contentSourceID: '2559737',
    videoID: 'tos-dash',
    assetKey: '',
    apiKey: '',
  },
  'live-hls': {
    preset: 'live-hls',
    format: 'hls',
    availability: 'live',
    contentSourceID: '',
    videoID: '',
    assetKey: 'c-rArva4ShKVIAkNfy6HUQ',
    apiKey: '',
  },
  'live-dash': {
    preset: 'live-dash',
    format: 'dash',
    availability: 'live',
    contentSourceID: '',
    videoID: '',
    assetKey: 'PSzZMzAkSXCmlJOWDmRj8Q',
    apiKey: '',
  },
};

const presetLabels: Record<PresetName, string> = {
  'vod-hls': 'VOD HLS',
  'vod-dash': 'VOD DASH',
  'live-hls': 'Live HLS',
  'live-dash': 'Live DASH',
};

const emptyState: DaiState = { adBreaks: [], events: [] };
const emptyTime: DaiTime = { streamTime: null, contentTime: null };

function formatSeconds(value: number | null): string {
  return value === null || !Number.isFinite(value) ? '—' : `${value.toFixed(1)} s`;
}

export default function GoogleDaiDemo(): JSX.Element {
  const exampleRef = useRef<ExampleController>(null);
  const [form, setForm] = useState<DaiForm>(presets['vod-hls']);
  const [state, setState] = useState<DaiState>(emptyState);
  const [time, setTime] = useState<DaiTime>(emptyTime);

  function updateForm<K extends keyof DaiForm>(key: K, value: DaiForm[K]): void {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function loadStream(): void {
    const { preset, ...config } = form;
    exampleRef.current?.postMessage({ type: 'load-dai', config });
  }

  return (
    <>
      <Example
        ref={exampleRef}
        src={useBaseUrl('/theoplayer/v11/examples/google-dai/demo.html')}
        onMessage={(message) => {
          if (message.type === 'dai-state') {
            setState({
              adBreaks: Array.isArray(message.adBreaks) ? (message.adBreaks as AdBreak[]) : [],
              events: Array.isArray(message.events) ? (message.events as DaiEvent[]) : [],
            });
          } else if (message.type === 'dai-time') {
            setTime({
              streamTime: typeof message.streamTime === 'number' ? message.streamTime : null,
              contentTime: typeof message.contentTime === 'number' ? message.contentTime : null,
            });
          }
        }}
      />
      <div className={styles.panel}>
        <h3 className={styles.panelTitle}>Stream configuration</h3>
        <div className={styles.controls}>
          <label>
            Preset
            <select className={styles.input} value={form.preset} onChange={(event) => setForm(presets[event.target.value as PresetName])}>
              {(Object.keys(presetLabels) as PresetName[]).map((name) => (
                <option key={name} value={name}>
                  {presetLabels[name]}
                </option>
              ))}
            </select>
          </label>
          <label>
            Format
            <select className={styles.input} value={form.format} onChange={(event) => updateForm('format', event.target.value as Format)}>
              <option value="hls">HLS</option>
              <option value="dash">DASH</option>
            </select>
          </label>
          <label>
            Availability
            <select
              className={styles.input}
              value={form.availability}
              onChange={(event) => updateForm('availability', event.target.value as Availability)}
            >
              <option value="vod">VOD</option>
              <option value="live">Live</option>
            </select>
          </label>
          {form.availability === 'vod' ? (
            <>
              <label>
                Content source ID
                <input
                  className={styles.input}
                  value={form.contentSourceID}
                  onChange={(event) => updateForm('contentSourceID', event.target.value)}
                />
              </label>
              <label>
                Video ID
                <input className={styles.input} value={form.videoID} onChange={(event) => updateForm('videoID', event.target.value)} />
              </label>
            </>
          ) : (
            <label>
              Asset key
              <input className={styles.input} value={form.assetKey} onChange={(event) => updateForm('assetKey', event.target.value)} />
            </label>
          )}
          <label>
            API key (optional)
            <input className={styles.input} value={form.apiKey} onChange={(event) => updateForm('apiKey', event.target.value)} />
          </label>
          <button className="button button--primary button--sm" onClick={loadStream}>
            Load stream
          </button>
        </div>
        <h3 className={styles.panelTitle}>Stream and content time</h3>
        <table className={styles.readout}>
          <tbody>
            <tr>
              <th>Stream time</th>
              <td>{formatSeconds(time.streamTime)}</td>
            </tr>
            <tr>
              <th>Content time</th>
              <td>{formatSeconds(time.contentTime)}</td>
            </tr>
          </tbody>
        </table>
        <h3 className={styles.panelTitle}>Scheduled ad breaks</h3>
        <table className={styles.readout}>
          <thead>
            <tr>
              <th>Offset</th>
              <th>Max duration</th>
              <th>Ads</th>
            </tr>
          </thead>
          <tbody>
            {state.adBreaks.length === 0 ? (
              <tr>
                <td colSpan={3}>No scheduled breaks reported yet.</td>
              </tr>
            ) : (
              state.adBreaks.map((adBreak, index) => (
                <tr key={`${adBreak.timeOffset}-${index}`}>
                  <td>{formatSeconds(adBreak.timeOffset)}</td>
                  <td>{formatSeconds(adBreak.maxDuration)}</td>
                  <td>{adBreak.adCount}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <div className={styles.controls}>
          <h3 className={styles.panelTitle}>Events</h3>
          <button className="button button--secondary button--sm" onClick={() => exampleRef.current?.postMessage({ type: 'clear-dai-log' })}>
            Clear
          </button>
        </div>
        <table className={styles.readout}>
          <thead>
            <tr>
              <th>Clock / player time</th>
              <th>Event</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {state.events.length === 0 ? (
              <tr>
                <td colSpan={3}>No events reported yet.</td>
              </tr>
            ) : (
              state.events.map((event, index) => (
                <tr key={`${event.wallClock}-${event.event}-${index}`}>
                  <td>
                    {event.wallClock}
                    <br />
                    {formatSeconds(event.playerTime)}
                  </td>
                  <td>{event.event}</td>
                  <td>{event.details || '—'}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
