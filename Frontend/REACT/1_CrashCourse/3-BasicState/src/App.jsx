import './App.css'

import Counter from './components/Counter.jsx';
import Toggler from './components/Toggler.jsx';
import TwoStatesInOneComp from './components/TwoStatesInOneComp.jsx';
import UseStateRenderDemo from './components/UseStateRenderDemo.jsx';

import ColorBox from './components/ColorBox.jsx';
import ColorBoxes from './components/ColorBoxes.jsx';

const colors = [
  "#E53935",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#2196F3",
  "#03A9F4",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FFC107",
  "#FF9800",
  "#FF5722",
];

function App() {
  return (
    <div>
      {/* <Counter />
      <Toggler /> */}
      {/* <TwoStatesInOneComp /> */}
      {/* <UseStateRenderDemo /> */}

      {/* <ColorBox colors={colors} /> */}
      <ColorBoxes colors={colors} />
    </div>
  )
}

export default App
