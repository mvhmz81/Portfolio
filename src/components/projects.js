import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import frumo from "../image-logos/frumo.png";
import cocktail from "../image-logos/cocktail.png";
import portfolio from "../image-logos/portfolio.png";

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
            <Row className="justify-content-center">
              <Col xs={12} md={7} className="carousel-column">
                <a href="https://frumo.co.uk">
                  <img
                    className="d-block w-100"
                    src={frumo}
                    alt="first slide"
                  />
                </a>
              </Col>
              <Col xs={12} md={5} className="carousel-column ">
                <Carousel.Caption
                  style={{ backgroundColor: "black" }}
                  className="carousel-caption"
                >
                  <h3>Frumo.co.uk</h3>
                  <p>
                    Get the app that makes managing your money fun and easy.
                    Frumo's gamified tools help you set and achieve personal
                    goals, while providing helpful resources for money
                    decisions.
                    <br />
                    <span className="highlight-text">
                      (click image to website)
                    </span>
                  </p>
                  <p>Tech Stack - Next.js, Supabase</p>
                </Carousel.Caption>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <Row className="justify-content-center">
              <Col xs={12} md={7} className="carousel-column">
                <a href="https://cocktailbuilder.netlify.app">
                  <img
                    className="d-block w-100"
                    src={cocktail}
                    alt="Second slide"
                  />
                </a>
              </Col>
              <Col xs={12} md={5} className="carousel-column">
                <Carousel.Caption
                  style={{ backgroundColor: "black" }}
                  className="carousel-caption"
                >
                  <h3>Cocktail Builder</h3>
                  <p>
                    When in doubt utilize this app to search for cocktails by
                    name or even ingredients in the fridge. (mvp visualise on laptops)
                    <br />
                    <span className="highlight-text">
                      (click image to website)
                    </span>
                  </p>
                  <p>Tech Stack - React, CSS</p>
                </Carousel.Caption>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <Row className="justify-content-center">
              <Col xs={12} md={7} className="carousel-column">
                <a href="https://muktizavery.netlify.com">
                  <img
                    className="d-block w-100"
                    src={portfolio}
                    alt="third slide"
                  />
                </a>
              </Col>
              <Col xs={12} md={5} className="carousel-column">
                <Carousel.Caption
                  style={{ backgroundColor: "black" }}
                  className="carousel-caption"
                >
                  <h3>Portfolio</h3>
                  <p>
                    A break down of who I am and what i represent. Building on
                    my knowledge of react this is the first time I utilised
                    Bootstrap. <br />
                    <span className="highlight-text">
                      (click image to website)
                    </span>
                  </p>
                  <p>Tech Stack - Bootstrap, React</p>
                </Carousel.Caption>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
  );
};
