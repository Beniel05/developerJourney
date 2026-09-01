// explicitly mentioning built in module using 'node:' prefix;
const fs = require("node:fs");

let notesCopy = fs.readFileSync("./notes.txt", "utf-8");

fs.writeFileSync("./copy.txt", notesCopy, "utf-8");

fs.appendFileSync(
  "./copy.txt",
  '\n\nNot overwriting the existing contents!. With the help of "appendFileSync"',
);

fs.mkdirSync("Test/TestSub/Sub", { recursive: true });
// fs.rmdirSync("Test", { recursive: true });
/* 
DeprecationWarning: In future versions of Node.js, 
* fs.rmdir(path, { recursive: true }) will be removed. Use
* fs.rm(path, { recursive: true }) instead 
*/
fs.rmSync("./Test/", { recursive: true });

fs.unlinkSync('copy.txt');