import React from "react";
import "./main.css";
import { Container, Row, Col } from "react-grid-system";
import {Route,Routes, useNavigate } from "react-router-dom";
import { Form } from "formik";

function Main() {
const nevigate = useNavigate();
  return (
    <Container className="main-container">
      
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
          <Routes>
            <Route path="/form/Form" element={<Form/>}/>
          </Routes>
          <button className='btn1' onClick={()=> nevigate('/form') }>Reserve a table</button> 
        
          <br/><br/>
        </Col>

        <Col lg={6}>
          <img src="images\dish.jpg" alt="dishimage"/>
        </Col>
      </Row>
    </Container> 
  );
}

export default Main;
