// Schema Validation using Zod'


import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const studentSchema=z.object({
    name:z.string().min(3,"Minimum 3 character required"),

    email:z.string().email("Invalid email address"),

    age: z.coerce.number().min(18, "Minimum age must be 18")
});

function Schema(){
    const{
        register,
        handleSubmit,
        formState:{errors}
    }=useForm({
        resolver:zodResolver(studentSchema)
    });

    const onSubmit=(data)=>{
        console.log(data);
        alert("form Submitted Successfully");
    }

    return (
         <form onSubmit={handleSubmit(onSubmit)}>

      <input {...register("name")} />
      <p>{errors.name?.message}</p>

      <input {...register("email")} />
      <p>{errors.email?.message}</p>

      <input type="number" {...register("age")} />
      <p>{errors.age?.message}</p>

      <button type="submit">Register</button>

    </form>
    );
}

export default Schema;