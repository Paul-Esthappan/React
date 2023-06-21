import React, { useState } from 'react'

function Tablearray() {

    const [Cars, setCars] = useState([{name:"bmw", colour:"black"},{name:"Tata", colour:"red"}])
    const arr=[{name:"Honda", colour:"Blue"},{name:"Benz", colour:"Yellow"}]

    const addCar=()=>{
        
        setCars([...Cars,...arr])
    }

  return (
    <div>
        <th>Car</th>
        <th>Colour</th>
        {Cars.map((dis)=>
        <tr>
            <td>{dis.name}</td>
            <td>{dis.colour}</td>
        </tr>
    
        )}
        <button onClick={addCar}>Click</button>
    </div>
  )
}

export default Tablearray