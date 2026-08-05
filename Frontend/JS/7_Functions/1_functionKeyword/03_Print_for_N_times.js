function repeat(str, n) {
    for(let i = 0; i < n; i++) {
        console.log(str);
    }
}

repeat("Hello World!", 5);

console.log('========================');

// Using repeat keyword - and without function.
console.log("Hello World!\n".repeat(5));