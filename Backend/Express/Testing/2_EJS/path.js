console.log(__dirname);

const path = require("node:path");

// path.join ignores the leading slash '/' and treats it as a normal folder name.
// Result on Windows:   C:\your-project\templates
// Result on Mac/Linux: /your-project/templates
const targetPath1 = path.join(__dirname, '/templates');

// This is the preferred, cleaner way. Node.js automatically adds the correct 
// slash between __dirname and 'templates' based on your operating system.
// Result on Windows:   C:\your-project\templates
// Result on Mac/Linux: /your-project/templates
const targetPath2 = path.join(__dirname, 'templates');

// Both will log the exact same output path because path.join() standardizes them!
console.log(targetPath1);
console.log(targetPath2);
