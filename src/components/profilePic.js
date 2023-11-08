import profilePic from "../image-logos/profilePic.jpg";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { useState, useEffect } from "react";

export const Banner = () => {
  const [loop, setloop] = useState(0);
  const [isDeleted, setIsDeleted] = useState(false);
  const toRotate = ["Mukti Zavery"];
  const [text, setText] = useState("");
  const [speed, setSpeed] = useState(300 - Math.random() * 100);
  const period = 2000;
  useEffect(() => {
    let timer = setInterval(() => {
      time();
    }, speed);

    return () => {
      clearInterval(timer);
    };
  }, [text]);

  const time = () => {
    let i = loop % toRotate.length;
    let fulltext = toRotate[i];
    let updatedText = isDeleted
      ? fulltext.substring(0, text.length - 1)
      : fulltext.substring(0, text.length + 1);

    setText(updatedText);

    /*if (isDeleted) {
      setSpeed((prevSpeed) => prevSpeed / 2);*/
    if (!isDeleted && updatedText === fulltext) {
      setIsDeleted(true);
      setSpeed(500);
    } else if (isDeleted && updatedText === "") {
      setIsDeleted(false);
      setloop(loop + 1);
      setSpeed(500);
    }
    /*}*/
  };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
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

          <Col xs={12} md={6} xl={5}>
            <div class="about">
              <span className="tagline">Welcome to my Portfolio</span>
              <h5>Hi, I'm</h5>
              <h1>
                <span className="wrap">{text}</span>
              </h1>
              <h3>Software Developer</h3>
              <p>
                "A problem-solving expert with a sharp critical mind, leading
                and adapting seamlessly. From pharmaceuticals to the classroom,
                now armed with coding skills from the School of Code. Ready to
                bridge science, education, and tech - let's create greatness
                together!"
              </p>
              <button onClick={() => console.log("connect")}>
                Let's Connect
                <ArrowRightCircle size={25} />
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
