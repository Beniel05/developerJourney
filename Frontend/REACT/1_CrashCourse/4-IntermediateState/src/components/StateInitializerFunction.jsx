import { useState } from "react";

function generateGameBoard() {
    console.log("Making the initial game board, Taking some time...");
    return Array(5000);
}

export default function StateInitializerFunction() {
    const [board, setBoard] = useState(generateGameBoard);

    return <button onClick>Click me to change state</button>
}