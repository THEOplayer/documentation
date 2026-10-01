import React, { type JSX, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Example from '@site/src/components/Example';
import styles from '../shared.module.css';

interface Id3Frame {
  id: string;
  description?: string;
  value: string;
  startTime: number;
}

const frameNames: Record<string, string> = {
  TIT2: 'Title',
  TPE1: 'Artist',
  TALB: 'Album',
  TDRC: 'Recording time',
  TLEN: 'Length (ms)',
  TFLT: 'File type',
  TIT1: 'Content group',
  TPE2: 'Band',
  TCOM: 'Composer',
  TSRC: 'ISRC',
  TRSN: 'Radio station name',
  TRSO: 'Radio station owner',
  TXXX: 'User defined text',
  WXXX: 'User defined URL',
  COMM: 'Comments',
  PRIV: 'Private',
};

function frameKey(frame: Id3Frame): string {
  return frame.description ? `${frame.id}:${frame.description}` : frame.id;
}

export default function Id3Demo(): JSX.Element {
  // The latest value of every frame (TXXX and WXXX frames are grouped by their description).
  const [latest, setLatest] = useState<ReadonlyMap<string, Id3Frame>>(new Map());
  const title = latest.get('TIT2')?.value;
  const artist = latest.get('TPE1')?.value;

  return (
    <>
      <Example
        src={useBaseUrl('/theoplayer/v11/examples/id3-metadata/demo.html')}
        onMessage={(message) => {
          if (message.type !== 'id3') return;
          const frame = message.frame as Id3Frame;
          setLatest((prev) => new Map(prev).set(frameKey(frame), frame));
        }}
      />
      <div className={styles.panel}>
        <p className={styles.panelTitle}>Now playing: {title ? `${title}${artist ? ` by ${artist}` : ''}` : '-'}</p>
        <table className={styles.readout}>
          <thead>
            <tr>
              <th>Frame</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {latest.size === 0 && (
              <tr>
                <td colSpan={2}>No ID3 metadata received yet.</td>
              </tr>
            )}
            {[...latest.entries()].map(([key, frame]) => (
              <tr key={key}>
                <th>
                  <code>{frame.id}</code> {frameNames[frame.id] ?? ''}
                  {frame.description ? ` (${frame.description})` : ''}
                </th>
                <td>{frame.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
