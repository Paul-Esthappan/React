import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Api() {

    const [first, setfirst] = useState([])

    useEffect(() => {
        axios.get('https://dummyjson.com/products').then((display)=>
        
        {
            setfirst(display.data.products)
            console.log(display.data.products)
        }
        
        )
    }, [])
    

    

  return (
    <div>
        {
            first.map((dis)=>(
                <p style={{fontSize:'8px'}}>{dis.title} - {dis.description}</p>
                
             ) )
        }
        
    </div>
  )
}

export default Api