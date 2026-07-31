// These are all Falsy;
false
0
""
null
undefined
NaN

// Everything else is TRUTHY.
let truthInput = -1;
console.log(truthInput);
if(truthInput) {
    console.log("TRUTHY!");
} else {
    console.log("FALSY!");
}
truthInput = " "; // Spaces also Truthy
console.log(truthInput);
if(truthInput) {
    console.log("TRUTHY!");
} else {
    console.log("FALSY!");
}

// FALSY examples.
let input;
console.log(input);
if(input) {
    console.log("TRUTHY!");
} else {
    console.log("FALSY!");
}

input = false;
console.log(input);
if(input) {
    console.log("TRUTHY!");
} else {
    console.log("FALSY!");
}

input = 0;
console.log(input);
if(input) {
    console.log("TRUTHY!");
} else {
    console.log("FALSY!");
}

input = ''; // Empty String is Falsy.
console.log(input);
if(input) {
    console.log("TRUTHY!");
} else {
    console.log("FALSY!");
}

input = null;
console.log(input);
if(input) {
    console.log("TRUTHY!");
} else {
    console.log("FALSY!");
}

input = NaN;
console.log(input);
if(input) {
    console.log("TRUTHY!");
} else {
    console.log("FALSY!");
}

