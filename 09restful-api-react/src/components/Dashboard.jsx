import { useEffect,useState } from "react";
import api from "../services/api";


function Dashboard({onLogout}){
    const [user,setUser]=useState(null);

    useEffect(()=>{
        const fetchProfile=async()=>{
            try{
                const response=await api.get("/users/me");

                setUser(response.data);
            }
            catch(error){
                console.error("Unable to fetch profile",error);
            }
        };
        fetchProfile();
    },[]);

    return (
        <div>
            <h2>Dashboard</h2>

      {user ? (

        <div>
          <h3>Welcome, {user.name}</h3>
          <p>Email: {user.email}</p>
        </div>

      ) : (

        <p>Loading user information...</p>

      )}

      <button onClick={onLogout}>
        Logout
      </button>

        </div>
    );
}

export default Dashboard;