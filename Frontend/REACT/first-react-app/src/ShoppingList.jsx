import "./ShoppingList.css";

function ShoppingList({ items }) {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li className={item.inBasket ? "picked" : "pending"}>
            {/* <li style={{ color: item.inBasket? 'grey' : 'red', 
                text-decoration: item.inBasket? 'line-through' : 'none'}}> */}
            {item.item} - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

// const itemList = [
//   { item: "eggs", quantity: 6, inBasket: true},
//   { item: "milk", quantity: 1, inBasket: false},
//   {item: "chicken", quantity: 2, inBasket: true},
//   {item: "Soya Chuns", quantity: 3, inBasket: false}
// ]
