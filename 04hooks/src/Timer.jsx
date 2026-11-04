// Store timer id

import { useReducer, useState ,useRef} from "react";

function Timer(){
    const timerRef=useRef(null);
    const [seconds,setSeconds]=useState(0);

    const startTimer=()=>{
        if(timerRef.current!=null)
            return;

        timerRef.current=setInterval(()=>{
            setSeconds(prev=>prev+1);
        },1000);
    };
    const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  return (
    <div>
      <h2>{seconds}</h2>

      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

export default Timer;