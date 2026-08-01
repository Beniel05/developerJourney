// concat - merge arrays
// includes - look for a value
// indexOf - just like string.indexOf
// join - creates a string from an array
// reverse - reverses an array
// slice - copies a portion on an array
// splice - removes/replaces elements
// sort - sorts an array

// concat
console.log("============ CONCAT ============");
let numbers = [10, 20, 30];
let names = ["Adam", "Bob", "Charles"];

let combinedArray1 = numbers.concat(names); // numbers first which combines names
let combinedArray2 = names.concat(numbers); // names first whcih combines numbers
let combinedArray3 = numbers.concat(numbers); // numbers with copy of numbers

console.log(combinedArray1);
console.log(combinedArray2);
console.log(combinedArray3);

// includes
console.log("============ INCLUDES ============");
console.log(numbers.includes(10)); // true
console.log(numbers.includes(100)); // false

// indexOf
console.log("============ INDEX OF ============");
console.log(numbers.indexOf(10)); // 0th index (aka 1st element).
console.log(numbers.indexOf(100)); // No such element so -1

numbers.push(10); // this will be added in the end
console.log(numbers);
console.log(numbers.indexOf(10)); // this is still the same 0th index - FIRST OCCURENCE.

// reverse
console.log("============ REVERSE ============");
console.log("Numbers array: " + numbers);
numbers.reverse();
console.log("Numbers array: " + numbers);

// ===================== NEW ARRAY  ===================== //

const fruits = [
  "Banana",
  "Orange",
  "Apple",
  "Mango",
  "Watermelon",
  "Cherry",
  "Kiwi",
];

// slice
console.log("============ SLICE ============");
console.log(fruits.slice(2)); // from index 2 to the end
console.log(fruits.slice(2, 4)); // index 2, 3 (4 is not included).
console.log(fruits.slice(-3)); // last element = -1. Last 3 elements

// splice
console.log("============ SPLICE ============");
let days = ["Monday", "Tuesday", "Wednesday", "Friday", "Sunday"];
console.log(days);
console.log(days.splice(3, 0, "Thursday")); // from 3rd index, no removal 0, Content to add
console.log(days);
console.log(days.splice(1, 3)); // from 1st index, remove 3 elements total
console.log(days);
console.log(days.splice(2, 0, "Tuesday", "Wednesday", "Thursday")); // adding them back
console.log(days);

// join
console.log("============ JOIN ============");
const elements = ["Fire", "Air", "Water"];
console.log(elements.join()); // "Fire,Air,Water"
console.log(elements.join("")); // "FireAirWater"
console.log(elements.join("-")); // "Fire-Air-Water"
console.log(elements.join(" ")); // "Fire Air Water"

// sort - Converts elements to string then compares with UTF-16 units values. Sorts in ascending order.
console.log("============ SORT ============");
console.log(names.sort()); // Based on unicode - a > A || A < B || a < b

// BUT - for numerics: it just check the first number;
const nums = [1, 70, 99, 1499, 8, -19, 0, 38];
console.log(nums.sort()); 
// Expected Output: [ -19, 0, 1, 8, 38, 70, 99, 1499 ]
// Actual Output: [ -19,  0, 1, 1499, 38, 70, 8, 99 ] 
// Only checked the first digit.


// ============== sort explanation ============== //

const newArr = [10, "a", 20, "Ab"];
console.log(newArr.sort());
// The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code unit values.
/*
 * Because no custom comparison function is provided to the sort() method:
 * String Conversion: The array elements are converted internally to strings: '10', 'a', '20', and 'Ab'.
 * Character Code Comparison: JavaScript compares these strings character-by-character using their UTF-16 / ASCII values:
 * '1' (from '10') has a code of 49
 * '2' (from '20') has a code of 50
 * 'A' (from 'Ab') has a code of 65
 * 'a' (from 'a') has a code of 97
 * Arranging those starting characters from lowest code value to highest results in the sorted array: [10, 20, "Ab", "a"].
 */
