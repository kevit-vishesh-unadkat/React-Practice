// Component Returning Javascript Extention 

import React from 'react'

const Student = () => {

    const name="vishesh";
    const age=21;

  return (
    <div>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <p>next year age: {age+1}</p>
    </div>
  )
}

export default Student
