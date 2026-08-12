/* 1.
setTimeout(() => {
  console.log("async");
}); // 0 Millisecond delay - can be not written like: }, 0);

console.log('Test 1');

const doSomething = i => { i + 1 };

for(let i = 0; i < 100000; ++i) {
    doSomething(i);
}

console.log('Test 2');
*/

/* 2.
let counter = 0;

let timer = setInterval(function() {
    console.log('I am an asynchronous message');

    counter += 1;

    if (counter >= 5) {
        clearInterval(timer);
    }
}, 1000);

console.log('I am a synchronous message');
*/

let fs = require('fs');

fs.readFile('test.txt', 'utf8', function(error, data) {
    if (error) {
        //  throw error;
        console.log("Error occured.");
        return;
    }

    console.log("Asynchronous message. Content of test.txt:", data);
});

console.log('Synchronous message');