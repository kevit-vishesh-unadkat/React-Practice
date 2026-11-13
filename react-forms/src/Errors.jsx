import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    // Simulating a backend response
    if (data.email === "test@gmail.com") {
      setError("email", {
        type: "server",
        message: "Email already exists"
      });

      return;
    }

    console.log("Registration successful", data);
    alert("email is registered successfully");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input
        {...register("email", {
          required: "Email is required"
        })}
        onChange={() => clearErrors("email")}
      />

      {errors.email && (
        <p>{errors.email.message}</p>
      )}

      <button type="submit">Register</button>

    </form>
  );
}

export default App;