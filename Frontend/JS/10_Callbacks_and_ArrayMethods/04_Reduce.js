const nums = [10,20,30,40,50];

// Using reduce method (min two parameters)
const total = nums.reduce((accumulator, currentItem) => {
    return accumulator + currentItem;
})

console.log(total);

// Using for of;
let sum = 0;
for(let element of nums) sum+= element;
console.log(sum);

// Can also pass initial value for reduce method in the end.
const totalPlus100 = nums.reduce((acc, cur) => acc + cur, 100)
console.log(totalPlus100); 

// If no initial value set -> Then the first element in the array will be taken by accumulator.
/*
reduce() Notes:
- If no initial value is provided, acc starts as the first element and cur starts as the second.
- If an initial value is provided, acc starts with it and cur starts as the first element.
- Without an initial value, an empty array throws a TypeError.
- With an initial value, an empty array simply returns that initial value.
- The value returned in each iteration becomes the acc for the next iteration.
*/

console.log('=======================');
/*          NEW ARRAY OF OBJECTS             */

const movies = [
  { title: "Inception", year: 2010, rating: 8.8 },
  { title: "The Dark Knight", year: 2008, rating: 9.0 },
  { title: "Interstellar", year: 2014, rating: 8.7 },
  { title: "Avengers: Endgame", year: 2019, rating: 8.4 },
  { title: "Joker", year: 2019, rating: 8.3 },
  { title: "The Batman", year: 2022, rating: 7.8 }
];

// Getting the highest rated movie;
const highestRated = movies.reduce((acc, cur) => {
    if (cur.rating > acc.rating) {
        return cur;
    }
    return acc;
});
console.log(highestRated);

// Getting the lowest rated movie;
const lowestRated = movies.reduce((acc, cur) => {
    if (cur.rating < acc.rating) {
        return cur;
    }
    return acc;
});
console.log(lowestRated);

// Getting the most recent movie;
const mostRecent = movies.reduce((acc, cur) => {
    if (cur.year > acc.year) {
        return cur;
    }
    return acc;
});
console.log(mostRecent);

// Getting the oldest movie;
const oldestMovie = movies.reduce((acc, cur) => {
    if (cur.year < acc.year) {
        return cur;
    }
    return acc;
});
console.log(oldestMovie);



const items = ['a', 'b', 'a', 'c', 'b', 'a'];

const frequency = items.reduce((accumulator, currentItem) => {
  // If the item already exists in the object, increment it. Otherwise, set it to 1.
  accumulator[currentItem] = (accumulator[currentItem] || 0) + 1;
  
  // You must always return the accumulator for the next iteration
  return accumulator; 
}, {} // []
);

console.log(frequency);
// Output: { a: 3, b: 2, c: 1 }


/*
* The reduce() method executes a callback function on each element of an array, passing in the return value from the calculation on the preceding element, resulting in a single output value. [1, 2] 
## ⚙️ Core Syntax

array.reduce((accumulator, currentValue, currentIndex, array) => {
  / Logic here
  return accumulator;
}, initialValue);

## 🔑 Critical Parameters

* accumulator: The accumulated value previously returned in the last invocation of the callback (or the initialValue, if supplied).
* currentValue: The current element being processed in the array.
* initialValue (Optional but highly recommended): A value to use as the first argument to the first call of the callback. If not provided, the array element at index 0 is used as the initial value, and iteration starts at index 1. 

## ⚠️ Common Pitfalls

* Missing return: If you forget to return the accumulator inside the callback, the next iteration will receive undefined.
* Omitting initialValue on empty arrays: Calling reduce() on an empty array without an initial value throws a TypeError.
* Mutating the accumulator: Modifying the accumulator directly (like accumulator.push()) can lead to unexpected side effects; returning a new copy or modifying it safely is best practice.

*/