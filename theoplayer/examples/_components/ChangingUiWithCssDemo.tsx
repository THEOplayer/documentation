import React, { type JSX, useRef, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import CodeBlock from '@theme/CodeBlock';
import Example, { type ExampleController } from '@site/src/components/Example';
import styles from '../shared.module.css';

type Props = { ui: 'open-video-ui' | 'default-ui' };

interface ColorField {
  key: string;
  label: string;
  property?: string;
}

interface ColorGroup {
  title: string;
  fields: ColorField[];
}

type Colors = Record<string, string>;

const defaultUiDefaults: Colors = {
  'primary-color': '#ffc50f',
  'primary-background-text': '#000000',
  'primary-background': '#ffc50f',
  'secondary-color': '#ffffff',
  'secondary-background-text': '#000000',
  'secondary-background': '#ffffff',
  'tertiary-color': '#000000',
  'tertiary-background-text': '#ffffff',
  'tertiary-background': '#000000',
};

const openVideoUiDefaults: Colors = {
  'range-bar-color': '#ffc50f',
  'range-thumb-background': '#ffc50f',
  'center-play-button-icon-color': '#ffc50f',
  'text-color': '#ffffff',
  'icon-color': '#ffffff',
  'menu-color': '#ffffff',
  'control-background-end': '#000000',
  'menu-backdrop-background': '#000000',
};

const defaultUiGroups: ColorGroup[] = [
  {
    title: 'Primary',
    fields: [
      { key: 'primary-color', label: 'Primary color' },
      { key: 'primary-background-text', label: 'Primary background text' },
      { key: 'primary-background', label: 'Primary background' },
    ],
  },
  {
    title: 'Secondary',
    fields: [
      { key: 'secondary-color', label: 'Secondary color' },
      { key: 'secondary-background-text', label: 'Secondary background text' },
      { key: 'secondary-background', label: 'Secondary background' },
    ],
  },
  {
    title: 'Tertiary',
    fields: [
      { key: 'tertiary-color', label: 'Tertiary color' },
      { key: 'tertiary-background-text', label: 'Tertiary background text' },
      { key: 'tertiary-background', label: 'Tertiary background' },
    ],
  },
];

const openVideoUiGroups: ColorGroup[] = [
  {
    title: 'Primary (accent)',
    fields: [
      { key: 'range-bar-color', label: 'Seek bar fill', property: '--theoplayer-range-bar-color' },
      { key: 'range-thumb-background', label: 'Seek bar thumb', property: '--theoplayer-range-thumb-background' },
      { key: 'center-play-button-icon-color', label: 'Center play button icon', property: '--theoplayer-center-play-button-icon-color' },
    ],
  },
  {
    title: 'Secondary (foreground)',
    fields: [
      { key: 'text-color', label: 'Text', property: '--theoplayer-text-color' },
      { key: 'icon-color', label: 'Control icons', property: '--theoplayer-icon-color' },
      { key: 'menu-color', label: 'Menu text', property: '--theoplayer-menu-color' },
    ],
  },
  {
    title: 'Tertiary (backgrounds)',
    fields: [
      { key: 'control-background-end', label: 'Control bar gradient end', property: '--theoplayer-control-background-gradient-stops' },
      { key: 'menu-backdrop-background', label: 'Menu backdrop', property: '--theoplayer-menu-backdrop-background' },
    ],
  },
];

function generatedCss(ui: Props['ui'], colors: Colors): string {
  if (ui === 'default-ui') {
    return `.theoplayer-skin .theo-primary-color,
.theoplayer-skin .vjs-selected {
  color: ${colors['primary-color']} !important;
}
.theoplayer-skin .theo-primary-background {
  color: ${colors['primary-background-text']} !important;
  background-color: ${colors['primary-background']} !important;
}
.theoplayer-skin .theo-secondary-color {
  color: ${colors['secondary-color']} !important;
}
.theoplayer-skin .theo-secondary-background {
  color: ${colors['secondary-background-text']} !important;
  background-color: ${colors['secondary-background']} !important;
}
.theoplayer-skin .theo-tertiary-color {
  color: ${colors['tertiary-color']} !important;
}
.theoplayer-skin .theo-tertiary-background {
  color: ${colors['tertiary-background-text']} !important;
  background-color: ${colors['tertiary-background']} !important;
}`;
  }
  return `theoplayer-default-ui {
  --theoplayer-range-bar-color: ${colors['range-bar-color']};
  --theoplayer-range-thumb-background: ${colors['range-thumb-background']};
  --theoplayer-center-play-button-icon-color: ${colors['center-play-button-icon-color']};
  --theoplayer-text-color: ${colors['text-color']};
  --theoplayer-icon-color: ${colors['icon-color']};
  --theoplayer-menu-color: ${colors['menu-color']};
  --theoplayer-control-background-gradient-stops: transparent 0%, ${colors['control-background-end']} 100%;
  --theoplayer-menu-backdrop-background: ${colors['menu-backdrop-background']};
}`;
}

export default function ChangingUiWithCssDemo({ ui }: Props): JSX.Element {
  const exampleRef = useRef<ExampleController>(null);
  const defaults = ui === 'default-ui' ? defaultUiDefaults : openVideoUiDefaults;
  const groups = ui === 'default-ui' ? defaultUiGroups : openVideoUiGroups;
  const [colors, setColors] = useState<Colors>(defaults);

  function postColors(next: Colors): void {
    exampleRef.current?.postMessage({ type: 'ui-colors', colors: next });
  }

  function setColor(key: string, value: string): void {
    const next = { ...colors, [key]: value };
    setColors(next);
    postColors(next);
  }

  function reset(): void {
    setColors(defaults);
    postColors(defaults);
  }

  const demoFile = ui === 'default-ui' ? 'default-ui.html' : 'demo.html';

  return (
    <>
      <Example ref={exampleRef} src={useBaseUrl(`/theoplayer/v11/examples/changing-ui-with-css/${demoFile}`)} />
      <div className={styles.panel}>
        {groups.map((group) => (
          <div key={group.title} className={styles.formSection}>
            <h3 className={styles.panelTitle}>{group.title}</h3>
            <div className={styles.controls}>
              {group.fields.map((field) => (
                <label key={field.key}>
                  {field.label}
                  <input
                    className={styles.input}
                    type="color"
                    value={colors[field.key]}
                    onChange={(event) => setColor(field.key, event.target.value)}
                  />
                </label>
              ))}
            </div>
          </div>
        ))}
        <div className={styles.formActions}>
          <button className="button button--secondary button--sm" onClick={reset}>
            Reset
          </button>
        </div>
        <CodeBlock language="css" title="Generated CSS">
          {generatedCss(ui, colors)}
        </CodeBlock>
      </div>
    </>
  );
}
