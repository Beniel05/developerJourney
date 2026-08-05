// Methods are related to Object.

const myMath = {
    PI: 3.14, // Only this is a property / field. All below are methods.

    sum: function(n1, n2) {
        return n1 + n2;
    },

    square: function(x) {
        // return x * x;
        return x ** 2;
    },

    // Also can use shorthand - no need for function keyword.
    cube(x) {
        // return Math.pow(x, 3);
        return x ** 3;
    },

    nPower(x) {
        return x ** x;
    }
}

console.log(myMath.PI); // Accessing property.
// Accessing methods;
console.log(myMath.sum(10, 20)); // 30.
console.log(myMath.cube(2)); // 2 * 2 * 2 = 8.
console.log(myMath.square(5)); // 5 * 5 = 25.
console.log(myMath.nPower(3)); // 3 ^ 3 => (3 * 3) = 9 * (3) => 27.