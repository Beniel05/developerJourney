export default function ColorHeading({text = "No text passed", color = "black"}) {
    // Default text and color set above in the props.
  return <h1 style={{ color: color, fontSize: "28px" }}>{text}</h1>;
}

// export default function ColorHeading(props) {
//   const text = props.text || "No text passed";
//   const color = props.color || "black";

//   return <h1 style={{ color: color }}>{text}</h1>;
// }
