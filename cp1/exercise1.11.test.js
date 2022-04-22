const {compute_recursive, compute_iterative, compute_iter } = require('./exercise1.11.js');

// A function ff is defined by the rules f(n)=nf(n)=n if n < 3n<3 and f(n)={f(n-1)}+2f(n-2)+3f(n-3)f(n)=f(n−1)+2f(n−2)+3f(n−3) 
//if n\ge 3n≥3. Write a JavaScript function that computes ff by means of a recursive process. 
//Write a function that computes ff by means of an iterative process.
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