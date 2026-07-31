// YOUTUBE reference: https://youtu.be/et8xNAc2ic8?si=ycvFHcCQav37Q96c

// Good part

console.log(5 == 5); // true
console.log('A' == 'a'); // false
console.log(true == false); // false

// Weird Part

console.log(65 == '65'); // true (but different data types)
console.log(0 == false); // true
console.log(0 == ''); // true
console.log(null == undefined); // true
console.log({}); // {}
console.log(!{}); // false
console.log([]); // []
console.log(!([])); // false

console.log(Number(true));
console.log(true + true);