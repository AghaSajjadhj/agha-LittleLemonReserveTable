import React from "react";
import "./main.css";
import { Container, Row, Col } from "react-grid-system";
// import { Form } from "formik";
// import {Link, Route, Routes} from 'react-router-dom';

function Main() {
  return (
    <Container className="main-container">
      {/*This is a Row one */}
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
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Menu</a>
            </li>
            <li>
              <a className="nav-reserve">Reservation</a>
            </li>
            <li>
              <a>Order Online</a>
            </li>

            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>Login</a>
            </li>
          </ul>
        </Col>
      </Row>

      {/*This is a Row Two */}
      <Row className="row-two">
        <Col lg={6}>
          <h1>
            Little Lemon <br />
            Chicago
          </h1>
          <p>
            We are a family owned
            <br />
            Mediterraneran resturant, <br />
            focused on traditional reciepies <br />
            served with a modern twist.
          </p>
          <br />
          <button className='btn1' >Reserve a table</button> <br/><br/>
         
        </Col>

        <Col lg={6}>
          <img src="images\dish.jpg" />
        </Col>
      </Row>
    </Container> 
  );
}

export default Main;
