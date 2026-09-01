const fs = require('node:fs');

console.log("Start of the program");

// Async => Non-Blocking Operation
fs.readFile('file.txt', 'utf-8', (err, data) => {
    if(err) console.log(err);
    else console.log(data);
});

console.log("End of the program");