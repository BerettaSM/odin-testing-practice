import { caesarCipher } from '.';

describe('caesarCipher', () => {
    it('should return a string', () => {
        const input = 'test';
        const result = caesarCipher(input);
        expect(typeof result).toEqual('string');
    });

    it('should return a string of same length', () => {
        const input = 'blahblahblah';
        const result = caesarCipher(input);
        expect(result).toHaveLength(input.length);
    });

    it('should return a different string on valid shift', () => {
        const input = 'abc';
        const result = caesarCipher(input, 3);
        expect(result).not.toEqual(input);
    });

    it('should return the same string when shifting zero times', () => {
        const input = 'abc';
        const result = caesarCipher(input, 0);
        expect(result).toEqual(input);
    });

    it('should return "def" when shifting "abc" 3 times', () => {
        const input = 'abc';
        const result = caesarCipher(input, 3);
        expect(result).toEqual('def');
    });

    it('should correctly wrap from z to a', () => {
        const input = 'xyz';
        const result = caesarCipher(input, 3);
        expect(result).toEqual('abc');
    });

    it('should preserve casing', () => {
        const input = 'HeLLo';
        const result = caesarCipher(input, 3);
        expect(result).toEqual('KhOOr');
    });

    it('should preserve punctuation', () => {
        const input = 'Hello, World!';
        const result = caesarCipher(input, 3);
        expect(result).toEqual('Khoor, Zruog!');
    });

    it('should handle negative shifts', () => {
        const input = 'abc';
        const result = caesarCipher(input, -3);
        expect(result).toEqual('xyz');
    });
});
