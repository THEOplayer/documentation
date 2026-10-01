import React, { type JSX, useRef, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Example, { type ExampleController } from '@site/src/components/Example';
import styles from '../shared.module.css';

export default function ChangingUiWithCssDemo(): JSX.Element {
  const exampleRef = useRef<ExampleController>(null);
  const [color, setColor] = useState('#11cefe');

  return (
    <>
      <Example ref={exampleRef} src={useBaseUrl('/theoplayer/v11/examples/changing-ui-with-css/demo.html')} />
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
