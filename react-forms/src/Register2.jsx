// Register a field with multiple input fields

import { useForm } from "react-hook-form";


function Register2(){
    const {register,handleSubmit}=useForm();

    const onSubmit=(data)=>{
        alert("form submitted successfully");
        console.log(data);
    }

    return (
        <div>
            <h2>Student Registration Form</h2>

            <form onSubmit={handleSubmit(onSubmit)}>

                <input
                  type="text"
                  placeholder="Enter Your Name"
                  {...register("name")}
                  />
                <br/><br/>

                <input 
                  type="email"
                  placeholder="Enter Your Email"
                  {...register("email")}
                  />
                   <br/><br/>

                <input 
                   type="number"
                   placeholder="Enter Your Age"
                  {...register("age")}
                  />
                   <br/><br/>

        <select {...register("gender")}>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <label>
        <input
          type="checkbox"
          {...register("skills")}
          value="React"
        />
        React
      </label>

      <label>
        <input
          type="checkbox"
          {...register("skills")}
          value="Node.js"
        />
        Node.js
      </label>

      <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Register2;