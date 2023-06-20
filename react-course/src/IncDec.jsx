import React, { useState } from 'react'
// usestate hook topic
function IncDec() {
    
    const [first, setfirst] = useState(0)
    const add = ()=>{setfirst(()=>first+1)
        // setfirst(()=>first+1)
        // setfirst(oldvalue=>oldvalue+1)
        // setfirst(oldvalue=>oldvalue+1)
        console.log("exe")

    }
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
        <button onClick={add}>Add Value</button>
        <button onClick={dec}>Dec Value</button>
    </div>
  )
}


export default IncDec