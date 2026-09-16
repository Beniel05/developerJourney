let clickCount = 1;
let hoverCount = 1;

function handleClick() {
  console.log("Button got clicked " + clickCount++);
}

function handleMouseOver() {
  console.log("Mouse got hovered " + hoverCount++);
}

export default function Clicker() {
  return (
    <div>
      <h2>Clicker</h2>
      <button onClick={handleClick}>Click</button>

      <br /><br />

      <h2 onMouseOver={handleMouseOver}>Mouse - Hover</h2>
    </div>
  );
}
