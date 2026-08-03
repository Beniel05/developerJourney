console.log("=== STARTING BREAK FUNCTION DEMO ===");

function runBreakLoop() {
    for(let i = 1; i < 10; i++) {
        if(i == 5) {
            console.log(`-> i is ${i}: hitting 'break'`);
            break; // 🛑 Leaves the loop, but STAYS inside the function
        }
        else {
            console.log(`Looping: i = ${i}`);
        }
    }
    console.log("Outside of the loop: This line inside the function RUNS!");
}

// Calling the function
runBreakLoop();

console.log("Main file program finishes smoothly.");
console.log("=== END OF BREAK FUNCTION DEMO ===");
