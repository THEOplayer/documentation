import React, { type JSX, useRef, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Example, { type ExampleController } from '@site/src/components/Example';
import styles from '../shared.module.css';

type SourceName = 'notFound' | 'unsupported' | 'valid';

const sourceLabels: Record<SourceName, string> = {
  notFound: 'Missing stream (MANIFEST_LOAD_ERROR)',
  unsupported: 'Unsupported source (SOURCE_NOT_SUPPORTED)',
  valid: 'Valid stream (no error)',
};

export interface CustomErrorMessagesDemoProps {
  ui: 'open-video-ui' | 'legacy';
  exposeGlobals?: boolean;
}

export default function CustomErrorMessagesDemo({ ui, exposeGlobals }: CustomErrorMessagesDemoProps): JSX.Element {
  const exampleRef = useRef<ExampleController>(null);
  const [sourceName, setSourceName] = useState<SourceName>('notFound');
  const src = useBaseUrl(`/theoplayer/v11/examples/custom-error-messages/${ui === 'legacy' ? 'legacy-ui' : 'demo'}.html`);
  return (
    <>
      <Example ref={exampleRef} src={src} exposeGlobals={exposeGlobals} />
      <div className={styles.panel}>
        <div className={styles.controls}>
          {(Object.keys(sourceLabels) as SourceName[]).map((name) => (
            <label key={name}>
              <input
                type="radio"
                name={`error-source-${ui}`}
                value={name}
                checked={sourceName === name}
                onChange={() => {
                  setSourceName(name);
                  exampleRef.current?.postMessage({ type: 'error-source', name });
                }}
              />
              {sourceLabels[name]}
            </label>
          ))}
        </div>
      </div>
    </>
  );
}
