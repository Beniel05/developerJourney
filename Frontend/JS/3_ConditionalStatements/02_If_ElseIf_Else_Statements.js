// 1. Generate a random target number between 1 and 10
const targetNumber = Math.floor(Math.random() * 10) + 1;

// 2. Simulate a user's guess
const userGuess = 5; 

console.log(`Target Number: ${targetNumber}`);
console.log(`User Guess: ${userGuess}`);

// 3. Conditional block checking the outcome
if (userGuess === targetNumber) {
    console.log("🎉 Correct! You guessed the exact number!");
} else if (userGuess > targetNumber) {
    console.log("📈 Too high! Your guess is greater than the target.");
} else {
    console.log("📉 Too low! Your guess is smaller than the target.");
}
