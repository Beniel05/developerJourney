import { useState } from 'react'

export default function Toggler() {

    const [face, setFace] = useState(true);

    const handleClick = () => {
        setFace(!face); // If face is true -> false | if false -> true
    }

  return (
    <div>
        <h1 id='smiley' onClick={handleClick}>
            {face ? '😁' : '☹️'}
        </h1>
    </div>
  )
}
