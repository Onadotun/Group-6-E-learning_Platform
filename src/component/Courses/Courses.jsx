import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assets/images/web-development.png";
import courseImg2 from "../../assets/images/make-up.jpg";
import courseImg3 from "../../assets/images/watercolor.jpg";

const Courses = () => {
  const courseItemStyle = {
    textAlign: "center",
    marginBottom: "20px",
  };

  const courseImageStyle = {
    width: "100%",
    maxWidth: "300px",
    height: "auto",
    margin: "0 auto",
  };

  return (
    <section className="courses">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Courses</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  consequatur libero quod voluptatibus ullam quia quas, vitae
                  voluptatem recusandae reprehenderit!
                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn">See All</button>
              </div>
            </div>
          </Col>
          <Col lg="4" md="6" sm="12">
            <div className="course__item" style={courseItemStyle}>
              <img
                src={courseImg1}
                alt="Web Development"
                style={courseImageStyle}
              />
              <h4>Web Development</h4>
            </div>
          </Col>
          <Col lg="4" md="6" sm="12">
            <div className="course__item" style={courseItemStyle}>
              <img src={courseImg2} alt="Make-up" style={courseImageStyle} />
              <h4>Make-up</h4>
            </div>
          </Col>
          <Col lg="4" md="6" sm="12">
            <div className="course__item" style={courseItemStyle}>
              <img
                src={courseImg3}
                alt="Watercolor Painting"
                style={courseImageStyle}
              />
              <h4>Watercolor Painting</h4>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
