// Passing Argument to event handler 

// this is use for delete particular element
// update specific product
// select particular user
// add particular product to a cart

function Delete(){
    function handleDelete(id){
        console.log("Deleting Student:",id)
    }

    return(
        <button onClick={()=>handleDelete(101)}>
            Delete Student
        </button>
    )
}

export default Delete;