import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Welcome from './Welcome'
import Student from './Student'
import Button from './Button'
import Greeting from './Greeting'
import User from './User'
import Product from './Product'
import User1 from './User1'
import Student1 from './Student1'
import User2 from './User2'
import Product1 from './Product1'
function Footer(){
  return (
    <div>
      <p>This is the Footer Section</p>
    </div>
  )
}

// can a child component have multiple child
function Button1(){
  return (
    <button>Click Me!</button>
  )
}

function LoginForm(){
  return (
    <div>
      <h2>Login Form </h2>
      <Button1/>
    </div>
  )
}


// can multiple parent use the same child component

function UserCard(){
  return <h2>User Information</h2>
}

function AdminDashboard(){
  return <UserCard/>
}

function StudentDashboard(){
  return <UserCard/>
}
function App() {

      const price=500;
      const quantity=3;

      const student={
        name:"priyank",
        address:{
          city:"Surat",
          state:"Gujarat"
        }
      };
  

  return (
    <>
      <div>
        <Welcome/>
        <Footer/>
        <Student/>
        <LoginForm/>
        <AdminDashboard/>
        <StudentDashboard/>


        <Button text="Login"/>
        <Button text="Register"/>
        <Button text="Submit"/>


        <Greeting name="vishesh"/>

        {/* <User name="nirmit" age={17}/> */}

        <User isActive={true}/>
        <User isActive={false}/>

        

        <Product total={price*quantity}/>

        <User1 name="yug" age={23} city="Rajkot"/>

        <Student1 student={student}/>


        <User2 name="brinda"/>

        <Product1 
            name="Laptop"
            price={25000}
            category="Electronics"
            brand="Dell"
            available={true}/>
      </div>
    </>
  )
}

export default App
