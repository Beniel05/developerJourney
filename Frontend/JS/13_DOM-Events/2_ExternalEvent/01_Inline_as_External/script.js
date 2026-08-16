// console.log("Button got Clicked?");

const btn1 = document.getElementById('external-access1');
const btn2 = document.getElementById('external-access2');

btn1.onclick = () => {
    console.log("Yes it is.");
    console.log("Do you want to click again?");
}

// Writing the function first - then passing to the event
function mouseEnter() {
    console.log("Mouse got entered into the action!");
    console.log("Lets goo...");
}
btn2.onmouseenter = mouseEnter; // We don't have to execute on our own.

// =====================================

const btn = document.getElementById('inline-btn');
console.dir(btn);
// Check => onclick

console.dir(btn1);
// Check => onclick

console.dir(btn2);
// Check => onmouseenter
/*
onmouseenter
: 
ƒ mouseEnter()
length
: 
0
name
: 
"mouseEnter"
prototype
: 
{}
arguments
: 
null
caller
: 
null
[[FunctionLocation]]
: 
script.js:12
[[Prototype]]
: 
ƒ ()
[[Scopes]]
: 
Scopes[2]
*/