import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import React, { type DetailedHTMLProps, type HTMLAttributes } from 'react';
import Prism from 'prismjs';
import * as codeInput from '@webcoder49/code-input/code-input';
import '@webcoder49/code-input/plugins/indent';
import 'prismjs/themes/prism-okaidia.min.css';
import '@webcoder49/code-input/code-input.min.css';

if (ExecutionEnvironment.canUseDOM) {
  codeInput.registerTemplate('syntax-highlighted', codeInput.templates.prism(Prism, [new codeInput.plugins.Indent(true, 4)]));
}

export interface CodeInputElement extends codeInput.CodeInput {
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

export function CodeInput(props: Props) {
  return <code-input template="syntax-highlighted" {...props}></code-input>;
}
