import { useState } from "react";

export default function Counter() {
    
    // const arr = useState(10);
    // console.log(arr);

    const [count, setCount] = useState(0);
    
    function handleClick() {
        setCount(count + 1);        
    }

    return (
        <div>
            <p>The Count is: {count}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}