import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "./bottom.css";

function Bottom() {
  return (
    <Container className="container">
      <Row>
        <Col sm={3}>
          <img src="images\small_logo.png" alt="" />
        </Col>

        <Col sm={3}>
          <h3>Sitemap</h3>
          Home <br />
          About <br />
          Menu <br />
          Reservations <br />
          Order Online <br />
          Contact <br />
          Login <br />
        </Col>

        <Col sm={3}>
          <h3>Contact Us</h3>
          678 Pisa Ave, Chicago, IL 60611
          <br />
          (300) 3789027 <br />
          customer@littlelemon.com
        </Col>
        <Col sm={3}>
          <img className="social-img" src="images\fb.png" alt="" />
          <img className="social-img" src="images\twitter.png" alt="" />
          <img className="social-img" src="images\instagram.png" alt="" />
          <img className="social-img" src="images\youtube.png" alt="" />
        </Col>
      </Row>
    </Container>
  );
}

export default Bottom;
