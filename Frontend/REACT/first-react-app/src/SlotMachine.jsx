export default function SlotMachine({val1, val2, val3}) {

    const isWinner = (val1 === val2 && val2 === val3);
    const c = isWinner ? 'green' : 'red';

    return (
        <div>
            <h1>{val1} {val2} {val3}</h1>
            <h2 style={{color: c}}>{isWinner ? "You Won" : "You lost"}</h2>
            {isWinner && <h3>Congrats!</h3>}
        </div>
    )
}