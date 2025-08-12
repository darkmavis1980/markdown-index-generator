/**
 * @description Normalize a string from url compatible, eg: "This is a string" -> "this-is-a-string"
 * @param {string} string Source string
 * @returns {string}
 */

export function stringToPermalink(string: string): string {
  return string
    .trim()
    .replace(/<[^>]*>/g, '') // Remove all html tags
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Replace [text](link) with text
    .replace(/`([^`]+)`/g, '$1') // Replace `code` with code
    .replace(/\s+/g, ' ') // Replace multiple whitespaces with a single space
    .replace(/(-)+\1+/g, '')
    .replace(/\s/g, '-')
    .replace(/[^a-zA-Z0-9-_]/g, '')
    .replace(/-$/, '') // remove trailing -
    .toLowerCase();
}
