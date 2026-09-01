// ESM works only when you import the actual file, not the directory.
import allPeople from "./ES_Module_Demo/index.js";
console.log(allPeople);

// CommonJS version (same data, different syntax):
// const allPeople = require('./CJS_Directory_Demo/index.js');
// console.log(allPeople);
