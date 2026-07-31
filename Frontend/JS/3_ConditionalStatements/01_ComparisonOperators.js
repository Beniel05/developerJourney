// Greater than
console.log(10 > 5); // true
console.log(10 > 20); // false

// Less than
console.log(10 < 5); // false
console.log(10 < 20); // true

// Less than or equals to | Greater than or equals to
console.log(10 < 10); // false
console.log(10.5 <= 10.5); // true
console.log(10.2 >= 10.2); // true

// Equals to
console.log(10 == 10); // true
console.log(10 == "10"); // true

// Strict Equals to (compares data type too)
console.log(10 === "10"); // false

// Not equals to
console.log(10 != 10); // false
console.log(10 != 20); // true

// Stict Not equals to
console.log(10 !== '10'); // true (both are same value - but different datatype)
console.log(10 !== 10); // false (both are same data type and same value)


console.log("A" < "a"); // true (65 < 97)
console.log("a" < "b"); // true (97 < 98)

// The hexadecimal value 41 (which is 65 in decimal) represents the,
// uppercase letter A in both ASCII and Unicode standards.

// The lowercase letter a has a decimal value of 97,
// which is 61 in hexadecimal format for both ASCII and Unicode.

/*
 * Quick Breakdown 'a
    ASCII (Hex): 61
    ASCII (Decimal): 97
    Unicode Notation: U+0061

 *  The "32" Rule
    You can easily convert uppercase letters to lowercase in your head by adding 32 to the decimal value 
    or 20 to the hexadecimal value.
    
    Decimal: 65 ('A') + 32 = 97 ('a')Hexadecimal: 41 ('A') + 20 = 61 ('a')
 */
