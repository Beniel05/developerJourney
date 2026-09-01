// const args = process.argv;

/* 
- RUN THIS JS FILE using "node 01_ProcessArgv.js" 
- After the file name => type arguments to be passed.
*/

// for (let arg of args) {
//     console.log(`Hello, ${arg}.`);
// }

/*
~/OneDrive/Desktop/Dev Journey/Backend/Node (main)
$ node 01_ProcessArgv.js Alex Bob Charles

Hello, C:\Program Files\nodejs\node.exe.
Hello, C:\Users\BENIEL\OneDrive\Desktop\Dev Journey\Backend\Node\01_ProcessArgv.js.
Hello, Alex.
Hello, Bob.
Hello, Charles.
*/

// First two lines are related to Paths. So ignore them using slice.

const args = process.argv.slice(2);

for(let arg of args) {
    console.log(`Hello, ${arg}.`);
}