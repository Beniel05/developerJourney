const multiply = (x, y) => {
  return x * y;
};

const square = (x) => {
  return multiply(x, x);
};

const isRightTriangle = (a, b, c) => {
  return square(a) + square(b) === square(c);
};

console.log(isRightTriangle(3, 4, 5)); // 3x3 + 4x4 = 5x5  // 9 + 16 = 25.
console.log(isRightTriangle(3, 4, 6)); // 9 + 16 !== 36.
