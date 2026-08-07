// Q: Define a function `allEvens` that takes an array of numbers.
// Return `true` if every number is even; otherwise, return `false`.

const nums1 = [2,4,6]; // true
const nums2 = [1,2,4]; // false

const allEvens = (numbers) => {
    return numbers.every(num => (num & 1) == 0)
}

console.log(allEvens(nums1));
console.log(allEvens(nums2));