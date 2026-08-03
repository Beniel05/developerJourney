// Array of popular games
const games = [
  "Minecraft",
  "Valorant",
  "Elden Ring",
  "GTA V",
  "Cyberpunk 2077",
  "Stardew Valley",
  "Hades",
];

console.log("========== Using Traditional for Loop ==========");

// Using the traditional for loop
for (let i = 0; i < games.length; i++) {
  console.log(`Play: ${games[i]}`);
}

console.log("\n========== Using for...of Loop ==========");

// Using the for...of loop
for (let game of games) {
  console.log(`Play: ${game}`);
}