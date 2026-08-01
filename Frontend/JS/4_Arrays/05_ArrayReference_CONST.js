// ===============================
// const with Arrays
// ===============================

const array = [1, 2, 3];

console.log("Original:", array);

// --------------------------------------------------
// We CAN change/manipulate the elements inside
// the array.
// --------------------------------------------------

array[0] = 100;
array.push(4);
array.pop();

console.log("After modifications:", array);

// --------------------------------------------------
// We CANNOT reassign the entire array.
// Uncomment the lines below one by one to see
// the errors.
// --------------------------------------------------

// array = [10, 20, 30];
// TypeError: Assignment to constant variable.

// array = [];
// TypeError: Assignment to constant variable.

// array = null;
// TypeError: Assignment to constant variable.

/*
const array = []

✓ We can change/manipulate the elements inside the array.
✓ Adding, removing, updating elements is allowed.

✗ We CANNOT reassign the entire array.

Allowed:
array.push(5);
array[0] = 999;
array.pop();

Not Allowed:
array = [5, 6, 7];
array = [];
array = null;

Reason:
const makes the VARIABLE immutable,
not the object/array itself.
The reference cannot change,
but the contents can.
*/