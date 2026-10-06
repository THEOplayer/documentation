import React, { type JSX, useRef, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Example, { type ExampleController } from '@site/src/components/Example';
import styles from '../shared.module.css';

interface Status {
  state: 'waiting' | 'adbegin' | 'aderror' | 'playererror';
  blocked: boolean;
  message: string;
}

export default function AdBlockDetectionDemo(): JSX.Element {
  const exampleRef = useRef<ExampleController>(null);
  const [blockContentIfAdError, setBlockContentIfAdError] = useState(false);
  const [status, setStatus] = useState<Status>({ state: 'waiting', blocked: false, message: '' });

  const blockedText = status.blocked ? 'Content is blocked until the ad blocker is disabled' : 'Content continues without ads';

  return (
    <>
      <Example
        ref={exampleRef}
        src={useBaseUrl('/theoplayer/v11/examples/ad-block-detection/demo.html')}
        onMessage={(message) => {
          if (message.type === 'ad-block-status') {
            setStatus({
              state: (message.status as Status['state']) || 'waiting',
              blocked: Boolean(message.blocked),
              message: typeof message.message === 'string' ? message.message : '',
            });
          }
        }}
      />
      <div className={styles.panel}>
        <div className={styles.controls}>
          <label className={styles.checkboxField}>
            <input
              type="checkbox"
              checked={blockContentIfAdError}
              onChange={(event) => {
                setBlockContentIfAdError(event.target.checked);
                exampleRef.current?.postMessage({ type: 'ad-block-config', blockContentIfAdError: event.target.checked });
              }}
            />
            Block content if the ad fails (<code>blockContentIfAdError</code>)
          </label>
        </div>
        <table className={styles.readout}>
          <tbody>
            {(status.state === 'aderror' || status.state === 'playererror') && (
              <>
                <tr>
                  <th>Message</th>
                  <td>{status.message || '—'}</td>
                </tr>
                <tr>
                  <th>Content</th>
                  <td>{blockedText}</td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
