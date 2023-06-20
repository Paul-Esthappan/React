import React, { useState } from 'react'


function IncDec2() {
    

    const [value1, setValue1] = useState(()=>{
        console.log("executed")
        return 0});

    
    const add=()=>{
        setValue1(oldvalue=>oldvalue+1)
    }
    const sub=()=>{
        if(value1>0)
        setValue1(oldvalue=>oldvalue-1)
        else
        alert("Error")
    }
    

  return (
    <div>

    <button onClick={add}>Add</button>
    <h1>{value1}</h1>
    <button onClick={sub}>Sub</button>
    </div>
  )
}

export default IncDec2