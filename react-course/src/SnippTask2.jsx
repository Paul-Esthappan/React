import React, { useState } from 'react'
import './SnippeTex.css'

function SnippTask2() {
    
    const colurs=()=>{
        
        setfirst("red")
    }
const [first, setfirst] = useState("Black")
  return (
    <div>
        <h1 id='ab'>Selected color is {first}</h1>
        <button onClick={colurs} id='button1'>Red</button>
        <button onClick={colurs} id='button2'>Blue</button>
        <button onClick={colurs} id='button3'>Green</button>
        <button onClick={colurs} id='button4'>Yellow</button>
    </div>
  )
}

export default SnippTask2