const { pascal_triangle } = require('./exercise1.12');

test("test Pascal's triangle", () => {
    expect(pascal_triangle(1, 1)).toBe(1);
    expect(pascal_triangle(2, 2)).toBe(1);
    expect(pascal_triangle(2, 2)).toBe(1);
    // expect(pascal_triangle(3, 2)).toBe(2);
    expect(pascal_triangle(4, 2)).toBe(3);
});