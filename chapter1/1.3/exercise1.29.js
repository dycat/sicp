function inc(k) {
    return k + 1;
}

function sum(term, start_value, next, count){
    return start_value > count
           ? 0
           : term(start_value) + sum(term, next(start_value), next, count)
}

function cube(x) {
    return x * x * x
}

function integral(f, a, b, n) {
    let h = (b - a)/n 
    function y(k) {
        return f(a + k * h)
    }
    function term(k) {
        return k === 0 || k === n
               ? y(k)
               : k % 2 == 0
               ? 2 * y(k)
               : 4 * y(k)
    }
    return sum(term, 0, inc, n) * (h / 3);
}

module.exports = {
    integral,
    cube,
    sum
}