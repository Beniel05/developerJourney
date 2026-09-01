// Run using TERMINAL;
// ~/OneDrive/Desktop/Dev Journey/Backend/Node/2_Colors_Package (main)
// $ node index.js 

const colors1 = require('colors');

console.log(colors1.green('hello'));
console.log(colors1.red.underline('i like cake and pies'));
console.log(colors1.inverse('inverse the color'));
console.log(colors1.rainbow('OMG Rainbows!'));
console.log(colors1.trap('Run the trap'));

console.log('====================================');

const colors2 = require('colors/safe');

console.log(colors2.green('hello'));
console.log(colors2.red.underline('i like cake and pies'));
console.log(colors2.inverse('inverse the color'));
console.log(colors2.rainbow('OMG Rainbows!'));
console.log(colors2.trap('Run the trap'));
