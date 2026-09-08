/*
function hex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
function rgb(r, g, b) {
    return `rgb(${r}, ${g}, ${b})`;
}
let hexResult = hex(255, 155, 30);
let rgbResult = rgb(255, 155, 30);
console.log(hexResult);
console.log(rgbResult);
*/

function makeColor(r, g, b) {
  const color = {};
  color.r = r;
  color.g = g;
  color.b = b;
  color.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
  };
  color.hex = function () {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };
  return color;
}

// let result = makeColor(255, 100, 200);
// console.log(result);

let firstColor = makeColor(250, 239, 100);
console.log(firstColor.rgb());
console.log(firstColor.hex());
