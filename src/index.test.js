import { add, sub } from './index';


describe('index.js', () => {
  describe('method ADD', () => {
    it('should correctly add two number', () => {
      const result = add(5,5);

      expect(result).toBe(10);
    });
    it('should return param for single', () => {
      const result = add(5);

      expect(result).toBe(5);
    });
    it('should return string if second param isnt number', () => {
      const result = add(5, 'a');

      expect(result).toBe('niepoprawny parametr');
    });
    it('should return string if first param isnt number', () => {
      const result = add('a', 5);

      expect(result).toBe('niepoprawny parametr');
    });
    it('should return string if first and second params arent number', () => {
      const result = add('a', 'a');

      expect(result).toBe('niepoprawny parametr');
    });
    it('should return string if available is one param type non number', () => {
      const result = add('a');

      expect(result).toBe('niepoprawny parametr');
    });
    it('should return string if is non params', () => {
      const result = add();

      expect(result).toBe('niepoprawny parametr');
    });
  });
  describe('method SUB', () => {
    it('should correctly sub two number', () => {
      const result = sub(10,5);

      expect(result).toBe(5);
    });
    it('should return param for single', () => {
      const result = sub(5);

      expect(result).toBe(5);
    });
    it('should return string if second param isnt number', () => {
      const result = sub(5, 'a');

      expect(result).toBe('niepoprawny parametr');
    });
    it('should return string if first param isnt number', () => {
      const result = sub('a', 5);

      expect(result).toBe('niepoprawny parametr');
    });
    it('should return string if first and second params arent number', () => {
      const result = sub('a', 'a');

      expect(result).toBe('niepoprawny parametr');
    });
    it('should return string if available is one param type non number', () => {
      const result = sub('a');

      expect(result).toBe('niepoprawny parametr');
    });
    it('should return string if is non params', () => {
      const result = sub();

      expect(result).toBe('niepoprawny parametr');
    });
  });
});