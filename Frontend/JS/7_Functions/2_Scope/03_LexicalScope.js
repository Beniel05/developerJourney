// ===================================================
// LEXICAL SCOPE (JavaScript)
//
// Lexical Scope means an inner function can access
// variables from its outer function.
//
// JavaScript looks for variables from:
// Current Function
//        ↓
// Parent Function
//        ↓
// Grandparent Function
//        ↓
// Global Scope
//
// It NEVER searches in the opposite direction.
// ===================================================


// ===================================================
// 1. Basic Lexical Scope
// ===================================================

const country = "India";

function outer() {

    const city = "Chennai";

    function inner() {

        const area = "Tambaram";

        console.log(country); // Global
        console.log(city);    // Parent
        console.log(area);    // Current
    }

    inner();
}

outer();


// ===================================================
// 2. Three Nested Functions
// ===================================================

const company = "OpenAI";

function levelOne() {

    const department = "Engineering";

    function levelTwo() {

        const team = "Backend";

        function levelThree() {

            const employee = "Ben";

            console.log(company);     // Global
            console.log(department);  // levelOne
            console.log(team);        // levelTwo
            console.log(employee);    // levelThree
        }

        levelThree();
    }

    levelTwo();
}

levelOne();


// ===================================================
// 3. Inner Function Can Access Outer Variables
// ===================================================

function parent() {

    const a = 10;

    function child() {

        const b = 20;

        console.log(a);
        console.log(b);
    }

    child();

    // console.log(b);
    // ❌ ReferenceError
}

parent();


// ===================================================
// 4. Grandchild Can Access Everything Above
// ===================================================

function first() {

    const one = 1;

    function second() {

        const two = 2;

        function third() {

            const three = 3;

            console.log(one);
            console.log(two);
            console.log(three);
        }

        third();
    }

    second();
}

first();


// ===================================================
// 5. Outer Function Cannot Access Inner Variables
// ===================================================

function outerFunction() {

    const x = 100;

    function innerFunction() {

        const y = 200;

        console.log(x);
        console.log(y);
    }

    innerFunction();

    // console.log(y);
    // ❌ ReferenceError
}

outerFunction();


// ===================================================
// Scope Lookup Order
// ===================================================

/*
Current Function
       ↓
Parent Function
       ↓
Grandparent Function
       ↓
Global Scope
*/


// ===================================================
// QUICK RULES
// ===================================================

/*
1. Lexical Scope is determined by where a function
   is written, NOT where it is called.

2. Inner functions can access outer variables.

3. Outer functions cannot access inner variables.

4. JavaScript searches for variables from
   inside → outside.

5. Global variables are accessible everywhere
   (unless shadowed).

6. Lexical Scope is the foundation of Closures.
*/