// window.addEventListener("keydown", (e) => {
//     console.log(e.key);
//     console.log(e.code);
// }) 

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "ArrowUp":
      console.log("UP!");
      break;
    case "ArrowRight":
      console.log("RIGHT!");
      break;
    case "ArrowDown":
      console.log("DOWN!");
      break;
    case "ArrowLeft":
      console.log("LEFT!");
      break;

    default: console.log("Key press - ignored (other keys).");
      break;
  }
});
