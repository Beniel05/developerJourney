// ======================================================
// Purpose:
//   Demonstrates the difference between:
//
//   1. Number()     vs parseInt()
//   2. isNaN()      vs !num (Falsy Check)
//
// ======================================================

// Different types of string inputs to test
const inputs = [
    "25",       // Valid integer
    "25.75",    // Decimal number
    "25abc",    // Number followed by text
    "abc25",    // Text followed by number
    "0",        // Zero
    "-10",      // Negative number
    "",         // Empty string
    " "         // Only whitespace
];

// Loop through every input
for (const input of inputs) {

    // Number() tries to convert the ENTIRE string.
    // If any invalid character exists, it returns NaN.
    const numberValue = Number(input);

    // parseInt() reads from the beginning of the string.
    // It stops when it finds a non-numeric character.
    const parseIntValue = parseInt(input);

    console.log("======================================");
    console.log(`Input : "${input}"`);

    console.log("\n---------- Number() vs parseInt() ----------");

    console.log("Number()    :", numberValue);
    console.log("parseInt()  :", parseIntValue);

    console.log("\n---------- isNaN() vs !num ----------");

    // Checks ONLY whether the value is NaN.
    console.log("isNaN(Number()) :", isNaN(numberValue));

    // Checks whether the value is FALSY.
    // Falsy values include:
    // 0, NaN, "", null, undefined, false
    console.log("!Number()       :", !numberValue);

    console.log();
}