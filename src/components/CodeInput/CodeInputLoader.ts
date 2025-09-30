import * as codeInput from '@webcoder49/code-input/code-input.mjs';
import PrismTemplate from '@webcoder49/code-input/templates/prism.mjs';
import IndentPlugin from '@webcoder49/code-input/plugins/indent.mjs';
import * as Prism from 'prismjs';
import '@webcoder49/code-input/code-input.min.css';

let codeInputInitialized = false;

export function setupTemplate() {
  if (codeInputInitialized) return;
  // Register our template
  codeInput.registerTemplate('syntax-highlighted', new PrismTemplate(Prism, [new IndentPlugin(true, 4)]));
  codeInputInitialized = true;
}

export * from '@webcoder49/code-input/code-input.mjs';
