const doneTodos = document.querySelectorAll(".done");
const checkbox = document.querySelector("input[type='checkbox']");


for(let doneTodo of doneTodos) {
    // querySelectorAll() returns a NodeList, so we loop through each element.
    doneTodo.innerText = "Done and Dusted"
}

checkbox.checked = false;