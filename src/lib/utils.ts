/**
 * @description Normalize a string from url compatible, eg: "This is a string" -> "this-is-a-string"
 * @param {string} string Source string
 * @returns {string}
 */

export function stringToPermalink(string: string): string {
  if (typeof string !== 'string') {
    return string
  }

  return string
  .replace(/\s/g, '-')
  .replace(/[^a-zA-Z0-9-]/g, '')
  .toLowerCase()
}
