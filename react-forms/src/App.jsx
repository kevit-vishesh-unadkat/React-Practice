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
import Register1 from './Register1'
import Register2 from './Register2'
import Forms from './Forms'
import Forms1 from './Forms1'
import Forms2 from './Forms2'

function App() {


  return (
    <>
      <ControlledComponent/>
      <DropDown/>
      <Checkbox/>
      <MyForm/>
      <Uncontrolled/>
      <Register/>
      <Register1/>
      <Register2/>
      <Forms/>
      <Forms1/>
      <Forms2/>
    </>
  )
}

export default App
