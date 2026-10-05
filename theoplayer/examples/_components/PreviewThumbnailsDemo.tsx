import React, { type JSX, useRef, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Example, { type ExampleController } from '@site/src/components/Example';
import styles from '../shared.module.css';

type Kind = 'manifest' | 'sideloaded';

interface TrackInfo {
  kind: string;
  label: string;
  mode: string;
  cues: number;
}

export default function PreviewThumbnailsDemo(): JSX.Element {
  const exampleRef = useRef<ExampleController>(null);
  const [kind, setKind] = useState<Kind>('manifest');
  const [tracks, setTracks] = useState<TrackInfo[]>([]);

  function selectKind(value: Kind): void {
    setKind(value);
    exampleRef.current?.postMessage({ type: 'load-thumbnails', kind: value });
  }

  return (
    <>
      <Example
        ref={exampleRef}
        src={useBaseUrl('/theoplayer/v11/examples/preview-thumbnails/demo.html')}
        onMessage={(message) => {
          if (message.type === 'thumbnail-tracks' && Array.isArray(message.tracks)) {
            setTracks(message.tracks as TrackInfo[]);
          }
        }}
      />
      <div className={styles.panel}>
        <div className={styles.controls}>
          <strong>Thumbnail source</strong>
          <div className="button-group">
            <button
              className={`button button--sm ${kind === 'manifest' ? 'button--primary' : 'button--secondary'}`}
              aria-pressed={kind === 'manifest'}
              onClick={() => selectKind('manifest')}
            >
              In-manifest (DASH tiled thumbnails)
            </button>
            <button
              className={`button button--sm ${kind === 'sideloaded' ? 'button--primary' : 'button--secondary'}`}
              aria-pressed={kind === 'sideloaded'}
              onClick={() => selectKind('sideloaded')}
            >
              Side-loaded (WebVTT)
            </button>
          </div>
        </div>
        <p className={styles.hint}>Hover or scrub the seek bar to see the preview thumbnails.</p>
        {tracks.length > 0 && (
          <div className={styles.readoutScroll}>
            <table className={styles.readout}>
              <thead>
                <tr>
                  <th>Kind</th>
                  <th>Label</th>
                  <th>Mode</th>
                  <th>Cues</th>
                </tr>
              </thead>
              <tbody>
                {tracks.map((track, index) => (
                  <tr key={index}>
                    <td>{track.kind}</td>
                    <td>{track.label || '—'}</td>
                    <td>{track.mode}</td>
                    <td>{track.cues}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
