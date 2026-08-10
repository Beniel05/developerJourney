const marathon = ['Alan', 'Bob', 'Charles', 'David', 'Eric', 'Fernandas'];

// const winner = marathon[0];
// const runner = marathon[1];

const [winner, runner, ...everyoneElse] = marathon;

console.log("WINNER:", winner);
console.log("RUNNER:", runner);
console.log("Everyone Else:", everyoneElse);

console.log("\nFastest:", winner);