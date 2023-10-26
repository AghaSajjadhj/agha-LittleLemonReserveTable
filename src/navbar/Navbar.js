import React from "react";
import "./navbar.css";
import { Container, Row, Col } from "react-grid-system";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <Container className="main-container">
      
<Row className="row-one">


<Col sm={4}>
  <img
    src="images/littlelemon_logo.png"
    style={{ width: 200, height: 100 }}
  />
</Col>
<Col>
  <ul>
    <li>
      <Link to="/main">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to>Menu</Link>
    </li>
    <li>
      <Link to="/form">Reservation</Link>
    </li>
    <li>
      <Link to>Order Online</Link>
    </li>

    <li>
      <Link to>Contact</Link>
    </li>
    <li>
      <Link to>Login</Link>
    </li>
  </ul>
</Col>
</Row>
    </Container>
  )
}

export default Navbar;






