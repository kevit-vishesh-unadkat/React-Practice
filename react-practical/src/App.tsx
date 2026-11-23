
import { useState } from 'react'
import './App.css'
import App1 from './App1';
import App2 from './App2';

function App() {

  const [count,setCount]=useState<number>(0);

  return (
    <>
    <div>
      <h1>COunter : {count}</h1>

      <button onClick={()=>setCount(count+1)}>
        Increment
      </button>

      <button onClick={()=>setCount(count-1)}>
        Decrement
      </button>

      <button onClick={()=>setCount(0)}>
        Reset
      </button>
      
    </div>

    <App1/>

    
    <App2/>
    </>
  )
}

export default App
