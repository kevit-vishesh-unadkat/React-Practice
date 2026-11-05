import { useState } from "react";

function RegistrationForm(){
    const [name,setName]=useState("");

    function handleChange(event){
        setName(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();

        console.log("Name : ",name);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={handleChange}
            />

            <button type="submit">Register</button>
        </form>
    );
}

export default RegistrationForm