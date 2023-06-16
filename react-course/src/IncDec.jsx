import React, { useState } from 'react'
// usestate hook topic
function IncDec() {
    
    const [first, setfirst] = useState(0)
    const dec=()=>{
        if(first<=0)
        {
            alert("error")
        }
        else{
            setfirst(first-1);
        }
    }
  return (
    <div>
        <h1> The Value is {first}</h1>
        <button onClick={()=>setfirst(first+1)}>Add Value</button>
        <button onClick={dec}>Dec Value</button>
    </div>
  )
}


export default IncDec