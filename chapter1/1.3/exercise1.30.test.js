const {sum, item, next} = require("./exercise1.30");

test("linear recursion", () => {
    expect(sum(item, 1, next, 3)).toBe(6);
})