export function capitalize(text: string) {
    if (!text) return '';
    return text[0].toUpperCase() + text.substring(1);
}

export function reverseString(text: string) {
    return [...text].reverse().join('');
}

export class Calculator {
    add(a: number, b: number) {
        return a + b;
    }

    subtract(a: number, b: number) {
        return a - b;
    }

    divide(a: number, b: number) {
        if (b === 0) throw new Error('Cannot divide by zero.');
        return a / b;
    }

    multiply(a: number, b: number) {
        return a * b;
    }
}

function shiftLetterBy(shift: number) {
    return function (letter: string) {
        if (
            !(letter >= 'a' && letter <= 'z') &&
            !(letter >= 'A' && letter <= 'Z')
        ) {
            return letter;
        }
        const offset = letter > 'Z' ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
        const code = letter.charCodeAt(0);
        let shiftedAsciiCode = (((code % offset) + shift) % 26) + offset;
        return String.fromCharCode(shiftedAsciiCode);
    };
}

export function caesarCipher(text: string, shift: number = 13) {
    shift %= 26;
    shift = (shift + 26) % 26;
    if (shift === 0) return text;
    const toShiftedCharacter = shiftLetterBy(shift);
    return text.split('').map(toShiftedCharacter).join('');
}

export function analyzeArray(arr: number[]) {
    const isEmpty = arr.length === 0;
    return {
        average: isEmpty ? 0 : arr.reduce((acc, n) => acc + n, 0) / arr.length,
        min: isEmpty ? 0 : Math.min(...arr),
        max: isEmpty ? 0 : Math.max(...arr),
        length: arr.length,
    };
}
