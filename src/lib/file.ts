export const isFileValid = (file: string): boolean => {
  const extension = file.substr(-3).toLowerCase()
  return extension === '.md'
}
