import React from "react";
import "./HeroSection.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assets/images/hero-img1.png";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row className="justify-content-center">
          <Col lg="6" md="6" className="hero">
            <div className="hero__content">
              <h2 id="home" style={{ color: "#3659d5" }}>
                Home{" "}
              </h2>

              <h6 className="mb-4 hero__title">
                Anytime Anywhere Learn on your Suitable Schedule
              </h6>
              <p className="mb-5">
                "Beyond technical skills: Courses that help you excel in
                communication, time management, and customer relationships,
                leading to greater success."
              </p>
            </div>
            <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn" style={{ background: "#3659D5" }}>
                Search
              </button>
            </div>
          </Col>
          <Col lg="6" md="6" className="hero__img-container">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
