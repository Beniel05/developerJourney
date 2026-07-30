// str.length // is a Property.
// str.something() // is a Method.

let msg = "This is a sample test to manipulate using default String methods";

let upper = msg.toUpperCase();
let lower = msg.toLowerCase();

console.log(msg);
// console.log(msg.toUpperCase());
// console.log(msg.toLowerCase());
console.log(upper);
console.log(lower);

// TRIM;

let spacedMessage = "        Hello   World           ";
console.log(spacedMessage);
console.log(spacedMessage.trim()); // will remove the starting and ending spaces.

// Grouped Methods;

let word = "    Hello People   "
let finalWord = word.toUpperCase().trim();
console.log(finalWord);

let message = spacedMessage.trim().split(" ");
console.log(message);


// -------------------------------- JUST TRIED (Ignore below stuff)
/* 
 * In JavaScript, the fundamental difference between in and of is 
 * that in iterates over the keys (property names or indices) of an object, 
 * while of iterates over the actual values of an iterable collection. 
*/
for(let i of message) {
    if(i != "") {
        i;
    }
}
for(let i in message) {
    if(i != "") {
        i;
    }
}