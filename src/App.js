//https://react-bootstrap.netlify.app/docs/layout/grid/#home//
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function App() {
  return (
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">About</Nav.Link>
              <Nav.Link href="#link">Projects</Nav.Link>
              <Nav.Link href="#home">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Row>
        <Col>
          <img
            src="https://avatars.githubusercontent.com/u/110194915?v=4"
            className="img-fluid"
            alt="Responsive image"
          />
        </Col>
        <Col>
          <h1>About</h1>
          <p> As a scientist</p>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
