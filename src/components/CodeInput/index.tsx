import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import React, { type DetailedHTMLProps, type HTMLAttributes, useEffect } from 'react';
import type * as CodeInputNamespace from '@webcoder49/code-input';
import 'prismjs/themes/prism-okaidia.min.css';
import '@webcoder49/code-input/code-input.min.css';

let codeInput: typeof import('./CodeInputLoader');
if (ExecutionEnvironment.canUseDOM) {
  // <code-input> can only be loaded inside the browser
  codeInput = require('./CodeInputLoader');
}

export interface CodeInputElement extends CodeInputNamespace.CodeInput {
  value: string;
}

export interface Props extends DetailedHTMLProps<HTMLAttributes<CodeInputElement>, CodeInputElement> {
  template?: string;
  value?: string;
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'code-input': Props;
    }
  }
}

export function CodeInput({ value, defaultValue, onInput, ...props }: Props) {
  useEffect(() => {
    codeInput.setupTemplate();
  }, []);
  return (
    <code-input template="syntax-highlighted" {...props} onInput={onInput}>
      <textarea data-code-input-fallback value={value} defaultValue={defaultValue} />
    </code-input>
  );
}
