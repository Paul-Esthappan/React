import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Starters() {
  return (
    <div>
        <h1>Starters</h1>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://img.taste.com.au/RhosJEon/w720-h480-cfill-q80/taste/2016/11/roasted-stuffed-mushrooms-80629-1.jpeg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Starters