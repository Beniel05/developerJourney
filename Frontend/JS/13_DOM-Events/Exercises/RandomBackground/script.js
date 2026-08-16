// # 3

const heading = document.getElementById("display-rgb");
const btn = document.getElementById("change");

btn.addEventListener("click", () => {
  const colorData = makeRandomColor();
  const rgbString = `rgb(${colorData.red}, ${colorData.green}, ${colorData.blue})`;
  
  // Calculate brightness using the object properties
  const brightness = (colorData.red * 0.299) + (colorData.green * 0.587) + (colorData.blue * 0.114);
  
  // Set background color and dynamic text contrast
  document.body.style.backgroundColor = rgbString;
  document.body.style.color = brightness <= 186 ? '#fff' : '#000';
  
  heading.innerText = rgbString;
});

function makeRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  
  // Return an object instead of a flat string
  return { red, green, blue };
}


// # 2

// const heading = document.getElementById("display-rgb");
// const btn = document.getElementById("change");

// btn.addEventListener("click", () => {
//   const newColor = makeRandomColor();
//   heading.innerText = newColor;
//   document.body.style.backgroundColor = newColor;
// });

// function makeRandomColor() {
//   const red = Math.floor(Math.random() * 256);
//   const green = Math.floor(Math.random() * 256);
//   const blue = Math.floor(Math.random() * 256);
//   return `rgb(${red}, ${green}, ${blue})`;
// }


// # 1

// const heading = document.getElementById("display-rgb");
// const btn = document.getElementById("change");

// btn.addEventListener("click", () => {

//   const red = Math.floor(Math.random() * 256);
//   const green = Math.floor(Math.random() * 256);
//   const blue = Math.floor(Math.random() * 256);

//   heading.innerText = `rgb(${red}, ${green}, ${blue})`;
//   document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
// });
