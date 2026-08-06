/*
* every()
- Returns true only if EVERY element satisfies the condition.
- Stops immediately when it finds the first false.

* some()
- Returns true if AT LEAST ONE element satisfies the condition.
- Stops immediately when it finds the first true.
*/


const marks = [34, 99, 36, 88, 90, 100]; // 6 subject marks
// Lets assume 35 is the minimum mark to pass each subject.

// Is he passed all subjects? (Every)
const isPassed = marks.every(mark => mark >= 35);
console.log(isPassed);

// Is he atleast (any one) passed in any one of the subject? (Some)
const atleastOneSubject = marks.some(mark => mark >= 35);
console.log(atleastOneSubject);


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

// Is any movie got released after 2020?
const isRecent = movies.some(movie => movie.year > 2020);
console.log(isRecent);