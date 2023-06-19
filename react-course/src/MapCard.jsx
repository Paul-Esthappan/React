import React from 'react'
import { Button, Card } from 'react-bootstrap'

function MapCard() {
    const arr=[{name:"Rose", colour: "red", img:"https://wonderfulengineering.com/wp-content/uploads/2016/02/Rose-Wallpaper-8.jpg" }, 
    {name:"Lavander", colour:"purpul", img:"https://www.gardeningknowhow.com/wp-content/uploads/2021/07/blooming-lavender-flowers.jpg"},
    {name:"Jasmin", colour:"pearl", img:"https://www.gardeningknowhow.com/wp-content/uploads/2021/07/blooming-lavender-flowers.jpg"}]
  return (

    <div> 
       
        <Card style={{ width: '18rem' }}>
        {arr.map((thi)=>
        <div>
      <Card.Img variant="top" src={thi.img} />
      <Card.Body>
        <Card.Title>{thi.name}</Card.Title>
        <Card.Text>
          {thi.colour}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      </div>
)}
    </Card>
    
    </div>
  )
}

export default MapCard