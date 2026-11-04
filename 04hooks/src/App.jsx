import { useCallback, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Counter from './Counter'
import Counter1 from './Counter1'
import Product from './Product'
import Counter2 from './Counter2'
import Users from './Users'
import UserDetails from './UserDetails'
import ThemeContext from './ThemeContext'
import { ThemeProvider } from './ThemeContext'

import FocusInput from './FocusInput'
import PreviousValue from './PreviousValue'
import Timer from './Timer'
import ProductList from './ProductList'
import SearchProducts from './SearchProducts'
import Child from './Child'
function App() {

  const [count , setCount]=useState(0);

  const handleClick =useCallback(()=>{
    console.log("Child Button Clicked");
  },[]);

  return (
    <>
      <Counter/>
      <Counter1/>
      <Product/>
      <Counter2/>
      <Users/>
      <UserDetails/>


      <FocusInput/>
      <PreviousValue/>

      <Timer/>

      <ProductList/>

      <SearchProducts/>

      <div>
        <h2>Count : {count}</h2>

        <button onClick={()=>setCount(prev=>prev+1)}>
          Increment
        </button>

        <Child onClick={handleClick}/>
      </div>
    </>
  )
}

export default App
