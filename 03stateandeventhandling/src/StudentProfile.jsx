// Updating Objects in States

import { useState } from "react";

function StudentProfile(){
    const [student,setStudent]=useState({
        name:"vishesh",
        age:22,
        city:"Rajkot"
    });

    function updateStudent(){
        setStudent({
            ...student,
            name:"Nirmit"
        });
    }

    return (
        <div>
            <h2>{student.name}</h2>
      <p>{student.age}</p>
      <p>{student.city}</p>

      <button onClick={updateStudent}>
        Update Name
      </button>
        </div>
    )
}

export default StudentProfile;