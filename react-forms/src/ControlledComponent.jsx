// practice of controlled component

import { useState } from "react";

function ControlledComponent(){
    const [name,setName] =useState("");

    const handleChange=(event)=>{
        setName(event.target.value);
    }

    return (
        <div>
            <h2>Controlled Component</h2>

            <input 
               type="text"
               value={name}
               onChange={handleChange}
               placeholder="Enter your name"
               />

            <p>Your Name : {name}</p>
        </div>
    )
}

export default ControlledComponent;