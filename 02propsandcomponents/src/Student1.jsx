// Nested Object Destructuring

function Student1({student}){
    return (
        <div>
            <h2>{student.name}</h2>
            <p>{student.address.city}</p>
        </div>
    )
}

export default Student1;