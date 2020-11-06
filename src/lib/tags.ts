/**
 * It replace the content of a given tag from a source string
 *
 * @param {string} source The text to replace
 * @param {string} tag The tag to find
 * @param {string} content The content to replace in between the tags
 * @returns {string} The parsed string
 */
export const replaceTag = (source: string, tag: string, content: string): string => {
  const start = `<!-- ${tag}-start -->`
  const end = `<!-- ${tag}-end -->`
  const tagStartPosition = source.indexOf(start)
  const tagEndPosition = source.indexOf(end)
  if (tagStartPosition === -1 || tagEndPosition === -1) {
    throw new Error('You must add the index tags in the document!')
  }
  const preTagContent = source.slice(0, tagStartPosition + start.length)
  const postTagContent = source.slice(tagEndPosition)
  return `${preTagContent}\n${content}\n${postTagContent}\n`
}

/**
 * Takes a string as an input and remove the content in between the blocks
 *
 * @param {string} source The source text to replace
 * @param {string} block The block of repeated code to encapsulate content
 * @returns {string} The replaced string
 */
export const replaceBlock = (source: string, block: string): string => {
  const regex = new RegExp(`${block}(.+?)${block}`, 'gms')
  return source.replace(regex, '')
}
