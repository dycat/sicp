/*
The numbers at the edge of the triangle are all 1, 
and each number inside the triangle is the sum of the two numbers above it.4 
Write a function that computes elements of Pascal's triangle 
by means of a recursive process.
*/

function pascal_triangle(row, index) {
    return index > row
           ? false
           : index === 1 || index === row 
           ? 1
           : pascal_triangle(row - 1, index - 1) + pascal_triangle(row - 1 , index)
}

module.exports = { 
    pascal_triangle
};