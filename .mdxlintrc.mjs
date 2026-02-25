import { defineConfig } from 'mdxlint';
import dictionaryEn from 'dictionary-en';
import dictionaryBase from './spellcheck/dictionary/base.mjs';
import dictionaryCustom from './spellcheck/dictionary/custom.mjs';
import remarkMdx from './spellcheck/mdx.mjs';
import remarkRetext from 'remark-retext';
import retextEnglish from 'retext-english';
import retextSpell from 'retext-spell';
import retextSyntaxURLs from 'retext-syntax-urls';
import retextIndefiniteArticle from 'retext-indefinite-article';
import retextRepeatedWords from 'retext-repeated-words';
import { unified } from 'unified';

export default defineConfig({
  plugins: [
    [
      remarkMdx,
      {
        /**
         * Docusaurus supports adding `{#my-explicit-id}` at the end of a Markdown heading
         * to set a custom heading ID. However, this syntax conflicts with MDX's expression syntax.
         *
         * For linting purposes, it's okay to parse these Markdown heading IDs as expressions,
         * as long as we don't try to parse their contents as JavaScript.
         *
         * @see https://docusaurus.io/docs/markdown-features/toc#heading-ids
         * @see https://mdxjs.com/docs/what-is-mdx/#expressions
         * @see https://github.com/micromark/micromark-extension-mdx-expression/blob/micromark-util-events-to-acorn%402.0.3/packages/micromark-extension-mdx-expression/readme.md#options
         */
        parseMdxExpressions: false,
      },
    ],
    [
      remarkRetext,
      unified()
        .use(retextEnglish)
        .use(retextSyntaxURLs)
        .use(retextIndefiniteArticle)
        .use(retextRepeatedWords)
        .use(retextSpell, {
          dictionary: dictionaryEn,
          personal: [...dictionaryBase, ...dictionaryCustom].join('\n'),
          ignoreDigits: true,
        }),
    ],
  ],
});
