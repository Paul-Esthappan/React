import React, { useState } from 'react'

function CountUseeffect() {
    const [count, setcount] = useState(0)
    document.title=`${count}`
  return (
    <div>CountUseeffect</div>
  )
}

export default CountUseeffect