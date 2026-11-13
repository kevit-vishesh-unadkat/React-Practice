// practical example of dropdowns and chackbox in controlled component

import { useState } from "react";

function DropDown(){
    const [selectedOption,setSelectedOption]=useState("Option1");
    const handleDropDownChange=(event)=>{
        setSelectedOption(event.target.value);
    };

    return (
        <div>
            <label>
                Select An options:
                <select  value={selectedOption} onChange={handleDropDownChange}>
                <option  value="option1">Option 1</option>
                <option  value="option2">Option 2</option>
                <option  value="option3">Option 3</option>
            </select>
            </label>
            <p>Selected Option : {selectedOption}</p>
        </div>
    );
}

export default DropDown;