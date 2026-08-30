const fs = require('fs');
console.log(fs);

fs.writeFileSync("test.txt", "Random text from 'writeFileSync'");
// This will be replaced by the below Writer codes.

const writer = fs.createWriteStream("test.txt");

writer.write("Second line\n");
writer.write("Third line");

writer.end();