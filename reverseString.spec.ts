import { reverseString } from '.';

describe('reverseString', () => {
    it('should return a string', () => {
        const input = '';
        const result = reverseString(input);
        expect(typeof result).toBe('string');
    });

    it('should return a string of same length', () => {
        const input = 'test';
        const result = reverseString(input);
        expect(result).toHaveLength(input.length);
    });

    it('should reverse the string', () => {
        const input = 'test';
        const result = reverseString(input);
        expect(result).toBe('tset');
    });

    it('should not affect palindromes', () => {
        const input1 = 'racecar';
        const input2 = 'taco cat';
        const result1 = reverseString(input1);
        const result2 = reverseString(input2);
        expect(result1).toBe(input1);
        expect(result2.replace(' ', '')).toBe(input2.replace(' ', ''));
        expect(result2.length).toEqual(input2.length);
    });
});
