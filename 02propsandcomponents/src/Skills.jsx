// Passing An array as props

function Skills({skills}){
    return (
        <div>
            <h2>My Skills</h2>

            {skills.map((skill)=>(
                <p key={skill}>{skill}</p>
            ))}
        </div>
    );
}

export default Skills;