// Default Values

import { useForm } from "react-hook-form";

function Forms1(){
    const {register,handleSubmit}=useForm({
        defaultValues:{
            name:"vishesh",
            email:"visheshunadkat@gmail.com",
            age:21
        }
    });

    const onSubmit=(data)=>{
        alert("Updated Sucessfully");
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name")}/>
            <input {...register("email")}/>
            <input type="number" {...register("age")}/>

            <button type="submit">Update</button>
        </form>
    );
}

export default Forms1;