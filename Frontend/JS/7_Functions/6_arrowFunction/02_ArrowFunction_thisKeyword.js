// Reference;
// https://www.freecodecamp.org/news/learn-es6-the-dope-way-part-ii-arrow-functions-and-the-this-keyword-381ac7a32881/

/*
==================================================
Arrow Functions & `this`
==================================================

Golden Rules:
1. Normal functions have their own `this`.
2. Arrow functions DO NOT have their own `this`.
3. Arrow functions borrow `this` from their surrounding scope.
*/

console.log("========== Example 1 ==========");

const person = {
    name: "Alex",

    greet() {
        console.log(this);       // person object
        console.log(this.name);  // Ben
    }
};

person.greet();



console.log("\n========== Example 2 ==========");

const student = {
    name: "John",

    greet: function () {
        console.log(this);       // student object
        console.log(this.name);  // John
    }
};

student.greet();

/*
Method shorthand:

greet() {}

is the same as

greet: function() {}
*/



console.log("\n========== Example 3 ==========");

const teacher = {
    name: "David",

    greet: () => {
        console.log(this);

        // Arrow functions don't create their own `this`.
        // They borrow it from the surrounding scope.

        console.log(this.name);
    }
};

teacher.greet();

/*
Browser (global script)

this -> window
this.name -> window.name (usually undefined)

Not:
teacher.name
*/



console.log("\n========== Example 4 ==========");

const employee = {
    name: "Alice",

    work() {
        console.log("Outer:", this.name);

        const print = () => {
            // Borrows `this` from work()
            console.log("Inner:", this.name);
        };

        print();
    }
};

employee.work();

/*
Output

Outer: Alice
Inner: Alice
*/



console.log("\n========== Example 5 ==========");

const user = {
    name: "Charlie",

    work() {

        function print() {
            console.log(this.name);
        }

        print();
    }
};

user.work();

/*
print() is called like this:

print();

NOT

user.print();

So `this` is NOT user.
Result: undefined
*/



console.log("\n========== Example 6 ==========");

const car = {
    brand: "BMW",

    show() {

        setTimeout(() => {
            console.log(this.brand);
        }, 1000);

    }
};

car.show();

/*
Arrow callback borrows `this`
from show().

Output:
BMW
*/



console.log("\n========== Example 7 ==========");

const bike = {
    brand: "Yamaha",

    show() {

        setTimeout(function () {
            console.log(this.brand);
        }, 1000);

    }
};

bike.show();

/*
Normal callback gets its own `this`.

Output:
undefined
*/



console.log("\n========== Example 8 ==========");

const laptop = {
    brand: "ASUS",

    details() {

        const arrow = () => {
            console.log(this.brand);
        };

        function normal() {
            console.log(this.brand);
        }

        arrow();
        normal();
    }
};

laptop.details();

/*
Arrow  -> ASUS
Normal -> undefined
*/



console.log("\n========== Example 9 ==========");

function hello() {
    console.log(this);
}

hello();

/*
Browser (global script)

this -> window

Node.js / ES Modules
this may be different.

Remember:
`this` depends on HOW the function is called.
*/



/*
==================================================
Quick Revision
==================================================

Normal Function
---------------
✔ Has its own `this`
✔ `this` depends on the caller

Arrow Function
--------------
✔ No own `this`
✔ Borrows parent's `this`

Use Normal Functions
--------------------
✔ Object methods

const obj = {
    greet() {}
}

Use Arrow Functions
-------------------
✔ map()
✔ filter()
✔ reduce()
✔ forEach()
✔ setTimeout()
✔ Event callbacks (often)

==================================================
Easy Memory Trick
==================================================

Normal Function:
"Who called me?"

Arrow Function:
"I'll use my parent's this."
*/