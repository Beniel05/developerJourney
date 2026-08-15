function ShoppingListItem({ item }) {
  return <li className={item.inBasket ? "picked" : "pending"}>
    {item.item} - {item.quantity}
  </li>;
}

export default ShoppingListItem;
