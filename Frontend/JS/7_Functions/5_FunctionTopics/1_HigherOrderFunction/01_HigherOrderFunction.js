function callTwice(f) {
    f();
    f();
}

function call10Times(f) {
  for (let i = 0; i < 10; i++) {
    f();
  }
}

function fun() {
    console.log("Hello!");
}

callTwice(fun);
console.log('=========');
call10Times(fun);

/*
===================================================
HIGHER-ORDER FUNCTIONS (HOF)
===================================================

Definition:
A Higher-Order Function is a function that:
1. Takes one or more functions as arguments, OR
2. Returns another function.

Since JavaScript functions are first-class objects,
they can be stored in variables, passed as arguments,
and returned from other functions.

---------------------------------------------------
Related Terms
---------------------------------------------------

First-Class Function
- A function stored in a variable.
- Can be passed as an argument.
- Can be returned from another function.

Callback Function
- A function passed as an argument to another function.

Higher-Order Function (HOF)
- A function that accepts a callback OR returns a function.

Closure
- A returned function that remembers variables from
  its outer function even after the outer function ends.

---------------------------------------------------
Examples of Higher-Order Functions
---------------------------------------------------

Array Methods:
- forEach()
- map()
- filter()
- reduce()
- find()
- some()
- every()
- sort()

Browser Functions:
- setTimeout()
- setInterval()

---------------------------------------------------
Quick Difference
---------------------------------------------------

Function stored in a variable
        ↓
First-Class Function

Function passed as an argument
        ↓
Callback Function

Function accepts/returns another function
        ↓
Higher-Order Function

Returned function remembers outer variables
        ↓
Closure

---------------------------------------------------
Easy Way To Remember
---------------------------------------------------

Accepts Function?
OR
Returns Function?

YES
↓
Higher-Order Function
*/