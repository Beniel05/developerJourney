const characters = [..."Hello World"]
console.log("Characters Spread: " + characters);

console.log('===================');

const veg = ["Curd Rice", "Potato Rice", "Spring Roll"];
const non_veg = ["Chicken", "Fish"];

const mixed = [...veg, ...non_veg];

console.log(mixed);

console.log('===================');
// We can also include anything before and after the spreads.
const test = [1,2,3, ...non_veg, ...veg, "Four", "Five", "Six"] // The order remains the same
console.log(test);

console.log('===================');
// Can also get duplicate array.
const duplicateVeg = [...veg];
console.log(duplicateVeg);