/*
A function ff is defined by the rules f(n)=nf(n)=n if n < 3n<3 and 
f(n)={f(n-1)}+2f(n-2)+3f(n-3)f(n)=f(n−1)+2f(n−2)+3f(n−3) 
if n\ge 3n≥3. Write a JavaScript function that computes ff by means of a recursive process. 
Write a function that computes ff by means of an iterative process.
*/

// recursion
function compute_recursive(n) {
    return n < 3 
             ? n 
             : compute_recursive(n-1) + 2 * compute_recursive(n - 2) + 3 * compute_recursive(n - 3)
}

// iteration
function compute_iterative(n) {
    return n < 3 ? n : compute_iter(2, 1, 0, n - 2 )
}

function compute_iter(a, b, c, count){
    return count === 0 
            ? a
            : compute_iter(a +  2 * b + 3 * c, a, b, count - 1)
}

module.exports = {
    compute_recursive,
    compute_iterative,
    compute_iter
};