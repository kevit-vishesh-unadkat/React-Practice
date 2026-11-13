// Shema validation using yup
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema=yup.object({
    name:yup.string().required("Name is required"),

    email:yup.string().email().required(),

    age:yup.number().positive().integer().required()
});

function Schema1(){
    const{
        register,
        handleSubmit,
        formState:{errors}
    }=useForm({
        resolver:yupResolver(schema)
    });

    const onSubmit=(data)=>{
        console.log(data);
    };

     return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input {...register("name")} />
      <p>{errors.name?.message}</p>

      <input {...register("email")} />
      <p>{errors.email?.message}</p>

      <input type="number" {...register("age")} />
      <p>{errors.age?.message}</p>

      <button type="submit">Submit</button>

    </form>
  );
}

export default Schema1;