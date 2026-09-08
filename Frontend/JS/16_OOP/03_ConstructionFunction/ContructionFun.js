// Creates a blank, plain JavaScript object;
// Links (sets the constructor of) this object to another object;
// Passes the newly created object from Step 1 as the this context;
// Returns this if the function doesn't return its own object.

function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}

Color.prototype.rgb = function () {
  const { r, g, b } = this;
  return `rgb(${r}, ${g}, ${b})`;
};
Color.prototype.hex = function () {
  const { r, g, b } = this;
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};
Color.prototype.rgba = function (a = 1.0) {
  const { r, g, b } = this;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

const color1 = new Color(255, 150, 100);
const color2 = new Color(255, 100, 200);

/* BROWSER - CONSOLE - activities */
// document.body.style.backgroundColor = color2.rgb();
// 'rgb(255, 100, 200)'

// document.body.style.backgroundColor = color2.rgba();
// 'rgba(255, 100, 200, 1)'

// document.body.style.backgroundColor = color2.rgba(0.5);
// 'rgba(255, 100, 200, 0.5)'

// console.log(color1.rgb());
// console.log(color1.hex());
// console.log(color2.rgb());
// console.log(color2.hex());


/*
// Factory Function 'Code'
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

let firstColor = makeColor(250, 239, 100);
console.log(firstColor.rgb());
console.log(firstColor.hex());
*/
