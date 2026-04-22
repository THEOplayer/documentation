import React from 'react';
import clsx from 'clsx';
import AceEditor, { IAceEditorProps } from 'react-ace';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';
import styles from './styles.module.css';

export interface Props extends IAceEditorProps {
  lang: string;
}

export function CodeInput({ className, lang, ...props }: Props) {
  return (
    <AceEditor
      className={clsx(styles.codeInput, className)}
      mode={lang.toLowerCase()}
      theme="monokai"
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
