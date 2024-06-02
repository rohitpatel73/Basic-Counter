import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(5)

  // let count = 5;
  const addvalue = () => {
    setCount(count+1);
  }
  const removevalue = () => {
    setCount(count-1);
  }

  return (
    <>
      <h1>this is a counter app</h1>

      <p>the count is {count}</p>
      <button onClick={addvalue} >add value</button>
      <button onClick={removevalue} >remove value</button>
    </>
  )
}

export default App
