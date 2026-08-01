const details = {
    firstName: "John",
    lastName: "Doe",
    age: 22,
    languagesKnown: ["JavaScript", "Java", "Python"],
    isMarried: false
}

console.log(details); // Printing entire object

// Two ways to access a particular property by KEY;
console.log("First Name: " + details.firstName);
console.log("First Name: " + details["firstName"]);
// console.log("First Name: " + details[firstName]); // JS expects that firstName without quotes as variable name.

// ================ ANOTHER EXAMPLE ================ //

const another = {1: "One", 2: "Two", null: "yes null", undefined: "yes undefined", true: "yes true"};
// console.log(another.1);
console.log(another[1]);
console.log(another['2']);
console.log(another[null]);
console.log(another[undefined]);
console.log(another[true]);
