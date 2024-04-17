import { visit } from 'unist-util-visit';
import type { Node } from 'unist';
import type { VFile } from 'vfile';

export type Replacer = (url: string, filePath: string) => string;

/**
 * Default replacer.
 */
const defaultReplacer: Replacer = (url: string) => url;

/**
 * Rewrite the URL in a Markdown node.
 */
function remarkLinkRewrite(options = { replacer: defaultReplacer }) {
  const { replacer } = options;
  return (tree: Node, vfile: VFile) => {
    visit(tree, (node: any) => {
      if (node.type === 'link') {
        node.url = replacer(node.url, vfile.path);
      }
    });
  };
}

export default remarkLinkRewrite;
