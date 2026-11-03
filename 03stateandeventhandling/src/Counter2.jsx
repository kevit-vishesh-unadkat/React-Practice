//updating state Conditionally

import { useState } from "react";

function Counter2(){
    const [count,setCount]=useState(0);

    function decrease(){
        if(count>0){
            setCount(count-1);
        }
    }
    return (
        <div>
            <h1>{count}</h1>

            <button onClick={()=>setCount(count+1)}>
                Increase
            </button>

            <button onClick={decrease}>
                Decrease
            </button>
        </div>
    )
}

export default Counter2;