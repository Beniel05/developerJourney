const onclickbtn = document.getElementById("onClickBtn");
const listener = document.getElementById("listener");

// onclick only can have one property - but event listener can have more than one!.
function one() {
  console.log("One");
}
function two() {
  console.log("Two");
}

/* An element's .onclick property gets completely replaced when assigned a new function, 
while .addEventListener() adds multiple functions without overwriting previous ones. */

onclickbtn.onclick = one;
onclickbtn.onclick = two; // only this will get displayed.

listener.addEventListener("click", one);
listener.addEventListener("click", two);
// Both will get displayed.

// ====================================

const hello = document.getElementById('hello');
const goodbye = document.getElementById('goodbye');

hello.addEventListener('click', () => console.log('hello'));
goodbye.addEventListener('click', () => console.log('goodbye'));