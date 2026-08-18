const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

const buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', colorize)
}

const h1s = document.querySelectorAll('h1');
for (let h1 of h1s) {
    h1.addEventListener('click', colorize)
}

function colorize() {
    // console.log(this)
    this.style.backgroundColor = makeRandColor();
    this.style.color = makeRandColor();
}

// Brute 
/*
const makeRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

function setColor(elements) {
    for (const element of elements) {
        element.addEventListener("click", () => {
            element.style.backgroundColor = makeRandomColor();
        });
    }
}

const buttons = document.querySelectorAll("button");
const h1s = document.querySelectorAll("h1");

setColor(buttons);
setColor(h1s);
*/


// OPTIMIZED
/*
const makeRandomColor = () => {
  // Multiplied by 256 to ensure pure white (255, 255, 255) is reachable
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

// Reusable callback utilizing modern event target tracking
function colorize(event) {
  const element = event.target;
  element.style.backgroundColor = makeRandomColor();
  element.style.color = makeRandomColor();
}

// Single event listener attached to the document body (Event Delegation)
document.body.addEventListener('click', (event) => {
  if (event.target.matches('button, h1')) {
    colorize(event);
  }
});
*/