// validation 

import { useForm } from "react-hook-form";

function Forms2(){
    const {register,handleSubmit,formState:{errors}}=useForm();

    const onSubmit=(data)=>{
        alert("Form Is Submitted Successfully");
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input 
                  placeholder="Name"
                  {...register("name",{
                    required:"Name is Required",
                    minLength:{
                        value:3,
                        message:"minimu 3 characters"
                    }
                  })}
                  />

                <p>{errors.name?.message}</p>
            </div>

            <div>
                <input
                  placeholder="Enter Your Email"
                  {...register("email",{
                    required:"Email is Required",
                    pattern:{
                        value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message:"Enter a valid email"
                    }
                  })}
                  />
                <p>{errors.email?.message}</p>
            </div>

            <div>
        <input
          type="number"
          placeholder="Age"
          {...register("age", {
            valueAsNumber: true,
            required: "Age is required",
            min: {
              value: 18,
              message: "Minimum age is 18"
            }
          })}
        />

        <p>{errors.age?.message}</p>
      </div>

      <button type="submit">Register</button>

        </form>
    );
}

export default Forms2;