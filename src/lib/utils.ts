/**
 * @description Normalize a string from url compatible, eg: "This is a string" -> "this-is-a-string"
 * @param {string} string Source string
 * @returns {string}
 */

export function stringToPermalink(string: string): string {
  return string
    .trim()
    .replace(/\s+/g, ' ')    // Replace multiple whitespaces with a single space
    .replace(/(-)+\1+/g, '')
    .replace(/\s/g, '-')
    .replace(/[^\d\w_-]/g, '')
    .toLowerCase();
}
