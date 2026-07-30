// Numbers
10;
10.903487 - 12897.039 - 3247;
console.log(1.9999999999999999); // 2
/*
 * Binary Limitations: Computers cannot store infinitely precise decimal fractions. They must convert decimals into binary (base-2).
 * Precision Limit: A 64-bit float allocation allows for exactly 53 bits of precision for the number's digits (the significand). This gives roughly 15 to 17 digits of decimal precision.
 * Rounding Up: The number 1.9999999999999999 has 17 decimal places. Because it exceeds the maximum precision safe limit, JavaScript rounds it to the nearest representable number, which is exactly 2
 */

// NAN - Not A Number
console.log(typeof (0 / 0)); // Both operands are numbers
console.log(0 / 0); // But their resulting value is Not-a-Number (NaN)

console.log(typeof NaN); // number
console.log(NaN === NaN); // false
console.log(1 + NaN); // NaN
