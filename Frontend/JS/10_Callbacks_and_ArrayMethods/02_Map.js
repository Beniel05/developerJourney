/*          CHARACTER ARRAY          */

const words = ["cat", "dog", "sun", "tree", "book", "car", "moon"];

const capitalWords = words.map(function(element) {
    return element.toUpperCase();
});
// (Or) - Arrow function
// const capitalWords = words.map((element) => {
//     return element.toUpperCase();
// })

console.log(capitalWords);

console.log('=====================');
/*          NUMBER ARRAY          */

const nums = [1,2,3,4,5,6,7,8,9,10];

const doubled = nums.map((element) => {
    return element * 2;
})

console.log(doubled);

console.log('=====================');
/*    MOVIES ARRAY OF OBJECTS     */

const movies = [
    { title: "Inception", score: 9.0 },
    { title: "Interstellar", score: 8.7 },
    { title: "The Dark Knight", score: 9.1 },
    { title: "Parasite", score: 8.6 },
    { title: "The Matrix", score: 8.8 }
];

const titles = movies.map((element) => {
    return element.title;
});

console.log(titles);


/*
## 📜 JS .map() Array Method Cheatsheet
* What it does: Transforms an array by running a callback function on every item. 
* It returns a brand-new array of the exact same length.
Rule: It is immutable (does not change the original array).

Syntaxconst newArr = oldArr.map((item, index, arr) => {
  return item * 2; // Must return a value
});
Example 1: Implicit Return (One-liner)
    const prices =;
    const doubled = prices.map(p => p * 2);
Example 2: Extracting Object Data
    const users = [{name:'Alice'}, {name:'Bob'}];
    const names = users.map(u => u.name); // ['Alice', 'Bob']
Example 3: Using Index
    const list = ['A', 'B'].map((item, i) => `${i}-${item}`); // ['0-A', '1-B']

⚠️ Exam Traps:

   1. The undefined Trap: 
        If you use curly braces {} in an arrow function, you must use the return keyword. 
        Missing return fills the new array with undefined.
    * arr.map(x => { x * 2 }) ❌ Broken
    * arr.map(x => x * 2) Implicit return
   2. .map() vs .forEach();
        Use .map() to build a new transformed array. 
        Use .forEach() only to loop and cause side effects (like console.log), as it returns undefined.
*/


