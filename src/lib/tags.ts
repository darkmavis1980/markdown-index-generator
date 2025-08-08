import { INDEX_TAG } from '../constants.js';

/**
 * Tries to the first H2 title and adds the index tag right before it
 * @param text The text to process
 * @returns The updated text
 */
export const findFirstParagraph = (text: string): string => {
  const regex = /^(##\s.+)(\n{1,3})/gm;
  const match = regex.exec(text);

  if (!match) {
    return text;
  }

  const matchStart = match.index;
  const matchEnd = match.index + match[0].length;

  const beforeMatch = text.substring(0, matchStart);
  const headingAndNewlines = match[0];
  const afterMatch = text.substring(matchEnd);

  return `${beforeMatch}<!-- ${INDEX_TAG}-start -->\n<!-- ${INDEX_TAG}-end -->\n\n${headingAndNewlines}${afterMatch}`;
};

/**
 * It replace the content of a given tag from a source string
 *
 * @param source The text to replace
 * @param tag The tag to find
 * @param content The content to replace in between the tags
 * @returns The parsed string
 */
export const replaceTag = (source: string, tag: string, content: string): string => {
  const start = `<!-- ${tag}-start -->`;
  const end = `<!-- ${tag}-end -->`;
  let tagStartPosition = source.indexOf(start);
  let tagEndPosition = source.indexOf(end);
  if (tagStartPosition === -1 || tagEndPosition === -1) {
    if (tag === INDEX_TAG) {
      source = findFirstParagraph(source);
      tagStartPosition = source.indexOf(start);
      tagEndPosition = source.indexOf(end);
    } else {
      throw new Error(`You must add the ${tag} tags in the document!`);
    }
  }

  const preTagContent = source.slice(0, tagStartPosition + start.length);
  const postTagContent = source.slice(tagEndPosition);
  return `${preTagContent}\n${content}\n${postTagContent}`;
};

/**
 * Takes a string as an input and remove the content in between the blocks
 *
 * @param source The source text to replace
 * @param block The block of repeated code to encapsulate content
 * @returns The replaced string
 */
export const replaceBlock = (source: string, block: string): string => {
  const regex = new RegExp(`${block}(.+?)${block}`, 'gms');
  return source.replace(regex, '');
};
