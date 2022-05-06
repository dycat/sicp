
function term(x) {
    return x
}

function next(x) {
    return x + 1
}

// linear iteratiion
function product(term, start_value, next, end_value) {
    function product_iter(current_value, current_procduct){
        return current_value > end_value
               ? current_procduct
               : product_iter(next(current_value), current_procduct * term(current_value)) 
    }
    return product_iter(start_value, 1)
}

// recursion
function product_recusion(term, start_value, next, end_value){
    return start_value > end_value
           ? 1
           : term(start_value) * product_recusion(term, next(start_value), next, end_value)
}

module.exports = {
    term,
    product,
    next,
    product_recusion
}