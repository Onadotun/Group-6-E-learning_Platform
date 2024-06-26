import React, { useRef } from "react";
import { Container } from "reactstrap";
import "remixicon/fonts/remixicon.css";
import "./Header.css";

const navLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "About",
    url: "#",
  },
  {
    display: "Courses",
    url: "#",
  },
  {
    display: "Pages",
    url: "#",
  },
  {
    display: "Blog",
    url: "#",
  },
];

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => {
    menuRef.current.classList.toggle("active__menu");
  };

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className="d-flex align-items-center">
              <i className="ri-pantone-line"></i>Group_6 E-Learning
            </h2>
          </div>
          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a href={item.url}>{item.display}</a>
                  </li>
                ))}
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
    </header>
  );
};

export default Header;