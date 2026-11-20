import React, { type JSX, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Example from '@site/src/components/Example';
import styles from '../shared.module.css';

interface FeatureModulesState {
  modules: string[];
  features: string[];
  version: string;
}

export default function FeatureModulesDemo(): JSX.Element {
  const [state, setState] = useState<FeatureModulesState | undefined>(undefined);

  return (
    <>
      <Example
        src={useBaseUrl('/theoplayer/v11/examples/feature-modules/demo.html')}
        onMessage={(message) => {
          if (message.type === 'feature-modules') {
            setState({
              modules: message.modules as string[],
              features: message.features as string[],
              version: message.version as string,
            });
          }
        }}
      />
      <div className={styles.panel}>
        <table className={styles.readout}>
          <tbody>
            <tr>
              <th>Imported modules</th>
              <td>{state ? state.modules.join(', ') : '…'}</td>
            </tr>
            <tr>
              <th>THEOplayer.features</th>
              <td>{state ? JSON.stringify(state.features) : '…'}</td>
            </tr>
            <tr>
              <th>THEOplayer.version</th>
              <td>{state ? state.version : '…'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
