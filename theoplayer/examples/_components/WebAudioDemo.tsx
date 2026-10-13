import React, { type JSX, useRef, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Example, { type ExampleController } from '@site/src/components/Example';
import styles from '../shared.module.css';

const params = [
  { name: 'pan', label: 'Pan', min: -1, max: 1, step: 0.05, value: 0, format: (value: number) => value.toFixed(2) },
  { name: 'bass', label: 'Bass', min: -12, max: 12, step: 1, value: 0, format: (value: number) => `${value} dB` },
  { name: 'mid', label: 'Mid', min: -12, max: 12, step: 1, value: 0, format: (value: number) => `${value} dB` },
  { name: 'treble', label: 'Treble', min: -12, max: 12, step: 1, value: 0, format: (value: number) => `${value} dB` },
  { name: 'volume', label: 'Volume', min: 0, max: 1, step: 0.01, value: 1, format: (value: number) => `${Math.round(value * 100)}%` },
] as const;

type ParamName = (typeof params)[number]['name'];

const defaults = Object.fromEntries(params.map(({ name, value }) => [name, value])) as Record<ParamName, number>;

export default function WebAudioDemo(): JSX.Element {
  const exampleRef = useRef<ExampleController>(null);
  const [values, setValues] = useState(defaults);
  const [bypass, setBypass] = useState(false);

  function setParam(name: ParamName, value: number) {
    setValues((prev) => ({ ...prev, [name]: value }));
    exampleRef.current?.postMessage({ type: 'web-audio-param', name, value });
  }

  return (
    <>
      <Example ref={exampleRef} src={useBaseUrl('/theoplayer/v11/examples/web-audio/demo.html')} style={{ aspectRatio: '16 / 10.9' }} />
      <div className={styles.panel}>
        <p className={styles.hint}>Press play, then move the sliders. The audio context starts after you interact with the player.</p>
        <table className={`${styles.readout} ${styles.parameterTable}`}>
          <tbody>
            {params.map(({ name, label, min, max, step, format }) => (
              <tr key={name}>
                <th>
                  <label htmlFor={`web-audio-${name}`}>{label}</label>
                </th>
                <td>
                  <input
                    id={`web-audio-${name}`}
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={values[name]}
                    onChange={(event) => setParam(name, Number(event.target.value))}
                  />
                </td>
                <td>{format(values[name])}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.controls}>
          <label>
            <input
              type="checkbox"
              checked={bypass}
              onChange={(event) => {
                setBypass(event.target.checked);
                exampleRef.current?.postMessage({ type: 'web-audio-bypass', bypass: event.target.checked });
              }}
            />
            Bypass effects
          </label>
          <button
            type="button"
            className="button button--sm button--secondary"
            onClick={() => params.forEach(({ name, value }) => setParam(name, value))}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
