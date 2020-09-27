import { checkTypes } from './index.helper';

describe('index.helper.js', () => {
  describe('method CHECK_TYPES', () => {
    it('should return error msg if param not a type', () => {
      const result = checkTypes('a', 'b', 'number', 'niepoprawny parametr');

      expect(result).toBe('niepoprawny parametr');
    });
    it('should return error msg if param not a type', () => {
      const result = checkTypes(1, 'b', 'number', 'niepoprawny parametr');

      expect(result).toBe('niepoprawny parametr');
    });
    it('should return error msg if param not a type', () => {
      const result = checkTypes('b', 1, 'number', 'niepoprawny parametr');

      expect(result).toBe('niepoprawny parametr');
    });

  });
})