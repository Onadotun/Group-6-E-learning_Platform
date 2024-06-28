import axios from "axios";
import React, { useRef, useState } from "react";
import {
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import "remixicon/fonts/remixicon.css";
import "./Header.css";

const navLinks = [
  { display: "Home", url: "#" },
  { display: "About", url: "#" },
  { display: "Courses", url: "#" },
  { display: "Pages", url: "#" },
  { display: "Blog", url: "#" },
];

const Header = () => {
  const menuRef = useRef();
  const [loginModal, setLoginModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);
  const [signupData, setSignupData] = useState({
    firstname: "",
    surname: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const toggleLoginModal = () => setLoginModal(!loginModal);
  const toggleSignupModal = () => setSignupModal(!signupModal);
  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
        signupData
      );
      console.log(response.data);
    } catch (err) {
      console.error("Error signing up:", err);
    }
  };

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h5
              className="d-flex align-items-center"
              style={{ color: "#3659D5" }}
            >
              SkillSphere™
            </h5>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a href={item.url}>{item.display}</a>
                  </li>
                ))}
                <li className="nav__item">
                  <button
                    className="btn btn-primary"
                    onClick={toggleSignupModal}
                    style={{ background: "#3659d5", border: "1px solid #fff" }}
                  >
                    Sign Up
                  </button>
                </li>
                <li className="nav__item">
                  <button
                    className="btn btn-secondary"
                    onClick={toggleLoginModal}
                    style={{ background: "#3659d5", border: "1px solid #fff" }}
                  >
                    Login
                  </button>
                </li>
              </ul>
            </div>

            <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
                <i className="ri-phone-line"></i> +234 000 00 000
              </p>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i className="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>

      {/* Login Modal */}
      <Modal isOpen={loginModal} toggle={toggleLoginModal}>
        <ModalHeader toggle={toggleLoginModal} style={{ color: "#3659D5" }}>
          Login
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="loginEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="loginEmail"
                placeholder="Enter your email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="loginPassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="loginPassword"
                placeholder="Enter your password"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={toggleLoginModal}
            style={{ background: "#3659D5" }}
          >
            Login
          </Button>
          <Button
            color="secondary"
            onClick={toggleLoginModal}
            style={{ background: "#3659D5" }}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

      {/* Signup Modal */}
      <Modal isOpen={signupModal} toggle={toggleSignupModal}>
        <ModalHeader toggle={toggleSignupModal} style={{ color: "#3659D5" }}>
          Sign Up
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="signupFirstname">Firstname</Label>
              <Input
                type="text"
                name="firstname"
                id="signupFirstname"
                placeholder="Enter your firstname"
                value={signupData.firstname}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="signupSurname">Surname</Label>
              <Input
                type="text"
                name="surname"
                id="signupSurname"
                placeholder="Enter your surname"
                value={signupData.surname}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="signupPhone">Phone Number</Label>
              <Input
                type="tel"
                name="phone"
                id="signupPhone"
                placeholder="Enter your phone number"
                value={signupData.phone}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="signupEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="signupEmail"
                placeholder="Enter your email"
                value={signupData.email}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="signupPassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="signupPassword"
                placeholder="Enter your password"
                value={signupData.password}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="signupConfirmPassword">Confirm Password</Label>
              <Input
                type="password"
                name="confirmPassword"
                id="signupConfirmPassword"
                placeholder="Confirm your password"
                value={signupData.confirmPassword}
                onChange={handleChange}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={handleSignup}
            style={{ background: "#3659D5" }}
          >
            Sign Up
          </Button>
          <Button
            color="secondary"
            onClick={toggleSignupModal}
            style={{ background: "#3659D5" }}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </header>
  );
};

export default Header;
