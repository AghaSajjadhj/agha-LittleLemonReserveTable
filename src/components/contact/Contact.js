import React from 'react'
import "./contact.css";
import { Container,Row,Col } from 'react-grid-system';
function Contact() {
  return (
   <Container>

   <Row className='contact-container'>
   <Col sm={4}>
   
   <h3>Contact Us</h3>
     678 Pisa Ave, Chicago, IL 60611 <br />
(300) 3789027 <br />
For Delivery: (364) 7593833 <br />
customer@littlelemon.com <br />
www.littlelemon.com
</Col>
   
   <Col sm={8}>
      <img className='contact-img' src="/images/contact.jpg" alt="" />
</Col>

</Row>

</Container>
  )
}

export default Contact;
