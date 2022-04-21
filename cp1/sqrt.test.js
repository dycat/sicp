const { sqrt, sqrt_iter, is_good_enough, abs, square, improve, average } = require('./sqrt');


test('Can get sqrt', () => {
    const sqr = sqrt(4);
    const sqr2 = sqrt(9);

    expect(sqr).toBeCloseTo(2);
    expect(sqr2).toBeCloseTo(3);
});

test('sqrt_iter', () => {
    expect(sqrt_iter(2, 4)).toBe(2);
});

test('is good enough', () => {
    expect(is_good_enough(2, 4)).toBeTruthy();
})

test('abs', () => {
    expect(abs(-2)).toBe(2);
    expect(abs(2)).toBe(2);
    expect(abs(0)).toBe(0);
})

test('square', () => {
    expect(square(-2)).toBe(4);
    expect(square(2)).toBe(4);
    expect(square(0)).toBe(0);
})

test('improve', () => {
    expect(improve(2, 4)).toBe(2);
})

test('average', () => {
    expect(average(2,2)).toBe(2);
})