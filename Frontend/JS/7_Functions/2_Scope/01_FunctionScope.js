// ===================================================
// FUNCTION SCOPE (JavaScript)
// A variable declared inside a function can ONLY be
// accessed inside that function.
// ===================================================


// ===================================================
// 1. Local Variable
// ===================================================

function greet() {
    const message = "Hello!";
    console.log(message); // Hello!
}

greet();

// console.log(message);
// ❌ ReferenceError


// ===================================================
// 2. Function Can Access Global Variable
// ===================================================

const country = "India";

function showCountry() {
    console.log(country); // India
}

showCountry();

console.log(country); // India


// ===================================================
// 3. Global Variable Updated Inside Function
// (No local variable is created.)
// ===================================================

let score = 50;

function increaseScore() {
    score = 100; // Updates the global variable
    console.log("Inside:", score);
}

increaseScore();

console.log("Outside:", score);

// Output:
// Inside: 100
// Outside: 100


// ===================================================
// 4. Local Variable Hides (Shadows) Global Variable
// ===================================================

const city = "Chennai";

function printCity() {
    const city = "Mumbai"; // Local variable

    console.log("Inside:", city);
}

printCity();

console.log("Outside:", city);

// Output:
// Inside: Mumbai
// Outside: Chennai


// ===================================================
// 5. If No Local Variable Exists,
// Function Uses Global Variable
// ===================================================

const language = "JavaScript";

function displayLanguage() {
    console.log(language);
}

displayLanguage(); // JavaScript


// ===================================================
// 6. Every Function Call Gets Its Own Scope
// ===================================================

function counter() {
    let count = 0;

    count++;

    console.log(count);
}

counter(); // 1
counter(); // 1
counter(); // 1


// ===================================================
// 7. Function Parameters Are Local Variables
// ===================================================

function add(a, b) {
    console.log(a + b);
}

add(10, 20); // 30

// console.log(a);
// ❌ ReferenceError


// ===================================================
// 8. Same Variable Name In Different Functions
// ===================================================

function student() {
    const name = "John";
    console.log(name);
}

function teacher() {
    const name = "David";
    console.log(name);
}

student(); // John
teacher(); // David


// ===================================================
// 9. Local Variables Cannot Be Accessed Outside
// ===================================================

function employee() {
    const salary = 50000;

    console.log(salary);
}

employee();

// console.log(salary);
// ❌ ReferenceError


// ===================================================
// QUICK RULES
// ===================================================

/*
1. Variables declared inside a function are LOCAL.

2. Local variables exist only while the function runs.

3. Functions can access GLOBAL variables.

4. Global scope cannot access LOCAL variables.

5. If a local variable has the same name as a global
   variable, the local variable is used inside the function
   (Shadowing).

6. If there is no local variable, JavaScript uses the
   global variable.

7. Updating a global variable inside a function changes
   the original global variable.

8. Parameters are also local variables.

9. Every function call creates a new function scope.
*/