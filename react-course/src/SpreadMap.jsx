import React from 'react'

function SpreadMap() {
    const arr1 = [{name: "john", age:20},{name: "ron" ,age:22}]
    const arr2=[...arr1,{name:"thomas", age :44}]
    console.log(arr2)
  return (
    <div>SpreadMap</div>
  )
}

export default SpreadMap