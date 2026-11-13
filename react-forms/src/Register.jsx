// make a user Registration form using ract form hook
import { useForm } from "react-hook-form";
function Register(){
    const{
        register,
        handleSubmit,
        reset,
        formState:{errors}
    }=useForm();

    const onSubmit=(data)=>{
        console.log("Registration Successfully");
        console.log(data);

        alert("user registerd successfully");

        reset();
    }

        return (
        <div>
            <h2>User Registration Form</h2>

            <form onSubmit={handleSubmit(onSubmit)}>

                {/* Name */}
                <div>
                    <label>Name:</label>

                    <input
                        type="text"
                        placeholder="Enter your name"
                        {...register("name", {
                            required: "Name is required"
                        })}
                    />

                    <p>{errors.name?.message}</p>
                </div>

                {/* Email */}
                <div>
                    <label>Email:</label>

                    <input
                        type="email"
                        placeholder="Enter your email"
                        {...register("email", {
                            required: "Email is required"
                        })}
                    />

                    <p>{errors.email?.message}</p>
                </div>

                {/* Password */}
                <div>
                    <label>Password:</label>

                    <input
                        type="password"
                        placeholder="Enter password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Minimum 6 characters required"
                            }
                        })}
                    />

                    <p>{errors.password?.message}</p>
                </div>

                {/* Course */}
                <div>
                    <label>Course:</label>

                    <select
                        {...register("course", {
                            required: "Please select a course"
                        })}
                    >
                        <option value="">Select Course</option>
                        <option value="React">React</option>
                        <option value="Python">Python</option>
                        <option value="Java">Java</option>
                    </select>

                    <p>{errors.course?.message}</p>
                </div>

                {/* Buttons */}
                <button type="submit">
                    Register
                </button>

                <button type="button" onClick={() => reset()}>
                    Reset
                </button>

            </form>
        </div>
    );
}

export default Register;