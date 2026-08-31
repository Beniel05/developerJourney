// Implicit return arrow funcitons
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const square = (a) => a * a;
const cube = (a) => square(a) * a ;

// Export without 'module' keyword;
export { add, sub, square, cube };

// Using Exports;
// exports.add = add;
// exports.sub = sub;


// Way of exporting using module.exports

/* Way 1 (Inline) */
// module.exports.add = (a, b) => a + b;

/* Way 2 (Internal) */
// module.exports.add = add;
// module.exports.cube = cube;

/* Way 3 */
// module.exports = {
//   add, sub, square, cube
// };

/* Way 4 */
// const math = {
//     add: add, sub: sub, square: square, cube: cube
// }
// module.exports = math;