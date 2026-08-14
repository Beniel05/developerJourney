export default function ColorList({ colors }) {
  return (
    <div>
      <ul>
        {colors.map((color) => (
          <li style={{ color: color }}>{color}</li>
        ))}
      </ul>
    </div>
  );
}

// ColorList.jsx:6 Each child in a list should have a unique "key" prop.
// Check the render method of `ColorList`. See https://react.dev/link/warning-keys for more information.



// export default function ColorList({ colors }) {
//     const lis = colors.map((color) => <p>{color}</p>);
//     return (
//         <div>
//             <ul>{lis}</ul>
//             <h1>{colors}</h1>
//         </div>
//     )
// }
