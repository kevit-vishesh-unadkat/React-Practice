
import { useForm } from "react-hook-form"

function Register(){
    const {register,handleSubmit}=useForm();
    const onSubmit=(data)=>console.log(data);

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName")}/>
            <select {...register("gender")}>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">other</option>
            </select>
            <input type="submit"/>
        </form>
    )
}

export default Register;