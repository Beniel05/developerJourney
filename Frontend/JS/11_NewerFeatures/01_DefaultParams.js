const add = (a, b) => {
  console.log(a);
  console.log(b);
  console.log(a + b);
};

add(10); // Only first parameter is passed.

console.log("===============================");
// Old way - using condition.

const add1 = (a, b) => {
  // b = typeof b === 'undefined' ? 100 : b;
  b = b === undefined ? 100 : b;
  console.log(a + b);
};

add1(20);

console.log("===============================");
// New way.

const add2 = (a, b = 100) => {
  console.log(a + b);
};

add2(50); // If one passed. First parameter a - will get this 50. b will be same as 100.
add2(50, 200); // First parameter a will get 50 and b get 200 instead of the default value of 100.


console.log("===============================");
/*          ANOTHER EXAMPLE WITH DEFAULT PARAMS         */

const rollDie = (s = 6) => Math.floor(Math.random() * s) + 1;

// Default 6 sides so;
console.log(rollDie()); // 1 - 6.

// If we want 2 Dies so -> 12 sides;
console.log(rollDie(12)); // 1 - 12.

/*
* Default parameters in JavaScript allow you to initialize named parameters with default values if no value or undefined is passed to the function.
## 💡 Core Syntax

function greet(name = "Guest", greeting = "Hello") {
  return `${greeting}, ${name}!`;
}

console.log(greet()); // "Hello, Guest!"
console.log(greet("Alice")); // "Hello, Alice!"
console.log(greet("Bob", "Hi")); // "Hi, Bob!"

## 🔑 Key Exam & Interview Concepts

* undefined vs. null: Default values are triggered only if the argument is omitted or explicitly passed as undefined. Passing null is considered a valid value, so the default will not kick in.

function test(num = 10) { return num; }
console.log(test(undefined)); // 10
console.log(test(null));      // null

* Left-to-Right Evaluation: Parameters are evaluated from left to right. This means later parameters can read and use earlier parameters.

function calculateTotal(price, tax = price * 0.1) {
  return price + tax;
}
console.log(calculateTotal(100)); // 110

* Temporal Dead Zone (TDZ): You cannot use a later parameter to initialize an earlier one because it is not yet defined.

function invalid(a = b, b = 5) {} // Throws ReferenceError

* Dynamic Expressions: You can call functions or pass complex expressions directly inside the default assignment.

const generateId = () => Math.random();function createUser(name, id = generateId()) {
  return { name, id };
}


*/
