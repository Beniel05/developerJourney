// =====================================================
// Using a Variable as the Property Name
// =====================================================

const person = {
    firstName: "John",
    birthYear: 2005
};

let property = "birthYear";

// Dot notation looks for the literal key "property".
console.log(person.property); // undefined

// Bracket notation evaluates the variable first.
// property -> "birthYear"
// person["birthYear"]
console.log(person[property]); // 2005

/*
Use dot notation when you know the property name.

Use bracket notation when the property name is stored
inside a variable.
*/