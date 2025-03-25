import { VALID_FORMATS } from '../constants';

export const isFileValid = (file: string): boolean => {
  const regex = new RegExp(`(${VALID_FORMATS.join('|')})$`);
  return regex.test(file);
};
