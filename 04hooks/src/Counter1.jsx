// Multiple state update and batching
// Function State Update 

import { useState } from "react";
function Counter1(){
    const [count,setCount] = useState(0);

    // function increment(){
    //     setCount(count+1);
    //     setCount(count+1);
    //     setCount(count+1);
    // }

    function increment(){
        setCount(prev=>prev+3);
    }

    return (
        <div>
            <h2>{count}</h2>

            <button onClick={increment}>
                Increment
            </button>
        </div>
    )
}

export default Counter1;