const nums = [1,2,3,4,5,6,7,8,9,10];

const odd = nums.filter((num) => {
    if(num & 1) { // (OR) num % 2 !== 0
        return num;
    }
})

const even = nums.filter((num) => {
    if((num & 1) == 0) {
        return num;
    }
})

console.log(odd);
console.log(even);

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

// Using .filter() to get movies which has rating > 8.5;
const goodMovies = movies.filter((movie) => movie.rating > 8.5);
console.log(goodMovies);

// Using .map() to get only titles;
const movieTitles = movies.map((movie) => movie.title);
console.log(movieTitles);

// Combining both .filter() and .map() to get titles of movies which has rating more than 8.5;
const goodMovieTitles = movies
                            .filter((movie) => movie.rating > 8.5)
                            .map((movie) => movie.title); // Single parameter (movie) => can also be movie => (without paranthesis)

console.log(goodMovieTitles);

/*
* # Bitwise 1. Odd vs. Even Checking

* Even Numbers: Always end in binary 0. (eg: 8 in binary is 1000)
* Code: (num & 1) === 0
   * Short Condition: if (!(num & 1)) (Evaluates to true because num & 1 yields 0, which is falsy).
* Odd Numbers: Always end in binary 1. (eg: 7 in binary is 0111)
* Code: (num & 1) !== 0
   * Short Condition: if (num & 1) (Evaluates to true because num & 1 yields 1, which is truthy).

## 2. Checking Any Specific Bit (0-Indexed)
To check if the bit at index n is turned on (1) or off (0):

* Formula: ((num >> n) & 1) !== 0
* Bit 0 (1s place): (num & 1) !== 0
* Bit 1 (2s place): (num & 2) !== 0
* Bit 2 (4s place): (num & 4) !== 0

## ⚠️ The Golden Rule
Always wrap the bitwise operation in parentheses (num & mask) before comparing it to another value. Otherwise, operator precedence will execute the comparison first and break your logic.
Would you like to move on to other common bitwise operations, or see how to apply this to a specific problem?

*/