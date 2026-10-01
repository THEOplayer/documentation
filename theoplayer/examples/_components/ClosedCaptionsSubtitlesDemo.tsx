import React, { type JSX, useRef, useState } from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Example, { type ExampleController } from '@site/src/components/Example';
import styles from '../shared.module.css';

type SourceName = 'srt' | 'cea608' | 'ttml';
type StyleName = 'default' | 'yellow' | 'large';

interface TextTrackRow {
  label: string;
  language: string;
  kind: string;
  format: string;
  mode: string;
}

const sources: Record<SourceName, string> = {
  srt: 'Sideloaded SRT',
  cea608: 'CEA-608 captions',
  ttml: 'DASH TTML',
};

const stylePresets: Record<StyleName, string> = {
  default: 'Default',
  yellow: 'Yellow on black',
  large: 'Large with edge',
};

export default function ClosedCaptionsSubtitlesDemo(): JSX.Element {
  const exampleRef = useRef<ExampleController>(null);
  const [source, setSource] = useState<SourceName>('srt');
  const [style, setStyle] = useState<StyleName>('default');
  const [tracks, setTracks] = useState<TextTrackRow[]>([]);

  return (
    <>
      <Example
        ref={exampleRef}
        src={useBaseUrl('/theoplayer/v11/examples/closed-captions-subtitles/demo.html')}
        onMessage={(message) => {
          if (message.type === 'text-tracks' && Array.isArray(message.tracks)) {
            setTracks(message.tracks as TextTrackRow[]);
          }
        }}
      />
      <div className={styles.panel}>
        <h3 className={styles.panelTitle}>Sources</h3>
        <div className={styles.controls}>
          <div className="button-group">
            {(Object.keys(sources) as SourceName[]).map((name) => (
              <button
                key={name}
                className={clsx('button button--sm', source === name ? 'button--primary' : 'button--secondary')}
                onClick={() => {
                  setSource(name);
                  exampleRef.current?.postMessage({ type: 'text-source', name });
                }}
              >
                {sources[name]}
              </button>
            ))}
          </div>
        </div>
        <h3 className={styles.panelTitle}>Subtitle style</h3>
        <div className={styles.controls}>
          <div className="button-group">
            {(Object.keys(stylePresets) as StyleName[]).map((name) => (
              <button
                key={name}
                className={clsx('button button--sm', style === name ? 'button--primary' : 'button--secondary')}
                onClick={() => {
                  setStyle(name);
                  exampleRef.current?.postMessage({ type: 'text-style', name });
                }}
              >
                {stylePresets[name]}
              </button>
            ))}
          </div>
        </div>
        <h3 className={styles.panelTitle}>Text tracks</h3>
        <div className={styles.readoutScroll}>
          <table className={styles.readout}>
            <thead>
              <tr>
                <th>Label</th>
                <th>Lang</th>
                <th>Kind</th>
                <th>Format</th>
                <th>Mode</th>
              </tr>
            </thead>
            <tbody>
              {tracks.length === 0 ? (
                <tr>
                  <td colSpan={5}>No text tracks reported yet.</td>
                </tr>
              ) : (
                tracks.map((track, index) => (
                  <tr key={`${track.label}-${index}`} className={track.mode === 'showing' ? styles.highlight : undefined}>
                    <td>{track.label}</td>
                    <td>{track.language || '—'}</td>
                    <td>{track.kind}</td>
                    <td>{track.format}</td>
                    <td>{track.mode}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
