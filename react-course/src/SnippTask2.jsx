import React, { useState } from 'react'
import './SnippeTex.css'

function SnippTask2() {
  const [first, setfirst] = useState("Black")
  return (
  <div>
      <h1  style={{color:first}}>Selected color is {first}</h1>
      <button onClick={()=>setfirst("red")}  id='button1'>Red</button>
      <button onClick={()=>setfirst("blue")} id='button2'>Blue</button>
      <button onClick={()=>setfirst("green")} id='button3'>Green</button>
      <button onClick={()=>setfirst("yellow")} id='button4'>Yellow</button>
  </div>
)
}

export default SnippTask2