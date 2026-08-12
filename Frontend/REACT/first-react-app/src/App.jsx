import "./App.css";

import Cat from "./Cat.jsx";
import Greeter from "./Greeter.jsx";
import Die from './Die.jsx'

function App() {
  return (
    <div>
      <Cat />

      {/* Props */}
      <Greeter name="Alex" age="20" />
      <Greeter name="Bob" age="21" />
    
      <Die sides={18} />
      <Die sides={6} />
      <Die sides={12} />
    </div>
  );
}

export default App;
