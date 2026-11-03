// updating a string

import { useState } from "react";

function Name(){
    const [name,setName]=useState("vishesh");

    return (
        <div>
            <h1>{name}</h1>

            <button onClick={()=>setName("Nirmit")}>
                Change Name
            </button>
        </div>
    ) 
}

export default Name;