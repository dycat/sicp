const {compute_recursive, compute_iterative, compute_iter } = require('./exercise1.11.js');

test('test exercise', () => {
    expect(compute_recursive(2)).toBe(2);
    expect(compute_recursive(3)).toBe(4);
});

test('test exercise iteration version', () => {
    expect(compute_iterative(2)).toBe(2);
    expect(compute_iterative(3)).toBe(4);
});

test('test exercise iteration version iter', () => {
    expect(compute_iter(2, 1, 0, 0)).toBe(2)
});