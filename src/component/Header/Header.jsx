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

  const toggleLoginModal = () => setLoginModal(!loginModal);
  const toggleSignupModal = () => setSignupModal(!signupModal);
  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h5 className="d-flex align-items-center">SkillSphere™</h5>
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
                  >
                    Sign Up
                  </button>
                </li>
                <li className="nav__item">
                  <button
                    className="btn btn-secondary"
                    onClick={toggleLoginModal}
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
        <ModalHeader toggle={toggleLoginModal}>Login</ModalHeader>
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
          <Button color="primary" onClick={toggleLoginModal}>
            Login
          </Button>
          <Button color="secondary" onClick={toggleLoginModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

      {/* Signup Modal */}
      <Modal isOpen={signupModal} toggle={toggleSignupModal}>
        <ModalHeader toggle={toggleSignupModal}>Sign Up</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="signupFirstname">Firstname</Label>
              <Input
                type="text"
                name="firstname"
                id="signupFirstname"
                placeholder="Enter your firstname"
              />
            </FormGroup>
            <FormGroup>
              <Label for="signupSurname">Surname</Label>
              <Input
                type="text"
                name="surname"
                id="signupSurname"
                placeholder="Enter your surname"
              />
            </FormGroup>
            <FormGroup>
              <Label for="signupPhone">Phone Number</Label>
              <Input
                type="tel"
                name="phone"
                id="signupPhone"
                placeholder="Enter your phone number"
              />
            </FormGroup>
            <FormGroup>
              <Label for="signupEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="signupEmail"
                placeholder="Enter your email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="signupPassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="signupPassword"
                placeholder="Enter your password"
              />
            </FormGroup>
            <FormGroup>
              <Label for="signupConfirmPassword">Confirm Password</Label>
              <Input
                type="password"
                name="confirmPassword"
                id="signupConfirmPassword"
                placeholder="Confirm your password"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleSignupModal}>
            Sign Up
          </Button>
          <Button color="secondary" onClick={toggleSignupModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </header>
  );
};

export default Header;
