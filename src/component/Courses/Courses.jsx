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

  const contactSectionStyle = {
    marginBottom: "3rem",
  };

  const inputBoxStyle = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  };

  const inputStyle = {
    width: "49%",
    padding: "0.5rem",
    fontSize: "1rem",
    borderRadius: "0.8rem",
    margin: "0.7rem 0",
  };

  const textareaStyle = {
    width: "100%",
    padding: "1.5rem",
    fontSize: "1rem",
    borderRadius: "0.8rem",
    margin: "0.7rem 0",
  };

  const buttonStyle = {
    marginTop: "2rem",
    cursor: "pointer",
    background: "#3659D5",
    color: "#fff",
    padding: "1rem 2rem",
    border: "none",
    borderRadius: "0.5rem",
  };

  return (
    <section className="courses">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2 id="courses" style={{ color: "#3659d5" }}>
                  Our Courses
                </h2>

                <p>
                  Our courses are tailored to focus not just on technical skills
                  but also on soft skills crucial for personal and professional
                  growth. We emphasize practicality, real-world application, and
                  continuous support to ensure your success.
                </p>
              </div>
              <div className="w-50 text-end">
                <button
                  className="btn"
                  style={{ background: "#3659D5", color: "#fff" }}
                >
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
              <h6>Carving, Art skill development.</h6>
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
              <h2 id="videos" style={{ color: "#3659d5" }}>
                Our Videos
              </h2>
            </div>
          </div>

          <Col lg="4" md="6" sm="12">
            <div className="video__item" style={videoItemStyle}>
              <iframe
                src="https://www.youtube.com/embed/pu3ISle_2Uw"
                style={iframeStyle}
                title="Make-up Tutorial"
                allowFullScreen
              ></iframe>
              <h4>Make-up</h4>
            </div>
          </Col>

          <Col lg="4" md="6" sm="12">
            <div className="video__item" style={videoItemStyle}>
              <iframe
                src="https://www.youtube.com/embed/N4Q2d95pt94"
                style={iframeStyle}
                title="Baking Tutorial"
                allowFullScreen
              ></iframe>
              <h4>Baking</h4>
            </div>
          </Col>

          <Col lg="4" md="6" sm="12">
            <div className="video__item" style={videoItemStyle}>
              <iframe
                src="https://www.youtube.com/embed/F2px1SvHIIM"
                style={iframeStyle}
                title="Tailoring Tutorial"
                allowFullScreen
              ></iframe>
              <h4>Tailoring</h4>
            </div>
          </Col>
          <Col lg="4" md="6" sm="12">
            <div className="video__item" style={videoItemStyle}>
              <iframe
                src="https://www.youtube.com/embed/F2px1SvHIIM"
                style={iframeStyle}
                title="Tailoring Tutorial"
                allowFullScreen
              ></iframe>
              <h4>Tailoring</h4>
            </div>
          </Col>
          <Col lg="4" md="6" sm="12">
            <div className="video__item" style={videoItemStyle}>
              <iframe
                src="https://www.youtube.com/embed/F2px1SvHIIM"
                style={iframeStyle}
                title="Tailoring Tutorial"
                allowFullScreen
              ></iframe>
              <h4>Tailoring</h4>
            </div>
          </Col>
          <Col lg="4" md="6" sm="12">
            <div className="video__item" style={videoItemStyle}>
              <iframe
                src="https://www.youtube.com/embed/F2px1SvHIIM"
                style={iframeStyle}
                title="Tailoring Tutorial"
                allowFullScreen
              ></iframe>
              <h4>Tailoring</h4>
            </div>
          </Col>
        </Row>
        <Row>
          <div className="course__top d-flex justify-content-between align-items-center">
            <div className="course__top__left w-50">
              <h2 id="contact" style={{ color: "#3659d5" }}>
                Contact Us
              </h2>
            </div>
          </div>
          <Col lg="12" className="mb-3">
            <form action="#" style={contactSectionStyle}>
              <div className="input-box" style={inputBoxStyle}>
                <input type="text" placeholder="Full Name" style={inputStyle} />
                <input
                  type="email"
                  placeholder="Email Address"
                  style={inputStyle}
                />
              </div>
              <div className="input-box" style={inputBoxStyle}>
                <input
                  type="number"
                  placeholder="Mobile Number"
                  style={inputStyle}
                />
                <input
                  type="text"
                  placeholder="Email Subject"
                  style={inputStyle}
                />
              </div>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Your Message"
                style={textareaStyle}
              ></textarea>
              <input
                type="submit"
                value="Send Message"
                className="btn"
                style={buttonStyle}
              />
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
