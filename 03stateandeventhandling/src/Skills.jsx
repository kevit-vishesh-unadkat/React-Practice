// Updating Arrays in State

import { useState } from "react";

function Skills(){
    const [skills,setSkills]=useState([
        "python",
        "Java"
    ]);

    function addSkills(){
        setSkills([
            ...skills,
            "React.js"
        ]);
    }

    function removeSkills(){
        setSkills(
            skills.filter(skill=>skill!=="python")
        );
    }
    
    function updateSkills(){
        setSkills(
            skills.map(skill=>skill==="python"?"Advance Python":skill)
        )
    }

    return (
        <div>
            {skills.map((skill,index)=>(
                <p key={index}>{skill}</p>
            ))}

            <button onClick={addSkills}>
                Add Skills
            </button>

            <button onClick={removeSkills}>
                Remove Skills
            </button>

            <button onClick={updateSkills}>
                Update Skills
            </button>
        </div>
    )
}

export default Skills;