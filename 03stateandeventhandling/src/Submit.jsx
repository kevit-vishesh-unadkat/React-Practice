// onSubmit ->used when a form is submitted

function Submit(){
    
    function handleSubmit(event){
        event.preventDefault();

        alert("Form Submitted!!");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text"/>

            <button type="submit">Submit</button>
        </form>
    )
}

export default Submit;