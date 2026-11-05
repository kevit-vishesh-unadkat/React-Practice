import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import RegistrationForm from './RegistrationForm'
import ControlledInput from './ControlledInput'

function App() {


  return (
    <>
      <RegistrationForm/>
      <ControlledInput/>
    </>
  )
}

export default App
