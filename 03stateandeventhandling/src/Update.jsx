// passing multiple Argument

function Update(){
    function handleUpdate(id,name){
        console.log(id,name);
    }

    return (
        <div>
            <button onClick={()=>handleUpdate(101,"vishesh")}>
                Update Student
            </button>
        </div>
    )
}

export default Update;