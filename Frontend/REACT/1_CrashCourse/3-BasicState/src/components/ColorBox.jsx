import { useState } from 'react';
import './ColorBox.css';

function randomColor(arr) {
  const randomHex = Math.floor(Math.random() * arr.length);
  return arr[randomHex];
}

export default function ColorBox({colors}) {
  const [color, setColor] = useState(randomColor(colors));

  const changeColor = () => {
    const newRandomHex = randomColor(colors);
    setColor(newRandomHex);
    console.log(newRandomHex);
  }

  return (
    <div 
      style={{backgroundColor: color}}
      onClick={changeColor}
    >
    </div>
  )
}
