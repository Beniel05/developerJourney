'use strict';
// Use browser console to check Output. Code Runner won't get these outputs (Vscode extension)

const image = document.querySelector('img');

console.log("1. Original = " + image.src); // Current src=""

image.src = "https://picsum.photos/200"; // New src;

console.log("2. New = " + image.src);

console.log('===========================');

// Setting alt - attribute

console.log("1. Original = " + image.alt); // Current alt
image.alt = "Something"
console.log("2. New = " + image.alt);
// Even if the alt is not declared - we can set it.