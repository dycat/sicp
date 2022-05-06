
function item(x){
    return x;
}

function next(x){
    return x + 1;
}

function sum(term, start_value, next, end_value){
    function iter(current_value, result){
        return current_value > end_value
               ? result
               : iter(next(current_value), result + term(current_value));
    }
    return iter(start_value, 0);
}

module.exports = {
    sum,
    next,
    item
}