import React, { type JSX, useRef, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Example, { type ExampleController } from '@site/src/components/Example';
import styles from '../shared.module.css';

export default function PeakLimiterDemo(): JSX.Element {
  const exampleRef = useRef<ExampleController>(null);
  const [boost, setBoost] = useState(18);
  const [ceiling, setCeiling] = useState(-1);
  const [enabled, setEnabled] = useState(true);
  const [peak, setPeak] = useState<number | null>(null);
  const level = peak === null ? 0 : Math.min(100, Math.max(0, (peak + 48) / 54) * 100);

  return (
    <>
      <Example
        ref={exampleRef}
        src={useBaseUrl('/theoplayer/v11/examples/peak-limiter/demo.html')}
        onMessage={(message) => {
          if (message.type === 'limiter-peak') setPeak(message.decibels as number | null);
        }}
      />
      <div className={styles.panel}>
        <table className={`${styles.readout} ${styles.parameterTable}`}>
          <tbody>
            <tr>
              <th>
                <label htmlFor="limiter-boost">Boost</label>
              </th>
              <td>
                <input
                  id="limiter-boost"
                  type="range"
                  min={0}
                  max={24}
                  step={1}
                  value={boost}
                  onChange={(event) => {
                    const decibels = Number(event.target.value);
                    setBoost(decibels);
                    exampleRef.current?.postMessage({ type: 'limiter-boost', decibels });
                  }}
                />
              </td>
              <td>+{boost} dB</td>
            </tr>
            <tr>
              <th>
                <label htmlFor="limiter-ceiling">Ceiling</label>
              </th>
              <td>
                <input
                  id="limiter-ceiling"
                  type="range"
                  min={-24}
                  max={0}
                  step={1}
                  value={ceiling}
                  disabled={!enabled}
                  onChange={(event) => {
                    const decibels = Number(event.target.value);
                    setCeiling(decibels);
                    exampleRef.current?.postMessage({ type: 'limiter-ceiling', decibels });
                  }}
                />
              </td>
              <td>{ceiling} dB</td>
            </tr>
          </tbody>
        </table>
        <div className={styles.controls}>
          <label>
            <input
              type="checkbox"
              checked={enabled}
              onChange={(event) => {
                setEnabled(event.target.checked);
                exampleRef.current?.postMessage({ type: 'limiter-enabled', enabled: event.target.checked });
              }}
            />
            Limiter on
          </label>
        </div>
        <div className={styles.rangeRow}>
          <div className={styles.rangeLabel}>
            <span>Output peak</span>
            <code>{peak === null ? '-∞ dB' : `${peak.toFixed(1)} dB`}</code>
          </div>
          <div className={styles.rangeBar}>
            <div
              className={styles.rangeSegment}
              style={{ width: `${level}%`, background: peak !== null && peak > 0 ? 'var(--ifm-color-danger)' : 'var(--ifm-color-success)' }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
