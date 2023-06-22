import React, { useEffect, useState } from 'react'

function UseEffectHook() {
    const [first, setfirst] = useState("Welcome Home")

    useEffect(() => {
     alert("Welldone")
    }, [first])
    

  return (
    <div>
        <h1>{first}</h1>
        <button onClick={()=>setfirst("You are welcome")}>Click</button>
    </div>
  )
}

export default UseEffectHook