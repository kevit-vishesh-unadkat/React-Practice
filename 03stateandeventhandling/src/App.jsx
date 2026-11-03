import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Counter from './Counter'
import Name from './Name'
import Counter1 from './Counter1'
import Counter2 from './Counter2'
import Child from './Child'
import Counter3 from './Counter3'
import UserProfile from './UserProfile'
import StudentProfile from './StudentProfile'
import Skills from './Skills'
import Likes from './Likes'
import Counter4 from './Counter4'
import HandleClick from './HandleClick'
import Change from './Change'
import Submit from './Submit'
import Delete from './Delete'
import Update from './Update'
function App() {
      
    const [count,setCount]=useState(0);

  return (
    <>
      <Counter/>
      <Name/>
      <Counter1/>
      <Counter2/>

      <div>
        <h1>{count}</h1>

        <button onClick={()=>setCount(count+1)}>
          Increase
        </button>

        <Child/>
      </div>

      <Counter3 value={5}/>
      <Counter3 value={10}/>

      <UserProfile/>

      <StudentProfile/>

      <Skills/>

      <Likes/>

      <Counter4/>

      <HandleClick/>

      <Change/>

      <Submit/>

      <Delete/>

      <Update/>
    </>
  )
}

export default App
