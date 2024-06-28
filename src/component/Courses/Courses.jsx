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

  const videoItemStyle = {
    marginBottom: "20px",
  };

  const iframeStyle = {
    width: "100%",
    height: "auto",
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
                <button className="btn" style={{ background: "#3659D5" }}>
                  See All
                </button>
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
              <h6>Knitting, Core tailoring training, Fashion skills.</h6>
            </div>
          </Col>
          <Col lg="4" md="6" sm="12">
            <div className="course__item" style={courseItemStyle}>
              <img src={courseImg2} alt="Make-up" style={courseImageStyle} />
              <h6>Carving, Art skill development,</h6>
            </div>
          </Col>
          <Col lg="4" md="6" sm="12">
            <div className="course__item" style={courseItemStyle}>
              <img
                src={courseImg3}
                alt="Watercolor Painting"
                style={courseImageStyle}
              />
              <h6>Watercolor Painting</h6>
            </div>
          </Col>
        </Row>
        <Row>
          <div className="course__top d-flex justify-content-between align-items-center">
            <div className="course__top__left w-50">
              <h2>Our Demo Videos</h2>
            </div>
          </div>
          <Col lg="4" md="6" sm="12">
            <div className="video__item" style={videoItemStyle}>
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                style={iframeStyle}
                title="Demo Video 1"
                allowFullScreen
              ></iframe>
              <h4>Demo Video 1</h4>
            </div>
          </Col>
          <Col lg="4" md="6" sm="12">
            <div className="video__item" style={videoItemStyle}>
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                style={iframeStyle}
                title="Demo Video 2"
                allowFullScreen
              ></iframe>
              <h4>Demo Video 2</h4>
            </div>
          </Col>
          <Col lg="4" md="6" sm="12">
            <div className="video__item" style={videoItemStyle}>
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                style={iframeStyle}
                title="Demo Video 3"
                allowFullScreen
              ></iframe>
              <h4>Demo Video 3</h4>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
