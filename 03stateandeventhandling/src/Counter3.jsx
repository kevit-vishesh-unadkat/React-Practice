// practical of state and propes together

import { useState } from "react";

function Counter3({value}){
    const [count,setCount]=useState(value);

    return (
        <div>
            <h1>COunt : {count}</h1>

            <button onClick={()=>setCount(count+1)}>
                Increase
            </button>
        </div>
    )
}

export default Counter3;