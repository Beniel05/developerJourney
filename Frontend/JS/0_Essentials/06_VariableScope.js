// 1. GLOBAL SCOPE
var globalVar = "I am on the window object";
let globalLet = "I am global, but hidden from window";

function scopeDemo() {
  // 2. FUNCTION SCOPE
  if (true) {
    // 3. BLOCK SCOPE
    var leakedVar = "I escaped the IF block!";
    let trappedLet = "I am stuck in this IF block";
    const trappedConst = "I am stuck too";
  }

  console.log(leakedVar);   //  "I escaped the IF block!" (var ignores block scope)
  
  try {
    console.log(trappedLet); 
  } catch (e) {
    console.log("let failed:", e.message); // ❌ "trappedLet is not defined"
  }
}

scopeDemo();

// 4. FUNCTION BOUNDARY TEST
try {
  console.log(leakedVar); 
} catch (e) {
  console.log("var failed:", e.message); // ❌ "leakedVar is not defined" (var is stopped by functions)
}


for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var i:", i), 100); 
}
// Prints: "var i: 3", "var i: 3", "var i: 3" (because 'i' leaked and changed)

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let j:", j), 100); 
}
// Prints: "let j: 0", "let j: 1", "let j: 2" (because 'j' is trapped in each loop block)
