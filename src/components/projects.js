import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import frumo from "../image-logos/frumo.png";
import cocktail from "../image-logos/cocktail.png";

export const Projects = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <section className="projects" id="projects">
      <Container>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item interval={2000}>
            <Row className="justify-content-md-center">
              <Col xs={12} md={7}>
                <img className="d-block w-100" src={frumo} alt="first slide" />
              </Col>
              <Col xs={12} md={5}>
                <Carousel.Caption style={{ backgroundColor: "black" }}>
                  <h3>Frumo.co.uk</h3>
                  <p>
                    Get the app that makes managing your money fun and easy.
                    Frumo's gamified tools help you set and achieve personal
                    goals, while providing helpful resources for money
                    decisions.
                  </p>
                  <p>Tech Stack - Next.js, Supabase</p>
                </Carousel.Caption>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <Row className="justify-content-md-center">
              <Col xs={12} md={7}>
                <img
                  className="d-block w-100 h-100"
                  src={cocktail}
                  alt="Second slide"
                />
              </Col>
              <Col xs={12} md={5}>
                <Carousel.Caption style={{ backgroundColor: "black" }}>
                  <h3>Cocktail Builder</h3>
                  <p>
                    When in doubt utilize this app to search for cocktails by
                    name or even ingredients in the fridge
                  </p>
                  <p>Tech Stack - React, CSS</p>
                </Carousel.Caption>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
  );
};
