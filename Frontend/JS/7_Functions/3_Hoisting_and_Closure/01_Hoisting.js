// ===================================================
// HOISTING (JavaScript)
// Hoisting is JavaScript's behavior of moving
// declarations to the top of their scope BEFORE code
// execution.
//
// Only declarations are hoisted.
// Initializations stay where they are.
// ===================================================


// ===================================================
// 1. Function Declaration Hoisting
// ===================================================

greet();

function greet() {
    console.log("Hello!");
}

// Output:
// Hello!


// ===================================================
// 2. var Hoisting
// ===================================================

console.log(a); // undefined

var a = 10;

console.log(a); // 10

// JavaScript behaves like:
//
// var a;
// console.log(a);
// a = 10;


// ===================================================
// 3. let Hoisting
// ===================================================

// console.log(b);
// ❌ ReferenceError

let b = 20;


// ===================================================
// 4. const Hoisting
// ===================================================

// console.log(c);
// ❌ ReferenceError

const c = 30;


// ===================================================
// 5. Function Expression
// ===================================================

// sayHello();
// ❌ TypeError

var sayHello = function () {
    console.log("Hello");
};


// ===================================================
// 6. Arrow Function
// ===================================================

// add(2, 3);
// ❌ ReferenceError

const add = (a, b) => a + b;


// ===================================================
// QUICK RULES
// ===================================================

/*
1. Function declarations are fully hoisted.

2. var is hoisted and initialized with undefined.

3. let is hoisted but cannot be used before declaration.

4. const is hoisted but cannot be used before declaration.

5. Function expressions are NOT callable before assignment.

6. Arrow functions are NOT callable before assignment.
*/