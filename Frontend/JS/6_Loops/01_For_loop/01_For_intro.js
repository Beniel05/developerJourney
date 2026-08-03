// Printing 1 to 10
console.log("======== NUMBERS ========");
for (let i = 1; i <= 10; i++) console.log(i); // No need to use { } if we only have single line of statement.

// Print Even numbers from 2 to 10
console.log("======== EVEN NUMBERS ========");
for (let i = 2; i <= 10; i += 2) console.log(i);

// Print Odd numbers from 1 to 10
console.log("======== ODD NUMBERS ========");
for (let i = 1; i <= 10; i += 2) console.log(i);

// Print Odd even
console.log("======== ODD - EVEN (1 to 5) ========");
for (let i = 1; i <= 5; i++) {
  if (i % 2 == 0) {
    console.log(i + " = Even");
  } else {
    console.log(i + " = Odd");
  }
}
// Another way using Bitwise Operator;
console.log("======= Using Bitwise & Operator ========");
for (let i = 1; i <= 5; i++) {
  // & 1 == 0
  if (i & (1 == 0)) console.log(i + " is Even");
  else console.log(i + " is Odd");
}

// 50 to 10
console.log("======== 50 to 10 ========");
for (let i = 50; i >= 10; i -= 10) {
  console.log(i);
}

// 10 100 1000 10000
console.log("======== 10 100 1000 10000 ========");
for (let i = 10; i <= 10000; i *= 10) console.log(i);