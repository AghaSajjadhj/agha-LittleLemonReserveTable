import React from "react";
import "./navbar.css";
import { Container, Row, Col } from "react-grid-system";
import {NavLink} from "react-router-dom";

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
      <NavLink to="/home">Home</NavLink>
    </li>
    <li>
      <NavLink to="/about">About</NavLink>
    </li>
    <li>
      <NavLink to="/menu">Menu</NavLink>
    </li>
    <li>
      <NavLink to="/form">Reservation</NavLink>
    </li>
    <li>
      <NavLink to="/order">Order Online</NavLink>
    </li>

    <li>
      <NavLink to="/contact">Contact</NavLink>
    </li>
    <li>
      <NavLink to="/login">Login</NavLink>
    </li>
  </ul>
</Col>
</Row>
    </Container>
  )
}

export default Navbar;






