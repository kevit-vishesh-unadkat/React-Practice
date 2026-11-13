import { useState } from "react";
import {useForm} from "react-hook-form";

function Register1(){
    const {register,handleSubmit}=useForm();
    // const [value,setValue]=useState(null);

    const onSubmit=(data)=>{
        alert("Form Is Submitted Successfully");
        console.log(data);
        // setValue(null);
    }

    return (
        <div>
            <h2>Student Registration Form </h2>

            <form onSubmit={handleSubmit(onSubmit)}>

                <input 
                   type="text"
                   placeholder="Enter your name"
                   {...register("name")} 
                   />
                
                <br/><br/>

                <input
                   type="email"
                   placeholder="Enter Your Email"
                   {...register("email")}
                   />
                <br/><br/>

                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register1;