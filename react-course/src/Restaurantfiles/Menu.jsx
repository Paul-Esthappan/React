import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Menu() {

    const [apidata, setapidata] = useState([])
    useEffect(() => {
      axios.get('https://fakestoreapi.com/products/1').then((display)=>
      setapidata(display))
      
    }, [])
    console.log(apidata)


  return (
    <div>
        <p>Hi</p>


    </div>
  )
}

export default Menu