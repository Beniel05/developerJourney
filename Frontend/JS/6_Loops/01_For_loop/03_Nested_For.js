for(let i = 1; i <= 5; i++) {
    console.log(`i is ${i}`);
    for(let j = 1; j <= 3; j++) {
        console.log(`    j is ${j}`);
    }
}

console.log('====================');

const nameGrid = [
  ["Alice", "Bob", "Charlie"],
  ["David", "Eva", "Frank", "Grace"],
  ["Hannah", "Isaac"]
];


for(let i = 0; i < nameGrid.length; i++) {
    console.log("i is " + i); // No need to print this - just for understanding purpose.
    for(let j = 0; j < nameGrid[i].length; j++) {
        console.log(`    ${nameGrid[i][j]}`);
    }
}