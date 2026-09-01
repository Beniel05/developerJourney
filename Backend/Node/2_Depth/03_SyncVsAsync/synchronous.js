const fs = require('node:fs');

console.log("Start of the program");

// Sync => Blocking Operation
const data = fs.readFileSync('file.txt', 'utf-8');

console.log(data);

console.log("End of the program");