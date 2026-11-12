import { useState } from "react";

function Login({onLogin}){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const handleLogin=async()=>{
        try{
            const response=await axios.post(
                "http://localhost:8000/authlogin",
                {
                    email,
                    password
                }
            );

            const token=response.data.access_token;

            // store token
            localStorage.setItem("access_token",token);

            // update authentication state

            onLogin();

            alert("Login Successfull");
        }
        catch(error){
            alert("Invalid email or password");
        }
    };

    return(
        <div>

      <h2>Login</h2>

      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin}>
        Login
      </button>

    </div>

  );
    
}

export default Login;