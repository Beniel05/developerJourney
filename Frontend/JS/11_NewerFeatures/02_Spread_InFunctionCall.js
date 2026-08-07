let min = Math.min(10, 20, 30, 40, 50); // min(...values: number[]): number;
let max = Math.max(10, 20, 30, 40, 50); // max(...values: number[]): number;

console.log(`Min: ${min}, Max: ${max}`);

console.log("==========================");

const nums = [100, 200, 300, 400, 500];
console.log(Math.max(nums)); // NaN. max() don't know what to do with a single array.
console.log(Math.max(...nums)); // We have to spread the array elements.
// Imagine like spreading butter/cream on a bread.

console.log("Entire Array:", nums);
/*
/ console.log("Spreaded Elements: " + ...nums);
* The + operator expects a single evaluation expression on its right side.
* The spread operator (...) expands arrays into multiple, 
* separate arguments, which cannot be concatenated inline with a string using +.
*/
console.log("Spreaded Elements:",...nums);

console.log("==========================");

console.log(..."Hello World");

/*
* The spread operator (...) expands an iterable (like an array, string, or object) into individual elements or properties. [1, 2, 3] 
## 📋 Visual Cheat Sheet

const nums =;

console.log(...nums);       // 1 2 3 (Unpacked arguments)
console.log([...nums, 4]);  // [1, 2, 3, 4] (Array literal)

## 🔑 Key Use Cases

* Shallow Copying: Creates a new reference for arrays or objects.

const original = { a: 1, b: { c: 2 } };const copy = { ...original }; // b is still a shared reference (shallow)

* Merging: Combines multiple arrays or objects easily.

const combinedArr = [...arr1, ...arr2];const combinedObj = { ...obj1, ...obj2 }; // Overwrites duplicate keys left-to-right

* Strings to Arrays: Unpacks characters into individual array elements.

const chars = [..."Hi"]; // ['H', 'i']


## ⚠️ Common Udemy & Interview Gotchas

* Spread vs. Rest: Spread unpacks elements (e.g., [...arr]), while Rest packs elements into an array inside function parameters (e.g., function sum(...args)).
* Object Spreading in Functions: You cannot spread an object directly into a function call like console.log(...obj) because function arguments expect an ordered list (iterable), which standard objects are not.
*/