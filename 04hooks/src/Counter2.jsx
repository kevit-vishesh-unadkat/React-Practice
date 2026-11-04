// basic counter app with useEffect hook

import { useEffect, useState } from "react";

function Counter2(){
    const [count,setCount]=useState(0);

    useEffect(()=>{
        document.title=`you clicked ${count} times`;
    })

    function increase(){
        setCount(count+1);
    }
    return (
        <div>
            <p>you clicked {count} times</p>

            <button onClick={increase}>
                Increment
            </button>
        </div>
    )
}

export default Counter2;