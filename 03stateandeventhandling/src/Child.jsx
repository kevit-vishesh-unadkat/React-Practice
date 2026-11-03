// Does a child component re-render when its parent re-renders

function Child(){
    console.log("Child re-render");

    return (
        <h2>Child Component</h2>
    )
}

export default Child;


// Child component is re-render when parent is re-render

// Later React.Momo() to optimize certain unnecessary child renders.