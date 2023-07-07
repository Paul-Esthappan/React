import React from 'react'
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Starters() {
  return (
    <div>
        <h1>Starters</h1>
        <div style={{display:'flex', flexDirection:'row', padding:'5px'}}>
        <Card style={{ width: '18rem', margin:'5px' }}>
        <Card.Img variant="top" src="https://i.ndtvimg.com/i/2018-01/kakori-kebab_620x330_41514982101.jpg" style={{height:'180px'}}/>
        <Card.Body>
          <Card.Title>Kakori kebabs</Card.Title>
          <Card.Text>
          The ultimate king of kebabs, kakori kebabs are said to be originated in the land of nawabs, Lucknow. Juicy and succulent, kakori kebabs are best paired with the refreshing mint chutney. Spruce up these mutton kebabs with onion rings, lemon juice, chaat masala and some coriander leaves on the side. Kakori kebabs are sure to help you have an impressive start!
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem', margin:'5px' }}>
        <Card.Img variant="top" src="https://i.ndtvimg.com/i/2017-12/paneer-tikka_650x400_61512457125.jpg" style={{height:'180px'}} />
        <Card.Body>
          <Card.Title>Microwave paneer tikka</Card.Title>
          <Card.Text>
          Who said you need a tandoor to relish flavourful paneer tikkas? All you need is paneer, a few spices and a microwave to prepare this stellar dish of microwave paneer tikka. Ginger-garlic paste, chaat masala, chilli powder, black pepper powder and vinegar mixed with yogurt, laced on to paneer cubes, marinated to perfection and cooked in a microwave.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      </div>
    </div>
  )
}

export default Starters