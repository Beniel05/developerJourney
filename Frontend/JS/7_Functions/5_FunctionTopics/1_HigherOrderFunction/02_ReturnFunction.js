console.log("=========== 1. ===========");

// Factory function
function makeBetweenFunction(min, max) {
  return function (n) {
    return n >= min && n <= max;
  };
}

const isChild = makeBetweenFunction(0, 18);
const isAdult = makeBetweenFunction(19, 64);
const isSenior = makeBetweenFunction(65, 130);

const Alice = 18;
const Bob = 20;
const David = 99;

console.log(`Alice is ${Alice} years old;`);
console.log(isChild(Alice));
console.log(isAdult(Alice));
console.log(isSenior(Alice));

console.log(`\nBob is ${Bob} years old;`);
console.log(isChild(Bob));
console.log(isAdult(Bob));
console.log(isSenior(Bob));

console.log(`\nDavid is ${David} years old;`);
console.log(isChild(David));
console.log(isAdult(David));
console.log(isSenior(David));

console.log("=========== 2. ===========");
function randomFunction() {
  const randomNum = Math.random();
  if (randomNum > 0.5) {
    return function () {
      console.log("YOU WON!");
      console.log("The Random Number is Greater than 0.5");
      console.log(`And the random number is: ${randomNum}`);
    };
  } // else;
  return function () {
    console.log("YOU LOST.");
    console.log("The Random Number is Less than 0.5");
    console.log(`And the random number is: ${randomNum}`);
  };
}

let luckyDraw = randomFunction();

console.log(luckyDraw);

luckyDraw();
// 1. Calling luckyDraw(); directly runs the inner logs normally.
// 2. Removing the outer console.log prevents printing the implicit undefined return.

console.log("---------");

console.log(luckyDraw());
// 1. luckyDraw() executes the inner function but it has no 'return' statement.
// 2. JS defaults missing returns to 'undefined', which console.log then prints.


/*
* JS Factory Functions

   1. Definition

* A factory function is any function that is not a class or a constructor but returns a new object.
* It provides a way to manufacture object instances easily without using the new keyword or this.

   2. Key Benefits

* Avoids the complexities, pitfalls, and behavior rules of the this keyword.
* Easily creates private variables by utilizing JavaScript closures.


   1. Example Code

   * function createPerson(name, age) {
   *    return {
   *        name,
   *        age,
   *        talk() { 
   *            console.log(Hi, I am ${name}); 
   *        }
   *    };
   * }
   
   * const user = createPerson("Alex", 25);
   * user.talk(); // Hi, I am Alex
*/
