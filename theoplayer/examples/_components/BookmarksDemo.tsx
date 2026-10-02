import React, { type JSX, useRef, useState } from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Example, { type ExampleController } from '@site/src/components/Example';
import styles from '../shared.module.css';

interface Bookmark {
  title: string;
  src: string;
  poster: string;
  currentTime: number;
  duration: number;
}

interface BookmarkState {
  bookmarks: Bookmark[];
  activeIndex: number;
}

function formatTime(value: number): string {
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60);
  return `${minutes}:${String(seconds).padStart(2, '0')}`;
}

export default function BookmarksDemo(): JSX.Element {
  const exampleRef = useRef<ExampleController>(null);
  const [state, setState] = useState<BookmarkState>({ bookmarks: [], activeIndex: -1 });

  return (
    <>
      <Example
        ref={exampleRef}
        src={useBaseUrl('/theoplayer/v11/examples/bookmarks/demo.html')}
        onMessage={(message) => {
          if (message.type === 'bookmarks' && Array.isArray(message.bookmarks) && typeof message.activeIndex === 'number') {
            setState({ bookmarks: message.bookmarks as Bookmark[], activeIndex: message.activeIndex });
          }
        }}
      />
      <div className={styles.panel}>
        <div className={styles.controls}>
          <button className="button button--primary button--sm" onClick={() => exampleRef.current?.postMessage({ type: 'add-bookmark' })}>
            Add bookmark at current time
          </button>
        </div>
        <ul className={styles.bookmarkList}>
          {state.bookmarks.map((bookmark, index) => {
            const progress = bookmark.duration > 0 ? Math.min(100, (bookmark.currentTime / bookmark.duration) * 100) : 0;
            return (
              <li key={`${bookmark.src}-${index}`}>
                <button
                  className={clsx(styles.bookmarkButton, index === state.activeIndex && styles.bookmarkButtonActive)}
                  onClick={() => exampleRef.current?.postMessage({ type: 'select-bookmark', index })}
                >
                  <span className={styles.bookmarkMeta}>
                    <strong>{bookmark.title}</strong>
                    <span>{formatTime(bookmark.currentTime)}</span>
                  </span>
                  <span className={styles.bookmarkProgress}>
                    <span className={styles.bookmarkProgressFill} style={{ width: `${progress}%` }} />
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
