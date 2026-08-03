"use strict";

const todos = [];

window.onload = () => {
  let input = prompt("What would you like to do?");
  input = input.toLowerCase().trim();

  while (input !== "quit" && input !== "q") {
    // if anyone of them entered. It'll be false - && will break this loop.
    // Untill that this will run forever

    if (input == "add") {
      const newTodo = prompt("Enter a todo to add");
      todos.push(newTodo);
      // console.log(`${todos[todos.length - 1]} added to the list`);
      console.log(`${newTodo} added to the list`);
    } else if (input == "list") {
      console.log("==========");
      for (let i = 0; i < todos.length; i++) {
        console.log(`${i}: ${todos[i]}`);
      }
      console.log("==========");
    } else if (input == "delete") {
      let index = parseInt(prompt("Enter index of the todo to delete"));
      if (Number.isNaN(index) || index >= todos.length || index < 0) {
        console.log("Enter a valid Index from 0 to " + todos.length);
      } else {
        const deletedTodo = todos.splice(index, 1);
        console.log(`${deletedTodo[0]} got deleted`);
      }
    }

    input = prompt("What would you like to do? Type 'quit' or 'q' to exit");
    if (input === null) break;
    input = input.toLowerCase().trim();
  }
  console.log("Program ended");
};
