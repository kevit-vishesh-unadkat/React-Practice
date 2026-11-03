// Multiple State Variable

import { useState } from "react";

function UserProfile(){
    const [name,setName]=useState("vishesh");

    const [age,setAge]=useState(22);

    const [city,setCity]=useState("Rajkot");

    const [isActive,setIsActive]=useState(true);


    return (
        <div>
            <h2>{name}</h2>
            <p>{age}</p>
            <p>{city}</p>
            <p>{isActive?"Active":"Inactive"}</p>

            <button onClick={() => setName("Rahul")}>
        Change Name
      </button>

      <button onClick={() => setAge(age + 1)}>
        Increase Age
      </button>

      <button onClick={() => setCity("Ahmedabad")}>
        Change City
      </button>

      <button onClick={() => setIsActive(!isActive)}>
        Toggle Status
      </button>
        </div>
    )
}

export default UserProfile;