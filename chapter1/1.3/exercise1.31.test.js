const { term, product, next, product_recusion } = require("./exercise1.31");

test("test Product function", () => {
    expect(product(term, 1, next, 3)).toBe(6);
    expect(product(term, 0, next, 4)).toBe(0);
    expect(product(term, 2, next, 4)).toBe(24);
});

test("test Product function", () => {
    expect(product_recusion(term, 1, next, 3)).toBe(6);
    expect(product_recusion(term, 0, next, 4)).toBe(0);
    expect(product_recusion(term, 2, next, 4)).toBe(24);
});