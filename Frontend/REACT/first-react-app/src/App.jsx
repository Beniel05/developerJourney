import "./App.css";

// import Cat from "./Cat.jsx";
// import Greeter from "./Greeter.jsx";
// import Die from './Die.jsx'
// import ListPicker from "./ListPicker.jsx";
// import ObjectPicker from "./ObjectPicker.jsx";
// import SlotMachineLogic from "./SlotMachineLogic.jsx";
// import ColorHeading from "./ColorHeading.jsx";
// import ColorList from "./ColorList.jsx";
// import SlotMachine from "./SlotMachine.jsx";
// import ShoppingList from "./ShoppingList.jsx";
import PropertyList from "./PropertyList";

// const itemList = [
//   { id: 1, item: "eggs", quantity: 6, inBasket: true},
//   { id: 2, item: "milk", quantity: 1, inBasket: false},
//   { id: 3, item: "chicken", quantity: 2, inBasket: true},
//   { id: 4, item: "Soya Chuns", quantity: 3, inBasket: false}
// ]

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];

function App() {
  return (
    <div>
      {/* <Cat /> */}

      {/* Props */}
      {/* <Greeter name="Alex" age="20" from="USA" />
      <Greeter name="Bob" age="21" />
      <Greeter age="22" />
    
      <Die sides={18} />
      <Die />
      <Die sides={12} /> */}

      {/* <ListPicker elements={[1, 2, 3]} />
      <ListPicker elements={["a", "b", "c"]} />

      <ObjectPicker elements={{ 1: "a", 2: "b", 3: "c" }} />
      <ObjectPicker elements={{ a: 10, b: 20, c: 30 }} /> */}

      {/* <SlotMachineLogic />
        <SlotMachineLogic /> */}

      {/* <ColorHeading text="Heading text passed" color="red" /> */}

      {/* <ColorList colors={['red', 'green', 'blue']} />
        <ColorList colors={['violet', 'orange', 'purple']} /> */}

      {/* <SlotMachine val1="7" val2="7" val3="7" />
      <SlotMachine val1="7" val2="6" val3="7" />
      <SlotMachine val1="3" val2="3" val3="3" /> */}

      {/* <ShoppingList items={itemList} /> */}

      <PropertyList properties={properties} />
    </div>
  );
}

export default App;
