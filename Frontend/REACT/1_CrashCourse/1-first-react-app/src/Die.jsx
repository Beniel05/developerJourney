export default function Die({ sides = 6 }) {
  // eslint-disable-next-line react-hooks/purity
  const roll = Math.floor(Math.random() * sides) + 1;
  return <p>{sides}-Sided_Die Roll: {roll}</p>;
}
