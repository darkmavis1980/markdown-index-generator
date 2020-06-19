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
  return `${preTagContent}\n${content}\n${postTagContent}`
}
