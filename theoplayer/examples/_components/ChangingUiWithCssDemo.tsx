import React, { type JSX, useRef, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Example, { type ExampleController } from '@site/src/components/Example';
import styles from '../shared.module.css';

type Props = { ui: 'open-video-ui' | 'default-ui' };

export default function ChangingUiWithCssDemo({ ui }: Props): JSX.Element {
  const exampleRef = useRef<ExampleController>(null);
  const [color, setColor] = useState('#11cefe');
  const demoFile = ui === 'default-ui' ? 'default-ui.html' : 'demo.html';

  return (
    <>
      <Example ref={exampleRef} src={useBaseUrl(`/theoplayer/v11/examples/changing-ui-with-css/${demoFile}`)} />
      <div className={styles.panel}>
        <div className={styles.controls}>
          <label>
            Accent color
            <input
              className={styles.input}
              type="color"
              value={color}
              onChange={(event) => {
                const nextColor = event.target.value;
                setColor(nextColor);
                exampleRef.current?.postMessage({ type: 'accent-color', color: nextColor });
              }}
            />
          </label>
        </div>
      </div>
    </>
  );
}
