// practical use case of useState app
import { useState } from "react";
function Counter(){
    const [count,setCount]=useState(0);

    function increment(){
        setCount(count+1);
    }

    function decrement(){
        setCount(count-1);
    }

    function reset(){
        setCount(0);
    }
    return (
        <div>
            <h1>Count:{count} </h1>

            <button onClick={increment}>
                Increase
            </button>

            <button onClick={decrement}>
                Decrease
            </button>

            <button onClick={reset}>
                Reset
            </button>
        </div>
    )
}

export default Counter;