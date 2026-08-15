import "./ShoppingList.css";
import ShoppingListItem from "./ShoppingListItem";

function ShoppingList({ items }) {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <ShoppingListItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

// const itemList = [
//   { id: 1, item: "eggs", quantity: 6, inBasket: true},
//   { id: 2, item: "milk", quantity: 1, inBasket: false},
//   { id: 3, item: "chicken", quantity: 2, inBasket: true},
//   { id: 4, item: "Soya Chuns", quantity: 3, inBasket: false}
// ]
