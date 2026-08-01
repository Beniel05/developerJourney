const details = {
    firstName: "John",
    lastName: "Doe",
    age: 22,
    languagesKnown: ["JavaScript", "Java", "Python"],
    isMarried: false
};

console.log(details); // Prints the entire object.

// =====================================================
// Two ways to access an object's property.
// =====================================================

// Dot notation
console.log("First Name: " + details.firstName);

// Bracket notation
console.log("First Name: " + details["firstName"]);

/*
Inside [] JavaScript follows these steps:

Step 1: Evaluate whatever is inside the brackets.
Step 2: Convert the result into a property key (usually a string).
Step 3: Look up that key in the object.
*/

// =====================================================
// Example 1
// =====================================================

// "firstName" is already a string.
console.log(details["firstName"]);

/*
Evaluation:

"firstName"
↓
Already a string
↓
Looks for key "firstName"
*/

// =====================================================
// Example 2
// =====================================================

// firstName (without quotes) is NOT a string.
// JavaScript treats it as a VARIABLE.


// console.log(details[firstName]);

/*
Evaluation:

firstName
↓
JavaScript searches for a variable named firstName.
↓
Variable doesn't exist.
↓
ReferenceError: firstName is not defined

Notice:
JavaScript NEVER reaches the string conversion step because
evaluation already failed.
*/

// =====================================================
// Example 3
// =====================================================

// If the variable exists...

let key = "firstName";

console.log(details[key]);

/*
Evaluation:

key
↓
"firstName"
↓
Converted to property key (already a string)
↓
details["firstName"]
*/

// =====================================================
// Object Keys
// =====================================================

const another = {
    1: "One",
    2: "Two",
    null: "yes null",
    undefined: "yes undefined",
    true: "yes true"
};

/*
JavaScript converts object keys to STRINGS internally.
(Except Symbol keys.)

Internally this object is stored as:

{
    "1": "One",
    "2": "Two",
    "null": "yes null",
    "undefined": "yes undefined",
    "true": "yes true"
}
*/

// =====================================================
// Accessing Keys
// =====================================================

console.log(another[1]);
/*
Evaluation:

1
↓
Value 1
↓
Converted to "1"
↓
another["1"]
*/

console.log(another[null]);
/*
Evaluation:

null
↓
Value null
↓
Converted to "null"
↓
another["null"]
*/

console.log(another[undefined]);
/*
Evaluation:

undefined
↓
Value undefined
↓
Converted to "undefined"
↓
another["undefined"]
*/

console.log(another[true]);
/*
Evaluation:

true
↓
Value true
↓
Converted to "true"
↓
another["true"]
*/

// These are exactly the same.
console.log(another["1"]);
console.log(another["null"]);
console.log(another["undefined"]);
console.log(another["true"]);

// Dot notation cannot be used with numeric keys.
// console.log(another.1); // SyntaxError