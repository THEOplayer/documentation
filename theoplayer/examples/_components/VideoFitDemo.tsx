import React, { type CSSProperties, type JSX, useRef, useState } from 'react';
import clsx from 'clsx';
import Example, { type ExampleController } from '@site/src/components/Example';
import styles from '../shared.module.css';

const fits = ['contain', 'cover', 'fill'] as const;

interface VideoFitDemoProps {
  src: string;
  style?: CSSProperties;
  exposeGlobals?: boolean;
}

export default function VideoFitDemo({ src, style, exposeGlobals }: VideoFitDemoProps): JSX.Element {
  const exampleRef = useRef<ExampleController>(null);
  const [fit, setFit] = useState<(typeof fits)[number]>('contain');
  return (
    <>
      <Example ref={exampleRef} src={src} style={style} exposeGlobals={exposeGlobals} />
      <div className={styles.panel}>
        <div className={styles.controls}>
          <div className="button-group" role="group" aria-label="Video fit">
            {fits.map((value) => (
              <button
                key={value}
                type="button"
                aria-pressed={value === fit}
                className={clsx('button button--sm', value === fit ? 'button--primary' : 'button--secondary')}
                onClick={() => {
                  setFit(value);
                  exampleRef.current?.postMessage({ type: 'video-fit', fit: value });
                }}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
