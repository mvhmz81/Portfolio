import profilePic from "../image-logos/profilePic.jpg";
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Banner = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [loop, setLoop] = useState(0);
  const [isDeleted, setIsDeleted] = useState(false);
  const toRotate = ["Mukti Zavery"];
  const [text, setText] = useState("");
  const [speed, setSpeed] = useState(300 - Math.random() * 100);

  useEffect(() => {
    const timer = setInterval(() => {
      time();
    }, speed);

    return () => {
      clearInterval(timer);
    };
  }, [text, speed]);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const time = () => {
    let i = loop % toRotate.length;
    let fulltext = toRotate[i];
    let updatedText = isDeleted
      ? fulltext.substring(0, text.length - 1)
      : fulltext.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleted && updatedText === fulltext) {
      setIsDeleted(true);
      setSpeed(500);
    } else if (isDeleted && updatedText === "") {
      setIsDeleted(false);
      setLoop(loop + 1);
      setSpeed(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div className="profile-card">
              <div className="profile-img">
                <img src={profilePic} alt="Profile Img" />
              </div>
              <div className="profile-content">
                <h2 className="title">
                  Mukti Zavery
                  <span>Software Developer</span>
                </h2>
              </div>
            </div>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <div className="about">
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
              <button
                className={
                  activeLink === "contact"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Let's Connect <ArrowRightCircle size={25} />
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
