// Function State Update

import { useState } from "react";

function Counter4(){
    const [count , setCount]=useState(0);

    function increase(){
        setCount(prev=>prev+3)
    }

    return (
        <div>
            <h1>{count}</h1>
            
            <button onClick={increase}>
                Increase By 3
            </button>
        </div>
    )
}

export default Counter4;