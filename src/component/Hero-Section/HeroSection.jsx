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
              <h2 className="mb-4 hero__title">
                Anytime Anywhere <br /> Learn on your <br /> Suitable Schedule
              </h2>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Aut saepe voluptatum earum delectus <br /> deserunt id iste,
                quas officiis et repellat!
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
