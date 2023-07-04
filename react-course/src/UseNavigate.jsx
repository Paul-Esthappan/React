import React from 'react'
import { useNavigate } from 'react-router-dom'

function UseNavigate() {
    const navg = useNavigate()

    const navfun=()=>{
        navg("ToggleTask")
    }

  return (
    <div>
        <button onClick={navfun}>UseNavigate Function</button>
    </div>
  )
}

export default UseNavigate