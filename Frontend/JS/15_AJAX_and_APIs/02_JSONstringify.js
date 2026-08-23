// Stringify - Converts a JavaScript object into a JSON string.

const jsObject = { apple: 12, banana: 22, cherry: undefined, zebra: null };

console.log(jsObject);
/* { apple: 12, banana: 22, cherry: undefined, zebra: null } */

const json = JSON.stringify(jsObject);

console.log(json);
/* {"apple":12,"banana":22,"zebra":null} */