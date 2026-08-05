// ===================================================
// BLOCK SCOPE (JavaScript)
// A block is anything inside { }.
//
// let  -> Block Scoped ✅
// const -> Block Scoped ✅
// var -> NOT Block Scoped ❌
//
// NOTE:
// 'var' is mainly seen in old / legacy JavaScript code.
// Modern JavaScript prefers 'let' and 'const'.
// ===================================================


// ===================================================
// 1. Normal Block
// ===================================================

{
    let a = 10;
    const b = 20;
    var c = 30;

    console.log(a); // 10
    console.log(b); // 20
    console.log(c); // 30
}

// console.log(a); // ❌ ReferenceError
// console.log(b); // ❌ ReferenceError
console.log(c); // 30

// var ignores block scope.


// ===================================================
// 2. if Block
// ===================================================

if (true) {

    let city = "Chennai";
    const country = "India";
    var language = "JavaScript";

    console.log(city);
    console.log(country);
    console.log(language);
}

// console.log(city);     // ❌ ReferenceError
// console.log(country);  // ❌ ReferenceError
console.log(language);    // JavaScript


// ===================================================
// 3. for Loop Block
// ===================================================

for (let i = 1; i <= 3; i++) {
    console.log(i);
}

// console.log(i);
// ❌ ReferenceError


// ===================================================
// 4. var In for Loop
// ===================================================

for (var j = 1; j <= 3; j++) {
    console.log(j);
}

console.log(j); // 4

// 'var' is NOT block scoped.
// It is still accessible outside the loop.


// ===================================================
// 5. const In Block
// ===================================================

{
    const pi = 3.14;

    console.log(pi);
}

// console.log(pi);
// ❌ ReferenceError


// ===================================================
// 6. let In Block
// ===================================================

{
    let age = 22;

    console.log(age);
}

// console.log(age);
// ❌ ReferenceError


// ===================================================
// 7. Shadowing
// ===================================================

const company = "Google";

{
    const company = "Microsoft";

    console.log("Inside:", company);
}

console.log("Outside:", company);

// Output:
// Inside: Microsoft
// Outside: Google


// ===================================================
// 8. Updating Outer Variable
// (No new variable declared.)
// ===================================================

let score = 50;

{
    score = 100;

    console.log("Inside:", score);
}

console.log("Outside:", score);

// Output:
// Inside: 100
// Outside: 100


// ===================================================
// 9. Creating New Local Variable
// ===================================================

let marks = 80;

{
    let marks = 95;

    console.log("Inside:", marks);
}

console.log("Outside:", marks);

// Output:
// Inside: 95
// Outside: 80


// ===================================================
// QUICK RULES
// ===================================================

/*
1. A block is anything inside { }.

2. let is BLOCK SCOPED.

3. const is BLOCK SCOPED.

4. var is NOT block scoped.
   It is function scoped.
   (Mostly seen in old / legacy JavaScript code.)

5. Variables declared with let or const
   exist only inside the block.

6. Variables declared with var
   are accessible outside the block.

7. if, for, while and plain { }
   all create a block.

8. Declaring a new variable with the same
   name inside a block hides (shadows)
   the outer variable.

9. If you don't declare a new variable,
   updating it inside the block changes
   the outer variable.
*/