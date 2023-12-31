import React from 'react'
import './KeralaTourism.css'
import { BsAlignBottom, BsFillCaretRightFill} from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { FaSearch } from 'react-icons/fa';

function KeralaTourism() {
  const visits = (ab)=>{
   let a =1;
  }

  const courselArray=[{img:'https://www.keralatourism.org/images/banner/medium_desktop/icpc-1920.jpg'}, 
  {img:'https://www.keralatourism.org/images/banner/medium_desktop/kuttanadu-1920x6501.jpg'},
  {img:'https://www.keralatourism.org/images/banner/medium_desktop/malabar_river_festival-1920x650.jpg'},
  {img:'https://www.keralatourism.org/images/banner/medium_desktop/destination-wedding-1920.jpg'}]

  const cardArray1=[{img:'https://www.keralatourism.org/images/homecontentimage/desktop/monsoon3.jpg'},
  {img:'https://www.keralatourism.org/images/homecontentimage/desktop/Wild_life.jpg'},
{img:'https://www.keralatourism.org/images/homecontentimage/desktop/cusine4.jpg'},
{img:'https://www.keralatourism.org/images/homecontentimage/desktop/kathakali1.jpg'}]


const destination=[{img:'https://www.keralatourism.org/images/homecontentimage/desktop/padmanabhaswami.jpg'},
{img:'https://www.keralatourism.org/images/homecontentimage/desktop/Veli_Tourist_Village.jpg'},
{img:'https://www.keralatourism.org/images/homecontentimage/desktop/Munroe_Island-04.jpg'},
{img:'https://www.keralatourism.org/images/homecontentimage/desktop/agasthyakoodam-011.jpg'},
]

const destination2=[{img:'https://www.keralatourism.org/images/homecontentimage/desktop/palaruvi-04.jpg'},
{img:'https://www.keralatourism.org/images/homecontentimage/desktop/Payyambalam_Beach-021.jpg'},
{img:'https://www.keralatourism.org/images/homecontentimage/desktop/Chimmini_Wildlife_Sanctuary_2.jpg'},
{img:'https://www.keralatourism.org/images/homecontentimage/desktop/Krishnapuram_Palace_2.jpg'}]


  return (
    <div>
      <nav className='topNav'><p>Visit since 1 April 2023 <BsFillCaretRightFill/>{visits} 10191</p>
      <span><label id='toplabel1' htmlFor="">English</label></span>
      <span><label id='toplabel2' htmlFor="">Language </label></span>
      </nav>
 
      <nav className='nav1'>
        <span>
        <img src="https://www.keralatourism.org/images/kt/kerala-tourism-title.png?d=18122017" alt="Kerala Tourism" style={{width:'200px', display:'flex', paddingTop:'10px', paddingBottom:'10px', paddingRight:'10px', paddingLeft:'10px'}} />

        </span>
        <span className='tab1'>
            <a className='navfond' href="#action1">EXPERIENCE KERALA</a>
            <a className='navfond' href="#action2">WHERE TO GO</a>
            <a className='navfond' href="#action1">WHERE TO STAY</a>
            <a className='navfond' href="#action1">THINGS TO DO</a>
            <a className='navfond' href="#action2">PLAN YOUR TRIP</a>
            <a className='navfond' href="#action1">TRAVEL CARE</a>
            <a className='navfond' href="#action2">E BROCHURES</a>
            <a className='navfond' href="#action2">E NEWSLETTER</a>
            <a className='navfond' href="#"><FaSearch style={{color:"white",  alignItems:'center'}}/></a>
          
        </span>
      </nav>
   
       {/* <Navbar expand="lg" style={{backgroundColor:'darkblue',paddingTop:'0px' }}>
       <img src="https://www.keralatourism.org/images/kt/kerala-tourism-title.png?d=18122017" alt="Kerala Tourism" style={{width:'200px', display:'flex', paddingTop:'10px', paddingBottom:'10px', paddingRight:'10px', paddingLeft:'10px'}} />
      <Container fluid >
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <aNavbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 nav1" style={{maxHeight: '75px', paddingTop:'50px', paddingRight:'3px'}}>
            <Nav.Link className='navfond' href="#action1">EXPERIENCE KERALA</Nav.Link>
            <Nav.Link className='navfond' href="#action2">WHERE TO GO</Nav.Link>
            <Nav.Link className='navfond' href="#action1">WHERE TO STAY</Nav.Link>
            <Nav.Link className='navfond' href="#action1">THINGS TO DO</Nav.Link>
            <Nav.Link className='navfond' href="#action2">PLAN YOUR TRIP</Nav.Link>
            <Nav.Link className='navfond' href="#action1">TRAVEL CARE</Nav.Link>
            <Nav.Link className='navfond' href="#action2">E BROCHURES</Nav.Link>
            <Nav.Link className='navfond' href="#action2">E NEWSLETTER</Nav.Link>
             
            <Nav.Link href="#" disabled style={{paddingBottom:'10px'}}>
            <FaSearch style={{color:"white",  alignItems:'center'}}/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}


    <Carousel fade>
    {courselArray.map((thi)=>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={thi.img}
          alt="First slide"
        />
      </Carousel.Item>
      )}
    </Carousel>

    <nav>
      <h3 style={{paddingTop:'25px', paddingBottom:'25px', color:'darkblue'}}>Experience Kerala</h3>
    </nav>
    <div>
      <nav>
      <CardGroup style={{paddingRight:'100px', paddingLeft:'100px'}}>
        {cardArray1.map((thi)=>
          <Card>
            <Card.Img variant="top" src={thi.img} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
         )} 
        
      </CardGroup>
      </nav>
    </div>
    <div>
      <nav><h1>Top Destnations</h1></nav>
      <nav>
        <CardGroup>
      {destination.map((dis)=>
        <Card>
        
          <Card.Img variant="top" src={dis.img} />
          <Card.Body>
            
            <Card.Title>Card title</Card.Title>
            
          </Card.Body>
          
        </Card>
        )}
      </CardGroup>

      <CardGroup>
      {destination2.map((dis)=>
        <Card>
        
          <Card.Img variant="top" src={dis.img} />
          <Card.Body>
            
            <Card.Title>Card title</Card.Title>
            
          </Card.Body>
          
        </Card>
        )}
      </CardGroup>
      </nav>
    </div>

 
    </div>
  )
}

export default KeralaTourism