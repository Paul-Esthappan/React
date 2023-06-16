import React, { useState } from 'react'
import './SnippeTex.css'

function SnippetTex() {
    const [first, setfirst] = useState("Black")
    return (
    <div>
        <h1>Selected color is {first}</h1>
        <button onClick={()=>setfirst("Red")} id='button1'>Red</button>
        <button onClick={()=>setfirst("Blue")} id='button2'>Blue</button>
        <button onClick={()=>setfirst("Green")} id='button3'>Green</button>
        <button onClick={()=>setfirst("Yellow")} id='button4'>Yellow</button>
    </div>
  )
}

export default SnippetTex