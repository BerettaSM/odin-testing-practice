import { Calculator } from '.';

const makeSut = (): Calculator => new Calculator();

describe('calculator', () => {
    it('should be an object', () => {
        const calculator = makeSut();
        expect(calculator).not.toBeNull();
        expect(typeof calculator).toEqual('object');
    });

    it('should have an add method', () => {
        const calculator = makeSut();
        expect(typeof calculator['add']).toEqual('function');
    });

    it('should return a number on add method', () => {
        const calculator = makeSut();
        expect(typeof calculator.add(1, 2)).toEqual('number');
    });

    it('should return a correct result on add method', () => {
        const calculator = makeSut();
        expect(calculator.add(1, 2)).toEqual(3);
        expect(calculator.add(4, 7)).toEqual(11);
    });

    it('should have an subtract method', () => {
        const calculator = makeSut();
        expect(typeof calculator['subtract']).toEqual('function');
    });

    it('should return a number on subtract method', () => {
        const calculator = makeSut();
        expect(typeof calculator.subtract(1, 2)).toEqual('number');
    });

    it('should return a correct result on subtract method', () => {
        const calculator = makeSut();
        expect(calculator.subtract(1, 2)).toEqual(-1);
        expect(calculator.subtract(4, 7)).toEqual(-3);
    });

    it('should have an divide method', () => {
        const calculator = makeSut();
        expect(typeof calculator['divide']).toEqual('function');
    });

    it('should return a number on add method', () => {
        const calculator = makeSut();
        expect(typeof calculator.divide(1, 2)).toEqual('number');
    });

    it('should return a correct result on divide method', () => {
        const calculator = makeSut();
        expect(calculator.divide(4, 2)).toEqual(2);
        expect(calculator.divide(13, 2)).toBeCloseTo(6.5);
    });

    it('should throw an error when dividing by zero on divide method', () => {
        const calculator = makeSut();
        expect(() => calculator.divide(5, 0)).toThrow();
    });

    it('should have a multiply method', () => {
        const calculator = makeSut();
        expect(typeof calculator['multiply']).toEqual('function');
    });

    it('should return a number on multiply method', () => {
        const calculator = makeSut();
        expect(typeof calculator.multiply(1, 2)).toEqual('number');
    });

    it('should return a correct result on multiply method', () => {
        const calculator = makeSut();
        expect(calculator.multiply(1, 2)).toEqual(2);
        expect(calculator.multiply(4, 7)).toEqual(28);
    });
});
