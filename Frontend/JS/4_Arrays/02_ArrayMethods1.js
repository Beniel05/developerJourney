// Push = adds elements to the end.
// Pop = removes exactly one element from the end.
// Shift = remove from start
// Unshift = add to start

let numbers = [1,2,3];
console.log(numbers); // 1, 2, 3

// Push
numbers.push(4); // can push 1 element.
console.log(numbers);

numbers.push(5, 6, 7); // can also push many elements at once.
console.log(numbers);

// Pop
console.log("Going to pop (from last): " + numbers.pop()); // pop will return the last element before removing.
console.log(numbers); // then removes that element from the array.

// Shift
console.log("Going to shift (from first): " + numbers.shift()); // shift will return the first element before removing.
console.log(numbers); // then removes that element from the array.

// Unshift
console.log("Going to unshift 0 (to the start)" + numbers.unshift(0)); // Adds the element to the starting.
console.log(numbers);

console.log(numbers.unshift(-3, -2, -1)); // Can add multiple elements
console.log(numbers);