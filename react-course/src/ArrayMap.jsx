import React from 'react'

function ArrayMap() {
    const emp = [{name: "Tom", Age: 20}, {name: "Ron", Age :40}]

  return (
        emp.map((dis)=>
    <div>
        <h2>name: {dis.name} - Age: {dis.Age} <br/></h2>
    </div>
  ))
}

export default ArrayMap