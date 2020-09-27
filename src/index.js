import { checkTypes } from './index.helper';

export const add = (a, b = 0) => {
  return checkTypes(a, b,'number', 'niepoprawny parametr') || a + b;
};

export const sub = (a, b = 0) => {
  return checkTypes(a, b,'number', 'niepoprawny parametr') || a - b;
};


