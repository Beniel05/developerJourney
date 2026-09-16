import "./SlotMachineLogic.css";

export default function SlotMachineLogic() {
  // eslint-disable-next-line react-hooks/purity
  const num1 = Math.floor(Math.random() * 3) + 1;
  // eslint-disable-next-line react-hooks/purity
  const num2 = Math.floor(Math.random() * 3) + 1;
  const isWinner = num1 === num2;

  const className = isWinner ? "green" : "red";

  return (
    <div className={className}>
      <h1>Double Roll</h1>
      {isWinner && <h2>You Won!</h2>}
      <p>Num1: {num1}</p>
      <p>Num2: {num2}</p>
    </div>
  );
}

// export default function SlotMachineLogic() {
//   // eslint-disable-next-line react-hooks/purity
//   const num1 = Math.floor(Math.random() * 3) + 1;
//   // eslint-disable-next-line react-hooks/purity
//   const num2 = Math.floor(Math.random() * 3) + 1;

//   const className = num1 === num2 ? "green" : "red";

//   return (
//     <div className={className}>
//       <h1>Double Roll</h1>
//       {(num1 === num2) && <h2>You Won!</h2>}
//       <p>Num1: {num1}</p>
//       <p>Num2: {num2}</p>
//     </div>
//   );
// }

// export default function SlotMachineLogic() {
//   // eslint-disable-next-line react-hooks/purity
//   const num1 = Math.floor(Math.random() * 3) + 1;
//   // eslint-disable-next-line react-hooks/purity
//   const num2 = Math.floor(Math.random() * 3) + 1;

//     // const styles = (num1 === num2) ? { color: "green", fontSize: "24px" } : { color: "red", fontSize: "14px" }
//   const className = num1 === num2 ? "green" : "red";

//   return (
//     <div className={className}>
//       {/* <div className="className" style={styles}> */}
//       <h2>{num1 === num2 ? "You Won!" : "Oops, You Lost."}</h2>
//       <p>Num1: {num1}</p>
//       <p>Num2: {num2}</p>
//     </div>
//   );
// }

// export default function SlotMachineLogic() {
//     // eslint-disable-next-line react-hooks/purity
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     // eslint-disable-next-line react-hooks/purity
//     const num2 = Math.floor(Math.random() * 3) + 1;

//     return (
//         <div>
//             <p>Num1: {num1}</p>
//             <p>Num2: {num2}</p>
//             <p className={"bgcHighlight"} style={{borderBottom: "3px solid #ff0000" }}>
//                 {(num1 === num2) ? "You Won!" : "Oops, You Lost."}
//             </p>
//         </div>
//     )
// }

// export default function SlotMachineLogic() {
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     const num2 = Math.floor(Math.random() * 3) + 1;
//     const result = (num1 === num2) ? "You Won!" : "Oops, You Lost.";

//     return (
//         <div>
//             <p>Num1: {num1}</p>
//             <p>Num2: {num2}</p>
//             <p className={"bgcHighlight"}>
//                 {result}
//             </p>
//         </div>
//     )
// }
