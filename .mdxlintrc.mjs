import { defineConfig } from 'mdxlint';
import dictionaryEn from 'dictionary-en';
import dictionaryBase from './spellcheck/dictionary/base.mjs';
import dictionaryCustom from './spellcheck/dictionary/custom.mjs';
import remarkMdx from 'remark-mdx';
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
      remarkRetext,
      unified()
        .use(remarkMdx)
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
