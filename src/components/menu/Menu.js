import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "./menu.css";
function Menu() {
  return (
    <Container className="menu-container">
      <h2 className="head-menu"> Our Menu</h2>

      <Row>
        <Col sm={4}>
          <img src="images/menu1.png" alt="" />
          <br />
          <p>
            Spicy Salad <br /> $12.99 <br /> Satisfy Your Sweet Tooth with Our
            Desserts
          </p>
        </Col>

        <Col sm={4}>
          <img src="/images/menu2.jpeg" alt="" />
          <br />{" "}
          <p>
            Sweet and sour Salad <br /> $14.99 <br /> Satisfy Your Sweet Tooth
            with Our Desserts
          </p>
        </Col>

        <Col sm={4}>
          <img src="/images/menu3.jpeg" alt="" /> <br />{" "}
          <p>
            Greek Salad <br /> $15.99 <br /> Satisfy Your Sweet Tooth with Our
            Desserts
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Menu;
