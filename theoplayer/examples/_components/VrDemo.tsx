import React, { type JSX, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Example from '@site/src/components/Example';
import styles from '../shared.module.css';

interface VrState {
  state: string;
  canPresentVR: boolean;
  stereo: boolean;
  verticalFOV: number;
  direction: { yaw: number; pitch: number; roll: number };
}

function formatAngle(value: number | undefined): string {
  return value === undefined ? '-' : `${value.toFixed(1)}°`;
}

export default function VrDemo(): JSX.Element {
  const [state, setState] = useState<VrState | undefined>(undefined);
  return (
    <>
      <Example
        src={useBaseUrl('/theoplayer/v11/examples/vr/demo.html')}
        onMessage={(message) => {
          if (message.type === 'vr') setState(message as unknown as VrState);
        }}
      />
      <div className={styles.panel}>
        <table className={styles.readout}>
          <tbody>
            <tr>
              <th>
                <code>vr.state</code>
              </th>
              <td>{state?.state ?? '-'}</td>
            </tr>
            <tr>
              <th>
                <code>vr.stereo</code>
              </th>
              <td>{state ? String(state.stereo) : '-'}</td>
            </tr>
            <tr>
              <th>
                <code>vr.direction.yaw</code>
              </th>
              <td>{formatAngle(state?.direction.yaw)}</td>
            </tr>
            <tr>
              <th>
                <code>vr.direction.pitch</code>
              </th>
              <td>{formatAngle(state?.direction.pitch)}</td>
            </tr>
            <tr>
              <th>
                <code>vr.direction.roll</code>
              </th>
              <td>{formatAngle(state?.direction.roll)}</td>
            </tr>
            <tr>
              <th>
                <code>vr.verticalFOV</code>
              </th>
              <td>{formatAngle(state?.verticalFOV)}</td>
            </tr>
            <tr>
              <th>
                <code>vr.canPresentVR</code>
              </th>
              <td>{state ? String(state.canPresentVR) : '-'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
