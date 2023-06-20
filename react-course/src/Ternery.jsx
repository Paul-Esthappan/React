import React, { useState } from 'react'
import IncDec from './IncDec'

function Ternery() {
    const [first, setfirst] = useState(false)
    const show=()=>{
        setfirst((thi)=>! thi)
    }
  return (
    <div>
        {first? <IncDec/>:""}
        <button onClick={show}>{first? "Hide":"Show"}</button>
    </div>
  )
}

export default Ternery