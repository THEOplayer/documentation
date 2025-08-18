import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import React, { type DetailedHTMLProps, type HTMLAttributes, useEffect } from 'react';
import type { CodeInput as CodeInputElement } from '@webcoder49/code-input';
import 'prismjs/themes/prism-okaidia.min.css';
import '@webcoder49/code-input/code-input.min.css';

let codeInput: typeof import('@webcoder49/code-input/code-input.js');
let Prism: typeof import('prismjs');
if (ExecutionEnvironment.canUseDOM) {
  // <code-input> can only be loaded inside the browser
  codeInput = require('@webcoder49/code-input');
  Prism = require('prismjs');
  require('@webcoder49/code-input/plugins/indent.js');
}

let codeInputInitialized = false;

function initializeCodeInput() {
  if (codeInputInitialized) return;
  // Register our template
  codeInput.registerTemplate('syntax-highlighted', new codeInput.templates.Prism(Prism, [new codeInput.plugins.Indent(true, 4)]));
  codeInputInitialized = true;
}

export type CodeInputElementProps = DetailedHTMLProps<HTMLAttributes<CodeInputElement>, CodeInputElement>;

export interface Props extends CodeInputElementProps {
  value?: string;
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'code-input': CodeInputElementProps;
    }
  }
}

export function CodeInput({ value, defaultValue, onInput, ...props }: Props) {
  useEffect(() => {
    initializeCodeInput();
  }, []);
  return (
    <code-input {...props} onInput={onInput}>
      <textarea data-code-input-fallback value={value} defaultValue={defaultValue} />
    </code-input>
  );
}
