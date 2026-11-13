// Imtegrating with services/ apis

import { useForm } from "react-hook-form";

function Service(){
    const{
        register,
        handleSubmit,
        formState:{isSubmitting}
    }=useForm();

    const onSubmit=async (data)=>{
        try{
            const response=await fetch(
                "https://jsonplaceholder.typicode.com/users",

                {
                    method:"POST",
                    headers:{
                        "Content-Type": "application/json"
                    },
                    body:JSON.stringify(data)
                }
            );

            if(!response.ok){
                throw new Error("Something Wen Wrong");
            }
            const result =await response.json();

            console.log(result);
        }
        catch(error){
            console.log(error.message);
        }
    };

    return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input {...register("name")} />

      <input {...register("email")} />

      <button disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>

    </form>
  );
}

export default Service;