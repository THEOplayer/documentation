import React, { type JSX, useRef, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Example, { type ExampleController } from '@site/src/components/Example';
import styles from '../shared.module.css';

interface PlaylistItem {
  title: string;
  poster: string;
  status: string;
  progress: number;
}

interface PlaylistState {
  active: number;
  items: PlaylistItem[];
}

function statusLabel(item: PlaylistItem): string {
  switch (item.status) {
    case 'caching':
      return `caching ${item.progress}%`;
    case 'done':
      return 'cached';
    case 'error':
      return 'cache error';
    default:
      return 'not cached';
  }
}

export default function PlaylistAndCachingDemo(): JSX.Element {
  const exampleRef = useRef<ExampleController>(null);
  const [state, setState] = useState<PlaylistState>({ active: 0, items: [] });

  return (
    <>
      <Example
        ref={exampleRef}
        src={useBaseUrl('/theoplayer/v11/examples/playlist-and-caching/demo.html')}
        onMessage={(message) => {
          if (message.type === 'playlist-state') {
            setState({
              active: typeof message.active === 'number' ? message.active : 0,
              items: Array.isArray(message.items) ? (message.items as PlaylistItem[]) : [],
            });
          }
        }}
      />
      <div className={styles.panel}>
        <div className={styles.controls}>
          <h3 className={styles.panelTitle}>Playlist</h3>
          <button className="button button--secondary button--sm" onClick={() => exampleRef.current?.postMessage({ type: 'playlist-previous' })}>
            Previous
          </button>
          <button className="button button--secondary button--sm" onClick={() => exampleRef.current?.postMessage({ type: 'playlist-next' })}>
            Next
          </button>
          <button className="button button--secondary button--sm" onClick={() => exampleRef.current?.postMessage({ type: 'playlist-cache-next' })}>
            Cache next item now
          </button>
        </div>
        <ul className={styles.bookmarkList}>
          {state.items.map((item, index) => (
            <li key={index}>
              <button
                className={`${styles.bookmarkButton} ${index === state.active ? styles.bookmarkButtonActive : ''}`}
                onClick={() => exampleRef.current?.postMessage({ type: 'playlist-load', index })}
              >
                <span className={styles.playlistRow}>
                  <span className={styles.playlistNumber}>{index + 1}</span>
                  <img className={styles.playlistPoster} src={item.poster} alt="" />
                  <span className={styles.playlistTitle}>
                    {item.title}
                    {index === state.active && ' (playing)'}
                  </span>
                  <span className={styles.playlistStatus}>{statusLabel(item)}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
