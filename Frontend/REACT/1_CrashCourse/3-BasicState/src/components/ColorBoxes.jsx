import "./ColorBoxes.css";
import ColorBox from "./ColorBox.jsx";

export default function ColorBoxes({ colors }) {
  const boxes = [];
  for (let i = 0; i < 25; i++) {
    boxes.push(<ColorBox colors={colors} />);
  }
  return (
      <div className="ColorBoxGrid">{boxes}</div>
  );
}
