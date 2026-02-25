/**
 * @import {ToMarkdownOptions} from 'mdast-util-mdx'
 * @import {Options as MicromarkOptions} from 'micromark-extension-mdxjs'
 * @import {Processor} from 'unified'
 * @import {Options} from 'micromark-extension-mdxjs'
 * @import {Extension} from 'micromark-util-types'
 * @typedef {MicromarkOptions & ToMarkdownOptions} Options
 */

import { Parser } from 'acorn';
import acornJsx from 'acorn-jsx';
import { mdxExpression } from 'micromark-extension-mdx-expression';
import { mdxJsx } from 'micromark-extension-mdx-jsx';
import { mdxMd } from 'micromark-extension-mdx-md';
import { mdxjsEsm } from 'micromark-extension-mdxjs-esm';
import { combineExtensions } from 'micromark-util-combine-extensions';
import { mdxFromMarkdown, mdxToMarkdown } from 'mdast-util-mdx';

/** @type {Readonly<Options>} */
const emptyOptions = {};

/**
 * Add support for MDX (JSX: `<Video id={123} />`, export/imports: `export {x}
 * from 'y'`; and expressions: `{1 + 1}`).
 *
 * @this {Processor}
 *   Processor.
 * @param {Readonly<Options> | null | undefined} [options]
 *   Configuration (optional).
 * @returns {undefined}
 *   Nothing.
 */
export default function remarkMdx(options) {
  const self = this;
  const settings = options || emptyOptions;
  const data = self.data();

  const micromarkExtensions = data.micromarkExtensions || (data.micromarkExtensions = []);
  const fromMarkdownExtensions = data.fromMarkdownExtensions || (data.fromMarkdownExtensions = []);
  const toMarkdownExtensions = data.toMarkdownExtensions || (data.toMarkdownExtensions = []);

  micromarkExtensions.push(mdxjs(settings));
  fromMarkdownExtensions.push(mdxFromMarkdown());
  toMarkdownExtensions.push(mdxToMarkdown(settings));
}

/**
 * Create an extension for `micromark` to enable MDX syntax.
 *
 * @param {Options | null | undefined} [options]
 *   Configuration (optional).
 * @param parseMdxExpressions
 *   Whether to parse MDX expressions with Acorn.
 * @returns {Extension}
 *   Extension for `micromark` that can be passed in `extensions` to enable MDX
 *   syntax.
 */
export function mdxjs({ parseMdxExpressions = true, ...options }) {
  const settings = Object.assign(
    {
      acorn: Parser.extend(acornJsx()),
      acornOptions: { ecmaVersion: 2024, sourceType: 'module' },
      addResult: true,
    },
    options
  );

  let mdxExpressionSettings;
  if (parseMdxExpressions) {
    mdxExpressionSettings = settings;
  } else {
    mdxExpressionSettings = Object.assign(
      {
        acorn: undefined,
        acornOptions: undefined,
        addResult: false,
      },
      options
    );
  }

  return combineExtensions([mdxjsEsm(settings), mdxExpression(mdxExpressionSettings), mdxJsx(settings), mdxMd()]);
}
