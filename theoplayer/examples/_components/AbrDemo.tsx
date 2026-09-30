import React, { type JSX, useRef, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import CodeBlock from '@theme/CodeBlock';
import Example, { type ExampleController } from '@site/src/components/Example';
import styles from '../shared.module.css';
import { formatBandwidth, formatQuality, type QualityInfo } from './utils';

type StrategyType = 'performance' | 'quality' | 'bandwidth';

interface StrategyConfiguration {
  type: StrategyType;
  metadata?: { bitrate?: number };
}

interface AbrState {
  strategy?: StrategyType | StrategyConfiguration;
  qualities: QualityInfo[];
  initialQuality?: QualityInfo;
  activeQuality?: QualityInfo;
  bandwidthEstimate?: number;
}

const strategies: Record<StrategyType, string> = {
  performance: 'Start with a lower quality, so playback starts as fast as possible.',
  quality: 'Start with the highest quality, for the best visual quality from the start.',
  bandwidth: 'Start with a quality based on the bandwidth measured during previous sessions.',
};

export default function AbrDemo(): JSX.Element {
  const exampleRef = useRef<ExampleController>(null);
  const [type, setType] = useState<StrategyType>('bandwidth');
  const [bitrate, setBitrate] = useState('');
  const [state, setState] = useState<AbrState>({ qualities: [] });

  const bitrateValue = bitrate.trim() === '' ? undefined : Number(bitrate);
  const strategy: StrategyConfiguration = bitrateValue && bitrateValue > 0 ? { type, metadata: { bitrate: bitrateValue } } : { type };

  const apply = () => {
    exampleRef.current?.postMessage({ type: 'abr-strategy', strategy });
  };

  const qualities = [...state.qualities].sort((a, b) => (b.bandwidth ?? 0) - (a.bandwidth ?? 0));
  return (
    <>
      <Example
        ref={exampleRef}
        src={useBaseUrl('/theoplayer/v11/examples/abr/demo.html')}
        onMessage={(message) => {
          if (message.type === 'abr') setState(message as unknown as AbrState);
        }}
      />
      <div className={styles.panel}>
        <p className={styles.panelTitle}>ABR strategy</p>
        <div className={styles.controls}>
          {(Object.keys(strategies) as StrategyType[]).map((value) => (
            <label key={value}>
              <input type="radio" name="abr-strategy" value={value} checked={type === value} onChange={() => setType(value)} />
              <code>{value}</code>
            </label>
          ))}
        </div>
        <p>{strategies[type]}</p>
        <div className={styles.controls}>
          <label>
            Initial bitrate (<code>metadata.bitrate</code>, in bps):
            <input
              className={styles.input}
              type="number"
              min="0"
              step="100000"
              placeholder="e.g. 2000000"
              value={bitrate}
              onChange={(e) => setBitrate(e.target.value)}
            />
          </label>
          <button className="button button--primary button--sm" onClick={apply}>
            Apply and reload
          </button>
        </div>
        <CodeBlock language="js">{`player.abr.strategy = ${JSON.stringify(strategy, null, 2)
          .replace(/"(\w+)":/g, '$1:')
          .replace(/"/g, "'")};`}</CodeBlock>
      </div>
      <div className={styles.panel}>
        <p className={styles.panelTitle}>Qualities</p>
        <table className={styles.readout}>
          <tbody>
            <tr>
              <th>Current strategy</th>
              <td>{state.strategy ? JSON.stringify(state.strategy) : '-'}</td>
            </tr>
            <tr>
              <th>Initial quality (chosen by ABR)</th>
              <td>{formatQuality(state.initialQuality)}</td>
            </tr>
            <tr>
              <th>Active quality</th>
              <td>{formatQuality(state.activeQuality)}</td>
            </tr>
            <tr>
              <th>Bandwidth estimate</th>
              <td>{formatBandwidth(state.bandwidthEstimate)}</td>
            </tr>
          </tbody>
        </table>
        <table className={styles.readout}>
          <thead>
            <tr>
              <th>Available quality</th>
              <th>Bandwidth</th>
            </tr>
          </thead>
          <tbody>
            {qualities.length === 0 && (
              <tr>
                <td colSpan={2}>Press play to load the qualities.</td>
              </tr>
            )}
            {qualities.map((quality) => (
              <tr key={quality.id} className={quality.id === state.activeQuality?.id ? styles.highlight : undefined}>
                <td>
                  {quality.width}×{quality.height}
                  {quality.id === state.initialQuality?.id && ' (initial)'}
                  {quality.id === state.activeQuality?.id && ' (active)'}
                </td>
                <td>{formatBandwidth(quality.bandwidth)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
