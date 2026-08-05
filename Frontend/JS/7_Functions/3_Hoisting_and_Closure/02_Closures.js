// ===================================================
// CLOSURES (JavaScript)
//
// A closure happens when an inner function remembers
// variables from its outer function even after the
// outer function has finished executing.
// ===================================================


// ===================================================
// 1. Basic Closure
// ===================================================

function outer() {

    const message = "Hello";

    function inner() {
        console.log(message);
    }

    return inner;
}

const greet = outer();

greet();

// Output:
// Hello


// ===================================================
// 2. Counter Example
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


// ===================================================
// 3. Independent Closures
// ===================================================

const counter1 = createCounter();
const counter2 = createCounter();

counter1(); // 1
counter1(); // 2

counter2(); // 1
counter2(); // 2


// ===================================================
// 4. Returning A Function
// ===================================================

function multiply(x) {

    return function (y) {
        return x * y;
    };
}

const double = multiply(2);

console.log(double(5)); // 10
console.log(double(8)); // 16


// ===================================================
// 5. Outer Function Is Finished,
// But Variables Still Exist
// ===================================================

function person() {

    const name = "John";

    return function () {
        console.log(name);
    };
}

const display = person();

display();

// Output:
// John


// ===================================================
// QUICK RULES
// ===================================================

/*
1. A closure is an inner function.

2. The inner function remembers variables
   from the outer function.

3. Those variables stay alive even after the
   outer function has finished.

4. Every closure has its own copy of variables.

5. Closures are commonly used for counters,
   private variables and callbacks.
*/