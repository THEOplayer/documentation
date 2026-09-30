import React, { type JSX, useEffect, useRef, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Example, { type ExampleController } from '@site/src/components/Example';
import styles from '../shared.module.css';

type SourceName = 'drm' | 'aes';

const sourceLabels: Record<SourceName, string> = {
  drm: 'DRM: Widevine or PlayReady (DASH), FairPlay (HLS)',
  aes: 'AES-128 (HLS)',
};

const keySystems: Record<string, string> = {
  Widevine: 'com.widevine.alpha',
  PlayReady: 'com.microsoft.playready',
  FairPlay: 'com.apple.fps',
};

function describeSource(src: string | undefined): string {
  if (!src) return '-';
  if (src.includes('dash-wv-pr')) return 'DASH with Widevine or PlayReady';
  if (src.includes('hls-fp')) return 'HLS with FairPlay';
  if (src.includes('encrypted')) return 'HLS with AES-128';
  return src;
}

async function isKeySystemSupported(keySystem: string): Promise<boolean> {
  if (keySystem === 'com.apple.fps' && 'WebKitMediaKeys' in window) {
    return true;
  }
  if (!navigator.requestMediaKeySystemAccess) return false;
  try {
    await navigator.requestMediaKeySystemAccess(keySystem, [
      {
        initDataTypes: ['cenc', 'sinf', 'skd'],
        videoCapabilities: [{ contentType: 'video/mp4; codecs="avc1.42E01E"' }],
      },
    ]);
    return true;
  } catch {
    return false;
  }
}

export default function DrmDemo(): JSX.Element {
  const exampleRef = useRef<ExampleController>(null);
  const [sourceName, setSourceName] = useState<SourceName>('drm');
  const [src, setSrc] = useState<string | undefined>(undefined);
  const [error, setError] = useState<{ code: number; message: string } | undefined>(undefined);
  const [support, setSupport] = useState<Record<string, boolean | undefined>>({});

  useEffect(() => {
    for (const [name, keySystem] of Object.entries(keySystems)) {
      isKeySystemSupported(keySystem).then((supported) => setSupport((prev) => ({ ...prev, [name]: supported })));
    }
  }, []);

  const changeSource = (name: SourceName) => {
    setSourceName(name);
    exampleRef.current?.postMessage({ type: 'drm-source', name });
  };

  return (
    <>
      <Example
        ref={exampleRef}
        src={useBaseUrl('/theoplayer/v11/examples/drm/demo.html')}
        onMessage={(message) => {
          if (message.type === 'drm') {
            setSrc(message.src as string | undefined);
            setError(message.error as { code: number; message: string } | undefined);
          }
        }}
      />
      <div className={styles.panel}>
        <div className={styles.controls}>
          {(Object.keys(sourceLabels) as SourceName[]).map((name) => (
            <label key={name}>
              <input type="radio" name="drm-source" value={name} checked={sourceName === name} onChange={() => changeSource(name)} />
              {sourceLabels[name]}
            </label>
          ))}
        </div>
        <table className={styles.readout}>
          <tbody>
            <tr>
              <th>Selected stream</th>
              <td>{describeSource(src)}</td>
            </tr>
            <tr>
              <th>Key systems in this browser</th>
              <td>
                {Object.keys(keySystems)
                  .map((name) => `${name}: ${support[name] === undefined ? '…' : support[name] ? 'supported' : 'not supported'}`)
                  .join(', ')}
              </td>
            </tr>
            {error && (
              <tr>
                <th>Error</th>
                <td>
                  {error.code}: {error.message}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
