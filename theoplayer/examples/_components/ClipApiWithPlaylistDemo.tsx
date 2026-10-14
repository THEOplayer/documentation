import React, { type JSX, useRef, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Example, { type ExampleController } from '@site/src/components/Example';
import styles from '../shared.module.css';

interface PlaylistItem {
  title: string;
  poster: string;
  clip: { startTime: number; endTime: number };
}

interface PlaylistState {
  active: number;
  items: PlaylistItem[];
}

function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  return `${minutes}:${String(Math.floor(seconds % 60)).padStart(2, '0')}`;
}

export default function ClipApiWithPlaylistDemo(): JSX.Element {
  const exampleRef = useRef<ExampleController>(null);
  const [state, setState] = useState<PlaylistState>({ active: 0, items: [] });
  const [form, setForm] = useState({ src: '', title: 'My clip', startTime: '0', endTime: '30' });

  const startTime = Number(form.startTime);
  const endTime = Number(form.endTime);
  const canAdd = form.src.trim() !== '' && Number.isFinite(startTime) && Number.isFinite(endTime) && startTime >= 0 && endTime > startTime;

  function updateForm(key: keyof typeof form, value: string) {
    setForm((previous) => ({ ...previous, [key]: value }));
  }

  return (
    <>
      <Example
        ref={exampleRef}
        src={useBaseUrl('/theoplayer/v11/examples/clip-api-with-playlist/demo.html')}
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
                  {item.poster ? <img className={styles.playlistPoster} src={item.poster} alt="" /> : <span className={styles.playlistPoster} />}
                  <span className={styles.playlistTitle}>
                    {item.title}
                    {index === state.active && ' (playing)'}
                  </span>
                  <span className={styles.playlistStatus}>
                    {formatTime(item.clip.startTime)} – {formatTime(item.clip.endTime)}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.panel}>
        <h3 className={styles.panelTitle}>Add a clip</h3>
        <div className={styles.formGrid}>
          <label className={styles.formField}>
            Stream URL
            <input
              className={styles.input}
              type="url"
              value={form.src}
              placeholder="https://example.com/stream.m3u8"
              onChange={(event) => updateForm('src', event.target.value)}
            />
          </label>
          <label className={styles.formField}>
            Title
            <input className={styles.input} value={form.title} onChange={(event) => updateForm('title', event.target.value)} />
          </label>
          <label className={styles.formField}>
            Start (seconds)
            <input
              className={styles.input}
              type="number"
              min="0"
              value={form.startTime}
              onChange={(event) => updateForm('startTime', event.target.value)}
            />
          </label>
          <label className={styles.formField}>
            End (seconds)
            <input
              className={styles.input}
              type="number"
              min="0"
              value={form.endTime}
              onChange={(event) => updateForm('endTime', event.target.value)}
            />
          </label>
        </div>
        <div className={styles.formActions}>
          <button
            className="button button--primary button--sm"
            disabled={!canAdd}
            onClick={() =>
              exampleRef.current?.postMessage({
                type: 'playlist-add',
                src: form.src.trim(),
                title: form.title.trim() || form.src.trim(),
                startTime,
                endTime,
              })
            }
          >
            Add and play
          </button>
        </div>
      </div>
    </>
  );
}
