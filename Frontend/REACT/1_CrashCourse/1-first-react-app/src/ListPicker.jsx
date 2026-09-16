export default function ListPicker({ elements }) {
  const calcLength = elements.length;
  // eslint-disable-next-line react-hooks/purity
  const random = Math.floor(Math.random() * calcLength);
  return (
    <div>
      <h3>Elements: {elements.join(', ')} </h3>
      <p style={{backgroundColor: "#000", color: "#fff", padding: "5px"}} >Random Element: {elements[random]}</p>
    </div>
  );
}
