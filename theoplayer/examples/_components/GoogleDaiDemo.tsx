import React, { type JSX, useRef, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import CodeBlock from '@theme/CodeBlock';
import Example, { type ExampleController } from '@site/src/components/Example';
import styles from '../shared.module.css';

type Format = 'hls' | 'dash';
type Availability = 'vod' | 'live';

interface AdTagParameter {
  key: string;
  value: string;
}

interface DaiForm {
  format: Format;
  availabilityType: Availability;
  contentSourceID: string;
  videoID: string;
  assetKey: string;
  apiKey: string;
  authToken: string;
  networkCode: string;
  streamActivityMonitorID: string;
  enableNonce: boolean;
  adTagParameters: AdTagParameter[];
}

interface DaiConfiguration {
  format: Format;
  integration: 'google-dai';
  availabilityType: Availability;
  apiKey: string;
  contentSourceID?: string;
  videoID?: string;
  assetKey?: string;
  authToken?: string;
  networkCode?: string;
  streamActivityMonitorID?: string;
  enableNonce?: boolean;
  adTagParameters?: Record<string, string>;
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

type SampleIdentifiers = Pick<DaiForm, 'contentSourceID' | 'videoID' | 'assetKey'>;

const sampleIdentifiers: Record<Availability, Record<Format, SampleIdentifiers>> = {
  vod: {
    hls: { contentSourceID: '2548831', videoID: 'tears-of-steel', assetKey: '' },
    dash: { contentSourceID: '2559737', videoID: 'tos-dash', assetKey: '' },
  },
  live: {
    hls: { contentSourceID: '', videoID: '', assetKey: 'c-rArva4ShKVIAkNfy6HUQ' },
    dash: { contentSourceID: '', videoID: '', assetKey: 'PSzZMzAkSXCmlJOWDmRj8Q' },
  },
};

const emptyState: DaiState = { adBreaks: [], events: [] };
const emptyTime: DaiTime = { streamTime: null, contentTime: null };

function formatSeconds(value: number | null): string {
  return value === null || !Number.isFinite(value) ? '—' : `${value.toFixed(1)} s`;
}

function configurationFor(form: DaiForm): DaiConfiguration {
  const configuration: DaiConfiguration = {
    format: form.format,
    integration: 'google-dai',
    availabilityType: form.availabilityType,
    apiKey: form.apiKey,
  };
  if (form.authToken.trim()) configuration.authToken = form.authToken;
  if (form.networkCode.trim()) configuration.networkCode = form.networkCode;
  if (form.streamActivityMonitorID.trim()) configuration.streamActivityMonitorID = form.streamActivityMonitorID;
  if (form.enableNonce) configuration.enableNonce = true;

  const adTagParameters: Record<string, string> = {};
  for (const parameter of form.adTagParameters) {
    const key = parameter.key.trim();
    if (key) adTagParameters[key] = parameter.value;
  }
  if (Object.keys(adTagParameters).length > 0) configuration.adTagParameters = adTagParameters;

  if (form.availabilityType === 'vod') {
    if (form.contentSourceID) configuration.contentSourceID = form.contentSourceID;
    if (form.videoID) configuration.videoID = form.videoID;
  } else if (form.assetKey) {
    configuration.assetKey = form.assetKey;
  }
  return configuration;
}

function sourceFor(form: DaiForm): { sources: { type: string; ssai: Omit<DaiConfiguration, 'format'> } } {
  const { format, ...ssai } = configurationFor(form);
  return {
    sources: {
      type: format === 'dash' ? 'application/dash+xml' : 'application/x-mpegurl',
      ssai,
    },
  };
}

export default function GoogleDaiDemo(): JSX.Element {
  const exampleRef = useRef<ExampleController>(null);
  const [form, setForm] = useState<DaiForm>({
    format: 'hls',
    availabilityType: 'vod',
    ...sampleIdentifiers.vod.hls,
    apiKey: '',
    authToken: '',
    networkCode: '',
    streamActivityMonitorID: '',
    enableNonce: false,
    adTagParameters: [],
  });
  const [state, setState] = useState<DaiState>(emptyState);
  const [time, setTime] = useState<DaiTime>(emptyTime);

  function updateForm<K extends keyof DaiForm>(key: K, value: DaiForm[K]): void {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function selectAvailability(availabilityType: Availability): void {
    setForm((current) => ({
      ...current,
      availabilityType,
      ...sampleIdentifiers[availabilityType][current.format],
    }));
  }

  function selectFormat(format: Format): void {
    setForm((current) => ({
      ...current,
      format,
      ...sampleIdentifiers[current.availabilityType][format],
    }));
  }

  function updateParameter(index: number, field: keyof AdTagParameter, value: string): void {
    setForm((current) => ({
      ...current,
      adTagParameters: current.adTagParameters.map((parameter, parameterIndex) =>
        parameterIndex === index ? { ...parameter, [field]: value } : parameter
      ),
    }));
  }

  function addParameter(parameter: AdTagParameter = { key: '', value: '' }): void {
    setForm((current) => ({ ...current, adTagParameters: [...current.adTagParameters, parameter] }));
  }

  function removeParameter(index: number): void {
    setForm((current) => ({
      ...current,
      adTagParameters: current.adTagParameters.filter((_, parameterIndex) => parameterIndex !== index),
    }));
  }

  function loadStream(): void {
    exampleRef.current?.postMessage({ type: 'load-dai', config: configurationFor(form) });
  }

  const generatedSource = `player.source = ${JSON.stringify(sourceFor(form), null, 2)};`;

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
        <div className={styles.formGrid}>
          <div className={styles.formField}>
            <strong>Stream type</strong>
            <div className="button-group">
              {(['vod', 'live'] as Availability[]).map((availabilityType) => (
                <button
                  key={availabilityType}
                  className={`button button--sm ${form.availabilityType === availabilityType ? 'button--primary' : 'button--secondary'}`}
                  aria-pressed={form.availabilityType === availabilityType}
                  onClick={() => selectAvailability(availabilityType)}
                >
                  {availabilityType === 'vod' ? 'VOD' : 'Live'}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.formField}>
            <strong>Stream format</strong>
            <div className="button-group">
              {(['hls', 'dash'] as Format[]).map((format) => (
                <button
                  key={format}
                  className={`button button--sm ${form.format === format ? 'button--primary' : 'button--secondary'}`}
                  aria-pressed={form.format === format}
                  onClick={() => selectFormat(format)}
                >
                  {format.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
          {form.availabilityType === 'vod' ? (
            <>
              <label className={styles.formField}>
                Content source ID
                <input
                  className={styles.input}
                  value={form.contentSourceID}
                  onChange={(event) => updateForm('contentSourceID', event.target.value)}
                />
              </label>
              <label className={styles.formField}>
                Video ID
                <input className={styles.input} value={form.videoID} onChange={(event) => updateForm('videoID', event.target.value)} />
              </label>
            </>
          ) : (
            <label className={styles.formField}>
              Asset key
              <input className={styles.input} value={form.assetKey} onChange={(event) => updateForm('assetKey', event.target.value)} />
            </label>
          )}
          <label className={styles.formField}>
            API key (optional)
            <input className={styles.input} value={form.apiKey} onChange={(event) => updateForm('apiKey', event.target.value)} />
          </label>
        </div>
        <details className={styles.formAdvanced}>
          <summary>Advanced options</summary>
          <div className={styles.formGrid}>
            <label className={styles.formField}>
              Auth token
              <input className={styles.input} value={form.authToken} onChange={(event) => updateForm('authToken', event.target.value)} />
            </label>
            <label className={styles.formField}>
              Network code
              <input className={styles.input} value={form.networkCode} onChange={(event) => updateForm('networkCode', event.target.value)} />
            </label>
            <label className={styles.formField}>
              Stream activity monitor ID
              <input
                className={styles.input}
                value={form.streamActivityMonitorID}
                onChange={(event) => updateForm('streamActivityMonitorID', event.target.value)}
              />
            </label>
            <label className={styles.checkboxField}>
              <input type="checkbox" checked={form.enableNonce} onChange={(event) => updateForm('enableNonce', event.target.checked)} />
              Enable nonce
            </label>
          </div>
        </details>
        <div className={styles.formSection}>
          <div className={styles.controls}>
            <h3 className={styles.panelTitle}>Ad tag parameters</h3>
            <button
              className="button button--secondary button--sm"
              onClick={() => addParameter({ key: 'description_url', value: window.location.href })}
            >
              Add sample
            </button>
          </div>
          <div className={styles.readoutScroll}>
            <table className={`${styles.readout} ${styles.parameterTable}`}>
              <thead>
                <tr>
                  <th>Key</th>
                  <th>Value</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {form.adTagParameters.length === 0 ? (
                  <tr>
                    <td colSpan={3}>No ad tag parameters.</td>
                  </tr>
                ) : (
                  form.adTagParameters.map((parameter, index) => (
                    <tr key={index}>
                      <td>
                        <input
                          className={styles.input}
                          aria-label={`Parameter ${index + 1} key`}
                          value={parameter.key}
                          onChange={(event) => updateParameter(index, 'key', event.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          className={styles.input}
                          aria-label={`Parameter ${index + 1} value`}
                          value={parameter.value}
                          onChange={(event) => updateParameter(index, 'value', event.target.value)}
                        />
                      </td>
                      <td>
                        <button className="button button--secondary button--sm" onClick={() => removeParameter(index)}>
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          <div className={styles.formActions}>
            <button className="button button--secondary button--sm" onClick={() => addParameter()}>
              Add parameter
            </button>
            <button
              className="button button--secondary button--sm"
              onClick={() => setForm((current) => ({ ...current, ...sampleIdentifiers[current.availabilityType][current.format] }))}
            >
              Reset to sample
            </button>
            <button className="button button--primary button--sm" onClick={loadStream}>
              Load stream
            </button>
          </div>
        </div>
        <CodeBlock language="js" title="Generated source">
          {generatedSource}
        </CodeBlock>
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
