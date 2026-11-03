// updating a number

import { useState } from "react";

function Counter1(){
    const [count,setCount]=useState(0);

    return (
        <div>
            <h1>{count}</h1>

            <button onClick={()=>setCount(count+1)}>
                Increase
            </button>

            <button onClick={()=>setCount(count-1)}>
                Decrease
            </button>

            <button onClick={()=>setCount(0)}>
                Reset
            </button>
        </div>
    )
}

export default Counter1;