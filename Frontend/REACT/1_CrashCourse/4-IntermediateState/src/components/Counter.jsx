import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };
  const incrementCountBy3 = () => {
    // Functional Update. If we try doing setCount(count + 1) three times, only the last one will take effect
    // because 'count' only updates after the component re-renders.
    // But, Using a functional update ensures we always use the most recent state.
    setCount((currentCount) => currentCount + 1); // CurrentCount = eg: 0 => +1 => 1
    setCount((currentCount) => currentCount + 1); // CurrentCount = 1 => +1 => 2
    setCount((currentCount) => currentCount + 1); // CurrentCount = 2 => +1 => 3
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={incrementCount}>Add +1</button>
      <button onClick={incrementCountBy3}>Add +3</button>
    </div>
  );
}
