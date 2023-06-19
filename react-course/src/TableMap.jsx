import React from 'react'
import { Row } from 'react-bootstrap'

function TableMap() {
    const arr=[{name: "Tom", age: 24, education: "Bcom"},
    {name: "Ron", age: 26, education: "Mcom"},
    {name: "John", age: 29, education: "MCA"},
    {name: "Shone", age: 20, education: "BCA"}
]
  return (
    <div>
        <table>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Education</th>
            </tr>
            {arr.map((thi)=>
            <tr>
                <td>{thi.name}</td>
                <td>{thi.age}</td>
                <td>{thi.education}</td>
            </tr>
            )}
        </table>
    </div>
  )
}

export default TableMap