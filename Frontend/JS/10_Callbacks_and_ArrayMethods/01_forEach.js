let nums = [1, 2, 3];

function printMethod(element) {
    console.log(element);
}
nums.forEach(printMethod);

console.log('=============================');
// Can be written in single line anonymous function;
nums.forEach(function(element) {
    console.log(element);
})

console.log('=============================');
// New syntax - for of;
for(let element of nums) console.log(element);


/*          NEW ARRAY OF OBJECTS         */
const movies = [
    { title: "Inception", score: 9.0 },
    { title: "Interstellar", score: 8.7 },
    { title: "The Dark Knight", score: 9.1 },
    { title: "Parasite", score: 8.6 },
    { title: "The Matrix", score: 8.8 }
];

// FORMAT: 'The Matric - 8.8 / 10'
movies.forEach(function(el) {
    console.log(`${el.title} - ${el.score} / 10`);
})

// Using Arrow Function & Map;

const outOf100 = movies.map((movie) => (
    `${movie.title} - ${movie.score * 10} / 100`
))

console.log(outOf100);
