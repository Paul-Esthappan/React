import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
// import axios from 'axios'


function Menu() {

  const selectedMenu = useNavigate()


  const menu1=()=>{
    selectedMenu("./Starters")
  }


    // const [apidata, setapidata] = useState([])
    // useEffect(() => {
    //   axios.get('https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser').then((display)=>
    //   setapidata(display))
      
    // }, [])
    // console.log(apidata)


  return (
    <div className="d-grid gap-2">
      <Button variant="outline-primary" size="lg" on onClick={menu1}>Starters</Button>{' '}
      <Button variant="outline-secondary" size="lg">Soups</Button>{' '}
      <Button variant="outline-success" size="lg">Continental</Button>{' '}
      <Button variant="outline-warning" size="lg">Arabic</Button>{' '}
      <Button variant="outline-danger" size="lg">Grills and BBQ</Button>{' '}
      <Button variant="outline-info" size="lg">Juice and icecream</Button>{' '}
      <Button variant="outline-light" size="lg">Tea & snack's</Button>{' '}
      <Button variant="outline-dark"size="lg">Chatts</Button>


    </div>
  )
}

export default Menu