import { useState } from "react";

export default function TwoStatesInOneComp() {
  const [count, setCount] = useState(1);
  const [face, setFace] = useState(true);

  const increment = () => setCount(count + 1);
  const changeFace = () => setFace(!face);

  return (
    <div>
      <p>{face ? "😁" : "☹️"}</p>
      <button onClick={changeFace}>Click to change</button>
      <p>{count}</p>
      <button onClick={increment}>+ 1</button>
    </div>
  );
}
