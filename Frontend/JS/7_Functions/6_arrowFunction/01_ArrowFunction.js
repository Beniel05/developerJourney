/*      1       */
const add = (x, y) => {
    return x + y;
}

console.log(add(10, 30)); // 10 + 30 = 40.

/*      2       */
const square = n => n * n; // * Implicit return only works when there is one task (expression) to do.
// If you have exactly one paramater - no need for () - but can also be used!.
// If no { } then - no need for return keyword.
console.log(square(6)); // 6 * 6 = 36.

/*      3       */
const rollDie = () => {
    // For no parameter - we should use empty ()
    return Math.floor(Math.random() * 6) + 1;
}

console.log(rollDie());


/*
Arrow Functions (ES6)

Shorter syntax for writing functions.

/ Standard
const add = (a, b) => { return a + b; };

/ Implicit return (no {})
const mul = (a, b) => a * b;

/ One parameter
const greet = name => `Hello ${name}`;

/ Return object (wrap in ())
const user = id => ({ id });

Exam Traps:
• No own `this` → inherits from parent scope. Avoid as object methods when `this` is needed.
• Cannot use `new` → arrow functions aren't constructors.
• No `arguments` object → use `...args`.
*/