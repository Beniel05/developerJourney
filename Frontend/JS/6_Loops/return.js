console.log("=== STARTING FIXED RETURN DEMO ===");

function runReturnLoop() {
    for(let i = 1; i < 10; i++) {
        if(i == 5) {
            console.log(`-> i is ${i}: hitting 'return' inside function`);
            return; // exits from this 'runReturnLoop' function 
        }
        console.log(`Looping: i = ${i}`);
    }
    console.log("This 'Outside of loop' log is skipped!");
}

// Calling the function
runReturnLoop();

console.log("The function closed, but the main file program continues!");
console.log("=== END OF FIXED RETURN DEMO ===");
