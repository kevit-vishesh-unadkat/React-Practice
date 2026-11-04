// Focus An Input Eelment
// practical of useref

import {useRef} from 'react'


function FocusInput(){
    const inputRef=useRef(null);

    const handleFocus=()=>{
        inputRef.current.focus();
    };

    return(
        <div>
            <input 
                ref={inputRef}
                type="text"
                placeholder="Enter your name"/>
            <button onClick={handleFocus}>
                Focus Input
            </button>
        </div>
    )
}

export default FocusInput;