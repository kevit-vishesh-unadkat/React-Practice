import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ControlledComponent from './ControlledComponent'
import DropDown from './DropDown'
import Checkbox from './CheckBox'
import MyForm from './MyForm'

function App() {


  return (
    <>
      <ControlledComponent/>
      <DropDown/>
      <Checkbox/>
      <MyForm/>
    </>
  )
}

export default App
