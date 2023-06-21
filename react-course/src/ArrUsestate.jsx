import React, { useState } from 'react'

function ArrUsestate() {
    const arr=[{name:"tom", age:24}, {name:"don", age:20}]
    const [first, setfirst] = useState({name:"john", age:11})
    const abc=()=>{
                    setfirst({...first,name:"Rahul"})
                }
    
  return (
    <div>
        {arr.map((thi)=>
        <p>{thi.name}-{thi.age}</p>
        )}
        <p>{first.name}-{first.age}</p>
        <button onClick={abc}>Click</button>

    </div>
  )
}

export default ArrUsestate