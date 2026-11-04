// UseEffect With dependency

import { useState,useEffect } from "react";

function UserDetails(){
    const [userId,setUserId]=useState(1);
    const [user,setUser]=useState(null);

    useEffect(()=>{
        const fetchUser=async()=>{
            setUser(null);

            const response=await fetch(
                `https://jsonplaceholder.typicode.com/users/${userId}`
            );

            const data =await response.json();

            setUser(data);
        };

        fetchUser();
    },[userId]);

    return (
    <div>
      <button onClick={() => setUserId(prev => prev + 1)}>
        Next User
      </button>

      {user && (
        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
}

export default UserDetails;