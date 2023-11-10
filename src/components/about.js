import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import science from "../image-logos/science.svg";
import teacher from "../image-logos/teacher.svg";
import woman from "../image-logos/woman.svg";

export const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row>
          <Col md={8} className="aboutDescription">
            <div className="about-me-section">
              <h1 style={{ fontSize: "2.6em" }}>Hey, I'm Mukti Zavery!</h1>
              <p className="home-about-body">
                Former chemist turned <b>passionate Software Developer</b> based
                in Leicester, UK.
                <br />
                <br />
                I've dabbled in:
                <ul>
                  <li>Javascript</li>
                  <li>Python</li>
                  <li>SQL</li>
                  <li>Machine Learning</li>
                  <li>Bug Fixing</li>
                </ul>
                Now, I'm all about:
                <br />
                <b>React.js, Bootstrap,</b> and crafting innovative{" "}
                <b>Web Products</b>.
                <br />
                Let's chat about <b>opportunities</b> and create something
                awesome!
              </p>
            </div>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <div className="image-container">
                <img src={science} className="science" alt="avatar" />
                <img src={teacher} className="teacher" alt="avatar" />
                <img src={woman} className="woman" alt="avatar" />
              </div>
              <img src={woman} className="woman" alt="avatar" />
              <a href="https://storyset.com/work">
                Work illustrations by Storyset
              </a>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>
              Find me on the links in the nav or use the contact form below to
              discuss any opportunities
            </h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
