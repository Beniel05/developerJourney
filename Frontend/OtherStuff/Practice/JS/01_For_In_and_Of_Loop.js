// For in - working with object keys.
// For of - working with arrays.

let obj = {
  name: "Someone",
  age: 99,
  isAlive: true,
};

for (let x in obj) {
  console.log(x); // will get the keys
}

console.log('\n=============================\n');

let arrayObj = [
  { name: "Someone1", age: 99, isAlive: true },
  { name: "Someone2", age: 100, isAlive: false },
];

for(let index of arrayObj) {
    for(let x in index) {
        console.log(x);
    }
}
