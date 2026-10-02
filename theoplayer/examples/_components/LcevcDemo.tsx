import React, { type JSX, useRef, useState } from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Example, { type ExampleController } from '@site/src/components/Example';
import { formatBandwidth, formatQuality, type QualityInfo } from './utils';
import styles from '../shared.module.css';

interface LcevcState {
  decoderLoaded: boolean;
  activeQuality: QualityInfo | null;
  qualities: QualityInfo[];
}

const emptyState: LcevcState = { decoderLoaded: false, activeQuality: null, qualities: [] };

function isActiveQuality(quality: QualityInfo, activeQuality: QualityInfo | null): boolean {
  if (!activeQuality) return false;
  if (activeQuality.id !== undefined) return quality.id === activeQuality.id;
  return quality.width === activeQuality.width && quality.height === activeQuality.height && quality.bandwidth === activeQuality.bandwidth;
}

export default function LcevcDemo(): JSX.Element {
  const exampleRef = useRef<ExampleController>(null);
  const [format, setFormat] = useState<'dash' | 'hls'>('dash');
  const [state, setState] = useState<LcevcState>(emptyState);

  function loadSource(nextFormat: 'dash' | 'hls'): void {
    setFormat(nextFormat);
    exampleRef.current?.postMessage({ type: 'lcevc-format', format: nextFormat });
  }

  return (
    <>
      <Example
        ref={exampleRef}
        src={useBaseUrl('/theoplayer/v11/examples/lcevc/demo.html')}
        onMessage={(message) => {
          if (message.type === 'lcevc') {
            setState({
              decoderLoaded: message.decoderLoaded === true,
              activeQuality: (message.activeQuality as QualityInfo | null) || null,
              qualities: Array.isArray(message.qualities) ? (message.qualities as QualityInfo[]) : [],
            });
          }
        }}
      />
      <div className={styles.panel}>
        <div className={styles.controls}>
          <div className="button-group">
            {(['dash', 'hls'] as const).map((nextFormat) => (
              <button
                key={nextFormat}
                className={clsx('button button--sm', format === nextFormat ? 'button--primary' : 'button--secondary')}
                onClick={() => loadSource(nextFormat)}
              >
                {nextFormat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        <table className={styles.readout}>
          <tbody>
            <tr>
              <th>LCEVC decoder loaded</th>
              <td>{state.decoderLoaded ? 'Yes' : 'No'}</td>
            </tr>
            <tr>
              <th>Active quality</th>
              <td>{state.activeQuality ? formatQuality(state.activeQuality) : '—'}</td>
            </tr>
          </tbody>
        </table>
        <h3 className={styles.panelTitle}>Available qualities</h3>
        <table className={styles.readout}>
          <thead>
            <tr>
              <th>Quality</th>
              <th>Bandwidth</th>
            </tr>
          </thead>
          <tbody>
            {state.qualities.length === 0 ? (
              <tr>
                <td colSpan={2}>Waiting for quality information.</td>
              </tr>
            ) : (
              state.qualities.map((quality, index) => (
                <tr
                  key={`${quality.id || quality.height || 'quality'}-${index}`}
                  className={isActiveQuality(quality, state.activeQuality) ? styles.highlight : undefined}
                >
                  <td>{formatQuality(quality)}</td>
                  <td>{formatBandwidth(quality.bandwidth)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
