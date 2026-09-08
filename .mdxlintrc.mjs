import { readFileSync } from 'node:fs';
import dictionaryEn from 'dictionary-en';
import { defineConfig } from 'mdxlint';
import remarkDirective from 'remark-directive';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkRetext from 'remark-retext';
import retextEnglish from 'retext-english';
import retextSpell from 'retext-spell';
import retextSyntaxUrls from 'retext-syntax-urls';
import { unified } from 'unified';

const personalDictionary = readFileSync(new URL('./spellcheck/dictionary.txt', import.meta.url), 'utf8');

// Identifiers such as `currentTime`, `H264`, `x86_64` or `kb/s` are not English words.
const identifierPattern = /[a-z][A-Z]|[\d@_/]/;
const letterPattern = /[a-zA-Z]/;

function isIdentifier(word) {
  return identifierPattern.test(word) || !letterPattern.test(word);
}

function retextIgnoreIdentifiers() {
  return (_tree, file) => {
    file.messages = file.messages.filter((message) => {
      if (message.source !== 'retext-spell') return true;
      // "overflow" is an informational note about the suggestion limit, not a misspelling.
      return message.ruleId !== 'overflow' && !isIdentifier(message.actual);
    });
  };
}

export default defineConfig({
  plugins: [
    remarkFrontmatter,
    remarkGfm,
    remarkDirective,
    [
      remarkRetext,
      unified()
        .use(retextEnglish)
        .use(retextSyntaxUrls)
        .use(retextSpell, {
          dictionary: dictionaryEn,
          personal: personalDictionary,
          ignoreDigits: true,
        })
        .use(retextIgnoreIdentifiers),
    ],
  ],
});
