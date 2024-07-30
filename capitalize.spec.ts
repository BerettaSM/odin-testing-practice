import { capitalize } from '.';

describe('capitalize', () => {
    it('should return a string', () => {
        const input = '';
        const result = capitalize(input);
        expect(typeof result).toBe('string');
    });

    it('should return a string of same length', () => {
        const input = 'test';
        const result = capitalize(input);
        expect(result).toHaveLength(input.length);
    });

    it('should return a string with first letter capitalized', () => {
        const input = 'test';
        const result = capitalize(input);
        expect(result[0]).toBe(input[0].toUpperCase());
    });

    it('should return same string if already capitalized', () => {
        const input = 'Test';
        const result = capitalize(input);
        expect(result).toEqual(input);
    })
});
