let food = "Biryani";
let price = 150;
let qty = 2;

// Normal printing;
console.log("You ordered " + qty + " " + food + ". Total: " + (price * qty));

// Using String Literals;
console.log(`You ordered ${qty} ${food}. Total: ${qty * price}`);
console.log(`You ordered ${qty + " " + food}. Total: $${qty * price}`);

// In String literals we use expressions!
console.log(`\nValue of 3 + 4 is: ${ 3 + 4 }`);
// \n for new line

