// practical example 2 ->store previous values

import { useEffect, useState,useRef } from "react";

function PreviousValue(){
    const [count,setCount]=useState(0);

    const prevCount=useRef();

    useEffect(()=>{
        prevCount.current=count;
    },[count]);

    

    return (
        <div>
            <h2>Current : {count}</h2>

            <h2>Previous : {prevCount.current}</h2>

            <button onClick={() => setCount(prev => prev + 1)}>
        Increment
      </button>
        </div>
    )
}

export default PreviousValue;