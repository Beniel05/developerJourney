console.log("Head of the Program");

setTimeout(() => {
    console.log("Timeout function! 1 - with 2 second interval");
}, 2000);

console.log("Rest of the Program...");

setTimeout(() => {
    console.log("Timeout function! 2 - with 1 second interval");
}, 1000);

/*
* setTimeout is a global method in browsers and Node.js 
* that executes a callback function once after a specified delay in milliseconds. 
* It is non-blocking and relies on the environment's event loop to queue tasks asynchronously.

## 📝 Syntax & Cancellation

- Schedule: returns a unique integer IDconst timerId = setTimeout((name) => console.log(`Hi ${name}`), 1000, "Alice");
- Cancel: stops execution before the delay ends
clearTimeout(timerId);

## ⚡ Critical Behaviors

- Minimum Delay: 
    The timeout value specifies the minimum wait time, not an exact guarantee, as execution waits for the main synchronous call stack to clear.
- Zero Delay (0ms): 
    Does not run instantly; it places the callback next in the asynchronous queue to execute immediately after all current synchronous code finishes.
- Context Loss: Passing an object method directly dissociates it from its parent object, changing its this context to global. Fix this by wrapping the method inside an arrow function.
- No Parentheses: Pass the function name as a reference (myFunc); adding parentheses (myFunc()) executes it immediately rather than waiting for the timer.
*/
