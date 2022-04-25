const { integral, cube, sum } = require('./exercise1.29');

test("Simpson's Rule test", () => {
    expect(integral(cube, 0, 1, 100)).toBeCloseTo(0.25);
    expect(integral(cube, 0, 1, 1000)).toBeCloseTo(0.25);
})

// test("sum function", () => {
//     expect(sum(cube, 0, 1, 0.01)).toBeCloseTo(0.25);
// })

test("cube function test", () => {
    expect(cube(3)).toBe(27);
})