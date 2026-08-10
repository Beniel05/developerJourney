// JavaScript is a Single-Threaded Language
// It can do at most one task at a time.
console.log("Sending request to the server!");

// This setTimeout will be taken care of by the browser (WebAPI) - JS will hand over this task to the browser.
setTimeout(() => {
  console.log("Here is the data from the server...");
}, 1500); // 1.5 seconds

console.log("Rest of the program...");
console.log("End line of the program.");

/*
How Node.js handles setTimeout without a Browser

* Because your code is running in a terminal via Node.js rather than a web browser, there is no "WebAPI." 
Instead, Node.js uses its own internal system to process the asynchronous code:
* The V8 Engine: Written in C++, this engine handles your standard synchronous lines (like console.log) and manages the Call Stack.
* libuv library: Also written in C++, this is a powerful background library built into Node.js.
* When V8 encounters your setTimeout, it hands the 1.5-second timer directly to libuv.
* Background Timer: libuv uses low-level operating system threads to count down the 1500 milliseconds in the background while V8 continues executing the rest of your file.
* 
* Event Loop: Once libuv finishes counting down, it places your callback function into the Event Queue. 
* The Node.js Event Loop waits for the Call Stack to be empty, then pushes your callback back to V8 to print the server data message
*/
