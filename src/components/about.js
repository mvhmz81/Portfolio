import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import science from "../image-logos/science.svg";
import teacher from "../image-logos/Teacher.svg";
import woman from "../image-logos/woman.svg";

export const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row>
          <Col md={8} className="aboutDescription">
            <h1 style={{ fontSize: "2.6em" }}>
              Let me tell you <span className="highlight-text">MY STORY </span>{" "}
            </h1>
            <p className="home-about-body" style={{ fontSize: "1.2em" }}>
              Hi there! I'm still{" "}
              <span className="highlight-text">Mukti Zavery</span>, originally
              from the vibrant city of{" "}
              <span className="highlight-text">Leicester</span>, UK.
              <br />
              <br />
              My journey into the world of technology began when I transitioned
              from being an{" "}
              <span className="highlight-text">
                Analytical Chemist
              </span> and <span className="highlight-text">Teacher</span> to a{" "}
              <span className="highlight-text-1" style={{ fontWeight: "bold" }}>
                Software Developer
              </span>
              . Since August 2022, I've immersed myself in learning from leading
              organizations such as{" "}
              <span className="highlight-text">Code First Girls </span>
              and <span className="highlight-text">The School Of Code</span>,
              honing my skills in:
              <br />
              <ul>
                <li>Javascript</li>
                <li>Introductory Python</li>
                <li>SQL</li>
                <li>
                  Introduction to Machine Learning (Secured Second Place in a
                  Code First Girls Challenge)
                </li>
                <li>Bug Fixing</li>
              </ul>
              I'm on a continuous journey of growth.
              <br />
              <br />
              As a <span className="highlight-text">developer</span>, I thrive
              on tackling challenges and expanding my skillset. I actively
              participate in hackathons, dive into documentation, and attend
              seminars. My passion lies in working with modern Javascript
              libraries and frameworks like{" "}
              <span className="highlight-text">React.js and Bootstrap</span>.
              <br />
              <br />
              Beyond coding, I'm fascinated by building innovative{" "}
              <span className="highlight-text">
                Web Technologies and Products
              </span>
              . Additionally, I'm exploring the intriguing realm of{" "}
              <span className="highlight-text">Artificial Intelligence</span>.
            </p>
            <br />
            <p style={{ fontSize: "1.6em" }}>
              "Explore my world through the links in the{" "}
              <span className="highlight-text">navigation bar</span>, or dive
              right into the conversation using the{" "}
              <span className="highlight-text">contact form</span> below! I'm
              all ears for exciting opportunities and collaborations."
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <div className="image-container">
                <img src={science} className="science" alt="avatar" />
                <img src={teacher} className="teacher" alt="avatar" />
                <img src={woman} className="woman" alt="avatar" />
                <br />
                <a href="https://storyset.com/work">
                  Work illustrations by Storyset
                </a>
              </div>
            </Tilt>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
