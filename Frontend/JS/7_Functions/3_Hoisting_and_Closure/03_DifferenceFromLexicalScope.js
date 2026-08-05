// ===================================================
// JavaScript: Lexical Scope + Closure + Hoisting
// ===================================================


// ===================================================
// 1. HOISTING
// ===================================================

// Function declarations are hoisted.
greet();

function greet() {
    console.log("Hello!");
}

// Output:
// Hello!


// var is hoisted (initialized with undefined).

console.log(a); // undefined

var a = 10;

console.log(a); // 10


// let and const are hoisted but cannot be used
// before their declaration.

// console.log(b); // ❌ ReferenceError
let b = 20;

// console.log(c); // ❌ ReferenceError
const c = 30;



// ===================================================
// 2. LEXICAL SCOPE
// ===================================================

const globalVar = "Global";

function outer() {

    const outerVar = "Outer";

    function inner() {

        const innerVar = "Inner";

        console.log(globalVar); // Global Scope
        console.log(outerVar);  // Parent Function
        console.log(innerVar);  // Current Function
    }

    inner();

    // console.log(innerVar);
    // ❌ ReferenceError
}

outer();



// ===================================================
// 3. CLOSURE
// ===================================================

function createCounter() {

    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

const counter = createCounter();

counter(); // 1
counter(); // 2
counter(); // 3

// Even though createCounter() has already finished,
// the returned function still remembers 'count'.



// ===================================================
// Difference Between Lexical Scope & Closure
// ===================================================

function parent() {

    const message = "Hello";

    function child() {
        console.log(message);
    }

    // -----------------------------
    // Lexical Scope
    // child() is called before
    // parent() finishes.
    // -----------------------------
    child();

    // -----------------------------
    // Closure
    // Returning child allows it
    // to remember 'message' after
    // parent() has finished.
    // -----------------------------
    return child;
}

const savedFunction = parent();

savedFunction();



// ===================================================
// QUICK SUMMARY
// ===================================================

/*
HOISTING
---------
- JavaScript moves declarations to the top.
- Function declarations are fully hoisted.
- var is hoisted (undefined).
- let and const cannot be used before declaration.

LEXICAL SCOPE
-------------
- Inner functions can access outer variables.
- JavaScript searches:
  Current → Parent → Global

CLOSURE
-------
- A closure is an inner function that remembers
  variables from its outer function even after
  the outer function has finished executing.

Relationship:
Lexical Scope ---> Makes Closures Possible
Hoisting --------> Separate Concept
*/