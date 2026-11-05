import { useState, useEffect } from "react";
import Project1 from "../Project1";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function getUsers() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      setUsers(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }


  // post request 


  // try{
  //   setLoading=(true);
  //   setError("");

  //   const response=await fetch(
  //     "https://jsonplaceholder.typicode.com/users",
  //     {
  //       method:"POST",

  //       headers:{
  //         "content-type":"application/json",
  //       },

  //       body:JSON.stringify({
  //         name:"vishesh",
  //         email:"visheshunadkat@gmail.com"
  //       })
  //     }
  //   );
  //   if(!response.ok){
  //     throw new Error("Failed to create a user");
  //   }

  //   const data = await response.json();

  //   console.log(data);
  //   setUsers(data);
  // }
  // catch(error){
  //   setError(error.message);
  // }
  // finally{
  //   setLoading(false);
  // }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1>User Management - Fetch API</h1>

      <button onClick={getUsers}>Refresh Users</button>

      {loading && <h3>Loading users...</h3>}

      {error && <h3>{error}</h3>}

      <div>
        {users.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <hr />
          </div>
        ))}
      </div>


     
    </div>
  );
}

export default App;