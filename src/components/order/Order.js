import React from 'react'
import "./order.css";
import { Container,Row,Col } from 'react-grid-system';
function Order() {
  return (
   <Container>

   <Row className='order-container'>
   <Col sm={4}>  
   <h3>Select Catagory</h3>
    <select name="" id="">
      <option value=""> Italian Food </option>
      <option value="">Maxican Food </option>
      <option value="">Chinese Food</option>
      <option value="">Salad </option>
      <option value="">Spicy Food</option>
    
    </select>
</Col>


   <Col sm={4}>  
   <h3>Order your Italian food here</h3>
    <select name="" id="">
      <option value="">Capricciosa Pizza </option>
      <option value="">Cornetto </option>
      <option value="">Pierogi</option>
      <option value="">Ramen </option>
      <option value="">Paella </option>
      <option value="">Moussaka</option>
      <option value="">Boeuf Bourgignon </option>
      <option value="">Eisbein</option>
    </select>
</Col>
   
   <Col sm={4}>
      <img className='order-img' src="/images/order.jpg" alt="" />
</Col>

</Row>

</Container>
  )
}

export default Order;
