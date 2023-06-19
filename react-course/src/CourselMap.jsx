import React from 'react'
import { Carousel } from 'react-bootstrap'

function CourselMap() {
    const arr=[{name:"Rose", colour: "red", img:"https://wonderfulengineering.com/wp-content/uploads/2016/02/Rose-Wallpaper-8.jpg" }, 
    {name:"Lavander", colour:"purpul", img:"https://www.gardeningknowhow.com/wp-content/uploads/2021/07/blooming-lavender-flowers.jpg"},
    {name:"Jasmin", colour:"pearl", img:"https://www.gardeningknowhow.com/wp-content/uploads/2021/07/blooming-lavender-flowers.jpg"}]
  return (
    <div>
        
    <Carousel>
        {arr.map((thi)=>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={thi.img}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{thi.name}</h3>
          <p>{thi.colour}</p>
        </Carousel.Caption>
      </Carousel.Item>
       )}
      </Carousel>
     
    </div>
  )
}

export default CourselMap