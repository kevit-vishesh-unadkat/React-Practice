// Hndling form validation 

import { useState } from "react";

function MyForm(){
    const [inputValue,setInputValue]=useState('');
    const [inputError,setInputError]=useState(null);

    function handleInputChange(event){
        const value=event.target.value;
        setInputValue(value);

        if(value.length<5)
        {
            setInputError("Input must be a least 5 character");
        }
        else{
            setInputError(null);
        }
    }

    function handleSubmit(event){
        event.preventDefault();
        if(inputValue.length>=5){
            //submit the form
            alert("form is submited successfully");
        }
        else{
            setInputError("input must be at least 5 character");
        }
    }
    return (
    <form onSubmit={handleSubmit}>
      <label>
        Fruit:
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </label>
      {inputError && <div style={{ color: 'red' }}>{inputError}</div>}
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;