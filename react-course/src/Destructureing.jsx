import React from 'react'

function Destructureing() {

    const emp={name:"tom", age:40}
    const {name, age} = emp
    console.log(name,age)
    
  return (
    <div>Destructureing</div>
  )
}

export default Destructureing