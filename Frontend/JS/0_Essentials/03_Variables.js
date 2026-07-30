// lET

// Lets imagine a Cricket team of 11 players
let bowlers;
// let bowlers = 4; // can't declare let ...
bowlers = 4; // can re-assign
let batsmans = 5;
let keeper = 1;

console.log(bowlers);
bowlers = bowlers + 1;
console.log(bowlers);

let totalPlayers = bowlers + batsmans + keeper;
console.log(`Total Player: ${totalPlayers}`);

// CONST 
const pi = 3.14159;
// pi++; // can't be reassigned
// const variableName; // can't just be declared without assigning const variable.

// VAR
var variableName = 1;
var variableName = 10;
// can declare the same variable again - only in var - (old). Not recommended.