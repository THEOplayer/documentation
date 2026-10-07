import React, { type JSX, useRef, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Example, { type ExampleController } from '@site/src/components/Example';
import styles from '../shared.module.css';

type CheckStatus = 'supported' | 'unsupported' | 'unavailable';

interface Check {
  label: string;
  status: CheckStatus;
}

interface SourceOption {
  label: string;
  source: unknown;
}

interface Props {
  src: string;
  sources?: SourceOption[];
}

const alertClass = {
  success: 'alert--success',
  warning: 'alert--warning',
  danger: 'alert--danger',
  unknown: 'alert--info',
} as const;

const checkIcon: Record<CheckStatus, string> = {
  supported: '✔',
  unsupported: '✘',
  unavailable: '—',
};

export default function DetectionDemo({ src, sources }: Props): JSX.Element {
  const exampleRef = useRef<ExampleController>(null);
  const [level, setLevel] = useState<keyof typeof alertClass>('unknown');
  const [summary, setSummary] = useState('Checking support…');
  const [checks, setChecks] = useState<Check[]>([]);
  const [codecs, setCodecs] = useState('');
  const [activeSource, setActiveSource] = useState(0);

  return (
    <>
      <div className={`alert ${alertClass[level]}`} role="alert">
        <strong>{summary}</strong>
        {checks.length > 0 && (
          <ul className={styles.detectionChecks}>
            {checks.map((check) => (
              <li key={check.label}>
                {checkIcon[check.status]} {check.label}
              </li>
            ))}
          </ul>
        )}
        {codecs && <div className={styles.hint}>Now playing: {codecs}</div>}
      </div>
      <Example
        ref={exampleRef}
        src={useBaseUrl(src)}
        onMessage={(message) => {
          if (message.type === 'detection-status') {
            const nextLevel =
              typeof message.level === 'string' && message.level in alertClass ? (message.level as keyof typeof alertClass) : 'unknown';
            setLevel(nextLevel);
            if (typeof message.summary === 'string') setSummary(message.summary);
            if (Array.isArray(message.checks)) setChecks(message.checks as Check[]);
          } else if (message.type === 'playing-codecs' && typeof message.codecs === 'string') {
            setCodecs(message.codecs);
          }
        }}
      />
      {sources && sources.length > 1 && (
        <div className={styles.panel}>
          <div className={styles.controls}>
            <strong>Source</strong>
            <div className="button-group">
              {sources.map((option, index) => (
                <button
                  key={option.label}
                  className={`button button--sm ${activeSource === index ? 'button--primary' : 'button--secondary'}`}
                  aria-pressed={activeSource === index}
                  onClick={() => {
                    setActiveSource(index);
                    exampleRef.current?.postMessage({ type: 'load-source', source: option.source });
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
