/* Running using Terminal
~/OneDrive/Desktop/Dev Journey/Backend/Node/2_Depth/01_Modules (main)
$ node index.js */

// 1 - Built In module;
const fs = require('fs');
const content = fs.readFileSync('./notes.txt', 'utf-8');
console.log(content);