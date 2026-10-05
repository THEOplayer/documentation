import React, { type JSX, useMemo, useRef, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import CodeBlock from '@theme/CodeBlock';
import Example, { type ExampleController } from '@site/src/components/Example';
import styles from '../shared.module.css';

type Integration = 'csai' | 'google-ima';
type Position = 'start' | 'midroll' | 'end' | 'vmap';

interface Preset {
  id: string;
  label: string;
  adUrl: string;
  integration: Integration;
  position: Position;
  timeOffset?: string;
}

interface AdEventEntry {
  time: string;
  event: string;
  details: string;
}

interface Companion {
  resourceURI: string;
  clickThrough: string;
  altText: string;
}

const defaultContentUrl = 'https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny_metadata.m3u8';
const defaultPoster = 'https://cdn.theoplayer.com/video/big_buck_bunny/poster.jpg';
const imaVastUrl =
  'https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/single_ad_samples&sz=640x480&cust_params=sample_ct%3Dlinear&ciu_szs=300x250%2C728x90&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=';
const imaSimidUrl =
  'https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/simid&description_url=https%3A%2F%2Fdevelopers.google.com%2Finteractive-media-ads&sz=640x480&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&correlator=';
const imaCompanionUrl =
  'https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/single_preroll_skippable&sz=640x480&ciu_szs=300x250%2C728x90&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=';
const imaNonLinearUrl =
  'data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPFZBU1QgeG1sbnM6eHNpPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZSIgeHNpOm5vTmFtZXNwYWNlU2NoZW1hTG9jYXRpb249InZhc3QueHNkIiB2ZXJzaW9uPSIzLjAiPgogPEFkIGlkPSI2OTcyMDM2MTYiPgogIDxJbkxpbmU+CiAgIDxBZFN5c3RlbT5HREZQPC9BZFN5c3RlbT4KICAgPEFkVGl0bGU+VEhFT3BsYXllciBOb25MaW5lYXJJbWFnZTwvQWRUaXRsZT4KICAgPERlc2NyaXB0aW9uPjwhW0NEQVRBW0V4dGVybmFsIE5DQTFDMUwxIE5vbkxpbmVhckltYWdlIGFkXV0+PC9EZXNjcmlwdGlvbj4KICAgPENyZWF0aXZlcz4KICAgIDxDcmVhdGl2ZSBpZD0iNTc4NTczNzA4NTYiIHNlcXVlbmNlPSIxIj4KICAgICA8Tm9uTGluZWFyQWRzPgogICAgICA8Tm9uTGluZWFyICBpZD0iR0RGUCIgd2lkdGg9IjcwMCIgaGVpZ2h0PSIxNTAiIHNjYWxhYmxlPSJmYWxzZSIgbWFpbnRhaW5Bc3BlY3RSYXRpbz0idHJ1ZSI+CiAgICAgICAgPE5vbkxpbmVhckNsaWNrVGhyb3VnaD48IVtDREFUQVtodHRwczovL3d3dy50aGVvcGxheWVyLmNvbS9dXT48L05vbkxpbmVhckNsaWNrVGhyb3VnaD4KICAgICAgIDxTdGF0aWNSZXNvdXJjZSBjcmVhdGl2ZVR5cGU9ImltYWdlL3BuZyI+PCFbQ0RBVEFbaHR0cHM6Ly9jZG4udGhlb3BsYXllci5jb20vZGVtb3MvYWRzL2NvbXBhbmlvbmFkcy90aGVvcGxheWVyLmpwZ11dPjwvU3RhdGljUmVzb3VyY2U+CiAgICAgIDwvTm9uTGluZWFyPgogICAgIDwvTm9uTGluZWFyQWRzPgogICAgPC9DcmVhdGl2ZT4KICAgPC9DcmVhdGl2ZXM+CiAgPC9JbkxpbmU+CiA8L0FkPgo8L1ZBU1Q+';

const presets: Preset[] = [
  { id: 'vast-preroll', label: 'VAST pre-roll', adUrl: 'https://cdn.theoplayer.com/demos/preroll.xml', integration: 'csai', position: 'start' },
  {
    id: 'vast-midroll',
    label: 'VAST mid-roll (15 s)',
    adUrl: 'https://cdn.theoplayer.com/demos/preroll.xml',
    integration: 'csai',
    position: 'midroll',
    timeOffset: '00:00:15',
  },
  { id: 'vast-postroll', label: 'VAST post-roll', adUrl: 'https://cdn.theoplayer.com/demos/preroll.xml', integration: 'csai', position: 'end' },
  {
    id: 'vmap',
    label: 'VMAP (pre-, mid- and post-roll)',
    adUrl: 'https://cdn.theoplayer.com/demos/ads/vmap/single-pre-mid-post-no-skip.xml',
    integration: 'csai',
    position: 'vmap',
  },
  {
    id: 'companion',
    label: 'Google IMA with companion ad',
    adUrl: imaCompanionUrl,
    integration: 'google-ima',
    position: 'start',
  },
  { id: 'ima-vast', label: 'Google IMA VAST', adUrl: imaVastUrl, integration: 'google-ima', position: 'start' },
  { id: 'ima-nonlinear', label: 'Google IMA non-linear overlay', adUrl: imaNonLinearUrl, integration: 'google-ima', position: 'start' },
  {
    id: 'ima-vpaid',
    label: 'Google IMA VPAID',
    adUrl: 'https://rtr.innovid.com/r1.5554946ab01d97.36996823;cb=%2525%25CACHEBUSTER%2525%2525',
    integration: 'google-ima',
    position: 'start',
  },
  { id: 'ima-simid', label: 'Google IMA SIMID', adUrl: imaSimidUrl, integration: 'google-ima', position: 'start' },
];

interface FormState {
  videoUrl: string;
  adUrl: string;
  integration: Integration;
  position: Position;
  timeOffset: string;
}

function formForPreset(preset: Preset, previous: FormState): FormState {
  return {
    videoUrl: previous.videoUrl || defaultContentUrl,
    adUrl: preset.adUrl,
    integration: preset.integration,
    position: preset.position,
    timeOffset: preset.timeOffset ?? '00:00:15',
  };
}

function timeOffsetValue(value: string): number | string {
  const trimmed = value.trim();
  const numeric = Number(trimmed);
  return trimmed !== '' && Number.isFinite(numeric) ? numeric : trimmed;
}

function mimeTypeForVideoUrl(url: string): string | undefined {
  if (/\.mpd(\?|#|$)/i.test(url)) return 'application/dash+xml';
  if (/\.m3u8(\?|#|$)/i.test(url)) return 'application/x-mpegurl';
  return undefined;
}

function isHttpUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

export default function AdTesterDemo(): JSX.Element {
  const exampleRef = useRef<ExampleController>(null);
  const [presetId, setPresetId] = useState('vast-preroll');
  const [lastTemplateId, setLastTemplateId] = useState('vast-preroll');
  const [form, setForm] = useState<FormState>({
    videoUrl: defaultContentUrl,
    adUrl: presets[0].adUrl,
    integration: 'csai',
    position: 'start',
    timeOffset: '00:00:15',
  });
  const [events, setEvents] = useState<AdEventEntry[]>([]);
  const [companions, setCompanions] = useState<Companion[]>([]);

  const selectedPreset = presets.find((preset) => preset.id === presetId);
  const requiresIma = selectedPreset
    ? selectedPreset.integration === 'google-ima'
    : presets.some((preset) => preset.integration === 'google-ima' && preset.adUrl === form.adUrl);
  const integrationMismatch = requiresIma && form.integration !== 'google-ima';

  const adDescription = useMemo(() => {
    const ad: Record<string, unknown> = { sources: form.adUrl, integration: form.integration };
    if (form.position === 'start') ad.timeOffset = 'start';
    else if (form.position === 'end') ad.timeOffset = 'end';
    else if (form.position === 'midroll') ad.timeOffset = timeOffsetValue(form.timeOffset);
    return ad;
  }, [form]);

  const generatedSource = useMemo(() => {
    const mimeType = mimeTypeForVideoUrl(form.videoUrl);
    const source = {
      sources: mimeType ? { src: form.videoUrl, type: mimeType } : { src: form.videoUrl },
      poster: defaultPoster,
      metadata: { title: 'Big Buck Bunny' },
      ads: [adDescription],
    };
    return `player.source = ${JSON.stringify(source, null, 2)};`;
  }, [form.videoUrl, adDescription]);

  const generatedSchedule = useMemo(() => {
    const ad: Record<string, unknown> = { sources: form.adUrl, integration: form.integration };
    return `player.ads.schedule(${JSON.stringify(ad, null, 2)});`;
  }, [form.adUrl, form.integration]);

  function updateForm<K extends keyof FormState>(key: K, value: FormState[K]): void {
    setPresetId('custom');
    setForm((current) => ({ ...current, [key]: value }));
  }

  function selectPreset(id: string): void {
    setPresetId(id);
    if (id === 'custom') return;
    const preset = presets.find((entry) => entry.id === id);
    if (!preset) return;
    setLastTemplateId(id);
    setForm((current) => formForPreset(preset, current));
  }

  function loadSource(): void {
    const mimeType = mimeTypeForVideoUrl(form.videoUrl);
    exampleRef.current?.postMessage({
      type: 'load-ad-source',
      source: {
        sources: mimeType ? { src: form.videoUrl, type: mimeType } : { src: form.videoUrl },
        poster: defaultPoster,
        metadata: { title: 'Big Buck Bunny' },
        ads: [adDescription],
      },
    });
  }

  function resetPreset(): void {
    const template = presets.find((entry) => entry.id === lastTemplateId);
    if (!template) return;
    setPresetId(template.id);
    setForm((current) => formForPreset(template, current));
  }

  return (
    <>
      <Example
        ref={exampleRef}
        src={useBaseUrl('/theoplayer/v11/examples/advertisement-tester/demo.html')}
        onMessage={(message) => {
          if (message.type === 'ad-events' && Array.isArray(message.events)) {
            setEvents(message.events as AdEventEntry[]);
          } else if (message.type === 'companions' && Array.isArray(message.companions)) {
            setCompanions(
              (message.companions as Companion[]).filter((companion) => isHttpUrl(companion.resourceURI) && isHttpUrl(companion.clickThrough))
            );
          }
        }}
      />
      {companions.length > 0 && (
        <div className={styles.companionRow}>
          {companions.map((companion, index) => (
            <a key={index} href={companion.clickThrough} target="_blank" rel="noopener noreferrer">
              <img src={companion.resourceURI} alt={companion.altText} />
            </a>
          ))}
        </div>
      )}
      <div className={styles.panel}>
        <h3 className={styles.panelTitle}>Ad configuration</h3>
        <div className={styles.formGrid}>
          <label className={styles.formField}>
            Ad templates
            <select className={styles.input} value={presetId} onChange={(event) => selectPreset(event.target.value)}>
              <option value="custom">Custom</option>
              {presets.map((preset) => (
                <option key={preset.id} value={preset.id}>
                  {preset.label}
                </option>
              ))}
            </select>
          </label>
          <label className={styles.formField}>
            Video URL
            <input className={styles.input} value={form.videoUrl} onChange={(event) => updateForm('videoUrl', event.target.value)} />
          </label>
          <label className={styles.formField}>
            Ad URL
            <input className={styles.input} value={form.adUrl} onChange={(event) => updateForm('adUrl', event.target.value)} />
          </label>
          <label className={styles.formField}>
            Integration
            <select
              className={styles.input}
              value={form.integration}
              onChange={(event) => updateForm('integration', event.target.value as Integration)}
            >
              <option value="csai">THEOplayer (CSAI)</option>
              <option value="google-ima">Google IMA</option>
            </select>
          </label>
          <label className={styles.formField}>
            Position
            <select
              className={styles.input}
              value={form.position}
              disabled={form.position === 'vmap'}
              onChange={(event) => updateForm('position', event.target.value as Position)}
            >
              <option value="start">Pre-roll</option>
              <option value="midroll">Mid-roll</option>
              <option value="end">Post-roll</option>
              {form.position === 'vmap' && <option value="vmap">From VMAP</option>}
            </select>
          </label>
          {form.position === 'midroll' && (
            <label className={styles.formField}>
              Time offset
              <input
                className={styles.input}
                value={form.timeOffset}
                placeholder="00:00:15"
                title={
                  'When the ad break should play: a number of seconds (e.g. 5 or 12.5), a timestamp "HH:MM:SS" or "HH:MM:SS.mmm", a percentage like "10%", or "start" / "end"'
                }
                onChange={(event) => updateForm('timeOffset', event.target.value)}
              />
            </label>
          )}
        </div>
        {integrationMismatch && <p className={styles.hint}>This preset requires the google-ima integration to work correctly.</p>}
        <div className={styles.formActions}>
          <button className="button button--primary button--sm" onClick={loadSource}>
            Load source
          </button>
          <button className="button button--secondary button--sm" onClick={resetPreset}>
            Reset to template
          </button>
        </div>
        <CodeBlock language="js" title="Generated code">
          {`${generatedSource}\n\n// Schedule an ad break at any time:\n${generatedSchedule}`}
        </CodeBlock>
        <div className={styles.controls}>
          <h3 className={styles.panelTitle}>Events</h3>
          <button className="button button--secondary button--sm" onClick={() => exampleRef.current?.postMessage({ type: 'clear-ad-log' })}>
            Clear
          </button>
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
