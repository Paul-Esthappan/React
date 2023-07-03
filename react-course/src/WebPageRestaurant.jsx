import React from 'react'
import NavScrollExample from './Restaurantfiles/NavScrollExample'
import CarouselFadeExample from './Restaurantfiles/CarouselFadeExample'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
document.title=`Kitch-ano`



function WebPageRestaurant() {
  return (
    <div>
        <NavScrollExample/>
        <CarouselFadeExample/>
       

    
    </div>
  )
}

export default WebPageRestaurant