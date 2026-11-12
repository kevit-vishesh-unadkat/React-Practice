import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Posts from './components/Posts'
import Posts2 from './components/Posts2'
import Users from './components/Users'
import ControlledComponent from './components/ControlledComponent'
function App() {


  return (
    <>
      <Posts/>
      <Posts2/>
      <Users/>
      <ControlledComponent/>
    </>
  )
}

export default App
