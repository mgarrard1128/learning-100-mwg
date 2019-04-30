import { add, subtract, multiply, divide } from "../src/math";

describe('Math', function () {
    const a = 10, b = 5;
    it('can divide', () => {
        expect(add(a, b)).toBe(15);
    });
    it('can subtract', () => {
        expect(subtract(a, b)).toBe(5);
    });
    it('can multiply', () => {
        expect(multiply(a, b)).toBe(50);
    });
    it('can divide', () => {
        expect(divide(a, b)).toBe(2);
    });
});