import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../image-logos/logo1.jpg";

export const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-light p-3">
        <Container>
          <Row>
            <Col className="footer">
              <img
                src={logo}
                alt="Logo"
                style={{ maxWidth: "100px", marginBottom: "10px" }}
              />
              <p>&copy; 2023 Mukti Zavery | Software Developer</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};
