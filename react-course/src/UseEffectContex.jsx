import React, { useEffect, useState } from 'react'


function UseEffectContex() {
    const [count, setcount] = useState(0);
    useEffect(() => {
      document.title = `you clicked ${count}`;
    
    }, [])
    

  return (
    <div>
        <p>You Clicked {count} times</p>
        <button onClick={()=>setcount(count+1)}>Click</button>
    </div>
  )
}

export default UseEffectContex