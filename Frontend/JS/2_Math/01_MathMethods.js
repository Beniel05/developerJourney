// Type 'Math' in a browser's dev window. To view all the Math object's const variables and their values.

console.log(Math.PI); // 3.141592653589793

console.log(Math.round(5.5)); // 6
console.log(Math.round(5.43)); // 5
// if .lastUnitDigit > 5 => Round up. Else round down.

console.log(Math.abs(-10)); // 10. Not -10

console.log(Math.pow(2, 5)); // 32 => 2 ^ 5.

console.log(Math.floor(10.999999)); // Floors down <OR> removes decimal

/* RANDOM NUMBER */
// Math.random will give 0.22513604947226784 -Some random values between 0 to .99
let random = Math.floor(Math.random() * 10) + 1; // 1 to 10
console.log("Random Number: " + random);

let fourtyToFourtyFour = Math.floor(Math.random() * 5) + 40;
// Adding 40 shifts those possible outcomes to 40, 41, 42, 43, or 44