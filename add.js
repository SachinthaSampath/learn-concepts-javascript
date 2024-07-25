// module.exports = function add(a, b) {
//     return a + b;
// }

// module.exports = function subtract(a, b) {
//     return a - b;
// }


// In CommonJS syntax, you can't use module.exports multiple times to export different functions because each assignment will overwrite the previous one. Instead, you should export an object containing all the functions you want to export.



function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

module.exports = {
    add,
    subtract
};