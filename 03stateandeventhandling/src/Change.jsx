// in this file practice a onChange event handling

import { useState } from "react";

function Change(){
    const [name,setName]=useState("");

    function handleOnChange(event){
        setName(event.target.value);
    }

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={handleOnChange}/>

            <h2>{name}</h2>
        </div>
    )
}

export default Change;