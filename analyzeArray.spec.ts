import { analyzeArray } from '.';

describe('analyzeArray', () => {
    it('should return an object', () => {
        const input = [];
        const result = analyzeArray(input);
        expect(result).not.toBeNull();
        expect(typeof result).toEqual('object');
    });

    it('should return the appropriate keys', () => {
        const input = [];
        const result = analyzeArray(input);
        expect(Object.keys(result)).toMatchObject(['average', 'min', 'max', 'length']);
    });

    it('should return numbers on key values', () => {
        const input = [];
        const result = analyzeArray(input);
        for(const key in result) {
            expect(typeof result[key]).toEqual('number');
        }
    });

    it('should return all zeros on empty array', () => {
        const input = [];
        const result = analyzeArray(input);
        expect(Object.values(result)).toMatchObject([0, 0, 0, 0]);
    });

    it('should return the correct max', () => {
        const input = [5, 3, 7, 19, 2];
        const result = analyzeArray(input);
        expect(result.max).toEqual(19);
    });

    it('should return the correct min', () => {
        const input = [5, 3, 7, 19, 2];
        const result = analyzeArray(input);
        expect(result.min).toEqual(2);
    });

    it('should return the correct length', () => {
        const input = [5, 3, 7, 19, 2];
        const result = analyzeArray(input);
        expect(result.length).toEqual(input.length);
    });

    it('should return the approximate average', () => {
        const input = [5, 3, 7, 19, 2];
        const result = analyzeArray(input);
        expect(result.average).toBeCloseTo(7.2);
    });
});
