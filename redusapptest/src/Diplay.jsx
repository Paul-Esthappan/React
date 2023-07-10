import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { printnum } from './SliceRedux'


function Diplay() {
    const display=useSelector((state)=>state.print.num)
    const dispatch=useDispatch
  return (
    <div>
         <h1>hi</h1>
         <button onClick={()=>dispatch(printnum())}>Mult</button>
         <h1>{display}</h1>
    </div>
  )
}

export default Diplay