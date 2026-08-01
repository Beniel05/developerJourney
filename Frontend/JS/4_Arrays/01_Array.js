// First of all, Array is an Object.
let test = [];
console.log(typeof test);
console.log("================================");

let numbers = [10, 20, 30, 40, 50];
let mixedArray = [1, NaN, undefined, true, false, 'Hello', 0];
let names = ["Adam", "Bob", "Charles"];

console.log(names); // Printing the entire array.
console.log(names[1]); // Getting by index.
names[0] = "ADAM"; // Changing the value by index.
console.log(names); // Again Printing the array.

// Adding new name to the existing array at the end;
names[names.length] = "David";
console.log(names);

// What if I add leaving so many empty spaces;
names[10] = "Jacob";
console.log(names); // 'David', <6 empty items>, 'Jacob'

// Why i try to access that empty item index;
console.log(names[5]); // undefined

// Getting the last element in an array;
console.log(names[names.length - 1]);