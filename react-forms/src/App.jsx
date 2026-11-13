import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ControlledComponent from './ControlledComponent'
import DropDown from './DropDown'
import Checkbox from './CheckBox'
import MyForm from './MyForm'
import Uncontrolled from './Uncontrolled'
import Register from './Register'

function App() {


  return (
    <>
      <ControlledComponent/>
      <DropDown/>
      <Checkbox/>
      <MyForm/>
      <Uncontrolled/>
      <Register/>
    </>
  )
}

export default App
