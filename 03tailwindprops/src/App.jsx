import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    username : "Anubrata",
    age: 22
  }
  
  let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username= "Anubrata Sarkar" btnText = "Click me"/>
      <Card username= "Sonai" />
    </>
  )
}

export default App
