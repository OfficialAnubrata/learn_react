import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let  [Counter, setCounter] = useState(0)

  // let Counter = 5

  const addValue = () => {
    console.log("clicked", Counter);
    // Counter = Counter + 1
    if(Counter < 20){
      setCounter(Counter => Counter + 1)
      // setCounter(Counter => Counter + 1)
      // setCounter(Counter => Counter + 1)
      // setCounter(Counter => Counter + 1)
    }
    
  }
  const removeValue = () => {
    console.log("clicked", Counter);
    // Counter = Counter - 1
    if(Counter > 0){
      setCounter(Counter - 1)
    }
  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {Counter}</h2>

      <button 
      onClick={addValue}
      >Add Value</button>
      <br />
      <button
      onClick={removeValue}
      >Decrease Value</button>
    </>
  )
}

export default App
