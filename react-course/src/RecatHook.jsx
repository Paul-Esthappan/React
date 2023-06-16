import React, { useState } from 'react'

function RecatHook() {

    const [first, setfirst] = useState("Tom")

  return (
    <div>
        <h1>
            You can call me {first}
        </h1>
        <button onClick={()=>setfirst("Ron")}>Click me</button>
    </div>
  )
}

export default RecatHook