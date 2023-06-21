import React from 'react'
import Pro from './PropsLink'
import Pro2 from './PropsLink2'


function Props() {

    const arr=[{name:"Tom", age:14}, {name:"ron", age:11}]
    const obj={name:"Kevin", age:25}
    const arry1=[{name:"Rakavan", age:34}, {name:"Soman", age:35}]
    const obji1={name:"Eldho", age:42}
  return (

    <div>
        <Pro obj1={obj} arr1={arr}  />
        <Pro2 arry2={arry1} obji2 = {obji1}/>
    
    </div>
  )
}

export default Props