import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import React, { type DetailedHTMLProps, type HTMLAttributes, useEffect } from 'react';
import type * as CodeInputNamespace from '@webcoder49/code-input/code-input';
import type * as PrismNamespace from 'prismjs';
import 'prismjs/themes/prism-okaidia.min.css';
import '@webcoder49/code-input/code-input.min.css';

let codeInput: typeof CodeInputNamespace;
let Prism: typeof PrismNamespace;
if (ExecutionEnvironment.canUseDOM) {
  // <code-input> can only be loaded inside the browser
  codeInput = require('@webcoder49/code-input/code-input');
  Prism = require('prismjs');
  require('@webcoder49/code-input/plugins/indent');
  // HACK: <code-input> doesn't handle being loaded lazily (after window load)
  (codeInput as any).windowLoaded = true;
}

let codeInputInitialized = false;

function initializeCodeInput() {
  if (codeInputInitialized) return;
  // Register our template
  codeInput.registerTemplate('syntax-highlighted', codeInput.templates.prism(Prism, [new codeInput.plugins.Indent(true, 4)]));
  codeInputInitialized = true;
}

export interface CodeInputElement extends CodeInputNamespace.CodeInput {
  value: string;
}

export interface Props extends DetailedHTMLProps<HTMLAttributes<CodeInputElement>, CodeInputElement> {
  template?: string;
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'code-input': Props;
    }
  }
}

export function CodeInput(props: Props) {
  useEffect(() => {
    initializeCodeInput();
  }, []);
  return <code-input template="syntax-highlighted" {...props}></code-input>;
}
