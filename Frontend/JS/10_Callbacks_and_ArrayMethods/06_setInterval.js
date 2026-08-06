const id = setInterval(() => {
    console.log("I'll run again and again for each 2 seconds!...");
}, 2000);

// setInterval function will return an ID. We have to store than to stop the function.

setTimeout(() => {
   clearInterval(id); 
}, 10001); // After 10 second - The interval will stop.
// Each interval happend after 2 seconds so ~5 Inteval before clearing.

/* 
* If we use the clearInterval(id) - I'll stop the Interval before even gets executed.
* That's why i put it inside a Timeout with an interval.
*/


/*
* setTimeout is a global method in browsers and Node.js 
* that executes a callback function once after a specified delay in milliseconds. 
* It is non-blocking and relies on the environment's event loop to queue tasks asynchronously.

## 📝 Syntax & Cancellation

/ Schedule: returns a unique integer IDconst timerId = setTimeout((name) => console.log(`Hi ${name}`), 1000, "Alice");
/ Cancel: stops execution before the delay ends
clearTimeout(timerId);

## ⚡ Critical Behaviors

* Minimum Delay: The timeout value specifies the minimum wait time, not an exact guarantee, as execution waits for the main synchronous call stack to clear.
* Zero Delay (0ms): Does not run instantly; it places the callback next in the asynchronous queue to execute immediately after all current synchronous code finishes.
* Context Loss: Passing an object method directly dissociates it from its parent object, changing its this context to global. Fix this by wrapping the method inside an arrow function.
* No Parentheses: Pass the function name as a reference (myFunc); adding parentheses (myFunc()) executes it immediately rather than waiting for the timer.
*/
