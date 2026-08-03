let arr = ["Adam", "Bob", "Charles", "David", "Einstein", "Flora"];

// Printing from 0th index to End of the Array
for(let i = 0; i < arr.length; i++) {
    console.log(i + ": " + arr[i]);
}

console.log('================');

// Printing from End of the Array to 0th index
// Also makes the name to Upper Case for printing
for(let i = arr.length - 1; i >= 0; i--) {
    console.log(i + ": " + arr[i].toUpperCase());
}