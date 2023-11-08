import profilePic from "../image-logos/profilePic.jpg";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "bootstrap-icons";
export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={6} md={6} xl={7}>
            <div class="profile-card">
              <div class="profile-img">
                <img src={profilePic} alt="Profile Img" />
              </div>
              <div class="profile-content">
                <h2 class="title">
                  Mukti Zavery
                  <span>Software Developer</span>
                </h2>
              </div>
            </div>
          </Col>

          <Col xs={6} md={6} xl={5}>
            <div class="about">
              <span className="tagline">Welcome to my Portfolio</span>
              <h5>Hi, I'm</h5>
              <h2>{`Mukti Zavery`}</h2>
              <span>
                <a>Software Developer</a>
              </span>
              <p>
                "A problem-solving expert with a sharp critical mind, leading
                and adapting seamlessly. From pharmaceuticals to the classroom,
                now armed with coding skills from the School of Code. Ready to
                bridge science, education, and tech - let's create greatness
                together!"
              </p>
              <button onClick={() => console.log("connect")}>
                Let's Connect<ArrowRightCircle size={25}></ArrowRightCircle>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
