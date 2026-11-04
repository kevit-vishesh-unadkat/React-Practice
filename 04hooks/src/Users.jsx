// API data Fetching

import { useEffect, useState } from "react";

function Users(){
    const [users,setUsers]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState("");

    useEffect(()=>{
        const fetchUsers=async()=>{
            try{
                const response=await fetch(
                     "https://github.com/public-apis/public-apis"
                );
                if(!response.ok){
                    throw new Error("Failed to fetch users");
                }

                const data = await response.json();

                setUsers(data);
            }
            catch(err){
                setError(err.message);
            }
            finally{
                selLoading(false);
            }
        }
        fetchUsers();
    },[]);

    if(loading){
        return <h2>Loading ...</h2>;
    }
    if(error){
        return <h2>{error}</h2>;
    }

    return(
        <div>
            <h2>User List</h2>

            {users.map((user)=>(
                <div key={user.key}>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    )
}

export default Users;