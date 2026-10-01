import React, { type JSX, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import CodeBlock from '@theme/CodeBlock';
import Example from '@site/src/components/Example';
import styles from '../shared.module.css';

type Strategy = 'auto' | 'manual' | 'disabled';

export const DEFAULT_APP_ID = '8E80B9CE';

const strategies: Record<Strategy, string> = {
  auto: 'The player automatically joins an existing cast session, and starts casting when a session is started from another tab.',
  manual: 'The player only starts casting when the viewer clicks the cast button.',
  disabled: 'The player never casts, and does not show a cast button.',
};

interface ChromecastState {
  state: string;
  casting: boolean;
}

export default function ChromecastDemo(): JSX.Element {
  const [strategy, setStrategy] = useState<Strategy>('manual');
  const [appID, setAppID] = useState('');
  const [appIDInput, setAppIDInput] = useState('');
  const [state, setState] = useState<ChromecastState | undefined>(undefined);

  const params = new URLSearchParams({ strategy });
  if (appID) params.set('appID', appID);
  const src = `${useBaseUrl('/theoplayer/v11/examples/chromecast/demo.html')}?${params}`;

  const codeAppID = appID || DEFAULT_APP_ID;
  const appIDComment = appID ? 'your own receiver app ID' : "THEOplayer's default receiver, replace with your own app ID";
  const code = `const player = new THEOplayer.ChromelessPlayer(element, {
  // ...
  cast: {
    strategy: '${strategy}',
    chromecast: {
      appID: '${codeAppID}', // ${appIDComment}
    },
  },
});`;

  return (
    <>
      <Example
        // Recreate the iframe (and the player) whenever the configuration changes.
        key={src}
        src={src}
        onMessage={(message) => {
          if (message.type === 'chromecast') setState(message as unknown as ChromecastState);
        }}
      />
      <div className={styles.panel}>
        <p className={styles.panelTitle}>Cast strategy</p>
        <div className={styles.controls}>
          {(Object.keys(strategies) as Strategy[]).map((value) => (
            <label key={value}>
              <input type="radio" name="cast-strategy" value={value} checked={strategy === value} onChange={() => setStrategy(value)} />
              <code>{value}</code>
            </label>
          ))}
        </div>
        <p>{strategies[strategy]}</p>
        <p className={styles.panelTitle}>Receiver application ID</p>
        <form
          className={styles.controls}
          onSubmit={(e) => {
            e.preventDefault();
            setAppID(appIDInput.trim());
          }}
        >
          <input
            className={styles.input}
            type="text"
            placeholder={`Default: ${DEFAULT_APP_ID}`}
            value={appIDInput}
            onChange={(e) => setAppIDInput(e.target.value)}
            aria-label="Receiver application ID"
          />
          <button className="button button--primary button--sm" type="submit">
            Apply
          </button>
          <button
            className="button button--secondary button--sm"
            type="button"
            onClick={() => {
              setAppIDInput('');
              setAppID('');
            }}
          >
            Reset to default
          </button>
        </form>
        <table className={styles.readout}>
          <tbody>
            <tr>
              <th>Cast strategy</th>
              <td>{strategy}</td>
            </tr>
            <tr>
              <th>Receiver application ID</th>
              <td>{appID || `${DEFAULT_APP_ID} (default)`}</td>
            </tr>
            <tr>
              <th>
                <code>player.cast.chromecast.state</code>
              </th>
              <td>{state?.state ?? '-'}</td>
            </tr>
          </tbody>
        </table>
        <CodeBlock language="js">{code}</CodeBlock>
      </div>
    </>
  );
}
