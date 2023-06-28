import React, { useState } from 'react'


function ToggleTask() {
    const [first, setfirst] = useState(1)
  return (
    <div style={{textAlign:'center'}}>
        <h1 style={{textAlign:'center'}}>{(first==1? "You are awsome":"Click Again")}</h1>
        <button onClick={first==1?()=>setfirst(0):()=>setfirst(1)}>Click</button>
    </div>
  )
}

export default ToggleTask