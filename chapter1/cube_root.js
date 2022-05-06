// Solution to exercise 1.8

const { abs } = require("./sqrt")

function improve(guess, x){
    return ( x / (guess * guess) + 2 * guess)/ 3
}

function is_good_enough(guess, x){
    return abs(guess * guess * guess - x) < 0.001
}

function cube_root_iter(guess, x){
    return is_good_enough(guess, x) ? guess : cube_root_iter(improve(guess, x), x)
}

function cube_root(x) {
    return cube_root_iter(1, x)
}

module.exports = {
    cube_root,
    cube_root_iter,
    improve
}