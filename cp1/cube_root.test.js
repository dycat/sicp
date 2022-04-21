const {cube_root, cube_root_iter, improve} = require('./cube_root.js');

test('cube root', () => {
    expect(cube_root(8)).toBeCloseTo(2);
    expect(cube_root(27)).toBeCloseTo(3);
});

test('cube root iter', () => {
    expect(cube_root_iter(2,8)).toBeCloseTo(2);
    expect(cube_root_iter(3,27)).toBeCloseTo(3);
});

test('improve cube', () => {
    expect(improve(1, 8)).toBeCloseTo(3.33)
});