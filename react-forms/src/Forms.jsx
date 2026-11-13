// handle submit include valid or invalid
import { useForm } from "react-hook-form";
function Forms(){
    const {register,handleSubmit} =useForm()

    const onValid=(data)=>{
        console.log("valid data : ",data);
    }

    const onInvalid=(data)=>{
        console.log("Invalid data : ",errors);
    }

    return(
        <form onSubmit={handleSubmit(onValid,onInvalid)}>
            <input {...register("name",{required:true})}/>

            <button type="submit">Submit</button>
        </form>
    );
}

export default Forms;