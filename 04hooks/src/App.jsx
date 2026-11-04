import { useState } from 'react'
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
function App() {


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
    </>
  )
}

export default App
