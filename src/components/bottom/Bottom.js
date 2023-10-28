import React from 'react';
import { Container,Row,Col } from 'react-grid-system';
import './bottom.css';

function Bottom() {
  return (
    
    <Container className='container'> 
    <Row>
    <Col sm={2}>
        <img  src="images\small_logo.png" alt="" />
    </Col>
    <Col sm={8}>
    
             
                
              
                      <h3>Document Navigation</h3>
                  <ul>
                      <li>Home</li>
                      <li>About</li>
                      <li>Menu</li>
                      <li>Reservations</li>
                      <li>Order Online</li>
                      <li>Login</li>
                  </ul>
                 <br />
                  
                      <h3>Contact</h3>
                  <ul>
                      <li>Address</li>
                      <li>Phone Number</li>
                      <li>Email</li>
                  </ul>
              
                 
                      <h3>Social Media Links</h3>
                  <ul>
                      <li>Address</li>
                      <li>Phone Number</li>
                      <li>Email</li>
                  </ul>
               
                
              
    </Col>
        <Col sm={2}>
       
        <img className='social-img' src="images\fb.png" alt="" />
        <img className='social-img' src="images\twitter.png" alt="" />
        <img className='social-img' src="images\instagram.png" alt="" />
        <img className='social-img' src="images\youtube.png" alt="" />
        </Col>
    </Row>
   </Container>
      
    
  )
}

export default Bottom;
