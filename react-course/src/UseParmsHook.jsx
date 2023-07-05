import React from 'react'
import { useParams } from 'react-router-dom'

function UseParmsHook() {
    const {username} = useParams()
  return (
    <div>
        <p>Username : {username}</p>
    </div>
  )
}

export default UseParmsHook