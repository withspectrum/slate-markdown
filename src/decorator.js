// @flow
// $FlowFixMe
import { Mark, Data } from 'slate';
// $FlowFixMe
import Prism from 'prismjs';
import 'prismjs/components/prism-markdown';

/**
 * Define a decorator for markdown styles.
 *
 * @param {Text} text
 * @param {Block} block
 */

function markdownDecorator(text: any, block: any) {
  const characters = text.characters.asMutable();
  const language = 'markdown';
  const string = text.text;
  const grammar = Prism.languages[language];
  const tokens = Prism.tokenize(string, grammar);
  addMarks(characters, tokens, 0);
  return characters.asImmutable();
}

function addMarks(characters, tokens, offset) {
  for (const token of tokens) {
    if (typeof token == 'string') {
      offset += token.length;
      continue;
    }

    const { content, length, type } = token;
    let level;
    if (type === 'title') {
      const hashes = content.find(
        innerToken => innerToken.type === 'punctuation'
      );
      level = hashes.length;
    }
    const mark = Mark.create({ type, data: Data.create({ level }) });

    for (let i = offset; i < offset + length; i++) {
      let char = characters.get(i);
      let { marks } = char;
      marks = marks.add(mark);
      char = char.set('marks', marks);
      characters.set(i, char);
    }

    if (Array.isArray(content)) {
      addMarks(characters, content, offset);
    }

    offset += length;
  }
}

export default markdownDecorator;
