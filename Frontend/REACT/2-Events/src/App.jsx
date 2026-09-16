import './App.css'

import Clicker from './components/Clicker.jsx';
import Form from './components/Form.jsx';
import PropClicker from './components/PropClicker.jsx';

function App() {
  return (
    <div>
      <Clicker />
      <Form />
      <br /><br /><br />
      <PropClicker message="Hi!" buttonText="Click me" />
    </div>
  )
}

export default App
