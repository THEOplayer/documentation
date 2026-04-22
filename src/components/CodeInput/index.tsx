import React, { useCallback, useState } from 'react';
import AceEditor, { IAceEditorProps } from 'react-ace';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';
import styles from './styles.module.css';

export interface CodeInputElement {
  value: string;
}

export interface Props extends IAceEditorProps {
  lang: string;
  defaultValue?: string;
  onInput?: (event: { target: CodeInputElement }) => void;
}

export function CodeInput({ lang, defaultValue, onInput, ...props }: Props) {
  const [value, setValue] = useState(defaultValue ?? '');
  const onChange = useCallback(
    (newValue: string) => {
      setValue(newValue);
      onInput?.({ target: { value: newValue } });
    },
    [onInput]
  );
  return (
    <AceEditor
      className={styles.codeInput}
      mode={lang.toLowerCase()}
      theme="monokai"
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      width="100%"
      maxLines={20}
      tabSize={4}
      highlightActiveLine={true}
      showGutter={true}
      showPrintMargin={false}
      wrapEnabled={true}
      setOptions={{
        useWorker: false,
        showLineNumbers: true,
      }}
      {...props}
    />
  );
}
