import "./App.css";

import Cat from "./Cat.jsx";
import Greeter from "./Greeter.jsx";
import Die from './Die.jsx'

function App() {
  return (
    <div>
      <Cat />

      {/* Props */}
      <Greeter name="Alex" age="20" from="USA" />
      <Greeter name="Bob" age="21" />
      <Greeter age="22" />
    
      <Die sides={18} />
      <Die />
      <Die sides={12} />
    </div>
  );
}

export default App;
