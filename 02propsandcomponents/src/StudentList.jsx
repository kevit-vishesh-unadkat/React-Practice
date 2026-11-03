// Passing an array of objects

function StudentList({students}){
    return (
        <div>
            {students.map((student)=>(
                <div key={student.id}>
                    <h2>{student.name}</h2>
                    <hp>{student.branch}</hp>
                </div>
            ))}
        </div>
    )
}

export default StudentList;