// Two different arrays are created.
// Even though they contain the same values,
// they are stored at different memory locations.
let test1 = [1, 2, 3];
let test2 = [1, 2, 3];

console.log(test1 == test2);   // false
console.log(test1 === test2);  // false

// Arrays are compared by their reference (memory address),
// not by their contents.

// -------------------------------------------------------------

// arr2 receives a copy of arr1's reference.
// Both variables now point to the SAME array object.
let arr1 = [1, 2, 3];
let arr2 = arr1;

console.log(arr1 == arr2);    // true
console.log(arr1 === arr2);   // true

// Both variables access the same array.
console.log("\nArray 1: " + arr1);
console.log("Array 2: " + arr2);

// Modifying the array through arr2.
// Since both variables reference the same array,
// the change is visible through arr1 as well.
arr2[3] = 100;

console.log("\nArray 1: " + arr1);
console.log("Array 2: " + arr2);

// Changing arr2 itself.
// Only arr2 becomes null.
// arr1 still points to the original array.
arr2 = null;

console.log("\nArray 1: " + arr1);
console.log("Array 2: " + arr2);

/*
JavaScript is ALWAYS pass-by-value like JAVA.

For primitive values (number, string, boolean, bigint, symbol, null, undefined),
the actual value is copied.

For objects, arrays, and functions,
the value being copied is the reference (memory address).

Therefore:
- arr1 and arr2 are different variables.
- Initially, they store the same reference.
- Modifying the array through either variable affects the same array.
- Assigning arr2 = null only changes arr2.
- arr1 still points to the original array.
*/